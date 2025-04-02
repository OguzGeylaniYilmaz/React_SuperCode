import { useParams } from "react-router-dom";
import "../css/product-detail.css";
import { useEffect, useState } from "react";
import "../css/product-detail.css";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
};
const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="details-container">
      <img src={product.image} alt={product.title} className="product-image" />
      <h1 className="product-title">{product.title}</h1>
      <p className="product-description">{product.description}</p>
      <p className="product-price">{product.price} $</p>
    </div>
  );
};

export default ProductDetail;
