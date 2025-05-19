import { useEffect } from 'react';
import ReactGA from 'react-ga4';
import aranitas from '../assets/aranitas.jpg';
import Seo from '../components/Seo';

const ArañitasDentales = () => {
  // Inicializar y trackear vista de página
  useEffect(() => {
    ReactGA.initialize('G-9ZMBJ5WLES'); // Reemplaza con tu ID real
    ReactGA.send({
      hitType: "pageview",
      page: "/aranitas-dentales",
      title: "Arañitas Dentales | Zhoedent"
    });
  }, []);

  // Función para trackear eventos
  const trackEvent = (category, action, label) => {
    ReactGA.event({
      category,
      action,
      label
    });
  };

  // Manejo de clicks en WhatsApp
  const handleWhatsAppClick = (message, buttonLocation) => {
    trackEvent('Contacto', 'Click WhatsApp', `Arañitas - ${buttonLocation}`);
    
    const numero = "541154258792";
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  // Trackeo de secciones visibles
  const trackSectionView = (sectionName) => {
    trackEvent('Engagement', 'View Section', `Arañitas - ${sectionName}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Seo 
        title="Tratamiento de Arañitas Dentales | Zhoedent"
        description="Soluciones profesionales para microfisuras dentales. Tratamientos estéticos y preventivos para arañitas en los dientes."
        keywords="arañitas dentales, microfisuras dientes, grietas esmalte dental"
        canonical="https://zhoedent.netlify.app/aranitas-dentales"
      />

      {/* Hero Section */}
      <section 
        className="py-20 px-4 bg-blue-600 text-white"
        onMouseEnter={() => trackSectionView('Hero')}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Tratamiento de Arañitas Dentales</h1>
          <p className="text-xl md:text-2xl mb-8">Soluciones estéticas y preventivas para microfisuras en los dientes</p>
          <button 
            className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-full hover:bg-blue-50 transition duration-300 transform hover:scale-105"
            onClick={() => handleWhatsAppClick(
              "Hola zhoedent tengo una duda sobre el tratamiento de arañitas dentales",
              "Hero Button"
            )}
            aria-label="Consultar sobre arañitas dentales"
          >
            ¿Cuál es tu consulta?
          </button>
        </div>
      </section>

      {/* Intro Section */}
      <section 
        className="py-16 px-4 max-w-4xl mx-auto"
        onMouseEnter={() => trackSectionView('Introducción')}
      >
        <div className="bg-white rounded-xl shadow-lg p-8">
          <p className="text-lg text-gray-700 mb-6">
            ¿Has notado pequeñas líneas o grietas en tus dientes que parecen telarañas? Estas marcas, conocidas como <strong>arañitas dentales</strong>, pueden afectar la apariencia de tu sonrisa y ser una señal de desgaste en el esmalte. En Zhoedent, te ofrecemos un diagnóstico profesional y tratamientos efectivos.
          </p>
          <img 
            src={aranitas} 
            alt="Arañitas dentales en esmalte mostrando microfisuras" 
            className="w-full rounded-lg mb-6" 
            loading="lazy"
          />
        </div>
      </section>

      {/* Qué son Section */}
      <section 
        className="py-16 px-4 bg-white"
        onMouseEnter={() => trackSectionView('Qué son')}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">¿Qué son las arañitas dentales?</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-700 mb-4">
                Las arañitas dentales son <strong>microfisuras en el esmalte dental</strong> que aparecen por diversos factores. Aunque inicialmente son un problema estético, pueden convertirse en un problema funcional si no se tratan.
              </p>
              <p className="text-gray-700">
                Estas fisuras suelen ser superficiales pero pueden permitir el paso de bacterias, aumentando el riesgo de caries y sensibilidad dental.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h3 className="text-xl font-semibold text-blue-700 mb-3">¿Sabías que?</h3>
              <p className="text-gray-700">
                El 60% de las arañitas dentales son causadas por bruxismo (rechinar los dientes), muchas veces durante el sueño sin que el paciente lo note.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Causas Section */}
      <section 
        className="py-16 px-4 bg-gray-50"
        onMouseEnter={() => trackSectionView('Causas')}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Principales causas</h2>
          <p className="text-gray-700 mb-8 text-center">
            Estas pequeñas fracturas pueden originarse por:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: (
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                ),
                title: "Bruxismo",
                description: "Rechinar o apretar los dientes genera presión que causa microfisuras."
              },
              {
                icon: (
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                ),
                title: "Cambios de temperatura",
                description: "Alternar alimentos muy fríos con muy calientes provoca estrés térmico."
              },
              {
                icon: (
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Traumatismos",
                description: "Golpes o accidentes pueden generar fisuras no visibles inmediatamente."
              },
              {
                icon: (
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                  </svg>
                ),
                title: "Malos hábitos",
                description: "Morder objetos duros como hielo o lápices daña el esmalte."
              }
            ].map((cause, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300"
                onClick={() => trackEvent('Interacción', 'Click Causa', cause.title)}
              >
                <div className="flex items-start mb-3">
                  <div className="bg-blue-100 p-2 rounded-full mr-4">
                    {cause.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">{cause.title}</h3>
                </div>
                <p className="text-gray-700">{cause.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Importancia Section */}
      <section 
        className="py-16 px-4 bg-blue-600 text-white"
        onMouseEnter={() => trackSectionView('Importancia')}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">¿Por qué tratarlas a tiempo?</h2>
          
          <div className="bg-blue-700 rounded-xl p-8 mb-8">
            <p className="mb-6">
              Las arañitas pueden derivar en problemas mayores. Las microgrietas permiten la acumulación de bacterias, aumentando el riesgo de caries y sensibilidad.
            </p>
            <p>
              Si están relacionadas con bruxismo, el daño podría avanzar hacia fracturas más graves o desgaste excesivo.
            </p>
          </div>
          
          <p className="text-center text-xl font-semibold">
            Diagnóstico profesional temprano para evaluar severidad y tratamiento adecuado.
          </p>
        </div>
      </section>

      {/* Tratamientos Section */}
      <section 
        className="py-16 px-4 bg-white"
        onMouseEnter={() => trackSectionView('Tratamientos')}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Nuestros tratamientos</h2>
          <p className="text-gray-700 mb-12 text-center">
            Soluciones personalizadas para arañitas dentales:
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Férulas de descarga",
                description: "Protegen los dientes durante la noche y evitan progresión de fisuras.",
                tag: "Para bruxismo"
              },
              {
                title: "Pulido estético",
                description: "Procedimiento mínimamente invasivo que mejora la apariencia del esmalte.",
                tag: "Solución estética"
              },
              {
                title: "Carillas dentales",
                description: "Cubren grietas visibles y mejoran la estética dental de forma duradera.",
                tag: "Rehabilitación"
              },
              {
                title: "Control preventivo",
                description: "Identificamos hábitos dañinos y te enseñamos cómo evitarlos.",
                tag: "Educación"
              }
            ].map((treatment, index) => (
              <div 
                key={index} 
                className="border border-gray-200 rounded-lg p-6 hover:border-blue-300 transition duration-300"
                onClick={() => trackEvent('Interés', 'Click Tratamiento', treatment.title)}
              >
                <h3 className="text-xl font-semibold text-blue-600 mb-3">{treatment.title}</h3>
                <p className="text-gray-700 mb-4">{treatment.description}</p>
                <div className="bg-blue-50 text-blue-800 text-sm font-medium px-3 py-1 rounded-full inline-block">
                  {treatment.tag}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beneficios Section */}
      <section 
        className="py-16 px-4 bg-gray-50"
        onMouseEnter={() => trackSectionView('Beneficios')}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Beneficios del tratamiento</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Prevención de daños mayores",
              "Reducción de sensibilidad dental",
              "Mejora estética visible",
              "Conservación del esmalte",
              "Diagnóstico temprano de bruxismo",
              "Mayor durabilidad dental"
            ].map((benefit, index) => (
              <div 
                key={index} 
                className="flex items-start bg-white p-4 rounded-lg"
                onClick={() => trackEvent('Interés', 'Click Beneficio', benefit)}
              >
                <svg className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-800">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="py-16 px-4 bg-blue-700 text-white"
        onMouseEnter={() => trackSectionView('CTA Final')}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">¿Necesitas tratamiento?</h2>
          <p className="text-xl mb-8">
            Si notas líneas en tus dientes o sensibilidad, agenda una consulta. Evaluaremos tu caso y recomendaremos el mejor tratamiento.
          </p>
          <button 
            className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-full hover:bg-blue-50 transition duration-300 transform hover:scale-105"
            onClick={() => handleWhatsAppClick(
              "Hola zhoedent, quiero reservar un turno para evaluación de arañitas dentales",
              "CTA Final"
            )}
            aria-label="Reservar turno para arañitas dentales"
          >
            Reservar turno
          </button>
        </div>
      </section>
    </div>
  );
};

export default ArañitasDentales;