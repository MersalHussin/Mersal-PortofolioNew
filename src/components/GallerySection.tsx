import React, { useRef, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { supabase } from "../lib/supabase";
import OptimizedImage from "./OptimizedImage";

interface ProjectItem {
  id: string;
  name: string;
  image: string;
  link: string;
  category: string;
  featured: boolean;
}

const ProjectCard: React.FC<{ item: ProjectItem; t: (key: string) => string }> = ({ item, t }) => (
  <a
    href={item.link}
    target="_blank"
    rel="noopener noreferrer"
    className="group flex-shrink-0  w-[250px] h-[140px] lg:w-[500px] lg:h-[280px] mx-3 bg-main-2 rounded-xl text-center transition-all duration-500 border-2 border-main-dark overflow-hidden cursor-pointer relative hover:border-accent hover:scale-100"
    style={{
      boxShadow: "-4px -4px 0px 1px #00134E",
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
      quality={70}
      width={600}
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
        trigger="hover"
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

const GallerySection: React.FC = () => {
  const { t } = useTranslation();
  const [featuredProjects, setFeaturedProjects] = useState<ProjectItem[]>([]);
  const [loading, setLoading] = useState(true);
  
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);
  const tl1Ref = useRef<gsap.core.Tween | null>(null);
  const tl2Ref = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    const fetchFeaturedProjects = async () => {
      const { data } = await supabase
        .from('projects')
        .select('*')
        .eq('featured', true)
        .order('created_at', { ascending: false });
      
      setFeaturedProjects(data || []);
      setLoading(false);
    };

    fetchFeaturedProjects();
  }, []);

  // Split featured projects into two rows
  const midPoint = Math.ceil(featuredProjects.length / 2);
  const row1 = featuredProjects.slice(0, midPoint);
  const row2 = featuredProjects.slice(midPoint);

  // Smooth pause/resume handlers for each row
  const handleRow1Enter = () => {
    if (tl1Ref.current) {
      gsap.to(tl1Ref.current, { timeScale: 0, duration: 0.5, ease: "power2.out" });
    }
  };
  
  const handleRow1Leave = () => {
    if (tl1Ref.current) {
      gsap.to(tl1Ref.current, { timeScale: 1, duration: 0.5, ease: "power2.out" });
    }
  };
  
  const handleRow2Enter = () => {
    if (tl2Ref.current) {
      gsap.to(tl2Ref.current, { timeScale: 0, duration: 0.5, ease: "power2.out" });
    }
  };
  
  const handleRow2Leave = () => {
    if (tl2Ref.current) {
      gsap.to(tl2Ref.current, { timeScale: 1, duration: 0.5, ease: "power2.out" });
    }
  };

  // GSAP infinite scroll animation
  useEffect(() => {
    if (loading) return;
    
    if (tl1Ref.current) tl1Ref.current.kill();
    if (tl2Ref.current) tl2Ref.current.kill();

    const row1El = row1Ref.current;
    const row2El = row2Ref.current;

    if (row1El && row1.length > 0) {
      const totalWidth = row1El.scrollWidth / 2;
      gsap.set(row1El, { x: 0, force3D: true });
      tl1Ref.current = gsap.to(row1El, {
        x: -totalWidth,
        duration: row1.length * 4,
        ease: "none",
        repeat: -1,
        force3D: true,
      });
    }

    if (row2El && row2.length > 0) {
      const totalWidth = row2El.scrollWidth / 2;
      gsap.set(row2El, { x: -totalWidth, force3D: true });
      tl2Ref.current = gsap.to(row2El, {
        x: 0,
        duration: row2.length * 4.5,
        ease: "none",
        repeat: -1,
        force3D: true,
      });
    }

    return () => {
      if (tl1Ref.current) tl1Ref.current.kill();
      if (tl2Ref.current) tl2Ref.current.kill();
    };
  }, [row1.length, row2.length, loading]);

  if (loading) {
    return <div className="py-20 text-center text-white">Loading projects...</div>;
  }

  return (
    <>
      <h1 className="section-title">{t("gallery.title")}</h1>

      {/* GSAP Auto-scrolling Projects */}
      <div className="space-y-6 py-4 overflow-hidden">
        {/* Row 1 - Right to Left */}
        <div 
          className="relative overflow-hidden"
          onMouseEnter={handleRow1Enter}
          onMouseLeave={handleRow1Leave}
        >
          <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-main to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-main to-transparent z-10 pointer-events-none" />
          <div ref={row1Ref} className="flex will-change-transform">
            {[...row1, ...row1].map((item, idx) => (
              <ProjectCard key={`row1-${idx}`} item={item} t={t} />
            ))}
          </div>
        </div>

        {/* Row 2 - Left to Right */}
        {row2.length > 0 && (
          <div 
            className="relative overflow-hidden"
            onMouseEnter={handleRow2Enter}
            onMouseLeave={handleRow2Leave}
          >
            <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-main to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-main to-transparent z-10 pointer-events-none" />
            <div ref={row2Ref} className="flex will-change-transform">
              {[...row2, ...row2].map((item, idx) => (
                <ProjectCard key={`row2-${idx}`} item={item} t={t} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* View All Projects Button */}
      <div className="flex justify-center mt-10">
        <Link
          to="/projects"
          className="fire-btn group flex items-center gap-3"
        >
          <span>{t("gallery.viewAll")}</span>
          <svg 
            className="w-5 h-5 transition-transform group-hover:translate-x-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </>
  );
};

export default GallerySection;
