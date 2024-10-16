---
title: Was sind Nostr-Relays?
description: Ein kurzer Überblick darüber, was Nostr-Relays sind, warum sie wichtig sind und wie sie funktionieren.
---

## Was sind Relays?

Relays sind wie die Backend-Server für Nostr. Sie ermöglichen es, Nachrichten zu speichern und diese an alle anderen verbundenen Nostr-Clients zu senden.

Die Welt der Relays verändert sich schnell, also erwarte hier in Zukunft viele Veränderungen. Wenn dein Nostr-Client sich langsam anfühlt, liegt das höchstwahrscheinlich an deinen Relays, da Nostr dezentral ist und zum Speichern und Abrufen von Daten auf Relays angewiesen ist. Es kann sich daher lohnen, deinem Client ein paar weitere Relays hinzuzufügen (oder ein paar zu entfernen).

## Bezahl- vs kostenlose Relays

Viele Relays können derzeit kostenlos genutzt werden. Angesichts der Kosten für den Betrieb eines Relays (Zahlung für Rechenleistung, Speicher und Bandbreite) erwarten wir, dass in Zukunft kostenpflichtige Relays die Norm sein werden.

Ein großer Vorteil kostenpflichtiger Relays ist aktuell die höhere Qualität der Benutzer und Nachrichten. Der "Proof of Work" für ein Relay zu bezahlen, trägt dazu bei, dass weniger Spam-Konten das Netzwerk befallen.

### Beliebte Bezahl-Relays

Eine aktuelle Liste der kostenpflichtigen Relays mit Angaben zu ihren Kosten und deren Betreiber findest du unter [Relay Exchange](https://relay.exchange/)

### Wo finde ich eine Liste mit allen Relays?

Die aktuell beste Quelle, um nach Relays zu suchen und ihre Geschwindigkeiten zu bewerten, ist [Nostr.watch](https://legacy.nostr.watch/relays/find).

## Was passiert, wenn alle Relays aufhören zu funktionieren, die ich nutze?

Wenn _alle_ RelaYs, die du in der Vergangenheit verwendet hast, offline gehen, sind alle deine Beiträge nicht wiederzufinden. Das ist einer der Gründe, warum Nostr es Benutzern ermöglicht, sich mit vielen Relays zu verbinden, um ein gewisses Maß an Backup zu gewährleisten. Das heißt, wenn du wirklich daran interessiert bist, unzensierbar zu sein, solltest du dein eigenes Relay betreiben.

## Sollte ich mein eigenes Relay betreiben?

Für die meisten Leute ist es nicht nötig und die Mühe nicht wert, ein eigenes Relay zu betreiben. Aber wie schon erwähnt, falls du technisch versiert bist und sicherstellen möchtest, dass du absolut unzensierbar bist, oder wenn du ein privates Relay haben willst, dann kannst und solltest du auch ein eigenes Relay betreiben. Dadurch wird sichergestellt, dass du immer eine Kopie aller deiner Nostr-Notes und -Interaktionen für alle Zeiten hast. Wir arbeiten an einer Anleitung dazu, aber in der Zwischenzeit ist [hier eine Anleitung in Englisch](https://andreneves.xyz/p/set-up-a-nostr-relay-server-in-under) von André Neves, wie man ein Nostr-Relay einrichtet.
