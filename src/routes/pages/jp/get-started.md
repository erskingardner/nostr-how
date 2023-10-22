---
title: Nostrの始め方
description: このガイドでは、Nostrの基本を理解し、新しいアカウントでNostrを使用するためのすべてのセットアップと準備をサポートします。新しいライトニング・ウォレットの作成方法、アカウントの作成方法、クライアントに安全にサインインする方法を説明します。
---

## [§](#understanding-keys) 鍵について理解する

各Nostrアカウントは公開鍵と秘密鍵のペアに基づいています。単純に考えると、公開鍵がユーザー名、秘密鍵がパスワードということになります。ただし、パスワードとは異なり、秘密鍵は紛失してもリセットできません。

もう一度はっきり言います： **秘密鍵を紛失すると、あなたのNostrアカウントは失われます。もし他の誰かがあなたの秘密鍵にアクセスしたら、彼らはあなたのアカウントをコントロールすることができてしまいます。**

秘密鍵は、パスワード・マネージャー（私たちは[1Password](https://1password.com/)を好みます）や、[Alby](https://getalby.com/#alby-extension)のようなブラウザ拡張機能を使うなど、安全な場所に保管してください。

## [§](#protocol-vs-client) プロトコル vs クライアント

Nostr自体は単なるプロトコルであり、インターネット上でメッセージをやり取りするための合意された手順です。

Nostr（プロトコル）にはクライアントを介してアクセスします。クライアントはウェブ、デスクトップ、モバイルアプリがあります。Nostrクライアントの中には、秘密鍵を貼り付けてサインインできるものもあります。ウェブ上では、これは一般的に推奨されません。代わりに、ブラウザの署名拡張機能を使用することをお勧めします。これは、秘密鍵を安全に管理し、イベントに暗号署名するために特別に設計されたソフトウェアです。

[Alby](https://getalby.com?utm_source=nostr.how&ref=nostr.how)は、Nostrをビルトインでサポートする人気の署名拡張機能と、ビットコイン・ライトニング・ウォレットです。新規ユーザーにとって、最適な選択肢と言えます。Albyのインストールについては、以下のクライアント別のガイドで説明します。

## [§](#create-your-account) アカウントを作成する

ここでは、私たちがお勧めするいくつかのクライアントについて、ステップバイステップ・ガイドを紹介します：

- [Iris](/en/guides/iris)（Web）
- [Damus](/en/guides/damus)（iOS）
- [Amethyst](/en/guides/amethyst)（Android）

他にも、ガイドはありませんがファンの多いクライアントを紹介します：

- [Snort](https://snort.social?utm_source=nostr.how&ref=nostr.how)（Web）非常にクリーンで高速なWebクライアント。
- [Coracle](https://coracle.social?utm_source=nostr.how&ref=nostr.how)（Web）リレー・ナビゲーションに重点を置くクライアント。
- [Nostrgram](https://nostrgram.co?utm_source=nostr.how&ref=nostr.how)（Web）Instagramにインスパイアされた、画像、動画、音声に特化したクライアント。ミームを楽しもう！

## [§](#find-friends) フォローする友だちを見つける

- If you know someone is on Nostr, find their profile by searching for their public key.
- Many Twitter users are tweeting their Nostr pubkeys with the hashtag #nostr so searching this hashtag can give you a good start.
- [nostr.directory](https://nostr.directory?utm_source=nostr.how&ref=nostr.how) is a database mapping twitter users to their Nostr pubkeys.

## [§](#whats-signing) ”署名する”とはどういう意味なのか？

In order to interact with the Nostr protocol you must create a cryptographic signature each time you perform an action. Think of this signature as an authentication step where you confirm that you are, indeed, who you say you are.

Most Nostr clients try to make this easy and quick (or allow you to save your private key in the client so that they can sign on your behalf anytime you do anything).

By only providing our public key above, we'll be prompted to sign anytime we want to interact with any posts or perform any updates to our profile. When that happens, Alby will automatically pop up (like it did during the sign up step) and you can confirm that you actually want to sign.

## [§](#can-i-use-other-clients) 他のクライアントも使えるのか？

Yes! Now that you have created your public/private key pair, you can use this pair on any Nostr client to access your account. Remember, the client is just an interface to see messages broadcast on the Nostr protocol.

## [§](#next-steps) 次のステップ

Great, now you're set up with a lightning wallet, an identity (your keypair), and have tried out a client. Here are a few links that might be handy as you venture further into Nostr:

- [Verify your identity](/en/guides/get-verified)
- [What are Relays and how do they work?](/en/relays)
- [Learn more about NIPs and the development of the protocol](/en/the-protocol)
