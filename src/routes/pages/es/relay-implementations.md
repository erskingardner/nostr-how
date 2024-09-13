---
title: Implementaciones de Relés
description: Esta es una lista de todas las implementaciones conocidas de la especificación de relé Nostr. Solo necesitas esto si planeas ejecutar un relé tú mismo. Los relés son (hasta ahora) agnósticos a la aplicación. Puedes ejecutar el tuyo propio o utilizar cualquiera o todas las instancias públicas.
---

## Go

-   [Relayer Basic](https://github.com/fiatjaf/relayer/tree/master/examples/basic): Un sencillo relé de referencia respaldado por Postgres, escrito como una demostración sobre el marco de trabajo [Relayer](https://github.com/fiatjaf/relayer) para construir relés personalizados.

## C++

-   [Stirfry](https://github.com/hoytech/strfry): Una implementación de relé sin base de datos en C++.

## C#

-   [NNostr](https://github.com/Kukks/NNostr): Un relé en C#
-   [netstr](https://github.com/bezysoftware/netstr): Un relé moderno con alta cobertura de pruebas

## Rust

-   [nostr-rs-relay](https://sr.ht/~gheartsfield/nostr-rs-relay/): Un relé minimalista escrito en Rust que guarda datos en SQLite
-   [søstr](https://github.com/metasikander/s0str): Un relé privado de Nostr escrito en Rust, guarda todas las notas de una clave pública y las publica para cualquiera que las solicite.

## Node.js / Typescript

-   [nostream](https://github.com/Cameri/nostream): Un relé de Nostr escrito en Typescript respaldado por PostgreSQL (renombrado de nostr-ts-relay)
-   [Minds Nostr Relay](https://gitlab.com/minds/infrastructure/nostr-relay): Un relé para [Minds](https://www.minds.com), una red social de código abierto.
    -   [Minds Engine - Nostr](https://gitlab.com/minds/engine/-/tree/master/Core/Nostr): Código relevante de la API de Minds para leer/escribir publicaciones de Minds utilizando Nostr.
-   [Nosflare](https://github.com/Spl0itable/nosflare): Un relé sin servidor diseñado para los trabajadores de Cloudflare y la tienda Cloudflare KV

## Clojure

-   [me.untethr.nostr-relay](https://github.com/atdixon/me.untethr.nostr-relay): Un relé escrito en Clojure.

## Python

-   [nostrypy](https://github.com/monty888/nostrpy): Relé, cliente y otras herramientas en Python.
-   [nostr_relay](https://code.pobblelabs.org/fossil/nostr_relay/): Un relé de Nostr escrito en Python, respaldado por SQLite.

## Kotlin

-   [NostrPostr Relay](https://github.com/Giszmo/NostrPostr/tree/master/NostrRelay): Un relé de Kotlin que admite tanto SQLite como PostgreSQL.
-   [knostr](https://github.com/lpicanco/knostr): Un relé de Nostr implementado en Kotlin con soporte para Postgres y métricas (micrómetro).
