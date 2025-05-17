import { useEffect } from 'react';
import ReactGA from "react-ga4";
import Seo from '../components/Seo';
import AdvantagesSection from '../components/protesis/AdvantagesSection';

import CareSection from '../components/protesis/CareSection';
import CtaSection from '../components/protesis/CtaSection';
import FAQSection from '../components/protesis/FAQSection';
import HeroSection from '../components/protesis/HeroSection';
import IndicationsSection from '../components/protesis/IndicationsSection';
import IntroSection from '../components/protesis/IntroSection';
import ProcessSection from '../components/protesis/ProcessSection';
import TypesSection from '../components/protesis/TypesSection';
import WhatIsSection from '../components/protesis/WhatIsSection';

const ProtesisAcrilicas = () => {
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: "/protesis-acrilicas" });
  }, []);

  const handleContactClick = (message) => {
    ReactGA.event({
      category: 'Contacto',
      action: 'Click en WhatsApp',
      label: 'Protesis Acrilicas - ' + message
    });
    
    const numero = "541154258792";
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Seo 
        title="Prótesis Acrílicas | Zhoedent - Soluciones Dentales"
        description="Recupera tu sonrisa con prótesis acrílicas personalizadas. Opciones económicas, funcionales y estéticas para reemplazar dientes perdidos."
        keywords="prótesis acrílicas, dentadura postiza, prótesis dental removible, dientes acrílicos, solución pérdida dental"
        canonical="https://zhoedent.netlify.app/servicios/protesis-acrilicas"
      />

      <HeroSection 
        title="Prótesis Acrílicas" 
        subtitle="Recupera tu sonrisa con soluciones accesibles, funcionales y estéticas"
        onContactClick={() => handleContactClick("Hola zhoedent tengo una duda sobre las prótesis acrílicas")}
      />
    
      <IntroSection />

      <WhatIsSection />

      <TypesSection />

      <AdvantagesSection />

      <IndicationsSection />

      <CareSection />

      <ProcessSection />

      <FAQSection />

      <CtaSection 
        onContactClick={() => handleContactClick("Hola zhoedent me gustaria reservar un turno por el servicio de protesis acrilica")}
      />
    </div>
  );
};

export default ProtesisAcrilicas;