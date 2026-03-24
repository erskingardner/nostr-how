---
title: Bekomme deine Nostr-Adresse (NIP-05)
description: Wie du deine Nostr-Adresse (NIP-05) bekommst und welche Vorteile es dir bringt.
---

## [§](#what-youll-learn) Was du in diesem Guide lernst

Möglicherweise hast du in manchen Clients bemerkt, dass einige Benutzer einen Haken auf ihrem Profil haben, ähnlich wie bei Twitter.

Im NIP-05 wird spezifiziert, wie Nostr-Benutzer ihre Identität "verifizieren" können. Verschiedene Clients zeigen dies dann auf ganz unterschiedliche Weise an, aber es ist eine weitere Möglichkeit, der Nostr-Community zu zeigen, dass du ein echter Benutzer bist. Es besteht aber keine 100 prozentige Gewissheit, dass ein verifierter Nutzer ein echter Nutzer ist.

![Snort Verified](/images/snort-verified.webp)

Der Verifizierungsprozess ist in der Nostr-Implementationsmöglichkeit-05 [NIP-05](https://github.com/nostr-protocol/nips/blob/master/05.md) beschrieben .

NIP-05 ermöglicht es einem Nostr-Account, den öffentlichen Schlüssel einer DNS-basierten Internetkennung zuzuordnen. Der Verifizierungsmechanismus ähnelt der Art und Weise, wie Google die Inhaberschaft einer Domain mit Hilfe eines DNS-Eintrags bestätigt.

Der Hauptvorteil der Verifizierung besteht darin, dass ein Nostr-Account anhand eines für Menschen lesbaren Namens identifiziert werden kann, anstatt durch einen langen und schwer zu merkenden öffentlichen Schlüssel. Das ermöglicht es, die Identität eines verifizierten Accounts leichter mit anderen zu teilen.

Die meisten Clients unterstützen NIP-05. Dazu fügst du einfach in deinem Profil eine NIP-05-URL hinzu. NIP-05-URLs sehen wie E-Mails aus – bob@example.com. Lass uns die URL genauer anschauen:

1. Alles vor dem `@`-Symbol ( in unserem Beispiel "bob") muss mit dem Wert des Namensfeldes in deinem Nostr-Profil übereinstimmen.
2. Alles nach dem `@`-Symbol ( in unserem Beispiel "example.com") ist die Domain, in der der Client nach einer Datei `/.well-known/nostr.json` suchen kann, die den Namen und den öffentlichen Schlüssel des Benutzers enthält.

Wenn Clients eine NIP-05-URL sehen, suchen sie in der angegebenen Domäne nach einer Datei `/.well-known/nostr.json`. Diese Datei muss den öffentlichen Schlüssel (npub) für den angegebenen Account enthalten. Weitere Informationen findest du in der [NIP-05 -Spezifikation](https://github.com/nostr-protocol/nips/blob/master/05.md).

Obwohl das alles sehr technisch klingt, ist es überraschend einfach, sich verifizieren zu lassen. Und so geht's.

## [§](#free-verification) Verifiziere dich bei einem kostenlosen Service

Im Moment gibt es mehrere Anbieter, bei denen du dich kostenlos verifizieren lassen kannst. Das ist eine großartige Option, wenn du noch keine Sats in deiner Lightning-Wallet hast. Aber du kannst diese Projekte gerne durch Spenden unterstützen. ⚡🤙

-   [Nostrcheck.me](https://nostrcheck.me?utm_source=nostr.how&ref=nostr.how)
-   [zaps.lol](https://zaps.lol?utm_source=nostr.how&ref=nostr.how)
-   [Nostr-Check.com](https://nostr-check.com?utm_source=nostr.how&ref=nostr.how)
-   [Verified Nostr](https://verified-nostr.com?utm_source=nostr.how&ref=nostr.how)
-   [Cosa Nostr](https://cosanostr.com?utm_source=nostr.how&ref=nostr.how)

## [§](#paid-verification) Verifiziere dich bei einem Bezahl-Service

Wenn du keine eigene Domain hast oder sie nicht selbst einrichten willst, kannst du auch einen kostenlosen oder kostenpflichtigen NIP-05-Service in Anspruch nehmen. In der Regel kostet das nur ein paar [Sats](https://coinmarketcap.com/alexandria/glossary/satoshi-sats?utm_source=nostr.how&ref=nostr.how). Hier sind ein paar Beispiele:

-   [Nostrly](https://www.nostrly.com?utm_source=nostr.how&ref=nostr.how)
-   [Nostrplebs](https://nostrplebs.com?utm_source=nostr.how&ref=nostr.how)
-   [Nostr Verified](https://nostrverified.com?utm_source=nostr.how&ref=nostr.how)
-   [Alby](https://getalby.com?utm_source=nostr.how&ref=nostr.how)
-   [Nostr Directory](https://nostr.directory?utm_source=nostr.how&ref=nostr.how)
-   [Stacker News](https://stacker.news?utm_source=nostr.how&ref=nostr.how)
-   [Nostrich House](https://nostrich.house?utm_source=nostr.how&ref=nostr.how)
-   [Happy Tavern](https://happytavern.co/nostr-verified?utm_source=nostr.how&ref=nostr.how)

## [§](#self-hosted) Verifizierung mit eigener Domain

Wenn du eine eigene Domain besitzt, musst du nur eine `.well-known/nostr.json`-Datei zu deiner Domain hinzufügen. Der Inhalt der Datei sollte wie folgt aussehen:

```json
{
    "names": {
        "YOUR_NOSTR_NAME": "YOUR_NOSTR_PUBLIC_KEY"
    }
}
```

Optional kannst du auch einen Abschnitt hinzufügen, um Clients mitzuteilen, auf welchen Relays sie dich wahrscheinlich finden werden:

```json
{
  "names": {
    "YOUR_NOSTR_NAME": "YOUR_NOSTR_PUBLIC_KEY_IN_HEX_FORMAT"
  },
  "relays": {
    "YOUR_NOSTR_PUBLIC_KEY_IN_HEX_FORMAT": [
      "wss://relay.one",
      "wss://relay.two",
      ...
    ]
  }
}
```

Stelle sicher, dass du die Hexadezimalversion deines öffentlichen Schlüssels in der `nostr.json`-Datei verwendest. Das ist die Version des öffentlichen Schlüssels, die **nicht** mit `npub` beginnt.

Du kannst dein Lieblings-LLM bitten, deinen npub-Wert in einen "hex pubkey" umzuwandeln, und es wird das gern tun.

Stelle zum Schluss noch sicher, dass die `nostr.json`-Datei mit dem Header `Access-Control-Allow-Origin` auf `*` ausgeliefert wird, damit Clients darauf zugreifen können.
