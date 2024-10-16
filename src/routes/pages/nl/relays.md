---
title: Wat zijn Nostr Relays?
description: Een korte uitleg over wat Nostr relays zijn, waarom ze belangrijk zijn en hoe ze werken.
---

## Wat zijn relays?

Relais zijn als het ware de backend servers voor Nostr. Ze ontvangen berichten van Nostr clients, ze kunnen die berichten opslaan (of niet) en ze doorsturen naar alle andere verbonden clients.

Het landschap van relays verandert snel, dus hoe rekening met vele veranderingen in de toekomst. Let op, omdat Nostr gedecentraliseerd is en afhankelijk is van relays om gegevens op te slaan en terug te halen kan het voorkomen dat je Nostr client traag reageert. Dit is waarschijnlijk te wijten aan de relays waarmee je bent verbonden. Het kan de moeite waard zijn om wat meer relays toe te voegen (of er juist een paar te verwijderen) aan de app die je gebruikt. Idealiter ben je ongeveer met 10 verschillende relays verbonden.

## Betaalde vs gratis relays

Veel relays zijn momenteel gratis te gebruiken. Gezien de kosten van een relay (ze betalen voor computing, opslag en bandbreedte) is de verwachting dat betaalde relays in de toekomst de norm zullen worden.

Een groot voordeel van het gebruik van betaalde relays is de hogere kwaliteit van gebruikers en events op betaalde relays. Het "proof of work" van het betalen voor relay toegang is iets dat helpt om spam te voorkomen op het netwerk.

### Populaire betaalde relays

Een lijst van betaalde relays met details over hoeveel ze kosten en wie ze beheerd, is te vinden op [Relay Exchange](https://relay.exchange/).

### Waar kan ik een lijst met alle relays vinden?

De beste bron die we hebben gevonden voor het doorzoeken en beoordelen van de prestaties van bekende relays is de website [Nostr.watch](https://legacy.nostr.watch/relays/find).

## Wat gebeurt er als alle relays stoppen die ik gebruik?

Als alle _relays) die je in het verleden hebt gebruikt offline gaan, zijn al je berichten niet meer op te halen. Dit is een van de redenen waarom Nostr gebruikers toestaat om verbinding te maken met veel relays - dit zorgt voor een zekere mate van backups. Dat gezegd hebbende, als je echt geïnteresseerd bent in niet gecensureerd worden, zou je jouw eigen persoonlijke relays moeten gebruiken.

## Moet ik een eigen relay opzetten?

Voor de meeste mensen is dat teveel gedoe. Maar als je technisch bent en er zeker van wilt zijn dat jouw stem absoluut niet gecensureerd wordt of als je een privé relays voor een kleine groep mensen wilt beheren, dan moet je jouw eigen relais opzetten. Dit zorgt ervoor dat je altijd een kopie hebt van al je Nostr berichten en interacties. We werken aan een gids hiervoor, maar in de tussentijd is [hier een gids](https://andreneves.xyz/p/set-up-a-nostr-relay-server-in-under) van Andre Neves over het opzetten van een Nostr relay.
