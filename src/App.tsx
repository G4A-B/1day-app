import { Collection } from './features/collection/Collection'
import { FicheVue } from './features/fiches/FicheVue'
import { Paquet } from './features/paquet/Paquet'
import { cheminDeFond, useChemin } from './lib/router'

// Le paquet reste toujours affiché ; la collection et les fiches s'ouvrent par-dessus.
// Routes : /collection, /collection/avis, /fiche/<id>.
function App() {
  const chemin = useChemin()
  const fond = cheminDeFond(chemin)
  const fiche = chemin.match(/^\/fiche\/([^/]+)/)?.[1]
  const collection = fond.startsWith('/collection') ? (fond.startsWith('/collection/avis') ? 'avis' : 'savoir') : null

  return (
    <>
      <Paquet />
      {collection && <Collection onglet={collection} />}
      {fiche && <FicheVue key={fiche} id={decodeURIComponent(fiche)} />}
    </>
  )
}

export default App
