---
title: Implementazioni di Relay
description: Questo è un elenco di tutte le implementazioni note della specifica relays Nostra. Ne hai bisogno solo se hai intenzione di gestire tu stesso un relay. I relays sono (finora) indipendenti dall'applicazione. Puoi eseguire il tuo o utilizzare una o tutte le istanze pubbliche.
---

## Go

-   [Relayer Basic](https://github.com/fiatjaf/relayer/tree/master/examples/basic): Un semplice relay di riferimento supportato da Postgres, scritto come demo sul framework [Relayer](https://github.com/fiatjaf/relayer) per la costruzione di relay personalizzati.

## C++

-   [Stirfry](https://github.com/hoytech/strfry): Un relay senza database in C++.

## C#

-   [NNostr](https://github.com/Kukks/NNostr)
-   [netstr](https://github.com/bezysoftware/netstr): Un moderno relè con elevata copertura di test

## Rust

-   [nostr-rs-relay](https://sr.ht/~gheartsfield/nostr-rs-relay/): Un relay minimalista scritto in rust che salva i dati su SQLite
-   [søstr](https://github.com/metasikander/s0str): Un relay privato in rust, salve tutte le note da un pubkey e publica a chiunque richiede.

## Node.js / Typescript

-   [nostream](https://github.com/Cameri/nostream): A nostr relay in Typescript con un database di PostgreSQL
-   [Minds Nostr Relay](https://gitlab.com/minds/infrastructure/nostr-relay): Un relay per [Minds](https://www.minds.com).
    -   [Minds Engine - Nostr](https://gitlab.com/minds/engine/-/tree/master/Core/Nostr)
-   [Nosflare](https://github.com/Spl0itable/nosflare): Un server senza server per la rete Nostr appositamente costruita per i lavoratori Cloudflare e il negozio KV Cloudflare

## Clojure

-   [me.untethr.nostr-relay](https://github.com/atdixon/me.untethr.nostr-relay)

## Python

-   [nostrypy](https://github.com/monty888/nostrpy): Relay, client, e altro in python
-   [nostr_relay](https://code.pobblelabs.org/fossil/nostr_relay/): Un Nostr relay in python, con database SQLite

## Kotlin

-   [NostrPostr Relay](https://github.com/Giszmo/NostrPostr/tree/master/NostrRelay): Un relay Kotlin che supporta sia SQLite sia Postgresql
-   [knostr](https://github.com/lpicanco/knostr): Un relay in Kotlin con supporto sia Postgres sia metrics (micrometer)
