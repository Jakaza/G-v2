import React from "react";
import { FaStackOverflow, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./ContactInfo.css";

const ContactInfo = () => {
  return (
    <div className="contact-info">
      <div className="" style={{ color: "white" }}>
        <h1>Contact</h1>
        <p>
          If you want to know more about me or my work, or if you would just
          like to say hello, send me a message. I'd love to hear from you.
        </p>
      </div>
      <div className="info-item" style={{ color: "white" }}>
        <br /> <br />
        <h4>Email</h4>
        <p>goodnessthembac@gmail.com</p>
        <h4>Contact</h4>
        <p>0711770423</p>
        <br /> <br />
        <h4>Address</h4>
        <p>
          Gauteng, Pretoria
          <br />
          South Africa
        </p>
        <br /> <br />
        <h4>Social</h4>
        <div className="social-icons">
          <a href="https://stackoverflow.com">
            <FaStackOverflow />
          </a>
          <a href="https://instagram.com">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
