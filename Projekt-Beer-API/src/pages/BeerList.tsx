import { useEffect, useState } from "react";
import { Beer } from "../types/Beer";
import axios from "axios";
import { Link } from "react-router-dom";

const BeerProducts = () => {
  const [beers, setBeers] = useState<Beer[]>([]);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((res) => setBeers(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="p-4 flex flex-col gap-4">
      {beers.map((beer) => (
        <div
          key={beer._id}
          className="flex border-b pb-4 gap-4 items-center border-black-400"
        >
          <img
            src={beer.image_url}
            alt={beer.name}
            className="h-24 object-contain"
          />
          <div className="flex flex-col flex-1">
            <h2 className="text-xl font-bold">{beer.name}</h2>
            <p className="text-yellow-400 font-semibold">{beer.tagline}</p>
            <p className="text-sm">Created by: {beer.contributed_by}</p>
            <Link
              to={`/beers/${beer._id}`}
              className="bg-yellow-400 text-white rounded px-3 py-1 mt-2 w-fit"
            >
              Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BeerProducts;
