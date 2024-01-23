---
title: Publicação descentralizada na Web
description: O Nostr é um protocolo simples e aberto que permite a publicação na web de conteúdos verdadeiramente resistentes à censura e de valor global.
---

## O Que é o Nostr?

Nostr é a sigla de "Notes and Other Stuff Transmitted by Relays" (notas e outras coisas transmitidas por relays). Assim como o HTTP ou o TCP-IP, o Nostr é um protocolo, um padrão aberto no qual qualquer um pode construir. O Nostr não é uma aplicação nem um serviço ao qual é necessário registar-se.

O Nostr foi desenhado para ser simples e permitir a publicação resistente à censura e descentralizada a nível global na web. Vamos detalhar um pouco mais:

### Simples

O protocolo baseia-se em objetos `Event` muito simples e flexíveis (transmitidos como JSON simples) e utiliza criptografia de chave pública padrão para chaves e assinaturas. Isso torna fácil a criação de relays e clientes, garantindo que o protocolo possa ser expandido ao longo do tempo.

### Resiliente

Como o Nostr não depende de um pequeno número de servidores de confiança para mover ou armazenar dados, é altamente resistente. O protocolo pressupõe que os relays desaparecerão e permite que os utilizadores se liguem e publiquem num número arbitrário de relays que podem mudar ao longo do tempo.

### Verificável

Uma vez que as contas do Nostr são baseadas em [criptografia de chave pública](https://pt.wikipedia.org/wiki/Criptografia_de_chave_p%C3%BAblica), é fácil verificar que as mensagens foram realmente enviadas pelo utilizador em questão.
