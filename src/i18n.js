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
      "Gallery": "Gallery",
      "Testimonials": "Testimonials",
      "Contact": "Contact",
      // Hero Section
      "mersal": "Mersal",
      "welcome": "Hello, Welcome to my portfolio",
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
        "webText": "I can create websites, design YouTube thumbnails, logos, and craft social media posts professionally",
        
        "graphic": "Graphic Design",
        "graphicText": "I specialize in creating visually appealing designs for various digital platforms",
        
        "seo": "SEO Optimization",
        "seoText": "Improving website rankings and visibility through effective SEO strategies",
        
        "content": "Content Writing",
        "contentText": "Crafting engaging and informative content for blogs, websites, and social media",
        
        "branding": "Full Branding",
        "brandingText": "Editing and enhancing videos for YouTube, social media, and professional presentations",
        
        "app": "App Development",
        "appText": "Building responsive and functional mobile applications tailored to user needs"
      },
    }
  },
  ar: {
    translation: {
      "Home": "الرئيسية",
      "About": "من أنا",
      "Services": "الخدمات",
      "Portfolio": "المعرض",
      "Testimonials": "الشهادات",
      "Contact": "اتصل بنا",
      "Lang": "الإنجليزية",
      // Hero Section
      "mersal": "مــرســال",
      "welcome": "أهلًا بيك يامشطشط في موقعي الشخصي ",
      "fireTheWorld": "روح ولع الدنيا",
      "downloadCV": " السيرة الذاتية",
      "aboutMe": "من أنا",
      "aboutText": "أنا فقط مرسال، لا أُصمم فقط، بل أشعل الأشياء! 🔥 من الشعارات إلى تصميمات UI/UX السلسة والتأثيرات البصرية القوية، أصنع تجارب تلفت الانتباه وتترك أثرًا. بالإضافة إلى ذلك، أبني المواقع لجعل كل هذا حقيقة. دعونا نصنع شيئًا لا يُنسى!",
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
        "logo": "لوجو",
        "video": "فيديو"
      },
      "services": {
        "web": "تطوير الويب",
        "webText": "أستطيع إنشاء مواقع الويب، تصميم صور مصغرة لليوتيوب، الشعارات، وإنشاء منشورات احترافية لوسائل التواصل الاجتماعي",
    
        "graphic": "تصميم الجرافيك",
        "graphicText": "متخصص في إنشاء تصاميم جذابة لمختلف المنصات الرقمية",
    
        "seo": "تحسين محركات البحث",
        "seoText": "تحسين ترتيب المواقع وزيادة الظهور من خلال استراتيجيات سيو فعالة",
    
        "content": "كتابة المحتوى",
        "contentText": "كتابة محتوى جذاب ومفيد للمدونات، المواقع الإلكترونية، ووسائل التواصل الاجتماعي",
    
        "branding": "الهوية البصرية",
        "brandingText": "تحرير وتحسين الفيديوهات لليوتيوب، وسائل التواصل الاجتماعي، والعروض التقديمية الاحترافية",
    
        "app": "تطوير التطبيقات",
        "appText": "إنشاء تطبيقات محمولة متجاوبة وعملية تلبي احتياجات المستخدمين"
      }
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "ar",  // language to use
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;