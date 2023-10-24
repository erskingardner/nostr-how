---
title: 最初のZaps用ウォレットの設定
description: NostrでZapするためのライトニング・ウォレット設定についてのガイドです。
---

## [§](#magic-internet-money) 魔法のインターネットマネー、まるで光速のような

ビットコインのライトニング・ネットワークを使えば、satoshi（サトシまたは sats）と呼ばれるビットコインの小さな端数を光速で世界中に送金することができ、手数料はほぼゼロです。Nostrでは、このような取引をZapsと呼びます。

Nostrを始めたばかりの人でも、Zapsについて少なくとも一度は目にしたことがあるかもしれません。あるユーザーがあなたを笑わせたり、良いアドバイスをくれたり、あなたの経験に付加価値を与えるような投稿をした場合、その人をZapすることができます。何の理由もなく誰かをZapすることもできます！もしあなたがNostrのコミュニティに興味深いコンテンツを投稿すると、インターネット上の見知らぬ人 (つまり、新しいお友だち) が、あなたにビットコインを送ってくれるまで、それほど時間はかかりません。

## [§](#custodial-vs-self) カストディ vs セルフカストディ・ウォレット

まず必要なのは、ビットコイン・ライトニング・ウォレットです。これはZapされたトランザクションを受け取るウォレットです。多くのオプションがありますが、理解すべき最も重要な区別の1つは、ウォレットがカストディかセルフカストディかということです。それぞれにトレードオフがありますが、通常、新規ユーザーはまずカストディ・ウォレットをセットアップし、Zapsの使用と資金管理に慣れることをお勧めします。

さらに慣れてきたら（あるいは、カストディ・ウォレットの資金が完全に管理したいレベルに達したら）、セルフカストディ・ウォレットを設定することもできます。

## [§](#custodial) カストディ・ウォレット

カストディ・ウォレットとは、ウォレット開発者がビットコインの鍵を保持しているウォレットであり、あなたのアカウントは基本的に、別のユーザーまたはあなたが完全に管理する別のウォレット（つまり、セルフカストディ・ウォレット）に対して、ビットコインを送受信する権限を持っています。

人気のある2つの例は、[Wallet of Satoshi](https://www.walletofsatoshi.com/)と[Alby](https://getalby.com)です。どちらのウォレットも、高速で、便利で、ユーザーフレンドリーなZapsウォレットを提供しています。Wallet of Satoshiはモバイル・アプリストアからダウンロードでき、Albyはchromeブラウザの拡張機能ストアからアクセスできます。

**Wallet of Satoshi**

Wallet of Satoshiをダウンロードしたら、アプリを開き、”受信”をタップします。すると、再利用可能なQRコードと、人間が読めるライトニング用の受信アドレスが表示されます。メールアドレスのように見えます（注：実際にはメールアドレスではないので、メールを送ろうとしないでください）。たとえば、この記事の著者に対しては、`bostonwine@walletofsatoshi.com` でZapできます。アドレスをコピーして Nostr に戻ります。

![Main Screen](https://cdn.nostr.build/i/955e1fd028d64941b80ed0b423a07541a2af8f14919c73e0add93511e3620477.jpg)

![Receive Screen](https://cdn.nostr.build/i/2d4f6ffa7a237cf93fca9aff37eca0011ba473b8f3da013f5fda786c93693b87.jpg)

**Alby**

Albyでは、Chromeベースのブラウザを使用し、https://getalby.com にアクセスして拡張機能をインストールすることができます。アカウントを作成し、この拡張機能に”Eメールアドレスのような”ライトニング・アドレスがありますので、そちらをクリップボードにコピーしてください。

![Alby account](https://cdn.nostr.build/i/fee9ab21c94221a9f9573c41e8e85a97b1ecafd18e22f52cf276d31a67a58664.png)

**Go back to your Nostr client**

Every client is a little different, but usually your Edit Profile Settings page will have a field for a "lightning address" or LNURL. In the example below, (from Damus), the field is called Bitcoin Lightning Tips. Paste your address into this field, and save your profile.

![Example client](https://cdn.nostr.build/i/34241da3022d061a8159268f05e0cb3c8aa53934a55c5cc8c76effbfc7b625cc.jpg)

Now you should be zap-able! To test it out, post a note and with something like "Can someone send a small zap to test my wallet?" and add the hashtag #plebchain – you'll be amazed at how quickly you get your first zap!

To send zaps, all you need to do is click or tap your client's version of the Lightning icon on the other user's note or profile. This will automatically create a Lightning invoice, and your client will prompt you to open a Lightning wallet so that you can pay that invoice.

## [§](#self-custody) セルフカストディ・ウォレット

Once you've familiarized yourself with sending and receiving zaps, and started stacking a few sats in your wallet, it's worth learning more about non-custodial wallets.

While a custodial solution like Wallet of Satoshi is incredibly convenient, it's important to remember that the wallet developer holds the keys to this bitcoin. After all, bitcoin's original raison d'être was to remove the need for a trusted third party!

So, as soon as you're holding enough bitcoin in your wallet that you'd be upset to lose the funds, it's time to set up a self-custodial wallet as well. (You can continue using the custodial option for zapping, if you'd like, but it's a good idea to move any significant amount of bitcoin to self-custody, when it starts adding up).

Lightning wallet apps are plentiful, but popular options include Phoenix and Breez (mobile wallets) and Mutiny (a web-based app).

At the moment, self-custodial lightning wallets don't offer a "static" lightning address or LNURL, the email-address-style receiving address. (Hopefully this will change soon). What this means is that you can use self-custodial wallets to send zaps, but not receive them (yet).

These apps will prompt you during setup to write down your "seed phrase". This is a set of 12 or 24 words, and it is the private key to your self-custodied bitcoin. The wallet developers don't know your seed phrase, and they don't control your bitcoin.

Note: whenever you are recording your seed phrase, DO NOT save it online (via screenshot, iCloud notes, etc). Write it down on paper, laminate it, and keep it safe. There will come a time to learn about steel backups in the future. For now, just keep it secret and offline.

## [§](#private-key-management) 秘密鍵の管理とコールド・ストレージ

To reiterate: when you have accumulated enough bitcoin in your first wallet that you want to take the next step on your self-soveriegn bitcoin journey, it's time to study the different types of bitcoin storage, and the best practices around keeping your seed phrase safe. It's an adventure, and a continuous learning experience, so let's get started.

Learn more at https://nostr.how/en/guides/sweep-to-self-custody
