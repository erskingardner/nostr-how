---
title: Implementações de Relay
description: Esta é uma lista de todas as implementações conhecidas da especificação de relay Nostr. Só precisas disto se planeias executar o teu próprio relay. Os relays são (até agora) agnósticos da aplicação. Podes executar o teu próprio ou usar qualquer ou todas as instâncias públicas.
---

## Go

-   [Relayer Basic](https://github.com/fiatjaf/relayer/tree/master/examples/basic): Um simples relay de referência com suporte para PostgreSQL, escrito como uma demonstração sobre o framework [Relayer](https://github.com/fiatjaf/relayer) para construir relays personalizados.

## C++

-   [Stirfry](https://github.com/hoytech/strfry): Uma implementação de relay sem base de dados em C++.

## C#

-   [NNostr](https://github.com/Kukks/NNostr): Um relay em C#.
-   [netstr](https://github.com/bezysoftware/netstr): Um relé moderno com elevada cobertura de testes

## Rust

-   [nostr-rs-relay](https://sr.ht/~gheartsfield/nostr-rs-relay/): Um relay minimalista escrito em Rust que armazena dados em SQLite.
-   [søstr](https://github.com/metasikander/s0str): Um relay privado do Nostr escrito em Rust, que armazena todas as notas de uma chave pública e as torna públicas para qualquer pessoa que as solicite.

## Node.js / Typescript

-   [nostream](https://github.com/Cameri/nostream): Um relay do Nostr escrito em Typescript com suporte para PostgreSQL (anteriormente conhecido como nostr-ts-relay).
-   [Minds Nostr Relay](https://gitlab.com/minds/infrastructure/nostr-relay): Um relay para [Minds](https://www.minds.com), uma rede social de código aberto.
-   [Minds Engine - Nostr](https://gitlab.com/minds/engine/-/tree/master/Core/Nostr): Código relevante da API da Minds para ler/escrever publicações da Minds utilizando o Nostr.
-   [Nosflare](https://github.com/Spl0itable/nosflare): Um relé Nostr sem servidor projetado para trabalhadores Cloudflare e a loja Cloudflare KV

## Clojure

-   [me.untethr.nostr-relay](https://github.com/atdixon/me.untethr.nostr-relay): Um relay escrito em Clojure.

## Python

-   [nostrypy](https://github.com/monty888/nostrpy): Relay, cliente e outras ferramentas em Python.
-   [nostr_relay](https://code.pobblelabs.org/fossil/nostr_relay/): Um relay do Nostr escrito em Python, com suporte para SQLite.

## Kotlin

-   [NostrPostr Relay](https://github.com/Giszmo/NostrPostr/tree/master/NostrRelay): Um relay em Kotlin que suporta tanto SQLite como PostgreSQL.
-   [knostr](https://github.com/lpicanco/knostr): Uma implementação do relay do Nostr em Kotlin com suporte para PostgreSQL e métricas (Micrometer).
