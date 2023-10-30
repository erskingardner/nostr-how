---
title: Transferir para auto-custódia
description: Um guia passo a passo para mover sats para uma carteira de auto-custódia.
---

## [§](#Para-quem-é-este-guía) Para quem é este guia?

A maioria dos utilizadores, neste momento, está a usar o Nostr com uma carteira lightning de custódia, como a Wallet of Satoshi ou o Alby.

Se és um deles, quero que penses nos sats na tua carteira agora. Agora, pensa em perder todos esses sats. Se essa ideia te deixa desconfortável ou preocupado, então este guia é para ti.

Vamos abordar como configurar uma carteira auto-custodial que te permitirá transferir periodicamente fundos da tua carteira costudial para os guardar com segurança.

## [§](#Porque-é-importante-a-auto-custodia?) Porque é importante a auto-custódia?

Em poucas palavras: não são as tuas chaves, não são as tuas moedas. Quando deixas os sats numa carteira custodial, estás a aceitar algum grau de risco de contraparte. Imagina se a Wallet of Satoshi fosse hackeada de alguma forma. Como eles detêm todos os fundos dos clientes, uma situação dessas significaria que os teus fundos seriam perdidos.

Por esse motivo, é altamente recomendável que mantenhas apenas uma pequena quantia em _qualquer_ carteira custodial e que uses a auto-custódia para o resto dos teus bitcoins.

## [§](#Pronto?-Vamos!) Pronto? Vamos a isso!

Este é um guia para iniciantes que não requer a configuração do teu próprio nó Lightning ou fazer qualquer coisa técnica. O nosso truque aqui é utilizar a comunidade Nostr de Bitcoiners para te ajudar a fazer a troca de sats na rede Lightning para sats auto-custodiados na principal cadeia de blocos do Bitcoin. Protege a tua stack e faz amigos ao realizar transações peer-to-peer. Dupla vitória!

Se te sentires sobrecarregado com os termos aqui, consulta [a secção no fundo da página](#lightning-bitcoin-on-chain) para mais detalhes.

1. Primeiro, segue este guia para configurar uma nova carteira de Bitcoin na [Blue Wallet](https://bluewallet.io/docs/create-bitcoin-wallet/). Também podes usar qualquer outra carteira de auto-custódia.
1. Depois de teres cuidadosamente guardado a tua frase de recuperação (que é o que vais usar para restaurar a tua carteira, se necessário), estás pronto para encontrar alguém para fazer uma troca.
1. A forma mais fácil de o fazer é publicar uma nota mencionando as etiquetas #plebchain e #bitcoin, mencionando que gostarias de trocar alguns sats de lightning por sats na on-chain. Podes também [contactar-me diretamente](https://primal.net/jeffg) se necessário.
1. A partir daí, farás um plano diretamente com a pessoa com quem vais fazer a troca. Antes de avançares com a troca, leva algum tempo para conhecer a pessoa um pouco, porque não há um serviço de garantia no Bitcoin, precisas de estar seguro de que estás a lidar com alguém em quem podes confiar para concluir a transação. Geralmente, o processo parece algo assim:
    1. Acordam numa quantia para trocar.
    1. Dás o endereço da tua carteira recém-criada (na Blue Wallet) à pessoa via mensagem privada.
    1. Envias sats para a pessoa através do teu cliente Nostr.
    1. Eles iniciarão uma transação on-chain para te pagar a mesma quantia de sats (potencialmente menos quaisquer taxas de transação).
    1. Lembra-te, esta transação on-chain levará algum tempo. O teu parceiro de troca pode (e deve) enviar-te o ID da transação assim que o tiver, para que possas acompanhar em [mempool.space](https://mempool.space).
1. É isso! Está feito. Assim que os fundos chegarem, terás com sucesso a custódia dos teus primeiros Bitcoins. Trata-os com respeito e cuidado.

## [§](#lightning-bitcoin-on-chain) Lightning? Bitcoin? On-chain? O que é isso?

Se tudo isto te parece chinês, não te preocupes. Antes de entrarmos no guia, vamos rapidamente abordar algum vocabulário.

### Bitcoin

Esta toca de coelho não tem fundo conhecido. Dito isto, se és novo no Bitcoin, a única coisa que realmente precisas de saber é que o Bitcoin é uma forma completamente descentralizada de dinheiro eletrónico. Não é controlado por nenhuma pessoa ou entidade e funciona com base em regras codificadas no software em vez de depender de políticas e governos. O Bitcoin é a única forma verdadeiramente descentralizada de dinheiro eletrónico baseada em regras.

O Bitcoin prioriza a certeza sobre a velocidade. Isto significa que as transações custam um pouco em taxas e demoram algum tempo a confirmar, mas uma vez confirmadas, são completamente irreversíveis e ninguém pode tirar as tuas moedas ou censurar a tua transação.

Se quiseres saber mais, aqui estão alguns ótimos recursos para começar a aprofundar o conhecimento sobre o Bitcoin.

1. [Guia do Bitcoin.org](https://bitcoin.org/pt_BR/como-funciona)
1. [Guia para iniciados em Bitcoin](https://bitcoiner.guide/beginner/)

### Lightning

A Lightning é uma camada de pagamentos que corre em cima do Bitcoin. Fundamentalmente, ainda estás a fazer pagamentos usando o Bitcoin como dinheiro, mas a Lightning permite transações quase instantâneas e com taxas extremamente baixas. Devido a isso, a rede Lightning abriu muitos novos casos de uso envolvendo micropagamentos. Os detalhes de como o Lightning funciona estão para além do escopo deste guia introdutório, mas aqui estão alguns recursos se estiveres interessado em saber mais:

1. [Guia Bitcoiner Lightning](https://bitcoiner.guide/lightning/)
1. [Lightning Labs Overview](https://docs.lightning.engineering/the-lightning-network/overview)

### On-chain vs Off-chain

Ouvirás frequentemente as pessoas referirem-se a transações on-chain vs off-chain do Bitcoin. Quando as pessoas falam de transações on-chain, simplesmente estão a referir-se a fazer transações usando a blockchain base do Bitcoin (lembra-te; isto é mais lento, mas 100% final e seguro). Quando as pessoas se referem a transações off-chain, estão na maioria das vezes a referir-se à Lightning.

### Custodial vs. Auto-custodial

Para aqueles que são novos no Bitcoin, este conceito pode parecer estranho. Afinal, a maioria de nós (pelo menos no mundo desenvolvido) só usou serviços custodiais, como bancos, para guardar o nosso dinheiro. Mas, como temos visto recentemente (e regularmente em mercados financeiros menos desenvolvidos em todo o mundo), manter o teu dinheiro com um custodiante tem riscos. Os bancos falham (Silicon Valley Bank, etc.) e os custodiantes podem tomar decisões erradas e perder o teu dinheiro (FTX, Voyager, etc.).

Quando tens custódia do teu Bitcoin, só precisas de confiar em ti mesmo para guardar o teu Bitcoin com segurança. Tens controlo total.

Mas com grande poder vem grande responsabilidade. Embora a auto-custódia seja o standard do diamante para guardar quantias maiores de dinheiro com segurança, pode limitar a forma como podes usar o teu dinheiro no dia a dia. A maioria das pessoas utiliza uma combinação de soluções custodiais e auto-custodiais; mantendo grandes quantias de forma auto-custodial e uma pequena quantidade de fundos numa carteira custodial para uso diário.