import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer text-black mt-0">
      <div className="container p-4 sm:p-12 flex flex-col sm:flex-row justify-between items-center">
        {/* Set width and height for the image */}
        <img src="/white.png" alt="Cassio Logo" width="200" height="50" />
        <p className="text-white">@2024 Cassiopeia Technologies.All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
