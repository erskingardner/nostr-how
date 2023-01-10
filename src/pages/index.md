---
title: What is Nostr?
pageTitle: Nostr.how - A complete guide to Nostr
description: An easy to understand guide to the simplest, most decentralized social media protocol on the internet.
---

Nostr is a simple, open protocol that enables global, decentralized, and censorship-resistant social media. {% .lead %}

{% quick-links %}

{% quick-link title="Get started" icon="installation" href="/get-started" description="Create an account and join thousands of others on Nostr." /%}

{% quick-link title="The protocol" icon="presets" href="/the-protocol" description="Learn more about how the Nostr protocol works and what makes it special." /%}

{% quick-link title="Find a client" icon="plugins" href="/clients" description="Find a client (app) for the web, iOS, Andriod, or Desktop." /%}

{% quick-link title="Contribute" icon="theming" href="/contribute" description="Find out how you can help the Nostr protocol or Nostr.how" /%}

{% /quick-links %}

Possimus saepe veritatis sint nobis et quam eos. Architecto consequatur odit perferendis fuga eveniet possimus rerum cumque. Ea deleniti voluptatum deserunt voluptatibus ut non iste.

---

## What is Nostr?

Nostr is a protocol, designed for simplicity, to create a censorship-resistant global social network. Let's unpack that a little:

### Simple
The protocol is based on very simple & flexible `Event` objects (which are passed around as plain JSON) and uses standard public-key cryptography for keys & signing. This makes it easy to run relays and build clients and ensures that the protocol can be extended over time.

### Resilient
Because Nostr doesn't rely on a small number of trusted servers for moving or storing data, it's very resilient. The protocol assumes that relays will disappear and allows users to connect & publish to an arbitrary number of relays that they can change over time.

### Verifiable
Because Nostr accounts are based on [public-key cryptography](https://en.wikipedia.org/wiki/Public-key_cryptography) it's easy to verify messages were really sent by the user in question.

Like HTTP or TCP-IP, Nostr is a protocol; an open standard upon which anyone can build. Nostr is not an app or service that you sign up for.

## Why we need Nostr

Social media has developed into a key way information flows around the world. Unfortunately, our current social media systems are broken:

### Big tech social media
1. Uses your attention to sell ads
1. Uses bizarre techniques to keep you addicted (refer to point 1)
1. Decides what content to show you based on a secret algorithm that you can't inspect or change
1. Has complete control over who can participate and who is censored
1. Is overrun with spam and bots

### Mastadon (and similar)
1. User identities are attached to domain names which are controlled by third-parties.
1. These third-parties can ban you, just like centralized social media platforms. Server owners can also block other servers.
1. Migration between servers is difficult and can only be accomplished if servers cooperate.
1. There are no clear incentives to run servers, therefore they tend to be run by enthusiasts and people who want to have their name attached to a cool domain. Because of this, users are subject to the despotism of a single person, which is often worse than that of a big company like Twitter, and they can't migrate out.
1. Since servers tend to be run by amateurs, they are often abandoned. This effectively bans everybody that signed up via that server.
1. There are huge issues with data duplication across servers.
