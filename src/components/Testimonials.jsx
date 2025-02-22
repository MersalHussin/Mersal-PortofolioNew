import React from "react";

const testimonials = [
  {
    name: "Eng.Amr Helmi",
    position: "Senior Graphic Designer",
    image: "/assets/Photos/male.png",
    text: "دايما البدايات بتكون ضعيفه وواحدة وواحد التحسن بيبان; إنما في حالة مصطفى مرسال. التألق كان باين من اول تعاملي معاه وقلت مصطفى اكيد هيكون حاجة كبيرة مش بس في مجاله (البرمجة) لا هو كمان بيتوسع عشان يكون مبرمج ومونتير ومصمم جرافيك بروفيشينال.. بالإضافة لروح القيادة اللي بيتمتع بيها. عشان يعلم غيره من العلم اللي ربنا اداهوله. مبسوط اني اتعامل معاك وبالتوفيق دايمًا.",
  },
  {
    name: "Dr. Kholud Yacoub",
    position: "Professor of Persian Language - Cairo University",
    image: "/assets/Photos/female.png",
    text: "أنت عارف فعلا أنا قد ايه بحب شغلك وبيعجبني , و عارف فعلا أنا قد ايه بحب شغلك وبيعجبني فعلا فعلا حلو قوي, وأنت شخصية مريحة في التعامل, وبتعمل الفكرة اللي في دماغي بالضبط, وبتعبك معايا وانت فعلا بتستحمل",
  },
  {
    name: "Eng.Nashaat Mohamed",
    position: "Q.S.P CEO",
    image: "/assets/Photos/male.png",
    text: "احلي فنان اخلاق واحترام قبل اي حاجه. شاطر ومجتهد وديما عاوز تطور من نفسك وفعلا حققت نجاح وانت لسه ف درستك وباذن الله يامصطفي هنشوفك قريب جدًا شخصيه مأثره ع اللي حواليك, ربنا يوفقك ومن نجاح لنجاح ديما يادرش",
  },
  {
    name: "Coach. Amira Huessein",
    position: "Life Coach / Qudraat CEO",
    image: "/assets/Photos/female.png",
    text: " انت حقيقى شخص موهوب وشاطر وملتزم , وعارف انت بتعمل ايه وبتنجز جدًا فى شغلك ،ماشاء الله تبارك الله, وبتقدر تفهم عميلك وتعمل الشغل الخاص بيه هو مش حد تاني,ملتزم واخلاقك بين زمايلك جميلة ومحترم ومؤدب, وبجد مبسوطه انى اتعرفت عليك يامصطفى ،انك معانا فى الشركة. ,واتمنالك كل الخير والنجاح وان يرزقك الله فوق ما تتمنى يااااارب ",
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
