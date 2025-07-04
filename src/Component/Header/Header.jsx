import React from 'react';
import './Header.css';
import mainImage from '../../assets/header image.jpg'
import codeImage1 from '../../assets/code1.png'
import codeImage2 from '../../assets/code2.png';

const Header = () => {
  return (
    <div className="header-container">
    
      <div className="header-content">
        <h1>Unlock the Potential of Flutter</h1>
        <p>Your Premier Partner for Cross-Platform App Excellence!</p>
        <button className="upgrade-btn">Upgrade Your Tech</button>
      </div>

  
      <div className="header-image">
        <img src={mainImage} alt="Main" />
      </div>


      <div className="header-card card-one">
        <img src={codeImage1} alt="Card 1" />
      </div>
      <div className="header-card card-two">
        <img src= {codeImage2} alt="Card 2" />
      </div>

    
      <div className="blur-circle green"></div>
      <div className="blur-circle blue"></div>
    </div>
  );
};

export default Header;
