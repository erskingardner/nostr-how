---
title: Etre vérifié avec le NIP-05
description: Comment vérifier votre identité sur Nostr pour obtenir une coche de vérification et un moyen plus facile de partager votre compte.
---

## [§](#what-youll-learn) Ce que vous apprendrez dans ce guide

Vous avez peut-être remarqué sur différents clients que certains utilisateurs ont des contrôles, comme sur Twitter.

Le NIP-05 spécifie comment les utilisateurs de Nostr peuvent vérifier leur identité. Les différents clients présentent la vérification de manière légèrement différente, mais il s'agit d'un moyen important de montrer à la communauté Nostr que vous êtes un utilisateur réel.
![Snort Verified](/images/snort-verified.webp)

Le processus de vérification sur Nostr est documenté dans un Nostr Implementation Possibilities (NIP) appelé [NIP-05](https://github.com/nostr-protocol/nips/blob/master/05.md).

Le NIP-05 permet à un utilisateur de Nostr de faire correspondre sa clé publique à un identifiant internet basé sur le DNS. Le mécanisme de vérification est similaire à celui utilisé par Google pour vérifier la propriété d'un domaine à l'aide d'un enregistrement DNS.

Le principal avantage de la vérification est qu'elle permet à un utilisateur Nostr d'être identifié par un nom lisible par l'homme, au lieu d'une longue clé publique difficile à mémoriser. Cela permet aux utilisateurs vérifiés de Nostr de partager facilement leur identité avec d'autres personnes.

Pour utiliser le NIP-05, les utilisateurs de Nostr ajoutent une url nip05 à leur profil (la plupart des clients ont un support pour cela). Les urls NIP-05 ressemblent à des emails - bob@example.com. Décomposons les différentes parties :

1. Tout ce qui précède le symbole `@` ("bob", dans notre exemple). Cela doit correspondre à la valeur du champ nom dans votre profil Nostr.
1. Tout ce qui suit le symbole `@` ("exemple.com", dans notre exemple). C'est le domaine dans lequel le client peut chercher un fichier `/.well-known/nostr.json` qui contient le nom et la clé publique de l'utilisateur.
1. Lorsque les clients voient une url nip05, ils vont chercher un fichier `/.well-known/nostr.json` dans le domaine spécifié. Ce fichier doit contenir la clé publique de nostr pour l'utilisateur spécifié. Pour plus de détails, voir la spécification NIP-05.

Bien que cela semble technique, il est étonnamment facile de se faire vérifier. Voyons comment procéder.

## [§](#free-verification) Obtenir une vérification grâce à un service gratuit

Actuellement, plusieurs fournisseurs aident les gens à se faire vérifier gratuitement. C'est une excellente option si vous n'avez pas encore de sats dans votre portefeuille lightning. Si possible, soutenez ces projets par des dons. ⚡🤙

-   [Bitcoin Nostr](https://bitcoinnostr.com/)
-   [Nostrcheck.me](https://nostrcheck.me)
-   [zaps.lol](https://zaps.lol/)
-   [NIP05.social](https://nip05.social)
-   [Nostr-Check.com](https://nostr-check.com/)
-   [Verified Nostr](https://verified-nostr.com/)
-   [Cosa Nostr](https://cosanostr.com)

## [§](#paid-verification) Payer un fournisseur pour la vérification

Si vous n'avez pas votre propre domaine ou si vous ne voulez pas le configurer vous-même, vous pouvez profiter d'un service NIP-05 gratuit ou payant (généralement quelques [sats](https://coinmarketcap.com/alexandria/glossary/satoshi-sats)). En voici quelques-uns :

-   [Nostrplebs](https://nostrplebs.com)
-   [Nostr Verified](https://nostrverified.com)
-   [Alby](https://getalby.com)
-   [Nostr Directory](https://nostr.directory)
-   [Nostr.band](https://nip05.nostr.band)
-   [Nostr.com.au](https://nostr.com.au)
-   [Vida](https://Vida.page)
-   [Stacker News](https://stacker.news)
-   [Nostrich House](https://nostrich.house)

## [§](#self-hosted) Vérification auto-hébergée

Si vous possédez déjà un domaine, c'est une option gratuite. Il vous suffit d'ajouter un fichier `.well-known/nostr.json` à votre domaine. Le contenu de ce fichier doit être le suivant :

```json
{
    "names": {
        "YOUR_NOSTR_NAME": "YOUR_NOSTR_PUBLIC_KEY"
    }
}
```

En option, vous pouvez également ajouter une section permettant aux clients de savoir sur quels relais ils sont susceptibles de vous trouver :

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

Assurez-vous d'utiliser la version hexagonale de votre clé publique dans votre fichier `nostr.json`. C'est la version de la clé qui **ne** commence pas par `npub`.

Vous pouvez convertir votre clé sur [Nostr.band](https://nostr.band)

![Get your hex key](/images/get-hex-key.webp)

Enfin, assurez-vous que ce fichier est servi avec l'en-tête `Access-Control-Allow-Origin` fixé à `*` car il doit être accessible par les clients.
