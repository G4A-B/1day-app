// Fiches « Pour aller plus loin » : partis, personnalités et sujets.
// Contenu rédigé uniquement à partir de partis.ts, programmes.ts et votes.ts
// (documents compilés par la classe G4A, 21/10/2026). Aucune URL n'est écrite ici :
// chaque fiche reprend les sources des données qu'elle résume.
//
// Règles éditoriales :
// - même structure pour chaque parti (4 thèmes du programme + 1 vote à l'Assemblée)
//   et pour chaque personnalité (statut au 21/10/2026 + 4 thèmes du programme) ;
// - les fiches partis couvrent l'économie, les retraites, l'immigration et l'écologie,
//   les fiches personnalités la sécurité, la santé, l'éducation et la défense ;
// - pas d'adjectif de jugement, pas d'information extérieure aux sources.

import type { Fiche, IdFiche, Source, Sources } from './types'
import { PARTIS } from './partis'
import { PROGRAMMES } from './programmes'
import { VOTES } from './votes'

/** Regroupe des sources en retirant les doublons (même URL). */
function sources(premiere: Source, ...autres: Source[]): Sources {
  const vues = new Set<string>([premiere.url])
  const suite = autres.filter((s) => {
    if (vues.has(s.url)) return false
    vues.add(s.url)
    return true
  })
  return [premiere, ...suite]
}

const VOTE_RETRAITES = VOTES.retraites2023

/* ---------- Partis ---------- */

const FICHES_PARTIS: Fiche[] = [
  {
    id: 'parti-lfi',
    type: 'parti',
    titre: 'La France insoumise',
    sousTitre: 'Candidat : Jean-Luc Mélenchon',
    resume:
      'Au 21 octobre 2026, La France insoumise (LFI) présente Jean-Luc Mélenchon à l’élection présidentielle de 2027. Voici quelques-unes de ses propositions pour 2027 et la position de ses député·es lors d’un vote marquant : la réforme des retraites de 2023.',
    points: [
      'Économie : SMIC à 1 600 € net, blocage des prix de l’énergie et des produits de première nécessité, impôt sur le revenu à 14 tranches.',
      'Retraites : abrogation de la réforme de 2023 et retour à 60 ans à taux plein avec 40 annuités.',
      'Immigration : régularisation des travailleur·euses sans papiers et des étudiant·es, fin des centres de rétention.',
      'Écologie : « règle verte » inscrite dans la Constitution, 100 % d’énergies renouvelables et sortie progressive du nucléaire.',
      'Vote à l’Assemblée (mars 2023) : le groupe LFI a voté à l’unanimité la motion de censure contre la réforme des retraites.',
    ],
    liees: ['personnalite-melenchon', 'sujet-retraites', 'sujet-immigration', 'sujet-nucleaire', 'sujet-europe', 'sujet-motion-de-censure'],
    sources: sources(
      PARTIS.lfi.sources[0],
      PROGRAMMES.economie.lfi.sources[0],
      PROGRAMMES.retraites.lfi.sources[0],
      PROGRAMMES.immigration.lfi.sources[0],
      PROGRAMMES.ecologie.lfi.sources[0],
      VOTE_RETRAITES.sources[0],
    ),
  },
  {
    id: 'parti-pcf',
    type: 'parti',
    titre: 'Parti communiste français',
    sousTitre: 'Candidat : Fabien Roussel',
    resume:
      'Au 21 octobre 2026, le Parti communiste français (PCF) présente Fabien Roussel à l’élection présidentielle de 2027 ; il a été investi lors du 40e congrès du parti, en juillet 2026. Voici quelques-unes de ses propositions pour 2027 et la position de ses député·es lors d’un vote marquant : la réforme des retraites de 2023.',
    points: [
      'Économie : SMIC à 1 600 € net, semaine de 32 heures, nationalisation des grandes banques et assurances.',
      'Retraites : retour à 60 ans à taux plein et cotisations élargies aux revenus financiers.',
      'Immigration : régularisation des travailleur·euses sans papiers dans les secteurs en tension, voies de migration légales et sûres.',
      'Écologie : 140 Md€ par an pour le climat, nationalisation de TotalEnergies et d’Engie aux côtés d’EDF.',
      'Vote à l’Assemblée (mars 2023) : le groupe GDR, rattaché au PCF, a voté à l’unanimité la motion de censure contre la réforme des retraites.',
    ],
    liees: ['personnalite-roussel', 'sujet-retraites', 'sujet-immigration', 'sujet-nucleaire', 'sujet-europe', 'sujet-motion-de-censure'],
    sources: sources(
      PARTIS.pcf.sources[0],
      PROGRAMMES.economie.pcf.sources[0],
      PROGRAMMES.retraites.pcf.sources[0],
      PROGRAMMES.immigration.pcf.sources[0],
      PROGRAMMES.ecologie.pcf.sources[0],
      VOTE_RETRAITES.sources[0],
    ),
  },
  {
    id: 'parti-ecologistes',
    type: 'parti',
    titre: 'Les Écologistes',
    sousTitre: 'Candidate : Marine Tondelier (à reconfirmer)',
    resume:
      'Au 21 octobre 2026, Les Écologistes présentent Marine Tondelier à l’élection présidentielle de 2027 ; sa candidature doit être reconfirmée par un vote des adhérent·es du 10 au 13 décembre 2026. Voici quelques-unes de leurs propositions pour 2027 et la position de leurs député·es lors d’un vote marquant : la réforme des retraites de 2023.',
    points: [
      'Économie : SMIC à 2 000 € brut, taxe « Zucman » de 2 % au-delà de 100 M€, fiscalité des transports réorientée (avion plus cher, train moins cher).',
      'Retraites : abrogation de la réforme de 2023, retour à 62 ans puis objectif de 60 ans pour les carrières longues et les métiers pénibles.',
      'Immigration : statut de réfugié climatique, voies légales de migration, régularisation des personnes intégrées.',
      'Écologie : sortie du nucléaire (via une convention citoyenne), neutralité carbone en 2040, interdiction des « méga-bassines ».',
      'Vote à l’Assemblée (mars 2023) : le groupe écologiste a voté à l’unanimité la motion de censure contre la réforme des retraites.',
    ],
    liees: ['personnalite-tondelier', 'sujet-retraites', 'sujet-immigration', 'sujet-nucleaire', 'sujet-europe', 'sujet-motion-de-censure'],
    sources: sources(
      PARTIS.ecologistes.sources[0],
      PROGRAMMES.economie.ecologistes.sources[0],
      PROGRAMMES.retraites.ecologistes.sources[0],
      PROGRAMMES.immigration.ecologistes.sources[0],
      PROGRAMMES.ecologie.ecologistes.sources[0],
      VOTE_RETRAITES.sources[0],
    ),
  },
  {
    id: 'parti-ps',
    type: 'parti',
    titre: 'Parti socialiste',
    sousTitre: 'Candidat : Raphaël Glucksmann',
    resume:
      'Au 21 octobre 2026, le Parti socialiste (PS) présente Raphaël Glucksmann à l’élection présidentielle de 2027, candidat commun du PS, de Place publique et de GRS désigné lors de la primaire du 9 au 11 octobre 2026. Voici quelques-unes de ses propositions pour 2027 et la position de ses député·es lors d’un vote marquant : la réforme des retraites de 2023.',
    points: [
      'Économie : SMIC à 1 600 € net en 2 ans, suppression de la flat tax, ISF climat.',
      'Retraites : abrogation de la réforme de 2023, retour à 62 ans, pension minimale garantie à 1 200 €.',
      'Immigration : immigration « pilotée par le Parlement » selon les besoins économiques, carte de séjour pluriannuelle.',
      'Écologie : -90 % d’émissions en 2040, voitures électriques en location à 100 € par mois (leasing social), nouveaux réacteurs EPR en complément des renouvelables.',
      'Vote à l’Assemblée (mars 2023) : le groupe socialiste a voté à l’unanimité la motion de censure contre la réforme des retraites.',
    ],
    liees: ['personnalite-glucksmann', 'sujet-retraites', 'sujet-immigration', 'sujet-nucleaire', 'sujet-europe', 'sujet-motion-de-censure'],
    sources: sources(
      PARTIS.ps.sources[0],
      PROGRAMMES.economie.ps.sources[0],
      PROGRAMMES.retraites.ps.sources[0],
      PROGRAMMES.immigration.ps.sources[0],
      PROGRAMMES.ecologie.ps.sources[0],
      VOTE_RETRAITES.sources[0],
    ),
  },
  {
    id: 'parti-renaissance',
    type: 'parti',
    titre: 'Renaissance',
    sousTitre: 'Candidat : Gabriel Attal',
    resume:
      'Au 21 octobre 2026, Renaissance présente Gabriel Attal à l’élection présidentielle de 2027. Voici quelques-unes de ses propositions pour 2027 et la position de ses député·es lors d’un vote marquant : la réforme des retraites de 2023.',
    points: [
      'Économie : baisse ciblée de 2 Md€ d’impôts pour les classes moyennes, refus de toute hausse d’impôts, déficit visé à zéro en 2037.',
      'Retraites : suppression de l’âge légal fixe au profit de la seule durée de cotisation, 1 000 € versés à la naissance sur un compte de capitalisation.',
      'Immigration : quotas d’immigration de travail fixés tous les 2 ans, système à points à la canadienne.',
      'Écologie : -50 % d’émissions en 10 ans grâce au nucléaire et aux renouvelables, sans objectif de 100 % renouvelable.',
      'Vote à l’Assemblée (mars 2023) : le groupe Renaissance n’a pas voté la motion de censure contre la réforme des retraites, qu’il soutenait.',
    ],
    liees: ['personnalite-attal', 'sujet-retraites', 'sujet-immigration', 'sujet-nucleaire', 'sujet-europe', 'sujet-motion-de-censure'],
    sources: sources(
      PARTIS.renaissance.sources[0],
      PROGRAMMES.economie.renaissance.sources[0],
      PROGRAMMES.retraites.renaissance.sources[0],
      PROGRAMMES.immigration.renaissance.sources[0],
      PROGRAMMES.ecologie.renaissance.sources[0],
      VOTE_RETRAITES.sources[0],
    ),
  },
  {
    id: 'parti-horizons',
    type: 'parti',
    titre: 'Horizons',
    sousTitre: 'Candidat : Édouard Philippe',
    resume:
      'Au 21 octobre 2026, Horizons présente Édouard Philippe à l’élection présidentielle de 2027. Voici quelques-unes de ses propositions pour 2027 et la position de ses député·es lors d’un vote marquant : la réforme des retraites de 2023.',
    points: [
      'Économie : 50 Md€ de baisse des impôts de production contre 50 Md€ d’aides publiques supprimées, allocation familiale unique de 350 € par mois dès le 1er enfant.',
      'Retraites : passage progressif à 65 ans et 45 annuités, avec un départ entre 60 et 64 ans maintenu pour un tiers des Français·es selon la pénibilité.',
      'Immigration : quotas annuels votés par le Parlement, « verrou Schengen » contre les régularisations massives, dénonciation de l’accord franco-algérien de 1968.',
      'Écologie : maintien du nucléaire et développement des renouvelables, mécanisme d’ajustement carbone aux frontières européennes.',
      'Vote à l’Assemblée (mars 2023) : le groupe Horizons n’a pas voté la motion de censure contre la réforme des retraites, qu’il soutenait.',
    ],
    liees: ['personnalite-philippe', 'sujet-retraites', 'sujet-immigration', 'sujet-nucleaire', 'sujet-europe', 'sujet-motion-de-censure'],
    sources: sources(
      PARTIS.horizons.sources[0],
      PROGRAMMES.economie.horizons.sources[0],
      PROGRAMMES.retraites.horizons.sources[0],
      PROGRAMMES.immigration.horizons.sources[0],
      PROGRAMMES.ecologie.horizons.sources[0],
      VOTE_RETRAITES.sources[0],
    ),
  },
  {
    id: 'parti-modem',
    type: 'parti',
    titre: 'Mouvement démocrate',
    sousTitre: 'Pas de candidat propre',
    resume:
      'Au 21 octobre 2026, le Mouvement démocrate (MoDem) n’a pas de candidat propre à l’élection présidentielle de 2027 : François Bayrou porte un projet de primaire du « grand fleuve central ». Voici quelques-unes de ses propositions et la position de ses député·es lors d’un vote marquant : la réforme des retraites de 2023.',
    points: [
      'Économie : fusion de la CSG et de l’impôt sur le revenu, déplafonnement du quotient familial, impôt minimum mondial sur les bénéfices des entreprises.',
      'Retraites : indexation des petites pensions sur l’inflation ou la croissance ; pas de proposition de campagne formalisée pour 2027, le gouvernement Bayrou ayant maintenu l’âge légal à 64 ans.',
      'Immigration : coopération avec les pays d’origine, harmonisation européenne du droit d’asile, protection des frontières extérieures de l’UE.',
      'Écologie : émissions divisées par 4 d’ici 2050, fin des exonérations de fiscalité carbone pour l’aviation et le maritime, éolien en mer et hydrogène.',
      'Vote à l’Assemblée (mars 2023) : le groupe MoDem n’a pas voté la motion de censure contre la réforme des retraites, qu’il soutenait.',
    ],
    liees: ['personnalite-bayrou', 'sujet-retraites', 'sujet-immigration', 'sujet-nucleaire', 'sujet-europe', 'sujet-motion-de-censure'],
    sources: sources(
      PARTIS.modem.sources[0],
      PROGRAMMES.economie.modem.sources[0],
      PROGRAMMES.retraites.modem.sources[0],
      PROGRAMMES.immigration.modem.sources[0],
      PROGRAMMES.ecologie.modem.sources[0],
      VOTE_RETRAITES.sources[0],
    ),
  },
  {
    id: 'parti-lr',
    type: 'parti',
    titre: 'Les Républicains',
    sousTitre: 'Candidat : Bruno Retailleau',
    resume:
      'Au 21 octobre 2026, Les Républicains (LR) présentent Bruno Retailleau à l’élection présidentielle de 2027 ; il a été investi le 19 avril 2026. Voici quelques-unes de leurs propositions pour 2027 et la position de leurs député·es lors d’un vote marquant : la réforme des retraites de 2023.',
    points: [
      'Économie : plan d’environ 197 Md€ d’économies d’ici 2031, déficit sous 3 % du PIB, suppression d’environ 200 000 postes de fonctionnaires.',
      'Retraites : départ possible dès 63 ans avec décote, taux plein automatique à 65 ans, part de capitalisation pour les jeunes.',
      'Immigration : immigration légale réduite à moins de 50 000 personnes par an, fin du droit du sol automatique, référendum sur l’immigration.',
      'Écologie : priorité au nucléaire (prolongation des réacteurs, nouveaux EPR2), arrêt des subventions à l’éolien et au photovoltaïque.',
      'Vote à l’Assemblée (mars 2023) : le groupe LR s’est divisé sur la motion de censure contre la réforme des retraites ; 19 député·es sur 61 l’ont votée.',
    ],
    liees: ['personnalite-retailleau', 'sujet-retraites', 'sujet-immigration', 'sujet-nucleaire', 'sujet-europe', 'sujet-motion-de-censure'],
    sources: sources(
      PARTIS.lr.sources[0],
      PROGRAMMES.economie.lr.sources[0],
      PROGRAMMES.retraites.lr.sources[0],
      PROGRAMMES.immigration.lr.sources[0],
      PROGRAMMES.ecologie.lr.sources[0],
      VOTE_RETRAITES.sources[0],
    ),
  },
  {
    id: 'parti-rn',
    type: 'parti',
    titre: 'Rassemblement national',
    sousTitre: 'Candidat : Jordan Bardella',
    resume:
      'Au 21 octobre 2026, le Rassemblement national (RN) présente Jordan Bardella à l’élection présidentielle de 2027. Voici quelques-unes de ses propositions pour 2027 et la position de ses député·es lors d’un vote marquant : la réforme des retraites de 2023.',
    points: [
      'Économie : TVA à 5,5 % sur l’énergie, renationalisation des autoroutes avec des péages 15 % moins chers, 125 Md€ d’économies d’ici 2032.',
      'Retraites : désaccord interne rendu public en mai 2026 ; Jordan Bardella veut un départ fondé sur la seule durée de cotisation (42 annuités), Marine Le Pen veut maintenir 62 ans.',
      'Immigration : asile traité uniquement à l’étranger, immigration légale plafonnée (environ 10 000 personnes par an évoquées), fin du droit du sol automatique.',
      'Écologie : relance du nucléaire, de l’hydroélectricité et de l’hydrogène, arrêt des nouveaux projets éoliens, sortie du marché européen de l’électricité.',
      'Vote à l’Assemblée (mars 2023) : le groupe RN a voté à l’unanimité la motion de censure contre la réforme des retraites.',
    ],
    liees: ['personnalite-bardella', 'sujet-retraites', 'sujet-immigration', 'sujet-nucleaire', 'sujet-europe', 'sujet-motion-de-censure'],
    sources: sources(
      PARTIS.rn.sources[0],
      PROGRAMMES.economie.rn.sources[0],
      PROGRAMMES.retraites.rn.sources[0],
      PROGRAMMES.immigration.rn.sources[0],
      PROGRAMMES.ecologie.rn.sources[0],
      VOTE_RETRAITES.sources[0],
    ),
  },
  {
    id: 'parti-reconquete',
    type: 'parti',
    titre: 'Reconquête',
    sousTitre: 'Candidat : Éric Zemmour',
    resume:
      'Au 21 octobre 2026, Reconquête présente Éric Zemmour à l’élection présidentielle de 2027. Voici quelques-unes de ses propositions pour 2027 ; le parti n’avait pas de député·es lors des votes marquants de 2022 à 2026, comme celui sur la réforme des retraites de 2023.',
    points: [
      'Économie : baisse des charges sociales (CSG), contribution au budget de l’UE réduite de 20 %, droits de douane de 50 % sur les véhicules électriques chinois.',
      'Retraites : passage progressif à 64 ans, maintien des départs anticipés pour les carrières longues, introduction progressive d’une capitalisation.',
      'Immigration : « remigration » via un ministère dédié, solde migratoire proche de zéro ou négatif, fin du droit du sol, sortie de la CEDH.',
      'Écologie : annulation de l’interdiction des moteurs thermiques en 2035, 500 Md€ pour le nucléaire, suppression des subventions éoliennes.',
      'Vote à l’Assemblée : d’après les relevés de votes utilisés par Poléa, Reconquête n’a eu aucun député sur la période 2022-2026 ; aucun vote ne peut donc lui être attribué.',
    ],
    liees: ['personnalite-zemmour', 'sujet-retraites', 'sujet-immigration', 'sujet-nucleaire', 'sujet-europe', 'sujet-motion-de-censure'],
    sources: sources(
      PARTIS.reconquete.sources[0],
      PROGRAMMES.economie.reconquete.sources[0],
      PROGRAMMES.retraites.reconquete.sources[0],
      PROGRAMMES.immigration.reconquete.sources[0],
      PROGRAMMES.ecologie.reconquete.sources[0],
      VOTE_RETRAITES.sources[0],
      VOTES.budget2026.sources[0],
    ),
  },
]

/* ---------- Personnalités ---------- */

const AUTRES_THEMES =
  'Cette fiche présente des propositions de son programme sur la sécurité, la santé, l’éducation et la défense ; ses positions sur l’économie, les retraites, l’immigration et l’écologie figurent sur la fiche de son parti.'

const FICHES_PERSONNALITES: Fiche[] = [
  {
    id: 'personnalite-melenchon',
    type: 'personnalite',
    titre: 'Jean-Luc Mélenchon',
    sousTitre: 'Candidat de La France insoumise',
    resume: `Au 21 octobre 2026, Jean-Luc Mélenchon est le candidat de La France insoumise (LFI) à l’élection présidentielle de 2027. ${AUTRES_THEMES}`,
    points: [
      'Sécurité : son programme propose l’interdiction des tasers et des LBD, la fin des peines plancher et la légalisation encadrée du cannabis.',
      'Santé : son programme propose le « 100 % Sécu » (remboursement intégral des soins) et l’interdiction des dépassements d’honoraires.',
      'Éducation : son programme propose un service public de la petite enfance (500 000 places de crèche) et la gratuité réelle de l’école (cantine, transport, fournitures).',
      'Défense : son programme propose une sortie de l’OTAN « par étapes » et refuse une défense européenne intégrée ainsi que l’objectif de 3 % du PIB.',
    ],
    liees: ['parti-lfi', 'sujet-retraites', 'sujet-immigration', 'sujet-europe'],
    sources: sources(
      PARTIS.lfi.sources[0],
      PROGRAMMES.securite.lfi.sources[0],
      PROGRAMMES.sante.lfi.sources[0],
      PROGRAMMES.education.lfi.sources[0],
      PROGRAMMES.defense.lfi.sources[0],
    ),
  },
  {
    id: 'personnalite-roussel',
    type: 'personnalite',
    titre: 'Fabien Roussel',
    sousTitre: 'Candidat du Parti communiste français',
    resume: `Au 21 octobre 2026, Fabien Roussel est le candidat du Parti communiste français (PCF) à l’élection présidentielle de 2027 ; il a été investi lors du 40e congrès du parti, en juillet 2026. ${AUTRES_THEMES}`,
    points: [
      'Sécurité : son programme propose une police de proximité (30 000 recrutements), pas de peines plancher automatiques et des centres d’aide aux victimes de violences sexuelles et conjugales.',
      'Santé : son programme propose un plan de développement de l’hôpital public, un pôle public du médicament et une loi-cadre sur la psychiatrie.',
      'Éducation : son programme propose la fin de la sélection à l’entrée de l’université (type Parcoursup) et une allocation étudiante de 850 € par mois.',
      'Défense : son programme propose la sortie de l’OTAN et sa dissolution, ainsi que la signature du traité d’interdiction des armes nucléaires (TIAN).',
    ],
    liees: ['parti-pcf', 'sujet-retraites', 'sujet-immigration', 'sujet-europe'],
    sources: sources(
      PARTIS.pcf.sources[0],
      PROGRAMMES.securite.pcf.sources[0],
      PROGRAMMES.sante.pcf.sources[0],
      PROGRAMMES.education.pcf.sources[0],
      PROGRAMMES.defense.pcf.sources[0],
    ),
  },
  {
    id: 'personnalite-tondelier',
    type: 'personnalite',
    titre: 'Marine Tondelier',
    sousTitre: 'Candidate des Écologistes (à reconfirmer)',
    resume: `Au 21 octobre 2026, Marine Tondelier est la candidate des Écologistes à l’élection présidentielle de 2027 ; sa candidature doit être reconfirmée par un vote des adhérent·es du 10 au 13 décembre 2026. ${AUTRES_THEMES}`,
    points: [
      'Sécurité : son programme propose de privilégier la prévention sur la répression, un délit d’écocide et 9 000 magistrat·es de plus en 10 ans.',
      'Santé : son programme propose un plan de santé scolaire (800 médecins, 1 000 psychologues), 2 000 nouveaux centres de santé et l’interdiction des PFAS.',
      'Éducation : son programme propose des classes de 19 élèves en primaire (12 en REP) d’ici 2032 et +15 % de salaire pour les enseignant·es en 5 ans.',
      'Défense : son programme propose de placer la diplomatie climatique et les droits humains au cœur de l’action extérieure, avec un soutien à l’Ukraine et des pistes de désarmement nucléaire.',
    ],
    liees: ['parti-ecologistes', 'sujet-retraites', 'sujet-immigration', 'sujet-europe'],
    sources: sources(
      PARTIS.ecologistes.sources[0],
      PROGRAMMES.securite.ecologistes.sources[0],
      PROGRAMMES.sante.ecologistes.sources[0],
      PROGRAMMES.education.ecologistes.sources[0],
      PROGRAMMES.defense.ecologistes.sources[0],
    ),
  },
  {
    id: 'personnalite-glucksmann',
    type: 'personnalite',
    titre: 'Raphaël Glucksmann',
    sousTitre: 'Candidat commun PS, Place publique et GRS',
    resume: `Au 21 octobre 2026, Raphaël Glucksmann est le candidat commun du Parti socialiste (PS), de Place publique et de GRS à l’élection présidentielle de 2027 ; il a été désigné lors de la primaire du 9 au 11 octobre 2026. ${AUTRES_THEMES}`,
    points: [
      'Sécurité : son programme propose une police de proximité modernisée, une convention citoyenne sur les drogues et le doublement des Maisons du droit et de la justice.',
      'Santé : son programme propose un plan pluriannuel pour l’hôpital public, la fin de la T2A au profit d’un financement global et le doublement des professionnel·les de santé mentale remboursé·es.',
      'Éducation : son programme propose 60 000 enseignant·es de plus, +20 % de salaire pour les nouveaux titulaires et la gratuité de l’université publique.',
      'Défense : son programme propose un fonds européen de défense de 500 Md€ et l’extension possible de la dissuasion nucléaire française aux partenaires de l’UE, sans sortie de l’OTAN.',
    ],
    liees: ['parti-ps', 'sujet-retraites', 'sujet-immigration', 'sujet-europe'],
    sources: sources(
      PARTIS.ps.sources[0],
      PROGRAMMES.securite.ps.sources[0],
      PROGRAMMES.sante.ps.sources[0],
      PROGRAMMES.education.ps.sources[0],
      PROGRAMMES.defense.ps.sources[0],
    ),
  },
  {
    id: 'personnalite-attal',
    type: 'personnalite',
    titre: 'Gabriel Attal',
    sousTitre: 'Candidat de Renaissance',
    resume: `Au 21 octobre 2026, Gabriel Attal est le candidat de Renaissance à l’élection présidentielle de 2027. ${AUTRES_THEMES}`,
    points: [
      'Sécurité : son programme propose plus de policier·es et de gendarmes, la priorité à la lutte contre le narcotrafic et la cybercriminalité et une réforme de la justice pénale des mineurs.',
      'Santé : son programme propose des incitations à l’installation contre les déserts médicaux, une mutuelle publique à 1 € par jour et un soutien à l’aide à mourir.',
      'Éducation : son programme propose la priorité à l’IA à l’école, des groupes de niveau en français et en maths au collège et le brevet (DNB) comme condition d’entrée au lycée.',
      'Défense : son programme propose un budget de la défense à 3 % du PIB, une armée européenne commune et un soutien militaire et financier durable à l’Ukraine.',
    ],
    liees: ['parti-renaissance', 'sujet-retraites', 'sujet-immigration', 'sujet-europe'],
    sources: sources(
      PARTIS.renaissance.sources[0],
      PROGRAMMES.securite.renaissance.sources[0],
      PROGRAMMES.sante.renaissance.sources[0],
      PROGRAMMES.education.renaissance.sources[0],
      PROGRAMMES.defense.renaissance.sources[0],
    ),
  },
  {
    id: 'personnalite-philippe',
    type: 'personnalite',
    titre: 'Édouard Philippe',
    sousTitre: 'Candidat d’Horizons',
    resume: `Au 21 octobre 2026, Édouard Philippe est le candidat d’Horizons à l’élection présidentielle de 2027. ${AUTRES_THEMES}`,
    points: [
      'Sécurité : son programme propose 10 000 policier·es et gendarmes de plus, une réponse pénale systématique dès la première infraction et des peines plancher pour les atteintes graves.',
      'Santé : son programme propose de faire de la prévention une cause nationale, un plan d’investissement pluriannuel pour l’hôpital et la généralisation du dossier médical partagé et de la télémédecine.',
      'Éducation : son programme propose de miser sur les savoirs fondamentaux, le mérite et le retour de l’autorité, avec +20 % de salaire pour les enseignant·es.',
      'Défense : son programme propose un budget de la défense à 3 % du PIB d’ici 2030, un soutien militaire à l’Ukraine et la priorité au contre-terrorisme.',
    ],
    liees: ['parti-horizons', 'sujet-retraites', 'sujet-immigration', 'sujet-europe'],
    sources: sources(
      PARTIS.horizons.sources[0],
      PROGRAMMES.securite.horizons.sources[0],
      PROGRAMMES.sante.horizons.sources[0],
      PROGRAMMES.education.horizons.sources[0],
      PROGRAMMES.defense.horizons.sources[0],
    ),
  },
  {
    id: 'personnalite-bayrou',
    type: 'personnalite',
    titre: 'François Bayrou',
    sousTitre: 'Mouvement démocrate (pas de candidat propre)',
    resume:
      'Au 21 octobre 2026, le Mouvement démocrate (MoDem) n’a pas de candidat propre à l’élection présidentielle de 2027 : François Bayrou porte un projet de primaire du « grand fleuve central ». Cette fiche présente des propositions du programme du MoDem sur la sécurité, la santé, l’éducation et la défense ; ses positions sur l’économie, les retraites, l’immigration et l’écologie figurent sur la fiche du parti.',
    points: [
      'Sécurité : le programme du MoDem propose de renforcer les moyens de police et de prévention et refuse le « populisme sécuritaire » ; aucune mesure chiffrée n’est identifiée pour 2027.',
      'Santé : le programme du MoDem propose de lutter contre les déserts médicaux (cliniques mobiles) et une prévention ciblée sur les jeunes ; aucune mesure chiffrée n’est identifiée pour 2027.',
      'Éducation : le programme du MoDem propose une école fondée sur l’effort, le respect et les valeurs collectives, et soutient le service national universel.',
      'Défense : le programme du MoDem propose la mise en commun des dépenses militaires à l’échelle européenne, un bouclier antimissile européen et la poursuite du désarmement nucléaire.',
    ],
    liees: ['parti-modem', 'sujet-retraites', 'sujet-immigration', 'sujet-europe'],
    sources: sources(
      PARTIS.modem.sources[0],
      PROGRAMMES.securite.modem.sources[0],
      PROGRAMMES.sante.modem.sources[0],
      PROGRAMMES.education.modem.sources[0],
      PROGRAMMES.defense.modem.sources[0],
    ),
  },
  {
    id: 'personnalite-retailleau',
    type: 'personnalite',
    titre: 'Bruno Retailleau',
    sousTitre: 'Candidat des Républicains',
    resume: `Au 21 octobre 2026, Bruno Retailleau est le candidat des Républicains (LR) à l’élection présidentielle de 2027 ; il a été investi le 19 avril 2026. ${AUTRES_THEMES}`,
    points: [
      'Sécurité : son programme propose un « état d’urgence anti-trafics » (bouclage de quartiers, fouilles élargies), le retour des courtes peines de prison et des peines plancher pour les crimes graves.',
      'Santé : son programme propose moins de bureaucratie à l’hôpital, une gouvernance rendue aux médecins et la revalorisation des salaires des soignant·es.',
      'Éducation : son programme propose un examen d’entrée en 6e, des groupes de niveau, la fin du passage automatique et 1 000 établissements publics « libres ».',
      'Défense : son programme propose un soutien à l’Ukraine face à la Russie et des moyens d’IA de défense multipliés par 5, sans chiffrage propre distinct du budget gouvernemental.',
    ],
    liees: ['parti-lr', 'sujet-retraites', 'sujet-immigration', 'sujet-europe'],
    sources: sources(
      PARTIS.lr.sources[0],
      PROGRAMMES.securite.lr.sources[0],
      PROGRAMMES.sante.lr.sources[0],
      PROGRAMMES.education.lr.sources[0],
      PROGRAMMES.defense.lr.sources[0],
    ),
  },
  {
    id: 'personnalite-bardella',
    type: 'personnalite',
    titre: 'Jordan Bardella',
    sousTitre: 'Candidat du Rassemblement national',
    resume: `Au 21 octobre 2026, Jordan Bardella est le candidat du Rassemblement national (RN) à l’élection présidentielle de 2027. ${AUTRES_THEMES}`,
    points: [
      'Sécurité : son programme propose des peines plancher et la perpétuité réelle, une présomption de légitime défense pour les forces de l’ordre et la majorité pénale à 16 ans.',
      'Santé : son programme propose un plan de 20 Md€ pour la santé, l’arrêt des fermetures de lits et de maternités et -10 % de bureaucratie hospitalière.',
      'Éducation : son programme propose la priorité au français, aux maths et à l’histoire, la revalorisation des salaires des enseignant·es et 100 000 logements étudiants en 5 ans.',
      'Défense : son programme propose de quitter le commandement intégré de l’OTAN tout en restant dans l’Alliance, et un budget de la défense à 3 % du PIB (55 Md€ en 2027).',
    ],
    liees: ['parti-rn', 'sujet-retraites', 'sujet-immigration', 'sujet-europe'],
    sources: sources(
      PARTIS.rn.sources[0],
      PROGRAMMES.securite.rn.sources[0],
      PROGRAMMES.sante.rn.sources[0],
      PROGRAMMES.education.rn.sources[0],
      PROGRAMMES.defense.rn.sources[0],
    ),
  },
  {
    id: 'personnalite-zemmour',
    type: 'personnalite',
    titre: 'Éric Zemmour',
    sousTitre: 'Candidat de Reconquête',
    resume: `Au 21 octobre 2026, Éric Zemmour est le candidat de Reconquête à l’élection présidentielle de 2027. ${AUTRES_THEMES}`,
    points: [
      'Sécurité : son programme propose une présomption de légitime défense, des peines plancher obligatoires, la perpétuité réelle et l’expulsion systématique des personnes étrangères délinquantes et fichées S.',
      'Santé : son programme propose 40 000 personnels hospitaliers de plus, +12 % de salaire pour les infirmier·es et aides-soignant·es et la suppression de l’AME (seule l’aide médicale d’urgence serait maintenue).',
      'Éducation : son programme propose l’uniforme obligatoire, la fin du collège unique (classes de niveau, filières pro dès la 5e) et un « roman national » dans les programmes.',
      'Défense : son programme propose de quitter le commandement intégré de l’OTAN, un budget de la défense de 70 Md€ par an d’ici 2030 et une armée de terre à 100 000 soldat·es opérationnel·les.',
    ],
    liees: ['parti-reconquete', 'sujet-retraites', 'sujet-immigration', 'sujet-europe'],
    sources: sources(
      PARTIS.reconquete.sources[0],
      PROGRAMMES.securite.reconquete.sources[0],
      PROGRAMMES.sante.reconquete.sources[0],
      PROGRAMMES.education.reconquete.sources[0],
      PROGRAMMES.defense.reconquete.sources[0],
    ),
  },
]

/* ---------- Sujets ---------- */

const TOUS_LES_PARTIS: IdFiche[] = [
  'parti-lfi',
  'parti-pcf',
  'parti-ecologistes',
  'parti-ps',
  'parti-renaissance',
  'parti-horizons',
  'parti-modem',
  'parti-lr',
  'parti-rn',
  'parti-reconquete',
]

const FICHES_SUJETS: Fiche[] = [
  {
    id: 'sujet-retraites',
    type: 'sujet',
    titre: 'Les retraites',
    sousTitre: 'Âge de départ et réforme de 2023',
    resume:
      'Le débat porte sur l’âge à partir duquel on peut partir à la retraite et sur le nombre d’années de cotisation (annuités) nécessaires pour partir à taux plein. La réforme de 2023, adoptée par le 49.3, a fixé l’âge légal à 64 ans. Pour 2027, les propositions des partis vont d’un retour à 60 ans à un départ à 65 ans.',
    points: [
      'Réforme de 2023 : adoptée par le 49.3 ; la motion de censure qui aurait pu la faire tomber a échoué à 9 voix près (278 voix sur 287 nécessaires).',
      'Retour à 60 ans : LFI (à taux plein avec 40 annuités) et le PCF.',
      'Retour à 62 ans : le PS, ainsi que les Écologistes, avec un objectif de 60 ans pour les carrières longues et les métiers pénibles.',
      'Entre 63 et 65 ans : LR (départ possible dès 63 ans avec décote, taux plein à 65 ans), Reconquête (64 ans), Horizons (65 ans et 45 annuités) ; le MoDem n’a pas formalisé de proposition pour 2027, le gouvernement Bayrou ayant maintenu 64 ans.',
      'Sans âge légal fixe : Renaissance veut ne retenir que la durée de cotisation (avec bonus et malus). Au RN, Jordan Bardella défend aussi cette idée (42 annuités), alors que Marine Le Pen veut maintenir 62 ans.',
      'Capitalisation : Renaissance, Horizons, LR, Reconquête et Jordan Bardella (RN) proposent d’en introduire une part ; Marine Le Pen s’y oppose.',
    ],
    liees: [...TOUS_LES_PARTIS, 'sujet-49-3', 'sujet-motion-de-censure'],
    sources: sources(
      VOTE_RETRAITES.sources[0],
      PROGRAMMES.retraites.lfi.sources[0],
      PROGRAMMES.retraites.pcf.sources[0],
      PROGRAMMES.retraites.ecologistes.sources[0],
      PROGRAMMES.retraites.ps.sources[0],
      PROGRAMMES.retraites.renaissance.sources[0],
      PROGRAMMES.retraites.horizons.sources[0],
      PROGRAMMES.retraites.modem.sources[0],
      PROGRAMMES.retraites.lr.sources[0],
      PROGRAMMES.retraites.rn.sources[0],
      PROGRAMMES.retraites.reconquete.sources[0],
    ),
  },
  {
    id: 'sujet-immigration',
    type: 'sujet',
    titre: 'L’immigration',
    sousTitre: 'Entrées, asile et régularisations',
    resume:
      'Le débat porte sur le nombre de personnes étrangères autorisées à venir vivre en France, sur le droit d’asile et sur la régularisation des personnes sans papiers. En décembre 2023, l’Assemblée nationale a adopté une loi immigration. Pour 2027, les propositions vont de régularisations plus larges à des plafonds chiffrés, jusqu’à la « remigration » proposée par Reconquête.',
    points: [
      'Loi immigration (décembre 2023) : adoptée par 349 voix pour, 186 contre et 38 abstentions. Le texte serait passé sans les voix du RN, mais pas sans celles de LR.',
      'Qui a voté quoi en 2023 : pour, le RN, LR, Horizons et une majorité de Renaissance et du MoDem ; contre, LFI, le PS, les Écologistes et le PCF.',
      'Régularisations et voies légales : LFI (sans limitation chiffrée), le PCF (secteurs en tension), les Écologistes (statut de réfugié climatique) et le PS (immigration « pilotée par le Parlement » selon les besoins économiques).',
      'Quotas et coopération : Renaissance (quotas de travail tous les 2 ans, système à points), Horizons (quotas annuels votés par le Parlement, suspension possible de l’asile en cas de crise), MoDem (harmonisation européenne du droit d’asile, sans proposition chiffrée).',
      'Plafonds chiffrés : LR (moins de 50 000 entrées légales par an, référendum), RN (environ 10 000 par an évoqués, asile traité uniquement à l’étranger), Reconquête (« remigration », solde migratoire proche de zéro ou négatif, sortie de la CEDH).',
      'Droit du sol : LR et le RN proposent la fin du droit du sol automatique, Reconquête la fin du droit du sol.',
    ],
    liees: TOUS_LES_PARTIS,
    sources: sources(
      ...VOTES.immigration2023.sources,
      PROGRAMMES.immigration.lfi.sources[0],
      PROGRAMMES.immigration.pcf.sources[0],
      PROGRAMMES.immigration.ecologistes.sources[0],
      PROGRAMMES.immigration.ps.sources[0],
      PROGRAMMES.immigration.renaissance.sources[0],
      PROGRAMMES.immigration.horizons.sources[0],
      PROGRAMMES.immigration.modem.sources[0],
      PROGRAMMES.immigration.lr.sources[0],
      PROGRAMMES.immigration.rn.sources[0],
      PROGRAMMES.immigration.reconquete.sources[0],
    ),
  },
  {
    id: 'sujet-nucleaire',
    type: 'sujet',
    titre: 'Le nucléaire',
    sousTitre: 'Énergie et électricité',
    resume:
      'Le débat porte sur l’avenir des centrales nucléaires qui produisent de l’électricité : faut-il en sortir, les garder ou en construire de nouvelles, et quelle place donner aux énergies renouvelables comme l’éolien ? Les propositions vont de la sortie du nucléaire à la priorité donnée au nucléaire, en passant par un mélange des deux.',
    points: [
      'Sortie du nucléaire : LFI (100 % renouvelables, sortie progressive) et les Écologistes (décision via une convention citoyenne).',
      'Nucléaire et renouvelables ensemble : le PS (nouveaux réacteurs EPR, « nucléaire autant que nécessaire, renouvelables autant que possible »), Renaissance (sans objectif de 100 % renouvelable) et Horizons (maintien du nucléaire et développement des renouvelables).',
      'Priorité au nucléaire : LR (prolongation des réacteurs, EPR2, arrêt des subventions à l’éolien et au photovoltaïque), le RN (relance du nucléaire, arrêt des nouveaux projets éoliens) et Reconquête (500 Md€ pour le nucléaire, suppression des subventions éoliennes).',
      'Sans position sur le nucléaire dans les sources : le PCF (nationalisation de TotalEnergies et d’Engie aux côtés d’EDF, électricité 30 % moins chère) et le MoDem (éolien en mer, hydrogène, bioéthanol).',
    ],
    liees: TOUS_LES_PARTIS,
    sources: sources(
      PROGRAMMES.ecologie.lfi.sources[0],
      PROGRAMMES.ecologie.pcf.sources[0],
      PROGRAMMES.ecologie.ecologistes.sources[0],
      PROGRAMMES.ecologie.ps.sources[0],
      PROGRAMMES.ecologie.renaissance.sources[0],
      PROGRAMMES.ecologie.horizons.sources[0],
      PROGRAMMES.ecologie.modem.sources[0],
      PROGRAMMES.ecologie.lr.sources[0],
      PROGRAMMES.ecologie.rn.sources[0],
      PROGRAMMES.ecologie.reconquete.sources[0],
    ),
  },
  {
    id: 'sujet-49-3',
    type: 'sujet',
    titre: 'Le 49.3',
    sousTitre: 'Adopter un texte sans vote direct',
    resume:
      'L’article 49.3 permet au Premier ministre de faire adopter un texte sans vote direct des député·es. Les député·es peuvent alors répondre par une motion de censure : si elle est rejetée, le texte est adopté ; si elle est adoptée, le gouvernement tombe.',
    points: [
      'Réforme des retraites (mars 2023) : adoptée par le 49.3 ; la motion de censure a échoué à 9 voix près.',
      'Budget de la Sécurité sociale (décembre 2024) : après un 49.3, la motion de censure est adoptée avec 331 voix et le gouvernement Barnier tombe, une première depuis 1962.',
      'Budget 2026 : adopté après trois 49.3 du Premier ministre Sébastien Lecornu ; les dernières motions de censure ont été rejetées.',
      'Supprimer le 49.3 : LFI le propose, avec une Assemblée constituante pour une VIe République ; Raphaël Glucksmann (PS) propose de le remplacer par un vote de confiance.',
      'Pour les huit autres partis, les sources réunies par Poléa n’indiquent pas de position sur le 49.3.',
    ],
    liees: ['parti-lfi', 'parti-ps', 'sujet-motion-de-censure', 'sujet-retraites'],
    sources: sources(
      VOTE_RETRAITES.sources[0],
      VOTES.censureBarnier2024.sources[0],
      VOTES.budget2026.sources[0],
      PROGRAMMES.institutions.lfi.sources[0],
      PROGRAMMES.institutions.ps.sources[0],
    ),
  },
  {
    id: 'sujet-motion-de-censure',
    type: 'sujet',
    titre: 'La motion de censure',
    sousTitre: 'Le vote qui peut faire tomber le gouvernement',
    resume:
      'Une motion de censure est un vote des député·es qui fait tomber le gouvernement si elle atteint un nombre minimal de voix (287 en mars 2023). Dans les exemples ci-dessous, elle répond à un 49.3 : la rejeter revient alors à laisser adopter le texte.',
    points: [
      'Retraites (mars 2023) : rejetée avec 278 voix sur 287 nécessaires. Pour : RN, LFI, PS, Écologistes et PCF, ainsi que 19 député·es LR sur 61. Renaissance, MoDem et Horizons ne l’ont pas votée.',
      'Gouvernement Barnier (décembre 2024) : adoptée avec 331 voix (RN, LFI, PS, Écologistes, PCF), une première depuis 1962. Renaissance, Horizons, LR et MoDem ne l’ont pas votée.',
      'Budget 2026 (février 2026) : deux motions rejetées, celle de la gauche (260 voix : LFI, Écologistes, PCF et 5 député·es PS) et celle du RN (135 voix). Le PS et LR avaient annoncé ne pas les voter.',
      'Reconquête n’a eu aucun député sur la période : aucun vote ne lui est attribué.',
    ],
    liees: [...TOUS_LES_PARTIS, 'sujet-49-3', 'sujet-retraites'],
    sources: sources(
      VOTE_RETRAITES.sources[0],
      ...VOTES.censureBarnier2024.sources,
      ...VOTES.budget2026.sources,
    ),
  },
  {
    id: 'sujet-europe',
    type: 'sujet',
    titre: 'L’Europe',
    sousTitre: 'Le rôle de l’Union européenne',
    resume:
      'Le débat porte sur la place de l’Union européenne (UE) : faut-il lui donner plus de pouvoirs, changer ses règles ou faire passer le droit français avant le droit européen ? Les propositions vont d’une Europe fédérale, avec un budget commun, à la suppression de la Commission européenne.',
    points: [
      'Plus d’intégration : le PS (« saut fédéral », budget commun, fin du droit de veto), les Écologistes (approfondissement fédéral, défense européenne commune), le MoDem (Constitution européenne, président de l’UE élu au suffrage universel) et Renaissance (« États-Unis d’Europe » autour de 8 à 10 pays).',
      'Défense européenne : Horizons propose un état-major européen de défense et un « Buy European Act ».',
      'Changer les règles : LFI (refondation des traités, « désobéissance européenne » sur les règles de déficit et de dette) et le PCF (référendum sans sortie de l’UE, fin de la règle des 3 % de déficit).',
      'Droit national d’abord : LR (droit européen placé sous la Constitution française, refus d’une Europe fédérale) et Reconquête (suppression de la Commission européenne, primauté du droit national, refus de tout nouvel élargissement).',
      'Budget de l’UE : le RN a officiellement abandonné le Frexit (la sortie de l’UE) mais veut réduire de moitié la contribution nette de la France ; Reconquête propose de la réduire de 20 %.',
    ],
    liees: TOUS_LES_PARTIS,
    sources: sources(
      PROGRAMMES.europe.lfi.sources[0],
      PROGRAMMES.europe.pcf.sources[0],
      PROGRAMMES.europe.ecologistes.sources[0],
      PROGRAMMES.europe.ps.sources[0],
      PROGRAMMES.europe.renaissance.sources[0],
      PROGRAMMES.europe.horizons.sources[0],
      PROGRAMMES.europe.modem.sources[0],
      PROGRAMMES.europe.lr.sources[0],
      PROGRAMMES.europe.rn.sources[0],
      PROGRAMMES.europe.reconquete.sources[0],
      PROGRAMMES.economie.reconquete.sources[0],
    ),
  },
]

export const FICHES: Fiche[] = [...FICHES_PARTIS, ...FICHES_PERSONNALITES, ...FICHES_SUJETS]
