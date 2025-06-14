
import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
import { ServicesSection } from './components/ServicesSection';
import { ContactSection } from './components/ContactSection';
import { InstagramIcon, FacebookIcon, PhoneIcon, EmailIcon, MapPinIcon, BooksyIcon } from './constants'; // Assuming BooksyIcon is defined

const App: React.FC = () => {
  return (
    <div className="bg-white min-h-screen text-gray-700">
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <ServicesSection />
        <ContactSection />
      </main>
      <footer className="bg-gray-800 text-white py-8 text-center">
        <div className="container mx-auto px-6">
          <div className="flex justify-center space-x-6 mb-4">
            <a href="https://www.instagram.com/holyklinika/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary-light">
              <InstagramIcon className="w-6 h-6" />
            </a>
            <a href="http://holyklinika.booksy.com/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary-light">
              <BooksyIcon className="w-6 h-6" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61551766116690" target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary-light">
              <FacebookIcon className="w-6 h-6" />
            </a>
          </div>
          <p className="text-sm">
            Klinika Holy &copy; {new Date().getFullYear()}. Wszelkie prawa zastrzeżone.
          </p>
          <p className="text-xs mt-2">
            ul. Jarocka 61, 10-699 Olsztyn | <PhoneIcon className="w-4 h-4 inline -mt-1"/> 733-530-878
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;