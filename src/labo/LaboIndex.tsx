import { Lien } from '../components/Lien'
import { VARIANTES } from './variantes'

function revoirSplash() {
  try {
    sessionStorage.removeItem('splash-vu')
  } catch {
    // stockage indisponible : le splash se joue de toute façon
  }
  window.location.reload()
}

export function LaboIndex() {
  return (
    <div className="labo-page">
      <main className="labo-index">
        <img className="labo-index__logo" src="/logo.svg" alt="Poléa" width="426" height="152" />
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
          <li>
            <button type="button" className="labo-lien" onClick={revoirSplash}>
              <span className="labo-lien__titre">Splash screen</span>
              <span className="labo-lien__desc">Revoir l’animation de lancement.</span>
            </button>
          </li>
        </ol>
      </main>
    </div>
  )
}
