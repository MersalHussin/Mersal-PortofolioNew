import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { allProjects, categories, ProjectItem } from "../data/projects";
import Footer from "../components/Footer";

const ProjectCard: React.FC<{ item: ProjectItem; t: (key: string) => string }> = ({ item, t }) => (
  <a
    href={item.link}
    target="_blank"
    rel="noopener noreferrer"
    className="group w-full bg-main-2 rounded-xl text-center transition-all duration-500 border-2 border-main-dark overflow-hidden cursor-pointer relative hover:border-accent"
    style={{
      boxShadow: "-4px -4px 0px 1px #00134E",
      aspectRatio: "16/11",
    }}
    onMouseEnter={(e) => {
      (e.currentTarget as HTMLAnchorElement).style.boxShadow = "4px 4px 0px 1px #3FD357";
    }}
    onMouseLeave={(e) => {
      (e.currentTarget as HTMLAnchorElement).style.boxShadow = "-4px -4px 0px 1px #00134E";
    }}
  >
    <img
      src={item.image}
      alt={item.name}
      className="w-full h-full object-cover rounded-xl transition-all duration-500 scale-105 group-hover:blur-sm group-hover:scale-110 group-hover:opacity-20"
    />
    <div
      className="absolute inset-0 flex flex-col items-center justify-center opacity-0 z-10 transition-all duration-500 text-accent group-hover:opacity-100 p-3"
      style={{
        background: "radial-gradient(circle, #071952ee 0%, #071952 100%)",
      }}
    >
      <lord-icon
        src="https://cdn.lordicon.com/wsbmifnf.json"
        trigger="loop"
        colors="primary:#3fd357,secondary:#3fd357"
        style={{ width: "50px", height: "50px" }}
      />
      <h3 className="text-base font-black mt-2 px-2 leading-tight">{item.name}</h3>
      <span className="text-xs font-medium bg-accent/20 px-3 py-1 rounded-full mt-2">
        {t(`gallery.categories.${item.category}`)}
      </span>
    </div>
  </a>
);

const Projects: React.FC = () => {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = activeFilter === "All" 
    ? allProjects 
    : allProjects.filter(p => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-main pt-24">
      {/* Header */}
      <div className="container mx-auto px-4 pb-8">
        {/* Back Button */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-white/70 hover:text-accent transition-colors mb-6 group"
        >
          <svg 
            className="w-5 h-5 transition-transform group-hover:-translate-x-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          <span>{t("projects.backHome")}</span>
        </Link>

        <h1 className="section-title !mb-4">{t("projects.title")}</h1>
        <p className="text-white/60 text-center max-w-2xl mx-auto mb-8">
          {t("projects.description")}
        </p>

        {/* Filter Buttons */}
        <div className="flex justify-center items-center flex-wrap gap-3 my-8 px-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2.5 rounded-full font-bold text-base transition-all duration-300 border-2 ${
                activeFilter === cat
                  ? "bg-accent text-main border-accent scale-110"
                  : "bg-main-dark/50 text-white border-main-dark hover:border-accent hover:text-accent hover:bg-main-dark"
              }`}
              style={{
                boxShadow: activeFilter === cat ? "3px 3px 0 #00134E" : "none",
              }}
            >
              {cat === "All" ? t("gallery.all") || "All" : t(`gallery.categories.${cat}`)}
            </button>
          ))}
        </div>

        {/* Projects Count */}
        <p className="text-center text-white/50 mb-8 text-lg font-medium">
          <span className="text-accent font-black text-2xl">{filteredProjects.length}</span>{" "}
          {t("gallery.projects") || "Projects"}
        </p>
      </div>

      {/* Projects Grid */}
      <div className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProjects.map((item, idx) => (
            <ProjectCard key={idx} item={item} t={t} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Projects;
