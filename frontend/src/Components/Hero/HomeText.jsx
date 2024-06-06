import React from 'react'
import './HomeText.css'

const HomeText = () => {
  return (
    <>
    <p>Hello, I’m</p>
    <h1>Themba G Chauke</h1>
    <p className="adjust">ASPIRING SOFTWARE DEVELOPER</p>
    <div className="socialMedia">
        <button className='download'>Download Resume</button>

        <div className="links">
            <ul>
                <li>
                <a href="https://linkedin.com/in/g-themba-chauke" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                </li>
                <li>
                <a href="https://twitter.com/ThembaG3"><i className="fa-brands fa-twitter-square"></i></a>
                </li>
                <li>
                <a href="https://www.facebook.com/malume.jakaza"><i className="fa-brands fa-facebook-square"></i></a>
                </li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default HomeText