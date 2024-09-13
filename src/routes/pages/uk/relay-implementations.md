---
title: Реалізації Реле
description: Це список всіх відомих реалізацій специфікації реле Nostr. Вам це потрібно лише якщо ви плануєте запускати реле самостійно. Реле (поки що) не залежать від застосунків. Ви можете запустити своє власне або використовувати будь-які або всі публічні інстанси.
---

## Go

-   [Relayer Basic](https://github.com/fiatjaf/relayer/tree/master/examples/basic): Проста референсна реле, що працює на Postgres, написана як демонстрація на основі фреймворку [Relayer](https://github.com/fiatjaf/relayer) для створення користувацьких реле

## C++

-   [Stirfry](https://github.com/hoytech/strfry): Реалізація реле без бази даних на C++.

## C#

-   [NNostr](https://github.com/Kukks/NNostr): Реле на C#
-   [netstr](https://github.com/bezysoftware/netstr): Сучасне реле з високим випробувальним покриттям

## Rust

-   [nostr-rs-relay](https://sr.ht/~gheartsfield/nostr-rs-relay/): Мінімалістичне реле, написане на Rust, що зберігає дані в SQLite
-   [søstr](https://github.com/metasikander/s0str): Приватне реле Nostr, написане на Rust, зберігає всі нотатки від одного публічного ключа і публікує їх для всіх, хто їх запитує

## Node.js / Typescript

-   [nostream](https://github.com/Cameri/nostream): Реле Nostr, написане на Typescript, що працює на PostgreSQL (перейменоване з nostr-ts-relay)
-   [Minds Nostr Relay](https://gitlab.com/minds/infrastructure/nostr-relay): Реле для [Minds](https://www.minds.com), відкритої соціальної мережі
    -   [Minds Engine - Nostr](https://gitlab.com/minds/engine/-/tree/master/Core/Nostr): Відповідний код API Minds для читання/запису постів Minds за допомогою Nostr
-   [nostr-relay-nestjs](https://github.com/CodyTseng/nostr-relay-nestjs): Реле Nostr з чіткою архітектурою та високим покриттям тестами (Postgres, MeiliSearch, NestJS)
-   [Nosflare](https://github.com/Spl0itable/nosflare): Безсерверне реле Nostr, спеціально створене для Cloudflare Workers та Cloudflare KV store

## Clojure

-   [me.untethr.nostr-relay](https://github.com/atdixon/me.untethr.nostr-relay): Реле, написане на Clojure

## Python

-   [nostrypy](https://github.com/monty888/nostrpy): Реле, клієнт та інші інструменти на Python
-   [nostr_relay](https://code.pobblelabs.org/fossil/nostr_relay/): Реле Nostr, написане на Python, що працює на SQLite

## Kotlin

-   [NostrPostr Relay](https://github.com/Giszmo/NostrPostr/tree/master/NostrRelay): Реле на Kotlin, що підтримує як SQLite, так і PostgreSQL
-   [knostr](https://github.com/lpicanco/knostr): Реле Nostr, реалізоване на Kotlin з підтримкою Postgres та метрик (micrometer)

## Java

-   [SuperConductor](https://github.com/avlo/superconductor) Nostr-Relay Framework & Web Application: Java 20, Spring WebSocketSession 3.2.2, Spring Boot 3.2.4, на основі [nostr-java library](https://github.com/tcheeric/nostr-java). Проста. Чиста. ООП.