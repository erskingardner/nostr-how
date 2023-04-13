---
title: What are Nostr Clients?
description: An overview of what Clients are in Nostr and a comparison of a few of our favorites.
---

## What's a client?

A client in Nostr is just the app that you use to access and interact with the protocol. It's like the Twitter iOS app or web app that you use to interact with Twitter's feed of tweets.

Because the Nostr protocol is very simple and flexible, different clients have focused on implementing different aspects of the protocol in slightly different ways. For example, some clients focus on beautiful and usable UI, others focus more on enabling lighting payments, still others focus on Nostr for creative use cases like playing chess (Yes, you can [play chess](https://jesterui.github.io/) via the Nostr protocol).

Most of the clients that have been built so far are centered around the social media use-case. But we're starting to see more interesting use cases.

A few examples:

-   [Jester](https://jesterui.github.io/): Play chess on Nostr
-   [Habla](https://habla.news/): Long-form content – like Medium
-   [Nostrgram](https://nostrgram.co/): Media focused social client

## Can I switch clients?

Yes. Because a client is just a way to access the underlying data held by relays, you can switch clients or sign into as many clients as you'd like. As long as each client is looking at the same set of relays for their data, you'll see the same messages in each client.

## Should I enter my private key in the client?

Generally, it's better not to enter your private key into any client. Most clients that ask for private keys do their absolute best to keep your key secure but given the nature of software, there are always breaches, exploits, and bugs that could potentially expose your private key.

Remember, your private key is your identity in Nostr, so if it is compromised, you'll have to start from scratch rebuilding your identity, and you'll lose your list of followers and all your private messages.

## A few of our favorite clients

### Web

-   [Iris](https://iris.to) – This is our recommended client for new users. [Check out our guide here](/en/guides/iris).
-   [Snort](https://snort.social/)
-   [Nostrgram](https://nostrgram.co/)

### Desktop

-   [Gossip](https://www.github.com/mikedilger/gossip) – Gossip is a very opinionated desktop client that requires a bit more technical knowledge to use. The payoff is that it gives users more control over how they interact with Nostr.

### iOS

-   [Damus](https://apps.apple.com/app/damus/id1628663131) – This is the first & best iOS client for Nostr. [Check out our guide here](/en/guides/damus).

### Android

-   [Amethyst](https://play.google.com/store/apps/details?id=com.vitorpamplona.amethyst) – A beautiful client for Android. [Check out our guide here](/en/guides/amethyst).
