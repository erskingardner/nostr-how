---
title: Irisの使い方
description: IrisのWebクライアントを使って、Nostrを始めるためのステップバイステップ・ガイドを説明します。
---

## Step 1 – Albyをインストールする

[Alby](https://chrome.google.com/webstore/detail/alby-bitcoin-lightning-wa/iokeahhehimjnekafflcihljlcjccdbe)をChromeストア、または直接[Alby公式サイト](https://getalby.com/)から入手してください。

拡張機能をインストールしたら、新しいアカウントを作成します。あなたがすでにプロでない限り、Albyでアカウントを作成し、新しいライトニング・ウォレットを設定することをお勧めします。

## Step 2 – Irisで新しい秘密鍵を生成する

1. Navigate to [Iris.to](https://iris.to).
2. Enter a name and hit "Go" ![Iris sign up screen](/images/iris-signup.webp)
3. Iris will generate a new public/private key pair for you and sign you in. You can start following people and posting notes at this point. ![Iris new user experience](/images/iris-nux.webp)
4. However, we're going to make sure we're using the app in the safest way possible. Head to "Settings" on the left and then click "Accounts" in the secondary menu. ![Iris settings](/images/iris-accounts-settings.webp)
5. Copy your public key and your "nsec" private key. These should be stored somewhere VERY safe. Like a password manager (we like 1Password).
6. Once you're sure you've saved your private key somewhere safe, click "log out" at the top of the accounts page to log out of Iris. We'll log back in safely in a second.

## Step 3 – 新しい秘密鍵をAlbyに追加する

1. Once you've created an account and have saved your private key somewhere safe we need to add that key to the Alby extension.
2. Open the Alby extension and then navigate to the Alby accounts page. ![Alby accounts](/images/alby-accounts.webp)
3. Click on your account and then, in the Nostr section, paste your new private key (this starts with `nsec`) in the field.
4. You're now ready to use Alby to log in and use Nostr through any web client.

## Step 4 – Irisに再ログインする

1. Back on the Iris login page, click "Nostr extension login". ![Iris sign up screen](/images/iris-signup.webp)
2. Authorize key usage in the Alby extension popup that will appear.
3. You are logged in! It may take a few moments for content to start loading. 🤙 You'll need to sign using the Alby extension any time you perform an action in Iris. You can check the box to have Alby remember your choice if this bugs you.

## 動画ガイド

動画にようるガイドが必要なら、[Max DeMarco](https://snort.social/p/npub1lelkh3hhxw9hdwlcpk6q9t0xt9f7yze0y0nxazvzqjmre3p98x3sthkvyz)によるNostrアカウント作成のための[初心者向けチュートリアル（英語）](https://www.youtube.com/watch?v=kifwECtwjJQ)がおすすめです。
