---
title: リレーの実装
description: ここではよく知られたNostrリレーの仕様について説明します。自分でリレーを運営しようと考えている場合にのみ必要な知識です。リレーは（今のところ）アプリケーションに依存しません。自分で実装することも、公開されているインスタンスを利用することもできます。
---

## Go

- [Relayer Basic](https://github.com/fiatjaf/relayer/tree/master/examples/basic)：カスタムリレーを構築するための[Relayer](https://github.com/fiatjaf/relayer)フレームワーク上にデモとして書かれた、Postgresによってバックアップされたシンプルなリファレンス・リレー

## C++

- [Stirfry](https://github.com/hoytech/strfry)：C++によるデータベースレス・リレーの実装

## C#

- [NNostr](https://github.com/Kukks/NNostr)：C#リレー
- [netstr](https://github.com/bezysoftware/netstr): 高いテストカバレッジを備えた最新のリレー
## Rust

- [nostr-rs-relay](https://sr.ht/~gheartsfield/nostr-rs-relay/)：SQLiteにデータを保存するRustで書かれた最小限のリレー
- [søstr](https://github.com/metasikander/s0str)：Rustで書かれたプライベートなNostrリレーは、1つの公開鍵からすべてのメモを保存し、それを要求した人へ公開

## Node.js / Typescript

- [nostream](https://github.com/Cameri/nostream)：PostgreSQLによってバックされた、Typescriptで書かれたNostrリレー (nostr-ts-relay から改名)
- [Minds Nostr Relay](https://gitlab.com/minds/infrastructure/nostr-relay)：オープンソースのソーシャルネットワークである[Minds](https://www.minds.com)向けのリレー
    - [Minds Engine - Nostr](https://gitlab.com/minds/engine/-/tree/master/Core/Nostr)：Nostrを使用してMindsの投稿を読み書きするための関連するMinds APIコード
- [nostr-relay-nestjs](https://github.com/CodyTseng/nostr-relay-nestjs)：明確なアーキテクチャと高いテスト・カバレッジを持つNostrリレー（Postgres、MeiliSearch、NestJS）
- [Nosflare](https://github.com/Spl0itable/nosflare): Cloudflare Workers と Cloudflare KV ストア用に設計された、サーバーレスの Nostr リレー

## Clojure

- [me.untethr.nostr-relay](https://github.com/atdixon/me.untethr.nostr-relay)：Clojureで書かれたリレー

## Python

- [nostrypy](https://github.com/monty888/nostrpy)：Pythonによるリレー、クライアント、およびその他のツール
- [nostr_relay](https://code.pobblelabs.org/fossil/nostr_relay/)：Pythonで書かれ、SQLiteによってバックアップされたNostrリレー

## Kotlin

- [NostrPostr Relay](https://github.com/Giszmo/NostrPostr/tree/master/NostrRelay)：SQLiteとPostgresqlの両方をサポートするKotlinリレー
- [knostr](https://github.com/lpicanco/knostr)：Kotlinで実装され、Postgresとメトリクス（micrometer）をサポートするNostrリレー
