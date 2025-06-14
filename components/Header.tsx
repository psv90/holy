
import React, { useState } from 'react';
import { CONTACT_EMAIL, CONTACT_PHONE, INSTAGRAM_URL, FACEBOOK_URL, BOOKSY_URL, EmailIcon, PhoneIcon, InstagramIcon, FacebookIcon, BooksyIcon, MenuIcon } from '../constants';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Nav links removed as per request

  return (
    <header className="sticky top-0 z-50 shadow-md">
      {/* Top Bar */}
      <div className="header-gradient text-pink-100 text-xs py-2 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-white flex items-center">
              <EmailIcon className="w-4 h-4 mr-1" /> {CONTACT_EMAIL}
            </a>
            <a href={`tel:${CONTACT_PHONE.replace(/\s+/g, '')}`} className="hover:text-white flex items-center">
              <PhoneIcon className="w-4 h-4 mr-1" /> {CONTACT_PHONE}
            </a>
          </div>
          <div className="flex items-center space-x-3">
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <InstagramIcon className="w-4 h-4" />
            </a>
            <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FacebookIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white py-3 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto flex justify-between items-center">
          <a href="#" className="flex items-center group" aria-label="Klinika Holy - Strona Główna">
            <img src="/assets/holy-logo.png" alt="Holy Klinika Logo" className="h-14 w-auto mr-3 transition-transform duration-300 group-hover:scale-105" />
            <div>
              <span className="block font-display text-3xl font-bold text-brand-primary leading-tight group-hover:text-brand-primary-light transition-colors">Holy</span>
              <span className="block text-xs text-gray-500 leading-tight">Holistyczna klinika urody i zdrowia</span>
            </div>
          </a>
          <div className="hidden md:flex items-center space-x-6">
            {/* Navigation links removed */}
            <a href={BOOKSY_URL} target="_blank" rel="noopener noreferrer" className="button-gradient text-white px-6 py-2 rounded-full shadow hover:shadow-lg transition duration-300 transform hover:scale-105 text-sm font-medium">
              Zarezerwuj Wizytę
            </a>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-brand-primary focus:outline-none"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Otwórz menu nawigacyjne"
            >
              <MenuIcon className="w-6 h-6" />
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div id="mobile-menu" className="md:hidden mt-2 pb-4 bg-white">
            {/* Navigation links removed */}
            <a href={BOOKSY_URL} target="_blank" rel="noopener noreferrer" className="block text-center mt-2 mx-4 button-gradient text-white px-6 py-2 rounded-full shadow hover:shadow-lg transition duration-300 text-sm font-medium">
              Zarezerwuj Wizytę
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};
