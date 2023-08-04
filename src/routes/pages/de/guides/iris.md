---
title: Erste Schritte mit Iris
description: Eine Schritt-für-Schritt-Anleitung für den Nostr-Web-Client Iris.
---

## Schritt 1 – Installiere Alby

Hole dir [Alby](https://chrome.google.com/webstore/detail/alby-bitcoin-lightning-wa/iokeahhehimjnekafflcihljlcjccdbe) vom Chrome Web-Store oder direkt von der [Alby Web-Seite](https://getalby.com/).

Sobald du die Browser-Erweiterung installiert hast, erstelle dir ein neues Konto. Außer du bist schon ein Profi, empfehlen wir dir einfach ein Konto bei Alby zu erstellen und eine neue Lightning-Wallet einzurichten.

## Schritt 2 – Erstelle einen neuen privaten Schlüssel mit Iris

1. Gehe zu [Iris.to](https://iris.to).
2. Gib einen Namen ein und klicke "Go" ![Iris sign up screen](/images/iris-signup.webp)
3. Iris generiert automatisch ein neues öffentliches/privates Schlüsselpaar für dich und meldet dich danach an. Du kannst dann sofort damit beginnen, Personen zu folgen und Notes zu posten. ![Iris new user experience](/images/iris-nux.webp)
4. Wir werden jedoch sicherstellen, dass du die App so sicher wie möglich verwendest. Gehe dazu links auf "Einstellungen" und klicke danach im Menü auf "Konto". ![Iris settings](/images/iris-accounts-settings.webp)
5. Kopiere deinen öffentlichen Schlüssel (npub) und vor allem deinen privaten Schlüssel (nsec). Diese sollten an einem SEHR sicheren Ort aufbewahrt werden, zum Beispiel einem Passwort-Manager (wir empfehlen 1Password).
6. Wenn du dir sicher bist, dass du deinen privaten Schlüssel an einem sicheren Ort gespeichert hast, klicke in den Einstellungen auf "Abmelden", um dich von Iris abzumelden. Du wirst dich gleich mit einer sicheren Variante anmelden.

## Schritt 3 – Füge deinen privaten Schlüssel Alby hinzu

1. Sobald du dein Konto erstellt und deinen privaten Schlüssel an einem sicheren Ort gespeichert hast, musst du diesen Schlüssel der Alby-Browser-Erweiterung hinzufügen.
2. Öffne dazu die Alby-Browser-Erweiterung und navigiere dann in deinem Alby-Account zu "Account settings". ![Alby accounts](/images/alby-accounts.webp)
3. Füge dann im Bereich "Nostr" bei "Private Key" deinen privaten Schlüssel ein, dieser beginnt mit `nsec`.
4. Du kannst jetzt Alby verwenden, um dich jetzt bei jedem Nostr-Web-Client anmelden. Iris ist einer davon.

## Schritt 4 – Melde dich wieder bei Iris an

1. Zurück auf der Iris-Seite kannst du dich jetzt "Mit Browser-Erweiterung einloggen". ![Iris sign up screen](/images/iris-signup.webp)
2. Bestätige das Alby-Popup, indem du "Connect" klickst und danach, dass Iris deinen öffentlichen Schlüssel lesen darf mit "Confirm".
3. Du bist jetzt eingeloggt! Es kann einige Augenblicke dauern, bis der Inhalt geladen wird. 🤙 Jede Aktion in Iris musst du mit der Alby-Erweiterung signieren. Du kannst aber das Kontrollkästchen aktivieren und in Alby hinterlegen, dass du diese Popups nicht mehr bekommst und automatisch Signiert wird, je nachdem wie viel Kontrolle du abgeben willst.

## Video-Tutorial

[Max DeMarco](https://snort.social/p/npub1lelkh3hhxw9hdwlcpk6q9t0xt9f7yze0y0nxazvzqjmre3p98x3sthkvyz) hat ein super [Beginner-Tutorial auf YouTube in Englisch](https://www.youtube.com/watch?v=kifwECtwjJQ) hochgeladen, falls du dir lieber ein Video anschauen willst.
