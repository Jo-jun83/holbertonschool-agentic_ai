# 0. Déploiement du Serveur CRM et Interfaçage

## 1. Configuration du serveur MCP

**Nom du serveur :** `crm-server`

Le serveur MCP a été configuré dans le fichier `.vscode/mcp.json` à la racine du projet `04_mcp`.

La configuration utilise le transport `stdio` et exécute `mcp_server.js` avec Node.js, en utilisant le chemin absolu du fichier.

Les dépendances du projet ont été installées avec la commande `npm install`.

## 2. Outil CRM détecté

**Nom du Tool :** `get_customer_status`

Dans Copilot, l'outil apparaît sous le nom :

`crm-server-get_customer_status`

Cet outil permet de récupérer le statut d'un client et l'état de sa commande à partir de son adresse e-mail.

## 3. Vérification du fonctionnement

Après avoir ouvert le dossier `04_mcp` comme workspace dans VS Code, j'ai démarré le serveur depuis le fichier `mcp.json`.

VS Code a affiché le statut `En cours d'exécution`, confirmant le démarrage du serveur.

J'ai ensuite interrogé Copilot pour connaître les outils MCP disponibles.

Copilot a identifié l'outil `crm-server-get_customer_status` et fourni sa description.

La communication entre VS Code, Copilot et le serveur MCP semble donc correctement configurée.

## 4. Conclusion

Le serveur `crm-server` a été configuré et démarré avec succès. Copilot a pu détecter l'outil `get_customer_status` exposé par le serveur.

L'exercice m'a permis de comprendre comment connecter un agent IA à un outil externe via le protocole MCP, sans intégrer directement la logique CRM dans le modèle.

La découverte de l'outil est validée. Son exécution effective avec une adresse e-mail client n'a pas encore été testée.