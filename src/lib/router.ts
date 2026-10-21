import { useSyncExternalStore } from 'react'

// Navigation minimale par URL, sans dépendance : on change l'adresse avec
// l'API History et on prévient les composants abonnés.

const abonnes = new Set<() => void>()

function sAbonner(rappel: () => void) {
  abonnes.add(rappel)
  window.addEventListener('popstate', rappel)
  return () => {
    abonnes.delete(rappel)
    window.removeEventListener('popstate', rappel)
  }
}

function prevenir() {
  abonnes.forEach((rappel) => rappel())
}

interface EtatHistorique {
  /** Entrée créée par l'app (on peut revenir en arrière sans la quitter). */
  interne?: boolean
  /** Pour une fiche : l'écran affiché en dessous. */
  fond?: string
}

function etatCourant(): EtatHistorique {
  return (window.history.state as EtatHistorique | null) ?? {}
}

/** Va vers un chemin de l'app. `remplacer` : sans ajouter d'étape à l'historique. */
export function naviguer(chemin: string, { remplacer = false } = {}) {
  if (chemin === window.location.pathname) return
  // Une fiche s'ouvre par-dessus l'écran en cours, qui reste affiché en dessous.
  const fond = chemin.startsWith('/fiche/') ? (etatCourant().fond ?? window.location.pathname) : undefined
  if (remplacer) window.history.replaceState({ ...etatCourant(), fond }, '', chemin)
  else window.history.pushState({ interne: true, fond }, '', chemin)
  prevenir()
}

/** Écran affiché sous une fiche (ou le chemin courant s'il n'y a pas de fiche). */
export function cheminDeFond(chemin: string) {
  return chemin.startsWith('/fiche/') ? (etatCourant().fond ?? '/') : chemin
}

/** Revient à l'écran précédent de l'app (ou à `repli` si on est arrivé directement ici). */
export function revenir(repli = '/') {
  if (etatCourant().interne) window.history.back()
  else naviguer(repli, { remplacer: true })
}

/** Chemin courant (ex. "/collection"), mis à jour à chaque navigation. */
export function useChemin() {
  return useSyncExternalStore(sAbonner, () => window.location.pathname)
}
