---
title: Implantations de relais
description: Ceci est une liste de toutes les implémentations connues de la spécification du relais Nostr. Vous n'avez besoin de cette liste que si vous avez l'intention de faire fonctionner un relais vous-même. Les relais sont (jusqu'à présent) agnostiques en termes d'applications. Vous pouvez le faire fonctionner ou utiliser l'une ou l'autre des instances publiques.
---

## Go

-   [Relayer Basic](https://github.com/fiatjaf/relayer/tree/master/examples/basic) : Un relais de référence simple qui utilise Postgres comme base de données, écrit comme une démo au dessus du framework [Relayer](https://github.com/fiatjaf/relayer) pour construire des relais personnalisés.

## C++

-   [Stirfry](https://github.com/hoytech/strfry) : Une implémentation de relais sans base de données en C++.

## C#

-   [NNostr](https://github.com/Kukks/NNostr): Relai en C#
-   [netstr](https://github.com/bezysoftware/netstr): Un relais moderne avec une couverture de test élevée

## Rust

-   [nostr-rs-relay](https://sr.ht/~gheartsfield/nostr-rs-relay/) : Un relais minimaliste écrit en Rust qui sauvegarde les données sur SQLite
-   [søstr](https://github.com/metasikander/s0str) : Un relai nostr privé écrit en Rust, qui sauvegarde toutes les notes d'une pubkey et les publie à toute personne qui en fait la demande.

## Node.js / Typescript

-   [nostream](https://github.com/Cameri/nostream) : Un relais nostr écrit en Typescript qui utilise Postgres comme base de données (anciennement nostr-ts-relay)
-   [Minds Nostr Relay](https://gitlab.com/minds/infrastructure/nostr-relay) : Un relais pour [Minds](https://www.minds.com), un réseau social open-source
    -   [Minds Engine - Nostr](https://gitlab.com/minds/engine/-/tree/master/Core/Nostr) : Code API Minds pertinent pour lire/écrire des posts Minds en utilisant Nostr
-   [Nosflare](https://github.com/Spl0itable/nosflare): Un relais Nost sans serveur conçu spécialement pour les travailleurs Cloudflare et le magasin KV Cloudflare

## Clojure

-   [me.untethr.nostr-relay](https://github.com/atdixon/me.untethr.nostr-relay) : Un relais écrit en Clojure

## Python

-   [nostrypy](https://github.com/monty888/nostrpy) : Relais, client, et autres outils en python
-   [nostr_relay](https://code.pobblelabs.org/fossil/nostr_relay/) : Un relais Nostr écrit en python, SQLite pour le stockage des données

## Kotlin

-   [NostrPostr Relay](https://github.com/Giszmo/NostrPostr/tree/master/NostrRelay) : Un relais Kotlin supportant à la fois SQLite et Postgresql
-   knostr](https://github.com/lpicanco/knostr) : Un relais nostr implémenté en Kotlin avec le support de Postgres et de metrics(micrics)
