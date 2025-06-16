---
title: Obtén la verificación NIP-05
description: Cómo verificar tu identidad en Nostr para obtener una marca de verificación y una manera más fácil de compartir tu cuenta..
---

## [§](#lo-que-aprenderás) Lo que aprenderás en esta guía

Es posible que hayas notado que en muchos clientes diferentes algunos usuarios tienen marcas de verificación, como en Twitter.

NIP-05 especifica cómo los usuarios de Nostr pueden verificar sus identidades. Diferentes clientes muestran la verificación de formas ligeramente diferentes, pero es una forma importante de mostrar a la comunidad de Nostr que eres un usuario real.

![Verificado en Snort](/images/snort-verified.webp)

El proceso de verificación en Nostr está documentado en una Posibilidad de Implementación de Nostr (NIP) llamada [NIP-05](https://github.com/nostr-protocol/nips/blob/master/05.md).

NIP-05 permite a un usuario de Nostr asignar su clave pública a un identificador de internet basado en DNS. El mecanismo de verificación es similar a como Google te pide que verifiques la propiedad de un dominio usando un registro DNS.

El beneficio principal de la verificación es que permite que un usuario de Nostr sea identificado por un nombre legible por humanos en lugar de una clave pública larga y difícil de recordar. Esto permite a los usuarios verificados de Nostr compartir fácilmente su identidad con otros.

Para utilizar NIP-05, los usuarios de Nostr agregan una URL de nip05 a su perfil (la mayoría de los clientes admiten esto). Las URLs de NIP-05 se parecen a los correos electrónicos: bob@example.com. Veamos las partes:

1. Todo lo que está antes del símbolo `@` ("bob", en nuestro ejemplo). Esto debe coincidir con el valor del campo de nombre en tu perfil de Nostr.
2. Todo lo que está después del símbolo `@` ("example.com", en nuestro ejemplo). Este es el dominio donde el cliente puede buscar un archivo `/.well-known/nostr.json` que contiene el nombre y la clave pública del usuario.

Cuando los clientes ven una URL de nip05, buscarán un archivo `/.well-known/nostr.json` en el dominio especificado. Este archivo debe contener la clave pública de Nostr del usuario especificado. Lee más detalles en la especificación de NIP-05.

Aunque suena técnico, es sorprendentemente fácil de verificar. Veamos cómo hacerlo.

## [§](#verificación-gratuita) Obtén la verificación a través de un servicio gratuito

En este momento, hay varios proveedores que están ayudando a la gente a obtener verificación de forma gratuita. Esta es una gran opción si aún no tienes sats en tu billetera lightning. Si es posible, apoya estos proyectos a través de donaciones. ⚡🤙

-   [Bitcoin Nostr](https://bitcoinnostr.com/)
-   [Nostrcheck.me](https://nostrcheck.me)
-   [zaps.lol](https://zaps.lol/)
-   [NIP05.social](https://nip05.social)
-   [Nostr-Check.com](https://nostr-check.com/)
-   [Verified Nostr](https://verified-nostr.com/)
-   [Cosa Nostr](https://cosanostr.com)
-   [Iris](https://iris.to)

## [§](#verificación-pagada) Paga a un proveedor por la verificación

Si no tiene su propio dominio o no desea configurarlo usted mismo, puede aprovechar una versión gratuita o paga (generalmente solo unos pocos [sats](https://coinmarketcap.com/alexandria/glossary/satoshi-sats)) Servicio NIP-05. Aquí hay algunos:

-   [Jellyfish (nostr.eco)](https://jellyfish.land/nip05)
-   [Nostrly](https://www.nostrly.com)
-   [Nostrplebs](https://nostrplebs.com)
-   [Nostr Verified](https://nostrverified.com)
-   [Alby](https://getalby.com)
-   [Nostr Directory](https://nostr.directory)
-   [Stacker News](https://stacker.news)
-   [Nostrich House](https://nostrich.house)
-   [Happy Tavern](https://happytavern.co/nostr-verified)

## [§](#verificacion-autohospedada) Verificación autohospedada

Si ya posee un dominio, esta es una opción gratuita. Solo necesita agregar un archivo `.well-known/nostr.json` a su dominio. El contenido del archivo debe ser el siguiente:

```json
{
    "nombres": {
        "YOUR_NOSTR_NAME": "TU_NOSTR_PUBLIC_KEY"
    }
}
```

Opcionalmente, también puede agregar una sección para que los clientes sepan en qué relés es probable que lo encuentren:

```json
{
   "nombres": {
     "YOUR_NOSTR_NAME": "YOUR_NOSTR_PUBLIC_KEY_IN_HEX_FORMAT"
   },
   "relés": {
     "TU_NOSTR_PUBLIC_KEY_IN_HEX_FORMAT": [
       "wss://relé.uno",
       "wss://relé.dos",
       ...
     ]
   }
}
```

Asegúrese de usar la versión hexadecimal de su clave pública en su archivo `nostr.json`. Esta es la versión de la clave que **no** comienza con `npub`.

Puede convertir su clave en [Nostr.band](https://nostr.band)

![Obtenga su clave hexadecimal](/images/get-hex-key.webp)

Finalmente, asegúrese de que este archivo se sirva con el encabezado `Access-Control-Allow-Origin` establecido en `*`, ya que los clientes deben poder acceder a él.
