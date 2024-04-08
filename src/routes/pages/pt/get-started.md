---
title: Começar no Nostr
description: Este guia ajudar-te-á a compreender os fundamentos do Nostr e a preparar-te para usar o Nostr com uma nova conta. Vamos abordar como criar uma nova carteira Lightning, criar uma conta e iniciar sessão num cliente de forma segura.
---

## [§](#entender-as-chaves) Entender as Chaves

Cada conta do Nostr é baseada num par de chaves pública/privada. Uma maneira simples de entender é que a tua chave pública é teu nome de utilizador e a tua chave privada é a tua password, com uma importante diferença. Ao contrário de uma password, a tua chave privada não pode ser recuperada se for perdida.

Vou repetir para ficar claro: **Se perderes a tua chave privada, perderás a tua conta do Nostr. Se outra pessoa tiver acesso à tua chave privada, ganhará o controlo da tua conta**.

Certifica-te de que guardas a tua chave privada num local seguro, como um gestor de passwords. (Nós gostamos do [1Password](https://1password.com?utm_source=nostr.how&ref=nostr.how)).

## [§](#protocolo-vs-cliente) Protocolo vs Cliente

O Nostr em si é um protocolo, é um conjunto de regras acordado para transmitir mensagens na Internet.

Acessa-se ao Nostr (o protocolo) através de um cliente. Os clientes podem ser aplicações da web, desktop ou smartphone. Alguns clientes do Nostr permitem que o utilizador faça login colando a sua chave privada. Na web isso não é recomendado, pois é tedioso e inseguro. Em vez disso, recomendamos usar uma extensão de assinatura no teu navegador, que é um software projetado especificamente para gerir chaves privadas de forma segura e assinar eventos criptograficamente.

[Alby](https://getalby.com?utm_source=nostr.how&ref=nostr.how) é uma extensão de assinatura e carteira de bitcoin lightning que tem suporte incorporado para o Nostr. É uma ótima opção para utilizadores novos. A instalação do Alby será abordada nos guias específicos desse cliente quando necessário.

## [§](#criar-a-tu-conta) Criar a tua conta

Segue um guia passo a passo dos clientes recomendados:

-   [Iris](/pt/guias/iris) (Web)
-   [Damus](/pt/guias/damus) (iOS)
-   [Amethyst](/pt/guias/amethyst) (Android)

Alguns outros clientes que gostamos, mas para os quais não temos guias disponíveis:

-   [Primal](https://primal.net) (Web, iOS, Android) Cliente fácil de usar com carteira relâmpago integrada no celular.
-   [Snort](https://snort.social?utm_source=nostr.how&ref=nostr.how) (Web) Cliente muito rápido.
-   [Coracle](https://coracle.social?utm_source=nostr.how&ref=nostr.how) (Web) Um cliente focado na navegação por relays.

## [§](#encontrar-amigos) Encontrar amigos no Nostr

-   Caso saibas que alguém está no Nostr, podes encontrar o seu perfil procurando pela chave pública.
-   Muitos utilizadores do Twitter publicam as suas chaves públicas do Nostr com a hashtag #Nostr, por isso, uma pesquisa com essa hashtag pode ser um bom começo.
-   [nostr.directory](https://nostr.directory?utm_source=nostr.how&ref=nostr.how) é uma base de dados que relaciona os utilizadores do Twitter com as suas chaves públicas do Nostr.

## [§](#o-que-significa-assinar) O que significa "assinar"?

Para interagir com o protocolo Nostr, deves criar uma assinatura criptográfica sempre que realizares uma ação. Pensa nesta assinatura como um passo de autenticação em que confirmas que és realmente quem dizes ser.

A maioria dos clientes Nostr tenta tornar este processo fácil e rápido (ou permite-te guardar a tua chave privada no cliente para que este possa assinar em teu nome sempre que realizares algo).

Ao forneceres apenas a tua chave pública, ser-te-á pedido que assines sempre que desejares interagir com qualquer publicação ou realizar qualquer atualização no teu perfil. Nesse momento, o Alby aparecerá automaticamente (como aconteceu durante o processo de registo) e poderás confirmar se realmente queres assinar.

## [§](#posso-usar-outros-clientes) Posso usar outros clientes?

Sim. Agora que criaste o teu par de chaves pública/privada, podes utilizar este par em qualquer cliente Nostr para aceder à tua conta. Lembra-te que o cliente é apenas uma interface para ver as mensagens enviadas no protocolo Nostr.

## [§](#proximos-passos) Próximos passos

Ótimo, agora tens uma carteira lightning, uma identidade (o teu par de chaves) e testaste um cliente. Eis aqui alguns links que te podem ser úteis para aprofundares o teu conhecimento sobre o Nostr:

-   [Verificar a tua identidade](/pt/guides/get-verified)
-   [O que são Relays e como funcionam?](/pt/relays)
-   [Mais informações sobre os NIPs e o desenvolvimento do protocolo](/pt/the-protocol)
