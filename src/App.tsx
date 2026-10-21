import { Labo } from './labo/Labo'
import { useChemin } from './lib/router'

// Pour l'instant, l'accueil est la liste des tests d'animation (on choisit la variante).
function App() {
  const chemin = useChemin()
  return <Labo chemin={chemin} />
}

export default App
