---
title: O que são Zaps?
description: O que são Zaps, como funcionam e o que precisas para os usar no teu cliente Nostr.
---

## [§](#conceitos-basicos) Conceitos Básicos

A forma mais simples de pensar nos Zaps é que são basicamente gorjetas. Gorjetas que são transmitidas através da [rede Lightning](https://www.investopedia.com/terms/l/lightning-network.asp) à velocidade da luz, com praticamente nenhuma taxa de transação.

Desde o início do protocolo Nostr, era comum ver faturas Lightning nas notas. Desde que foi implementado o [NIP-57](https://github.com/nostr-protocol/nips/blob/master/57.md), os Zaps tornaram-se a principal forma de transmitir valor nas notas Nostr. Vamos dar uma olhada mais detalhada em como o NIP-57 foi implementado e como é que os Zaps funcionam.

## [§](#nip-57) NIP-57

O [NIP-57](https://github.com/nostr-protocol/nips/blob/master/57.md) é o documento que descreve como os Zaps devem ser implementados. Ele cria dois novos tipos de notas, tipo 9735 (um Zap) e tipo 9734 (um pedido de Zap). Esses dois tipos de notas permitem que os clientes Nostr solicitem faturas Zap de servidores LNURL e as paguem. A especificação do NIP-57 também descreve como as carteiras Lightning que recebem pagamentos com Zaps devem criar notas para enviar aos relays.

💡 Um facto curioso é que o tipo de nota escolhido para os Zaps é a mesma porta da rede (9735) usada pela Lightning.

## [§](#como-funcionam-os-zaps) Como funcionam os Zaps

![Diagrama de fluxo dos Zaps](/images/zap-flow.webp)

Não vamos aprofundar muito nos detalhes técnicos, mas para os curiosos, vejamos o básico de como funcionam os Zaps.

1. Quando clicas no pequeno ícone de ⚡ no teu cliente (Damus, Iris, Amethyst, etc.), a primeira coisa que acontece é que o cliente se liga ao [servidor LNURL](https://thebitcoinmanual.com/articles/what-is-ln-url-and-how-does-it-work/) em frente à carteira Lightning da pessoa a quem estás a tentar enviar um Zap. O primeiro pedido é algo como: "Olá, gostava de enviar alguns sats para a Alice".
1. O servidor LNURL responde e, se a carteira da Alice suportar Zaps, indica ao cliente e envia/confirma a chave pública da Alice.
1. Neste ponto, o cliente faz um trabalho pequeno para montar um pedido de Zap (uma nota tipo 9734) com dados sobre o perfil ou nota que deseja Zapar, o valor, os relays aos quais deve transmitir a nota e algumas outras informações. Isto é efetivamente um pedido de fatura ao servidor LNURL.
1. O servidor LNURL responde com a fatura solicitada.
1. Neste ponto, o cliente entrega essa fatura à carteira Lightning do utilizador para pagamento. Se estiveres a usar uma carteira como Alby no navegador (e tiveres definido um orçamento), este processo pode ser muito rápido.
1. Uma vez que o utilizador tenha pago a fatura diretamente para a carteira da pessoa a quem está a enviar o Zap, a carteira do destinatário cria uma nota tipo 9735 e a transmite aos relés especificados anteriormente no pedido Zap.
1. Os relays que recebem esta nota podem informar aos clientes conectados sobre o Zap e mostrar o Zap aos utilizadores na sua interface.

E tudo isto acontece em apenas alguns segundos e custa uma pequena fração de um centimo.

## [§](#como-enviar-e-receber) Como enviar e receber Zaps

Para enviar Zaps a outras pessoas no Nostr, só precisas de duas coisas:

1. Uma carteira Lightning compatível com Zap (como [Alby](https://getalby.com/) ou [Wallet of Satoshi](https://www.walletofsatoshi.com/))
1. Um cliente que tenha implementado Zaps (como [Damus](/pt/guides/damus), [Amethyst](/pt/guides/amethyst), [Iris](/pt/guides/iris) ou [Snort](https://snort.social))

A única coisa que precisas fazer é garantir que tenhas configurado o teu endereço Lightning no teu perfil Nostr. Este é o endereço onde receberás Zaps.

Lembra-te de que é possível pagar Zaps de uma carteira/endereço que não seja o endereço que configuraste no teu perfil para receber Zaps.

Por exemplo, imagina o seguinte:

1. Tens um endereço Lightning [Stacker News](https://stacker.news/) configurado no teu perfil Nostr, é aqui que receberás qualquer sats Zapados.
1. No teu navegador web, usas o Iris como o teu cliente e pagas Zaps usando a tua carteira Alby através da extensão do Chrome.
1. No telemóvel, usas o Damus como o teu cliente e pagas Zaps usando a aplicação Wallet of Satoshi.
