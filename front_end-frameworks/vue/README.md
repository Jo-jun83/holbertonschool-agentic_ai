# Vue.js - Landing page Agentic AI

Cette partie du projet contient une implémentation de la landing page en Vue.js avec Vite.

## Présentation

Cette version reprend la même interface que la version React, mais avec la syntaxe et les conventions propres à Vue 3. Elle utilise des Single File Components pour organiser l’interface, la logique et le template dans un même fichier.

## Fonctionnalités principales

- interface moderne avec Tailwind CSS
- composants Vue réutilisables
- rendu dynamique via des listes et directives
- formulaire de contact avec réactivité native
- structure par sections et composants modulaires

## Installation

```bash
cd front_end-frameworks/vue
npm install
```

## Lancer le projet

```bash
npm run dev
```

## Scripts disponibles

- npm run dev : démarre le serveur de développement Vite
- npm run build : construit l’application pour la production
- npm run preview : prévisualise la build
- npm run lint : exécute ESLint
- npm run format : formate le code avec Prettier
- npm run deploy : build + déploiement sur GitHub Pages

## Structure du projet

- src/App.vue : composant principal
- src/components/ : composants de l’interface
- src/data/ : données statiques utilisées par l’application
- src/services/ : services ou logique liée aux données

## Notes

Cette version illustre une approche Vue.js basée sur les Single File Components et la réactivité déclarative avec script setup et template.
