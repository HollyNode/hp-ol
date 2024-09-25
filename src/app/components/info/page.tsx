"use client";

import { useEffect, useRef } from "react";
import React from "react";
import { motion } from "framer-motion";
import { LinkPreview } from "../ui/link-preview";

const Info = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLHeadingElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const iframeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = [headingRef.current, subheadingRef.current, buttonRef.current, iframeRef.current];

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          observer.unobserve(entry.target); // Stop observing once it's visible
        }
      });
    }, { threshold: 0.2 }); // Trigger when 20% of the element is in view

    elements.forEach((el) => {
      if (el) {
        observer.observe(el);
      }
    });

    // Clean up observer when the component unmounts
    return () => {
      elements.forEach((el) => {
        if (el) {
          observer.unobserve(el);
        }
      });
    };
  }, []);

  return (
    <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('/images/info2-bg.png')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left flex flex-col md:flex-row md:space-x-8">
          {/* Left Section (Heading and Text) */}
          <div className="md:w-2/3">
            <h1
              ref={headingRef}
              className="text-primary text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 opacity-0"
              style={{ fontFamily: "your-stylized-font" }}
            >
              In the Late 16th Century
            </h1>

            <h3 ref={subheadingRef} className="text-gray-300 text-base sm:text-lg md:text-xl lg:text-2xl mb-6 opacity-0">
              Across the European countryside,{" "}
              <LinkPreview url="https://www.google.com/books/edition/De_Lycanthropis/Ro1WAAAAcAAJ?hl=en&gbpv=0" className="font-bold">
                beastial murders
              </LinkPreview>{" "}
              occurred:
              <br /> natural, un-natural, supernatural.
              <br /> Across the European intelligentsia, arguments endure:
              <br />{" "}
              <LinkPreview url="https://your-url-for-melancholic.com" className="font-bold">
                Melancholic
              </LinkPreview>
              , madness, malevolent.
              <br /> From jurists to academics, Protestant and Catholic,
              <br /> physician to magician,{" "}
              <LinkPreview url="https://your-url-for-historian.com" className="font-bold">
                historian
              </LinkPreview>{" "}
              to occultist.
            </h3>

            {/* Call to Action Button */}
            {/*<button ref={buttonRef} className="mt-8 bg-primary text-dark px-4 py-3 sm:px-6 sm:py-3 rounded-lg font-bold opacity-0">
              Learn More
            </button>*/}
          </div>

          {/* Right Section (Rumble Embed Iframe) */}
          <div
            ref={iframeRef}
            className="md:w-1/3 mt-8 md:mt-0 opacity-0"
            style={{
              marginRight: "90px", // Removed extra margin for smaller screens
              marginTop: "20px", // Reduced top margin for smaller screens
              border: "5px solid #333", // Dark grey border
              borderRadius: "15px", // Rounded corners
              padding: "5px", // Optional padding for a cleaner look
            }}
          >
            <iframe
              className="rumble"
              width="100%"
              height="350" // Reduced height for mobile view
              src="https://rumble.com/embed/v5dj2ed/?pub=3spjod"
              frameBorder="0"
              allowFullScreen
              style={{
                borderRadius: "15px", // Applies border radius to the iframe itself
              }}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
