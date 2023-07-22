---
title: Erste Schritte mit Astral
description: Eine Schritt-für-Schritt-Anleitung für den Nostr-Web-Client Astral.
-------------------------------------------------------------------------------------------------------------------------------------------------------

## Schritt 1 – Installiere Alby

Hole dir [Alby](https://chrome.google.com/webstore/detail/alby-bitcoin-lightning-wa/iokeahhehimjnekafflcihljlcjccdbe) vom Chrome Web-Store oder direkt von der [Alby Web-Seite](https://getalby.com/).

Sobald du die Browser-Erweiterung installiert hast, erstelle dir ein neues Konto. Außer du bist schon ein Profi im Umgang mit Lightning, empfehlen wir dir einfach ein Konto bei Alby zu erstellen und eine neue Lightning-Wallet einzurichten.

## Schritt 2 – Erstelle deinen privaten Schlüssel (Private Key)

1. Sobald Alby installiert ist und du eine Lightning-Wallet erstellt oder dein Konto mit einer Lightning-Wallet verbunden hast, navigiere in der Alby-Erweiterung zu "Account settings". ![Alby-Einstellungen](/images/alby-accounts.webp)
2. Klicke dort im Nostr-Bereich auf "Generate a new key" bei "Manage your key". Dadurch wird ein privater Schlüssel generiert und in deinem Alby-Wallet gespeichert. Mit diesem privaten Schlüssel kannst du dich nun bei jedem Nostr-Client anmelden.
3. Jetzt kannst du bei "Private Key" auf das Augensymbol klicken und dir wird dein privater Schlüssel angezeigt. Kopiere den privaten Schlüssel (der mit 'nsec' beginnt) und speichern ihn in einem Passwort-Manager oder an einem **sehr** sicheren Ort. Denke daran, wenn du diesen Schlüssel verlierst, wirst du keine Berechtigung mehr haben, irgendeine Aktion mit diesem Account durchzuführen.

## Schritt 3 – Melde dich bei Astral an

1. Gehe zu [Astral](https://astral.ninja).
2. Klicke beim Login-Popup auf den "USE PUBLIC KEY FROM EXTENSION" Button. ![Astral Login Schritt 1](/images/astral-login.webp)
3. Bestätige die Nutzung deines Schlüssels im Popup der Alby-Erweiterung. ![Astral Login Schritt 2](/images/astral-login2.webp)
4. Sobald du bestätigt hast, wird ein weiteres Popup in Astral angezeigt. Wir können hier sehen, dass Alby unseren öffentlichen Schlüssel an Astral weitergegeben hat. Da wir unseren privaten Schlüssel nicht auf Astral speichern wollen, sollten wir hier einfach auf "Weiter" klicken. ![Astral-Login Schritt 3](/images/astral-login3.webp)
5. Astral zeigt dann ein weiteres Popup-Fenster an und teilt dir mit, dass dein privater Schlüssel nicht vorhanden ist. Das wollen wir auch nicht und du kannst einfach auf "Schließen" klicken. ![Astral Login Schritt 4](/images/astral-login4.webp)
6. Du bist jetzt eingeloggt! Es kann einige Augenblicke dauern, bis der Inhalt geladen wird. 🤙
7. Jetzt kannst du deinen öffentlichen Schlüssel oben links auf der Seite kopieren. Du solltest diesen zusammen mit deinem privaten Schlüssel sicher speichern. ![Astral Login Schritt 5](/images/astral-login5.webp)
