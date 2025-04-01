import { Product } from "../types/Product";

type productProps = {
  product: Product;
};

export default function ProductCard({ product }: productProps) {
  return (
    <div className="border p-4 rounded shadow-md">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-contain mb-2"
      />
      <h2 className="font-semibold text-lg mb-1">{product.title} </h2>
      <p className="text-green-600 font-bold">${product.price}</p>
      <a>Show More</a>
    </div>
  );
}
