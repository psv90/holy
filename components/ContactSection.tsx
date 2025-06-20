
import React from 'react';
import { TEXTS, CONTACT_PHONE, CONTACT_EMAIL, ADDRESS, PhoneIcon, EmailIcon, MapPinIcon, BOOKSY_URL, socialLinkCards } from '../constants';

export const ContactSection: React.FC = () => {
  return (
    <section
      className="pt-8 pb-16 lg:pt-12 lg:pb-24 relative" // Added relative for positioning context if needed in future
      id="contact"
      style={{
        backgroundColor: '#fef3f9',
        backgroundImage: "url('https://raw.githubusercontent.com/psv90/holy/main/assets/lisc32.png')",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom left',
        backgroundSize: 'auto', // Ensures original size
      }}
    >
      <div className="container mx-auto px-6">
        {/* Call to Action */}
        <div
          className="text-center py-12 pb-16 lg:pb-20"
          // Removed inline background styles from here
        >
          <h2
            className="font-display text-4xl mb-4"
            style={{ color: '#5e0a39' }}
          >
            {TEXTS.ctaTitle}
          </h2>
          <p
            className="text-lg max-w-3xl mx-auto mb-8"
            style={{ color: '#000000' }}
          >
            {TEXTS.ctaDescription}
          </p>
          <a
            href={BOOKSY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button-gradient text-white font-semibold px-4 py-3 text-sm sm:px-8 sm:py-3 sm:text-lg md:px-10 md:py-4 md:text-lg rounded-full shadow hover:shadow-lg transition duration-300 transform hover:scale-105"
          >
            Zarezerwuj swoją chwilę relaksu
          </a>
        </div>

        {/* Contact Info & Map */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-x-12 mt-8 md:mt-12">
          <div className="bg-white p-6 sm:p-8 rounded-lg shadow-xl h-full flex flex-col">
            <div>
              <h3 className="font-display text-3xl mb-6" style={{ color: '#5e0a39' }}>{TEXTS.contactTitle}</h3>
              <div className="space-y-4">
                <p className="flex items-start sm:items-center" style={{ color: '#000000' }}>
                  <MapPinIcon className="w-6 h-6 mr-3 flex-shrink-0 mt-1 sm:mt-0" style={{ color: '#d91a60' }} /> {ADDRESS}
                </p>
                <p className="flex items-center">
                  <PhoneIcon className="w-6 h-6 mr-3 flex-shrink-0" style={{ color: '#d91a60' }} />
                  <a href={`tel:${CONTACT_PHONE.replace(/\s+/g, '')}`} className="hover:text-brand-primary" style={{ color: '#000000' }}>{CONTACT_PHONE}</a>
                </p>
                <p className="flex items-center">
                  <EmailIcon className="w-6 h-6 mr-3 flex-shrink-0" style={{ color: '#d91a60' }} />
                  <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-brand-primary" style={{ color: '#000000' }}>{CONTACT_EMAIL}</a>
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <h4 className="font-display text-2xl mb-4" style={{ color: '#5e0a39' }}>{TEXTS.findUsOnlineTitle}</h4>
              <div className="space-y-3">
                {socialLinkCards.map((card) => (
                  <a
                    key={card.platform}
                    href={card.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={card.ariaLabel}
                    className={`flex items-center p-3 bg-white rounded-lg shadow-md border hover:shadow-lg transition-shadow duration-300 ${card.borderColorClass} hover:bg-gray-50`}
                  >
                    <i
                      className={`${card.iconClass} ${card.iconColorClass} text-2xl w-7 text-center mr-3`}
                    ></i>
                    <div>
                      <span className="font-semibold text-[#5e0a39] text-md">{card.platform}</span>
                      <span className="text-xs block" style={{ color: '#000000' }}>{card.details}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-xl overflow-hidden aspect-w-16 aspect-h-9 min-h-[300px] md:min-h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2359.7499297505465!2d20.487677240907423!3d53.74052847252105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e278bdd436bef7%3A0xb8be59bb91abb75c!2sJarocka%2061%2C%2011-041%20Olsztyn!5e0!3m2!1spl!2spl!4v1749917186649!5m2!1spl!2spl"
              width="100%"
              height="100%"
              style={{ border:0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokalizacja Kliniki Holy na mapie Google"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};
