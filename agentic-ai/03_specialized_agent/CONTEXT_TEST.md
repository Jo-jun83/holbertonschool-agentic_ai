# 2. Le Crash Test — Saturation de l'attention

## 1. Objectif

L'objectif de cet exercice est d'observer si un agent IA conserve les instructions d'un projet après avoir reçu des informations hors sujet, puis de comparer son comportement après une réinitialisation du contexte.

## 2. Test avant la purge du contexte

Dans la session Copilot utilisée pour générer les tests Jest, j'ai introduit du contenu hors sujet portant notamment sur la théorie des cordes.

J'ai ensuite posé la question suivante :

> Au fait, rappelle-moi la règle de nommage exacte de nos tests selon nos guidelines d'entreprise ?

**Réponse obtenue :**

> Le nom de chaque `it()` ou `test()` doit suivre exactement :
>
> `should_[EXPECTED_BEHAVIOR]_when_[CONDITION]`
>
> Exemple : `should_return_zero_when_cart_is_empty`
>
> Tous les éléments doivent être en anglais, avec des mots séparés par des underscores.

**Observation :** malgré l'ajout de contenu hors sujet, l'agent a correctement retrouvé la convention de nommage.

## 3. Test après réinitialisation

J'ai ouvert une nouvelle session Copilot, puis demandé à l'agent de se réinitialiser à partir du fichier `MEMORY.md`.

L'agent a résumé le contexte du projet : environnement JavaScript et Jest, particularités du calculateur de panier et interdiction de modifier la logique métier.

J'ai ensuite reposé exactement la même question.

**Réponse obtenue :**

> La règle exacte est :
>
> `should_[EXPECTED_BEHAVIOR]_when_[CONDITION]`
>
> Tout nom de `it()` ou `test()` doit être en anglais.
>
> Exemple : `should_return_zero_when_cart_is_empty`

L'agent a indiqué avoir vérifié les guidelines locales pour retrouver la convention exacte.

## 4. Comparaison des résultats

| Critère | Avant purge | Après réinitialisation |
|---|---|---|
| Règle de nommage | Correcte | Correcte |
| Langue des tests | Anglais | Anglais |
| Format avec underscores | Respecté | Respecté |
| Hallucination observée | Non | Non |
| Consultation explicite des guidelines | Non mentionnée | Oui |

## 5. Constat et auto-évaluation

Dans cette expérience, Copilot a correctement restitué la règle de nommage des tests avant et après la réinitialisation du contexte. Aucun oubli ni aucune hallucination n'ont été constatés.

Cependant, ce test n'est pas forcément concluant, car je n'ai probablement pas suffisamment saturé l'historique de conversation. La quantité de contenu hors sujet envoyée à Copilot était peut-être trop faible pour provoquer une véritable perte d'attention ou atteindre les limites de sa fenêtre de contexte.

Après la réinitialisation, l'agent a explicitement consulté les guidelines du projet avant de répondre, ce qui montre l'intérêt de disposer de fichiers de référence pour retrouver des informations fiables.

Pour obtenir des résultats plus significatifs, il aurait fallu envoyer davantage de contenu hors sujet et répéter l'expérience plusieurs fois.

Ce test m'a donc permis de comprendre le principe de saturation du contexte, sans toutefois réussir à démontrer concrètement une dégradation des réponses de l'agent.

## 6. Conclusion

Le crash test n'a pas provoqué d'oubli observable. La convention `should_[EXPECTED_BEHAVIOR]_when_[CONDITION]` a été correctement restituée dans les deux situations.

La réinitialisation à partir de la mémoire du projet reste une méthode utile pour repartir sur un contexte maîtrisé, même si aucune amélioration de précision n'a été constatée dans ce test.