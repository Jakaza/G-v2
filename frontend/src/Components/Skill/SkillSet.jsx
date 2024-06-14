import React from "react";
import Skill from "./Skill";
import "./SkillSet.css";

const SkillSet = () => {
  const skills = [
    {
      name: "java",
      icon: "java-original",
      level: 70,
    },
    {
      name: "javascript",
      icon: "javascript-original",
      level: 98,
    },
    {
      name: "nodejs",
      icon: "nodejs-original-wordmark",
      level: 98,
    },
    {
      name: "mysql",
      icon: "mysql-original-wordmark",
      level: 98,
    },
    {
      name: "git",
      icon: "git-original",
      level: 98,
    },
    {
      name: "html5",
      icon: "html5-original",
      level: 98,
    },
    {
      name: "css3",
      icon: "css3-original",
      level: 98,
    },
    {
      name: "mongodb",
      icon: "mongodb-original-wordmark",
      level: 98,
    },
    {
      name: "amazonwebservices",
      icon: "amazonwebservices-original-wordmark",
      level: 98,
    },
    {
      name: "react",
      icon: "react-original",
      level: 98,
    },
  ];
  return (
    <div className="skillSet">
      <div className="inner">
        <div className="heading">
          <h1>My Skills</h1>
          <p>
            Here you will find my current array of skills mostly in terms of
            programming and technology
          </p>
        </div>
        <div className="mainSkillsContainer">
          <ul className="skills">
            {skills.map((skill, index) => (
              <li key={index}>
                <Skill skill={skill} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SkillSet;
