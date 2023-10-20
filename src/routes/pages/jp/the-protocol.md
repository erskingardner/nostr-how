---
title: Nostrプロトコル
description: これはNostrプロトコルの高レベルな概要であり、EventタイプとNostr Implementation Possibilities（NIPs）の仕組みについての詳細です。
---

## [§](#nostr-high-level) 最高レベルのNostr

- Nostrネットワークは主要な構成が2つあります： [clients](/en/clients) & [relays](/en/relays).
    - **クライアント（Clients）** は、ユーザーがリレーにデータを読み書きするために使用するインターフェースです。ソーシャルメディアを例に挙げると、これはTwitter（現X）のウェブアプリやモバイルアプリだと考えてください。Twitterの集中型データベースからデータを読み取り、Twitterの集中型データベースにデータを書き込むためのクライアントです。
    - **リレー（Relays）** はデータベースのようなものです（ただし、単にデータを保存するだけでなく、もっと多くのことができます）。クライアントにデータを送信してもらい、そのデータをデータベースに保存します。クライアントはリレーからデータを読み取り、ユーザーに見せることができます。
- すべてのユーザーは公開鍵によって識別されます。すべてのイベント・オブジェクト（投稿メッセージ、フォローリストの更新など）は署名されています。クライアントはこれらの署名が正しいかどうかを検証します。
- クライアントはリレーからデータを取得し、リレーにデータを公開します。リレーはほとんどの場合、ユーザーが選択します。リレーは互いに通信する必要はありませんが、将来的には通信する可能性があります。
- 例えば、プロフィールを更新するには、クライアントに指示し、使用したいリレーにkind 0のイベントを送信するだけです。リレーはそのイベントを保存します。
- 起動時に、クライアントはあなたが指定したリレーからデータを照会します。これは、あなたがフォローしているユーザーのイベントのみを表示するようにフィルタリングすることができます。
- イベントには多くのkindがあります。イベントはあらゆる種類の構造化されたデータを含むことができ、最も使用される構造は、すべてのクライアントとリレーがそれらをシームレスに扱うことができるように、[Nostr Implementation Possibilities](#nips)（NIPs - protocol standards that everyone adheres to / 誰もが遵守すべきプロトコル標準）として、その方法を明記しています。
- Nostrで閲覧できるデータは、完全に接続するリレーに依存します。詳しくは下のネットワーク図をご覧ください。

### ネットワーク図

![Nostr network diagram](/images/nostr-network.webp)

You can see the diagram above that we have 3 relays and 3 users. Each of the users is connecting to Nostr with a different client (and on a different Platform).

Given the reads and writes in the diagram:

- Bob can see all of Alice's posts, but can't see anything from Mary (and doesn't even know she exists)
- Alice can see all of Bob's posts, but can't see anything from Mary (and doesn't even know she exists)
- Mary can see all of Bob's and Alice's posts. This is because while she only writes to Relay 3, she is reading from Relay 2, where Bob and Alice are writing their posts.

This is a very simplified situation but you can already see that the choice of which relays you want to connect to can have a large impact on who and what you'll see when using Nostr.

## [§](#events) Events

Events are the only object type on the Nostr network. Each event object has a `kind`, which denotes what sort of event it is (what sort of action a user might take or messages that might be received).

Here's what a kind 1 event looks like (kind 1 is for Short text notes – i.e. something like a Twitter tweet)

```json
{
    "id": "4376c65d2f232afbe9b882a35baa4f6fe8667c4e684749af565f981833ed6a65",
    "pubkey": "6e468422dfb74a5738702a8823b9b28168abab8655faacb6853cd0ee15deee93",
    "created_at": 1673347337,
    "kind": 1,
    "tags": [
        ["e", "3da979448d9ba263864c4d6f14984c423a3838364ec255f03c7904b1ae77f206"],
        ["p", "bf2376e17ba4ec269d10fcc996a4746b451152be9031fa48e74553dde5526bce"]
    ],
    "content": "Walled gardens became prisons, and nostr is the first step towards tearing down the prison walls.",
    "sig": "908a15e46fb4d8675bab026fc230a0e3542bfade63da02d542fb78b2a8513fcd0092619a2c8c1221e581946e0191f2af505dfdf8657a414dbca329186f009262"
}
```

- The `id` field tells us the ID of the event
- The `pubkey` field tells us the public key of the user who sent the event
- The `created_at` field tells us when the event was published
- The `kind` field tells us what sort of event it is
- The `tags` field tells us about tags on the event. These are used for creating links, adding media, and mentioning other users or events.
- The `content` field gives us the content of the event. In this case, the short text post.
- The `sig` field is the signature that clients use to verify that the user with this pubkey did in fact send this event on the date specified.

### Event Kinds

This is a list of current `Event` kinds. The most up-to-date list can always be found on the [Nostr NIPs repository](https://github.com/nostr-protocol/nips).

| kind    | 説明                | NIP                                                            |
| ------- | -------------------------- | -------------------------------------------------------------- |
| `0`     | Metadata                   | [1](https://github.com/nostr-protocol/nips/blob/master/01.md)  |
| `1`     | Short Text Note            | [1](https://github.com/nostr-protocol/nips/blob/master/01.md)  |
| `2`     | Recommend Relay            | [1](https://github.com/nostr-protocol/nips/blob/master/01.md)  |
| `3`     | Contacts                   | [2](https://github.com/nostr-protocol/nips/blob/master/02.md)  |
| `4`     | Encrypted Direct Messages  | [4](https://github.com/nostr-protocol/nips/blob/master/04.md)  |
| `5`     | Event Deletion             | [9](https://github.com/nostr-protocol/nips/blob/master/09.md)  |
| `6`     | Reposts                    | [18](https://github.com/nostr-protocol/nips/blob/master/18.md) |
| `7`     | Reaction                   | [25](https://github.com/nostr-protocol/nips/blob/master/25.md) |
| `8`     | Badge Award                | [58](https://github.com/nostr-protocol/nips/blob/master/58.md) |
| `40`    | Channel Creation           | [28](https://github.com/nostr-protocol/nips/blob/master/28.md) |
| `41`    | Channel Metadata           | [28](https://github.com/nostr-protocol/nips/blob/master/28.md) |
| `42`    | Channel Message            | [28](https://github.com/nostr-protocol/nips/blob/master/28.md) |
| `43`    | Channel Hide Message       | [28](https://github.com/nostr-protocol/nips/blob/master/28.md) |
| `44`    | Channel Mute User          | [28](https://github.com/nostr-protocol/nips/blob/master/28.md) |
| `1063`  | File Metadata              | [94](https://github.com/nostr-protocol/nips/blob/master/94.md) |
| `1984`  | Reporting                  | [56](https://github.com/nostr-protocol/nips/blob/master/56.md) |
| `9734`  | Zap Request                | [57](https://github.com/nostr-protocol/nips/blob/master/57.md) |
| `9735`  | Zap                        | [57](https://github.com/nostr-protocol/nips/blob/master/57.md) |
| `10000` | Mute List                  | [51](https://github.com/nostr-protocol/nips/blob/master/51.md) |
| `10001` | Pin List                   | [51](https://github.com/nostr-protocol/nips/blob/master/51.md) |
| `10002` | Relay List Metadata        | [65](https://github.com/nostr-protocol/nips/blob/master/65.md) |
| `13194` | Wallet Info                | [47](https://github.com/nostr-protocol/nips/blob/master/47.md) |
| `22242` | Client Authentication      | [42](https://github.com/nostr-protocol/nips/blob/master/42.md) |
| `23194` | Wallet Request             | [47](https://github.com/nostr-protocol/nips/blob/master/47.md) |
| `23195` | Wallet Response            | [47](https://github.com/nostr-protocol/nips/blob/master/47.md) |
| `24133` | Nostr Connect              | [46](https://github.com/nostr-protocol/nips/blob/master/46.md) |
| `30000` | Categorized People List    | [51](https://github.com/nostr-protocol/nips/blob/master/51.md) |
| `30001` | Categorized Bookmark List  | [51](https://github.com/nostr-protocol/nips/blob/master/51.md) |
| `30008` | Profile Badges             | [58](https://github.com/nostr-protocol/nips/blob/master/58.md) |
| `30009` | Badge Definition           | [58](https://github.com/nostr-protocol/nips/blob/master/58.md) |
| `30017` | Create or update a stall   | [15](https://github.com/nostr-protocol/nips/blob/master/15.md) |
| `30018` | Create or update a product | [15](https://github.com/nostr-protocol/nips/blob/master/15.md) |
| `30023` | Long-form Content          | [23](https://github.com/nostr-protocol/nips/blob/master/23.md) |
| `30078` | Application-specific Data  | [78](https://github.com/nostr-protocol/nips/blob/master/78.md) |
| `30402` | Classifieds                | [99](https://github.com/nostr-protocol/nips/blob/master/99.md) |
| `31989` | Handler recommendation     | [89](https://github.com/nostr-protocol/nips/blob/master/89.md) |
| `31990` | Handler information        | [89](https://github.com/nostr-protocol/nips/blob/master/89.md) |

### Standardized Tags

| 名称       | 値                   | その他のパラメータ  | NIP                                                                                                                            |
| ---------- | ----------------------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| e          | event id (hex)          | relay URL, marker | [1](https://github.com/nostr-protocol/nips/blob/master/01.md), [10](https://github.com/nostr-protocol/nips/blob/master/10.md)  |
| p          | pubkey (hex)            | relay URL         | [1](https://github.com/nostr-protocol/nips/blob/master/01.md)                                                                  |
| a          | coordinates to an event | relay URL         | [33](https://github.com/nostr-protocol/nips/blob/master/33.md), [23](https://github.com/nostr-protocol/nips/blob/master/23.md) |
| r          | a reference (URL, etc)  |                   | [12](https://github.com/nostr-protocol/nips/blob/master/12.md)                                                                 |
| t          | hashtag                 |                   | [12](https://github.com/nostr-protocol/nips/blob/master/12.md)                                                                 |
| g          | geohash                 |                   | [12](https://github.com/nostr-protocol/nips/blob/master/12.md)                                                                 |
| nonce      | random                  |                   | [13](https://github.com/nostr-protocol/nips/blob/master/13.md)                                                                 |
| subject    | subject                 |                   | [14](https://github.com/nostr-protocol/nips/blob/master/14.md)                                                                 |
| d          | identifier              |                   | [33](https://github.com/nostr-protocol/nips/blob/master/33.md)                                                                 |
| expiration | unix timestamp (string) |                   | [40](https://github.com/nostr-protocol/nips/blob/master/40.md)                                                                 |

## [§](#nips) NIPs

A Nostr Implementation Possibilty, or NIP for short, exist to document what MUST, what SHOULD and what MAY be implemented by Nostr-compatible relay and client software. NIPs are the documents that outline how the Nostr protocol works.

### Why should I care about NIPs?

Nostr is decentralized and not owned by a centralized service (like Twitter). This means that the direction of the protocol is up to all of us! We can suggest and advocate for changes and offer feedback on ideas suggested by others.

Being an active part of the community gives you a say in the direction of the network. NIPs published in the main repository are already approved. Adding new ideas is done via Pull Request on that repo.

### Where can I find NIPs?

You can see all current NIPs in the [Nostr NIP repo](https://github.com/nostr-protocol/nips).
