"use client";
import TabButton from "@/app/components/TabButton";
import React, { useState,useTransition } from "react";
// import GithubIcon from "../../../public/github-icon.svg";
// import LinkedinIcon from "../../../public/linkedin-icon.svg";
import { MapPinIcon,  EnvelopeIcon, PhoneIcon} from '@heroicons/react/24/outline';
import Link from "next/link";
import Image from "next/image";
// import 'react-toastify/dist/ReactToastify.css';


const EmailSection = () => {
  
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          We&apos;re eager to hear from you! Whether you have inquiries about our services, want to discuss a potential project,
          we&apos;re here to assist you. Feel free to reach out to us via phone or email. Our team is dedicated to providing
          prompt and personalized assistance, so don&apos;t hesitate to get in touch.We look forward to collaborating with you
          and helping you achieve your software goals.
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/NardosYoseph">
            {/* <Image src={GithubIcon} alt="Github Icon" /> */}
          </Link>
          <Link href="https://www.linkedin.com/in/nardos-yosef-286088299/">
            {/* <Image src={LinkedinIcon} alt="Linkedin Icon" /> */}
          </Link>
        </div>
       
      </div>
      <div>
        <div>
        <ul className="list-disc pl-2">
               <br></br>
          
          <ul className="text-white">
          <MapPinIcon className="h-6 w-6 inline mr-2 text-[#FF6500]" />
            Addis Ababa,Ethiopia</ul>
            <br></br>
            <ul className="text-white">   
            < EnvelopeIcon className="h-6 w-6 inline mr-2 text-[#FF6500]" />
           Cassiopeia@gmail.com</ul>
            <br></br>
            <ul className="text-white">
            <PhoneIcon className="h-6 w-6 inline mr-2 text-[#FF6500]" />
            +251903280511 - +251715280511</ul>
        </ul>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
