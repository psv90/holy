
import React from 'react';
import { TEXTS, forWhomItems } from '../constants.tsx';

const galleryImages = [
  { src: 'https://raw.githubusercontent.com/psv90/holy/main/assets/IMG-3571.jpg', alt: 'Wnętrze Kliniki Holy - recepcja' },
  { src: 'https://raw.githubusercontent.com/psv90/holy/main/assets/IMG-3692.jpg', alt: 'Gabinet zabiegowy w Klinice Holy' },
  { src: 'https://raw.githubusercontent.com/psv90/holy/main/assets/IMG-3748%20(1).jpg', alt: 'Szczegół wystroju Kliniki Holy' },
  { src: 'https://raw.githubusercontent.com/psv90/holy/main/assets/IMG-3751%20(1).jpg', alt: 'Poczekalnia w Klinice Holy' },
  { src: 'https://raw.githubusercontent.com/psv90/holy/main/assets/IMG-3763%20(1).jpg', alt: 'Produkty używane w Klinice Holy' },
  { src: 'https://raw.githubusercontent.com/psv90/holy/main/assets/IMG-3764%20(1).jpg', alt: 'Atmosfera relaksu w Klinice Holy' },
  { src: 'https://raw.githubusercontent.com/psv90/holy/main/assets/IMG-5536.jpg', alt: 'Inny gabinet zabiegowy w Klinice Holy' },
];

export const AboutUs: React.FC = () => {
  // All titles in "Co nas wyróżnia?" will now be #5E0A39
  const titlesToUpdate = [
    "Holistyczne podejście", 
    "Domowa atmosfera", 
    "Autentyczność",
    "Czas tylko dla Ciebie", // Added to ensure #5E0A39
    "Sprawdzona jakość"    // Added to ensure #5E0A39
  ];
  // All titles in "Dla kogo jesteśmy?" will now be #5E0A39
  const forWhomTitlesToUpdate = [
    "Potrzebujesz oddechu",
    "Chcesz być zaopiekowana",
    "Cenisz autentyczność", // Added to ensure #5E0A39
    "Szukasz ciszy"         // Added to ensure #5E0A39
  ];

  return (
    <section id="about">
      {/* Part 1: Intro */}
      <div style={{ backgroundColor: '#fef3f9', color: '#820e4f' }} className="py-16 lg:py-20">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="font-display text-4xl mb-4" style={{ color: '#5e0a39' }}>{TEXTS.aboutSectionTitle}</h2>
            <p className="text-lg max-w-3xl mx-auto leading-relaxed" style={{ color: '#000000' }}>
              {TEXTS.aboutIntro}
            </p>
            <p className="mt-4 text-lg max-w-3xl mx-auto font-medium" style={{ color: '#000000' }}>
              {TEXTS.aboutNoRush}
            </p>
          </div>

          {/* Image Gallery Section */}
          <div className="mt-12 lg:mt-16 text-center"> {/* Adjusted top margin */}
            {/* <h3 className="font-display text-4xl mb-8 lg:mb-12" style={{ color: '#5E0A39' }}>Poznaj Nasze Wnętrza</h3> Removed heading */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 max-w-5xl mx-auto">
              {galleryImages.map((image, index) => (
                <div key={index} className="rounded-lg overflow-hidden shadow-lg group">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* "Co nas wyróżnia?" Section */}
          <div className="mt-16 lg:mt-20 max-w-3xl mx-auto">
            <h3 className="font-display text-4xl mb-6 lg:mb-8 text-center" style={{ color: '#5E0A39' }}>{TEXTS.whatDistinguishesTitle}</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-8 gap-y-6">
              {TEXTS.distinguishingFeatures.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="fa-stack w-6 h-6 mr-3 flex-shrink-0 text-center mt-1" style={{ fontSize: '0.625rem' }}>
                    <i className="fas fa-circle fa-stack-2x" style={{ color: '#d91a60' }}></i>
                    <i className={`${feature.icon} fa-stack-1x fa-inverse`}></i>
                  </span>
                  <div>
                    <h4 
                      className="font-semibold text-lg" 
                      style={{ color: titlesToUpdate.includes(feature.title) ? '#5E0A39' : '#d91a60' }}
                    >
                      {feature.title}
                    </h4>
                    <p style={feature.descriptionColor ? { color: feature.descriptionColor } : {}}>{feature.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Part 2: "Dla kogo jesteśmy?" */}
      <div style={{ background: 'linear-gradient(135deg, #fce2f0, #f6add5)', color: '#820e4f' }} className="py-16 lg:py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10 lg:mb-12">
            <h2 className="font-display text-4xl mb-4" style={{ color: '#5e0a39' }}>
              {TEXTS.forWhomTitle}
            </h2>
            <p className="text-lg max-w-xl mx-auto" style={{ color: '#000000' }}>
              {TEXTS.forWhomSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            {forWhomItems.map((item, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-start text-left h-full relative" 
                style={{
                  backgroundImage: "url('https://raw.githubusercontent.com/psv90/holy/main/assets/lisc2.png')",
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 0px top 0px',
                  backgroundSize: '40px auto' 
                }}
              >
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-3 w-8 text-center" style={{ color: '#d91a60' }}>
                    <i className={item.icon}></i>
                  </span>
                  <h3 
                    className="text-xl font-semibold" 
                    style={{ color: forWhomTitlesToUpdate.includes(item.title) ? '#5E0A39' : '#d91a60' }}
                  >
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: '#333333' }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
