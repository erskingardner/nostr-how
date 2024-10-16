---
title: Che cosa sono i relays Nostr?
description: Una panoramica su ciò che sono i relays Nostr, perché sono importanti e come funzionano.
---

## [§](#cosa-sono) Che cosa sono i relays?

I relays sono come i server di backend per Nostr. Consentono ai client di Nostr di inviare loro messaggi, e possono (o non possono) memorizzare quei messaggi e diffonderli a tutti gli altri client connessi.

Il mondo dei relays sta cambiando rapidamente, quindi ci si può aspettare molti cambiamenti qui in futuro. Una cosa da notare, poiché Nostr è decentralizzato e dipende dai relays per memorizzare e recuperare i dati, se noti che il tuo client Nostr sembra lento, è molto probabile che sia a causa dei relays che stai usando. Potrebbe valere la pena aggiungere alcuni relays (o rimuoverne alcuni) dal tuo client.

## [§](#pagamento-o-gratuiti) Relay a pagamento vs gratuiti

Attualmente molti relay sono gratuiti. Dati i costi di gestione di un relays (pagamento per il calcolo, la memorizzazione e la larghezza di banda), la maggior parte delle persone si aspetta che in futuro i relays a pagamento saranno la norma.

Un grande vantaggio nell'utilizzare i relays a pagamento ora è il numero più alto di utenti e note sui relays a pagamento. La "Proof of Work" di pagare per l'accesso al relays è qualcosa che aiuta a mantenere gli account spam lontani dalla rete.

## [§](#a-pagamento) Relays a pagamento popolari

Un elenco aggiornato dei relays a pagamento con dettagli su quanto costano e chi li gestisce può essere trovato su [Relay Exchange](https://relay.exchange/).

## [§](#trovare-elenco) Dove posso trovare un elenco di tutti i relays?

La migliore risorsa che abbiamo trovato per navigare e valutare la velocità dei relays noti è il [sito Nostr.watch](https://legacy.nostr.watch/relays/find).

## [§](#cosa-succede-se-smettono-i-rele) Cosa succede se tutti i relays che uso smettono di funzionare?

Se tutti i relays che hai usato in passato vanno offline, tutti i tuoi post saranno irrecuperabili. Questo è uno dei motivi per cui Nostr consente agli utenti di connettersi a molti relays, in modo da garantire un certo grado di backup. Detto questo, se sei davvero interessato a essere inattaccabile, puoi e dovresti eseguire il tuo relays personale.

## [§](#dovrei-eseguire-il-mio-rele) Dovrei eseguire il mio relays?

Per la maggior parte delle persone, no, non ne vale la pena. Detto questo, se sei tecnico e vuoi assicurarti che il tuo discorso sia assolutamente inattaccabile o vuoi eseguire un relays privato per un piccolo gruppo, allora puoi e dovresti eseguire il tuo relays. Ciò garantisce che tu abbia sempre una copia di tutti i tuoi post e interazioni Nostr per sempre. Stiamo lavorando ad una guida su questo, ma nel frattempo, [qui c'è una guida](https://andreneves.xyz/p/set-up-a-nostr-relay-server-in-under) di Andre Neves su come configurare un relays Nostr.
