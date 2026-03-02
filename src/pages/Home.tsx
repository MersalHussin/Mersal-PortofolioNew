import React from "react";
import { useTranslation } from "react-i18next";
import Marquee from "react-fast-marquee";
import ServiceList from "../components/ServiceList";
import GallerySection from "../components/GallerySection";
import Statistics from "../components/Statistics";
import Testimonials from "../components/Testimonials";
import Certificates from "../components/Certificates";
import Footer from "../components/Footer";

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* Hero Section */}
      <section
        className="min-h-[calc(100vh-90px)] flex items-center justify-center bg-cover bg-center bg-no-repeat text-center text-white"
        style={{
          backgroundImage:
            "linear-gradient(#07195200, #07195262), url('/assets/Photos/LandBG.webp')",
        }}
      >
        <div className="max-w-[600px]">
          <h2 className="text-xl mb-4 opacity-80">{t("welcome")}</h2>
          <h1 className="text-[150px] max-sm:text-[100px] font-black text-accent -my-[70px] max-sm:-my-[30px]">
            {t("mersal")}
          </h1>
          <div className="-mt-[10px] flex justify-center items-center relative right-[10px]" style={{ direction: "ltr" }}>
            <a href="#about" className="fire-btn">
              {t("fireTheWorld")}
            </a>
            <a
              href="/assets/Photos/Mesal CV.pdf"
              download
              className="text-white text-xl opacity-80 font-bold transition-all duration-300 hover:opacity-100"
            >
              {t("downloadCV")}
            </a>
          </div>
          <div className="relative top-[10px]">
            <a href="https://www.facebook.com/MHMersal" target="_blank" rel="noreferrer">
              <img src="/assets/Photos/Social/Facebook.svg" alt="Facebook" className="w-5 mx-[5px] inline opacity-80 transition-all duration-300 hover:opacity-100 hover:scale-110" />
            </a>
            <a href="https://www.linkedin.com/in/mmersal/" target="_blank" rel="noreferrer">
              <img src="/assets/Photos/Social/Linked-in.svg" alt="Linkedin" className="w-5 mx-[5px] inline opacity-80 transition-all duration-300 hover:opacity-100 hover:scale-110" />
            </a>
            <a href="https://github.com/MersalHussin" target="_blank" rel="noreferrer">
              <img src="/assets/Photos/Social/Github.svg" alt="Github" className="w-5 mx-[5px] inline opacity-80 transition-all duration-300 hover:opacity-100 hover:scale-110" />
            </a>
            <a href="https://www.behance.net/mmersal" target="_blank" rel="noreferrer">
              <img src="/assets/Photos/Social/Behance.svg" alt="Behance" className="w-5 mx-[5px] inline opacity-80 transition-all duration-300 hover:opacity-100 hover:scale-110" />
            </a>
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 bottom-[50px] animate-scrollDown">
            <a href="#about">
              <img src="/assets/Photos/scroll-down.svg" alt="ScrollDown" className="w-5 mb-5 opacity-80 hover:opacity-100" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-[60px] px-5 flex justify-center items-center" id="about">
        <div className="max-w-[1100px] w-full">
          <div className="flex items-center justify-between gap-10 max-md:flex-col max-md:text-center">
            <div className="flex-1 flex justify-center">
              <img src="/assets/Photos/Mersal-Pic.webp" alt="Mersal" className="max-w-full h-auto" />
            </div>
            <div className="flex-1 text-white text-left max-md:text-center">
              <h2 className="section-title">{t("aboutMe")}</h2>
              <p className="text-xl leading-relaxed opacity-90 text-start" dir="auto">
                {t("aboutText")}
              </p>
              <div className="pt-5 flex justify-center" style={{ direction: "ltr" }}>
                <a
                  href="/assets/Photos/Mesal CV.pdf"
                  download
                  className="text-accent text-xl font-bold transition-all duration-300 hover:opacity-100"
                >
                  {t("downloadCV")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Marquee */}
      <section className="w-full bg-main-dark py-5 border-y-[5px] border-accent">
        <Marquee speed={60} gradient={false}>
          <img src="/assets/Photos/apps/ai.webp" alt="Adobe Illustrator" className="w-20 2xl:w-[110px] h-auto mx-5 grayscale hover:grayscale-0 transition-all duration-300" />
          <img src="/assets/Photos/apps/ps.webp" alt="Adobe Photoshop" className="w-20 2xl:w-[110px] h-auto mx-5 grayscale hover:grayscale-0 transition-all duration-300" />
          <img src="/assets/Photos/apps/id.webp" alt="Adobe InDesign" className="w-20 2xl:w-[110px] h-auto mx-5 grayscale hover:grayscale-0 transition-all duration-300" />
          <img src="/assets/Photos/apps/ae.webp" alt="Adobe After Effects" className="w-20 2xl:w-[110px] h-auto mx-5 grayscale hover:grayscale-0 transition-all duration-300" />
          <img src="/assets/Photos/apps/pr.webp" alt="Adobe Premiere Pro" className="w-20 2xl:w-[110px] h-auto mx-5 grayscale hover:grayscale-0 transition-all duration-300" />
          <img src="/assets/Photos/apps/canva.webp" alt="Canva" className="w-20 2xl:w-[110px] h-auto mx-5 grayscale hover:grayscale-0 transition-all duration-300" />
          <img src="/assets/Photos/apps/miro.webp" alt="Miro" className="w-20 2xl:w-[110px] h-auto mx-5 grayscale hover:grayscale-0 transition-all duration-300" />
          <img src="/assets/Photos/apps/xd.webp" alt="Adobe XD" className="w-20 2xl:w-[110px] h-auto mx-5 grayscale hover:grayscale-0 transition-all duration-300" />
          <img src="/assets/Photos/apps/figma.webp" alt="Figma" className="w-[60px] 2xl:w-[110px] h-auto mx-5 grayscale hover:grayscale-0 transition-all duration-300" />
          <img src="/assets/Photos/apps/html.webp" alt="HTML" className="w-20 2xl:w-[110px] h-auto mx-5 grayscale hover:grayscale-0 transition-all duration-300" />
          <img src="/assets/Photos/apps/css.webp" alt="CSS" className="w-20 2xl:w-[110px] h-auto mx-5 grayscale hover:grayscale-0 transition-all duration-300" />
          <img src="/assets/Photos/apps/js.webp" alt="JavaScript" className="w-20 2xl:w-[110px] h-auto mx-5 grayscale hover:grayscale-0 transition-all duration-300" />
          <img src="/assets/Photos/apps/react.webp" alt="React" className="w-20 2xl:w-[110px] h-auto mx-5 grayscale hover:grayscale-0 transition-all duration-300" />
        </Marquee>
      </section>

      {/* Services */}
      <section className="py-[50px]" id="services">
        <h1 className="section-title">{t("services-t")}</h1>
        <ServiceList />
      </section>

      {/* Gallery */}
      <section className="py-[50px]" id="gallery">
        <GallerySection />
      </section>

      {/* Statistics */}
      <section>
        <Statistics />
      </section>

      {/* Testimonials */}
      <section className="py-[50px]" id="testimonials">
        <h1 className="section-title">{t("testimonials")}</h1>
        <Testimonials />
      </section>

      {/* Certificates */}
      <section className="py-[50px]">
        <h1 className="section-title">{t("certificates")}</h1>
        <Certificates />
      </section>

      {/* CTA */}
      <section
        className="bg-fixed bg-center bg-no-repeat bg-cover py-[100px] text-center text-[40px] text-main h-[60vh] flex justify-center items-center"
        style={{
          backgroundImage:
            "linear-gradient(#3FD357, #3fd358e5), url('/assets/Photos/digital-design.jpg')",
        }}
        id="contact"
      >
        <div>
          <img src="/assets/Photos/fire.gif" alt="" className="w-[250px] max-md:w-[200px] -mb-10 mx-auto" />
          <h1 className="font-black leading-none px-[30px] w-[480px] max-md:w-[320px] max-md:text-[35px] mx-auto">
            {t("ctaText")}
          </h1>
          <a
            className="fire-btn mx-auto w-[200px] mt-5 !bg-white !border-[3px] !border-main !text-main hover:!bg-gradient-to-r hover:!from-[#ff9000] hover:!to-[#ffd900]"
            href="mailto:hello@mersal.top"
            target="_blank"
            rel="noreferrer"
            style={{ boxShadow: "5px 5px 0 #00134E" }}
          >
            {t("ctaButton")}
          </a>
        </div>
      </section>

      {/* Trusted By */}
      <section className="max-w-[1200px] mx-auto py-[50px]">
        <h1 className="text-[40px] text-accent m-5">{t("trustedBy")}</h1>
        <img
          src="/assets/Photos/Trusted-by.png"
          alt=""
          className="w-[800px] max-md:w-[500px] max-sm:!w-[350px] mx-auto"
        />
      </section>

      <Footer />
    </>
  );
};

export default Home;
