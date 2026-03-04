import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import CountUp from "react-countup";

interface StatItem {
  icon: React.ReactNode;
  label: string;
  target: number;
  suffix?: string;
  prefix?: string;
}

const GlobeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-9 h-9">
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z" />
  </svg>
);

const ProjectsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-9 h-9">
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
    <line x1="12" y1="11" x2="12" y2="17" />
    <line x1="9" y1="14" x2="15" y2="14" />
  </svg>
);

const UsersIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-9 h-9">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const LayersIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-9 h-9">
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </svg>
);

const Statistics: React.FC = () => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const statsData: StatItem[] = [
    {
      icon: <GlobeIcon />,
      label: t("statistics.international"),
      target: 5,
      suffix: "",
    },
    {
      icon: <ProjectsIcon />,
      label: t("statistics.projects"),
      target: 400,
      prefix: "+",
    },
    {
      icon: <UsersIcon />,
      label: t("statistics.clients"),
      target: 35,
      prefix: "+",
    },
    {
      icon: <LayersIcon />,
      label: t("statistics.disciplines"),
      target: 4,
      suffix: "+",
    },
  ];

  return (
    <section ref={sectionRef} className="relative bg-main-dark py-16 overflow-hidden">
      {/* Subtle dot grid background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
        backgroundSize: "24px 24px",
      }} />

      <div className="w-[90%] max-w-[1100px] mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
          {statsData.map((stat, index) => (
            <div
              key={index}
              className={`group flex flex-col items-center text-center p-6 md:p-8 rounded-2xl
                bg-white/[0.04] border border-white/[0.06] backdrop-blur-sm
                hover:bg-white/[0.08] hover:border-accent/30
                transition-all duration-500 ease-out
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              {/* Icon */}
              <div className="text-accent/80 group-hover:text-accent transition-colors duration-300 mb-4">
                {stat.icon}
              </div>

              {/* Number */}
              <h3 className="text-4xl md:text-5xl font-black text-white leading-none mb-2">
                {isVisible && (
                  <CountUp
                    end={stat.target}
                    duration={2}
                    prefix={stat.prefix || ""}
                    suffix={stat.suffix || ""}
                  />
                )}
              </h3>

              {/* Label */}
              <p className="text-sm md:text-base font-semibold text-white/60 group-hover:text-white/80 transition-colors duration-300">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
