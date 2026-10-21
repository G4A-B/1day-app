// Contenu de démonstration pour les prototypes : ce ne sont pas les vraies cartes.

export type TypeCarte = 'savoir' | 'avis'

export interface CarteDemo {
  id: number
  theme: string
  type: TypeCarte
}

export interface OptionDemo {
  id: string
  libelle: string
  juste?: boolean
}

export interface QuestionDemo {
  intitule: string
  options: OptionDemo[]
  contexte: string
  source: string
}

const THEMES = [
  'Écologie', 'Logement', 'Éducation', 'Santé', 'Travail', 'Retraites',
  'Sécurité', 'Justice', 'Immigration', 'Europe', 'Économie', 'Impôts',
  'Numérique', 'Culture', 'Agriculture', 'Énergie', 'Transports', 'Institutions',
  'Égalité', 'Défense', 'Jeunesse', 'Outre-mer', 'Recherche', 'Médias',
]

export const CARTES: CarteDemo[] = THEMES.map((theme, i) => ({
  id: i + 1,
  theme,
  type: i % 3 === 1 ? 'avis' : 'savoir',
}))

export const LIBELLES: Record<TypeCarte, string> = { savoir: 'Savoir', avis: 'Avis' }

/** Une question par type de carte, la même pour tous les thèmes. */
export const QUESTIONS: Record<TypeCarte, QuestionDemo> = {
  savoir: {
    intitule: 'Combien de tours peut compter l’élection présidentielle ?',
    options: [
      { id: 'a', libelle: 'Un seul' },
      { id: 'b', libelle: 'Deux au maximum', juste: true },
      { id: 'c', libelle: 'Trois' },
    ],
    contexte:
      'Si personne n’obtient plus de la moitié des suffrages exprimés au premier tour, les deux candidat·es arrivé·es en tête s’affrontent au second tour, deux semaines plus tard.',
    source: 'Constitution du 4 octobre 1958, article 7',
  },
  avis: {
    intitule: 'Faut-il permettre de voter dès 16 ans ?',
    options: [
      { id: 'oui', libelle: 'Oui' },
      { id: 'non', libelle: 'Non' },
      { id: 'nsp', libelle: 'Je ne sais pas' },
    ],
    contexte:
      'En France, le droit de vote est fixé à 18 ans depuis 1974. En Autriche, on peut voter dès 16 ans à toutes les élections depuis 2007.',
    source: 'Loi n° 74-631 du 5 juillet 1974',
  },
}
