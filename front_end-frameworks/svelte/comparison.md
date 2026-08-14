# Comparaison des implémentations React, Vue.js et Svelte

## Introduction

Après avoir développé une première version de l'application avec React, puis une seconde avec Vue.js, la réalisation d'une version Svelte permet de comparer trois approches différentes pour résoudre les mêmes problématiques frontend.

L'objectif de cette troisième implémentation n'était pas de redécouvrir les principes de base d'une application frontend, mais plutôt d'observer comment Svelte représente les mêmes concepts avec une syntaxe et un système de réactivité différents.

Le fait de travailler sur une application déjà connue a facilité cette comparaison. Les besoins fonctionnels restaient similaires : afficher des données, organiser l'interface en composants, transmettre des informations entre composants, gérer un état dynamique, afficher des listes, réagir aux actions de l'utilisateur et effectuer certaines opérations au chargement d'un composant.

Cette expérience montre surtout que React, Vue.js et Svelte utilisent des syntaxes différentes, mais reposent sur de nombreux principes communs.

## 1. Comparaison générale entre React, Vue.js et Svelte

### Similarités

La première similitude importante est l'utilisation d'une architecture basée sur les composants.

Dans les trois versions, l'interface n'est pas construite comme une seule page contenant toute la logique. Elle est divisée en éléments ayant chacun une responsabilité précise.

Dans les trois frameworks, l'objectif reste le même : construire l'interface en assemblant plusieurs composants réutilisables.

Les trois frameworks partagent également les concepts suivants :

- composants ;
- propriétés ou props ;
- état local ;
- rendu conditionnel ;
- affichage dynamique de listes ;
- gestion d'événements ;
- formulaires ;
- cycle de vie des composants ;
- communication entre composants ;
- mise à jour automatique de l'interface lorsque les données changent.

Le changement de framework ne change donc pas fondamentalement les problèmes à résoudre. Il change principalement la manière de les exprimer.

### Différences

React repose fortement sur JavaScript et JSX. Une grande partie de la logique d'affichage est directement exprimée avec des expressions JavaScript.

Vue.js sépare davantage le template de la logique JavaScript avec une syntaxe spécifique comme `v-if`, `v-for`, `v-model` ou `@click`.

Svelte adopte également une syntaxe de template dédiée, mais avec une approche encore plus intégrée. Les conditions et les boucles sont par exemple directement représentées avec des blocs comme `{#if}` et `{#each}`.

Une autre différence importante concerne la réactivité.

Avec React, il faut explicitement utiliser des mécanismes comme `useState` pour indiquer qu'une valeur doit provoquer un nouveau rendu lorsqu'elle change.

Vue fournit des outils de réactivité comme `ref` et `reactive`.

Svelte cherche à rendre cette réactivité plus directe et à réduire la quantité de code nécessaire pour exprimer les mêmes comportements.

La comparaison des trois projets m'a donc permis de constater qu'un framework frontend ne définit pas uniquement une syntaxe. Il propose également une certaine manière de représenter et de gérer les changements d'état de l'application.

## 2. Les composants Svelte

Un composant Svelte est généralement défini dans un fichier ayant l'extension `.svelte`.

Un fichier `.svelte` peut contenir plusieurs parties :

```svelte
<script>
    // logique du composant
</script>

<!-- structure HTML -->

<style>
    /* styles du composant */
</style>
```

Cette organisation rappelle directement les Single File Components de Vue.js.

Dans Vue, un composant peut contenir :

```vue
<script setup>
</script>

<template>
</template>

<style>
</style>
```

Svelte utilise une organisation comparable, mais le HTML peut être écrit directement dans le fichier sans avoir besoin d'un bloc `<template>`.

Cette différence rend le fichier Svelte particulièrement compact.

En React, un composant est généralement une fonction JavaScript ou TypeScript qui retourne du JSX. La logique et la structure visuelle sont donc mélangées dans la fonction du composant.

Par exemple, une carte présentant une fonctionnalité d'IA agentique peut être un composant dans les trois frameworks. Elle reçoit une icône, un titre et une description, puis les affiche selon une mise en page réutilisable. C'est le rôle de `FeatureCard.svelte` dans cette version du site.

Le concept reste exactement le même. Ce qui change est principalement la manière de déclarer le composant et de construire son affichage.

Après React et Vue, le format `.svelte` m'a paru assez naturel. Il reprend l'aspect structuré d'un composant Vue tout en supprimant certains éléments syntaxiques.

## 3. Templates et syntaxe

Svelte utilise une syntaxe de template proche du HTML.

Une variable JavaScript peut être affichée directement avec des accolades :

```svelte
<h2>{feature.title}</h2>
```

Cette écriture rappelle JSX :

```jsx
<h2>{feature.title}</h2>
```

Dans Vue, la même opération serait généralement écrite avec une interpolation :

```vue
<h2>{{ feature.title }}</h2>
```

Svelte se situe donc entre les deux approches.

Comme React, il permet d'insérer facilement des expressions JavaScript dans l'affichage. Comme Vue, il utilise cependant une syntaxe de template qui reste très proche du HTML.

Cette approche facilite la lecture du composant, notamment lorsque l'interface contient principalement du HTML avec quelques données dynamiques.

J'ai également trouvé que certaines opérations fréquentes étaient plus visibles dans Svelte. Une condition `{#if}` ou une boucle `{#each}` peut être identifiée immédiatement en lisant le template.

À l'inverse, React donne davantage de liberté puisqu'il utilise directement JavaScript. Cette liberté peut être pratique pour des logiques complexes, mais elle peut également rendre certaines structures JSX plus difficiles à lire lorsque de nombreuses conditions sont imbriquées.

## 4. Props et circulation des données

Les props permettent à un composant parent de transmettre des données à un composant enfant.

Ce principe est présent dans React, Vue.js et Svelte.

Dans le site consacré à l'IA agentique, un composant représentant une fonctionnalité peut par exemple recevoir un objet `feature`.

Le composant parent possède la liste des fonctionnalités et transmet chacune d'elles au composant chargé de l'afficher.

En React, cela peut prendre la forme suivante :

```jsx
<FeatureCard feature={feature} />
```

Puis le composant récupère cette prop :

```jsx
function FeatureCard({ feature }) {
    // ...
}
```

Vue utilise également un système de props déclaré dans le composant.

Svelte suit la même logique conceptuelle. Les propriétés reçues sont déclarées dans le script du composant puis utilisées directement dans le template.

La syntaxe exacte dépend de la version de Svelte utilisée dans le projet. Les anciennes versions utilisent notamment `export let`, alors que Svelte 5 introduit `$props()`.

Malgré ces différences, la logique reste la même dans les trois frameworks :

```text
Composant parent
      |
      | données
      v
Composant enfant
```

Cette comparaison montre que le principe de flux de données est plus important que la syntaxe utilisée pour déclarer une prop.

## 5. État et réactivité

La gestion de l'état est probablement l'une des différences les plus intéressantes entre les trois frameworks.

Dans ce site, plusieurs informations évoluent pendant l'utilisation de la page, principalement dans le formulaire de contact et lors du chargement des insights :

- le nom, l'adresse e-mail et le message saisis ;
- la validité de chaque champ et du formulaire complet ;
- l'état d'envoi du message ;
- le texte de retour affiché à l'utilisateur ;
- la liste des insights chargés ;
- un éventuel message d'erreur pendant ce chargement.

En React, une valeur dynamique est généralement gérée avec `useState`.

Par exemple :

```jsx
const [isSending, setIsSending] = useState(false);
```

Pour démarrer l'envoi :

```jsx
setIsSending(true);
```

Vue utilise par exemple `ref` :

```js
const isSending = ref(false);
```

Svelte réduit généralement la quantité de code nécessaire pour représenter ce type d'état.

Selon la version utilisée, cela peut être réalisé avec la réactivité traditionnelle de Svelte ou avec les runes introduites dans Svelte 5, notamment `$state`.

Ce qui m'a surtout marqué n'est donc pas uniquement la syntaxe, mais la quantité de code nécessaire autour de la donnée.

React rend très explicite le changement d'état grâce au couple valeur/setter.

Vue fournit un système de réactivité intégré.

Svelte va encore plus loin dans cette direction en cherchant à faire ressembler la manipulation d'un état réactif à la manipulation d'une variable JavaScript classique.

Cette comparaison m'a permis de mieux comprendre que la réactivité correspond au mécanisme permettant au framework de savoir quelles parties de l'interface doivent être mises à jour lorsqu'une donnée change.

Les trois frameworks résolvent donc le même problème avec des abstractions différentes.

## 6. Logique de rendu

### Conditions

Dans l'application, certaines informations doivent être affichées uniquement dans certaines situations.

Le bouton d'envoi du formulaire dépend par exemple de la validité des champs et de l'état d'envoi.

Le bouton peut être :

- actif lorsque le formulaire est valide ;
- désactivé lorsqu'un champ est invalide ;
- désactivé pendant l'envoi ;
- accompagné d'un texte qui passe de « Send message » à « Sending... ».

En React, ce type de logique est généralement exprimé avec JavaScript :

```jsx
{isSending ? (
    <button disabled>Sending...</button>
) : (
    <button>Send message</button>
)}
```

Vue utilise `v-if` :

```vue
<button v-if="isSending" disabled>
    Sending...
</button>

<button v-else>
    Send message
</button>
```

Svelte utilise un bloc `{#if}` :

```svelte
{#if isSending}
    <button disabled>Sending...</button>
{:else}
    <button>Send message</button>
{/if}
```

Le comportement est identique.

J'ai trouvé la syntaxe Svelte particulièrement explicite pour ce type de logique, car le début et la fin de la condition sont clairement visibles dans le template.

### Listes

L'affichage des fonctionnalités est également un bon exemple de différence syntaxique.

En React, une liste est généralement générée avec `.map()` :

```jsx
{features.map((feature) => (
    <FeatureCard key={feature.title} feature={feature} />
))}
```

Vue utilise `v-for` :

```vue
<FeatureCard
    v-for="feature in features"
    :key="feature.title"
    :feature="feature"
/>
```

Svelte utilise `{#each}` :

```svelte
{#each features as feature (feature.title)}
    <FeatureCard
        icon={feature.icon}
        title={feature.title}
        description={feature.description}
    />
{/each}
```

Dans les trois cas, la logique est la même :

```text
liste de données
      |
      v
itération
      |
      v
un composant par élément
```

La différence est seulement la manière dont cette itération est exprimée.

Svelte rend cette opération très lisible et nécessite peu de syntaxe supplémentaire.

## 7. Cycle de vie et effets secondaires

Certaines opérations doivent être exécutées lorsque le composant apparaît dans l'application.

Dans ce projet, cela sert à charger les contenus de la section « Insights » par l'intermédiaire du service `getInsights` lorsque le composant apparaît.

React peut utiliser `useEffect` :

```jsx
useEffect(() => {
    loadInsights();
}, []);
```

Vue peut utiliser `onMounted` :

```js
onMounted(() => {
    loadInsights();
});
```

Svelte fournit `onMount` :

```js
onMount(() => {
    loadInsights();
});
```

La ressemblance entre Vue et Svelte est ici particulièrement visible.

La syntaxe change peu, mais surtout, le principe ne change pas du tout.

Dans les trois frameworks, il existe une distinction entre :

1. la création du composant ;
2. son apparition dans l'interface ;
3. certaines opérations à effectuer à ce moment.

Cette comparaison montre encore une fois qu'apprendre le concept du cycle de vie est plus important que mémoriser le nom exact de la fonction utilisée par chaque framework.

## 8. Formulaires et événements

Les formulaires montrent également une différence intéressante entre les frameworks.

Avec React, un champ contrôlé nécessite généralement un état et un gestionnaire `onChange`.

Par exemple :

```jsx
<input
    value={search}
    onChange={(event) => setSearch(event.target.value)}
/>
```

Vue permet de simplifier ce fonctionnement grâce à `v-model` :

```vue
<input v-model="search" />
```

Svelte propose une approche comparable :

```svelte
<input bind:value={search} />
```

Dans Vue et Svelte, la liaison entre la valeur du champ et la variable est donc plus directe.

Svelte utilise également une syntaxe simple pour les événements.

Un clic sur un bouton peut appeler une fonction du composant sans avoir à mettre en place une structure complexe.

Dans l'application, cela concerne notamment :

- la saisie du nom, de l'adresse e-mail et du message ;
- la soumission du formulaire de contact ;
- la désactivation temporaire du bouton pendant l'envoi ;
- la mise à jour du message de retour après l'envoi ;
- la navigation vers les différentes sections depuis les boutons et les liens.

Le principe est toujours identique dans les trois frameworks : un événement produit par l'utilisateur déclenche une fonction qui peut ensuite modifier l'état de l'application.

## 9. Organisation du projet

L'organisation générale du projet Svelte reste comparable à celle des versions React et Vue.js.

Les trois projets séparent généralement :

- les composants ;
- les pages ou vues ;
- les services ou appels API ;
- les ressources statiques ;
- les styles ;
- la configuration du projet.

Les différences viennent principalement des conventions propres à chaque framework.

React utilise des fichiers `.jsx` ou `.tsx`.

Vue utilise principalement des fichiers `.vue`.

Svelte utilise des fichiers `.svelte`.

Dans les trois projets, conserver une architecture proche a été particulièrement utile pendant la migration.

Par exemple, si la version React possède déjà une section responsable de la liste des fonctionnalités et un composant responsable de leur présentation, il est préférable de conserver cette séparation dans Vue puis dans Svelte plutôt que de recréer toute l'architecture. Dans cette version, cette responsabilité est répartie entre `Features.svelte`, les données de `features.js` et `FeatureCard.svelte`.

Cela permet de migrer les responsabilités des composants et non simplement de traduire ligne par ligne leur syntaxe.

Cette méthode produit également un code plus facile à comparer et à tester.

## 10. Migration assistée par intelligence artificielle

## 10. Migration assistée par intelligence artificielle

Pour la migration vers Svelte, j'ai choisi de travailler composant par composant.

Mon objectif n'était pas de demander directement à une intelligence artificielle de convertir l'ensemble du projet. J'ai d'abord essayé de réaliser chaque migration moi-même afin de mieux comprendre la syntaxe de Svelte et d'identifier concrètement les différences avec React et Vue.js.

Cette méthode m'a permis de comparer les trois frameworks au fur et à mesure du développement. Pour chaque composant, je cherchais d'abord à retrouver son fonctionnement dans les versions précédentes, puis à reproduire ce comportement avec les mécanismes propres à Svelte.

Sur plusieurs composants, je n'ai pas eu besoin d'utiliser l'IA. Après avoir compris la syntaxe de base de Svelte, certaines conversions étaient assez directes, notamment pour l'affichage de données, les boucles, les conditions ou les composants simples.

Par exemple, lorsqu'une section devait parcourir une liste de fonctionnalités pour afficher plusieurs `FeatureCard`, il était assez naturel de remplacer la logique utilisée dans React ou Vue.js par un bloc `{#each}` en Svelte.

En revanche, lorsque mon implémentation ne fonctionnait pas correctement, j'ai utilisé l'IA pour analyser et corriger mon propre code.

Dans ces situations, je ne lui demandais pas simplement de générer le composant à ma place. Je lui fournissais le code que j'avais écrit ainsi que l'erreur ou le comportement rencontré. L'IA pouvait alors identifier le problème, proposer une correction et surtout m'expliquer pourquoi ma première solution ne fonctionnait pas.

Cette manière d'utiliser l'IA a été particulièrement utile pour comprendre certaines différences de syntaxe ou de réactivité entre les frameworks. Au lieu d'obtenir uniquement une solution fonctionnelle, je pouvais comparer mon raisonnement avec la correction proposée et comprendre le mécanisme Svelte correspondant.

La version React et la version Vue.js ont également servi de références pendant cette migration. Lorsqu'un comportement était incorrect dans la version Svelte, je pouvais revenir aux versions précédentes pour vérifier le résultat attendu avant de chercher comment le reproduire avec Svelte.

Cette méthode de migration progressive m'a permis de conserver une meilleure compréhension du projet. Elle évitait également de recevoir une grande quantité de code généré automatiquement qu'il aurait ensuite été difficile de maîtriser.

L'intelligence artificielle a donc principalement joué un rôle d'assistance, de correction et d'explication.

Même lorsque le code proposé par l'IA semblait correct, il restait nécessaire de le relire et de le tester dans l'application. Je devais notamment vérifier :

- les imports ;
- la syntaxe Svelte utilisée ;
- la réactivité des variables ;
- les props ;
- les événements ;
- les conditions d'affichage ;
- les appels API ;
- les erreurs dans la console ;
- le comportement réel dans le navigateur.

Cette expérience m'a montré que l'IA est particulièrement utile lorsqu'elle accompagne une démarche de compréhension. Elle peut accélérer le débogage et expliquer rapidement une erreur, mais elle ne remplace pas le travail du développeur.

Le fait d'essayer d'abord de migrer le composant moi-même m'a permis de réellement apprendre Svelte. Lorsque j'utilisais ensuite l'IA pour corriger une erreur, la correction avait beaucoup plus de valeur car je pouvais comprendre précisément ce qui avait changé et pourquoi.

## 11. Perspective professionnelle

Ce projet m'a surtout appris qu'apprendre un nouveau framework ne signifie pas repartir de zéro.

Après avoir travaillé avec React puis Vue.js, de nombreux concepts rencontrés dans Svelte étaient déjà connus.

Je savais déjà qu'une interface pouvait être découpée en composants, qu'un composant pouvait recevoir des données, qu'un état pouvait modifier l'affichage, qu'une liste pouvait générer plusieurs composants et qu'un événement utilisateur pouvait provoquer une modification de cet état.

Le principal travail consistait donc à apprendre comment Svelte représente ces concepts.

Cette expérience montre pourquoi la compréhension de l'architecture d'une application est plus importante que la mémorisation d'une syntaxe.

Un développeur qui comprend uniquement `useState`, `v-model` ou `{#each}` connaît une API particulière.

Un développeur qui comprend l'état, la liaison de données, l'itération et le flux de données peut retrouver rapidement les outils correspondants dans un autre framework.

Cette compétence devient particulièrement importante dans un contexte professionnel où les technologies peuvent évoluer d'un projet à un autre.

L'intelligence artificielle réduit également la difficulté du passage entre plusieurs frameworks. Elle peut rapidement proposer des équivalences syntaxiques, expliquer une API inconnue ou aider à transformer un composant.

Elle ne supprime cependant pas le besoin de comprendre ce qui est généré.

Le développeur reste responsable de plusieurs étapes essentielles :

- lire le code ;
- comprendre son comportement ;
- lancer l'application ;
- effectuer des tests ;
- utiliser les outils de développement du navigateur ;
- identifier les erreurs ;
- corriger les comportements incorrects ;
- vérifier que la migration respecte les besoins fonctionnels.

Le projet m'a donc appris que l'utilisation efficace de l'IA demande davantage de capacité de validation, et non moins de connaissances techniques.

## Conclusion

La réalisation des versions React, Vue.js et Svelte de la même application m'a permis de distinguer plus clairement les concepts frontend des outils utilisés pour les implémenter.

React, Vue.js et Svelte proposent des syntaxes différentes, mais répondent aux mêmes problématiques principales : composants, état, réactivité, flux de données, événements, rendu conditionnel, listes et cycle de vie.

React m'a permis de travailler avec une approche fortement basée sur JavaScript et JSX. Vue.js m'a présenté une approche plus déclarative grâce à son système de templates et de directives. Svelte m'a montré qu'il était possible de conserver cette approche déclarative tout en réduisant encore une partie de la syntaxe nécessaire.

La principale conclusion de cette comparaison est donc qu'un changement de framework ne signifie pas nécessairement un changement complet de manière de concevoir une application.

Lorsque l'architecture, les responsabilités des composants et les flux de données sont correctement compris, une grande partie des connaissances peut être transférée d'un framework à un autre.
