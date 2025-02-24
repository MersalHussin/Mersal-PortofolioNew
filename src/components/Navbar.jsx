import React, { useState, useEffect } from "react";
import "./css/Navbar.css";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#"); // الرابط النشط افتراضيًا
  const { t, i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState(i18n.language || "en");

  // تعريف الروابط مع السكاشن المرتبطة بيها
  const sections = [
    { link: "#", id: "home" },
    { link: "#about-sec", id: "about" },
    { link: "#video", id: "services" },
    { link: "#courses", id: "gallery" },
    { link: "#testimonials", id: "testimonials" },
    { link: "#contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = "#"; // القيمة الافتراضية

      // لوب على السكاشن عشان نشوف أي واحد في الـ viewport
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          // لو السكشن في نطاق الرؤية (60% منه ظاهر)
          if (
            rect.top <= window.innerHeight * 0.4 &&
            rect.bottom >= window.innerHeight * 0.4
          ) {
            currentSection = section.link;
          }
        }
      });

      // تحديث الرابط النشط فقط لو لقينا سكشن جديد
      if (currentSection !== activeLink) {
        setActiveLink(currentSection);
      }
    };

    // إضافة مستمع للتمرير
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // تشغيل الفحص مرة واحدة عند التحميل

    // تنظيف المستمع لما الكومبوننت ينتهي
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeLink, sections]); // إضافة activeLink وsections كـ dependencies

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setMenuOpen(false);
  };

  const toggleLanguage = () => {
    const newLang = currentLang === "ar" ? "en" : "ar";
    i18n.changeLanguage(newLang);
    setCurrentLang(newLang);
  };

  return (
    <>
      <div className="nav-size"></div>
      <header className="navbar">
        <a href="#" className="logo">
          <img src="/assets/Photos/Logo Mersal Nav.svg" alt="Ausrah-Logo" />
        </a>
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
            <a href="#about" onClick={() => handleLinkClick("#about-sec")}>
              {t("About")}
            </a>
          </li>
          <li className={activeLink === "#video" ? "active" : ""}>
            <a href="#services" onClick={() => handleLinkClick("#video")}>
              {t("Services")}
            </a>
          </li>
          <li className={activeLink === "#courses" ? "active" : ""}>
            <a href="#gallery" onClick={() => handleLinkClick("#courses")}>
              {t("Portfolio")}
            </a>
          </li>
          <li className={activeLink === "#testimonials" ? "active" : ""}>
            <a
              href="#testimonials"
              onClick={() => handleLinkClick("#testimonials")}
            >
              {t("Testimonials")}
            </a>
          </li>
          <li className={activeLink === "#contact" ? "active" : ""}>
            <a href="#contact" onClick={() => handleLinkClick("#contact")}>
              {t("Contact")}
            </a>
          </li>
          <h3
            className="change-language menu"
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
          </h3>
        </ul>
        <h3
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
        </h3>
      </header>
    </>
  );
};

export default Navbar;