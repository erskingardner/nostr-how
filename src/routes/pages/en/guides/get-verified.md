---
title: Get NIP-05 verified
description: How to verify your identity on Nostr to get a verification checkmark and an easier way to share your account.
---

## [§](#what-youll-learn) What you'll learn in this guide

You might have noticed on many different clients that some users have checks, just like on Twitter.

NIP-05 specifies how Nostr users can verify their identities. Different clients show verification in slightly different ways but it's an important way of showing the Nostr community that you're a real user.

![Snort Verified](/images/snort-verified.webp)

The verification process on Nostr is documented in a Nostr Implementation Possibilities (NIP) called [NIP-05](https://github.com/nostr-protocol/nips/blob/master/05.md).

NIP-05 enables a Nostr user to map their public key to a DNS-based internet identifier. The verification mechanism is similar to how Google requires you to verify your ownership of a domain using a DNS record.

The major benefit of verification is that it allows a Nostr user to be identified by a human-readable name, instead of a long, hard-to-remember public key. This enables verified Nostr users to easily share their identity with others.

To utilize NIP-05, Nostr users add a nip05 url to their profile (most clients have support for this). NIP-05 urls look like emails – bob@example.com. Let's break down the parts:

1. Everything before the `@` symbol ("bob", in our example). This must match the value of the name field in your Nostr profile.
1. Everything after the `@` symbol ("example.com", in our example). This is the domain where the client can look to find a `/.well-known/nostr.json` file that contains the user's name & public key.

When clients see a nip05 url, they will look for a `/.well-known/nostr.json` file at the specified domain. This file must contain the nostr public key for the specified user. Read more specifics in the NIP-05 spec.

While it sounds technical, it's suprisingly easy to get verified. Let's see how to do it.

## [§](#free-verification) Get verified through a free service

At the moment, there are several providers who are helping folks get verified for free. This is great option if you don't have sats in your lightning wallet yet. If possible, support these projects via donations. ⚡🤙

-   [Bitcoin Nostr](https://bitcoinnostr.com/)
-   [Nostrcheck.me](https://nostrcheck.me)
-   [zaps.lol](https://zaps.lol/)
-   [NIP05.social](https://nip05.social)
-   [Nostr-Check.com](https://nostr-check.com/)
-   [Verified Nostr](https://verified-nostr.com/)
-   [Cosa Nostr](https://cosanostr.com)

## [§](#paid-verification) Pay a provider for verification

If you don't have your own domain or don't want to set it up yourself, you can take advantage of a free or paid (usually just a few [sats](https://coinmarketcap.com/alexandria/glossary/satoshi-sats)) NIP-05 service. Here are a few:

-   [Nostrplebs](https://nostrplebs.com)
-   [Nostr Verified](https://nostrverified.com)
-   [Alby](https://getalby.com)
-   [Nostr Directory](https://nostr.directory)
-   [Nostr.band](https://nip05.nostr.band)
-   [Nostr.com.au](https://nostr.com.au)
-   [Vida](https://Vida.page)
-   [Stacker News](https://stacker.news)
-   [Nostrich House](https://nostrich.house)

## [§](#self-hosted) Self hosted verification

If you already own a domain, this is a free option. You just need to add a `.well-known/nostr.json` file to your domain. The contents of the file should be the following:

```json
{
    "names": {
        "YOUR_NOSTR_NAME": "YOUR_NOSTR_PUBLIC_KEY"
    }
}
```

Optionally you can also add a section to let clients know which relays they are likely to find you on:

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

Make sure you use the hex version of your public key in your `nostr.json` file. This is the version of the key that **doesn't** start with `npub`.

You can convert your key on [Nostr.band](https://nostr.band)

![Get your hex key](/images/get-hex-key.webp)

Finally, make sure this file is served with the `Access-Control-Allow-Origin` header set to `*` as it needs to be accessible by clients.
