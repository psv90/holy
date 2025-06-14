
import React from 'react';
import { TEXTS, CONTACT_PHONE, CONTACT_EMAIL, ADDRESS, INSTAGRAM_URL, FACEBOOK_URL, BOOKSY_URL, PhoneIcon, EmailIcon, MapPinIcon, InstagramIcon, FacebookIcon, BooksyIcon } from '../constants';

export const ContactSection: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-brand-accent" id="contact">
      <div className="container mx-auto px-6">
        {/* Call to Action */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl text-brand-primary mb-4">{TEXTS.ctaTitle}</h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto mb-8">
            {TEXTS.ctaDescription}
          </p>
          <a 
            href={BOOKSY_URL} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="button-gradient text-white font-semibold px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105 text-lg"
          >
            Zarezerwuj Swoją Chwilę Relaksu
          </a>
        </div>

        {/* Contact Info & Map */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="bg-white p-8 rounded-lg shadow-xl">
            <h3 className="font-display text-3xl text-brand-primary mb-6">{TEXTS.contactTitle}</h3>
            <div className="space-y-4 text-gray-700">
              <p className="flex items-center">
                <MapPinIcon className="w-6 h-6 mr-3 text-brand-primary-light flex-shrink-0" /> {ADDRESS}
              </p>
              <p className="flex items-center">
                <PhoneIcon className="w-6 h-6 mr-3 text-brand-primary-light flex-shrink-0" /> 
                <a href={`tel:${CONTACT_PHONE.replace(/\s+/g, '')}`} className="hover:text-brand-primary">{CONTACT_PHONE}</a>
              </p>
              <p className="flex items-center">
                <EmailIcon className="w-6 h-6 mr-3 text-brand-primary-light flex-shrink-0" /> 
                <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-brand-primary">{CONTACT_EMAIL}</a>
              </p>
            </div>
            <div className="mt-8">
              <h4 className="font-semibold text-lg text-gray-800 mb-3">Śledź nas:</h4>
              <div className="flex space-x-4">
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-brand-primary-light hover:text-brand-primary">
                  <InstagramIcon className="w-8 h-8" />
                </a>
                <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="text-brand-primary-light hover:text-brand-primary">
                  <FacebookIcon className="w-8 h-8" />
                </a>
                <a href={BOOKSY_URL} target="_blank" rel="noopener noreferrer" className="text-brand-primary-light hover:text-brand-primary">
                  <BooksyIcon className="w-8 h-8" />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white p-2 rounded-lg shadow-xl aspect-w-16 aspect-h-9">
             {/* Placeholder for map - In a real app, use an iframe or a map library */}
            <img 
                src={`https://maps.googleapis.com/maps/api/staticmap?center=${encodeURIComponent(ADDRESS)}&zoom=15&size=600x400&markers=color:0x721d30%7Clabel:H%7C${encodeURIComponent(ADDRESS)}&key=YOUR_GOOGLE_MAPS_API_KEY`} 
                alt="Mapa lokalizacji Kliniki Holy" 
                className="rounded-md object-cover w-full h-full"
                onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null; // Prevent infinite loop if placeholder also fails
                    target.src = "https://picsum.photos/seed/map/600/400"; // Fallback placeholder
                    target.alt = "Placeholder map image";
                }}
            />
            <p className="text-xs text-gray-500 mt-1 text-center">Uwaga: Aby wyświetlić mapę, potrzebny jest klucz Google Maps API. Wyświetlono obraz zastępczy.</p>
          </div>
        </div>
      </div>
    </section>
  );
};