import { LIBELLES, type CarteDemo } from './cartes'

/** Dos d'une carte : type, thème, numéro. Les tailles suivent la largeur de la carte (unités cqi). */
export function FaceDos({ carte, collectee = false }: { carte: CarteDemo; collectee?: boolean }) {
  return (
    <div className={`surface surface--${carte.type} dos`}>
      <span className="dos__type">{LIBELLES[carte.type]}</span>
      <span className="dos__theme">{carte.theme}</span>
      <span className="dos__pied">
        <span>n° {String(carte.id).padStart(2, '0')}</span>
        {collectee && <span>✓ Collectée</span>}
      </span>
    </div>
  )
}
