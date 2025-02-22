import CountUp from "react-countup";

const statsData = [
  { icon: "/assets/photos/design.png", label: "Design", target: 600 },
  { icon: "/assets/photos/website.png", label: "Website", target: 50 },
  { icon: "/assets/photos/logo.png", label: "Logo", target: 45 },
  { icon: "/assets/photos/video.png", label: "Video", target: 130 },
];

const Statistics = () => {
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
