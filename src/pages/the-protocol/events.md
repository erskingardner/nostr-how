---
title: Events
description: The basic atomic unit on the Nostr protocol
---

Events are the atomic unit of the Nostr protocol. This is a short overview of various types of events.

---

## What is an Event?

Events are the only object type on the Nostr network. There are many different kinds of events, which detail the different actions that user might take or messages that might be received.

A deeper discussion of events is beyond the scope of this site but you can see a list of the various types of events that exist in Nostr below.

## Event Kinds

| Kind        | Description                  | Covered in NIP                                                                                                               |
| ----------- | ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| 0           | Metadata                     | [1](https://github.com/nostr-protocol/nips/blob/master/01.md), [5](https://github.com/nostr-protocol/nips/blob/master/05.md) |
| 1           | Text                         | [1](https://github.com/nostr-protocol/nips/blob/master/01.md)                                                                |
| 2           | Recommend Relay              | [1](https://github.com/nostr-protocol/nips/blob/master/01.md)                                                                |
| 3           | Contacts                     | [2](https://github.com/nostr-protocol/nips/blob/master/02.md)                                                                |
| 4           | Encrypted Direct Messages    | [4](https://github.com/nostr-protocol/nips/blob/master/04.md)                                                                |
| 5           | Event Deletion               | [9](https://github.com/nostr-protocol/nips/blob/master/09.md)                                                                |
| 7           | Reaction                     | [25](https://github.com/nostr-protocol/nips/blob/master/25.md)                                                               |
| 40          | Channel Creation             | [28](https://github.com/nostr-protocol/nips/blob/master/28.md)                                                               |
| 41          | Channel Metadata             | [28](https://github.com/nostr-protocol/nips/blob/master/28.md)                                                               |
| 42          | Channel Message              | [28](https://github.com/nostr-protocol/nips/blob/master/28.md)                                                               |
| 43          | Channel Hide Message         | [28](https://github.com/nostr-protocol/nips/blob/master/28.md)                                                               |
| 44          | Channel Mute User            | [28](https://github.com/nostr-protocol/nips/blob/master/28.md)                                                               |
| 45-49       | Public Chat Reserved         | [28](https://github.com/nostr-protocol/nips/blob/master/28.md)                                                               |
| 22242       | Client Authentication        | [42](https://github.com/nostr-protocol/nips/blob/master/42.md)                                                               |
| 10000-19999 | Replaceable Events Reserved  | [16](https://github.com/nostr-protocol/nips/blob/master/16.md)                                                               |
| 20000-29999 | Ephemeral Events Reserved    | [16](https://github.com/nostr-protocol/nips/blob/master/16.md)                                                               |
| 30000-39999 | Param. Repl. Events Reserved | [33](https://github.com/nostr-protocol/nips/blob/master/33.md)                                                               |
