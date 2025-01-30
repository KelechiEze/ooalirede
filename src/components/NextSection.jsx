import React from "react";
import "./NextSection.css";
import logoImage from "../assets/out-on-a-limb-logo.png"; // Replace with actual image file

const NextSection = () => {
  return (
    <div className="next-section">
      {/* Top Section */}
      <div className="top-content">
        <div className="image-container">
          <img src={logoImage} alt="Out on a Limb 2025" />
        </div>
        <div className="text-container">
          <h1>Changing Lives and Rewriting Stories</h1>
          <p>
            Bringing hope, joy, and purposeful living to all children living with 
            limb loss and their families.
          </p>
        </div>
      </div>

      {/* YouTube Video Section */}
      <div className="video-section">
        <div className="video-container">
          <iframe 
            width="100%" 
            height="215" 
            src="https://www.youtube.com/embed/geQVIqMqbCE" 
            title="Out On A Limb 2016"
            frameBorder="0"
            allowFullScreen
          ></iframe>
          <p>Out On A Limb: A brief snippet by The Irede Foundation.</p>
        </div>

        <div className="video-container">
          <iframe 
            width="100%" 
            height="215" 
            src="https://www.youtube.com/embed/KRhVYQvhAVc" 
            title="Out On A Limb 2017"
            frameBorder="0"
            allowFullScreen
          ></iframe>
          <p>Out On A Limb by The Irede Foundation. Raising awareness and support for limb loss.</p>
        </div>

        <div className="video-container">
          <iframe 
            width="100%" 
            height="215" 
            src="https://www.youtube.com/embed/GU_jlSrIrhE" 
            title="Out On A Limb 2016 Short Clip"
            frameBorder="0"
            allowFullScreen
          ></iframe>
          <p>Another short clip on Out On A Limb by The Irede Foundation.</p>
        </div>
      </div>
    </div>
  );
};

export default NextSection;
