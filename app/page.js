"use client";
import React from "react";
import Navbar from "@/app/components/Navbar";
import EventSection from "@/app/components/ProjectsSection";
import NewsSection from "@/app/components/newsSection";
import TestimonalSection from "@/app/components/testimonalSection";
import PartnerSection from "@/app/components/partnerSection";
import ShowcaseSection from "@/app/components/showcase";
import CertificateSection from "@/app/components/certificate";
import EmailSection from "@/app/components/EmailSection";
import Footer from "@/app/components/Footer";
import Link from "next/link";

const HomePage = () => {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <div className="relative w-full min-h-screen overflow-hidden bg-white">
        {/* Background Image */}
        <img
          src="/ban.jpg"
          alt="background"
          className="object-cover w-full h-screen"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>

        {/* Text and Button */}
        <div className="absolute inset-0 flex flex-col justify-center items-center z-20 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to YerasTech</h1>
          <p className="text-lg md:text-2xl mb-8">
            Explore our Services and get in touch for orders!
          </p>
          <Link href="#services" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out">
            Get Started
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-30 w-full px-0 py-4 mt-28">
        <Navbar />
        <EventSection />
        <ShowcaseSection />
        <NewsSection />
        <TestimonalSection />
        <PartnerSection />
        {/* <CertificateSection /> */}

        {/* <EmailSection /> */}
        <Footer />
      </div>
    </main>
  );
};

export default HomePage;
