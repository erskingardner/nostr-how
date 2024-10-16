---
title: What are Nostr Relays?
description: A quick overview of what Nostr relays are, why are they important, and how they work.
---

## What are relays?

Relays are like the backend servers for Nostr. They allow Nostr clients to send them messages, and they may (or may not) store those messages and broadcast those messages to all other connected clients.

The world of relays is changing fast so expect many changes here in the future. One thing to note, because Nostr is decentralized and depends on relays to store and retreive data, if you notice that your Nostr client feels slow, it's most likely due to the relays that you're using. It might be worth adding a few more relays (or removing a few) to your client.

## Paid vs Free relays

Many relays are currently free to use. Given the costs of running a relay (paying for compute, storage, and bandwidth), most people expect that paid relays will be the norm in the future.

One major benefit of using paid relays now is the higher signal of users and notes on paid relays. The "proof of work" of paying for relay access is something that helps keep spam accounts from infesting the network.

### Popular paid relays

An up-to-date list of paid relays with details on how much they cost and who operates them can be found on [Relay Exchange](https://relay.exchange/)

### Where can I find a list of all relays?

The best resource we've found for browsing and assessing the speed of known relays is the [Nostr.watch site](https://legacy.nostr.watch/relays/find).

## What happens if all the relays I use stop working?

If _all_ the relays that you have used in the past go offline, all your posts will be unretrievable. This is one reason that Nostr allows users to connect to many relays – this ensures some degree of backup. That said, if you're really interested in being uncensorable, you can and should run your own personal relay.

## Should I run my own relay?

For most people, no, it's not worth the hassle. That said, if you're technical and want to ensure that your speech is absolutely uncensorable or want to run a private relay for a small group, then you can and should run your own relay. This ensures that you always have a copy of all your Nostr posts and interactions for all time. We're working on a guide to this but in the meantime, [here is a guide](https://andreneves.xyz/p/set-up-a-nostr-relay-server-in-under) from Andre Neves on how to set up a Nostr relay.
