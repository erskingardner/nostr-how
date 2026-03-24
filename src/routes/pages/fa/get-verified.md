---
title: با NIP-05 تایید شوید
description: چگونه هویت خود را در ناستر تایید کنید تا تیک تاییدیه بگیرید و حساب کاربری خود را راحت تر به اشتراک بگذارید.
---

## [§](#آنچه-یاد-میگیرید) آنچه در این راهنما می آموزید

ممکن است در کلاینت های گوناگون دیده باشید که برخی کابران تیک تایید دارند، درست مثل توییتر.
در NIP-05 مشخص می شود که کابران ناستر چگونه می توانند هویت خود را تایید نمایند. کلاینت های مختلف تاییدیه را با اندکی تفاوت نشان می دهند ولی این روش مهمی است تا به جامعه ناستر نشان دهید که یک کاربری واقعی هستید.

![Snort Verified](/images/snort-verified.webp)

فرایند تایید در ناستر در یک امکان اجرای ناستر Nostr Implementation Possibilities (NIP) به نام [NIP-05](https://github.com/nostr-protocol/nips/blob/master/05.md) مستند شده است.

کابر ناستر را قادر می سازد تا کلید عمومی خود را به یک آدرس شناسه اینترنتی برمبنای DNS پیوند بدهد. مکانیزم تایید مشابه وقتی است که گوگل از شما می خواهد تا مالکیت یک دامنه اینترنتی را با ثبت DNS تایید کنید.

فایده اصلی تایید آن است که به کاربر ناستر اجازه می دهد تا به جای کلید عمومی بند و سخت خوان، توسط نامی که برای انسان ها خوانا باشد شناسایی شود. این به کاربران تایید شده امکان می دهد تا هویت خود را به راحتی با دیگران به اشتراک بگذارند.

برای استفاده از NIP-05 کاربران ناستر یک nip05 url به نمایه خود می افزایند (اکثر کلاینت ها از این پشتیبانی می کنند). NIP-05 url مانند آدرس ایمیل است. bob@example.com بگذارید اجزا آن را جدا کنیم:

1. هر چیزی قبل از علامت `@` ("bob" در این مثال). این باید با نام شما در نمایه ناسترتان منطبق باشد.
2. هر چیزی پس از علامت `@` ("example.com" در این مثال). این دامنه ای است که کلاینت در آن به دنبال یک فایل `/.well-known/nostr.json` که حاوی نام کاربر و کلید عمومی اوست می گردد.

وقتی کلاینت ها یک nip05 url می بینند به دنبال فایل `/.well-known/nostr.json` در دامنه مشخص شده می گردند. این فایل باید حاوی کلید عمومی ناستر کاربر مشخص شده باشد. جزییات بیشتر را در شرح NIP-05 بخوانید.
تاییدیه گرفتن اگرچه فنی به نظر می رسد، به طور غافلگیرانه ای آسان است. بیایید ببینیم چطور انجام می شود.

## [§](#تایید-رایگان) با استفاده از خدمات رایگان تایید شوید

در حال حاضر، چند ارائه دهنده وجود دارند که به افراد کمک می کنند رایگان تایید شوند. این یک انتخاب عالی است اگر هنوز در کیف پول لایتنینگ خود سات ندارید. اگر می توانید، از این پروژه ها با اهدا حمایت کنید. ⚡🤙

-   [Nostrcheck.me](https://nostrcheck.me?utm_source=nostr.how&ref=nostr.how)
-   [zaps.lol](https://zaps.lol?utm_source=nostr.how&ref=nostr.how)
-   [Nostr-Check.com](https://nostr-check.com?utm_source=nostr.how&ref=nostr.how)
-   [Verified Nostr](https://verified-nostr.com?utm_source=nostr.how&ref=nostr.how)
-   [Cosa Nostr](https://cosanostr.com?utm_source=nostr.how&ref=nostr.how)

## [§](#تایید-پولی) برای تایید به یک تامین کننده پول بپردازید

اگر دامنه خود را ندارید یا نمی خواهید خودتان راه بیندازید، می توانید از یک خدمات NIP-05 رایگان یا پولی (معمولا فقط با اندکی [ساتوشی](https://coinmarketcap.com/alexandria/glossary/satoshi-sats?utm_source=nostr.how&ref=nostr.how)) استفاده کنید. در اینجا چند مورد آمده است:

-   [Nostrly](https://www.nostrly.com?utm_source=nostr.how&ref=nostr.how)
-   [Nostrplebs](https://nostrplebs.com?utm_source=nostr.how&ref=nostr.how)
-   [Nostr Verified](https://nostrverified.com?utm_source=nostr.how&ref=nostr.how)
-   [Alby](https://getalby.com?utm_source=nostr.how&ref=nostr.how)
-   [Nostr Directory](https://nostr.directory?utm_source=nostr.how&ref=nostr.how)
-   [Stacker News](https://stacker.news?utm_source=nostr.how&ref=nostr.how)
-   [Nostrich House](https://nostrich.house?utm_source=nostr.how&ref=nostr.how)
-   [Happy Tavern](https://happytavern.co/nostr-verified?utm_source=nostr.how&ref=nostr.how)

## [§](#خویش-میزبان) تایید با هاست خود

اگر مالک یک دامنه هستید، این یک گزینه رایگان است. فقط کافی است یک فایل `.well-known/nostr.json` به دامنه خود اضافه کنید. محتوای فایل باید این باشد:

```json
{
    "names": {
        "YOUR_NOSTR_NAME": "YOUR_NOSTR_PUBLIC_KEY"
    }
}
```

اگر بخواهید می توانید بخشی اضافه کنید تا به کلاینت ها بگوید که احتمالا شما را در کدام رله ها پیدا می کنند:

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

حتما از نسخه هگز کلید عمومی تان در فایل `nostr.json` استفاده کنید. این همان نسخه ای از کلید است که **با** `npub` شروع **نمی شود**.

می توانید از مدل زبانی مورد علاقه تان بخواهید مقدار `npub` شما را به یک "hex pubkey" تبدیل کند و با خوشحالی این کار را انجام می دهد.

در آخر، حتما مطمئن شوید که این فایل با هدر `Access-Control-Allow-Origin` روی `*` ارائه می شود، زیرا لازم است که برای کلاینت ها قابل دسترسی باشد.
