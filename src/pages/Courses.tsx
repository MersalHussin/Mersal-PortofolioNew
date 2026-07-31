import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Courses: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-main flex flex-col">
      <section className="relative flex-grow flex items-center justify-center text-center flex-col overflow-hidden pt-36 pb-20">
        
        {/* Animated Background Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[20%] left-[20%] w-[400px] h-[400px] bg-accent/10 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-[20%] right-[20%] w-[300px] h-[300px] bg-blue-600/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "1s" }}></div>
        </div>

        <div className="relative z-10 px-5 flex flex-col items-center">
          
          {/* Giant SOON Text */}
          <h1 className="text-[120px] z-0 sm:text-[180px] md:text-[250px] font-black text-transparent bg-clip-text bg-gradient-to-b from-accent to-accent/20 leading-none drop-shadow-2xl mb-10 tracking-widest">
            SOON
          </h1>

          <Link
            to="/"
            className="group flex items-center z-20 gap-3 bg-white/5 hover:bg-accent/10 border border-white/10 hover:border-accent/50 px-8 py-4 rounded-xl text-white font-bold transition-all duration-300"
          >
            <svg className="w-5 h-5 rtl:rotate-180 transition-transform duration-300 group-hover:-translate-x-1 rtl:group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            {t("courses.backHome") || "Back to Home"}
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Courses;
