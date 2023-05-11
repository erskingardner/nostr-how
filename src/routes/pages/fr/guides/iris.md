---
title: Démarrer avec Iris
description: Un guide étape par étape pour commencer à utiliser Nostr avec le client web Iris.
---

## Etape 1 – Installer Alby

Téléchargez [Alby](https://chrome.google.com/webstore/detail/alby-bitcoin-lightning-wa/iokeahhehimjnekafflcihljlcjccdbe) depuis le Chrome Webstore ou directement depuis le [site web d'Alby](https://getalby.com/).

Une fois l'extension installée, créez un nouveau compte. À moins que vous ne soyez déjà un pro, nous vous recommandons de créer un compte sur Alby et de configurer un nouveau portefeuille Lightning.

## Etape 2 – Générer une nouvelle clé privée avec Iris

1. Naviguez jusqu'à [Iris.to] (https://iris.to).
1. Entrez un nom et cliquez sur "Go" ! [Iris sign up screen](/images/iris-signup.webp)
1. Iris génère une nouvelle paire de clés publiques/privées pour vous et vous connecte. Vous pouvez commencer à suivre des personnes et à poster des notes à ce stade. Iris new user experience](/images/iris-nux.webp)
1. Cependant, nous allons nous assurer que nous utilisons l'application de la manière la plus sûre possible. Allez dans "Paramètres" sur la gauche, puis cliquez sur "Comptes" dans le menu secondaire. ![Paramètres Iris](/images/iris-accounts-settings.webp)
1. Copiez votre clé publique et votre clé privée "nsec". Celles-ci doivent être stockées dans un endroit TRÈS sûr. Comme un gestionnaire de mots de passe (nous aimons 1Password).
1. Une fois que vous êtes sûr d'avoir sauvegardé votre clé privée dans un endroit sûr, cliquez sur "log out" en haut de la page des comptes pour vous déconnecter d'Iris. Nous nous reconnecterons en toute sécurité dans une seconde.

## Etape 3 – Ajouter votre nouvelle clé privée à Alby

1. Une fois que vous avez créé un compte et que vous avez sauvegardé votre clé privée dans un endroit sûr, nous devons ajouter cette clé à l'extension Alby.
1. Ouvrez l'extension Alby et naviguez jusqu'à la page des comptes Alby. ![Comptes Alby](/images/alby-accounts.webp)
1. Cliquez sur votre compte puis, dans la section Nostr, collez votre nouvelle clé privée (qui commence par `nsec`) dans le champ.
1. Vous êtes maintenant prêt à utiliser Alby pour vous connecter et utiliser Nostr à travers n'importe quel client web.

## Etape 4 – Se reconnecter à Iris

1. De retour sur la page de connexion d'Iris, cliquez sur "Nostr extension login". ![Ecran d'inscription à l'Iris](/images/iris-signup.webp)
1. Autorisez l'utilisation de la clé dans la fenêtre contextuelle de l'extension Alby qui s'affiche.
1. Vous êtes connecté ! Le chargement du contenu peut prendre quelques instants. Vous devrez vous identifier à l'aide de l'extension Alby chaque fois que vous effectuerez une action dans Iris. Vous pouvez cocher la case pour qu'Alby se souvienne de votre choix si cela vous gêne.
