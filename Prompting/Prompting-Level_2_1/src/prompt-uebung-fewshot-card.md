# 🧾 Aufgabenbeschreibung

**Lernziel:** Nach dieser Übung kannst du die Few-shot-Technik einsetzen, um die KI gezielt zu einem bestimmten Stil oder Vorgehen zu führen.

Bei Few-shot Prompting gibst du der KI ein oder mehrere Beispiele mit, aus denen sie lernen kann, wie du etwas möchtest. Die KI orientiert sich dann an Stil, Struktur oder Logik dieser Beispiele, um besseren, zielgerichteten Output zu erzeugen – vor allem bei komplexeren Aufgaben. Der Begriff stammt aus dem maschinellen Lernen und beschreibt ursprünglich Modelle, die aus sehr wenigen Beispielen verallgemeinern können.

**Ausgangssituation:**

Du möchtest eine Card-Komponente erstellen, die stilistisch zu einer bestehenden React-Komponente passt. Ausgangspunkt ist ein Beispiel für einen Button.

```jsx
const Button = ({ label }) => (
  <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 
          rounded-lg shadow-md transition duration-300">
    {label}
  </button>
);
```

- Überlege, wie du dieses Beispiel in einen Prompt einbauen kannst.
- Dein Ziel: Eine Card-Komponente im gleichen Stil generieren lassen.
- Achte darauf, dass die KI:
    - sich am Stil und Aufbau der Button-Komponente orientiert
    - Tailwind verwendet
    - eine Card mit Titel, Beschreibung und Call-to-Action-Button erstellt
- Übernimm das erste Ergebnis in den Ordner "vorher", öffne es in VS Code und schau es dir im Browser an.
- Verbessere deinen Prompt so, dass der Output deinen Erwartungen besser entspricht.
- Übernimm die finale Version in den Ordner "nachher".

# ✍️ Prompts

## ✍️ Mein Prompt 1
Erstelle eine React-Komponente für eine Card mit Titel, Beschreibung und Button. Verwende Tailwind CSS.  
*Kommentar:* Erste einfache Formulierung ohne Stilbezug.

## ✍️ Mein Prompt 2
Hier ist ein Beispiel für meinen Button-Stil:
```jsx
const Button = ({ label }) => (
  <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300">
    {label}
  </button>
);
```
Erstelle eine React-Komponente für eine Card mit Titel, Beschreibung und Button im selben Stil. Nutze Tailwind CSS.  
*Kommentar:* Jetzt gebe ich ein Few-Shot-Beispiel zur Orientierung.

## ✍️ Mein Prompt 3
Hier ist ein Beispiel für meinen Button-Stil:
```jsx
const Button = ({ label }) => (
  <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300">
    {label}
  </button>
);
```
Erstelle eine React-Komponente namens `Card`, die gestalterisch zum Button passt. Die Card soll einen Titel, eine Beschreibung und einen CTA-Button enthalten. Verwende denselben Stil, Aufbau und Tailwind-Klassen.  
*Kommentar:* Ich formuliere gezielter und verlange gleiche Tailwind-Klassen.

# 🧠 Reflexion

## 🧠 Was hat gut funktioniert?
- Der Button als Stilbeispiel hat der KI klar gezeigt, was ich will.
- Die KI hat ähnliche Tailwind-Klassen wie beim Button verwendet.
- Die Card sah gestalterisch stimmig aus.

## 🧠 Was war schwierig oder musste verbessert werden?
- Beim ersten Prompt war der Stil zu unterschiedlich.
- Der Button-Stil wurde nur übernommen, wenn das Beispiel explizit im Prompt stand.

## 🧠 Welche Details im Prompt haben die Qualität verbessert?
- Das konkrete JSX-Beispiel war entscheidend.
- Die Formulierung „verwende denselben Stil und Tailwind-Klassen“ hat präzise Vorgaben gemacht.

## 🧠 Was würdest du beim nächsten Mal gleich anders machen?
- Sofort ein JSX-Beispiel geben.
- Stilrichtlinien klar und explizit formulieren.
- Evtl. auch Farb- oder Layout-Vorgaben definieren.
