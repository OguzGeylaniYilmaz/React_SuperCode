import Icon from "../assets/images/Ico.png";
import "../assets/css/footer.css";
import twitter from "../assets/images/twitter.png";
import youtube from "../assets/images/youtube.png";
import pinterest from "../assets/images/pinterest.png";
import browser from "../assets/images/browser.png";

const Footer = () => {
  return (
    <footer className="h-[273px] bg-[#ffdb63] flex items-center justify-evenly">
      <div className="footer-logo">
        <img
          src={Icon}
          alt="Logo"
          className="w-[49px] h-[46px]  bg-no-repeat"
        />
        <h2>Die Rezeptwelt</h2>
      </div>
      <div className="social-media-container">
        <h3>Social Media</h3>
        <div className="social-media-icons">
          <div className="social-media-icon">
            <img src={youtube} alt="youtube" />
          </div>
          <div className="social-media-icon">
            <img src={twitter} alt="twitter" />
          </div>
          <div className="social-media-icon">
            <img src={browser} alt="" />
          </div>
          <div className="social-media-icon">
            <img src={pinterest} alt="pinterest" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
