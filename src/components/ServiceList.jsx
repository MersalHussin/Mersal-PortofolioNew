const services = [
  { src: "https://cdn.lordicon.com/bzxxzycl.json", title: "Web Development", text: "I can create websites, design YouTube thumbnails, logos, and craft social media posts professionally" },
  { src: "https://cdn.lordicon.com/ovxlloho.json", title: "Graphic Design", text: "I specialize in creating visually appealing designs for various digital platforms" },
  { src: "https://cdn.lordicon.com/ewtvnblg.json", title: "SEO Optimization", text: "Improving website rankings and visibility through effective SEO strategies" },
  { src: "https://cdn.lordicon.com/qfwgmyhc.json", title: "Content Writing", text: "Crafting engaging and informative content for blogs, websites, and social media" },
  { src: "https://cdn.lordicon.com/weynygnn.json", title: "Video Editing", text: "Editing and enhancing videos for YouTube, social media, and professional presentations" },
  { src: "https://cdn.lordicon.com/wbthjkyu.json", title: "App Development", text: "Building responsive and functional mobile applications tailored to user needs" }
];

const ServiceList = () => {
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
