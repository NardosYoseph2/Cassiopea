"use client";
import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const testimonialsData = [
  {
    id: 1,
    name: "John Doe",
    position: "CEO, Acme Corp",
    testimony:
      "Yeras Technologies provided us with an excellent solution for our eCommerce platform. Their team was highly professional and delivered beyond our expectations.",
    image: "/ceo.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "CTO, Tech Innovators",
    testimony:
      "Working with Yeras Technologies was a fantastic experience. They were highly responsive and managed our API integration seamlessly.",
    image: "/ceo2.jpg",
  },
  {
    id: 3,
    name: "Michael Johnson",
    position: "Product Manager, Software Solutions",
    testimony:
      "Their custom software development services exceeded our expectations. The team’s expertise and dedication made all the difference in our project.",
    image: "/ceo3.jpg",
  },
];

const TestimonialSection = () => {
  return (
    <section id="testimony" className="py-12 w-full px-4 md:px-8 bg-[#1E2044] mt-24">
      <h2 className="text-center text-4xl font-bold text-gray-200 mb-12">
        What Our Clients Say
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        {testimonialsData.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white shadow-lg rounded-lg p-8 max-w-sm"
          >
            <FaQuoteLeft className="text-gray-400 text-3xl mb-4" />
            <p className="text-gray-600 italic mb-6">
              &quot;{testimonial.testimony}&quot;
            </p>
            <div className="flex items-center space-x-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="text-gray-800 font-semibold">{testimonial.name}</p>
                <p className="text-gray-500 text-sm">{testimonial.position}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
