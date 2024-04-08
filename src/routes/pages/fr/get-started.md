---
title: Démarrer avec Nostr
description: Ce guide vous aidera à comprendre les bases de Nostr et vous permettra d'être prêt à utiliser Nostr avec un nouveau compte. Nous verrons comment créer un nouveau portefeuille lightning, créer un compte et se connecter à un client en toute sécurité.
---

## [§](#understanding-keys) Comprendre le fonctionnement

Chaque compte Nostr est basé sur une paire de clés publique/privée. Pour simplifier, votre clé publique est votre nom d'utilisateur et votre clé privée est votre mot de passe, avec une mise en garde importante. Contrairement à un mot de passe, votre clé privée ne peut pas être réinitialisée en cas de perte.

Permettez-moi de le répéter pour que ce soit clair : **Si vous perdez votre clé privée, votre compte Nostr est perdu. Si quelqu'un d'autre a accès à votre clé privée, il peut prendre le contrôle de votre compte**.

Veillez à conserver votre clé privée dans un endroit sûr, comme un gestionnaire de mots de passe.

## [§](#protocol-vs-client) Protocole vs Client

Nostr lui-même n'est qu'un protocole, une procédure convenue pour faire circuler des messages sur Internet.

Vous accéderez à Nostr (le protocole) via un client. Les clients peuvent être des applications web, de bureau ou mobiles. Certains clients Nostr vous permettent de vous connecter en collant votre clé privée. Sur le web, cette méthode n'est généralement pas recommandée, car elle est fastidieuse et peu sûre. Au lieu de cela, nous vous recommandons d'utiliser une extension de signature dans votre navigateur, qui est un logiciel spécialement conçu pour gérer en toute sécurité les clés privées et signer les événements de manière cryptographique.

[Alby](https://getalby.com?utm_source=nostr.how&ref=nostr.how) est une extension de signature et portefeuille bitcoin lightning qui intègre le support de Nostr. C'est une excellente option pour les nouveaux utilisateur-trice-s. Nous couvrirons l'installation d'Alby dans les guides spécifiques aux clients qui en ont besoin ci-dessous.

## [§](#create-your-account) Créer votre compte

Voici des guides étape par étape pour différents clients que nous recommandons :

-   [Iris](/en/guides/iris) (Web)
-   [Damus](/en/guides/damus) (iOS)
-   [Amethyst](/en/guides/amethyst) (Android)

Quelques autres clients que nous apprécions mais pour lesquels nous n'avons pas de guides :

-   [Primal](https://primal.net) (Web, iOS, Android) Client convivial avec portefeuille Lightning intégré sur mobile.
-   [Snort](https://snort.social?utm_source=nostr.how&ref=nostr.how) (Web) Client Web super propre et rapide.
-   [Coracle](https://coracle.social?utm_source=nostr.how&ref=nostr.how) (Web) Un client axé sur la navigation relais.

## [§](#find-friends) Trouvez vos ami-e-s pour les suivre

-   Si vous savez que quelqu'un est sur Nostr, trouvez son profil en recherchant sa clé publique.
-   De nombreux utilisateurs de Twitter tweetent leurs clés publiques Nostr avec le hashtag #nostr, la recherche de ce hashtag peut donc vous donner un bon point de départ.
-   [nostr.directory](https://nostr.directory?utm_source=nostr.how&ref=nostr.how) est une base de données qui associe les utilisateur-trice-s de Twitter à leurs clés publiques Nostr.

## [§](#whats-signing) Que veut dire "Signer"

Pour interagir avec le protocole Nostr, vous devez créer une signature cryptographique à chaque fois que vous effectuez une action. Considérez cette signature comme une étape d'authentification au cours de laquelle vous confirmez que vous êtes bien la personne que vous prétendez être.

La plupart des clients Nostr essaient de rendre cela facile et rapide (ou vous permettent d'enregistrer votre clé privée dans le client afin qu'il puisse signer en votre nom à chaque fois que vous faites quoi que ce soit).

En ne fournissant que notre clé publique ci-dessus, nous serons invités à signer chaque fois que nous voudrons interagir avec des messages ou effectuer des mises à jour de notre profil. À ce moment-là, Alby apparaîtra automatiquement (comme lors de l'étape d'inscription) et vous pourrez confirmer que vous souhaitez effectivement signer.

## [§](#can-i-use-other-clients) Est-ce que je peux utiliser d'autres clients?

Oui ! Maintenant que vous avez créé votre paire de clés publiques/privées, vous pouvez utiliser cette paire sur n'importe quel client Nostr pour accéder à votre compte. Rappelons que le client n'est qu'une interface permettant de voir les messages diffusés sur le protocole Nostr.

## [§](#next-steps) Prochaines étapes

Vous avez maintenant un portefeuille lightning, une identité (votre paire de clés) et vous avez essayé un client. Voici quelques liens qui pourraient vous être utiles lorsque vous vous aventurerez plus loin dans Nostr :

-   [Vérifier son identité](/fr/guides/get-verified)
-   [Que sont les relais et comment ils fonctionnent?](/fr/relays)
-   [En savoir plus sur les NIPs et l'élaboration du protocole](/fr/the-protocol)
