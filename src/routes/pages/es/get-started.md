---
title: Comienza con Nostr
description: Esta guía te ayudará a entender los conceptos básicos de Nostr y te preparará para utilizar Nostr con una nueva cuenta. Cubriremos cómo crear una nueva lightning wallet, crear una cuenta e iniciar sesión en un cliente de forma segura.
---

## [§](#entendiendo-llaves) Entendiendo las Llaves

Cada cuenta de Nostr se basa en un par de llaves pública/privada. Una forma sencilla de entenderlo es que tu clave pública es tu nombre de usuario y tu llave privada es tu contraseña, con una salvedad importante. A diferencia de una contraseña, tu cllave privada no se puede restablecer si se pierde.

Te lo repito para que quede claro: **Si pierdes tu llave privada, pierdes tu cuenta de Nostr. Si otra persona tiene acceso a tu llave privada, puede tomar el control de tu cuenta.**

Asegúrate de guardar tu llave privada en un lugar seguro, como un gestor de contraseñas. (Nos gusta [1Password](https://1password.com?utm_source=nostr.how&ref=nostr.how)).

## [§](#protocolo-vs-cliente) Protocolo vs Cliente

Nostr por sí mismo es ya un protocolo, es un procedimiento acordado para transmitir mensajes en Internet.

Accederás a Nostr (el protocolo) a través de un cliente. Los clientes pueden ser aplicaciones web, de escritorio o móviles. Algunos clientes de Nostr te permiten iniciar sesión pegando tu llave privada. En la web, esto no se recomienda, ya que es tedioso e inseguro. En su lugar, recomendamos usar una extensión de firma en su navegador, que es un software diseñado específicamente para administrar claves privadas de manera segura y firmar eventos criptográficamente.

[Alby](https://getalby.com?utm_source=nostr.how&ref=nostr.how) es una estensión de firma y monedero bitcoin lightning que tiene soporte incorporado para Nostr. Es una gran opción para los nuevos usuarios. Cubriremos la instalación de Alby en las guías específicas del cliente donde se necesita a continuación.

## [§](#crear-tu-cuenta) Crear tu cuenta

Acá está una guía paso a paso de los clientes que recomendamos:

-   [Iris](/es/guias/iris) (Web)
-   [Damus](/es/guias/damus) (iOS)
-   [Amethyst](/es/guias/amethyst) (Android)

Algunos otros clientes que amamos pero no tenemos guías:

-   [Primal](https://primal.net) (Web, iOS, Android) Cliente fácil de usar con billetera Lightning incorporada en dispositivos móviles.
-   [Snort](https://snort.social?utm_source=nostr.how&ref=nostr.how) (Web) Cliente súper rapido y veloz.
-   [Coracle](https://coracle.social?utm_source=nostr.how&ref=nostr.how) (Web) Un cliente centrado en la navegación por relevos.

## [§](#encontrar-amigos) Encontrar amigos en Nostr

-   Si sabes que alguien está en Nostr, encuentra su perfil buscando su clave pública.
-   Muchos usuarios de Twitter tuitean sus claves públicas de Nostr con el hashtag #Nostr, por lo que una búsqueda con este hashtag puede ser un buen comienzo.
-   [nostr.directory](https://nostr.directory?utm_source=nostr.how&ref=nostr.how) es una base de datos que relaciona a los usuarios de Twitter con sus claves públicas de Nostr.

## [§](#Que-es-firmar) ¿Qué quiere decir "firmar"?

Para interactuar con el protocolo Nostr debes crear una firma criptográfica cada vez que realices una acción. Piensa en esta firma como un paso de autenticación en el que confirmas que, efectivamente, eres quien dices ser.

La mayoría de los clientes Nostr intentan hacer esto fácil y rápido (o te permiten guardar tu llave privada en el cliente para que puedan firmar en tu nombre cada vez que hagas algo).

Al proporcionar únicamente nuestra llave pública, se nos pedirá que firmemos cada vez que queramos interactuar con cualquier publicación o realizar cualquier actualización en nuestro perfil. Cuando eso ocurra, Alby aparecerá automáticamente (como lo hizo durante el paso de registro) y podrás confirmar que realmente quieres firmar.

## [§](#puedo-yo-usar-otros-clientes) ¿Puedo usar otros clientes?

Sí. Ahora que has creado tu par de llaves pública/privada, puedes usar este par en cualquier cliente Nostr para acceder a tu cuenta. Recuerda, el cliente es sólo una interfaz para ver los mensajes emitidos en el protocolo Nostr.

## [§](#proximos-pasos) Próximos pasos

Genial, ya tienes una cartera lightning, una identidad (tu par de llaves) y has probado un cliente. Aquí tienes algunos enlaces que pueden resultarte útiles para adentrarte en Nostr:

-   [Verificar tu identidad](/es/guides/get-verified)
-   [¿Qué son Relés y cómo funcionan?](/es/relays)
-   [Más información sobre los NIPs y el desarrollo del protocolo](/es/the-protocol)
