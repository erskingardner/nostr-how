---
title: Nostrクライアントとは?
description: Nostrにおけるクライアントの概要と、いくつかのお気に入りのクライアントについて比較します。
---

## クライアントとは？

Nostrにおけるクライアントとは、プロトコルにアクセスしてやり取りするためのアプリのことです。言うなれば、Twitter（現X）のiOSアプリやWebアプリで、Twitterのツイートフィードにアクセスするようなものです。

Nostrプロトコルは非常にシンプルで柔軟性があるため、クライアントによってプロトコルのさまざまな側面を少しずつ異なる方法で実装することに重点を置いています。例えば、あるクライアントは美しく使いやすいUIに重点を置き、あるクライアントはライトニング決済を可能にすることに重点を置き、またあるクライアントはチェスをプレイするようなクリエイティブなユースケースのために重点を置いています（そう、あなたはNostrプロトコルを介して[チェスをプレイする](https://jesterui.github.io?utm_source=nostr.how&ref=nostr.how)ことができます）。

これまでに作られたクライアントのほとんどは、ソーシャルメディアのユースケースが中心です。しかし、私たちはもっと興味深い使用例を見始めています。

いくつかの例：

-   [White Noise](https://whitenoise.chat?utm_source=nostr.how&ref=nostr.how)：エンドツーエンド暗号化メッセンジャー
-   [Shakespeare](https://shakespeare.diy?utm_source=nostr.how&ref=nostr.how)：AIアプリビルダー
-   [zap.stream](https://zap.stream?utm_source=nostr.how&ref=nostr.how)：Zapsを使ったTwitchのようなストリーミング・サイト
-   [Habla](https://habla.news?utm_source=nostr.how&ref=nostr.how)：長文投稿 – Mediumのような
-   [Jester](https://jesterui.github.io?utm_source=nostr.how&ref=nostr.how)：Nostr上でチェスをプレイする

## クライアントの使い分けは可能なのか？

はい。クライアントはリレーが保持する基礎データにアクセスするための手段に過ぎないので、クライアントを切り替えたり、好きなだけクライアントにサインインすることができます。各クライアントが同じリレーのデータを見ている限り、各クライアントで同じメッセージが表示されます。

## クライアントに秘密鍵を入力する必要があるのか？

一般的に、秘密鍵はどのクライアントにも入力しない方がよいでしょう。秘密鍵の入力を求めるクライアントのほとんどは、あなたの秘密鍵を安全に保つために最善を尽くしていますが、ソフトウェアの性質上、あなたの秘密鍵が漏れる可能性のある違反、悪用、バグが常に存在します。

秘密鍵はNostrにおけるあなたのアイデンティティであることを忘れないでください。もし秘密鍵が漏洩した場合、ゼロからあなたのアイデンティティを再構築する必要があり、フォロワー・リストやプライベート・メッセージをすべて失うことになります。

## いくつかのお気に入りのクライアント

### Web

-   [Primal](https://primal.net?utm_source=nostr.how&ref=nostr.how) – 新規ユーザーには、このクライアントをお勧めします。
-   [Ditto](https://ditto.pub?utm_source=nostr.how&ref=nostr.how)
-   [Iris](https://iris.to?utm_source=nostr.how&ref=nostr.how)
-   [Snort](https://snort.social?utm_source=nostr.how&ref=nostr.how)
-   [Coracle](https://coracle.social?utm_source=nostr.how&ref=nostr.how)
-   [Nostrudel](https://nostrudel.ninja?utm_source=nostr.how&ref=nostr.how)

### デスクトップ

-   [Gossip](https://www.github.com/mikedilger/gossip?utm_source=nostr.how&ref=nostr.how) – Gossipは非常に意見の多いデスクトップ・クライアントで、使用するにはもう少し専門的な知識が必要です。その代わり、ユーザーはNostrとのやり取りをよりコントロールできるようになります。
-   [Nostur](https://www.nostur.com?utm_source=nostr.how&ref=nostr.how) – 豊富な機能を持つMacクライアント

### iOS

-   [Primal](https://apps.apple.com/it/app/primal/id1673134518?utm_source=nostr.how&ref=nostr.how) – 新規ユーザーには、このクライアントをお勧めします。
-   [Damus](https://apps.apple.com/app/damus/id1628663131?utm_source=nostr.how&ref=nostr.how) – これは、Nostrのための最初の、そして最高のiOSクライアントです。
-   [Nostur](https://www.nostur.com?utm_source=nostr.how&ref=nostr.how) – 新機能や実験的機能を含む大規模な機能リストを持つiOS/iPad/Macクライアント
-   [Nootti](https://www.nootti.com?utm_source=nostr.how&ref=nostr.how) – Nostr、Bluesky、Mastodon向けのネイティブiOS/iPadクロスポストクライアント

### Android

-   [Primal](https://play.google.com/store/apps/details?id=net.primal.android&hl=en&utm_source=nostr.how&ref=nostr.how) – 新規ユーザーには、このクライアントをお勧めします。
-   [Amethyst](https://play.google.com/store/apps/details?id=com.vitorpamplona.amethyst?utm_source=nostr.how&ref=nostr.how) – Androidのための美しいクライアントです。
