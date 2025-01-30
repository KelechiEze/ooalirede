import React from "react";
import "./Footer.css";
import footerLogo from "../assets/footerooal.png";
import { FaHeart, FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Donations Section */}
        <div className="footer-donation">
          <h3>Your Donations can <br /> Change their Daily <br /> Life Style</h3>
          <button className="donate-btn">
            <FaHeart className="heart-icon" />
            Donate Now
          </button>
          <img src={footerLogo} alt="Silver Transparency 2024" className="footer-logo" />
        </div>

        {/* Organization Links */}
        <div className="footer-links">
          <h4>Organization</h4>
          <ul>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Inclusive Education</li>
            <li>Our Champions</li>
          </ul>
        </div>

        {/* Additional Links */}
        <div className="footer-links">
          <h4>Links</h4>
          <ul>
            <li>Media</li>
            <li>Policies</li>
            <li>F.A.Qs</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-contact">
          <h4>Contact</h4>
          <ul>
            <li><FaEnvelope className="contact-icon" /> info@theiredefoundation.org</li>
            <li><FaPhoneAlt className="contact-icon" /> USA Phone: +1 (817) 703-9953</li>
            <li><FaPhoneAlt className="contact-icon" /> Nigeria Phone: +2347087109596</li>
            <li><FaMapMarkerAlt className="contact-icon" /> USA Address: 5A Gwynn Mills Court, Owings Mills, MD, 21117</li>
            <li><FaMapMarkerAlt className="contact-icon" /> Nigeria Address: 15, Ramat Crescent, Ogudu GRA, Lagos, Nigeria.</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
