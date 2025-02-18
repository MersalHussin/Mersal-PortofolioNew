import Marquee from "react-fast-marquee";
import "./css/Home.css";

function Home() {
  return (
    <>
      <section className="home">
        <div className="home-container">
          <h2 className="welcome-text">Hello, Welcome at my portfolio</h2>
          <h1 className="name">Mersal</h1>
          <div className="buttons">
            <button className="fire-btn">Fire The World</button>
            <a href="/cv.pdf" className="download-cv">
              Download CV
            </a>
          </div>
          <div className="social-icons">
            <a href="#">
              <img src="/assets/Photos/Social/Facebook.svg" alt="Facebook" />
            </a>
            <a href="#">
              <img src="/assets/Photos/Social/Linked-in.svg" alt="Linkedin" />
            </a>
            <a href="#">
              <img src="/assets/Photos/Social/Github.svg" alt="Github" />
            </a>
            <a href="#">
              <img src="/assets/Photos/Social/Behance.svg" alt="Behance" />
            </a>
          </div>
          <div className="bottom-icon">
            <a href="#about">
              <img src="/assets/Photos/scroll-down.svg" alt="ScrollDown" />
            </a>
          </div>
        </div>
      </section>

      {/* AboutSection */}
      <section className="about">
        <div className="container">
          <div className="about-content">
            <div className="image-container">
              <img
                src="/assets/Photos/Mersal-Pic.png"
                alt="Mersal"
                className="profile-img"
              />
            </div>
            <div className="text-container">
              <h2 className="about-title Title">About Me</h2>
              <p className="about-text">
                I'am Mersal, I have more than two years of experience in
                front-end development and graphic design, as well as my
                experience in video editing. Moreover, writing content using
                Word application and made powerpoint design, despite being a
                student at the Faculty of Arts, my experience and skills in
                development and design show my dedication and professionalism. I
                can create websites, design YouTube thumbnails, logos, and craft
                social media posts professionally , powerpoint design . Please
                feel free to contact me if you need any services in these areas
                , I am looking forward to providing the best service for you.
              </p>
            </div>
          </div>
        </div>
      </section>
          {/* Skills Marquee Section */}
      <section className="skills-section"> 
        <Marquee speed={60} gradient={false}>
          <img src="/assets/Photos/apps/ai.png" alt="Adobe Illustrator" className="skill-icon" />
          <img src="/assets/Photos/apps/ps.png" alt="Adobe Photoshop" className="skill-icon" />
          <img src="/assets/Photos/apps/id.png" alt="Adobe InDesign" className="skill-icon" />
          <img src="/assets/Photos/apps/ae.png" alt="Adobe After Effects" className="skill-icon" />
          <img src="/assets/Photos/apps/pr.png" alt="Adobe Premiere Pro" className="skill-icon" />
          <img src="/assets/Photos/apps/Canva.png" alt="Canva" className="skill-icon" />
          <img src="/assets/Photos/apps/miro.png" alt="JavaScript" className="skill-icon" />
          <img src="/assets/Photos/apps/xd.png" alt="Adobe XD" className="skill-icon" />
          <img src="/assets/Photos/apps/figma.png" alt="Figma" className="skill-icon" />
          <img src="/assets/Photos/apps/html.png" alt="HTML" className="skill-icon" />
          <img src="/assets/Photos/apps/css.png" alt="CSS" className="skill-icon" />
          <img src="/assets/Photos/apps/js.png" alt="JavaScript" className="skill-icon" />
          <img src="/assets/Photos/apps/react.png" alt="JavaScript" className="skill-icon" />
        </Marquee>
      </section>


      <section className="Services-section"> 
        <h1 className="Title">Services</h1>
        <div className="services">
          <div className="service">
        <lord-icon
    src="https://cdn.lordicon.com/bzxxzycl.json"
    trigger="hover"
            colors="primary:#ffffff,secondary:#3fd357"
            style={{ width: "150px", height: "150px" }}>
        </lord-icon>
            <h2 className="service-title">Web Development</h2>
            <p className="service-text">
              I can create websites, design YouTube thumbnails, logos, and craft
              social media posts professionally 
            </p>
          </div>
          <div className="service">
        <lord-icon
            src="https://cdn.lordicon.com/ovxlloho.json"
            trigger="hover"
            colors="primary:#ffffff,secondary:#3fd357"
            style={{ width: "150px", height: "150px" }}>
        </lord-icon>
            <h2 className="service-title">Web Development</h2>
            <p className="service-text">
              I can create websites, design YouTube thumbnails, logos, and craft
              social media posts professionally 
            </p>
          </div>
          <div className="service">
        <lord-icon
            src="https://cdn.lordicon.com/ewtvnblg.json"
            trigger="hover"
            colors="primary:#ffffff,secondary:#3fd357"
            style={{ width: "150px", height: "150px" }}>
        </lord-icon>
            <h2 className="service-title">Web Development</h2>
            <p className="service-text">
              I can create websites, design YouTube thumbnails, logos, and craft
              social media posts professionally 
            </p>
          </div>
          <div className="service">
        <lord-icon
            src="https://cdn.lordicon.com/qfwgmyhc.json"
            trigger="hover"
            colors="primary:#ffffff,secondary:#3fd357"
            style={{ width: "150px", height: "150px" }}>
        </lord-icon>
            <h2 className="service-title">Web Development</h2>
            <p className="service-text">
              I can create websites, design YouTube thumbnails, logos, and craft
              social media posts professionally 
            </p>
          </div>
          <div className="service">
        <lord-icon
    src="https://cdn.lordicon.com/weynygnn.json"
            trigger="hover"
            colors="primary:#ffffff,secondary:#3fd357"
            style={{ width: "150px", height: "150px" }}>
        </lord-icon>
            <h2 className="service-title">Web Development</h2>
            <p className="service-text">
              I can create websites, design YouTube thumbnails, logos, and craft
              social media posts professionally 
            </p>
          </div>
          <div className="service">
        <lord-icon
   src="https://cdn.lordicon.com/wbthjkyu.json"
            trigger="hover"
            colors="primary:#ffffff,secondary:#3fd357"
            style={{ width: "150px", height: "150px" }}>
        </lord-icon>
            <h2 className="service-title">Web Development</h2>
            <p className="service-text">
              I can create websites, design YouTube thumbnails, logos, and craft
              social media posts professionally 
            </p>
          </div>
        </div>
      </section>

      <section className="Gallery-section">
      <h1 className="Title">Gallery</h1>
      <div className="PRJS Web">
        <div className="PJ">
          <img src="/assets/Photos/LandBG.png" alt="" />
        </div>
      </div>
      </section>


    </>
  );
}

export default Home;
