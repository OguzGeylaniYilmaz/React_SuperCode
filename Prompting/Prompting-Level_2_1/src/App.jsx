import { useState } from "react";

import "./App.css";
import Card from "./components/vorher_card";
import Card_Update from "./components/nachher_card";

function App() {
  return (
    <>
      <Card />
      <Card_Update />
    </>
  );
}

export default App;
