---
title: Spazzare sats in un portafoglio di auto-custodia
description: In questa guida, copriremo una soluzione semplice per ridurre il rischio di controparte spazzando i fondi in un portafoglio di auto-custodia.
---

## Per chi è questa guida?

La maggior parte degli utenti sta attualmente utilizzando Nostr con un portafoglio di lightning custodiale, come Wallet of Satoshi o Alby.

Se sei uno di loro, voglio che pensi ai sats nel tuo portafoglio in questo momento. Ora, pensa di perdere tutti quei sats. Se questa idea ti fa sentire a disagio o preoccupato, questa guida è per te.

Copriremo la configurazione di un portafoglio di auto-custodia che ti consentirà di spazzare periodicamente i fondi dal tuo portafoglio custodiale per metterli al sicuro.

## Perché è importante l'auto-custodia?

Semplicemente messo; non le tue chiavi, non le tue monete. Quando lasci i tuoi sats in un portafoglio custodiale, accetti un certo grado di rischio di controparte. Immagina se Wallet of Satoshi fosse stata hackerata in qualche modo. Poiché detengono tutti i fondi dei clienti, una situazione del genere significherebbe che i tuoi fondi sarebbero persi.

Per questo motivo, è fortemente consigliato di tenere solo una piccola quantità di fondi in qualsiasi portafoglio custodiale e di auto-custodire il resto dei tuoi bitcoin.

## Pronti? Andiamo!

Questa è una guida per principianti che non richiede di configurare il proprio nodo lightning o di fare qualsiasi cosa di tecnico. Il nostro trucco qui è di utilizzare la comunità di Bitcoiners di Nostr per aiutarti a fare lo swap dai sats sulla rete Lightning ai sats di auto-custodia sulla principale catena di blocco di Bitcoin. Proteggi la tua pila e fai amicizia facendo transazioni peer-to-peer. Doppia vittoria!

Se ti senti sopraffatto dalla terminologia qui, dai un'occhiata alla sezione in fondo alla pagina per maggiori dettagli.

1. Segui questa guida per configurare un nuovo portafoglio Bitcoin in Blue Wallet. Puoi anche utilizzare qualsiasi altro portafoglio di auto-custodia.
1. Una volta che hai salvato molto attentamente le tue parole seed (che è ciò che userai per ripristinare il tuo portafoglio se necessario), sei pronto per trovare qualcuno con cui fare uno swap.
1. Il modo più semplice per farlo è pubblicare una nota menzionando i tag #plebchain e #bitcoin menzionando che vorresti scambiare alcuni lightning sats per on-chain sats. Non essere timido nel messaggiare direttamente le persone che parlano spesso di bitcoin. Puoi anche [mandarmi un messaggio](https://primal.net/jeffg).
1. Da lì, pianificherai direttamente con la persona con cui effettuerai lo scambio. Prima di procedere con lo scambio, prenditi del tempo per conoscere un po' la persona, poiché non esiste un escrow in Bitcoin, devi essere sicuro di aver a che fare con qualcuno di fidato per completare la transazione. In generale, il processo assomiglia a questo:
    1. Mettetevi d'accordo sull'importo da scambiare.
    1. Condividi il tuo nuovo indirizzo del portafoglio (in Blue Wallet) con la persona tramite messaggio diretto.
    1. Invia i tuoi sats tramite il tuo client Nostr.
    1. La persona avvierà una transazione onchain per pagarti lo stesso importo di sats (potenzialmente meno eventuali commissioni di transazione).
    1. Ricorda, questa transazione on-chain richiederà del tempo. Il tuo partner commerciale può (e dovrebbe) inviarti l'ID della transazione non appena lo ha, in modo che tu possa seguirne l'andamento su [mempool.space](https://mempool.space).
    1. E questo è tutto! Hai finito. Una volta che i fondi saranno arrivati, avrai preso con successo l'autocustodia del tuo primo Bitcoin. Trattalo con rispetto e prenditi cura di esso.

## Lightning? Bitcoin? On-chain? Che cosa?

Se tutto questo ti suona incomprensibile, non preoccuparti. Prima di iniziare la guida, copriamo velocemente alcuni termini.

### Bitcoin

Questa tana di coniglio non ha fondo conosciuto. Detto questo, se sei nuovo in Bitcoin, l'unica cosa che devi sapere è che Bitcoin è una forma completamente decentralizzata di denaro elettronico. Non è controllato da una singola persona o entità e funziona sulla base di regole codificate nel software, invece di essere dipendente dalla politica e dai governi. Bitcoin è l'unico denaro elettronico veramente decentralizzato e basato su regole.

Bitcoin privilegia la certezza sulla velocità. Ciò significa che le transazioni hanno un costo leggermente maggiore in termini di commissioni e richiedono del tempo per essere confermate, ma una volta confermate, sono completamente irreversibili e nessuno può rubare le tue monete o censurare la tua transazione.

Se vuoi saperne di più, ecco alcune ottime risorse per approfondire Bitcoin.

1. [Bitcoin.org guide](https://bitcoin.org/en/how-it-works)
1. [Bitcoiner beginner guide](https://bitcoiner.guide/beginner/)

### Lightning

Lightning è uno strato di pagamento che funziona su Bitcoin. Fondamentalmente, si effettuano ancora pagamenti utilizzando Bitcoin come denaro, ma Lightning consente transazioni quasi istantanee e a commissioni estremamente basse. Grazie a questo, la rete Lightning ha aperto molte nuove possibilità di utilizzo, compresi i micropagamenti. I dettagli su come funziona Lightning vanno oltre lo scopo di questa guida introduttiva, ma ecco alcune risorse se sei interessato ad approfondire:

1. [Bitcoiner Lightning Guide](https://bitcoiner.guide/lightning/)
1. [Lightning Labs Overview](https://docs.lightning.engineering/the-lightning-network/overview)

### On-chain vs Off-chain

Sentirai spesso le persone parlare di Bitcoin on-chain vs off-chain. Quando le persone parlano di transazioni on-chain, si riferiscono semplicemente all'utilizzo della base della blockchain di Bitcoin (ricorda; è più lento, ma al 100% finale e certo). Quando le persone si riferiscono a transazioni off-chain, si riferiscono per lo più a Lightning.

### Custodial vs Self-custodial

Per chi è nuovo in Bitcoin, questo concetto potrebbe sembrare straniero. Dopotutto, la maggior parte di noi (almeno nel mondo sviluppato) ha sempre utilizzato servizi di custodia, come le banche, per conservare il nostro denaro. Ma come abbiamo visto di recente (e regolarmente nei mercati finanziari meno sviluppati in tutto il mondo), conservare il proprio denaro presso un custode comporta dei rischi. Le banche falliscono (Silicon Valley Bank, ecc.) e i custodi possono prendere decisioni sbagliate e perdere il tuo denaro (FTX, Voyager, ecc.).

Quando ti prendi cura dei tuoi Bitcoin, devi solo fidarti di te stesso per conservare i tuoi Bitcoin in sicurezza. Hai il totale controllo.

Ma con grande potere viene grande responsabilità. Mentre la custodia personale è lo standard d'oro per conservare grandi quantità di denaro in modo sicuro, può limitare l'utilizzo del denaro nella vita quotidiana. La maggior parte delle persone usa una combinazione di soluzioni di custodia personale e di terzi; conservando grandi quantità in modo personale e tenendo una piccola quantità di fondi in un portafoglio di custodia per l'uso quotidiano.
