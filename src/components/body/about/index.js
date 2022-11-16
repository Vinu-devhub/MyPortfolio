import React, { useEffect, useState } from "react";
import SocialContact from "../../common/social-contact";
import "./about.css";
function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          <h2>
            <span className="hello-emoji">👋</span>
            <span className="hello-text"></span> World!
          </h2>
          <h1>
            I am&nbsp;
            <span className="info-name">Vinay Bhamre</span>
            <br />
          </h1>
          <div>
            <p className="info-text">
              An aspiring Full Stack Developer currently focusing on Front-End
              Development and a Web Design enthusiast. I love crafting
              easy-to-use, beautiful and clean products.
            </p>
          </div>
        </div>
        <div className="about-photo">
          <img
            src={require("../../../assets/coding.png")}
            alt="Man coding on laptop"
            className="picture"
          />
        </div>
      </div>
      <div className="resume">
        <a
          download="Vinay_Bhamre_Resume"
          href={require("../../../assets/resume.pdf")}
        >
          <button className="resume-button">
            Resume <i class="fi fi-rr-inbox-in download-icon"></i>
          </button>
        </a>
      </div>
      <SocialContact />
    </div>
  );
}

export default About;
