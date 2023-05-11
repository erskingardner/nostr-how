---
title: Démarrer avec Damus
description: Un guide étape par étape pour commencer à utiliser Nostr avec le client Damus iOS.
---

## Etape 1 - Télécharger Damus

Il s'agit d'un guide spécifique pour commencer à utiliser Nostr avec [Damus](https://damus.io/), un client iOS magnifique et facile à utiliser construit par [@jb55](https://snort.social/p/npub1xtscya34g58tk0z605fvr788k263gsu6cy9x0mhnm87echrgufzsevkk5s).

1. Installez [l'application Damus sur l'iOS App Store](https://apps.apple.com/app/damus/id1628663131).
1. Lorsque vous ouvrez l'application, vous avez la possibilité de créer un nouveau compte ou de vous connecter à l'aide d'une clé privée que vous avez déjà générée.
1. Si vous avez déjà créé une clé privée via l'extension Alby ou un autre client, vous pouvez cliquer sur "Connexion". Sinon, cliquez sur "Créer un compte".
   ![Page de connexion Damus](/images/damus-login.webp)

## Etape 2 - Creating a new account

1. Cliquez sur "Créer un compte".
1. Lisez et acceptez les CGU.
1. Vous choisirez ensuite un nom d'utilisateur (qui pourra être modifié ultérieurement) et, éventuellement, vous ajouterez d'autres détails de votre profil. Damus génère automatiquement des clés pour vous à cette étape. Votre clé publique est affichée en tant que valeur "Account ID". Page de connexion Damus (/images/damus-signup.webp)
1. Une fois que vous avez terminé, cliquez sur "Créer" et vous êtes prêt à utiliser Nostr ! 🤙
1. Une dernière étape **extrêmement importante**. Vous devez sauvegarder votre clé privée dans un endroit sûr.
1. Naviguez jusqu'à Settings en cliquant sur votre image de profil en haut à gauche de l'écran, puis cliquez sur "Settings" dans le menu. ![Paramètres de Damus](/images/damus-settings.webp)
1. Vous verrez votre "ID de compte public" (c'est votre clé publique) et votre "Clé de connexion de compte secret" (c'est votre clé privée).
1. Copiez ces deux valeurs et conservez-les dans un endroit **très** sûr. 1Password ou un autre gestionnaire de mots de passe est une bonne option. N'oubliez pas que si vous ne sauvegardez pas cette valeur, vous ne pourrez jamais récupérer votre compte. Vous pouvez trouver [plus d'informations sur les clés ici] (/fr/get-started#understanding-keys).


## Se connecter avec une clé existante

1. Cliquez sur "Login".
1. Lisez et acceptez les CGU.
1. On vous demandera ensuite votre clé privée. Saisissez votre clé et vous avez terminé. 🤙 **Important** : Votre clé privée est stockée localement et n'est en aucun cas collectée ou stockée par les serveurs de Damus.
