---
title: Erste Schritte mit Nostr
description: Dieser Leitfaden wird dir helfen, die Grundlagen von Nostr zu verstehen, ein neues Konto einzurichten und Nostr zu verwenden. Wir zeigen dir, wie du eine neue Lightning-Wallet erstellst, ein Konto einrichtest und dich sicher bei einem Client anmeldest.
---

## [§](#understanding-keys) Grundlagen zu Schlüsseln

Jeder Nostr-Account basiert auf einem öffentlichen/privaten Schlüsselpaar (engl. public/private key pair). In Nostr werden diese Schlüsselpaare nsec (privater Schlüssel) und npub (öffentlicher Schlüssel) genannt. Eine sehr vereinfachte Darstellung ist, wenn du dir den öffentlichen Schlüssel als Benutzernamen und den privaten Schlüssel als Passwort vorstellst, mit einer großen Einschränkung. Im Gegensatz zu einem Passwort kann der private Schlüssel nicht zurückgesetzt werden, wenn er verloren geht oder kompromitiert ist.

Um das nochmal zu verdeutlichen: **Wenn du deinen privaten Schlüssel verlierst, ist der Nostr-Account verloren. Wenn jemand anderes in den Besitz deines privaten Schlüssels kommt, kann dieser die Kontrolle über deinen Account übernehmen.**

Stelle sicher, dass du deinen privaten Schlüssel an einem sicheren Ort aufbewahrst, z.B. in einem Passwort-Manager (uns gefällt [1Password](https://1password.com/)).

## [§](#protocol-vs-client) Protokoll vs Client

Nostr selbst ist lediglich ein Protokoll; ein vereinbartes Verfahren für die Weitergabe von Nachrichten im Internet.

Du wirst Nostr (das Protokoll) mit einem Client nutzen. Clients können Web-, Desktop- oder Mobile-Apps sein. Manche Clients erlauben es dir, dich mit deinem privaten Schlüssel einzuloggen. Im Web wird das allgemein nicht empfohlen - es ist schwierig und vor allem sehr unsicher. Stattdessen empfehlen wir die Nutzung einer Browser-Erweiterung zum Signieren, die speziell für die Verwaltung privater Schlüssel entwickelt wurde.

[Alby](https://chrome.google.com/webstore/detail/alby-bitcoin-lightning-wa/iokeahhehimjnekafflcihljlcjccdbe) ist genau so eine Browser-Erweiterung, die ein Bitcoin-Lightning-Wallet beinhaltet, aber dir auch die sichere Verwaltung deiner Nostr-Schlüssel ermöglicht, gerade für neue Nutzer. Wir behandeln die Installation von Alby in den clientspezifischen Anleitungen weiter unten.

## [§](#create-your-account) Erstelle deinen Account

Schritt-für-Schritt Anleitungen für verschiedene Clients, die wir empfehlen:

-   [Iris](/en/guides/iris) (Web)
-   [Damus](/en/guides/damus) (iOS)
-   [Amethyst](/de/guides/amethyst) (Android)

Weitere Clients, die wir mögen, aber keine Anleitungen haben:

-   [Snort](https://snort.social/) (Web) Schneller Web-Client mit schickem Design.
-   [Coracle](https://coracle.social/) (Web) Ein Client mit dem Fokus auf Relay-Navigation.
-   [Nostrgram](https://nostrgram.co) (Web) Instagram-ähnlicher Client mit dem Fokus auf Bilder, Videos und Audio. Her mit den Memes!

## [§](#find-friends) Finde Freunde

-   Wenn du weißt, dass jemand auf Nostr ist, suche nach dem öffentlichen Schlüssel (public key) oder der Nostr-Adresse (NIP-05).
-   Viele Twitter-Nutzer posten ihre Nostr-Pubkeys mit dem Hashtag #nostr. Folge dem Hashtag oder halte in deren Profilbeschreibungen nach dem npub ausschau.
-   [nostr.directory](https://nostr.directory) ist eine Datenbank, die Twitter-Nutzer ihre Nostr-Pubkeys zuordnet.

## [§](#whats-signing) Was bedeutet "Signieren" (engl. signing)?

Jedes Mal, wenn du eine Aktion ausführen willst, musst du eine kryptographische Signatur erstellen, um mit dem Nostr-Protokoll zu interagieren. Stelle dir die Signatur als einen Authentifizierungsschritt vor, bei dem du deine Identität bestätigst.

Die meisten Nostr-Clients versuchen, dies einfach und schnell zu machen (oder erlauben es dir, deinen privaten Schlüssel im Client zu speichern, damit sie jederzeit in deinem Namen signieren können, wenn Sie etwas tun).

Wenn wir lediglich unseren öffentlichen Schlüssel angeben, werden wir jedes Mal aufgefordert, eine Aktion zu signieren. Wenn wir mit Beiträgen interagieren oder Aktualisierungen an unserem Profil vornehmen, wird Alby automatisch aufgerufen (wie bei der Anmeldung) und du kannst bestätigen, dass du tatsächlich signieren möchtest.

## [§](#can-i-use-other-clients) Kann ich andere Clients nutzen?

Ja! Da du jetzt dein public/private key pair erstellt hast, kannst du dieses bei jedem Nostr-Client verwenden, um auf deinen Account zuzugreifen. Denke daran, ein Client ist lediglich die Schnittstelle, um Nachrichten zu sehen, die über das Nostr-Protokoll gesendet werden.

## [§](#next-steps) Nächste Schritte

Großartig, jetzt hast du ein Lightning-Wallet, eine Identität (dein Nostr-Schlüsselpaar) und hast einen Client getestet! Hier sind ein paar Links, die dir bei deiner Reise in den Nostr-Kaninchenbau helfen könnten:

-   [Verifiziere deine Nostr-Identität](/en/guides/get-verified)
-   [Was sind Relays und wie funktionieren sie?](/de/relays)
-   [Lerne mehr über NIPs und die Entwicklung des Protokolls](/de/the-protocol)
