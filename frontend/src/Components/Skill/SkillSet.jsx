import React from "react";
import Skill from "./Skill";
import "./SkillSet.css";

const SkillSet = () => {
  const skills = [
    {
      name: "java",
      slug: "Java",
      icon: "java-original",
      level: 70,
    },
    {
      name: "spring",
      slug: "Spring-Boot",
      icon: "spring-original",
      level: 70,
    },
    {
      name: "javascript",
      slug: "javascript",
      icon: "javascript-original",
      level: 98,
    },
    {
      name: "nodejs",
      slug: "NodeJs",
      icon: "nodejs-original-wordmark",
      level: 98,
    },
    {
      name: "mysql",
      slug: "MySQL",
      icon: "mysql-original-wordmark",
      level: 98,
    },
    {
      name: "git",
      slug: "Git",
      icon: "git-original",
      level: 98,
    },
    {
      name: "html5",
      slug: "html5",
      icon: "html5-original",
      level: 98,
    },
    {
      name: "css3",
      slug: "css3",
      icon: "css3-original",
      level: 98,
    },
    {
      name: "mongodb",
      slug: "Mongodb",
      icon: "mongodb-original-wordmark",
      level: 98,
    },
    {
      name: "redis",
      slug: "Redis",
      icon: "redis-original",
      level: 98,
    },
    {
      name: "amazonwebservices",
      slug: "AWS",
      icon: "amazonwebservices-original-wordmark",
      level: 98,
    },
    {
      name: "react",
      slug: "ReactJS",
      icon: "react-original",
      level: 98,
    },
    {
      name: "postman",
      slug: "postman",
      icon: "postman-original",
      level: 98,
    },
    {
      name: "bootstrap",
      slug: "bootstrap",
      icon: "bootstrap-original",
      level: 98,
    },
    {
      name: "github",
      slug: "Github",
      icon: "github-original",
      level: 98,
    },
    {
      name: "figma",
      slug: "Figma",
      icon: "figma-original",
      level: 98,
    },
    {
      name: "docker",
      slug: "docker",
      icon: "docker-original",
      level: 98,
    },
    {
      name: "jira",
      slug: "Jira",
      icon: "jira-original",
      level: 98,
    },
  ];
  return (
    <div className="skillSet">
      <div className="inner">
        <div className="heading">
          <h1>My Skills</h1>
          <p>
            Here you will find array of skills mostly in terms of
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
