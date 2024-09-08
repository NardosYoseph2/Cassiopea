import React, { useState } from "react";

const caseStudiesData = [
  { id: 1, title: "E-commerce Platform", description: "A robust e-commerce platform with custom features.", image: "/ayzot.jpg", category: "Web", link: "https://www.ayzot.com.et" },
  { id: 2, title: "Event Ticketing Mobile App", description: "Innovative event ticketing mobile app development for seamless user experience.", image: "/event.jpg", category: "Mobile App", link: "" },
  { id: 3, title: "API Integration", description: "Smooth integration of third-party APIs.", image: "/wow2.jpg", category: "Integration", link: "" } 
];

const categories = ["All", "Web", "Mobile App", "Integration"];

const PortfolioSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All" ? caseStudiesData : caseStudiesData.filter(project => project.category === selectedCategory);

  return (
    <section id="portfolio" className="py-12 bg-gray-100 w-full px-4 md:px-8 mt-24">
      <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-800 mb-8">
        Our Successful Projects
      </h2>

      <div className="flex flex-wrap overlow-x-auto justify-center mb-8 space-x-2 sm:space-x-4">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 sm:px-8 sm:py-2 rounded-full font-semibold transition duration-300 ${
              selectedCategory === category
                ? 'bg-[#1E2044] text-white'
                : 'bg-gray-300 text-gray-800 hover:bg-blue-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredProjects.map((project) => (
          <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={project.image} alt={project.title} className="w-full h-40 sm:h-48 object-cover"/>
            <div className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-[#1E2044] text-white rounded-md hover:bg-blue-700 transition duration-300"
                >
                  Visit Website
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="text-center sm:text-end mt-8">
        <a
          href="#"
          className="inline-block px-6 py-3 bg-[#1E2044] text-white rounded-md hover:bg-blue-700 transition duration-300"
        >
          View All
        </a>
      </div>
    </section>
  );
};

export default PortfolioSection;
