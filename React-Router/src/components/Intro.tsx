import "../css/Intro.css";
import AboutLogo from "../assets/images/about-logo.png";

type IntroProps = {
  introText: string;
  title: string;
};

const Intro = ({ introText, title }: IntroProps) => {
  return (
    <>
      <div className="about-title">
        <img src={AboutLogo} />
        <h2>{introText}</h2>
        <div className="horizontal-line"></div>
        <h1>{title}</h1>
      </div>
    </>
  );
};

export default Intro;
