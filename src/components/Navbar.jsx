import React, { useState } from "react";
import "./css/Navbar.css";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#"); // حالة لتخزين الرابط النشط
  const { t, i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState(i18n.language || "en"); // تحديد اللغة الحالية

  const handleLinkClick = (link) => {
    setActiveLink(link); // تعيين الرابط النشط
    setMenuOpen(false); // غلق المينو عند الضغط على أي رابط
  };

  const toggleLanguage = () => {
    const newLang = currentLang === "ar" ? "en" : "ar"; // تبديل اللغة
    i18n.changeLanguage(newLang);
    setCurrentLang(newLang);
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
        <ul dir="auto" className={`nav-list ${menuOpen ? "active" : ""}`}>
          <li className={activeLink === "#" ? "active" : ""}>
            <a href="#" onClick={() => handleLinkClick("#")}>
              {t("Home")}
            </a>
          </li>
          <li className={activeLink === "#about-sec" ? "active" : ""}>
            <a href="#about-sec" onClick={() => handleLinkClick("#about-sec")}>
              {t("About")}
            </a>
          </li>
          <li className={activeLink === "#video" ? "active" : ""}>
            <a href="#video" onClick={() => handleLinkClick("#video")}>
              {t("Services")}
            </a>
          </li>
          <li className={activeLink === "#courses" ? "active" : ""}>
            <a href="#courses" onClick={() => handleLinkClick("#courses")}>
              {t("Portfolio")}
            </a>
          </li>
          <li className={activeLink === "#FAQ" ? "active" : ""}>
            <a href="#FAQ" onClick={() => handleLinkClick("#FAQ")}>
              {t("Testimonials")}
            </a>
          </li>
          <li className={activeLink === "#FAQ" ? "active" : ""}>
            <a href="#FAQ" onClick={() => handleLinkClick("#FAQ")}>
              {t("Contact")}
            </a>
          </li>
        </ul>
        <a
          className="change-language"
          onClick={toggleLanguage}
          style={{ color: "#071952", cursor: "pointer" }}
        >
          {currentLang === "ar" ? "الإنجليزية" : "Arabic"}
          <lord-icon
            src="https://cdn.lordicon.com/hmjvwxlf.json"
            trigger="loop"
            state="loop-world"
            colors="primary:#3fd357"
            style={{ width: "30px", height: "30px" }}
          />
        </a>
      </header>
    </>
  );
};

export default Navbar;
