import Nav from "../components/Nav";
import "../css/Product.css";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Intro from "../components/Intro";

const Products = () => {
  return (
    <>
      <Nav />
      <Intro introText="What we have" title="Products"></Intro>

      <div className="product-container">
        <div className="product-item">
          <p>Jenson</p>
          <Link to="/jenson">
            <button className="category-button">Shop now</button>
          </Link>
        </div>
        <div className="product-item">
          <p>Deon</p>
          <Link to="/deon">
            <button className="category-button">Shop now</button>
          </Link>
        </div>
        <div className="product-item">
          <p>Krisha</p>
          <Link to="/krisha">
            <button className="category-button">Shop now</button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Products;
