import React from "react";
import "./Skill.css";

const Skill: React.FC = () => {
  return (
    <section className="skills">
      <h2>SKILLS</h2>
      <div className="skill-list">
        <button>HTML</button>
        <button>CSS</button>
        <button>JavasScript</button>
        <button>React</button>
        <button>SASS</button>
        <button>Tailwind CSS</button>
        <button>Git</button>
        <button>UX/UI</button>
      </div>
    </section>
  );
};

export default Skill;
