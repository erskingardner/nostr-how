---
title: Was sind Zaps?
description: Lerne hier, was Zaps sind, wie sie funktionieren und was du brauchst, um sie in deinem Nostr-Client zu nutzen.
---------------------------------------------------------------------------------------------------------------------------

## [§](#the-basics) Die Grundlagen

Am einfachsten kann man sich Zaps als kleinde Spenden oder Trinkgeld (engl. "tips") vorstellen, die über das [Lightning-Netzwerk](https://www.investopedia.com/terms/l/lightning-network.asp) mit Lichtgeschwindigkeit gesendet werden und im Grunde ohne Transaktionsgebühren auskommen.

Seit Beginn des Nostr-Protokolls war es üblich, Lightning-Rechnungen in Notes zu senden. Aber seit der Implementierung von [NIP-57](https://github.com/nostr-protocol/nips/blob/master/57.md) werden Zaps hauptsächlich für die Übertragung von Wert (engl. value) in Nostr-Notes verwendet. Lass uns einen genaueren Blick auf die NIP-57-Spezifizierung werfen und wie genau Zaps funktionieren.

## [§](#nip-57) NIP-57

[NIP-57](https://github.com/nostr-protocol/nips/blob/master/57.md)  ist das Dokument, das beschreibt, wie Zaps implementiert werden sollen. Es werden zwei neue Arten von Notes erstellt, die Art 9735 (ein Zap) und die Art 9734 (eine Zap-Anforderung). Zusammen ermöglichen diese beiden Arten es Nostr-Clients, Zap-Invoices von LNURL-Servern anzufordern und zu bezahlen. Die NIP-57-Spezifikation beschreibt auch, wie Lightning-Wallets, die Zaps empfangen, Notes erstellen und an Relays senden sollten.

💡 Fun Fact: Die für Zaps gewählte Art der Notes (kind 9735) ist die gleiche wie der Netzwerkport (9735), den das Lightning-Protokoll verwendet.

## [§](#how-zaps-work) Wie Zaps funktionieren

![Zap flowchart](/images/zap-flow.webp)

Wir werden hier nicht ins tiefe technische Details gehen, aber für die Neugierigen unter euch wollen wir uns die grundlegenden Mechanismen von Zaps ansehen.

1. Wenn du auf das kleine ⚡ Symbol in deinem Client (Damus, Iris, Amethyst usw.) klickst oder tippst, pingt der Client als Erstes den [LNURL-Server](https://thebitcoinmanual.com/articles/what-is-ln-url-and-how-does-it-work/) an, der sich vor der Lightning-Wallet der Person befindet, die du zappen möchtest. Die erste Anfrage lautet in etwa so: "Hallo, ich würde Alice gerne ein paar Sats geben."
2. Der LNURL-Server antwortet und wenn Alices Wallet Zaps unterstützt, teilt er dies dem Client mit und sendet/bestätigt den öffentlichen Schlüssel von Alice.
3. An diesem Punkt leistet der Client ein wenig Arbeit und stellt eine Zap-Anfrage (kind 9734 note) mit Daten über das Profil oder die Nachricht, die gezappt werden soll, den Betrag, an welche Relays veröffentlicht werden soll und ein paar andere Dinge zusammen. Dabei handelt es sich im Grunde um eine Anforderung einer Rechnung vom LNURL-Server.
4. Der LNURL-Server antwortet mit der angeforderten Rechnung.
5. Zu diesem Zeitpunkt übergibt der Client diese Rechnung zur Zahlung an die Lightning-Wallet des Benutzers. Wenn du eine Wallet wie Alby im Browser verwendest (und ein Budget festgelegt habst), kann dieser Vorgang sehr schnell ablaufen.
6. Sobald der Benutzer die Rechnung direkt an die Wallet der gezappten Person bezahlt hat, erstellt die Wallet des Empfängers eine kind 9735 note und sendet diese dann an die zuvor in der Zap-Anfrage angegebenen Relays.
7. Relays, die diese Notiz empfangen, können dann verbundene Clients über den Zap informieren. Clients können dann den Benutzern diesen Zap in ihrer Benutzeroberfläche anzeigen.

Und das alles passiert in nur wenigen Sekunden und kostet einen Bruchteil eines Cents. Magie.

## [§](#how-to-send-and-receive) Wie sende und erhalte ich Zaps?

Um andere Leute in Nostr zu zappen, brauchst du nur zwei Dinge:

1. Eine Zap-kompatible Lightning-Wallet (wie [Alby](https://getalby.com/) oder [Wallet of Satoshi](https://www.walletofsatoshi.com/))
2. Ein Client Zaps implementiert hat (wie [Damus](/de/guides/damus), [Amethyst](/de/guides/amethyst), [Iris](/de/guides/iris), oder [Snort](https://snort.social))

Jetzt musst du nur noch deine Lightning-Adresse in deinem Nostr-Profil eintragen. An diese Adresse wirst du dann Zaps erhalten.

Es ist aber auch möglich, Zaps von einer anderen Wallet/Adresse zu senden, als von der in deinem Nostr-Profil, empfangen wirst du aber immer auf diese Adresse.

Stelle dir folgendes Beispiel vor:

1. Du hast eine [Stacker News](https://stacker.news/) Lightning-Adresse in deinem Nostr-Profil eingetragen, hier erhältst du alle gezappten Sats.
2. In deinem Webbrowser verwendest du Iris als Client und sendest Zaps mit deiner Alby-Wallet über die Browser-Erweiterung.
3. Auf dem Handy verwendest du Damus als Client und sendest Zaps mit der Wallet of Statoshi-App.