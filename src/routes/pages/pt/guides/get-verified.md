---
title: Obtém a verificação NIP-05
description: Como verificar a tua identidade no Nostr para obter um selo de verificado e uma forma mais fácil de partilhar a tua conta.
---

## [§](#o-que-vais-aprender) O que vais aprender neste guia

Podes ter reparado que, em muitos clientes diferentes, alguns utilizadores têm selos de verificação, como no Twitter.

O NIP-05 especifica como os utilizadores do Nostr podem verificar as suas identidades. Diferentes clientes mostram a verificação de formas ligeiramente diferentes, mas é uma forma importante de mostrar à comunidade do Nostr que és um utilizador real.

![Verificado no Snort](/images/snort-verified.webp)

O processo de verificação no Nostr está documentado numa Possibilidade de Implementação do Nostr (NIP) chamada [NIP-05](https://github.com/nostr-protocol/nips/blob/master/05.md).

O NIP-05 permite a um utilizador do Nostr associar a sua chave pública a um identificador baseado na internet com base no DNS. O mecanismo de verificação é semelhante ao modo como o Google te pede para verificar a propriedade de um domínio usando um registo DNS.

O principal benefício da verificação é permitir que um utilizador do Nostr seja identificado por um nome legível por humanos em vez de uma chave pública longa e difícil de memorizar. Isso permite que os utilizadores verificados do Nostr partilhem facilmente a sua identidade com outros.

Para usar o NIP-05, os utilizadores do Nostr adicionam uma URL NIP-05 ao seu perfil (a maioria dos clientes suporta isto). As URLs do NIP-05 assemelham-se a endereços de e-mail: bob@example.com. Vamos ver as partes:

1. Tudo o que está antes do símbolo `@` ("bob", no nosso exemplo). Isto deve corresponder ao valor do campo de nome no teu perfil do Nostr.
1. Tudo o que está depois do símbolo `@` ("example.com", no nosso exemplo). Este é o domínio onde o cliente pode procurar um ficheiro `/.well-known/nostr.json` que contém o nome e a chave pública do utilizador.

Quando os clientes veem uma URL do NIP-05, procuram um ficheiro `/.well-known/nostr.json` no domínio especificado. Este ficheiro deve conter a chave pública do Nostr do utilizador especificado. Lê mais detalhes na especificação do NIP-05.

Embora possa parecer técnico, é surpreendentemente fácil de verificar. Vamos ver como fazer isso.

## [§](#verificação-gratuita) Obter a verificação através de um serviço gratuito

Neste momento existem vários prestadores que estão a ajudar as pessoas a obter verificação gratuitamente. Esta é uma excelente opção se ainda não tens sats na tua carteira lightning. Se possível, apoia estes projetos através de doações. ⚡🤙

-   [Bitcoin Nostr](https://bitcoinnostr.com/)
-   [Nostrcheck.me](https://nostrcheck.me)
-   [zaps.lol](https://zaps.lol/)
-   [NIP05.social](https://nip05.social)
-   [Nostr-Check.com](https://nostr-check.com/)
-   [Verified Nostr](https://verified-nostr.com/)
-   [Cosa Nostr](https://cosanostr.com)
-   [Iris](https://iris.to)

## [§](#verificação-paga) Pagar a um fornecedor pela verificação

Se não tens o teu próprio domínio ou não queres configurá-lo sozinho, podes aproveitar um serviço NIP-05 gratuito ou pago (normalmente apenas alguns [sats](https://coinmarketcap.com/alexandria/glossary/satoshi-sats)). Aqui estão alguns:

-   [Jellyfish (nostr.eco)](https://jellyfish.land/nip05)
-   [Nostrly](https://www.nostrly.com)
-   [Nostrplebs](https://nostrplebs.com)
-   [Nostr Verified](https://nostrverified.com)
-   [Alby](https://getalby.com)
-   [Nostr Directory](https://nostr.directory)
-   [Stacker News](https://stacker.news)
-   [Happy Tavern](https://happytavern.co/nostr-verified)

## [§](#verificação-auto-hospedada) Verificação auto-hospedada

e já tens um domínio, esta é uma opção gratuita. Só precisas de adicionar um ficheiro `.well-known/nostr.json` ao teu domínio. O conteúdo do ficheiro deve ser o seguinte:

```json
{
    "names": {
        "YOUR_NOSTR_NAME": "YOUR_NOSTR_PUBLIC_KEY"
    }
}
```

Opcionalmente, também podes adicionar uma secção para que os clientes saibam em que relays é provável que te encontrem:

```json
{
  "names": {
    "YOUR_NOSTR_NAME": "YOUR_NOSTR_PUBLIC_KEY_IN_HEX_FORMAT"
  },
  "relays": {
    "YOUR_NOSTR_PUBLIC_KEY_IN_HEX_FORMAT": [
      "wss://relay.one",
      "wss://relay.two",
      ...
    ]
  }
}
```

Certifica-te de usar a versão hexadecimal da tua chave pública no teu ficheiro `nostr.json`. Esta é a versão da chave que **não** começa com `npub`.

Podes converter a tua chave em [Nostr.band](https://nostr.band)

![Obtem a tua chave em hexadecimal](/images/get-hex-key.webp)

Por último, assegura-te de que este ficheiro é servido com o cabeçalho `Access-Control-Allow-Origin` definido como `*`, uma vez que os clientes devem poder aceder a ele.
