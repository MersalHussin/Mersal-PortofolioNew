import { t } from "i18next";
import { useEffect, useState } from "react";
import staticClients from "../data/clients";
import { supabase } from "../lib/supabase";
import OptimizedImage from "./OptimizedImage";

const Clients = () => {
  const [clients, setClients] = useState<any[]>(staticClients);

  useEffect(() => {
    const fetchClients = async () => {
      const { data, error } = await supabase
        .from("clients")
        .select("*")
        .order("created_at", { ascending: true });
        
      if (!error && data && data.length > 0) {
        setClients(data);
      }
    };
    
    fetchClients();
  }, []);

  const hasLink = (url?: string) => url && !url.includes("example.com");

  const cardClasses = `
    group relative 
    w-16 h-8 sm:w-20 sm:h-12 md:w-24 md:h-16 lg:w-32 lg:h-20
    flex items-center justify-center p-1 sm:p-2
    transition-all duration-400 ease-out
  `;

  const renderCardContent = (client: (typeof clients)[0]) => (
    <>
      {/* Logo */}
      <OptimizedImage
        src={client.logo}
        alt={client.name}
        width={200}
        objectFit="contain"
        className="
          w-full h-full bg-transparent
          transition-all duration-400 ease-out
          opacity-50 grayscale
          group-hover:opacity-100 group-hover:grayscale-0
          group-hover:scale-110
        "
        draggable={false}
      />

      {/* External link icon — only for clients with a real URL */}
      {hasLink(client.url) && (
        <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-accent flex items-center justify-center transition-all duration-300 scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 shadow-[0_0_15px_rgba(63,211,87,0.4)] z-10">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 text-main-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </div>
      )}

      {/* Name tooltip */}
      {/* <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-[#0a2366]/90 py-1 px-3 rounded-md text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-md z-10">
        <span className="text-white/90 text-xs font-bold tracking-wide">{client.name}</span>
      </div> */}
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
    <section className="w-full py-10 md:py-[60px]">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="section-title mb-8 md:mb-[50px]">{t("trustedBy")}</h1>

        <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-5 md:gap-8 gap-y-8 sm:gap-y-10">
          {clients.map((client, i) => renderCard(client, "c", i))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
