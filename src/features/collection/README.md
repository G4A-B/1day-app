# src/features/collection

**Ma collection**, ouverte par l'icône en haut à droite du paquet (`/collection`, `/collection/avis`).

- **Mon savoir** : les cartes Savoir réussies et ajoutées. On les touche pour relire la question, la réponse et les sources.
- **Mes avis** : la position politique déduite des cartes Avis (fond qui passe du neutre au rouge vers la gauche, au bleu vers la droite), les partis dont les réponses sont les plus proches, et la liste des réponses (on peut en changer).

`progression.ts` garde sur l'appareil (localStorage) l'ordre du paquet, les cartes collectées et les réponses Avis. Pas de compte pour l'instant : rien ne part sur un serveur.
