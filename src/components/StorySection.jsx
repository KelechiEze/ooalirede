import React from "react";
import "./StorySection.css";
import storyImage from "../assets/storyimage.png"; // Update with the correct image path

const StorySection = () => {
  return (
    <div className="smile-section">
    
       {/* Right Image */}
       <div className="smile-image">
        <img src={storyImage} alt="Out on a Limb Empowering Lives" />
      </div>

        {/* Left Text Content */}
      <div className="smile-text">
        <h3 className="smile-subtitle">WHO WE ARE</h3>
        <h1 className="smile-title">Our story is laced <br /> with hope</h1>
        <div className="underline"></div>
        <p className="smile-description">
        The IREDE Foundation is a Nigerian-based Non-profit organization focused on providing prosthetic limbs to child amputees free of charge. Since inception in 2012, we have provided over 500 limbs to child amputees across Nigeria. Our goal is to do even more
        </p>

        {/* Buttons */}
        <div className="smile-buttons">
          <button className="btn-advocate2">Become an Advocate</button>
          <button className="btn-register2">Register for the Walk</button>
        </div>
      </div>
    </div>
  );
};

export default StorySection;
