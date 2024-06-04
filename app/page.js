"use client";
import React from "react";
//import HeroSection from "@/app/components/HeroSection";
import Navbar from "@/app/components/Navbar";
import AboutSection from "@/app/components/AboutSection";
import ProjectsSection from "@/app/components/ProjectsSection";
import EmailSection from "@/app/components/EmailSection";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/app/components/Footer";

const HomePage = () => {
  return (
    <main className="flex min-h-screen  flex-col bg-[#373A40]">
      <div className="relative w-full min-h-screen">
        <img
          src="/sft2.jpg"
          alt="background"
          className="object-cover w-full h-full"
        />

          <Navbar />
          {/* <HeroSection /> */}
       
      
      
      <div className="container mx-auto px-12 py-4 mt-24">
        {/* <AboutSection /> */}
        <ProjectsSection />
        <EmailSection />
        <Footer/>
      </div>
      </div>
    </main>
  );
};

export default HomePage;
