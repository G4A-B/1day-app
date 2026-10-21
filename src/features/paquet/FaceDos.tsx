import { LIBELLES_CARTE, numeroCarte } from '../../data/contenu'
import { THEMES } from '../../data/themes'
import type { Carte } from '../../data/types'

/** Dos d'une carte : type, thème, numéro. Les tailles suivent la largeur de la carte (unités cqi). */
export function FaceDos({ carte }: { carte: Carte }) {
  return (
    <div className={`surface surface--${carte.type} dos`}>
      <span className="dos__type">{LIBELLES_CARTE[carte.type]}</span>
      <span className="dos__theme">{THEMES[carte.theme].libelle}</span>
      <span className="dos__pied">n° {numeroCarte(carte)}</span>
    </div>
  )
}
