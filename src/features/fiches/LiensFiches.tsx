import { FICHES_PAR_ID } from '../../data/contenu'
import type { IdFiche } from '../../data/types'
import { naviguer } from '../../lib/router'
import './fiches.css'

/** Pastilles vers des fiches « Pour aller plus loin ». */
export function LiensFiches({ ids }: { ids: IdFiche[] }) {
  const fiches = ids.map((id) => FICHES_PAR_ID[id]).filter(Boolean)
  if (fiches.length === 0) return null
  return (
    <ul className="liens-fiches">
      {fiches.map((f) => (
        <li key={f.id}>
          <button type="button" className="liens-fiches__lien" onClick={() => naviguer(`/fiche/${f.id}`)}>
            {f.titre}
          </button>
        </li>
      ))}
    </ul>
  )
}
