import React from 'react';
import { BOOKSY_URL, TEXTS } from '../constants';

export const Hero: React.FC = () => {
  return (
    <section
      className="relative bg-cover bg-center text-white min-h-screen"
      style={{ 
        backgroundImage: `
          linear-gradient(rgba(114, 29, 48, 0.85), rgba(92, 23, 38, 0.85)),
          url('https://images.unsplash.com/photo-1560750588-73207b1ef5b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80')
        `,
        backgroundAttachment: 'scroll', // Ważne dla mobile!
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundColor: '#721d30' // Fallback color
      }}
      id="home"
    >
      {/* Dodatkowa warstwa overlay dla pewności */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-primary/70 to-brand-primary-dark/80"></div>
      
      <div className="relative container mx-auto px-6 py-32 md:py-48 text-center flex items-center justify-center min-h-screen">
        <div className="max-w-4xl">
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl mb-6 leading-tight">
            {TEXTS.heroTitle}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-4 font-light text-hero-text-custom opacity-90">
            {TEXTS.heroSubtitle}
          </p>
          <p className="text-base sm:text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light text-hero-text-custom opacity-80">
            {TEXTS.heroDescription}
          </p>
          <a
            href={BOOKSY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block button-gradient text-white font-semibold px-8 py-3 sm:px-10 sm:py-4 rounded-full shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105 text-base sm:text-lg"
          >
            Zarezerwuj wizytę
          </a>
        </div>
      </div>
    </section>
  );
};
