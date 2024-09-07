"use client";
import React from "react";

const certificationsData = [
  { id: 1, name: "Certification 1", logo: "/ayzot.jpg" },
  { id: 2, name: "Certification 2", logo: "/ban.jpg" },
  { id: 3, name: "Certification 3", logo: "/cert3.png" },
  { id: 4, name: "Certification 4", logo: "/cert4.png" },
];

const CertificationsSection = () => {
  return (
    <section className="py-12 bg-gray-100 w-full px-4 md:px-8">
      <h2 className="text-center text-4xl font-bold text-gray-800 mb-8">
        Our Certifications
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        {certificationsData.map((certification) => (
          <div key={certification.id} className="w-32 h-32 flex items-center justify-center">
            <img
              src={certification.logo}
              alt={certification.name}
              className="object-contain h-full w-full"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CertificationsSection;
