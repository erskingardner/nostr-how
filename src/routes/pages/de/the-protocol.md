---
title: Das Nostr-Protokoll
description: Ein grober Überblick über das Nostr-Protokoll mit Details zu Event-Typen und wie die Nostr-Implementierungsmöglichkeiten (NIPs) funktionieren.
---

## [§](#nostr-high-level) Grundlagen des Nostr-Protokolls

-   Das Nostr-Netzwerk besteht aus zwei Hauptkomponenten: [Clients](/de/clients) & [Relays](/de/relays).
    -   **Clients** sind die Schnittstelle zwischen Benutzer und Relays. Clients werden zum Lesen und Schreiben von Daten auf Relays verwendet. Du kannst dir das in einem Social-Media-Kontext als die Twitter-Web-App oder die Mobile-App vorstellen. Das ist ein Client, mit dem du Daten aus der zentralen Datenbank von Twitter lesen und schreiben kannst.
    -   **Relays** sind wie Datenbanken (obwohl sie viel mehr tun, als nur Daten zu speichern). Relays ermöglichen es, von Clients gesendete Daten in einer Datenbank zu speichern und diese gespeicherten Daten dann wieder auszulesen und den Benutzern anzuzeigen.
-   Jeder Benutzer wird durch einen öffentlichen Schlüssel identifiziert. Jedes Event-Objekt (z. B. eine gepostete Nachricht, die Aktualisierung der Follower-Liste usw.) wird signiert. Clients validieren diese Signaturen, um sicherzustellen, dass sie korrekt sind.
-   Clients rufen Daten von Relays ab und veröffentlichen Daten auf Relays. Relays werden fast immer vom Benutzer ausgewählt. Relays müssen nicht miteinander kommunizieren, könnten dies aber in Zukunft tun.
-   Um beispielsweise dein Profil zu aktualisieren, weist du deinen Client einfach an, ein Event der Art 0 an die Relays zu senden, die du verwenden möchtest. Die Relays speichern dann dieses Event.
-   Beim Start fragt dein Client Daten von den Relays ab, mit denen du verbunden bist. Das kann so gefiltert werden, dass nur Ereignisse für Benutzer angezeigt werden, denen du folgst, oder du kannst alle verbundenen Relays nach allen Daten fragen, dann zeigt dir der Client genau diese Daten an.
-   Es gibt viele verschiedene Arten von Events. Events können alle möglichen strukturierten Daten enthalten und die am häufigsten verwendeten Strukturen werden [Nostr Implementation Possibilities](#nips) (NIPs – Protokollstandards, an die sich jeder hält), so dass alle Clients und Relays diese reibungslos verarbeiten können.
-   Die Daten, die du auf Nostr sehen kannst, hängen vollständig von den Relays ab, mit denen du eine Verbindung herstellst. Weitere Informationen hierzu findest du im Netzwerkdiagramm unten.

### Netzwerkdiagramm

![Nostr-Netzwerkdiagramm](/images/nostr-network.webp)

Du kannst im Diagramm oben sehen, dass wir 3 Relays und 3 Benutzer haben. Jeder der Benutzer verbindet sich mit einem anderen Client (und auf einer anderen Plattform) im Nostr-Netzwerk.

Anhand der Lese- und Schreibvorgänge im Diagramm folgt:

-   Bob kann alle Beiträge von Alice sehen, aber keine von Mary (und weiß nicht einmal, dass sie existiert)
-   Alice kann alle Beiträge von Bob sehen, aber keine von Mary (und weiß nicht einmal, dass sie existiert)
-   Mary kann alle Beiträge von Bob und Alice sehen. Das liegt daran, dass sie zwar nur an Relay 3 schreibt, aber aus Relay 2 liest, an das Bob und Alice ihre Beiträge schreiben.

Das ist eine sehr vereinfachte Situation, aber du kannst bereits jetzt sehen, dass die Wahl der Relays, mit denen du dich verbindest, einen großen Einfluss darauf hat, wen und was du bei der Verwendung von Nostr siehst.

## [§](#events) Events

Events sind der einzige Objekttyp im Nostr-Netzwerk. Jedes Event hat eine `Art` (engl. "kind"), die angibt, um welche Art von Event es sich handelt (welche Art von Aktion ein Benutzer ausführt oder Nachrichten empfängt).

So sieht ein Event der Art 1 aus (Art 1 ist für kurze Textnotizen – d. h. so etwas wie ein Tweet)

```json
{
    "id": "4376c65d2f232afbe9b882a35baa4f6fe8667c4e684749af565f981833ed6a65",
    "pubkey": "6e468422dfb74a5738702a8823b9b28168abab8655faacb6853cd0ee15deee93",
    "created_at": 1673347337,
    "kind": 1,
    "tags": [
        ["e", "3da979448d9ba263864c4d6f14984c423a3838364ec255f03c7904b1ae77f206"],
        ["p", "bf2376e17ba4ec269d10fcc996a4746b451152be9031fa48e74553dde5526bce"]
    ],
    "content": "Walled gardens became prisons, and nostr is the first step towards tearing down the prison walls.",
    "sig": "908a15e46fb4d8675bab026fc230a0e3542bfade63da02d542fb78b2a8513fcd0092619a2c8c1221e581946e0191f2af505dfdf8657a414dbca329186f009262"
}
```

-   Das Feld `id` teilt uns die ID des Events mit.
-   Das Feld `pubkey` teilt uns den öffentlichen Schlüssel (public key) des Nutzers mit, der uns das Event gesendet hat
-   Das Feld `created_at` gibt an, wann das Event veröffentlicht wurde
-   Das Feld `kind` teilt uns die Art des Events mit, um das es sich handelt
-   Das Feld `tags` informiert uns über die Tags des Events. Tags werden verwendet, um Links zu erstellen, Medien hinzuzufügen und andere Benutzer oder Ereignisse zu erwähnen.
-   Das Feld `content` gibt uns den Inhalt des Events an. In diesem Fall ein kurzer Textbeitrag.
-   Das Feld `sig` ist die Signatur, die Clients verwenden, um zu überprüfen, ob der Benutzer mit diesem Pubkey dieses Ereignis tatsächlich am angegebenen Datum gesendet hat.

### Event-Arten

Es gibt viele verschiedene Arten von Nostr-Events. Die aktuellste Liste gängiger Event-Arten findest du immer im [Nostr-NIPs-Repository](https://github.com/nostr-protocol/nips).

## [§](#nips) NIPs

Eine Nostr Implementationsmöglichkeit (engl. "Nostr Implementation Possibilty"), kurz NIP, existiert, um zu dokumentieren, was von Nostr-kompatiblen Relays- und Client-Software implementiert werden MUSS, SOLL und DARF. NIPs sind die Dokumente, die beschreiben, wie das Nostr-Protokoll funktioniert.

### Warum sollte ich mich für NIPs interessieren?

Nostr ist dezentral und gehört keinem zentralen Dienst (wie etwa Twitter). Das bedeutet, dass die Richtung, in die sich das Protokoll entwickelt, bei uns allen liegt! Wir können Änderungen vorschlagen, befürworten und Feedback zu Ideen geben, die von anderen vorgeschlagen wurden.

Als aktiver Teil der Community hast du ein Mitspracherecht bei der Ausrichtung des Netzwerks. NIPs, die im Haupt-Repository veröffentlicht wurden, sind bereits genehmigt. Das Hinzufügen neuer Ideen erfolgt über Pull Requests in genau diesem Repository.

### Wo finde ich die NIPs?

Du findest alle aktuellen NIPs im [Nostr-NIP-Repository](https://github.com/nostr-protocol/nips) auf GitHub.
