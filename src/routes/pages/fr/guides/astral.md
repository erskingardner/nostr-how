---
title: Démarrer avec Astral
description:  Un guide étape par étape pour commencer à utiliser Nostr avec le client web Astral.
---

## Etape 1 – Install Alby


Téléchargez [Alby](https://chrome.google.com/webstore/detail/alby-bitcoin-lightning-wa/iokeahhehimjnekafflcihljlcjccdbe) depuis le Chrome Webstore ou directement depuis le [site web d'Alby](https://getalby.com/).

Une fois l'extension installée, créez un nouveau compte. À moins que vous ne soyez déjà un pro, nous vous recommandons de créer un compte sur Alby et de configurer un nouveau portefeuille Lightning.

## Etape 2 – Générer la clé privée

1. Une fois qu'Alby est installé et que vous avez créé ou vous êtes connecté à un porte-monnaie électronique, rendez-vous sur la page des comptes Alby. ![Paramètres Alby](/images/alby-accounts.webp)
1. Allez jusqu'à la section Nostr et cliquez sur le bouton "Générer une nouvelle clé" sous "Gérer votre clé". Cela générera une clé privée et l'enregistrera dans votre portefeuille alby. Vous pouvez maintenant utiliser cette clé privée pour vous connecter à Nostr.
1. Une fois que vous avez généré votre clé privée, cliquez sur le petit globe oculaire pour afficher votre clé. Copiez la clé privée (qui commencera par `nsec`) et sauvegardez-la dans un gestionnaire de mots de passe ou dans un endroit **très** sûr. Rappelez-vous que si vous perdez cette clé, elle disparaîtra à jamais, ainsi que toutes les données de votre compte.

## Etape 3 – Se connecter à l'Astral

1. Naviguez jusqu'à [Astral](https://astral.ninja).
1. Dans la fenêtre de connexion qui s'affiche, cliquez sur le bouton "USE PUBLIC KEY FROM EXTENSION". ![Astral Login Step 1](/images/astral-login.webp)
1. Autorisez l'utilisation de la clé dans la fenêtre popup de l'extension alby. ![Astral Login Etape 2](/images/astral-login2.webp)
1. Une fois que vous aurez confirmé, vous verrez apparaître une autre fenêtre contextuelle dans Astral. Nous pouvons voir ici qu'Alby a transmis notre clé publique à Astral. Puisque nous ne voulons pas stocker notre clé privée sur Astral, nous devrions simplement cliquer sur "Proceed" ici. ![Connexion Astral Étape 3](/images/astral-login3.webp)
1. Astral affichera alors un autre popup vous indiquant que votre clé privée n'est pas présente. Encore une fois, c'est ce que nous voulons, donc vous pouvez simplement cliquer sur "Fermer". ![Astral Login Etape 4](/images/astral-login4.webp)
1. Vous êtes connecté ! Le chargement du contenu peut prendre quelques instants. 🤙
1. À ce stade, vous pouvez copier votre clé publique en haut à gauche de la page. Vous devez la conserver avec votre clé privée afin de l'avoir sous la main. ![Connexion Astral Étape 5](/images/astral-login5.webp)
