---
title: Empieza con Iris
description: Una guía paso a paso para comenzar con Nostr usando el cliente web Iris.
---

## Paso 1 – Instalar Alby

Obtén [Alby](https://chrome.google.com/webstore/detail/alby-bitcoin-lightning-wa/iokeahhehimjnekafflcihljlcjccdbe) desde la tienda web de Chrome o directamente desde el [sitio web de Alby](https://getalby.com/).

Una vez que hayas instalado la extensión, crea una cuenta nueva. A menos que ya seas un profesional, recomendamos simplemente crear una cuenta en Alby y configurar una nueva billetera Lightning.

## Paso 2 – Generar una nueva clave privada con Iris

1. Navega a [Iris.to](https://iris.to).
1. Ingresa un nombre y haz clic en "Go" ![Pantalla de registro de Iris](/images/iris-signup.webp)
1. Iris generará un nuevo par de claves pública/privada para ti y te iniciará sesión. En este punto, puedes comenzar a seguir a personas y publicar notas. ![Nueva experiencia de usuario de Iris](/images/iris-nux.webp)
1. Sin embargo, vamos a asegurarnos de que estamos utilizando la aplicación de la manera más segura posible. Dirígete a "Configuración" en la izquierda y luego haz clic en "Cuentas" en el menú secundario. ![Configuración de Iris](/images/iris-accounts-settings.webp)
1. Copia tu clave pública y tu clave privada "nsec". Estas deben almacenarse en algún lugar MUY seguro. Como un administrador de contraseñas (nos gusta 1Password).
1. Una vez que estés seguro de haber guardado tu clave privada en algún lugar seguro, haz clic en "Cerrar sesión" en la parte superior de la página de cuentas para cerrar sesión en Iris. Volveremos a iniciar sesión de manera segura en un segundo.

## Paso 3 – Agregar tu nueva clave privada a Alby

1. Una vez que hayas creado una cuenta y hayas guardado tu clave privada en un lugar seguro, necesitamos agregar esa clave a la extensión Alby.
1. Abre la extensión Alby y luego navega a la página de cuentas de Alby. ![Cuentas de Alby](/images/alby-accounts.webp)
1. Haz clic en tu cuenta y luego, en la sección de Nostr, pega tu nueva clave privada (que comienza con `nsec`) en el campo.
1. Ahora estás listo para usar Alby para iniciar sesión y usar Nostr a través de cualquier cliente web.

## Paso 4 – Iniciar sesión de nuevo en Iris

1. De regreso en la página de inicio de sesión de Iris, haz clic en "Inicio de sesión de extensión de Nostr". ![Pantalla de registro de Iris](/images/iris-signup.webp)
1. Autoriza el uso de la clave en la ventana emergente de la extensión Alby que aparecerá.
1. ¡Has iniciado sesión! Puede tomar unos momentos para que el contenido comience a cargarse. 🤙 Necesitarás firmar usando la extensión Alby cada vez que realices una acción en Iris. Puedes marcar la casilla para que Alby recuerde tu elección si esto te molesta.
