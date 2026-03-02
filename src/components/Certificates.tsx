import React from "react";

interface CertificateItem {
  id: number;
  image: string;
}

const certificates: CertificateItem[] = [
  { id: 1, image: "/assets/Photos/Certificates/1.webp" },
  { id: 2, image: "/assets/Photos/Certificates/2.webp" },
  { id: 3, image: "/assets/Photos/Certificates/3.webp" },
  { id: 4, image: "/assets/Photos/Certificates/4.webp" },
  { id: 5, image: "/assets/Photos/Certificates/5.webp" },
  { id: 6, image: "/assets/Photos/Certificates/6.webp" },
  { id: 8, image: "/assets/Photos/Certificates/8.webp" },
  { id: 9, image: "/assets/Photos/Certificates/9.webp" },
  { id: 7, image: "/assets/Photos/Certificates/7.webp" },
];

const Certificates: React.FC = () => {
  return (
    <div className="flex gap-5 justify-center items-start flex-wrap max-w-[1280px] mx-auto p-5">
      {certificates.map((cert) => (
        <div
          className="group flex justify-center items-center w-[400px] transition-all duration-300 overflow-hidden rounded-[5px] border-2 border-main-dark hover:border-[3px] hover:border-accent"
          style={{
            boxShadow: "10px 10px 0 #00134E",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLDivElement).style.boxShadow =
              "5px 5px 0 #3FD357";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLDivElement).style.boxShadow =
              "10px 10px 0 #00134E";
          }}
          key={cert.id}
        >
          <img
            src={cert.image}
            alt={`Certificate ${cert.id}`}
            className="w-full transition-all duration-300 group-hover:scale-110"
          />
        </div>
      ))}
    </div>
  );
};

export default Certificates;
