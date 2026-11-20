# 0. Le Défi du Contexte Implicite et de l'Architecture

## 1. Prompt utilisé dans Copilot

> Génère un nouveau service d'export de données. Tu dois reproduire exactement le pattern d'accès au repository ainsi que la gestion des exceptions déjà utilisés dans les services du projet.
>
> Fichiers fournis en contexte :
> - `src/repositories/user.repository.js`
> - `src/services/user.service.js`

## 2. Fichiers fournis comme contexte

Deux fichiers existants ont été utilisés pour guider Copilot :

- **`src/repositories/user.repository.js`** : permet de comprendre comment les données utilisateur sont récupérées.
- **`src/services/user.service.js`** : sert de référence pour reproduire l'architecture du service et la gestion des exceptions.

L'objectif était que Copilot analyse les conventions existantes au lieu d'inventer une nouvelle architecture.

## 3. Service généré

**Fichier créé :** `src/services/user-export.service.js`

Copilot a généré un service d'export contenant une méthode asynchrone `exportUserData()`.

Cette méthode utilise `userRepository.findByEmail()` pour récupérer les données d'un utilisateur à partir de son adresse e-mail.

## 4. Architecture existante réutilisée

Copilot a repris plusieurs éléments du projet :

- **Accès aux données :** utilisation du repository existant plutôt que création d'un nouvel accès direct à la base de données.
- **Séparation des responsabilités :** le service utilise le repository pour récupérer les données.
- **Gestion des exceptions :** conservation du message `Utilisateur introuvable dans le système` lorsqu'aucun utilisateur ne correspond à l'adresse recherchée.
- **Asynchronisme :** utilisation d'une méthode asynchrone pour interroger le repository.

Le service généré reste ainsi cohérent avec les conventions du micro-projet.

## 5. Vérifications effectuées

Copilot a exécuté des vérifications avec Node.js :

- **Utilisateur existant :** la méthode retourne l'objet utilisateur attendu `{ id: 1, name: 'Dev', role: 'admin' }`.
- **Utilisateur inexistant :** la méthode rejette la requête avec le message `Utilisateur introuvable dans le système`.

Copilot a indiqué que les deux vérifications avaient réussi.

## 6. Auto-évaluation

Cet exercice m'a permis de comprendre l'importance du contexte fourni à une IA lors de la génération de code.

En lui donnant accès aux fichiers existants, Copilot a pu identifier les conventions architecturales du projet et les réutiliser pour créer un nouveau service.

Sans ce contexte, l'IA aurait pu choisir une autre méthode d'accès aux données, modifier la gestion des exceptions ou introduire une architecture différente.

Le fait de référencer explicitement les fichiers permet donc de réduire les hypothèses arbitraires et d'obtenir un code plus cohérent avec le projet existant.