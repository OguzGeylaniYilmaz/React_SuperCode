import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Details from "./pages/Details";

import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/blog"
          element={
            <>
              <Nav />
              <Blog />
            </>
          }
        />
        <Route
          path="/blog/:id"
          element={
            <>
              <Nav />
              <Details />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
