import React from 'react';
import Navbar from './Navbar';
// import aboutUsImage from './about_us_image.jpg'; // Use the name of your image here

import './About.css';
const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <div className="about-us-container">
        <div className="about-us-content">
          <h1>About Us</h1>
          <p>We are an application that directly connects you with individuals who are in need of blood donation and may not be readily available in your community.</p>
          <p>Our story here will intrigue you:</p>
          <p>"My uncle urgently needed a blood transfusion, but no blood was available at the local blood bank. However, he had diabetes and had four units of blood in his body. Since we couldn't call everyone in the middle of the night, we did what we could. Not everyone checks their phones at midnight; they mostly do so in the morning. So with this application, a person can directly call the interested individual who has registered, making it easier due to having all the information like city address available."</p>
        </div>
        <div className="about-us-image">
          <img src="" alt="About Us" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
