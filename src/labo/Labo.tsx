import { LaboIndex } from './LaboIndex'
import { Ouverture } from './Ouverture'
import { Paquet } from './Paquet'
import { VARIANTES } from './variantes'
import './labo.css'

/** Routes du labo : / (ou /labo), /labo/<variante>, /labo/ouverture. */
export function Labo({ chemin }: { chemin: string }) {
  const id = chemin.replace(/^\/(labo\/?)?/, '').replace(/\/$/, '')
  if (id === 'ouverture') return <Ouverture />
  const variante = VARIANTES.find((v) => v.id === id)
  if (variante) return <Paquet key={variante.id} variante={variante} />
  return <LaboIndex />
}
