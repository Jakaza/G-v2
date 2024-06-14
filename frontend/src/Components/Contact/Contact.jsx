import React from "react";
import { FaStackOverflow, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./contact.css";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const Contact = () => {
  return (
    <div className="inner">
      <section className="contact">
        <div className="heading">
          <h1>Contact</h1>
          <p>
            If you want to know more about me or my work, or if you would just
            like to say hello, send me a message. I'd love to hear from you.
          </p>
        </div>

        <div className="contact-container">
          <ContactForm />
          <ContactInfo />
        </div>
        <footer>
          Made with <span className="heart">❤️</span> by Themba G Chauke
        </footer>
      </section>
    </div>
  );
};

export default Contact;
