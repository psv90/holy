
import React from 'react';
import { CONTACT_EMAIL, CONTACT_PHONE, INSTAGRAM_URL, FACEBOOK_URL, BOOKSY_URL, EmailIcon, PhoneIcon, InstagramIcon, FacebookIcon } from '../constants';

export const Header: React.FC = () => {
  // Nav links removed as per request

  return (
    <header className="shadow-md">
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
      <nav className="py-3 px-4 sm:px-6 lg:px-8"> {/* Removed inline style here */}
        <div className="container mx-auto flex justify-between items-center">
          <a href="#" className="flex items-center group" aria-label="Klinika Holy - Strona Główna">
            <img src="https://i.imgur.com/Ov2ohky.png" alt="Holy Klinika Logo" className="h-16 sm:h-20 lg:h-24 w-auto mr-3 transition-transform duration-300 group-hover:scale-105" />
            <div>
              <span className="block font-display text-4xl lg:text-5xl font-bold text-black leading-tight group-hover:text-gray-700 transition-colors">Holy</span>
              <span className="block text-sm lg:text-base text-black leading-tight">Holistyczna klinika urody i zdrowia</span>
            </div>
          </a>
          {/* Booking Button - Always Visible */}
          <a
            href={BOOKSY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="button-gradient text-white px-6 py-2 rounded-full shadow hover:shadow-lg transition duration-300 transform hover:scale-105 text-sm font-medium flex items-center justify-center text-center"
          >
            Zarezerwuj wizytę
          </a>
        </div>
      </nav>
    </header>
  );
};