import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Jenson from "./pages/Jenson";
import Deon from "./pages/Deon";
import Krisha from "./pages/Krisha";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/jenson" element={<Jenson />} />
        <Route path="/deon" element={<Deon />} />
        <Route path="/krisha" element={<Krisha />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
