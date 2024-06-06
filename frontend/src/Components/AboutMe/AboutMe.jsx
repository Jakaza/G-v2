import React from 'react'
import './AboutMe.css'
import AboutMeContent from './AboutMeContent'
const AboutMe = () => {
  return (
    <div className='aboutMe'>
        <div className="inner">
         <div className="heading">
            <h1>About Me</h1>
            <p>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</p>
         </div>
         <AboutMeContent/>
        </div>
    </div>
  )
}
export default AboutMe