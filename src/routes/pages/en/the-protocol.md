---
title: The Nostr Protocol
description: This is a high-level overview of the Nostr protocol with details on Event types and how Nostr Implementation Possibilities (NIPs) work.
---

## [§](#nostr-high-level) Nostr at the highest level

-   There are two main components to the Nostr network: [clients](/en/clients) & [relays](/en/relays).
    -   **Clients** are the interface that users use to read and write data to relays. In a social media context, think of this as the Twitter web app or mobile app. It's a client that is allowing you to read data from and write data to Twitter's centralized database.
    -   **Relays** are like databases (though they do a lot more than just store data). They allow clients to send them data and store that data in a database. Clients can then read data out of relays to be shown to users.
-   Every user is identified by a public key. Every event object (e.g. message you're posting, update to your following list, etc.) is signed. Clients validate these signatures to ensure they're correct.
-   Clients fetch data from relays and publish data to relays. The relays are almost always chosen by the user. Relays don't have to talk to one another, but might potentially in the future.
-   For example, to update your profile, you just instructs your client to send an event of kind 0 to the relays you want to use. The relays will then store that event.
-   On startup, your client queries data from the relays that you tell it to. This can be filtered to only show events for users you follow or you can ask for everything from everyone, then the client displays that data to you.
-   There are many different kinds of events. Events can contain all sorts of structured data, and the most used structures are finding their way into [Nostr Implementation Possibilities](#nips) (NIPs – protocol standards that everyone adheres to) so all clients and relays can handle them seamlessly.
-   The data that you can see on Nostr is completely dependent on the relays that you decide to connect to. See the network diagram below for more on this.

### Network diagram

![Nostr network diagram](/images/nostr-network.webp)

You can see the diagram above that we have 3 relays and 3 users. Each of the users is connecting to Nostr with a different client (and on a different Platform).

Given the reads and writes in the diagram:

-   Bob can see all of Alice's posts, but can't see anything from Mary (and doesn't even know she exists)
-   Alice can see all of Bob's posts, but can't see anything from Mary (and doesn't even know she exists)
-   Mary can see all of Bob's and Alice's posts. This is because while she only writes to Relay 3, she is reading from Relay 2, where Bob and Alice are writing their posts.

This is a very simplified situation but you can already see that the choice of which relays you want to connect to can have a large impact on who and what you'll see when using Nostr.

## [§](#events) Events

Events are the only object type on the Nostr network. Each event object has a `kind`, which denotes what sort of event it is (what sort of action a user might take or messages that might be received).

Here's what a kind 1 event looks like (kind 1 is for Short text notes – i.e. something like a Twitter tweet)

```json
{
    "id": "4376c65d2f232afbe9b882a35baa4f6fe8667c4e684749af565f981833ed6a65",
    "pubkey": "6e468422dfb74a5738702a8823b9b28168abab8655faacb6853cd0ee15deee93",
    "created_at": 1673347337,
    "kind": 1,
    "tags": [
        ["e", "3da979448d9ba263864c4d6f14984c423a3838364ec255f03c7904b1ae77f206"],
        ["p", "bf2376e17ba4ec269d10fcc996a4746b451152be9031fa48e74553dde5526bce"]
    ],
    "content": "Walled gardens became prisons, and nostr is the first step towards tearing down the prison walls.",
    "sig": "908a15e46fb4d8675bab026fc230a0e3542bfade63da02d542fb78b2a8513fcd0092619a2c8c1221e581946e0191f2af505dfdf8657a414dbca329186f009262"
}
```

-   The `id` field tells us the ID of the event
-   The `pubkey` field tells us the public key of the user who sent the event
-   The `created_at` field tells us when the event was published
-   The `kind` field tells us what sort of event it is
-   The `tags` field tells us about tags on the event. These are used for creating links, adding media, and mentioning other users or events.
-   The `content` field gives us the content of the event. In this case, the short text post.
-   The `sig` field is the signature that clients use to verify that the user with this pubkey did in fact send this event on the date specified.

### Event Kinds

There are many many different kinds of nostr events. The most up-to-date list of popular event kinds can always be found on the [Nostr NIPs repository](https://github.com/nostr-protocol/nips).

## [§](#nips) NIPs

A Nostr Implementation Possibilty, or NIP for short, exist to document what MUST, what SHOULD and what MAY be implemented by Nostr-compatible relay and client software. NIPs are the documents that outline how the Nostr protocol works.

### Why should I care about NIPs?

Nostr is decentralized and not owned by a centralized service (like Twitter). This means that the direction of the protocol is up to all of us! We can suggest and advocate for changes and offer feedback on ideas suggested by others.

Being an active part of the community gives you a say in the direction of the network. NIPs published in the main repository are already approved. Adding new ideas is done via Pull Request on that repo.

### Where can I find NIPs?

You can see all current NIPs in the [Nostr NIP repo](https://github.com/nostr-protocol/nips).
