---
title: Clients
description: An overview of how Nostr clients work and a comparison of the available clients
---

Clients are the way that you access and interact with the Nostr protocol.

---

## What's a client?

A client in Nostr is just the app that you use to access and interact with the protocol. It's like the Twitter iOS app or web app that you use to interact with Twitter's feed of tweets.

Because the Nostr protocol is very simple and flexible, different clients have focused on implementing different aspects of the protocol in slightly different ways. For example, some clients focus on beautiful and usable UI, others focus more on enabling lighting payments, still others focus on Nostr for creative use cases like playing chess (Yes, you can play chess via the Nostr protocol).

## Can I switch clients?

Yes. Because a client is just a way to access the underlying data held by relays, you can switch clients or sign into as many clients as you'd like. As long as each client is looking at the same set of relays for their data, you'll see the same messages in each client.

## Should I enter my private key in the client?

We strongly recommend that you don't enter your private key into any client. Most clients that ask for private keys do their absolute best to keep your key secure but given the nature of software, there are always breaches, exploits, and bugs that could potentially expose your private key. Remember, your private key is your identity in Nostr, so if it is compromised, you'll have to start from scratch rebuilding your identity, and you'll lose your list of followers and all your private messages. Sharing your private key with a client just isn't worth that risk.
