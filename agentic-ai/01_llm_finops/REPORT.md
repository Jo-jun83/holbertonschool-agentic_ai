# 0. La confrontation des modèles — Analyse de la dette sémantique

## 1. Prompt utilisé

Le même prompt volontairement flou a été soumis à deux modèles :

> Écris un script pour scraper une page web et sauvegarder les données, en gérant les erreurs.

Cette demande ne précise ni le site à scraper, ni les données à extraire, ni le format de sauvegarde, ni les contraintes techniques.

## 2. Modèles testés

- **ChatGPT (OpenAI)** : modèle généraliste. ()
- **Claude (Anthropic)** : modèle utilisé pour la comparaison de génération de code. (sonnet 5.5)



## 3. Différences observées

Les deux modèles ont généré un script Python utilisant `requests` et `BeautifulSoup`, mais leurs approches sont différentes.

| Critère | ChatGPT | Claude |
|---|---|---|
| Architecture | Script avec fonctions spécialisées | Script avec interface CLI configurable |
| Données extraites | Titres, liens et descriptions | Liens par défaut ou champs personnalisés |
| Sauvegarde | CSV avec pandas | JSON ou CSV avec bibliothèques natives |
| Gestion des erreurs | Exceptions, logs et tentatives manuelles | Exceptions, logs, codes de sortie et Retry |
| Configuration | URL et fichiers définis dans le code | Arguments en ligne de commande |

ChatGPT privilégie une solution simple avec des valeurs prédéfinies. Claude propose un outil plus générique et configurable.

Dans les deux cas, les modèles ont pris des décisions techniques sans connaître les besoins réels.

## 4. Hypothèses et choix arbitraires identifiés

**Premier problème : le choix des données à extraire.**

ChatGPT suppose que les informations recherchées sont les titres `h2`, les liens et les descriptions contenus dans des balises `article`.

Claude suppose, par défaut, que l'objectif est de récupérer tous les liens d'une page.

Ces deux comportements sont arbitraires puisque le prompt ne précise pas les données attendues. Les scripts peuvent fonctionner techniquement tout en produisant des résultats inutiles.

**Deuxième problème : le choix du format de sauvegarde.**

ChatGPT impose un export CSV avec `pandas`, alors que Claude utilise JSON par défaut et propose également CSV.

Le choix du format et l'ajout d'une dépendance comme `pandas` ne sont justifiés par aucune exigence exprimée.

**Troisième problème : les contraintes de production non définies.**

Les deux scripts utilisent un timeout et des tentatives de connexion, mais aucun ne vérifie automatiquement les règles du fichier `robots.txt`.

De plus, aucun des deux ne met en place de protection contre les requêtes vers des adresses réseau internes si l'URL est fournie par un utilisateur non fiable.

Claude propose une option `--delay`, mais elle ne constitue pas un mécanisme complet de limitation du débit.

**Quatrième problème : la gestion des erreurs HTTP.**

ChatGPT ne relance pas les requêtes après une erreur HTTP, même temporaire, comme une erreur 503.

Claude utilise `Retry` pour certaines erreurs HTTP, mais les paramètres de relance restent choisis arbitrairement, sans connaître les contraintes du serveur ciblé.

## 5. Auto-évaluation

Cet exercice montre que les modèles de langage peuvent générer des solutions cohérentes malgré un manque important de contexte. J'ai notamment identifié deux hypothèses arbitraires : les données à extraire et le format de sauvegarde. J'ai également constaté des différences dans la gestion des erreurs et les précautions de sécurité.

Un prompt flou est dangereux en production, car le modèle complète les informations manquantes avec ses propres hypothèses. Le code peut sembler correct sans répondre au véritable besoin métier, et certaines contraintes essentielles peuvent être ignorées. Il est donc nécessaire de préciser les exigences techniques, fonctionnelles et de sécurité avant de générer du code, puis de vérifier et tester la solution obtenue.

## Conclusion

Cette comparaison illustre la **dette sémantique** : les informations absentes du prompt sont remplacées par des hypothèses implicites qui peuvent ensuite se retrouver dans le code.

Les deux modèles ne retrouvent pas une solution unique et validée : ils génèrent une réponse plausible à partir du contexte disponible. La qualité du résultat dépend donc autant de la précision des instructions que des capacités du modèle.