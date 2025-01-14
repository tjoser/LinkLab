import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa"; // Social icons from react-icons

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0">
          <h2 className="text-3xl font-bold text-center md:text-left">LinkLab</h2>
          <p className="mt-2 text-center md:text-left">
            Innovative talent acquisition through hackathons and real-world problem solving.
          </p>
        </div>
        
        <div className="flex justify-center md:justify-end space-x-6 text-xl mt-4 md:mt-0">
          <a href="#" className="hover:text-blue-500" aria-label="Facebook">
            <FaFacebook />
          </a>
          <a href="#" className="hover:text-blue-500" aria-label="Twitter">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-blue-500" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
        </div>
      </div>

      <div className="text-center mt-6 text-sm text-gray-400">
        <p>© 2025 LinkLab. All rights reserved.</p>
        <p className="mt-2">
          <a href="/privacy-policy" className="hover:text-white">Privacy Policy</a> | 
          <a href="/terms-of-service" className="hover:text-white"> Terms of Service</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
