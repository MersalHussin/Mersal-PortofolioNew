import React from "react";

interface TestimonialItem {
  name: string;
  position: string;
  image: string;
  text: string;
}

const testimonials: TestimonialItem[] = [
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

const Testimonials: React.FC = () => {
  return (
    <div className="max-w-[1600px] p-5 flex justify-center items-center gap-[10px] flex-wrap mx-auto" dir="rtl">
      {testimonials.map((item, index) => (
        <div
          className="group relative p-5 bg-main text-white rounded-[10px] transition-all duration-300 border-[3px] border-main-dark w-[450px] m-[10px] flex-wrap hover:border-accent"
          style={{
            boxShadow: "10px 10px 0px #00134E",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLDivElement).style.boxShadow =
              "5px 5px 0px #3FD357";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLDivElement).style.boxShadow =
              "10px 10px 0px #00134E";
          }}
          key={index}
        >
          {/* Quote icon using Font Awesome */}
          <span
            className="absolute -top-10 -right-5 text-[60px] text-accent font-black transition-all duration-300 group-hover:text-white group-hover:scale-110"
            style={{ fontFamily: "'Font Awesome 5 Free'" }}
          >
            &#xf10e;
          </span>

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
              <h4 className="text-accent font-black text-xl text-left">
                {item.name}
              </h4>
              <p className="text-base text-left -mt-[10px]">
                {item.position}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
