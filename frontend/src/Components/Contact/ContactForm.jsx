import React, { useRef } from "react";
import "./ContactForm.css";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_e9gpd5u", "template_m90uzig", form.current, {
        publicKey: "LwLkoTVFtI2wt0kG3",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div
      className="contact-form"
      style={{ borderRadius: "8px", width: "100%" }}
    >
      <h4>Connect with me</h4>
      <form ref={form} onSubmit={sendEmail}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="user_name"
            placeholder="Enter your name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="user_email"
            placeholder="Enter your email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Enter your message"
          ></textarea>
        </div>
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
      <a href="mailto:aakash.sh858791@gmail.com" className="direct-email">
        Send me email directly
      </a>
    </div>
  );
};

export default ContactForm;
