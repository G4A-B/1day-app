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
npm run generate-splash     # régénérer les écrans de démarrage iOS (fond noir Poléa)
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
| `src/features/*` | Fonctionnalités : profil, dataviz, filtres, comparateur |
| `src/data` | Types des données (`types.ts`) |
| `src/lib` | Fonctions utilitaires |
| `src/styles` | Tokens de design et styles globaux |
| `src/labo` | Prototypes d'animation, accessibles sur `/labo` |
| `public/data` | Données statiques (JSON) |

Chaque dossier contient un `README.md` qui détaille son rôle.

## Règle sur les données

Toute donnée affichée cite **au moins une source** : URL + date de consultation. TypeScript refuse une donnée sans source.

Voir aussi [ROADMAP.md](ROADMAP.md).
