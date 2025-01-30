import React from "react";
import "./Header.css";
import logo from "../assets/iredelogo.png"; // Replace with actual logo file

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="The IREDE Foundation" />
      </div>
      <nav className="nav-links">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Sponsors</a>
        <button className="donate-btn1">
          <div className="text-wrapper">
            <span className="text">Donate Now</span>
            <span className="text">Donate Now</span>
          </div>
        </button>
      </nav>
    </header>
  );
};

export default Header;
