import React, { useEffect, useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { supabase } from '../lib/supabase';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import gsap from "gsap";

interface TestimonialItem {
  id: string;
  name: string;
  position: string;
  image: string;
  text: string;
}

const TestimonialCard: React.FC<{ item: TestimonialItem }> = ({ item }) => (
  <div
    className="bg-main text-white p-6 rounded-[20px] transition-all duration-300 relative border-[3px] border-main-dark hover:border-accent break-inside-avoid w-full mb-6"
    style={{ boxShadow: "10px 10px 0px #00134E" }}
  >
    {/* <span
      className="absolute -top-[50px] -right-[10px] text-[60px] text-accent font-black transition-all duration-300"
      style={{ fontFamily: "'Font Awesome 5 Free'" }}
    >
      &#xf10e;
    </span> */}
    <p className="text-lg leading-[1.8] font-bold pb-2 font-cairo">
      {item.text}
    </p>
    <div className="flex items-center mt-4" dir="ltr">
      <img
        className="w-[70px] h-[70px] rounded-full border-2 border-accent mr-[10px] bg-white object-cover"
        src={item.image}
        alt={item.name}
        onError={(e) => { (e.target as HTMLImageElement).src = '/assets/Photos/male.webp'; }}
      />
      <div className=''>
        <h4 className="text-accent font-black text-xl text-left">{item.name}</h4>
        <p className="text-base  text-left mt-[1px]">{item.position}</p>
      </div>
    </div>
  </div>
);

const TestimonialsPage: React.FC = () => {
  const { t } = useTranslation();
  const [testimonials, setTestimonials] = useState<TestimonialItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const { data, error } = await supabase
        .from('testimonials')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setTestimonials(data || []);
    } catch (error) {
      console.error("Error fetching testimonials:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-main-dark min-h-screen text-white font-cairo">
      <Navbar minimal={true} />
      
      <div className="pt-[120px] pb-20 max-w-[1600px] mx-auto px-4">
        <div className="text-center mb-16 relative">
          <h1 className="text-4xl md:text-5xl font-black mb-4 text-white relative inline-block z-10">
            {t("testimonials")}
          </h1>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-10 bg-accent/20 blur-xl rounded-full z-0 pointer-events-none"></div>
          
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto rounded-full mb-8"></div>
          
          <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-accent transition-colors font-medium">
            <svg className="w-5 h-5 rtl:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            {t("projects.backHome")}
          </Link>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="w-12 h-12 border-4 border-accent border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : testimonials.length === 0 ? (
          <div className="text-center text-gray-400 py-20 bg-main/30 rounded-3xl border border-white/5 max-w-4xl mx-auto">
            No testimonials available yet.
          </div>
        ) : (
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6" dir="rtl">
            {testimonials.map((item) => (
              <div key={item.id} className="break-inside-avoid">
                <TestimonialCard item={item} />
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default TestimonialsPage;
