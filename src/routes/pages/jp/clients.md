---
title: Nostrクライアントとは?
description: Nostrにおけるクライアントの概要と、いくつかのお気に入りのクライアントについて比較します。
---

## クライアントとは？

Nostrにおけるクライアントとは、プロトコルにアクセスしてやり取りするためのアプリのことです。言うなれば、Twitter（現X）のiOSアプリやウェブアプリで、Twitterのツイートフィードにアクセスするようなものです。

Nostrプロトコルは非常にシンプルで柔軟性があるため、クライアントによってプロトコルのさまざまな側面を少しずつ異なる方法で実装することに重点を置いています。例えば、あるクライアントは美しく使いやすいUIに重点を置き、あるクライアントはライトニング決済を可能にすることに重点を置き、またあるクライアントはチェスをプレイするようなクリエイティブなユースケースのために重点を置いています（そう、あなたはNostrプロトコルを介して[チェスをプレイする](https://jesterui.github.io?utm_source=nostr.how&ref=nostr.how)ことができます）。

これまでに作られたクライアントのほとんどは、ソーシャルメディアのユースケースが中心です。しかし、私たちはもっと興味深い使用例を見始めています。

いくつかの例：

-   [Jester](https://jesterui.github.io?utm_source=nostr.how&ref=nostr.how)：Nostr上でチェスをプレイする
-   [Habla](https://habla.news?utm_source=nostr.how&ref=nostr.how)：長文投稿 – Mediumのような
-   [Nostrgram](https://nostrgram.co?utm_source=nostr.how&ref=nostr.how)：画像に特化したソーシャル・クライアント
-   [zap.stream](https://zap.stream/)：Zapsを使ったTwitchのようなストリーミング・サイト


## クライアントの使い分けは可能なのか？

はい。クライアントはリレーが保持する基礎データにアクセスするための手段に過ぎないので、クライアントを切り替えたり、好きなだけクライアントにサインインすることができます。各クライアントが同じリレーのデータを見ている限り、各クライアントで同じメッセージが表示されます。

## クライアントに秘密鍵を入力する必要があるのか？

一般的に、秘密鍵はどのクライアントにも入力しない方がよいでしょう。秘密鍵の入力を求めるクライアントのほとんどは、あなたの秘密鍵を安全に保つために最善を尽くしていますが、ソフトウェアの性質上、あなたの秘密鍵が漏れる可能性のある違反、悪用、バグが常に存在します。

秘密鍵はNostrにおけるあなたのアイデンティティであることを忘れないでください。もし秘密鍵が漏洩した場合、ゼロからあなたのアイデンティティを再構築する必要があり、フォロワー・リストやプライベート・メッセージをすべて失うことになります。

## いくつかのお気に入りのクライアント

### ウェブ

-   [Iris](https://iris.to?utm_source=nostr.how&ref=nostr.how) – 新規ユーザーには、このクライアントをお勧めします。 [Check out our guide here](/en/guides/iris).
-   [Snort](https://snort.social?utm_source=nostr.how&ref=nostr.how)
-   [Coracle](https://coracle.social?utm_source=nostr.how&ref=nostr.how)
-   [Nostrgram](https://nostrgram.co?utm_source=nostr.how&ref=nostr.how)

### デスクトップ

-   [Gossip](https://www.github.com/mikedilger/gossip) – Gossipは非常に意見の多いデスクトップ・クライアントで、使用するにはもう少し専門的な知識が必要です。その代わり、ユーザーはNostrとのやり取りをよりコントロールできるようになります。

### iOS

-   [Damus](https://apps.apple.com/app/damus/id1628663131) – これは、Nostrのための最初の、そして最高のiOSクライアントです。 [Check out our guide here](/en/guides/damus).

### Android

-   [Amethyst](https://play.google.com/store/apps/details?id=com.vitorpamplona.amethyst) – Androidのための美しいクライアントです。 [Check out our guide here](/en/guides/amethyst).
