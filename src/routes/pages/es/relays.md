---
title: ¿Qué son los Relés de Nostr?
description: Una breve descripción de qué son los relés de Nostr, por qué son importantes y cómo funcionan.
---

## ¿Qué son los relés?

Los relés o Relays (En inglés) son como los servidores backend de Nostr. Permiten a los clientes de Nostr enviarles mensajes, y pueden (o no) almacenar esos mensajes y transmitirlos a todos los demás clientes conectados.

El mundo de los relés está cambiando rápidamente, por lo que se esperan muchos cambios en el futuro. Una cosa a tener en cuenta es que, debido a que Nostr es descentralizado y depende de los relés para almacenar y recuperar datos, si notas que tu cliente de Nostr se siente lento, es probablemente debido a los relés que estás utilizando. Podría valer la pena agregar algunos relés más (o eliminar algunos) en tu cliente.

## Relés pagados vs gratuitos

Muchos relés actualmente son gratuitos de usar. Dado los costos de operar un relé (pago por computación, almacenamiento y ancho de banda), la mayoría de las personas esperan que los relés pagados sean la norma en el futuro.

Un beneficio importante de utilizar relés pagados en la actualidad es la mayor calidad de usuarios y notas en los relés pagados. La "prueba de trabajo" de pagar por el acceso al relé es algo que ayuda a evitar que las cuentas de spam infesten la red.

### Relés pagados populares

Una lista actualizada de relés pagados con detalles sobre cuánto cuestan y quién los opera se puede encontrar en [Relay Exchange](https://relay.exchange/).

### ¿Dónde puedo encontrar una lista de todos los relés?

El mejor recurso que hemos encontrado para explorar y evaluar la velocidad de los relés conocidos es el sitio [Nostr.watch](https://legacy.nostr.watch/relays/find).

## ¿Qué sucede si todos los relés que utilizo dejan de funcionar?

Si _todos_ los relés que has utilizado en el pasado se desconectan, todas tus publicaciones serán irrecuperables. Esta es una de las razones por las que Nostr permite a los usuarios conectarse a muchos relés, lo cual garantiza cierto grado de respaldo. Dicho esto, si realmente estás interesado en ser inmune a la censura, puedes y debes ejecutar tu propio relé personal.

## ¿Debería ejecutar mi propio relé?

Para la mayoría de las personas, no vale la pena el inconveniente. Dicho esto, si tienes conocimientos técnicos y deseas asegurarte de que tu discurso sea absolutamente inmutable a la censura, o si deseas ejecutar un relé privado para un pequeño grupo, entonces puedes y debes ejecutar tu propio relé. Esto garantiza que siempre tengas una copia de todas tus publicaciones e interacciones en Nostr para siempre. Estamos trabajando en una guía para esto, pero mientras tanto, [aquí tienes una guía](https://andreneves.xyz/p/set-up-a-nostr-relay-server-in-under) de Andre Neves sobre cómo configurar un relé de Nostr.
