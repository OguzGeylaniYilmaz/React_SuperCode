import Nav from "../components/Nav";
import "../css/About.css";
import AboutImage from "../assets/images/About.png";
import Footer from "../components/Footer";
import Intro from "../components/Intro";

const About = () => {
  return (
    <div>
      <Nav />
      <Intro introText="Who we are" title="About Us"></Intro>

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
