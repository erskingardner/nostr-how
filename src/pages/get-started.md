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

You will access Nostr (the protocol) via a client. Clients can be web, desktop, or mobile apps. Some Nostr clients allow you to sign in by pasting in your private key. This is generally not recommended - it's tedious and insecure.

Instead, we will use a crypto wallet, which is a piece of software specifically designed to manage private keys.

[Alby](https://chrome.google.com/webstore/detail/alby-bitcoin-lightning-wa/iokeahhehimjnekafflcihljlcjccdbe) is a bitcoin lightning wallet that has built-in support for Nostr. It's a great option for new users.

## Let's do this!

### Step 1 – Install Alby
 Get [Alby](https://chrome.google.com/webstore/detail/alby-bitcoin-lightning-wa/iokeahhehimjnekafflcihljlcjccdbe) from the Chrome Webstore or directly from the [Alby website](https://getalby.com/).

 Once you have the extension installed create a new account. Unless you're a pro already, we recommend just creating an account on Alby and setting up a new Lightning wallet.

 ### Step 2 – Generate your Private Key

1. Once Alby is installed and you've created or connected to a lightning wallet, navigate to the Alby settings page. ![Alby settings](images/alby-settings.png)
1. Scroll to the Nostr section and click the "generate" button in the private key field. This will generate a private key and save it to your alby wallet. You can now use this private key to log into Nostr.
1. Once you've generated your private key, click the small eyeball icon to show your key. Copy the private key (which will start with `nsec`) and save it to a password manager or somewhere **very** safe. Remember, if you lose this key, it's gone forever, along with all your account data.

### Step 3 – Log into Nostr via a client

Now that you have a private key, you can log into Nostr. But remember, Nostr is only a protocol, not an application, so you will need to use a Nostr client to access the network. For this guide we'll use [Astral](https://astral.ninja), a simple twitter-like web client.

1. Navigate to [Astral](https://astral.ninja).
1. In the login popup that appears, click the "USE PUBLIC KEY FROM EXTENSION" button. ![Astral Login Step 1](images/astral-login.png)
1. Authorize key usage in the alby extension popup. ![Astral Login Step 2](images/astral-login2.png)
1. Once you confirm you'll be presented with another popup in Astral. We can see here that Alby has passed our public key to Astral. Since we don't want to store our private key on Astral should just press "Proceed" here. ![Astral Login Step 3](images/astral-login3.png)
1. Astral will then show you yet another popup telling you that your private key isn't present. Again, this is what we want so you can just hit "Close". ![Astral Login Step 4](images/astral-login4.png)
1. You are logged in! It may take a few moments for content to start loading.
1. At this point, you can copy your public key from the top left of the page. You should store this alongside your private key so you have it. ![Astral Login Step 5](images/astral-login5.png)

### Step 4 – Find friends to follow
* If you know someone is on Nostr, find their profile by searching for their public key.
* Many Twitter users are tweeting their Nostr pubkeys with the hashtag #nostr so searching this hashtag can give you a good start.
* [nostr.directory](https://nostr.directory) is a database mapping twitter users to their Nostr pubkeys.

## What does "Signing" mean?
In order to interact with the Nostr protocol you must create a cryptographic signature each time you perform an action. Think of this signature as an authentication step where you confirm that you are, indeed, who you say you are.

Most Nostr clients try to make this easy and quick (or allow you to save your private key in the client so that they can sign on your behalf anytime you do anything).

By only providing our public key above, we'll be prompted to sign anytime we want to interact with any posts or perform any updates to our profile. When that happens, Alby will automatically pop up (like it did during the sign up step) and you can confirm that you actually want to sign.

## Can I use other clients?
Yes! Now that you have created your public/private key pair, you can use this pair on any Nostr client to access your account. Remember, the client is just an interface to see messages broadcast on the Nostr protocol.

Since it's so early in Nostr's development, not all clients support all protocol features in the same way. It's worth checking out our [client comparison](/clients/comparison) to find the best client for you.

## Safely store your keys

You saved your private and public keys somewhere **very** safe, didn't you?
