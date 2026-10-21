// Cartes « Savoir » : 50 QCM à une seule bonne réponse.
// Chaque fait vient de src/data/programmes.ts (propositions 2027) ou de src/data/votes.ts
// (votes à l'Assemblée 2022-2026) ; les sources sont reprises telles quelles depuis ces fichiers.

import type { CarteSavoir } from '../types'
import { PROGRAMMES } from '../programmes'
import { VOTES } from '../votes'

export const CARTES_SAVOIR: CarteSavoir[] = [
  /* ---------- Économie ---------- */
  {
    id: 's01',
    type: 'savoir',
    theme: 'economie',
    question: 'Qui veut un impôt sur le revenu à 14 tranches ?',
    options: [
      { id: 'a', libelle: 'PCF' },
      { id: 'b', libelle: 'LFI', juste: true },
      { id: 'c', libelle: 'PS' },
      { id: 'd', libelle: 'Les Écologistes' },
    ],
    explication:
      'C’est LFI : 14 tranches, jusqu’à 82 % sur les très hauts revenus, avec un ISF élargi et une taxe « Zucman » au-delà de 100 M€. Le PCF propose, lui, un barème à 9 tranches.',
    sources: [PROGRAMMES.economie.lfi.sources[0], PROGRAMMES.economie.pcf.sources[0]],
    fiches: ['parti-lfi', 'personnalite-melenchon'],
  },
  {
    id: 's02',
    type: 'savoir',
    theme: 'economie',
    question: '350 € par mois d’allocation familiale dès le premier enfant : qui la promet ?',
    options: [
      { id: 'a', libelle: 'RN' },
      { id: 'b', libelle: 'LR' },
      { id: 'c', libelle: 'Horizons', juste: true },
      { id: 'd', libelle: 'Reconquête' },
    ],
    explication:
      'C’est Horizons, le parti d’Édouard Philippe. Son « pacte fiscal » prévoit aussi 50 Md€ de baisse des impôts de production en échange de 50 Md€ d’aides publiques supprimées.',
    sources: [PROGRAMMES.economie.horizons.sources[0]],
    fiches: ['parti-horizons', 'personnalite-philippe'],
  },
  {
    id: 's03',
    type: 'savoir',
    theme: 'economie',
    question: 'Fusionner la CSG et l’impôt sur le revenu : de qui vient l’idée ?',
    options: [
      { id: 'a', libelle: 'MoDem', juste: true },
      { id: 'b', libelle: 'Renaissance' },
      { id: 'c', libelle: 'LR' },
      { id: 'd', libelle: 'Horizons' },
    ],
    explication:
      'Du MoDem, qui veut aussi déplafonner le quotient familial et défend un impôt minimum mondial sur les bénéfices des entreprises.',
    sources: [PROGRAMMES.economie.modem.sources[0]],
    fiches: ['parti-modem', 'personnalite-bayrou'],
  },
  {
    id: 's04',
    type: 'savoir',
    theme: 'economie',
    question: 'SMIC à 1 600 € net : combien des 10 partis le proposent ?',
    options: [
      { id: 'a', libelle: 'Un seul' },
      { id: 'b', libelle: 'Deux' },
      { id: 'c', libelle: 'Trois', juste: true },
      { id: 'd', libelle: 'Cinq' },
    ],
    explication:
      'Trois : LFI, le PCF et le PS (en 2 ans pour le PS). Les Écologistes visent, eux, un SMIC à 2 000 € brut.',
    sources: [
      PROGRAMMES.economie.lfi.sources[0],
      PROGRAMMES.economie.pcf.sources[0],
      PROGRAMMES.economie.ps.sources[0],
      PROGRAMMES.economie.ecologistes.sources[0],
    ],
    fiches: ['parti-lfi', 'parti-pcf', 'parti-ps'],
  },

  /* ---------- Retraites ---------- */
  {
    id: 's05',
    type: 'savoir',
    theme: 'retraites',
    question: 'Retour à 62 ans ET pension minimale garantie à 1 200 € : dans quel programme ?',
    options: [
      { id: 'a', libelle: 'LFI' },
      { id: 'b', libelle: 'Les Écologistes' },
      { id: 'c', libelle: 'PCF' },
      { id: 'd', libelle: 'PS', juste: true },
    ],
    explication:
      'Celui du PS, qui veut abroger la réforme de 2023. Les Écologistes veulent aussi revenir à 62 ans ; LFI et le PCF visent 60 ans, LFI avec une pension minimale au niveau du SMIC.',
    sources: [
      PROGRAMMES.retraites.ps.sources[0],
      PROGRAMMES.retraites.ecologistes.sources[0],
      PROGRAMMES.retraites.lfi.sources[0],
      PROGRAMMES.retraites.pcf.sources[0],
    ],
    fiches: ['parti-ps', 'personnalite-glucksmann', 'sujet-retraites'],
  },
  {
    id: 's06',
    type: 'savoir',
    theme: 'retraites',
    question: '1 000 € versés à la naissance sur un compte de capitalisation : qui y a pensé ?',
    options: [
      { id: 'a', libelle: 'Renaissance', juste: true },
      { id: 'b', libelle: 'Horizons' },
      { id: 'c', libelle: 'LR' },
      { id: 'd', libelle: 'Reconquête' },
    ],
    explication:
      'Renaissance. Le parti de Gabriel Attal veut aussi supprimer l’âge légal fixe : seule compterait la durée de cotisation, avec un système de malus et de bonus.',
    sources: [PROGRAMMES.retraites.renaissance.sources[0]],
    fiches: ['parti-renaissance', 'personnalite-attal', 'sujet-retraites'],
  },
  {
    id: 's07',
    type: 'savoir',
    theme: 'retraites',
    question: '45 annuités de cotisation : qui veut aller jusque-là ?',
    options: [
      { id: 'a', libelle: 'LR' },
      { id: 'b', libelle: 'Reconquête' },
      { id: 'c', libelle: 'RN' },
      { id: 'd', libelle: 'Horizons', juste: true },
    ],
    explication:
      'Horizons propose 45 annuités et 65 ans, en gardant un départ entre 60 et 64 ans pour un tiers des Français·es selon la pénibilité. Au RN, Jordan Bardella parle de 42 annuités.',
    sources: [PROGRAMMES.retraites.horizons.sources[0], PROGRAMMES.retraites.rn.sources[0]],
    fiches: ['parti-horizons', 'personnalite-philippe', 'sujet-retraites'],
  },
  {
    id: 's08',
    type: 'savoir',
    theme: 'retraites',
    question: 'Partir dès 63 ans, mais avec une décote de 7 % par an : de qui est l’idée ?',
    options: [
      { id: 'a', libelle: 'Bruno Retailleau (LR)', juste: true },
      { id: 'b', libelle: 'Édouard Philippe (Horizons)' },
      { id: 'c', libelle: 'Gabriel Attal (Renaissance)' },
      { id: 'd', libelle: 'Jordan Bardella (RN)' },
    ],
    explication:
      'De Bruno Retailleau : âge minimal à 63 ans avec décote, taux plein automatique à 65 ans et un volet capitalisation pour les jeunes.',
    sources: [PROGRAMMES.retraites.lr.sources[0]],
    fiches: ['parti-lr', 'personnalite-retailleau', 'sujet-retraites'],
  },

  /* ---------- Immigration ---------- */
  {
    id: 's09',
    type: 'savoir',
    theme: 'immigration',
    question: 'Une immigration de travail à points, « à la canadienne » : quel parti la propose ?',
    options: [
      { id: 'a', libelle: 'Horizons' },
      { id: 'b', libelle: 'PS' },
      { id: 'c', libelle: 'RN' },
      { id: 'd', libelle: 'Renaissance', juste: true },
    ],
    explication:
      'Renaissance, avec des quotas d’immigration de travail fixés tous les 2 ans par les partenaires sociaux et le Parlement. Sa ligne : « accueillir moins pour accueillir mieux ».',
    sources: [PROGRAMMES.immigration.renaissance.sources[0]],
    fiches: ['parti-renaissance', 'personnalite-attal', 'sujet-immigration'],
  },
  {
    id: 's10',
    type: 'savoir',
    theme: 'immigration',
    question: 'Un ministère dédié à la « remigration » : dans quel programme ?',
    options: [
      { id: 'a', libelle: 'Reconquête', juste: true },
      { id: 'b', libelle: 'RN' },
      { id: 'c', libelle: 'LR' },
      { id: 'd', libelle: 'Horizons' },
    ],
    explication:
      'Celui de Reconquête, le parti d’Éric Zemmour. Il vise un solde migratoire proche de zéro, voire négatif, la fin du droit du sol et la sortie de la CEDH.',
    sources: [PROGRAMMES.immigration.reconquete.sources[0]],
    fiches: ['parti-reconquete', 'personnalite-zemmour', 'sujet-immigration'],
  },
  {
    id: 's11',
    type: 'savoir',
    theme: 'immigration',
    question: 'Un « verrou Schengen » contre les régularisations massives : qui veut le poser ?',
    options: [
      { id: 'a', libelle: 'Renaissance' },
      { id: 'b', libelle: 'Horizons', juste: true },
      { id: 'c', libelle: 'LR' },
      { id: 'd', libelle: 'RN' },
    ],
    explication:
      'Horizons, qui prévoit aussi une suspension possible de l’asile en cas de crise, des quotas annuels votés par le Parlement et la dénonciation de l’accord franco-algérien de 1968.',
    sources: [PROGRAMMES.immigration.horizons.sources[0]],
    fiches: ['parti-horizons', 'personnalite-philippe', 'sujet-immigration'],
  },
  {
    id: 's12',
    type: 'savoir',
    theme: 'immigration',
    question: 'Immigration légale : Bruno Retailleau veut la limiter à combien de personnes par an ?',
    options: [
      { id: 'a', libelle: 'Moins de 10 000' },
      { id: 'b', libelle: 'Moins de 50 000', juste: true },
      { id: 'c', libelle: 'Moins de 100 000' },
      { id: 'd', libelle: 'Moins de 250 000' },
    ],
    explication:
      'Moins de 50 000 par an, avec la fin du droit du sol automatique, un référendum sur l’immigration et l’AME transformée en aide d’urgence. Le RN évoque, lui, un plafond d’environ 10 000 par an.',
    sources: [PROGRAMMES.immigration.lr.sources[0], PROGRAMMES.immigration.rn.sources[0]],
    fiches: ['parti-lr', 'personnalite-retailleau', 'sujet-immigration'],
  },

  /* ---------- Sécurité ---------- */
  {
    id: 's13',
    type: 'savoir',
    theme: 'securite',
    question: 'Abaisser la majorité pénale à 16 ans : qui le propose ?',
    options: [
      { id: 'a', libelle: 'Renaissance' },
      { id: 'b', libelle: 'Horizons' },
      { id: 'c', libelle: 'RN', juste: true },
      { id: 'd', libelle: 'MoDem' },
    ],
    explication:
      'Le RN, qui veut aussi des peines plancher, la perpétuité réelle et une présomption de légitime défense pour les forces de l’ordre.',
    sources: [PROGRAMMES.securite.rn.sources[0]],
    fiches: ['parti-rn', 'personnalite-bardella'],
  },
  {
    id: 's14',
    type: 'savoir',
    theme: 'securite',
    question: 'Un « état d’urgence anti-trafics », avec bouclage de quartiers : qui le réclame ?',
    options: [
      { id: 'a', libelle: 'Renaissance' },
      { id: 'b', libelle: 'RN' },
      { id: 'c', libelle: 'Horizons' },
      { id: 'd', libelle: 'LR', juste: true },
    ],
    explication:
      'LR et Bruno Retailleau, qui prévoient aussi des fouilles élargies, le retour des courtes peines de prison et des peines plancher pour les crimes graves.',
    sources: [PROGRAMMES.securite.lr.sources[0]],
    fiches: ['parti-lr', 'personnalite-retailleau'],
  },
  {
    id: 's15',
    type: 'savoir',
    theme: 'securite',
    question: '9 000 magistrat·es de plus en 10 ans : qui veut muscler la justice ?',
    options: [
      { id: 'a', libelle: 'PS' },
      { id: 'b', libelle: 'LFI' },
      { id: 'c', libelle: 'Les Écologistes', juste: true },
      { id: 'd', libelle: 'Renaissance' },
    ],
    explication:
      'Les Écologistes. Ils privilégient la prévention sur la répression et proposent aussi un délit d’écocide, un numerus clausus carcéral et la légalisation encadrée du cannabis.',
    sources: [PROGRAMMES.securite.ecologistes.sources[0]],
    fiches: ['parti-ecologistes', 'personnalite-tondelier'],
  },
  {
    id: 's16',
    type: 'savoir',
    theme: 'securite',
    question: '30 000 recrutements pour une police de proximité : qui le propose ?',
    options: [
      { id: 'a', libelle: 'PCF', juste: true },
      { id: 'b', libelle: 'PS' },
      { id: 'c', libelle: 'Horizons' },
      { id: 'd', libelle: 'Renaissance' },
    ],
    explication:
      'Le PCF de Fabien Roussel. Le PS parle aussi de police de proximité « modernisée » ; Horizons promet 10 000 policier·es et gendarmes de plus.',
    sources: [
      PROGRAMMES.securite.pcf.sources[0],
      PROGRAMMES.securite.ps.sources[0],
      PROGRAMMES.securite.horizons.sources[0],
    ],
    fiches: ['parti-pcf', 'personnalite-roussel'],
  },

  /* ---------- Santé ---------- */
  {
    id: 's17',
    type: 'savoir',
    theme: 'sante',
    question: 'Une mutuelle publique à 1 € par jour : qui la propose ?',
    options: [
      { id: 'a', libelle: 'Renaissance', juste: true },
      { id: 'b', libelle: 'PS' },
      { id: 'c', libelle: 'LFI' },
      { id: 'd', libelle: 'Horizons' },
    ],
    explication:
      'Renaissance, qui refuse en revanche la « Grande Sécu ». LFI propose à l’inverse le « 100 % Sécu », avec des mutuelles intégrées à la Sécurité sociale.',
    sources: [PROGRAMMES.sante.renaissance.sources[0], PROGRAMMES.sante.lfi.sources[0]],
    fiches: ['parti-renaissance', 'personnalite-attal'],
  },
  {
    id: 's18',
    type: 'savoir',
    theme: 'sante',
    question: 'Doubler le nombre de professionnel·les de santé mentale remboursé·es : qui s’y engage ?',
    options: [
      { id: 'a', libelle: 'Les Écologistes' },
      { id: 'b', libelle: 'Horizons' },
      { id: 'c', libelle: 'PS', juste: true },
      { id: 'd', libelle: 'LFI' },
    ],
    explication:
      'Le PS, qui veut aussi un plan pluriannuel pour l’hôpital public et la fin de la T2A au profit d’un financement global. Les Écologistes proposent, eux, 1 000 psychologues en santé scolaire.',
    sources: [PROGRAMMES.sante.ps.sources[0], PROGRAMMES.sante.ecologistes.sources[0]],
    fiches: ['parti-ps', 'personnalite-glucksmann'],
  },
  {
    id: 's19',
    type: 'savoir',
    theme: 'sante',
    question: 'Des cliniques mobiles contre les déserts médicaux : quel parti a eu l’idée ?',
    options: [
      { id: 'a', libelle: 'Renaissance' },
      { id: 'b', libelle: 'Horizons' },
      { id: 'c', libelle: 'LR' },
      { id: 'd', libelle: 'MoDem', juste: true },
    ],
    explication:
      'Le MoDem, qui mise aussi sur une prévention ciblée sur les jeunes. Renaissance propose plutôt des incitations à l’installation contre les déserts médicaux.',
    sources: [PROGRAMMES.sante.modem.sources[0], PROGRAMMES.sante.renaissance.sources[0]],
    fiches: ['parti-modem', 'personnalite-bayrou'],
  },
  {
    id: 's20',
    type: 'savoir',
    theme: 'sante',
    question: 'Un plan de 20 milliards d’euros pour la santé : qui le met sur la table ?',
    options: [
      { id: 'a', libelle: 'Reconquête' },
      { id: 'b', libelle: 'RN', juste: true },
      { id: 'c', libelle: 'LR' },
      { id: 'd', libelle: 'PCF' },
    ],
    explication:
      'Le RN, qui veut aussi stopper les fermetures de lits et de maternités et réduire de 10 % la bureaucratie hospitalière.',
    sources: [PROGRAMMES.sante.rn.sources[0]],
    fiches: ['parti-rn', 'personnalite-bardella'],
  },

  /* ---------- Éducation ---------- */
  {
    id: 's21',
    type: 'savoir',
    theme: 'education',
    question: 'Une allocation étudiante de 850 € par mois : qui la propose ?',
    options: [
      { id: 'a', libelle: 'PCF', juste: true },
      { id: 'b', libelle: 'Renaissance' },
      { id: 'c', libelle: 'RN' },
      { id: 'd', libelle: 'LR' },
    ],
    explication:
      'Le PCF, qui veut aussi supprimer la sélection à l’entrée de l’université (type Parcoursup) et allonger le bac pro à 4 ans. Le PS propose de son côté une allocation d’études universelle.',
    sources: [PROGRAMMES.education.pcf.sources[0], PROGRAMMES.education.ps.sources[0]],
    fiches: ['parti-pcf', 'personnalite-roussel'],
  },
  {
    id: 's22',
    type: 'savoir',
    theme: 'education',
    question: '100 000 logements étudiants en 5 ans : qui le promet ?',
    options: [
      { id: 'a', libelle: 'PS' },
      { id: 'b', libelle: 'LFI' },
      { id: 'c', libelle: 'Renaissance' },
      { id: 'd', libelle: 'RN', juste: true },
    ],
    explication:
      'Le RN, qui veut aussi donner la priorité au français, aux maths et à l’histoire à l’école et revaloriser le salaire des enseignant·es.',
    sources: [PROGRAMMES.education.rn.sources[0]],
    fiches: ['parti-rn', 'personnalite-bardella'],
  },
  {
    id: 's23',
    type: 'savoir',
    theme: 'education',
    question: '1 000 établissements publics « libres » : qui veut les créer ?',
    options: [
      { id: 'a', libelle: 'Reconquête' },
      { id: 'b', libelle: 'LR', juste: true },
      { id: 'c', libelle: 'Renaissance' },
      { id: 'd', libelle: 'Horizons' },
    ],
    explication:
      'LR et Bruno Retailleau, avec le retour d’un examen d’entrée en 6e, des groupes de niveau et la fin du passage automatique.',
    sources: [PROGRAMMES.education.lr.sources[0]],
    fiches: ['parti-lr', 'personnalite-retailleau'],
  },
  {
    id: 's24',
    type: 'savoir',
    theme: 'education',
    question: 'Des classes de 19 élèves en primaire (12 en REP) d’ici 2032 : qui le propose ?',
    options: [
      { id: 'a', libelle: 'Les Écologistes', juste: true },
      { id: 'b', libelle: 'LFI' },
      { id: 'c', libelle: 'PS' },
      { id: 'd', libelle: 'PCF' },
    ],
    explication:
      'Les Écologistes, qui promettent aussi +15 % de salaire aux enseignant·es sur 5 ans. Le PS propose +20 % pour les nouveaux titulaires, Horizons +20 % pour les enseignant·es.',
    sources: [
      PROGRAMMES.education.ecologistes.sources[0],
      PROGRAMMES.education.ps.sources[0],
      PROGRAMMES.education.horizons.sources[0],
    ],
    fiches: ['parti-ecologistes', 'personnalite-tondelier'],
  },

  /* ---------- Écologie ---------- */
  {
    id: 's25',
    type: 'savoir',
    theme: 'ecologie',
    question: 'Nationaliser TotalEnergies et Engie, en plus d’EDF : qui le propose ?',
    options: [
      { id: 'a', libelle: 'Les Écologistes' },
      { id: 'b', libelle: 'PS' },
      { id: 'c', libelle: 'RN' },
      { id: 'd', libelle: 'PCF', juste: true },
    ],
    explication:
      'Le PCF, qui prévoit aussi 140 Md€ par an pour le climat et une baisse de 30 % des prix de l’électricité et du gaz.',
    sources: [PROGRAMMES.ecologie.pcf.sources[0]],
    fiches: ['parti-pcf', 'personnalite-roussel'],
  },
  {
    id: 's26',
    type: 'savoir',
    theme: 'ecologie',
    question: 'La neutralité carbone dès 2040 : qui vise cette date ?',
    options: [
      { id: 'a', libelle: 'Les Écologistes', juste: true },
      { id: 'b', libelle: 'PS' },
      { id: 'c', libelle: 'Renaissance' },
      { id: 'd', libelle: 'MoDem' },
    ],
    explication:
      'Les Écologistes, qui veulent aussi sortir du nucléaire (via une convention citoyenne) et interdire les « méga-bassines ». Le PS vise -90 % d’émissions en 2040 et la neutralité en 2050.',
    sources: [PROGRAMMES.ecologie.ecologistes.sources[0], PROGRAMMES.ecologie.ps.sources[0]],
    fiches: ['parti-ecologistes', 'personnalite-tondelier', 'sujet-nucleaire'],
  },
  {
    id: 's27',
    type: 'savoir',
    theme: 'ecologie',
    question: 'Un million de voitures électriques à 100 € par mois en leasing social : qui le propose ?',
    options: [
      { id: 'a', libelle: 'Les Écologistes' },
      { id: 'b', libelle: 'LFI' },
      { id: 'c', libelle: 'PS', juste: true },
      { id: 'd', libelle: 'PCF' },
    ],
    explication:
      'Le PS, qui veut aussi de nouveaux EPR en complément des renouvelables. Sa doctrine : « nucléaire autant que nécessaire, renouvelables autant que possible ».',
    sources: [PROGRAMMES.ecologie.ps.sources[0]],
    fiches: ['parti-ps', 'personnalite-glucksmann', 'sujet-nucleaire'],
  },
  {
    id: 's28',
    type: 'savoir',
    theme: 'ecologie',
    question: '500 milliards d’euros pour le nucléaire : quel parti met le paquet ?',
    options: [
      { id: 'a', libelle: 'LR' },
      { id: 'b', libelle: 'RN' },
      { id: 'c', libelle: 'Horizons' },
      { id: 'd', libelle: 'Reconquête', juste: true },
    ],
    explication:
      'Reconquête, qui veut aussi supprimer les subventions éoliennes et annuler l’interdiction des moteurs thermiques en 2035. LR mise lui aussi sur le nucléaire (prolongation des réacteurs, EPR2, relance d’Astrid).',
    sources: [PROGRAMMES.ecologie.reconquete.sources[0], PROGRAMMES.ecologie.lr.sources[0]],
    fiches: ['parti-reconquete', 'personnalite-zemmour', 'sujet-nucleaire'],
  },

  /* ---------- Europe ---------- */
  {
    id: 's29',
    type: 'savoir',
    theme: 'europe',
    question: 'Une Constitution européenne et un président de l’UE élu au suffrage universel : qui en rêve ?',
    options: [
      { id: 'a', libelle: 'Renaissance' },
      { id: 'b', libelle: 'MoDem', juste: true },
      { id: 'c', libelle: 'PS' },
      { id: 'd', libelle: 'Les Écologistes' },
    ],
    explication:
      'Le MoDem, qui veut aussi des ressources propres pour l’UE (taxes GAFAM, carbone, sur les transactions financières) et la fin de la règle de l’unanimité.',
    sources: [PROGRAMMES.europe.modem.sources[0]],
    fiches: ['parti-modem', 'personnalite-bayrou', 'sujet-europe'],
  },
  {
    id: 's30',
    type: 'savoir',
    theme: 'europe',
    question: 'Remplacer la Commission européenne par un simple secrétariat : qui le propose ?',
    options: [
      { id: 'a', libelle: 'RN' },
      { id: 'b', libelle: 'LFI' },
      { id: 'c', libelle: 'Reconquête', juste: true },
      { id: 'd', libelle: 'LR' },
    ],
    explication:
      'Reconquête, qui défend la primauté du droit national et refuse tout nouvel élargissement de l’Union européenne.',
    sources: [PROGRAMMES.europe.reconquete.sources[0]],
    fiches: ['parti-reconquete', 'personnalite-zemmour', 'sujet-europe'],
  },
  {
    id: 's31',
    type: 'savoir',
    theme: 'europe',
    question: 'Des « États-Unis d’Europe » autour d’un noyau de 8 à 10 pays : de qui est ce projet ?',
    options: [
      { id: 'a', libelle: 'PS' },
      { id: 'b', libelle: 'Les Écologistes' },
      { id: 'c', libelle: 'MoDem' },
      { id: 'd', libelle: 'Renaissance', juste: true },
    ],
    explication:
      'De Renaissance, qui défend aussi un agenda de compétitivité inspiré du rapport Draghi.',
    sources: [PROGRAMMES.europe.renaissance.sources[0]],
    fiches: ['parti-renaissance', 'personnalite-attal', 'sujet-europe'],
  },
  {
    id: 's32',
    type: 'savoir',
    theme: 'europe',
    question: 'Face à l’UE, un « plan A, plan B » et la « désobéissance européenne » : quel parti ?',
    options: [
      { id: 'a', libelle: 'LFI', juste: true },
      { id: 'b', libelle: 'PCF' },
      { id: 'c', libelle: 'RN' },
      { id: 'd', libelle: 'Reconquête' },
    ],
    explication:
      'LFI : refonder radicalement les traités et ne plus appliquer les règles de déficit et de dette. Le PCF propose plutôt un référendum, sans sortie de l’UE ; le RN a abandonné le Frexit mais conteste les contraintes « de l’intérieur ».',
    sources: [PROGRAMMES.europe.lfi.sources[0], PROGRAMMES.europe.pcf.sources[0], PROGRAMMES.europe.rn.sources[0]],
    fiches: ['parti-lfi', 'personnalite-melenchon', 'sujet-europe'],
  },

  /* ---------- Défense ---------- */
  {
    id: 's33',
    type: 'savoir',
    theme: 'defense',
    question: 'LFI et le PCF veulent sortir de l’OTAN. Lequel réclame aussi sa dissolution ?',
    options: [
      { id: 'a', libelle: 'LFI' },
      { id: 'b', libelle: 'PCF', juste: true },
      { id: 'c', libelle: 'Les deux' },
      { id: 'd', libelle: 'Aucun des deux' },
    ],
    explication:
      'Le PCF, qui veut aussi que la France signe le traité d’interdiction des armes nucléaires (TIAN). LFI prévoit une sortie « par étapes » et une doctrine de non-alignement.',
    sources: [PROGRAMMES.defense.pcf.sources[0], PROGRAMMES.defense.lfi.sources[0]],
    fiches: ['parti-pcf', 'personnalite-roussel', 'parti-lfi'],
  },
  {
    id: 's34',
    type: 'savoir',
    theme: 'defense',
    question: 'Une armée de terre à 100 000 soldats opérationnels : qui le propose ?',
    options: [
      { id: 'a', libelle: 'RN' },
      { id: 'b', libelle: 'LR' },
      { id: 'c', libelle: 'Reconquête', juste: true },
      { id: 'd', libelle: 'Horizons' },
    ],
    explication:
      'Reconquête, qui vise un budget de défense de 70 Md€ par an d’ici 2030. Comme le RN, il veut quitter le commandement intégré de l’OTAN.',
    sources: [PROGRAMMES.defense.reconquete.sources[0], PROGRAMMES.defense.rn.sources[0]],
    fiches: ['parti-reconquete', 'personnalite-zemmour'],
  },
  {
    id: 's35',
    type: 'savoir',
    theme: 'defense',
    question: 'Un fonds européen de défense de 500 milliards d’euros : qui le propose ?',
    options: [
      { id: 'a', libelle: 'PS', juste: true },
      { id: 'b', libelle: 'MoDem' },
      { id: 'c', libelle: 'Renaissance' },
      { id: 'd', libelle: 'Horizons' },
    ],
    explication:
      'Le PS, qui envisage aussi d’étendre la dissuasion nucléaire française aux partenaires de l’UE. Il juge l’OTAN « politiquement morte » sous Trump, sans prôner d’en sortir.',
    sources: [PROGRAMMES.defense.ps.sources[0]],
    fiches: ['parti-ps', 'personnalite-glucksmann', 'sujet-europe'],
  },
  {
    id: 's36',
    type: 'savoir',
    theme: 'defense',
    question: 'Un bouclier anti-missile européen : quel parti le défend ?',
    options: [
      { id: 'a', libelle: 'Renaissance' },
      { id: 'b', libelle: 'Horizons' },
      { id: 'c', libelle: 'LR' },
      { id: 'd', libelle: 'MoDem', juste: true },
    ],
    explication:
      'Le MoDem, qui préfère mutualiser les dépenses militaires à l’échelle européenne plutôt qu’un effort national isolé, et soutient la poursuite du désarmement nucléaire.',
    sources: [PROGRAMMES.defense.modem.sources[0]],
    fiches: ['parti-modem', 'personnalite-bayrou', 'sujet-europe'],
  },

  /* ---------- Institutions ---------- */
  {
    id: 's37',
    type: 'savoir',
    theme: 'institutions',
    question: 'Passer de 577 à 350 député·es : qui veut tailler dans l’Assemblée ?',
    options: [
      { id: 'a', libelle: 'LR' },
      { id: 'b', libelle: 'Renaissance', juste: true },
      { id: 'c', libelle: 'PS' },
      { id: 'd', libelle: 'Les Écologistes' },
    ],
    explication:
      'Renaissance : 350 député·es au lieu de 577, 200 sénateur·rices au lieu de 348, et des référendums annuels à questions multiples. Horizons veut aussi moins de parlementaires, avec 15 % de proportionnelle.',
    sources: [PROGRAMMES.institutions.renaissance.sources[0], PROGRAMMES.institutions.horizons.sources[0]],
    fiches: ['parti-renaissance', 'personnalite-attal'],
  },
  {
    id: 's38',
    type: 'savoir',
    theme: 'institutions',
    question: 'Une « Banque de la démocratie » pour financer les partis : qui la propose ?',
    options: [
      { id: 'a', libelle: 'PS' },
      { id: 'b', libelle: 'LR' },
      { id: 'c', libelle: 'MoDem', juste: true },
      { id: 'd', libelle: 'Renaissance' },
    ],
    explication:
      'Le MoDem, qui défend aussi la proportionnelle pour les député·es, la reconnaissance du vote blanc, les conventions citoyennes et les référendums.',
    sources: [PROGRAMMES.institutions.modem.sources[0]],
    fiches: ['parti-modem', 'personnalite-bayrou'],
  },
  {
    id: 's39',
    type: 'savoir',
    theme: 'institutions',
    question: 'Raphaël Glucksmann veut supprimer le 49.3. Pour le remplacer par quoi ?',
    options: [
      { id: 'a', libelle: 'Un référendum' },
      { id: 'b', libelle: 'Des ordonnances' },
      { id: 'c', libelle: 'Rien du tout' },
      { id: 'd', libelle: 'Un vote de confiance', juste: true },
    ],
    explication:
      'Par un vote de confiance. Le PS propose aussi la proportionnelle et une convention citoyenne constituante ; LFI veut elle aussi supprimer le 49.3.',
    sources: [PROGRAMMES.institutions.ps.sources[0], PROGRAMMES.institutions.lfi.sources[0]],
    fiches: ['personnalite-glucksmann', 'parti-ps', 'sujet-49-3'],
  },
  {
    id: 's40',
    type: 'savoir',
    theme: 'institutions',
    question: 'La « Première République écologique et citoyenne » : qui veut la fonder ?',
    options: [
      { id: 'a', libelle: 'LFI' },
      { id: 'b', libelle: 'Les Écologistes', juste: true },
      { id: 'c', libelle: 'PS' },
      { id: 'd', libelle: 'PCF' },
    ],
    explication:
      'Les Écologistes : fin du présidentialisme, indépendance de la justice sanctuarisée et proportionnelle. LFI veut, elle, une VIe République via une Assemblée constituante.',
    sources: [PROGRAMMES.institutions.ecologistes.sources[0], PROGRAMMES.institutions.lfi.sources[0]],
    fiches: ['parti-ecologistes', 'personnalite-tondelier'],
  },

  /* ---------- Au Parlement (2022-2026) ---------- */
  {
    id: 's41',
    type: 'savoir',
    theme: 'parlement',
    question: 'À combien de voix la réforme des retraites a-t-elle échappé à la censure en 2023 ?',
    options: [
      { id: 'a', libelle: '1 voix' },
      { id: 'b', libelle: '9 voix', juste: true },
      { id: 'c', libelle: '27 voix' },
      { id: 'd', libelle: '50 voix' },
    ],
    explication:
      '9 voix : la motion de censure transpartisane du groupe LIOT a obtenu 278 voix sur les 287 nécessaires. Le texte, passé par le 49.3, a donc été adopté.',
    sources: VOTES.retraites2023.sources,
    fiches: ['sujet-retraites', 'sujet-49-3', 'sujet-motion-de-censure'],
  },
  {
    id: 's42',
    type: 'savoir',
    theme: 'parlement',
    question: 'Retraites 2023 : quel groupe s’est divisé sur la motion de censure ?',
    options: [
      { id: 'a', libelle: 'RN' },
      { id: 'b', libelle: 'PS' },
      { id: 'c', libelle: 'LR', juste: true },
      { id: 'd', libelle: 'MoDem' },
    ],
    explication:
      'LR : 19 député·es sur 61 ont voté la censure. RN, LFI, PS, Écologistes et PCF l’ont votée à l’unanimité ; Renaissance, le MoDem et Horizons, qui soutenaient la réforme, ne l’ont pas votée.',
    sources: VOTES.retraites2023.sources,
    fiches: ['parti-lr', 'sujet-retraites', 'sujet-motion-de-censure'],
  },
  {
    id: 's43',
    type: 'savoir',
    theme: 'parlement',
    question: 'Loi immigration 2023 : RN et LR ont voté pour. Le texte serait quand même passé sans les voix…',
    options: [
      { id: 'a', libelle: '… du RN', juste: true },
      { id: 'b', libelle: '… de LR' },
      { id: 'c', libelle: '… des deux' },
    ],
    explication:
      'Du RN, mais pas de LR. Le texte a été adopté par 349 voix pour, 186 contre et 38 abstentions ; LFI, le PS, les Écologistes et le PCF ont voté contre à l’unanimité.',
    sources: VOTES.immigration2023.sources,
    fiches: ['parti-rn', 'parti-lr', 'sujet-immigration'],
  },
  {
    id: 's44',
    type: 'savoir',
    theme: 'parlement',
    question: 'Décembre 2024 : une motion de censure fait tomber le gouvernement Barnier. Une première depuis…',
    options: [
      { id: 'a', libelle: '1958' },
      { id: 'b', libelle: '1962', juste: true },
      { id: 'c', libelle: '1981' },
      { id: 'd', libelle: '2017' },
    ],
    explication:
      '1962 ! Après un 49.3 sur le budget de la Sécurité sociale, la motion a recueilli 331 voix, avec le RN, LFI, le PS, les Écologistes et le PCF.',
    sources: VOTES.censureBarnier2024.sources,
    fiches: ['sujet-motion-de-censure', 'sujet-49-3'],
  },
  {
    id: 's45',
    type: 'savoir',
    theme: 'parlement',
    question: 'Loi narcotrafic 2025 : un seul groupe a voté contre à l’unanimité. Lequel ?',
    options: [
      { id: 'a', libelle: 'Les Écologistes' },
      { id: 'b', libelle: 'PCF' },
      { id: 'c', libelle: 'RN' },
      { id: 'd', libelle: 'LFI', juste: true },
    ],
    explication:
      'LFI. Le texte a été adopté par 396 voix pour, 68 contre et 34 abstentions : les Écologistes et le PCF se sont surtout abstenus, les autres groupes ont voté pour.',
    sources: VOTES.narcotrafic2025.sources,
    fiches: ['parti-lfi', 'personnalite-melenchon'],
  },
  {
    id: 's46',
    type: 'savoir',
    theme: 'parlement',
    question: 'Loi « industrie verte » (2023) : qui a voté contre, à l’unanimité ?',
    options: [
      { id: 'a', libelle: 'RN et LR' },
      { id: 'b', libelle: 'PS et PCF' },
      { id: 'c', libelle: 'LFI et les Écologistes', juste: true },
      { id: 'd', libelle: 'Renaissance et MoDem' },
    ],
    explication:
      'LFI et les Écologistes ; le PS et le PCF se sont abstenus. Le RN, LR, Renaissance, le MoDem et Horizons ont voté pour : 231 voix pour, 62 contre et 19 abstentions.',
    sources: VOTES.industrieVerte2023.sources,
    fiches: ['parti-lfi', 'parti-ecologistes'],
  },
  {
    id: 's47',
    type: 'savoir',
    theme: 'parlement',
    question: 'Loi Duplomb (2025) : qu’a censuré le Conseil constitutionnel ?',
    options: [
      { id: 'a', libelle: 'Tout le texte' },
      { id: 'b', libelle: 'Rien, le texte a été validé tel quel' },
      { id: 'c', libelle: 'La réintroduction de l’acétamipride, un pesticide interdit', juste: true },
    ],
    explication:
      'La réintroduction de l’acétamipride. Le texte avait été adopté par 316 voix contre 223 (RN et LR pour, LFI, PS, Écologistes et PCF contre) ; une pétition contre lui a dépassé 2,1 millions de signatures.',
    sources: VOTES.duplomb2025.sources,
    fiches: ['parti-lr', 'parti-ecologistes'],
  },
  {
    id: 's48',
    type: 'savoir',
    theme: 'parlement',
    question: 'Aide à mourir, 1re lecture (2025) : quel groupe s’est coupé presque en deux ?',
    options: [
      { id: 'a', libelle: 'Horizons', juste: true },
      { id: 'b', libelle: 'LFI' },
      { id: 'c', libelle: 'RN' },
      { id: 'd', libelle: 'LR' },
    ],
    explication:
      'Horizons : 14 pour, 13 contre, 6 abstentions. Le RN a voté très majoritairement contre (19 pour, 101 contre) ; le volet aide à mourir a été adopté définitivement le 15 juillet 2026 (291 pour, 241 contre).',
    sources: VOTES.finDeVie2025.sources,
    fiches: ['parti-horizons', 'personnalite-philippe'],
  },
  {
    id: 's49',
    type: 'savoir',
    theme: 'parlement',
    question: 'Budget 2026 : combien de 49.3 a-t-il fallu au Premier ministre Sébastien Lecornu ?',
    options: [
      { id: 'a', libelle: 'Un' },
      { id: 'b', libelle: 'Deux' },
      { id: 'c', libelle: 'Trois', juste: true },
      { id: 'd', libelle: 'Cinq' },
    ],
    explication:
      'Trois. Les deux dernières motions de censure ont été rejetées : 260 voix pour celle de la gauche, 135 pour celle du RN.',
    sources: VOTES.budget2026.sources,
    fiches: ['sujet-49-3', 'sujet-motion-de-censure'],
  },
  {
    id: 's50',
    type: 'savoir',
    theme: 'parlement',
    question: 'Budget 2026 : à gauche, quel parti a annoncé qu’il ne voterait pas la censure ?',
    options: [
      { id: 'a', libelle: 'LFI' },
      { id: 'b', libelle: 'PS', juste: true },
      { id: 'c', libelle: 'Les Écologistes' },
      { id: 'd', libelle: 'PCF' },
    ],
    explication:
      'Le PS, tout comme LR : seuls 5 député·es socialistes ont voté la motion de la gauche, qui a été rejetée. Le budget a donc été adopté.',
    sources: VOTES.budget2026.sources,
    fiches: ['parti-ps', 'personnalite-glucksmann', 'sujet-motion-de-censure'],
  },
]
