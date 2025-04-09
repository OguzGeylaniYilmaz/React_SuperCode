import "../assets/css/footer.css";
import FooterImage from "../assets/images/bier.png";

const Footer = () => {
  return (
    <footer>
      <div className="img-container">
        <img src={FooterImage} className="footer-img" />
      </div>
    </footer>
  );
};

export default Footer;
