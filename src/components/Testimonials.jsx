import React from "react";

const testimonials = [
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
    position: "Senior Product Designer ",
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
    name: "Eng.Eslam Korayem ",
    position: "Fly Media CEO",
    image: "/assets/Photos/male.webp",
    text: "حابب اقولك يا مصطفي انك من اشطر الناس اللي شغلها ييتكلم عن نفسه في كل حاجه الالوان / طريقة اختيار الصور وتركيبها في خدمة المحتوي من الناس اللي عندها ذوق في التصميم 🔥🔥",
  },
  {
    name: "Dr.Haya Hisham ",
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
    name: "Mr.Abdelfattah Ali ",
    position: "Chemistry Teacher at Madrasetna",
    image: "/assets/Photos/male.webp",
    text: "بصراحه والله وبدون مجامله انتا مثال للاجتهاد والالتزام, وشغلك ماشاء الله والله العظيم بدون مجامله حاجه محترمه جدا ربنا يباركلك ويسعدك يارب دايما",
  },
  
];

export default function Testimonials() {
  return (
    
    <div className="testimonial-container">
        {testimonials.map((item, index) => (
            <div className="testimonial-card" key={index}>
              <p className="testimonial-text">{item.text}</p>
              <div className="testimonial-footer">
                <img className="testimonial-img" src={item.image} alt={item.name} />
                <div>
                  <h4 className="testimonial-name">{item.name}</h4>
                  <p className="testimonial-position">{item.position}</p>
                </div>
              </div>
            </div>
        ))}
    </div>
  );
}
