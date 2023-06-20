---
title: Publication sur le web résistant à la censure
description: Nostr est un protocole simple et ouvert qui permet de publier sur le web des informations à valeur ajoutée à l'échelle mondiale et réellement résistantes à la censure.
---

## Qu'est-ce que Nostr ?

Nostr est l'acronyme de "Notes and Other Stuff Transmitted by Relays" (notes et autres éléments transmis par les relais). Comme HTTP ou TCP-IP, Nostr est un protocole, un standard ouvert sur lequel tout le monde peut s'appuyer. Nostr n'est pas une application ou un service auquel on s'inscrit.

Nostr est conçu pour être simple et permet une publication sur le web résistante à la censure et décentralisée à l'échelle mondiale. Décortiquons un peu tout cela :

### Simple

Le protocole est basé sur des objets `Event` très simples et flexibles (qui sont transmis sous forme de JSON) et utilise la cryptographie asymétrique (clé publique/privée) pour les clés et la signature. Cela facilite l'exécution des relais et la construction des clients et garantit que le protocole peut être étendu au fil du temps.

### Résilient

Comme Nostr ne dépend pas d'un petit nombre de serveurs de confiance pour déplacer ou stocker des données, il est très résistant. Le protocole suppose que les relais disparaîtront et permet aux utilisateurs de se connecter et de publier vers un nombre arbitraire de relais qu'ils peuvent modifier au fil du temps.

### Vérifiable

Les comptes Nostr étant basés sur la [cryptographie à clé publique](https://en.wikipedia.org/wiki/Public-key_cryptography), il est facile de vérifier que les messages ont bien été envoyés par l'utilisateur en question.
