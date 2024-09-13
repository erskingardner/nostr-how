---
title: Relay implementaties
description: Dit is een lijst van alle bekende implementaties voor het draaien van een Nostr relay. Dit heb je alleen nodig als je van plan bent om zelf een relay te implementeren. Relays zijn (tot nu toe) applicatie agnostisch. Hieronder vind je een lijst gecategoriseerd per programmeertaal. 

---

## Go

- [Relayer Basic](https://github.com/fiatjaf/relayer/tree/master/examples/basic): een eenvoudig implementatie ondersteund door Postgres, geschreven als demo bovenop het [Relayer](https://github.com/fiatjaf/relayer) framework voor het bouwen van custom relay.
- [gnost-relay](https://github.com/barkyq/gnost-relay): een relay geschreven in Go met Postgres ondersteuning

## C++

-   [Stirfry](https://github.com/hoytech/strfry): Een C++ implemtatie zonder database.

## C#

-   [NNostr](https://github.com/Kukks/NNostr): Een C# relay
-   [netstr](https://github.com/bezysoftware/netstr): Een modern relais met hoge testdekking

## Rust

-   [nostr-rs-relay](https://sr.ht/~gheartsfield/nostr-rs-relay/): een minimalistische relay geschreven in Rust met een SQLite database.
-   [søstr](https://github.com/metasikander/s0str): Een private Nostr relay geschreven in Rust, bewaart alle events van één pubkey en stuurt deze door naar clients die deze opvragen.

## Node.js / Typescript

-   [nostream](https://github.com/Cameri/nostream): een relay geschreven in TypeScript met een PostgreSQL database. (voorheen bekend als nostr-ts-relay)
-   [Minds Nostr Relay](https://gitlab.com/minds/infrastructure/nostr-relay): een relay voor [Minds](https://www.minds.com), een opensource sociaal netwerk.
    -   [Minds Engine - Nostr](https://gitlab.com/minds/engine/-/tree/master/Core/Nostr): relevante Minds API code voor het lezen/schrijven van Minds berichten voor Nostr.
-   [nostr-relay-nestjs](https://github.com/CodyTseng/nostr-relay-nestjs): een relay met een overzichtelijke architectuur met veel testmogelijkheden (Postgres, MeiliSearch, NestJS)
-   [Nosflare](https://github.com/Spl0itable/nosflare): Een serverless Nostr relais speciaal gebouwd voor Cloudflare Workers en de Cloudflare KV store

## Clojure

-   [me.untethr.nostr-relay](https://github.com/atdixon/me.untethr.nostr-relay): een relay geschreven in Clojure

## Python

-   [nostrypy](https://github.com/monty888/nostrpy): Relay, client, en andere hulpmiddelen in Python
-   [nostr_relay](https://code.pobblelabs.org/fossil/nostr_relay/): een Nostr relay geschreven in Python, met SQLite als database

## Kotlin

-   [NostrPostr Relay](https://github.com/Giszmo/NostrPostr/tree/master/NostrRelay): een Kotlin relay die zowel een SQLite en Postgresql database ondersteunt
-   [knostr](https://github.com/lpicanco/knostr): een relay geschreven in Kotlin met Postgres support en statistieken(micrometer)

Nog meer implementaties kun je vinden in de [awesome-nostr lijst](https://github.com/aljazceru/awesome-nostr#implementations).
