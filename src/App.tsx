import { useChemin } from './lib/router'
import { Accueil } from './pages/Accueil'

function App() {
  useChemin()
  return <Accueil />
}

export default App
