import React from 'react';
import Navbar from './Navbar';
// import aboutUsImage from './about_us_image.jpg'; // Replace with your actual image import

import './About.css';

const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <div className="about-us-container">
        <div className="about-us-content">
          <h1>About Us</h1>
          <p>
            We are an application that directly connects you with individuals who are in need of blood donation and may not be readily available in your community.
          </p>
          <p>Our story:</p>
          <p>
          "We are dedicated to revolutionizing blood donation and distribution through cutting-edge technology. Our platform connects donors with patients in need, ensuring timely access to life-saving blood products."          </p>
     <p>"At BMS, we aim to bridge the gap between blood donors and recipients by providing a seamless and efficient platform. Our mission is to save lives by making blood donation accessible, reliable, and responsive to the urgent needs of patients worldwide."</p>   </div>
        <div className="about-us-image">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRurjb8OAe64uvJYoC0zTw4vq0eOxN-knqiGA&s" alt="About Us" className='image'/>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
