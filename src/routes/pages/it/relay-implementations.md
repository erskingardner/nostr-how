---
title: Implementazioni di Relè
description: Questo è un elenco di tutte le implementazioni note della specifica relè Nostra. Ne hai bisogno solo se hai intenzione di gestire tu stesso un relè. I relè sono (finora) indipendenti dall'applicazione. Puoi eseguire il tuo o utilizzare una o tutte le istanze pubbliche.
---

## Go

-   [Relayer Basic](https://github.com/fiatjaf/relayer/tree/master/basic): A simple reference relay backed by Postgres, written as a demo on top of the [Relayer](https://github.com/fiatjaf/relayer) framework for building custom relays

## C++

-   [Stirfry](https://github.com/hoytech/strfry): Un relè senza database in C++.

## C#

-   [NNostr](https://github.com/Kukks/NNostr)

## Rust

-   [nostr-rs-relay](https://sr.ht/~gheartsfield/nostr-rs-relay/): A minimalistic relay written in Rust that saves data on SQLite
-   [søstr](https://github.com/metasikander/s0str): Un relè privato in rust, salve tutte le note da un pubkey e publica a chiunque richiede.

## Node.js / Typescript

-   [nostream](https://github.com/Cameri/nostream): A nostr relay in Typescript con un database di PostgreSQL
-   [Minds Nostr Relay](https://gitlab.com/minds/infrastructure/nostr-relay): Un relè per [Minds](https://www.minds.com).
    -   [Minds Engine - Nostr](https://gitlab.com/minds/engine/-/tree/master/Core/Nostr)

## Clojure

-   [me.untethr.nostr-relay](https://github.com/atdixon/me.untethr.nostr-relay)

## Python

-   [nostrypy](https://github.com/monty888/nostrpy): Relay, client, e altro in python
-   [nostr_relay](https://code.pobblelabs.org/fossil/nostr_relay/): Un Nostr relè in python, con database SQLite

## Kotlin

-   [NostrPostr Relay](https://github.com/Giszmo/NostrPostr/tree/master/NostrRelay): Un relè Kotlin supportando entrambi SQLite e Postgresql
-   [knostr](https://github.com/lpicanco/knostr): Un relè in Kotlin con supporto per Postgres e metrics(micrometer)
