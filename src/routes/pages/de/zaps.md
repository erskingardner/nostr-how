---
title: Was sind Zaps?
description: Hier lernst du, was Zaps sind, wie sie funktionieren und was du brauchst, um sie in deinem Nostr-Client zu nutzen.
---

## [§](#the-basics) Die Grundlagen

Am einfachsten kann man sich Zaps als kleinde Spenden oder Trinkgeld (engl. "tips") vorstellen, die über das [Lightning-Netzwerk](https://www.investopedia.com/terms/l/lightning-network.asp) mit Lichtgeschwindigkeit gesendet werden und im Grunde ohne Transaktionsgebühren auskommen.

Seit Beginn des Nostr-Protokolls war es üblich, Lightning-Rechnungen in Notes zu senden. Aber seit der Implementierung von [NIP-57](https://github.com/nostr-protocol/nips/blob/master/57.md) werden Zaps hauptsächlich für die Übertragung von Wert (engl. "value") in Nostr-Notes verwendet. Lass uns einen genaueren Blick auf die NIP-57-Spezifizierung werfen und wie genau Zaps funktionieren.

## [§](#nip-57) NIP-57

[NIP-57](https://github.com/nostr-protocol/nips/blob/master/57.md) ist das Dokument, das beschreibt, wie Zaps implementiert werden sollen. Es werden zwei neue Arten von Notes erstellt, die Art 9735 (ein Zap) und die Art 9734 (eine Zap-Anforderung). Zusammen ermöglichen diese beiden Arten es Nostr-Clients, Zap-Invoices von LNURL-Servern anzufordern und zu bezahlen. Die NIP-57-Spezifikation beschreibt auch, wie Lightning-Wallets, die Zaps empfangen, Notes erstellen und an Relays senden sollten.

💡 Fun Fact: Die für Zaps gewählte Art des Events (kind 9735) ist die gleiche wie der Netzwerkport (9735), den das Lightning-Protokoll verwendet.

## [§](#how-zaps-work) Wie Zaps funktionieren

![Zap flowchart](/images/zap-flow.webp)

Wir werden hier nicht in tiefe technische Details gehen, aber für die Neugierigen unter euch wollen wir uns die grundlegenden Mechanismen von Zaps ansehen.

1. Wenn du auf das kleine ⚡ Symbol in deinem Client (Damus, Iris, Amethyst usw.) klickst oder tippst, pingt der Client als Erstes den [LNURL-Server](https://thebitcoinmanual.com/articles/what-is-ln-url-and-how-does-it-work/) an, der sich vor der Lightning-Wallet der Person befindet, die du zappen möchtest. Die erste Anfrage lautet in etwa so: "Hallo, ich würde Alice gerne ein paar Sats geben."
1. Der LNURL-Server antwortet und wenn Alices Wallet Zaps unterstützt, teilt er dies dem Client mit und sendet/bestätigt den öffentlichen Schlüssel von Alice.
1. An diesem Punkt leistet der Client ein wenig Arbeit und stellt eine Zap-Anfrage (Event der Art 9734) mit Daten über das Profil oder die Nachricht, die gezappt werden soll, den Betrag, an welche Relays veröffentlicht werden soll und ein paar andere Dinge zusammen. Dabei handelt es sich im Grunde um eine Anforderung einer Rechnung vom LNURL-Server.
1. Der LNURL-Server antwortet mit der angeforderten Rechnung.
1. Zu diesem Zeitpunkt übergibt der Client diese Rechnung zur Zahlung an die Lightning-Wallet des Benutzers. Wenn du eine Wallet wie Alby im Browser verwendest (und ein Budget festgelegt habst), kann dieser Vorgang sehr schnell ablaufen.
1. Sobald der Benutzer die Rechnung direkt an die Wallet der gezappten Person bezahlt hat, erstellt die Wallet des Empfängers ein Event der Art 9735 und sendet diese dann an die zuvor in der Zap-Anfrage angegebenen Relays.
1. Relays, die diese Notiz empfangen, können dann verbundene Clients über den Zap informieren und dann den Benutzern diesen Zap in ihrer Benutzeroberfläche anzeigen.

Und das alles passiert in nur wenigen Sekunden und kostet einen Bruchteil eines Cents.

## [§](#how-to-send-and-receive) Wie sende und erhalte ich Zaps?

Um andere Leute in Nostr zu zappen, brauchst du nur zwei Dinge:

1. Eine Zap-kompatible Lightning-Wallet (wie [Alby](https://getalby.com/) oder [Wallet of Satoshi](https://www.walletofsatoshi.com/))
1. Ein Client, der Zaps implementiert hat (wie [Damus](https://apps.apple.com/app/damus/id1628663131), [Amethyst](https://play.google.com/store/apps/details?id=com.vitorpamplona.amethyst), [Iris](https://iris.to?utm_source=nostr.how&ref=nostr.how), oder [Snort](https://snort.social))

Jetzt musst du nur noch deine Lightning-Adresse in deinem Nostr-Profil eintragen. An diese Adresse wirst du dann Zaps erhalten.

Es ist aber auch möglich, Zaps von einer anderen Wallet/Adresse zu senden, als von der in deinem Nostr-Profil, empfangen wirst du Zaps aber immer auf diese Adresse.

Stelle dir folgende Beispiele vor:

1. Du hast eine [Stacker News](https://stacker.news/) Lightning-Adresse in deinem Nostr-Profil eingetragen, hier erhältst du alle gezappten Sats.
1. In deinem Webbrowser verwendest du Iris als Client und sendest Zaps mit deiner Alby-Wallet über die Browser-Erweiterung.
1. Auf dem Smartphone verwendest du Damus als Client und sendest Zaps mit der Wallet of Satoshi-App.
