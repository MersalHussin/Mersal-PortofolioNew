import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface TestimonialItem {
  name: string;
  position: string;
  image: string;
  text: string;
}

export const testimonials: TestimonialItem[] = [
  {
    name: "Eng.Amr Helmi",
    position: "Senior Graphic Designer",
    image: "/assets/Photos/male.webp",
    text: "دايما البدايات بتكون ضعيفه وواحدة وواحد التحسن بيبان; إنما في حالة مصطفى مرسال. التألق كان باين من اول تعاملي معاه وقلت مصطفى اكيد هيكون حاجة كبيرة مش بس في مجاله (البرمجة) لا هو كمان بيتوسع عشان يكون مبرمج ومونتير ومصمم جرافيك بروفيشينال.. بالإضافة لروح القيادة اللي بيتمتع بيها. عشان يعلم غيره من العلم اللي ربنا اداهوله. مبسوط اني اتعامل معاك وبالتوفيق دايمًا.",
  },
  {
    name: "Eng.Waled Kory",
    position: "Spora Tex CEO",
    image: "/assets/Photos/male.webp",
    text: "مصطفى اول ما جالي الشركه سبورتكس انا لمست فيه حاجتين مهمين الحاجه الاولي ان انا حسيت ان هو انسان شغوف للتعلم وبيستمع لاراء الاخرين ومستوى ادراكه سريع بيتعلم الحاجات بسرعه واهم نقطه ثانيه فيه ان هو متقن لعمله الحاجه اللي بيشتغل عليها بيتقنها وبيطور فيها وهو مثال جيد للشخص اللي هيطور في حياته العمليه  ان شاء الله يا مصطفى تحقق كل اللي انت نفسك فيه",
  },
  {
    name: "Coach. Amira Huessein",
    position: "Life Coach / Qudraat CEO",
    image: "/assets/Photos/female.webp",
    text: "انت حقيقى شخص موهوب وشاطر وملتزم , وعارف انت بتعمل ايه وبتنجز جدًا فى شغلك ،ماشاء الله تبارك الله, وبتقدر تفهم عميلك وتعمل الشغل الخاص بيه هو مش حد تاني💪🏻.,ملتزم واخلاقك بين زمايلك جميلة ومحترم ومؤدب, وبجد مبسوطه انى اتعرفت عليك يامصطفى ،انك معانا فى الشركة. ,واتمنالك كل الخير والنجاح وان يرزقك الله فوق ما تتمنى يااااارب🌷🌷",
  },
  {
    name: "Eng.Nermeen Elgebaly",
    position: "Senior Product Designer",
    image: "/assets/Photos/female.webp",
    text: "تلميذي النجيب 😂💙, ما شاء الله عليك يمصطفي مبسوطه بيك جدا وبطريقه تفكيرك ودماغك ما شاءالله حد شاطر جدا وبيتفوق علي نفسه وبيسعي فعلا انه يطور من نفسه وده اهم حاجه, ربنا يوفقك دايما ويحققلك اكتر مما تتمني ولا يخيب الله مسعاك دايما💙",
  },
  {
    name: "Dr. Kholud Yacoub",
    position: "PhD in Persian Language & CAS Director - Cairo University",
    image: "/assets/Photos/female.webp",
    text: "أنت عارف فعلا أنا قد ايه بحب شغلك وبيعجبني , و عارف فعلا أنا قد ايه بحب شغلك وبيعجبني فعلا فعلا حلو قوي, وأنت شخصية مريحة في التعامل, وبتعمل الفكرة اللي في دماغي بالضبط, وبتعبك معايا وانت فعلا بتستحمل",
  },
  {
    name: "Eng.Nashaat Mohamed",
    position: "Q.S.P CEO",
    image: "/assets/Photos/male.webp",
    text: "احلي فنان اخلاق واحترام قبل اي حاجه. شاطر ومجتهد وديما عاوز تطور من نفسك وفعلا حققت نجاح وانت لسه ف درستك وباذن الله يامصطفي هنشوفك قريب جدًا شخصيه مأثره ع اللي حواليك, ربنا يوفقك ومن نجاح لنجاح ديما يادرش",
  },
  {
    name: "AbdulHai Gamal(Rasco)",
    position: "CEO & Founder Of Rascoda",
    image: "/assets/Photos/male.webp",
    text: "ماشاء الله بتسعي وشغلك عظيم جدًا ومجتهد",
  },
  {
    name: "Mohamed Zahra",
    position: "Egyptian ambulance IT Manger",
    image: "/assets/Photos/male.webp",
    text: "شغل جميل اوي ي مرسال ما شاء الله ♥️, عجبني اوي تصميمات المدرسين♥️, شاطر جدا ومجتهد في اكتر من مجال وثابت نفسك وشغلك فيهم ربنا يوفقك ي حبيبي ♥️👏",
  },
  {
    name: "Eng.Eslam Korayem",
    position: "Fly Media CEO",
    image: "/assets/Photos/male.webp",
    text: "حابب اقولك يا مصطفي انك من اشطر الناس اللي شغلها ييتكلم عن نفسه في كل حاجه الالوان / طريقة اختيار الصور وتركيبها في خدمة المحتوي من الناس اللي عندها ذوق في التصميم 🔥🔥",
  },
  {
    name: "Dr.Haya Hisham",
    position: "Professor of Persian Language - Cairo University",
    image: "/assets/Photos/female.webp",
    text: "المبدع الخلوق والمكافح مصطفي مرسال 💐, أشطر مصمم مواقع ومبرمج 🤩 كل موقع بتصممه بيكون عبارة عن لوحة فنية 🎨 مليانة بالأفكار والمشاعر 🎭,استمر كمل مشوارك وبجد أنت, مشروع فنان وكل شغل بتعمله بصمتك ورقيك باين جدا فيه 🌼, بتمنالك كل الخير والتوفيق 🙏🏻",
  },
  {
    name: "Mr. Ahmed Sallam",
    position: "Financial and Tax Advisor",
    image: "/assets/Photos/male.webp",
    text: "المبدع مصطفي مرسال محترف الجرافيك والبرمجة والمونتاج, شكراً على مجهودك المتميز وإبداعك في تصاميمك الإحترافية والمونتاج  العالي جدا. وكمان الدقه و سرعة التنفيذ عندك ، وأفكارك المبتكرة اللي بتضيف قيمة حقيقية لكل مشروع. بجد التعامل معك بيضمن نتايج تفوق التوقعات.",
  },
  {
    name: "Mr.Abdelfattah Ali",
    position: "Chemistry Teacher at Madrasetna",
    image: "/assets/Photos/male.webp",
    text: "بصراحه والله وبدون مجامله انتا مثال للاجتهاد والالتزام, وشغلك ماشاء الله والله العظيم بدون مجامله حاجه محترمه جدا ربنا يباركلك ويسعدك يارب دايما",
  },
];

// Testimonial Card Component
const TestimonialCard: React.FC<{ item: TestimonialItem }> = ({ item }) => (
  <div
    className="group relative p-5 bg-main text-white rounded-[10px] transition-all duration-300 border-[3px] border-main-dark w-full my-3 hover:border-accent"
    style={{
      boxShadow: "10px 10px 0px #00134E",
    }}
    onMouseEnter={(e) => {
      (e.currentTarget as HTMLDivElement).style.boxShadow = "5px 5px 0px #3FD357";
    }}
    onMouseLeave={(e) => {
      (e.currentTarget as HTMLDivElement).style.boxShadow = "10px 10px 0px #00134E";
    }}
  >
    {/* <span
      className="absolute -top-10 -right-5 text-[60px] text-accent font-black transition-all duration-300 group-hover:text-white group-hover:scale-110"
      style={{ fontFamily: "'Font Awesome 5 Free'" }}
    >
      &#xf10e;
    </span> */}
    <p className="text-xl max-sm:text-base leading-relaxed p-5 flex justify-center items-center flex-wrap">
      {item.text}
    </p>
    <div className="flex items-center mt-4" dir="ltr">
      <img
        className="w-[70px] h-[70px] rounded-full border-2 border-accent mr-[10px] bg-white"
        src={item.image}
        alt={item.name}
      />
      <div>
        <h4 className="text-accent font-black text-xl text-left">{item.name}</h4>
        <p className="text-base text-left -mt-[10px]">{item.position}</p>
      </div>
    </div>
  </div>
);

// Single Column Component with vertical scroll
const ScrollColumn: React.FC<{ 
  items: TestimonialItem[]; 
  direction: "up" | "down";
  speed: number;
}> = ({ items, direction, speed }) => {
  const columnRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  const handleMouseEnter = () => {
    if (tweenRef.current) {
      gsap.to(tweenRef.current, { timeScale: 0, duration: 0.5, ease: "power2.out" });
    }
  };

  const handleMouseLeave = () => {
    if (tweenRef.current) {
      gsap.to(tweenRef.current, { timeScale: 1, duration: 0.5, ease: "power2.out" });
    }
  };

  useEffect(() => {
    if (tweenRef.current) tweenRef.current.kill();

    const columnEl = columnRef.current;
    if (columnEl && items.length > 0) {
      const totalHeight = columnEl.scrollHeight / 2;
      
      if (direction === "up") {
        gsap.set(columnEl, { y: 0, force3D: true });
        tweenRef.current = gsap.to(columnEl, {
          y: -totalHeight,
          duration: speed,
          ease: "none",
          repeat: -1,
          force3D: true,
        });
      } else {
        gsap.set(columnEl, { y: -totalHeight, force3D: true });
        tweenRef.current = gsap.to(columnEl, {
          y: 0,
          duration: speed,
          ease: "none",
          repeat: -1,
          force3D: true,
        });
      }
    }

    return () => {
      if (tweenRef.current) tweenRef.current.kill();
    };
  }, [items.length, direction, speed]);

  return (
    <div 
      className="relative overflow-hidden h-[700px] flex-1 px-2"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Top gradient */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-main to-transparent z-10 pointer-events-none" />
      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-main to-transparent z-10 pointer-events-none" />
      
      <div ref={columnRef} className="will-change-transform" dir="rtl">
        {[...items, ...items].map((item, idx) => (
          <TestimonialCard key={idx} item={item} />
        ))}
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const [columns, setColumns] = useState(3);
  const { t } = useTranslation();

  // Handle responsive columns
  useEffect(() => {
    const updateColumns = () => {
      if (window.innerWidth < 640) {
        setColumns(1);
      } else if (window.innerWidth < 1024) {
        setColumns(2);
      } else {
        setColumns(3);
      }
    };

    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  // Split testimonials into columns
  const splitIntoColumns = (items: TestimonialItem[], numCols: number) => {
    const result: TestimonialItem[][] = Array.from({ length: numCols }, () => []);
    items.forEach((item, index) => {
      result[index % numCols].push(item);
    });
    return result;
  };

  const columnData = splitIntoColumns(testimonials, columns);

  return (
    <div className="max-w-[1600px] mx-auto px-4">
      <div className="flex gap-4">
        {columnData.map((items, index) => (
          <ScrollColumn
            key={`col-${columns}-${index}`}
            items={items}
            direction={index % 2 === 0 ? "up" : "down"}
            speed={items.length * 8}
          />
        ))}
      </div>
      
      {/* View All Testimonials Button */}
      <div className="flex justify-center mt-10">
        <Link
          to="/testimonials"
          className="fire-btn group flex items-center gap-3"
        >
          <span>{t("testimonials-viewAll")}</span>
          <svg 
            className="w-5 h-5 transition-transform group-hover:translate-x-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Testimonials;
