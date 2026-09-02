---
title: الحصول على توثيق NIP-05
description: كيفية توثيق هويتك على نوستر للحصول على شارة التوثيق وتسهيل مشاركة حسابك مع الآخرين.
---

## [§](#what-youll-learn) ما ستتعلمه في هذا الدليل

ربما لاحظت في العديد من التطبيقات المختلفة أن بعض المستخدمين لديهم علامات توثيق، تماماً كما هو الحال في تويتر.

يحدد معيار NIP-05 كيفية قيام مستخدمي نوستر بتوثيق هوياتهم. تعرض التطبيقات المختلفة شارة التوثيق بطرق متباينة قليلاً، ولكنها تظل وسيلة مهمة لتثبت لمجتمع نوستر أنك مستخدم حقيقي.

![توثيق Snort](/images/snort-verified.webp)

تم توثيق عملية التحقق في نوستر ضمن أحد معايير نوستر (NIPs) والمعروف باسم [NIP-05](https://github.com/nostr-protocol/nips/blob/master/05.md).

يتيح معيار NIP-05 لمستخدم نوستر ربط مفتاحه العام بمعرّف إنترنت قائم على خوادم أسماء النطاقات (DNS). وتتشابه آلية التوثيق هذه مع الطريقة التي تطلب بها Google إثبات ملكيتك لنطاق ما باستخدام سجل DNS.

تتمثل الفائدة الأساسية للتوثيق في أنه يسمح بالتعرف على مستخدم نوستر من خلال اسم مقروء وسهل الفهم، بدلاً من استخدام مفتاح عام طويل يصعب تذكره، مما يتيح للمستخدمين الموثقين مشاركة هويتهم مع الآخرين بسهولة.

وللاستفادة من معيار NIP-05، يضيف مستخدمو نوستر معرّف nip05 إلى ملفاتهم الشخصية (تدعم معظم التطبيقات هذه الخاصية). تبدو معرّفات NIP-05 شبيهة بعناوين البريد الإلكتروني، مثل: bob@example.com. دعونا نفصل أجزاء هذا المعرّف:

1. كل ما يسبق الرمز `@` (في مثالنا: "bob"): يجب أن يتطابق هذا الجزء مع قيمة حقل الاسم في ملفك الشخصي على نوستر.
2. كل ما يلي الرمز `@` (في مثالنا: "example.com"): هذا هو النطاق الذي يمكن للتطبيق الرجوع إليه للعثور على ملف `/.well-known/nostr.json` الذي يحتوي على اسم المستخدم ومفتاحه العام.

عندما تعثر التطبيقات على معرّف nip05، فإنها تبحث عن ملف `/.well-known/nostr.json` في النطاق المحدد. ويجب أن يحتوي هذا الملف على المفتاح العام للمستخدم المحدد على نوستر. يمكنك قراءة المزيد من التفاصيل في وثيقة مواصفات NIP-05.

على الرغم من أن الأمر يبدو تقنياً، إلا أن الحصول على التوثيق سهل للغاية وبشكل غير متوقع. دعونا نتعرف على كيفية القيام بذلك.

## [§](#free-verification) الحصول على التوثيق عبر خدمة مجانية

يوجد حالياً العديد من مزودي الخدمة الذين يساعدون المستخدمين في الحصول على التوثيق مجاناً، ويُعد هذا خياراً رائعاً إذا لم تكن تمتلك رصيد ساتوشي (sats) في محفظة شبكة البرق الخاصة بك بعد. وإذا أمكنك ذلك، نرجو دعم هذه المشاريع عبر التبرعات. ⚡🤙

-   [Nostrcheck.me](https://nostrcheck.me?utm_source=nostr.how&ref=nostr.how)
-   [zaps.lol](https://zaps.lol?utm_source=nostr.how&ref=nostr.how)
-   [Nostr-Check.com](https://nostr-check.com?utm_source=nostr.how&ref=nostr.how)
-   [Verified Nostr](https://verified-nostr.com?utm_source=nostr.how&ref=nostr.how)
-   [Cosa Nostr](https://cosanostr.com?utm_source=nostr.how&ref=nostr.how)

## [§](#paid-verification) الدفع لمزوّد خدمة للحصول على التوثيق

إذا لم تكن تمتلك نطاقك الخاص أو لا ترغب في إعداده بنفسك، فيمكنك الاستفادة من خدمات NIP-05 المجانية أو المدفوعة (والتي لا تكلف عادةً سوى بضع [ساتوشي (sats)](https://coinmarketcap.com/alexandria/glossary/satoshi-sats?utm_source=nostr.how&ref=nostr.how)). وإليك بعضاً منها:

-   [Nostrly](https://www.nostrly.com?utm_source=nostr.how&ref=nostr.how)
-   [Nostrplebs](https://nostrplebs.com?utm_source=nostr.how&ref=nostr.how)
-   [Nostr Verified](https://nostrverified.com?utm_source=nostr.how&ref=nostr.how)
-   [Alby](https://getalby.com?utm_source=nostr.how&ref=nostr.how)
-   [Nostr Directory](https://nostr.directory?utm_source=nostr.how&ref=nostr.how)
-   [Stacker News](https://stacker.news?utm_source=nostr.how&ref=nostr.how)
-   [Nostrich House](https://nostrich.house?utm_source=nostr.how&ref=nostr.how)
-   [Happy Tavern](https://happytavern.co/nostr-verified?utm_source=nostr.how&ref=nostr.how)

## [§](#self-hosted) التوثيق عبر الاستضافة الذاتية

إذا كنت تمتلك نطاقاً بالفعل، فهذا خيار مجاني. كل ما عليك فعله هو إضافة ملف `.well-known/nostr.json` إلى نطاقك، على أن تكون محتويات الملف كالتالي:

```json
{
    "names": {
        "YOUR_NOSTR_NAME": "YOUR_NOSTR_PUBLIC_KEY"
    }
}
```

اختيارياً، يمكنك أيضاً إضافة قسم لإعلام التطبيقات بالمرحّلات التي من المرجح أن تجدك عليها:

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

تأكد من استخدام صيغة الـ Hex لمفتاحك العام في ملف `nostr.json`؛ وهي الصيغة التي **لا** تبدأ بـ `npub`.

يمكنك أن تطلب من نموذج اللغة الكبير (LLM) المفضل لديك تحويل قيمة npub الخاصة بك إلى صيغة الـ Hex للمفتاح العام (hex pubkey) وسيقوم بذلك بكل سرور.

أخيراً، تأكد من استضافة هذا الملف وتقديمه مع ضبط ترويسة `Access-Control-Allow-Origin` على القيمة `*`، نظراً لضرورة إتاحة الوصول إليه وقراءته من قبل التطبيقات.
