---
title: Que sont les Zaps ?
description: Découvrez ce que sont les Zaps, comment ils fonctionnent et ce dont vous avez besoin pour les utiliser sur votre client Nostr.
---

## [§](#the-basics) Les bases

La façon la plus simple d'envisager les Zaps est de considérer qu'il s'agit simplement de pourboires. Des pourboires qui sont transmis sur le [Lightning network](https://www.investopedia.com/terms/l/lightning-network.asp) à la vitesse de la lumière, sans frais de transaction.

Depuis le début du protocole Nostr, il était courant de voir des factures Lightning dans les notes. Depuis l'implémentation du [NIP-57] (https://github.com/nostr-protocol/nips/blob/master/57.md), les Zaps sont devenus le principal moyen de transmission de valeur dans les notes Nostr. Regardons de plus près ce que la NIP-57 a implémenté et comment fonctionnent les Zaps.

## [§](#nip-57) NIP-57

[NIP-57] (https://github.com/nostr-protocol/nips/blob/master/57.md) est le document qui décrit comment les Zaps devraient être mis en œuvre. Il crée deux nouveaux types de notes, le type 9735 (Un Zap) et le type 9734 (Une demande de Zap). Ces deux types de notes permettent aux clients Nostr de demander des factures Zap aux serveurs LNURL et de les payer. La spécification NIP-57 décrit également comment les portefeuilles Lightning qui reçoivent des paiements Zap doivent créer des notes à envoyer aux relais.

💡 Fait amusant, le type de note choisi pour Zaps est le même que le port de réseau (9735) utilisé par Lightning.

## [§](#how-zaps-work) Comment fonctionnent les Zaps

![Zap flowchart](/images/zap-flow.webp)

Nous n'entrerons pas ici dans les détails techniques, mais pour les plus curieux d'entre vous, examinons les mécanismes de base du fonctionnement des Zaps.

1. Lorsque vous cliquez ou tapez sur la petite icône ⚡ dans votre client (Damus, Iris, Amethyst, etc.), la première chose qui se produit est que le client envoie un ping au [serveur LNURL](https://thebitcoinmanual.com/articles/what-is-ln-url-and-how-does-it-work/) qui se trouve devant le porte-monnaie Lightning de la personne que vous essayez de zapper. La première requête est du type : "Bonjour, j'aimerais donner quelques sats à Alice".
1. Le serveur LNURL répond et, si le portefeuille d'Alice prend en charge les Zaps, il en informe le client et envoie/confirme la clé publique d'Alice.
1. À ce stade, le client fait un peu de travail pour préparer une demande de Zap (une sorte de note 9734) avec des données sur le profil ou la note qu'il aimerait Zapper, le montant, les relais auxquels il devrait diffuser la note, et quelques autres choses. Il s'agit en fait d'une demande de facture au serveur LNURL.
1. Le serveur LNURL répond en envoyant la facture demandée.
1. À ce stade, le client transmet la facture au portefeuille Lightning de l'utilisateur pour qu'il la paie. Si vous utilisez un portefeuille comme Alby dans le navigateur (et que vous avez défini un budget), ce processus peut se dérouler très rapidement.
1. Une fois que l'utilisateur a payé la facture directement au portefeuille de la personne qu'il zappe, le portefeuille du destinataire crée une note de type 9735 et la diffuse aux relais spécifiés plus tôt dans la demande de zapping.
1. Les relais recevant cette note pourront alors informer les clients connectés du zap et les clients et montrer le zap aux utilisateurs dans leur interface utilisateur.

Tout cela se passe en quelques secondes et ne coûte qu'une infime partie d'un centime.

## [§](#how-to-send-and-receive) Comment envoyer et recevoir des Zaps ?

Pour zapper d'autres personnes dans Nostr, il suffit de deux choses :

1. Un portefeuille Lightning compatible avec Zap (comme [Alby](https://getalby.com/) ou [Wallet of Satoshi](https://www.walletofsatoshi.com/)).
1. Un client qui a implémenté les Zaps (comme [Damus](/en/guides/damus), [Amethyst](/en/guides/amethyst), [Iris](/en/guides/iris), ou [Snort](https://snort.social)).

La seule autre chose que vous devez faire est de vous assurer que votre adresse lightning est définie dans votre profil Nostr. C'est à cette adresse que vous recevrez les Zaps.

N'oubliez pas qu'il est possible de payer des Zaps à partir d'un portefeuille ou d'une adresse autre que l'adresse que vous avez définie dans votre profil pour recevoir des Zaps.

Imaginez, par exemple, la situation suivante :

1. Vous avez une adresse [Stacker News](https://stacker.news/) lightning dans votre profil Nostr, c'est là que vous recevrez les sats zappés.
1. Dans votre navigateur web, vous utilisez Iris comme client et payez les Zaps en utilisant votre portefeuille Alby via leur extension chrome.
1. Sur mobile, vous utilisez Damus comme client et payez les Zaps en utilisant l'application Wallet of Statoshi.
