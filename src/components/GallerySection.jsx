import { t } from "i18next";

const projects = [
  {
    category: "Graphic Design",
    items: [
      { name: "Ausrah Identity", image: "/assets/Photos/Gallery/Graphic-Design/1.jpg" ,link:"https://www.behance.net/gallery/219616851/Ausrah-Identity-Social-Media-Posts"},
      { name: "Dr.Mohamed Identity", image: "/assets/Photos/Gallery/Graphic-Design/2.jpg",link:"https://www.behance.net/gallery/214173579/Mohamed-Harby-(Identity)" },
      { name: "SNA Academy Identity", image: "/assets/Photos/Gallery/Graphic-Design/3.jpg",link:"https://www.behance.net/gallery/210017913/SNA-Academy-(Brand)" },
      { name: "BlueDesk Identity", image: "/assets/Photos/Gallery/Graphic-Design/4.jpg" ,link:"https://www.behance.net/gallery/215224455/Blue-Desk-Identity"},
      { name: "Book Designes", image: "/assets/Photos/Gallery/Graphic-Design/5.jpg",link:"https://www.behance.net/gallery/219991609/Book-Cover-Designes" },
      { name: "Techars Designs", image: "/assets/Photos/Gallery/Graphic-Design/6.jpg",link:"https://www.behance.net/gallery/219617553/_" },
    ],
  },
  {
    category: "Web Development",
    items: [
      { name: "QSP Agency", image: "/assets/Photos/Gallery/Web/7.jpg",link:"https://qsp-media.web.app/" },
      { name: "Ausrah", image: "/assets/Photos/Gallery/Web/8.jpg",link:"https://ausrah.com/" },
      { name: "Qudraat Academy", image: "/assets/Photos/Gallery/Web/9.jpg",link:"https://qudraat.com/" },
      { name: "Farsi Hub", image: "/assets/Photos/Gallery/Web/10.jpg",link:"https://farsi-hub.web.app/" },
      { name: "Qadiaty", image: "/assets/Photos/Gallery/Web/11.jpg",link:"https://qadiaty.web.app/" },
      { name: "Spora Tex", image: "/assets/Photos/Gallery/Web/12.jpg" ,link:"https://spora-tex.web.app/"},
    ],
  },
  {
    category: "UI/UX Design",
    items: [
      { name: "Flixor", image: "/assets/Photos/Gallery/UI-UX/13.jpg",link:"https://www.behance.net/gallery/219991443/Flixor-UI-UX" },
      { name: "Ausrah", image: "/assets/Photos/Gallery/UI-UX/14.jpg",link:"https://www.figma.com/proto/uPkKlNOtlpYAeF327uydjV/DEPI-Figma-Leran?page-id=66%3A152&node-id=66-153&p=f&viewport=243%2C265%2C0.37&t=QRSERKHnBI4ZN7yr-1&scaling=min-zoom&content-scaling=fixed" },
      { name: "Elbaraka", image: "/assets/Photos/Gallery/UI-UX/15.jpg",link:"https://www.figma.com/proto/s7mKQwxPfrrJDvTYHiRNPv/Elbarakaagri.com?page-id=125%3A401&node-id=125-402&p=f&viewport=573%2C258%2C0.11&t=utBtSvQF5jOsucoh-1&scaling=min-zoom&content-scaling=fixed" },
      { name: "UX Process", image: "/assets/Photos/Gallery/UI-UX/16.jpg",link:"https://www.canva.com/design/DAGWl0JE31g/e8VVdFDsT5N8eELYtwpS1A/view?utm_content=DAGWl0JE31g&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hc735956351" },
      { name: "Dr.Mohamed Harby", image: "/assets/Photos/Gallery/UI-UX/17.jpg",link:"https://www.figma.com/proto/d5b8L0Wr1Nd6mvDFpl5mdh/Dr.Mohamed-Portfolio?page-id=0%3A1&node-id=1-2&t=mDi4jlVWo96gz4p9-1" },
      { name: "Mersal", image: "/assets/Photos/Gallery/UI-UX/18.jpg" ,link:"https://www.figma.com/proto/8lSoJwWEXCRGrfR1L0kTNM/Mersal-Portfolio?node-id=121-19&t=5z0IZ5671Unw9rY4-0&scaling=min-zoom&content-scaling=fixed&page-id=121%3A18"},
    ],
  },
  {
    category: "Video Editing",
    items: [
      { name: "CAS-Cairo Universty", image: "/assets/Photos/Gallery/Video/19.jpg",link:"https://www.facebook.com/share/v/181EjX5TL5/" },
      { name: "Farsi Hub-Mersal", image: "/assets/Photos/Gallery/Video/20.jpg",link:"https://www.youtube.com/watch?v=gKy0Y_TJsr0&t=2s" },
      { name: "Awareness Palstine(Persian)", image: "/assets/Photos/Gallery/Video/21.jpg",link:"https://www.youtube.com/watch?v=JmiMi8sKI4g&t=88s" },
      { name: "Farsi Hub-Mersal", image: "/assets/Photos/Gallery/Video/22.jpg",link:"https://www.youtube.com/watch?v=p5wS-QWrO9s&t=2s" },
      { name: "Awareness Palstine 2", image: "/assets/Photos/Gallery/Video/23.jpg",link:"https://www.youtube.com/watch?v=glVMcVcbCdM" },
      { name: "Spora Tex", image: "/assets/Photos/Gallery/Video/24.jpg" ,link:"https://www.facebook.com/share/v/1ADhGrLUWz/"},
    ],
  },
];

function GallerySection (){
  return (
<>
      <h1 className="Title">{t("gallery.title")}</h1>
      {projects.map((project, index) => (
        <div className="PJS" key={index}>
          <h3 className="sub Title">{t(`gallery.categories.${project.category}`)}</h3>
          {project.items.map((item, idx) => (
            <a href={item.link} target="_blank" rel="noopener noreferrer" className="PJ" key={idx}>
              <img src={item.image} alt={item.name} />
              <div className="data">
                <div className="view">
                  <lord-icon
                    src="https://cdn.lordicon.com/wsbmifnf.json"
                    trigger="loop"
                    colors="primary:#3fd357,secondary:#3fd357"
                    style={{ width: '100px', height: '100px' }}>
                  </lord-icon>
                  <h6>{t("gallery.openProject")}</h6>
                </div>
                <h3>{item.name}</h3>
                <p>{t(`gallery.categories.${project.category}`)}</p>
              </div>
            </a>
          ))}
        </div>
      ))}
    </>
  );
};

export default GallerySection;