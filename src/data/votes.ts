// Votes des groupes à l'Assemblée nationale sur des textes marquants (2022-2026).
// Source : document « Votes des partis sur les lois (2022-2026) » compilé par la classe G4A
// (21/10/2026), d'après les scrutins publics de l'Assemblée nationale et datan.fr.
// Les groupes sont rattachés au parti le plus proche : GDR → PCF, Socialistes → PS,
// Ensemble pour la République → Renaissance, Droite Républicaine → LR.
// Reconquête n'a eu aucun député sur la période : aucun vote ne lui est attribué.

import type { Vote } from './types'

const LE = '2026-10-21'

export const VOTES: Record<string, Vote> = {
  retraites2023: {
    id: 'retraites2023',
    titre: 'Réforme des retraites (2023)',
    date: '2023-03-20',
    resume:
      'Texte adopté par le 49.3. La motion de censure transpartisane du groupe LIOT, qui aurait fait tomber la réforme, a échoué à 9 voix près (278 voix sur 287 nécessaires).',
    positions: {
      rn: 'Pour la censure (unanime)',
      lfi: 'Pour la censure (unanime)',
      ps: 'Pour la censure (unanime)',
      ecologistes: 'Pour la censure (unanime)',
      pcf: 'Pour la censure (unanime)',
      lr: 'Divisé : 19 députés sur 61 ont voté la censure',
      renaissance: 'N’a pas voté la censure (soutien à la réforme)',
      modem: 'N’a pas voté la censure (soutien à la réforme)',
      horizons: 'N’a pas voté la censure (soutien à la réforme)',
    },
    sources: [
      { url: 'https://www.assemblee-nationale.fr/dyn/16/scrutins/1240', consulteeLe: LE, titre: 'Scrutin n° 1240', editeur: 'Assemblée nationale' },
      {
        url: 'https://www.franceinfo.fr/economie/retraite/reforme-des-retraites/reforme-des-retraites-quels-deputes-ont-vote-la-motion-de-censure-transpartisane-contre-le-gouvernement_5722457.html',
        consulteeLe: LE,
        editeur: 'franceinfo',
      },
    ],
  },
  immigration2023: {
    id: 'immigration2023',
    titre: 'Loi immigration (2023)',
    date: '2023-12-19',
    resume:
      'Adoptée par 349 voix pour, 186 contre et 38 abstentions. Le texte serait passé sans les voix du RN, mais pas sans celles de LR.',
    positions: {
      rn: 'Pour (unanime)',
      lr: 'Pour (unanime)',
      renaissance: 'Pour, mais divisé (131 pour, 20 contre, 17 abstentions)',
      horizons: 'Pour (quasi unanime)',
      modem: 'Pour, mais divisé (30 pour, 5 contre, 15 abstentions)',
      lfi: 'Contre (unanime)',
      ps: 'Contre (unanime)',
      ecologistes: 'Contre (unanime)',
      pcf: 'Contre (unanime)',
    },
    sources: [
      { url: 'https://www.assemblee-nationale.fr/dyn/16/scrutins/3213', consulteeLe: LE, titre: 'Scrutin n° 3213', editeur: 'Assemblée nationale' },
      {
        url: 'https://www.france24.com/fr/france/20231220-avec-ou-sans-les-voix-du-rassemblement-national-comment-la-loi-immigration-a-pu-%C3%AAtre-vot%C3%A9e',
        consulteeLe: LE,
        editeur: 'France 24',
      },
    ],
  },
  pleinEmploi2023: {
    id: 'pleinEmploi2023',
    titre: 'Loi plein emploi / France Travail (2023)',
    date: '2023-11-14',
    resume: 'Adoptée par 190 voix pour, 147 contre et 5 abstentions.',
    positions: {
      renaissance: 'Pour (unanime)',
      lr: 'Pour (quasi unanime)',
      modem: 'Pour (unanime)',
      horizons: 'Pour (unanime)',
      rn: 'Contre (majoritaire, 49 sur 88)',
      lfi: 'Contre (majoritaire, 50 sur 75)',
      ps: 'Contre (majoritaire, 20 sur 31)',
      ecologistes: 'Contre (majoritaire, 9 sur 23)',
      pcf: 'Contre (majoritaire, 8 sur 22)',
    },
    sources: [{ url: 'https://www.assemblee-nationale.fr/dyn/16/scrutins/2965', consulteeLe: LE, titre: 'Scrutin n° 2965', editeur: 'Assemblée nationale' }],
  },
  industrieVerte2023: {
    id: 'industrieVerte2023',
    titre: 'Loi industrie verte (2023)',
    date: '2023-10-10',
    resume: 'Adoptée définitivement par 231 voix pour, 62 contre et 19 abstentions.',
    positions: {
      lfi: 'Contre (unanime)',
      ecologistes: 'Contre (unanime)',
      ps: 'Abstention (quasi unanime)',
      pcf: 'Abstention',
      renaissance: 'Pour (unanime)',
      modem: 'Pour (unanime)',
      horizons: 'Pour (unanime)',
      lr: 'Pour (quasi unanime)',
      rn: 'Pour (unanime)',
    },
    sources: [
      { url: 'https://datan.fr/votes/legislature-16/vote_2721', consulteeLe: LE, titre: 'Scrutin n° 2721', editeur: 'datan.fr' },
      { url: 'https://lcp.fr/actualites/assemblee-nationale-adoption-du-projet-de-loi-industrie-verte-fin-de-la-session', consulteeLe: LE, editeur: 'LCP' },
    ],
  },
  narcotrafic2025: {
    id: 'narcotrafic2025',
    titre: 'Loi narcotrafic (2025)',
    date: '2025-04-29',
    resume: 'Adoptée définitivement par 396 voix pour, 68 contre et 34 abstentions. Seule LFI s’y est opposée de façon unanime.',
    positions: {
      rn: 'Pour (unanime)',
      renaissance: 'Pour (unanime)',
      ps: 'Pour (quasi unanime)',
      modem: 'Pour (unanime)',
      lr: 'Pour (quasi unanime)',
      horizons: 'Pour (unanime)',
      lfi: 'Contre (unanime)',
      ecologistes: 'Très majoritairement abstention',
      pcf: 'Majoritairement abstention',
    },
    sources: [
      { url: 'https://datan.fr/votes/legislature-17/vote_1473', consulteeLe: LE, editeur: 'datan.fr' },
      {
        url: 'https://lcp.fr/actualites/lutte-contre-le-narcotrafic-la-proposition-de-loi-definitivement-adoptee-par-l-assemblee',
        consulteeLe: LE,
        editeur: 'LCP',
      },
    ],
  },
  censureBarnier2024: {
    id: 'censureBarnier2024',
    titre: 'Censure du gouvernement Barnier (2024)',
    date: '2024-12-04',
    resume:
      'Après un 49.3 sur le budget de la Sécurité sociale, la motion de censure est adoptée avec 331 voix : le gouvernement tombe, une première depuis 1962.',
    positions: {
      rn: 'Pour la censure (unanime)',
      lfi: 'Pour la censure (unanime)',
      ps: 'Pour la censure (65 sur 66)',
      ecologistes: 'Pour la censure (unanime)',
      pcf: 'Pour la censure (unanime)',
      renaissance: 'N’a pas voté la censure',
      horizons: 'N’a pas voté la censure',
      lr: 'N’a pas voté la censure',
      modem: 'N’a pas voté la censure',
    },
    sources: [
      { url: 'https://fr.wikipedia.org/wiki/Motion_de_censure_du_4_d%C3%A9cembre_2024_en_France', consulteeLe: LE, editeur: 'Wikipédia' },
      {
        url: 'https://www.franceinfo.fr/politique/gouvernement-de-michel-barnier/infographies-chute-du-gouvernement-barnier-decouvrez-si-votre-depute-a-vote-pour-ou-contre-la-motion-de-censure_6935420.html',
        consulteeLe: LE,
        editeur: 'franceinfo',
      },
    ],
  },
  finDeVie2025: {
    id: 'finDeVie2025',
    titre: 'Loi sur l’aide à mourir (2025-2026)',
    date: '2025-05-27',
    resume:
      'Volet soins palliatifs adopté à la quasi-unanimité. Volet aide à mourir, bien plus clivant : adopté définitivement le 15 juillet 2026 (291 pour, 241 contre). Positions ci-dessous en première lecture.',
    positions: {
      lfi: 'Pour (quasi unanime)',
      ps: 'Pour (quasi unanime)',
      ecologistes: 'Pour (quasi unanime)',
      pcf: 'Majoritairement pour',
      renaissance: 'Majoritairement pour, divisé (64 pour, 11 contre, 14 abstentions)',
      modem: 'Divisé (20 pour, 9 contre, 7 abstentions)',
      horizons: 'Très divisé (14 pour, 13 contre, 6 abstentions)',
      lr: 'Majoritairement contre (7 pour, 34 contre)',
      rn: 'Très majoritairement contre (19 pour, 101 contre)',
    },
    sources: [
      { url: 'https://www.assemblee-nationale.fr/dyn/17/scrutins/2107', consulteeLe: LE, titre: 'Scrutin n° 2107', editeur: 'Assemblée nationale' },
      { url: 'https://www.assemblee-nationale.fr/dyn/17/scrutins/8280', consulteeLe: LE, titre: 'Scrutin n° 8280', editeur: 'Assemblée nationale' },
    ],
  },
  duplomb2025: {
    id: 'duplomb2025',
    titre: 'Loi Duplomb (2025)',
    date: '2025-07-08',
    resume:
      'Adoptée par 316 voix pour, 223 contre. Le Conseil constitutionnel a censuré la réintroduction de l’acétamipride, un pesticide interdit ; une pétition contre le texte a dépassé 2,1 millions de signatures.',
    positions: {
      rn: 'Pour (unanime)',
      lr: 'Pour (unanime)',
      renaissance: 'Majoritairement pour, divisé (64 pour, 14 contre, 10 abstentions)',
      horizons: 'Pour (majoritaire)',
      modem: 'Pour (majoritaire)',
      lfi: 'Contre (unanime)',
      ps: 'Contre (unanime)',
      ecologistes: 'Contre (unanime)',
      pcf: 'Contre (unanime)',
    },
    sources: [
      { url: 'https://datan.fr/votes/legislature-17/vote_2957', consulteeLe: LE, editeur: 'datan.fr' },
      {
        url: 'https://www.franceinfo.fr/environnement/loi-duplomb/loi-duplomb-le-conseil-constitutionnel-censure-la-reintroduction-de-l-acetamipride-un-pesticide-interdit-au-nom-de-la-charte-de-l-environnement_7423393.html',
        consulteeLe: LE,
        editeur: 'franceinfo',
      },
    ],
  },
  budget2026: {
    id: 'budget2026',
    titre: 'Budget 2026',
    date: '2026-02-02',
    resume:
      'Adopté après trois 49.3 du Premier ministre Sébastien Lecornu. Les deux dernières motions de censure (gauche : 260 voix ; RN : 135 voix) ont été rejetées, le PS et LR ayant annoncé ne pas les voter.',
    positions: {
      rn: 'Pour les deux motions de censure',
      lfi: 'Pour la motion de gauche (unanime)',
      ecologistes: 'Pour la motion de gauche',
      pcf: 'Pour la motion de gauche',
      ps: 'Très minoritairement pour la motion de gauche (5 voix)',
      lr: 'Marginal (1 à 2 voix)',
      renaissance: 'N’a pas voté les motions (soutien au gouvernement)',
      modem: 'N’a pas voté les motions',
      horizons: 'N’a pas voté les motions',
    },
    sources: [
      { url: 'https://www.assemblee-nationale.fr/dyn/17/scrutins/5284', consulteeLe: LE, titre: 'Scrutin n° 5284', editeur: 'Assemblée nationale' },
      { url: 'https://www.assemblee-nationale.fr/dyn/17/scrutins/5285', consulteeLe: LE, titre: 'Scrutin n° 5285', editeur: 'Assemblée nationale' },
      {
        url: 'https://lcp.fr/actualites/le-budget-2026-definitivement-adopte-apres-le-rejet-des-deux-dernieres-motions-de',
        consulteeLe: LE,
        editeur: 'LCP',
      },
    ],
  },
}
