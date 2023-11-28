---
title: Maak je eerste zap wallet aan
description: Een guide voor het aanmaken van een bitcoin lightning wallet voor zaps op Nostr.
---

## [§](#magic-internet-money) Magic internet money, instant payments

Met behulp van het bitcoin lightning netwerk, kun je kleine hoeveelheden bitcoin, die satoshis of kortweg sats heten, versturen met de snelheid van het licht en met verwaarloosbare fees. Op Nostr noemen deze transacties zaps.

Zelfs als je net nieuw bent op Nostr, heb je waarschijnlijk al eens gehoord van zaps. Je kunt iemand zappen als die jou aan het lachen maakt, of als die jouw een goed advies geeft, of als diegene op de een of andere manier een vorm van waarde geeft. Zelfs als er geen enkele reden is, kun je iemand zappen of zelf gezapt worden. Als jij iets op Nostr zet wat iemand leuk vindt kun je er zomaar wat bitcoin voor krijgen, of het nou van een vreemde is of van één van je Nostr vrienden.


## [§](#custodial-vs-self) Custodial vs Self-Custodial Wallets

Het eerste wat je nodig hebt is een bitcoin lightining wallet. Dit is een digitale portomonnee waar de sats van zaps naartoe gaan of vandaan komen. Er zijn verschillende opties, maar het belangrijkste onderscheid om te begrijpen is of een wallet custodial of self-custodial is.
Elke wallet kent z'n eigen compromis, dus we raden normaliter aan voor iemand die net nieuw is om eerst met een custodial wallet te beginnen. Zo leer je begrijpen hoe het werkt. Zodra je meer betalingen in bitcoin gaat doen is het handig om te zorgen dat jouw bitcoin tegoeden veilig in jouw eigen beheer zijn met een self-custodial wallet. Dit is een wallet waarvan jij de enige bent die de private key (seed phrase) bezit.

Zodra jij je op je gemak voelt met lightning, of zodra de tegoeden in je custodial wallet een bedrag vertegenwoordigen dat je graag in eigen beheer wilt hebben, kun je een non-custodial wallet gaan gebruiken.

## [§](#custodial) Custodial Wallets

Een custodial wallet is een digitale portomonnee waarvan de developer de keys bewaard. Vaak is het grootboek (voor het bijhouden van tegoeden) van de wallet dan in beheer van de wallet developer en zijn jouw bitcoin tegoeden alleen maar een virtuele representatie van de bitcoin waar jij recht op hebt (vergelijkbaar met jouw huidige bank app). Hierbij beheer jij niet zelf de keys, dus kun je die ook niet kwijtraken. Maar het beheer van de bitcoin is in handen van de wallet developer / provider.

Twee populaire voorbeelden zijn [Wallet of Satoshi](https://www.walletofsatoshi.com/) en [Alby](https://getalby.com). Beide wallets zijn snel en eenvoudig in gebruik. Je kunt Wallet of Satoshi in de app store op je smartphone vinden. Alby kan je via als browser extensie installeren.

**Wallet of Satoshi**

Nadat je Wallet of Satoshi hebt gedownload, open dan de app and klik op "Receive". Er verschijnt dan een herbruikbare QR code, zowel als een lightning adres in de vorm van een email adres. Dit is je lightning url en kan gebruikt worden om tegoeden (dus geen emails) naar toe te sturen. Dat ziet er bijvoorbeeld zo uit: `bostonwine@walletofsatoshi.com`. Dit is de lightning url van de schrijver van dit artikel. Kopieer het adres en ga terug naar je Nostr client.

![Main Screen](https://cdn.nostr.build/i/955e1fd028d64941b80ed0b423a07541a2af8f14919c73e0add93511e3620477.jpg)

![Receive Screen](https://cdn.nostr.build/i/2d4f6ffa7a237cf93fca9aff37eca0011ba473b8f3da013f5fda786c93693b87.jpg)

**Alby**

Voor Alby kun je elke Chrome gebaseerde browser gebruiken om naar https://getalby.com te gaan om de extensie te downloaden. Creëer een account en in de extensie vind je wederom iets wat op een emailadres lijkt, dit is je lightning url. Kopiëer dit naar je klembord.

![Alby account](https://cdn.nostr.build/i/fee9ab21c94221a9f9573c41e8e85a97b1ecafd18e22f52cf276d31a67a58664.png)

**Terug naar je Nostr client**

Iedere client is anders, maar bij Edit Profile Settings of iets dergelijks vind je een veld waar je jouw lightning url of LNURL in kunt vullen. In het voorbeeld hieronder (van Damus), heet het veld bitcoin lightning tips. Plak daar jouw LNURL in en sla vervolgens deze wijziging op.

![Example client](https://cdn.nostr.build/i/34241da3022d061a8159268f05e0cb3c8aa53934a55c5cc8c76effbfc7b625cc.jpg)

**Je zou nu zaps moeten kunnen ontvangen!**   
Om dit uit te proberen, plaats een bericht met bijvoorbeeld: "Can someone please send a small zap to test my wallet to try it out?" met de hashtag #plebchain - en je zult je verbazen hoe snel jij jouw eerste zap zult ontvangen.

Om zaps te versturen, is het enige wat je moet doen is op het zap icoontje klikken van een Nostr gebruiker's profiel of bericht. In de meeste clients is dat iccontje een kleine bliksem. Je client krijg de opdracht om je lightning wallet te openen zodat je de zap kunt versturen.

## [§](#self-custody) Self-Custodial Wallets

Zodra je het versturen en ontvangen van zaps begrijpt en je wallet een bepaalde hoeveelheid bitcoin bezit, is het de moeite waard om meer te leren over self-custodial wallets.

Terwijl een custodial wallet zoals Wallet of Satoshi een gemakkelijke oplossing is, is het belangrijk om te onthouden dat je met deze oplossing niet de bitcoin in eigen beheer hebt. Dat terwijl het eigen beheer en niemand te hoeven vertrouwen met jouw geld nou juist een van de belangrijkste waarde proposities is van bitcoin. Het vergroot jouw digitale soevereiniteit.

Zodra je genoeg bitcoin in je wallet hebt, bijvoorbeeld met een hoeveelheid contant geld waar je liever niet de deur uitgaat, is het tijd om een self-custodial wallet te gaan gebruiken. Je kunt gewoon je custodial wallet blijven gebruiken. Het is vergelijkbaar met cash in je portemonnee, maar het is raadzaam om niet te veel in je custiodial wallet te bewaren. Room dus af, of vul terug aan met kleine beragen.

Er zijn veel self-custodial lightning wallet apps, maar de meest populaire zijn Zeus, Phoenix, Mutiny en Breez.

[![Non-custodial wallets](https://image.nostr.build/4baca0eeb4589cae8afeeafea91ebc1661da9d0727323f26cc99de5bfbff2afe.jpg)](https://image.nostr.build/4baca0eeb4589cae8afeeafea91ebc1661da9d0727323f26cc99de5bfbff2afe.jpg)

Deze apps zullen je vragen om je seed phrase op te schrijven. Dit is een set van 12 of 24 woorden en dit is jouw private key voor je bitcoin wallet. Zorg ervoor dat je deze seed phrase nooit kwijtraakt! Sla deze seed phrase dus goed op zodat je jouw bitcoin niet kwijt kunt raken. Alleen diegene die deze seed phrase heeft, heeft toegang tot het tegoed in de betreffende wallet.

Let op: wanneer je jouw seed phrase opslaat, **doe dit nooit** online en maak er zeker geen screenshot van, stuur deze niet door via email of chat, gebruik ook absoluut niet je notities app in je telefoon of ergens in cloud. Gebruik pen en papier, lamineer het met folie, verstop het en raak het niet kwijt. Er zal een moment komen dat je jouw seed phrase in stuk roestvast staal wilt vastleggen, maar voor nu: **hou het geheim en vooral offline**.

## [§](#private-key-management) Private Key Management en Cold Storage

Samenvattend: als je eenmaal genoeg bitcoin in je eerste wallet hebt verzameld dat je over wilt gaan op een soevereine oplossing voor jouw bitcoin bezit, is het tijd om de verschillende opslag methodes te bestuderen. Daarbij hoort een hardware wallet, maar ook hoe je de seed phrase veilig wilt bewaren. Het is een avontuur met een boeiende leerweg. We nodigen je graag uit om er aan te beginnen.

Begin hier: [stap over naar self-custody](nl/guides/sweep-to-self-custody)
