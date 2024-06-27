import React from "react";
import "./project.css";

const Project = ({
  title,
  description,
  stars,
  language,
  icon,
  status = false,
  link,
  tools,
}) => {
  return (
    <div className="project-card">
      <div className="project-title">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

      <div className="project-details project-languages">
        {/* <span>⭐ {stars}</span> */}
        {tools.map((tool, index) => (
          <span key={index} className="project-tool">
            {tool}
          </span>
        ))}
        {/* <span>{icon}</span> */}
      </div>
      <div className="project-links">
        {status && (
          <a href={link} target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        )}

        {!status && <span>Under Development</span>}
      </div>
    </div>
  );
};

export default Project;
