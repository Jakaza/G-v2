import React from "react";
import "./skills.css";

const Skill = (props) => {
  const { name, icon, slug } = props.skill;
  return (
    <div className="skill">
      <img
        width={65}
        src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${icon}.svg`}
      />
      <h4 className="bioTitle2">{slug}</h4>
    </div>
  );
};

export default Skill;
