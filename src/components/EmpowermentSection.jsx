import React from "react";
import "./EmpowermentSection.css"
const EmpowermentSection = () => {
  return (
    <div className="empowerment-container">
      <h2 className="empowerment-title">Empowering Change, One Step at a Time</h2>
      <p className="empowerment-text">
        Together, we can turn obstacles into opportunities and create a world where everyone has the chance to thrive.
      </p>
      <div className="empowerment-buttons">
        <button className="advocate-btn">Become an Advocate</button>
        <button className="register-btn">Register for the Walk</button>
      </div>
    </div>
  );
};

export default EmpowermentSection;
