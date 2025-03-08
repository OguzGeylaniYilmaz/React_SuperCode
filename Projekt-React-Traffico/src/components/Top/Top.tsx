import "./Top.css";
import Rectangle from "../../assets/images/Rectangle 16.png";
import Rectangle2 from "../../assets/images/Rectangle 15.png";
import Union from "../../assets/images/Union.png";
import Mobel from "../../assets/images/mobel.png";

const Top = () => {
  return (
    <header>
      <div className="container">
        <div className="logo">
          <img src={Rectangle2} alt=""></img>
          <img src={Rectangle}></img>
          <h2>TRAFICO.</h2>
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
      <button className="btn-primary">
        GET STARTED<img src={Union}></img>
      </button>
      <div className="illustration">
        <img src={Mobel}></img>
      </div>
    </header>
  );
};

export default Top;
