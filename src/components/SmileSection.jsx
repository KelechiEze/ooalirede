import React from "react";
import "./SmileSection.css";
import smileImage from "../assets/smile-section.png"; // Update with the correct image path

const SmileSection = () => {
  return (
    <div className="smile-section">
      {/* Left Text Content */}
      <div className="smile-text">
        <h3 className="smile-subtitle">ABOUT OOAL</h3>
        <h1 className="smile-title">Out on a Limb: <br /> Empowering Lives Together</h1>
        <div className="underline"></div>
        <p className="smile-description">
          In 2013, we launched the global Out-On-A-Limb campaign to raise awareness 
          about the trauma of being a child amputee or caregiver. This annual 2-KM 
          walk advocates for the rights of child amputees to equal treatments as 
          every other child while equally raising funds for their annual limb expenses. 
          You too can lend your voice. We invite you to walk with us.
        </p>

        {/* Buttons */}
        <div className="smile-buttons">
          <button className="btn-advocate">Become an Advocate</button>
          <button className="btn-register">Register for the Walk</button>
        </div>
      </div>

      {/* Right Image */}
      <div className="smile-image">
        <img src={smileImage} alt="Out on a Limb Empowering Lives" />
      </div>
    </div>
  );
};

export default SmileSection;
