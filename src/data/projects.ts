export interface ProjectItem {
  name: string;
  image: string;
  link: string;
  category: string;
  featured?: boolean;
}

export const allProjects: ProjectItem[] = [
  // Graphic Design
  { name: "Ausrah Identity", image: "/assets/Photos/Gallery/Graphic-Design/1.webp", link: "https://www.behance.net/gallery/219616851/Ausrah-Identity-Social-Media-Posts", category: "Graphic Design", featured: true },
  { name: "Dr.Mohamed Identity", image: "/assets/Photos/Gallery/Graphic-Design/2.webp", link: "https://www.behance.net/gallery/214173579/Mohamed-Harby-(Identity)", category: "Graphic Design" },
  { name: "SNA Academy Identity", image: "/assets/Photos/Gallery/Graphic-Design/3.webp", link: "https://www.behance.net/gallery/210017913/SNA-Academy-(Brand)", category: "Graphic Design", featured: true },
  { name: "BlueDesk Identity", image: "/assets/Photos/Gallery/Graphic-Design/4.webp", link: "https://www.behance.net/gallery/215224455/Blue-Desk-Identity", category: "Graphic Design" },
  { name: "Book Designes", image: "/assets/Photos/Gallery/Graphic-Design/5.webp", link: "https://www.behance.net/gallery/219991609/Book-Cover-Designes", category: "Graphic Design" },
  { name: "Techars Designs", image: "/assets/Photos/Gallery/Graphic-Design/6.webp", link: "https://www.behance.net/gallery/219617553/_", category: "Graphic Design" },
  // Web Development
  { name: "QSP Agency", image: "/assets/Photos/Gallery/Web/7.webp", link: "https://qsp-media.web.app/", category: "Web Development", featured: true },
  { name: "Ausrah", image: "/assets/Photos/Gallery/Web/8.webp", link: "https://ausrah.com/", category: "Web Development", featured: true },
  { name: "Qudraat Academy", image: "/assets/Photos/Gallery/Web/9.webp", link: "https://qudraat.com/", category: "Web Development" },
  { name: "Farsi Hub", image: "/assets/Photos/Gallery/Web/10.webp", link: "https://farsi-hub.web.app/", category: "Web Development" },
  { name: "Qadiaty", image: "/assets/Photos/Gallery/Web/11.webp", link: "https://qadiaty.web.app/", category: "Web Development" },
  { name: "Spora Tex", image: "/assets/Photos/Gallery/Web/12.webp", link: "https://spora-tex.web.app/", category: "Web Development" },
  // UI/UX Design
  { name: "Flixor", image: "/assets/Photos/Gallery/UI-UX/13.webp", link: "https://www.behance.net/gallery/219991443/Flixor-UI-UX", category: "UI/UX Design", featured: true },
  { name: "Ausrah", image: "/assets/Photos/Gallery/UI-UX/14.webp", link: "https://www.figma.com/proto/uPkKlNOtlpYAeF327uydjV/DEPI-Figma-Leran?page-id=66%3A152&node-id=66-153&p=f&viewport=243%2C265%2C0.37&t=QRSERKHnBI4ZN7yr-1&scaling=min-zoom&content-scaling=fixed", category: "UI/UX Design" },
  { name: "Elbaraka", image: "/assets/Photos/Gallery/UI-UX/15.webp", link: "https://www.figma.com/proto/s7mKQwxPfrrJDvTYHiRNPv/Elbarakaagri.com?page-id=125%3A401&node-id=125-402&p=f&viewport=573%2C258%2C0.11&t=utBtSvQF5jOsucoh-1&scaling=min-zoom&content-scaling=fixed", category: "UI/UX Design" },
  { name: "UX Process", image: "/assets/Photos/Gallery/UI-UX/16.webp", link: "https://www.canva.com/design/DAGWl0JE31g/e8VVdFDsT5N8eELYtwpS1A/view?utm_content=DAGWl0JE31g&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hc735956351", category: "UI/UX Design" },
  { name: "Dr.Mohamed Harby", image: "/assets/Photos/Gallery/UI-UX/17.webp", link: "https://www.figma.com/proto/d5b8L0Wr1Nd6mvDFpl5mdh/Dr.Mohamed-Portfolio?page-id=0%3A1&node-id=1-2&t=mDi4jlVWo96gz4p9-1", category: "UI/UX Design" },
  { name: "Mersal", image: "/assets/Photos/Gallery/UI-UX/18.webp", link: "https://www.figma.com/proto/8lSoJwWEXCRGrfR1L0kTNM/Mersal-Portfolio?node-id=121-19&t=5z0IZ5671Unw9rY4-0&scaling=min-zoom&content-scaling=fixed&page-id=121%3A18", category: "UI/UX Design", featured: true },
  // Video Editing
  { name: "CAS-Cairo Universty", image: "/assets/Photos/Gallery/Video/19.webp", link: "https://www.facebook.com/share/v/181EjX5TL5/", category: "Video Editing", featured: true },
  { name: "Farsi Hub-Mersal", image: "/assets/Photos/Gallery/Video/20.webp", link: "https://www.youtube.com/watch?v=gKy0Y_TJsr0&t=2s", category: "Video Editing" },
  { name: "Awareness Palstine(Persian)", image: "/assets/Photos/Gallery/Video/21.webp", link: "https://www.youtube.com/watch?v=JmiMi8sKI4g&t=88s", category: "Video Editing" },
  { name: "Farsi Hub-Mersal", image: "/assets/Photos/Gallery/Video/22.webp", link: "https://www.youtube.com/watch?v=p5wS-QWrO9s&t=2s", category: "Video Editing" },
  { name: "Awareness Palstine 2", image: "/assets/Photos/Gallery/Video/23.webp", link: "https://www.youtube.com/watch?v=glVMcVcbCdM", category: "Video Editing", featured: true },
  { name: "Spora Tex", image: "/assets/Photos/Gallery/Video/24.webp", link: "https://www.facebook.com/share/v/1ADhGrLUWz/", category: "Video Editing" },
];

export const featuredProjects = allProjects.filter(p => p.featured);

export const categories = ["All", "Graphic Design", "Web Development", "UI/UX Design", "Video Editing"];
