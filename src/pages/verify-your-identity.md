---
title: Verify your Identity
description: How to verify your identity on Nostr
---

How to verify your identity on Nostr and get a verification checkmark and an easier way to share your account

---

## NIP-05 Verification

You might have noticed on Astral (and other clients) that some users have checks, just like on Twitter.

![Astral Verified](/images/webp/astral-verified.webp)

The verification process on Nostr is documented in a Nostr Implementation Possibilities (NIP) called [NIP-05](https://github.com/nostr-protocol/nips/blob/master/05.md).

NIP-05 enables a Nostr user to map their public key to a DNS-based internet identifier. The verification mechanism is similar to how Google requires you to verify your ownership of a domain using a DNS record.

The major benefit of verification is that it allows a Nostr user to be identified by a human-readable name, instead of a long, hard-to-remember public key. This enables verified Nostr users to easily share their identity with others.

To utilize NIP-05, Nostr users add a nip05 url to their profile (most clients have support for this). NIP-05 urls look like emails – bob@example.com. Let's break down the parts:

1. Everything before the `@` symbol ("bob", in our example). This must match the value of the name field in your Nostr profile.
1. Everything after the `@` symbol ("example.com", in our example). This is the domain where the client can look to find a `/.well-known/nostr.json` file that contains the user's name & public key.

When clients see a nip05 url, they will look for a /.well-known/nostr.json file at the specified domain. This file must contain the nostr public key for the specified user. Read more specifics in the NIP-05 spec.

While it sounds technical, it's suprisingly easy to get verified. Let's see how to do it.

### Option 1: Pay a provider for verification

If you don't have your own domain or don't want to set it up yourself, you can take advantage of a NIP-05 service, such as [nostrplebs.com](https://nostrplebs.com). In exchange for a handful of [sats](https://coinmarketcap.com/alexandria/glossary/satoshi-sats), you can add your public key to thier `nostr.json`.

### Option 2: Self hosted verification

If you already own a domain, this is a free option. You just need to add a `.well-known/nostr.json` file to your domain. The contents of the file should be the following:

```json
{
  "names": {
    "YOUR_NOSTR_NAME": "YOUR_NOSTR_PUBLIC_KEY"
  }
}
```

Make sure this file is served with the `Access-Control-Allow-Origin` header set to `*` as it needs to be accessible by clients.
