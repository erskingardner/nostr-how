---
title: Aan de slag met Nostr
description: Deze gids helpt je de basisbeginselen van Nostr te begrijpen. We behandelen hoe je een nieuwe lightning wallet aanmaakt, een account aanmaakt en je veilig aanmeldt bij een client.
---

## [§](#understanding-keys) Uitleg public/private keys

Elk Nostr account is gebaseerd op een public/private key. Om het eenvoudig uit te leggen kun je een public key vergelijken met een gebruikersnaam en is een private key een wachtwoord, met één belangrijk verschil. In tegenstelling tot een wachtwoord, kan een private key niet gewijzigd worden. Een private key wordt ook wel een secret key genoemd.

Laten we het nogmaals duidelijk zeggen: **Als je jouw private key verliest, ben je de volledige control over jouw Nostr account kwijt. Als iemand anders toegang krijgt tot je private key, heeft hij/zij de volledige controle over je account.**

Zorg ervoor dat je jouw private key veilig opslaat, bijvoorbeeld in een wachtwoordmanager (Bitwarden, Keepass of 1Password) of maak gebruik van een browserextensie zoals [Alby](https://getalby.com/#alby-extension).

## [§](#protocol-vs-client) Protocol vs Client

Nostr zelf is gewoon een protocol; een open, gestandariseerde procedure om berichten uit te wisselen via het internet.

Je krijgt toegang tot Nostr (het protocol) via een client. Clients kunnen web-, desktop- of mobiele applicaties zijn. Bij sommige clients meld je je aan door je private key in te vullen. We raden dit af om te doen - het is vervelend en onveilig. In plaats daarvan raden we aan om een extensie in je browser te gebruiken. Dit is software die speciaal ontworpen is om private keys veilig te beheren waarmee je jouw berichten cryptografisch te ondertekent.

Alby is een populaire ondertekeningsextensie en bitcoin lightning portemonnee die ingebouwde ondersteuning heeft voor Nostr. Het is een geweldige optie voor nieuwe gebruikers. We zullen de installatie van Alby behandelen in de client-specifieke gidsen waar het nodig is hieronder.

[Alby](https://getalby.com?utm_source=nostr.how&ref=nostr.how) is een populaire extensie en bitcoin lightning wallet ingebouwde Nostr ondersteuning Het is een mooie optie voor nieuwe gebruikers. We zullen de installatie van Alby behandelen in een client specifieke gids.

## [§](#create-your-account) Jouw account aanmaken

Hier zijn enkele gidsen voor een paar verschillende clients die we aanbevelen:

-   [Iris](/nl/guides/iris) (Web)
-   [Damus](/nl/guides/damus) (iOS)
-   [Amethyst](/nl/guides/amethyst) (Android)

Dit zijn een aantal andere clients die we fijn vinden, maar (nog) geen gidsen voor hebben:

-   [Primal](https://primal.net) (Web, iOS, Android) Gebruiksvriendelijke client met ingebouwde Lightning-portemonnee op mobiel.
-   [Snort](https://snort.social?utm_source=nostr.how&ref=nostr.how) (Web) Mooie en snelle webclient.
-   [Coracle](https://coracle.social?utm_source=nostr.how&ref=nostr.how) (Web) Een client gericht op relay discovery.

## [§](#find-friends) Vrienden vinden om te volgen

-   Als je weet dat iemand op Nostr zit, zoek dan naar hun profiel door te zoeken naar hun public key (beginnend met `npub`).
-   Veel Twitter gebruikers posten hun Nostr publeys met de hashtag #nostr, dus zoeken op deze hashtag op Twitter / X kan je een goede start geven.
-   [nostr.directory](https://nostr.directory?utm_source=nostr.how&ref=nostr.how) is een database die Twitter gebruikers koppelt aan hun Nostr pubkeys.

## [§](#whats-signing) Wat betekent "signeren"?

Om te kunnen communiceren met het Nostr protocol moet je een cryptografische handtekening aanmaken voor elke actie die je uitvoert. Zie deze handtekening als een authenticatie stap waarbij je bevestigt dat je inderdaad bent wie je zegt dat je bent.

De meeste Nostr clients proberen dit gemakkelijk en snel te maken (of staan je toe om je private key op te slaan in de client zodat ze uit jouw naam kunnen tekenen).

**Alby**  
Door alleen onze publieke sleutel op te geven, worden we gevraagd om ons aan te melden wanneer we willen reageren op berichten of updates van ons profiel willen uitvoeren. Wanneer dat gebeurt, zal Alby automatisch verschijnen (zoals tijdens de aanmeldingsstap) en kun je bevestigen dat je jouw actie echt wilt ondertekenen.

## [§](#can-i-use-other-clients) Kan ik van andere clients gebruikmaken?

Jazeker! Nadat je een public/private key combinatie hebt gekregen, kun je deze combinatie in elke Nostr client gebruiken om toegang te krijgen tot jouw account. Onthoud dat de client slechts een interface is om berichten te zien die via het Nostr protocol worden uitgewisseld.

## [§](#next-steps) Volgende stappen

Geweldig, nu heb je een bitcoin lightning wallet, een identiteit (je public/private keys) en heb je een client uitgeprobeerd. Hier zijn een paar links die handig kunnen zijn als je je verder in Nostr wilt verdiepen:

-   [Verifieer jouw identeit](/nl/guides/get-verified)
-   [Wat zijn relays en hoe werken ze?](/nl/relays)
-   [Leer meer over NIPs en de ontwikkeling van het protocol](/nl/the-protocol)
