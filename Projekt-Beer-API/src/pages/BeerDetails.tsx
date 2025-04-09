// src/pages/BeerDetails.tsx
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Beer } from "../types/Beer";
import "../assets/css/product-details.css";
import buttonImage from "../assets/images/Vector.png";
import Footer from "../components/Footer";

const BeerDetails = () => {
  const { beerId } = useParams();
  const navigate = useNavigate();
  const [beer, setBeer] = useState<Beer | null>(null);

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then((res) => setBeer(res.data))
      .catch((err) => console.error(err));
  }, [beerId]);

  if (!beer) return <p className="p-4">Loading...</p>;

  return (
    <div className="product-detail-container">
      <img src={beer.image_url} />
      <h1 className="product-name">{beer.name}</h1>
      <p className="product-tagline">{beer.tagline} </p>
      <div className="product-row">
        <p>First brewed:</p>
        <span>{beer.first_brewed}</span>
      </div>
      <div className="product-row">
        <p>Attenuation level:</p>
        <span>{beer.attenuation_level}</span>
      </div>
      <p className="product-description">{beer.description}</p>
      <div className="back-button">
        <button onClick={() => navigate(-1)}>
          <img src={buttonImage} className="btn-image" />
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default BeerDetails;
