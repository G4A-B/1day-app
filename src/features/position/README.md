# src/features/position

Calcul de la **position politique** à partir des réponses aux cartes Avis (`position.ts`).

1. Chaque parti a une place sur l'axe gauche (-1) / droite (+1) : `AXE_PARTIS`, choix éditorial à valider par l'équipe.
2. Chaque réponse d'une carte Avis liste les partis dont le programme va dans ce sens ; sa valeur est la moyenne de leurs places.
3. Une question compte d'autant plus qu'elle sépare la gauche et la droite. « Je ne sais pas » ne compte pas.
4. Position = moyenne pondérée des réponses, affichée de plus en plus nettement au fil des réponses (neutre au début).
5. Proximité avec un parti = nombre de questions où l'on a choisi la même réponse que lui.

C'est un repère pour s'y retrouver, pas une consigne de vote.
