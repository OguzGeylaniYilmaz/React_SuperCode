import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Rezepte from "./pages/Rezepte";
import ÜberUns from "./pages/Über-uns";
import RezepteDetails from "./pages/RezepteDetails";
import RezeptErstellenSeite from "./pages/RezeptErstellenSeite";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/rezepte" element={<Rezepte />} />
      <Route path="/uber-uns" element={<ÜberUns />} />
      <Route path="/rezeptedetails/:id" element={<RezepteDetails />} />
      <Route path="/rezepterstellen" element={<RezeptErstellenSeite />} />

      {/* <Route path="/login" element={<Login />} /> */}
      <Route
        path="*"
        element={
          <h1
            style={{
              textAlign: "center",
              fontSize: "50px",
              color: "red",
            }}
          >
            Page not found (404)
          </h1>
        }
      />
    </Routes>
  );
};

export default App;
