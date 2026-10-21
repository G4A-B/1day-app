import { ListeSources } from '../../components/ListeSources'
import type { IdFiche, Source } from '../../data/types'
import { LiensFiches } from './LiensFiches'
import './fiches.css'

/** Bloc « Pour aller plus loin » : fiches liées puis sources. */
export function PlusLoin({ fiches = [], sources }: { fiches?: IdFiche[]; sources: Source[] }) {
  return (
    <div className="plus-loin">
      {fiches.length > 0 && (
        <>
          <p className="plus-loin__titre">Pour aller plus loin</p>
          <LiensFiches ids={fiches} />
        </>
      )}
      <p className="plus-loin__titre">Sources</p>
      <ListeSources sources={sources} />
    </div>
  )
}
