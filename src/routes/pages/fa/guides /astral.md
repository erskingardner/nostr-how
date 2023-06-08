---
title: Get started with Astral
description: A step-by-step guide to getting started with Nostr with the Astral web client.
---

## Step 1 – Install Alby

Get [Alby](https://chrome.google.com/webstore/detail/alby-bitcoin-lightning-wa/iokeahhehimjnekafflcihljlcjccdbe) from the Chrome Webstore or directly from the [Alby website](https://getalby.com/).

Once you have the extension installed create a new account. Unless you're a pro already, we recommend just creating an account on Alby and setting up a new Lightning wallet.

## Step 2 – Generate your Private Key

1. Once Alby is installed and you've created or connected to a lightning wallet, navigate to the Alby accounts page. ![Alby settings](/images/alby-accounts.webp)
1. Scroll to the Nostr section and click the "Generate a new key" button under "Manage your key". This will generate a private key and save it to your alby wallet. You can now use this private key to log into Nostr.
1. Once you've generated your private key, click the small eyeball icon to show your key. Copy the private key (which will start with `nsec`) and save it to a password manager or somewhere **very** safe. Remember, if you lose this key, it's gone forever, along with all your account data.

## Step 3 – Sign into Astral

1. Navigate to [Astral](https://astral.ninja).
1. In the login popup that appears, click the "USE PUBLIC KEY FROM EXTENSION" button. ![Astral Login Step 1](/images/astral-login.webp)
1. Authorize key usage in the alby extension popup. ![Astral Login Step 2](/images/astral-login2.webp)
1. Once you confirm you'll be presented with another popup in Astral. We can see here that Alby has passed our public key to Astral. Since we don't want to store our private key on Astral should just press "Proceed" here. ![Astral Login Step 3](/images/astral-login3.webp)
1. Astral will then show you yet another popup telling you that your private key isn't present. Again, this is what we want so you can just hit "Close". ![Astral Login Step 4](/images/astral-login4.webp)
1. You are logged in! It may take a few moments for content to start loading. 🤙
1. At this point, you can copy your public key from the top left of the page. You should store this alongside your private key so you have it. ![Astral Login Step 5](/images/astral-login5.webp)
