---
title: Il protocollo Nostr
description: Questa è una panoramica del protocollo Nostr con i dettagli sui tipi di eventi e su come funzionano le possibilità di implementazione di Nostr (NIP).
---

## [§](#nostr-high-level) Nostr ad alto livello

-   Ci sono due componenti principali della rete Nostr: i [clients](/it/clients) e [relays](/it/relays).
    -   **i Clients** sono l'interfaccia che gli utenti utilizzano per leggere e scrivere dati sui relays. In un contesto di social media, è come pensare all'app Web di Twitter o all'app mobile. È un client che ti consente di leggere i dati e scrivere dati nel database centralizzato di Twitter.
    -   **i Relays** sono come database (anche se fanno molto di più che solo memorizzare dati). Consentono ai client di inviargli dati e di archiviare quei dati in un database. I client possono quindi leggere i dati dai relay per mostrare agli utenti.
-   Ogni utente è identificato da una chiave pubblica. Ogni oggetto evento (ad esempio, il messaggio che stai pubblicando, l'aggiornamento della tua lista di seguaci, ecc.) è firmato. I client convalidano queste firme per assicurarsi che siano corrette.
-   I client recuperano i dati dai relay e pubblicano i dati sui relay. I relay vengono quasi sempre scelti dall'utente. I relay non devono parlare tra loro, ma potrebbero potenzialmente farlo in futuro.
-   Ad esempio, per aggiornare il tuo profilo, basta istruire il tuo client a inviare un evento di tipo 0 ai relay che vuoi utilizzare. I relay archivieranno quindi quell'evento.
-   All'avvio, il tuo client interroga i dati dai relay che gli dici di usare. Questo può essere filtrato per mostrare solo gli eventi per gli utenti che segui o puoi chiedere tutto a tutti, successivamente il client ti mostra i dati che hai richiesto.
-   Ci sono molti tipi diversi di eventi. Gli eventi possono contenere tutti i tipi di strutture dati, le strutture più utilizzate saranno standardizzate tramite dei [Nostr Implementation Possibilities](#nips) (NIP - standard di protocollo a cui tutti aderiscono) in modo che tutti i client e i relay possano gestirli senza problemi.
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

Esistono molti tipi diversi di eventi Nostr. L'elenco più aggiornato dei tipi di evento più comuni si trova sempre nel [repository dei NIP di Nostr](https://github.com/nostr-protocol/nips).

## [§](#nips) NIPs

Le Possibilità di Implementazione di Nostr, o NIP per breve, esistono per documentare ciò che DEVE, ciò che DOVREBBE e ciò che POTREBBE essere implementato dal software dei relays e clients compatibile con Nostr. I NIP sono i documenti che delineano come funziona il protocollo Nostr.

### Perché dovrei preoccuparmi dei NIP?

Nostr è decentralizzato e non è di proprietà di un servizio centralizzato (come Twitter). Ciò significa che la direzione del protocollo dipende da tutti noi! Possiamo suggerire e sostenere modifiche e offrire feedback su idee suggerite da altri.

Essere una parte attiva della comunità ti dà un'opinione sulla direzione della rete. I NIP pubblicati nel repository principale sono già approvati. L'aggiunta di nuove idee avviene tramite Pull Request su quel repository.

### Dove posso trovare i NIP?

Puoi vedere tutti i NIP attuali nel [repo Nostr NIP](https://github.com/nostr-protocol/nips).
