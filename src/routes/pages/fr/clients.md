---
title: Qu'est-ce que les clients Nostr?
description: Une vue d'ensemble des clients de Nostr et une comparaison de nos préférés.
---

## Qu'est-ce qu'un client?

Un client dans Nostr est simplement l'application que vous utilisez pour accéder et interagir avec le protocole. C'est comme l'application Twitter iOS ou l'application web que vous utilisez pour interagir avec le flux de tweets de Twitter.

Parce que le protocole Nostr est très simple et flexible, différents clients se sont concentrés sur l'implémentation de différents aspects du protocole de manière légèrement différente. Par exemple, certains clients se concentrent sur la beauté et l'utilisation de l'interface utilisateur, d'autres se concentrent davantage sur les paiements avec lightning, d'autres encore se concentrent sur Nostr pour des cas d'utilisation créatifs comme jouer aux échecs (Oui, vous pouvez [jouer aux échecs](https://jesterui.github.io/) via le protocole Nostr).

La plupart des clients qui ont été créés jusqu'à présent sont centrés sur le cas d'utilisation des médias sociaux. Mais nous commençons à voir des cas d'utilisation plus intéressants.

Plusieurs exemples:

- [Jester](https://jesterui.github.io/) : Jouer aux échecs sur Nostr
- [Habla](https://habla.news/) : Contenu long format - comme Medium
- [Nostrgram](https://nostrgram.co/) : Client social axé sur les médias

## Puis-je changer de clients?

Oui. Un client n'étant qu'un moyen d'accéder aux données sous-jacentes détenues par les relais, vous pouvez changer de client ou vous connecter à autant de clients que vous le souhaitez. Tant que chaque client consulte le même ensemble de relais pour ses données, vous verrez les mêmes messages dans chaque client.

## Dois-je entrer ma clé privée dans les clients?

En règle générale, il est préférable de ne pas saisir votre clé privée dans un client. La plupart des clients qui demandent des clés privées font de leur mieux pour garder votre clé en sécurité, mais étant donné la nature des logiciels, il y a toujours des failles, des exploits et des bogues qui peuvent potentiellement exposer votre clé privée.

N'oubliez pas que votre clé privée est votre identité dans Nostr, donc si elle est compromise, vous devrez repartir de zéro pour reconstruire votre identité, et vous perdrez votre liste de followers et tous vos messages privés.

## Certains clients intéressants

### Web

- [Iris](https://iris.to) - C'est le client que nous recommandons aux nouveaux utilisateurs. [Consultez notre guide ici](/fr/guides/iris).
- [Snort](https://snort.social/)
- [Coracle](https://coracle.social/)
- [Nostrgram](https://nostrgram.co/)

### Application PC

- [Gossip](https://www.github.com/mikedilger/gossip) - Gossip est un client de bureau très critique qui nécessite un peu plus de connaissances techniques pour être utilisé. L'avantage est qu'il donne aux utilisateurs plus de contrôle sur la façon dont ils interagissent avec Nostr.

### iOS

- [Damus](https://apps.apple.com/app/damus/id1628663131) - C'est le premier et le meilleur client iOS pour Nostr. [Consultez notre guide ici](/fr/guides/damus).

### Android

- [Amethyst](https://play.google.com/store/apps/details?id=com.vitorpamplona.amethyst) - Un magnifique client pour Android. [Consultez notre guide ici](/fr/guides/amethyst).
