---
title: Relay Implementierungen
description: Dies ist eine Liste aller bekannten Implementierungen für Nostr-Relays. Wenn du selbst ein Relay betreiben willst, können die folgenden Infos hilfreich sein. Relays sind (bisher) anwendungsunabhängig. Du kannst dein eigenes Relay betreiben oder öffentliche Relays verwenden.
---

## Go

-   [Relayer Basic](https://github.com/fiatjaf/relayer/tree/master/basic): Ein einfaches Relay mit PostgreSQL Datenbank, welches auf dem [Relayer](https://github.com/fiatjaf/relayer)-Framework basiert und zum Erstellen benutzerdefinierter Relays geschrieben wurde.
-   [grain](https://github.com/0ceanSlim/grain): Go Relay Architektur für die Implementierung von Nostr. Grain ist ein hochkonfigurierbares Relay mit MongoDB, das es Benutzern ermöglicht, Richtlinien anzupassen, Ressourcen zu verwalten und es an ihre spezifischen Bedürfnisse anzupassen.

## C++

-   [Stirfry](https://github.com/hoytech/strfry): Eine Relay-Implementierung ohne externe Datenbank in C++.

## C#

-   [NNostr](https://github.com/Kukks/NNostr): Ein C# Relay.
-   [netstr](https://github.com/bezysoftware/netstr): Relay moden enggau bungkur penguji ti tinggi .

## Rust

-   [nostr-rs-relay](https://sr.ht/~gheartsfield/nostr-rs-relay/): Ein minimalistisches Relay geschrieben in Rust, welches Daten in SQLite speichert.
-   [søstr](https://github.com/metasikander/s0str): Ein privates Nostr-Relay geschrieben in Rust, welches alle Notes eines Pubkeys speichert und auf Anfrage veröffentlicht.

## Node.js / Typescript

-   [nostream](https://github.com/Cameri/nostream): Ein Nostr-Relay geschrieben in Typescript mit PostgreSQL Datenbank (umbenannt von nostr-ts-relay).
-   [Minds Nostr Relay](https://gitlab.com/minds/infrastructure/nostr-relay): Ein Relay für [Minds](https://www.minds.com), ein Open-Source Social Network.
-   [Minds Engine - Nostr](https://gitlab.com/minds/engine/-/tree/master/Core/Nostr): Relevanter Minds API Code zum Lesen/Schreiben von Minds Posts über Nostr.
-   [Nosflare](https://github.com/Spl0itable/nosflare): Ein serverloses Nostr-Relais für Cloudflare Workers und den Cloudflare KV-Store

## Clojure

-   [me.untethr.nostr-relay](https://github.com/atdixon/me.untethr.nostr-relay): Ein Relay geschrieben in Clojure.

## Python

-   [monstr](https://github.com/monty888/monstr): Relay, Client und andere Tools in Python.
-   [nostr_relay](https://code.pobblelabs.org/fossil/nostr_relay/): Ein Nostr Relay geschrieben in Python mit SQLite Datenbank.

## Kotlin

-   [NostrPostr Relay](https://github.com/Giszmo/NostrPostr/tree/master/NostrRelay): Ein auf Kotlin basierendes Relay, welches SQLite und PostgreSQL unterstützt.
-   [knostr](https://github.com/lpicanco/knostr): Ein Nostr-Relay geschrieben in Kotlin, welches PostgreSQL und metrics(micrometer) unterstützt.

## Java

-   [SuperConductor](https://github.com/avlo/superconductor) Nostr-Relay-Framework und Webanwendung: Java 20, Spring WebSocketSession 3.2.2, Spring Boot 3.2.4, basierend auf der [nostr-java-Bibliothek] (https://github.com/tcheeric/nostr-java). Einfache und saubere OO.

## CLI

- [nak](https://github.com/fiatjaf/nak): Ein Befehlszeilentool für alle Nostr-Aufgaben.
- [monstr cli](https://github.com/monty888/monstr_terminal): Ein CLI zur Interaktion mit dem monstr relay client.
