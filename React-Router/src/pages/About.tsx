import Nav from "../components/Nav";
import "../css/About.css";
import AboutLogo from "../assets/images/about-logo.png";
import AboutImage from "../assets/images/About.png";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div>
      <Nav />
      <div className="about-title">
        <img src={AboutLogo} />
        <h2>Who we are</h2>
        <div className="horizontal-line"></div>
        <h1>About Us</h1>
      </div>

      <div className="about-content">
        <div className="about-image">
          <img src={AboutImage} />
        </div>
        <div className="about-text">
          <h1>
            <b>WOODIES</b> is the<b> home of modern wooden furniture</b>
          </h1>
          <p>
            the answer to your need for furniture with shapes, sizes and colors.{" "}
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
