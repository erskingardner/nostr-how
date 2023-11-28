---
title: Het Nostr protocol
description: Dit is een compleet overzicht over het Nostr protocol met details over verschillende Event types, Kinds en Tags. We leggen ook uit hoe Nostr Implementation Possibilities (NIPs) werken.
---

## [§](#nostr-high-level) Nostr op het hoogte niveau

-   Er zijn twee hoofd componenten op het Nostr netwerk: [clients](/nl/clients) & [relays](/nl/relays).
    - **Clients** bieden een interface die gebruikt wordt om gegevens te lezen en te schrijven naar relays. In de context van sociale media kun je dit zien als de Twitter webapp of mobiele app. Dat is een client waarmee je gegevens kunt lezen van en schrijven naar de gecentraliseerde database van Twitter.
    - **Relays** zijn net databases (hoewel ze veel meer doen dan alleen gegevens opslaan). Ze ontvangen gegevens van clients, slaan die op in een database en sturen deze vervolgens weer door naar andere clients die erom vragen om te tonen aan hun gebruikers. 
-   Elke gebruiker wordt geïdentificeerd door een publieke sleutel. Elke event (bv. een bericht dat je post, een update van je volglijst, etc.) Clients valideren deze handtekeningen met jouw publieke sleutel om er zeker van te zijn dat ze correct zijn.
-   Client halen gegevens op van relays en publiceren gegevens naar reayls. De srelays worden bijna altijd gekozen door de gebruiker. Relays hoeven niet met elkaar te praten, maar dat zou in de toekomst wel kunnen.
-   Als je bijvoorbeeld je profiel bijwerkt in een client, verstuur je een event van het type (kind) 0 naar de relays die je hebt ingesteld. De relays slaan die event dan op.
-   Bij het opstarten vraagt je client gegevens op van de relays. Dit kan worden gefilterd om alleen events weer te geven van gebruikers die je volgt of je kunt alles van iedereen opvragen, waarna de client je die gegevens toont.
-   Er zijn veel verschillende soorten events. Events kunnen allerlei soorten gestructureerde gegevens bevatten en de meest gebruikte structuren vind je terug in zogenaamde [Nostr Implementation Possibilities](#nips) (NIP's - een protocol standaard waar iedereen zich aan houdt) zodat alle clients en relays ze naadloos kunnen verwerken. Hierdoor worden alle gegevens interoperabel.
-   De gegevens die je op Nostr kunt zien, zijn volledig afhankelijk van de relays waarmee je verbinding wilt maken. Zie het netwerkdiagram hieronder voor meer informatie.

### Netwerk diagram

![Nostr network diagram](/images/nostr-network.webp)

Je kunt in het bovenstaande diagram zien dat we 3 relays en 3 gebruikers (clients) hebben. Elk van de gebruikers maakt verbinding met Nostr met een andere client (en op een ander platform).

Gegeven de reads en writes in het diagram:

-   Bob kan alle berichten van Alice zien, maar ziet niets van Mary (en weet niet eens dat ze bestaat)
-   Alice kan alle berichten van Bob zien, maar ziet niets van Mary (en weet niet eens dat ze bestaat)
-   Mary kan alle berichten van Bob en Alice zien. Dit komt omdat ze, terwijl ze alleen naar relay 3 schrijft, leest vanaf relay 2, waar Bob en Alice hun berichten schrijven.

Dit is een erg vereenvoudigde weergave, maar je kunt al zien dat de keuze met welke relays je verbinding wilt maken een grote invloed kan hebben op wie en wat je te zien krijgt als je Nostr gebruikt.

## [§](#events) Events

Events zijn het enige objecttype op het Nostr netwerk. Elke event heeft een `kind`, waarmee wordt aangegeven om wat voor soort event het gaat (wat voor soort actie een gebruiker zou kunnen ondernemen of berichten die zouden kunnen worden ontvangen).

Zo ziet een kind 1 event eruit (kind 1 is een korte tekstnotities - vergelijkbaar met een Twitter bericht)

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

-   Het `id` veld toont de unieke ID van de event
-   Het `pubkey` veld toont de public key van de afzender
-   Het `created_at` veld toont wanneer het event is gepubliceerd
-   Het `kind` veld toont om wat voor soort event het gaat
-   Het `tags` veld bevat tags bij het evenement. Deze worden gebruikt voor het maken van links, het toevoegen van media en het vermelden van andere gebruikers of evenementen.
-   Het `content` veld bevat de content. In dit geval een korte tekst notitie.
-   Het `sig` veld is de handtekening die clients gebruiken om te verifiëren dat de gebruiker met deze pubkey dit evenement daadwerkelijk op de gespecificeerde datum heeft verzonden.

### [§](#kinds) Event Kinds

Dit is een lijst van huidige soorten events. De meest actuele lijst is altijd te vinden op de [Nostr NIPs repository](https://github.com/nostr-protocol/nips) en wordt wekelijks bijgewerkt.

| kind    | description                | NIP                                                            |
| ------- | -------------------------- | -------------------------------------------------------------- |
| `0`     | Metadata                   | [1](https://github.com/nostr-protocol/nips/blob/master/01.md)  |
| `1`     | Short Text Note            | [1](https://github.com/nostr-protocol/nips/blob/master/01.md)  |
| `2`     | Recommend Relay            | [1](https://github.com/nostr-protocol/nips/blob/master/01.md)  |
| `3`     | Contacts                   | [2](https://github.com/nostr-protocol/nips/blob/master/02.md)  |
| `4`     | Encrypted Direct Messages  | [4](https://github.com/nostr-protocol/nips/blob/master/04.md)  |
| `5`     | Event Deletion             | [9](https://github.com/nostr-protocol/nips/blob/master/09.md)  |
| `6`     | Reposts                    | [18](https://github.com/nostr-protocol/nips/blob/master/18.md) |
| `7`     | Reaction                   | [25](https://github.com/nostr-protocol/nips/blob/master/25.md) |
| `8`     | Badge Award                | [58](https://github.com/nostr-protocol/nips/blob/master/58.md) |
| `40`    | Channel Creation           | [28](https://github.com/nostr-protocol/nips/blob/master/28.md) |
| `41`    | Channel Metadata           | [28](https://github.com/nostr-protocol/nips/blob/master/28.md) |
| `42`    | Channel Message            | [28](https://github.com/nostr-protocol/nips/blob/master/28.md) |
| `43`    | Channel Hide Message       | [28](https://github.com/nostr-protocol/nips/blob/master/28.md) |
| `44`    | Channel Mute User          | [28](https://github.com/nostr-protocol/nips/blob/master/28.md) |
| `1063`  | File Metadata              | [94](https://github.com/nostr-protocol/nips/blob/master/94.md) |
| `1984`  | Reporting                  | [56](https://github.com/nostr-protocol/nips/blob/master/56.md) |
| `9734`  | Zap Request                | [57](https://github.com/nostr-protocol/nips/blob/master/57.md) |
| `9735`  | Zap                        | [57](https://github.com/nostr-protocol/nips/blob/master/57.md) |
| `10000` | Mute List                  | [51](https://github.com/nostr-protocol/nips/blob/master/51.md) |
| `10001` | Pin List                   | [51](https://github.com/nostr-protocol/nips/blob/master/51.md) |
| `10002` | Relay List Metadata        | [65](https://github.com/nostr-protocol/nips/blob/master/65.md) |
| `13194` | Wallet Info                | [47](https://github.com/nostr-protocol/nips/blob/master/47.md) |
| `22242` | Client Authentication      | [42](https://github.com/nostr-protocol/nips/blob/master/42.md) |
| `23194` | Wallet Request             | [47](https://github.com/nostr-protocol/nips/blob/master/47.md) |
| `23195` | Wallet Response            | [47](https://github.com/nostr-protocol/nips/blob/master/47.md) |
| `24133` | Nostr Connect              | [46](https://github.com/nostr-protocol/nips/blob/master/46.md) |
| `30000` | Categorized People List    | [51](https://github.com/nostr-protocol/nips/blob/master/51.md) |
| `30001` | Categorized Bookmark List  | [51](https://github.com/nostr-protocol/nips/blob/master/51.md) |
| `30008` | Profile Badges             | [58](https://github.com/nostr-protocol/nips/blob/master/58.md) |
| `30009` | Badge Definition           | [58](https://github.com/nostr-protocol/nips/blob/master/58.md) |
| `30017` | Create or update a stall   | [15](https://github.com/nostr-protocol/nips/blob/master/15.md) |
| `30018` | Create or update a product | [15](https://github.com/nostr-protocol/nips/blob/master/15.md) |
| `30023` | Long-form Content          | [23](https://github.com/nostr-protocol/nips/blob/master/23.md) |
| `30078` | Application-specific Data  | [78](https://github.com/nostr-protocol/nips/blob/master/78.md) |
| `30402` | Classifieds                | [99](https://github.com/nostr-protocol/nips/blob/master/99.md) |
| `31989` | Handler recommendation     | [89](https://github.com/nostr-protocol/nips/blob/master/89.md) |
| `31990` | Handler information        | [89](https://github.com/nostr-protocol/nips/blob/master/89.md) |

### [§](#tags) Standardized Tags

| name       | value                   | other parameters  | NIP                                                                                                                            |
| ---------- | ----------------------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| e          | event id (hex)          | relay URL, marker | [1](https://github.com/nostr-protocol/nips/blob/master/01.md), [10](https://github.com/nostr-protocol/nips/blob/master/10.md)  |
| p          | pubkey (hex)            | relay URL         | [1](https://github.com/nostr-protocol/nips/blob/master/01.md)                                                                  |
| a          | coordinates to an event | relay URL         | [33](https://github.com/nostr-protocol/nips/blob/master/33.md), [23](https://github.com/nostr-protocol/nips/blob/master/23.md) |
| r          | a reference (URL, etc)  |                   | [12](https://github.com/nostr-protocol/nips/blob/master/12.md)                                                                 |
| t          | hashtag                 |                   | [12](https://github.com/nostr-protocol/nips/blob/master/12.md)                                                                 |
| g          | geohash                 |                   | [12](https://github.com/nostr-protocol/nips/blob/master/12.md)                                                                 |
| nonce      | random                  |                   | [13](https://github.com/nostr-protocol/nips/blob/master/13.md)                                                                 |
| subject    | subject                 |                   | [14](https://github.com/nostr-protocol/nips/blob/master/14.md)                                                                 |
| d          | identifier              |                   | [33](https://github.com/nostr-protocol/nips/blob/master/33.md)                                                                 |
| expiration | unix timestamp (string) |                   | [40](https://github.com/nostr-protocol/nips/blob/master/40.md)                                                                 |

## [§](#nips) NIPs

Een Nostr Implementation Possibilty, kortweg NIP, bestaat om te documenteren wat geïmplementeerd MOET worden, wat ZOU MOETEN worden en wat geïmplementeerd KUNNEN worden door relay- en clientsoftware die compatibel is met Nostr. NIP's bevatten de documentatie die beschrijft hoe het Nostr-protocol werkt.

### Waarom zou ik aandacht moeten geven aan NIPs?

Nostr is gedecentraliseerd en geen eigendom van een gecentraliseerde dienst (zoals Twitter). Dit betekent dat de richting van het protocol aan ons allemaal is! We kunnen veranderingen voorstellen en bepleiten en feedback geven op ideeën van anderen.

Door actief deel te nemen in de community heb je inspraak over de richting waar het netwerk naartoe beweegt. NIP's gepubliceerd in de main repository zijn al goedgekeurd. Nieuwe ideeën toevoegen gaan via Pull Requests op die repo.

### Waar kan NIPs vinden?

Je kunt alle huidige NIP's bekijken in de

 [Nostr NIP repo](https://github.com/nostr-protocol/nips).
