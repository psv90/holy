
import React from 'react';
import { TEXTS } from '../constants';

const CheckIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5" {...props}>
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
  </svg>
);


export const AboutUs: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-brand-accent" id="about">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl text-brand-primary mb-4">Witamy w Twojej Oazie Spokoju</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {TEXTS.aboutIntro}
          </p>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto font-medium">
            {TEXTS.aboutNoRush}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="font-display text-3xl text-brand-primary mb-6">{TEXTS.whatDistinguishesTitle}</h3>
            <ul className="space-y-4">
              {TEXTS.distinguishingFeatures.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckIcon className="w-6 h-6 text-brand-primary-light mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-lg text-gray-800">{feature.title}</h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-8 bg-white rounded-lg shadow-xl">
            <h3 className="font-display text-3xl text-brand-primary mb-6">{TEXTS.forWhomTitle}</h3>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">{TEXTS.forWhomDescription}</p>
            <img src="https://picsum.photos/seed/relax/500/350" alt="Relaksująca atmosfera" className="rounded-lg mt-6 shadow-md"/>
          </div>
        </div>
      </div>
    </section>
  );
};