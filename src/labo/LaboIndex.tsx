import { Lien } from '../components/Lien'
import { VARIANTES } from './variantes'

export function LaboIndex() {
  return (
    <div className="labo-page">
      <main className="labo-index">
        <Lien href="/" className="labo-index__retour">
          ← Accueil
        </Lien>
        <h1 className="labo-index__titre">Tests d’animation</h1>
        <p className="labo-index__intro">
          Prototypes du paquet de cartes, à tester sur téléphone avec le vrai geste. Noir et blanc, contenu de
          démonstration.
        </p>
        <ol className="labo-index__liste">
          {VARIANTES.map((v) => (
            <li key={v.id}>
              <Lien href={`/labo/${v.id}`} className="labo-lien">
                <span className="labo-lien__titre">{v.titre}</span>
                <span className="labo-lien__desc">{v.description}</span>
              </Lien>
            </li>
          ))}
          <li>
            <Lien href="/labo/ouverture" className="labo-lien">
              <span className="labo-lien__titre">Ouverture</span>
              <span className="labo-lien__desc">Comparer 3 animations d’ouverture d’une carte.</span>
            </Lien>
          </li>
        </ol>
      </main>
    </div>
  )
}
