import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const NotFound: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-main flex flex-col">
      <section className="relative flex-grow flex items-center justify-center text-center flex-col overflow-hidden pt-36 pb-20">
        
        {/* Animated Background Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[20%] right-[20%] w-[400px] h-[400px] bg-red-500/10 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-[20%] left-[20%] w-[300px] h-[300px] bg-accent/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "1s" }}></div>
        </div>

        <div className="relative z-10 max-w-[800px] px-5 flex flex-col items-center">
          
          <div className="mb-4 relative">
            <h1 className="text-[120px] sm:text-[180px] md:text-[220px] font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20 leading-none drop-shadow-2xl">
              404
            </h1>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-accent text-3xl sm:text-4xl">
              <lord-icon
                src="https://cdn.lordicon.com/tdrtiskw.json"
                trigger="loop"
                delay="1500"
                colors="primary:#3fd357,secondary:#ffffff"
                style={{ width: "80px", height: "80px" }}
              ></lord-icon>
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Page Not Found
          </h2>
          
          <p className="text-white/60 text-lg sm:text-xl max-w-[500px] mb-12">
            Oops! It seems you've ventured too far into the creative void. The page you are looking for doesn't exist or has been moved.
          </p>
          
          <Link
            to="/"
            className="group relative px-8 py-4 bg-accent text-main-dark font-black text-lg rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(63,211,87,0.4)] hover:-translate-y-1 flex items-center gap-3"
          >
            <div className="absolute inset-0 bg-white/20 w-full translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out skew-x-12"></div>
            <svg className="w-5 h-5 rtl:rotate-180 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="relative z-10">Back to Safety</span>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NotFound;
