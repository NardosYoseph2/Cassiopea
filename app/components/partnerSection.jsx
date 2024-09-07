"use client";
import React from "react";
import { motion } from "framer-motion"; // For animation effects

const partnersData = [
  { id: 1, name: "Ayzot", logo: "/ayzot.jpg" },
  { id: 2, name: "Ejere Full Gospel", logo: "/logo1.jpg" },
  { id: 3, name: "Partner 3", logo: "/jorka.png" },
];

const PartnersSection = () => {
  return (
    <section id="partners" className="py-12 bg-white w-full px-4 md:px-8 mt-24">
      <motion.h2
        className="text-center text-4xl font-bold text-gray-800 mb-8"
        initial={{ opacity: 0, y: -20 }} // Initial state (hidden and moved up)
        animate={{ opacity: 1, y: 0 }} // Final state (visible and in place)
        transition={{ duration: 1, ease: "easeOut" }} // Duration and easing for the animation
      >
        Our Partners
      </motion.h2>
      <div className="flex flex-wrap justify-center gap-8">
        {partnersData.map((partner) => (
          <motion.div
            key={partner.id}
            className="w-32 h-32 flex items-center justify-center"
            whileHover={{ scale: 1.1 }} // Scale up on hover
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.img
              src={partner.logo}
              alt={partner.name}
              className="object-contain h-full w-full transition-transform duration-300 ease-in-out"
              initial={{ opacity: 0 }} // Initial opacity
              animate={{ opacity: 1 }} // Animate to full opacity
              transition={{ duration: 1 }} // Duration of fade-in
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PartnersSection;
