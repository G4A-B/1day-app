import { useEffect } from 'react'

// Barre d'état du téléphone : elle prend la couleur de fond de l'écran affiché,
// et le système choisit tout seul un texte clair (fond foncé) ou foncé (fond clair).

export function colorerBarreEtat(couleur: string) {
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', couleur)
}

/** Applique à la barre d'état la couleur de fond de l'écran affiché dans #root. */
export function colorerBarreEtatSelonEcran() {
  const ecran = document.getElementById('root')?.firstElementChild
  if (!ecran) return
  const fond = getComputedStyle(ecran).backgroundColor
  if (fond && fond !== 'rgba(0, 0, 0, 0)') colorerBarreEtat(fond)
}

/** Pendant qu'un écran est affiché, la barre d'état prend sa couleur ; elle revient ensuite à celle de l'écran principal. */
export function useCouleurBarreEtat(element: HTMLElement | null, dependance?: unknown) {
  useEffect(() => {
    if (!element) return
    colorerBarreEtat(getComputedStyle(element).backgroundColor)
    return () => colorerBarreEtatSelonEcran()
  }, [element, dependance])
}
