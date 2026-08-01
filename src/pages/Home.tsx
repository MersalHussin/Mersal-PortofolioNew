import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import ServiceList from "../components/ServiceList";
import GallerySection from "../components/GallerySection";
import WorkshopsSection from "../components/WorkshopsSection";
import Statistics from "../components/Statistics";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import Clients from "../components/Clients";
import Map from "../components/Map";
import { supabase } from "../lib/supabase";
import OptimizedImage from "../components/OptimizedImage";

const Home: React.FC = () => {
  const { t } = useTranslation();
  const [skills, setSkills] = useState<any[]>([]);
  const [cvLink, setCvLink] = useState<string>("/assets/Photos/Mesal CV.pdf");

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
    
    const fetchCvLink = async () => {
      const { data } = await supabase
        .from('settings')
        .select('value')
        .eq('key', 'cv_url')
        .single();
      
      if (data && data.value) {
        setCvLink(data.value);
      }
    };

    fetchSkills();
    fetchCvLink();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section
        className="min-h-[calc(100vh)] pt-8 sm:pt-24 px-5 overflow-hidden flex items-center justify-center bg-cover bg-center bg-no-repeat text-center text-white"
style={{
  backgroundImage: "radial-gradient(circle, #082277, #07195200), url('./assets/Photos/HeroBG.svg')",
}}
      >
        <div className="sm:scale-100 max-w-[1000px] mx-auto w-full flex justify-center lg:justify-center items-center">
          
          <div className="text flex flex-col items-center">
            <div className="w-fit mx-auto flex flex-col ">
              <p className="text-[16px] sm:text-[20px] mb-6 sm:mb-10 md:text-[24px] text-start font-black text-white/90 uppercase tracking-widest relative z-10 drop-shadow-md ml-3 rtl:mr-3 rtl:ml-0 top-[10px] sm:top-[35px] md:top-[45px]">
                {t("welcome")}
              </p>
              <h1 className="text-[90px] sm:text-[120px] z-0 md:text-[150px] font-black text-accent -my[40px] md:-my[50px] drop-shadow-sm leading-none">
                {t("mersal")}
              </h1>
            </div>
          <div className="flex justify-center items-center">
            <a href="#about" className="fire-btn -mx-1 sm:mx-3 z-10 scale-[.8] sm:scale-[1]">
              {t("fireTheWorld")}
            </a>
            <a
              href="#gallery"
              className="text-white scale-[.8] sm:scale-[1] text-lg opacity-80 font-bold transition-all duration-300 hover:opacity-100 mx-3"
              >
              {t("exploreProjects")}
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
      <section className="py-[100px] px-5 relative overflow-hidden flex justify-center items-center" id="about">
        {/* Animated Background Orbs */}
        <div className="absolute bottom-[-10%] right-[-10%] w-[30vw] h-[30vw] max-w-[400px] max-h-[400px] bg-[#00134E]/60 rounded-full blur-[80px] -z-10 pointer-events-none"></div>

        <div className="max-w-[1200px] w-full z-10">
          <div className="flex items-center justify-between gap-16 max-lg:flex-col max-lg:text-center relative">
            
            {/* Image Container */}
            <div className="mx-auto lg:mx-0 w-[280px] sm:w-[350px] lg:w-[420px] flex-shrink-0 mb-12 lg:mb-0 relative group" style={{ perspective: "1000px" }}>
              {/* Outer decorative glowing ring */}
              <div className="absolute inset-0 rounded-[2.5rem] border-[3px] border-accent/20 rotate-6 transition-all duration-700 group-hover:rotate-12 group-hover:border-accent/60 z-0 scale-[1.02]"></div>
              <div className="absolute inset-0 rounded-[2.5rem] border-[3px] border-accent/20 -rotate-3 transition-all duration-700 group-hover:-rotate-6 group-hover:border-accent/40 z-0 scale-[1.02]"></div>
              <div className="relative z-10 rounded-[2.5rem] overflow-hidden bg-main-dark/80 backdrop-blur-sm border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500 group-hover:-translate-y-4 group-hover:shadow-[0_20px_50px_rgba(63,211,87,0.3)] aspect-[4/5]">
                <OptimizedImage 
                  src="/assets/Photos/mersal.jpg" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100" 
                  alt="Mersal" 
                />
                              </div>
            </div>
              

            {/* Content Container */}
            <div className="flex-1 text-white text-start max-lg:text-center relative">
              
              <h2 className="text-[40px] sm:text-[50px] lg:text-[60px] font-black leading-[1.1] mb-8 bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-white/40 drop-shadow-sm max-lg:mx-auto">
                {t("aboutMe")}
              </h2>
              
              <div className="relative ps-0 lg:ps-8">
                <div className="absolute start-0 top-2 bottom-2 w-1.5 bg-gradient-to-b from-accent to-accent/10 rounded-full max-lg:hidden"></div>
                <p className="text-[18px] sm:text-[20px] lg:text-[22px] leading-relaxed text-white/80 text-start max-lg:text-center font-medium" dir="auto">
                  {t("aboutText")}
                </p>
              </div>

              <div className="pt-12 flex flex-wrap justify-start max-lg:justify-center gap-6 items-center">
                {/* 
                <div
                  className="relative px-8 sm:px-10 py-4 bg-white/5 text-white/40 font-black text-base sm:text-lg rounded-full cursor-not-allowed border border-white/10"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    {t("knowMore")}
                    <svg className="w-5 h-5 rtl:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                  
                  <div className="absolute -top-2 -right-2 bg-accent text-main-dark text-[10px] sm:text-xs px-3 py-1 rounded-full font-black shadow-[0_0_15px_rgba(63,211,87,0.4)] uppercase tracking-wider transform rotate-[15deg]">
                    Soon
                  </div>
                </div>
                */}

                <a
                  href="mailto:hi@mersal.com"
                  className="group relative px-8 sm:px-10 py-4 bg-white/5 hover:bg-accent text-white hover:text-main-dark font-black text-base sm:text-lg rounded-full border border-white/10 hover:border-accent transition-all duration-300 shadow-[0_0_0_rgba(63,211,87,0)] hover:shadow-[0_0_20px_rgba(63,211,87,0.4)] flex items-center gap-3"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    {t("contactMe")}
                  </span>
                  <svg className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
                
                <a
                  href={cvLink}
                  download
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-4 text-white/80 font-bold text-base sm:text-lg transition-all duration-300 hover:text-accent hover:-translate-y-1"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-white/20 flex items-center justify-center transition-all duration-300 group-hover:border-accent group-hover:bg-accent/10 group-hover:shadow-[0_0_20px_rgba(63,211,87,0.2)]">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </div>
                  <span>{t("downloadCV")}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Marquee */}
      <section className="w-full bg-main-dark py-5 border-y-[5px] border-accent min-h-[100px]" dir="ltr">
        {skills.length > 0 ? (
          <Marquee speed={60} gradient={false}>
            {skills.map((skill: any) => (
              <OptimizedImage 
                key={skill.id}
                src={skill.image} 
                alt={skill.name} 
                title={skill.name}
                width={150}
                objectFit="contain"
                className="w-20 2xl:w-[110px] h-20 2xl:h-[110px] mx-5 grayscale hover:grayscale-0 transition-all duration-300 bg-transparent" 
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
         {/* Workshops */}
      <section className="py-[50px] bg-main" id="workshops">
        <WorkshopsSection />
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
        <div className="flex flex-col items-center justify-center w-full px-4">
          <img src="/assets/Photos/fire.gif" alt="" className="w-[180px] md:w-[250px] -mb-6 md:-mb-10 mx-auto drop-shadow-xl" />
          <h1 className="font-black mt-7 max-w-lg leading-tight text-[32px] sm:text-[40px] md:text-[54px] max-w-3xl w-full mx-auto whitespace-pre-line drop-shadow-md">
            {t("ctaText")}
          </h1>
          <a
            className="fire-btn  md:w-auto items-center justify-center px-5  py-3 md:py-4 text-lg md:text-xl font-black !bg-white !border-[3px] !border-main !text-main shadow-[6px_6px_0px_#00134E] hover:shadow-[2px_2px_0px_#00134E] hover:translate-y-1 hover:!bg-gradient-to-r hover:!from-[#ff9000] hover:!to-[#ffd900] hover:!text-main hover:!border-transparent transition-all duration-200"
            href="mailto:hi@mersal.me"
            target="_blank"
            rel="noreferrer"
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
