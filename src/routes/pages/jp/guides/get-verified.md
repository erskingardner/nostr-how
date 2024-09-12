---
title: ドメイン認証 (NIP-05) の取得
description: Nostrで本人確認を行い、認証チェックマークを取得し、アカウントを簡単に共有する方法について説明します。
---

## [§](#what-youll-learn) このガイドで学べること

様々なクライアントで、Twitter（現X）のようにチェックマークを入れているユーザーがいることに、あなたは気づいたかもしれません。

NIP-05は、Nostrユーザーが自分の身元を認証する方法を定義しています。クライアントによって認証方法は少し異なりますが、あなたが本物のユーザーであることをNostrコミュニティに示す重要な方法です。

![Snort Verified](/images/snort-verified.webp)

Nostrでの認証プロセスは、[NIP-05](https://github.com/nostr-protocol/nips/blob/master/05.md)と呼ばれるNostr Implementation Possibilities（NIP）の1つとして、文書化されています。

NIP-05は、Nostrユーザーが自分の公開鍵をDNSベースのインターネット識別子にマッピングすることを可能にします。この認証メカニズムは、GoogleがDNSレコードを使用してドメインの所有権を検証することを要求する方法と似ています。


認証の主な利点は、長くて覚えにくい公開鍵の代わりに、人間が読める名前でNostrユーザーを識別できることです。これにより、認証されたNostrユーザーは、そのアイデンティティを他のユーザーと簡単に共有することができます。

NIP-05を利用するために、Nostrユーザーは自分のプロフィールにnip05のURLを追加します（ほとんどのクライアントがこれをサポートしています）。NIP-05のURLは、例えばbob@example.comとなり、メールのように見えます。内容について、詳しく分解してみましょう：

1. ＠マーク以前のもの（この例では "bob"）すべてが、Nostrプロファイルのnameフィールドの値と一致しなければなりません。
2. ＠マーク以降のもの（この例では "example.com"）すべてが、クライアントがユーザー名と公開鍵を含む `/.well-known/nostr.json` ファイルを探すためのドメインです。

クライアントがnip05のURLを確認すると、指定されたドメインの `/.well-known/nostr.json` ファイルを探します。このファイルには指定されたユーザーのNostr公開鍵が含まれていなければなりません。詳しくは、NIP-05の仕様についてを参照してください。

技術的に聞こえるかもしれませんが、認証を受けるのは驚くほど簡単です。その方法を見てみましょう。

## [§](#free-verification) 無料サービスで認証する

現在、無料で認証を受けることができるプロバイダーがいくつかあります。ライトニング・ウォレットにまだsatoshi（サトシ）が入っていない場合は、これは素晴らしい選択肢になるはずです。可能であれば、これらのプロジェクトを寄付でサポートしてあげてください。⚡🤙

- [Bitcoin Nostr](https://bitcoinnostr.com/)
- [Nostrcheck.me](https://nostrcheck.me)
- [zaps.lol](https://zaps.lol/)
- [NIP05.social](https://nip05.social)
- [Nostr-Check.com](https://nostr-check.com/)
- [Verified Nostr](https://verified-nostr.com/)
- [Cosa Nostr](https://cosanostr.com)

## [§](#paid-verification) 有料サービスで認証する

独自ドメインを持っていなかったり、自分で設定したくない場合は、無料または有料（通常は数[サトシ](https://coinmarketcap.com/alexandria/glossary/satoshi-sats)）のNIP-05サービスを利用することができます。いくつか紹介してみます：

- [Nostrplebs](https://nostrplebs.com)
- [Nostr Verified](https://nostrverified.com)
- [Alby](https://getalby.com)
- [Nostr Directory](https://nostr.directory)
- [Nostr.band](https://nip05.nostr.band)
- [Nostr.com.au](https://nostr.com.au)
- [Vida](https://Vida.page)
- [Stacker News](https://stacker.news)
- [Nostrich House](https://nostrich.house)

## [§](#self-hosted) 独自ドメインで認証する

すでにドメインを持っている場合、これは無料のオプションです。あなたのドメインに `.well-known/nostr.json` ファイルを追加するだけです。ファイルの内容は以下のようしてください：

```json
{
    "names": {
        "YOUR_NOSTR_NAME": "YOUR_NOSTR_PUBLIC_KEY"
    }
}
```

オプションで、どのリレーであなたを見つけることができるかをクライアントに知らせるセクションを追加することもできます：

```json
{
  "names": {
    "YOUR_NOSTR_NAME": "YOUR_NOSTR_PUBLIC_KEY_IN_HEX_FORMAT"
  },
  "relays": {
    "YOUR_NOSTR_PUBLIC_KEY_IN_HEX_FORMAT": [
      "wss://relay.one",
      "wss://relay.two",
      ...
    ]
  }
}
```

`nostr.json` ファイルでは、公開鍵の16進バージョン（hex）を使用してください。これは、`npub` で**始まらない**方のバージョンです。

[Nostr.band](https://nostr.band)で鍵を変換できます。

![Get your hex key](/images/get-hex-key.webp)

最後に、このファイルがクライアントからアクセスできる必要があるため、`Access-Control-Allow-Origin` ヘッダーに `*` が設定されていることを確認してください。
