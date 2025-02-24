import { useTranslation } from "react-i18next";

const ServiceList = () => {
  const { t } = useTranslation();

  const services = [
    { src: "https://cdn.lordicon.com/ewtvnblg.json", title: t("services.graphic"), text: t("services.graphicText") },
    { src: "https://cdn.lordicon.com/wbthjkyu.json", title: t("services.web"), text: t("services.webText") },
    { src: "https://cdn.lordicon.com/qfwgmyhc.json", title: t("services.video"), text: t("services.videoText") },
    { src: "https://cdn.lordicon.com/ovxlloho.json", title: t("services.ui"), text: t("services.uiText") },
    { src: "https://cdn.lordicon.com/bzxxzycl.json", title: t("services.responsive"), text: t("services.responsiveText") },
    { src: "https://cdn.lordicon.com/pfmdukue.json", title: t("services.branding"), text: t("services.brandingText") },
  ];

  return (
    <div className="services">
      {services.map((service, index) => (
        <div className="service" key={index}>
          <lord-icon
            src={service.src}
            trigger="hover"
            colors="primary:#ffffff,secondary:#3fd357"
            style={{ width: "150px", height: "150px" }}
          ></lord-icon>
          <h2 className="service-title">{service.title}</h2>
          <p className="service-text">{service.text}</p>
        </div>
      ))}
    </div>
  );
};

export default ServiceList;
