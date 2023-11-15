---
title: Aan de slag met Nostr via de Astral-webclient
Description: Een stapsgewijze handleiding om aan de slag te gaan met Nostr via de Astral-webclient.
---

## Stap 1 – Installeer Alby

Haal [Alby](https://chrome.google.com/webstore/detail/alby-bitcoin-lightning-wa/iokeahhehimjnekafflcihljlcjccdbe) in de Chrome Webstore of rechtstreeks van de [Alby website](https://getalby.com/).

Nadat je de extensie hebt geïnstalleerd, maak je een nieuw account aan. Tenzij je al ervaren bent, raden we aan om gewoon een account aan te maken op Alby en een nieuwe Lightning-portemonnee in te stellen.

## Stap 2 – Maak je Private Key aan

1. Nadat Alby is geïnstalleerd en je een Lightning-portemonnee hebt aangemaakt of verbonden, ga je naar de Alby-accounts pagina.![Alby settings](/images/alby-accounts.webp)
1. Scroll naar het gedeelte Nostr en klik op de knop "Generate a new key" onder "Manage your key". Hiermee wordt een privésleutel gegenereerd en opgeslagen in je Alby-portemonnee. Je kunt deze privésleutel nu gebruiken om in te loggen op Nostr.
1. Nu je eenmaal je private key hebt, klik op het oogje om je key te laten zien. Kopiëer de private key (de reeks die begint met `nsec`) en sla het op in een wachtwoordmanager of op een **zeer** veilige plaats. Onthoud dat als je deze sleutel verliest, deze voorgoed verdwenen is, samen met al je accountgegevens.


## Stap 3 – Inloggen in Astral

1. Ga naar [Astral](https://astral.ninja).
1. In het inlogscherm dat verschijnt, klik op de "USE PUBLIC KEY FROM EXTENSION" knop. ![Astral Login Step 1](/images/astral-login.webp)
1. Autoriseer het gebruik van de key in het pop-upvenster van de Alby-extensie. ![Astral Login Step 2](/images/astral-login2.webp)
1. Zodra je bevestigt, verschijnt er een ander pop-upvenster in Astral. Hier kunnen we zien dat Alby onze public key (npub) aan Astral heeft doorgegeven. Aangezien we onze private key niet op Astral willen opslaan, moeten we hier gewoon op "Proceed" drukken. ![Astral Login Step 3](/images/astral-login3.webp)
1. Astral zal vervolgens nog een pop-upvenster tonen waarin staat dat je private key niet aanwezig is. Opnieuw, dit is wat we willen, dus je kunt gewoon op "Close" klikken. ![Astral Login Step 4](/images/astral-login4.webp)
1. Je bent ingelogd! Mogelijk duurt het even voordat de inhoud begint te laden. 🤙
1. Nu kun je jouw public key public key kopiëren, linksboven op de pagina. Sla je public key op in combinatie met je private key, het is een paar dus houd ze bij elkaar. ![Astral Login Step 5](/images/astral-login5.webp)
