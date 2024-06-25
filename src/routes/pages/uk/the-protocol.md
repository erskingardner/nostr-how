---
title: Протокол Nostr
description: Це огляд протоколу Nostr на високому рівні з деталями про типи подій та як працюють Можливості Впровадження Nostr (NIPs).
---

## [§](#nostr-high-level) Nostr на найвищому рівні
-   Існує два основні компоненти мережі Nostr: [клієнти](/en/clients) та [релеї](/en/relays).
    -   **Клієнти** — це інтерфейс, який користувачі використовують для читання та запису даних до релеїв. У контексті соціальних мереж, це можна порівняти з веб-додатком або мобільним додатком Twitter. Це клієнт, який дозволяє вам читати дані з централізованої бази даних Twitter і записувати дані до неї.
    -   **Релеї** схожі на бази даних (хоча вони роблять набагато більше, ніж просто зберігають дані). Вони дозволяють клієнтам надсилати їм дані та зберігати ці дані в базі даних. Клієнти можуть потім читати дані з релеїв, щоб показувати їх користувачам.
-   Кожен користувач ідентифікується за допомогою публічного ключа. Кожен об'єкт події (наприклад, повідомлення, яке ви публікуєте, оновлення вашого списку підписників тощо) підписується. Клієнти перевіряють ці підписи, щоб переконатися, що вони правильні.
-   Клієнти отримують дані з релеїв і публікують дані до релеїв. Релеї майже завжди обираються користувачем. Релеї не обов'язково повинні спілкуватися один з одним, але можуть потенційно робити це в майбутньому.
-   Наприклад, щоб оновити свій профіль, ви просто інструктуєте свій клієнт надіслати подію типу 0 до релеїв, які ви хочете використовувати. Релеї потім зберігають цю подію.
-   Під час запуску ваш клієнт запитує дані з релеїв, які ви йому вказали. Це можна відфільтрувати, щоб показувати лише події для користувачів, на яких ви підписані, або ви можете запитати все від усіх, тоді клієнт відображає ці дані вам.
-   Існує багато різних типів подій. Події можуть містити всілякі структуровані дані, і найбільш використовувані структури знаходять своє місце в [Можливостях Впровадження Nostr](#nips) (NIPs – стандарти протоколу, яких дотримуються всі), щоб усі клієнти та релеї могли безперешкодно їх обробляти.
-   Дані, які ви можете бачити на Nostr, повністю залежать від релеїв, до яких ви вирішите підключитися. Дивіться діаграму мережі нижче для більш детальної інформації.

### Діаграма мережі

![Діаграма мережі Nostr](/images/nostr-network.webp)

На діаграмі вище ми бачимо 3 релеї та 3 користувачів. Кожен з користувачів підключається до Nostr за допомогою різного клієнта (і на різній платформі).

Враховуючи читання та запис на діаграмі:

-   Боб може бачити всі пости Аліси, але не може бачити нічого від Мері (і навіть не знає, що вона існує)
-   Аліса може бачити всі пости Боба, але не може бачити нічого від Мері (і навіть не знає, що вона існує)
-   Мері може бачити всі пости Боба та Аліси. Це тому, що хоча вона пише тільки до Релею 3, вона читає з Релею 2, де Боб і Аліса пишуть свої пости.

Це дуже спрощена ситуація, але ви вже можете побачити, що вибір релеїв, до яких ви хочете підключитися, може мати великий вплив на те, кого і що ви побачите, використовуючи Nostr.

## [§](#events) Події

Події є єдиним типом об'єктів у мережі Nostr. Кожен об'єкт події має `kind`, який позначає, який це тип події (яку дію може виконати користувач або які повідомлення можуть бути отримані).

Ось як виглядає подія типу 1 (тип 1 призначений для коротких текстових нотаток – тобто щось на кшталт твіту в Twitter)

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

-   Поле `id` вказує нам ID події
-   Поле `pubkey` вказує нам публічний ключ користувача, який надіслав подію
-   Поле `created_at` вказує нам, коли подія була опублікована
-   Поле `kind` вказує нам, який це тип події
-   Поле `tags` вказує нам теги події. Вони використовуються для створення посилань, додавання медіа та згадування інших користувачів або подій.
-   Поле `content` надає нам зміст події. У цьому випадку це короткий текстовий пост.
-   Поле `sig` є підписом, який клієнти використовують для перевірки того, що користувач з цим публічним ключем дійсно надіслав цю подію на зазначену дату.

### Event Kinds

Це список поточних типів `Event`. Найактуальніший список завжди можна знайти в [репозиторії Nostr NIPs](https://github.com/nostr-protocol/nips).

| kind    | description                | NIP                                                            |
| ------- | -------------------------- | -------------------------------------------------------------- |
| `0`     | Metadata                   | [1](https://github.com/nostr-protocol/nips/blob/master/01.md)  |
| `1`     | Short Text Note            | [1](https://github.com/nostr-protocol/nips/blob/master/01.md)  |
| `2`     | Recommend Relay            | [1](https://github.com/nostr-protocol/nips/blob/master/01.md)  |
| `3`     | Contacts                   | [2](https://github.com/nostr-protocol/nips/blob/master/02.md)  |
| `4`     | Encrypted Direct Messages  | [4](https://github.com/nostr-protocol/nips/blob/master/04.md)  |
| `5`     | Event Deletion             | [9](https://github.com/nostr-protocol/nips/blob/master/09.md)  |
| `6`     | Reposts                    | [18](https://github.com/nostr-protocol/nips/blob/master/18.md) |
| `7`     | Reaction                   | [25](https://github.com/nostr-protocol/nips/blob/master/25.md) |
| `8`     | Badge Award                | [58](https://github.com/nostr-protocol/nips/blob/master/58.md) |
| `40`    | Channel Creation           | [28](https://github.com/nostr-protocol/nips/blob/master/28.md) |
| `41`    | Channel Metadata           | [28](https://github.com/nostr-protocol/nips/blob/master/28.md) |
| `42`    | Channel Message            | [28](https://github.com/nostr-protocol/nips/blob/master/28.md) |
| `43`    | Channel Hide Message       | [28](https://github.com/nostr-protocol/nips/blob/master/28.md) |
| `44`    | Channel Mute User          | [28](https://github.com/nostr-protocol/nips/blob/master/28.md) |
| `1063`  | File Metadata              | [94](https://github.com/nostr-protocol/nips/blob/master/94.md) |
| `1984`  | Reporting                  | [56](https://github.com/nostr-protocol/nips/blob/master/56.md) |
| `9734`  | Zap Request                | [57](https://github.com/nostr-protocol/nips/blob/master/57.md) |
| `9735`  | Zap                        | [57](https://github.com/nostr-protocol/nips/blob/master/57.md) |
| `10000` | Mute List                  | [51](https://github.com/nostr-protocol/nips/blob/master/51.md) |
| `10001` | Pin List                   | [51](https://github.com/nostr-protocol/nips/blob/master/51.md) |
| `10002` | Relay List Metadata        | [65](https://github.com/nostr-protocol/nips/blob/master/65.md) |
| `13194` | Wallet Info                | [47](https://github.com/nostr-protocol/nips/blob/master/47.md) |
| `22242` | Client Authentication      | [42](https://github.com/nostr-protocol/nips/blob/master/42.md) |
| `23194` | Wallet Request             | [47](https://github.com/nostr-protocol/nips/blob/master/47.md) |
| `23195` | Wallet Response            | [47](https://github.com/nostr-protocol/nips/blob/master/47.md) |
| `24133` | Nostr Connect              | [46](https://github.com/nostr-protocol/nips/blob/master/46.md) |
| `30000` | Categorized People List    | [51](https://github.com/nostr-protocol/nips/blob/master/51.md) |
| `30001` | Categorized Bookmark List  | [51](https://github.com/nostr-protocol/nips/blob/master/51.md) |
| `30008` | Profile Badges             | [58](https://github.com/nostr-protocol/nips/blob/master/58.md) |
| `30009` | Badge Definition           | [58](https://github.com/nostr-protocol/nips/blob/master/58.md) |
| `30017` | Create or update a stall   | [15](https://github.com/nostr-protocol/nips/blob/master/15.md) |
| `30018` | Create or update a product | [15](https://github.com/nostr-protocol/nips/blob/master/15.md) |
| `30023` | Long-form Content          | [23](https://github.com/nostr-protocol/nips/blob/master/23.md) |
| `30078` | Application-specific Data  | [78](https://github.com/nostr-protocol/nips/blob/master/78.md) |
| `30402` | Classifieds                | [99](https://github.com/nostr-protocol/nips/blob/master/99.md) |
| `31989` | Handler recommendation     | [89](https://github.com/nostr-protocol/nips/blob/master/89.md) |
| `31990` | Handler information        | [89](https://github.com/nostr-protocol/nips/blob/master/89.md) |

### Standardized Tags

| name       | value                   | other parameters  | NIP                                                                                                                            |
| ---------- | ----------------------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| e          | event id (hex)          | relay URL, marker | [1](https://github.com/nostr-protocol/nips/blob/master/01.md), [10](https://github.com/nostr-protocol/nips/blob/master/10.md)  |
| p          | pubkey (hex)            | relay URL         | [1](https://github.com/nostr-protocol/nips/blob/master/01.md)                                                                  |
| a          | coordinates to an event | relay URL         | [33](https://github.com/nostr-protocol/nips/blob/master/33.md), [23](https://github.com/nostr-protocol/nips/blob/master/23.md) |
| r          | a reference (URL, etc)  |                   | [12](https://github.com/nostr-protocol/nips/blob/master/12.md)                                                                 |
| t          | hashtag                 |                   | [12](https://github.com/nostr-protocol/nips/blob/master/12.md)                                                                 |
| g          | geohash                 |                   | [12](https://github.com/nostr-protocol/nips/blob/master/12.md)                                                                 |
| nonce      | random                  |                   | [13](https://github.com/nostr-protocol/nips/blob/master/13.md)                                                                 |
| subject    | subject                 |                   | [14](https://github.com/nostr-protocol/nips/blob/master/14.md)                                                                 |
| d          | identifier              |                   | [33](https://github.com/nostr-protocol/nips/blob/master/33.md)                                                                 |
| expiration | unix timestamp (string) |                   | [40](https://github.com/nostr-protocol/nips/blob/master/40.md)                                                                 |

## [§](#nips) NIPs

Nostr Implementation Possibility, або NIP, існують для документування того, що МАЄ, що ПОВИННО і що МОЖЕ бути реалізовано програмним забезпеченням, сумісним з релеями та клієнтами Nostr. NIPs — це документи, які описують, як працює протокол Nostr.

### Чому мені варто перейматися NIPs?

Nostr є децентралізованим і не належить централізованій службі (як Twitter). Це означає, що напрямок розвитку протоколу залежить від усіх нас! Ми можемо пропонувати та відстоювати зміни, а також надавати відгуки щодо ідей, запропонованих іншими.

Активна участь у спільноті дає вам право голосу в напрямку розвитку мережі. NIPs, опубліковані в основному репозиторії, вже затверджені. Додавання нових ідей здійснюється через Pull Request у цьому репозиторії.

### Де я можу знайти NIPs?

Ви можете побачити всі поточні NIPs у [репозиторії Nostr NIP](https://github.com/nostr-protocol/nips).
