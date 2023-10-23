---
title: Amethystの使い方
description: AmethystのAndroidクライアントを使って、Nostrを始めるためのステップバイステップ・ガイドを説明します。
---

## Step 1 - アプリをダウンロードする

1. [AmethystをAndroidストア](https://play.google.com/store/apps/details?id=com.vitorpamplona.amethyst)でダウンロードします。
2. アプリを開くと、新しいアカウントを作成するか、すでに生成した秘密鍵でログインするかのどちらかを選択します。
3. Alby拡張機能または他のクライアントで秘密鍵を作成済みの場合は、利用規約を読んで同意し、（npub/nsec）を入力して”ログイン”をタップします。そうでない場合は、"新しい鍵の生成"をタップしてください。[鍵の詳細はこちら](/jp/get-started#understanding-keys)を参照してください。

## Step 2 - アカウントを作成する

1. Read through the "terms of use" and check the box.
2. Click on "Generate a new key".
3. Congratulations, you've just created a new Nostr identity! 🤙
4. You get redirected to the home screen and show "Feed is empty. Refresh", because you are not yet following any other accounts. We'll take care of that later.
5. Just one last **extremely important** step. You should keep your private key in a safe place. To do this, click on the icon with the weird-looking robot at the top left corner, which is currently your profile picture. A sidebar will appear.
6. Navigate to "Backup Keys" and click "Copy my secret key" at the bottom.
7. Your private key is now on your smartphone's clipboard, it's best to keep it in a **VERY** safe place. '1Password' or any other password manager is a good option. Remember, you won't be able to recover your account if you forget the private key. You can find [more info on keys here](/en/get-started#understanding-keys).
8. Now you can continue setting up your account. Go back to your profile picture at the top left corner of the home screen and navigate to "Profiles". From there, click on the icon with the three lines and pen next to "Follow". You can adjust your profile settings there. If you are done click "Post" in the top right corner to confirm your changes.
9. Ok, your account is set up now, let's fill your feed and follow other people. Click on the search icon in the top right corner and search for accounts you know, or just click on "All Follows" on the home screen (house icon at the bottom left) and select "Global". You'll see now all notes that are sent to your connected relays. If you feel overwhelmed, no worries, over time you'll find new interesting accounts here. Just give it a try.

## 既存鍵でログインする

1. ”利用規約”に目を通し、チェックボックスにチェックを入れます。
2. npub（読み取り専用）またはnsec（フル・アクセス）を入力し、”ログイン”をタップします。
3. **重要**：秘密鍵はローカルに保存され、Amethystサーバーによって収集または保存されることは一切ありません。
