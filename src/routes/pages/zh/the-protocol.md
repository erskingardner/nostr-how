---
title: Nostr 协议
description: 这是 Nostr 协议的概述，其中包含 Event 的细节介绍以及 Nostr Implementation Possibilities (NIPs) 是如何运作的。
---

## [§](#nostr-high-level) Nostr 概述

-   在 Nostr 网络中有两个主要的组件：[客户端](/zh/clients) & [中继](/zh/relays)。
    -   **客户端** 是用户用来读写数据到中继的界面。在社交媒体的背景下，可以把它想象成 Twitter 的网页应用或移动应用。它是一个客户端，允许您从 Twitter 的中心化数据库读取数据和写入数据。
    -   **中继** 就像数据库（尽管它们做的不仅仅是存储数据）。它们允许客户端将数据发送到它们，并将该数据存储在数据库中。然后客户端可以从中继中读取数据，以显示给用户。
-   每个用户都由一个公钥来标识。每个事件对象（例如您要发布的消息、您的关注列表的更新等）都是被签名了的。客户端验证这些签名以确保它们是正确的。
-   客户端从中继获取数据并将数据发布到中继。中继由用户自由选择。中继之间彼此不联系，但将来可能会。
-   例如，要更新您的个人资料，您只需指示您的客户端向您想要使用的中继发送一个 kind 0 的事件。然后中继将存储该事件。
-   在启动时，您的客户端从您告诉它的中继查询一些数据。客户端根据这些数据来过滤事件，仅显示您关注的用户的事件，或者您可以要求获取所有人的所有事件，然后客户端将获取到的事件展示给您。
-   事件有许多不同的类型。事件可以包含各种结构化数据，而最常用的结构正在被整合到 [Nostr Implementation Possibilities](#nips) (NIPs – 所有人都遵循的协议标准) 中，以便所有客户端和中继都可以无缝处理它们。
-   您在 Nostr 上可以看到什么数据完全取决于您决定连接到哪个中继。有关详细信息，请参阅下面的网络图。

### 网络图

![Nostr network diagram](/images/nostr-network.webp)

从上图我们可以看到 3 个中继和 3 个用户。每个用户都使用不同的客户端（在不同的平台上）连接到 Nostr。

看图说话：

-   Bob 可以看到 Alice 的所有帖子，但看不到 Mary 的任何帖子（甚至不知道她的存在）
-   Alice 可以看到 Bob 的所有帖子，但看不到 Mary 的任何帖子（甚至不知道她的存在）
-   Mary 可以看到 Bob 和 Alice 的所有帖子。这是因为尽管她只向中继 3 写入，但她从中继 2 读取，Bob 和 Alice 在那里写入他们的帖子。

这是虽然是个非常简单的情况，但您已经可以看到，您对中继的选择，可能会对您在使用 Nostr 时看到的人和内容产生很大的影响。

## [§](#events) 事件

事件是 Nostr 网络上唯一的对象。每个事件对象都有一个 `kind` 属性，它表示事件的类型（可能是用户的一个行为，也有可能是一条消息）。

这是一个 kind 1 事件的例子（kind 1 表示短文本笔记 - 例如 Twitter 的推文）

```json
{
    "id": "4376c65d2f232afbe9b882a35baa4f6fe8667c4e684749af565f981833ed6a65",
    "pubkey": "6e468422dfb74a5738702a8823b9b28168abab8655faacb6853cd0ee15deee93",
    "created_at": 1673347337,
    "kind": 1,
    "tags": [
        ["e", "3da979448d9ba263864c4d6f14984c423a3838364ec255f03c7904b1ae77f206"],
        ["p", "bf2376e17ba4ec269d10fcc996a4746b451152be9031fa48e74553dde5526bce"]
    ],
    "content": "Walled gardens became prisons, and nostr is the first step towards tearing down the prison walls.",
    "sig": "908a15e46fb4d8675bab026fc230a0e3542bfade63da02d542fb78b2a8513fcd0092619a2c8c1221e581946e0191f2af505dfdf8657a414dbca329186f009262"
}
```

-   `id` 字段为事件的 ID
-   `pubkey` 字段为发送事件的用户的公钥
-   `created_at` 字段为事件发布的时间
-   `kind` 字段为事件的类型
-   `tags` 字段为事件的标签。这些标签用于创建链接、添加媒体和提及其他用户或事件。
-   `content` 字段为事件的内容。在这种情况下，是短文本帖子。
-   `sig` 字段为事件的签名，客户端使用它来验证具有此公钥的用户确实在指定的日期发送了此事件。

### 事件类型

这里是当前 `Event` 类型的列表。最新的列表可以在 [Nostr NIPs 仓库](https://github.com/nostr-protocol/nips) 中找到。

| 类型    | 描述               | 提及的 NIP                                                     |
| ------- | ------------------ | -------------------------------------------------------------- |
| `0`     | 元数据             | [1](https://github.com/nostr-protocol/nips/blob/master/01.md)  |
| `1`     | 短文本             | [1](https://github.com/nostr-protocol/nips/blob/master/01.md)  |
| `2`     | 推荐中继列表       | [1](https://github.com/nostr-protocol/nips/blob/master/01.md)  |
| `3`     | 关注人列表         | [2](https://github.com/nostr-protocol/nips/blob/master/02.md)  |
| `4`     | 加密私信           | [4](https://github.com/nostr-protocol/nips/blob/master/04.md)  |
| `5`     | 删除事件           | [9](https://github.com/nostr-protocol/nips/blob/master/09.md)  |
| `6`     | 转发               | [18](https://github.com/nostr-protocol/nips/blob/master/18.md) |
| `7`     | 回应               | [25](https://github.com/nostr-protocol/nips/blob/master/25.md) |
| `8`     | 徽章奖励           | [58](https://github.com/nostr-protocol/nips/blob/master/58.md) |
| `40`    | 创建聊天室         | [28](https://github.com/nostr-protocol/nips/blob/master/28.md) |
| `41`    | 聊天室元数据       | [28](https://github.com/nostr-protocol/nips/blob/master/28.md) |
| `42`    | 聊天室消息         | [28](https://github.com/nostr-protocol/nips/blob/master/28.md) |
| `43`    | 聊天室隐藏某条消息 | [28](https://github.com/nostr-protocol/nips/blob/master/28.md) |
| `44`    | 聊天室屏蔽某用户   | [28](https://github.com/nostr-protocol/nips/blob/master/28.md) |
| `1063`  | 文件元数据         | [94](https://github.com/nostr-protocol/nips/blob/master/94.md) |
| `1984`  | 举报               | [56](https://github.com/nostr-protocol/nips/blob/master/56.md) |
| `9734`  | 打闪请求           | [57](https://github.com/nostr-protocol/nips/blob/master/57.md) |
| `9735`  | 打闪               | [57](https://github.com/nostr-protocol/nips/blob/master/57.md) |
| `10000` | 静音列表           | [51](https://github.com/nostr-protocol/nips/blob/master/51.md) |
| `10001` | 置顶列表           | [51](https://github.com/nostr-protocol/nips/blob/master/51.md) |
| `10002` | 中继列表元数据     | [65](https://github.com/nostr-protocol/nips/blob/master/65.md) |
| `13194` | 钱包信息           | [47](https://github.com/nostr-protocol/nips/blob/master/47.md) |
| `22242` | 客户端认证         | [42](https://github.com/nostr-protocol/nips/blob/master/42.md) |
| `23194` | 钱包请求           | [47](https://github.com/nostr-protocol/nips/blob/master/47.md) |
| `23195` | 钱包回应           | [47](https://github.com/nostr-protocol/nips/blob/master/47.md) |
| `24133` | Nostr 连接         | [46](https://github.com/nostr-protocol/nips/blob/master/46.md) |
| `30000` | 用户分组列表       | [51](https://github.com/nostr-protocol/nips/blob/master/51.md) |
| `30001` | 书签分组列表       | [51](https://github.com/nostr-protocol/nips/blob/master/51.md) |
| `30008` | 个人资料徽章       | [58](https://github.com/nostr-protocol/nips/blob/master/58.md) |
| `30009` | 徽章定义           | [58](https://github.com/nostr-protocol/nips/blob/master/58.md) |
| `30017` | 创建或更新商品列表 | [15](https://github.com/nostr-protocol/nips/blob/master/15.md) |
| `30018` | 创建或更新一个商品 | [15](https://github.com/nostr-protocol/nips/blob/master/15.md) |
| `30023` | 长文               | [23](https://github.com/nostr-protocol/nips/blob/master/23.md) |
| `30078` | 应用自定义数据     | [78](https://github.com/nostr-protocol/nips/blob/master/78.md) |
| `30402` | 分类               | [99](https://github.com/nostr-protocol/nips/blob/master/99.md) |
| `31989` | 推荐处理者         | [89](https://github.com/nostr-protocol/nips/blob/master/89.md) |
| `31990` | 处理者的信息       | [89](https://github.com/nostr-protocol/nips/blob/master/89.md) |

### 标准化标签

| 名称       | 值                 | 其他参数       | 提及的 NIP                                                                                                                     |
| ---------- | ------------------ | -------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| e          | 事件 ID（16 进制） | 中继 URL, 标记 | [1](https://github.com/nostr-protocol/nips/blob/master/01.md), [10](https://github.com/nostr-protocol/nips/blob/master/10.md)  |
| p          | 公钥（16 进制）    | 中继 URL       | [1](https://github.com/nostr-protocol/nips/blob/master/01.md)                                                                  |
| a          | 事件坐标           | 中继 URL       | [33](https://github.com/nostr-protocol/nips/blob/master/33.md), [23](https://github.com/nostr-protocol/nips/blob/master/23.md) |
| r          | 引用（URL 等）     |                | [12](https://github.com/nostr-protocol/nips/blob/master/12.md)                                                                 |
| t          | 话题               |                | [12](https://github.com/nostr-protocol/nips/blob/master/12.md)                                                                 |
| g          | 地理位置           |                | [12](https://github.com/nostr-protocol/nips/blob/master/12.md)                                                                 |
| nonce      | 噪声               |                | [13](https://github.com/nostr-protocol/nips/blob/master/13.md)                                                                 |
| subject    | 主题               |                | [14](https://github.com/nostr-protocol/nips/blob/master/14.md)                                                                 |
| d          | 标识               |                | [33](https://github.com/nostr-protocol/nips/blob/master/33.md)                                                                 |
| expiration | 时间戳（字符串）   |                | [40](https://github.com/nostr-protocol/nips/blob/master/40.md)                                                                 |

## [§](#nips) NIPs

一个 Nostr Implementation Possibilty（NIP）的存在是为了记录与 Nostr 兼容的中继和客户端软件必须、应该和可以实现的内容。NIPs 是概述 Nostr 协议如何工作的文档。

### 我为什么要关心 NIPs？

Nostr 是去中心化的，不是由一个中心化的服务（如 Twitter）拥有。这意味着协议的方向取决于我们所有人！我们可以提出建议和支持那些认可的改变，并给其他提出想法的人提供反馈。

作为社区的活跃者，您可以对网络的发展方向发表意见。主仓库中发布的 NIPs 是已经获得批准的。通过创建 Pull Request 在该仓库上添加新的想法。

### 我可以在哪找到 NIPs？

您可以在 [Nostr NIP 仓库](https://github.com/nostr-protocol/nips) 中看到当前所有的 NIPs。
