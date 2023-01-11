---
title: The Protocol
description: Information on how the Nostr protocol works
---

Details on how the Nostr Protocol works and why

---

## Nostr at a high level

* There are two main components: clients & relays. Each user runs a client. Anyone can run a relay.
* Every user is identified by a public key. Every post is signed. Every client validates these signatures.
* Clients fetch data from relays of their choice and publish data to relays of their choice. Relays don't talk to one another, only directly to users.
* For example, to "follow" someone a user just instructs their client to query the relays it knows for posts from that public key.
* On startup, a client queries data from all relays it knows for all users it follows (for example, all updates from the last day), then displays that data to the user chronologically.
* A "post" can contain any kind of structured data, but the most used ones are going to find their way into the standard so all clients and relays can handle them seamlessly.