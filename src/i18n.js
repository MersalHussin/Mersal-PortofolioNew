import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      // Navbar
      "Home": "Home",
      "Lang": "Arabic",
      "About": "About",
      "Services": "Services",
      "services-t": "Services",
      "Portfolio": "Gallery",
      "Testimonials": "Testimonials",
      "Contact": "Contact",
      // Hero Section
      "mersal": "Mersal",
      "welcome": "Hello, Welcome at My Personal Website",
      "fireTheWorld": "Fire The World",
      "downloadCV": "Download CV",
      "aboutMe": "About Me",
      "aboutText": "I'm just Mersal, I don’t just design, I set things on fire!🔥 From logos to seamless UI/UX and high-impact visuals, I craft experiences that grab attention and leave a mark. Plus, I build the websites to bring it all to life. Let’s make something unforgettable!",
      "services": "Services",
      "testimonials": "Testimonials",
      "certificates": "Certificates",
      "ctaText": "Just take a step to \n Fire The World",
      "ctaButton": "Let's Fire The World",
      "trustedBy": "Trusted By",
      "gallery": {
        "title": "Gallery",
        "openProject": "Open Project",
        "categories": {
          "Graphic Design": "Graphic Design",
          "Web Development": "Web Development",
          "UI/UX Design": "UI/UX Design",
          "Video Editing": "Video Editing"
        }
      },
      "statistics": {
        "design": "Design",
        "website": "Website",
        "logo": "Logo",
        "video": "Video"
      },
      "services": {
        "web": "Web Development",
        "webText": "Creating dynamic and responsive websites with a focus on user experience.",
        
        "graphic": "Graphic Design",
        "graphicText": "Crafting visually stunning and impactful designs for various digital platforms.",
        
        "responsive": "Responsive Design",
        "responsiveText": "Ensuring seamless and optimized experiences across all screen sizes and devices",
        
        "video": "Video Editing",
        "videoText": "Producing high-quality, engaging video content that enhances identity.",
        
        "branding": "Full Branding",
        "brandingText": "Developing a strong, cohesive brand identity, from logos to marketing materials",
        
        "ui": "UI&UX Desgin",
        "uiText": "Designing intuitive, user-friendly digital experiences that enhance usability "
      },
      "footerText" :"If you’ve made it this far on my site, big props to you, seriously! Honored to have you here, for real. Hope you’ve taken the step to become an absolute legend to everyone around you and light up the world—so what’s up, ready to Fire The World? 🔥"
    }
  },
  ar: {
    translation: {
      "Home": "الرئيسية",
      "About": "من أنا",
      "Services": "الخدمات",
      "Portfolio": "المعرض",
      "Testimonials": "آراء أفتخر بها",
      "Contact": "اتصل بنا",
      "Lang": "الإنجليزية",
      // Hero Section
      "mersal": "مــرســال",
      "welcome": "أهلًا بيك في موقعي الشخصي ",
      "fireTheWorld": "روح ولع الدنيا",
      "downloadCV": " السيرة الذاتية",
      "aboutMe": "من أنا",
      "aboutText": "أنا مرسال، مش بس بصمم، لكن بحاول أخليك تولع الدنيا🔥, من أول الشعارات لـ حد تصميمات UI/UX السلسة والتأثيرات البصرية القوية، بعمل تجارب تلفت الانتباه وتترك أثر واضح. لأ ومش بس كده ده ممكن أبنيلك المواقع عشان كل تحول كل ده لواقع. مستني ايه يلا نولع الدنيا ونعمل حاجه متتنسيش",
      "services": "الخدمات",
      "services-t": "الخدمات",
      "testimonials": "آراء أفتخر بها",
      "certificates": "الشهادات",
      "ctaText": "انت بس خد الخطوة إنك  تولع الدنيا",
      "ctaButton": "يلا نولع الدنيا",
      "trustedBy": "موثوق به من قبل",
      "gallery": {
        "title": "المعرض",
        "openProject": "افتح المشروع",
        "categories": {
          "Graphic Design": "تصميم الجرافيك",
          "Web Development": "تطوير الويب",
          "UI/UX Design": "تصميم UI/UX",
          "Video Editing": "مونتاج الفيديو"
        }
      },
      "statistics": {
        "design": "تصميم",
        "website": "موقع",
        "logo": "شعار",
        "video": "فيديو"
      },
      "services": {
        "web": "تطوير الويب",
        "webText": "إنشاء مواقع إلكترونية تفاعلية وسريعة بأداء عالي وتجربة مستخدم ممتازة",
    
        "graphic": "تصميم الجرافيك",
        "graphicText": "تصميمات بصرية قوية وجذابة تناسب مجالك و مختلف المنصات الرقمية",
    
        "responsive": "موقع متجاوب",
        "responsiveText": "ضمان تجربة استخدام مريحة وسلسة على كل الشاشات والأجهزة",
    
        "video": "مونتاج الفيديوهات",
        "videoText": "إنتاج فيديوهات احترافية بجودة عالية تبرز العلامة التجارية وتوصل الرسالة",
    
        "branding": "الهوية البصرية",
        "brandingText": "بناء علامة تجارية متكاملة من أول الشعار و التصميمات لحد الموقع",
    
        "ui": "UI/UX تصميم",
        "uiText": "تصميم تجارب استخدام سهلة وجذابة تضمن تفاعل المستخدمين بسلاسة"
      },
      "footerText":"لو وصلت لحد النقطة دي من الموقع فـ أنا أُحيك ولله وشرفتني ولله  وياريت تكون أخدت الخطوة وتبقى شخص مشطشط لكل اللي حواليك وتولع الدنيا فـ إيه مش يلا نولع الدنيا 🔥"
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",  // language to use
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;