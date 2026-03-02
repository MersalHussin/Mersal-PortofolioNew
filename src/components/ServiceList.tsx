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
    <div className="flex justify-center max-w-[1280px] mx-auto items-center flex-wrap gap-[30px]">
      {services.map((service, index) => (
        <div
          className="w-[380px] max-sm:w-[300px] p-5 bg-main rounded-[10px] text-center transition-all duration-300 border-2 border-main-dark text-lg hover:bg-main-dark hover:border-accent"
          style={{
            boxShadow: "7px 7px 0px 1px #00134E",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLDivElement).style.boxShadow =
              "-7px -7px 0px 1px #3FD357";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLDivElement).style.boxShadow =
              "7px 7px 0px 1px #00134E";
          }}
          key={index}
        >
          <lord-icon
            src={service.src}
            trigger="hover"
            colors="primary:#ffffff,secondary:#3fd357"
            style={{ width: "150px", height: "150px" }}
          />
          <h2 className="text-accent font-black text-[30px]">
            {service.title}
          </h2>
          <p className="text-white">{service.text}</p>
        </div>
      ))}
    </div>
  );
};

export default ServiceList;
