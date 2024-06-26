import React from "react";
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <div className="contact-form" style={{ borderRadius: "8px" }}>
      <h4>Connect with me</h4>
      {/* <p>
        If you want to know more about me or my work, or if you would just like
        to say hello, send me a message. I'd love to hear from you.
      </p> */}
      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Enter your name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" placeholder="Enter your message"></textarea>
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
