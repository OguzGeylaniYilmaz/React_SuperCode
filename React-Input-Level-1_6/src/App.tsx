import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div
      style={{
        display: "flex",
        gap: "1rem",
        padding: "2rem",
        justifyContent: "center",
      }}
    >
      <div>
        <input
          type="text"
          placeholder="Vorname"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p>Vorname: {name}</p>
      </div>

      <div>
        <input
          type="text"
          placeholder="Nachname"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        />
        <p>Nachname: {lastname}</p>
      </div>

      <div>
        <input
          type="text"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p>E-mail: {email}</p>
      </div>
    </div>
  );
}

export default App;
