import React from 'react'
import './Hero.css'
import HomeText from './HomeText'
import HomeImage from './HomeImage'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="inner">
            <section className='homeText'>
             <HomeText/>
            </section>
            <section className='homeImage'>
              <HomeImage/>
            </section>
        </div>
    </div>
  )
}

export default Hero