import "./Footer.css";
import Trekmobil from "../../assets/images/Group35.png";

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
      <div className="nav"></div>
    </section>
  );
};

export default Footer;
