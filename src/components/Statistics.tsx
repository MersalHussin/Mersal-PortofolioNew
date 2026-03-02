import React from "react";
import { useTranslation } from "react-i18next";
import CountUp from "react-countup";

interface StatItem {
  icon: string;
  label: string;
  target: number;
}

const Statistics: React.FC = () => {
  const { t } = useTranslation();

  const statsData: StatItem[] = [
    { icon: "/assets/Photos/design.png", label: t("statistics.design"), target: 600 },
    { icon: "/assets/Photos/website.png", label: t("statistics.website"), target: 50 },
    { icon: "/assets/Photos/logo.png", label: t("statistics.logo"), target: 45 },
    { icon: "/assets/Photos/video.png", label: t("statistics.video"), target: 130 },
  ];

  return (
    <section className="bg-main-dark py-10 text-center">
      <div className="w-[90%] max-w-[1200px] mx-auto">
        <div className="flex justify-center items-center flex-wrap gap-20">
          {statsData.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-white w-[200px] group">
              <img
                src={stat.icon}
                alt={stat.label}
                className="w-20 mb-[10px] transition-all duration-300 group-hover:scale-110"
              />
              <h3 className="text-[50px] font-black text-white">
                +<CountUp end={stat.target} duration={2.5} />
              </h3>
              <p className="text-[40px] font-bold text-accent -mt-5">
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
