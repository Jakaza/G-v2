import React from "react";
import "./services.css";

function Services() {
  return (
    <div className="services-container">
      <div className="heading">
        <h1>Services</h1>
        <p>What I Provide</p>
      </div>

      <div className="services">
        <div className="service">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" />

          <h4>Web Application Development</h4>
          <p>
            Web design encompasses many different skills and disciplines in the
            production and maintenance of websites. The different areas of web
            design include web graphic design, user interface design, authoring,
            including standardized code and proprietary software, user
            experience design, and search engine optimization.
          </p>
        </div>
        <div className="service">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original.svg" />
          <h4>Mobile Application Development</h4>
          <p>
            We provide a range of mobile application development services
            including custom mobile development on Android platforms, building
            cross-platform apps, designing user experiences, and integrating
            novel mobile interfaces such as chat and voice.
          </p>
        </div>
        <div className="service">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" />

          <h4>Backend Development</h4>
          <p>
            Backend development involves creating visual content to communicate
            messages. By applying visual hierarchy and page layout techniques,
            designers use typography and pictures to meet users' specific needs
            and focus on the logic of displaying elements in interactive designs
            to optimize the user experience.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
