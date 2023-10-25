---
title: Zapsとは?
description: Zapsとは何か、Zapsの仕組み、NostrクライアントでZapsを使うために必要なものは何かについて説明します。
---

## [§](#the-basics) 基礎

Zapsについて考える最も簡単な方法は、Zapsは単なるチップであるということです。チップは[Lightning network](https://www.investopedia.com/terms/l/lightning-network.asp)を介して光速で送金され、基本的にトランザクション手数料は無料です。

Nostrプロトコルの初期は、ライトニング・インボイスをノートに記載するのが一般的でした。[NIP-57](https://github.com/nostr-protocol/nips/blob/master/57.md)が実装されて以来、ZapsはNostrノート内で価値を伝達する主な方法となりました。NIP-57の実装内容とZapの仕組みについて詳しく見ていきましょう。

## [§](#nip-57) NIP-57

[NIP-57](https://github.com/nostr-protocol/nips/blob/master/57.md)とは、Zapsがどのように実装されるべきかを示したドキュメントです。kind 9735（Zap）とkind 9734（Zapリクエスト）という2つの新しいノートを作成します。この2つのkindを組み合わせることで、NostrクライアントがLNURLサーバーにZapインボイスを要求し、それに対して支払うことができるようになります。NIP-57の仕様では、Zapの支払いを受金するライトニング・ウォレットが、リレーに送信するノートを作成する方法についても説明しています。

💡面白いことに、Zapsに使われているkindノートは、ライトニングが使っているネットワークポート（9735）と同じなのです。

## [§](#how-zaps-work) Zapsの仕組み

![Zap flowchart](/images/zap-flow.webp)

ここでは技術的な深い話はしませんが、好奇心旺盛な人のために、Zapsの基本的な仕組みについて見てみましょう。

1. クライアント（Damus、Iris、Amethystなど）の小さな⚡アイコンをクリックまたはタップすると、最初にクライアントが、Zapしようとしている人のライトニング・ウォレットの前にある[LNURL server](https://thebitcoinmanual.com/articles/what-is-ln-url-and-how-does-it-work/)にpingを送ります。最初の依頼は、"こんにちは、アリスにsatoshi（サトシ）をあげたいのですが "というようなものです。
2. LNURLサーバーはそれに応答し、もしアリスのウォレットがZapsをサポートしていれば、そのことをクライアントに伝え、アリスの公開鍵を送信/確認します。
3. この時点で、クライアントはZapリクエスト（kind 9734ノート）をまとめるために、Zapしたいプロフィールやノートに関するデータ、金額、ノートをブロードキャストするリレー、および他のいくつかの事柄を含む少しの作業を行います。これは事実上、LNURLサーバーからのインボイス・リクエストです。
4. LNURLサーバーは要求されたインボイスで応答します。
5. この時点で、クライアントはそのインボイスをユーザーのライトニング・ウォレットに渡し、支払いを受けます。ブラウザでAlbyのようなウォレットを使用している場合（そして予算を設定している場合）、このプロセスは非常に素早く行われます。
6. ユーザーによって支払われると、受金者のウォレットはkind 9735ノートを作成し、Zapリクエストで先に指定されたリレーにそれをブロードキャストします。
7. このノートを受け取ったリレーは、接続しているクライアントに対してZapを伝えることができ、クライアントはUI上でユーザーに対してZapを表示することができます。

そして、このすべてがほんの数秒で行われ、ほんのわずかなコストしかかかりません。

## [§](#how-to-send-and-receive) Zapsの送受信方法は？

Nostr上で他のユーザーをZapするには、たった2つのものさえ準備すればOKです：

1. Zapと互換性のあるライトニング・ウォレット（[Alby](https://getalby.com/)や[Wallet of Satoshi](https://www.walletofsatoshi.com/)のような）
2. Zapsをを実装しているクライアント（[Damus](/jp/guides/damus)、[Amethyst](/en/guides/amethyst)、[Iris](/jp/guides/iris)または[Snort](https://snort.social)など)

その他に必要なことは、Nostrのプロフィールにライトニング・アドレスが設定されていることです。これがZapsを受信するアドレスです。

Zapsを受け取るためにプロフィールに設定したウォレット/アドレスとは別のものでも、Zapsの支払いは可能です。

例えば、次のようなことを想像してみてください：

1. Nostrのプロフィールに[Stacker News](https://stacker.news/)のライトニング・アドレスが設定されている場合、このアドレスにZapされたサトシが届きます。
2. ウェブブラウザで、Irisをクライアントとして使用し、Chrome拡張機能でAlbyウォレットを使用してZapsの支払いを行います。
3. スマホでは、Damusをクライアントとして使用し、Wallet of Satoshiアプリを使ってZapsの支払いを行います。
