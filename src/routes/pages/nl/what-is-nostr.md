---
title: Gedecentraliseerd publiceren voor het web
description: Nostr is een eenvoudig, open protocol waarmee je censuurbestendig en wereldwijd data kunt uitwisselen op het web.

---

## Wat is Nostr?

Nostr is een afkorting wat staat voor "Notes and Other Stuff Transmitted by Relays". Net als HTTP of TCP-IP is Nostr een protocol; een open standaard waarmee iedereen kan bouwen. Nostr is dus geen app, platform of dienst waar je je moet registreren.

Nostr is ontworpen met het oog op eenvoud en maakt censuurbestendig en wereldwijd gedecentraliseerd publiceren op het web mogelijk. Laten we dat even nader toelichten:

### Simpel

Het protocol is gebaseerd op zeer eenvoudige en flexibele `Event` objecten (die verstuurd worden in plat JSON tekstformaat). Er wordt gebruik gemaakt van standaard public-key cryptografie voor het versleutelen en signeren van deze berichten. Dit maakt het eenvoudig om relays te draaien en clients te ontwikkelen. Dit zorgt er tevens voor dat het protocol makkelijk uitgebreid kan worden.

### Onafhankelijk

Omdat Nostr niet afhankelijk is van een klein aantal servers voor het verplaatsen of opslaan van gegevens, is het erg veerkrachtig. Het protocol gaat ervan uit dat relays verdwijnen. Gebruikers kunnen altijd zelf verbinding maken met en publiceren naar een andere relays.

### Verifieerbaar

Omdat Nostr accounts gebaseerd zijn op [public-key cryptografie](https://nl.wikipedia.org/wiki/Asymmetrische_cryptografie), is het eenvoudig om te controleren of berichten echt zijn verzonden door de gebruiker / account in kwestie.

