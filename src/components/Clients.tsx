import { t } from "i18next";
import clients from "../data/clients";

const Clients = () => {
  const pauseRow = (e: React.MouseEvent) => {
    const track = (e.currentTarget as HTMLElement).querySelector(".marquee-track") as HTMLElement | null;
    if (track) track.style.animationPlayState = "paused";
  };
  const resumeRow = (e: React.MouseEvent) => {
    const track = (e.currentTarget as HTMLElement).querySelector(".marquee-track") as HTMLElement | null;
    if (track) track.style.animationPlayState = "running";
  };

  const hasLink = (url?: string) => url && !url.includes("example.com");

  const cardClasses = `
    group relative flex-shrink-0
    w-[180px] h-[120px] mx-3
    rounded-2xl overflow-hidden
    bg-gradient-to-br from-[#0a2366] to-[#0d1b4a]
    border border-white/10
    flex items-center justify-center p-5
    transition-all duration-400 ease-out
    hover:border-accent/50 hover:shadow-[0_0_25px_rgba(63,211,87,0.2)]
  `;

  const renderCardContent = (client: (typeof clients)[0]) => (
    <>
      {/* Glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_50%_50%,rgba(63,211,87,0.1)_0%,transparent_70%)]" />

      {/* Logo */}
      <img
        src={client.logo}
        alt={client.name}
        className="
          w-full h-full object-contain
          transition-all duration-400 ease-out
          filter brightness-90 grayscale-[30%]
          group-hover:brightness-110 group-hover:grayscale-0
          group-hover:scale-110
        "
        draggable={false}
      />

      {/* External link icon — only for clients with a real URL */}
      {hasLink(client.url) && (
        <div className="absolute top-2 right-2 w-7 h-7 rounded-full bg-accent flex items-center justify-center transition-all duration-300 scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 text-main" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </div>
      )}

      {/* Name tooltip */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-main-dark/90 to-transparent py-2 px-3 text-center translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <span className="text-white/90 text-xs font-bold tracking-wide">{client.name}</span>
      </div>
    </>
  );

  const renderCard = (client: (typeof clients)[0], keyPrefix: string, i: number) => {
    if (hasLink(client.url)) {
      return (
        <a
          key={`${keyPrefix}-${i}`}
          href={client.url}
          target="_blank"
          rel="noopener noreferrer"
          className={cardClasses}
        >
          {renderCardContent(client)}
        </a>
      );
    }
    return (
      <div key={`${keyPrefix}-${i}`} className={cardClasses}>
        {renderCardContent(client)}
      </div>
    );
  };

  return (
    <section className="w-full py-[60px] overflow-hidden">
      <h1 className="section-title mb-[50px]">{t("trustedBy")}</h1>

      <div
        className="relative w-full overflow-hidden mask-gradient"
        onMouseEnter={pauseRow}
        onMouseLeave={resumeRow}
      >
        <div className="marquee-track flex w-max animate-marquee-left">
          {[...clients, ...clients, ...clients].map((client, i) =>
            renderCard(client, "c", i)
          )}
        </div>
      </div>
    </section>
  );
};

export default Clients;
