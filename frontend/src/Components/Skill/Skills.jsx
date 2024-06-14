import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTypescript,
  SiExpress,
  SiPostman,
  SiDart,
  SiFlutter,
  SiRedux,
  SiSass,
  SiTailwindcss,
  SiMysql,
  SiMongodb,
  SiHeroku,
  SiFirebase,
  SiBootstrap,
  SiC,
  SiJavascript,
} from "react-icons/si";

import "./skills.css";

const skills = [
  { icon: <SiC />, label: "C Language" },
  { icon: <SiTypescript />, label: "TypeScript" },
  { icon: <SiExpress />, label: "Express" },
  { icon: <FaNodeJs />, label: "NodeJS" },
  { icon: <SiPostman />, label: "Postman" },
  { icon: <SiDart />, label: "Dart" },
  { icon: <SiFlutter />, label: "Flutter" },
  { icon: <FaReact />, label: "React Native" },
  { icon: <FaHtml5 />, label: "HTML" },
  { icon: <FaCss3Alt />, label: "CSS" },
  { icon: <SiBootstrap />, label: "Bootstrap" },
  { icon: <SiRedux />, label: "Redux" },
  { icon: <SiSass />, label: "Sass" },
  { icon: <SiJavascript />, label: "Javascript" },
  { icon: <SiTailwindcss />, label: "Tailwind CSS" },
  { icon: <FaReact />, label: "React" },
  { icon: <SiMysql />, label: "MySQL" },
  { icon: <SiMongodb />, label: "Mongo DB" },
  { icon: <SiHeroku />, label: "Heroku" },
  { icon: <SiFirebase />, label: "Firebase" },
  { icon: <FaGitAlt />, label: "Git" },
];

const Skills = () => {
  return (
    <section className="skills">
      <h2 className="section-title">Technologies and Tools</h2>
      <p className="section-subtitle">
        Using a combination of cutting-edge technologies and reliable
        open-source software I build user-focused, performant apps and websites
        for smartphones, tablets, and desktops.
      </p>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill">
            {skill.icon}
            <span>{skill.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
