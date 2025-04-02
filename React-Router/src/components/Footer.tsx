import "../css/Footer.css";
import FooterLogo from "../assets/images/Logo.png";
// import FooterImage from "../assets/images/Footer.png";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="footer-content">
        <div className="footer-line"></div>
        <div className="footer-info">
          <div className="footer-logo">
            <img src={FooterLogo} />
            <h2>WOODIES</h2>
          </div>
          <p>(012) 8967453</p>
          <p>woodies@gmail.com</p>
          <p>Jakarta, Indonesia</p>
        </div>
        <div className="author">
          <p>© {year} WOODIES</p>
        </div>
      </div>
      <div className="footer-image">{/* <img src={FooterImage} /> */}</div>
    </footer>
  );
};

export default Footer;
