import React, { useState } from 'react'
import './Experience.css'
import ExperienceBox from './ExperienceBox'

const Experience = () => {

  const [experiences, setExperiences] = useState([
    {
      company: "Tech Mahindra",
      start: 2022,
      end: 2023,
      role: "Intern",
      description: "Assisted in designing, implementing, and managing cloud infrastructure solutions using AWS,Collaborated with senior engineers to deploy and maintain cloud-based application, Developed web applications from frontend to backend using JavaScript, NodeJS, and Spring Boot. And participated in code reviews and provided constructive feedback to peers.",
      tools: ["AWS", "Java", "SQL"]
    },
    {
      company: "Tech Mahindra",
      start: 2023,
      end: 2024,
      role: "Junior Developer",
      description: "Assisted in designing, implementing, and managing cloud infrastructure solutions using AWS,Collaborated with senior engineers to deploy and maintain cloud-based application, Developed web applications from frontend to backend using JavaScript, NodeJS, and Spring Boot. And participated in code reviews and provided constructive feedback to peers.",
      tools: ["AWS", "Java", "SQL"]
    }
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
        <div class="buttons">
          <button disabled class="navigationButton">Prev</button>
          <button disabled class="navigationButton">Next</button>
         </div>
    </div>
  )
}

export default Experience