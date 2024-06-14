import React from "react";
import { FaStackOverflow, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./ContactInfo.css";

const ContactInfo = () => {
  return (
    <div className="contact-info">
      <div className="info-item">
        <h4>Email</h4>
        <p>goodnessthembac@gmail.com</p>
        <h4>Contact</h4>
        <p>0711770423</p>
      </div>
      <div className="info-item">
        <h4>Address</h4>
        <p>
          Gauteng, Pretoria
          <br />
          South Africa
        </p>
      </div>
      <div className="info-item">
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
