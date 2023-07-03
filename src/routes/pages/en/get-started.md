---
title: Get started with Nostr
description: This guide will help you understand the basics of Nostr and get you all set up and ready to use Nostr with a new account. We’ll cover how to create a new lightning wallet, create an account, and sign into a client safely.
---

## [§](#understanding-keys) Understanding keys

Each Nostr account is based on a public/private key pair. A simple way to think about this is that your public key is your username and your private key is your password, with one major caveat. Unlike a password, your private key cannot be reset if lost.

Let me say that again so it's clear: **If you lose your private key your Nostr account is lost. If somene else gains access to your private key, they can take control of your account.**

Make sure you store you private key somewhere safe, like a password manager (we like [1Password](https://1password.com/)).

## [§](#protocol-vs-client) Protocol vs Client

Nostr itself is just a protocol; an agreed upon procedure for passing messages around on the internet.

You will access Nostr (the protocol) via a client. Clients can be web, desktop, or mobile apps. Some Nostr clients allow you to sign in by pasting in your private key. On the web, this is generally not recommended - it's tedious and insecure. Instead, we recommend using a web-based crypto wallet, which is a piece of software specifically designed to manage private keys.

[Alby](https://chrome.google.com/webstore/detail/alby-bitcoin-lightning-wa/iokeahhehimjnekafflcihljlcjccdbe) is a bitcoin lightning wallet that has built-in support for Nostr. It's a great option for new users. We'll cover installing Alby in the client-specific guides where it's needed below.

## [§](#create-your-account) Create your account

Here are step-by-step guides to a few different clients we recommend:

-   [Iris](/en/guides/iris) (Web)
-   [Damus](/en/guides/damus) (iOS)
-   [Amethyst](/en/guides/amethyst) (Android)

A few other clients that we love but don't have guides for:

-   [Snort](https://snort.social/) (Web) Super clean and fast web client.
-   [Coracle](https://coracle.social/) (Web) A client focused on relay navigation.
-   [Nostrgram](https://nostrgram.co) (Web) Fun instagram inspired client focused on images, video, and audio. Bring on the memes!

## [§](#find-friends) Find friends to follow

-   If you know someone is on Nostr, find their profile by searching for their public key.
-   Many Twitter users are tweeting their Nostr pubkeys with the hashtag #nostr so searching this hashtag can give you a good start.
-   [nostr.directory](https://nostr.directory) is a database mapping twitter users to their Nostr pubkeys.

## [§](#whats-signing) What does "Signing" mean?

In order to interact with the Nostr protocol you must create a cryptographic signature each time you perform an action. Think of this signature as an authentication step where you confirm that you are, indeed, who you say you are.

Most Nostr clients try to make this easy and quick (or allow you to save your private key in the client so that they can sign on your behalf anytime you do anything).

By only providing our public key above, we'll be prompted to sign anytime we want to interact with any posts or perform any updates to our profile. When that happens, Alby will automatically pop up (like it did during the sign up step) and you can confirm that you actually want to sign.

## [§](#can-i-use-other-clients) Can I use other clients?

Yes! Now that you have created your public/private key pair, you can use this pair on any Nostr client to access your account. Remember, the client is just an interface to see messages broadcast on the Nostr protocol.

## [§](#next-steps) Next steps

Great, now you're set up with a lightning wallet, an identity (your keypair), and have tried out a client. Here are a few links that might be handy as you venture further into Nostr:

-   [Verify your identity](/en/guides/get-verified)
-   [What are Relays and how do they work?](/en/relays)
-   [Learn more about NIPs and the development of the protocol](/en/the-protocol)
