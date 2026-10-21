// Progression de l'utilisateur·ice, enregistrée sur l'appareil (pas de compte pour l'instant) :
// ordre du paquet, cartes Savoir collectées, réponses aux cartes Avis.

import { useSyncExternalStore } from 'react'
import { CARTES } from '../../data/contenu'
import type { DateISO } from '../../data/types'
import type { ReponsesAvis } from '../position/position'

export interface Progression {
  /** Cartes encore dans le paquet, dans l'ordre où elles arrivent. */
  ordre: string[]
  /** Cartes Savoir réussies et ajoutées à la collection (id → date). */
  savoir: Record<string, DateISO>
  /** Réponses aux cartes Avis (id → option choisie, ou « nsp »). */
  avis: ReponsesAvis
}

const CLE = 'polea-progression-v1'
/** Une carte ratée revient entre 10 et 15 cartes plus loin (tiré au hasard). */
const ECART_REPORT_MIN = 10
const ECART_REPORT_MAX = 15

function melanger<T>(liste: T[]): T[] {
  const copie = [...liste]
  for (let i = copie.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copie[i], copie[j]] = [copie[j], copie[i]]
  }
  return copie
}

function aujourdHui(): DateISO {
  return new Date().toISOString().slice(0, 10)
}

/** Remet la progression en accord avec le contenu actuel (cartes ajoutées ou retirées). */
function reconcilier(p: Progression): Progression {
  const existe = new Set(CARTES.map((c) => c.id))
  const vues = new Set([...Object.keys(p.savoir), ...Object.keys(p.avis)])
  const ordre = p.ordre.filter((id) => existe.has(id) && !vues.has(id))
  const dansOrdre = new Set(ordre)
  const nouvelles = CARTES.map((c) => c.id).filter((id) => !dansOrdre.has(id) && !vues.has(id))
  return { ...p, ordre: [...ordre, ...melanger(nouvelles)] }
}

function charger(): Progression {
  try {
    const brut = localStorage.getItem(CLE)
    if (brut) return reconcilier(JSON.parse(brut) as Progression)
  } catch {
    // stockage indisponible ou illisible : on repart de zéro
  }
  return reconcilier({ ordre: [], savoir: {}, avis: {} })
}

function enregistrer(p: Progression) {
  try {
    localStorage.setItem(CLE, JSON.stringify(p))
  } catch {
    // navigation privée : la progression ne survivra pas à la fermeture
  }
}

// À chaque ouverture de l'app, les cartes restantes sont mélangées.
const charge = charger()
let etat: Progression = { ...charge, ordre: melanger(charge.ordre) }
enregistrer(etat)
const abonnes = new Set<() => void>()

function modifier(suivant: Progression) {
  etat = suivant
  enregistrer(etat)
  abonnes.forEach((rappel) => rappel())
}

export function useProgression() {
  return useSyncExternalStore(
    (rappel) => {
      abonnes.add(rappel)
      return () => abonnes.delete(rappel)
    },
    () => etat,
  )
}

/** Carte Savoir réussie : elle quitte le paquet et rejoint la collection. */
export function collecterSavoir(id: string) {
  modifier({ ...etat, ordre: etat.ordre.filter((x) => x !== id), savoir: { ...etat.savoir, [id]: aujourdHui() } })
}

/** Carte à revoir : elle revient entre 10 et 15 cartes plus loin dans le paquet. */
export function reporter(id: string) {
  const sans = etat.ordre.filter((x) => x !== id)
  const depart = Math.max(0, etat.ordre.indexOf(id))
  const ecart = ECART_REPORT_MIN + Math.floor(Math.random() * (ECART_REPORT_MAX - ECART_REPORT_MIN + 1))
  const ordre = [...sans]
  ordre.splice(Math.min(sans.length, depart + ecart), 0, id)
  modifier({ ...etat, ordre })
}

/** Réponse à une carte Avis (aussi pour la modifier depuis la collection). */
export function repondreAvis(id: string, option: string) {
  modifier({ ...etat, avis: { ...etat.avis, [id]: option } })
}

/** Carte jouée : elle quitte le paquet. */
export function retirerDuPaquet(id: string) {
  modifier({ ...etat, ordre: etat.ordre.filter((x) => x !== id) })
}

/** Efface toutes les réponses Avis : les cartes reviennent dans le paquet. */
export function effacerAvis() {
  modifier(reconcilier({ ...etat, avis: {} }))
}
