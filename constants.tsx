
import React from 'react';

export const CONTACT_EMAIL = "kontakt@holyklinika.pl"; // Placeholder email
export const CONTACT_PHONE = "733-530-878";
export const ADDRESS = "ul. Jarocka 61, 10-699 Olsztyn";

export const INSTAGRAM_URL = "https://www.instagram.com/holyklinika/";
export const BOOKSY_URL = "http://holyklinika.booksy.com/";
export const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61551766116690";

export const EmailIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>
);

export const PhoneIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
  </svg>
);

export const InstagramIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.85s.012-3.584.07-4.85c.149-3.227 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163m0-2.163C8.74 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.74 0 12s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.74 24 12 24s3.667-.014 4.947-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.687.073-4.947s-.014-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98C15.667.014 15.26 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"/>
  </svg>
);

export const FacebookIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
  </svg>
);

export const MapPinIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
  </svg>
);

export const BooksyIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => ( // Placeholder Booksy Icon
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v18M17.25 3v18M3 8.25h18M3 15.75h18" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m0 13.5V21M3.75 3.75h16.5M3.75 20.25h16.5" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 8.25A2.25 2.25 0 0112 6h0a2.25 2.25 0 012.25 2.25V15a2.25 2.25 0 01-2.25 2.25h0a2.25 2.25 0 01-2.25-2.25V8.25z" />
 </svg>
);

export const MenuIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
);

export const TEXTS = {
  heroTitle: "Witamy w Holy",
  heroSubtitle: "Twojej przestrzeni spokoju i równowagi",
  heroDescription: "W świecie, który ciągle pędzi, stworzyłyśmy miejsce, gdzie możesz się zatrzymać. W Klinice Holy dbamy o Ciebie z czułością i uważnością, nie tylko na poziomie ciała, ale też umysłu i emocji.",
  aboutSectionTitle: "Twoja przestrzeń spokoju, troski i prawdziwej regeneracji.",
  aboutIntro: "W świecie, który nie zna pauzy, my ją tworzymy. Holy to miejsce, gdzie możesz się zatrzymać. Złapać oddech. Zostać wysłuchaną. Dbamy o Ciebie z uważnością w atmosferze domowego ciepła i zaufania – nie tylko na poziomie ciała, ale i emocji.",
  aboutNoRush: "Bez pośpiechu, bez sztywnych schematów, za to z ogromem troski. Bo dla nas najważniejsze jest, żebyś poczuła się… naprawdę dobrze.",
  whatDistinguishesTitle: "Co nas wyróżnia?",
  distinguishingFeatures: [
    { title: "Holistyczne podejście", description: "Łączymy nowoczesne terapie z zabiegami beauty, by wspierać Twój organizm w równowadze.", icon: "fas fa-check", descriptionColor: "#000000" },
    { title: "Czas tylko dla Ciebie", description: "Nie spieszymy się, słuchamy, dobieramy zabiegi indywidualnie, z uważnością na Twoje potrzeby.", icon: "fas fa-check", descriptionColor: "#000000" },
    { title: "Domowa atmosfera", description: "Stworzona z miłością przestrzeń, gdzie możesz się rozgościć i na chwilę zapomnieć o świecie.", icon: "fas fa-check", descriptionColor: "#000000" },
    { title: "Sprawdzona jakość", description: "Pracujemy wyłącznie na produktach, które same stosujemy i którym ufamy.", icon: "fas fa-check", descriptionColor: "#000000" },
    { title: "Autentyczność", description: "Bez stresu, bez \"taśmowości\", bez anonimowości. Holistyczne podejście – widzimy więcej niż tylko skórę czy paznokcie.", icon: "fas fa-check", descriptionColor: "#000000" },
    { title: "Holistyczne podejście", description: "Widzimy więcej niż tylko skórę czy paznokcie.", icon: "fas fa-check", descriptionColor: "#000000" }
  ],
  forWhomTitle: "Dla kogo jesteśmy?",
  forWhomSubtitle: "Dla kobiet, które szukają czegoś więcej niż zwykły \"zabieg\"",
  ctaTitle: "Zaparz kawę. Zdejmij płaszcz. Jesteś u siebie.",
  ctaDescription: "Zacznij swoją małą, wielką regenerację z nami. Z miłością, jak u przyjaciółki.",
  contactTitle: "Skontaktuj się z Nami",
  locationTitle: "Gdzie jesteśmy?",
  findUsOnlineTitle: "Znajdź nas w sieci"
};

export const forWhomItems = [
  {
    icon: "fas fa-seedling",
    title: "Potrzebujesz oddechu",
    description: "Od codzienności, od ciągłego pędu. Miejsca, gdzie możesz się zatrzymać i nabrać sił."
  },
  {
    icon: "fas fa-user", // Changed from fas fa-leaf
    title: "Cenisz autentyczność",
    description: "I spokój. Szukasz miejsca bez sztuczności, gdzie możesz być sobą."
  },
  {
    icon: "fas fa-hand-holding-heart",
    title: "Chcesz być zaopiekowana",
    description: "I poczuć się dobrze we własnym ciele – od wewnątrz i na zewnątrz."
  },
  {
    icon: "fas fa-mug-hot",
    title: "Szukasz ciszy",
    description: "Chwili dla siebie, gdzie możesz zaparzyć kawę i poczuć się jak u siebie."
  }
];

export const socialLinkCards = [
  {
    platform: "Instagram",
    iconClass: "fab fa-instagram",
    details: "@holyklinika - Sprawdź nowości",
    url: INSTAGRAM_URL,
    borderColorClass: "border-pink-400",
    iconColorClass: "text-pink-500", // Will render pink
    ariaLabel: "Klinika Holy na Instagramie"
  },
  {
    platform: "Facebook",
    iconClass: "fab fa-facebook-f",
    details: "Bądź na bieżąco z nami",
    url: FACEBOOK_URL,
    borderColorClass: "border-blue-400",
    iconColorClass: "text-blue-600", // Will render blue
    ariaLabel: "Klinika Holy na Facebooku"
  },
  {
    platform: "Booksy",
    iconClass: "fas fa-calendar-check",
    details: "Zarezerwuj wizytę online",
    url: BOOKSY_URL,
    borderColorClass: "border-gray-400", // Changed border to gray for neutrality
    iconColorClass: "text-black", // Will render black
    ariaLabel: "Zarezerwuj wizytę w Klinika Holy przez Booksy"
  }
];
