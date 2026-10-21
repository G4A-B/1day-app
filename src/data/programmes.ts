// Propositions des partis pour la présidentielle 2027, par thème.
// Source : document « Programmes des partis – Présidentielle 2027 » compilé par la classe G4A
// le 21 octobre 2026 ; chaque proposition renvoie à la page d'où elle est tirée.
// Généré à partir de ce document : en cas de mise à jour, modifier ici directement.

import type { IdParti, IdTheme, Proposition } from './types'

const LE = '2026-10-21'

export const PROGRAMMES: Record<Exclude<IdTheme, 'parlement'>, Record<IdParti, Proposition>> = {
  economie: {
    lfi: {
      texte: "SMIC à 1 600 € net ; blocage des prix (énergie, première nécessité) ; barème IR à 14 tranches (jusqu'à 82 % sur les très hauts revenus) ; ISF élargi + taxe « Zucman » >100 M€",
      sources: [{ url: "https://lafacture2027.fr/programme-fiscal-melenchon-2027", consulteeLe: LE, editeur: "La Facture 2027" }],
    },
    pcf: {
      texte: "SMIC 1 600 € net, semaine à 32h ; nationalisation des grandes banques et assurances ; ISF triplé, IR à 9 tranches, suppression TVA 1ère nécessité, taxe superprofits",
      sources: [{ url: "https://votons-2027.fr/candidats/roussel/programme", consulteeLe: LE, editeur: "votons-2027.fr" }],
    },
    ecologistes: {
      texte: "SMIC à 2 000 € brut ; taxe « Zucman » 2 % au-delà de 100 M€ ; TVA verte, fiscalité des transports réorientée (avion plus cher, train moins cher)",
      sources: [{ url: "https://www.parlons-politique.fr/elections/presidentielle-ecologiste-2027-les-francais-face-a-une-refonte-des-institutions-et-a-une-fiscalite-plus-juste_23552/", consulteeLe: LE, editeur: "parlons-politique.fr" }],
    },
    ps: {
      texte: "SMIC à 1 600 € net sous 2 ans ; suppression de la flat tax, ISF climat, taxation des superprofits des multinationales ; doctrine officielle PS : recrutement de 100 000 fonctionnaires",
      sources: [{ url: "https://www.primaireouverte.fr/doctrines/fr-ps", consulteeLe: LE, editeur: "primaireouverte.fr" }],
    },
    renaissance: {
      texte: "Baisse ciblée de 2 Md€ d'impôts pour les classes moyennes, refus de toute hausse d'impôts ; règle d'or budgétaire, déficit visé à zéro en 2037",
      sources: [{ url: "https://www.timefrance.fr/politique/zero-deficit-en-2037-le-pari-de-rigueur-de-gabriel-attal-avant-la-presidentielle/", consulteeLe: LE, editeur: "Time France" }],
    },
    horizons: {
      texte: "Pacte fiscal : 50 Md€ de baisse d'impôts de production contre 50 Md€ d'aides publiques supprimées ; déficit ramené de 5 % à 2 % du PIB ; allocation familiale unique de 350 €/mois dès le 1er enfant",
      sources: [{ url: "https://fr.euronews.com/2026/10/09/presidentielle-2027-edouard-philippe-mise-sur-le-travail-et-la-reduction-des-depenses-publ", consulteeLe: LE, editeur: "Euronews" }],
    },
    modem: {
      texte: "Fusion CSG/impôt sur le revenu, déplafonnement du quotient familial ; suppression de la taxe d'habitation remplacée ; impôt minimum mondial sur les bénéfices des entreprises",
      sources: [{ url: "https://www.mouvementdemocrate.fr/programme/propositions-2441", consulteeLe: LE, editeur: "Mouvement Démocrate" }],
    },
    lr: {
      texte: "Plan d'économies de ~197 Md€ d'ici 2031, déficit sous 3 % du PIB ; seuil « zéro cotisation » au-delà de 1 623h/an ; suppression d'environ 200 000 postes de fonctionnaires",
      sources: [{ url: "https://www.publicsenat.fr/actualites/economie/presidentielle-2027-bruno-retailleau-sengage-sur-un-plan-deconomies-de-pres-de-200-milliards-deuros-sil-est-elu", consulteeLe: LE, editeur: "Public Sénat" }],
    },
    rn: {
      texte: "TVA à 5,5 % sur l'énergie ; exonération de cotisations patronales sur les hausses de salaire ; renationalisation des autoroutes (-15 % de péages) ; 125 Md€ d'économies d'ici 2032",
      sources: [{ url: "https://votons-2027.fr/candidats/bardella/programme", consulteeLe: LE, editeur: "votons-2027.fr" }],
    },
    reconquete: {
      texte: "Baisse des charges sociales (CSG) ; réduction de 20 % de la contribution au budget de l'UE ; droits de douane à 50 % sur les véhicules électriques chinois",
      sources: [{ url: "https://tous-les-programmes.fr/partis/reconquete", consulteeLe: LE, editeur: "tous-les-programmes.fr" }],
    },
  },
  retraites: {
    lfi: {
      texte: "Abrogation de la réforme 2023, retour à 60 ans à taux plein pour 40 annuités ; pension minimale au niveau du SMIC revalorisé",
      sources: [{ url: "https://lafranceinsoumise.fr/2025/10/31/la-france-insoumise-toujours-contre-la-retraite-a-64-ans/", consulteeLe: LE, editeur: "La France insoumise" }],
    },
    pcf: {
      texte: "Retour à 60 ans à taux plein ; « 100 % Sécu » pour les soins prescrits ; élargissement des cotisations aux revenus financiers",
      sources: [{ url: "https://votons-2027.fr/candidats/roussel/programme", consulteeLe: LE, editeur: "votons-2027.fr" }],
    },
    ecologistes: {
      texte: "Abrogation de la réforme 2023, retour à 62 ans puis objectif 60 ans pour carrières longues/métiers pénibles ; « sécurité sociale climatique »",
      sources: [{ url: "https://www.parlons-politique.fr/elections/ce-que-le-programme-ecologiste-de-marine-tondelier-changerait-pour-les-retraites-le-nucleaire-et-les-impots_23570/", consulteeLe: LE, editeur: "parlons-politique.fr" }],
    },
    ps: {
      texte: "Abrogation de la réforme 2023, retour à 62 ans ; pension minimale garantie à 1 200 € ; chantier vers une Sécurité sociale unique",
      sources: [{ url: "https://votons-2027.fr/candidats/glucksmann/programme/retraite", consulteeLe: LE, editeur: "votons-2027.fr" }],
    },
    renaissance: {
      texte: "Suppression de l'âge légal fixe au profit de la seule durée de cotisation (malus/bonus) ; 1 000 € versés à la naissance sur un compte de capitalisation",
      sources: [{ url: "https://droits-allocations.org/reforme-retraites-attal-2027-systeme-universel-sans-age-legal", consulteeLe: LE, editeur: "Droits-allocations.org" }],
    },
    horizons: {
      texte: "Relèvement progressif à 45 annuités et 65 ans (maintien d'un départ 60-64 ans pour 1/3 des Français selon pénibilité) ; volet capitalisation ; 5e branche dépendance",
      sources: [{ url: "https://www.journaldunet.com/business/action-publique/1555605-edouard-philippe-devoile-son-projet-de-reforme-des-retraites-pour-la-presidentielle-2027-prevoyant-un-depart-a-65-ans-et-45-annuites/", consulteeLe: LE, editeur: "Journal du Net" }],
    },
    modem: {
      texte: "Indexation des petites pensions sur l'inflation/croissance ; en tant que gouvernement (Bayrou), maintien de l'âge légal à 64 ans issu de la réforme 2023 — pas de proposition de campagne 2027 formalisée",
      sources: [{ url: "https://lcp.fr/actualites/retraites-francois-bayrou-reaffirme-son-opposition-a-un-retour-aux-62-ans-lors-des", consulteeLe: LE, editeur: "LCP" }],
    },
    lr: {
      texte: "Âge minimal de départ à 63 ans (décote 7 %/an), taux plein automatique à 65 ans ; volet capitalisation pour les jeunes",
      sources: [{ url: "https://lcp.fr/actualites/retraites-bruno-retailleau-veut-un-age-minimal-de-depart-a-63-ans-et-un-taux-plein-a-65", consulteeLe: LE, editeur: "LCP" }],
    },
    rn: {
      texte: "Désaccord interne public (05/2026) : Bardella veut fonder le départ sur la seule durée de cotisation (42 annuités, départ de fait à 64-66 ans) + capitalisation ; Le Pen maintient 62 ans et s'oppose à la capitalisation",
      sources: [{ url: "https://www.senioractu.com/Retraites-au-RN-Bardella-et-Le-Pen-ne-sont-plus-d-accord-sur-votre-age-de-depart_a27759.html", consulteeLe: LE, editeur: "senioractu.com" }],
    },
    reconquete: {
      texte: "Relèvement progressif à 64 ans (+3 mois/an jusqu'en 2030), maintien de départs anticipés carrières longues ; introduction progressive d'une capitalisation",
      sources: [{ url: "https://www.cnews.fr/france/2023-01-11/eric-zemmour-ceux-qui-sont-pour-la-retraite-60-ans-sont-des-irresponsables-1309973", consulteeLe: LE, editeur: "CNews" }],
    },
  },
  immigration: {
    lfi: {
      texte: "Régularisation des travailleurs sans-papiers et étudiants ; carte de séjour de 10 ans rétablie ; fin des centres de rétention, refus de toute limitation chiffrée",
      sources: [{ url: "https://melenchon2027.fr/programme2025/livre/chapitre16/s7/", consulteeLe: LE, editeur: "Mélenchon 2027" }],
    },
    pcf: {
      texte: "Régularisation des travailleurs sans-papiers (secteurs en tension) ; voies de migration légales et sûres ; remise en cause de l'externalisation européenne des contrôles",
      sources: [{ url: "https://www.france-vote.fr/candidats/fabien-roussel", consulteeLe: LE, editeur: "France-Vote" }],
    },
    ecologistes: {
      texte: "Statut de réfugié climatique, voies légales de migration, régularisation des personnes intégrées, sauvetage en mer",
      sources: [{ url: "https://votons-2027.fr/candidats/tondelier/programme", consulteeLe: LE, editeur: "votons-2027.fr" }],
    },
    ps: {
      texte: "Immigration « pilotée par le Parlement » selon les besoins économiques ; carte de séjour pluriannuelle ; abrogation de la loi immigration 2024 et voies légales de travail (Glucksmann)",
      sources: [{ url: "https://lcp.fr/actualites/smic-retraites-immigration-le-ps-presente-un-projet-de-144-pages-pour-preparer-2027", consulteeLe: LE, editeur: "LCP" }],
    },
    renaissance: {
      texte: "Quotas d'immigration de travail définis tous les 2 ans (partenaires sociaux + Parlement) ; système à points à la canadienne ; ligne « accueillir moins pour accueillir mieux »",
      sources: [{ url: "https://www.cnews.fr/france/2026-04-30/quotas-dimmigration-13e-mois-pour-tous-nouveau-code-du-travail-cooperation-avec", consulteeLe: LE, editeur: "CNews" }],
    },
    horizons: {
      texte: "« Verrou Schengen » contre les régularisations massives ; suspension possible de l'asile en cas de crise ; quotas annuels votés par le Parlement ; dénonciation de l'accord franco-algérien de 1968",
      sources: [{ url: "https://www.cnews.fr/france/2026-08-10/presidentielle-2027-verrou-schengen-suspension-de-lasile-ce-que-propose-edouard", consulteeLe: LE, editeur: "CNews" }],
    },
    modem: {
      texte: "Approche « pragmatique » : coopération avec pays d'origine, harmonisation européenne du droit d'asile, protection des frontières extérieures de l'UE ; pas de proposition chiffrée identifiée",
      sources: [{ url: "https://www.mouvementdemocrate.fr/programme/europe-2315", consulteeLe: LE, editeur: "Mouvement Démocrate" }],
    },
    lr: {
      texte: "Immigration légale réduite à moins de 50 000/an ; fin du droit du sol automatique ; référendum sur l'immigration ; AME transformée en aide d'urgence",
      sources: [{ url: "https://www.elyseescope.com/candidat/bruno-retailleau/immigration", consulteeLe: LE, editeur: "elyseescope.com" }],
    },
    rn: {
      texte: "Asile traité uniquement à l'étranger ; immigration légale plafonnée (~10 000/an évoqués) ; fin du droit du sol automatique ; « double frontière » européenne et nationale",
      sources: [{ url: "https://www.elyseescope.com/candidat/jordan-bardella/immigration", consulteeLe: LE, editeur: "elyseescope.com" }],
    },
    reconquete: {
      texte: "« Remigration » via un ministère dédié ; solde migratoire proche de zéro/négatif ; fin du droit du sol ; asile réduit à ~100 acceptations/an ; sortie de la CEDH",
      sources: [{ url: "https://www.elyseescope.com/questions/le-projet-de-remigration-d-eric-zemmour-pour-les-delinquants-et", consulteeLe: LE, editeur: "elyseescope.com" }],
    },
  },
  securite: {
    lfi: {
      texte: "Interdiction tasers/LBD, fin des peines plancher ; décarcération et alternatives à l'incarcération ; légalisation encadrée du cannabis",
      sources: [{ url: "https://votons-2027.fr/candidats/melenchon/programme/securite", consulteeLe: LE, editeur: "votons-2027.fr" }],
    },
    pcf: {
      texte: "Police de proximité (+30 000 recrutements) ; pas de peines plancher automatiques ; création de centres d'aide aux victimes de violences sexuelles/conjugales",
      sources: [{ url: "https://www.elyseescope.com/candidat/fabien-roussel/securite", consulteeLe: LE, editeur: "elyseescope.com" }],
    },
    ecologistes: {
      texte: "Prévention privilégiée sur la répression ; délit d'écocide ; cannabis légalisé encadré ; numerus clausus carcéral, +9 000 magistrats sur 10 ans",
      sources: [{ url: "https://www.france-vote.fr/actualites/programme-marine-tondelier-2027", consulteeLe: LE, editeur: "france-vote.fr" }],
    },
    ps: {
      texte: "Police de proximité modernisée ; convention citoyenne sur les drogues (hypothèse cannabis) ; doublement des Maisons du droit et de la justice",
      sources: [{ url: "https://www.wikiglucksmann.fr/programme.html", consulteeLe: LE, editeur: "wikiglucksmann.fr" }],
    },
    renaissance: {
      texte: "Hausse des effectifs police/gendarmerie ; lutte prioritaire contre narcotrafic et cybercriminalité ; réforme de la justice pénale des mineurs",
      sources: [{ url: "https://www.elyseescope.com/le-radar/gabriel-attal-programme-propositions-presidentielle-2027", consulteeLe: LE, editeur: "elyseescope.com" }],
    },
    horizons: {
      texte: "+10 000 policiers/gendarmes ; réponse pénale systématique dès la 1ère infraction ; peines courtes à la nordique, peines plancher pour atteintes graves",
      sources: [{ url: "https://www.elyseescope.com/candidat/edouard-philippe/securite", consulteeLe: LE, editeur: "elyseescope.com" }],
    },
    modem: {
      texte: "Renforcement des moyens de police et de prévention, refus du « populisme sécuritaire » ; pas de mesure chiffrée identifiée pour 2027",
      sources: [{ url: "https://www.politiquement.org/idees-politiques/securite/", consulteeLe: LE, editeur: "Politiquement.org" }],
    },
    lr: {
      texte: "« État d'urgence anti-trafics » (bouclage de quartiers, fouilles élargies) ; rétablissement des courtes peines de prison ; peines plancher pour crimes graves",
      sources: [{ url: "https://www.franceinfo.fr/politique/bruno-retailleau/en-campagne-pour-la-presidentielle-2027-bruno-retailleau-veut-boucler-les-quartiers-du-narcotrafic_7959272.html", consulteeLe: LE, editeur: "France Info" }],
    },
    rn: {
      texte: "Peines plancher et perpétuité réelle ; présomption de légitime défense pour les forces de l'ordre ; majorité pénale abaissée à 16 ans",
      sources: [{ url: "https://votons-2027.fr/candidats/bardella/programme", consulteeLe: LE, editeur: "votons-2027.fr" }],
    },
    reconquete: {
      texte: "Présomption de légitime défense ; peines plancher obligatoires et perpétuité réelle ; expulsion systématique des étrangers délinquants et fichés S",
      sources: [{ url: "https://tous-les-programmes.fr/partis/reconquete", consulteeLe: LE, editeur: "tous-les-programmes.fr" }],
    },
  },
  sante: {
    lfi: {
      texte: "« 100 % Sécu » : remboursement intégral, mutuelles intégrées à la Sécurité sociale ; pôle public du médicament ; interdiction des dépassements d'honoraires",
      sources: [{ url: "https://votons-2027.fr/candidats/melenchon/programme/sante", consulteeLe: LE, editeur: "votons-2027.fr" }],
    },
    pcf: {
      texte: "Plan de développement de l'hôpital public ; pôle public du médicament, levée des brevets vaccins ; loi-cadre sur la psychiatrie",
      sources: [{ url: "https://votons-2027.fr/candidats/roussel/programme", consulteeLe: LE, editeur: "votons-2027.fr" }],
    },
    ecologistes: {
      texte: "Plan santé scolaire (800 médecins, 1 000 psychologues) ; 2 000 nouveaux centres de santé ; interdiction des PFAS",
      sources: [{ url: "https://www.elyseescope.com/questions/les-21-priorites-du-programme-de-marine-tondelier-pour-2027", consulteeLe: LE, editeur: "elyseescope.com" }],
    },
    ps: {
      texte: "Plan pluriannuel pour l'hôpital public ; fin de la T2A au profit d'un financement global ; doublement des professionnels de santé mentale remboursés",
      sources: [{ url: "https://votons-2027.fr/candidats/glucksmann/programme/sante", consulteeLe: LE, editeur: "votons-2027.fr" }],
    },
    renaissance: {
      texte: "Incitations à l'installation contre les déserts médicaux ; refus de la « Grande Sécu » ; mutuelle publique à 1€/jour ; soutien à l'aide à mourir",
      sources: [{ url: "https://www.elyseescope.com/le-radar/gabriel-attal-et-la-sante-publique", consulteeLe: LE, editeur: "elyseescope.com" }],
    },
    horizons: {
      texte: "Prévention érigée en cause nationale ; plan d'investissement pluriannuel hospitalier ; dossier médical partagé et télémédecine généralisés",
      sources: [{ url: "https://www.elyseescope.com/questions/edouard-philippe-sante", consulteeLe: LE, editeur: "elyseescope.com" }],
    },
    modem: {
      texte: "Lutte contre la désertification médicale (cliniques mobiles) ; prévention ciblée sur les jeunes ; pas de mesure chiffrée identifiée pour 2027",
      sources: [{ url: "https://www.mouvementdemocrate.fr/sante-1?page=2", consulteeLe: LE, editeur: "mouvementdemocrate.fr" }],
    },
    lr: {
      texte: "Débureaucratisation de l'hôpital, gouvernance rendue aux médecins ; revalorisation salariale des soignants ; décentralisation du système de santé",
      sources: [{ url: "https://www.franceinfo.fr/politique/les-republicains/crise-a-l-hopital-premiere-chose-on-desengorge-l-hopital-deuxieme-chose-on-debureaucratise-propose-bruno-retailleau_5182798.html", consulteeLe: LE, editeur: "France Info" }],
    },
    rn: {
      texte: "Plan de 20 Md€ pour la santé ; arrêt des fermetures de lits/maternités ; -10 % de bureaucratie hospitalière",
      sources: [{ url: "https://votons-2027.fr/candidats/bardella/programme", consulteeLe: LE, editeur: "votons-2027.fr" }],
    },
    reconquete: {
      texte: "+40 000 personnels hospitaliers, +12 % salaire infirmiers/aides-soignants ; suppression de l'AME (aide médicale d'urgence seule maintenue)",
      sources: [{ url: "https://votons-2027.fr/candidats/zemmour/programme", consulteeLe: LE, editeur: "votons-2027.fr" }],
    },
  },
  education: {
    lfi: {
      texte: "Service public de la petite enfance (500 000 places de crèche) ; gratuité réelle de l'école (cantine, transport, fournitures)",
      sources: [{ url: "https://votons-2027.fr/candidats/melenchon/programme/education", consulteeLe: LE, editeur: "votons-2027.fr" }],
    },
    pcf: {
      texte: "Suppression de la sélection à l'entrée de l'université (type Parcoursup) ; bac pro allongé à 4 ans ; allocation étudiante de 850€/mois",
      sources: [{ url: "https://votons-2027.fr/candidats/roussel/programme", consulteeLe: LE, editeur: "votons-2027.fr" }],
    },
    ecologistes: {
      texte: "Classes à 19 élèves en primaire (12 en REP) d'ici 2032 ; +15 % de salaire enseignant sur 5 ans",
      sources: [{ url: "https://www.elyseescope.com/questions/les-21-priorites-du-programme-de-marine-tondelier-pour-2027", consulteeLe: LE, editeur: "elyseescope.com" }],
    },
    ps: {
      texte: "+60 000 enseignants et +20 % de salaire pour les nouveaux titulaires ; gratuité de l'université publique ; remplacement de Parcoursup par une allocation d'études universelle",
      sources: [{ url: "https://www.primaireouverte.fr/doctrines/fr-ps", consulteeLe: LE, editeur: "primaireouverte.fr" }],
    },
    renaissance: {
      texte: "Priorité à l'IA à l'école ; groupes de niveau en français/maths au collège ; DNB comme condition d'entrée au lycée",
      sources: [{ url: "https://www.elyseescope.com/candidat/gabriel-attal/education", consulteeLe: LE, editeur: "elyseescope.com" }],
    },
    horizons: {
      texte: "Savoirs fondamentaux et mérite, retour de l'autorité ; +20 % de salaire pour les enseignants",
      sources: [{ url: "https://fr.euronews.com/2026/10/09/presidentielle-2027-edouard-philippe-mise-sur-le-travail-et-la-reduction-des-depenses-publ", consulteeLe: LE, editeur: "Euronews" }],
    },
    modem: {
      texte: "École fondée sur l'effort, le respect et les valeurs collectives ; soutien au service national universel",
      sources: [{ url: "https://www.mouvementdemocrate.fr/programme/propositions-2451", consulteeLe: LE, editeur: "Mouvement Démocrate" }],
    },
    lr: {
      texte: "Examen d'entrée en 6e rétabli, groupes de niveau, fin du passage automatique ; 1 000 établissements publics « libres »",
      sources: [{ url: "https://www.publicsenat.fr/actualites/politique/presidentielle-2027-bruno-retailleau-veut-refonder-lecole-autour-de-quatre-axes-principaux", consulteeLe: LE, editeur: "Public Sénat" }],
    },
    rn: {
      texte: "Priorité français/maths/histoire ; revalorisation salariale des enseignants ; 100 000 logements étudiants en 5 ans",
      sources: [{ url: "https://votons-2027.fr/candidats/bardella/programme", consulteeLe: LE, editeur: "votons-2027.fr" }],
    },
    reconquete: {
      texte: "Uniforme obligatoire ; fin du collège unique (classes de niveau, filières pro dès la 5e) ; « roman national » dans les programmes",
      sources: [{ url: "https://www.cnews.fr/france/2023-09-10/eric-zemmour-il-est-plus-que-temps-dimposer-luniforme-lecole-1395112", consulteeLe: LE, editeur: "cnews.fr" }],
    },
  },
  ecologie: {
    lfi: {
      texte: "« Règle verte » constitutionnelle ; 100 % renouvelables et sortie progressive du nucléaire ; interdiction du glyphosate",
      sources: [{ url: "https://votons-2027.fr/candidats/melenchon/programme/climat", consulteeLe: LE, editeur: "votons-2027.fr" }],
    },
    pcf: {
      texte: "140 Md€/an pour le climat (objectifs GIEC) ; nationalisation de TotalEnergies/Engie aux côtés d'EDF ; -30 % des prix de l'électricité/gaz",
      sources: [{ url: "https://votons-2027.fr/candidats/roussel/programme", consulteeLe: LE, editeur: "votons-2027.fr" }],
    },
    ecologistes: {
      texte: "Sortie du nucléaire (convention citoyenne) ; neutralité carbone 2040 ; 7 Md€/an pour l'adaptation climatique, interdiction des « méga-bassines »",
      sources: [{ url: "https://entrevue.fr/elections/marine-tondelier-presente-le-programme-des-ecologistes-pour-2027/", consulteeLe: LE, editeur: "entrevue.fr" }],
    },
    ps: {
      texte: "-90 % d'émissions en 2040, neutralité 2050 ; leasing social (1M VE à 100€/mois) ; nouveaux EPR en complément des renouvelables ; doctrine PS : « nucléaire autant que nécessaire, renouvelables autant que possible »",
      sources: [{ url: "https://lcp.fr/actualites/presidentielle-2027-s-il-gagne-raphael-glucksmann-engagera-les-100-jours-de-la", consulteeLe: LE, editeur: "LCP" }],
    },
    renaissance: {
      texte: "-50 % d'émissions en 10 ans via mix nucléaire + renouvelables (pas d'objectif 100 % renouvelable) ; doublement du fonds chaleur géoénergie",
      sources: [{ url: "https://www.elyseescope.com/questions/gabriel-attal-ecologie-climat-2027", consulteeLe: LE, editeur: "elyseescope.com" }],
    },
    horizons: {
      texte: "Maintien du nucléaire + développement des renouvelables ; mécanisme d'ajustement carbone aux frontières européennes",
      sources: [{ url: "https://www.elyseescope.com/candidat/edouard-philippe/environnement", consulteeLe: LE, editeur: "elyseescope.com" }],
    },
    modem: {
      texte: "Émissions divisées par 4 d'ici 2050 ; réforme de la fiscalité carbone (fin des exonérations aviation/maritime) ; éolien offshore, hydrogène, bioéthanol",
      sources: [{ url: "https://www.mouvementdemocrate.fr/programme/propositions-2436", consulteeLe: LE, editeur: "Mouvement Démocrate" }],
    },
    lr: {
      texte: "Priorité totale au nucléaire (prolongation des réacteurs, EPR2, relance d'Astrid) ; arrêt des subventions à l'éolien/photovoltaïque",
      sources: [{ url: "https://www.sfen.org/rgn/presidentielle-2027-au-colloque-de-lufe-les-grands-partis-listent-leurs-positions-sur-le-nucleaire/", consulteeLe: LE, editeur: "Sfen" }],
    },
    rn: {
      texte: "Arrêt des nouveaux projets éoliens, sortie du marché européen de l'électricité ; relance du nucléaire, de l'hydroélectricité et de l'hydrogène",
      sources: [{ url: "https://votons-2027.fr/candidats/bardella/programme", consulteeLe: LE, editeur: "votons-2027.fr" }],
    },
    reconquete: {
      texte: "Annulation de l'interdiction des moteurs thermiques en 2035 ; suppression des subventions éoliennes ; 500 Md€ pour le nucléaire",
      sources: [{ url: "https://tous-les-programmes.fr/partis/reconquete", consulteeLe: LE, editeur: "tous-les-programmes.fr" }],
    },
  },
  europe: {
    lfi: {
      texte: "Stratégie « Plan A / Plan B » : refondation radicale des traités, « désobéissance européenne » (sortie des règles de déficit/dette)",
      sources: [{ url: "https://melenchon2027.fr/programme2025/livre/chapitre17/", consulteeLe: LE, editeur: "Mélenchon 2027" }],
    },
    pcf: {
      texte: "Référendum pour « reconquérir la souveraineté démocratique » (sans sortie de l'UE) ; fin de la règle des 3 % de déficit, BCE sous contrôle démocratique",
      sources: [{ url: "https://votons-2027.fr/candidats/roussel/programme", consulteeLe: LE, editeur: "votons-2027.fr" }],
    },
    ecologistes: {
      texte: "Approfondissement fédéral de l'UE, « sursaut d'intégration politique » ; soutien à une défense européenne commune",
      sources: [{ url: "https://www.elyseescope.com/questions/les-21-priorites-du-programme-de-marine-tondelier-pour-2027", consulteeLe: LE, editeur: "elyseescope.com" }],
    },
    ps: {
      texte: "« Saut fédéral » : budget commun, fin du droit de veto, Parlement européen renforcé, élargissement à l'Ukraine",
      sources: [{ url: "https://www.elyseescope.com/le-radar/raphael-glucksmann-positions-programme-20261017", consulteeLe: LE, editeur: "elyseescope.com" }],
    },
    renaissance: {
      texte: "Agenda de compétitivité (rapport Draghi) ; projet d'« États-Unis d'Europe » autour d'un noyau de 8-10 pays",
      sources: [{ url: "https://attalpresident.fr/actualites/gabriel-attal-dans-politico-europe-ukraine-ia-et-finances-publiques-quatre-priorites-pour-preparer-la-france-de-demain", consulteeLe: LE, editeur: "Politico via attalpresident.fr" }],
    },
    horizons: {
      texte: "État-major européen de défense, « Buy European Act » ; soutien à l'entrée de l'Ukraine dans l'OTAN",
      sources: [{ url: "https://votons-2027.fr/candidats/philippe/programme/europe", consulteeLe: LE, editeur: "Votons-2027" }],
    },
    modem: {
      texte: "Constitution européenne, président de l'UE élu au suffrage universel ; ressources propres (taxe GAFAM, carbone, transactions financières) ; fin de la règle de l'unanimité",
      sources: [{ url: "https://www.mouvementdemocrate.fr/programme/propositions-2317", consulteeLe: LE, editeur: "Mouvement Démocrate" }],
    },
    lr: {
      texte: "Droit européen subordonné à la Constitution française ; Conseil constitutionnel vérificateur ; refus d'une Europe fédérale",
      sources: [{ url: "https://www.cnews.fr/france/2026-09-30/presidentielle-2027-bruno-retailleau-veut-placer-le-droit-europeen-en-dessous-de", consulteeLe: LE, editeur: "CNews" }],
    },
    rn: {
      texte: "Abandon officiel du Frexit, mais contestation « de l'intérieur » des contraintes de l'UE ; réduction de moitié de la contribution nette au budget UE",
      sources: [{ url: "https://brusselssignal.eu/2026/05/stay-in-europe-ignore-some-rules-bardella-explicit-rns-new-eu-doctrine-ahead-of-2027/", consulteeLe: LE, editeur: "brusselssignal.eu" }],
    },
    reconquete: {
      texte: "Suppression de la Commission européenne (remplacée par un secrétariat) ; primauté du droit national ; refus de tout nouvel élargissement",
      sources: [{ url: "https://tous-les-programmes.fr/partis/reconquete", consulteeLe: LE, editeur: "tous-les-programmes.fr" }],
    },
  },
  defense: {
    lfi: {
      texte: "Sortie de l'OTAN « par étapes » ; doctrine de non-alignement ; refus d'une défense européenne intégrée et de l'objectif 3 % du PIB",
      sources: [{ url: "https://actu.orange.fr/politique/presidentielle-2027-s-il-est-elu-jean-luc-melenchon-promet-une-sortie-de-l-otan-par-etapes-magic-CNT000002p6UEJ.html", consulteeLe: LE, editeur: "Actu Orange" }],
    },
    pcf: {
      texte: "Sortie de l'OTAN et demande de sa dissolution ; signature du traité d'interdiction des armes nucléaires (TIAN) ; désengagement du Sahel",
      sources: [{ url: "https://www.pcf.fr/reaction_intervention_macron_defense", consulteeLe: LE, editeur: "PCF.fr" }],
    },
    ecologistes: {
      texte: "Diplomatie climatique et droits humains au cœur de l'action extérieure ; soutien à l'Ukraine, pistes de désarmement nucléaire",
      sources: [{ url: "https://www.elyseescope.com/questions/les-21-priorites-du-programme-de-marine-tondelier-pour-2027", consulteeLe: LE, editeur: "elyseescope.com" }],
    },
    ps: {
      texte: "Fonds européen de défense de 500 Md€ ; extension possible de la dissuasion nucléaire française aux partenaires UE ; OTAN jugée « politiquement morte » sous Trump mais pas de sortie prônée",
      sources: [{ url: "https://www.elyseescope.com/le-radar/raphael-glucksmann-positions-programme-20261017", consulteeLe: LE, editeur: "elyseescope.com" }],
    },
    renaissance: {
      texte: "Budget défense à 3 % du PIB (LPM 2024-2030) ; soutien à une armée européenne commune ; soutien militaire/financier durable à l'Ukraine, ligne atlantiste",
      sources: [{ url: "https://www.ifrap.org/comparateurs/presidentielles-2027", consulteeLe: LE, editeur: "IFRAP" }],
    },
    horizons: {
      texte: "Budget défense à 3 % du PIB d'ici 2030 ; soutien militaire à l'Ukraine et à d'autres démocraties menacées ; contre-terrorisme prioritaire",
      sources: [{ url: "https://votons-2027.fr/candidats/philippe/programme/europe", consulteeLe: LE, editeur: "Votons-2027" }],
    },
    modem: {
      texte: "Mutualisation européenne des dépenses militaires plutôt qu'effort national isolé ; bouclier anti-missile européen ; poursuite du désarmement nucléaire ; pas de chiffrage « 3 % du PIB » identifié",
      sources: [{ url: "http://www.mouvementdemocrate.fr/article/budget-de-la-defense-cest-par-une-mutualisation-europeenne-que-ns-rationaliserons-nos-depenses", consulteeLe: LE, editeur: "mouvementdemocrate.fr" }],
    },
    lr: {
      texte: "Soutien affiché à l'Ukraine face à la Russie ; multiplication par 5 des moyens d'IA de défense ; indépendance stratégique revendiquée, sans chiffrage propre distinct du budget gouvernemental",
      sources: [{ url: "https://opexnews.fr/budget-armees-defense-2027-presidentielle/", consulteeLe: LE, editeur: "OpexNews" }],
    },
    rn: {
      texte: "Retrait du commandement intégré de l'OTAN (maintien dans l'Alliance) ; budget défense à 3 % du PIB/55 Md€ en 2027 ; critique de la fiabilité américaine et de l'UE en défense",
      sources: [{ url: "https://www.institut-sciences-strategiques.org/france/la-politique-etrangere-et-la-defense-du-rassemblement-national-avant-2027/", consulteeLe: LE, editeur: "institut-sciences-strategiques.org" }],
    },
    reconquete: {
      texte: "Retrait du commandement intégré de l'OTAN ; budget défense à 70 Md€/an d'ici 2030 ; armée de terre à 100 000 soldats opérationnels",
      sources: [{ url: "https://monvote2027.fr/candidat/zemmour", consulteeLe: LE, editeur: "monvote2027.fr" }],
    },
  },
  institutions: {
    lfi: {
      texte: "Assemblée constituante pour une VIe République parlementaire ; proportionnelle aux législatives ; RIC législatif/constituant/révocatoire ; suppression du 49.3",
      sources: [{ url: "https://votons-2027.fr/candidats/melenchon/programme/institutions", consulteeLe: LE, editeur: "votons-2027.fr" }],
    },
    pcf: {
      texte: "« Déprésidentialisation » des institutions, pouvoirs réels au Parlement ; proportionnelle intégrale ; RIP, droit de vote des résidents étrangers aux locales",
      sources: [{ url: "https://po.pcf.fr/wp-content/uploads/sites/40/2026/07/Base-commune.pdf", consulteeLe: LE, editeur: "Base commune 40e congrès" }],
    },
    ecologistes: {
      texte: "« Première République écologique et citoyenne » : fin du présidentialisme, indépendance de la justice sanctuarisée ; proportionnelle",
      sources: [{ url: "https://www.france24.com/fr/info-en-continu/20260713-2027-les-ecologistes-veulent-instaurer-la-premi%C3%A8re-r%C3%A9publique-%C3%A9cologique-et-citoyenne", consulteeLe: LE, editeur: "France 24" }],
    },
    ps: {
      texte: "VIe République par révision négociable (PS) ; suppression du 49.3 (Glucksmann) remplacé par un vote de confiance, proportionnelle, convention citoyenne constituante",
      sources: [{ url: "https://www.wikiglucksmann.fr/programme.html", consulteeLe: LE, editeur: "wikiglucksmann.fr" }],
    },
    renaissance: {
      texte: "Réduction du nombre de parlementaires (577→350 députés, 348→200 sénateurs) ; référendums annuels à questions multiples ; pas de priorité à la proportionnelle",
      sources: [{ url: "https://actu.orange.fr/politique/presidentielle-2027-gabriel-attal-annonce-la-plus-grande-reforme-institutionnelle-en-cas-d-election-magic-CNT000002qRGYZ.html", consulteeLe: LE, editeur: "Orange Actu" }],
    },
    horizons: {
      texte: "Modernisation de la Ve République sans rupture ; réduction du nombre de parlementaires et 15 % de proportionnelle ; décentralisation approfondie",
      sources: [{ url: "https://solutiondemocratique.fr/edouard-philippe-presidentielle-2027-programme/", consulteeLe: LE, editeur: "SolutionDémocratique" }],
    },
    modem: {
      texte: "Proportionnelle pour les députés, reconnaissance du vote blanc ; conventions citoyennes et référendums ; « Banque de la démocratie » pour financer les partis",
      sources: [{ url: "https://www.mouvementdemocrate.fr/programme/propositions-2427", consulteeLe: LE, editeur: "Mouvement Démocrate" }],
    },
    lr: {
      texte: "Référendum élargi (article 11) à tout le domaine de la loi ; abaissement du seuil du RIP ; suppression de la quasi-totalité des agences/opérateurs de l'État",
      sources: [{ url: "https://www.publicsenat.fr/actualites/politique/presidentielle-2027-bruno-retailleau-veut-renverser-la-table-avec-une-profonde-reforme-constitutionnelle", consulteeLe: LE, editeur: "Public Sénat" }],
    },
    rn: {
      texte: "Référendum d'initiative citoyenne (RIC) ; proportionnelle intégrale aux législatives ; pas de passage à une VIe République",
      sources: [{ url: "https://votons-2027.fr/candidats/bardella/programme", consulteeLe: LE, editeur: "votons-2027.fr" }],
    },
    reconquete: {
      texte: "Réforme des institutions par référendum sans VIe République ; référendum obligatoire pour toute révision constitutionnelle ; soutien à un RIC",
      sources: [{ url: "https://solutiondemocratique.fr/eric-zemmour-programme-presidentielle2027/", consulteeLe: LE, editeur: "solutiondemocratique.fr" }],
    },
  },
}
