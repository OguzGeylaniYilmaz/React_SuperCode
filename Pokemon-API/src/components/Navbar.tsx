import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-red-500 text-white">
      <h1 className="text-xl font-bold">Pokedex</h1>
    </nav>
  );
};

export default Navbar;
