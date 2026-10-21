// Position politique déduite des réponses aux cartes « Avis ».
//
// Principe, en clair :
// 1. Chaque parti a une place sur l'axe gauche (-1) / droite (+1) (AXE_PARTIS).
// 2. Chaque réponse d'une carte Avis indique les partis dont le programme va dans ce sens ;
//    sa valeur sur l'axe est la moyenne de leurs places.
// 3. Une question compte d'autant plus qu'elle sépare nettement la gauche et la droite
//    (écart entre ses réponses extrêmes). « Je ne sais pas » ne compte pas.
// 4. Ta position = moyenne pondérée de tes réponses. Elle n'est affichée franchement
//    qu'au fil des réponses (confiance), d'où un nuancier neutre au début.
// 5. Proximité avec un parti = part des questions où tu as choisi la même réponse que lui.

import type { CarteAvis, IdParti, OptionAvis } from '../../data/types'

/**
 * Place des partis sur l'axe gauche-droite, dans l'ordre habituel de l'éventail politique.
 * Choix éditorial de l'équipe, à valider : seul l'ordre compte vraiment pour la couleur.
 */
export const AXE_PARTIS: Record<IdParti, number> = {
  pcf: -0.9,
  lfi: -0.85,
  ecologistes: -0.6,
  ps: -0.5,
  modem: 0.05,
  renaissance: 0.15,
  horizons: 0.3,
  lr: 0.6,
  rn: 0.85,
  reconquete: 0.95,
}

export const JE_NE_SAIS_PAS = 'nsp'

/** Identifiant de carte → identifiant de l'option choisie (ou « nsp »). */
export type ReponsesAvis = Record<string, string>

export interface Proximite {
  parti: IdParti
  /** Nombre de questions où tu as répondu comme ce parti. */
  accords: number
  /** Nombre de questions où ce parti a une position et où tu as répondu. */
  communes: number
}

export interface Position {
  /** -1 (gauche) … +1 (droite). */
  score: number
  /** 0 … 1 : grandit avec le nombre de réponses prises en compte. */
  confiance: number
  /** score × confiance : ce que montre le nuancier. */
  intensite: number
  /** Réponses prises en compte (hors « Je ne sais pas »). */
  nbReponses: number
  libelle: string
  /** Partis les plus proches d'abord (au moins 3 questions en commun). */
  proximites: Proximite[]
}

/** Valeur d'une réponse sur l'axe, ou null si aucun parti ne la porte. */
export function valeurOption(option: OptionAvis): number | null {
  if (option.partis.length === 0) return null
  return option.partis.reduce((somme, p) => somme + AXE_PARTIS[p], 0) / option.partis.length
}

/** À quel point une question sépare la gauche et la droite (0 = pas du tout). */
export function pouvoirClivant(carte: CarteAvis): number {
  const valeurs = carte.options.map(valeurOption).filter((v): v is number => v !== null)
  return valeurs.length < 2 ? 0 : Math.max(...valeurs) - Math.min(...valeurs)
}

function libellePosition(intensite: number, nbReponses: number) {
  if (nbReponses < 3) return 'Pas encore de position : réponds à quelques cartes Avis'
  const force = Math.abs(intensite)
  if (force < 0.12) return 'Au centre, ou entre plusieurs camps'
  const cote = intensite < 0 ? 'à gauche' : 'à droite'
  return force < 0.4 ? `Plutôt ${cote}` : `Nettement ${cote}`
}

export function calculerPosition(cartes: CarteAvis[], reponses: ReponsesAvis): Position {
  let somme = 0
  let poids = 0
  let nbReponses = 0
  const parParti = new Map<IdParti, Proximite>()

  for (const carte of cartes) {
    const choix = carte.options.find((o) => o.id === reponses[carte.id])
    if (!choix) continue
    nbReponses++

    const valeur = valeurOption(choix)
    const w = pouvoirClivant(carte)
    if (valeur !== null && w > 0) {
      somme += w * valeur
      poids += w
    }

    for (const option of carte.options) {
      for (const parti of option.partis) {
        const p = parParti.get(parti) ?? { parti, accords: 0, communes: 0 }
        p.communes++
        if (option.id === choix.id) p.accords++
        parParti.set(parti, p)
      }
    }
  }

  const score = poids > 0 ? somme / poids : 0
  const confiance = 1 - Math.exp(-nbReponses / 6)
  const intensite = score * confiance
  const proximites = [...parParti.values()]
    .filter((p) => p.communes >= 3)
    .sort((a, b) => b.accords / b.communes - a.accords / a.communes || b.communes - a.communes)

  return { score, confiance, intensite, nbReponses, libelle: libellePosition(intensite, nbReponses), proximites }
}
