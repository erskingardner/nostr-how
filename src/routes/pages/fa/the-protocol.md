---
title: پروتکل ناستر
description: این مروری سطح بالا بر پروتکل ناستر شامل انواع رویداد و نحوه کار احتمالات اجرای ناستر (NIP) است.
---

## [§](#سطح-بالای-ناستر) ناستر در سطح بالا

-   دو جز اصلی در شبکه ناستر وجود دارند: [کلاینت ها](/fa/clients) و [رله ها](/fa/relays).
    -   **کلاینت ها** رابط کاربری هستند کابران استفاده می کنند تا داده ها در رله ها بخوانند و بنویسند. در دنیای رسانه های اجتماعی، مثل اپ موبایل یا اپ وب توییتر می مانند. این کلاینت است که به شما اجازه می دهد در پایگاه داده متمرکز توییتر داده ها را بخوانید یا بنویسید.   
    -   **رله ها** مانند پایگاه داده هستند (هرچند که کارهایی خیلی بیشتر از صرفا ذخیره داده انجام می دهند). رله ها به کلاینت ها اجازه می دهند که داده ها را به آنها بفرستند و سپس آن داده را در پایگاه داده ذخیره می کنند. آنگاه کلاینت ها می توانند داده را از رله ها بخوانند و به کاربران نشان دهند.

-   هر کاربر با یک کلید عمومی شناخته می شود. هر شئ رویداد (مثلا پیامی که می فرستید، بروز رسانی لیست دنبال شوندگان شما، و غیره) امضا می شود. کلاینت ها این امضاها را اعتبارسنجی می کنند تا مطمئن شوند صحت دارند.
-   کلاینت ها داده را رله ها می گیرند و به رله ها متنشر می کنند. رله ها تقریبا همیشه توسط کاربر انتخاب می شوند. رله ها مجبور به برقراری ارتباط با یکدیگر نیستند اما بطور بالقوه ممکن است در آینده این اتفاق بیافتد.
-   برای مثال، برای بروزرسانی نمایه خود، فقط به کلاینت خود دستور می دهید که یک رویداد نوع صفر به رله هایی که می خواهید استفاده کنید بفرستد. سپس رله ها این رویداد را ذخیره می کنند. 
-   در آغاز، کلاینت شما داده ای را که خواسته اید از رله ها می پرسد. ممکن آن را طوری فیلتر کنید که فقط رویداد های کاربرانی را که آنها دنبال می کنید نشان دهد یا می توانید همه چیز را از همه کس بخواهید، سپس کلاینت این داده را به شما نشان می دهد.
-   انواع مختلف رویداد وجود دارد. رویدادها می توانند همه جور ساختار داده را در بر بگیرند، و بیشترین ساختار های مورد استفاده به [احتمالات اجرای ناستر](#nips) راه می یابند (NIPها - استانداردهای پروتکل که همه به آن مقید هستند) پس همه کلاینت ها می توانند بی هیچ مشکلی از پس آنها بربیایند. 
-   داده ای که می توانید در ناستر ببینید کاملا به رله هایی بستگی دارد که به تصمیم می گیرید به آن ها متصل شوید. برای درک بیشتر نمودار شبکه را در زیر ببینید.

### نمودار شبکه

![نمودار شبکه ناستر](/images/nostr-network.webp)

در نمودار بالا می بینید که ما 3 رله و 3 کاربر داریم. هر کاربر با کلاینتی متفاوت به ناستر وصل شده است (و در پلتفرمی متفاوت).

با در نظر گرفتن خوانده ها و نوشته ها در نمودار:


-   باب می تواند تمام یادداشت های آلیس را ببیند، ولی هیچ چیز از ماری نمی بیند (و حتی نمی داند او وجود دارد)
-   آلیس می تواند تمام یادداشت های باب را ببیند، ولی هیچ چیز از ماری نمی بیند (و حتی نمی داند او وجود دارد)
-   ماری می تواند تمام یادداشت های باب و آلیس را ببیند. این بدان دلیل است که در حالی که او فقط به رله 3 می نویسد، ولی از رله 2، جایی که باب و آلیس در آن می نویسند می خواند.

این یک وضعیت بسیار ساده شده است ولی می توانید ببینید که انتخاب رله هایی که به آنها وصل می شوید می تواند تاثیر زیادی در چیزها و کسانی که در استفاده از ناستر می بینید داشته باشد.

## [§](#رویدادها) رویدادها

Events are the only object type on the Nostr network. Each event object has a `kind`, which denotes what sort of event it is (what sort of action a user might take or messages that might be received).

Here's what a kind 1 event looks like (kind 1 is for Short text notes – i.e. something like a Twitter tweet)

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

-   The `id` field tells us the ID of the event
-   The `pubkey` field tells us the public key of the user who sent the event
-   The `created_at` field tells us when the event was published
-   The `kind` field tells us what sort of event it is
-   The `tags` field tells us about tags on the event. These are used for creating links, adding media, and mentioning other users or events.
-   The `content` field gives us the content of the event. In this case, the short text post.
-   The `sig` field is the signature that clients use to verify that the user with this pubkey did in fact send this event on the date specified.

### Event Kinds

This is a list of current `Event` kinds. The most up-to-date list can always be found on the [Nostr NIPs repository](https://github.com/nostr-protocol/nips).

| kind        | description                      | NIP         |
| ----------- | -------------------------------- | ----------- |
| 0           | Metadata                         | [1](01.md)  |
| 1           | Short Text Note                  | [1](01.md)  |
| 2           | Recommend Relay                  | [1](01.md)  |
| 3           | Contacts                         | [2](02.md)  |
| 4           | Encrypted Direct Messages        | [4](04.md)  |
| 5           | Event Deletion                   | [9](09.md)  |
| 6           | Reposts                          | [18](18.md) |
| 7           | Reaction                         | [25](25.md) |
| 8           | Badge Award                      | [58](58.md) |
| 40          | Channel Creation                 | [28](28.md) |
| 41          | Channel Metadata                 | [28](28.md) |
| 42          | Channel Message                  | [28](28.md) |
| 43          | Channel Hide Message             | [28](28.md) |
| 44          | Channel Mute User                | [28](28.md) |
| 1984        | Reporting                        | [56](56.md) |
| 9734        | Zap Request                      | [57](57.md) |
| 9735        | Zap                              | [57](57.md) |
| 10000       | Mute List                        | [51](51.md) |
| 10001       | Pin List                         | [51](51.md) |
| 10002       | Relay List Metadata              | [65](65.md) |
| 22242       | Client Authentication            | [42](42.md) |
| 24133       | Nostr Connect                    | [46](46.md) |
| 30000       | Categorized People List          | [51](51.md) |
| 30001       | Categorized Bookmark List        | [51](51.md) |
| 30008       | Profile Badges                   | [58](58.md) |
| 30009       | Badge Definition                 | [58](58.md) |
| 30023       | Long-form Content                | [23](23.md) |
| 30078       | Application-specific Data        | [78](78.md) |
| 1000-9999   | Regular Events                   | [16](16.md) |
| 10000-19999 | Replaceable Events               | [16](16.md) |
| 20000-29999 | Ephemeral Events                 | [16](16.md) |
| 30000-39999 | Parameterized Replaceable Events | [33](33.md) |

### Standardized Tags

| name       | value                   | other parameters  | NIP                      |
| ---------- | ----------------------- | ----------------- | ------------------------ |
| e          | event id (hex)          | relay URL, marker | [1](01.md), [10](10.md)  |
| p          | pubkey (hex)            | relay URL         | [1](01.md)               |
| a          | coordinates to an event | relay URL         | [33](33.md), [23](23.md) |
| r          | a reference (URL, etc)  |                   | [12](12.md)              |
| t          | hashtag                 |                   | [12](12.md)              |
| g          | geohash                 |                   | [12](12.md)              |
| nonce      | random                  |                   | [13](13.md)              |
| subject    | subject                 |                   | [14](14.md)              |
| d          | identifier              |                   | [33](33.md)              |
| expiration | unix timestamp (string) |                   | [40](40.md)              |

## [§](#nips) NIPs

A Nostr Implementation Possibilty, or NIP for short, exist to document what MUST, what SHOULD and what MAY be implemented by Nostr-compatible relay and client software. NIPs are the documents that outline how the Nostr protocol works.

### Why should I care about NIPs?

Nostr is decentralized and not owned by a centralized service (like Twitter). This means that the direction of the protocol is up to all of us! We can suggest and advocate for changes and offer feedback on ideas suggested by others.

Being an active part of the community gives you a say in the direction of the network. NIPs published in the main repository are already approved. Adding new ideas is done via Pull Request on that repo.

### Where can I find NIPs?

You can see all current NIPs in the [Nostr NIP repo](https://github.com/nostr-protocol/nips).
