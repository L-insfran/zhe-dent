import ReactGA from "react-ga4";
import React from "react";
import { BiLogoFacebookCircle, BiLogoInstagram, BiLogoWhatsapp } from "react-icons/bi";

const contactInfo = {
  brand: {
    name: "ZHOEDENT",
    description: "Expertos en mecánica dental desde 2010"
  },
  contact: {
    phone: "+54 11-5425 8792",
    email: "zhoezhoe40@gmail.com",
    address: "Estamos a 3 cuadras de la estación Morón"
  },
  hours: {
    weekdays: "Lunes a Viernes: 9:00 - 18:00",
    saturday: "Sábados: 9:00 - 13:00"
  },
  social: [
    {
      name: "Facebook",
      url: "https://www.facebook.com/profile.php?id=100084036373205",
      icon: <BiLogoFacebookCircle className="h-6 w-6" />
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/zhoedent/",
      icon: <BiLogoInstagram className="h-6 w-6" />
    },
    {
      name: "Whatsapp",
      url: "https://wa.me/541154258792",
      icon: <BiLogoWhatsapp className="h-6 w-6" />
    }
  ],
  developer: {
    name: "Leandro Insfrán",
    phone: "11 3308 1248"
  }
};

const trackSocialClick = (socialName) => {
  ReactGA.event({
    category: 'Social',
    action: 'Click',
    label: socialName
  });
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-600 text-white py-12 mt-auto" role="contentinfo">
      <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8">
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-white">{contactInfo.brand.name}</h2>
          <p className="text-blue-100">{contactInfo.brand.description}</p>
          <div className="mt-4 flex gap-4">
            {contactInfo.social.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-100 transition-colors"
                aria-label={social.name}
                onClick={() => trackSocialClick(social.name)}
              >
                <span className="sr-only">{social.name}</span>
                {React.cloneElement(social.icon, { className: "h-8 w-8" })}
              </a>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Contacto</h3>
          <address className="not-italic">
            <p className="text-blue-100 mb-2 flex items-start">
              <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {contactInfo.contact.phone}
            </p>
            <p className="text-blue-100 mb-2 flex items-start">
              <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {contactInfo.contact.email}
            </p>
            <p className="text-blue-100 flex items-start">
              <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {contactInfo.contact.address}
            </p>
          </address>
        </div>

        {/* Hours */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Horario</h3>
          <div className="text-blue-100">
            <p className="mb-2 flex items-start">
              <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {contactInfo.hours.weekdays}
            </p>
            <p className="flex items-start">
              <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {contactInfo.hours.saturday}
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Enlaces rápidos</h3>
          <nav>
            <ul className="space-y-2 text-blue-100">
              
              <li>
                <a href="/servicios" className="hover:text-white transition-colors">Servicios</a>
              </li>
              <li>
                <a href="/sobrenosotros" className="hover:text-white transition-colors">Sobre Nosotros</a>
              </li>
              <li>
                <a href="/contacto" className="hover:text-white transition-colors">Contacto</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="container mx-auto px-4 mt-12 pt-6 border-t border-blue-500">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-blue-100 text-sm">
            &copy; {currentYear} {contactInfo.brand.name}. Todos los derechos reservados.
          </p>
          <p className="text-blue-100 text-sm">
            Desarrollado por <a href={`tel:${contactInfo.developer.phone}`} className="hover:text-white transition-colors">{contactInfo.developer.name}</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;