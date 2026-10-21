# CLAUDE.md

Consignes pour l'assistant IA sur ce dépôt.

## Contexte

- Projet pédagogique 1day-app (G4A, octobre 2026), présenté en direct à des étudiant·es en design.
- Sujet : aider les étudiant·es à comprendre les enjeux des élections françaises.
- Avancer étape par étape. Expliquer chaque étape en une ou deux phrases simples, sans jargon.

## Règles

- Langue : français pour l'interface, les commits, la doc et les commentaires. Écriture inclusive au point médian (étudiant·es).
- Commits courts et séparés, préfixés `feat:`, `fix:`, `chore:`, `docs:`.
- `main` = production (Vercel). Vérifier `npm run build` avant chaque push.
- Aucune nouvelle dépendance sans demande explicite (pas de routeur, D3, Supabase… pour l'instant).
- Styles : CSS natif, uniquement via les variables de `src/styles/tokens.css`. Pas de valeurs de couleur en dur dans les composants.
- Couleurs : palette Poléa (noir, olive, beige, crème) et une couleur par thème de carte (tokens `--color-*`, associations dans `src/features/paquet/paquet.css`). Contraste AA minimum, mesuré.
- Nuancier politique : rouge pour la gauche, bleu pour la droite, réservés à la position (cartes Avis).
- Accessibilité : HTML sémantique, `lang="fr"`, focus visible, lisible sur mobile.
- Données : chaque donnée affichée a une source (URL + date de consultation), cf. `src/data/types.ts`.
- Contenu politique : uniquement des faits présents dans les sources ; jamais d'URL inventée ; même traitement pour chaque parti ; pas d'affaires judiciaires sans condamnation définitive et deux sources.
- Cartes Avis : un parti n'est associé à une réponse que si son programme va clairement dans ce sens (la position politique en dépend).
- App 100 % tactile : pas d'état :hover ni :active, un tap = une action.
- Le service worker ne doit mettre en cache que les fichiers statiques de l'app, pas `public/data`.

## Commandes

`npm run dev` · `npm run build` · `npm run preview` · `npm run generate-pwa-assets`
