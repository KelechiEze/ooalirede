import React from "react";
import "./LandingPage.css";
import landingImage from "../assets/right-image.png"; // Replace with actual image file

const LandingPage = () => {
  return (
    <div className="landing-page">

      {/* Landing Section */}
      <section className="landing-section">
        {/* Left Container */}
        <div className="text-container">
          <h2>Full Access,<br /> No Cap.</h2>
          <p>
            Join us for a life-changing walk across xyz locations as we
            champion limitless possibilities for people with disabilities.
            Together, we're breaking barriers, inspiring hope, and driving the
            conversation on full access and inclusivity for all. Your steps make
            a difference—because access knows no limits and inclusion has no cap.
          </p>
          <div className="btn-group">
            <button className="advocate-btn">Become an Advocate</button>
            <button className="register-btn">Register for the Walk</button>
          </div>
        </div>

        {/* Right Container */}
        <div className="smile-image">
          <img src={landingImage} alt="Walk for inclusivity" />
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
