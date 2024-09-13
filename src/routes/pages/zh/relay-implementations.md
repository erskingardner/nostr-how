---
title: 中继实现
description: 这是 Nostr 中继规范的所有已知实现的列表。仅当您计划自己运行中继时才需要这个。中继（到目前为止）与应用程序无关。您可以运行自己的实例或使用任何或所有公共实例。
---

## Go

-   [Relayer Basic](https://github.com/fiatjaf/relayer/tree/master/examples/basic): 由 Postgres 支持的一个中继实现的简单参考，在 [Relayer](https://github.com/fiatjaf/relayer) 框架之上编写用于构建自定义中继的 demo。

## C++

-   [Stirfry](https://github.com/hoytech/strfry): 一个用 C++ 编写的没有数据库的中继实现

## C#

-   [NNostr](https://github.com/Kukks/NNostr): 一个 C# 中继
-   [netstr](https://github.com/bezysoftware/netstr): 具有高测试覆盖率的现代继电器

## Rust

-   [nostr-rs-relay](https://sr.ht/~gheartsfield/nostr-rs-relay/): 用 Rust 编写的简约中继，数据保存在 SQLite 上。
-   [søstr](https://github.com/metasikander/s0str): 一种用 Rust 编写的私人 Nostr 中继，保存来自一个公钥的所有笔记并将它们发布给任何请求它们的人

## Node.js / Typescript

-   [nostream](https://github.com/Cameri/nostream): 由 PostgreSQL 支持的 Typescript 编写的 Nostr 中继（从 nostr-ts-relay 重命名）
-   [Minds Nostr Relay](https://gitlab.com/minds/infrastructure/nostr-relay): [Minds](https://www.minds.com) 的中继，一个开源社交网络
    -   [Minds Engine - Nostr](https://gitlab.com/minds/engine/-/tree/master/Core/Nostr): 使用 Nostr 读取/写入 Minds 帖子的相关 Minds API 代码
-   [nostr-relay-nestjs](https://github.com/CodyTseng/nostr-relay-nestjs): 具有清晰架构和高测试覆盖率的 Nostr 中继（Postgres, MeiliSearch, NestJS）
-   [Nosflare](https://github.com/Spl0itable/nosflare): 为 Cloudflare 工人和 Cloudflare KV 商店建造的无服务器鼻孔中继器

## Clojure

-   [me.untethr.nostr-relay](https://github.com/atdixon/me.untethr.nostr-relay): 用 Clojure 编写的中继

## Python

-   [nostrypy](https://github.com/monty888/nostrpy): python 中的中继、客户端和其他工具
-   [nostr_relay](https://code.pobblelabs.org/fossil/nostr_relay/): 用 Python 编写的 Nostr 中继，由 SQLite 支持

## Kotlin

-   [NostrPostr Relay](https://github.com/Giszmo/NostrPostr/tree/master/NostrRelay): 支持 SQLite 和 Postgresql 的 Kotlin Relay
-   [knostr](https://github.com/lpicanco/knostr):在 Kotlin 中实现的 Nostr 中继，支持 Postgres 和 metrics(micrometer)
