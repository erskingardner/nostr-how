---
title: به خودحضانتی بروید
description: در این راهنما، یک راه حل ساده آموزش می دهیم برای کاهش ریسک طرف مقابل با انتقال سرمایه به کیف پول خودحضانتی.
---

## [§](#این-راهنما-برای-کیست) این راهنما برای کیست?

اکثر کاربران اکنون با یک کیف پول حضانتی مثل والت ساتوشی یا البی از ناستر استفاده می کنند.

اگر شما هم جزو آنها هستید، می خواهم اکنون به ساتوشی های توی کیف پول خود فکر کنید. حال به از دست دادن همه آن ساتوشی ها فکر کنید. اگر این فکر باعث ناراحتی یا نگرانی شما می شود، این راهنما برای شماست.
ما اینجا راه اندازی یک کیف پول خودحضانتی را آموزش می دهیم که متوانید به طور دوره ای سرمایه هایتان را برای امن نگه داشتن به آن منتقل کنید.


## [§](#چرا-خودحضانتی-مهم-است) چرا خود حضانتی مهم است?

به زبان ساده، "اگر کلیدها مال شما نیست، پس بیتکوین ها هم مال شما نیست". وقتی ساتوشی هایتان را در یک کیف پول حضانتی می گذارید تا حدودی در معرض ریسک طرف قرار می گیرید. تصور کنید اگر ولت ساتوشی به نحوی هک شود. چون آنها تمام سرمایه های مشتریان را نگه می دارند، چنین موقعیتی موجب از دست رفتن سرمایه شما می شود.
به این دلیل، به شدت توصیه می شود فقط مقدار اندکی سرمایه در _هر_ کیف پول حضانتی نگه دارید و بقیه بیتکوین هایتان را خودتان حضانت کنید.


## [§](#آماده-اید-برویم) اماده اید؟ برویم.


This is a beginners guide that doesn't require setting up your own lightning node or doing anything techcnial. Our hack here is to use the Nostr community of Bitcoiners to help you make the swap from sats on the Lightning network to self-custodied sats on the main Bitcoin base chain. Secure your stack and make friends doing peer-to-peer transactions. Double win!

If you're feeling overwhelmed by the terminology here, check out [the section at the bottom of the page](#lightning-bitcoin-on-chain-what) for more details.

1. First follow this guide to set up a new Bitcoin wallet in [Blue Wallet](https://bluewallet.io/docs/create-bitcoin-wallet/). You can also use any other self-custodial wallet.
1. Once you have very carefully saved your seed words (which is what you'll use to restore your wallet if needed), you are ready to find someone to do a swap with.
1. The easiest way to do this is to post a note mentioning the tags #plebchain and #bitcoin mentioning that you'd like to swap some lightning sats for on-chain sats. Don't be shy about directly messaging folks that talk about bitcoin regularly. You can also [ping me directly](https://primal.net/jeffg) if needed.
1. From there, you'll make a plan directly with the person you're going to swap with. Before you go through any swap, take time to get to know the person a bit, because there is no escrow in Bitcoin, you need to be comfortable that you're dealing with someone you can trust to complete the transaction. Generally the process looks something like this:
    1. Agree on an amount to swap.
    1. Give your newly created wallet address (in Blue Wallet) to the person via DM.
    1. You zap sats to the person via your Nostr client.
    1. They will initiate an onchain transaction to pay you that same amount of sats (potentially minus any transaction fee).
    1. Remember, this on-chain transaction will take some time. Your trade partner can (and should) send you the transaction ID as soon as they have it so that you can follow along on [mempool.space](https://mempool.space).
1. That's it! You're done. Once the funds arrive you'll have successfully taken self-custody of your first Bitcoin. Treat it with respect and take good care of it.

## [§](#lightning-bitcoin-on-chain-what) Lightning? Bitcoin? On-chain? What?

If this all sounds like greek to you don't worry. Before we get into the guide, let's quickly cover some terminology.

### Bitcoin

This rabbit hole has no known bottom. That said, if you're new to Bitcoin the only thing that you really need to know is that Bitcoin is a completely decentralized form of electronic money. It isn't controlled by any one person or entity and runs based on rules coded into the software, instead of being dependent on politics and governements. Bitcoin is the only truly decentralized and rules-based electronic money.

Bitcoin prioritizes certainty over speed. This means that transactions cost a little in fees and take some time to confirm but once they're confirmed, they are completely irreversible and no one can take your coins or censor your transaction.

If you'd like to learn more, here are some great starter resources for going deeper on Bitcoin.

1. [Bitcoin.org guide](https://bitcoin.org/en/how-it-works)
1. [Bitcoiner beginner guide](https://bitcoiner.guide/beginner/)

### Lightning

Lightning is a payments layer that runs on top of Bitcoin. Fundamentally, you're still making payments using Bitcoin as the money but Lightning allows for near-instant and extremely low-fee transactions. Because of this, the Lightning network has opened up many new use-cases involving micropayments. The details of how Lightning works is beyond the scope of this intro guide but here are a few resources if you're keen to learn more:

1. [Bitcoiner Lightning Guide](https://bitcoiner.guide/lightning/)
1. [Lightning Labs Overview](https://docs.lightning.engineering/the-lightning-network/overview)

### On-chain vs Off-chain

You'll often hear people refer to on-chain vs off-chain Bitcoin. When people talk about on-chain transations, they are simply referring to making transactions using the base Bitcoin blockchain (remember; this is slower, but 100% final & certain). When people refer to off-chain transactions, they are most often referring to Lightning.

### Custodial vs Self-custodial

For those new to Bitcoin, this concept might seem foreign. After all, most of us (at least in the developed world) have only ever used custodial services, like banks, to store our money. But as we've seen recently (and regularly in less developed financial markets around the world), keeping your money with a custodian has risks. Banks fail (Silicon Valley Bank, etc.) and custodians can make poor decisions and lose your money (FTX, Voyager, etc.).

When you take custody of your Bitcoin you only have to put trust in yourself to store you bitcoin safely. You have total control.

But with great power comes great responsiblity. While self-custody is the gold-standard for storing larger amounts of money securely, it can limit how you can use your money day-to-day. Most people use a combination of custodial and self-custody solutions; keeping large amounts in a self-custody way and keeping a small amount of funds in a custodial wallet for daily use.
