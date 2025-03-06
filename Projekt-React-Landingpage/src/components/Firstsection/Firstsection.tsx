import "./Firstsection.css";
import BrushIcon from "../../assets/images/brush.svg";
import ObjectIcon from "../../assets/images/object-select.svg";
import SpeakerIcon from "../../assets/images/megaphone.svg";
import GlobeIcon from "../../assets/images/globe-line.svg";

const FirstSection = () => {
  return (
    <section>
      <div className="first-container">
        <h3>What We Do</h3>
        <h1>
          We've got everything you need to launch <br />
          and grow your business
        </h1>
      </div>

      <div className="second-container">
        <img src={BrushIcon} alt="BrushIcon" />
        <div>
          <h2>Brand Identity</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas,
            quibusdam magni ducimus veniam, ipsa eum culpa quod explicabo qui
            expedita atque! Consectetur labore, laudantium repudiandae
            asperiores neque architecto rem error?
          </p>
        </div>
        <img src={ObjectIcon} alt="ObjectIcon" />
        <div>
          <h2>Illustration</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit
            perspiciatis, nam fuga exercitationem eligendi repellat quas
            blanditiis voluptas facilis voluptatem eum soluta aspernatur
            incidunt iusto pariatur odio distinctio! Unde, et?
          </p>
        </div>

        <img src={SpeakerIcon} alt="MegaphoneIcon" />

        <div>
          <h2>Marketing</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas,
            quibusdam magni ducimus veniam, ipsa eum culpa quod explicabo qui
            expedita atque! Consectetur labore, laudantium repudiandae
            asperiores neque architecto rem error?
          </p>
        </div>
        <img src={GlobeIcon} alt="GlobeIcon" />

        <div>
          <h2>Web Design</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit
            perspiciatis, nam fuga exercitationem eligendi repellat quas
            blanditiis voluptas facilis voluptatem eum soluta aspernatur
            incidunt iusto pariatur odio distinctio! Unde, et?
          </p>
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
