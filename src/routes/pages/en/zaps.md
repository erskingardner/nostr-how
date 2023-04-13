---
title: What are Zaps?
description: Learn about what Zaps are, how they work, and what you need to use them on your Nostr client.
---

## [§](#the-basics) The basics

The simplest way to think about Zaps is that they are simply tips. Tips which are transmitted over the [Lightning network](https://www.investopedia.com/terms/l/lightning-network.asp) at the speed of light with basically no transaction fees.

From the beginning of the Nostr protocol, it was common to see Lightning invoices in notes. Since [NIP-57](https://github.com/nostr-protocol/nips/blob/master/57.md) was implemented, Zaps have become the main way that value is transmitted in Nostr notes. Let's take a closer look at what NIP-57 implemented and how Zaps work.

## [§](#nip-57) NIP-57

[NIP-57](https://github.com/nostr-protocol/nips/blob/master/57.md) is the document that describes how Zaps should be implemented. It creates two new kinds of notes, kind 9735 (A Zap) and kind 9734 (A Zap request). In concert these two kinds make it possible for Nostr clients to request Zap invoices from LNURL servers and pay them. The NIP-57 spec also describes how Lightning wallets that receive Zap payments should create notes to be sent to relays.

💡 Fun fact, the note kind chosen for Zaps is the same as the networking port (9735) that Lightning uses.

## [§](#how-zaps-work) How Zaps work

![Zap flowchart](/images/zap-flow.webp)

We won't get into the deep technical weeds here but for the curious among you, let's look at the basic mechanics of how Zaps work.

1. When you click or tap on the little ⚡ icon in your client (Damus, Iris, Amethyst, etc), the first thing that happens is that the client pings the [LNURL server](https://thebitcoinmanual.com/articles/what-is-ln-url-and-how-does-it-work/) that sits in front of lightning wallet of the person that you're trying to Zap. The first request goes something like, "Hi there, I would love to give Alice some sats."
1. The LNURL server responds and, if Alice's wallet supports Zaps, it will tell the client so and send/confirm Alice's public key.
1. At this point, the client does a little work to put together a Zap request (a kind 9734 note) with data about the profile or note that it would like to Zap, the amount, the relays it should broadcast the note to, and a few other things. This is effectively a request for an invoice from the LNURL server.
1. The LNURL server responds with the requested invoice.
1. At this point the client will hand that invoice off to the user's lightning wallet to be paid. If you are using a wallet like Alby in the browser (and have set a budget) this process can happen very quickly.
1. Once the user has paid the invoice directly to the wallet of the person they're zapping, the receiver's wallet will create a kind 9735 note and then broadcast that to the relays specified earlier in the Zap request.
1. Relays receiving this note will then be able to tell connected clients about the zap and clients and show the zap to users in their UI.

And this all happens in just a few seconds and costs a tiny fraction of a penny.

## [§](#how-to-send-and-receive) How do I send and receive Zaps?

To Zap other people in Nostr, you need just two things:

1. A Zap-compatible lightning wallet (like [Alby](https://getalby.com/) or [Wallet of Satoshi](https://www.walletofsatoshi.com/))
1. A client that has implemented Zaps (like [Damus](/en/guides/damus), [Amethyst](/en/guides/amethyst), [Iris](/en/guides/iris), or [Snort](https://snort.social))

The only other thing that you need to do is make sure you have your lightning address set in your Nostr profile. This is the address where you'll receive Zaps.

Keep in mind, it's possible to pay for Zaps from a wallet/address other than the address you have set in your profile to receive Zaps.

For example, imagine the following:

1. You have a [Stacker News](https://stacker.news/) lightning address set in your Nostr profile, this is where you'll receive any zapped sats.
1. In your web browser, you use Iris as your client and pay for Zaps using your Alby wallet via their chrome extension
1. On mobile, you use Damus as your client and pay for Zaps using the Wallet of Statoshi app.
