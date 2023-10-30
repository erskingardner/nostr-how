---
title: Começa com o Iris
description: Um guia passo a passo para começar com o Nostr usando o cliente web Iris.
---

## Passo 1 – Instala a Alby

Obtém a [Alby](https://chrome.google.com/webstore/detail/alby-bitcoin-lightning-wa/iokeahhehimjnekafflcihljlcjccdbe)  partir da Chrome Webstore ou diretamente do [site da Alby](https://getalby.com/).

Assim que tiveres a extensão instalada, cria uma nova conta. A menos que já sejas um veterano, recomendamos apenas criar uma conta na Alby e configurar uma nova carteira Lightning.

## Passo 2 – Gera uma nova Chave Privada com o Iris

1. Acede a [Iris.to](https://iris.to).
1. Introduz um nome e clica em "Avançar".  ![Ecrã de registo do Iris](/images/iris-signup.webp)
1. O Iris irá gerar um novo par de chaves pública/privada e iniciar a sessão. Neste ponto, podes começar a seguir pessoas e a publicar notas.  ![Experiência de novo utilizador do Iris](/images/iris-nux.webp)
1. No entanto, vamos garantir que estamos a usar a aplicação da forma mais segura possível. Vai até "Definições" à esquerda e depois clica em "Contas" no menu secundário.  ![Definições do Iris](/images/iris-accounts-settings.webp)
1. Copia a tua chave pública e a tua chave privada `nsec`. Deves guardá-las num local MUITO seguro, como um gestor de senhas (gostamos do 1Password).
1. Assim que tiveres a certeza de que guardaste a tua chave privada num local seguro, clica em "Terminar sessão" no topo da página de contas para saíres do Iris. Vamos voltar a iniciar sessão em segurança em breve.

## Passo 3 – Adiciona a tua nova Chave Privada ao Alby

1. Depois de criares uma conta e guardares a tua chave privada num local seguro, precisamos de adicionar essa chave à extensão Alby.
1. Abre a extensão Alby e depois acede à página de contas Alby.  ![Contas da Alby](/images/alby-accounts.webp)
1. Clica na tua conta e, na secção Nostr, cola a tua nova chave privada (que começa com `nsec`) no campo.
1. Agora estás pronto para usar a Alby para iniciar sessão e usar o Nostr através de qualquer cliente web.

## Passo 4 – Inicia sessão no Iris novamente

1. De volta à página de início de sessão do Iris, clica em "Iniciar sessão com a extensão Nostr". ![Ecrã de registo de Iris](/images/iris-signup.webp)
1. Autoriza o uso da chave na janela de extensão Alby que irá aparecer.
1. Estás autenticado! Pode demorar alguns momentos até que o conteúdo comece a carregar. 🤙 Terás de usar a extensão Alby sempre que realizares uma ação no Iris. Podes marcar a opção para que o Alby se lembre da tua escolha se isso te incomodar.

## Guia em vídeo

Se preferires um guia em vídeo, há um [tutorial para iniciantes no YouTube](https://www.youtube.com/watch?v=kifwECtwjJQ) sobre como criar a tua própria conta Nostr, criado pelo [Max DeMarco](https://snort.social/p/npub1lelkh3hhxw9hdwlcpk6q9t0xt9f7yze0y0nxazvzqjmre3p98x3sthkvyz).