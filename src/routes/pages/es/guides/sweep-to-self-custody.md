---
title: Barrer a la auto-custodia
description: Una guía paso a paso para barrer sats a una billetera de autocustodia.
---

## [§](#¿Para-quién-es-esta-guía?) ¿Para quién es esta guía?

La mayoría de los usuarios en este momento están usando Nostr con una billetera lightning custodial, como Wallet of Satoshi o Alby.

Si eres uno de ellos, quiero que pienses en los sats en tu billetera en este momento. Ahora, piensa en perder todos esos sats. Si esa idea te hace sentir incómodo o preocupado, esta guía es para ti.

Cubriremos cómo configurar una billetera auto-custodial que te permitirá barrer fondos de tu billetera custodial periódicamente para su custodia segura.

## [§](#¿Por-qué-es-importante-la-auto-custodia?) ¿Por qué es importante la auto-custodia?

En pocas palabras; no tus claves, no tus monedas. Cuando dejas tus sats en una billetera custodial, estás aceptando algún grado de riesgo de contraparte. Imagina si Wallet of Satoshi fuera hackeada de alguna manera. Como ellos tienen todos los fondos de los clientes, una situación como esta significaría que tus fondos se perderían.

Por esto, se recomienda encarecidamente que solo mantengas una pequeña cantidad de fondos en _cualquier_ billetera custodial y auto-custodies el resto de tus bitcoins.

## [§](#¿Listo?-¡Vamos!) ¿Listo? ¡Vamos!

Esta es una guía para principiantes que no requiere configurar tu propio nodo lightning ni hacer nada técnico. Nuestro hack aquí es usar la comunidad de Bitcoiners de Nostr para ayudarte a realizar el intercambio de sats en la red Lightning por sats auto-custodiados en la cadena base de Bitcoin. Asegura tu stack y haz amigos realizando transacciones peer-to-peer. ¡Doble victoria!

Si te sientes abrumado por la terminología aquí, consulta [la sección al final de la página](#lightning-bitcoin-en-cadena-qué) para obtener más detalles.

1. Primero siga esta guía para configurar una nueva billetera Bitcoin en [Blue Wallet](https://bluewallet.io/docs/create-bitcoin-wallet/). También puede usar cualquier otra billetera con custodia propia.
1. Una vez que haya guardado cuidadosamente sus palabras clave (que es lo que usará para restaurar su billetera si es necesario), estará listo para encontrar a alguien con quien hacer un intercambio.
1. La forma más fácil de hacer esto es publicar una nota que mencione las etiquetas #plebchain y #bitcoin mencionando que le gustaría intercambiar algunos satélites relámpago por satélites en cadena. No se avergüence de enviar mensajes directos a personas que hablan sobre bitcoin regularmente. También puede [hacerme ping directamente](https://primal.net/jeffg) si es necesario.
1. A partir de ahí, harás un plan directamente con la persona con la que vas a realizar el intercambio. Antes de realizar cualquier intercambio, tómese un tiempo para conocer un poco a la persona, ya que no hay depósito en garantía en Bitcoin, debe estar seguro de que está tratando con alguien en quien puede confiar para completar la transacción. En general, el proceso se parece a esto:
    1. Acordar una cantidad a canjear.
    1. Proporcione su dirección de billetera recién creada (en Blue Wallet) a la persona a través de DM.
    1. Le envías sats a la persona a través de tu cliente Nostr.
    1. Iniciarán una transacción en cadena para pagarle la misma cantidad de sats (potencialmente menos cualquier tarifa de transacción).
    1. Recuerde, esta transacción en cadena llevará algún tiempo. Su socio comercial puede (y debe) enviarle el ID de la transacción tan pronto como lo tenga para que pueda seguirlo en [mempool.space](https://mempool.space).
1. ¡Eso es todo! Estás listo. Una vez que lleguen los fondos, habrá tomado con éxito la autocustodia de su primer Bitcoin. Trátalo con respeto y cuídalo bien.

## [§](#lightning-bitcoin-en-cadena-qué) ¿Lightning? ¿Bitcoin? ¿En cadena? ¿Qué?

Si todo esto te suena a griego, no te preocupes. Antes de entrar en la guía, cubramos rápidamente algo de terminología.

### Bitcoin

Esta madriguera de conejo no tiene fondo conocido. Dicho esto, si eres nuevo en Bitcoin, lo único que realmente necesitas saber es que Bitcoin es una forma de dinero electrónico completamente descentralizada. No está controlado por ninguna persona o entidad y se ejecuta según reglas codificadas en el software, en lugar de depender de la política y los gobiernos. Bitcoin es el único dinero electrónico verdaderamente descentralizado y basado en reglas.

Bitcoin prioriza la certeza sobre la velocidad. Esto significa que las transacciones cuestan un poco de comisión y tardan un tiempo en confirmarse, pero una vez que se confirman, son completamente irreversibles y nadie puede tomar sus monedas ni censurar su transacción.

Si desea obtener más información, aquí hay algunos excelentes recursos iniciales para profundizar en Bitcoin.

1. [Guía de Bitcoin.org](https://bitcoin.org/es/como-funciona)
1. [Guía para principiantes de Bitcoin](https://bitcoiner.guide/beginner/)

### Lightning

Lightning es una capa de pagos que se ejecuta sobre Bitcoin. Fundamentalmente, todavía está realizando pagos utilizando Bitcoin como dinero, pero Lightning permite transacciones casi instantáneas y con tarifas extremadamente bajas. Debido a esto, la red Lightning ha abierto muchos casos de uso nuevos que involucran micropagos. Los detalles de cómo funciona Lightning están más allá del alcance de esta guía de introducción, pero aquí hay algunos recursos si está interesado en leerlos:

1. [Bitcoiner Lightning Guide](https://bitcoiner.guide/lightning/)
1. [Lightning Labs Overview](https://docs.lightning.engineering/the-lightning-network/overview)

### En cadena vs fuera de cadena

A menudo escuchará a la gente referirse a Bitcoin dentro de la cadena frente a fuera de la cadena. Cuando las personas hablan de transacciones en cadena, simplemente se refieren a realizar transacciones utilizando la cadena de bloques básica de Bitcoin (recuerde, esto es más lento, pero 100% definitivo y seguro). Cuando las personas se refieren a transacciones fuera de la cadena, con mayor frecuencia se refieren a Lightning.

### Custodia vs Autocustodia

Para aquellos nuevos en Bitcoin, este concepto puede parecer extraño. Después de todo, la mayoría de nosotros (al menos en el mundo desarrollado) solo hemos utilizado servicios de custodia, como bancos, para almacenar nuestro dinero. Pero como hemos visto recientemente (y regularmente en los mercados financieros menos desarrollados de todo el mundo), mantener su dinero con un custodio conlleva riesgos. Los bancos quiebran (Silicon Valley Bank, etc.) y los custodios pueden tomar malas decisiones y perder su dinero (FTX, Voyager, etc.).

Cuando toma la custodia de su Bitcoin, solo tiene que confiar en usted mismo para almacenar su bitcoin de forma segura. Tienes el control total.

Pero un gran poder conlleva una gran responsabilidad. Si bien la autocustodia es el estándar de oro para almacenar grandes cantidades de dinero de forma segura, puede limitar la forma en que puede usar su dinero día a día. La mayoría de las personas utilizan una combinación de soluciones de custodia y autocustodia; mantener grandes cantidades en forma de autocustodia y mantener una pequeña cantidad de fondos en una billetera de custodia para uso diario.
