---
title: El protocolo Nostr
description: Este es un resumen de alto nivel del protocolo Nostr con detalles sobre los tipos de eventos y cómo funcionan las Posibilidades de Implementación de Nostr (NIPs).
---

## [§](#Nostr-alto-nivel) Nostr de alto nivel

-   La red Nostr tiene dos componentes principales: [clientes](/es/clients) y [relés](/es/relays).
    -   Los **clientes** son la interfaz que utilizan los usuarios para leer y escribir datos en los repetidores. En el contexto de las redes sociales, piensa en esto como la aplicación web o la aplicación móvil de Twitter. Es un cliente que te permite leer y escribir datos en la base de datos centralizada de Twitter.
    -   Las **relés** son como bases de datos (aunque hacen mucho más que almacenar datos). Permiten a los clientes enviarles datos y almacenarlos en una base de datos. Los clientes pueden leer los datos de los repetidores para mostrárselos a los usuarios.
-   Cada usuario se identifica mediante una llave pública. Cada objeto de evento (por ejemplo, mensaje que publica, actualización de su lista de seguidores, etc.) está firmado. Los clientes validan estas firmas para asegurarse de que son correctas.
-   Los clientes obtienen datos de los repetidores y los publican en ellos. Casi siempre es el usuario quien elige los enlaces. Los enlaces no tienen por qué comunicarse entre sí, pero podrían hacerlo en el futuro.
-   Por ejemplo, para actualizar tu perfil, sólo tienes que dar instrucciones a tu cliente para que envíe un evento del tipo 0 a los relés que quieras utilizar. Los repetidores almacenarán ese evento.
-   Al iniciarse, tu cliente consulta los datos de los relés que le indiques. Esto puede ser filtrado para mostrar sólo los eventos de los usuarios que sigues o puedes pedir todo de todos, entonces el cliente te muestra esos datos.
-   Hay muchos tipos diferentes de eventos. Los eventos pueden contener todo tipo de datos estructurados, y las estructuras más utilizadas están encontrando su camino en [Nostr Implementation Possibilities](#nips) (NIPs - estándares de protocolo a los que todo el mundo se adhiere) para que todos los clientes y relés puedan manejarlos sin problemas.
-   Los datos que puedes ver en Nostr dependen completamente de los relés a los que decidas conectarte. Para más información, consulta el diagrama de red que aparece a continuación.

### Diagrama de red

![Diagrama de red en Nostr](/images/nostr-network.webp)

Puedes ver en el diagrama de arriba que tenemos 3 relés y 3 usuarios. Cada uno de los usuarios se conecta a Nostr con un cliente diferente (y en una plataforma diferente).

Dadas las lecturas y escrituras en el diagrama:

-   Bob puede ver todos los mensajes de Alice, pero no puede ver nada de Mary (y ni siquiera sabe que existe)
-   Alice puede ver todos los mensajes de Bob, pero no puede ver nada de Mary (y ni siquiera sabe que existe).
-   Mary puede ver todos los mensajes de Bob y Alice. Esto se debe a que mientras ella sólo escribe al Relé 3, está leyendo desde el Relé 2, donde Bob y Alice están escribiendo sus mensajes.

Esta es una situación muy simple, pero ya puedes ver que la elección de los relés a los que quieres conectarte puede tener un gran impacto en quién y qué verás cuando utilices Nostr.

## [§](#events) Eventos

Los eventos son el único tipo de objeto de la red Nostr. Cada objeto de evento tiene un "tipo", que indica de qué tipo de evento se trata (qué tipo de acción puede realizar un usuario o qué tipo de mensaje puede recibir).

Este es el aspecto de un evento de tipo 1 (el tipo 1 es para notas de texto cortas, es decir, algo parecido a un tweet en Twitter)

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

-   El campo `id` nos indica el ID del evento
-   El campo `pubkey` nos indica la clave pública del usuario que envió el evento
-   El campo `created_at` nos dice cuándo se publicó el evento
-   El campo "kind" indica de qué tipo de evento se trata.
-   El campo `tags` nos informa sobre las etiquetas del evento. Éstas se utilizan para crear enlaces, añadir contenido multimedia y mencionar a otros usuarios o eventos.
-   El campo `content` nos da el contenido del evento. En este caso, el mensaje de texto corto.
-   El campo `sig` es la firma que los clientes utilizan para verificar que el usuario con esta pubkey envió de hecho este evento en la fecha especificada.

### Tipos de eventos

Esta es una lista de los tipos de `Eventos` actuales. La lista más actualizada se puede encontrar siempre en [Repositorio Nostr NIPs](https://github.com/nostr-protocol/nips).

| kind    | description                | NIP                      |
| ------- | -------------------------- | ------------------------ |
| `0`     | Metadata                   | [1](https://nips.be/1)   |
| `1`     | Short Text Note            | [1](https://nips.be/1)   |
| `2`     | Recommend Relay            | [1](https://nips.be/1)   |
| `3`     | Contacts                   | [2](https://nips.be/2)   |
| `4`     | Encrypted Direct Messages  | [4](https://nips.be/4)   |
| `5`     | Event Deletion             | [9](https://nips.be/9)   |
| `6`     | Reposts                    | [18](https://nips.be/18) |
| `7`     | Reaction                   | [25](https://nips.be/25) |
| `8`     | Badge Award                | [58](https://nips.be/58) |
| `40`    | Channel Creation           | [28](https://nips.be/28) |
| `41`    | Channel Metadata           | [28](https://nips.be/28) |
| `42`    | Channel Message            | [28](https://nips.be/28) |
| `43`    | Channel Hide Message       | [28](https://nips.be/28) |
| `44`    | Channel Mute User          | [28](https://nips.be/28) |
| `1063`  | File Metadata              | [94](https://nips.be/94) |
| `1984`  | Reporting                  | [56](https://nips.be/56) |
| `9734`  | Zap Request                | [57](https://nips.be/57) |
| `9735`  | Zap                        | [57](https://nips.be/57) |
| `10000` | Mute List                  | [51](https://nips.be/51) |
| `10001` | Pin List                   | [51](https://nips.be/51) |
| `10002` | Relay List Metadata        | [65](https://nips.be/65) |
| `13194` | Wallet Info                | [47](https://nips.be/47) |
| `22242` | Client Authentication      | [42](https://nips.be/42) |
| `23194` | Wallet Request             | [47](https://nips.be/47) |
| `23195` | Wallet Response            | [47](https://nips.be/47) |
| `24133` | Nostr Connect              | [46](https://nips.be/46) |
| `30000` | Categorized People List    | [51](https://nips.be/51) |
| `30001` | Categorized Bookmark List  | [51](https://nips.be/51) |
| `30008` | Profile Badges             | [58](https://nips.be/58) |
| `30009` | Badge Definition           | [58](https://nips.be/58) |
| `30017` | Create or update a stall   | [15](https://nips.be/15) |
| `30018` | Create or update a product | [15](https://nips.be/15) |
| `30023` | Long-form Content          | [23](https://nips.be/23) |
| `30078` | Application-specific Data  | [78](https://nips.be/78) |
| `31989` | Handler recommendation     | [89](https://nips.be/89) |
| `31990` | Handler information        | [89](https://nips.be/89) |

### Tags estandarizados

| nombre     | valor                   | otros parmetros   | NIP                      |
| ---------- | ----------------------- | ----------------- | ------------------------ |
| e          | event id (hex)          | relay URL, marker | [1](01.md), [10](10.md)  |
| p          | pubkey (hex)            | relay URL         | [1](01.md)               |
| a          | coordinates to an event | relay URL         | [33](33.md), [23](23.md) |
| r          | a reference (URL, etc)  |                   | [12](12.md)              |
| t          | hashtag                 |                   | [12](12.md)              |
| g          | geohash                 |                   | [12](12.md)              |
| nonce      | random                  |                   | [13](13.md)              |
| subject    | subject                 |                   | [14](14.md)              |
| d          | identifier              |                   | [33](33.md)              |
| expiration | unix timestamp (string) |                   | [40](40.md)              |

## [§](#nips) NIPs

Las Posibilidades de Implementación de Nostr, o NIP por sus siglas en inglés, existen para documentar lo que DEBE, lo que DEBERÍA y lo que PUEDE ser implementado por el software cliente y de retransmisión compatible con Nostr. Las NIP son los documentos que describen cómo funciona el protocolo Nostr.

### ¿Por qué deberían importarme los NIPs?

Nostr está descentralizado y no es propiedad de un servicio centralizado (como Twitter). Esto significa que la dirección del protocolo depende de todos nosotros. Podemos sugerir y abogar por cambios y ofrecer comentarios sobre las ideas sugeridas por otros.

Ser parte activa de la comunidad te da voz y voto en la dirección de la red. Los NIP publicados en el repositorio principal ya están aprobados. Añadir nuevas ideas se hace a través de Pull Request en ese repositorio.

### ¿Dónde puedo encontrar los NIPs?

Puedes ver todos los NIPs actuales en [Nostr NIP repo](https://github.com/nostr-protocol/nips).
