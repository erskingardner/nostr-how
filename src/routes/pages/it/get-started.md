---
title: Iniziare con Nostr
description: Questa guida ti aiuterà a comprendere le basi di Nostr e a prepararti a utilizzare Nostr con un nuovo conto. Tratteremo come creare un nuovo portafoglio Lightning, creare un account e accedere a un cliente in modo sicuro.
---

## [§](#compendere-chiavi) Comprendere le chiavi

Ogni account Nostr si basa su una coppia di chiavi pubbliche/privata. Un modo semplice per pensarci è che la tua chiave pubblica è il tuo nome utente e la tua chiave privata è la tua password, con una grande eccezione. A differenza di una password, se perdi la tua chiave privata, perdi il tuo account Nostr. Se qualcun altro ottiene l'accesso alla tua chiave privata, può prendere il controllo del tuo account.

Assicurati di conservare la tua chiave privata in un luogo sicuro, come un gestore di password (noi preferiamo [1Password](https://1password.com?utm_source=nostr.how&ref=nostr.how)).

## [§](#protocollo-cliente) Protocollo vs. Cliente

Nostr in sé è solo un protocollo, una procedura concordata per scambiarsi messaggi su Internet.

Accederai a Nostr (il protocollo) tramite un cliente. I clienti possono essere applicazioni web, desktop o mobile. Alcuni clienti Nostr ti consentono di accedere incollando la tua chiave privata. Sul web, in generale, ciò non è raccomandato, è noioso e insicuro. Invece, ti consigliamo di utilizzare un'estensione di firma nel tuo browser, che è un software appositamente progettato per gestire in modo sicuro le chiavi private e firmare crittograficamente gli eventi.

[Alby](https://getalby.com?utm_source=nostr.how&ref=nostr.how) è un estensione di firma e un portafoglio Lightning di Bitcoin che ha un supporto integrato per Nostr. È una grande opzione per i nuovi utenti. Vedremo come installare Alby nelle guide specifiche del cliente dove è necessario.

## [§](#creare-conto) Creare il tuo conto

Ecco alcune guide passo-passo per alcuni clienti che raccomandiamo:

-   [Iris](/it/guides/iris) (Web)
-   [Damus](/it/guides/damus) (iOS)
-   [Amethyst](/it/guides/amethyst) (Android)

Alcuni altri clienti che amiamo ma per i quali non abbiamo guide:

-   [Primal](https://primal.net) (Web, iOS, Android) Client intuitivo con portafoglio Lightning integrato sul cellulare.
-   [Snort](https://snort.social?utm_source=nostr.how&ref=nostr.how) (Web) Cliente web pulito e veloce.
-   [Coracle](https://coracle.social?utm_source=nostr.how&ref=nostr.how) (Web) Un cliente focalizzato sulla navigazione inoltro.

## [§](#trovare-amici) Trovare amici da seguire

-   Se conosci qualcuno che è su Nostr, trova il loro profilo cercando la loro chiave pubblica.
-   Molti utenti di Twitter stanno tweettando le loro chiavi pubbliche Nostr con l'hashtag #nostr, quindi cercare questo hashtag può darti un buon punto di partenza.
-   [nostr.directory](https://nostr.directory?utm_source=nostr.how&ref=nostr.how) è un database che mappa gli utenti di Twitter alle loro chiavi pubbliche Nostr.

## [§](#firma) Cosa significa "Firma"?

Per interagire con il protocollo Nostr devi creare una firma crittografica ogni volta che esegui un'azione. Pensala come un passaggio di autenticazione in cui confermi di essere effettivamente chi dici di essere.

La maggior parte dei clienti Nostr cerca di rendere questo processo facile e veloce (o ti consente di salvare la tua chiave privata nel cliente in modo che possano firmare per tuo conto ogni volta che fai qualcosa).

Fornendo solo la tua chiave pubblica sopra, ti verrà chiesto di firmare ogni volta che vuoi interagire con qualsiasi post o eseguire qualsiasi aggiornamento del tuo profilo. Quando ciò accade, Alby si aprirà automaticamente (come ha fatto durante la fase di registrazione) e potrai confermare che desideri effettivamente firmare.

## [§](#posso-altri-clienti) Posso usare altri clienti?

Certamente! Ora che hai creato la tua coppia di chiavi pubblica/privata, puoi usare questa coppia su qualsiasi cliente Nostr per accedere al tuo account. Ricorda, il cliente è solo un'interfaccia per visualizzare i messaggi trasmessi sul protocollo Nostr.

## [§](#prossimi-passi) Quali sono i prossimi passi?

Ottimo, ora sei pronto con un portafoglio Lightning, un'identità (la tua coppia di chiavi) e hai provato un cliente. Ecco alcuni link che potrebbero essere utili mentre ti addentri ulteriormente in Nostr:

-   [Verificare la tua identità](/it/guides/get-verified)
-   [Cosa sono i relè e come funzionano?](/it/relays)
-   [Imparare di più sul NIPs e lo sviluppo del protocollo](/it/nips)
