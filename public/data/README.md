# public/data

Fichiers de données statiques (JSON) servis tels quels par le site, ex. `/data/elections.json`.
Ils ne sont pas mis en cache par le service worker : une mise à jour des données est visible tout de suite.
Chaque entrée doit respecter les types de `src/data/types.ts`, sources comprises.
