import { useState } from "react";
import { useTranslation } from "react-i18next";

interface CountryPin {
  id: string;
  nameKey: string;
  x: number; // percentage position on map
  y: number;
  flag: string;
}

const countries: CountryPin[] = [
  { id: "usa", nameKey: "worldMap.countries.usa", x: 21.1, y: 35.0, flag: "🇺🇸" },
  { id: "egypt", nameKey: "worldMap.countries.egypt", x: 52.3, y: 49.1, flag: "🇪🇬" },
  { id: "saudiArabia", nameKey: "worldMap.countries.saudiArabia", x: 59.5, y: 47.5, flag: "🇸🇦" },
  { id: "uae", nameKey: "worldMap.countries.uae", x: 61.5, y: 48.5, flag: "🇦🇪" },
  { id: "oman", nameKey: "worldMap.countries.oman", x: 62, y: 50, flag: "🇴🇲" },
];

const Map = () => {
  const { t } = useTranslation();
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);

  return (
    <section className="w-full py-[80px] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="section-title">{t("worldMap.title")}</h1>
          <p className="text-white/60 text-xl mt-16">{t("worldMap.subtitle")}</p>
        </div>

        {/* Map Container */}
        <div className="relative w-full max-w-[1000px] mx-auto">
          {/* World map image */}
          <div className="relative">
            <img
              src="/assets/Photos/map.svg"
              alt="World Map"
              className="w-full h-auto opacity-40"
              draggable={false}
            />

            {/* Country Pins */}
            {countries.map((country) => (
              <div
                key={country.id}
                className="absolute group cursor-pointer"
                style={{
                  left: `${country.x}%`,
                  top: `${country.y}%`,
                  transform: "translate(-50%, -50%)",
                }}
                onMouseEnter={() => setHoveredCountry(country.id)}
                onMouseLeave={() => setHoveredCountry(null)}
              >
                {/* Pulse ring */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className={`w-10 h-10 rounded-full transition-all duration-500 ${
                      hoveredCountry === country.id
                        ? "bg-accent/30 scale-150"
                        : "bg-accent/15 animate-ping"
                    }`}
                    style={{ animationDuration: "2.5s" }}
                  />
                </div>

                {/* Pin dot */}
                <div
                  className={`relative z-10 w-4 h-4 rounded-full border-2 border-accent transition-all duration-300 ${
                    hoveredCountry === country.id
                      ? "bg-accent scale-150 shadow-[0_0_20px_rgba(63,211,87,0.6)]"
                      : "bg-accent/70"
                  }`}
                />

                {/* Tooltip */}
                <div
                  className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-3 whitespace-nowrap transition-all duration-300 pointer-events-none ${
                    hoveredCountry === country.id
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-2"
                  }`}
                >
                  <div className="bg-main-dark/95 backdrop-blur-sm border border-accent/30 rounded-xl px-4 py-2 shadow-[0_0_25px_rgba(63,211,87,0.15)]">
                    <div className="flex items-center gap-2">
                      <span className="text-white font-bold text-sm">
                        {t(country.nameKey)}
                      </span>
                    </div>
                  </div>
                  {/* Arrow */}
                  <div className="w-3 h-3 bg-main-dark/95 border-r border-b border-accent/30 rotate-45 mx-auto -mt-1.5" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Map;
