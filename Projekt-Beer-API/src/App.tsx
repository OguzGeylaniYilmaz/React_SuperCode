import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";

import BeerList from "./pages/BeerList";
import BeerDetails from "./pages/BeerDetails";
import RandomBeer from "./pages/RandomBeer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/beers" element={<BeerList />} />
          <Route path="/beers/:beerId" element={<BeerDetails />} />
          <Route path="/random-beer" element={<RandomBeer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
