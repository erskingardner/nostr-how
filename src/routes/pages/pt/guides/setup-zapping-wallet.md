---
title: Configura a tua primeira carteira de zapping
description: Um guia para configurar uma carteira Lightning para zaps no Nostr.
---

## [§](#dinheiro-magico-internet) Dinheiro mágico da internet, à velocidade da luz

Usando a Lightning Network do Bitcoin, podes enviar pequenas frações de um Bitcoin, conhecidas como satoshis (ou sats), por todo o mundo, à velocidade da luz e com taxas quase nulas. No Nostr, essas transações são chamadas de zaps.

Mesmo que sejas novo no Nostr, provavelmente já viste pelo menos uma menção aos zaps. Podes zapar alguém se te fizer rir, se te derem bons conselhos ou se publicarem algo que acrescente valor à tua experiência. Podes até zapar alguém sem motivo nenhum! E o inverso também é verdadeiro: se contribuíres com conteúdo interessante para a comunidade do Nostr, não demorará muito até que desconhecidos na internet (ou seja, novos amigos) te estejam a enviar Bitcoin.

## [§](#custodial-vs-auto) Carteiras Custodiais vs Auto-custodiais

A primeira coisa que vais precisar é de uma carteira de Bitcoin Lightning. Esta é a carteira de onde vêm as tuas transações de zapping. Existem muitas opções, mas uma das distinções mais importantes a entender é se a carteira é custodial ou auto-custodial. Cada uma tem os seus prós e contras, mas geralmente recomendamos que os utilizadores novos configurem inicialmente uma carteira custodial para se habituarem a usar zaps e gerir os seus fundos.

À medida que te sentires mais à vontade (ou quando os fundos na tua carteira custodial atingirem um nível que queiras controlar totalmente), podes configurar uma carteira auto-custodial.

## [§](#custodiais) Carteiras Custodiais

Uma carteira custodial é aquela em que o programador da carteira detém as chaves do Bitcoin, e a tua conta está essencialmente autorizada a enviar e receber esse Bitcoin - quer seja para outro utilizador ou para uma carteira diferente que controles totalmente (ou seja, uma carteira auto-custodial).

Dois exemplos populares são a [Wallet of Satoshi](https://www.walletofsatoshi.com/) e a [Alby](https://getalby.com). Ambas as carteiras fornecem carteiras de zapping rápidas, convenientes e fáceis de usar. Podes descarregar a Wallet of Satoshi na loja de aplicações e aceder ao Alby através da extensão do Chrome.

**Wallet of Satoshi**

Após descarregares a Wallet of Satoshi, abre a aplicação e toca em "Receber". Isto irá apresentar um Código QR reutilizável, bem como o teu endereço Lightning legível para humanos. Vai parecer um endereço de e-mail (nota: na realidade, não é um endereço de e-mail, por isso não tentes enviar e-mail para lá). Por exemplo, o autor deste artigo pode ser zapado em `bostonwine@walletofsatoshi.com`. Copia o teu endereço e regressa ao Nostr.

![Ecrã principal](https://cdn.nostr.build/i/955e1fd028d64941b80ed0b423a07541a2af8f14919c73e0add93511e3620477.jpg)

![Ecrã de receber](https://cdn.nostr.build/i/2d4f6ffa7a237cf93fca9aff37eca0011ba473b8f3da013f5fda786c93693b87.jpg)

**Alby**

Para a Alby, podes usar qualquer navegador baseado no Chrome e aceder a https://getalby.com para descarregar a extensão. Cria uma conta e, dentro da extensão, encontrarás novamente o endereço Lightning no estilo de um endereço de e-mail. Copia-o para a tua área de transferência.

![Conta Alby](https://cdn.nostr.build/i/fee9ab21c94221a9f9573c41e8e85a97b1ecafd18e22f52cf276d31a67a58664.png)

**Volta ao teu cliente Nostr**

Cada cliente é um pouco diferente, mas geralmente a página de Configurações do Perfil terá um campo para um "endereço Lightning" ou LNURL. No exemplo abaixo (do Damus), o campo chama-se Gorjetas Bitcoin Lightning. Cola o teu endereço neste campo e guarda o teu perfil.

![Exemplo](https://cdn.nostr.build/i/34241da3022d061a8159268f05e0cb3c8aa53934a55c5cc8c76effbfc7b625cc.jpg)

Agora deves estar pronto para ser zapado! Para testar, publica uma nota com algo como "Alguém pode enviar um pequeno zap para testar a minha carteira?" e adiciona a hashtag #plebchain - ficarás surpreendido com a rapidez com que receberás o teu primeiro zap!

Para enviar zaps, tudo o que precisas de fazer é clicar ou tocar no ícone Lightning do teu cliente na nota ou perfil de outro utilizador. Isto irá criar automaticamente uma fatura Lightning, e o teu cliente pedir-te-á para abrir uma carteira Lightning para que possas pagar essa fatura.

## [§](#auto-custodia) Carteiras Auto-custodiais

Depois de te familiarizares com o envio e receção de zaps e começares a acumular alguns sats na tua carteira, vale a pena aprender mais sobre as carteiras auto-custodiais.

Embora uma solução custodial como o Wallet of Satoshi seja incrivelmente conveniente, é importante lembrar que o programador da carteira detém as chaves deste Bitcoin. Afinal, a razão original de ser do Bitcoin era remover a necessidade de um terceiro de confiança!

Portanto, assim que tiveres Bitcoin suficiente na tua carteira para ficares chateado se perderes os fundos, é altura de configurar também uma carteira auto-custodial. (Podes continuar a usar a opção custodial para zapping, se quiseres, mas é uma boa ideia mover qualquer quantidade significativa de Bitcoin para auto-custódia, quando começar a acumular).

As aplicações de carteira Lightning são numerosas, mas as opções populares incluem Phoenix e Breez (carteiras móveis) e Mutiny (uma aplicação baseada na web).

Neste momento, as carteiras Lightning auto-custodiais não oferecem um endereço Lightning "estático" ou LNURL no estilo de um endereço de e-mail. (Esperamos que isso mude em breve). O que isto significa é que podes usar carteiras auto-custodiais para enviar zaps, mas não para os receberes (ainda).

Estas aplicações vão pedir-te durante a configuração para escreveres a tua "frase de recuperação". Este é um conjunto de 12 ou 24 palavras e é a chave privada para o teu Bitcoin em auto-custódia. Os programadores da carteira não conhecem a tua frase de recuperação, e não controlam o teu Bitcoin.

Nota: sempre que estiveres a registar a tua frase de recuperação, NÃO a guardes online (através de capturas de ecrã, notas na iCloud, etc). Escreve-a num papel, plastifica-a e mantém-na em segurança. Chegará o momento de aprenderes sobre backups em aço no futuro. Por agora, mantém-na em segredo e offline.

## [§](#gestao-chave-privada) Gestão da Chave Privada e Armazenamento a Frio

Para repetir: quando acumulares bitcoin suficiente na tua primeira carteira para quereres dar o próximo passo na tua jornada de Bitcoin auto-soberano, é altura de estudar os diferentes tipos de armazenamento de Bitcoin e as melhores práticas para manter a tua frase de recuperação segura. É uma aventura e uma experiência de aprendizagem contínua, por isso vamos começar.

Sabe mais em [aqui](./sweep-to-self-custody)
