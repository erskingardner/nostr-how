---
title: 开始使用 Damus
description: 通过 Damus iOS 客户端开始使用 Nostr 的分步指南。
---

## 步骤 1 - 获取 Damus

这是一个特定的指南，用于通过 [@jb55](https://snort.social/p/npub1xtscya34g58tk0z605fvr788k263gsu6cy9x0mhnm87echrgufzsevkk5s) 开发的美观易用的 iOS 客户端 [Damus](https://damus.io/) 开始使用 Nostr。

1. 在 iOS App Store 上安装 [Damus 应用程序](https://apps.apple.com/app/damus/id1628663131)。
2. 打开应用程序后，您可以选择创建新帐户或使用您已经生成的私钥登录。
3. 如果您已经通过 Alby 扩展程序或其他客户端创建了私钥，则可以单击“登录”。否则，单击“创建帐户”。
   ![Damus 登录/注册页面](/images/damus-login.webp)

## 步骤 2 - 创建新帐户

1. 单击“创建帐户”。
2. 阅读并接受最终用户许可协议。
3. 然后选择一个用户名（稍后可以更改），并可选择添加其他个人资料详细信息。Damus 会在此步骤中为您自动生成密钥。您的公钥显示在“公开帐户 ID”。![Damus 登录/注册页面](/images/damus-signup.webp)
4. 完成后，单击“创建”，您就可以使用 Nostr 了！🤙
5. 最后一个非常重要的步骤。您需要将私钥保存在安全的地方。
6. 点击屏幕左上角的个人资料图像，然后单击菜单中的“设置”，即可导航到设置页面。![Damus 设置](/images/damus-settings.webp)
7. 您将看到您的“公共帐户 ID”（这是您的公钥）和“帐户私钥”（这是您的私钥）。
8. 复制这两个值，并将它们存储在非常安全的地方。1Password 或其他密码管理器是一个不错的选择。请记住，如果您不保存此值，您将永远无法恢复您的帐户。您可以在[此处](/zh/get-started#understanding-keys)找到有关密钥的更多信息。

## 使用现有密钥登录

1. 单击“登录”。
2. 阅读并接受最终用户许可协议。
3. 然后会要求您输入私钥。输入您的密钥即可完成登录。🤙 **重要提示**：您的私钥存储在本地，不会以任何方式被 Damus 服务器收集或存储。
