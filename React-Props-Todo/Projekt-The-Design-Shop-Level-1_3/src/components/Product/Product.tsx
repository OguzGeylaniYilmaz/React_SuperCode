import React from "react";
import ProductCard from "../Product-card/ProductCard";
import "./Product.css";

const products = [
  {
    image: "/images/Home.png",
    name: "Vifa Copenhagen 2.0 Loudspeaker",
    price: "799.00",
  },
  {
    image: "/images/Lifestyle_b-o.png",
    name: "Bang & Olusfen Wireless Headphones",
    price: "174.00",
  },
  {
    image: "/images/Books.png",
    name: "Poketo: Creative Spaces",
    price: "25.00",
  },
  {
    image: "/images/Lifestyle.png",
    name: "Ucon Acrobatics Hajo Backpack",
    price: "79.00",
  },
];

const Product: React.FC = () => {
  return (
    <div className="product-list">
      {products.map((product, index) => (
        <ProductCard key={index} {...product}></ProductCard>
      ))}
    </div>
  );
};

export default Product;
