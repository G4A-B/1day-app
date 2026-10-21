// Les dix partis suivis, avec leur page officielle de programme ou de propositions.
// Source : document « Programmes et propositions des partis — 2027 » (classe G4A, 21/10/2026).

import type { IdParti, Parti } from './types'

const LE = '2026-10-21'

export const PARTIS: Record<IdParti, Parti> = {
  lfi: {
    id: 'lfi',
    nom: 'La France insoumise',
    sigle: 'LFI',
    candidature: 'Jean-Luc Mélenchon',
    sources: [{ url: 'https://programme.lafranceinsoumise.fr/programme/livre/', consulteeLe: LE, titre: 'L’Avenir en commun', editeur: 'LFI' }],
  },
  pcf: {
    id: 'pcf',
    nom: 'Parti communiste français',
    sigle: 'PCF',
    candidature: 'Fabien Roussel (investi au 40e congrès, juillet 2026)',
    sources: [{ url: 'https://www.fabienroussel2027.fr/', consulteeLe: LE, titre: 'Campagne de Fabien Roussel', editeur: 'PCF' }],
  },
  ecologistes: {
    id: 'ecologistes',
    nom: 'Les Écologistes',
    sigle: 'Écologistes',
    candidature: 'Marine Tondelier (candidature à reconfirmer, vote des adhérents 10-13 décembre 2026)',
    sources: [
      {
        url: 'https://lesecologistes.fr/document/3N4JsAEmq6vsx42IITGNZa/vdef-programme-1.pdf',
        consulteeLe: LE,
        titre: 'Programme 2027',
        editeur: 'Les Écologistes',
      },
    ],
  },
  ps: {
    id: 'ps',
    nom: 'Parti socialiste',
    sigle: 'PS',
    candidature: 'Raphaël Glucksmann (candidat commun PS / Place publique / GRS, primaire du 9-11 octobre 2026)',
    sources: [{ url: 'https://parti-socialiste.fr/', consulteeLe: LE, titre: 'Site officiel', editeur: 'PS' }],
  },
  renaissance: {
    id: 'renaissance',
    nom: 'Renaissance',
    sigle: 'Renaissance',
    candidature: 'Gabriel Attal',
    sources: [{ url: 'https://parti-renaissance.fr/', consulteeLe: LE, titre: 'Site officiel', editeur: 'Renaissance' }],
  },
  horizons: {
    id: 'horizons',
    nom: 'Horizons',
    sigle: 'Horizons',
    candidature: 'Édouard Philippe',
    sources: [{ url: 'https://horizonsleparti.fr/le-manifeste/', consulteeLe: LE, titre: 'Manifeste du parti', editeur: 'Horizons' }],
  },
  modem: {
    id: 'modem',
    nom: 'Mouvement démocrate',
    sigle: 'MoDem',
    candidature: 'Pas de candidat propre : François Bayrou porte un projet de primaire du « grand fleuve central »',
    sources: [{ url: 'https://lesdemocrates.fr/', consulteeLe: LE, titre: 'Site officiel', editeur: 'MoDem' }],
  },
  lr: {
    id: 'lr',
    nom: 'Les Républicains',
    sigle: 'LR',
    candidature: 'Bruno Retailleau (investi le 19 avril 2026)',
    sources: [{ url: 'https://www.avecretailleau.fr/projet', consulteeLe: LE, titre: 'Projet de Bruno Retailleau', editeur: 'LR' }],
  },
  rn: {
    id: 'rn',
    nom: 'Rassemblement national',
    sigle: 'RN',
    candidature: 'Jordan Bardella',
    sources: [
      {
        url: 'https://www.rassemblementnational.fr/documents/202406-programme.pdf',
        consulteeLe: LE,
        titre: 'Programme législatif 2024',
        editeur: 'RN',
      },
    ],
  },
  reconquete: {
    id: 'reconquete',
    nom: 'Reconquête',
    sigle: 'Reconquête',
    candidature: 'Éric Zemmour',
    sources: [
      {
        url: 'https://assets.ericzemmour.fr/ressources/tracts/programme-pour-la-france.pdf',
        consulteeLe: LE,
        titre: 'Programme pour la France',
        editeur: 'Reconquête',
      },
    ],
  },
}

/** Ordre d'affichage : de la gauche vers la droite de l'éventail politique. */
export const ORDRE_PARTIS: IdParti[] = ['pcf', 'lfi', 'ecologistes', 'ps', 'modem', 'renaissance', 'horizons', 'lr', 'rn', 'reconquete']
