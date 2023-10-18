---
title: Zapsとは?
description: Zapsとは何か、Zapsの仕組み、NostrクライアントでZapsを使うために必要なものは何かについて説明します。
---

## [§](#the-basics) 基礎

Zapsについて考える最も簡単な方法は、Zapsは単なるチップであるということです。チップは[Lightning network](https://www.investopedia.com/terms/l/lightning-network.asp)を介して光速で送金され、基本的にトランザクション手数料は無料です。

Nostrプロトコルの初期は、ライトニング・インボイスをノートに記載するのが一般的でした。[NIP-57](https://github.com/nostr-protocol/nips/blob/master/57.md)が実装されて以来、ZapsはNostrノートで価値を伝達する主な方法となりました。NIP-57の実装内容とZapの仕組みについて詳しく見ていきましょう。

## [§](#nip-57) NIP-57

[NIP-57](https://github.com/nostr-protocol/nips/blob/master/57.md)とは、Zapsがどのように実装されるべきかを示したドキュメントです。kind 9735（Zap）とkind 9734（Zapリクエスト）という2つの新しいノートを作成します。この2つのkindを組み合わせることで、NostrクライアントがLNURLサーバーにZapインボイスを要求し、それに対して支払うことができるようになります。NIP-57の仕様では、Zapの支払いを受金するライトニング・ウォレットが、リレーに送信するノートを作成する方法についても説明しています。

💡面白いことに、Zapsに使われているkindノートは、ライトニングが使っているネットワークポート（9735）と同じなのです。

## [§](#how-zaps-work) Zapsの仕組み

![Zap flowchart](/images/zap-flow.webp)

ここでは技術的な深い話はしませんが、好奇心旺盛な人のために、Zapsの基本的な仕組みについて見てみましょう。

1. When you click or tap on the little ⚡ icon in your client (Damus, Iris, Amethyst, etc), the first thing that happens is that the client pings the [LNURL server](https://thebitcoinmanual.com/articles/what-is-ln-url-and-how-does-it-work/) that sits in front of lightning wallet of the person that you're trying to Zap. The first request goes something like, "Hi there, I would love to give Alice some sats."
2. The LNURL server responds and, if Alice's wallet supports Zaps, it will tell the client so and send/confirm Alice's public key.
3. At this point, the client does a little work to put together a Zap request (a kind 9734 note) with data about the profile or note that it would like to Zap, the amount, the relays it should broadcast the note to, and a few other things. This is effectively a request for an invoice from the LNURL server.
4. The LNURL server responds with the requested invoice.
5. At this point the client will hand that invoice off to the user's lightning wallet to be paid. If you are using a wallet like Alby in the browser (and have set a budget) this process can happen very quickly.
6. Once the user has paid the invoice directly to the wallet of the person they're zapping, the receiver's wallet will create a kind 9735 note and then broadcast that to the relays specified earlier in the Zap request.
7. Relays receiving this note will then be able to tell connected clients about the zap and clients can show the zap to users in their UI.

And this all happens in just a few seconds and costs a tiny fraction of a penny.

## [§](#how-to-send-and-receive) How do I send and receive Zaps?

To Zap other people in Nostr, you need just two things:

1. A Zap-compatible lightning wallet (like [Alby](https://getalby.com/) or [Wallet of Satoshi](https://www.walletofsatoshi.com/))
2. A client that has implemented Zaps (like [Damus](/en/guides/damus), [Amethyst](/en/guides/amethyst), [Iris](/en/guides/iris), or [Snort](https://snort.social))

The only other thing that you need to do is make sure you have your lightning address set in your Nostr profile. This is the address where you'll receive Zaps.

Keep in mind, it's possible to pay for Zaps from a wallet/address other than the address you have set in your profile to receive Zaps.

For example, imagine the following:

1. You have a [Stacker News](https://stacker.news/) lightning address set in your Nostr profile, this is where you'll receive any zapped sats.
2. In your web browser, you use Iris as your client and pay for Zaps using your Alby wallet via their chrome extension
3. On mobile, you use Damus as your client and pay for Zaps using the Wallet of Statoshi app.
