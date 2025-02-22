import React from "react";

const certificates = [
  { id: 1, image: "/assets/Photos/Certificates/1.jpg" },
  { id: 2, image: "/assets/Photos/Certificates/2.jpg" },
  { id: 3, image: "/assets/Photos/Certificates/3.jpg" },
  { id: 4, image: "/assets/Photos/Certificates/4.jpg" },
  { id: 5, image: "/assets/Photos/Certificates/5.jpg" },
  { id: 6, image: "/assets/Photos/Certificates/6.jpg" },
  { id: 8, image: "/assets/Photos/Certificates/8.jpg" },
  { id: 9, image: "/assets/Photos/Certificates/9.jpg" },
  { id: 7, image: "/assets/Photos/Certificates/7.png" },
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
