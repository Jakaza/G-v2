import React from "react";
import "./HomeText.css";

const HomeText = () => {
  return (
    <>
      <p>Hello, I’m</p>
      <h1>Themba G Chauke</h1>
      <p className="adjust">ASPIRING SOFTWARE DEVELOPER</p>
      <div className="socialMedia">
        <button className="download">Download Resume</button>

        <div className="links">
          <ul>
            <li>
              <a href="https://linkedin.com/in/g-themba-chauke" target="_blank">
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="https://github.com/jakaza">
                <i className="fa-brands fa-github"></i>
              </a>
            </li>
            <li>
              <a href="https://stackoverflow.com/users/22413862/themba-g-chauke">
                <i className="fa-brands fa-stack-overflow"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default HomeText;
