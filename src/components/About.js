import React from "react";
import demo from "../images/demo.png";

function About() {
  return (
    <div>
    <h2>About Me</h2>
    <p>
    I am Yegon, a Software Engineer with extensive expertise in JavaScript, React, API, and Python. Passionate about creating innovative solutions and enhancing user experiences.
    </p>
    <img src={demo} alt="I made this" />
  </div>
  );
}

export default About;
