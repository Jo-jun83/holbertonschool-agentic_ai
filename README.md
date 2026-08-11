# holbertonschool-agentic_ai

Ce dépôt contient une comparaison pratique entre deux implémentations d’une même landing page moderne en utilisant deux frameworks frontend : React et Vue.js.

## Objectif du projet

L’objectif est de montrer comment deux approches différentes peuvent produire une interface similaire tout en utilisant des syntaxes, des patterns et des modèles de développement distincts.

## Structure du dépôt

- React : implémentation de la landing page avec Vite et React
- Vue.js : implémentation équivalente avec Vite et Vue 3
- comparison.md : document de comparaison entre les deux versions

## Technologies utilisées

- Vite
- React 19
- Vue 3
- Tailwind CSS
- ESLint
- gh-pages pour le déploiement

## Lancer un projet localement

### React

```bash
cd front_end-frameworks/react
npm install
npm run dev
```

### Vue.js

```bash
cd front_end-frameworks/vue
npm install
npm run dev
```

## Déploiement

Les deux projets disposent d’un script de déploiement vers GitHub Pages.

```bash
cd front_end-frameworks/react
npm run deploy
```

```bash
cd front_end-frameworks/vue
npm run deploy
```

## Résultat attendu

Chaque version permet de découvrir les principales différences entre React et Vue.js sur un cas d’usage concret : composants, props, état, rendu dynamique, formulaires et organisation du projet.
