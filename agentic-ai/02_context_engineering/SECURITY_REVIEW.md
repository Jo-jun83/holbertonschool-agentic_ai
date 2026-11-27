# 1. Refactoring et sécurisation itérative d'une faille d'injection SQL

## 1. Prompt utilisé avec Copilot

> Analyse cette trace d'erreur issue de #terminalOutput et corrige via une requête préparée ou paramétrée, sans modifier la signature de la fonction ni l'objet de retour en cas de succès, afin de préserver le Test 1.

## 2. Vulnérabilité identifiée

Le fichier `src/legacy_auth.js` contenait une vulnérabilité d'injection SQL.

La requête SQL était construite en concaténant directement les identifiants fournis par l'utilisateur.

Une entrée malveillante comme `' OR '1'='1` pouvait ainsi modifier la logique de la requête et contourner l'authentification.

## 3. Modifications réalisées par Copilot

Copilot a remplacé la concaténation des identifiants par une requête paramétrée utilisant des placeholders `?`.

Les valeurs `email` et `password` sont désormais transmises séparément de la requête SQL.

Le connecteur simulé a également été adapté pour traiter ces paramètres comme des données et non comme du code SQL.

La signature `authenticateUser(email, password)` ainsi que l'objet retourné en cas de succès ont été conservés.

## 4. Résultats des tests

**Avant correction :**

Le code présentait une vulnérabilité d'injection SQL identifiée lors de l'analyse. Le résultat exact de la suite de tests initiale n'a pas été fourni dans le compte rendu de Copilot.

**Après correction :**

Commande exécutée :

`npm run test:security`

D'après le retour de Copilot :

- Test 1 — Authentification légitime : réussi.
- Test 2 — Protection contre l'injection SQL : réussi.

Copilot a également exécuté `git diff --check` et inspecté les modifications de `src/legacy_auth.js`.

## 5. Conclusion

Cet exercice montre l'intérêt d'utiliser Copilot en mode Agent pour corriger une vulnérabilité tout en préservant le comportement fonctionnel existant.

La correction repose sur la séparation entre le code SQL et les données utilisateur grâce à une requête paramétrée.

Les tests annoncés par Copilot indiquent que l'authentification légitime fonctionne toujours et que l'injection testée ne permet plus de contourner l'authentification.