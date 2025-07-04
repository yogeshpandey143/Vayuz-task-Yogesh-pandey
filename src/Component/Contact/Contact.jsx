import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-form">
      <h3>Connect With Us</h3>
      <form>
        <label htmlFor="name">Full Name</label>
        <input type="text"  required />
        <label htmlFor="email">Email</label>
        <input type="email"  required />
        <label htmlFor="phone">Phone Number</label>
        <input type="text" required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;


