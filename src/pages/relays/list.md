---
title: Relays
description: A list of Nostr relay implementations
---

This is a list of all known implementations of the Nostr relay spec

---

## Relays

Relays are (so far) application agnostic. You can run your own or use any or all
of the public instances.

### Go

- [Relayer Basic](https://github.com/fiatjaf/relayer/tree/master/basic): A simple reference relay backed by Postgres
- [Expensive Relay](https://github.com/fiatjaf/relayer/tree/master/expensive): A reference relay that requires payment for registration

### C#
- [NNostr](https://github.com/Kukks/NNostr): A C# relay

### Rust

- [nostr-rs-relay](https://sr.ht/~gheartsfield/nostr-rs-relay/): A minimalistic relay written in Rust that saves data on SQLite
- [søstr](https://github.com/metasikander/s0str): A private nostr relay written in rust, saves all notes from one pubkey and publish them to anyone that requests them

### Node.js

- [nodestr](https://github.com/Dolu89/nodestr-relay): A Node.js implementation

### Typescript

- [nostream](https://github.com/Cameri/nostream): A nostr relay written in Typescript backed by PostgreSQL (renamed from nostr-ts-relay)
- [Minds Nostr Relay](https://gitlab.com/minds/infrastructure/nostr-relay): A relay for [Minds](https://www.minds.com), an open-source social network
  - [Minds Engine - Nostr](https://gitlab.com/minds/engine/-/tree/master/Core/Nostr): Relevant Minds API code for reading/writing Minds posts using Nostr

### Clojure

- [me.untethr.nostr-relay](https://github.com/atdixon/me.untethr.nostr-relay): A relay written in Clojure

### Python

- [nostrypy](https://github.com/monty888/nostrpy): Relay, client, and other tooling in python
- [nostr_relay](https://code.pobblelabs.org/fossil/nostr_relay/): A Nostr relay written in python, backed by SQLite

### Kotlin

- [NostrPostr Relay](https://github.com/Giszmo/NostrPostr/tree/master/NostrRelay): A Kotlin Relay supporting both SQLite and Postgresql
- [knostr](https://github.com/lpicanco/knostr): A nostr relay implemented in Kotlin with support for Postgres and metrics(micrometer)








