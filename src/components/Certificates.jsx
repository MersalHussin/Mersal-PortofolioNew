import React from "react";

const certificates = [
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

function Certificates() {
  return (
    <div className="certificates-container">
      {certificates.map((cert) => (
        <div key={cert.id} className="certificate-card">
          <img src={cert.image} alt={`Certificate ${cert.id}`} />
        </div>
      ))}
    </div>
  );
}

export default Certificates;
