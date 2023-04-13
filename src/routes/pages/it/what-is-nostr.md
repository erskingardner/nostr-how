---
title: Pubblicazione resistente alla censura per il web
description: Nostr è un protocollo semplice e aperto che consente value-for-value pubblicazione sul Web veramente resistente alla censura.
---

## [§](#cose-nostr) Cos'è Nostr?

Nostr sta per "Notes and Other Stuff Transmitted by Relays" (Note e Altre Cose Trasmesse da Relè). Come HTTP o TCP-IP, Nostr è un protocollo, uno standard aperto su cui chiunque può costruire. Nostr non è in sé un'applicazione o un servizio a cui iscriversi.

Nostr è progettato per la semplicità e consente la pubblicazione globalmente decentralizzata e resistente alla censura sul web. Approfondiamo un po' questo concetto:

### Semplice

Il protocollo si basa su oggetti `Event` molto semplici e flessibili (che vengono passati come JSON puro) e utilizza la crittografia a chiave pubblica standard per le chiavi e la firma. Questo rende facile l'esecuzione dei relè e la creazione di client e garantisce che il protocollo possa essere esteso nel tempo.

### Resistente

Poiché Nostr non si basa su un numero limitato di server affidabili per spostare o archiviare i dati, è molto resistente. Il protocollo assume che i relè possano scomparire e consente agli utenti di connettersi e pubblicare un numero arbitrario di relè che possono cambiare nel tempo.

### Verificabile

Poiché gli account Nostr si basano sulla [crittografia asimmetrica](https://it.wikipedia.org/wiki/Crittografia_asimmetrica), è facile verificare che i messaggi siano stati effettivamente inviati dall'utente in questione.
