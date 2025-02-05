import React, { useState, useEffect } from "react";
import "./Header.css";
import logo from "../assets/iredelogo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest(".nav-links") && !event.target.closest(".hamburger")) {
        setIsOpen(false);
        document.body.classList.remove("menu-open");
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen]);

  // Handle opening and closing menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.classList.add("menu-open"); // Disable scrolling
    } else {
      document.body.classList.remove("menu-open");
    }
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="The IREDE Foundation" />
      </div>

      <button className="hamburger" onClick={toggleMenu}>☰</button>

      <nav className={`nav-links ${isOpen ? "open" : ""}`}>
        <button className="close-menu" onClick={toggleMenu}>✖</button>
        <a href="/">Home</a>
        <a href="">About</a>
        <a href="">Sponsors</a>
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
