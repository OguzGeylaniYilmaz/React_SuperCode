import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Rezepte from "./pages/Rezepte";
import ÜberUns from "./pages/Über-uns";
import RezepteDetails from "./pages/RezepteDetails";
import RezeptErstellenSeite from "./pages/RezeptErstellenSeite";
import Login from "./pages/Login";
import { UserProvider } from "./context/UserContext";
import SignUp from "./pages/SignUp";
import UserProfile from "./components/UserProfile";

import NotFound from "./pages/NotFound";
import ForgetPassword from "./pages/ForgetPassword";

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
        <Route path="/userprofile" element={<UserProfile />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </UserProvider>
  );
};

export default App;
