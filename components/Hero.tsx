
import React from 'react';
import { BOOKSY_URL, TEXTS } from '../constants';

export const Hero: React.FC = () => {
  return (
    <section
      className="relative bg-cover bg-center text-white"
      style={{ backgroundImage: "url('https://picsum.photos/seed/spa-beauty/1920/1080')" }}
      id="home"
    >
      <div className="absolute inset-0 hero-dominant-overlay"></div>
      <div className="relative container mx-auto px-6 py-32 md:py-48 text-center">
        <h1 className="font-display text-5xl md:text-7xl mb-6">
          {TEXTS.heroTitle}
        </h1>
        <p className="text-xl md:text-2xl mb-4 font-light text-hero-text-custom" style={{ opacity: 0.85 }}>
          {TEXTS.heroSubtitle}
        </p>
        <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light text-hero-text-custom" style={{ opacity: 0.85 }}>
          {TEXTS.heroDescription}
        </p>
        <a
          href={BOOKSY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="button-gradient text-white font-semibold px-10 py-4 rounded-full shadow hover:shadow-lg transition duration-300 transform hover:scale-105 text-lg"
        >
          Zarezerwuj wizytę
        </a>
      </div>
    </section>
  );
};