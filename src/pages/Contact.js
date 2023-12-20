import React from 'react';
import PizzaLeft from "../assets/Capture.jpg";
import "../styles/contact.css"

function Contact() {


  const handleFakeSubmit = (e) => {
    e.preventDefault();
    // Add your logic for simulating the form submission
    console.log('Form submitted (simulated)');
  };


  return (
    <div className="contact">
      <div className="leftSide" style={{ backgroundImage: `url(${PizzaLeft})`}}> </div>
      <div className="rightSide">
        
        <div className="top">
          <h1> Order Now At  </h1>
          <p className="numbers">604-123-4567 </p>
          <p>or </p>
          <p>order online</p>
        </div>
       
        
        <form id="contact-form" method="POST" onSubmit={handleFakeSubmit}>

        
            <label htmlFor="name">Full Name</label>
            <input name="name" placeholder="Enter full name..." type="text" />

            
            <label htmlFor="email">Email</label>
            <input name="email" placeholder="Enter email name..." type="text" />
            <label htmlFor="message">Order</label>
            <textarea rows="6" placeholder="Enter your order..." name="message" required>

            </textarea>
            <button type="submit" className="submitButton"> Send message </button>
        </form>

      </div>
     
    </div>
  )
}

export default Contact
