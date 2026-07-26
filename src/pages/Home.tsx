import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import ServiceList from "../components/ServiceList";
import GallerySection from "../components/GallerySection";
import Statistics from "../components/Statistics";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import Clients from "../components/Clients";
import Map from "../components/Map";
import { supabase } from "../lib/supabase";

const Home: React.FC = () => {
  const { t } = useTranslation();
  const [skills, setSkills] = useState<any[]>([]);

  useEffect(() => {
    const fetchSkills = async () => {
      const { data } = await supabase
        .from('skills')
        .select('*')
        .order('created_at', { ascending: true });
      if (data) {
        setSkills(data);
      }
    };
    fetchSkills();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section
        className="min-h-[calc(100vh)]  pt-24 px-5 overflow-hidden flex items-center justify-center bg-cover bg-center bg-no-repeat text-center text-white"
style={{
  backgroundImage: "radial-gradient(circle, #082277, #07195200), url('./assets/Photos/HeroBG.svg')",
}}
      >
        <div className="scale-[0.7] sm:scale-100 max-w-[1000px] mx-auto w-full flex justify-center lg:justify-center items-center">
          
          <div className="text">
          <h2 className="text-xl mb-4 opacity-80">{t("welcome")}</h2>
          <h1 className="text-[150px] ] font-black text-accent -my-[70px] ">
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

          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-[60px] px-5 flex justify-center items-center" id="about">
        <div className="max-w-[1200px] w-full">
          <div className="flex items-center justify-between gap-12 max-lg:flex-col max-lg:text-center">
            <div className="mx-auto lg:mx-0 w-[220px] sm:w-[280px] lg:w-[380px] flex-shrink-0 mb-8 lg:mb-0">
              <div className="rounded-full overflow-hidden border-[6px] border-accent/30 bg-main-dark shadow-2xl transition-all duration-300 hover:border-accent hover:-translate-y-2 hover:shadow-[0_15px_40px_-10px_rgba(63,211,87,0.4)] aspect-square">
                <img 
                  src="/assets/Photos/mersal.jpg" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
                  alt="Mersal" 
                />
              </div>
            </div>
            <div className="flex-1 text-white text-left max-lg:text-center">
              <h2 className="section-title max-lg:mx-auto">{t("aboutMe")}</h2>
              <p className="text-xl leading-relaxed opacity-90 text-start max-lg:text-center" dir="auto">
                {t("aboutText")}
              </p>
              <div className="pt-5 flex justify-center gap-5 items-center" style={{ direction: "ltr" }}>
                <Link
                  to="/About"
                  className="fire-btn !m-0"
                >
                  {t("knowMore")}
                </Link>
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
      <section className="w-full bg-main-dark py-5 border-y-[5px] border-accent min-h-[100px]">
        {skills.length > 0 ? (
          <Marquee speed={60} gradient={false}>
            {skills.map((skill: any) => (
              <img 
                key={skill.id}
                src={skill.image} 
                alt={skill.name} 
                title={skill.name}
                className="w-20 2xl:w-[110px] h-auto mx-5 grayscale hover:grayscale-0 transition-all duration-300" 
              />
            ))}
          </Marquee>
        ) : (
          <div className="text-center text-gray-500 text-sm">Loading skills...</div>
        )}
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

      {/* Testimonials */}
      <section className="py-[50px]" id="testimonials">
        <h1 className="section-title">{t("testimonials")}</h1>
        <Testimonials />
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

        <Map />
        <Statistics />
        <Clients/>
      <Footer />
    </>
  );
};

export default Home;
