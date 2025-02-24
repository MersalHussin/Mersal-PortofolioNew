import { useTranslation } from "react-i18next";
import CountUp from "react-countup";

const Statistics = () => {
  const { t } = useTranslation();

  const statsData = [
    { icon: "/assets/Photos/design.png", label: t("statistics.design"), target: 600 },
    { icon: "/assets/Photos/website.png", label: t("statistics.website"), target: 50 },
    { icon: "/assets/Photos/logo.png", label: t("statistics.logo"), target: 45 },
    { icon: "/assets/Photos/video.png", label: t("statistics.video"), target: 130 },
  ];

  return (
    <section className="statistics-section">
      <div className="container">
        <div className="stats-grid">
          {statsData.map((stat, index) => (
            <div key={index} className="stat-box">
              <img src={stat.icon} alt={stat.label} className="stat-icon" />
              <h3 className="stat-number">
                +<CountUp end={stat.target} duration={2.5} />
              </h3>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
