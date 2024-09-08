"use client";
import React from "react";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-cover bg-center text-white py-8 md:mt-24" style={{ backgroundImage: "url('/wow.jpg')" }}>
      <div className="bg-black bg-opacity-50 py-8">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start">
            {/* Company Info */}
            <div className="mb-8 md:mb-0">
              <h3 className="text-2xl font-bold mb-4">Yeras Tech</h3>
              <p className="text-lg mb-4">
                Your trusted partner in software solutions.
              </p>
              <div className="flex space-x-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <FaFacebookF className="text-xl hover:text-gray-300 transition" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <FaTwitter className="text-xl hover:text-gray-300 transition" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <FaLinkedinIn className="text-xl hover:text-gray-300 transition" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="text-xl hover:text-gray-300 transition" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="mb-8 md:mb-0">
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul>
                <li className="mb-2">
                  <Link href="/" className="hover:text-gray-300 transition">About Us</Link>
                </li>
                <li className="mb-2">
                  <Link href="/" className="hover:text-gray-300 transition">Services</Link>
                </li>
                <li className="mb-2">
                  <Link href="/" className="hover:text-gray-300 transition">Blog</Link>
                </li>
                <li className="mb-2">
                  <Link href="/" className="hover:text-gray-300 transition">Contact</Link>
                </li>
              </ul>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <p className="mb-2">1234 Software St, Tech City, TX 12345</p>
              <p className="mb-2">Email: <a href="mailto:info@yerastech.com" className="hover:text-gray-300 transition">info@yeras.com</a></p>
              <p className="mb-2">Phone: <a href="tel:+1234567890" className="hover:text-gray-300 transition">+251713852254</a></p>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} YerasTech. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
