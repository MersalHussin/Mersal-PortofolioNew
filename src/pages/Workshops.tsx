import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { workshops } from "../data/workshops";
import Footer from "../components/Footer";
import WorkshopsSection from "../components/WorkshopsSection";

const BackArrow = () => (
  <svg className="w-5 h-5 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
  </svg>
);

const totalAttendees = workshops.reduce((s, w) => s + w.attendees, 0);

const getStats = (t: (k: string) => string) => [
  { value: workshops.length, label: t("workshops.totalWorkshops") },
  { value: totalAttendees, label: t("workshops.totalAttendees") },
];

// ─── Main Page ────────────────────────────────────────────

const Workshops = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-main">
      {/* ── Hero ── */}
      <section className="relative min-h-[50vh] flex items-center justify-center text-center overflow-hidden pt-24 pb-10">
        <div className="absolute inset-0 bg-gradient-to-b from-main-dark via-main to-main" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-[120px]" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent rounded-full blur-[150px]" />
        </div>

        <div className="relative z-10 max-w-[800px] px-5">
          <Link to="/" className="inline-flex items-center gap-2 text-accent text-lg font-bold mb-8 hover:gap-4 transition-all duration-300">
            <BackArrow /> {t("workshops.backHome")}
          </Link>

          <h1 className="text-[80px] max-sm:text-[50px] font-black text-accent leading-none mb-4">
            {t("workshops.title")}
          </h1>

          <p className="text-white/70 text-xl max-w-[600px] mx-auto mb-10">
            {t("workshops.description")}
          </p>

          <div className="flex justify-center gap-10 flex-wrap">
            {getStats(t).map((stat) => (
              <div key={stat.label} className="text-center">
                <span className="text-accent font-black text-4xl">{stat.value}</span>
                <p className="text-white/50 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Workshop Cards ── */}
      <WorkshopsSection hideTitle={true} />

      <Footer />
    </div>
  );
};

export default Workshops;
