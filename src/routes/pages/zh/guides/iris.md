---
title: 开始使用 Iris
description: 通过 Iris Web 客户端使用 Nostr 的分步指南。
---

## 步骤 1 - 安装 Alby

从 [Chrome 扩展商店](https://chrome.google.com/webstore/detail/alby-bitcoin-lightning-wa/iokeahhehimjnekafflcihljlcjccdbe)或直接从 [Alby 官网](https://getalby.com/)获取 Alby。

安装扩展后，创建一个新帐户。除非您已经是专业人士，否则我们建议您只在 Alby 上创建帐户并设置新的闪电钱包。

## 步骤 2 - 使用 Iris 生成新的私钥

1. 导航到 [Iris.to](https://iris.to)。
2. 输入名称并单击“Go” ![Iris sign up screen](/images/iris-signup.webp)
3. Iris 将为您生成新的公钥/私钥对并为您登录。此时，您可以开始关注他人和发布笔记。 ![Iris new user experience](/images/iris-nux.webp)
4. 但是，我们将确保以最安全的方式使用该应用程序。在左侧转到“Settings”，然后在二级菜单中单击“Accounts”。 ![Iris settings](/images/iris-accounts-settings.webp)
5. 复制您的公钥和“nsec”私钥。这些应存储在非常安全的地方。像密码管理器（我们喜欢1Password）。
6. 一旦您确定已将私钥保存在安全的地方，请单击帐户页面顶部的“log out”以退出 Iris。我们一会儿再重新登录。

## 步骤 3 - 将新的私钥添加到 Alby

1. 创建帐户并将私钥保存在安全的位置后，我们需要将该密钥添加到 Alby 扩展中。
2. 打开 Alby 扩展，然后导航到 Alby 帐户页面。 ![Alby accounts](/images/alby-accounts.webp)
3. 单击您的帐户，然后在 Nostr 部分中将您的新私钥（以 `nsec` 开头）粘贴到字段中。
4. 您现在可以使用 Alby 通过任何 Web 客户端登录并使用 Nostr。

## 步骤 4 - 重新登录 Iris

1. 回到 Iris 登录页面，单击“Nostr extension login”。 ![Iris sign up screen](/images/iris-signup.webp)
2. 授权 Alby 扩展弹出窗口中的密钥使用。
3. 您已登录！内容开始加载可能需要一些时间。🤙 每次在 Iris 中执行操作时，您都需要使用 Alby 扩展进行签名。如果这让您感到困扰，您可以选中复选框以让 Alby 记住您的选择。

## 视频指南

如果您喜欢视频指南，那么有一个相当不错的 [YouTube 初学者教程](https://www.youtube.com/watch?v=kifwECtwjJQ)，[Max DeMarco](https://snort.social/p/npub1lelkh3hhxw9hdwlcpk6q9t0xt9f7yze0y0nxazvzqjmre3p98x3sthkvyz) 介绍了如何创建自己的 Nostr 帐户。
