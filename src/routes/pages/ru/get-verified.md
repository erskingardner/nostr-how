---
title: Верификация NIP-05
description: Как верифицировать учётную запись Nostr, получить подтверждающий значок и легко делиться своим аккаунтом.
---

## [§](#what-youll-learn) Что вы узнаете из этого руководства

Вы уже могли заметить во многих клиентах, что некоторые пользователи отмечены значком верификации — как в Twitter.

NIP-05 определяет способ подтверждения личности пользователей Nostr. Разные клиенты отображают верификацию по-разному, но в любом случае она помогает показать сообществу Nostr, что за учётной записью стоит реальный человек.

![Snort Verified](/images/snort-verified.webp)

Процесс верификации описан в документе Nostr Implementation Possibilities (NIP) под названием [NIP-05](https://github.com/nostr-protocol/nips/blob/master/05.md).

NIP-05 позволяет связать публичный ключ Nostr с интернет-идентификатором на основе DNS. Этот механизм похож на подтверждение владения доменом через DNS-запись, которое использует, например, Google.

Главное преимущество верификации заключается в том, что вместо длинного и неудобного публичного ключа пользователь может использовать понятное человеку имя. Благодаря этому делиться своим профилем становится значительно проще.

Для использования NIP-05 необходимо указать в профиле адрес nip05 (большинство клиентов поддерживают эту возможность). Такой адрес выглядит как адрес электронной почты — bob@example.com, например. Давайте разберемся в его частях:

1. всё до символа `@` («bob» в нашем примере) должно совпадать со значением поля имени в вашем профиле Nostr;
1. всё после символа `@` («example.com» в нашем примере) — это домен, на котором клиент сможет найти файл `/.well-known/nostr.json`, содержащий имя пользователя и его публичный ключ.

Когда клиент видит адрес nip05, он пытается получить файл `/.well-known/nostr.json` с указанного домена. Этот файл должен содержать публичный ключ Nostr для соответствующего пользователя. Более подробную информацию можно найти в спецификации NIP-05.

Хотя всё это звучит довольно технически, пройти верификацию на удивление просто. Рассмотрим несколько способов.

## [§](#free-verification) Бесплатная верификация через сторонний сервис

В настоящее время существует несколько сервисов, которые позволяют получить верификацию бесплатно. Это отличный вариант, если у вас пока нет сатоши. Если есть возможность, поддержите эти проекты пожертвованием. ⚡🤙

-   [Nostrcheck.me](https://nostrcheck.me?utm_source=nostr.how&ref=nostr.how)
-   [zaps.lol](https://zaps.lol?utm_source=nostr.how&ref=nostr.how)
-   [Nostr-Check.com](https://nostr-check.com?utm_source=nostr.how&ref=nostr.how)
-   [Verified Nostr](https://verified-nostr.com?utm_source=nostr.how&ref=nostr.how)
-   [Cosa Nostr](https://cosanostr.com?utm_source=nostr.how&ref=nostr.how)

## [§](#paid-verification) Платная верификация через сторонний сервис

Если у вас нет собственного домена или вы не хотите настраивать всё самостоятельно, можно воспользоваться одним из сервисов NIP-05. Некоторые из них бесплатны, другие берут символическую плату — обычно всего несколько [сатоши](https://coinmarketcap.com/alexandria/glossary/satoshi-sats?utm_source=nostr.how&ref=nostr.how). Вот несколько популярных вариантов:

-   [Nostrly](https://www.nostrly.com?utm_source=nostr.how&ref=nostr.how)
-   [Nostrplebs](https://nostrplebs.com?utm_source=nostr.how&ref=nostr.how)
-   [Nostr Verified](https://nostrverified.com?utm_source=nostr.how&ref=nostr.how)
-   [Alby](https://getalby.com?utm_source=nostr.how&ref=nostr.how)
-   [Nostr Directory](https://nostr.directory?utm_source=nostr.how&ref=nostr.how)
-   [Stacker News](https://stacker.news?utm_source=nostr.how&ref=nostr.how)
-   [Nostrich House](https://nostrich.house?utm_source=nostr.how&ref=nostr.how)
-   [Happy Tavern](https://happytavern.co/nostr-verified?utm_source=nostr.how&ref=nostr.how)

## [§](#self-hosted) Самостоятельная верификация

Если у вас уже есть собственный домен, этот вариант не потребует дополнительных расходов. Нужно лишь разместить на домене файл `.well-known/nostr.json` следующего содержания:

```json
{
    "names": {
        "YOUR_NOSTR_NAME": "YOUR_NOSTR_PUBLIC_KEY"
    }
}
```
При желании можно также добавить информацию об узлах, на которых вас можно найти:

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

Имейте в виду, что в файле `nostr.json` необходимо использовать публичный ключ в шестнадцатеричном формате (hex). Это версия ключа, которая **не** начинается с `npub`.

Если у вас есть только ключ с `npub`, вы можете попросить любимую языковую модель преобразовать его в шестнадцатеричный публичный ключ.

Наконец, убедитесь, что ваш веб-сервер отдаёт этот файл с HTTP-заголовком `Access-Control-Allow-Origin: *`. Это необходимо для того, чтобы клиенты Nostr могли получить к нему доступ.
