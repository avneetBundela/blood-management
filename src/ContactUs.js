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
              <img src="https://toppng.com/uploads/preview/facebook-logo-png-red-and-white-11536002405qxmc3sdpuo.png" alt="Facebook" />
            </a>
            <a href="https://twitter.com/avneetbundela" target="_blank" rel="noopener noreferrer">
              <img src="https://static01.nyt.com/images/2014/08/10/magazine/10wmt/10wmt-jumbo-v4.jpg?quality=75&auto=webp" alt="Twitter" />
            </a>
            <a href="https://www.instagram.com/avneetbundela" target="_blank" rel="noopener noreferrer">
              <img src="https://img.freepik.com/premium-vector/instagram-icon-vector_511451-42.jpg" alt="Instagram" />
            </a>
          </div>
        </div>
        {/* You can add a map or any additional contact information here */}
      </div>
    </div>
  );
};

export default ContactUs;
