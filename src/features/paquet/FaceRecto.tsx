import { LIBELLES_CARTE, numeroCarte } from '../../data/contenu'
import { THEMES } from '../../data/themes'
import type { Carte } from '../../data/types'

/** Recto d'une carte : le type, puis le thème en petit juste au-dessus de la question. Tailles relatives à la carte (cqi). */
export function FaceRecto({ carte }: { carte: Carte }) {
  return (
    <div className={`surface surface--${carte.type} theme--${carte.theme} recto`}>
      <span className="recto__type">{LIBELLES_CARTE[carte.type]}</span>
      <span className="recto__bloc">
        <span className="recto__theme">{THEMES[carte.theme].libelle}</span>
        <span className="recto__question">{carte.question}</span>
      </span>
      <span className="recto__pied">n° {numeroCarte(carte)}</span>
    </div>
  )
}
