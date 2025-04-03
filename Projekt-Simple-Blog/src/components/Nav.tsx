import { Link } from "react-router-dom";
import "../assets/css/navbar.css";

const Navbar = () => {
  return (
    <nav>
      <h1>My Life</h1>
      <div className="page-links">
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
      </div>
    </nav>
  );
};

export default Navbar;
