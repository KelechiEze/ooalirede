import React from "react";
import "./Sponsors.css"; // Import the CSS file
import iredeLogo from "../assets/iredelogo.png"; // Import the image

const Sponsors = () => {
  const logos = new Array(16).fill(iredeLogo); // Use the imported image

  return (
    <div className="sponsors-container">
      <p className="sponsors-title">OUR SPONSORS</p>
      <h2 className="sponsors-heading">Supported & Trusted By Top Companies</h2>
      <div className="logos-grid">
        {logos.map((logo, index) => (
          <div key={index} className="logo-box">
            <img src={logo} alt="Sponsor Logo" className="sponsor-logo" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
