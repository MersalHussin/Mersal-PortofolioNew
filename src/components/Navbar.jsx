import React, { useState } from "react";
import "./css/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#"); // حالة لتخزين الرابط النشط

  const handleLinkClick = (link) => {
    setActiveLink(link); // تعيين الرابط النشط
    setMenuOpen(false); // غلق المينو عند الضغط على أي رابط
  };

  return (
    <>
      <div className="nav-size"></div>
      <header className="navbar">
        <div className="logo">
          <img src="/assets/Photos/Logo Mersal Nav.svg" alt="Ausrah-Logo" />
        </div>
        <div
          className={`menu-toggle ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul className={`nav-list ${menuOpen ? "active" : ""}`}>
          <li className={activeLink === "#" ? "active" : ""}>
            <a href="#" onClick={() => handleLinkClick("#")}>
              Home
            </a>
          </li>
          <li className={activeLink === "#about-sec" ? "active" : ""}>
            <a href="#about-sec" onClick={() => handleLinkClick("#about-sec")}>
              About
            </a>
          </li>
          <li className={activeLink === "#video" ? "active" : ""}>
            <a href="#video" onClick={() => handleLinkClick("#video")}>
              Services
            </a>
          </li>
          <li className={activeLink === "#courses" ? "active" : ""}>
            <a href="#courses" onClick={() => handleLinkClick("#courses")}>
              Portfolio
            </a>
          </li>
          <li className={activeLink === "#FAQ" ? "active" : ""}>
            <a href="#FAQ" onClick={() => handleLinkClick("#FAQ")}>
              Testmonails
            </a>
          </li>
          <li className={activeLink === "#FAQ" ? "active" : ""}>
            <a href="#FAQ" onClick={() => handleLinkClick("#FAQ")}>
              Contact
            </a>
          </li>
        </ul>
        <a
          className="contact-us"
          href="tel:+201040031584"
          onClick={() => handleLinkClick("#contact")}
        >
          تواصل معنا <i className="fa-solid fa-phone-volume"></i>
        </a>
      </header>
    </>
  );
};

export default Navbar;
