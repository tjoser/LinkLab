'use client'; // Important for using React hooks like useState in Client-side component

import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa"; // Hamburger and Close Icons

const Header = () => {
  // State for mobile menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/" className="hover:text-blue-500">LinkLab</Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/about" className="hover:text-blue-500">About</Link>
          <Link href="/hackathons" className="hover:text-blue-500">Hackathons</Link>
          <Link href="/talent" className="hover:text-blue-500">Talent</Link>
      
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl">
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4">
          <nav className="flex flex-col space-y-4">
            <Link href="/" className="text-xl text-white hover:text-blue-500">Home</Link>
            <Link href="/about" className="text-xl text-white hover:text-blue-500">About</Link>
            <Link href="/hackathons" className="text-xl text-white hover:text-blue-500">Hackathons</Link>
            <Link href="/talent" className="text-xl text-white hover:text-blue-500">Talent</Link>
            <Link href="/privacy-policy" className="text-xl text-white hover:text-blue-500">Privacy Policy</Link>
            <Link href="/terms-of-service" className="text-xl text-white hover:text-blue-500">Terms of Service</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
