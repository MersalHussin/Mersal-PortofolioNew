import './css/Home.css';

function Home() {
  return (
    <>
    <section className='home'>
      <div className="home-container">
        <h2 className="welcome-text">Hello, Welcome at my portfolio</h2>
        <h1 className="name">Mersal</h1>
        <div className="buttons">
          <button className="fire-btn">Fire The World</button>
          <a href="/cv.pdf" className="download-cv">Download CV</a>
        </div>
        <div className="social-icons">
          <a href="#"><img src="/assets/Photos/Social/Facebook.svg" alt="Facebook" /></a>
          <a href="#"><img src="/assets/Photos/Social/Linked-in.svg" alt="Linkedin" /></a>
          <a href="#"><img src="/assets/Photos/Social/Github.svg" alt="Github" /></a>
          <a href="#"><img src="/assets/Photos/Social/Behance.svg" alt="Behance" /></a>
        </div>
        <div className="bottom-icon">
          <a href="#about">
          <img src="/assets/Photos/scroll-down.svg" alt="ScrollDown" />
          </a>
        </div>
      </div>
    </section>
    </>
  );
}

export default Home;
