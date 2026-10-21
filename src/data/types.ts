/**
 * Types de base des données de 1day-app.
 *
 * Règle : toute donnée affichée doit citer au moins une source
 * (URL + date de consultation). Le type `Sources` l'impose :
 * une liste vide provoque une erreur TypeScript.
 */

/** Date au format ISO « AAAA-MM-JJ », ex. "2026-10-21". */
export type DateISO = string

/** Origine d'une information. */
export interface Source {
  /** Adresse de la page consultée. */
  url: string
  /** Date à laquelle la page a été consultée. */
  consulteeLe: DateISO
  /** Titre de la page ou du document. */
  titre?: string
  /** Organisme qui publie (ministère, parti, média…). */
  editeur?: string
}

/** Au moins une source, jamais zéro. */
export type Sources = [Source, ...Source[]]

/** Tout objet affiché à l'écran porte ses sources. */
export interface AvecSources {
  sources: Sources
}

export type TypeElection =
  | 'presidentielle'
  | 'legislatives'
  | 'europeennes'
  | 'municipales'
  | 'departementales'
  | 'regionales'

export interface Election extends AvecSources {
  id: string
  type: TypeElection
  /** Nom affiché, ex. « Élection présidentielle 2027 ». */
  nom: string
  /** Territoire concerné, ex. « France », « Lyon ». */
  territoire: string
  premierTour: DateISO
  secondTour?: DateISO
}

export interface Candidature extends AvecSources {
  id: string
  electionId: Election['id']
  /** Personne candidate ou tête de liste. */
  nom: string
  /** Parti, mouvement ou liste. */
  formation?: string
  /** Territoire de la candidature si différent de celui de l'élection (circonscription…). */
  territoire?: string
}

/** Catégorie éditoriale (éducation, logement, climat…), définie par l'équipe. */
export interface Theme {
  id: string
  libelle: string
  description?: string
}

export interface Proposition extends AvecSources {
  id: string
  candidatureId: Candidature['id']
  themeId: Theme['id']
  /** Proposition résumée en une phrase. */
  intitule: string
  /** Explication plus longue, en langage simple. */
  detail?: string
}
