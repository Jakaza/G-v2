import React from 'react'
import './ExperienceBox.css'

const ExperienceBox = (props) => {
    const {company,start,end,role,description,tools} = props.experience
  return (
    <div className='experienceBox'>
        <section className="period">
         <p>{start} - {end}</p>
        </section>
        <section className="content">
            <h5>{company}</h5>
                <p>Role : <b>{role}</b> </p>
                <div className="description">
                <p>{description}</p>
               </div>
        </section>
    </div>
  )
}

export default ExperienceBox