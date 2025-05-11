import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Rezepte from "./pages/Rezepte";
import ÜberUns from "./pages/Über-uns";
import RezepteDetails from "./pages/RezepteDetails";
import RezeptErstellenSeite from "./pages/RezeptErstellenSeite";
import Login from "./pages/Login";
import { UserProvider } from "./context/UserContext";
import SignUp from "./pages/SignUp";

const App = () => {
  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rezepte" element={<Rezepte />} />
        <Route path="/uber-uns" element={<ÜberUns />} />
        <Route path="/rezeptedetails/:id" element={<RezepteDetails />} />
        <Route path="/rezepterstellen" element={<RezeptErstellenSeite />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<h1>Profile</h1>} />
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
    </UserProvider>
  );
};

export default App;
