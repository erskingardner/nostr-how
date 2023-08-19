---
title: 开始使用 Astral
description: 通过 Astral 网页客户端开始使用 Nostr 的分步指南。
---

## 步骤 1 - 安装 Alby

从 Chrome 网上应用店或 [Alby 网站](https://getalby.com/)获取 [Alby](https://chrome.google.com/webstore/detail/alby-bitcoin-lightning-wa/iokeahhehimjnekafflcihljlcjccdbe)。

安装扩展后，创建一个新帐户。除非您已经是专业人士，否则我们建议您只在 Alby 上创建一个帐户并设置新的 Lightning 钱包。

## 步骤 2 - 生成您的私钥

1. 安装 Alby 并创建或连接到 Lightning 钱包后，导航到 Alby 帐户页面。![Alby 设置](/images/alby-accounts.webp)
2. 滚动到 Nostr 部分，单击“管理您的密钥”下的“生成新密钥”按钮。这将生成一个私钥并将其保存到您的 alby 钱包中。现在，您可以使用此私钥登录 Nostr。
3. 生成私钥后，单击小眼睛图标以显示您的密钥。复制私钥（以 `nsec` 开头），并将其保存到密码管理器或某个**非常**安全的地方。请记住，如果您丢失此密钥，它将永远消失，连同所有帐户数据一起。

## 步骤 3 - 登录 Astral

1. 导航到 [Astral](https://astral.ninja)。
2. 在弹出的登录窗口中，单击“USE PUBLIC KEY FROM EXTENSION”按钮。![Astral 登录步骤 1](/images/astral-login.webp)
3. 在 alby 扩展程序弹出窗口中授权密钥使用。![Astral 登录步骤 2](/images/astral-login2.webp)
4. 确认后，您将在 Astral 中看到另一个弹出窗口。我们可以在此处看到 Alby 已将我们的公钥传递给 Astral。由于我们不想在 Astral 上存储我们的私钥，因此只需按“Proceed”即可。![Astral 登录步骤 3](/images/astral-login3.webp)
5. Astral 然后会显示另一个弹出窗口，告诉您您的私钥不存在。同样，这正是我们想要的，因此您可以点击“Close”。![Astral 登录步骤 4](/images/astral-login4.webp)
6. 您已登录！内容开始加载可能需要一些时间。🤙
7. 此时，您可以从页面左上角复制您的公钥。您应该将其与您的私钥一起存储，以便您拥有它。![Astral 登录步骤 5](/images/astral-login5.webp)
