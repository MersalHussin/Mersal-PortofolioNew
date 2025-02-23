import React from "react";
import { useTranslation } from "react-i18next";
import Marquee from "react-fast-marquee";
import "./css/Home.css";
import ServiceList from "../components/ServiceList";
import GallerySection from "../components/GallerySection";
import Statistics from "../components/Statistics";
import Testimonials from "../components/Testimonials";
import Certificates from "../components/Certificates";
import Footer from "../components/Footer";

function Home() {
  const { t } = useTranslation();

  return (
    <>
      <section className="home">
        <div className="home-container">
          <h2 className="welcome-text">{t("welcome")}</h2>
          <h1 className="name">{t("mersal")}</h1>
          <div className="buttons">
            <a href="#" className="fire-btn">{t("fireTheWorld")}</a>
            <a href="/cv.pdf" className="download-cv">
              {t("downloadCV")}
            </a>
          </div>
          <div className="social-icons">
            <a href="#"><img src="/assets/Photos/Social/Facebook.svg" alt="Facebook" /></a>
            <a href="#"><img src="/assets/Photos/Social/Linked-in.svg" alt="Linkedin" /></a>
            <a href="#"><img src="/assets/Photos/Social/Github.svg" alt="Github" /></a>
            <a href="#"><img src="/assets/Photos/Social/Behance.svg" alt="Behance" /></a>
          </div>
          <div className="bottom-icon">
            <a href="#about"><img src="/assets/Photos/scroll-down.svg" alt="ScrollDown" /></a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="container">
          <div className="about-content">
            <div className="image-container">
              <img src="/assets/Photos/Mersal-Pic.png" alt="Mersal" className="profile-img" />
            </div>
            <div className="text-container">
              <h2 className="about-title Title">{t("aboutMe")}</h2>
              <p className="about-text" dir="auto">{t("aboutText")}</p>
              <div className="about-me-btns">
                <a href="/cv.pdf" className="download-cv">{t("downloadCV")}</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* باقي الأقسام */}
      <section className="Services-section"> 
        <h1 className="Title">{t("services-t")}</h1>
        <ServiceList/>
      </section>

      <section className="gallery-section">
        <GallerySection />
      </section>

      <section className="statistics-section">
        <Statistics />
      </section>

      <section className="gallery-section">
        <h1 className="Title">{t("testimonials")}</h1>
        <Testimonials />
      </section>

      <section className="gallery-section">
        <h1 className="Title">{t("certificates")}</h1>
        <Certificates />
      </section>

      <section className="CTA-section">
        <div>
          <img src="/assets/Photos/fire.gif" alt="" />
          <h1>{t("ctaText")}</h1>
          <a className="fire-btn" href="#">{t("ctaButton")}</a>
        </div>
      </section>

      <section className="Trusted-by-section">
        <h1>{t("trustedBy")}</h1>
        <img src="/assets/Photos/Trusted-by.png" alt="" />
      </section>

      <Footer/>
    </>
  );
}

export default Home;
