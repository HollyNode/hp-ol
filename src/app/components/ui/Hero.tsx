"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import localFont from 'next/font/local';

// Correct path to Duvall.ttf font
const duvall = localFont({
  src: '../../fonts/Duvall.ttf',
  variable: '--font-duvall',
});

const Hero = () => {
  return (
    <section className="bg-deepDark text-white h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8">
      {/* Image and Title in the Same Row */}
      <div className="flex flex-col sm:flex-row items-center mb-6 space-y-6 sm:space-y-0 sm:space-x-4">
        {/* Image with Fog Effect */}
        <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48">
          <Image
            src="/images/only-new-icon.png"
            alt="Lycanthropy logo"
            width={192}
            height={192}
            className="object-contain"
          />
          {/* Fog Overlay */}
          <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
            <div className="fog"></div>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-2 font-duvall">
          On Lycanthropy
        </h1>
      </div>

      {/* Subtitle */}
      <h3 className="text-lg sm:text-xl md:text-2xl text-white font-serif font-light tracking-widest uppercase">
        & Tales of Historical Horror
      </h3>

      {/* Button */}
      <a
        href="https://www.amazon.com/Lycanthropy-TALES-HISTORICAL-HORROR/dp/B0DHP42SV4/ref=sr_1_2?sr=8-2"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 bg-primary text-dark px-6 py-3 rounded-lg font-bold relative group overflow-hidden"
      >
        <span className="relative z-10">Get the Book</span>
        {/* Werewolf themed animation */}
        <div className="absolute inset-0 bg-dark group-hover:bg-red-800 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>
        <div className="absolute top-0 left-0 w-4 h-full bg-gray-800 group-hover:bg-red-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></div>
        <div className="absolute top-0 right-0 w-4 h-full bg-gray-800 group-hover:bg-red-600 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></div>
      </a>
    </section>
  );
};

export default Hero;
