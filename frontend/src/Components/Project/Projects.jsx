import React, { useState } from "react";
import Project from "./Project";
import "./project.css";

const projectData = [
  {
    title: "projects",
    description: "Showcase All Your Projects",
    stars: 242,
    language: "JavaScript",
    icon: "📁👾",
    link: "#",
  },
  {
    title: "dots2k",
    description: "Passionately Crafted CLI Setup",
    stars: 214,
    language: "Shell",
    icon: "🖥️❤️",
    link: "#",
  },
  {
    title: "tmux2k",
    description: "Make tmux powerful and pretty",
    stars: 135,
    language: "Shell",
    icon: "📜🖌️",
    link: "#",
  },
  {
    title: "nvim2k",
    description: "Your Personalized Dev Env",
    stars: 104,
    language: "Lua",
    icon: "❤️📘",
    link: "#",
  },
  {
    title: "Wipro-PJP",
    description: "Code written during Wipro PJP",
    stars: 86,
    language: "Java",
    icon: "📂📄",
    link: "#",
  },
  {
    title: "win2k",
    description: "Ultimate Dev Setup for Windows",
    stars: 84,
    language: "Shell",
    icon: "🔧💾",
    link: "#",
  },
  {
    title: "nerdy.nvim",
    description: "Find Nerd Glyphs Easily",
    stars: 126,
    language: "Lua",
    icon: "😎🖋️",
    link: "#",
  },
  {
    title: "termux2k",
    description: "CLI Dev Setup in Your Hands",
    stars: 125,
    language: "Shell",
    icon: "💻🖱️",
    link: "#",
  },
  {
    title: "tdo.nvim",
    description: "Fast & Simple Notes in Neovim",
    stars: 44,
    language: "Lua",
    icon: "📓🖊️",
    link: "#",
  },
  {
    title: "polyquine",
    description: "source = output, in code",
    stars: 39,
    language: "C",
    icon: "🔠🔡",
    link: "#",
  },
  // Add more project data as needed
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

  return (
    <div className="inner">
      <div className="heading" style={{ marginBottom: "5px" }}>
        <h1>My Recent Work</h1>
        <p>Here are a few past projects I've worked on.</p>
      </div>

      <div className="projects-container">
        <div className="filter-buttons" style={{ marginBottom: "75px" }}>
          <button onClick={() => handleFilterChange("All")}>All</button>
          <button onClick={() => handleFilterChange("JavaScript")}>
            JavaScript
          </button>
          <button onClick={() => handleFilterChange("Shell")}>Shell</button>
          <button onClick={() => handleFilterChange("Lua")}>Lua</button>
          <button onClick={() => handleFilterChange("Java")}>Java</button>
          <button onClick={() => handleFilterChange("C")}>C</button>
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
