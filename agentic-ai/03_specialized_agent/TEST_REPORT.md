# 1. Génération et Standardisation — Application du Skill

## 1. Fichier de test généré

**Nom :** `cart_calculator.test.js`

**Chemin :** `src/cart_calculator.test.js`

Le fichier a été généré par GitHub Copilot en mode Agent, à partir du code existant dans `src/cart_calculator.js`.

## 2. Prompt utilisé

> @workspace Génère la suite de tests exhaustive pour #editor dans un nouveau fichier de test. Tu dois appliquer rigoureusement notre standard de test.

## 3. Standards appliqués

Copilot a consulté `TESTING_GUIDELINES.md` avant de générer les tests.

Il a respecté les conventions suivantes :

- Utilisation de Jest.
- Nommage des tests en anglais selon la convention `should_*_when_*`.
- Application du pattern Arrange – Act – Assert (AAA).
- Couverture de plusieurs cas nominaux, cas limites et comportements d'erreur.

Les tests couvrent notamment les paniers vides, les prix et quantités négatifs, les remises, les taxes, les arrondis et les valeurs manquantes.

## 4. Résultats de l'exécution

**Commande exécutée :**

`npm test`

**Résultat :**

```text
PASS  src/cart_calculator.test.js

Test Suites: 1 passed, 1 total
Tests:       17 passed, 17 total
Snapshots:   0 total
Time:        0.373 s
```

Les 17 tests ont été exécutés avec succès, sans aucun échec.

## 5. Respect des garde-fous

L'Agent a indiqué ne pas avoir modifié le code métier `src/cart_calculator.js`.

Il a uniquement ajouté le fichier `src/cart_calculator.test.js`.

Le garde-fou visant à protéger le code de production a donc été respecté selon le compte rendu de Copilot.

**Précision :** le fichier de test a été créé dans `/src`, ce qui constitue techniquement une modification du dossier. L'interdiction stricte de modifier `/src` définie dans les instructions de l'Agent n'a donc pas été entièrement respectée, même si le code métier est resté inchangé.

## 6. Conclusion

L'Agent spécialisé a généré une suite de 17 tests fonctionnels en suivant les conventions Jest du projet.

L'exécution de `npm test` confirme que tous les tests passent.

Cet exercice démontre l'intérêt de fournir des instructions persistantes et des standards précis à un agent IA pour obtenir des tests cohérents avec les conventions du projet.

Il met également en évidence l'importance de formuler des garde-fous sans ambiguïté afin de distinguer les fichiers de tests du code de production.