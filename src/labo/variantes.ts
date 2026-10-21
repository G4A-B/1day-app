export interface Variante {
  id: 'pile' | 'roue' | 'profondeur' | 'table'
  titre: string
  description: string
  consigne: string
  /** 1 : glisser vers le haut fait avancer. -1 : glisser vers le bas fait avancer. */
  sens: 1 | -1
  /** Les cartes déjà passées s'affichent devant (elles s'envolent) ou derrière (roue). */
  ordre: 'devant' | 'symetrique'
}

export const VARIANTES: Variante[] = [
  {
    id: 'pile',
    titre: 'Pile (croquis)',
    description: 'Fidèle à l’esquisse : la pile est au-dessus, on tire la carte vers le bas.',
    consigne: 'Glisse vers le bas pour tirer une carte',
    sens: -1,
    ordre: 'devant',
  },
  {
    id: 'roue',
    titre: 'Roue',
    description: 'Les cartes tournent sur un cylindre, comme un Rolodex.',
    consigne: 'Glisse vers le haut ou le bas pour tourner la roue',
    sens: 1,
    ordre: 'symetrique',
  },
  {
    id: 'profondeur',
    titre: 'Profondeur',
    description: 'Les cartes arrivent du fond, la carte passée s’envole vers le haut.',
    consigne: 'Glisse vers le haut pour passer à la suivante',
    sens: 1,
    ordre: 'devant',
  },
  {
    id: 'table',
    titre: 'Table',
    description: 'Le paquet est posé à plat, la carte du dessus se redresse.',
    consigne: 'Glisse vers le haut pour redresser la carte suivante',
    sens: 1,
    ordre: 'devant',
  },
]
