import React from "react";
import './ProduktKarten.css'

interface ProduktProps {
  img: string;
  product: string;
  price: string;
}

const ProduktKart: React.FC<ProduktProps> = ({ img, product, price }) => {
  return (
    <>
      <div className="product-card">
        <img src={img} alt={product}></img>
        <h3>{product}</h3>
        <p>{price}</p>
        <button>BUY NOW</button>
      </div>
    </>
  );
};

export default ProduktKart;
