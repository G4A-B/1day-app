# Poléa (1day-app)

Projet de la classe **G4A** (LISAA, octobre 2026).

Poléa aide les étudiant·es qui ont du mal à comprendre les enjeux des prochaines élections françaises à s'informer et à faire des choix éclairés.

**Site en ligne :** _URL Vercel à compléter_ — `https://…vercel.app`

## Stack

- [Vite](https://vite.dev) + [React](https://react.dev) + TypeScript
- PWA (installable) avec [vite-plugin-pwa](https://vite-pwa-org.netlify.app)
- CSS natif avec variables (tokens dans `src/styles/tokens.css`)
- Hébergement statique sur [Vercel](https://vercel.com)

## Commandes

Prérequis : Node.js 20 ou plus récent.

```bash
npm install                 # installer les dépendances (une seule fois)
npm run dev                 # lancer le site en local, avec rechargement automatique
npm run build               # fabriquer la version de production dans dist/
npm run preview             # tester localement la version de production
npm run generate-pwa-assets # régénérer les icônes PNG à partir de public/icon.svg
npm run generate-splash     # régénérer les écrans de démarrage iOS (couleur de lancement.json)
```

## Workflow

- **Push sur `main` = mise en production.** Chaque commit poussé sur `main` est déployé automatiquement par Vercel.
- **Pull request = preview.** Une pull request génère une URL de prévisualisation pour relire avant de fusionner.
- Commits courts, un sujet par commit, messages en français (`feat:`, `fix:`, `chore:`, `docs:`).
- Avant de pousser : `npm run build` doit passer sans erreur.

## Organisation

| Dossier | Rôle |
| --- | --- |
| `src/pages` | Écrans de l'app |
| `src/components` | Composants d'interface réutilisables |
| `src/features/paquet` | Le paquet de cartes (écran principal) |
| `src/features/collection` | Ma collection : savoir et avis, progression enregistrée sur l'appareil |
| `src/features/position` | Calcul de la position politique (cartes Avis) |
| `src/features/fiches` | Fiches partis, personnalités, sujets |
| `src/features/*` | Fonctionnalités à venir : profil, dataviz, filtres, comparateur |
| `src/data` | Types et contenu : partis, programmes 2027, votes, cartes, fiches |
| `src/lib` | Fonctions utilitaires |
| `src/styles` | Tokens de design et styles globaux |
| `public/data` | Données statiques (JSON) |

Chaque dossier contient un `README.md` qui détaille son rôle.

## Couleur de lancement

`lancement.json` fixe la couleur du fond et du logo au démarrage (écran de lancement, splash screen, barre d'état). Après un changement, lancer `npm run generate-splash` pour les écrans de démarrage iOS.

## Contenu

- `src/data/programmes.ts` et `src/data/votes.ts` : propositions 2027 des dix partis et votes à l'Assemblée (2022-2026), d'après les documents compilés par la classe, avec leurs liens.
- `src/data/cartes/savoir.ts` (QCM) et `src/data/cartes/avis.ts` (opinions) : cartes rédigées avec l'IA à partir de ces sources, à relire par l'équipe.
- `src/data/fiches.ts` : fiches « Pour aller plus loin ».

## Règle sur les données

Toute donnée affichée cite **au moins une source** : URL + date de consultation. TypeScript refuse une donnée sans source.

Voir aussi [ROADMAP.md](ROADMAP.md).
