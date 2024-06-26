import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import AboutMe from "./Components/AboutMe/AboutMe";
import SkillSet from "./Components/Skill/SkillSet";
import Projects from "./Components/Project/Projects";
import Contact from "./Components/Contact/Contact";
import Services from "./Components/Services/Services";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutMe />
      <SkillSet />
      <Services />
      <Projects />
      <footer className="footer">
        <Contact />
      </footer>
    </>
  );
}

export default App;
