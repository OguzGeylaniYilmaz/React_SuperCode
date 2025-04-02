import Logo from "../assets/images/Logo.png";
import "../css/Navbar.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Nav = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="logo-container">
      <div className="logo">
        <img src={Logo} alt="woodies logo" />
        <h2>WOODIES</h2>
      </div>
      <div
        className="nav-container"
        style={{
          backgroundColor: isHome ? "#F9BDBD" : "transparent",
        }}
      >
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/products">Products</Link>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
