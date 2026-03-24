---
title: O Protocolo Nostr
description: Este é um resumo de alto nível do protocolo Nostr com detalhes sobre os tipos de eventos e como funcionam as Possibilidades de Implementação do Nostr (NIPs).
---

## [§](#Nostr-alto-nivel) Nostr em alto nível

-   A rede Nostr tem dois componentes principais: [clientes](/pt/clients) e [relays](/pt/relays).
    -   Os **clientes** são a interface que os utilizadores usam para ler e escrever dados nos relays. No contexto das redes sociais, pensa nisso como a aplicação web ou a aplicação móvel do Twitter. É um cliente que lhe permite ler e escrever dados na base de dados centralizada do Twitter.
    -   Os **relays** são como bases de dados (embora façam muito mais do que armazenar dados). Permitem que os clientes lhes enviem dados e os armazenem numa base de dados. Os clientes podem ler os dados dos repetidores para mostrá-los aos utilizadores.
-   Cada utilizador é identificado por uma chave pública. Cada objeto de evento (por exemplo, uma mensagem que publica, uma atualização da sua lista de seguidores, etc.) é assinado. Os clientes validam estas assinaturas para garantir que estão corretas.
-   Os clientes obtêm dados e publicam nos relays. Quase sempre é o utilizador que escolhe os relays. Os relays não têm de comunicar entre si, mas podem fazê-lo no futuro.
-   Por exemplo, para atualizar o seu perfil, só precisa de dar instruções ao seu cliente para enviar um evento do tipo 0 para os relays que desejar utilizar. Os relays armazenarão esse evento.
-   Ao iniciar, o seu cliente consulta os dados dos relays que lhe indicar. Isso pode ser filtrado para mostrar apenas os eventos dos utilizadores que segue ou pode solicitar tudo de todos, e o cliente mostra-lhe esses dados.
-   Existem muitos tipos diferentes de eventos. Os eventos podem conter todos os tipos de dados estruturados, e as estruturas mais utilizadas estão a encontrar o seu caminho nas [Possibilidades de Implementação do Nostr](#nips) (NIPs - padrões de protocolo que todos seguem) para que todos os clientes e relays possam lidar com eles sem problemas.
-   Os dados que pode ver no Nostr dependem completamente dos relays aos quais decidir ligar-se. Para obter mais informações, consulte o diagrama de rede abaixo.


### Diagrama de rede

![Diagrama de rede do Nostr](/images/nostr-network.webp)

Podes ver no diagrama acima que temos 3 relays e 3 utilizadores. Cada um dos utilizadores liga-se ao Nostr com um cliente diferente (e numa plataforma diferente).

Dadas as leituras e escritas no diagrama:

-   O Bob pode ver todas as mensagens da Alice, mas não pode ver nada da Mary (e nem sequer sabe que ela existe).
-   A Alice pode ver todas as mensagens do Bob, mas não pode ver nada da Mary (e nem sequer sabe que ela existe).
-   A Mary pode ver todas as mensagens do Bob e da Alice. Isto acontece porque, embora ela apenas escreva para o relay 3, está a ler no relay 2, onde o Bob e a Alice estão a escrever as suas mensagens.

Esta é uma situação muito simples, mas já podes ver que a escolha dos relays aos quais desejas ligar-te pode ter um grande impacto em quem e te que verá quando usares o Nostr.


## [§](#events) Eventos

Os eventos são o único tipo de objeto na rede Nostr. Cada objeto de evento tem um `tipo`, que indica que tipo de evento é (que tipo de ação um utilizador pode realizar ou que tipo de mensagem pode receber).

Aqui está o aspeto de um evento do tipo 1 (o tipo 1 é para notas de texto curto, ou seja, algo semelhante a um tweet no Twitter):

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
    "content": "Jardins murados tornaram-se prisões, e o Nostr é o primeiro passo para derrubar as paredes da prisão.",
    "sig": "908a15e46fb4d8675bab026fc230a0e3542bfade63da02d542fb78b2a8513fcd0092619a2c8c1221e581946e0191f2af505dfdf8657a414dbca329186f009262"
}
```

-   O campo `id` indica o ID do evento.
-   O campo `pubkey` indica a chave pública do utilizador que enviou o evento.
-   O campo `created_at` indica quando o evento foi publicado.
-   O campo `kind` indica que tipo de evento é.
-   O campo `tags` informa sobre as etiquetas do evento. Estas são usadas para criar ligações, adicionar conteúdo multimédia e mencionar outros utilizadores ou eventos.
-   O campo `content` fornece o conteúdo do evento. Neste caso, é uma mensagem de texto curta.
-   O campo `sig` é a assinatura que os clientes usam para verificar que o utilizador com esta chave pública enviou efetivamente este evento na data especificada.

### Tipos de eventos

Existem muitos tipos diferentes de eventos no Nostr. A lista mais atualizada dos tipos de eventos mais comuns pode ser encontrada sempre no [repositório de Nostr NIPs](https://github.com/nostr-protocol/nips).

## [§](#nips) NIPs

As Possibilidades de Implementação do Nostr, ou NIPs, existem para documentar o que DEVE, o que DEVERIA e o que PODE ser implementado pelo software cliente e pelos relays compatíveis com o Nostr. Os NIPs são os documentos que descrevem como o protocolo Nostr funciona.

### Porquê que os NIPs são importantes?

O Nostr é descentralizado e não é propriedade de um serviço centralizado (como o Twitter). Isso significa que a direção do protocolo depende de todos nós. Podemos sugerir e advogar por mudanças e oferecer feedback sobre as ideias sugeridas por outros.

Fazer parte ativa da comunidade dá-te uma voz e um voto no rumo da rede. Os NIPs publicados no repositório principal já foram aprovados. Adicionar novas ideias é feito através de Pull Requests nesse repositório.

### Onde posso encontrar os NIPs?

Pode ver todos os NIPs atuais no [repositório Nostr NIP](https://github.com/nostr-protocol/nips).
