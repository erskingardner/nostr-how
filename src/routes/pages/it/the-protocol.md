---
title: Il protocollo Nostr
description: Questa è una panoramica del protocollo Nostr con i dettagli sui tipi di eventi e su come funzionano le possibilità di implementazione di Nostr (NIP).
---

## [§](#nostr-high-level) Nostr a livello più alto

-   Ci sono due componenti principali della rete Nostr: [cliente](/it/clients) e [relè](/it/relays).
    -   **i Clienti** è l'interfaccia che gli utenti utilizzano per leggere e scrivere dati sui relay. In un contesto di social media, è come pensare all'app Web di Twitter o all'app mobile. È un client che ti consente di leggere i dati e scrivere dati nel database centralizzato di Twitter.
    -   **i Relè** sono come database (anche se fanno molto di più che solo memorizzare dati). Consentono ai client di inviargli dati e di archiviare quei dati in un database. I client possono quindi leggere i dati dai relay per mostrare agli utenti.
-   Ogni utente è identificato da una chiave pubblica. Ogni oggetto evento (ad esempio, il messaggio che stai pubblicando, l'aggiornamento della tua lista di seguaci, ecc.) è firmato. I client convalidano queste firme per assicurarsi che siano corrette.
-   I client recuperano i dati dai relay e pubblicano i dati sui relay. I relay vengono quasi sempre scelti dall'utente. I relay non devono parlare tra loro, ma potrebbero potenzialmente farlo in futuro.
-   Ad esempio, per aggiornare il tuo profilo, basta istruire il tuo client a inviare un evento di tipo 0 ai relay che vuoi utilizzare. I relay archivieranno quindi quell'evento.
-   All'avvio, il tuo client interroga i dati dai relay che gli dici di usare. Questo può essere filtrato per mostrare solo gli eventi per gli utenti che segui o puoi chiedere tutto a tutti, quindi il client ti mostra quei dati.
-   Ci sono molti diversi tipi di eventi. Gli eventi possono contenere tutti i tipi di dati strutturati e le strutture più utilizzate stanno trovando il loro modo in [Nostr Implementation Possibilities](#nips) (NIP - standard di protocollo a cui tutti aderiscono) in modo che tutti i client e i relay possano gestirli senza problemi.
-   I dati che puoi vedere su Nostr dipendono completamente dai relay a cui decidi di connetterti. Vedi il diagramma di rete qui sotto per maggiori informazioni.

### Diagramma di rete

![Nostr network diagram](/images/nostr-network.webp)

Come puoi vedere dal diagramma sopra, abbiamo 3 relay e 3 utenti. Ciascuno degli utenti si connette a Nostr con un client diverso (e su una piattaforma diversa).

Date le letture e scritture nel diagramma:

-   Bob può vedere tutti i post di Alice, ma non può vedere nulla di Mary (e nemmeno sa che esiste)
-   Alice può vedere tutti i post di Bob, ma non può vedere nulla di Mary (e nemmeno sa che esiste)
-   Mary può vedere tutti i post di Bob e Alice. Questo perché, sebbene scriva solo su Relay 3, legge da Relay 2, dove Bob e Alice scrivono i loro post.

Questa è una situazione molto semplificata, ma si può già vedere che la scelta dei relay ai quali si vuole connettersi può avere un grande impatto su chi e su cosa si vedrà quando si usa Nostr.

## [§](#eventi) Eventi

Gli eventi sono l'unico tipo di oggetto sulla rete Nostr. Ogni oggetto evento ha un `kind` (un tipo), che indica che tipo di evento è (quale tipo di azione un utente potrebbe compiere o quali messaggi potrebbero essere ricevuti).

Ecco come appare un evento di tipo 1 (il tipo 1 è per brevi note di testo - come un tweet di Twitter)

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

-   Il campo `id` ci dice l'ID dell'evento.
-   Il campo `pubkey` ci dice la chiave pubblica dell'utente che ha inviato l'evento.
-   Il campo `created_at` ci dice quando l'evento è stato pubblicato.
-   Il campo `kind` ci dice che tipo di evento è.
-   Il campo `tags` ci informa su eventuali tag sull'evento. Questi vengono utilizzati per creare link, aggiungere media e menzionare altri utenti o eventi.
-   Il campo `content` ci fornisce il contenuto dell'evento. In questo caso, il post di testo breve.
-   Il campo `sig` è la firma che i client utilizzano per verificare che l'utente con questa pubkey abbia effettivamente inviato questo evento nella data specificata.

### Tipi di evento

Questa è una lista dei tipi di evento attuali. La lista più aggiornata può essere sempre trovata nel [repository Nostr NIPs](https://github.com/nostr-protocol/nips).

| kind        | description                      | NIP         |
| ----------- | -------------------------------- | ----------- |
| 0           | Metadata                         | [1](01.md)  |
| 1           | Short Text Note                  | [1](01.md)  |
| 2           | Recommend Relay                  | [1](01.md)  |
| 3           | Contacts                         | [2](02.md)  |
| 4           | Encrypted Direct Messages        | [4](04.md)  |
| 5           | Event Deletion                   | [9](09.md)  |
| 6           | Reposts                          | [18](18.md) |
| 7           | Reaction                         | [25](25.md) |
| 8           | Badge Award                      | [58](58.md) |
| 40          | Channel Creation                 | [28](28.md) |
| 41          | Channel Metadata                 | [28](28.md) |
| 42          | Channel Message                  | [28](28.md) |
| 43          | Channel Hide Message             | [28](28.md) |
| 44          | Channel Mute User                | [28](28.md) |
| 1984        | Reporting                        | [56](56.md) |
| 9734        | Zap Request                      | [57](57.md) |
| 9735        | Zap                              | [57](57.md) |
| 10000       | Mute List                        | [51](51.md) |
| 10001       | Pin List                         | [51](51.md) |
| 10002       | Relay List Metadata              | [65](65.md) |
| 22242       | Client Authentication            | [42](42.md) |
| 24133       | Nostr Connect                    | [46](46.md) |
| 30000       | Categorized People List          | [51](51.md) |
| 30001       | Categorized Bookmark List        | [51](51.md) |
| 30008       | Profile Badges                   | [58](58.md) |
| 30009       | Badge Definition                 | [58](58.md) |
| 30023       | Long-form Content                | [23](23.md) |
| 30078       | Application-specific Data        | [78](78.md) |
| 1000-9999   | Regular Events                   | [16](16.md) |
| 10000-19999 | Replaceable Events               | [16](16.md) |
| 20000-29999 | Ephemeral Events                 | [16](16.md) |
| 30000-39999 | Parameterized Replaceable Events | [33](33.md) |

### i Tags standardizzate

| name       | value                   | other parameters  | NIP                      |
| ---------- | ----------------------- | ----------------- | ------------------------ |
| e          | event id (hex)          | relay URL, marker | [1](01.md), [10](10.md)  |
| p          | pubkey (hex)            | relay URL         | [1](01.md)               |
| a          | coordinates to an event | relay URL         | [33](33.md), [23](23.md) |
| r          | a reference (URL, etc)  |                   | [12](12.md)              |
| t          | hashtag                 |                   | [12](12.md)              |
| g          | geohash                 |                   | [12](12.md)              |
| nonce      | random                  |                   | [13](13.md)              |
| subject    | subject                 |                   | [14](14.md)              |
| d          | identifier              |                   | [33](33.md)              |
| expiration | unix timestamp (string) |                   | [40](40.md)              |

## [§](#nips) NIPs

Le Possibilità di Implementazione di Nostr, o NIP per breve, esistono per documentare ciò che DEVE, ciò che DOVREBBE e ciò che POTREBBE essere implementato dal software di relè e client compatibile con Nostr. I NIP sono i documenti che delineano come funziona il protocollo Nostr.

### Perché dovrei preoccuparmi dei NIP?

Nostr è decentralizzato e non è di proprietà di un servizio centralizzato (come Twitter). Ciò significa che la direzione del protocollo dipende da tutti noi! Possiamo suggerire e sostenere modifiche e offrire feedback su idee suggerite da altri.

Essere una parte attiva della comunità ti dà un'opinione sulla direzione della rete. I NIP pubblicati nel repository principale sono già approvati. L'aggiunta di nuove idee avviene tramite Pull Request su quel repository.

### Dove posso trovare i NIP?

Puoi vedere tutti i NIP attuali nel [repo Nostr NIP](https://github.com/nostr-protocol/nips).
