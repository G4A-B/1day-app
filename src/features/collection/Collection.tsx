import { useMemo, useState, type CSSProperties } from 'react'
import { CARTES_AVIS } from '../../data/cartes/avis'
import { CARTES_SAVOIR } from '../../data/cartes/savoir'
import { CARTES_PAR_ID } from '../../data/contenu'
import { PARTIS } from '../../data/partis'
import { useCouleurBarreEtat } from '../../lib/barreEtat'
import { naviguer, revenir } from '../../lib/router'
import { CarteOuverte } from '../paquet/CarteOuverte'
import { FaceDos } from '../paquet/FaceDos'
import { calculerPosition, JE_NE_SAIS_PAS, type Position } from '../position/position'
import { effacerAvis, repondreAvis, useProgression } from './progression'
import './collection.css'

export type Onglet = 'savoir' | 'avis'

/** Fond du nuancier : neutre au début, rouge vers la gauche, bleu vers la droite. */
function styleNuancier(position: Position): CSSProperties {
  const force = Math.min(1, Math.abs(position.intensite))
  const teinte = position.intensite < 0 ? 'var(--color-gauche)' : 'var(--color-droite)'
  return {
    '--fond-collection': `color-mix(in oklab, var(--color-paper-dim), ${teinte} ${Math.round(force * 85)}%)`,
    '--encre-collection': force > 0.42 ? 'var(--color-cream)' : 'var(--color-ink)',
  } as CSSProperties
}

export function Collection({ onglet }: { onglet: Onglet }) {
  const progression = useProgression()
  const [racine, setRacine] = useState<HTMLDivElement | null>(null)
  const [ouverte, setOuverte] = useState<{ id: string; depuis: DOMRect } | null>(null)

  const savoir = CARTES_SAVOIR.filter((c) => c.id in progression.savoir)
  const avis = CARTES_AVIS.filter((c) => c.id in progression.avis)
  const position = useMemo(() => calculerPosition(CARTES_AVIS, progression.avis), [progression.avis])
  const style = onglet === 'avis' ? styleNuancier(position) : undefined
  useCouleurBarreEtat(racine, position.intensite)

  const carteOuverte = ouverte ? CARTES_PAR_ID[ouverte.id] : null

  function ouvrir(id: string, element: HTMLElement) {
    if (!ouverte) setOuverte({ id, depuis: element.getBoundingClientRect() })
  }

  return (
    <div ref={setRacine} className="collection" style={style}>
      <header className="collection__entete">
        <button type="button" className="collection__retour" aria-label="Retour au paquet" onClick={() => revenir('/')}>
          <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
            <path d="M15 5l-7 7 7 7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <h1 className="collection__titre">Ma collection</h1>
      </header>

      <div className="collection__onglets" role="tablist" aria-label="Type de cartes">
        <button
          type="button"
          role="tab"
          aria-selected={onglet === 'savoir'}
          onClick={() => naviguer('/collection', { remplacer: true })}
        >
          Mon savoir · {savoir.length}
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={onglet === 'avis'}
          onClick={() => naviguer('/collection/avis', { remplacer: true })}
        >
          Mes avis · {avis.length}
        </button>
      </div>

      {onglet === 'savoir' ? (
        <section className="collection__contenu" aria-label="Cartes Savoir collectées">
          {savoir.length === 0 ? (
            <p className="collection__vide">
              Réponds juste à une carte Savoir, puis touche « Ajouter à ma collection » : elle s’affichera ici.
            </p>
          ) : (
            <ul className="collection__grille">
              {savoir.map((carte) => (
                <li key={carte.id}>
                  <button
                    type="button"
                    className="vignette"
                    aria-label={`Revoir la carte : ${carte.question}`}
                    onClick={(e) => ouvrir(carte.id, e.currentTarget)}
                  >
                    <FaceDos carte={carte} />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </section>
      ) : (
        <section className="collection__contenu" aria-label="Mes avis et ma position">
          <div className="position">
            <p className="position__titre">Ta position</p>
            <p className="position__libelle">{position.libelle}</p>
            <div className="nuancier" aria-hidden="true">
              <span className="nuancier__repere" style={{ left: `${50 + position.intensite * 50}%` }} />
            </div>
            <div className="nuancier__legende" aria-hidden="true">
              <span>Gauche</span>
              <span>Droite</span>
            </div>
            {position.proximites.length > 0 && (
              <>
                <p className="position__sous-titre">Tes réponses rejoignent le plus :</p>
                <ol className="position__partis">
                  {position.proximites.slice(0, 3).map((p) => (
                    <li key={p.parti}>
                      <button type="button" onClick={() => naviguer(`/fiche/parti-${p.parti}`)}>
                        {PARTIS[p.parti].sigle}
                      </button>{' '}
                      — même réponse sur {p.accords} question{p.accords > 1 ? 's' : ''} sur {p.communes}
                    </li>
                  ))}
                </ol>
              </>
            )}
            <details className="position__methode">
              <summary>Comment c’est calculé ?</summary>
              <p>
                Chaque réponse est rapprochée des partis dont le programme va dans ce sens, d’après les sources de la
                carte. Les partis sont rangés de la gauche vers la droite ; ta position est la moyenne de tes réponses,
                les questions qui séparent le plus la gauche et la droite comptant davantage. « Je ne sais pas » ne
                compte pas, et la couleur ne se marque qu’au fil des réponses.
              </p>
              <p>
                C’est un repère pour t’aider à t’y retrouver, pas une consigne de vote. Tes réponses restent sur ton
                téléphone.
              </p>
            </details>
          </div>

          {avis.length === 0 ? (
            <p className="collection__vide">Réponds à des cartes Avis dans le paquet : ta position se dessinera ici.</p>
          ) : (
            <ul className="avis-liste">
              {avis.map((carte) => {
                const reponse = progression.avis[carte.id]
                const option = carte.options.find((o) => o.id === reponse)
                return (
                  <li key={carte.id}>
                    <button
                      type="button"
                      className="avis-liste__ligne"
                      onClick={(e) => ouvrir(carte.id, e.currentTarget.querySelector('.vignette') ?? e.currentTarget)}
                    >
                      <span className="vignette vignette--mini" aria-hidden="true">
                        <FaceDos carte={carte} />
                      </span>
                      <span className="avis-liste__texte">
                        <span className="avis-liste__question">{carte.question}</span>
                        <span className="avis-liste__reponse">
                          {reponse === JE_NE_SAIS_PAS || !option ? 'Je ne sais pas' : option.libelle}
                        </span>
                      </span>
                    </button>
                  </li>
                )
              })}
            </ul>
          )}
          {avis.length > 0 && (
            <button
              type="button"
              className="collection__effacer"
              onClick={() => {
                if (window.confirm('Effacer toutes tes réponses Avis ? Les cartes reviendront dans le paquet.')) effacerAvis()
              }}
            >
              Effacer mes réponses Avis
            </button>
          )}
        </section>
      )}

      {carteOuverte && ouverte && (
        <CarteOuverte
          key={carteOuverte.id}
          carte={carteOuverte}
          depuis={ouverte.depuis}
          mode={carteOuverte.type === 'savoir' ? 'revision' : 'jeu'}
          onReponse={(option) => carteOuverte.type === 'avis' && repondreAvis(carteOuverte.id, option)}
          onFermer={() => setOuverte(null)}
        />
      )}
    </div>
  )
}
