import React from "react";
import "./Intro.css";
import IntroButton from "../Intro-Button/Intro_Button";

const Intro: React.FC = () => {
  return (
    <div className="intro">
      <h1>Hi, I am <span>John Smith.</span> </h1>
      <h2>A Front End Developer.</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, quis quo
        totam aliquid iure veniam dolor atque asperiores autem. Similique
        laudantium vero nesciunt tenetur perferendis iste odio ipsum quos
        officiis.
      </p>
      <IntroButton></IntroButton>
    </div>
  );
};

export default Intro;
