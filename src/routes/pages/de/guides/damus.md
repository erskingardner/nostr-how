---
title: Erste Schritte mit Damus
description: Eine Schritt-für-Schritt-Anleitung für den Nostr-iOS-Client Damus.
-------------------------------------------------------------------------------

## Step 1 - Installiere Damus

Das ist ein Guide um Nostr mit dem iOS-Client [Damus](https://damus.io/) zu erleben, ein schöner und einfach zu nutzender Client von [@jb55](https://snort.social/p/npub1xtscya34g58tk0z605fvr788k263gsu6cy9x0mhnm87echrgufzsevkk5s).

1. Installiere [Damus vom Apple-App-Store](https://apps.apple.com/app/damus/id1628663131).
2. Wenn du die App öffnest, hast du die Möglichkeit, ein neues Konto zu erstellen oder dich mit einem privaten Schlüssel anzumelden, den du bereits generiert hast.
3. Wenn du bereits einen privaten Schlüssel über die Alby-Erweiterung oder einen anderen Client erstellt hast, kannst du auf "Login" klicken. Andernfalls gehe auf "Create Account".
   ![Damus login/signup page](/images/damus-login.webp)

## Step 2 - Einen neuen Account erstellen

1. Klicke "Create Account".
2. Lese und akzeptiere die EULA.
3. Wähle dann einen Benutzernamen aus (dieser kann später geändert werden) und füge optional einige andere Profildetails hinzu. Damus generiert in diesem Schritt automatisch deinen privaten und öffentlichen Schlüssel. Dein öffentlicher Schlüssel wird als "Account-ID" (npub...) angezeigt. ![Damus login/signup page](/images/damus-signup.webp)
4. Wenn du fertig bist, klicke auf "Create" und schon bist du bereit für Nostr! 🤙
5. Nur noch ein letzter **extrem wichtiger** Schritt. Du musst deinen privaten Schlüssel an einem sicheren Ort aufbewahren.
6. Klicke dazu oben links auf dein Profilbild und navigiere im Menü zu "Einstellungen". ![Damus Settings](/images/damus-settings.webp)
7. Du siehst deine "Public Account ID" (das ist dein öffentlicher Schlüssel) und deinen "Secret Account Login Key" (das ist dein privater Schlüssel).
8. Kopiere diese beiden Werte und speichere sie an einem **SEHR** sicheren Ort. '1Password' oder ein anderer Passwort-Manager ist eine gute Option. Denke daran, dass du dein Konto nicht wiederherstellen kannst, wenn du deine Schlüssel verlierst. [Hier findest du weitere Informationen zu Schlüsseln](/de/get-started#understanding-keys).

## Mit einem vorhandenen Schlüssel einloggen

1. Klicke "Login".
2. Lese und akzeptiere die EULA.
3. Du wirst dann nach deinem privaten Schlüssel gefragt. Gebe diesen hier ein und fertig. 🤙 **Wichtig**: Dein privater Schlüssel wird lokal gespeichert und NICHT an Damus-Server gesendet oder dort gespeichert.