---
title: Aan de slag met Damus
description: Een stapsgewijze handleiding om aan de slag te gaan met Nostr met behulp van de Damus iOS-client.
---

## Stap 1 - Installeer Damus

Dit is een handleiding om aan de slag te gaan met Nostr met de client [Damus](https://damus.io/), een prachtige en gebruiksvriendelijke iOS-client gebouwd door [@jb55](https://snort.social/p/npub1xtscya34g58tk0z605fvr788k263gsu6cy9x0mhnm87echrgufzsevkk5s).

1. Installeer hier [de Damus-app uit de iOS App Store](https://apps.apple.com/app/damus/id1628663131).
2. Wanneer je de app opent, heb je de optie om een nieuw account aan te maken of in te loggen met een private key (nsec) die je al hebt gegenereerd.
3. Als je al een private key (nsec) hebt aangemaakt via de Alby-extensie of een andere client, kun je op "Login" klikken. Anders klik je op "Create account".
   ![Damus login/signup page](/images/damus-login.webp)

## Stap 2 - Een nieuw account aanmaken

1. Klik op "Create Account". 
2. Lees de EULA (algemene voorwaarden). 
3. Vervolgens kies je een gebruikersnaam (deze kan later worden gewijzigd) en kun je optioneel wat andere profielgegevens toevoegen. Damus genereert automatisch keys voor je in deze stap. Je public key (npub) wordt weergegeven als de "Account ID" waarde. ![Damus login/signup page](/images/damus-signup.webp)
4. Zodra je daarmee klaar bent, klik je op "Create" en je kunt Nostr gebruiken! 🤙 
5. Slechts één laatste **uiterst belangrijke** stap. Je moet je private key (nsec) op een veilige plaats bewaren. 
6. Ga naar Instellingen door op je profielfoto linksboven op het scherm te klikken en klik vervolgens in het menu op "Settings" in het menu. ![Damus Settings](/images/damus-settings.webp)
7. Daar zie je jouw "Public Account ID" (dit is jouw public key, of npub) en jouw "Secret Account Login Key" (dit is jouw private key, of `nsec`). 
8. Kopiëer deze beiden en sla ze op een **ZEER** veilige plek op. 1Password of een andere password manager is een goede optie. 
9. Onthoud, als je dit niet goed opslaat, zul je nooit meer in staat zijn om je account te herstellen mocht je de app deleten of je telefoon kwijtraken. [Meer info over keys kun je hier vinden](/nl/get-started#understanding-keys).

## Inloggen met een bestaande key

1. Klik op "Login".
2. Lees de EULA (algemene voorwaarden).
3. Het menu zal om je private key (nsec) vragen. Vul deze in en je bent klaar. 🤙 **Belangrijk**: Je private key (die begint met de letters `nsec`) wordt lokaal opgeslagen en wordt op geen enkele manier verzameld door of opgeslagen op de servers van Damus.
