import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Rezepte from "./pages/Rezepte";

import ÜberUns from "./pages/Über-uns";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/rezepte" element={<Rezepte />} />
      <Route path="/uber-uns" element={<ÜberUns />} />
      {/* <Route path="/login" element={<Login />} /> */}
      <Route path="*" element={<h1>Page not found (404)</h1>} />
    </Routes>
  );
};

export default App;
