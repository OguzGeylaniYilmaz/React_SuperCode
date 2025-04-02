import { useNavigate } from "react-router-dom";
import { Product } from "../types/Product";

type productProps = {
  product: Product;
};

export default function ProductCard({ product }: productProps) {
  const navigate = useNavigate();

  return (
    <div className="border p-4 rounded shadow-md">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-contain mb-2"
      />
      <h2 className="font-semibold text-lg mb-1">{product.title} </h2>
      <p className="text-green-600 font-bold">${product.price}</p>
      <button
        className="text-black hover:text-red-600 border-2 p-3 mt-3"
        onClick={() => navigate("/product-details/" + product.id)}
      >
        Details ansehen
      </button>
    </div>
  );
}
