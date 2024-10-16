---
title: O que são os Relays do Nostr?
description: Uma breve descrição do que são os relays do Nostr, porque são importantes e como funcionam.
---

## O que são os relays?

Os relays são como os servidores backend do Nostr. Permitem que os clientes do Nostr lhes enviem mensagens e podem (ou não) armazenar essas mensagens e transmiti-las a todos os outros clientes conectados.

O mundo dos relays está a mudar rapidamente e, portanto, são esperadas muitas mudanças no futuro. Uma coisa a ter em mente é que, como o Nostr é descentralizado e depende dos relays para armazenar e recuperar dados, se notares que o teu cliente do Nostr está a ficar lento, provavelmente é devido aos relays que estás a utilizar. Pode valer a pena adicionar mais alguns relays (ou remover alguns) no teu cliente.

## Relays pagos vs. gratuitos

Atualmente, muitos relays são gratuitos de usar. Devido aos custos de operação de um relay (pagamento por computação, armazenamento e largura de banda), a maioria das pessoas espera que os relays pagos se tornem a norma no futuro.

Um benefício importante de usar relays pagos atualmente é a maior qualidade de utilizadores e mensagens nos relays pagos. A "prova de trabalho" de pagar pelo acesso ao relay é algo que ajuda a evitar que contas de spam infestem a rede.

### Relays pagos populares

Uma lista atualizada de relays pagos, com detalhes sobre quanto custam e quem os opera, pode ser encontrada em [Relay Exchange](https://relay.exchange/).

### Onde posso encontrar uma lista de todos os relays?

O melhor recurso que encontrámos para explorar e avaliar a velocidade dos relays conhecidos é o site [Nostr.watch](https://legacy.nostr.watch/relays/find).

## O que aconteceria se todos os relays que uso deixarem de funcionar?

Se _todos_ os relays que usaste no passado se desconectarem, todas as tuas publicações serão irrecuperáveis. Esta é uma das razões pelas quais o Nostr permite que os utilizadores se liguem a muitos relays, garantindo assim grau de redundância. Dito isto, se estás realmente interessado a ser imune à censura, podes e deves executar o teu próprio relay pessoal.

## Devo executar o meu próprio relay?

Para a maioria das pessoas não vale o incómodo. No entanto, se tens conhecimentos técnicos e queres garantir que o teu discurso seja absolutamente incensurável, ou se quiseres executar um relay privado para um pequeno grupo, então podes e deves executar o teu próprio relay. Isso garante que sempre terás uma cópia de todas as tuas publicações e interações no Nostr para sempre. Estamos a trabalhar num guia para isso mas, entretanto, [aquí tens um tutorial](https://andreneves.xyz/p/set-up-a-nostr-relay-server-in-under) do André Neves sobre como configurar um relay do Nostr.
