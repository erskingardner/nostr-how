---
title: Déplacer ses sats sous sa responsabilité
description:  Ce guide présente une solution simple pour réduire le risque de contrepartie en transférant les fonds vers un portefeuille sous votre responsabilité.
---

## [§](#who-is-this-guide-for) À qui s'adresse ce guide ?

La plupart des utilisateurs utilisent actuellement Nostr avec un lightning wallet "custodial", comme Wallet of Satoshi ou Alby.

Si c'est votre cas, je veux que vous pensiez aux sats qui se trouvent dans votre portefeuille en ce moment même. Maintenant, imaginez que vous perdez tous ces sats. Si cette idée vous met mal à l'aise ou vous inquiète, ce guide est fait pour vous.

Nous aborderons la mise en place d'un portefeuille sous votre responsabilité qui vous permettra de retirer périodiquement des fonds de votre portefeuille de dépôt pour les mettre en sécurité.

## [§](#why-is-self-custody-important) Pourquoi avoir la responsabilité de ses sats est-elle importante ?

En clair, ni vos clés, ni vos pièces de monnaie. Lorsque vous laissez vos Sats dans un portefeuille de garde, vous acceptez un certain degré de risque de contrepartie. Imaginez que Wallet of Satoshi soit piraté. Parce qu'il détient tous les fonds des clients, une telle situation signifierait que vos fonds seraient perdus.

C'est pourquoi il est fortement conseillé de ne conserver qu'une petite quantité de fonds dans _tout_ portefeuille de garde et de garder soi-même le reste de ses bitcoins.

## [§](#ready-lets-go) Prêt ? Allons-y !

Il s'agit d'un guide pour débutants qui ne nécessite pas de mettre en place votre propre nœud Lightning ou de faire quoi que ce soit de technique. Notre idée est d'utiliser la communauté de bitcoiners de Nostr pour vous aider à passer d'un serveur sur le réseau Lightning à un serveur autonome sur la chaîne de base principale de Bitcoin. Sécurisez votre pile et faites-vous des amis en effectuant des transactions de pair à pair. Doublement gagnant !

Si vous vous sentez dépassé par la terminologie employée, consultez [la section en bas de page](#lightning-bitcoin-on-chain-what) pour plus de détails.

1. Suivez d'abord ce guide pour configurer un nouveau portefeuille Bitcoin dans [Blue Wallet](https://bluewallet.io/docs/create-bitcoin-wallet/). Vous pouvez également utiliser n'importe quel autre portefeuille autogéré.
1. Une fois que vous avez soigneusement sauvegardé vos seed words (qui vous serviront à restaurer votre portefeuille en cas de besoin), vous êtes prêt à trouver quelqu'un avec qui faire un swap.
1. La façon la plus simple de le faire est de poster une note mentionnant les tags #plebchain et #bitcoin en précisant que vous aimeriez échanger des sats lightning contre des sats on-chain. N'hésitez pas à envoyer des messages directs aux personnes qui parlent régulièrement de bitcoin. Vous pouvez également me [pinger directement](https://primal.net/jeffg) si nécessaire.
1. A partir de là, vous établirez un plan directement avec la personne avec laquelle vous allez échanger. Avant de procéder à un échange, prenez le temps de connaître un peu la personne, car il n'y a pas de dépôt fiduciaire dans Bitcoin, vous devez être sûr que vous avez affaire à quelqu'un en qui vous pouvez avoir confiance pour effectuer la transaction. En général, le processus se déroule comme suit :
    1. Convenez d'un montant à échanger.
    1. Donnez votre adresse de portefeuille nouvellement créée (dans Blue Wallet) à la personne par DM.
    1. Vous zappez des sats à la personne via votre client Nostr.
    1. Elle initiera une transaction onchain pour vous payer le même montant de sats (potentiellement moins les frais de transaction).
    1. N'oubliez pas que cette transaction sur la chaîne prendra un certain temps. Votre partenaire commercial peut (et doit) vous envoyer l'ID de la transaction dès qu'il l'a en sa possession afin que vous puissiez la suivre sur [mempool.space](https://mempool.space).
1. Voilà, c'est fait ! Vous avez terminé. Une fois que les fonds seront arrivés, vous aurez réussi à prendre la garde de votre premier bitcoin. Traitez-le avec respect et prenez-en soin.

## [§](#lightning-bitcoin-on-chain-what) Lightning? Bitcoin ? On-chain ? Quoi ?

Si vous avez l'impression que tout cela n'est que du grec, ne vous inquiétez pas. Avant d'entrer dans le guide, abordons rapidement la terminologie.

### Bitcoin

Ce trou de lapin n'a pas de fond connu. Cela dit, si vous ne connaissez pas encore le bitcoin, la seule chose que vous devez vraiment savoir est que le bitcoin est une forme de monnaie électronique totalement décentralisée. Il n'est contrôlé par aucune personne ou entité et fonctionne selon des règles codées dans le logiciel, au lieu de dépendre de la politique et des gouvernements. Bitcoin est la seule monnaie électronique véritablement décentralisée et basée sur des règles.

Bitcoin privilégie la certitude à la rapidité. Cela signifie que les transactions coûtent un peu de frais et prennent un certain temps à être confirmées, mais une fois qu'elles sont confirmées, elles sont totalement irréversibles et personne ne peut s'emparer de vos pièces ou censurer votre transaction.

Si vous souhaitez en savoir plus, voici d'excellentes ressources pour approfondir vos connaissances sur le bitcoin.

1. [Guide Bitcoin.org] (https://bitcoin.org/en/how-it-works)
1. [Guide du débutant Bitcoiner](https://bitcoiner.guide/beginner/)

### Lightning

Lightning est une couche de paiement qui fonctionne au-dessus de Bitcoin. Fondamentalement, vous effectuez toujours des paiements en utilisant Bitcoin comme monnaie, mais Lightning permet des transactions quasi-instantanées et à des frais extrêmement bas. C'est pourquoi le réseau Lightning a ouvert la voie à de nombreux nouveaux cas d'utilisation impliquant des micropaiements. Les détails du fonctionnement de Lightning dépassent le cadre de ce guide d'introduction, mais voici quelques ressources si vous souhaitez en savoir plus :

1. [Guide Bitcoiner Lightning] (https://bitcoiner.guide/lightning/)
1. [Vue d'ensemble de Lightning Labs] (https://docs.lightning.engineering/the-lightning-network/overview)

### On-chain vs Off-chain

Vous entendrez souvent parler de Bitcoin on-chain ou off-chain. Lorsque l'on parle de transactions sur la chaîne, il s'agit simplement d'effectuer des transactions à l'aide de la chaîne de blocs Bitcoin de base (rappelez-vous que c'est plus lent, mais 100 % définitif et certain). Lorsque les gens parlent de transactions hors chaîne, ils font le plus souvent référence à Lightning.

### Custodial vs Self-custodial

Pour ceux qui découvrent Bitcoin, ce concept peut sembler étranger. Après tout, la plupart d'entre nous (du moins dans les pays développés) n'ont jamais utilisé que des services de garde, comme les banques, pour stocker leur argent. Mais comme nous l'avons vu récemment (et régulièrement sur les marchés financiers moins développés du monde entier), conserver son argent auprès d'un dépositaire comporte des risques. Les banques font faillite (Silicon Valley Bank, etc.) et les dépositaires peuvent prendre de mauvaises décisions et perdre votre argent (FTX, Voyager, etc.).

Lorsque vous prenez la garde de vos bitcoins, vous n'avez qu'à vous faire confiance pour les conserver en toute sécurité. Vous avez le contrôle total.

Mais un grand pouvoir s'accompagne d'une grande responsabilité. Si l'autodétention est la norme pour stocker en toute sécurité de grandes quantités d'argent, elle peut limiter l'usage que vous pouvez faire de votre argent au quotidien. La plupart des gens utilisent une combinaison de solutions de conservation et d'autodétention : ils conservent les gros montants dans un système d'autodétention et gardent une petite quantité de fonds dans un portefeuille de conservation pour l'usage quotidien.
