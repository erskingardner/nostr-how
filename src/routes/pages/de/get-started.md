---
title: Erste Schritte mit Nostr
description: Dieser Leitfaden wird dir helfen, die Grundlagen von Nostr zu verstehen, ein neues Konto einzurichten und Nostr zu verwenden. Wir zeigen dir, wie du eine neue Lightning-Wallet erstellst, ein Konto einrichtest und dich sicher bei einem Client anmeldest.
---

## [§](#understanding-keys) Grundlagen zu Schlüsseln

Jeder Nostr-Account basiert auf einem öffentlichen/privaten Schlüsselpaar (engl. "public/private key pair"). In Nostr werden diese Schlüsselpaare nsec (privater Schlüssel) und npub (öffentlicher Schlüssel) genannt. Eine sehr vereinfachte Darstellung ist, wenn du dir den öffentlichen Schlüssel als Benutzernamen und den privaten Schlüssel als Passwort vorstellst, aber mit einer großen Einschränkung: Im Gegensatz zu einem Passwort kann der private Schlüssel nicht zurückgesetzt werden, wenn er verloren geht oder kompromitiert ist.

Um das nochmal zu verdeutlichen: **Wenn du deinen privaten Schlüssel verlierst, ist der Nostr-Account verloren. Wenn jemand anderes in den Besitz deines privaten Schlüssels kommt, kann dieser die Kontrolle über deinen Account übernehmen.**

Stelle sicher, dass du deinen privaten Schlüssel an einem sicheren Ort aufbewahrst, z.B. in einem Passwort-Manager (uns gefällt [1Password](https://1password.com?utm_source=nostr.how&ref=nostr.how)).

## [§](#protocol-vs-client) Protokoll vs Client

Nostr selbst ist lediglich ein Protokoll; ein vereinbartes Verfahren für die Weitergabe von Nachrichten im Internet.

Du wirst Nostr (das Protokoll) mit einem Client nutzen. Clients können Web-, Desktop- oder Mobile-Apps sein. Manche Clients erlauben es dir, dich mit deinem privaten Schlüssel einzuloggen. Im Web wird das allgemein nicht empfohlen - es ist lästig und vor allem sehr unsicher. Stattdessen empfehlen wir die Verwendung einer Browser-Erweiterung zum Signieren. Hierbei handelt es sich um eine Software, die speziell für die sichere Verwaltung privater Schlüssel und das kryptografische Signieren von Ereignissen entwickelt wurde.

[Alby](https://getalby.com?utm_source=nostr.how&ref=nostr.how) ist genau so eine Browser-Erweiterung, die neben einer Bitcoin-Lightning-Wallet auch dir auch die sichere Verwaltung deiner Nostr-Schlüssel ermöglicht. Gerade für Einsteiger ist dies sinnvoll. Wir behandeln die Installation von Alby in den Schritt-für-Schritt-Anleitungen für Clients.

## [§](#create-your-account) Erstelle deinen Account

Schritt-für-Schritt-Anleitungen für verschiedene bekannte Clients:

-   [Iris](/de/guides/iris) (Web)
-   [Damus](/de/guides/damus) (iOS)
-   [Amethyst](/de/guides/amethyst) (Android)

Weitere Clients, für die wir aber aktuell noch keine Anleitungen haben:

-   [Primal](https://primal.net) (Web, iOS, Android) Benutzerfreundlicher Client mit integrierter Lightning-Wallet auf Mobilgeräten.
-   [Snort](https://snort.social?utm_source=nostr.how&ref=nostr.how) (Web) Schneller Web-Client mit schickem Design.
-   [Coracle](https://coracle.social?utm_source=nostr.how&ref=nostr.how) (Web) Ein Client mit dem Fokus auf Relay-Navigation.

## [§](#find-friends) Finde Freunde

-   Wenn du weißt, dass jemand auf Nostr ist, suche nach dem öffentlichen Schlüssel (npub) oder der Nostr-Adresse (NIP-05).
-   Viele Twitter-Nutzer posten ihre Nostr-Pubkeys mit dem Hashtag #nostr. Folge dem Hashtag oder halte in deren Profilbeschreibungen nach dem npub ausschau.
-   [nostr.directory](https://nostr.directory?utm_source=nostr.how&ref=nostr.how) ist eine Datenbank, die Twitter-Nutzer ihre Nostr-Pubkeys zuordnet.

## [§](#whats-signing) Was bedeutet "Signieren" (engl. "signing")?

Jedes Mal, wenn du eine Aktion ausführen willst, musst du eine kryptographische Signatur erstellen, um mit dem Nostr-Protokoll zu interagieren. Stelle dir die Signatur als einen Authentifizierungsschritt vor, bei dem du deine Identität bestätigst.

Die meisten Nostr-Clients versuchen das einfach und schnell zu machen, indem du deinen privaten Schlüssel direkt im Client speichern kannst. Dadurch wird jedes Event automatisch in deinem Namen signiert.

Wenn du lediglich deinen öffentlichen Schlüssel angibst, wirst du jedes Mal aufgefordert, eine Aktion zu signieren. Wenn du zum Beispiel mit Beiträgen interagierst oder Aktualisierungen an deinem Profil vornimmst, wird Alby automatisch aufgerufen (wie bei jedem Login) und du kannst bestätigen, dass du die Aktion tatsächlich signieren möchtest.

## [§](#can-i-use-other-clients) Kann ich andere Clients nutzen?

Ja! Da du jetzt dein public/private key pair erstellt hast, kannst du dieses bei jedem Nostr-Client verwenden, um auf deinen Account zuzugreifen. Denke daran, ein Client ist lediglich die Schnittstelle, um Nachrichten zu sehen, die über das Nostr-Protokoll gesendet werden.

## [§](#next-steps) Nächste Schritte

Großartig, jetzt hast du ein Lightning-Wallet, eine Identität (dein Nostr-Schlüsselpaar) und hast einen Client getestet! Hier sind ein paar Links, die dir bei deiner weiteren Reise in den Nostr-Kaninchenbau helfen können:

-   [Verifiziere deine Nostr-Identität](/de/guides/get-verified)
-   [Was sind Relays und wie funktionieren sie?](/de/relays)
-   [Lerne mehr über NIPs und die Entwicklung des Nostr-Protokolls](/de/the-protocol)
