# 1. L'Audit du Gouffre — Simulateur FinOps

## 1. Mesure du System Prompt

Prompt mesuré :

> Tu es un agent expert en documentation logicielle.  
> Ton rôle est de lire le code fourni et de générer des commentaires d'en-tête détaillés pour chaque méthode.  
> Contraintes : Utilise le format JSDoc, liste tous les paramètres et le type de retour.  
> Ne génère que les commentaires, n'ajoute aucun autre texte narratif.  
> Code à analyser :

- **Tokens : 144** (mesure effectuée avec l'outil de tokenisation).
- **Caractères : 665** (mesure rapportée par l'outil).
- **Tokenizer / modèle : GPT-5.x & O1/3**



## 2. Hypothèses de simulation

- System Prompt : **144 tokens**.
- Fichier de code ajouté : **15 000 tokens**.
- Réponse générée : **500 tokens par exécution**.
- Tarif entrée : **5 $ par million de tokens**.
- Tarif sortie : **15 $ par million de tokens**.
- Le prompt et le code sont transmis une première fois ; pour les appels suivants, leur contenu reste dans l'historique. **Chaque nouvelle réponse de 500 tokens s'ajoute au contexte**. On n'ajoute aucun autre message de correction ni autre surcharge entre les appels.
- Les tokens d'outils et les autres surcoûts éventuels ne sont pas modélisés.

## 3. Coût d'une exécution

Tokens en entrée : `144 + 15 000 = 15 144`.

- Coût entrée : `15 144 × 5 / 1 000 000 = 0,07572 $`.
- Coût sortie : `500 × 15 / 1 000 000 = 0,00750 $`.

**Coût total du premier appel : 0,08322 $.**

## 4. Simulation de la boucle d'erreur sur 10 itérations

Pour l'itération `n` :

- `Input(n) = 15 144 + 500 × (n - 1)`.
- `Output(n) = 500`.
- `Coût(n) = Input(n) × 5 / 1 000 000 + 500 × 15 / 1 000 000`.

| Itération | Tokens input | Tokens output | Coût itération ($) | Coût cumulé ($) |
|---:|---:|---:|---:|---:|
| 1 | 15 144 | 500 | 0,08322 | 0,08322 |
| 2 | 15 644 | 500 | 0,08572 | 0,16894 |
| 3 | 16 144 | 500 | 0,08822 | 0,25716 |
| 4 | 16 644 | 500 | 0,09072 | 0,34788 |
| 5 | 17 144 | 500 | 0,09322 | 0,44110 |
| 6 | 17 644 | 500 | 0,09572 | 0,53682 |
| 7 | 18 144 | 500 | 0,09822 | 0,63504 |
| 8 | 18 644 | 500 | 0,10072 | 0,73576 |
| 9 | 19 144 | 500 | 0,10322 | 0,83898 |
| 10 | 19 644 | 500 | 0,10572 | **0,94470** |

### Vérification mathématique

Somme des tokens d'entrée :

`10 × 15 144 + 500 × (0 + 1 + ... + 9)`  
`= 151 440 + 500 × 45 = 173 940 tokens`.

Somme des tokens de sortie : `10 × 500 = 5 000 tokens`.

- Total entrée : `173 940 × 5 / 1 000 000 = 0,86970 $`.
- Total sortie : `5 000 × 15 / 1 000 000 = 0,07500 $`.

**Coût cumulé de 10 itérations : `0,86970 + 0,07500 = 0,94470 $`.**

À titre de comparaison, 10 appels sans croissance du contexte coûteraient `10 × 0,08322 = 0,83220 $`. La conservation des réponses entraîne donc **0,11250 $** de coût supplémentaire dans ce scénario (environ **13,52 %**).

## 5. Auto-évaluation et optimisation

Le calcul prend bien en compte la croissance du contexte : les 500 tokens de réponse de chaque itération sont facturés en sortie lors de leur génération, puis en entrée à chacune des itérations suivantes. La somme des coûts est vérifiée indépendamment à partir du nombre total de tokens d'entrée et de sortie.

Pour optimiser l'agent, je limiterais la conservation de l'historique : garder le System Prompt et le code utile, mais **tronquer les anciennes réponses** ou les remplacer par un bref résumé des erreurs et corrections encore pertinentes. Il faut conserver les informations nécessaires à la résolution du problème, plutôt que recopier automatiquement toute la conversation. Une limite stricte du nombre de tentatives et un budget maximal par tâche éviteraient également une boucle coûteuse.

Cette simulation reste volontairement simplifiée : en production, les messages de correction, appels d'outils et éventuelles modifications du code peuvent faire croître le contexte encore davantage. À l'inverse, les mécanismes de cache et de compression de contexte peuvent réduire le coût réel, selon le fournisseur et le modèle.
