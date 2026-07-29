import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      // Navbar
      Home: "Home",
      Lang: "Arabic",
      About: "About",
      Services: "Services",
      "services-t": "Services",
      Portfolio: "Gallery",
      Testimonials: "Testimonials",
      Contact: "Contact",
      Workshops: "Workshops",
      Courses: "Courses",
      // Hero Section
      mersal: "Mersal",
      welcome: "Hello, Welcome at My Personal Website",
      fireTheWorld: "Fire The World",
      downloadCV: "Download CV",
      exploreProjects: "Explore Projects",
      aboutMe: "About Me",
      aboutText:
        "I'm Mersal, a MERN Stack Developer who loves to set things on fire!🔥 I build complete and fast web applications. My strong background in Graphic Design and Branding allows me to pay attention to the finest UI/UX details. This unique mix ensures I deliver a final product that not only functions flawlessly but also looks highly professional and grabs attention. Let's make something unforgettable!",
      services: "Services",
      testimonials: "Testimonials",
      certificates: "Certificates",
      ctaText: "Just take a step to \n Fire The World",
      ctaButton: "Let's Fire The World",
      trustedBy: "Trusted By",
      worldMap: {
        title: "Honored to Reach",
        subtitle: "Grateful to have worked with amazing clients across 5 countries",
        countries: {
          egypt: "Egypt",
          saudiArabia: "Saudi Arabia",
          uae: "UAE",
          usa: "United States",
          oman: "Oman",
        },
      },
      gallery: {
        title: "Gallery",
        openProject: "Open Project",
        all: "All",
        projects: "Projects",
        viewAll: "View All Projects",
        categories: {
          "Graphic Design": "Graphic Design",
          "Web Development": "Web Development",
          "UI/UX Design": "UI/UX Design",
          "Video Editing": "Video Editing",
        },
      },
      projects: {
        title: "All Projects",
        description: "Explore all my creative work across different categories - from graphic design to web development and beyond.",
        backHome: "Back to Home",
      },
      statistics: {
        international: "International Collaborations",
        projects: "Projects Delivered",
        clients: "Happy Clients",
        disciplines: "Creative Disciplines",
      },
      "services-list": {
        web: "Web Development",
        webText:
          "Creating dynamic and responsive websites with a focus on user experience.",
        graphic: "Graphic Design",
        graphicText:
          "Crafting visually stunning and impactful designs for various digital platforms.",
        responsive: "Responsive Design",
        responsiveText:
          "Ensuring seamless and optimized experiences across all screen sizes and devices",
        video: "Video Editing",
        videoText:
          "Producing high-quality, engaging video content that enhances identity.",
        branding: "Full Branding",
        brandingText:
          "Developing a strong, cohesive brand identity, from logos to marketing materials",
        ui: "UI&UX Design",
        uiText:
          "Designing intuitive, user-friendly digital experiences that enhance usability",
      },
      workshops: {
        title: "Workshops",
        description: "Specialized workshops in design and development with trainee reviews",
        backHome: "Back to Home",
        totalWorkshops: "Workshops",
        totalAttendees: "Attendees",
        attendees: "Attendees",
        recording: "Session Recording",
        reviews: "Trainee Reviews",
      },
      courses: {
        title: "Courses",
        backHome: "Back to Home",
        comingSoon: "Coming Soon",
        description: "We're preparing amazing courses in design, development, and creativity. Stay tuned for something awesome!",
        feature1: "Video Lessons",
        feature2: "Creative Projects",
        feature3: "Certificates",
      },
      footerText:
        "If you've made it this far on my site, big props to you, seriously! Honored to have you here, for real. Hope you've taken the step to become an absolute legend to everyone around you and light up the world—so what's up, ready to Fire The World? 🔥",
      knowMore: "Know More",
      cv: {
        title: "Resume",
        subtitle: "A quick look at my journey, skills, and experience",
        backHome: "Back to Home",
        experience: "Work Experience",
        education: "Education",
        skills: "Skills",
        courses: "Courses & Certificates",
        present: "Present",
        jobs: [
          {
            role: "Graphic Designer & Web Developer",
            company: "Freelancer",
            period: "2021 - Present",
            description: "Designing brand identities, UI/UX, social media posts, and building responsive websites for various clients.",
          },
          {
            role: "Graphic Designer",
            company: "QSP Agency",
            period: "2023 - Present",
            description: "Creating visual content, brand identities, and marketing materials for agency clients.",
          },
          {
            role: "Frontend Developer",
            company: "Freelance Projects",
            period: "2022 - Present",
            description: "Building modern, responsive web applications using React, TypeScript, and Tailwind CSS.",
          },
        ],
        educationList: [
          {
            degree: "Bachelor's Degree",
            school: "University",
            period: "2021 - Present",
            description: "Studying Computer Science / Related Field",
          },
        ],
        skillCategories: [
          {
            category: "Design",
            items: ["Adobe Photoshop", "Adobe Illustrator", "Adobe InDesign", "Adobe XD", "Figma", "Canva"],
          },
          {
            category: "Video",
            items: ["Adobe Premiere Pro", "Adobe After Effects"],
          },
          {
            category: "Development",
            items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Tailwind CSS", "Git"],
          },
          {
            category: "Other",
            items: ["UI/UX Design", "Brand Identity", "Responsive Design", "Miro"],
          },
        ],
        coursesList: [
          { name: "Certificate 1", issuer: "Issuer 1" },
          { name: "Certificate 2", issuer: "Issuer 2" },
          { name: "Certificate 3", issuer: "Issuer 3" },
          { name: "Certificate 4", issuer: "Issuer 4" },
          { name: "Certificate 5", issuer: "Issuer 5" },
          { name: "Certificate 6", issuer: "Issuer 6" },
          { name: "Certificate 7", issuer: "Issuer 7" },
          { name: "Certificate 8", issuer: "Issuer 8" },
          { name: "Certificate 9", issuer: "Issuer 9" },
        ],
      },
    },
  },
  ar: {
    translation: {
      Home: "الرئيسية",
      About: "من أنا",
      Services: "الخدمات",
      Portfolio: "المعرض",
      Testimonials: "آراء أفتخر بها",
      Contact: "اتصل بنا",
      Lang: "الإنجليزية",
      Workshops: "ورش العمل",
      Courses: "الكورسات",
      // Hero Section
      mersal: "مــرســال",
      welcome: "أهلًا بيك في موقعي الشخصي ",
      fireTheWorld: " ولــــــــــــــــــع الدنيا",
      downloadCV: " السيرة الذاتية",
            exploreProjects: "إكتشف المشاريع",
      aboutMe: "من أنا",
      aboutText:
        "أنا مرسال، مطور مواقع (MERN Stack)، بحاول دايماً أخليك تولع الدنيا🔥. ببرمج وأبني تطبيقات ويب متكاملة وسريعة، وخلفيتي القوية في الجرافيك ديزاين وتصميم الهويات البصرية بتخليني أهتم بأدق تفاصيل الـ UI/UX. المزيج ده بيخليني أطلعلك منتج نهائي مش بس شغال بكفاءة عالية، لكن كمان شكله احترافي ويلفت الانتباه ويسيب أثر واضح. مستني إيه؟ يلا نولع الدنيا ونعمل حاجة متتنسيش!",
      services: "الخدمات",
      "services-t": "الخدمات",
      testimonials: "آراء أفتخر بها",
      certificates: "الشهادات",
      ctaText: "انت بس خد الخطوة إنك  تولع الدنيا",
      ctaButton: "يلا نولع الدنيا",
      trustedBy: "موثوق به من قبل",
      worldMap: {
        title: "الإحصائيات",
        subtitle: "ممتن إني اشتغلت مع عملاء مميزين في 5 دول",
        countries: {
          egypt: "مصر",
          saudiArabia: "السعودية",
          uae: "الإمارات",
          usa: "أمريكا",
          oman: "عُمان",
        },
      },
      gallery: {
        title: "المعرض",
        openProject: "افتح المشروع",
        all: "الكل",
        projects: "مشروع",
        viewAll: "جميع المشاريع",
        categories: {
          "Graphic Design": "تصميم الجرافيك",
          "Web Development": "تطوير الويب",
          "UI/UX Design": "تصميم UI/UX",
          "Video Editing": "مونتاج الفيديو",
        },
      },
      projects: {
        title: "جميع المشاريع",
        description: "استكشف جميع أعمالي الإبداعية عبر فئات مختلفة - من تصميم الجرافيك إلى تطوير الويب وما بعدها.",
        backHome: "العودة للرئيسية",
      },
      statistics: {
        international: "تعاون دولي",
        projects: "مشروع تم تسليمه",
        clients: "عميل سعيد",
        disciplines: "تخصصات إبداعية",
      },
      "services-list": {
        web: "تطوير الويب",
        webText:
          "إنشاء مواقع إلكترونية تفاعلية وسريعة بأداء عالي وتجربة مستخدم ممتازة",
        graphic: "تصميم الجرافيك",
        graphicText:
          "تصميمات بصرية قوية وجذابة تناسب مجالك و مختلف المنصات الرقمية",
        responsive: "موقع متجاوب",
        responsiveText:
          "ضمان تجربة استخدام مريحة وسلسة على كل الشاشات والأجهزة",
        video: "مونتاج الفيديوهات",
        videoText:
          "إنتاج فيديوهات احترافية بجودة عالية تبرز العلامة التجارية وتوصل الرسالة",
        branding: "الهوية البصرية",
        brandingText:
          "بناء علامة تجارية متكاملة من أول الشعار و التصميمات لحد الموقع",
        ui: "UI/UX تصميم",
        uiText:
          "تصميم تجارب استخدام سهلة وجذابة تضمن تفاعل المستخدمين بسلاسة",
      },
      workshops: {
        title: "ورش العمل",
        description: "ورش عمل متخصصة في التصميم والبرمجة مع آراء المتدربين",
        backHome: "العودة للرئيسية",
        totalWorkshops: "ورش عمل",
        totalAttendees: "متدرب",
        attendees: "متدرب",
        recording: "تسجيل السيشن",
        reviews: "آراء المتدربين",
      },
      courses: {
        title: "الكورسات",
        backHome: "العودة للرئيسية",
        comingSoon: "قريبًا",
        description: "بنجهز كورسات مميزة في التصميم والتطوير والإبداع. استنى حاجة جامدة!",
        feature1: "دروس فيديو",
        feature2: "مشاريع إبداعية",
        feature3: "شهادات",
      },
      footerText:
        "لو وصلت لحد النقطة دي من الموقع فـ أنا أُحيك ولله وشرفتني ولله  وياريت تكون أخدت الخطوة وتبقى شخص مشطشط لكل اللي حواليك وتولع الدنيا فـ إيه مش يلا نولع الدنيا 🔥",
      knowMore: "اعرف أكتر",
      cv: {
        title: "السيرة الذاتية",
        subtitle: "نظرة سريعة على رحلتي ومهاراتي وخبراتي",
        backHome: "العودة للرئيسية",
        experience: "الخبرة العملية",
        education: "التعليم",
        skills: "المهارات",
        courses: "الدورات والشهادات",
        present: "حتى الآن",
        jobs: [
          {
            role: "مصمم جرافيك ومطور ويب",
            company: "عمل حر",
            period: "2021 - حتى الآن",
            description: "تصميم هويات بصرية، UI/UX، بوستات سوشيال ميديا، وبناء مواقع ويب متجاوبة لعملاء مختلفين.",
          },
          {
            role: "مصمم جرافيك",
            company: "QSP Agency",
            period: "2023 - حتى الآن",
            description: "إنشاء محتوى بصري وهويات بصرية ومواد تسويقية لعملاء الوكالة.",
          },
          {
            role: "مطور واجهات أمامية",
            company: "مشاريع مستقلة",
            period: "2022 - حتى الآن",
            description: "بناء تطبيقات ويب حديثة ومتجاوبة باستخدام React و TypeScript و Tailwind CSS.",
          },
        ],
        educationList: [
          {
            degree: "درجة البكالوريوس",
            school: "الجامعة",
            period: "2021 - حتى الآن",
            description: "دراسة علوم الحاسوب / المجال ذو الصلة",
          },
        ],
        skillCategories: [
          {
            category: "التصميم",
            items: ["Adobe Photoshop", "Adobe Illustrator", "Adobe InDesign", "Adobe XD", "Figma", "Canva"],
          },
          {
            category: "الفيديو",
            items: ["Adobe Premiere Pro", "Adobe After Effects"],
          },
          {
            category: "التطوير",
            items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Tailwind CSS", "Git"],
          },
          {
            category: "أخرى",
            items: ["UI/UX Design", "Brand Identity", "Responsive Design", "Miro"],
          },
        ],
        coursesList: [
          { name: "شهادة 1", issuer: "الجهة 1" },
          { name: "شهادة 2", issuer: "الجهة 2" },
          { name: "شهادة 3", issuer: "الجهة 3" },
          { name: "شهادة 4", issuer: "الجهة 4" },
          { name: "شهادة 5", issuer: "الجهة 5" },
          { name: "شهادة 6", issuer: "الجهة 6" },
          { name: "شهادة 7", issuer: "الجهة 7" },
          { name: "شهادة 8", issuer: "الجهة 8" },
          { name: "شهادة 9", issuer: "الجهة 9" },
        ],
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
