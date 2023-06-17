---
title: Le protocole Nostr
description: Il s'agit d'une vue d'ensemble du protocole Nostr avec des détails sur les types d'événements et le fonctionnement des possibilités d'implémentation de Nostr (NIP).
---

## [§](#nostr-high-level) Nostr au plus haut niveau

-   Le réseau Nostr se compose de deux éléments principaux : [clients](/fr/clients) et [relais](/fr/relais).
    -   Les **clients** sont l'interface que les utilisateurs utilisent pour lire et écrire des données dans les relais. Dans le contexte des médias sociaux, il s'agit de l'application web ou mobile de Twitter. C'est un client qui vous permet de lire et d'écrire des données dans la base de données centralisée de Twitter.
    -   Les **relais** sont comme des bases de données (bien qu'ils fassent bien plus que stocker des données). Ils permettent aux clients de leur envoyer des données et de les stocker dans une base de données. Les clients peuvent ensuite lire les données des relais pour les montrer aux utilisateurs.
-   Chaque utilisateur est identifié par une clé publique. Chaque événement (par exemple, un message que vous publiez, une mise à jour de votre liste d'abonnés, etc. Les clients valident ces signatures pour s'assurer qu'elles sont correctes.
-   Les clients récupèrent des données auprès des relais et publient des données vers les relais. Les relais sont presque toujours choisis par l'utilisateur. Les relais n'ont pas besoin de communiquer entre eux, mais ils pourraient le faire à l'avenir.
-   Par exemple, pour mettre à jour votre profil, il vous suffit de demander à votre client d'envoyer un événement de type 0 aux relais que vous souhaitez utiliser. Les relais stockeront alors cet événement.
-   Au démarrage, votre client demande des données aux relais que vous lui avez indiqués. Vous pouvez filtrer ces données pour n'afficher que les événements des utilisateurs que vous suivez ou vous pouvez demander à tout le monde d'afficher ces données.
-   Il existe de nombreux types d'événements. Les événements peuvent contenir toutes sortes de données structurées, et les structures les plus utilisées trouvent leur place dans les [Nostr Implementation Possibilities](#nips) (NIPs - normes de protocole auxquelles tout le monde adhère) afin que tous les clients et relais puissent les gérer de manière transparente.
-   Les données que vous pouvez voir sur Nostr dépendent entièrement des relais auxquels vous décidez de vous connecter. Voir le diagramme de réseau ci-dessous pour plus d'informations.

### Architecture

![Diagramme du réseau Nostr](/images/nostr-network.webp)

Vous pouvez voir dans le diagramme ci-dessus que nous avons 3 relais et 3 utilisateurs. Chacun des utilisateurs se connecte à Nostr avec un client différent (et sur une plateforme différente).

Étant donné les lectures et les écritures dans le diagramme :

-   Bob peut voir tous les messages d'Alice, mais ne peut rien voir de Mary (et ne sait même pas qu'elle existe).
-   Alice peut voir tous les messages de Bob, mais ne peut rien voir de Mary (et ne sait même pas qu'elle existe).
-   Marie peut voir tous les messages de Bob et d'Alice. En effet, bien qu'elle n'écrive qu'au relais 3, elle lit à partir du relais 2, où Bob et Alice écrivent leurs messages.

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

-   Le champ `id` indique l'ID de l'événement
-   Le champ `pubkey` indique la clé publique de l'utilisateur qui a envoyé l'événement
-   Le champ `created_at` indique la date de publication de l'événement
-   Le champ `kind` nous indique de quel type d'événement il s'agit
-   Le champ `tags` nous renseigne sur les tags de l'événement. Ceux-ci sont utilisés pour créer des liens, ajouter des médias et mentionner d'autres utilisateurs ou événements.
-   Le champ `content` nous donne le contenu de l'événement. Dans le cas présent, il s'agit d'un texte court.
-   Le champ `sig` est la signature que les clients utilisent pour vérifier que l'utilisateur avec cette pubkey a bien envoyé cet événement à la date spécifiée.

### Types d'événements

Il s'agit d'une liste des types d'événements actuels. La liste la plus récente peut toujours être trouvée sur le [Nostr NIPs repository] (https://github.com/nostr-protocol/nips).

| kind    | description                | NIP                      |
| ------- | -------------------------- | ------------------------ |
| `0`     | Metadata                   | [1](https://nips.be/1)   |
| `1`     | Short Text Note            | [1](https://nips.be/1)   |
| `2`     | Recommend Relay            | [1](https://nips.be/1)   |
| `3`     | Contacts                   | [2](https://nips.be/2)   |
| `4`     | Encrypted Direct Messages  | [4](https://nips.be/4)   |
| `5`     | Event Deletion             | [9](https://nips.be/9)   |
| `6`     | Reposts                    | [18](https://nips.be/18) |
| `7`     | Reaction                   | [25](https://nips.be/25) |
| `8`     | Badge Award                | [58](https://nips.be/58) |
| `40`    | Channel Creation           | [28](https://nips.be/28) |
| `41`    | Channel Metadata           | [28](https://nips.be/28) |
| `42`    | Channel Message            | [28](https://nips.be/28) |
| `43`    | Channel Hide Message       | [28](https://nips.be/28) |
| `44`    | Channel Mute User          | [28](https://nips.be/28) |
| `1063`  | File Metadata              | [94](https://nips.be/94) |
| `1984`  | Reporting                  | [56](https://nips.be/56) |
| `9734`  | Zap Request                | [57](https://nips.be/57) |
| `9735`  | Zap                        | [57](https://nips.be/57) |
| `10000` | Mute List                  | [51](https://nips.be/51) |
| `10001` | Pin List                   | [51](https://nips.be/51) |
| `10002` | Relay List Metadata        | [65](https://nips.be/65) |
| `13194` | Wallet Info                | [47](https://nips.be/47) |
| `22242` | Client Authentication      | [42](https://nips.be/42) |
| `23194` | Wallet Request             | [47](https://nips.be/47) |
| `23195` | Wallet Response            | [47](https://nips.be/47) |
| `24133` | Nostr Connect              | [46](https://nips.be/46) |
| `30000` | Categorized People List    | [51](https://nips.be/51) |
| `30001` | Categorized Bookmark List  | [51](https://nips.be/51) |
| `30008` | Profile Badges             | [58](https://nips.be/58) |
| `30009` | Badge Definition           | [58](https://nips.be/58) |
| `30017` | Create or update a stall   | [15](https://nips.be/15) |
| `30018` | Create or update a product | [15](https://nips.be/15) |
| `30023` | Long-form Content          | [23](https://nips.be/23) |
| `30078` | Application-specific Data  | [78](https://nips.be/78) |
| `31989` | Handler recommendation     | [89](https://nips.be/89) |
| `31990` | Handler information        | [89](https://nips.be/89) |

### Tags standardisés

| nom        | valeur                                 | autre paramètre     | NIP                      |
| ---------- | -------------------------------------- | ------------------- | ------------------------ |
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
