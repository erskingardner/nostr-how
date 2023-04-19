---
title: Inizia con Iris
description: Una guida passo-passo per iniziare con Nostr utilizzando il cliente web Iris.
---

## Passaggio 1 - Installa Alby

Scarica [Alby](https://chrome.google.com/webstore/detail/alby-bitcoin-lightning-wa/iokeahhehimjnekafflcihljlcjccdbe) dal Chrome Web Store o direttamente dal [sito web di Alby](https://getalby.com/).

Una volta installata l'estensione, crea un nuovo account. A meno che tu non sia già un professionista, ti consigliamo di creare un account su Alby e di configurare un nuovo portafoglio Lightning.

## Passaggio 2 - Genera una nuova chiave privata con Iris

1. Vai su [Iris.to](https://iris.to).
1. Inserisci un nome e premi "Go" ![Iris sign up screen](/images/iris-signup.webp)
1. Iris genererà una nuova coppia di chiavi pubblica/privata per te e ti autenticherà. A questo punto puoi iniziare a seguire persone e pubblicare note. ![Iris new user experience](/images/iris-nux.webp)
1. Tuttavia, faremo in modo di utilizzare l'applicazione nel modo più sicuro possibile. Vai su "Impostazioni" sulla sinistra e poi clicca su "Nostr" nel menu secondario. ![Iris settings](/images/iris-settings-annotated.webp)
1. Copia la tua chiave pubblica e la tua chiave privata "nsec". Queste devono essere conservate in un luogo MOLTO sicuro, come un gestore di password (a noi piace 1Password).
1. Una volta che sei sicuro di aver salvato la tua chiave privata in un luogo sicuro, clicca su "Account" nel menu secondario e disconnettiti da Iris. Ci ricollegheremo in sicurezza tra poco.

## Passaggio 3 - Aggiungi la tua nuova chiave privata ad Alby

1. Una volta creato un account e aver salvato la tua chiave privata in un luogo sicuro, dobbiamo aggiungere quella chiave all'estensione di Alby.
1. Apri l'estensione di Alby e vai alla pagina delle impostazioni Accounts di Alby. ![Alby accounts](/images/alby-accounts.webp)
1. Scegli il tuo conto e poi, nella sezione di Nostr, incolla la tua nuova chiave privata (che inizia con `nsec`) nel campo.
1. Ora sei pronto per utilizzare Alby per accedere e utilizzare Nostr attraverso qualsiasi client web.

## Passaggio 4 - Effettua nuovamente l'accesso a Iris

1. Tornando alla pagina di accesso di Iris, clicca su "Accesso all'estensione di Nostr". ![Iris sign up screen](/images/iris-signup.webp)
1. Autorizza l'utilizzo della chiave nella finestra di dialogo dell'estensione di Alby che apparirà.
1. Sei autenticato! Potrebbe volerci qualche momento prima che il contenuto inizi a caricarsi. 🤙 Dovrai firmare l'accesso tramite l'estensione di Alby ogni volta che esegui un'azione in Iris. Puoi selezionare la casella per ricordare la tua decisione se vuoi.
