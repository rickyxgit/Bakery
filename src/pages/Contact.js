import React, { useState, useEffect } from "react";
import PizzaLeft from "../assets/Capture.jpg";
import "../styles/contact.css";

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmission = (e) => {
    e.preventDefault();
    setFormData({
      name: "",
      email: "",
      message: "",
    });

    // Display success message
    setSubmitSuccess(true);

    // Reset success message after delay 
    setTimeout(() => {
      setSubmitSuccess(false);
    }, 7000);
  };

  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${PizzaLeft})` }}
      >
        {" "}
      </div>
      <div className="rightSide">
        <div className="top">
          <h1> Order Now At </h1>
          <p className="numbers">604-123-4567 </p>
          <p>or </p>
          <p>order online</p>
        </div>

        <form id="contact-form" method="POST" onSubmit={handleSubmission}>
          <label htmlFor="name">Full Name</label>
          <input
            name="name"
            placeholder="Enter full name..."
            type="text"
            value={formData.name}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            name="email"
            placeholder="Enter email name..."
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="message">Order</label>
          <textarea
            rows="6"
            placeholder="Enter your order..."
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            className="order"
          ></textarea>
          <button type="submit" className="submitButton">
            {" "}
            Send Order{" "}
          </button>
        </form>

        {submitSuccess && (
          <div className="successMessage">
            <p className="submissionMessage">Order submitted successfully!</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Contact;
