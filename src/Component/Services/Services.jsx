import React from "react";
import "./Services.css";
import { FiPlus, FiMinus } from "react-icons/fi";
import imageOne from "../../assets/image1.jpg";

const Services = () => {
  return (
    <div className="services-container">
      {/* Header Section */}
      <div className="services-header">
        <h2>Our Dynamic Services Suite!</h2>
        <p className="sub-title">Embrace Innovation: Let’s Create Together!</p>
        <p className="services-description">
          Step into innovation! Explore our range of services and let's create
          something extraordinary together. Your vision, our expertise. Let's
          begin!
        </p>
      </div>

      <div className="services-content-container">

      {/* Service Item with Description */}
     
        <div className="services-content">

          
          <div className="service-main">
            <div className="service-header">
              <h3>Flutter App Development</h3>
              <FiMinus className="service-icon" />
            </div>
            <p className="service-main-description">
              Unlock endless possibilities with Flutter App Development. Build
              beautiful, high-performance applications for any platform - faster
              and easier than ever before. Ready to revolutionize your app
              experience? Let's get started today!
            </p>
          </div>


          {/* Service List */}
          <div className="service-list">
            <div className="service-item">
              <h4>UI/UX Design</h4>
              <FiPlus className="service-icon" />
            </div>

            <div className="service-item">
              <h4>Customization & Integration</h4>
              <FiPlus className="service-icon" />
            </div>

            <div className="service-item">
              <h4>Testing & Quality Assurance</h4>
              <FiPlus className="service-icon" />
            </div>

            <div className="service-item">
              <h4>Maintenance & Support</h4>
              <FiPlus className="service-icon" />
            </div>

            <div className="service-item">
              <h4>Consulting & Training</h4>
              <FiPlus className="service-icon" />
            </div>

            <div className="service-item">
              <h4>Migration & Upgrades</h4>
              <FiPlus className="service-icon" />
            </div>
          </div>
        
      </div>
      {/* Right Side Image */}
      <div className="service-image">
        <img src={imageOne} alt="Service" />
      </div>
      </div>
    </div>
  );
};

export default Services;
