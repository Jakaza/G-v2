import React, { useState } from 'react'
import './Experience.css'
import ExperienceBox from './ExperienceBox'

const Experience = () => {

  const [experiences, setExperiences] = useState([
    {
      company: "Tech Mahindra",
      start: 2023,
      end: 2024,
      role: "Intern",
      description: "I assisted in designing, implementing, and managing cloud infrastructure solutions using AWS, collaborated with senior engineers to deploy and maintain cloud-based applications, developed web applications from frontend to backend using JavaScript, NodeJS, and Spring Boot, and participated in code reviews, providing constructive feedback to peers.",
      tools: ["AWS", "Java", "SQL"]
    },
    // {
    //   company: "Tech Mahindra",
    //   start: 2023,
    //   end: 2024,
    //   role: "Junior Developer",
    //   description: "Assisted in designing, implementing, and managing cloud infrastructure solutions using AWS,Collaborated with senior engineers to deploy and maintain cloud-based application, Developed web applications from frontend to backend using JavaScript, NodeJS, and Spring Boot. And participated in code reviews and provided constructive feedback to peers.",
    //   tools: ["AWS", "Java", "SQL"]
    // }
  ])

  return (
    <div className='experience'>
        <h3 className="bioTitle">Experience</h3>
        <ul className='experiences'>
        {
        experiences.map((experience, index) => (
          <ExperienceBox key={index} experience={experience} />
        ))
        }
        </ul>
        {experiences.length === 1 ? null : (
        <div className="buttons">
          <button disabled className="navigationButton">Prev</button>
          <button disabled className="navigationButton">Next</button>
        </div>
      )}
    </div>
  )
}

export default Experience
