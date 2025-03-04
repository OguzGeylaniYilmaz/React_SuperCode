import React from "react";
import "./Project.css";

const Project: React.FC = () => {
  return (
    <section className="projects">
        <h2>PROJECTS</h2>
        <div className="project-container">
            <div className="project-card">
                <h3>Project 1</h3>
                {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, provident.</p> */}
                <span>JavaScript React Sass</span>
            </div>
            <div className="project-card">
                <h3>Project 2</h3>
                {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, provident.</p> */}
                <span>JavaScript React Sass</span>
            </div>
            <div className="project-card">
                <h3>Project 3</h3>
                {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, provident.</p> */}
                <span>JavaScript React Sass</span>
            </div>
        </div>
    </section>
  );
};

export default Project;
