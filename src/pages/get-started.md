---
title: Get started
description: How to get started using Nostr
---

A step-by-step guide to getting started with Nostr.

---

## Understanding keys

Each Nostr account is based on a public/private key pair. A simple way to think about this is that your public key is your username and your private key is your password, with one major caveat. Unlike a password, your private cannot be reset if lost.

Let me say that again so it's clear: **If you lose your private key your Nostr account is lost. If somene else gains access to your private key, they can take control of your account.**

Make sure you store you private key somewhere safe, like a password manager (we like [1Password](https://1password.com/)).

## Protocol vs Client

Nostr itself is just a protocol; an agreed upon procedure for passing messages around on the internet.

You will access Nostr (the protocol) via a client. Clients can be web, desktop, or mobile apps. Some Nostr clients allow you to sign in by pasting in your private key. On the web, this is generally not recommended - it's tedious and insecure. Instead, we recomment using a web-based crypto wallet, which is a piece of software specifically designed to manage private keys.

[Alby](https://chrome.google.com/webstore/detail/alby-bitcoin-lightning-wa/iokeahhehimjnekafflcihljlcjccdbe) is a bitcoin lightning wallet that has built-in support for Nostr. It's a great option for new users. We'll cover installing Alby in the client-specific guides where it's needed below.

## Let's do this!

Here are guides to a few different clients we recommend.

- [Iris](/clients/iris) (Web)
- [Damus](/clients/damus) (iOS)
- Amethyst (Android) _coming soon_

## Find friends to follow

- If you know someone is on Nostr, find their profile by searching for their public key.
- Many Twitter users are tweeting their Nostr pubkeys with the hashtag #nostr so searching this hashtag can give you a good start.
- [nostr.directory](https://nostr.directory) is a database mapping twitter users to their Nostr pubkeys.

## What does "Signing" mean?

In order to interact with the Nostr protocol you must create a cryptographic signature each time you perform an action. Think of this signature as an authentication step where you confirm that you are, indeed, who you say you are.

Most Nostr clients try to make this easy and quick (or allow you to save your private key in the client so that they can sign on your behalf anytime you do anything).

By only providing our public key above, we'll be prompted to sign anytime we want to interact with any posts or perform any updates to our profile. When that happens, Alby will automatically pop up (like it did during the sign up step) and you can confirm that you actually want to sign.

## Can I use other clients?

Yes! Now that you have created your public/private key pair, you can use this pair on any Nostr client to access your account. Remember, the client is just an interface to see messages broadcast on the Nostr protocol.

Since it's so early in Nostr's development, not all clients support all protocol features in the same way. It's worth checking out our [client comparison](/clients/comparison) to find the best client for you.
