# 🧾 Aufgabenbeschreibung

🏁 **Lernziel:** Nach dieser Übung kannst du Prompts so formulieren, dass die KI präzise und umsetzbare Code-Snippets liefert.

Nutze einen KI-basierten Chat-Assistenten deiner Wahl, z. B. [ChatGPT](https://chatgpt.com/), [Claude](https://claude.ai/), [DeepSeek](https://chat.deepseek.com/) …

**Ausgangsprompt:**

> „Erstelle eine Webseite mit einem User-Feedback-Formular.“

**Aufgabe:**

- Schau dir das Ergebnis für diesen allgemeinen Ausgangsprompt an.
- Übernimm das Ergebnis (HTML + CSS) in VS Code in einen Ordner “vorher” und schau es dir im Browser an.
- Formuliere den Prompt schrittweise so um, dass:
  - das Formular Felder für Name, E-Mail und Nachricht hat
  - das Formular einen Abschicken-Button mit Validierungslogik hat
  - Tailwind verwendet wird
  - das Ergebnis nur HTML- und Tailwind-Code enthält
  - die Seite barrierefrei ist
- Übernimm das Endergebnis in VS Code in einen Ordner “final” und schau es dir im Browser an

# ✍️ Prompts

## ✍️ Mein Prompt 1
> Erstelle eine Webseite mit einem User-Feedback-Formular.  
*Kommentar:* Ich habe mit einem sehr allgemeinen Prompt angefangen.

## ✍️ Mein Prompt 2
> Erstelle eine Webseite mit einem User-Feedback-Formular. Das Formular soll Felder für Name, E-Mail und Nachricht enthalten.  
*Kommentar:* Jetzt habe ich spezifiziert, welche Felder im Formular enthalten sein sollen.

## ✍️ Mein Prompt 3
> Erstelle eine Webseite mit einem User-Feedback-Formular. Das Formular soll Felder für Name, E-Mail und Nachricht enthalten sowie einen Absenden-Button mit Validierungslogik. Verwende dabei nur HTML und Tailwind CSS.  
*Kommentar:* Ich habe Validierung und Tailwind hinzugefügt.

## ✍️ Mein Prompt 4
> Erstelle eine barrierefreie Webseite mit einem User-Feedback-Formular. Das Formular soll Felder für Name, E-Mail und Nachricht enthalten, einen Absenden-Button mit Validierungslogik beinhalten und ausschließlich mit HTML und Tailwind CSS erstellt sein.  
*Kommentar:* Ich habe jetzt Barrierefreiheit ergänzt.

# 🧠 Reflexion

## 🧠 Was hat gut funktioniert?
- Die KI hat sofort funktionierenden HTML-Code geliefert.
- Tailwind ließ sich leicht integrieren.
- Die Felder und Struktur waren klar und schnell generierbar.

## 🧠 Was war schwierig oder musste verbessert werden?
- Ohne präzise Angaben hat die KI keine Validierung oder Accessibility beachtet.
- Barrierefreiheit kam erst, nachdem ich es ausdrücklich im Prompt erwähnt habe.

## 🧠 Welche Details im Prompt haben die Qualität verbessert?
- Die Nutzung von Wörtern wie „nur HTML und Tailwind CSS“ hat irrelevante Elemente ausgeschlossen.
- „barrierefrei“ hat zu semantisch korrektem und zugänglichem HTML geführt.
- Felder konkret aufzuzählen hat das Ergebnis zielgerichteter gemacht.

## 🧠 Was würdest du beim nächsten Mal gleich anders machen?
- Gleich am Anfang alle technischen Anforderungen (Tailwind, Validierung, Barrierefreiheit) formulieren.
- Schon früh “nutze keine zusätzlichen Frameworks” sagen.
- Beispiele im Prompt nennen (z. B. wie das Label aussehen soll), wenn ich spezielle Formatierungen brauche.
