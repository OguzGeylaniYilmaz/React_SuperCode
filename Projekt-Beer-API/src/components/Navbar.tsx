// src/components/Navbar.tsx
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-yellow-400 p-4 flex justify-center">
      <Link to="/" className="text-white text-xl font-bold">
        🍻 Home
      </Link>
    </nav>
  );
};

export default Navbar;
