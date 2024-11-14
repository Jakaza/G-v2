import React, { useRef, useState } from "react";
import "./ContactForm.css";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY; 
const AUTO_REPLY_TEMPLATE_ID = import.meta.env.VITE_AUTO_REPLY_TEMPLATE_ID; 

const ContactForm = () => {
  const form = useRef();

  const [errorMessage, setErrorMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});
  const [loading, setLoading] = useState(false); 
  const [isSuccess, setIsSuccess] = useState(false); 

  const validateForm = () => {
    const name = form.current.from_name.value.trim();
    const email = form.current.user_email.value.trim();
    const message = form.current.message.value.trim();

    const errors = {};

    if (!name) errors.name = "Name is required";
    if (!email) errors.email = "Email is required";
    if (!message) errors.message = "Message is required";

    setFieldErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleInputChange = () => {
    setErrorMessage("");  
    setIsSuccess(false);
    setFieldErrors((prevErrors) => {
      const updatedErrors = { ...prevErrors };
      Object.keys(updatedErrors).forEach((key) => {
        updatedErrors[key] = "";  // Clear individual field errors as the user types
      });
      return updatedErrors;
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();


    if (!validateForm()) {
      setErrorMessage("Please fill out all required fields.");
      return;
    }

    setErrorMessage("");
    setLoading(true);


    const name = form.current.from_name.value.trim();
    const email = form.current.user_email.value.trim();
    const message = form.current.message.value.trim();

    if (!name || !email || !message) {
      toast.error("Please fill out all fields.");
      setLoading(false);
      return;
    }

    emailjs
      .sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        form.current,
        PUBLIC_KEY
      )
      .then(
        () => {
          setIsSuccess(true); 
          setLoading(false);
          
          emailjs.send(
            SERVICE_ID, // Service ID for the auto-reply
            AUTO_REPLY_TEMPLATE_ID, // Auto-reply template ID from EmailJS
            {
              from_name: name,
              user_email: email,
              message: message,
            },
            PUBLIC_KEY
          ).then(() => {
            console.log("Auto-reply sent successfully");
          }).catch((error) => {
            console.error("Auto-reply failed", error);
          });

          form.current.reset(); 
        },
        (error) => {
          console.error("FAILED...", error.text);
          toast.error("Oops! Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="contact-form" style={{ borderRadius: "8px", width: "100%" }}>
      <h4>Connect with me</h4>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      <form ref={form} onSubmit={sendEmail}>
        <input type="hidden" name="to_name" value="Themba G Chauke" />
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="from_name"
            placeholder="Enter your name"
            className={fieldErrors.name ? "error" : ""}
            onChange={handleInputChange} // Reset errors when user types
          />
          {fieldErrors.name && <div className="error-text">{fieldErrors.name}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="user_email"
            placeholder="Enter your email"
            className={fieldErrors.email ? "error" : ""}
            onChange={handleInputChange} // Reset errors when user types
          />
          {fieldErrors.email && <div className="error-text">{fieldErrors.email}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Enter your message"
            className={fieldErrors.message ? "error" : ""}
            onChange={handleInputChange} // Reset errors when user types
          ></textarea>
          {fieldErrors.message && <div className="error-text">{fieldErrors.message}</div>}
        </div>

        {/* Show loading spinner when sending email */}
        <button type="submit" className="btn" disabled={loading}>
          {loading ? (
            <span className="">⏳ Sending... please wait</span> // Spinner for loading state
          ) : (
            "Submit"
          )}
        </button>
      </form>

      {/* Show success message when email is successfully sent */}
      {isSuccess && <div className="success-message">Thank you! Your message has been sent successfully.</div>}

      <a href="mailto:aakash.sh858791@gmail.com" className="direct-email">
        Send me email directly
      </a>
      
      <ToastContainer />
    </div>
  );
};

export default ContactForm;
