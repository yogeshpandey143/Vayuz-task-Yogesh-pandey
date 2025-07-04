import React from 'react';
import './Sidebar.css';
import logoImage from '../../assets/vayuz logo.png';
import cardImage from '../../assets/image2.jpg';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div>
        <img className='logo' src={logoImage} alt="logo" />
        <button className="contact-btn">Contact Us</button>
        <nav className="sidebar-links">
          <a href="#">App Development</a>
          <a href="#">Challenges</a>
          <a href="#">Hire Developer</a>
          <a href="#">Community</a>
        </nav>
      </div>

      <div className="card">
        <div className="card-content">
          <img src={cardImage} alt="Card" className="card-image" />
          <p className="card-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, iure.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
