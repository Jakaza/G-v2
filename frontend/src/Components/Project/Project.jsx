import React from "react";
import "./project.css";

const Project = ({ title, description, stars, language, icon, link }) => {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="project-details">
        {/* <span>⭐ {stars}</span> */}
        <span>💻 {language}</span>
        {/* <span>{icon}</span> */}
      </div>
      <div className="project-links">
        <a href={link} target="_blank" rel="noopener noreferrer">
          View Project
        </a>
      </div>
    </div>
  );
};

export default Project;
