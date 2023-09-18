---
title: Cosa sono i Clients di Nostr?
description: Una panoramica su cosa sono i clients in Nostr e un confronto tra alcuni dei nostri preferiti.
---

## [§](#cose-un-client) Cos'è un client?

Un client in Nostr è semplicemente l'applicazione che si utilizza per accedere ed interagire con il protocollo. È come l'app di Twitter per iOS o quella web che si utilizza per interagire con il feed dei tweet di Twitter.

Poiché il protocollo di Nostr è molto semplice e flessibile, diversi clients si sono concentrati nell'implementare differenti aspetti del protocollo in modi leggermente diversi. Ad esempio, alcuni client si concentrano sull'interfaccia utente, altri si concentrano di più sui pagamenti istantanei, altri ancora si concentrano su Nostr per usi creativi come giocare a scacchi (Sì, puoi [giocare a scacchi](https://jesterui.github.io?utm_source=nostr.how&ref=nostr.how) tramite il protocollo di Nostr).

La maggior parte dei clients costruiti finora si concentrano sul caso d'uso dei social media. Ma stiamo iniziando a vedere casi d'uso più interessanti.

Alcuni esempi:

[Jester](https://jesterui.github.io?utm_source=nostr.how&ref=nostr.how): Gioca a scacchi su Nostr
[Habla](https://habla.news?utm_source=nostr.how&ref=nostr.how): Contenuti a lunga forma - come Medium
[Nostrgram](https://nostrgram.co?utm_source=nostr.how&ref=nostr.how): client social focalizzato sui media

## [§](#posso-cambiare-client) Posso cambiare client?

Sì. Poiché un client è solo un modo per accedere ai dati sottostanti detenuti dai relays, è possibile cambiare client o accedere a quanti client si desidera. Finché ogni client sta guardando lo stesso set di relays per i loro dati, si vedranno gli stessi messaggi in ogni client.

## [§](#chiave-privata-client) Dovrei inserire la mia chiave privata nel client?

In generale, è meglio non inserire la propria chiave privata in nessun client. La maggior parte dei client che richiedono le chiavi private fanno del loro meglio per mantenere la sicurezza delle chiavi, ma data la natura del software, ci sono sempre violazioni, exploit e bug che potrebbero potenzialmente esporre la chiave privata.

Ricorda, la tua chiave privata è la tua identità in Nostr, quindi se viene compromessa, dovrai ricominciare da capo a ricostruire la tua identità e perderai la lista dei follower e tutti i messaggi privati.

## [§](#client-preferiti) Alcuni dei nostri client preferiti

### Web

-   [Iris](https://iris.to?utm_source=nostr.how&ref=nostr.how) - Questo è un client consigliato per i nuovi utenti. [Guarda la nostra guida qui](/it/guides/iris).
-   [Snort](https://snort.social?utm_source=nostr.how&ref=nostr.how)
-   [Coracle](https://coracle.social?utm_source=nostr.how&ref=nostr.how)
-   [Nostrgram](https://nostrgram.co?utm_source=nostr.how&ref=nostr.how)

### Desktop

-   [Gossip](https://www.github.com/mikedilger/gossip) - Gossip è un client desktop con molto opinione che richiede un po' più di conoscenza tecnica per essere utilizzato. Il vantaggio è che dà agli utenti maggiore controllo su come interagire con Nostr.

### iOS

-   [Damus](https://apps.apple.com/app/damus/id1628663131) – Questo è il primo (e il migliore per adesso) client sul iOS per Nostr. [Guarda la nostra guida qui](/it/guides/damus).

### Android

-   [Amethyst](https://play.google.com/store/apps/details?id=com.vitorpamplona.amethyst) – Un client molto bello per Android. [Guarda la nostra guida qui](/it/guides/amethyst).
