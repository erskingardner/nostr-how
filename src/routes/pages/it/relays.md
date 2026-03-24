---
title: Che cosa sono i relays Nostr?
description: Una panoramica su ciò che sono i relays Nostr, perché sono importanti e come funzionano.
---

## [§](#cosa-sono) Che cosa sono i relays?

I relays sono come i server di backend per Nostr. Consentono ai client di Nostr di inviare loro messaggi, e possono (o non possono) memorizzare quei messaggi e diffonderli a tutti gli altri client connessi.

Il mondo dei relays sta cambiando rapidamente, quindi ci si può aspettare molti cambiamenti qui in futuro. Una cosa da notare, poiché Nostr è decentralizzato e dipende dai relays per memorizzare e recuperare i dati, se noti che il tuo client Nostr sembra lento, è molto probabile che sia a causa dei relays che stai usando. Potrebbe valere la pena aggiungere alcuni relays (o rimuoverne alcuni) dal tuo client.

## [§](#pagamento-o-gratuiti) Relay a pagamento vs gratuiti

Attualmente molti relay sono gratuiti. Dati i costi di gestione di un relay (pagamento per il calcolo, la memorizzazione e la larghezza di banda), la maggior parte delle persone si aspetta che in futuro i relay a pagamento saranno la norma.

Un grande vantaggio nell'utilizzare i relay a pagamento ora è il numero più alto di utenti e note sui relay a pagamento. La "Proof of Work" di pagare per l'accesso al relay è qualcosa che aiuta a mantenere gli account spam lontani dalla rete.

## [§](#trovare-elenco) Dove posso trovare un elenco di tutti i relay?

La migliore risorsa che abbiamo trovato per navigare e valutare la velocità dei relay noti è il [sito Nostr.watch](https://nostr.watch?utm_source=nostr.how&ref=nostr.how).

## [§](#cosa-succede-se-smettono-i-rele) Cosa succede se tutti i relay che uso smettono di funzionare?

Se tutti i relay che hai usato in passato vanno offline, tutti i tuoi post saranno irrecuperabili. Questo è uno dei motivi per cui Nostr consente agli utenti di connettersi a molti relay, in modo da garantire un certo grado di backup. Detto questo, se sei davvero interessato a essere incensurabile, puoi e dovresti eseguire il tuo relay personale.

## [§](#dovrei-eseguire-il-mio-rele) Dovrei eseguire il mio relay?

Per la maggior parte delle persone, no, non ne vale la pena. Detto questo, se sei tecnico e vuoi assicurarti che il tuo discorso sia assolutamente incensurabile o vuoi eseguire un relay privato per un piccolo gruppo, allora puoi e dovresti eseguire il tuo relay. Ciò garantisce che tu abbia sempre una copia di tutti i tuoi post e interazioni Nostr. Esistono molte implementazioni di relay scritte in diversi linguaggi di programmazione o aggiunte a servizi popolari come StartOS o Alby Hub.
