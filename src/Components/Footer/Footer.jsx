import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2 className="logo">Hoomie</h2>
        <p className="tagline">Every spice has a story 🌶️✨</p>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#menu">Menu</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="socials">
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Hoomie. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
