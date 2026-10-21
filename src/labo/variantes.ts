export interface Variante {
  id: 'profondeur' | 'table'
  titre: string
  description: string
  consigne: string
}

export const VARIANTES: Variante[] = [
  {
    id: 'profondeur',
    titre: 'Profondeur',
    description: 'Les cartes arrivent du fond, la carte passée s’envole à gauche, à droite ou au milieu.',
    consigne: 'Glisse vers le haut',
  },
  {
    id: 'table',
    titre: 'Table',
    description: 'Le paquet est posé à plat, la carte du dessus se redresse puis s’envole.',
    consigne: 'Glisse vers le haut',
  },
]
