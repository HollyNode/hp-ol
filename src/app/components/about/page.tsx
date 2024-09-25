"use client";

import React, { useEffect, useRef, useState } from 'react';
import Card from '../../components/ui/glass-card';
import localFont from 'next/font/local';

// Import Tabler Icons
import { IconBooks, IconHourglassHigh, IconAffiliateFilled } from '@tabler/icons-react';

// Importing the Duvall font
const duvall = localFont({
  src: '../../fonts/Duvall.ttf',
  variable: '--font-duvall',
});

const Page = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry: IntersectionObserverEntry) => 
          setVisible(entry.isIntersecting)
        );
      },
      { threshold: 0.1 } // Set the threshold for when the fade-in happens
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  // Card data with Tabler icons
  const cardData = [
    {
      icon: IconBooks,
      description: 'Translated in English maybe for the first time by Johannes Wolfeshusius, originally published in 1591. Fresh translation for on Bodin\'s chapter on lycanthropy from his 1580 work: De la demonomanie des sorciers. Loaded appendices with enhanced bibliography, additional texts & original artwork!'
    },
    {
      icon: IconHourglassHigh,
      description: 'Werewolfism, or lycanthropy was a deeply debated topic and policy during the Renaissance. Parts medical, psychological, mythological, religious, social, cultural, folklore. Culling from ancient history, to medieval medicine, to their era\'s polity and doxology. By virtue of the attention, werewolves were real.'
    },
    {
      icon: IconAffiliateFilled,
      description: 'The first work, a lycanthology, is part of the histhorrory series: focusing on reintroducing classic supernatural creatures, mythologies and symbolisms from books and authors, exploring them from scientific, anthropological, political and cultural perspectives.'
    }
  ];

  return (
    <div 
      className="learn-section bg-cover bg-center min-h-screen flex flex-col items-center justify-center text-white p-6 sm:p-8 md:p-10" 
      ref={ref}
      style={{ backgroundImage: `url('/images/learn-bg.png')` }} // Adding the background image
    >
      <h1 className={`learn-header text-center text-4xl sm:text-5xl md:text-6xl font-bold mb-8 ${duvall.variable} ${isVisible ? 'fade-in' : ''}`}>
        On Lycanthropy
      </h1>
      
      <div className="card-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-4xl md:max-w-6xl">
        {cardData.map((card, index) => (
          <Card key={index} icon={card.icon} description={card.description} />
        ))}
      </div>
    </div>
  );
};

export default Page;
