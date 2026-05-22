import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Courses: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-main">
      {/* Hero Header */}
      <section className="relative min-h-[100vh] flex items-center justify-center text-center flex-col overflow-hidden pt-24 pb-10">
        <div className="relative z-10 max-w-[800px] px-5">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-accent text-lg font-bold mb-8 transition-all duration-300 hover:gap-4"
          >
            <svg className="w-5 h-5 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            {t("courses.backHome")}
          </Link>
          <h1 className="text-[80px] max-sm:text-[50px] font-black text-accent leading-none mb-4">
            {t("courses.title")}
          </h1>
        </div>
        
        <div
          className="bg-accent/20 border-2 border-accent rounded-full px-8 py-3 mb-8 w-fit mx-auto"
          style={{ boxShadow: "0 0 30px rgba(63, 211, 87, 0.2)" }}
        >
          <span className="text-accent font-black text-2xl tracking-wider">
            {t("courses.comingSoon")}
          </span>
        </div>
      </section>
 {/* Coming Soon Badge */}
  
    </div>
  );
};

export default Courses;
