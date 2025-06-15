import React from 'react';
import { TEXTS, forWhomItems } from '../constants.tsx';

export const AboutUs: React.FC = () => {
  return (
    <section id="about">
      {/* Part 1: Intro and "Co nas wyróżnia?" */}
      <div className="bg-brand-accent py-16 lg:py-20">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="font-display text-4xl text-brand-primary mb-4">{TEXTS.aboutSectionTitle}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {TEXTS.aboutIntro}
            </p>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto font-medium">
              {TEXTS.aboutNoRush}
            </p>
          </div>

          <div className="mt-16 lg:mt-20 max-w-3xl mx-auto">
            <h3 className="font-display text-4xl text-brand-primary mb-6 lg:mb-8 text-center">{TEXTS.whatDistinguishesTitle}</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-8 gap-y-6">
              {TEXTS.distinguishingFeatures.map((feature, index) => (
                <li key={index} className="flex items-start"> {/* items-start aligns items to the top of the container */}
                  <span className="fa-stack w-6 h-6 mr-3 flex-shrink-0 text-center mt-1" style={{ fontSize: '0.625rem' }}> {/* Added mt-1 here */}
                    <i className="fas fa-circle fa-stack-2x text-brand-primary-light"></i>
                    <i className={`${feature.icon} fa-stack-1x fa-inverse`}></i>
                  </span>
                  <div>
                    <h4 className="font-semibold text-lg text-gray-800">{feature.title}</h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Part 2: "Dla kogo jesteśmy?" */}
      <div style={{ background: 'linear-gradient(135deg, #f7f3f0 0%, #e8ddd4 100%)' }} className="py-16 lg:py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10 lg:mb-12">
            <h2 className="font-display text-4xl text-brand-primary mb-4"> {/* Removed md:text-5xl */}
              {TEXTS.forWhomTitle}
            </h2>
            <p className="text-lg text-gray-700 max-w-xl mx-auto">
              {TEXTS.forWhomSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            {forWhomItems.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-start text-left h-full">
                <div className="flex items-center mb-3">
                  <span className="text-brand-primary text-2xl mr-3 w-8 text-center">
                    <i className={item.icon}></i>
                  </span>
                  <h3 className="text-xl font-semibold text-brand-primary">{item.title}</h3>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
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