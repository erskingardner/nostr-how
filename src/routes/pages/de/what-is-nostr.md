---
title: Dezentrale Publishing für das Web
description: Nostr ist ein einfaches, offenes Protokoll, das eine wirklich zensurresistente und globale Wert-für-Wert-Veröffentlichung (engl. value-for-value) im Web ermöglicht.
---

## Was ist Nostr?

Nostr steht für "Notes and Other Stuff Transmitted by Relays" (Notitzen und andere Sachen übertragen von Relais). Wie HTTP oder TCP-IP ist Nostr ein Protokoll; Ein offener Standard, auf dem jeder aufbauen kann. Nostr selbst ist keine App oder ein Dienst, für den du dich anmeldest.

Nostr ist auf Einfachheit ausgelegt und ermöglicht zensurresistentes und global dezentrales Veröffentlichen im Web. Lass uns diese Info nochmal genauer betrachten:

### Einfach

Das Protokoll basiert auf sehr einfachen und flexiblen `Event`-Objekten (die als einfaches JSON weitergegeben werden) und verwendet Standard-Public-Key-Kryptographie für Schlüssel und Signierung. Dies erleichtert das Ausführen von Relays und das Erstellen von Clients und stellt sicher, dass das Protokoll im Laufe der Zeit erweitert werden kann.

### Resilient

Nostr ist zum Verschieben oder Speichern von Daten nicht auf eine kleine Anzahl vertrauenswürdiger Server angewiesen und ist deshalb sehr widerstandsfähig. Das Protokoll geht davon aus, dass Relays verschwinden, und ermöglicht es Benutzern jederzeit, Verbindungen zu einer beliebigen Anzahl von Relays herzustellen.

### Verifizierbar

Da Nostr-"Konten" auf [Public-Key-Kryptographie](https://de.wikipedia.org/wiki/Asymmetrisches_Kryptosystem) basieren, ist es einfach zu überprüfen, ob die Nachrichten wirklich vom betreffenden Benutzer gesendet wurden.
