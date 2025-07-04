import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-left">
        <div className="footer-links">
          <a href="#">Events</a>
          <a href="#">Gen AI</a>
          <a href="#">Careers</a>
          <a href="#">Case Study</a>
          <a href="#">SME Talks</a>
        </div>
        <div className='footer-description'>
       <p>For any collaborative projects or enquiries feel free to connect with us.</p>
        <p className="website">vayuz.com</p>
        </div>
        <div className="footer-bottom-links">
          <a href="#">About</a>
          <a href="#">Insights</a>
          <a href="#">Community</a>
          <a href="#">Privacy & Policies</a>
        </div>
      </div>

      <div className="contact-form">
          <h2>Connect With Us</h2>
        <label>Full Name</label>
        <input type="text" placeholder="Your Name" />

        <label>Email</label>
        <input type="email" placeholder="Your Email" />

        <label>Phone Number</label>
        <input type="text" placeholder="Your Phone" />

        <button>Submit</button>
      </div>
    </div>
  );
};

export default Footer;
