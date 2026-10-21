import type { IdTheme, Theme } from './types'

export const THEMES: Record<IdTheme, Theme> = {
  economie: { id: 'economie', libelle: 'Économie', description: 'Fiscalité, salaires et pouvoir d’achat' },
  retraites: { id: 'retraites', libelle: 'Retraites', description: 'Retraites et protection sociale' },
  immigration: { id: 'immigration', libelle: 'Immigration', description: 'Immigration et asile' },
  securite: { id: 'securite', libelle: 'Sécurité', description: 'Sécurité et justice' },
  sante: { id: 'sante', libelle: 'Santé' },
  education: { id: 'education', libelle: 'Éducation' },
  ecologie: { id: 'ecologie', libelle: 'Écologie', description: 'Environnement, énergie et climat' },
  europe: { id: 'europe', libelle: 'Europe' },
  defense: { id: 'defense', libelle: 'Défense', description: 'Défense et international' },
  institutions: { id: 'institutions', libelle: 'Institutions', description: 'Institutions et démocratie' },
  parlement: { id: 'parlement', libelle: 'Au Parlement', description: 'Votes à l’Assemblée nationale (2022-2026)' },
}
