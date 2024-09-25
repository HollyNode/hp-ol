"use client";

import React from 'react';
import Image from 'next/image';
import localFont from 'next/font/local';
import { IconBrandRumble, IconBrandX } from '@tabler/icons-react'; // Tabler icons for social links

// Import the Duvall font
const duvall = localFont({
  src: '../../fonts/Duvall.ttf',
  variable: '--font-duvall',
});

const Footer = () => {
  return (
    <footer className="bg-darkNavy text-white py-6 px-4 flex flex-col md:flex-row justify-between items-center w-full">
      {/* Left Section - Logo and Title */}
      <div className="flex items-center space-x-4 mb-4 md:mb-0">
        {/* Logo */}
        <div className="w-12 h-12 relative">
          <Image
            src="/images/only-new-icon.png" // Ensure the correct logo path
            alt="Lycanthropy logo"
            width={48}
            height={48}
          />
        </div>
        {/* Title and Copyright */}
        <div className="flex flex-col">
          <h1 className={`text-2xl font-bold ${duvall.variable} text-orange-400`}>
            On Lycanthropy
          </h1>
          <span className="text-sm">&copy; 2024 Histocracy Publishing</span>
        </div>
      </div>

      {/* Middle Section - Navigation Links */}
      <div className="flex flex-col space-y-2 text-center md:text-left">
        <a href="#info" className="hover:text-orange-400 transition duration-300">
          Info
        </a>
        <a href="#about" className="hover:text-orange-400 transition duration-300">
          About
        </a>
        <a href="#contact" className="hover:text-orange-400 transition duration-300">
          Contact
        </a>
      </div>

      {/* Right Section - Button and Social Icons */}
      <div className="flex items-center space-x-6 mt-4 md:mt-0">
        {/* Get the Book Button */}
        <a
          href="https://www.amazon.com/Lycanthropy-TALES-HISTORICAL-HORROR/dp/B0DHP42SV4/ref=sr_1_2?sr=8-2"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-transparent border-2 border-orange-400 text-orange-400 px-4 py-2 rounded-lg font-semibold hover:bg-orange-400 hover:text-darkNavy transition duration-300 relative group"
        >
          <span className="relative z-10 text-white">GET THE BOOK</span>
          {/* Animated Border Hover Effect */}
          <div className="absolute inset-0 border-2 border-[#fff5bd] group-hover:border-transparent transition-all duration-500 ease-in-out"></div>
        </a>

        {/* Social Media Icons */}
        <a href="https://rumble.com/c/c-6595178" target="_blank" rel="noopener noreferrer">
          <IconBrandRumble size={32} className="text-orange-400 hover:text-orange-900 transition duration-300" />
        </a>
        <a href="https://x.com/histocracy1" target="_blank" rel="noopener noreferrer">
          <IconBrandX size={32} className="text-orange-400 hover:text-orange-900 transition duration-300" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
