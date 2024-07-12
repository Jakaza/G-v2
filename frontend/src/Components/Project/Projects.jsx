import React, { useState } from "react";
import Project from "./Project";
import "./project.css";

const projectData = [
  {
    title: "Edu-Exam",
    description: "Exam Voice Based Web Application.",
    stars: 242,
    language: "JavaScript",
    tools: ["NodeJs", "API", "PostgreSQL", "HTML/CSS"],
    icon: "📁👾",
    link: "https://github.com/Jakaza/eduexam-voice",
    status: true,
    github: "github",
  },
  {
    title: "CloudSync",
    description: "Frontend Cloud. Build, and deploy personalized web",
    stars: 214,
    language: "JavaScript",
    tools: ["NodeJs", "Typescript", "HTML/CSS"],
    status: false,
    icon: "🖥️❤️",
    link: "#",
  },
  {
    title: "Auth-Todo",
    description: "Authenticated To-Do list manager",
    stars: 135,
    language: "JavaScript",
    tools: ["NodeJs", "SQLite ", "EJS", "Passport"],
    status: true,
    icon: "📜🖌️",
    link: "https://github.com/Jakaza/auth-todo",
  },
  {
    title: "Share Files",
    description: "Share Files using sockets and JavaFX",
    stars: 104,
    language: "Java",
    tools: ["Java", "Socket", "JavaFX"],
    status: true,
    icon: "❤️📘",
    link: "https://github.com/Jakaza/file-sharing",
  },
  {
    title: "Chat Wiz",
    description: "Chatbot powered by OpenAI's advanced language model",
    stars: 86,
    language: "JavaScript",
    tools: ["Javascript", "ReactJS", "openai", "API"],
    status: true,
    icon: "📂📄",
    link: "https://github.com/Jakaza/ChatWiz",
  },
  {
    title: "IP Finder",
    description: "Provides users with detailed information about an IP address",
    stars: 84,
    language: "JavaScript",
    tools: ["Javascript", "EJS", "API", "ExpressJS"],
    status: true,
    icon: "🔧💾",
    link: "https://github.com/Jakaza/IP-Finder",
  },
  {
    title: "Barber Shop",
    description: "Barber Shop For Client To Book Seat Online",
    stars: 126,
    language: "Java",
    tools: ["Spring-Boot", "Thymeleaf", "PostgreSQL"],
    icon: "😎🖋️",
    status: false,
    link: "https://github.com/Jakaza/barber-shop",
  },

  {
    title: "Personal Portfolio",
    description: "Demostrate my skills in the field of software development.",
    stars: 44,
    language: "JavaScript",
    tools: ["ReactJs", "NodeJs", "Strapi", "PostgreSQL"],
    status: true,
    icon: "📓🖊️",
    link: "https://github.com/Jakaza/G-v2",
  },
];

const Projects = () => {
  const [filter, setFilter] = useState("All");

  const handleFilterChange = (language) => {
    setFilter(language);
  };

  const filteredProjects =
    filter === "All"
      ? projectData
      : projectData.filter((project) => project.language === filter);

  const isActive = (language) => language === filter;

  return (
    <div className="inner">
      <div className="heading" style={{ marginBottom: "5px" }}>
        <h1>My Recent Work</h1>
        <p>Here are a few past projects I've worked on.</p>
      </div>

      <div className="projects-container">
        <div className="filter-buttons" style={{ marginBottom: "75px" }}>
          <button
            className={isActive("All") ? "active" : ""}
            onClick={() => handleFilterChange("All")}
          >
            All
          </button>
          <button
            className={isActive("JavaScript") ? "active" : ""}
            onClick={() => handleFilterChange("JavaScript")}
          >
            JavaScript
          </button>
          <button
            className={isActive("Java") ? "active" : ""}
            onClick={() => handleFilterChange("Java")}
          >
            Java
          </button>
          {/* Add more filter buttons as needed */}
        </div>
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
