"use client";

import React, { useState, useEffect, useRef } from 'react';
import localFont from 'next/font/local';
import { IconCopy } from '@tabler/icons-react'; // Importing Tabler Icon

// Import the Duvall font
const duvall = localFont({
  src: '../../fonts/Duvall.ttf',
  variable: '--font-duvall',
});

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [copied, setCopied] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  // Intersection Observer to trigger the fade-in when the section is visible
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    }, { threshold: 0.1 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('matt@envynothingbuild.com');
    setCopied(true);

    // Reset copied state after 2 seconds
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div
      ref={sectionRef}
      className={`contact-section min-h-screen bg-cover bg-center flex flex-col justify-center items-center md:items-start p-6 sm:p-8 md:p-10 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-700 ease-in-out`}
      style={{ backgroundImage: `url('/images/wolf-text.png')` }}
    >
      <h1 className={`text-4xl sm:text-5xl font-bold mb-6 sm:mb-8 text-white ${duvall.variable} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-opacity duration-700 ease-in-out`}>
        Contact
      </h1>

      <div className={`email-button-container flex flex-col items-center md:items-start ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-opacity duration-700 ease-in-out`}>
        <button
          onClick={handleCopyEmail}
          className="bg-gray-800 text-white px-4 sm:px-6 py-3 rounded-lg font-semibold flex items-center space-x-2 hover:bg-gray-600 transition duration-300 ease-in-out mb-4"
        >
          <IconCopy size={20} /> {/* Copy icon */}
          <span>Copy my email address</span>
        </button>

        {/* Notification after copying */}
        {copied && (
          <div className="text-green-400 font-bold mt-2 animate-fadeInOut">
            Email copied!
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
