import React from "react";
import { useTranslation } from "react-i18next";

interface ServiceItem {
  src: string;
  title: string;
  text: string;
}

const ServiceList: React.FC = () => {
  const { t } = useTranslation();

  const services: ServiceItem[] = [
    {
      src: "https://cdn.lordicon.com/ewtvnblg.json",
      title: t("services-list.graphic"),
      text: t("services-list.graphicText"),
    },
    {
      src: "https://cdn.lordicon.com/wbthjkyu.json",
      title: t("services-list.web"),
      text: t("services-list.webText"),
    },
    {
      src: "https://cdn.lordicon.com/qfwgmyhc.json",
      title: t("services-list.video"),
      text: t("services-list.videoText"),
    },
    {
      src: "https://cdn.lordicon.com/ovxlloho.json",
      title: t("services-list.ui"),
      text: t("services-list.uiText"),
    },
    {
      src: "https://cdn.lordicon.com/bzxxzycl.json",
      title: t("services-list.responsive"),
      text: t("services-list.responsiveText"),
    },
    {
      src: "https://cdn.lordicon.com/pfmdukue.json",
      title: t("services-list.branding"),
      text: t("services-list.brandingText"),
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1280px] mx-auto px-5">
      {services.map((service, index) => (
        <div
          className="group flex flex-col items-center justify-start p-8 bg-main-dark/80 rounded-[24px] text-center transition-all duration-500 border-2 border-white/5 hover:border-accent hover:-translate-y-3 hover:bg-main-dark relative overflow-hidden"
          style={{
            boxShadow: "0 15px 35px -15px rgba(0,0,0,0.6)",
          }}
          key={index}
        >
          {/* Subtle gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          
          <div className="bg-main/40 pt-4 rounded-full mb-1 group-hover:scale-110 transition-transform duration-500 shadow-inner">
            <lord-icon
              src={service.src}
              trigger="hover"
              colors="primary:#ffffff,secondary:#3fd357"
              style={{ width: "120px", height: "120px" }}
            />
          </div>
          <h2 className="text-white group-hover:text-accent transition-colors duration-300 font-bold text-[24px] mb-4">
            {service.title}
          </h2>
          <p className="text-gray-300/80 text-[15px] leading-relaxed group-hover:text-white transition-colors duration-300">
            {service.text}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ServiceList;
