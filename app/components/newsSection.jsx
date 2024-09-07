"use client";
import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa"; // Ensure you have react-icons installed

const NewsSection = () => {
  const newsData = [
    { 
      id: 1, 
      title: "Exciting Web Development Trends", 
      image: "/wow.jpg", 
      description: "Stay updated with the latest trends in web development. From React frameworks to new CSS techniques, discover what's shaping the future of web development."
    },
    { 
      id: 2, 
      title: "Mobile App Development Insights", 
      image: "/wow2.jpg", 
      description: "Explore the world of mobile app development with the latest insights and best practices for creating engaging, user-friendly mobile applications."
    },
    { 
      id: 3, 
      title: "API Integration Best Practices", 
      image: "/news.jpg", 
      description: "Learn how to effectively integrate APIs into your projects, ensuring smooth data exchange and functionality across platforms."
    },
    { 
      id: 4, 
      title: "Ecommerce Development Strategies", 
      image: "/vlog1.jpeg", 
      description: "Discover key strategies for developing successful eCommerce platforms, from UX design to payment integration."
    },
    { 
      id: 5, 
      title: "Software Consulting Expertise", 
      image: "/consult.jpg", 
      description: "Understand the importance of software consulting and how expert guidance can lead to successful software project outcomes."
    },
    { 
      id: 6, 
      title: "Maintenance and Support Essentials", 
      image: "/maintain.jpg", 
      description: "Learn why ongoing maintenance and support are crucial to keeping your software solutions running smoothly and securely."
    },
  ];

  return (
    <section id="news" className="py-12 bg-[#1E2044] w-full px-4 mt-52">
      <h2 className="text-center text-4xl font-bold text-gray-200 mb-12">
        Yeras News
      </h2>
      <div className="space-y-12">
        {newsData.slice(0, 3).map((newsItem) => (
          <div 
            key={newsItem.id} 
            className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-lg overflow-hidden"
          >
            {/* Image Section */}
            <div className="relative w-full md:w-1/3 h-64">
              <Image 
                src={newsItem.image} 
                alt={newsItem.title} 
                layout="fill" 
                objectFit="cover" 
                className="object-cover"
              />
            </div>
            
            {/* Content Section */}
            <div className="p-6 w-full md:w-2/3">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {newsItem.title}
              </h3>
              <p className="text-gray-700">
                {newsItem.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      {/* View More Button */}
      <div className="mt-12 flex justify-center">
        <button className="flex items-center text-white text-lg font-bold py-2 px-4 bg-blue-500 hover:bg-blue-700 rounded-full transition duration-300 ease-in-out">
          View More 
          <FaArrowRight className="ml-2" />
        </button>
      </div>
    </section>
  );
};

export default NewsSection;
