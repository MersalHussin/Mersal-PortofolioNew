import React from "react";
import { useTranslation } from "react-i18next";

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-main-dark text-white pt-[50px] pb-5 text-center border-t-[3px] border-accent" id="contact">
      <div>
        <img src="/assets/Photos/Mersal-wide-logo.svg" alt="Mersal Logo" className="mx-auto" />
        <p className="w-[500px] max-sm:w-[300px] max-sm:text-base px-5 pt-[10px] mx-auto text-sm">
          {t("footerText")}
        </p>
        <a
          href="mailto:hello@mersal.top"
          target="_blank"
          rel="noreferrer"
          className="text-white text-[30px] flex justify-center pt-5 items-center"
        >
          <lord-icon
            src="https://cdn.lordicon.com/sugotkzl.json"
            trigger="loop"
            delay="2000"
            colors="primary:#3fd357"
            style={{ width: "30px", height: "30px" }}
          />
          Hello@mersal.top
        </a>
        <div className="mx-auto p-[10px]">
          <a href="https://wa.me/+201064177298" target="_blank" rel="noreferrer">
            <img src="/assets/Photos/Social/Whatsapp.svg" alt="whatsapp" className="w-[30px] inline mx-[7px] transition-all duration-300 hover:scale-110" />
          </a>
          <a href="https://www.facebook.com/MHMersal" target="_blank" rel="noreferrer">
            <img src="/assets/Photos/Social/Facebook.svg" alt="Facebook" className="w-[30px] inline mx-[7px] transition-all duration-300 hover:scale-110" />
          </a>
          <a href="https://www.linkedin.com/in/mmersal/" target="_blank" rel="noreferrer">
            <img src="/assets/Photos/Social/Linked-in.svg" alt="Linkedin" className="w-[30px] inline mx-[7px] transition-all duration-300 hover:scale-110" />
          </a>
          <a href="https://github.com/MersalHussin" target="_blank" rel="noreferrer">
            <img src="/assets/Photos/Social/Github.svg" alt="Github" className="w-[30px] inline mx-[7px] transition-all duration-300 hover:scale-110" />
          </a>
          <a href="https://www.behance.net/mmersal" target="_blank" rel="noreferrer">
            <img src="/assets/Photos/Social/Behance.svg" alt="Behance" className="w-[30px] inline mx-[7px] transition-all duration-300 hover:scale-110" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
