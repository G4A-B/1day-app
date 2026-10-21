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

export function naviguer(chemin: string) {
  if (chemin === window.location.pathname) return
  window.history.pushState(null, '', chemin)
  window.scrollTo(0, 0)
  abonnes.forEach((rappel) => rappel())
}

/** Chemin courant (ex. "/labo/roue"), mis à jour à chaque navigation. */
export function useChemin() {
  return useSyncExternalStore(sAbonner, () => window.location.pathname)
}
