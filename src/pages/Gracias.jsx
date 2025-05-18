import { useEffect } from "react";
import ReactGA from "react-ga4";
import { BiCheckCircle, BiPhoneCall, BiTime, BiLogoWhatsapp } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import Seo from "../components/Seo";

const Breadcrumbs = () => (
  <nav aria-label="Ruta de navegación" className="text-sm py-4 px-4 text-gray-600">
    <ol className="flex space-x-2">
      <li>
        <Link to="/" className="hover:text-red-600 text-white">Inicio</Link>
      </li>
      <li>/</li>
      <li aria-current="page" className="text-white">Gracias</li>
    </ol>
  </nav>
);

const Gracias = () => {
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: "/gracias" });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Seo
        title="Gracias por contactarnos | Zhoedent"
        description="Hemos recibido tu mensaje. Nuestro equipo te responderá antes de 24 horas hábiles. Conoce más sobre nuestros servicios dentales de calidad."
        keywords="contacto dental exitoso, prótesis dentales, reparaciones urgentes, placas de descarga"
        canonical="https://zhoedent.netlify.app/gracias"
      />
      
      {/* Hero Section */}
      <section className="py-20 px-4 bg-blue-600 text-white" aria-label="Confirmación de mensaje enviado">
        <Breadcrumbs />
        <div className="max-w-4xl mx-auto text-center">
          <BiCheckCircle className="mx-auto text-6xl mb-4 text-green-300" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">¡Mensaje enviado con éxito!</h1>
          <p className="text-xl md:text-2xl">Gracias por contactar a Zhoedent</p>
        </div>
      </section>

      {/* Contenido Principal */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          <div className="mx-auto max-w-2xl">
            <div className="flex justify-center mb-6">
              <div className="animate-bounce">
                <BiTime className="text-5xl text-blue-500" />
              </div>
            </div>
            
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Estamos procesando tu solicitud</h2>
            
            <div className="space-y-4 text-gray-700 mb-8">
              <p className="text-lg">
                Hemos recibido tu consulta y nuestro equipo te responderá antes de <span className="font-semibold text-blue-600">24 horas hábiles</span>.
              </p>
              <p className="text-lg">
                Mientras tanto, te invitamos a conocer más sobre nuestros servicios:
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-8">
              {[
                {
                  icon: <BiCheckCircle className="text-3xl mx-auto text-blue-500" />,
                  text: "Reparaciones urgentes en 48h",
                  description: "Soluciones rápidas para emergencias dentales"
                },
                {
                  icon: <BiCheckCircle className="text-3xl mx-auto text-blue-500" />,
                  text: "Prótesis dentales",
                  description: "Personalizadas para máxima comodidad"
                },
                {
                  icon: <BiCheckCircle className="text-3xl mx-auto text-blue-500" />,
                  text: "Placas de descarga",
                  description: "Fabricadas a medida para tu necesidad"
                }
              ].map((item, index) => (
                <div key={index} className="bg-blue-50 p-4 rounded-lg hover:shadow-md transition duration-300">
                  {item.icon}
                  <p className="mt-2 font-medium text-blue-600">{item.text}</p>
                  <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-blue-100 border-l-4 border-blue-500 p-4 mb-8 text-left rounded-lg">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-blue-700 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <div>
                  <p className="font-semibold text-blue-800">¿Es una emergencia?</p>
                  <p className="text-blue-700">
                    Llámanos directamente al <a href="tel:+541154258792" className="font-bold hover:underline">+54 11-5425-8792</a> para atención inmediata.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/" 
                className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-full hover:bg-blue-700 transition duration-300 text-center transform hover:scale-105"
                onClick={() => {
                  ReactGA.event({
                    category: 'Navegación',
                    action: 'Clic en Volver al inicio',
                    label: 'Desde Página Gracias'
                  });
                }}
                aria-label="Volver al inicio"
              >
                Volver al inicio
              </Link>
              <a 
                href="https://wa.me/5491154258792" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-500 text-white font-semibold py-3 px-8 rounded-full hover:bg-green-600 transition duration-300 text-center flex items-center justify-center gap-2 transform hover:scale-105"
                onClick={() => {
                  ReactGA.event({
                    category: 'Contacto',
                    action: 'Clic en WhatsApp',
                    label: 'Desde Página Gracias'
                  });
                }}
                aria-label="Contactar por WhatsApp"
              >
                <BiLogoWhatsapp className="text-xl" /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Confianza */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Por qué confiar en Zhoedent
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Experiencia comprobada",
                description: "Más de 12 años transformando sonrisas",
                icon: "🦷"
              },
              {
                title: "Materiales certificados",
                description: "Utilizamos solo materiales de primera calidad",
                icon: "🏅"
              },
              {
                title: "Garantía incluida",
                description: "Todos nuestros trabajos tienen garantía",
                icon: "🔒"
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 border-t-4 border-blue-500"
              >
                <p className="text-3xl mb-3">{item.icon}</p>
                <h3 className="text-xl font-semibold text-blue-600 mb-2">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gracias;