---
title: Ottiene la verifica NIP-05
description: Come verificare la tua identità su Nostr per ottenere un segno di verifica e un modo più facile per condividere il tuo account.
---

## [§](#cosa-imparerai) Cosa imparerai in questa guida

Potresti aver notato su molti client diversi che alcuni utenti hanno dei segni di spunta, proprio come su Twitter.

NIP-05 specifica come gli utenti di Nostr possono verificare le loro identità. I diversi client mostrano la verifica in modi leggermente diversi, ma è un modo importante per mostrare alla comunità di Nostr che sei un utente reale.

![Snort Verified](/images/snort-verified.webp)

Il processo di verifica su Nostr è documentato in una Possibilità di Implementazione Nostr (NIP) chiamata [NIP-05](https://github.com/nostr-protocol/nips/blob/master/05.md).

NIP-05 consente a un utente di Nostr di mappare la propria chiave pubblica a un identificatore internet basato su DNS. Il meccanismo di verifica è simile a come Google richiede di verificare la proprietà di un dominio utilizzando un record DNS.

Il principale vantaggio della verifica è che consente a un utente di Nostr di essere identificato da un nome leggibile dall'uomo, invece di una chiave pubblica lunga e difficile da ricordare. Ciò consente agli utenti di Nostr verificati di condividere facilmente la propria identità con gli altri.

Per utilizzare NIP-05, gli utenti di Nostr aggiungono un URL nip05 al loro profilo (la maggior parte dei clienti ha il supporto per questo). Gli URL NIP-05 assomigliano alle email - bob@example.com. Analizziamo le parti:

1. Tutto ciò che precede il simbolo `@` ("bob", nel nostro esempio). Questo deve corrispondere al valore del campo nome nel tuo profilo Nostr.
1. Tutto ciò che segue il simbolo `@` ("example.com", nel nostro esempio). Questo è il dominio dove il cliente può cercare per trovare un file `/.well-known/nostr.json` che contiene il nome e la chiave pubblica dell'utente.

Quando i clienti vedono un URL nip05, cercheranno un file `/.well-known/nostr.json` nel dominio specificato. Questo file deve contenere la chiave pubblica di Nostr per l'utente specificato. Leggi ulteriori specifiche nella specifica NIP-05.

Sebbene possa sembrare tecnico, è sorprendentemente facile ottenere la verifica. Vediamo come fare.

## [§](#verifica-gratuito) Ottenere la verifica tramite un servizio gratuito

Al momento, ci sono diversi fornitori che stanno aiutando le persone a ottenere la verifica gratuitamente. Questa è un'ottima opzione se non hai ancora dei satoshi nel tuo portafoglio lightning. Se possibile, sostieni questi progetti tramite donazioni. ⚡🤙

-   [Nostrcheck.me](https://nostrcheck.me?utm_source=nostr.how&ref=nostr.how)
-   [zaps.lol](https://zaps.lol?utm_source=nostr.how&ref=nostr.how)
-   [Nostr-Check.com](https://nostr-check.com?utm_source=nostr.how&ref=nostr.how)
-   [Verified Nostr](https://verified-nostr.com?utm_source=nostr.how&ref=nostr.how)
-   [Cosa Nostr](https://cosanostr.com?utm_source=nostr.how&ref=nostr.how)

## [§](#verifica-a-pagamento) Pagare un fornitore

Se non hai un tuo dominio o non vuoi configurarlo da solo, puoi usufruire di un servizio NIP-05 gratuito o a pagamento (solitamente solo pochi [sats](https://coinmarketcap.com/alexandria/glossary/satoshi-sats?utm_source=nostr.how&ref=nostr.how)). Ecco alcuni:

-   [Nostrly](https://www.nostrly.com?utm_source=nostr.how&ref=nostr.how)
-   [Nostrplebs](https://nostrplebs.com?utm_source=nostr.how&ref=nostr.how)
-   [Nostr Verified](https://nostrverified.com?utm_source=nostr.how&ref=nostr.how)
-   [Alby](https://getalby.com?utm_source=nostr.how&ref=nostr.how)
-   [Nostr Directory](https://nostr.directory?utm_source=nostr.how&ref=nostr.how)
-   [Stacker News](https://stacker.news?utm_source=nostr.how&ref=nostr.how)
-   [Nostrich House](https://nostrich.house?utm_source=nostr.how&ref=nostr.how)
-   [Happy Tavern](https://happytavern.co/nostr-verified?utm_source=nostr.how&ref=nostr.how)

## [§](#verifica-auto-ospitata) Verifica auto-ospitata

Se già possiedi un dominio, questa è un'opzione gratuita. Devi solo aggiungere un file `.well-known/nostr.json` al tuo dominio. Il contenuto del file dovrebbe essere il seguente:

```json
{
    "names": {
        "YOUR_NOSTR_NAME": "YOUR_NOSTR_PUBLIC_KEY"
    }
}
```

Opzionalmente, puoi anche aggiungere una sezione per far sapere ai client su quali relay è probabile che ti trovino:

```json
{
  "names": {
    "YOUR_NOSTR_NAME": "YOUR_NOSTR_PUBLIC_KEY_IN_HEX_FORMAT"
  },
  "relays": {
    "YOUR_NOSTR_PUBLIC_KEY_IN_HEX_FORMAT": [
      "wss://relay.one",
      "wss://relay.two",
      ...
    ]
  }
}
```

Assicurati di utilizzare la versione esadecimale della tua chiave pubblica nel tuo file `nostr.json`. Questa è la versione della chiave che **non** inizia con `npub`.

Puoi chiedere al tuo LLM preferito di convertire il tuo valore `npub` in una "hex pubkey" e lo farà volentieri.

Infine, assicurati che questo file venga servito con l'intestazione `Access-Control-Allow-Origin` impostata su `*`, in quanto deve essere accessibile dai client.
