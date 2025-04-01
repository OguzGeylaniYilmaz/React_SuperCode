import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { Product } from "../types/Product";

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="dip-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-center">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
