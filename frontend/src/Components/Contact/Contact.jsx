import React from "react";
import { FaStackOverflow, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./contact.css";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const Contact = () => {
  return (
    <div className="inner">
      <section className="contact">
        <div className="contact-container">
          <ContactForm />
          <ContactInfo />
        </div>
        <footer style={{ color: "white" }}>
          Made with <span className="heart">❤️</span> by Themba G Chauke
        </footer>
      </section>
    </div>
  );
};

export default Contact;
