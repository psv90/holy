
import React from 'react';
import { TEXTS, BOOKSY_URL } from '../constants';

interface ServiceItemProps {
  name: string;
  imgSrc: string;
  description: string;
}

const ServiceCard: React.FC<ServiceItemProps> = ({ name, imgSrc, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300 flex flex-col">
      <img src={imgSrc} alt={name} className="w-full h-56 object-cover"/>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-display text-2xl text-brand-primary mb-2">{name}</h3>
        <p className="text-gray-600 flex-grow">{description}</p>
        <a 
          href={BOOKSY_URL} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="mt-4 inline-block button-gradient text-white font-medium px-6 py-2 rounded-full shadow hover:shadow-lg transition duration-300 text-center text-sm"
        >
          Dowiedz się więcej
        </a>
      </div>
    </div>
  );
};

export const ServicesSection: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-white" id="services">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl text-brand-primary mb-4">{TEXTS.servicesTitle}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {TEXTS.servicesDescription}
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEXTS.servicesList.map((service, index) => (
            <ServiceCard 
              key={index} 
              name={service.name} 
              imgSrc={service.imgSrc}
              description={service.description} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};