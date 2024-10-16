---
title: Qu'est-ce que les relais Nostr?
description: Un aperçu rapide de ce que sont les relais Nostr, de leur importance et de leur fonctionnement.
---

## Que sont les relais ?

Les relais sont en quelque sorte les serveurs dorsaux de Nostr. Ils permettent aux clients de Nostr de leur envoyer des messages, et ils peuvent (ou non) stocker ces messages et les diffuser à tous les autres clients connectés.

Le monde des relais évolue rapidement, il faut donc s'attendre à de nombreux changements à l'avenir. Une chose à noter, parce que Nostr est décentralisé et dépend des relais pour stocker et recevoir des données, si vous remarquez que votre client Nostr est lent, c'est probablement dû aux relais que vous utilisez. Il peut être intéressant d'ajouter quelques relais supplémentaires (ou d'en supprimer).

## Relais payants et gratuits

De nombreux relais sont actuellement gratuits. Compte tenu des coûts de fonctionnement d'un relais (paiement des frais de calcul, de stockage et de bande passante), la plupart des gens s'attendent à ce que les relais payants deviennent la norme à l'avenir.

L'un des principaux avantages de l'utilisation de relais payants est le signal plus élevé des utilisateurs et des notes sur les relais payants. La "preuve de travail" que constitue le paiement de l'accès au relais contribue à empêcher les comptes de spam d'infester le réseau.

### Relais payants populaires

Une liste actualisée des relais payants, avec des détails sur leur coût et leur opérateur, est disponible sur [Relay Exchange](https://relay.exchange/).

### Où puis-je trouver une liste de tous les relais ?

La meilleure ressource que nous ayons trouvée pour parcourir et évaluer la vitesse des relais connus est le [site Nostr.watch](https://legacy.nostr.watch/relays/find).

## Que se passe-t-il si tous les relais que j'utilise cessent de fonctionner ?

Si _tous_ les relais que vous avez utilisés dans le passé tombent en panne, tous vos messages seront irrécupérables. C'est l'une des raisons pour lesquelles Nostr permet aux utilisateurs de se connecter à de nombreux relais - cela garantit un certain degré de sauvegarde. Cela dit, si vous tenez vraiment à ne pas être censurable, vous pouvez et devez gérer votre propre relais.

## Dois-je installer mon propre relais ?

Pour la plupart des gens, non, cela ne vaut pas la peine. Cela dit, si vous êtes technique et que vous voulez vous assurer que votre discours n'est absolument pas censurable ou que vous voulez gérer un relais privé pour un petit groupe, alors vous pouvez et devriez gérer votre propre relais. Cela vous permettra d'avoir toujours une copie de tous vos messages et interactions sur Nostr. Nous travaillons sur un guide à ce sujet, mais en attendant, [voici un guide](https://andreneves.xyz/p/set-up-a-nostr-relay-server-in-under) d'Andre Neves sur la façon de mettre en place un relais Nostr.
