import React from "react";
import "./AboutMeContent.css";
import Bio from "./about/Bio";
import Experience from "./about/Experience";
import useScreenSize from "./../../customHook/useScreenSize";

const AboutMeContent = () => {
  const screenWidth = useScreenSize();
  const isSmartphone = screenWidth <= 768;
  return (
    <div className="aboutMeContent">
      <Bio />
      {isSmartphone && <hr style={{ margin: "25px 0" }} />}
      <Experience />
    </div>
  );
};

export default AboutMeContent;
