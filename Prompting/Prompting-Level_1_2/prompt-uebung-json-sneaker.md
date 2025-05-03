# 🧾 Aufgabenbeschreibung

🏁 **Lernziel:** Nach dieser Übung kannst du Prompts so formulieren, dass die KI strukturierte Daten im gewünschten Format (z. B. JSON) liefert.

Nutze einen KI-basierte Chat-Assistenten deiner Wahl, z. B. [ChatGPT](https://chatgpt.com/), [Claude](https://claude.ai/), [DeepSeek](https://chat.deepseek.com/) …

**Ausgangsprompt:**

> „Gib mir ein JSON-Objekt für ein Produkt in einem Sneaker-Shop“

**Aufgabe:**

- Gib den Ausgangsprompt ein und analysiere den Output.
- Übernimm das Ergebnis in eine Datei mit dem Namen produkt.json im Ordner "vorher" und öffne sie in VS Code.
- Formuliere den Prompt schrittweise so um, dass das Ergebnis:
    - ein Sneaker-Produkt beschreibt
    - die folgenden Felder enthält: Name, Hersteller, Preis, Größen (als Liste), Beschreibung und Verfügbarkeit (als Ja/Nein)
    - exakt im JSON-Format ohne Kommentare oder Erklärungen zurückgegeben wird
- Teste verschiedene Formulierungen und schau dir die Outputs an
- Übernimm das optimierte Ergebnis in eine Datei mit dem Namen produkt.json im Ordner "nachher".

# ✍️ Prompts

## ✍️ Mein Prompt 1
Gib mir ein JSON-Objekt für ein Produkt in einem Sneaker-Shop.  
*Kommentar:* Sehr allgemein, mal sehen welche Felder enthalten sind.

## ✍️ Mein Prompt 2
Gib mir ein JSON-Objekt für einen Sneaker in einem Shop. Es soll Felder für Name, Hersteller, Preis, Größen (als Liste), Beschreibung und Verfügbarkeit (als Ja/Nein) enthalten.  
*Kommentar:* Jetzt spezifiziere ich die gewünschten Felder.

## ✍️ Mein Prompt 3
Gib mir ein JSON-Objekt, das einen Sneaker mit folgenden Feldern beschreibt: Name, Hersteller, Preis, Größen (als Liste), Beschreibung und Verfügbarkeit (Ja/Nein). Gib **nur** das JSON ohne Erklärungen zurück.  
*Kommentar:* Ich achte jetzt auf das reine Ausgabeformat.

# 🧠 Reflexion

## 🧠 Was hat gut funktioniert?
- Die Felder waren nach der zweiten Anfrage vollständig vorhanden.
- Mit dem Hinweis „nur das JSON“ kam eine saubere, formatierte Ausgabe ohne zusätzlichen Text.

## 🧠 Was war schwierig oder musste verbessert werden?
- Beim ersten Prompt war das Format unvollständig, manche Felder wie Verfügbarkeit oder Beschreibung fehlten.
- Ohne genaue Formatangabe kamen Kommentare oder Erklärungen mit dazu.

## 🧠 Welche Details im Prompt haben die Qualität verbessert?
- Die genaue Auflistung der Felder.
- Die Forderung „exakt im JSON-Format, ohne Kommentare oder Erklärungen“.

## 🧠 Was würdest du beim nächsten Mal gleich anders machen?
- Direkt definieren, welche Felder und welches Format ich haben möchte.
- Sicherstellen, dass wirklich nur JSON zurückgegeben wird.
