import { useEffect } from "react";
import ReactGA from "react-ga4";
import { Link } from 'react-router-dom';
import Seo from "../components/Seo";

const Breadcrumbs = () => (
  <nav aria-label="Ruta de navegación" className="text-sm py-4 px-4 text-gray-600">
  <ol className="flex space-x-2">
    <li>
      <Link to="/" className="hover:text-red-600  text-white">Inicio</Link>
    </li>
    <li>/</li>
    <li aria-current="page" className="text-black">Sobre Nosotros</li>
  </ol>
  </nav>
);

const SobreNosotros = () => {
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: "/sobre-nosotros" });
  }, []);
  return (
    
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Seo
        title="Sobre Nosotros | Zhoedent - Innovación y Calidad Dental"
        description="Conoce Zhoedent: especialistas en prótesis dentales, placas de descarga y soluciones odontológicas de alta precisión. Tecnología avanzada y atención personalizada."
        keywords="laboratorio dental, prótesis dentales, placas de descarga, reparaciones dentales, sobre zhoedent, quiénes somos"
        canonical="https://zhoedent.netlify.app/sobrenosotros"
        ogImage="https://zhoedent.netlify.app/images/og-sobre-nosotros.jpg"
      />
      {/* Hero Section */}
      <section
        className="py-20 px-4 bg-blue-600 text-white"
        aria-label="Presentación de Zhoedent"
      >
        <Breadcrumbs />
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl text font-bold mb-6">
            Sobre Nosotros – Zhoedent
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Innovación, precisión y compromiso en cada sonrisa
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <p className="text-lg text-gray-700 mb-6">
            En Zhoedent, nos dedicamos a transformar sonrisas a través de
            soluciones innovadoras, precisas y personalizadas. Somos una marca
            especializada en el diseño, fabricación y reparación de prótesis
            dentales, placas de descarga, orientados a pacientes que buscan
            excelencia y confianza en su tratamiento dental.
          </p>
          <p className="text-lg text-gray-700">
            Desde nuestros inicios, hemos tenido un objetivo claro: elevar los
            estándares del sector dental, ofreciendo productos duraderos,
            cómodos y estéticamente impecables, siempre con tecnología de última
            generación y atención personalizada.
          </p>
        </div>
      </section>

      {/* Quiénes somos Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            ¿Quiénes somos en Zhoedent?
          </h2>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-700 mb-4">
                Zhoedent es el resultado de años de experiencia en el área
                técnica, combinada con una visión innovadora del futuro de la
                prótesis. Nuestro equipo está formado por técnicos dentales
                certificados, comprometidos con brindar un servicio profesional,
                ágil y eficiente.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-6">
                {[
                  "✅ Compromiso con la calidad",
                  "✅ Procesos personalizados ",
                  "✅ Atención rápida y soluciones urgentes",
                  "✅ Relación cercana con pacientes",
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-green-500 mt-1 mr-2 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700">
                      {item.replace("✅", "").trim()}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h3 className="text-xl font-semibold text-blue-700 mb-3">
                Nuestros valores
              </h3>
              <ul className="space-y-3">
                {[
                  "Excelencia técnica en cada producto",
                  "Innovación constante en procesos",
                  "Honestidad y transparencia",
                  "Compromiso con resultados duraderos",
                  "Atención cálida y profesional",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Misión y Visión Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-blue-600 mb-4 text-center">
              Nuestra misión
            </h3>
            <p className="text-gray-700">
              Ofrecer soluciones de alta precisión que contribuyan al bienestar,
              la estética y la funcionalidad oral de cada paciente, construyendo
              relaciones duraderas.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-blue-600 mb-4 text-center">
              Nuestra visión
            </h3>
            <p className="text-gray-700">
              Ser una marca líder en el sector dental a nivel nacional,
              reconocida por su compromiso con la innovación, la calidad y la
              excelencia en el servicio técnico.
            </p>
          </div>
        </div>
      </section>

      {/* Diferencias Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Lo que nos diferencia
          </h2>
          <p className="text-gray-700 mb-12 text-center">
            En un mercado competitivo, Zhoedent destaca por:
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "🔹",
                title: "Entrega rápida",
                text: "Plazos ajustados sin sacrificar calidad, entendiendo la importancia del tiempo",
              },
              {
                icon: "🔹",
                title: "Atención personalizada",
                text: "Acompañamiento desde el diagnóstico hasta la entrega, con asesoría técnica continua.",
              },
              {
                icon: "🔹",
                title: "Precisión estética",
                text: "Prótesis indistinguibles de dientes naturales, tanto en color como en forma.",
              },
              {
                icon: "🔹",
                title: "Soluciones a medida",
                text: "Personalizamos cada pieza para adaptarse perfectamente",
              },
              {
                icon: "🔹",
                title: "Equipo especializado",
                text: "Técnicos dentales certificados amplia experiencia",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-6 hover:border-blue-300 transition duration-300"
              >
                <h3 className="text-xl font-semibold text-blue-600 mb-3">
                  {item.icon} {item.title}
                </h3>
                <p className="text-gray-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clientes Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            ¿A quiénes atendemos?
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <ul className="space-y-4">
                {[
                  "Pacientes que buscan prótesis dentales de calidad",
                  "Pacientes que requieren reparaciones rápidas",
                  "Pacientes que necesitan reparaciones urgentes",
                  "Pacientes que requieren placas de descarga",
                  "Personas que buscan prótesis acrílicas de calidad",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start bg-white p-4 rounded-lg shadow-sm"
                  >
                    <svg
                      className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-gray-800">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h3 className="text-xl font-semibold text-blue-700 mb-4">
                Nuestro compromiso
              </h3>
              <p className="text-gray-700 mb-4">
                En Zhoedent, no solo fabricamos dispositivos dentales:
                fabricamos confianza, funcionalidad y bienestar para tu sonrisa.
              </p>
              <p className="text-gray-700">
                Si eres paciente particular, y buscas un equipo responsable,
                ágil y altamente calificado, estás en el lugar indicado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ubicación Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Nuestra ubicación
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3097.465312650228!2d-58.61937711403133!3d-34.64857023140528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc761ac003d3d%3A0x11485a3469d8ab37!2zTW9yw7Nu!5e0!3m2!1sen!2sar!4v1747277048552!5m2!1sen!2sar"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Ubicación de Zhoedent en Morón"
                aria-label="Mapa de ubicación de Zhoedent"
                referrerPolicy="Ubicación de Zhoedent en Google Maps"
              ></iframe>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-700 mb-4">
                Visítanos
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800">📍 Dirección:</h4>
                  <p className="text-gray-700">
                    stamos a 3 cuadras de la estacion Morón
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">📞 Teléfono:</h4>
                  <p className="text-gray-700">54 11-5425-8792</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">📧 Email:</h4>
                  <p className="text-gray-700">zhoezhoe40@gmail.com</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">🕘 Horario:</h4>
                  <p className="text-gray-700">Lunes a Viernes: 9:00 - 18:00</p>
                  <p className="text-gray-700">Sábados: 9:00 - 13:00</p>
                </div>
                <a
                  href="https://maps.app.goo.gl/iiZSa3t6xsddK6DL8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-full hover:bg-blue-700 transition duration-300 mt-4">
                    Cómo llegar
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Confía en Zhoedent: calidad y precisión en cada trabajo
          </h2>
          <p className="text-xl mb-8">
            Estamos listos para ofrecerte soluciones dentales de alta calidad
            con el respaldo de nuestra experiencia y tecnología.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-full hover:bg-blue-50 transition duration-300 transform hover:scale-105"
              onClick={() => {
                ReactGA.event({
                  category: "Contacto",
                  action: "Clic en botón de WhatsApp",
                  label: "Sobre Nosotros - CTA Principal",
                });
                window.open("https://wa.me/541154258792", "_blank");
              }}
              aria-label="Contactar por WhatsApp"
            >
              Contáctanos
            </button>
            <button
              className="bg-blue-700 text-white font-semibold py-3 px-8 rounded-full hover:bg-blue-800 transition duration-300"
              onClick={() => {
                ReactGA.event({
                  category: "Navegación",
                  action: "Clic en Conoce nuestros servicios",
                  label: "Desde Sobre Nosotros",
                });
                window.location.href = "/";
              }}
              aria-label="Conocer nuestros servicios"
            >
              Conoce nuestros servicios
            </button>
          </div>
        </div>
      </section>
    </div>
  
  );
};

export default SobreNosotros;
