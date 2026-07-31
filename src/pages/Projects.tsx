import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { supabase } from "../lib/supabase";
import OptimizedImage from "../components/OptimizedImage";

interface ProjectItem {
  id: string;
  name: string;
  image: string;
  link: string;
  category: string;
  featured: boolean;
}

const categories = ["All", "Graphic Design", "Web Development", "UI/UX Design", "Video Editing"];

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
    <OptimizedImage
      src={item.image}
      alt={item.name}
      width={600}
      className="w-full h-full rounded-xl transition-all duration-500 scale-105 group-hover:blur-sm group-hover:scale-110 group-hover:opacity-20"
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
  const [allProjects, setAllProjects] = useState<ProjectItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      const { data } = await supabase
        .from('projects')
        .select('*')
        .order('created_at', { ascending: false });
      
      setAllProjects(data || []);
      setLoading(false);
    };

    fetchProjects();
  }, []);

  const filteredProjects = activeFilter === "All" 
    ? allProjects 
    : allProjects.filter(p => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-main">
      {/* Hero Header */}
      <section className="relative min-h-[50vh] flex items-center justify-center text-center overflow-hidden pt-36 pb-10">
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
            {t("projects.backHome")}
          </Link>
          <h1 className="text-[80px] max-sm:text-[50px] font-black text-accent leading-none mb-4">
            {t("projects.title")}
          </h1>
        </div>
      </section>

      {/* Content */}
      <div className="container mx-auto px-4 pb-8">

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
        {loading ? (
          <div className="text-center py-20 text-white text-xl">Loading projects...</div>
        ) : filteredProjects.length === 0 ? (
          <div className="text-center py-20 text-gray-400 text-xl">No projects found.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProjects.map((item, idx) => (
              <ProjectCard key={item.id || idx} item={item} t={t} />
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Projects;
