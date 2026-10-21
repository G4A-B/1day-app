# src/features/paquet

Le **paquet de cartes**, écran principal de Poléa.

- **Paquet posé sur la table** : la carte du dessus se redresse ; on glisse vers le haut pour qu'elle s'envole (à gauche, à droite ou au milieu, jamais exactement au même endroit) et que la suivante se redresse. Une carte par geste.
- **Arrivée** : les cartes sont distribuées depuis le haut de l'écran, juste après le splash screen.
- **Ouverture** : la question est sur le recto ; on touche la carte redressée, elle grandit et les réponses apparaissent. Après la réponse, elle bascule de haut en bas sur le verso : verdict (vert si juste, rouge si raté), explication, fiches et sources.
- **Fin de carte** : une carte « Savoir » ratée retourne dans le paquet ; sinon elle rejoint la collection.

## Fichiers

| Fichier | Rôle |
| --- | --- |
| `Paquet.tsx` | Défilement, position de chaque carte, trajectoires de sortie |
| `CarteOuverte.tsx` | Carte ouverte : agrandissement + bascule (FLIP, Web Animations API) |
| `FaceRecto.tsx` | Recto d'une carte : type, thème, question, numéro |
| `cartes.ts` | Contenu de démonstration (à remplacer par les vraies cartes) |
| `paquet.css` | Formules 3D (CSS `perspective`, `rotateX`…) et styles des cartes |

## Comment ça marche

- **Défilement natif** : le navigateur gère le doigt, l'inertie et l'aimantation (`scroll-snap`).
- **3D en CSS**, sans bibliothèque : pour chaque carte, `Paquet.tsx` calcule son écart `--o` avec la carte redressée ; `paquet.css` transforme cet écart en position.
