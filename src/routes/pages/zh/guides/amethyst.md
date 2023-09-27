---
title: 开始使用 Amethyst
description: 通过 Amethyst Android 客户端开始使用 Nostr 的分步指南。
---

## 步骤 1 - 安装应用程序

1. 在 Android 应用商店上安装 [Amethyst 应用程序](https://play.google.com/store/apps/details?id=com.vitorpamplona.amethyst)。
2. 打开应用程序后，您可以选择创建新帐户或使用您已经生成的私钥进行登录。
3. 如果您已经通过 Alby 扩展或其他客户端创建了私钥，则可以阅读并接受使用条款，输入您的 (npub/nsec) 并单击“Login”。否则，单击“Generate a new key”。您可以在此处找到[有关密钥的更多信息](/zh/get-started#understanding-keys)。

## 步骤 2 - 创建新帐户

1. 阅读“terms of use”并选中复选框。
2. 单击“Generate a new key”。
3. 恭喜您，您刚刚创建了一个新的 Nostr 身份！🤙
4. 您将被重定向到主屏幕，并显示“Feed is empty. Refresh”，因为您还没有关注其他任何帐户。稍后我们会处理这个问题。
5. 只剩下一个**非常重要**的步骤。您应该将私钥保存在安全的地方。为此，请单击左上角的带有奇怪机器人图标的图标，该图标目前是您的个人资料图片。侧边栏将出现。
6. 导航到“Back Keys”，并在底部单击“Copy my secret key”。
7. 您的私钥现在在您的智能手机的剪贴板上，最好将其保存在一个**非常**安全的地方。'1Password' 或任何其他密码管理器都是一个不错的选择。请记住，如果您忘记了私钥，您将无法恢复您的帐户。您可以在此处找到[有关密钥的更多信息](/zh/get-started#understanding-keys)。
8. 现在您可以继续设置您的帐户。返回主屏幕左上角的个人资料图片，然后导航到“Profiles”。从那里，单击“Follow”旁边的带有三条线和笔的图标。您可以在那里调整您的个人资料设置。如果完成了，请单击右上角的“Post”以确认更改。
9. 好的，您的帐户已经设置好了，让我们填充您的 Feed 并关注其他人。单击右上角的搜索图标，搜索您知道的帐户，或者只需单击主屏幕上的“All Follows”（左下角的房子图标），然后选择“Global”。您现在将看到发送到您连接的中继的所有笔记。如果您感到不知所措，不用担心，随着时间的推移，您将在此处找到新的有趣帐户。只需尝试一下。

## 使用现有密钥登录

1. 阅读“terms of use”并选中复选框。
2. 输入您的 npub（只读）或 nsec（完全访问）并单击“Login”。
3. **重要提示**：您的私钥存储在本地，不会以任何方式被 Amethyst 服务器收集或存储。
