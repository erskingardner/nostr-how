---
title: Damusの使い方
description: DamusのiOSクライアントを使って、Nostrを始めるためのステップバイステップ・ガイドを説明します。
---

## Step 1 - Damusで始める

これは、[@jb55](https://snort.social/p/npub1xtscya34g58tk0z605fvr788k263gsu6cy9x0mhnm87echrgufzsevkk5s)によって作成された美しく使いやすいiOSクライアントである[Damus](https://damus.io/)を使って、Nostrを使い始めるための具体的なガイドです。

1. [DamusをAppストア](https://apps.apple.com/app/damus/id1628663131)でダウンロードします。
2. アプリを開くと、新しいアカウントを作成するか、すでに生成した秘密鍵でログインするかのどちらかを選択します。
3. Alby拡張機能または他のクライアントで秘密鍵を生成済みの場合は、”ログイン”をタップします。そうでない場合は、"アカウント作成"をタップしてください。
   ![Damus login/signup page](/images/damus-login.webp)

## Step 2 - 新規アカウントの作成

1. Click "Create Account".
2. Read through and accept the EULA.
3. You'll then pick a username (this can be changed later) and, optionally, add some other profile details. Damus auto generates keys for you at this step. Your public key is shown as the "Account ID" value. ![Damus login/signup page](/images/damus-signup.webp)
4. Once you've finished, click "Create" and you're ready to use Nostr! 🤙
5. Just one last **extremely important** step. You need save your private key somewhere safe.
6. Navigate to Settings by clicking your profile image at the top left of the screen, then click "Settings" in the menu. ![Damus Settings](/images/damus-settings.webp)
7. You'll see your "Public Account ID" (this is your public key) and your "Secret Account Login Key" (this is your private key).
8. Copy both of these values and store them somewhere **VERY** safe. 1Password or another password manager is a good option. Remember, if you don't save this value, you'll never be able to recover your account. You can find [more info on keys here](/en/get-started#understanding-keys).

## 既存鍵でログインする

1. "ログイン"をタップします。
2. EULA（エンドユーザーライセンス契約）に目を通し、同意します。
3. 秘密鍵の入力を求められます。鍵を入力して完了です。🤙 **重要**：秘密鍵はローカルに保存され、Damusサーバーによって収集または保存されることは一切ありません。
