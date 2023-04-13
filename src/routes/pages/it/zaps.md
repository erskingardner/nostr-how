---
title: Cosa sono i Zaps?
description: Scopri cosa sono i Zaps, come funzionano e di cosa hai bisogno per utilizzarli sul tuo client Nostr.
---

## [§](#le-basi) Le basi

Il modo più semplice per pensare ai Zaps è che sono semplicemente suggerimenti. Suggerimenti trasmessi sulla [rete Lightning](https://www.investopedia.com/terms/l/lightning-network.asp) alla velocità della luce senza praticamente alcuna commissione di transazione.

Fin dall'inizio del protocollo Nostr, era comune vedere fatture Lightning nelle note. Dopo l'implementazione di [NIP-57](https://github.com/nostr-protocol/nips/blob/master/57.md), i Zaps sono diventati il modo principale per trasmettere valore nelle note di Nostr. Esaminiamo più da vicino cosa ha implementato NIP-57 e come funzionano i Zaps.

## [§](#nip-57) NIP-57

[NIP-57](https://github.com/nostr-protocol/nips/blob/master/57.md) è il documento che descrive come i Zaps dovrebbero essere implementati. Crea due nuovi tipi di note, il tipo 9735 (un Zap) e il tipo 9734 (una richiesta di Zap). Insieme, questi due tipi rendono possibile per i client Nostr richiedere fatture di Zap dai server LNURL e pagarle. Lo spec NIP-57 descrive anche come i portafogli Lightning che ricevono pagamenti di Zap dovrebbero creare note da inviare ai relè.

💡 Dato curioso, il tipo di nota scelto per i Zaps è lo stesso della porta di rete (9735) usata da Lightning.

## [§](#come-funzionano) Come funzionano i Zaps

![Zap flowchart](/images/zap-flow.webp)

Non entreremo nei dettagli tecnici qui, ma per i più curiosi vediamo le meccaniche di base di come funzionano i Zaps.

1. Quando fai clic o tocchi sull'icona del fulmine ⚡ nel tuo client (Damus, Iris, Amethyst, ecc.), la prima cosa che accade è che il client contatta il [server LNURL](https://thebitcoinmanual.com/articles/what-is-ln-url-and-how-does-it-work/) che si trova di fronte al portafoglio Lightning della persona a cui stai cercando di inviare un Zap. La prima richiesta va più o meno così: "Ciao, vorrei dare ad Alice alcuni sats."
1. Il server LNURL risponde e, se il portafoglio di Alice supporta i Zaps, lo comunica al client e invia/conferma la chiave pubblica di Alice.
1. A questo punto, il client elabora una richiesta di Zap (una nota di tipo 9734) con dati sul profilo o sulla nota che vorrebbe Zap, l'importo, i relè a cui deve essere trasmessa la nota e alcune altre informazioni. Questa è effettivamente una richiesta di fattura dal server LNURL.
1. Il server LNURL risponde con la fattura richiesta.
1. A questo punto, il client passa la fattura al portafoglio Lightning dell'utente per essere pagata. Se utilizzi un portafoglio come Alby nel browser (e hai impostato un budget), questo processo può avvenire molto rapidamente.
1. Una volta che l'utente ha pagato la fattura direttamente al portafoglio della persona a cui sta inviando il denaro, il portafoglio del ricevente creerà una nota del tipo 9735 e la trasmetterà ai relay specificati in precedenza nella richiesta di Zap.
1. I relay che ricevono questa nota saranno in grado di informare i client connessi sullo Zap e di mostrare lo Zap agli utenti nella loro interfaccia utente.

Tutto questo avviene in pochi secondi e costa solo una frazione di centesimo.

## [§](#come-inviare-ricevere-zaps) Come inviare e ricevere Zaps?

Per inviare Zaps ad altre persone in Nostr, ti servono solo due cose:

1. Un portafoglio Lightning compatibile con Zap (come [Alby](https://getalby.com/) o [Wallet of Satoshi](https://www.walletofsatoshi.com/))
1. Un client che abbia implementato i Zaps (come [Damus](/it/guides/damus), [Amethyst](/it/guides/amethyst), [Iris](/it/guides/iris) o [Snort](https://snort.social))

L'unica altra cosa che devi fare è assicurarti di avere impostato il tuo indirizzo Lightning nel tuo profilo Nostr. Questo è l'indirizzo dove riceverai i tuoi Zaps.

Tieni presente che è possibile pagare i Zaps da un portafoglio o indirizzo diverso da quello impostato nel tuo profilo per ricevere i Zaps.

Ad esempio, immagina quanto segue:

1. Hai impostato un indirizzo Lightning di [Stacker News](https://stacker.news/) nel tuo profilo Nostr, questo è dove riceverai i tuoi sats inviati tramite Zap.
1. Sul tuo browser web, usi Iris come client e paghi i tuoi Zaps utilizzando il tuo portafoglio Alby tramite la loro estensione per Chrome.
1. Sul tuo dispositivo mobile, usi Damus come client e paghi i tuoi Zaps utilizzando l'app Wallet of Satoshi.
