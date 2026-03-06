import { useState, useEffect, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { workshops } from "../data/workshops";
import Footer from "../components/Footer";

// ─── Helpers ──────────────────────────────────────────────

const getYouTubeId = (url: string) => {
  const match = url.match(
    /(?:youtube\.com\/(?:shorts|watch\?v=|embed)\/|youtu\.be\/)([a-zA-Z0-9_-]+)/
  );
  return match?.[1] ?? null;
};

// ─── Icons ────────────────────────────────────────────────

const PlayIcon = ({ className = "w-7 h-7" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M8 5v14l11-7z" />
  </svg>
);

const CloseIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const BackArrow = () => (
  <svg className="w-5 h-5 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
  </svg>
);

const PeopleIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

// ─── Stats ────────────────────────────────────────────────

const totalAttendees = workshops.reduce((s, w) => s + w.attendees, 0);

const getStats = (t: (k: string) => string) => [
  { value: workshops.length, label: t("workshops.totalWorkshops") },
  { value: totalAttendees, label: t("workshops.totalAttendees") },
];

// ─── Video Overlay ────────────────────────────────────────

const VideoOverlay = ({
  videoId,
  title,
  onClose,
}: {
  videoId: string;
  title: string;
  onClose: () => void;
}) => {
  const onKey = useCallback((e: KeyboardEvent) => e.key === "Escape" && onClose(), [onClose]);

  useEffect(() => {
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onKey]);

  return (
    <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/85 backdrop-blur-sm" />
      <div className="relative z-10 w-full max-w-[900px]" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute -top-12 right-0 text-white/70 hover:text-accent transition-colors">
          <CloseIcon />
        </button>
        <div className="w-full rounded-2xl overflow-hidden border-[3px] border-accent" style={{ aspectRatio: "16/9", boxShadow: "0 0 40px rgba(63,211,87,0.15)" }}>
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full border-none"
          />
        </div>
        <p className="text-accent font-bold text-lg text-center mt-4">{title}</p>
      </div>
    </div>
  );
};

// ─── Main Page ────────────────────────────────────────────

const Workshops = () => {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === "ar";
  const [activeVideo, setActiveVideo] = useState<{ videoId: string; title: string } | null>(null);

  const openVideo = (url: string, title: string) => {
    const id = getYouTubeId(url);
    if (id) setActiveVideo({ videoId: id, title });
  };

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
      <div className="max-w-[1000px] mx-auto px-5 pb-20">
        {workshops.map((ws, index) => {
          const title = isAr ? ws.titleAr : ws.title;
          const reviewId = ws.reviewUrl ? getYouTubeId(ws.reviewUrl) : null;

          return (
            <div key={ws.id}>
              {/* بطاقة الورشة */}
              <div className="relative rounded-3xl border-2 border-main-dark bg-gradient-to-br from-main-dark/60 to-main p-8 md:p-10">
                {/* رقم الورشة */}
                <span className="absolute top-6 left-6 text-accent/20 font-black text-[80px] leading-none select-none">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* المحتوى */}
                <div className="relative z-10">
                  {/* العنوان + عدد الحضور */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
                    <h2 className="text-3xl md:text-4xl font-black text-accent">{title}</h2>
                    <div className="flex items-center gap-2 text-white/60 bg-white/5 px-4 py-2 rounded-full w-fit">
                      <PeopleIcon />
                      <span className="font-bold">{ws.attendees}</span>
                      <span className="text-sm">{t("workshops.attendees")}</span>
                    </div>
                  </div>

                  {/* الفيديوهات: التسجيل + الآراء */}
                  <div className={`grid grid-cols-1 ${ws.recordingUrl && ws.reviewUrl ? "md:grid-cols-2" : ""} gap-6`}>
                    {/* تسجيل الورشة */}
                    {ws.recordingUrl && (
                      <div>
                        <h3 className="text-white/80 font-bold text-sm mb-3 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-accent inline-block" />
                          {t("workshops.recording")} — {title}
                        </h3>
                        <div
                          className="relative w-full rounded-2xl overflow-hidden border-[3px] border-main-dark cursor-pointer group transition-all duration-300 hover:border-accent hover:[box-shadow:5px_5px_0px_#3FD357]"
                          style={{ aspectRatio: "16/9", boxShadow: "5px 5px 0px #00134E" }}
                          onClick={() => openVideo(ws.recordingUrl!, title + " - " + t("workshops.recording"))}
                        >
                          {(() => {
                            const recId = getYouTubeId(ws.recordingUrl!);
                            return recId ? (
                              <img src={`https://img.youtube.com/vi/${recId}/hqdefault.jpg`} alt={title} className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105 group-hover:opacity-60" />
                            ) : (
                              <div className="w-full h-full bg-main-dark" />
                            );
                          })()}
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                            <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center shadow-lg">
                              <PlayIcon className="w-7 h-7 text-main ml-1" />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* فيديو الآراء */}
                    {ws.reviewUrl && reviewId && (
                      <div>
                        <h3 className="text-white/80 font-bold text-sm mb-3 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-yellow-400 inline-block" />
                          {t("workshops.reviews")} — {title}
                        </h3>
                        <div
                          className="relative w-full rounded-2xl overflow-hidden border-[3px] border-main-dark cursor-pointer group transition-all duration-300 hover:border-accent hover:[box-shadow:5px_5px_0px_#3FD357]"
                          style={{ aspectRatio: "16/9", boxShadow: "5px 5px 0px #00134E" }}
                          onClick={() => openVideo(ws.reviewUrl!, title + " - " + t("workshops.reviews"))}
                        >
                          <img src={`https://img.youtube.com/vi/${reviewId}/hqdefault.jpg`} alt={title} className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105 group-hover:opacity-60" />
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                            <div className="w-16 h-16 rounded-full bg-yellow-400 flex items-center justify-center shadow-lg">
                              <PlayIcon className="w-7 h-7 text-main ml-1" />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* فاصل بين الورش */}
              {index < workshops.length - 1 && (
                <div className="flex items-center justify-center my-14">
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
                  <div className="mx-4 w-3 h-3 rounded-full bg-accent/40" />
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* ── Video Overlay ── */}
      {activeVideo && (
        <VideoOverlay videoId={activeVideo.videoId} title={activeVideo.title} onClose={() => setActiveVideo(null)} />
      )}

      <Footer />
    </div>
  );
};

export default Workshops;
