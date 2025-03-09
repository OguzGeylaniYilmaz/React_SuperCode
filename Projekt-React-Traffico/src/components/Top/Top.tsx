import "./Top.css";

import Logo from "../../assets/images/logo.png";

import Mobel from "../../assets/images/mobel.png";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

const Top = () => {
  return (
    <header>
      <div className="container">
        <div className="logo">
          <img src={Logo} alt=""></img>
        </div>
        <nav>
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">How To</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
            <li>
              <button className="btn">Contact Us</button>
            </li>
          </ul>
        </nav>
      </div>
      <div className="intro">
        <p>Your awesome traffic permit consultant.</p>
      </div>
      <PrimaryButton />
      <div className="illustration">
        <img src={Mobel}></img>
      </div>
    </header>
  );
};

export default Top;
