import React from 'react';
import './Footer.css';
import Contact from '../Contact/Contact';

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
          <Contact />
      </div>
    </div>
  );
};

export default Footer;
