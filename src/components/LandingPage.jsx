import React from "react";
import "./LandingPage.css";
import landingImage from "../assets/governorimage.png"; // Replace with actual image file

const LandingPage = () => {
  return (
    <div className="landing-page">

      {/* Landing Section */}
      <section className="landing-section">
        {/* Left Container */}
        <div className="text-containerz">
          <h2 className="amigos">Full Access,<br /> No Cap.</h2>
          <p className="friends"> 
            Join us for a life-changing walk across xyz locations as we
            champion limitless possibilities for people with disabilities.
            Together, we're breaking barriers, inspiring hope, and driving the
            conversation on full access and inclusivity for all. Your steps make
            a difference—because access knows no limits and inclusion has no cap.
          </p>
          <div className="btn-group">
            <button className="advocate-btn1">Become an Advocate</button>
            <button className="register-btn1">Register for the Walk</button>
          </div>
        </div>

        {/* Right Container */}
        <div className="smile-image1">
          <img src={landingImage} alt="Walk for inclusivity" />
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
