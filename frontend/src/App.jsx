import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import AboutMe from './Components/AboutMe/AboutMe'
import SkillSet from './Components/Skill/SkillSet'

function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <AboutMe/>
    <SkillSet/>
    </>
  )
}

export default App
