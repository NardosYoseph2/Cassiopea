"use client";
import React, { useState, useRef ,useEffect} from "react";
import EventCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";


const EventSection = () => {
  const projectsData = [

    {
      id: 1,
      title: "Web Development",
      image: "/webdev.jpg",
   
    },
    
    {
      id: 2,
      title: "Mobile App Development",
      image: "/appdev.jpg",
   
    },
    {
      id: 3,
      title: "API Integration",
      image: "/apii.jpg",
   
    },
    {
      id: 4,
      title: "Ecommerce Development",
      image: "/ecommerce.jpg",
    },
    {
      id: 5,
      title: "Software Consulting",
      image: "/consult.jpg",
    },
    {
      id: 6,
      title: "Maintainance and Support",
      image: "/maintain.jpg",
    },
]
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
 
  return (
    <section id="services">
      <h2 className="text-center text-4xl font-bold text-white mt-8 mb-4 md:mb-8">
      Our Services
      </h2>
     
      <ul ref={ref} className="grid top-0 md:grid-cols-2 gap-8 md:gap-12">
        {projectsData.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <EventCard
         key={project.id}
         title={project.title}
         imgUrl={project.image}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default EventSection;
