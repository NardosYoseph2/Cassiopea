"use client";
import React, { useRef, useEffect, useState } from "react";
import EventCard from "./ProjectCard"; // Ensure the correct path

const EventSection = () => {
  const projectsData = [
    { id: 1, title: "Web Development", image: "/webdev.jpg" },
    { id: 2, title: "Mobile App Development", image: "/appdev.jpg" },
    { id: 3, title: "API Integration", image: "/apii.jpg" },
    { id: 4, title: "Ecommerce Development", image: "/ecommerce.jpg" },
    { id: 5, title: "Software Consulting", image: "/consult.jpg" },
    { id: 6, title: "Maintenance and Support", image: "/maintain.jpg" },
  ];

  const scrollContainerRef = useRef(null);
  const [currentHoveredIndex, setCurrentHoveredIndex] = useState(2); // Default middle card

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    let currentScroll = 0;
    const scrollAmount = 1; // Reduced scroll amount for slower scroll
    const cardWidth = 256; // Approximate width of each card
    let autoScroll;

    const handleAutoScroll = () => {
      if (scrollContainer) {
        scrollContainer.scrollLeft = currentScroll;
        currentScroll += scrollAmount;

        // Calculate the middle card based on the scroll position
        const middleIndex = Math.floor(
          (scrollContainer.scrollLeft + scrollContainer.clientWidth / 2) / cardWidth
        );
        setCurrentHoveredIndex(middleIndex % projectsData.length);

        // Reset scroll when reaching the end
        if (currentScroll >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
          currentScroll = 0;
        }
      }
    };

    // Start the auto-scrolling with an interval
    autoScroll = setInterval(handleAutoScroll, 30); // Increased interval time for slower scroll

    // Cleanup on component unmount
    return () => clearInterval(autoScroll);
  }, []);

  return (
    <section id="services" className="py-12 bg-[#1E2044] w-full px-0">
      <h2 className="text-center text-4xl font-bold text-gray-200 mb-8">
        Our Services
      </h2>
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto space-x-8 pb-4 no-scrollbar"
      >
        {projectsData.map((project, index) => (
          <div
            key={project.id}
            className={`w-72 flex-shrink-0 transform transition-transform duration-800 scale-100`}
          >
            <EventCard title={project.title} imgUrl={project.image} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventSection;
