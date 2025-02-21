
const projects = [
  {
    category: "Graphic Design",
    items: [
      { name: "Ausrah Identity", image: "/assets/Photos/Gallery/Graphic-Design/1.jpg" ,link:"https://www.behance.net/gallery/219616851/Ausrah-Identity-Social-Media-Posts"},
      { name: "Dr.Mohamed Identity", image: "/assets/Photos/Gallery/Graphic-Design/2.jpg",link:"https://www.behance.net/gallery/214173579/Mohamed-Harby-(Identity)" },
      { name: "SNA Academy Identity", image: "/assets/Photos/Gallery/Graphic-Design/3.jpg",link:"https://www.behance.net/gallery/210017913/SNA-Academy-(Brand)" },
      { name: "BlueDesk Identity", image: "/assets/Photos/Gallery/Graphic-Design/4.jpg" ,link:"https://www.behance.net/gallery/215224455/Blue-Desk-Identity"},
      { name: "Book Designes", image: "/assets/Photos/Gallery/Graphic-Design/5.jpg",link:"" },
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
      { name: "QSP Agency", image: "/assets/Photos/Gallery/UI-UX/13.jpg",link:"https://qsp-media.web.app/" },
      { name: "Ausrah", image: "/assets/Photos/Gallery/UI-UX/14.jpg",link:"https://ausrah.com/" },
      { name: "Qudraat Academy", image: "/assets/Photos/Gallery/UI-UX/15.jpg",link:"https://qudraat.com/" },
      { name: "Farsi Hub", image: "/assets/Photos/Gallery/UI-UX/16.jpg",link:"https://farsi-hub.web.app/" },
      { name: "Qadiaty", image: "/assets/Photos/Gallery/UI-UX/17.jpg",link:"https://qadiaty.web.app/" },
      { name: "Spora Tex", image: "/assets/Photos/Gallery/UI-UX/18.jpg" ,link:"https://spora-tex.web.app/"},
    ],
  },
  {
    category: "Video Editing",
    items: [
      { name: "QSP Agency", image: "/assets/Photos/Gallery/Video/19.jpg",link:"https://qsp-media.web.app/" },
      { name: "Ausrah", image: "/assets/Photos/Gallery/Video/20.jpg",link:"https://ausrah.com/" },
      { name: "Qudraat Academy", image: "/assets/Photos/Gallery/Video/21.jpg",link:"https://qudraat.com/" },
      { name: "Farsi Hub", image: "/assets/Photos/Gallery/Video/22.jpg",link:"https://farsi-hub.web.app/" },
      { name: "Qadiaty", image: "/assets/Photos/Gallery/Video/23.jpg",link:"https://qadiaty.web.app/" },
      { name: "Spora Tex", image: "/assets/Photos/Gallery/Video/24.jpg" ,link:"https://spora-tex.web.app/"},
    ],
  },
];

function GallerySection (){
  return (
<>
    <h1 className="Title">Gallery</h1>
      {projects.map((project, index) => (
        <div className="PJS Web" key={index}>
          <h3 className="sub Title">{project.category}</h3>
          {project.items.map((item, idx) => (
            <a href={item.link} target="_blank" className="PJ" key={idx}>
              <img src={item.image} alt={item.name} />
              <div className="data">
                <div className="view">
                    <lord-icon
            src="https://cdn.lordicon.com/wsbmifnf.json"
            trigger="loop"
            colors="primary:#3fd357,secondary:#3fd357"
                style={{ width: '100px', height: '100px' }}>
            </lord-icon>
                  <h6>Open Project</h6>
                </div>
                <h3>{item.name}</h3>
                <p>{project.category}</p>
              </div>
            </a>
          ))}
          {/* <a href="#" className="see-m-BTN">
            See More{' '}
            <i className={`fa-brands ${project.category === "Graphic Design" ? "fa-behance" : "fa-github"}`}></i>
          </a> */}
        </div>
      ))}
</>
  );
};

export default GallerySection;