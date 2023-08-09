---
title: 什么是打闪？
description: 了解打闪是什么，它们是如何工作的，以及您在 Nostr 客户端上使用它们需要什么。
---

## [§](#the-basics) 基础

打闪可以简单地理解成小费。这些小费通过[闪电网络](https://www.investopedia.com/terms/l/lightning-network.asp)以光速传输，几乎没有交易费用。

从 Nostr 协议开始，我们就经常在笔记中看到闪电发票。自从 [NIP-57](https://github.com/nostr-protocol/nips/blob/master/57.md) 被实现以来，打闪已经成为 Nostr 笔记中传输价值的主要方式。让我们仔细看看 NIP-57 实现了什么，以及打闪是如何工作的。

## [§](#nip-57) NIP-57

[NIP-57](https://github.com/nostr-protocol/nips/blob/master/57.md) 是描述打闪如何实现的文档。它创建了两种新的笔记类型，类型 9735（打闪）和类型 9734（打闪请求）。这两种笔记共同使 Nostr 客户端能够从 LNURL 服务器请求打闪发票并支付。NIP-57 规范还描述了接收打闪支付的闪电钱包应如何创建要发送到中继的笔记。

💡 有趣的是，为打闪的笔记选择的类型与闪电使用的网络端口（9735）相同。

## [§](#how-zaps-work) 打闪是如何工作的？

![Zap flowchart](/images/zap-flow.webp)

我们不会在这里深入技术细节，但是对于你们中的好奇者，让我们来看看打闪的基本机制。

1. 当您在客户端（Damus、Iris、Amethyst 等）中点击或点击 ⚡ 图标时，首先发生的是客户端会 ping 您尝试打闪的人的闪电钱包前面的 [LNURL 服务器](https://thebitcoinmanual.com/articles/what-is-ln-url-and-how-does-it-work/)。第一个请求大致如下：“嗨，我想给 Alice 一些聪。”
2. LNURL 服务器做出响应，如果 Alice 的钱包支持打闪，它会告诉客户端，并发送/确认 Alice 的公钥。
3. 此时，客户端会做一些工作，以组合一个打闪请求（9734 类型的笔记），其中包含有关它想要打闪的个人资料或笔记、金额、它广播笔记的中继列表以及其他一些内容。这实际上是来自 LNURL 服务器的发票请求。
4. LNURL 服务器响应所请求的发票。
5. 此时，客户端将该发票交给用户的闪电钱包进行支付。如果您在浏览器中使用 Alby 等钱包（并设置了预算），此过程可以非常快速。
6. 一旦用户直接向他们要打闪的用户的钱包支付了发票，接收者的钱包将创建一种 9735 类型的笔记，然后将其广播到之前在打闪请求中指定的中继。
7. 接收此笔记的中继将能够告知连接的客户端有关打闪的信息，客户端可以在其 UI 中向用户显示打闪。

这一切都在几秒钟内发生，并且只花费了一便士的一小部份。

## [§](#how-to-send-and-receive) 我如何发送和接收打闪？

要在 Nostr 中给其他人打闪，您只需要两件事：

1. 一个支持打闪的闪电钱包（如 [Alby](https://getalby.com/) 或 [Wallet of Satoshi](https://www.walletofsatoshi.com/)）
2. 一个实现了打闪的客户端（如 [Damus](/en/guides/damus)、[Amethyst](/en/guides/amethyst)、[Iris](/en/guides/iris) 或 [Snort](https://snort.social)）

您唯一需要做的另外一件事情就是确保在您的 Nostr 个人资料中设置了闪电地址。这是您将接收到的打闪的地址。

记住，您可以从与您在个人资料中设置的接收打闪的地址不同的钱包/地址支付打闪。

例如，想象一下以下情况：

1. 您在个人资料中设置了 [Stacker News](https://stacker.news/) 闪电地址，这是您将收到任何打闪的地方。
2. 在您的网络浏览器中，您使用 Iris 作为客户端，并使用 Alby 钱包通过其 Chrome 扩展程序支付打闪。
3. 在移动端，您使用 Damus 作为客户端，并使用 Wallet of Satoshi 应用支付打闪。