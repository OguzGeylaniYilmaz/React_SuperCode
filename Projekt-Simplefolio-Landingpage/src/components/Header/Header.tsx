import React from "react";
import "./Header.css";

const Header:React.FC = () => {
  return (
    <header>
      <div>
        <h2>JS.</h2>
      </div>
      <nav>
        <ul>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
