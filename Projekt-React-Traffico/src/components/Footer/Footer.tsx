import "./Footer.css";
import Trekmobil from "../../assets/images/Group35.png";
import logo from "../../assets/images/logo.png";

const Footer = () => {
  return (
    <section className="footer">
      <img src={Trekmobil}></img>
      <div className="footer-text">
        <p>
          We provide traffic management consultants so you get started quickly,
          contact us for a quote today!
        </p>
        {/* <PrimaryButton /> */}
      </div>

      <div className="footer-nav">
        <div className="footer-logo">
          <img src={logo} />
        </div>
        <div className="footer-menu">
          <nav>
            <a href="#about">About</a>
            <a href="#howto">How To</a>
            <a href="#faqs">Faqs</a>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Footer;
