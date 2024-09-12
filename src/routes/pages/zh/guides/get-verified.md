---
title: 获取 NIP-05 验证
description: 如何在 Nostr 上验证您的身份，以获得验证标记和更轻松地分享您的帐户。
---

## [§](#what-youll-learn) 您将在本指南中学到什么

您可能已经注意到，在许多不同的客户端上，一些用户都有认证标记，就像在 Twitter 上一样。

NIP-05 指定了 Nostr 用户如何证明其身份。不同的客户端以稍微不同的方式显示认证，这是向 Nostr 社区展示您是真实用户的重要方式。

![Snort Verified](/images/snort-verified.webp)

Nostr 上的验证过程在 Nostr Implementation Possibilities (NIP) 中有记录，称为 [NIP-05](https://github.com/nostr-protocol/nips/blob/master/05.md)。

NIP-05 使 Nostr 用户能够将其公钥映射到基于 DNS 的互联网标识符。验证机制类似于 Google 要求您使用 DNS 记录验证您对域名的所有权。

验证的主要好处是，它允许 Nostr 用户通过人类可读的名称而不是长而难以记忆的公钥来进行身份验证。这使得经过验证的 Nostr 用户可以轻松地与其他人分享其身份。

要使用 NIP-05，Nostr 用户将 nip05 url 添加到其个人资料中（大多数客户端都支持此功能）。NIP-05 url 看起来像电子邮件-bob@example.com。让我们分解一下：

1. `@` 符号之前的所有内容（在我们的示例中为“bob”）。这必须与您的 Nostr 个人资料中的名称字段的值匹配。
2. `@` 符号之后的所有内容（在我们的示例中为“example.com”）。这是客户端可以查找以查找包含用户名称和公钥的 `/.well-known/nostr.json` 文件的域。

当客户端看到 nip05 url 时，它们将在指定的域中查找 `/.well-known/nostr.json` 文件。此文件必须包含指定用户的 Nostr 公钥。在 NIP-05 规范中阅读更多具体信息。

虽然听起来很技术，但实际上很容易获得验证。让我们看看如何做到这一点。

## [§](#free-verification) 通过免费服务获得验证

目前，有几个提供免费帮助大家获得验证的提供商。如果您的闪电钱包中还没有聪，这是一个很好的选择。如果可能，请通过捐赠支持这些项目。⚡🤙

-   [Bitcoin Nostr](https://bitcoinnostr.com/)
-   [Nostrcheck.me](https://nostrcheck.me)
-   [zaps.lol](https://zaps.lol/)
-   [NIP05.social](https://nip05.social)
-   [Nostr-Check.com](https://nostr-check.com/)
-   [Verified Nostr](https://verified-nostr.com/)
-   [Cosa Nostr](https://cosanostr.com)

## [§](#paid-verification) 向提供商支付验证费用

如果您没有自己的域名或不想自己设置它，则可以利用免费或付费（通常只需几个[聪](https://coinmarketcap.com/alexandria/glossary/satoshi-sats)）的 NIP-05 服务。以下是一些付费提供商：

-   [Nostrplebs](https://nostrplebs.com)
-   [Nostr Verified](https://nostrverified.com)
-   [Alby](https://getalby.com)
-   [Nostr Directory](https://nostr.directory)
-   [Nostr.band](https://nip05.nostr.band)
-   [Nostr.com.au](https://nostr.com.au)
-   [Vida](https://Vida.page)
-   [Stacker News](https://stacker.news)
-   [Nostrich House](https://nostrich.house)

## [§](#self-hosted) 自托管验证

如果您已经拥有域名，则这是一种免费选择。您只需要将 `.well-known/nostr.json` 文件添加到您的域名中。文件的内容应为以下内容：

```json
{
    "names": {
        "YOUR_NOSTR_NAME": "YOUR_NOSTR_PUBLIC_KEY"
    }
}
```

您还可以选择添加一个部分，以让客户端知道他们可能会在哪些中继上找到您：

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

请确保在 `nostr.json` 文件中使用公钥的十六进制版本。这是**不以** `npub` 开头的密钥版本。

您可以在 [Nostr.band](https://nostr.band) 上转换您的密钥

![Get your hex key](/images/get-hex-key.webp)

最后，请确保此文件使用 `Access-Control-Allow-Origin` 标头设置为 `*`，因为客户端需要访问它。
