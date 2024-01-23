---
title: Wat zijn Zaps?
description: Leer hier wat Zaps zijn, hoe ze werken en wat je nodig hebt om ze te gebruiken met je Nostr account.
---

## [§](#the-basics) De basis

De eenvoudigste manier om Zaps uit te leggen is dat het gewoon fooien zijn. Fooien die direct via het bitcoin Lightningnetwerk worden verzonden zonder transactiekosten.

In de eerste dagen van Nostr protocol was het gebruikelijk om lightning-facturen in berichten te zien. Sinds de implementatie van NIP-57 kun je nu direct events "zappen". Zaps de belangrijkste manier geworden waarop waarde (met microbetalingen) wordt overgedragen in het ecoysteem van Nostr. Laten we eens nader bekijken hoe NIP-57 en Zaps werken.

## [§](#nip-57) NIP-57

[NIP-57](https://github.com/nostr-protocol/nips/blob/master/57.md) is het document dat beschrijft hoe Zaps geïmplementeerd moeten worden. Het bevat twee kinds, kind 9735 (Een Zap) en kind 9734 (Een Zap-verzoek). Samen maken deze twee kinds het mogelijk voor Nostr clients om Zap invoices aan te vragen bij LNURL servers en ze te betalen. De NIP-57 spec beschrijft ook hoe Lightning wallets die Zap betalingen ontvangen, events moeten aanmaken om naar relays te sturen.

💡 Leuk weetje, het gekozen kind nummer voor Zaps is dezelfde als de netwerkpoort (9735) die Lightning gebruikt.

## [§](#how-zaps-work) Hoe Zaps werken

![Zap flowchart](/images/zap-flow.webp)

We zullen hier niet te diep ingaan op technische details, maar voor de nieuwsgierigen onder jullie, laten we eens kijken naar het systeem van hoe Zaps werken.

1. Wanneer je klikt of tikt op het kleine ⚡ icoontje in je client (Damus, Iris, Amethyst, etc), checkt de client de [LNURL server](https://thebitcoinmanual.com/articles/what-is-ln-url-and-how-does-it-work/) of er een Lightning-wallet beschikbaar is van de persoon die je probeert te Zappen. Het eerste verzoek gaat ongeveer zo: "Hallo, ik zou Alice graag wat sats geven."
2. De LNURL server antwoordt en, als Alice's portemonnee Zaps ondersteunt, zal het de client dit vertellen en Alice's publieke sleutel sturen/bevestigen.
3. Op dit punt verricht de client wat werk om een Zap verzoek samen te stellen (dit is een kind 9734 bericht) met; gegevens over het profiel of het bericht die hij wil Zappen, het bedrag, de relay waar hij de notitie naartoe moet zenden en een paar andere dingen. In feite is dit een verzoek voor een factuur van de LNURL server.
4. De LNURL server reageert met de aangevraagde factuur.
5. Op dat moment geeft de client de factuur door aan de Lightning wallet van de gebruiker om betaald te worden. Als je een wallet zoals Alby in de browser gebruikt (en een budget hebt ingesteld) kan de betaling heel snel worden afgehandeld.
6. Zodra de gebruiker de factuur rechtstreeks heeft betaald aan de wallet van de persoon die hij zapt, zal de wallet van de ontvanger een bericht met kind 9735 aanmaken en dat vervolgens versturen naar de relay die eerder in het Zap verzoek is opgegeven.
7. Relays die deze notitie ontvangen, kunnen verbonden clients dan vertellen over de zap. De clients kunnen vervolgens de zap aan gebruikers tonen in hun app.

Dit alles gebeurt in slechts een paar seconden en kost een fractie van een cent.

## [§](#how-to-send-and-receive) Hoe verstuur en ontvang ik Zaps?

Om andere mensen in Nostr te Zappen, heb je slechts twee dingen nodig:

1. Een Zap-compatibele Lightning wallet (zoals [Alby](https://getalby.com/) of [Wallet of Satoshi](https://www.walletofsatoshi.com/))
2. Een client die Zaps heeft geïmplementeerd (zoals [Damus](/en/guides/damus), [Amethyst](/en/guides/amethyst), [Iris](/en/guides/iris), of [Snort](https://snort.social))

Het enige andere wat je nog moet doen, is ervoor zorgen dat je je Lightning adres hebt ingesteld in je Nostr profiel. Dit is het adres waar je Zaps zult ontvangen.

Houd er rekening mee dat het mogelijk is om voor Zaps te betalen vanaf een andere wallet of adres dan het adres dat je in je profiel hebt ingesteld om Zaps te ontvangen.

Stel bijvoorbeeld het volgende voor:

1. Je hebt een [Stacker News](https://stacker.news/) Lightning adres dat is ingesteld in je Nostr profiel, dit is waar je alle sats van ontvangen zaps ontvangt.
2. In je webbrowser gebruik je Iris als client en betaal je voor Zaps met je Alby wallet via hun chrome extensie.
3. Op je smartphone gebruik je Damus als client en betaal je voor Zaps met de Wallet of Satoshi app.
