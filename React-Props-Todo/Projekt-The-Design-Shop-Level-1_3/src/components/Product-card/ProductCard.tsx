import React from "react";
import "./ProductCard.css";

type ProductPros = {
  image: string;
  name: string;
  price: string;
};

const ProductCard: React.FC<ProductPros> = ({ image, name, price }) => {
  return (
    <div className="product-card">
      <img src={image} alt={name}></img>
      <div>
        <h3>{name}</h3>
        <p>{price} $</p>
      </div>
    </div>
  );
};

export default ProductCard;
