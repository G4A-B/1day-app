import { Lien } from '../components/Lien'
import './Accueil.css'

export function Accueil() {
  return (
    <main className="accueil">
      <h1 className="accueil__titre">Projet 1day-app - G4A / octobre 2026</h1>
      <Lien href="/labo" className="accueil__lien">
        Tests d'animation →
      </Lien>
    </main>
  )
}
