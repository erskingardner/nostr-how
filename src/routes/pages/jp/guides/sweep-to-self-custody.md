---
title: セルフカストディ・ウォレットへの送金
description: このガイドでは、セルフカストディ・ウォレットで資産を管理することで、カウンターパーティ・リスクを軽減するためのシンプルなソリューションについて紹介します。
---

## [§](#who-is-this-guide-for) このガイドは誰のためなのか？


現在ほとんどのユーザーは、Wallet of SatoshiやAlbyのようなカストディアル・ライトニング・ウォレットでNostrを使っています。

もしあなたもそうであるなら、今すぐウォレットの中のsatoshi（サトシ）について考えてみてください。今、そのサトシをすべて失うことを考えてみてください。もしその考えが不快に感じたり、心配になったりするなら、このガイドはあなたのためにあります。

ここでは、カストディアル・ウォレットから定期的に資金を送金して保管することができる、セルフカストディアル・ウォレットの設定について説明します。

## [§](#why-is-self-custody-important) なぜセルフカストディが重要なのか？

こんな格言があります。「Not your keys, not your coins（秘密鍵を持っていないなら、ビットコインの所有権はない）」自分のコインをカストディアル・ウォレットに預けることは、ある程度の相手方リスクを受け入れることになります。もしWallet of Satoshiがハッキングされたとしましょう。彼らはすべての顧客の資金を保管しているため、このような状況はあなたの資金が失われることを意味します。

このため、カストディアル・ウォレットには少額の資金のみを保管し、残りのビットコインは自分で管理することを強くお勧めします。

## [§](#ready-lets-go) 準備はOK？レッツゴー！

これは、独自のライトニング・ノードをセットアップしたり、技術的なことをする必要のない初心者向けのガイドです。私たちのハックは、ビットコイナーたちのNostrコミュニティを利用して、ライトニング・ネットワーク上のサトシからメインのビットコイン・ベースチェーン上のカストディ・サトシへ交換（スワップ）することです。あなたの積み上げたサトシを保護し、ピアツーピア・トランザクションを行う友人を作りましょう。WIN-WINです！

ここでの専門用語に圧倒されそうなら、[ページ下部のセクション](#lightning-bitcoin-on-chain-what)で詳細を確認してください。

1. まず、このガイドに従って[Blue Wallet](https://bluewallet.io/docs/create-bitcoin-wallet/)に新しいビットコイン・ウォレットをセットアップしてください。他のセルフカストディアル・ウォレットを使用することもできます。
2. シードフレーズ（必要に応じてウォレットを復元するために使用するもの）を慎重に保存したら、スワップする相手を探す準備ができました。
3. 最も簡単な方法は、#plebchainと#bitcoinというタグを付けて、ライトニング・サトシとオンチェーン・サトシをスワップしたい旨を投稿することです。恥ずかしがらずに、定期的にビットコインについて話している人たちに直接メッセージを送ってください。必要であれば[私に直接知らせる](https://primal.net/jeffg)こともできます。
4. そこから、スワップする相手と直接計画を立てます。ビットコインにはエスクロー（第三者機関）が存在しないため、トランザクションを完了するために信頼できる人と取引をしているという安心感を得る必要があります。一般的に、プロセスは次のようになります：
    1. スワップする金額について合意します。
    2. 新しく作成したウォレット・アドレス（Blue Wallet）をDMで相手に伝えます。
    3. Nostrクライアントを介して、その人にサトシを送金します。
    4. 彼らはオンチェーン・トランザクションを開始し、同額のサッツをあなたに支払います（このとき、トランザクション手数料を差し引く場合もあります）。
    5. このオンチェーン・トランザクションには時間がかかることを忘れないでください。取引相手がトランザクションIDを入手したらすぐにあなたに送信し、[mempool.space](https://mempool.space)で追跡できるようになります（そうあるべきです）。
5. 以上で完了です！資金が着金したら、あなたは最初のビットコインのセルフカストディに成功したことになります。ぜひ、ビットコインを大切に扱ってください。

## [§](#lightning-bitcoin-on-chain-what) ライトニング？ビットコイン？オンチェーン？何のこと？

If this all sounds like greek to you don't worry. Before we get into the guide, let's quickly cover some terminology.

### ビットコイン

This rabbit hole has no known bottom. That said, if you're new to Bitcoin the only thing that you really need to know is that Bitcoin is a completely decentralized form of electronic money. It isn't controlled by any one person or entity and runs based on rules coded into the software, instead of being dependent on politics and governements. Bitcoin is the only truly decentralized and rules-based electronic money.

Bitcoin prioritizes certainty over speed. This means that transactions cost a little in fees and take some time to confirm but once they're confirmed, they are completely irreversible and no one can take your coins or censor your transaction.

If you'd like to learn more, here are some great starter resources for going deeper on Bitcoin.

1. [Bitcoin.org guide](https://bitcoin.org/en/how-it-works)
2. [Bitcoiner beginner guide](https://bitcoiner.guide/beginner/)

### ライトニング

Lightning is a payments layer that runs on top of Bitcoin. Fundamentally, you're still making payments using Bitcoin as the money but Lightning allows for near-instant and extremely low-fee transactions. Because of this, the Lightning network has opened up many new use-cases involving micropayments. The details of how Lightning works is beyond the scope of this intro guide but here are a few resources if you're keen to learn more:

1. [Bitcoiner Lightning Guide](https://bitcoiner.guide/lightning/)
2. [Lightning Labs Overview](https://docs.lightning.engineering/the-lightning-network/overview)

### オンチェーン vs オフチェーン

You'll often hear people refer to on-chain vs off-chain Bitcoin. When people talk about on-chain transations, they are simply referring to making transactions using the base Bitcoin blockchain (remember; this is slower, but 100% final & certain). When people refer to off-chain transactions, they are most often referring to Lightning.

### カストディ vs セルフカストディ

For those new to Bitcoin, this concept might seem foreign. After all, most of us (at least in the developed world) have only ever used custodial services, like banks, to store our money. But as we've seen recently (and regularly in less developed financial markets around the world), keeping your money with a custodian has risks. Banks fail (Silicon Valley Bank, etc.) and custodians can make poor decisions and lose your money (FTX, Voyager, etc.).

When you take custody of your Bitcoin you only have to put trust in yourself to store you bitcoin safely. You have total control.

But with great power comes great responsiblity. While self-custody is the gold-standard for storing larger amounts of money securely, it can limit how you can use your money day-to-day. Most people use a combination of custodial and self-custody solutions; keeping large amounts in a self-custody way and keeping a small amount of funds in a custodial wallet for daily use.
