import type { Source } from '../data/types'

function nomSource(source: Source) {
  if (source.editeur) return source.titre ? `${source.editeur} — ${source.titre}` : source.editeur
  if (source.titre) return source.titre
  try {
    return new URL(source.url).hostname.replace(/^www\./, '')
  } catch {
    return source.url
  }
}

/** Liste des sources (liens externes), sans doublon, avec la date de consultation. */
export function ListeSources({ sources }: { sources: Source[] }) {
  const uniques = sources.filter((s, i) => sources.findIndex((t) => t.url === s.url) === i)
  return (
    <ul className="liste-sources">
      {uniques.map((s) => (
        <li key={s.url}>
          <a href={s.url} target="_blank" rel="noopener noreferrer">
            {nomSource(s)}
          </a>
          <span className="liste-sources__date">
            {' '}
            · consulté le {new Date(s.consulteeLe).toLocaleDateString('fr-FR')}
          </span>
        </li>
      ))}
    </ul>
  )
}
