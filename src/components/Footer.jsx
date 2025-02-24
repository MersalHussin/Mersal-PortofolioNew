import { t } from "i18next"

function Footer() {
  return (
    <>
      <footer id="contact">
        <div>
            <img src="/assets/Photos/Mersal-wide-logo.svg" alt="" />
            <p>
              {t("footerText")}
            </p>
            <a href="mailto: hello@mersal.top" target="_blank" className="email">
                  <lord-icon
          src="https://cdn.lordicon.com/sugotkzl.json"
          trigger="loop"
          delay="2000"
          colors="primary:#3fd357"
          style={{width:"30px",height:"30px"}}>
      </lord-icon>
                    Hello@mersal.top 

            </a>
            <div className="social-icons">
            <a href="https://wa.me/+201064177298" target="_blank">
              <img src="/assets/Photos/Social/Whatsapp.svg" alt="whatsapp" />
            </a>
            <a href="https://www.facebook.com/MHMersal" target="_blank">
              <img src="/assets/Photos/Social/Facebook.svg" alt="Facebook" />
            </a>
            <a href="https://www.linkedin.com/in/mmersal/" target="_blank">
              <img src="/assets/Photos/Social/Linked-in.svg" alt="Linkedin" />
            </a>
            <a href="https://github.com/MersalHussin" target="_blank">
              <img src="/assets/Photos/Social/Github.svg" alt="Github" />
            </a>
            <a href="https://www.behance.net/mmersal" target="_blank">
              <img src="/assets/Photos/Social/Behance.svg" alt="Behance" />
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer