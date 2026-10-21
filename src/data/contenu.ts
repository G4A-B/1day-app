// Point d'entrée du contenu : toutes les cartes et toutes les fiches, indexées par identifiant.

import { CARTES_AVIS } from './cartes/avis'
import { CARTES_SAVOIR } from './cartes/savoir'
import { FICHES } from './fiches'
import type { Carte, Fiche, IdFiche, TypeFiche } from './types'

export const CARTES: Carte[] = [...CARTES_SAVOIR, ...CARTES_AVIS]

export const CARTES_PAR_ID: Record<string, Carte> = Object.fromEntries(CARTES.map((c) => [c.id, c]))

export const FICHES_PAR_ID = Object.fromEntries(FICHES.map((f) => [f.id, f])) as Record<IdFiche, Fiche>

export const LIBELLES_CARTE: Record<Carte['type'], string> = { savoir: 'Savoir', avis: 'Avis' }

export const LIBELLES_FICHE: Record<TypeFiche, string> = { parti: 'Parti', personnalite: 'Personnalité', sujet: 'Sujet' }

/** Numéro affiché au dos de la carte (« s07 » → « 07 »). */
export function numeroCarte(carte: Carte) {
  return carte.id.slice(1)
}
