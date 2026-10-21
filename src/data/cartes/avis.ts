// Cartes « Avis » : on demande l'opinion, il n'y a pas de bonne réponse.
// Chaque option liste les partis dont la proposition 2027 (PROGRAMMES) ou le vote
// à l'Assemblée (VOTES) va clairement dans ce sens ; dans le doute, le parti n'est pas cité.
// Les sources de chaque carte couvrent tous les partis cités dans ses options.

import type { CarteAvis } from '../types'
import { PROGRAMMES } from '../programmes'
import { VOTES } from '../votes'

export const CARTES_AVIS: CarteAvis[] = [
  /* ---------- Économie ---------- */
  {
    id: 'a01',
    type: 'avis',
    theme: 'economie',
    question: 'Pour gagner plus à la fin du mois, quelle piste te parle le plus ?',
    options: [
      { id: 'a', libelle: 'Augmenter nettement le SMIC par la loi', partis: ['lfi', 'pcf', 'ps', 'ecologistes'] },
      { id: 'b', libelle: 'Alléger les cotisations et prélèvements sur les salaires', partis: ['rn', 'lr', 'reconquete'] },
    ],
    contexte:
      'LFI, le PCF et le PS proposent un SMIC à 1 600 € net, les Écologistes à 2 000 € brut. Le RN veut exonérer de cotisations patronales les hausses de salaire, LR instaurer un seuil « zéro cotisation » au-delà de 1 623 heures par an et Reconquête baisser les charges sociales (CSG).',
    sources: [
      PROGRAMMES.economie.lfi.sources[0],
      PROGRAMMES.economie.pcf.sources[0],
      PROGRAMMES.economie.ps.sources[0],
      PROGRAMMES.economie.ecologistes.sources[0],
      PROGRAMMES.economie.rn.sources[0],
      PROGRAMMES.economie.lr.sources[0],
      PROGRAMMES.economie.reconquete.sources[0],
    ],
    fiches: ['personnalite-glucksmann', 'personnalite-bardella'],
  },
  {
    id: 'a02',
    type: 'avis',
    theme: 'economie',
    question: 'Faut-il taxer davantage les plus grandes fortunes ?',
    options: [
      {
        id: 'a',
        libelle: 'Oui, avec un impôt sur la fortune ou une taxe sur les très gros patrimoines',
        partis: ['lfi', 'pcf', 'ecologistes', 'ps'],
      },
      { id: 'b', libelle: 'Plutôt un impôt minimum mondial sur les bénéfices des entreprises', partis: ['modem'] },
      {
        id: 'c',
        libelle: 'Non : pas de hausse d’impôts, il faut d’abord réduire les dépenses publiques',
        partis: ['renaissance', 'horizons', 'lr'],
      },
    ],
    contexte:
      'LFI et les Écologistes défendent une taxe « Zucman » au-delà de 100 M€ de patrimoine, le PCF un ISF triplé, le PS un « ISF climat » et la fin de la flat tax. Le MoDem propose un impôt minimum mondial sur les bénéfices des entreprises. Renaissance refuse toute hausse d’impôts, Horizons et LR prévoient de fortes économies sur les dépenses publiques.',
    sources: [
      PROGRAMMES.economie.lfi.sources[0],
      PROGRAMMES.economie.pcf.sources[0],
      PROGRAMMES.economie.ecologistes.sources[0],
      PROGRAMMES.economie.ps.sources[0],
      PROGRAMMES.economie.modem.sources[0],
      PROGRAMMES.economie.renaissance.sources[0],
      PROGRAMMES.economie.horizons.sources[0],
      PROGRAMMES.economie.lr.sources[0],
    ],
    fiches: ['parti-lfi', 'parti-modem', 'parti-renaissance'],
  },
  {
    id: 'a03',
    type: 'avis',
    theme: 'economie',
    question: 'Pour ton pouvoir d’achat, quelle mesure te parle le plus ?',
    options: [
      { id: 'a', libelle: 'Bloquer les prix de l’énergie et des produits de première nécessité', partis: ['lfi'] },
      { id: 'b', libelle: 'Baisser ou supprimer la TVA sur l’énergie ou les produits de première nécessité', partis: ['pcf', 'rn'] },
      { id: 'c', libelle: 'Baisser les impôts des classes moyennes', partis: ['renaissance'] },
      { id: 'd', libelle: 'Une allocation familiale de 350 € par mois dès le premier enfant', partis: ['horizons'] },
    ],
    contexte:
      'LFI propose un blocage des prix, le PCF la suppression de la TVA sur les produits de première nécessité et le RN une TVA à 5,5 % sur l’énergie. Renaissance prévoit une baisse ciblée de 2 Md€ d’impôts pour les classes moyennes, Horizons une allocation familiale unique de 350 € par mois dès le premier enfant.',
    sources: [
      PROGRAMMES.economie.lfi.sources[0],
      PROGRAMMES.economie.pcf.sources[0],
      PROGRAMMES.economie.rn.sources[0],
      PROGRAMMES.economie.renaissance.sources[0],
      PROGRAMMES.economie.horizons.sources[0],
    ],
    fiches: ['parti-lfi', 'parti-rn', 'parti-horizons'],
  },

  /* ---------- Retraites ---------- */
  {
    id: 'a04',
    type: 'avis',
    theme: 'retraites',
    question: 'Ton âge idéal pour partir à la retraite ?',
    options: [
      { id: 'a', libelle: '60 ans', partis: ['lfi', 'pcf'] },
      { id: 'b', libelle: '62 ans', partis: ['ps', 'ecologistes'] },
      { id: 'c', libelle: '63 ou 64 ans', partis: ['lr', 'modem', 'reconquete'] },
      { id: 'd', libelle: '65 ans', partis: ['horizons'] },
    ],
    contexte:
      'LFI et le PCF veulent revenir à 60 ans, le PS et les Écologistes à 62 ans (les Écologistes visant 60 ans pour les carrières longues et les métiers pénibles). LR propose un départ possible dès 63 ans avec décote, Reconquête 64 ans, le MoDem a maintenu les 64 ans au gouvernement et Horizons vise 65 ans. Renaissance veut remplacer l’âge légal par la seule durée de cotisation, et le RN est divisé entre Jordan Bardella et Marine Le Pen.',
    sources: [
      PROGRAMMES.retraites.lfi.sources[0],
      PROGRAMMES.retraites.pcf.sources[0],
      PROGRAMMES.retraites.ps.sources[0],
      PROGRAMMES.retraites.ecologistes.sources[0],
      PROGRAMMES.retraites.lr.sources[0],
      PROGRAMMES.retraites.modem.sources[0],
      PROGRAMMES.retraites.reconquete.sources[0],
      PROGRAMMES.retraites.horizons.sources[0],
      PROGRAMMES.retraites.renaissance.sources[0],
      PROGRAMMES.retraites.rn.sources[0],
      VOTES.retraites2023.sources[0],
    ],
    fiches: ['sujet-retraites'],
  },
  {
    id: 'a05',
    type: 'avis',
    theme: 'retraites',
    question: 'Pour financer les retraites de demain, tu choisirais…',
    options: [
      { id: 'a', libelle: 'D’ajouter une part d’épargne placée (capitalisation)', partis: ['renaissance', 'horizons', 'lr', 'reconquete'] },
      { id: 'b', libelle: 'De faire aussi cotiser les revenus financiers', partis: ['pcf'] },
    ],
    contexte:
      'Renaissance propose de verser 1 000 € à la naissance sur un compte de capitalisation ; Horizons, LR et Reconquête prévoient aussi un volet capitalisation. Le PCF veut élargir les cotisations aux revenus financiers. Au RN, Jordan Bardella est favorable à la capitalisation, Marine Le Pen y est opposée.',
    sources: [
      PROGRAMMES.retraites.renaissance.sources[0],
      PROGRAMMES.retraites.horizons.sources[0],
      PROGRAMMES.retraites.lr.sources[0],
      PROGRAMMES.retraites.reconquete.sources[0],
      PROGRAMMES.retraites.pcf.sources[0],
      PROGRAMMES.retraites.rn.sources[0],
    ],
    fiches: ['sujet-retraites', 'personnalite-bardella'],
  },

  /* ---------- Immigration ---------- */
  {
    id: 'a06',
    type: 'avis',
    theme: 'immigration',
    question: 'L’immigration en France, tu la voudrais…',
    options: [
      { id: 'a', libelle: 'Plus ouverte, avec des régularisations et des voies d’entrée légales', partis: ['lfi', 'pcf', 'ecologistes'] },
      { id: 'b', libelle: 'Pilotée, avec des objectifs fixés par le Parlement', partis: ['ps', 'renaissance', 'horizons'] },
      { id: 'c', libelle: 'Nettement réduite, avec un plafond annuel bas', partis: ['lr', 'rn'] },
      { id: 'd', libelle: 'Réduite au minimum, avec un solde migratoire nul voire négatif', partis: ['reconquete'] },
    ],
    contexte:
      'LFI, le PCF et les Écologistes proposent des régularisations de personnes sans papiers et, pour le PCF et les Écologistes, des voies légales de migration. Le PS veut une immigration « pilotée par le Parlement », Renaissance et Horizons des quotas validés par le Parlement. LR vise moins de 50 000 entrées légales par an, le RN environ 10 000, et Reconquête un solde migratoire proche de zéro voire négatif (« remigration »).',
    sources: [
      PROGRAMMES.immigration.lfi.sources[0],
      PROGRAMMES.immigration.pcf.sources[0],
      PROGRAMMES.immigration.ecologistes.sources[0],
      PROGRAMMES.immigration.ps.sources[0],
      PROGRAMMES.immigration.renaissance.sources[0],
      PROGRAMMES.immigration.horizons.sources[0],
      PROGRAMMES.immigration.lr.sources[0],
      PROGRAMMES.immigration.rn.sources[0],
      PROGRAMMES.immigration.reconquete.sources[0],
    ],
    fiches: ['sujet-immigration', 'personnalite-zemmour'],
  },
  {
    id: 'a07',
    type: 'avis',
    theme: 'immigration',
    question: 'Une personne fuit son pays et veut demander l’asile en France. Selon toi, il faudrait…',
    options: [
      { id: 'a', libelle: 'Lui ouvrir des voies légales et sûres pour venir', partis: ['ecologistes', 'pcf'] },
      { id: 'b', libelle: 'Traiter sa demande selon des règles communes à toute l’Europe', partis: ['modem'] },
      { id: 'c', libelle: 'Qu’elle dépose sa demande depuis l’étranger, avant de venir', partis: ['rn'] },
      { id: 'd', libelle: 'N’accorder l’asile que dans de très rares cas', partis: ['reconquete'] },
    ],
    contexte:
      'Les Écologistes et le PCF défendent des voies de migration légales et sûres, les Écologistes y ajoutant le sauvetage en mer et un statut de réfugié climatique. Le MoDem veut harmoniser le droit d’asile au niveau européen. Le RN propose de traiter l’asile uniquement à l’étranger, Reconquête de le limiter à une centaine d’acceptations par an.',
    sources: [
      PROGRAMMES.immigration.ecologistes.sources[0],
      PROGRAMMES.immigration.pcf.sources[0],
      PROGRAMMES.immigration.modem.sources[0],
      PROGRAMMES.immigration.rn.sources[0],
      PROGRAMMES.immigration.reconquete.sources[0],
    ],
    fiches: ['sujet-immigration', 'sujet-europe'],
  },
  {
    id: 'a08',
    type: 'avis',
    theme: 'immigration',
    question: 'La loi immigration votée fin 2023 : on la garde ou on l’abroge ?',
    options: [
      { id: 'a', libelle: 'On l’abroge', partis: ['ps', 'lfi', 'ecologistes', 'pcf'] },
      { id: 'b', libelle: 'On la garde', partis: ['rn', 'lr', 'horizons', 'renaissance'] },
    ],
    contexte:
      'Adoptée par 349 voix contre 186, elle a été votée par le RN, LR, Horizons et la majorité des député·es Renaissance, tandis que LFI, le PS, les Écologistes et le PCF ont voté contre ; le MoDem était divisé. Le texte serait passé sans les voix du RN, mais pas sans celles de LR. Le PS propose aujourd’hui de l’abroger.',
    sources: [VOTES.immigration2023.sources[0], VOTES.immigration2023.sources[1], PROGRAMMES.immigration.ps.sources[0]],
    fiches: ['sujet-immigration', 'parti-ps'],
  },

  /* ---------- Sécurité ---------- */
  {
    id: 'a09',
    type: 'avis',
    theme: 'securite',
    question: 'Face à la délinquance, quelle réponse te semble la plus juste ?',
    options: [
      { id: 'a', libelle: 'Moins de prison : miser sur la prévention et les alternatives', partis: ['lfi', 'ecologistes'] },
      { id: 'b', libelle: 'Des peines de prison courtes, mais rapides et systématiques', partis: ['horizons', 'lr'] },
      { id: 'c', libelle: 'Des peines plus lourdes, jusqu’à la perpétuité réelle', partis: ['rn', 'reconquete'] },
    ],
    contexte:
      'LFI prône la décarcération et les alternatives à l’incarcération, les Écologistes la prévention et un numerus clausus carcéral. Horizons veut une réponse pénale dès la première infraction avec des peines courtes « à la nordique », LR le rétablissement des courtes peines de prison. Le RN et Reconquête défendent les peines plancher et la perpétuité réelle.',
    sources: [
      PROGRAMMES.securite.lfi.sources[0],
      PROGRAMMES.securite.ecologistes.sources[0],
      PROGRAMMES.securite.horizons.sources[0],
      PROGRAMMES.securite.lr.sources[0],
      PROGRAMMES.securite.rn.sources[0],
      PROGRAMMES.securite.reconquete.sources[0],
    ],
    fiches: ['parti-horizons', 'parti-rn'],
  },
  {
    id: 'a10',
    type: 'avis',
    theme: 'securite',
    question: 'Les peines plancher (une peine minimale obligatoire pour certains crimes ou délits) : pour ou contre ?',
    options: [
      { id: 'a', libelle: 'Pour, au moins pour les faits les plus graves', partis: ['horizons', 'lr', 'rn', 'reconquete'] },
      { id: 'b', libelle: 'Contre : chaque peine doit être décidée au cas par cas', partis: ['lfi', 'pcf'] },
    ],
    contexte:
      'Horizons et LR veulent des peines plancher pour les atteintes ou crimes graves, le RN et Reconquête plus largement (obligatoires pour Reconquête). LFI propose d’y mettre fin et le PCF refuse les peines plancher automatiques.',
    sources: [
      PROGRAMMES.securite.horizons.sources[0],
      PROGRAMMES.securite.lr.sources[0],
      PROGRAMMES.securite.rn.sources[0],
      PROGRAMMES.securite.reconquete.sources[0],
      PROGRAMMES.securite.lfi.sources[0],
      PROGRAMMES.securite.pcf.sources[0],
    ],
    fiches: ['parti-lr', 'parti-lfi'],
  },
  {
    id: 'a11',
    type: 'avis',
    theme: 'securite',
    question: 'Cannabis et trafic de drogue : quelle stratégie ?',
    options: [
      { id: 'a', libelle: 'Légaliser le cannabis, de façon encadrée', partis: ['lfi', 'ecologistes'] },
      { id: 'b', libelle: 'Ouvrir d’abord un grand débat citoyen sur les drogues', partis: ['ps'] },
      { id: 'c', libelle: 'Concentrer les efforts sur la lutte contre les trafics', partis: ['lr', 'renaissance'] },
    ],
    contexte:
      'LFI et les Écologistes proposent une légalisation encadrée du cannabis, le PS une convention citoyenne sur les drogues. LR veut un « état d’urgence anti-trafics » (bouclage de quartiers, fouilles élargies) et Renaissance faire du narcotrafic une priorité. En 2025, la loi contre le narcotrafic a été adoptée par 396 voix contre 68 ; seul le groupe LFI s’y est opposé à l’unanimité.',
    sources: [
      PROGRAMMES.securite.lfi.sources[0],
      PROGRAMMES.securite.ecologistes.sources[0],
      PROGRAMMES.securite.ps.sources[0],
      PROGRAMMES.securite.lr.sources[0],
      PROGRAMMES.securite.renaissance.sources[0],
      VOTES.narcotrafic2025.sources[0],
    ],
    fiches: ['parti-lfi', 'parti-ps', 'personnalite-retailleau'],
  },

  /* ---------- Santé ---------- */
  {
    id: 'a12',
    type: 'avis',
    theme: 'sante',
    question: 'Une Sécu qui rembourse 100 % de tes soins, sans besoin de mutuelle : tu signes ?',
    options: [
      { id: 'a', libelle: 'Oui, la Sécu doit tout rembourser', partis: ['lfi', 'pcf'] },
      { id: 'b', libelle: 'Non, plutôt garder les mutuelles, avec une mutuelle publique à petit prix', partis: ['renaissance'] },
    ],
    contexte:
      'LFI et le PCF défendent le « 100 % Sécu » : remboursement intégral des soins prescrits, avec les mutuelles intégrées à la Sécurité sociale pour LFI. Renaissance refuse cette « Grande Sécu » et propose une mutuelle publique à 1 € par jour.',
    sources: [PROGRAMMES.sante.lfi.sources[0], PROGRAMMES.retraites.pcf.sources[0], PROGRAMMES.sante.renaissance.sources[0]],
    fiches: ['parti-lfi', 'parti-renaissance'],
  },
  {
    id: 'a13',
    type: 'avis',
    theme: 'sante',
    question: 'Pas de médecin près de chez toi ? Contre les déserts médicaux, la priorité serait…',
    options: [
      { id: 'a', libelle: 'Ouvrir beaucoup plus de centres de santé', partis: ['ecologistes'] },
      { id: 'b', libelle: 'Inciter les médecins à s’installer là où il en manque', partis: ['renaissance'] },
      { id: 'c', libelle: 'Envoyer des cliniques mobiles dans les zones mal desservies', partis: ['modem'] },
      { id: 'd', libelle: 'Arrêter les fermetures de lits et de maternités', partis: ['rn'] },
    ],
    contexte:
      'Les Écologistes proposent 2 000 nouveaux centres de santé, Renaissance des incitations à l’installation et le MoDem des cliniques mobiles. Le RN veut arrêter les fermetures de lits et de maternités, dans un plan de 20 Md€ pour la santé.',
    sources: [
      PROGRAMMES.sante.ecologistes.sources[0],
      PROGRAMMES.sante.renaissance.sources[0],
      PROGRAMMES.sante.modem.sources[0],
      PROGRAMMES.sante.rn.sources[0],
    ],
    fiches: ['parti-ecologistes', 'parti-modem'],
  },
  {
    id: 'a14',
    type: 'avis',
    theme: 'sante',
    question: 'L’aide à mourir, adoptée définitivement à l’Assemblée en juillet 2026 : tu es plutôt pour ou contre ?',
    options: [
      { id: 'a', libelle: 'Plutôt pour', partis: ['lfi', 'ps', 'ecologistes', 'pcf', 'renaissance'] },
      { id: 'b', libelle: 'Plutôt contre', partis: ['lr', 'rn'] },
    ],
    contexte:
      'Le texte a été adopté par 291 voix contre 241. En première lecture, LFI, le PS et les Écologistes ont voté pour de façon quasi unanime, le PCF et Renaissance majoritairement, tandis que LR et le RN ont voté majoritairement contre ; le MoDem et Horizons étaient divisés. Renaissance inscrit son soutien à l’aide à mourir dans ses propositions.',
    sources: [VOTES.finDeVie2025.sources[0], VOTES.finDeVie2025.sources[1], PROGRAMMES.sante.renaissance.sources[0]],
    fiches: ['parti-renaissance', 'parti-rn'],
  },

  /* ---------- Éducation ---------- */
  {
    id: 'a15',
    type: 'avis',
    theme: 'education',
    question: 'À l’école, la priorité n° 1 devrait être…',
    options: [
      { id: 'a', libelle: 'Une école vraiment gratuite : cantine, transports, fournitures', partis: ['lfi'] },
      { id: 'b', libelle: 'Des classes moins chargées et des profs mieux payé·es', partis: ['ecologistes', 'ps'] },
      { id: 'c', libelle: 'Faire entrer l’intelligence artificielle en classe', partis: ['renaissance'] },
      { id: 'd', libelle: 'Les savoirs fondamentaux, l’effort et le respect de l’autorité', partis: ['horizons', 'rn', 'modem'] },
    ],
    contexte:
      'LFI veut la gratuité réelle de l’école. Les Écologistes visent des classes de 19 élèves en primaire et 15 % de hausse de salaire pour les enseignant·es, le PS 60 000 enseignant·es de plus. Renaissance donne la priorité à l’IA à l’école ; Horizons, le RN et le MoDem mettent en avant les savoirs fondamentaux, l’autorité ou l’effort.',
    sources: [
      PROGRAMMES.education.lfi.sources[0],
      PROGRAMMES.education.ecologistes.sources[0],
      PROGRAMMES.education.ps.sources[0],
      PROGRAMMES.education.renaissance.sources[0],
      PROGRAMMES.education.horizons.sources[0],
      PROGRAMMES.education.rn.sources[0],
      PROGRAMMES.education.modem.sources[0],
    ],
    fiches: ['parti-lfi', 'parti-horizons', 'personnalite-attal'],
  },
  {
    id: 'a16',
    type: 'avis',
    theme: 'education',
    question: 'Comment aider au mieux les élèves en difficulté ?',
    options: [
      { id: 'a', libelle: 'Avec des classes beaucoup moins chargées', partis: ['ecologistes'] },
      { id: 'b', libelle: 'Avec des groupes de niveau en français et en maths', partis: ['renaissance'] },
      { id: 'c', libelle: 'Avec un examen d’entrée en 6e et la fin du passage automatique d’une classe à l’autre', partis: ['lr'] },
      { id: 'd', libelle: 'En orientant plus tôt, avec des filières pro dès la 5e', partis: ['reconquete'] },
    ],
    contexte:
      'Les Écologistes proposent des classes de 19 élèves en primaire (12 en éducation prioritaire). Renaissance veut des groupes de niveau en français et en maths au collège ; LR aussi, avec le retour d’un examen d’entrée en 6e et la fin du passage automatique. Reconquête propose de mettre fin au collège unique, avec des classes de niveau et des filières pro dès la 5e.',
    sources: [
      PROGRAMMES.education.ecologistes.sources[0],
      PROGRAMMES.education.renaissance.sources[0],
      PROGRAMMES.education.lr.sources[0],
      PROGRAMMES.education.reconquete.sources[0],
    ],
    fiches: ['parti-lr', 'parti-reconquete'],
  },
  {
    id: 'a17',
    type: 'avis',
    theme: 'education',
    question: 'Étudiant·e, qu’est-ce qui t’aiderait le plus ?',
    options: [
      { id: 'a', libelle: 'Une allocation d’études versée à chaque étudiant·e', partis: ['pcf', 'ps'] },
      { id: 'b', libelle: 'Beaucoup plus de logements étudiants', partis: ['rn'] },
    ],
    contexte:
      'Le PCF propose une allocation étudiante de 850 € par mois, le PS une allocation d’études universelle et la gratuité de l’université publique. Le RN prévoit 100 000 logements étudiants en 5 ans.',
    sources: [PROGRAMMES.education.pcf.sources[0], PROGRAMMES.education.ps.sources[0], PROGRAMMES.education.rn.sources[0]],
    fiches: ['parti-pcf', 'personnalite-roussel', 'parti-rn'],
  },

  /* ---------- Écologie ---------- */
  {
    id: 'a18',
    type: 'avis',
    theme: 'ecologie',
    question: 'Le nucléaire, on en fait quoi ?',
    options: [
      { id: 'a', libelle: 'On en sort progressivement', partis: ['lfi', 'ecologistes'] },
      { id: 'b', libelle: 'On le garde, voire on construit des réacteurs, et on développe aussi les renouvelables', partis: ['ps', 'renaissance', 'horizons'] },
      { id: 'c', libelle: 'On relance fortement le nucléaire et on arrête de soutenir l’éolien', partis: ['lr', 'rn', 'reconquete'] },
    ],
    contexte:
      'LFI vise 100 % de renouvelables et une sortie progressive du nucléaire ; les Écologistes veulent en sortir via une convention citoyenne. Le PS (nouveaux EPR), Renaissance et Horizons misent à la fois sur le nucléaire et les renouvelables. LR donne la « priorité totale » au nucléaire et veut arrêter les subventions à l’éolien et au solaire, le RN arrêter les nouveaux projets éoliens et Reconquête supprimer les subventions éoliennes.',
    sources: [
      PROGRAMMES.ecologie.lfi.sources[0],
      PROGRAMMES.ecologie.ecologistes.sources[0],
      PROGRAMMES.ecologie.ps.sources[0],
      PROGRAMMES.ecologie.renaissance.sources[0],
      PROGRAMMES.ecologie.horizons.sources[0],
      PROGRAMMES.ecologie.lr.sources[0],
      PROGRAMMES.ecologie.rn.sources[0],
      PROGRAMMES.ecologie.reconquete.sources[0],
    ],
    fiches: ['sujet-nucleaire'],
  },
  {
    id: 'a19',
    type: 'avis',
    theme: 'ecologie',
    question: 'L’avion plus cher et le train moins cher, grâce aux taxes : bonne idée ?',
    options: [
      { id: 'a', libelle: 'Oui, l’avion doit payer davantage pour son impact sur le climat', partis: ['ecologistes', 'modem'] },
      { id: 'b', libelle: 'Non, il faut plutôt baisser les taxes sur l’énergie', partis: [] },
    ],
    contexte:
      'Les Écologistes veulent réorienter la fiscalité des transports (avion plus cher, train moins cher) et le MoDem mettre fin aux exonérations de fiscalité carbone de l’aviation et du transport maritime. Le RN propose de son côté une TVA à 5,5 % sur l’énergie.',
    sources: [PROGRAMMES.economie.ecologistes.sources[0], PROGRAMMES.ecologie.modem.sources[0], PROGRAMMES.economie.rn.sources[0]],
    fiches: ['parti-ecologistes', 'personnalite-tondelier'],
  },
  {
    id: 'a20',
    type: 'avis',
    theme: 'ecologie',
    question: 'La loi Duplomb (2025) prévoyait notamment de réautoriser l’acétamipride, un pesticide interdit. Tu l’aurais votée ?',
    options: [
      { id: 'a', libelle: 'Oui, pour', partis: ['rn', 'lr', 'renaissance', 'horizons', 'modem'] },
      { id: 'b', libelle: 'Non, contre', partis: ['lfi', 'ps', 'ecologistes', 'pcf'] },
    ],
    contexte:
      'Adoptée par 316 voix contre 223, elle a été votée par le RN, LR et la majorité des député·es Renaissance, Horizons et MoDem ; LFI, le PS, les Écologistes et le PCF ont voté contre à l’unanimité. Le Conseil constitutionnel a ensuite censuré la réintroduction de l’acétamipride, et une pétition contre le texte a dépassé 2,1 millions de signatures.',
    sources: [VOTES.duplomb2025.sources[0], VOTES.duplomb2025.sources[1]],
    fiches: ['parti-ecologistes', 'parti-lr'],
  },

  /* ---------- Europe ---------- */
  {
    id: 'a21',
    type: 'avis',
    theme: 'europe',
    question: 'L’Union européenne, tu la voudrais…',
    options: [
      { id: 'a', libelle: 'Plus intégrée, vers une Europe fédérale', partis: ['ps', 'ecologistes', 'modem', 'renaissance'] },
      { id: 'b', libelle: 'Profondément transformée : changer les traités et leurs règles budgétaires', partis: ['lfi', 'pcf'] },
      { id: 'c', libelle: 'Avec moins de pouvoirs, au profit des États et du droit national', partis: ['lr', 'rn', 'reconquete'] },
    ],
    contexte:
      'Le PS veut un « saut fédéral », les Écologistes un « sursaut d’intégration politique », le MoDem une Constitution européenne et Renaissance des « États-Unis d’Europe » autour de 8 à 10 pays. LFI (stratégie « Plan A / Plan B », « désobéissance européenne ») et le PCF (sans sortie de l’UE) veulent changer en profondeur les règles européennes. LR veut subordonner le droit européen à la Constitution française, le RN, qui a abandonné le Frexit, contester les contraintes de l’UE « de l’intérieur », et Reconquête supprimer la Commission européenne.',
    sources: [
      PROGRAMMES.europe.ps.sources[0],
      PROGRAMMES.europe.ecologistes.sources[0],
      PROGRAMMES.europe.modem.sources[0],
      PROGRAMMES.europe.renaissance.sources[0],
      PROGRAMMES.europe.lfi.sources[0],
      PROGRAMMES.europe.pcf.sources[0],
      PROGRAMMES.europe.lr.sources[0],
      PROGRAMMES.europe.rn.sources[0],
      PROGRAMMES.europe.reconquete.sources[0],
    ],
    fiches: ['sujet-europe'],
  },
  {
    id: 'a22',
    type: 'avis',
    theme: 'europe',
    question: 'La France verse chaque année de l’argent au budget européen. Faut-il payer moins ?',
    options: [
      { id: 'a', libelle: 'Oui, il faut réduire nettement notre contribution', partis: ['rn', 'reconquete'] },
      { id: 'b', libelle: 'Non, l’UE devrait même avoir davantage de moyens communs', partis: ['modem', 'ps'] },
    ],
    contexte:
      'Le RN veut réduire de moitié la contribution nette de la France au budget européen, Reconquête de 20 %. Le MoDem propose au contraire des ressources propres pour l’UE (taxes sur les GAFAM, le carbone, les transactions financières) et le PS un budget commun.',
    sources: [
      PROGRAMMES.europe.rn.sources[0],
      PROGRAMMES.economie.reconquete.sources[0],
      PROGRAMMES.europe.modem.sources[0],
      PROGRAMMES.europe.ps.sources[0],
    ],
    fiches: ['sujet-europe', 'parti-modem'],
  },
  {
    id: 'a23',
    type: 'avis',
    theme: 'europe',
    question: 'Les règles européennes limitent le déficit public (la règle des 3 %). Tu en penses quoi ?',
    options: [
      { id: 'a', libelle: 'Il faut les respecter, voire réduire le déficit plus vite', partis: ['renaissance', 'horizons', 'lr'] },
      { id: 'b', libelle: 'La France devrait pouvoir s’en affranchir', partis: ['lfi', 'pcf'] },
    ],
    contexte:
      'Renaissance vise un déficit à zéro en 2037 avec une « règle d’or » budgétaire, Horizons un déficit ramené à 2 % du PIB et LR sous les 3 %. LFI prône la « désobéissance européenne » face aux règles de déficit et de dette, le PCF la fin de la règle des 3 %.',
    sources: [
      PROGRAMMES.economie.renaissance.sources[0],
      PROGRAMMES.economie.horizons.sources[0],
      PROGRAMMES.economie.lr.sources[0],
      PROGRAMMES.europe.lfi.sources[0],
      PROGRAMMES.europe.pcf.sources[0],
    ],
    fiches: ['sujet-europe', 'parti-lfi'],
  },

  /* ---------- Défense ---------- */
  {
    id: 'a24',
    type: 'avis',
    theme: 'defense',
    question: 'L’OTAN : la France doit-elle y rester ?',
    options: [
      { id: 'a', libelle: 'Non, elle doit en sortir', partis: ['lfi', 'pcf'] },
      { id: 'b', libelle: 'Oui, tout en renforçant la défense européenne', partis: ['ps', 'renaissance', 'horizons'] },
      { id: 'c', libelle: 'Oui, mais en quittant son commandement intégré', partis: ['rn', 'reconquete'] },
    ],
    contexte:
      'LFI veut sortir de l’OTAN « par étapes », le PCF en sortir et demander sa dissolution. Le PS juge l’OTAN « politiquement morte » sous Trump sans prôner d’en sortir ; Renaissance (ligne atlantiste) et Horizons (qui soutient l’entrée de l’Ukraine dans l’OTAN) misent aussi sur une défense européenne. Le RN et Reconquête proposent de rester dans l’Alliance mais de quitter son commandement intégré.',
    sources: [
      PROGRAMMES.defense.lfi.sources[0],
      PROGRAMMES.defense.pcf.sources[0],
      PROGRAMMES.defense.ps.sources[0],
      PROGRAMMES.defense.renaissance.sources[0],
      PROGRAMMES.defense.horizons.sources[0],
      PROGRAMMES.defense.rn.sources[0],
      PROGRAMMES.defense.reconquete.sources[0],
    ],
    fiches: ['parti-pcf', 'parti-renaissance', 'parti-reconquete'],
  },
  {
    id: 'a25',
    type: 'avis',
    theme: 'defense',
    question: 'Le budget de l’armée, tu en fais quoi ?',
    options: [
      { id: 'a', libelle: 'Je l’augmente nettement', partis: ['renaissance', 'horizons', 'rn', 'reconquete'] },
      { id: 'b', libelle: 'Je mutualise les dépenses avec les autres pays européens', partis: ['modem', 'ps'] },
      { id: 'c', libelle: 'Je refuse de le porter à 3 % du PIB', partis: ['lfi'] },
    ],
    contexte:
      'Renaissance, Horizons et le RN visent 3 % du PIB pour la défense, Reconquête 70 Md€ par an d’ici 2030. Le MoDem préfère mutualiser les dépenses militaires au niveau européen et le PS propose un fonds européen de défense de 500 Md€. LFI refuse l’objectif de 3 % du PIB.',
    sources: [
      PROGRAMMES.defense.renaissance.sources[0],
      PROGRAMMES.defense.horizons.sources[0],
      PROGRAMMES.defense.rn.sources[0],
      PROGRAMMES.defense.reconquete.sources[0],
      PROGRAMMES.defense.modem.sources[0],
      PROGRAMMES.defense.ps.sources[0],
      PROGRAMMES.defense.lfi.sources[0],
    ],
    fiches: ['parti-modem', 'parti-lfi', 'personnalite-philippe'],
  },
  {
    id: 'a26',
    type: 'avis',
    theme: 'defense',
    question: 'Une défense européenne commune : pour ou contre ?',
    options: [
      { id: 'a', libelle: 'Pour', partis: ['renaissance', 'ecologistes', 'horizons', 'ps', 'modem'] },
      { id: 'b', libelle: 'Contre : la France doit garder seule la main sur sa défense', partis: ['lfi'] },
    ],
    contexte:
      'Renaissance soutient une armée européenne commune, les Écologistes une défense européenne commune et Horizons un état-major européen ; le PS propose un fonds européen de défense et le MoDem un bouclier anti-missile européen. LFI refuse une défense européenne intégrée, et le RN critique la fiabilité de l’UE en matière de défense.',
    sources: [
      PROGRAMMES.defense.renaissance.sources[0],
      PROGRAMMES.europe.ecologistes.sources[0],
      PROGRAMMES.europe.horizons.sources[0],
      PROGRAMMES.defense.ps.sources[0],
      PROGRAMMES.defense.modem.sources[0],
      PROGRAMMES.defense.lfi.sources[0],
      PROGRAMMES.defense.rn.sources[0],
    ],
    fiches: ['sujet-europe', 'parti-renaissance'],
  },

  /* ---------- Institutions ---------- */
  {
    id: 'a27',
    type: 'avis',
    theme: 'institutions',
    question: 'Faut-il changer de Constitution et passer à une VIe République ?',
    options: [
      {
        id: 'a',
        libelle: 'Oui, avec moins de pouvoirs pour le ou la président·e et plus pour le Parlement',
        partis: ['lfi', 'pcf', 'ecologistes', 'ps'],
      },
      { id: 'b', libelle: 'Non, garder la Ve République, quitte à la moderniser', partis: ['horizons', 'rn', 'reconquete'] },
    ],
    contexte:
      'LFI veut une Assemblée constituante pour une VIe République parlementaire, le PS une VIe République par une révision négociée ; le PCF prône la « déprésidentialisation » et les Écologistes la fin du présidentialisme. Horizons veut moderniser la Ve République « sans rupture », et le RN comme Reconquête refusent de passer à une VIe République.',
    sources: [
      PROGRAMMES.institutions.lfi.sources[0],
      PROGRAMMES.institutions.pcf.sources[0],
      PROGRAMMES.institutions.ecologistes.sources[0],
      PROGRAMMES.institutions.ps.sources[0],
      PROGRAMMES.institutions.horizons.sources[0],
      PROGRAMMES.institutions.rn.sources[0],
      PROGRAMMES.institutions.reconquete.sources[0],
    ],
    fiches: ['personnalite-melenchon', 'personnalite-philippe'],
  },
  {
    id: 'a28',
    type: 'avis',
    theme: 'institutions',
    question: 'La proportionnelle aux législatives (chaque parti obtient un nombre de député·es proportionnel à ses voix) : pour ou contre ?',
    options: [
      { id: 'a', libelle: 'Pour', partis: ['lfi', 'pcf', 'ecologistes', 'ps', 'modem', 'rn'] },
      { id: 'b', libelle: 'Pour une petite dose seulement', partis: ['horizons'] },
      { id: 'c', libelle: 'Ce n’est pas une priorité', partis: ['renaissance'] },
    ],
    contexte:
      'LFI, le PS, les Écologistes et le MoDem proposent la proportionnelle, le PCF et le RN la proportionnelle intégrale. Horizons envisage 15 % de proportionnelle, et Renaissance n’en fait pas une priorité, préférant réduire le nombre de parlementaires.',
    sources: [
      PROGRAMMES.institutions.lfi.sources[0],
      PROGRAMMES.institutions.pcf.sources[0],
      PROGRAMMES.institutions.ecologistes.sources[0],
      PROGRAMMES.institutions.ps.sources[0],
      PROGRAMMES.institutions.modem.sources[0],
      PROGRAMMES.institutions.rn.sources[0],
      PROGRAMMES.institutions.horizons.sources[0],
      PROGRAMMES.institutions.renaissance.sources[0],
    ],
    fiches: ['parti-modem', 'personnalite-bayrou'],
  },
  {
    id: 'a29',
    type: 'avis',
    theme: 'institutions',
    question: 'Pour donner plus souvent la parole aux citoyen·nes entre deux élections, tu préfères…',
    options: [
      { id: 'a', libelle: 'Un référendum d’initiative citoyenne (RIC), déclenché par les citoyen·nes', partis: ['lfi', 'rn', 'reconquete'] },
      { id: 'b', libelle: 'Plus de référendums, en élargissant ceux qui existent déjà', partis: ['lr', 'pcf', 'renaissance'] },
      { id: 'c', libelle: 'Des conventions citoyennes qui débattent et font des propositions', partis: ['ps'] },
    ],
    contexte:
      'LFI, le RN et Reconquête soutiennent le RIC. LR veut ouvrir le référendum à tout le domaine de la loi et abaisser le seuil du référendum d’initiative partagée (RIP), que le PCF défend aussi ; Renaissance propose des référendums annuels à questions multiples. Le PS mise sur une convention citoyenne constituante.',
    sources: [
      PROGRAMMES.institutions.lfi.sources[0],
      PROGRAMMES.institutions.rn.sources[0],
      PROGRAMMES.institutions.reconquete.sources[0],
      PROGRAMMES.institutions.lr.sources[0],
      PROGRAMMES.institutions.pcf.sources[0],
      PROGRAMMES.institutions.renaissance.sources[0],
      PROGRAMMES.institutions.ps.sources[0],
    ],
    fiches: ['parti-lfi', 'parti-lr'],
  },

  /* ---------- Au Parlement ---------- */
  {
    id: 'a30',
    type: 'avis',
    theme: 'parlement',
    question: 'Début 2026, le budget passe par le 49.3. Tu es député·e : tu votes la censure pour faire tomber le gouvernement ?',
    options: [
      { id: 'a', libelle: 'Oui, je vote la censure', partis: ['rn', 'lfi', 'ecologistes', 'pcf'] },
      { id: 'b', libelle: 'Non, je laisse passer le budget', partis: ['ps', 'lr', 'renaissance', 'modem', 'horizons'] },
    ],
    contexte:
      'Le Premier ministre Sébastien Lecornu a utilisé trois fois le 49.3. La motion de censure de la gauche (LFI, Écologistes, PCF) a obtenu 260 voix et celle du RN 135, le RN votant les deux : elles ont été rejetées, le PS et LR ayant annoncé ne pas les voter.',
    sources: [VOTES.budget2026.sources[0], VOTES.budget2026.sources[1], VOTES.budget2026.sources[2]],
    fiches: ['sujet-49-3', 'sujet-motion-de-censure'],
  },
]
