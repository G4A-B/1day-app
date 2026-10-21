import { ListeSources } from '../../components/ListeSources'
import { FICHES_PAR_ID, LIBELLES_FICHE } from '../../data/contenu'
import type { IdFiche } from '../../data/types'
import { revenir } from '../../lib/router'
import { LiensFiches } from './LiensFiches'
import './fiches.css'

/** Fiche « Pour aller plus loin » (parti, personnalité ou sujet), par-dessus l'écran en cours. */
export function FicheVue({ id }: { id: string }) {
  const fiche = FICHES_PAR_ID[id as IdFiche]

  return (
    <div className="fiche" role="dialog" aria-modal="true" aria-label={fiche?.titre ?? 'Fiche'}>
      <div className="fiche__voile" onClick={() => revenir('/')} />
      <article className="fiche__panneau">
        <header className="fiche__entete">
          <span>{fiche ? LIBELLES_FICHE[fiche.type] : 'Fiche'}</span>
          <button type="button" className="fiche__fermer" aria-label="Fermer la fiche" onClick={() => revenir('/')}>
            ×
          </button>
        </header>
        {fiche ? (
          <>
            <h1 className="fiche__titre">{fiche.titre}</h1>
            {fiche.sousTitre && <p className="fiche__sous-titre">{fiche.sousTitre}</p>}
            <p className="fiche__resume">{fiche.resume}</p>
            <ul className="fiche__points">
              {fiche.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            {fiche.liees && fiche.liees.length > 0 && (
              <>
                <p className="plus-loin__titre">Voir aussi</p>
                <LiensFiches ids={fiche.liees} />
              </>
            )}
            <p className="plus-loin__titre">Sources</p>
            <ListeSources sources={fiche.sources} />
          </>
        ) : (
          <p className="fiche__resume">Cette fiche n’existe pas (encore).</p>
        )}
      </article>
    </div>
  )
}
