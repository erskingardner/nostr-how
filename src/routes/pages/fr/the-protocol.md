---
title: Le protocole Nostr
description: Il s'agit d'une vue d'ensemble du protocole Nostr avec des détails sur les types d'événements et le fonctionnement des possibilités d'implémentation de Nostr (NIP).
---

## [§](#nostr-high-level)  Nostr au plus haut niveau

- Le réseau Nostr se compose de deux éléments principaux : [clients](/fr/clients) et [relais](/fr/relais).
    - Les **clients** sont l'interface que les utilisateurs utilisent pour lire et écrire des données dans les relais. Dans le contexte des médias sociaux, il s'agit de l'application web ou mobile de Twitter. C'est un client qui vous permet de lire et d'écrire des données dans la base de données centralisée de Twitter.
    - Les **relais** sont comme des bases de données (bien qu'ils fassent bien plus que stocker des données). Ils permettent aux clients de leur envoyer des données et de les stocker dans une base de données. Les clients peuvent ensuite lire les données des relais pour les montrer aux utilisateurs.
- Chaque utilisateur est identifié par une clé publique. Chaque événement (par exemple, un message que vous publiez, une mise à jour de votre liste d'abonnés, etc. Les clients valident ces signatures pour s'assurer qu'elles sont correctes.
- Les clients récupèrent des données auprès des relais et publient des données vers les relais. Les relais sont presque toujours choisis par l'utilisateur. Les relais n'ont pas besoin de communiquer entre eux, mais ils pourraient le faire à l'avenir.
- Par exemple, pour mettre à jour votre profil, il vous suffit de demander à votre client d'envoyer un événement de type 0 aux relais que vous souhaitez utiliser. Les relais stockeront alors cet événement.
- Au démarrage, votre client demande des données aux relais que vous lui avez indiqués. Vous pouvez filtrer ces données pour n'afficher que les événements des utilisateurs que vous suivez ou vous pouvez demander à tout le monde d'afficher ces données.
- Il existe de nombreux types d'événements. Les événements peuvent contenir toutes sortes de données structurées, et les structures les plus utilisées trouvent leur place dans les [Nostr Implementation Possibilities](#nips) (NIPs - normes de protocole auxquelles tout le monde adhère) afin que tous les clients et relais puissent les gérer de manière transparente.
- Les données que vous pouvez voir sur Nostr dépendent entièrement des relais auxquels vous décidez de vous connecter. Voir le diagramme de réseau ci-dessous pour plus d'informations.

### Architecture

![Diagramme du réseau Nostr](/images/nostr-network.webp)

Vous pouvez voir dans le diagramme ci-dessus que nous avons 3 relais et 3 utilisateurs. Chacun des utilisateurs se connecte à Nostr avec un client différent (et sur une plateforme différente).

Étant donné les lectures et les écritures dans le diagramme :

- Bob peut voir tous les messages d'Alice, mais ne peut rien voir de Mary (et ne sait même pas qu'elle existe).
- Alice peut voir tous les messages de Bob, mais ne peut rien voir de Mary (et ne sait même pas qu'elle existe).
- Marie peut voir tous les messages de Bob et d'Alice. En effet, bien qu'elle n'écrive qu'au relais 3, elle lit à partir du relais 2, où Bob et Alice écrivent leurs messages.

Il s'agit d'une situation très simplifiée, mais vous pouvez déjà constater que le choix des relais auxquels vous souhaitez vous connecter peut avoir un impact important sur qui et ce que vous verrez lorsque vous utiliserez Nostr.

## [§](#events) Evénements

Les événements sont le seul type d'objet sur le réseau Nostr. Chaque objet événement a un `kind`, qui indique de quel type d'événement il s'agit (quel type d'action un utilisateur pourrait entreprendre ou quels messages pourraient être reçus).

Voici à quoi ressemble un événement de type ("kind") 1 (le type 1 correspond à des notes de texte courtes, par exemple un tweet sur Twitter)

```json
{
    "id": "4376c65d2f232afbe9b882a35baa4f6fe8667c4e684749af565f981833ed6a65",
    "pubkey": "6e468422dfb74a5738702a8823b9b28168abab8655faacb6853cd0ee15deee93",
    "created_at": 1673347337,
    "kind": 1,
    "tags": [
        ["e", "3da979448d9ba263864c4d6f14984c423a3838364ec255f03c7904b1ae77f206"],
        ["p", "bf2376e17ba4ec269d10fcc996a4746b451152be9031fa48e74553dde5526bce"]
    ],
    "content": "Walled gardens became prisons, and nostr is the first step towards tearing down the prison walls.",
    "sig": "908a15e46fb4d8675bab026fc230a0e3542bfade63da02d542fb78b2a8513fcd0092619a2c8c1221e581946e0191f2af505dfdf8657a414dbca329186f009262"
}
```

- Le champ `id` indique l'ID de l'événement
- Le champ `pubkey` indique la clé publique de l'utilisateur qui a envoyé l'événement
- Le champ `created_at` indique la date de publication de l'événement
- Le champ `kind` nous indique de quel type d'événement il s'agit
- Le champ `tags` nous renseigne sur les tags de l'événement. Ceux-ci sont utilisés pour créer des liens, ajouter des médias et mentionner d'autres utilisateurs ou événements.
- Le champ `content` nous donne le contenu de l'événement. Dans le cas présent, il s'agit d'un texte court.
- Le champ `sig` est la signature que les clients utilisent pour vérifier que l'utilisateur avec cette pubkey a bien envoyé cet événement à la date spécifiée.

### Types d'événements

Il s'agit d'une liste des types d'événements actuels. La liste la plus récente peut toujours être trouvée sur le [Nostr NIPs repository] (https://github.com/nostr-protocol/nips).


| type ("kind") | description                            | NIP         |
|---------------|----------------------------------------|-------------|
| 0             | Metadonnées                            | [1](01.md)  |
| 1             | Note de texte courte                   | [1](01.md)  |
| 2             | Relai recommandé                       | [1](01.md)  |
| 3             | Contacts                               | [2](02.md)  |
| 4             | Messages directs chiffrés              | [4](04.md)  |
| 5             | Suppression d'événements               | [9](09.md)  |
| 6             | Repostes                               | [18](18.md) |
| 7             | Réaction                               | [25](25.md) |
| 8             | Badge                                  | [58](58.md) |
| 40            | Création d'un canal                    | [28](28.md) |
| 41            | Metadonnées d'un canal                 | [28](28.md) |
| 42            | Message d'un canal                     | [28](28.md) |
| 43            | Masquer le message d'un canal          | [28](28.md) |
| 44            | Canal des utilisateurs mis en sourdine | [28](28.md) |
| 1984          | Signalement                            | [56](56.md) |
| 9734          | Demande de Zap                         | [57](57.md) |
| 9735          | Zap                                    | [57](57.md) |
| 10000         | Liste de sourdine                      | [51](51.md) |
| 10001         | Liste épinglées                        | [51](51.md) |
| 10002         | Liste de métadonnées sur les relais    | [65](65.md) |
| 22242         | Authentification client                | [42](42.md) |
| 24133         | Nostr Connect                          | [46](46.md) |
| 30000         | Liste des personnes catégorisées       | [51](51.md) |
| 30001         | Liste de signets catégorisés           | [51](51.md) |
| 30008         | Badges de profil                       | [58](58.md) |
| 30009         | Définition du badge                    | [58](58.md) |
| 30023         | Contenu long                           | [23](23.md) |
| 30078         | Données spécifiques à une applicaion   | [78](78.md) |
| 1000-9999     | Événements réguliers                   | [16](16.md) |
| 10000-19999   | Événements remplaçables                | [16](16.md) |
| 20000-29999   | Événements éphémères                   | [16](16.md) |
| 30000-39999   | Événements remplaçables paramétrés     | [33](33.md) |



### Tags standardisés
| nom        | valeur                                 | autre paramètre     | NIP                      |
|------------|----------------------------------------|---------------------|--------------------------|
| e          | identifiant de l'événement (hex)       | relai URL, marqueur | [1](01.md), [10](10.md)  |
| p          | clé publique (hex)                     | relai URL           | [1](01.md)               |
| a          | coordonnées d'un événement             | relai URL           | [33](33.md), [23](23.md) |
| r          | une référence (URL, etc.)              |                     | [12](12.md)              |
| t          | hashtag                                |                     | [12](12.md)              |
| g          | geohash                                |                     | [12](12.md)              |
| nonce      | aléatoire                              |                     | [13](13.md)              |
| subject    | sujet                                  |                     | [14](14.md)              |
| d          | identifiant                            |                     | [33](33.md)              |
| expiration | horodatage unix (chaîne de caractères) |                     | [40](40.md)              |


## [§](#nips) NIPs

Une "Nostr Implementation Possibility", ou NIP en abrégé, existe pour documenter ce qui DOIT, ce qui DEVRAIT et ce qui PEUT être implémenté par les logiciels relais et clients compatibles avec Nostr. Les NIP sont les documents qui décrivent le fonctionnement du protocole Nostr.

### Pourquoi devrais-je m'intéresser aux NIP ?

Nostr est décentralisé et n'appartient pas à un service centralisé (comme Twitter). Cela signifie que l'orientation du protocole dépend de nous tous et toutes ! Nous pouvons suggérer et préconiser des changements et donner notre avis sur les idées suggérées par d'autres.

En participant activement à la communauté, vous avez votre mot à dire sur l'orientation du réseau. Les NIPs publiés dans le dépôt principal sont déjà approuvés. L'ajout de nouvelles idées se fait par le biais d'une "Pull Request" sur ce dépôt.

### Où puis-je trouver les NIPs ?

Vous pouvez consulter tous les NIPs actuels dans le [Nostr NIP repo](https://github.com/nostr-protocol/nips).
