# Comparaison entre les versions React et Vue.js de l’application

Les deux versions de l’application ont été construites autour du même objectif : proposer une landing page moderne, modulable et centrée sur une présentation claire des concepts d’Agentic AI. La structure globale est similaire, mais la manière d’exprimer la logique et le rendu diffère sensiblement entre React et Vue.js. Cette comparaison repose sur les implémentations réalisées dans les deux projets et sur les choix de syntaxe, d’organisation et de composition observés dans chaque version.

## Composants

Dans la version React, les composants sont créés sous forme de fonctions JavaScript qui retournent du JSX. Le composant principal de l’application est ainsi écrit comme une fonction simple, puis les sections comme Hero, Features, About, Insights et Contact sont intégrées en tant que sous-composants. Cette approche est très directe : le code du composant et sa logique sont contenus dans un fichier JavaScript, avec une syntaxe proche de celle d’un programme classique.

Dans la version Vue.js, les composants sont organisés sous forme de fichiers Single File Components, c’est-à-dire un fichier unique qui contient à la fois le script, le template et, si nécessaire, les styles. Le composant principal suit cette logique avec un bloc script setup et un bloc template. Cette séparation rend le composant plus lisible pour les développeurs qui préfèrent garder la logique et le rendu au même endroit, mais dans des sections distinctes.

Les similarités sont fortes. Dans les deux cas, l’application est découpée en composants réutilisables : en-tête, pied de page, cartes de présentation, boutons et sections. Les deux versions utilisent aussi une composition hiérarchique, où un composant parent assemble plusieurs sous-composants pour construire une interface cohérente.

La différence principale réside dans l’approche syntaxique. React privilégie l’écriture JavaScript avec JSX, tandis que Vue.js combine un template HTML avec une logique écrite dans un bloc script. Les deux approches permettent d’obtenir le même résultat, mais elles ne sollicitent pas les développeurs de la même manière.

## Templates

La version React utilise JSX pour décrire l’interface. Dans la section Hero, par exemple, le rendu est écrit directement dans le retour de la fonction du composant, avec des balises HTML qui ressemblent à du HTML mais qui sont en réalité interprétées comme du JavaScript. Cela permet d’insérer facilement des expressions JavaScript dans le rendu, comme la génération dynamique de cartes de statistiques à partir d’un tableau.

La version Vue.js utilise un template dédié. Le même composant Hero est défini avec une structure HTML classique, enrichie de directives comme v-for pour itérer sur une liste. Cette approche est souvent perçue comme plus naturelle pour les développeurs venant d’un contexte HTML, car le template ressemble davantage à une page web traditionnelle.

L’avantage du JSX est la grande flexibilité. Il permet de mélanger facilement logique et rendu, ce qui est pratique pour des composants complexes et dynamiques. Son principal inconvénient est qu’il peut être moins intuitif au début pour quelqu’un qui n’est pas habitué à penser en termes de JavaScript au sein du markup.

L’avantage du template Vue est sa lisibilité et sa proximité avec le HTML. Son principal inconvénient est qu’il impose une syntaxe propre à Vue, notamment avec les directives et les expressions spécifiques à l’écosystème.

## Props

Dans la version React, les props sont transmises à un composant via un objet argument. Par exemple, le composant Button reçoit des props comme href, variant, icon et children. Le composant rend ensuite ces valeurs dans le markup. Cette approche est simple et directe, et elle s’appuie sur la logique JavaScript classique.

Dans la version Vue.js, les props sont déclarées dans le bloc script avec defineProps. Le composant Button déclare ainsi ses props, puis les utilise dans le template. La différence notable est que Vue fournit un mécanisme plus explicite pour définir la structure attendue des props, avec des options comme le type et la valeur par défaut.

Les deux approches servent le même but : permettre à un composant parent de transmettre des données à un composant enfant. La différence majeure est que React s’appuie davantage sur la flexibilité de JavaScript, tandis que Vue rend la définition des props plus déclarative et plus structurée.

## Gestion de l’état

Dans la version React, l’état est géré avec useState. Dans la section Contact, par exemple, l’état du formulaire est stocké dans plusieurs variables comme formData, isSending et feedback. Les mises à jour sont faites avec des fonctions d’état, ce qui donne un modèle très explicite et très proche de la logique impérative.

Dans la version Vue.js, l’état réactif est géré avec ref et computed. Le même formulaire utilise ref pour stocker les valeurs du formulaire et computed pour valider les champs. Cette approche est plus orientée réactivité déclarative : une modification d’une valeur déclenche automatiquement la mise à jour du template.

Les deux frameworks permettent d’atteindre le même résultat. La différence principale est le style de programmation. React demande souvent une manipulation plus explicite de l’état avec des setters, tandis que Vue rend la réactivité plus intégrée au système du framework.

## Lifecycle

Dans cette application, la logique de cycle de vie est relativement minimale. La page ne nécessite pas d’effets de bord complexes, et les composants sont surtout rendus en fonction des props et de l’état. Dans la version React, ce modèle se traduit par des re-renders automatiques après modification de l’état ou des props. Dans la version Vue.js, la réactivité de ref et computed provoque de la même manière une mise à jour du template.

Si des hooks de cycle de vie avaient été nécessaires, React aurait utilisé des effets avec useEffect, tandis que Vue aurait utilisé des hooks comme onMounted. Dans les deux cas, l’idée reste la même : permettre d’exécuter du code à des moments précis du cycle de vie du composant. Dans cette implémentation concrète, la logique était toutefois assez simple pour être gérée sans besoin de hooks particuliers.

## Rendu conditionnel

Le rendu conditionnel est utilisé de manière discrète dans les deux versions. Dans React, la logique est souvent exprimée directement dans le JSX avec des expressions ternaires ou des opérateurs logiques. Dans la section Contact, par exemple, le texte du bouton et le message de feedback changent selon l’état isSending, et la classe CSS du message dépend du statut du formulaire.

Dans Vue.js, le rendu conditionnel peut être écrit avec des directives comme v-if, v-else ou avec des expressions dans le template. Dans la version Vue, le texte du bouton et la couleur du message de feedback sont également rendus en fonction de l’état du formulaire, mais avec une syntaxe plus orientée template et directives.

Les deux approches permettent d’obtenir un rendu dynamique en fonction de l’état. React le rend plus intégralement dans l’expression JavaScript du JSX, tandis que Vue le rend plus visible dans la structure du template.

## Rendu dynamique

Le rendu dynamique est l’un des points les plus visibles de comparaison. Dans la version React, la liste des statistiques de la section Hero est rendue avec une boucle map, tandis que dans la version Vue.js, la même logique est exprimée avec v-for. Dans les deux cas, les données d’un tableau sont transformées en composants ou éléments HTML réutilisables.

Le même principe apparaît pour les cartes de features. React utilise une boucle sur le tableau features pour créer plusieurs composants FeatureCard, et Vue utilise une boucle similaire avec v-for. Les deux solutions sont efficaces et produisent un rendu identique, mais la syntaxe diffère profondément.

## Formulaires

La version React gère le formulaire de contact avec des champs contrôlés. Chaque champ est lié à une valeur d’état via value, et les modifications sont traitées dans une fonction handleChange qui met à jour le state. Le formulaire est ensuite soumis à une fonction handleSubmit qui vérifie la validité et simule un envoi.

La version Vue.js utilise une approche plus compacte avec v-model. Les champs de saisie sont directement liés aux propriétés réactives du composant, ce qui réduit le code nécessaire pour synchroniser l’interface et l’état. La soumission est gérée via un événement @submit.prevent, ce qui évite également d’avoir à écrire manuellement le comportement du formulaire dans le JavaScript.

Les deux implémentations atteignent le même résultat : un formulaire interactif, contrôlé et validé côté client. La différence majeure est que React demande davantage de code explicite pour relier les champs à l’état, alors que Vue simplifie cette logique grâce à v-model.

## Événements

Dans la version React, les événements sont gérés via des props d’événements comme onSubmit et onChange. Cela implique de passer des fonctions JavaScript à des attributs spécifiques. La logique reste très explicite, ce qui peut être avantageux pour les développeurs qui préfèrent une approche claire et proche du JavaScript.

Dans la version Vue.js, les événements sont déclarés dans le template avec des directives telles que @submit.prevent. L’expression est plus compacte et plus proche du HTML. Cette syntaxe est souvent plus lisible pour les développeurs qui travaillent directement sur les templates.

Les similitudes sont évidentes : les deux frameworks permettent de réagir aux interactions utilisateur comme la saisie ou la soumission d’un formulaire. La différence principale est la syntaxe et le niveau d’abstraction : React expose davantage la logique sous forme de fonctions JavaScript, tandis que Vue intègre cette logique dans le template.

## Organisation du projet

Les deux projets sont organisés de manière très similaire. On retrouve des dossiers dédiés aux composants, avec sous-dossiers pour les sections, les cartes, la mise en page et les éléments d’interface. Les données sont également séparées dans un dossier dédié, ce qui rend le projet plus modulaire et plus facile à maintenir.

La version React suit une structure très orientée JavaScript avec des fichiers JSX pour les composants. La version Vue.js suit une structure plus orientée composants monolithiques, avec des fichiers .vue qui regroupent l’interface et la logique. La différence n’est donc pas tant dans la logique fonctionnelle que dans la manière de représenter le code.

Les deux approches favorisent la réutilisation, la séparation des responsabilités et une maintenance plus simple à mesure que l’application grandit. Le choix entre les deux dépend souvent de la préférence de l’équipe et de l’habitude du développeur avec la syntaxe du framework.

## Migration assistée par l’intelligence artificielle

J’ai utilisé ChatGPT pour m’accompagner lors de la migration de l’application de React vers Vue.js.

Dans un premier temps, j’essayais de migrer moi-même chaque composant afin de réfléchir aux différences entre les deux frameworks. Ensuite, j’utilisais ChatGPT pour vérifier mon code, corriger les erreurs éventuelles et surtout m’expliquer en détail pourquoi certaines syntaxes ou certains concepts de React devaient être adaptés en Vue.

Cette méthode a bien fonctionné car elle m’a permis de mieux comprendre plusieurs concepts propres à Vue, notamment defineProps, les slots à la place de children, v-for à la place de .map(), v-if, les bindings dynamiques avec :, v-model, ref, computed ou encore onMounted.

Certaines parties ont néanmoins nécessité des corrections manuelles, notamment lorsque de la syntaxe JSX restait présente dans les fichiers Vue, pour les classes conditionnelles, la gestion des icônes, les imports de composants ou encore la gestion des formulaires.

Après chaque étape de migration, je testais également manuellement l’application afin de vérifier que le rendu visuel et le comportement restaient identiques, ou aussi proches que possible, de la version React.

Cette migration m’a surtout permis de comprendre que l’IA est particulièrement utile comme outil d’accompagnement, de correction et d’apprentissage, plutôt que comme simple outil de conversion automatique. Le fait d’essayer d’abord par moi-même, puis de demander une correction accompagnée d’explications, m’a permis de mieux comprendre les différences entre React et Vue.js.

## Conclusion

React et Vue.js permettent de résoudre les mêmes problèmes de manière très comparable, mais avec des philosophies différentes. React met davantage l’accent sur la puissance du JavaScript et l’expression directe de la logique dans le rendu, tandis que Vue.js propose une approche plus déclarative et plus proche du HTML. Dans les deux versions de cette application, les composants, les données et la structure de l’interface sont très similaires, mais la syntaxe et les mécanismes de réactivité rendent chaque solution distincte. Cette comparaison montre que les deux frameworks sont capables de construire des interfaces modernes, mais qu’ils le font avec des cultures de développement différentes.