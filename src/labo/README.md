# src/labo

Prototypes d'animation du paquet de cartes, à tester sur téléphone : la page d'accueil du site liste les tests.
Noir et blanc, contenu de démonstration. Ce dossier est jetable : on garde la variante choisie, on supprime le reste.

| Route | Test |
| --- | --- |
| `/` (ou `/labo`) | Liste des tests |
| `/labo/profondeur` | Cartes qui arrivent du fond |
| `/labo/table` | Paquet posé à plat, la carte se redresse |
| `/labo/ouverture` | Compare 3 animations d'ouverture |

Les variantes « Pile (croquis) » et « Roue » ont été écartées.

## Comment ça marche

- **Défilement natif** : le navigateur gère le doigt, l'inertie et l'aimantation (`scroll-snap`). L'option « Une carte par geste » empêche de sauter plusieurs cartes d'un coup.
- **3D en CSS** (`perspective`, `rotateX`, `translateZ`) : pas de bibliothèque. Pour chaque carte, `Paquet.tsx` calcule son écart `--o` avec la carte courante ; `labo.css` transforme cet écart en position, une formule par variante.
- **Trajectoires** : chaque carte part à gauche, à droite ou au milieu, avec un angle et une distance qui varient (`TRAJECTOIRES` dans `Paquet.tsx`).
- **Ouverture** (`CarteOuverte.tsx`) : la carte part de sa place dans le paquet, grandit et se retourne (technique FLIP + Web Animations API). Deux faces : on change le contenu de la face cachée avant chaque retournement.
