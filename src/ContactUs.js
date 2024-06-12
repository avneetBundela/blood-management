import React from 'react';
import Navbar from './Navbar';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div>
      <Navbar />
      <div className="contact-us-container">
        <div className="contact-details">
          <h1>Contact Us</h1>
          <p>Name: Avneet Bundela</p>
          <p>Phone: 98268002768</p>
          <div className="social-media-links">
            <a href="https://www.facebook.com/avneetbundela" target="_blank" rel="noopener noreferrer">
              <img src="https://example.com/facebook_icon.png" alt="Facebook" />
            </a>
            <a href="https://twitter.com/avneetbundela" target="_blank" rel="noopener noreferrer">
              <img src="https://example.com/twitter_icon.png" alt="Twitter" />
            </a>
            <a href="https://www.instagram.com/avneetbundela" target="_blank" rel="noopener noreferrer">
              <img src="https://example.com/instagram_icon.png" alt="Instagram" />
            </a>
          </div>
        </div>
        {/* You can add a map or any additional contact information here */}
      </div>
    </div>
  );
};

export default ContactUs;
