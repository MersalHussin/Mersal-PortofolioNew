import React from "react";
import { useTranslation } from "react-i18next";

interface ProjectItem {
  name: string;
  image: string;
  link: string;
}

interface ProjectCategory {
  category: string;
  items: ProjectItem[];
}

const projects: ProjectCategory[] = [
  {
    category: "Graphic Design",
    items: [
      { name: "Ausrah Identity", image: "/assets/Photos/Gallery/Graphic-Design/1.webp", link: "https://www.behance.net/gallery/219616851/Ausrah-Identity-Social-Media-Posts" },
      { name: "Dr.Mohamed Identity", image: "/assets/Photos/Gallery/Graphic-Design/2.webp", link: "https://www.behance.net/gallery/214173579/Mohamed-Harby-(Identity)" },
      { name: "SNA Academy Identity", image: "/assets/Photos/Gallery/Graphic-Design/3.webp", link: "https://www.behance.net/gallery/210017913/SNA-Academy-(Brand)" },
      { name: "BlueDesk Identity", image: "/assets/Photos/Gallery/Graphic-Design/4.webp", link: "https://www.behance.net/gallery/215224455/Blue-Desk-Identity" },
      { name: "Book Designes", image: "/assets/Photos/Gallery/Graphic-Design/5.webp", link: "https://www.behance.net/gallery/219991609/Book-Cover-Designes" },
      { name: "Techars Designs", image: "/assets/Photos/Gallery/Graphic-Design/6.webp", link: "https://www.behance.net/gallery/219617553/_" },
    ],
  },
  {
    category: "Web Development",
    items: [
      { name: "QSP Agency", image: "/assets/Photos/Gallery/Web/7.webp", link: "https://qsp-media.web.app/" },
      { name: "Ausrah", image: "/assets/Photos/Gallery/Web/8.webp", link: "https://ausrah.com/" },
      { name: "Qudraat Academy", image: "/assets/Photos/Gallery/Web/9.webp", link: "https://qudraat.com/" },
      { name: "Farsi Hub", image: "/assets/Photos/Gallery/Web/10.webp", link: "https://farsi-hub.web.app/" },
      { name: "Qadiaty", image: "/assets/Photos/Gallery/Web/11.webp", link: "https://qadiaty.web.app/" },
      { name: "Spora Tex", image: "/assets/Photos/Gallery/Web/12.webp", link: "https://spora-tex.web.app/" },
    ],
  },
  {
    category: "UI/UX Design",
    items: [
      { name: "Flixor", image: "/assets/Photos/Gallery/UI-UX/13.webp", link: "https://www.behance.net/gallery/219991443/Flixor-UI-UX" },
      { name: "Ausrah", image: "/assets/Photos/Gallery/UI-UX/14.webp", link: "https://www.figma.com/proto/uPkKlNOtlpYAeF327uydjV/DEPI-Figma-Leran?page-id=66%3A152&node-id=66-153&p=f&viewport=243%2C265%2C0.37&t=QRSERKHnBI4ZN7yr-1&scaling=min-zoom&content-scaling=fixed" },
      { name: "Elbaraka", image: "/assets/Photos/Gallery/UI-UX/15.webp", link: "https://www.figma.com/proto/s7mKQwxPfrrJDvTYHiRNPv/Elbarakaagri.com?page-id=125%3A401&node-id=125-402&p=f&viewport=573%2C258%2C0.11&t=utBtSvQF5jOsucoh-1&scaling=min-zoom&content-scaling=fixed" },
      { name: "UX Process", image: "/assets/Photos/Gallery/UI-UX/16.webp", link: "https://www.canva.com/design/DAGWl0JE31g/e8VVdFDsT5N8eELYtwpS1A/view?utm_content=DAGWl0JE31g&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hc735956351" },
      { name: "Dr.Mohamed Harby", image: "/assets/Photos/Gallery/UI-UX/17.webp", link: "https://www.figma.com/proto/d5b8L0Wr1Nd6mvDFpl5mdh/Dr.Mohamed-Portfolio?page-id=0%3A1&node-id=1-2&t=mDi4jlVWo96gz4p9-1" },
      { name: "Mersal", image: "/assets/Photos/Gallery/UI-UX/18.webp", link: "https://www.figma.com/proto/8lSoJwWEXCRGrfR1L0kTNM/Mersal-Portfolio?node-id=121-19&t=5z0IZ5671Unw9rY4-0&scaling=min-zoom&content-scaling=fixed&page-id=121%3A18" },
    ],
  },
  {
    category: "Video Editing",
    items: [
      { name: "CAS-Cairo Universty", image: "/assets/Photos/Gallery/Video/19.webp", link: "https://www.facebook.com/share/v/181EjX5TL5/" },
      { name: "Farsi Hub-Mersal", image: "/assets/Photos/Gallery/Video/20.webp", link: "https://www.youtube.com/watch?v=gKy0Y_TJsr0&t=2s" },
      { name: "Awareness Palstine(Persian)", image: "/assets/Photos/Gallery/Video/21.webp", link: "https://www.youtube.com/watch?v=JmiMi8sKI4g&t=88s" },
      { name: "Farsi Hub-Mersal", image: "/assets/Photos/Gallery/Video/22.webp", link: "https://www.youtube.com/watch?v=p5wS-QWrO9s&t=2s" },
      { name: "Awareness Palstine 2", image: "/assets/Photos/Gallery/Video/23.webp", link: "https://www.youtube.com/watch?v=glVMcVcbCdM" },
      { name: "Spora Tex", image: "/assets/Photos/Gallery/Video/24.webp", link: "https://www.facebook.com/share/v/1ADhGrLUWz/" },
    ],
  },
];

const GallerySection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <h1 className="section-title">{t("gallery.title")}</h1>
      {projects.map((project, index) => (
        <div
          className="flex justify-center items-center flex-wrap max-w-[1280px] mx-auto mt-[100px] p-[30px] gap-[30px] relative"
          key={index}
        >
          <h3 className="sub-title">
            {t(`gallery.categories.${project.category}`)}
          </h3>
          {project.items.map((item, idx) => (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-[380px] bg-main rounded-[10px] text-center transition-all duration-300 border-2 border-main-dark overflow-hidden cursor-pointer relative hover:border-accent"
              style={{
                boxShadow: "-5px -5px 0px 1px #00134E",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                  "5px 5px 0px 1px #3FD357";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                  "-5px -5px 0px 1px #00134E";
              }}
              key={idx}
            >
              <img
                src={item.image}
                alt={item.name}
                className="max-w-full max-h-full rounded-[10px] transition-all duration-300 scale-110 group-hover:blur-[1px] group-hover:scale-[1.2] group-hover:opacity-30"
              />
              <div className="absolute bottom-0 w-full px-5 pb-[10px] pt-10 opacity-0 z-10 transition-all duration-300 text-accent group-hover:opacity-100"
                style={{
                  background: "linear-gradient(#07195200, #071952d8, #071952 80%)",
                }}
              >
                <div className="absolute -top-[50px] left-1/2 -translate-x-1/2 -translate-y-1/2 text-[50px] flex justify-center items-center gap-[2px] flex-col">
                  <lord-icon
                    src="https://cdn.lordicon.com/wsbmifnf.json"
                    trigger="loop"
                    colors="primary:#3fd357,secondary:#3fd357"
                    style={{ width: "100px", height: "100px" }}
                  />
                  <h6 className="text-xl font-semibold">
                    {t("gallery.openProject")}
                  </h6>
                </div>
                <h3 className="text-[30px] font-black">{item.name}</h3>
                <p className="text-xl font-semibold -m-[10px] pb-5">
                  {t(`gallery.categories.${project.category}`)}
                </p>
              </div>
            </a>
          ))}
        </div>
      ))}
    </>
  );
};

export default GallerySection;
