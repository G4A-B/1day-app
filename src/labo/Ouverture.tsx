import { useRef, useState } from 'react'
import { CARTES, LIBELLES, type TypeCarte } from './cartes'
import { CarteOuverte, type StyleOuverture } from './CarteOuverte'
import { EnteteLabo } from './EnteteLabo'
import { FaceDos } from './FaceDos'

const STYLES: [StyleOuverture, string][] = [
  ['leve', 'Soulever'],
  ['y', 'Retourner'],
  ['x', 'Basculer'],
]

const TYPES: [TypeCarte, string][] = [
  ['savoir', LIBELLES.savoir],
  ['avis', LIBELLES.avis],
]

function Segment<T extends string>(props: {
  libelle: string
  valeur: T
  options: [T, string][]
  onChange: (valeur: T) => void
}) {
  return (
    <div className="segment" role="group" aria-label={props.libelle}>
      {props.options.map(([valeur, texte]) => (
        <button
          key={valeur}
          type="button"
          aria-pressed={valeur === props.valeur}
          onClick={() => props.onChange(valeur)}
        >
          {texte}
        </button>
      ))}
    </div>
  )
}

/** Compare les animations d'ouverture sur une carte seule. */
export function Ouverture() {
  const [style, setStyle] = useState<StyleOuverture>('leve')
  const [type, setType] = useState<TypeCarte>('savoir')
  const [depuis, setDepuis] = useState<DOMRect | null>(null)
  const bouton = useRef<HTMLButtonElement>(null)
  const carte = CARTES.find((c) => c.type === type)!

  return (
    <div className="labo-page ouv-test">
      <EnteteLabo titre="Ouverture" />
      <div className="ouv-test__scene">
        <button
          ref={bouton}
          type="button"
          className={`carte carte--seule${depuis ? ' is-ouverte' : ''}`}
          aria-label={`${carte.theme}, carte ${LIBELLES[carte.type]}. Ouvrir`}
          onClick={() => bouton.current && setDepuis(bouton.current.getBoundingClientRect())}
        >
          <FaceDos carte={carte} />
        </button>
      </div>
      <div className="ouv-test__reglages">
        <Segment libelle="Animation" valeur={style} options={STYLES} onChange={setStyle} />
        <Segment libelle="Type de carte" valeur={type} options={TYPES} onChange={setType} />
        <p className="ouv-test__aide">Touche la carte pour l’ouvrir.</p>
      </div>
      {depuis && <CarteOuverte carte={carte} depuis={depuis} style={style} onFermer={() => setDepuis(null)} />}
    </div>
  )
}
