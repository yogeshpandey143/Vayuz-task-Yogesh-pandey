import React from 'react';
import './About.css';
import { FiArrowUpRight } from 'react-icons/fi'; // For the arrow icon

const About = () => {
  return (
    <div className="about-container">
    
      <div className="about-title-group">
        <h2>Flutter's Dawn</h2>
        <p className="history-title">History of Flutter</p>
      </div>

     
      <p className="about-description">
        Uncover the fascinating story of Flutter in 'Flutter's Dawn: History of Flutter.' From humble origins to global acclaim, delve into its captivating narrative. Explore milestones, triumphs, and challenges. Whether tech enthusiast or curious mind, join us on this captivating journey! <span className="highlight">Click to begin!</span>
      </p>

  
      <button className="begin-btn">
        Begin
        <FiArrowUpRight className="begin-icon" />
      </button>
    </div>
  );
};

export default About;
