---
title: Overstappen naar een self-custodial wallet
description: In deze gids behandelen we een eenvoudige oplossing om je tegenpartij risico te verminderen door je bitcoin naar een self-custodial wallet te verplaatsen.
---

## [§](#who-is-this-guide-for) Voor wie is deze gids?

De meeste gebruikers gebruiken Nostr op dit moment met een custodial lightning wallet, zoals Wallet of Satoshi of Alby.

Als jij een van hen bent, willen we dat je nu event denkt aan de sats in je wallet. Stel je voor dat je al die sats verliest. Als dat idee je een ongemakkelijk of bezorgd gevoel geeft, dan is deze gids voor jou.
Zo niet, dan raden we je aan om deze website gebruiken om te bepalen welke vorm voor het beheer van jouw sats het beste bij je past: [storingbitcoin.info](https://storingbitcoin.info/).

We gaan het hebben over het opzetten van een self-custodial wallet waarmee je periodiek geld van je custodial wallet kunt verplaatsen om het veilig te bewaren.

## [§](#why-is-self-custody-important) Waarom is self-custody belangrijk?

Simpel gezegd: not your keys, not your coins. Als je je sats in een custodial wallet bewaart, accepteer je een bepaalde mate van tegenpartij risico. Stel je voor dat Wallet of Satoshi op de een of andere manier gehackt zou worden. Omdat ze alle tegoeden van klanten bewaren, zou een situatie als deze betekenen dat je tegoeden verloren zouden gaan.
Als de hackers toegang hebben tot de private keys, kunnen ze deze tegoeden namelijk verplaatsen naar hun eigen of andere wallets.

Daarom wordt het sterk aangeraden dat je slechts een klein bedrag in een custodial wallet bewaart en de rest van je bitcoin zelf bewaart met een self-custodial wallet.

## [§](#ready-lets-go) Klaar? Laten we beginnen!

Dit is een gids voor beginners waarvoor je geen eigen lightning node hoeft op te zetten of iets technisch hoeft te doen.
Onze truc hier is om gebruik te maken van de Nostr community van bitcoiners om jou te helpen de overstap te maken van sats op het lightning netwerk naar sats in eigen beheer op het bitcoin netwerk. Je leert hoe je jouw tegoeden beveiligd en je maakt kennis met peer-to-peer transacties. Dat is dubbele winst!

Als je je overweldigd voelt door de terminologie hier, bekijk dan het [gedeelte onderaan de pagina](#lightning-bitcoin-on-chain-what) voor meer details.

1. Download eerst [Blue Wallet](https://bluewallet.io/). Volg dan deze gids om een nieuwe bitcoin wallet aan te maken in [Blue Wallet](https://bluewallet.io/docs/create-bitcoin-wallet/). Je kunt elke andere self-custodial wallet gebruiken.
2. Zodra je heel zorgvuldig je seed phrase (jouw private key bestaande uit 12 of 24 woorden) hebt opgeslagen (dat is wat nodig hebt om je wallet te herstellen als dat nodig is), ben je klaar om iemand te zoeken om mee te ruilen. 3Wat gaan we ruilen?
3. Wat gaan we ruilen? Lightning sats voor on-chain bitcoin sats. De makkelijkste manier om dit te doen is om een Nostr bericht te posten met de tags #plebchain en #bitcoin waarin je vermeldt dat je graag wat lightning sats zou willen ruilen voor on-chain sats. Wees niet verlegen om mensen die regelmatig over bitcoin praten direct te berichten. Je kunt Jeff ook [een DM sturen](https://primal.net/jeffg) als dat nodig is.
4. Als je iemand hebt gevonden, bespreek je een plan met die persoon. Neem voordat je gaat ruilen de tijd om de persoon een beetje te leren kennen, want er bestaat geen borg in Bitcoin. Je moet er zeker van zijn dat je te maken hebt met iemand die je kunt vertrouwen om de transactie te voltooien. Over het algemeen ziet het plan er als volgt uit:
    - Kom overeen met het bedrag dat je wilt verplaatsen.
    - Stuur het bitcoin wallet adres (die je hebt aangemaakt in Blue Wallet) naar die persoon.
    - Jij stuurt dat bedrag als zap naar die persoon via je Nostr client.
    - De persoon zal een on-chain transactie starten met datzelfde bedrag aan sats (mogelijk minus de transactiekosten).
    - Onthoud dat deze on-chain transactie enige tijd in beslag kan nemen. Je handelspartner kan (en moet) jou de transactie ID sturen zodra hij deze heeft verstuurd, zodat je deze kunt volgen op in een block explorer zoals [mempool.space](https://mempool.space).
5. Dat is het! Je bent klaar. Zodra de sats arriveren, heb je met succes zelf het beheer genomen over je eerste bitcoin sats. Bewaar deze met respect en zorg er goed voor.

## [§](#lightning-bitcoin-on-chain-what) Lightning? Bitcoin? On-chain? Wat zeg je allemaal?

Als dit allemaal Latijns klinkt, maak je dan geen zorgen. Voordat we verder gaan met de gids, zullen we eerst wat terminologie bespreken.

### Bitcoin

Dit _rabbit hole_ kent geen bodem. Als je nieuw bent met Bitcoin is het enige dat je echt moet weten dat Bitcoin een volledig gedecentraliseerde vorm van elektronisch geld is. Het wordt niet gecontroleerd door één persoon of entiteit en werkt op basis van regels die in de software zijn vastgelegd, in plaats van afhankelijk te zijn van politiek en overheden. Bitcoin is het enige echte gedecentraliseerde en op regels gebaseerde elektronische geld.

Bitcoin geeft zekerheid meer prioriteit dan snelheid. Dit betekent dat transacties een beetje kosten (transactiekosten) en enige tijd nodig hebben om te bevestigen (gemiddeld 10 minuten), maar als ze eenmaal bevestigd zijn, zijn ze volledig onomkeerbaar en kan niemand jouw tegoeden afpakken of je transactie censureren.

If you'd like to learn more, here are some great starter resources for going deeper on Bitcoin.
Als je meer wilt leren, dan zijn dit goede bronnen voor beginners met Bitcoin:

1. [Bitcoin.org guide](https://bitcoin.org/en/how-it-works)
2. [Bitcoiner beginner guide](https://bitcoiner.guide/beginner/)
3. [Beginnen met Bitcoin](https://beginnenmetbitcoin.com/)

### Lightning

Lightning is een laag / netwerk die bovenop het Bitcoin netwerk draait voor betalingen. In principe worden betalingen nog steeds gedaan met Bitcoin als geld, maar Lightning maakt instant en bijna gratis transacties mogelijk. Hierdoor heeft het Lightning netwerk veel nieuwe toepassingen met (micro)betalingen mogelijk gemaakt. Hoe Lightning precies werkt, valt buiten de scope van deze gids, maar hier zijn enkele bronnen als je er meer over wilt weten:

1. [Bitcoiner Lightning Guide](https://bitcoiner.guide/lightning/)
1. [Lightning Labs Overview](https://docs.lightning.engineering/the-lightning-network/overview)

### On-chain vs Off-chain

Je zult mensen vaak horen over on-chain en off-chain Bitcoin. Als mensen het hebben over on-chain transacties, bedoelen ze simpelweg het maken van transacties op de basis Bitcoin blockchain (onthoud: dit is langzamer, maar 100% definitief en zeker). Als mensen het hebben over off-chain transacties, bedoelen ze meestal dat dit transacties zijn via het Lightning netwerk.

### Custodial vs Self-custodial

Voor wie nieuw is met Bitcoin lijkt dit concept misschien vreemd. De meesten van ons (in ieder geval in de ontwikkelde wereld) hebben immers alleen maar custodials gebruikt, zoals banken, om ons geld op te bewaren. Maar zoals we onlangs hebben gezien (en regelmatig in minder ontwikkelde financiële markten over de hele wereld), kent het bewaren van jouw geld bij zo'n partij risico's. Banken gaan failliet (Silicon Valley Bank, etc.) en zulke instanties kunnen slechte beslissingen nemen en je geld verliezen (FTX, Voyager, etc.).

Wanneer je jouw Bitcoin zelf in bewaring neemt, hoef je alleen op jezelf te vertrouwen om jouw Bitcoin veilig op te slaan. Je hebt volledige controle.

Maar met eigen controle komt verantwoordelijkheid. Hoewel self-custody de gouden standaard is voor het veilig opslaan van grotere tegoeden, kan het de manier waarop je je geld dagelijks wilt gebruiken beperken. De meeste mensen gebruiken een combinatie van custodial en self-custodial wallets; ze bewaren grote bedragen in self-custodial wallets en bewaren een klein bedrag in een custodial wallet voor dagelijks gebruik.

Je kunt met behulp van de site [storingbitcoin.info](https://storingbitcoin.info/) bepalen hoe jij het liefste jouw tegoeden veilig beheert.
