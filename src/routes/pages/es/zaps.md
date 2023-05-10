## [§](#los-conceptos-básicos) Los conceptos básicos

La forma más sencilla de pensar en los Zaps es que son simplemente propinas. Propinas que se transmiten a través de la [red Lightning](https://www.investopedia.com/terms/l/lightning-network.asp) a la velocidad de la luz, con prácticamente ninguna tarifa de transacción.

Desde el inicio del protocolo Nostr, era común ver facturas de Lightning en las notas. Desde que se implementó [NIP-57](https://github.com/nostr-protocol/nips/blob/master/57.md), los Zaps se han convertido en la principal forma de transmitir valor en las notas de Nostr. Veamos más de cerca lo que implementó NIP-57 y cómo funcionan los Zaps.

## [§](#nip-57) NIP-57

[NIP-57](https://github.com/nostr-protocol/nips/blob/master/57.md) es el documento que describe cómo se deben implementar los Zaps. Crea dos nuevos tipos de notas, tipo 9735 (un Zap) y tipo 9734 (una solicitud de Zap). Estos dos tipos de notas permiten a los clientes de Nostr solicitar facturas de Zap a servidores LNURL y pagarlas. La especificación de NIP-57 también describe cómo las billeteras Lightning que reciben pagos con Zaps deben crear notas para enviar a los relés.

💡 Un dato curioso, el tipo de nota elegido para los Zaps es el mismo puerto de red (9735) que usa Lightning.

## [§](#cómo-funcionan-los-zaps) Cómo funcionan los Zaps

![Diagrama de flujo de Zaps](/images/zap-flow.webp)

Aquí no profundizaremos demasiado en los aspectos técnicos, pero para aquellos curiosos, veamos los conceptos básicos de cómo funcionan los Zaps.

1. Cuando haces clic o tocas el pequeño icono de ⚡ en tu cliente (Damus, Iris, Amethyst, etc.), lo primero que ocurre es que el cliente se conecta al [servidor LNURL](https://thebitcoinmanual.com/articles/what-is-ln-url-and-how-does-it-work/) que está frente a la billetera Lightning de la persona a la que intentas Zappear. La primera solicitud es algo así como: "Hola, me encantaría enviarle algunos sats a Alice".
2. El servidor LNURL responde y, si la billetera de Alice admite Zaps, lo indicará al cliente y enviará/confirmará la clave pública de Alice.
3. En este punto, el cliente realiza un pequeño trabajo para armar una solicitud de Zap (una nota tipo 9734) con datos sobre el perfil o la nota que desea Zappear, la cantidad, los relés a los que debe transmitir la nota y algunas otras cosas. Esto es efectivamente una solicitud de factura al servidor LNURL.
4. El servidor LNURL responde con la factura solicitada.
5. En este punto, el cliente entregará esa factura a la billetera Lightning del usuario para que se pague. Si estás utilizando una billetera como Alby en el navegador (y has establecido un presupuesto), este proceso puede ser muy rápido.
6. Una vez que el usuario haya pagado la factura directamente a la billetera de la persona a la que está Zappeando, la billetera del receptor creará una nota tipo 9735
