import React from "react";
import About from "./about";
import "./body.css";
import Contact from "./contact";
import Project from "./projects";
import Skills from "./skills";

function Body() {
  return (
    <div className="body">
      <section id="about">
        <About />
      </section>
      <section id="project">
        <Project />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default Body;
