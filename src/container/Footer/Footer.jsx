import React from "react";

import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import { FooterOverlay, Newsletter } from "../../components";
import { images } from "../../constants";
import "./Footer.css";

const Footer = () => (
  <div className="app__footer section__padding">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">Tirunelveli, Tamil Nadu, India</p>
        <p className="p__opensans">+91 98765 43210</p>
        <p className="p__opensans">+91 98765 43210</p>
      </div>
      <div className="app__footer-links_logo">
        <h1 className="headtext__cormorant">G-Bistro</h1>
        <p className="p__opensans">
          "The best way to find yourself is to lose yourself in the service of
          others
        </p>
        <img src={images.spoon} alt="spoon" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiInstagram />
          <FiTwitter />
        </div>
      </div>
      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">10 Am - 2 Pm</p>
        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans">9 Am - 3 Pm</p>
      </div>
    </div>
    <div className="footer__copyright">
      <p className="p__opensans">2022 G-Bistro. All Rights Reserved</p>
    </div>
  </div>
);

export default Footer;
