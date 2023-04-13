---
title: Che cosa sono i relè Nostr?
description: Una panoramica su ciò che sono i relè Nostr, perché sono importanti e come funzionano.
---

## [§](#cosa-sono) Che cosa sono i relè?

I relè sono come i server di backend per Nostr. Consentono ai client di Nostr di inviare loro messaggi, e possono (o non possono) memorizzare quei messaggi e diffonderli a tutti gli altri client connessi.

Il mondo dei relè sta cambiando rapidamente, quindi ci si può aspettare molti cambiamenti qui in futuro. Una cosa da notare, poiché Nostr è decentralizzato e dipende dai relè per memorizzare e recuperare i dati, se noti che il tuo client Nostr sembra lento, è molto probabile che sia a causa dei relè che stai usando. Potrebbe valere la pena aggiungere alcuni relè (o rimuoverne alcuni) dal tuo client.

## [§](#pagamento-o-gratuiti) Relè a pagamento vs gratuiti

Attualmente molti relè sono gratuiti. Dati i costi di gestione di un relè (pagamento per il calcolo, la memorizzazione e la larghezza di banda), la maggior parte delle persone si aspetta che in futuro i relè a pagamento saranno la norma.

Un grande vantaggio nell'utilizzare i relè a pagamento ora è il segnale più alto di utenti e note sui relè a pagamento. La "prova del lavoro" di pagare per l'accesso al relè è qualcosa che aiuta a mantenere gli account spam lontani dalla rete.

## [§](#a-pagamento) Relè a pagamento popolari

Un elenco aggiornato dei relè a pagamento con dettagli su quanto costano e chi li gestisce può essere trovato su [Relay Exchange](https://relay.exchange/).

## [§](#trovare-elenco) Dove posso trovare un elenco di tutti i relè?

La migliore risorsa che abbiamo trovato per navigare e valutare la velocità dei relè noti è il [sito Nostr.watch](https://nostr.watch/relays/find).

## [§](#cosa-succede-se-smettono-i-rele) Cosa succede se tutti i relè che uso smettono di funzionare?

Se tutti i relè che hai usato in passato vanno offline, tutti i tuoi post saranno irrecuperabili. Questo è uno dei motivi per cui Nostr consente agli utenti di connettersi a molti relè, in modo da garantire un certo grado di backup. Detto questo, se sei davvero interessato a essere inattaccabile, puoi e dovresti eseguire il tuo relè personale.

## [§](#dovrei-eseguire-il-mio-rele) Dovrei eseguire il mio relè?

Per la maggior parte delle persone, no, non vale la pena della seccatura. Detto questo, se sei tecnico e vuoi assicurarti che il tuo discorso sia assolutamente inattaccabile o vuoi eseguire un relè privato per un piccolo gruppo, allora puoi e dovresti eseguire il tuo relè. Ciò garantisce che tu abbia sempre una copia di tutti i tuoi post e interazioni Nostr per sempre. Stiamo lavorando su una guida per questo, ma nel frattempo, [qui c'è una guida](https://andreneves.xyz/p/set-up-a-nostr-relay-server-in-under) di Andre Neves su come configurare un relè Nostr.
