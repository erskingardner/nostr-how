---
title: 最初のZaps用ウォレットの設定
description: NostrでZapするためのライトニング・ウォレット設定についてのガイドです。
---

## [§](#magic-internet-money) 魔法のインターネットマネー、まるで光速のような

Using Bitcoin's Lightning Network, you can send tiny fractions of a bitcoin, known as satoshis (or sats), around the world, at the speed of light, with near-zero fees. On Nostr, these transactions are called zaps.

Even if you're new to Nostr, you've probably already seen at least one mention of zaps. You can zap someone if they make you laugh, or they give you good advice, or if they post something that adds value to your experience. You can even zap someone for no reason at all! And the reverse is also true: if you contribute interesting content to the nostr community, it won't be long before strangers on the internet (read: new friends) are sending you bitcoin.

## [§](#custodial-vs-self) カストディ vs セルフカストディ・ウォレット

The first thing you'll need is a bitcoin lightning wallet. This is the wallet where your zap transactions come from. There are many options, but one of the most important distinctions to understand is whether the wallet is custodial or self-custodial. Each comes with trade-offs, but we typically recommend that brand-new users first set up a custodial wallet to get comfortable with using zaps and managing their funds.

As you get more comfortable (or once the funds in your custodial wallet reach a level that you want to take full control of) you can set up a self-custodial wallet.

## [§](#custodial) カストディ・ウォレット

A custodial wallet is one where the wallet developer holds the keys to the bitcoin, and your account is essentially authorized to send and receive that bitcoin – whether to another user or to a different wallet that you fully control (i.e. a self-custodial wallet).

Two popular examples are [Wallet of Satoshi](https://www.walletofsatoshi.com/) and [Alby](https://getalby.com). Both wallets provide fast, convenient, and user-friendly zapping wallets. You can download Wallet of Satoshi from your mobile app store, and you can access Alby via the Chrome browser extension store.

**Wallet of Satoshi**

After you download Wallet of Satoshi, open the app and tap "Receive". This will bring up a reusable QR Code, as well as your human-readable lightning receiving address. It will look like an email address (NB: it's not actually an email address so don't try and send email there). For example, this article's author can be zapped at `bostonwine@walletofsatoshi.com`. Copy your address and return to Nostr.

![Main Screen](https://cdn.nostr.build/i/955e1fd028d64941b80ed0b423a07541a2af8f14919c73e0add93511e3620477.jpg)

![Receive Screen](https://cdn.nostr.build/i/2d4f6ffa7a237cf93fca9aff37eca0011ba473b8f3da013f5fda786c93693b87.jpg)

**Alby**

For Alby, you can use any Chrome-based browser and navigate to https://getalby.com to download the extension. Create an account and within the extension, you will again find the "email-address-style" Lightning address. Copy it to your clipboard.

![Alby account](https://cdn.nostr.build/i/fee9ab21c94221a9f9573c41e8e85a97b1ecafd18e22f52cf276d31a67a58664.png)

**Go back to your Nostr client**

Every client is a little different, but usually your Edit Profile Settings page will have a field for a "lightning address" or LNURL. In the example below, (from Damus), the field is called Bitcoin Lightning Tips. Paste your address into this field, and save your profile.

![Example client](https://cdn.nostr.build/i/34241da3022d061a8159268f05e0cb3c8aa53934a55c5cc8c76effbfc7b625cc.jpg)

Now you should be zap-able! To test it out, post a note and with something like "Can someone send a small zap to test my wallet?" and add the hashtag #plebchain – you'll be amazed at how quickly you get your first zap!

To send zaps, all you need to do is click or tap your client's version of the Lightning icon on the other user's note or profile. This will automatically create a Lightning invoice, and your client will prompt you to open a Lightning wallet so that you can pay that invoice.

## [§](#self-custody) セルフカストディ・ウォレット

Once you've familiarized yourself with sending and receiving zaps, and started stacking a few sats in your wallet, it's worth learning more about non-custodial wallets.

While a custodial solution like Wallet of Satoshi is incredibly convenient, it's important to remember that the wallet developer holds the keys to this bitcoin. After all, bitcoin's original raison d'être was to remove the need for a trusted third party!

So, as soon as you're holding enough bitcoin in your wallet that you'd be upset to lose the funds, it's time to set up a self-custodial wallet as well. (You can continue using the custodial option for zapping, if you'd like, but it's a good idea to move any significant amount of bitcoin to self-custody, when it starts adding up).

Lightning wallet apps are plentiful, but popular options include Phoenix and Breez (mobile wallets) and Mutiny (a web-based app).

At the moment, self-custodial lightning wallets don't offer a "static" lightning address or LNURL, the email-address-style receiving address. (Hopefully this will change soon). What this means is that you can use self-custodial wallets to send zaps, but not receive them (yet).

These apps will prompt you during setup to write down your "seed phrase". This is a set of 12 or 24 words, and it is the private key to your self-custodied bitcoin. The wallet developers don't know your seed phrase, and they don't control your bitcoin.

Note: whenever you are recording your seed phrase, DO NOT save it online (via screenshot, iCloud notes, etc). Write it down on paper, laminate it, and keep it safe. There will come a time to learn about steel backups in the future. For now, just keep it secret and offline.

## [§](#private-key-management) 秘密鍵の管理とコールド・ストレージ

To reiterate: when you have accumulated enough bitcoin in your first wallet that you want to take the next step on your self-soveriegn bitcoin journey, it's time to study the different types of bitcoin storage, and the best practices around keeping your seed phrase safe. It's an adventure, and a continuous learning experience, so let's get started.

Learn more at https://nostr.how/en/guides/sweep-to-self-custody
