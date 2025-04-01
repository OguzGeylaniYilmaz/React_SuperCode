import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="text-center mt-10">
      <h1 className="text-3xl font-bold mb-4">Wilkommen im Shop</h1>
      <Link to="/products" className="text-blue-500 underline text-xl">
        Zum Shop
      </Link>
    </div>
  );
}
