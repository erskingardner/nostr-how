---
title: Sende Sats zu deiner selbstverwalteten Wallet
description: In diesem Guide werden wir eine einfache Lösung vorstellen, wie du das Gegenparteirisiko reduzieren und deine Sats auf ein Self-Custody-Wallet ziehen kannst.
---

## [§](#who-is-this-guide-for) Für wen ist dieser Guide?

Die meisten Nutzer verwenden Nostr derzeit mit einer Custodial-Lightning-Wallet (wie Wallet of Satoshi oder Alby), das heißt, du verwaltest deine Sats nicht selbst und hast sie in Fremdverwahrung.

Wenn das auch auf dich zutrifft, stelle dir jetzt einmal vor, dass du alle Sats in deinem Wallet verlierst. Wenn du dich bei dieser Vorstellung unwohl fühlst, ist dieser Guide genau richtig für dich.

Wir werden dir im Folgenden genau beschreiben, wie du ein Self-Custody-Wallet (in Selbstverwahrung) einrichtest und an das du regelmäßig deine Sats zur sicheren Aufbewahrung senden kannst.

## [§](#why-is-self-custody-important) Warum ist ein Self-Custody-Wallet wichtig?

Einfach ausgedrückt; Nicht deine Schlüssel, nicht deine Bitcoin (engl. "not your keys, not your coins"). Wenn du deine Sats auf einer Custodial-Wallet lässt, akzeptierst du ein gewisses Maß an Gegenparteirisiko. Stelle dir vor, der Custodial-Wallet-Anbieter "Wallet of Satoshi" wurde irgendwie gehackt und verlor dadurch die Sats von allen Kunden. Das heißt, auch du bist damit betroffen und deine Sats sind verloren.

Aus diesem Grund empfehlen wir dir dringend, nur einen kleinen Geldbetrag in _irgendeiner_ Custodial-Wallet zu halten und den Rest deiner Bitcoin selbst zu verwahren.

## [§](#ready-lets-go) Bereit? Lass uns loslegen!

Das ist ein Guide für Anfänger, bei dem du keine eigene Lightning-Node einrichten oder irgendetwas hoch Technisches tun musst. Unser Ansatz besteht darin, die Nostr-Community von Bitcoinern zu nutzen, die dir den Tausch von Sats im Lightning-Netzwerk hin zu selbstverwahrten Sats auf der Bitcoin-Mainchain verhelfen. Sichere deine Sats und schließe Freundschaften bei Peer-to-Peer-Transaktionen. Eine Win-Win-Situation!

Wenn du dich von den Fachbegriffen überwältigt fühlst, kannst du dir [den Abschnitt unten auf der Seite](#lightning-bitcoin-on-chain-what) für weitere Details durchlesen.

1. Folge zunächst diesem Guide, um eine neue Bitcoin-Wallet in [Blue Wallet](https://bluewallet.io/docs/create-bitcoin-wallet/) einzurichten. Du kannst natürlich auch jede andere Self-Custody-Wallet verwenden.
2. Sobald du deine Seed-Wörter sehr sorgfältig gesichert hast (diese können dafür verwendet werden, um dein Wallet wiederherzustellen), bist du bereit, jemanden für einen Tausch zu finden.
3. Der einfachste Weg ist, du postest in Nostr eine Note mit den Hashtags #plebchain und #bitcoin und dass du einige Lightning-Sats gegen On-Chain-Sats tauschen möchtest. Du kannst auch Leuten, die regelmäßig über Bitcoin sprechen, direkt eine Nachricht senden oder [mich bei Bedarf auch direkt anpingen](https://primal.net/jeffg).
4. Sei dir aber bewusst, dass du hier mit einer Person einen direkten Tausch machst und Vertrauen notwendig ist, also nehm dir etwas Zeit, um die andere Person ein wenig kennenzulernen. Bei Bitcoin gibt es kein Treuhandkonto und du musst dir sicher sein, dass du es mit jemandem zu tun hast, dem du vertrauen kannst. Im Allgemeinen sieht der Prozess in etwa so aus: 5. Einigt euch auf den Betrag, den ihr tauschen wollt. 6. Gib deine neu erstellte Wallet-Adresse (z. B. Blue Wallet) per DM an die andere Person weiter. 7. Du zappst den Betrag in Sats über deinen Nostr-Client an die andere Person. 8. Diese wird dann eine On-Chain-Transaktion mit dem gleichen Betrag an Sats initiieren (abzüglich der On-Chain-Transaktionsgebühren). 9. Eine On-Chain-Transaktion kann einige Zeit in Anspruch nehmen. Dein Tauschpartner kann (und sollte) dir die Transaktions-ID zusenden, damit du der Transaktion zum Beispiel auf [mempool.space](https://mempool.space) folgen kannst.
5. Das wars! Sobald die Transaktion auf die Bitcoin-Blockchain geschrieben und bestätigt wurde, hast du deine ersten Bitcoin erfolgreich selbst verwahrt.

## [§](#lightning-bitcoin-on-chain-what) Lightning? Bitcoin? On-Chain? What?

Wenn dir das alles spanisch vorkommt, keine Sorge. Bevor du den Guide befolgst, lass uns ein paar Begriffe genauer erklären.

### Bitcoin

Dieser Kaninchenbau hat kein Ende und selbst die erfahrensten Bitcoiner lernen immer wieder dazu. Wenn du neu bei Bitcoin bist, ist das Einzige, was du wirklich wissen musst, dass Bitcoin eine vollständig dezentrale Form von elektronischem Geld ist. Es wird nicht von einer Person oder Entität kontrolliert und funktioniert auf der Grundlage von Regeln, die fest in der Software kodiert sind, anstatt von politischen Entscheidungen und Regierungen abhängig zu sein. Bitcoin ist das einzige wirklich dezentrale und regelbasierte elektronische Geld.

Bitcoin priorisiert Sicherheit vor Geschwindigkeit. Das bedeutet, dass Transaktionen ein wenig Gebühren kosten und einige Zeit in Anspruch nehmen, um final bestätigt zu werden. Sobald sie aber bestätigt sind, kann niemand die Transaktionen mehr rückgängig machen oder diese auf irgendeine Weise zensieren.

Wenn du mehr erfahren möchtest, findest du hier ein paar großartige Guides, um tiefer in Bitcoin einzusteigen.

1. [Bitcoin.org Guide](https://bitcoin.org/de/wie-es-funktioniert)
2. [Bitcoiner Guide for Beginner (englisch)](https://bitcoiner.guide/beginner/)
3. [Bitcoin White-Paper](https://www.blocktrainer.de/uebersetzungen/bitcoin-whitepaper-deutsch/)

### Lightning

Lightning ist eine Zahlungsschicht, die auf Bitcoin aufbaut. Grundsätzlich tätigt man immer noch Zahlungen mit Bitcoin, aber Lightning ermöglicht nahezu sofortige Transaktionen zu extrem niedrigen Gebühren. Aus diesem Grund hat das Lightning-Netzwerk viele neue Use-Cases für Zahlungen mit Kleinstbeträgen (engl. "micropayments") eröffnet. Die Details zur Funktionsweise von Lightning würden den Rahmen dieses Guides sprengen, aber hier sind ein paar Quellen, wenn du mehr erfahren willst:

1. [Bitcoiner Lightning Guide](https://bitcoiner.guide/lightning/de/)
2. [Lightning Labs Overview (englisch)](https://docs.lightning.engineering/the-lightning-network/overview)

### On-chain vs Off-chain

Du wirst oft hören, dass Leute On-Chain- und Off-Chain-Bitcoin erwähnen. On-Chain-Transaktionen sind Transaktionen direkt auf der Basis-Bitcoin-Blockchain. Das ist zwar langsamer und meistens teurer, aber du kannst dir nach ein paar Blockbestätigungen zu 100% sicher sein, dass die Transaktion vollzogen ist. Ist von Off-Chain-Transaktionen die Rede, wird meistens das Lightning-Netzwerk gemeint, ein Layer-2 von Bitcoin.

### Custodial vs Self-Custodial

Für diejenigen, die neu bei Bitcoin sind, mag dieses Konzept fremd erscheinen. Schließlich haben die meisten von uns (zumindest in den Industrieländern) immer nur Verwahrungsdienste wie Banken genutzt, um ihr Geld aufzubewahren. Aber wie wir in letzter Zeit gesehen haben (und regelmäßig in weniger entwickelten Finanzmärkten auf der ganzen Welt sehen), birgt die Aufbewahrung von Geld bei einer Depotbank Risiken. Banken gehen pleite (Silicon Valley Bank usw.) und Depotbanken können schlechte Entscheidungen treffen und das Geld verlieren (FTX, Voyager usw.).

Wenn du deine Bitcoin selbst in Verwahrung nimmst, musst du dich lediglich auf dich selbst verlassen. Das kann im ersten Moment auch furchteinflößend sein, aber du hast die volle Kontrolle über deine Bitcoin.

Aber mit großer Macht geht auch große Verantwortung einher. Während die Selbstverwahrung der Goldstandard für die sichere Aufbewahrung größerer Geldbeträge ist, kann es die Verwendung deines Geldes im Alltag einschränken. Die meisten Leute verwenden deshalb eine Kombination aus Custody- und Self-Custody-Lösungen; Große Beträge in Selbstverwahrung und kleine Beträge auf einer Custodial-Wallet für den täglichen Gebrauch.
