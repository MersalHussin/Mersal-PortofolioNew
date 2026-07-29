import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";

interface SectionDef {
  link: string;
  id: string;
}

interface NavbarProps {
  minimal?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ minimal = false }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#");
  const [scrolled, setScrolled] = useState(false);
  const { t, i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState(i18n.language || "en");
  const location = useLocation();

  const sections: SectionDef[] = [
    { link: "#", id: "home" },
    { link: "#about-sec", id: "about" },
    { link: "#video", id: "services" },
    { link: "#courses", id: "gallery" },
    { link: "#testimonials", id: "testimonials" },
    { link: "#contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      let currentSection = "#";
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (
            rect.top <= window.innerHeight * 0.4 &&
            rect.bottom >= window.innerHeight * 0.4
          ) {
            currentSection = section.link;
          }
        }
      });
      if (currentSection !== activeLink) {
        setActiveLink(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeLink]);

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
    setMenuOpen(false);
  };

  useEffect(() => {
    document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";
  }, [currentLang]);

  const toggleLanguage = () => {
    const newLang = currentLang === "ar" ? "en" : "ar";
    i18n.changeLanguage(newLang);
    setCurrentLang(newLang);
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
  };

  return (
    <>
      {/* <div className="h-20" /> */}
      <header className={`fixed top-0 w-full h-[90px] text-white z-[1000] flex justify-between items-center px-[100px] max-[700px]:px-10 transition-all duration-300 ${scrolled || minimal ? 'bg-main/95 backdrop-blur-md shadow-[0_2px_15px_rgba(0,0,0,0.3)]' : 'bg-transparent'}`}>
        <Link to="/" className="logo">
          <img
            src="/assets/Photos/Mersal-wide-logo.svg"
            alt="Mersal-Logo"
            className="w-[120px] mt-[5px]"
          />
        </Link>

        {!minimal && (
          <>
            {/* Hamburger Menu */}
            <div
              className={`hidden max-[1020px]:flex flex-col cursor-pointer relative z-[1000] transition-all duration-300 ${
                menuOpen ? "active" : ""
              }`}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className={`bg-accent h-[3px] w-[25px] my-[3px] transition-all duration-300 ${menuOpen ? "!bg-accent" : ""}`} />
              <span className={`bg-accent h-[3px] w-[25px] my-[3px] transition-all duration-300 ${menuOpen ? "!bg-accent" : ""}`} />
              <span className={`bg-accent h-[3px] w-[25px] my-[3px] transition-all duration-300 ${menuOpen ? "!bg-accent" : ""}`} />
            </div>

            {/* Nav Links */}
            <ul
              dir="auto"
              className={`
                flex transition-all duration-500
                max-[1020px]:absolute max-[1020px]:top-20 max-[1020px]:right-0 max-[1020px]:flex-col max-[1020px]:w-full max-[1020px]:items-start max-[1020px]:px-10 max-[1020px]:py-5 max-[1020px]:rounded-b-[20px]
                ${
                  menuOpen
                    ? "max-[1020px]:translate-y-0 max-[1020px]:opacity-100"
                    : "max-[1020px]:-translate-y-full max-[1020px]:opacity-0"
                }
              `}
              style={{
                background:
                  menuOpen
                    ? "linear-gradient(0deg, #071952, #00134E)"
                    : undefined,
              }}
            >
          <li
            className={`mx-3 transition-all duration-300 max-[1020px]:my-4 ${
              activeLink === "#" ? "scale-[1.1]" : ""
            }`}
          >
            <a
              href="#"
              onClick={() => handleLinkClick("#")}
              className={`text-white text-base transition-colors duration-300 hover:text-accent max-[1020px]:!text-white ${
                activeLink === "#" ? "!text-accent font-extrabold" : ""
              }`}
            >
              {t("Home")}
            </a>
          </li>

          <li
            className={`mx-3 transition-all duration-300 max-[1020px]:my-4 ${
              activeLink === "#video" ? "scale-[1.1]" : ""
            }`}
          >
            <a
              href="#services"
              onClick={() => handleLinkClick("#video")}
              className={`text-white text-base transition-colors duration-300 hover:text-accent max-[1020px]:!text-white ${
                activeLink === "#video" ? "!text-accent font-extrabold" : ""
              }`}
            >
              {t("Services")}
            </a>
          </li>
          <li
            className={`mx-3 transition-all duration-300 max-[1020px]:my-4 ${
              activeLink === "#courses" ? "scale-[1.1]" : ""
            }`}
          >
            <a
              href="#gallery"
              onClick={() => handleLinkClick("#courses")}
              className={`text-white text-base transition-colors duration-300 hover:text-accent max-[1020px]:!text-white ${
                activeLink === "#courses" ? "!text-accent font-extrabold" : ""
              }`}
            >
              {t("Portfolio")}
            </a>
          </li>
          <li
            className={`mx-3 transition-all duration-300 max-[1020px]:my-4 ${
              activeLink === "#testimonials" ? "scale-[1.1]" : ""
            }`}
          >
            <a
              href="#testimonials"
              onClick={() => handleLinkClick("#testimonials")}
              className={`text-white text-base transition-colors duration-300 hover:text-accent max-[1020px]:!text-white ${
                activeLink === "#testimonials"
                  ? "!text-accent font-extrabold"
                  : ""
              }`}
            >
              {t("Testimonials")}
            </a>
          </li>
    
          <li className="mx-3 transition-all duration-300 max-[1020px]:my-4">
            <a
              href="#workshops"
              onClick={() => handleLinkClick("#workshops")}
              className={`text-white text-base transition-colors duration-300 hover:text-accent max-[1020px]:!text-white ${
                activeLink === "#workshops"
                  ? "!text-accent font-extrabold"
                  : ""
              }`}
            >
              {t("Workshops")}
            </a>
          </li>
          <li className="mx-3 transition-all duration-300 max-[1020px]:my-4">
            <Link
              to="/courses"
              onClick={() => setMenuOpen(false)}
              className={`text-white text-base transition-colors duration-300 hover:text-accent max-[1020px]:!text-white ${
                location.pathname === "/courses" ? "!text-accent font-extrabold" : ""
              }`}
            >
              {t("Courses")}
            </Link>
          </li>

          {/* Language Toggle (Inside menu for mobile) */}
          <h3
            className="hidden max-[1020px]:!flex text-main text-base items-center gap-[10px] cursor-pointer transition-all duration-300 hover:!text-accent"
            onClick={toggleLanguage}
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
          </>
        )}

        {/* Language Toggle (Desktop / always visible) */}
        <h3
          className={`text-white text-base flex justify-center items-center gap-[10px] cursor-pointer transition-all duration-300 hover:!text-accent ${!minimal ? 'max-[1020px]:!hidden' : ''}`}
          onClick={toggleLanguage}
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
