import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Certificates from "../components/Certificates";

const About: React.FC = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const jobs = t("cv.jobs", { returnObjects: true }) as {
    role: string;
    company: string;
    period: string;
    description: string;
  }[];

  const educationList = t("cv.educationList", { returnObjects: true }) as {
    degree: string;
    school: string;
    period: string;
    description: string;
  }[];

  const skillCategories = t("cv.skillCategories", { returnObjects: true }) as {
    category: string;
    items: string[];
  }[];

  const coursesList = t("cv.coursesList", { returnObjects: true }) as {
    name: string;
    issuer: string;
  }[];

  return (
    <>
      {/* Hero Header */}
      <section className="relative min-h-[50vh] flex items-center justify-center text-center overflow-hidden pt-24 pb-10">
        <div className="absolute inset-0 bg-gradient-to-b from-main-dark via-main to-main" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-[120px]" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent rounded-full blur-[150px]" />
        </div>
        <div className="relative z-10 max-w-[800px] px-5">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-accent text-lg font-bold mb-8 transition-all duration-300 hover:gap-4"
          >
            <svg className="w-5 h-5 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            {t("cv.backHome")}
          </Link>
          <h1 className="text-[80px] max-sm:text-[50px] font-black text-accent leading-none mb-4">
            {t("cv.title")}
          </h1>
          <p className="text-white/70 text-xl max-w-[600px] mx-auto">
            {t("cv.subtitle")}
          </p>
        </div>
      </section>

      <div className="max-w-[1000px] mx-auto px-5 pb-20 space-y-20">

        {/* ========== WORK EXPERIENCE ========== */}
        <section>
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m8 0H8m8 0a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2" />
              </svg>
            </div>
            <h2 className="text-3xl font-black text-accent">{t("cv.experience")}</h2>
          </div>

          <div className="relative border-l-2 border-accent/30 ml-6 space-y-10">
            {Array.isArray(jobs) &&
              jobs.map((job, i) => (
                <div key={i} className="relative pl-10 group">
                  {/* Timeline dot */}
                  <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-main border-2 border-accent group-hover:bg-accent transition-colors duration-300" />

                  <div className="bg-gradient-to-br from-[#0a2366]/60 to-[#0d1b4a]/60 border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:border-accent/30 hover:shadow-[0_0_20px_rgba(63,211,87,0.08)]">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h3 className="text-white text-xl font-bold">{job.role}</h3>
                      <span className="text-accent text-sm font-bold bg-accent/10 px-3 py-1 rounded-full">
                        {job.period}
                      </span>
                    </div>
                    <p className="text-accent/80 font-bold mb-3">{job.company}</p>
                    <p className="text-white/70 leading-relaxed">{job.description}</p>
                  </div>
                </div>
              ))}
          </div>
        </section>

        {/* ========== EDUCATION ========== */}
        <section>
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
              </svg>
            </div>
            <h2 className="text-3xl font-black text-accent">{t("cv.education")}</h2>
          </div>

          <div className="space-y-6">
            {Array.isArray(educationList) &&
              educationList.map((edu, i) => (
                <div
                  key={i}
                  className="bg-gradient-to-br from-[#0a2366]/60 to-[#0d1b4a]/60 border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:border-accent/30 hover:shadow-[0_0_20px_rgba(63,211,87,0.08)]"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="text-white text-xl font-bold">{edu.degree}</h3>
                    <span className="text-accent text-sm font-bold bg-accent/10 px-3 py-1 rounded-full">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-accent/80 font-bold mb-2">{edu.school}</p>
                  <p className="text-white/70 leading-relaxed">{edu.description}</p>
                </div>
              ))}
          </div>
        </section>

        {/* ========== SKILLS ========== */}
        <section>
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h2 className="text-3xl font-black text-accent">{t("cv.skills")}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Array.isArray(skillCategories) &&
              skillCategories.map((cat, i) => (
                <div
                  key={i}
                  className="bg-gradient-to-br from-[#0a2366]/60 to-[#0d1b4a]/60 border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:border-accent/30 hover:shadow-[0_0_20px_rgba(63,211,87,0.08)]"
                >
                  <h3 className="text-accent font-bold text-lg mb-4">{cat.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((skill, j) => (
                      <span
                        key={j}
                        className="text-white/80 text-sm bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg transition-all duration-300 hover:bg-accent/10 hover:border-accent/30 hover:text-white"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </section>

        {/* ========== COURSES & CERTIFICATES ========== */}
        <section>
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <h2 className="text-3xl font-black text-accent">{t("cv.courses")}</h2>
          </div>
            <Certificates />
        {/* Download CV CTA */}
        </section>
        <section className="text-center pt-5">
          <a
            href="/assets/Photos/Mesal CV.pdf"
            download
            className="fire-btn mx-auto"
          >
            {t("downloadCV")}
          </a>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default About;
