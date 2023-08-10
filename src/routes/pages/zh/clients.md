---
title: 什么是 Nostr 客户端？
description: 简单介绍什么是 Nostr 客户端，并比较我们最喜欢的几个客户端。
---

## 什么是客户端？

Nostr 中的客户端只是您用来访问和与协议交互的应用程序。就像您用来与 Twitter 的推文流进行交互的 Twitter iOS 应用程序或 Web 应用程序一样。

因为 Nostr 协议非常简单且灵活，所以不同的客户端专注于以稍微不同的方式实现协议的不同方面。例如，有些客户端专注于美观和易用的 UI，有些客户端专注于闪电支付，还有一些客户端专注于用 Nostr 做些有创意的尝试，例如下棋（是的，您可以通过 Nostr 协议[下棋](https://jesterui.github.io?utm_source=nostr.how&ref=nostr.how)）。

大部份客户端都是围绕着社交媒体这个场景开发的。但我们也开始看到更多有趣的使用场景。

一些例子：

-   [Jester](https://jesterui.github.io?utm_source=nostr.how&ref=nostr.how): 在 Nostr 上下棋
-   [Habla](https://habla.news?utm_source=nostr.how&ref=nostr.how): 长文社区 —— 类似 Medium
-   [Nostrgram](https://nostrgram.co?utm_source=nostr.how&ref=nostr.how): 以媒体为中心的社交客户端
-   [zap.stream](https://zap.stream/): 类似 Twitch 的可打闪的直播平台

## 我可以切换客户端吗？

当然可以。因为客户端只是访问由中继持有的底层数据的一种方式，所以您可以切换客户端或登录任意多个客户端。只要每个客户端都从相同的中继集合中获取数据，您就可以在每个客户端中看到相同的消息。

## 我应该在客户端中输入我的私钥吗？

一般来说，最好不要在任何客户端中输入您的私钥。大多数索要私钥的客户端都会尽其所能保护您的私钥安全，但考虑到软件的性质，总会有潜在的漏洞、攻击和错误可能会暴露您的私钥。

请记住，您的私钥是您在 Nostr 中的身份，因此如果它被泄露，您将不得不从头开始重建您的身份，并且您将失去您的关注者列表和所有私人消息。

## 一些我们喜欢的客户端

### Web

-   [Iris](https://iris.to?utm_source=nostr.how&ref=nostr.how) - 这是我们为新用户推荐的客户端 [Check out our guide here](/en/guides/iris).
-   [Snort](https://snort.social?utm_source=nostr.how&ref=nostr.how)
-   [Coracle](https://coracle.social?utm_source=nostr.how&ref=nostr.how)
-   [Nostrgram](https://nostrgram.co?utm_source=nostr.how&ref=nostr.how)

### 桌面客户端

-   [Gossip](https://www.github.com/mikedilger/gossip) - Gossip 是一款非常固执己见的桌面客户端，需要一些技术知识才能使用。回报是它可以让用户更多地控制他们与 Nostr 的交互方式。

### iOS

-   [Damus](https://apps.apple.com/app/damus/id1628663131) – 这是第一款也是最好的 iOS Nostr 客户端。 [Check out our guide here](/en/guides/damus).

### Android

-   [Amethyst](https://play.google.com/store/apps/details?id=com.vitorpamplona.amethyst) – 一款漂亮的安卓客户端 [Check out our guide here](/en/guides/amethyst).
