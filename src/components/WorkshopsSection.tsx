import React, { useState, useEffect, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { workshops } from "../data/workshops";

// ─── Helpers ──────────────────────────────────────────────

const getYouTubeId = (url: string) => {
  const match = url.match(
    /(?:youtube\.com\/(?:shorts|watch\?v=|embed)\/|youtu\.be\/)([a-zA-Z0-9_-]+)/
  );
  return match?.[1] ?? null;
};

// ─── Icons ────────────────────────────────────────────────

const PlayIcon = ({ className = "w-7 h-7" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M8 5v14l11-7z" />
  </svg>
);

const CloseIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const PeopleIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

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

// ─── Workshops Section Component ──────────────────────────

const WorkshopsSection: React.FC<{ hideTitle?: boolean }> = ({ hideTitle = false }) => {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === "ar";
  const [activeVideo, setActiveVideo] = useState<{ videoId: string; title: string } | null>(null);

  const openVideo = (url: string, title: string) => {
    const id = getYouTubeId(url);
    if (id) setActiveVideo({ videoId: id, title });
  };

  return (
    <>
      {!hideTitle && <h1 className="section-title">{t("workshops.title")}</h1>}
      
      <div className="max-w-[1200px] mx-auto px-5 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {workshops.map((ws, index) => {
          const title = isAr ? ws.titleAr : ws.title;
          const reviewId = ws.reviewUrl ? getYouTubeId(ws.reviewUrl) : null;

          return (
            <div key={ws.id}>
              {/* بطاقة الورشة */}
              <div className="relative rounded-3xl border-2 border-main-dark bg-gradient-to-br from-main-dark/60 to-main p-8 md:p-10 flex flex-col">
                {/* رقم الورشة */}
                <span className="absolute top-6 left-6 text-accent/20 font-black text-[80px] leading-none select-none">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* المحتوى */}
                <div className="relative z-10 flex-1 flex flex-col">
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
                  <div className={`grid grid-cols-1 ${ws.recordingUrl && ws.reviewUrl ? "md:grid-cols-2" : ""} gap-6 mt-auto`}>
                    {/* تسجيل الورشة */}
                    {ws.recordingUrl && (
                      <div>
                        <h3 className="text-white/80 font-bold text-sm mb-3 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-accent inline-block" />
                          {t("workshops.recording")}
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
                          {t("workshops.reviews")}
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
            </div>
          );
        })}
      </div>

      {/* ── Video Overlay ── */}
      {activeVideo && (
        <VideoOverlay videoId={activeVideo.videoId} title={activeVideo.title} onClose={() => setActiveVideo(null)} />
      )}
    </>
  );
};

export default WorkshopsSection;
