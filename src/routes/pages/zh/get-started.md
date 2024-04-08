---
title: 开始使用 Nostr
description: 本指南将帮助您了解 Nostr 的基础知识，并为您创建一个新账户做好准备。我们将介绍如何创建一个新的闪电钱包，创建一个账户，并安全地登录客户端。
---

## [§](#understanding-keys) 了解密钥

每个 Nostr 账户都基于一个公钥/私钥对。一个简单的理解方式是，您的公钥是您的用户名，您的私钥是您的密码，但有一个重要的例外。与密码不同，如果丢失了私钥，您将无法重置它。

让我们再说一遍，这样就清楚了：**如果您丢失了私钥，您的 Nostr 账户就丢失了。如果其他人获得了您的私钥，他们就可以控制您的账户。**

确保您将私钥存储在安全的地方，例如密码管理器（我们喜欢 [1Password](https://1password.com/)）或浏览器扩展程序，例如 [Alby](https://getalby.com/#alby-extension)。

## [§](#protocol-vs-client) 协议与客户端

Nostr 协议本身只是一个协议；一种在互联网上传递消息的约定。

您将通过客户端访问 Nostr（协议）。客户端可以是 Web、桌面或移动应用程序。一些 Nostr 客户端允许您通过粘贴私钥来登录。在 Web 上，这通常是不推荐的——它很麻烦，也不安全。相反，我们建议在浏览器中使用签名扩展插件，这是一种专门设计用于安全管理私钥和为事件加密签名的软件。

[Alby](https://getalby.com?utm_source=nostr.how&ref=nostr.how) 是一款流行的签名扩展插件和比特币闪电钱包，内置支持 Nostr。这是新用户的一个很好的选择。我们将在下面的客户端特定指南中介绍如何安装 Alby。

## [§](#create-your-account) 创建您的账户

以下是我们推荐的几个客户端的操作指南：

-   [Iris](/zh/guides/iris) (Web)
-   [Damus](/zh/guides/damus) (iOS)
-   [Amethyst](/zh/guides/amethyst) (Android)

我们喜欢但没有指南的其他一些客户端：

-   [Primal](https://primal.net) (Web, iOS, Android) 用户友好的客户端，在移动设备上内置闪电钱包。
-   [Snort](https://snort.social?utm_source=nostr.how&ref=nostr.how) (Web) 超级简洁快速的网页客户端。
-   [Coracle](https://coracle.social?utm_source=nostr.how&ref=nostr.how) (Web) 一个专注于中继器导航的客户端。

## [§](#find-friends) 寻找要关注的朋友

-   如果您知道某人在 Nostr 上，可以通过搜索他们的公钥来找到他们的个人资料。
-   许多 Twitter 用户使用 #nostr 标签发布他们的 Nostr 公钥，因此搜索这个标签可以给您一个很好的开始。
-   [nostr.directory](https://nostr.directory?utm_source=nostr.how&ref=nostr.how) 是一个将 Twitter 用户映射到他们的 Nostr 公钥的数据库。

## [§](#whats-signing) “签名”是什么意思？

为了和 Nostr 协议交互，您必须在每次执行操作时创建一个加密签名。将这个签名视为一个身份验证步骤，这可以证明您是您自己。

大多数 Nostr 客户端都试图使这个过程简单快捷（或者允许您在客户端中保存私钥，以便在您执行任何操作时都可以代表您签名）。

如果只提供上面说的公钥，我们将在任何时候与任何帖子进行交互或对我们的个人资料进行任何更新时都会被提示进行签名。当这种情况发生时，Alby 将自动弹出（就像在注册步骤中所做的那样），您可以确认您确实想要签名。

## [§](#can-i-use-other-clients) 我可以使用其他客户端吗？

当然可以！现在您已经创建了公钥/私钥对，您可以在任何 Nostr 客户端上使用这对密钥来访问您的账户。请记住，客户端只是一个查看在 Nostr 协议上广播的消息的接口。

## [§](#next-steps) 下一步

太好了，现在您已经设置好了闪电钱包、身份（您的密钥对），并尝试了客户端。以下是一些链接，当您进一步了解 Nostr 时可能会有用：

-   [验证您的身份](/zh/guides/get-verified)
-   [什么是中继？它们怎么运作的？](/zh/relays)
-   [了解有关 NIPs 和协议开发的更多信息](/zh/the-protocol)
