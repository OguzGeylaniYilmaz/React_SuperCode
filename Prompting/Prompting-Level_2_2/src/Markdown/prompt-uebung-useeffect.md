# 🧾 Aufgabenbeschreibung

### Ausgangsprompt:
> Meine Seite hängt sich auf und ich weiß nicht warum.

```jsx
import { useState, useEffect } from "react";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    };
    fetchData();
  }, [products]);

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>{product.title}</li>
      ))}
    </ul>
  );
};
```

- Kopiere diesen Code in eine Vite-App in den Ordner „vorher“ und öffne sie in VS Code.
- Gib den Code in deinen KI-Chat ein – mit einem Prompt deiner Wahl – und analysiere, wie die KI den Fehler identifiziert.
- Verbessere den Prompt schrittweise so, dass:
    - genauer auf useEffect hinweist
    - um eine Erklärung bittest, warum das passiert
    - eine saubere, funktionierende Lösung mit Begründung anforderst
- Übernimm die korrigierte Version in den Ordner „nachher“ und teste sie in deiner React-App.

# ✍️ Prompts

## ✍️ Mein Prompt 1
Meine Seite hängt sich mit diesem Code auf. Warum?

## ✍️ Mein Prompt 2
Gibt es einen Fehler in meinem useEffect-Hook?

## ✍️ Mein Prompt 3
Warum führt dieser useEffect zu einer Endlosschleife und wie kann ich ihn korrekt umschreiben?

# 🧠 Reflexion

## 🧠 Hat die KI den Fehler korrekt identifiziert?
Ja. Die KI hat erkannt, dass die Abhängigkeit `[products]` im useEffect dazu führt, dass bei jeder Aktualisierung von `products` der Effekt erneut ausgeführt wird – was zu einer Endlosschleife führt.

## 🧠 Wie gut war die Erklärung – konntest du den Fehler danach selbst nachvollziehen bzw. ist die Erklärung für Anfänger:innen geeignet?
Die Erklärung war sehr verständlich. Sie hat deutlich gemacht, wie useEffect mit Abhängigkeiten funktioniert und warum in diesem Fall `[]` als Abhängigkeitsliste verwendet werden sollte.

## 🧠 Was hat sich mit jedem Prompt verbessert?
Mit jedem Prompt wurde die Anfrage präziser. Während der erste Prompt allgemein war, zielte der dritte Prompt direkt auf das Problem im useEffect ab und forderte eine Lösung mit Begründung.
