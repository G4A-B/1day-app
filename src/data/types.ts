/**
 * Types de base des données de Poléa.
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

/** Thèmes des cartes et des propositions. */
export type IdTheme =
  | 'economie'
  | 'retraites'
  | 'immigration'
  | 'securite'
  | 'sante'
  | 'education'
  | 'ecologie'
  | 'europe'
  | 'defense'
  | 'institutions'
  | 'parlement'

/** Catégorie éditoriale (éducation, logement, climat…), définie par l'équipe. */
export interface Theme {
  id: IdTheme
  libelle: string
  description?: string
}

/** Les dix partis suivis pour la présidentielle 2027. */
export type IdParti =
  | 'lfi'
  | 'pcf'
  | 'ecologistes'
  | 'ps'
  | 'renaissance'
  | 'horizons'
  | 'modem'
  | 'lr'
  | 'rn'
  | 'reconquete'

export interface Parti extends AvecSources {
  id: IdParti
  /** Nom complet, ex. « La France insoumise ». */
  nom: string
  /** Nom court affiché sur les cartes, ex. « LFI ». */
  sigle: string
  /** Candidat·e identifié·e (ou situation de la candidature). */
  candidature: string
}

/** Proposition d'un parti sur un thème. */
export interface Proposition extends AvecSources {
  /** Propositions clés, telles que résumées dans le document source. */
  texte: string
}

/** Vote d'une loi (ou d'une motion de censure) à l'Assemblée nationale. */
export interface Vote extends AvecSources {
  id: string
  titre: string
  date: DateISO
  /** Ce qui s'est passé, en une ou deux phrases. */
  resume: string
  /** Position de chaque groupe parlementaire, rattaché au parti le plus proche. */
  positions: Partial<Record<IdParti, string>>
}

/* ---------- Cartes du paquet ---------- */

export interface OptionSavoir {
  id: string
  libelle: string
  /** Une seule option juste par carte. */
  juste?: true
}

/** Carte « Savoir » : un QCM, une seule bonne réponse. Nourrit le savoir politique. */
export interface CarteSavoir extends AvecSources {
  id: string
  type: 'savoir'
  theme: IdTheme
  question: string
  options: OptionSavoir[]
  /** Ce qu'il faut retenir, affiché après la réponse (juste ou fausse). */
  explication: string
  /** Fiches « Pour aller plus loin ». */
  fiches?: IdFiche[]
}

export interface OptionAvis {
  id: string
  libelle: string
  /** Partis dont le programme va dans le sens de cette réponse (d'après les sources de la carte). */
  partis: IdParti[]
}

/** Carte « Avis » : pas de bonne réponse. Nourrit la position politique. */
export interface CarteAvis extends AvecSources {
  id: string
  type: 'avis'
  theme: IdTheme
  question: string
  /** 2 à 4 réponses ; « Je ne sais pas » est ajouté automatiquement. */
  options: OptionAvis[]
  /** Contexte affiché après la réponse. */
  contexte: string
  fiches?: IdFiche[]
}

export type Carte = CarteSavoir | CarteAvis

/* ---------- Fiches « Pour aller plus loin » ---------- */

export type TypeFiche = 'parti' | 'personnalite' | 'sujet'

/** Identifiant de fiche : « parti-lfi », « personnalite-bardella », « sujet-retraites »… */
export type IdFiche = `${TypeFiche}-${string}`

export interface Fiche extends AvecSources {
  id: IdFiche
  type: TypeFiche
  titre: string
  /** Ligne sous le titre, ex. « Candidat du RN ». */
  sousTitre?: string
  /** L'essentiel en deux ou trois phrases simples. */
  resume: string
  /** Points clés. */
  points: string[]
  /** Autres fiches liées. */
  liees?: IdFiche[]
}
