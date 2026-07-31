import React, { useState, useEffect, useRef, useCallback } from "react";
import gsap from "gsap";

interface CertificateItem {
  id: number;
  image: string;
}

const certificates: CertificateItem[] = [
  { id: 1, image: "/assets/Photos/Certificates/1.webp" },
  { id: 2, image: "/assets/Photos/Certificates/2.webp" },
  { id: 3, image: "/assets/Photos/Certificates/3.webp" },
  { id: 4, image: "/assets/Photos/Certificates/4.webp" },
  { id: 7, image: "/assets/Photos/Certificates/7.webp" },
  { id: 5, image: "/assets/Photos/Certificates/5.webp" },
  { id: 6, image: "/assets/Photos/Certificates/6.webp" },
  { id: 8, image: "/assets/Photos/Certificates/8.webp" },
  { id: 9, image: "/assets/Photos/Certificates/9.webp" },
  { id: 11, image: "https://mersal.top/assets/Photos/Certificates/1.webp" },
  { id: 10, image: "https://mersal.top/assets/Photos/Certificates/2.webp"},
];

const Certificates: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Lazy loading with IntersectionObserver
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = Number(entry.target.getAttribute('data-id'));
            setLoadedImages((prev) => {
              const newSet = new Set(Array.from(prev));
              newSet.add(id);
              return newSet;
            });
            
            // Animate card when it comes into view
            gsap.fromTo(entry.target,
              { opacity: 0, y: 50, scale: 0.9, force3D: true },
              { 
                opacity: 1, 
                y: 0, 
                scale: 1,
                duration: 0.6,
                ease: "back.out(1.4)",
                force3D: true
              }
            );
            
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    cardRefs.current.forEach((card) => {
      if (card) observerRef.current?.observe(card);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  // Open lightbox
  const openLightbox = useCallback((cert: CertificateItem) => {
    setSelectedCert(cert);
    document.body.style.overflow = "hidden";
  }, []);

  // Close lightbox
  const closeLightbox = useCallback(() => {
    setSelectedCert(null);
    document.body.style.overflow = "auto";
  }, []);

  // Navigate lightbox
  const navigateLightbox = useCallback((direction: 'prev' | 'next') => {
    if (!selectedCert) return;
    const currentIndex = certificates.findIndex(c => c.id === selectedCert.id);
    const newIndex = direction === 'next' 
      ? (currentIndex + 1) % certificates.length
      : (currentIndex - 1 + certificates.length) % certificates.length;
    setSelectedCert(certificates[newIndex]);
  }, [selectedCert]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedCert) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') navigateLightbox('next');
      if (e.key === 'ArrowLeft') navigateLightbox('prev');
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedCert, closeLightbox, navigateLightbox]);

  return (
    <div className="relative w-full max-w-[1400px] mx-auto px-4 py-8">
      {/* Masonry Grid */}
      <div 
        className="columns-1 sm:columns-2 lg:columns-3 gap-5"
        style={{ columnFill: 'balance' }}
      >
        {certificates.map((cert, index) => {
          const isLoaded = loadedImages.has(cert.id);
          
          return (
            <div
              key={cert.id}
              ref={(el) => { cardRefs.current[index] = el; }}
              data-id={cert.id}
              className="break-inside-avoid mb-5 opacity-0"
              onClick={() => openLightbox(cert)}
            >
              <div 
                className="group relative cursor-pointer overflow-hidden rounded-xl border-2 border-main-dark transition-all duration-500 hover:border-accent hover:-translate-y-2"
                style={{
                  boxShadow: "8px 8px 0px #00134E",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "4px 4px 0px #3FD357";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "8px 8px 0px #00134E";
                }}
              >
                {/* Skeleton loader */}
                {!isLoaded && (
                  <div className="w-full aspect-[4/3] bg-main-dark animate-pulse flex items-center justify-center">
                    <svg className="w-10 h-10 text-white/20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                )}

                {/* Certificate Image */}
                <img
                  src={isLoaded ? cert.image : ''}
                  data-src={cert.image}
                  alt={`Certificate ${cert.id}`}
                  className={`
                    w-full h-auto transition-all duration-500 
                    group-hover:scale-105
                    ${isLoaded ? 'opacity-100' : 'opacity-0 absolute'}
                  `}
                  loading="lazy"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-main via-main/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-end pb-6">
                  {/* View Icon */}
                  <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center mb-3 transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                    <svg className="w-7 h-7 text-main" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                  
                  {/* Certificate Label */}
                  <span className="text-white font-bold text-lg transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                    شهادة #{cert.id}
                  </span>
                </div>

                {/* Corner Badge */}
                <div className="absolute top-3 right-3 w-10 h-10 rounded-full bg-accent/90 flex items-center justify-center text-main font-black text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100">
                  {cert.id}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Stats */}
      <div className="text-center mt-12">
        <div className="inline-flex items-center gap-4 px-8 py-4 bg-main-2 rounded-full border-2 border-main-dark">
          <span className="text-4xl font-black text-accent">{certificates.length}</span>
          <div className="text-left">
            <p className="text-white font-bold">شهادات</p>
            <p className="text-white/60 text-sm">معتمدة</p>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedCert && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-main-2 border-2 border-main-dark flex items-center justify-center text-white hover:border-accent hover:bg-main-dark transition-all duration-300 z-10"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Previous button */}
          <button
            onClick={(e) => { e.stopPropagation(); navigateLightbox('prev'); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-main-2 border-2 border-main-dark flex items-center justify-center text-white hover:border-accent hover:bg-main-dark transition-all duration-300 z-10"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next button */}
          <button
            onClick={(e) => { e.stopPropagation(); navigateLightbox('next'); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-main-2 border-2 border-main-dark flex items-center justify-center text-white hover:border-accent hover:bg-main-dark transition-all duration-300 z-10"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Image */}
          <div 
            className="relative max-w-[80vw] md:max-w-[60vw] lg:max-w-[50vw] max-h-[70vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedCert.image}
              alt={`Certificate ${selectedCert.id}`}
              className="max-w-full max-h-[70vh] rounded-xl border-4 border-accent shadow-[0_0_50px_rgba(63,211,87,0.3)] object-contain"
            />
            
            {/* Counter */}
            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-2 text-white">
              <span className="text-accent font-bold text-xl">
                {certificates.findIndex(c => c.id === selectedCert.id) + 1}
              </span>
              <span className="text-white/60">/</span>
              <span className="text-white/60">{certificates.length}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Certificates;
