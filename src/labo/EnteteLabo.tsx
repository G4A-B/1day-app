import { Lien } from '../components/Lien'

export function EnteteLabo({ titre, droite }: { titre: string; droite?: string }) {
  return (
    <header className="labo-entete">
      <Lien href="/" className="labo-entete__retour">
        ← Tests
      </Lien>
      <h1 className="labo-entete__titre">{titre}</h1>
      <span className="labo-entete__droite">{droite}</span>
    </header>
  )
}
