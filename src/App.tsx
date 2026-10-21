import { Labo } from './labo/Labo'
import { useChemin } from './lib/router'
import { Accueil } from './pages/Accueil'

function App() {
  const chemin = useChemin()
  if (chemin === '/labo' || chemin.startsWith('/labo/')) return <Labo chemin={chemin} />
  return <Accueil />
}

export default App
