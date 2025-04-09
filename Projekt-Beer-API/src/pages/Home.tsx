import AllBearImage from "../assets/images/all_beers.jpeg";
import RandomBeerImage from "../assets/images/random_beer.jpeg";
import "../assets/css/home.css";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col gap-6 p-4 w-[1080px]  mx-auto">
      <Link to="/beers">
        <img src={AllBearImage} alt="All Beers" />
        <div className="bg-yellow-400 p-2 text-white text-5xl font-bold ">
          All Beers
        </div>
        <p className="p-2 text-gray-700 font-medium text-5xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, a,
          eleifend vitae.
        </p>
      </Link>

      <Link to="/random-beer">
        <img
          src={RandomBeerImage}
          alt="Random Beer"
          style={{ height: "600px", width: "1080px", objectFit: "cover" }}
        />
        <div className="bg-yellow-400 p-2 text-white text-5xl font-bold">
          Random Beer
        </div>
        <p className="p-2 text-gray-700 font-medium text-5xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, a,
          eleifend vitae.
        </p>
      </Link>
    </div>
  );
};

export default Home;
