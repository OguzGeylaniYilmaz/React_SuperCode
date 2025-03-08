import "./AboutUs.css";
import Photo from "../../assets/images/Illustration.png";
import HowToApply from "../HowToApply/HowToApply";

const AboutUs = () => {
  return (
    <section>
      <div className="about-us">
        <div className="about-us-content">
          <h2>ABOUT US</h2>
          <p>
            The occupational traffic permit is one of the most important things
            in the company when carrying out freight transport. In fact, it is a
            prerequisite for doing business traffic at all.
          </p>
          <div>
            <h3>
              How do you do when you need to obtain a commercial traffic permit
              for freight transport to your business?
            </h3>
          </div>
        </div>

        <div className="about-pic">
          <img src={Photo}></img>
        </div>
      </div>

      <HowToApply/>
    </section>
  );
};

export default AboutUs;
