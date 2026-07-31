import React from "react";
import { useTranslation } from "react-i18next";

const Footer: React.FC = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language || "en";

  return (
    <footer className="bg-main text-white pt-20 pb-6 border-t-[3px] border-accent relative overflow-hidden" id="contact">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8 mb-16">
          
          {/* Brand & Bio */}
          <div className="flex flex-col items-center md:items-start text-center md:text-start">
            <img 
              src={currentLang === "ar" ? "/assets/Photos/Mersal-ar-wide-logo.svg" : "/assets/Photos/Mersal-wide-logo.svg"} 
              alt="Mersal Logo" 
              className="w-[140px] mb-6" 
            />
            <p className="text-white/70 leading-relaxed text-sm max-w-[300px]">
              {t("footerText")}
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-start">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent" />
              Get In Touch
            </h3>
            <a
              href="mailto:hi@mersal.me"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-3 text-white/80 hover:text-accent transition-colors duration-300 mb-6"
            >
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-accent/50 transition-all">
                <lord-icon
                  src="https://cdn.lordicon.com/sugotkzl.json"
                  trigger="loop"
                  delay="2000"
                  colors="primary:#3fd357"
                  style={{ width: "20px", height: "20px" }}
                />
              </div>
              <span className="text-lg font-medium tracking-wide">hi@mersal.me</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center lg:items-end text-center lg:text-end">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2 lg:flex-row-reverse">
              <span className="w-2 h-2 rounded-full bg-accent" />
              Follow Me
            </h3>
            <div className="flex items-center gap-4 flex-wrap justify-center lg:justify-end">
              {[
                { name: "Whatsapp", url: "https://wa.me/+201150968735", icon: "/assets/Photos/Social/Whatsapp.svg" },
                { name: "Facebook", url: "https://www.facebook.com/MHMersal", icon: "/assets/Photos/Social/Facebook.svg" },
                { name: "Linkedin", url: "https://www.linkedin.com/in/mmersal/", icon: "/assets/Photos/Social/Linked-in.svg" },
                { name: "Github", url: "https://github.com/MersalHussin", icon: "/assets/Photos/Social/Github.svg" },
                { name: "Behance", url: "https://www.behance.net/mmersal", icon: "/assets/Photos/Social/Behance.svg" },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:bg-accent/10 hover:border-accent hover:shadow-[0_0_15px_rgba(63,211,87,0.3)]"
                >
                  <img src={social.icon} alt={social.name} className="w-5 h-5 opacity-80" />
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm font-medium">
            &copy; {new Date().getFullYear()} Mersal. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-white/50 text-sm font-medium">
            Made with <span className="text-accent animate-pulse">❤</span> by Mersal
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
