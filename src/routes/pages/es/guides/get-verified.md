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

- [Bitcoin Nostr](https://bitcoinnostr.com/)
- [Nostrcheck.me](https://nostrcheck.me)
- [Nostr.industries](https://nostr.industries/)

## [§](#verificación-pagada) Paga a un proveedor por la verificación

Si no tienes tu propio dominio o no quieres configurarlo tú mismo, puedes aprovechar un servicio NIP-05 gratuito o de pago (por lo general, solo unos pocos [sats](https://coinmarketcap.com/alexandria/glossary/satoshi
