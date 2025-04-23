
# 🧾 Aufgabenbeschreibung

**Lernziel:**  
Nach dieser Übung kannst du zwei KI-basierte Coding-Assistenzsysteme in VS Code (Codeium und GitHub Copilot) direkt miteinander vergleichen und reflektieren, welches Tool dich bei konkreten Coding-Aufgaben besser unterstützt.

Verwendet werden:

- [https://codeium.com](https://codeium.com/)
- https://github.com/features/copilot

---

# ✍️ Prompt

> Schreibe eine Funktion, die ein Passwort nach folgenden Regeln validiert:  
> - mindestens 10 Zeichen  
> - mindestens ein Großbuchstabe  
> - mindestens ein Sonderzeichen  
> - keine Leerzeichen  
> - Rückgabe eines passenden Fehlertexts, wenn etwas fehlt

---

# 🛠️ Tool
GitHub Copilot

## 💻 Code

```ts
function validatePassword(password: string): string {
  if (password.length < 10) {
    return "Password must be at least 10 characters long.";
  }
  if (!/[A-Z]/.test(password)) {
    return "Password must contain at least one capital letter.";
  }
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    return "Password must contain at least one special character.";
  }
  if (/\s/.test(password)) {
    return "Password must not contain spaces.";
  }
  return "Password is valid.";
}
```

## 🧠 Reflexion

### ✅ Was hat gut funktioniert?
- Sehr direkte und verständliche Rückmeldungen.
- Jede Bedingung wurde einzeln geprüft mit klaren Fehlermeldungen.
- Sofort einsatzbereit mit Beispielnutzung.

### ⚠️ Was hätte besser sein können?
- Fehlertexte sind nur einzeln; bei mehreren Fehlern wird nur der erste angezeigt.
- Keine Sammel-Validierung wie in Codeium.

### 💡 Besondere Beobachtungen
- Nutzt klassische `function`-Schreibweise.
- Kommentare sind hilfreich und direkt.

---

# 🛠️ Tool
Codeium

## 💻 Code

```ts
function validatePassword(password: string): string | null {
  const errors: string[] = [];

  if (password.length < 10) {
    errors.push("Password must be at least 10 characters long");
  }
  if (!/[A-Z]/.test(password)) {
    errors.push("Password must contain at least one capital letter");
  }
  if (!/[^a-zA-Z0-9]/.test(password)) {
    errors.push("Password must contain at least one special character");
  }
  if (/\s/.test(password)) {
    errors.push("Password must not contain spaces");
  }

  if (errors.length > 0) {
    return errors.join("\n");
  }

  return null;
}
```

## 🧠 Reflexion

### ✅ Was hat gut funktioniert?
- Sammelt alle Fehler und gibt sie gesammelt zurück.
- Benutzerfreundlicher für Formulareingaben.
- Moderne und gut strukturierte Implementierung.

### ⚠️ Was hätte besser sein können?
- Kein direktes „valid“ Feedback – nur `null` als Rückgabe.

### 💡 Besondere Beobachtungen
- Nutzt `string[]` zur Fehlerverwaltung.
- Rückgabewert `null` für erfolgreich – leicht weiterverarbeitbar.

---

# 🏁 Fazit

Beide Tools haben gut funktioniert, jedoch in unterschiedlichen Stärken:

- **GitHub Copilot** eignet sich hervorragend für schnelle, einfache Lösungen mit klaren Einzelfehlermeldungen.
- **Codeium** bietet eine umfassendere Lösung, die alle Validierungsfehler gleichzeitig ausgibt – ideal für Formulare und Benutzerfeedback.

**Gewinner für diese Aufgabe: _Codeium_, aufgrund der besseren UX bei mehreren Validierungsfehlern.**
