import "./App.css";
import ProductList from "./components/ProductsCodeium";
import ProductCard from "./components/ProductsCopilot";

const products = [
  {
    id: 1,
    title: "Product 1",
    price: 19.99,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    title: "Product 2",
    price: 29.99,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    title: "Product 3",
    price: 39.99,
    image: "https://via.placeholder.com/150",
  },
];

function App() {
  return (
    <>
      <ProductList products={products} />
      <ProductCard products={products} />
    </>
  );
}

export default App;
