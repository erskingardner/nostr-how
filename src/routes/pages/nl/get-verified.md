---
title: NIP-05 verificatie
description: Hoe verifieer je je identiteit op Nostr om een vinkje te krijgen en om het eenvoudiger te maken om je account te delen of vindbaar te maken.
---

## [§](#what-youll-learn) Wat je leert in deze gids

Misschien heb je in veel verschillende clients gemerkt dat sommige gebruikers een vinkje hebben, net als op Twitter.

NIP-05 specificeert hoe Nostr gebruikers hun identiteit kunnen verifiëren. Verschillende clients tonen deze verificatie op iets verschillende manieren, maar het is een belangrijke manier om de Nostr community te laten zien dat je een echte gebruiker bent.

![Snort Verified](/images/snort-verified.webp)

Het verificatieproces op Nostr is gedocumenteerd in een Nostr Implementation Possibilities (NIP) genaamd [NIP-05](https://github.com/nostr-protocol/nips/blob/master/05.md).

Met NIP-05 kan een Nostr gebruiker zijn publieke sleutel koppelen aan een DNS gebaseerde internetidentifier. Het verificatiemechanisme is vergelijkbaar met hoe Google vereist dat je jouw eigendom van een domeinnaam verifieert met behulp van een DNS record.

Het grote voordeel van deze verificatie is dat een Nostr gebruiker geïdentificeerd kan worden aan de hand van een menselijk leesbare naam, in plaats van een lange, moeilijk te onthouden public key (beginned met `npub`). Hierdoor kunnen geverifieerde Nostr gebruikers hun identiteit gemakkelijk met anderen delen.

Om NIP-05 te gebruiken, voegen Nostr gebruikers een nip05 url toe aan hun profiel (de meeste clients ondersteunen dit). Deze NIP-05 urls zien eruit als e-mails, bijvoorbeeld bob@example.com. Laten we de onderdelen opsplitsen:

1. Alles voor het @-symbool ("bob", in ons voorbeeld). Dit moet overeenkomen met de waarde van het naamveld van je Nostr profiel.
2. Alles na het @-symbool ("example.com", in ons voorbeeld). Dit is het domein waar de client kan kijken om een `/.well-known/nostr.json` bestand op te vragen om te controleren of de naam en public key van de gebruiker hierin staan.

Wanneer clients een nip05 url zien, zullen ze zoeken naar een `/.well-known/nostr.json` bestand op het opgegeven domein. Dit bestand moet de nostr public key voor de opgegeven gebruiker bevatten. Dit bestand kan meerdere pubkeys bevatten. Lees meer details in de [NIP-05 spec](https://github.com/nostr-protocol/nips/blob/master/05.md).

Hoewel het technisch klinkt, is het verrassend eenvoudig om geverifieerd te worden. Laten we eens kijken hoe je dat doet.

## [§](#free-verification) Gratis verificatie

Op dit moment zijn er verschillende providers die mensen helpen om gratis geverifieerd te worden. Dit is een geweldige optie als je nog geen sats in je lightning wallet hebt staan. Steun deze projecten indien mogelijk via donaties. ⚡🤙

-   [Nostrcheck.me](https://nostrcheck.me?utm_source=nostr.how&ref=nostr.how)
-   [zaps.lol](https://zaps.lol?utm_source=nostr.how&ref=nostr.how)
-   [Nostr-Check.com](https://nostr-check.com?utm_source=nostr.how&ref=nostr.how)
-   [Verified Nostr](https://verified-nostr.com?utm_source=nostr.how&ref=nostr.how)
-   [Cosa Nostr](https://cosanostr.com?utm_source=nostr.how&ref=nostr.how)

## [§](#paid-verification) Een provider betalen voor verificatie

Als je geen eigen domein hebt of het niet zelf wilt instellen, kun je gebruikmaken van een gratis of betaalde NIP-05-service. Hier zijn er een paar:

-   [Nostrly](https://www.nostrly.com?utm_source=nostr.how&ref=nostr.how)
-   [Nostrplebs](https://nostrplebs.com?utm_source=nostr.how&ref=nostr.how)
-   [Nostr Verified](https://nostrverified.com?utm_source=nostr.how&ref=nostr.how)
-   [Alby](https://getalby.com?utm_source=nostr.how&ref=nostr.how)
-   [Nostr Directory](https://nostr.directory?utm_source=nostr.how&ref=nostr.how)
-   [Stacker News](https://stacker.news?utm_source=nostr.how&ref=nostr.how)
-   [Nostrich House](https://nostrich.house?utm_source=nostr.how&ref=nostr.how)
-   [Happy Tavern](https://happytavern.co/nostr-verified?utm_source=nostr.how&ref=nostr.how)

## [§](#self-hosted) Self hosted verificatie

Als je al een domein hebt, is dit een gratis optie. Je hoeft alleen maar een `.well-known/nostr.json` bestand toe te voegen aan je domeinnaam. De inhoud van dit bestand ziet er als volgt uit:

```json
{
    "names": {
        "YOUR_NOSTR_NAME": "YOUR_NOSTR_PUBLIC_KEY"
    }
}
```

Optioneel kun je ook een relays-sectie toevoegen om clients te laten weten op welke relays je actief bent:

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

Zorg ervoor dat je de hex-waarde van je publieke sleutel gebruikt in je `nostr.json` bestand. Dit is de versie van de sleutel die **niet** begint met `npub`.

Je kunt je favoriete LLM vragen om je `npub` om te zetten naar een "hex pubkey" en die doet dat met plezier.

Zorg er ook voor dat dit bestand wordt geserveerd met de `Access-Control-Allow-Origin` header ingesteld op `*`, omdat het toegankelijk moet zijn voor clients.
