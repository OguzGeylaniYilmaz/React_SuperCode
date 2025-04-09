import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import { Beer } from "../types/Beer";
import { useNavigate } from "react-router-dom";
import buttonImage from "../assets/images/Vector.png";

const RandomProduct = () => {
  const navigate = useNavigate();
  const [randomBeer, setRandomBeer] = useState<Beer | null>(null);

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
      .then((res) => setRandomBeer(res.data))
      .catch((err) => console.error(err));
  }, []);

  if (!randomBeer) return <p className="p-4">Loading...</p>;

  return (
    <div className="product-detail-container">
      <img src={randomBeer.image_url} />
      <h1 className="product-name">{randomBeer.name}</h1>
      <p className="product-tagline">{randomBeer.tagline} </p>
      <div className="product-row">
        <p>First brewed:</p>
        <span>{randomBeer.first_brewed}</span>
      </div>
      <div className="product-row">
        <p>Attenuation level:</p>
        <span>{randomBeer.attenuation_level}</span>
      </div>
      <p className="product-description">{randomBeer.description}</p>
      <div className="back-button">
        <button onClick={() => navigate(-1)}>
          <img src={buttonImage} className="btn-image" />
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default RandomProduct;
