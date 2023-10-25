---
title: Nostrプロトコル
description: これはNostrプロトコルの高レベルな概要であり、イベント・タイプとNostr Implementation Possibilities（NIPs）の仕組みについての詳細です。
---

## [§](#nostr-high-level) 最高レベルのNostr

- Nostrネットワークは主に以下の2つで構成されています： [クライアント](/jp/clients)と[リレー](/jp/relays).
    - **クライアント（Clients）** は、ユーザーがリレーにデータを読み書きするために使用するインターフェースです。ソーシャルメディアを例に挙げると、これはTwitter（現X）のウェブアプリやモバイルアプリだと考えてください。Twitterの集中型データベースからデータを読み取り、Twitterの集中型データベースにデータを書き込むためのクライアントです。
    - **リレー（Relays）** は、データベースのようなものです（ただし、単にデータを保存するだけでなく、もっと多くのことができます）。クライアントにデータを送信してもらい、そのデータをデータベースに保存します。クライアントはリレーからデータを読み取り、ユーザーに見せることができます。
- すべてのユーザーは公開鍵によって識別されます。すべてのイベント・オブジェクト（投稿メッセージ、フォローリストの更新など）は署名されています。クライアントはこれらの署名が正しいかどうかを検証します。
- クライアントはリレーからデータを取得し、リレーにデータを公開します。リレーはほとんどの場合、ユーザーが選択します。リレーは互いに通信する必要はありませんが、将来的には通信する可能性があります。
- 例えば、プロフィールを更新するには、クライアントに指示し、使用したいリレーにkind 0のイベントを送信するだけです。リレーはそのイベントを保存します。
- 起動時に、クライアントはあなたが指定したリレーからデータを照会します。これは、あなたがフォローしているユーザーのイベントのみを表示するようにフィルタリングすることができます。
- イベントには多くのkindがあります。イベントはあらゆる種類の構造化されたデータを含むことができ、最も使用される構造は、すべてのクライアントとリレーがそれらをシームレスに扱うことができるように、[Nostr Implementation Possibilities](/jp/the-protocol#nips)（NIPs - 誰もが従うべき標準化されたプロトコル）として、その方法を明記しています。
- Nostrで見ことができるデータは、完全に接続するリレーに依存します。詳しくは下のネットワーク・ダイアグラムをご覧ください。

### ネットワーク・ダイアグラ（図表）

![Nostr network diagram](/images/nostr-network.webp)

上のダイアグラを見ると、3つのリレーと3人のユーザーがいることがわかります。各ユーザーは異なるクライアントで（異なるプラットフォームで）Nostrに接続しています。

読み取りと書き込みができることがダイアグラからわかります：

- ボブはアリスの投稿をすべて見ることができますが、メアリーの投稿は何も見ることができません（メアリーの存在すら知りません）。
- アリスはボブの投稿をすべて見ることができますが、メアリーの投稿は何も見ることができません（メアリーの存在すら知りません）。
- メアリーはボブとアリスの投稿をすべて見ることができます。これはメアリーがリレー3にのみ投稿を書き込む一方で、ボブとアリスの投稿はリレー2から読み取っているためです。

これは非常に単純化された状況ですが、どのリレーに接続するかによって、Nostr使用時に誰が何を見るかに大きな影響を与えているかが、よく理解できるはずです。

## [§](#events) イベント（Events）

イベントとは、Nostrネットワークで唯一のオブジェクト・タイプです。各イベント・オブジェクトは `kind` を持ち、それがどのような種類のイベント（Event Kind）であるか（ユーザーが起こすかもしれないアクションや受信するかもしれないメッセージ）を示します。

kind 1のイベントは以下のようなものです（kind 1は短いテキストメモ用で、Twitterで言うツイートのようなものです）。

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

- `id` フィールドはイベントIDを示します。
- `pubkey` フィールドはイベントを送信したユーザーの公開鍵を示します。
- `created_at` フィールドはイベントがいつ公開されたかを示します。
- `kind` フィールドはそれがどのような種類のイベントであるかを示します。
- `tags` フィールドはイベント・タグを示します。これらはリンクを作成したり、メディアを追加したり、他のユーザーやイベントに言及するために使用されます。
- `content` フィールドはイベント内容を示します。この場合、短いテキストの投稿です。
- `sig` フィールドは、クライアントがこの公開鍵を持つユーザーが指定された日付に、実際にこのイベントを送信したかを検証するために使用する署名です。

### イベントの種類（Event Kinds）

これは現在の `Event` kindリストです。最新版のリストは、常に[Nostr NIPs repository](https://github.com/nostr-protocol/nips)にあります。

| kind    | 説明                | NIP                                                            |
| ------- | -------------------------- | -------------------------------------------------------------- |
| `0`     | メタデータ（ユーザー・プロフィール）                   | [1](https://github.com/nostr-protocol/nips/blob/master/01.md)  |
| `1`     | テキスト（いわゆる「投稿」）            | [1](https://github.com/nostr-protocol/nips/blob/master/01.md)  |
| `2`     | 推奨リレー            | [1](https://github.com/nostr-protocol/nips/blob/master/01.md)  |
| `3`     | フォローリスト（コンタクト）                   | [2](https://github.com/nostr-protocol/nips/blob/master/02.md)  |
| `4`     | 暗号化ダイレクトメッセージ  | [4](https://github.com/nostr-protocol/nips/blob/master/04.md)  |
| `5`     | イベント削除             | [9](https://github.com/nostr-protocol/nips/blob/master/09.md)  |
| `6`     | リポスト                    | [18](https://github.com/nostr-protocol/nips/blob/master/18.md) |
| `7`     | リアクション（いわゆる「いいね！」）                   | [25](https://github.com/nostr-protocol/nips/blob/master/25.md) |
| `8`     | バッジ授与                | [58](https://github.com/nostr-protocol/nips/blob/master/58.md) |
| `40`    | チャンネル作成           | [28](https://github.com/nostr-protocol/nips/blob/master/28.md) |
| `41`    | チャンネル・メタデータ           | [28](https://github.com/nostr-protocol/nips/blob/master/28.md) |
| `42`    | チャンネル・メッセージ            | [28](https://github.com/nostr-protocol/nips/blob/master/28.md) |
| `43`    | チャンネル・非表示メッセージ       | [28](https://github.com/nostr-protocol/nips/blob/master/28.md) |
| `44`    | チャンネル・ミュート・ユーザー          | [28](https://github.com/nostr-protocol/nips/blob/master/28.md) |
| `1063`  | ファイル・メタデータ              | [94](https://github.com/nostr-protocol/nips/blob/master/94.md) |
| `1984`  | 通報（スパム報告など）                  | [56](https://github.com/nostr-protocol/nips/blob/master/56.md) |
| `9734`  | Zapリクエスト                | [57](https://github.com/nostr-protocol/nips/blob/master/57.md) |
| `9735`  | Zapレシート                        | [57](https://github.com/nostr-protocol/nips/blob/master/57.md) |
| `10000` | ミュート・リスト                  | [51](https://github.com/nostr-protocol/nips/blob/master/51.md) |
| `10001` | ピン留めリスト                   | [51](https://github.com/nostr-protocol/nips/blob/master/51.md) |
| `10002` | 利用中のリレー・リスト        | [65](https://github.com/nostr-protocol/nips/blob/master/65.md) |
| `13194` | ウォレット情報                | [47](https://github.com/nostr-protocol/nips/blob/master/47.md) |
| `22242` | クライアント認証      | [42](https://github.com/nostr-protocol/nips/blob/master/42.md) |
| `23194` | Wallet Connectリクエスト             | [47](https://github.com/nostr-protocol/nips/blob/master/47.md) |
| `23195` | Wallet Connectリクエスト            | [47](https://github.com/nostr-protocol/nips/blob/master/47.md) |
| `24133` | Nostr Connect              | [46](https://github.com/nostr-protocol/nips/blob/master/46.md) |
| `30000` | カテゴライズされたユーザー・リスト    | [51](https://github.com/nostr-protocol/nips/blob/master/51.md) |
| `30001` | カテゴライズされたブックマーク・リスト  | [51](https://github.com/nostr-protocol/nips/blob/master/51.md) |
| `30008` | プロフィール・バッジ             | [58](https://github.com/nostr-protocol/nips/blob/master/58.md) |
| `30009` | バッジの定義           | [58](https://github.com/nostr-protocol/nips/blob/master/58.md) |
| `30017` | 商品の作成・更新   | [15](https://github.com/nostr-protocol/nips/blob/master/15.md) |
| `30018` | 商品の作成・更新 | [15](https://github.com/nostr-protocol/nips/blob/master/15.md) |
| `30023` | 長文投稿          | [23](https://github.com/nostr-protocol/nips/blob/master/23.md) |
| `30078` | アプリの固有データ  | [78](https://github.com/nostr-protocol/nips/blob/master/78.md) |
| `30402` | クラシファイド                | [99](https://github.com/nostr-protocol/nips/blob/master/99.md) |
| `31989` | ハンドラーの推薦     | [89](https://github.com/nostr-protocol/nips/blob/master/89.md) |
| `31990` | ハンドラーの情報        | [89](https://github.com/nostr-protocol/nips/blob/master/89.md) |

### 標準化されたタグ

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

Nostr Implementation Possibilty、略してNIPは、Nostr互換のリレーとクライアント・ソフトウェアが実装しなければならないもの（MUST）、実装すべきもの（SHOULD）、実装してもよいもの（MAY）を文書化したものです。NIPsは、Nostrプロトコルの仕組みをアウトラインとして文書化したものです。

### なぜNIPsは重要なのか?

Nostrは非中央集権的で、（Twitter / 現Xのような）中央集権的なサービスに依存しません。つまり、プロトコルの方向性は私たち全員に委ねられているのです！私たちは変更を提案し、主張し、他の人が提案したアイデアに対してフィードバックを提供することができます。

コミュニティに積極的に参加することで、ネットワークの方向性について発言することができます。メイン・リポジトリで公開されたNIPはすでに承認されています。新しいアイデアの追加は、そのリポジトリのプル・リクエストで行います。


### どこでNIPsを確認できるか?

現在のNIPはすべて[Nostr NIP repo](https://github.com/nostr-protocol/nips)で見ることができます。
