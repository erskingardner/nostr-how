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

-   [Bitcoin Nostr](https://bitcoinnostr.com/)
-   [Nostrcheck.me](https://nostrcheck.me)
-   [zaps.lol](https://zaps.lol/)
-   [NIP05.social](https://nip05.social)
-   [Nostr-Check.com](https://nostr-check.com/)
-   [Verified Nostr](https://verified-nostr.com/)
-   [Cosa Nostr](https://cosanostr.com)
-   [Iris](https://iris.to)

## [§](#paid-verification) Verifiziere dich bei einem Bezahl-Service

Wenn du keine eigene Domain hast oder selbst nicht einrichten willst, kannst du auch einen kostenpflichtigen NIP-05-Service in Anspruch nehmen. In der Regel jostet das nur ein paar [Sats](https://coinmarketcap.com/alexandria/glossary/satoshi-sats). Hier sind ein paar Beispiele:

-   [Jellyfish (nostr.eco)](https://jellyfish.land/nip05)
-   [Nostrly](https://www.nostrly.com)
-   [Nostrplebs](https://nostrplebs.com)
-   [Nostr Verified](https://nostrverified.com)
-   [Alby](https://getalby.com)
-   [Nostr Directory](https://nostr.directory)
-   [Stacker News](https://stacker.news)
-   [Nostrich House](https://nostrich.house)
-   [Happy Tavern](https://happytavern.co/nostr-verified)

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

Du kannst deinen Schlüssel auf [Nostr.band](https://nostr.band) konvertieren.

![Get your hex key](/images/get-hex-key.webp)

Stelle zum Schluss noch sicher, dass die `nostr.json`-Datei im `Access-Control-Allow-Origin` Header auf `*` gesetzt ist, damit Clients darauf zugreifen können.
