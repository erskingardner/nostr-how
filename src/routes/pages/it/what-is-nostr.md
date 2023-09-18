---
title: Pubblicazione decentralizzata per il web
description: Nostr è un protocollo semplice e aperto che consente di pubblicare sul web in maniera globale (value-for-value) e resistente alla censura.
---

## [§](#cose-nostr) Cos'è Nostr?

Nostr sta per "Notes and Other Stuff Transmitted by Relays" (Note e Altre Cose Trasmesse da Relè). Come HTTP o TCP-IP, Nostr è un protocollo. Nostr in sé non un'applicazione o un servizio a cui iscriversi, é uno standard aperto su cui chiunque può costruire.

Nostr è progettato per la semplicità e consente la pubblicazione globale, decentralizzata e resistente alla censura sul web. Approfondiamo un po' questi concetti:

### Semplice

Il protocollo si basa su oggetti `Event` molto semplici e flessibili (che vengono passati come JSON puri) e utilizza la crittografia standard a chiave pubblica standard per le chiavi e la firma. Questo rende facile l'esecuzione dei relays e la creazione di client, garantendo che il protocollo possa essere esteso nel tempo.

### Resistente

La resilienza di Nostr si basa sul fatto che il protocollo non si basa su un numero limitato di server fidati per spostare o archiviare dati. Il protocollo assume che i relays possano scomparire e consente agli utenti di connettersi e pubblicare attraverso un numero arbitrario di relay che possono cambiare nel tempo.

### Verificabile

Poiché gli account Nostr si basano sulla [crittografia asimmetrica](https://it.wikipedia.org/wiki/Crittografia_asimmetrica), è facile verificare che i messaggi siano stati effettivamente inviati dall'utente in questione.
