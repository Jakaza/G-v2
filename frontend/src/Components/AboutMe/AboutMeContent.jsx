import React from 'react'
import './AboutMeContent.css'
import Bio from './about/Bio'
import Experience from './about/Experience'

const AboutMeContent = () => {
  return (
    <div className='aboutMeContent'>
        <Bio/>
        <Experience/>
    </div>
  )
}

export default AboutMeContent