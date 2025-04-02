import Nav from "../components/Nav";
import ProductLogo from "../assets/images/about-logo.png";
import "../css/Product.css";
import Footer from "../components/Footer";

const Products = () => {
  return (
    <>
      <Nav />
      <div className="product-title">
        <img src={ProductLogo} />
        <h2>What we have</h2>
        <div className="horizontal-line"></div>
        <h1>Products</h1>
      </div>

      <div className="product-container">
        <div className="product-item">
          <p>Jenson</p>
          <button>Shop now</button>
        </div>
        <div className="product-item">
          <p>Deon</p>
          <button>Shop now</button>
        </div>
        <div className="product-item">
          <p>Krisha</p>
          <button>Shop now</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Products;
