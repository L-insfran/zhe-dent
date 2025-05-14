import React from 'react';
import Seo from '../components/Seo';

const SobreNosotros = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Seo 
        title="Sobre Nosotros | Zhoedent - Innovación y Calidad Dental"
        description="Conoce Zhoedent: especialistas en prótesis dentales, placas de descarga y soluciones odontológicas de alta precisión. Tecnología avanzada y atención personalizada."
        keywords="laboratorio dental, prótesis dentales, placas de descarga, reparaciones dentales, sobre zhoedent, quiénes somos"
      />

      {/* Hero Section */}
      <section className="py-20 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Sobre Nosotros – Zhoedent</h1>
          <p className="text-xl md:text-2xl mb-8">Innovación, precisión y compromiso en cada sonrisa</p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <p className="text-lg text-gray-700 mb-6">
            En Zhoedent, nos dedicamos a transformar sonrisas a través de soluciones odontológicas innovadoras, precisas y personalizadas. Somos una marca especializada en el diseño, fabricación y reparación de prótesis dentales, placas de descarga, y otros productos clínicos de alta calidad, orientados tanto a profesionales de la odontología como a pacientes que buscan excelencia y confianza en su tratamiento dental.
          </p>
          <p className="text-lg text-gray-700">
            Desde nuestros inicios, hemos tenido un objetivo claro: elevar los estándares del sector dental, ofreciendo productos duraderos, cómodos y estéticamente impecables, siempre con tecnología de última generación y atención personalizada.
          </p>
        </div>
      </section>

      {/* Quiénes somos Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">¿Quiénes somos en Zhoedent?</h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-700 mb-4">
                Zhoedent es el resultado de años de experiencia en el área odontológica, combinada con una visión innovadora del futuro de la prótesis y la salud bucal. Nuestro equipo está formado por técnicos dentales certificados, odontólogos aliados, asesores clínicos y especialistas en atención al cliente, comprometidos con brindar un servicio profesional, ágil y eficiente.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-6">
                {[
                  "✅ Compromiso con la calidad",
                  "✅ Procesos personalizados y digitales",
                  "✅ Atención rápida y soluciones urgentes",
                  "✅ Relación cercana con clínicas y pacientes"
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{item.replace("✅", "").trim()}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h3 className="text-xl font-semibold text-blue-700 mb-3">Nuestros valores</h3>
              <ul className="space-y-3">
                {[
                  "Excelencia técnica en cada producto",
                  "Innovación constante en procesos",
                  "Honestidad y transparencia",
                  "Compromiso con resultados duraderos",
                  "Atención cálida y profesional"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
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
            <h3 className="text-2xl font-bold text-blue-600 mb-4 text-center">Nuestra misión</h3>
            <p className="text-gray-700">
              Ofrecer soluciones odontológicas de alta precisión que contribuyan al bienestar, la estética y la funcionalidad oral de cada paciente, construyendo relaciones duraderas con clínicas, laboratorios y profesionales de la salud dental.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-blue-600 mb-4 text-center">Nuestra visión</h3>
            <p className="text-gray-700">
              Ser una marca líder en el sector dental a nivel nacional, reconocida por su compromiso con la innovación, la calidad y la excelencia en el servicio técnico y clínico.
            </p>
          </div>
        </div>
      </section>

      {/* Diferencias Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Lo que nos diferencia</h2>
          <p className="text-gray-700 mb-12 text-center">
            En un mercado competitivo, Zhoedent destaca por:
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {icon: "🔹", title: "Tecnología avanzada", text: "Usamos técnicas de escaneo, impresión 3D y diseño CAD/CAM para obtener resultados exactos."},
              {icon: "🔹", title: "Entrega rápida", text: "Plazos ajustados sin sacrificar calidad, entendiendo la importancia del tiempo en tratamientos dentales."},
              {icon: "🔹", title: "Atención personalizada", text: "Acompañamiento desde el diagnóstico hasta la entrega, con asesoría técnica continua."},
              {icon: "🔹", title: "Precisión estética", text: "Prótesis indistinguibles de dientes naturales, tanto en color como en forma."},
              {icon: "🔹", title: "Soluciones a medida", text: "Personalizamos cada pieza para adaptarse perfectamente, desde placas hasta rehabilitaciones completas."},
              {icon: "🔹", title: "Equipo especializado", text: "Técnicos dentales certificados y odontólogos con amplia experiencia clínica."}
            ].map((item, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 hover:border-blue-300 transition duration-300">
                <h3 className="text-xl font-semibold text-blue-600 mb-3">{item.icon} {item.title}</h3>
                <p className="text-gray-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clientes Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">¿A quiénes atendemos?</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <ul className="space-y-4">
                {[
                  "Odontólogos y clínicas dentales",
                  "Laboratorios dentales",
                  "Pacientes que necesitan reparaciones urgentes",
                  "Pacientes que requieren placas de descarga",
                  "Personas que buscan prótesis acrílicas de calidad",
                  "Profesionales que necesitan un aliado técnico confiable"
                ].map((item, index) => (
                  <li key={index} className="flex items-start bg-white p-4 rounded-lg shadow-sm">
                    <svg className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-800">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h3 className="text-xl font-semibold text-blue-700 mb-4">Nuestro compromiso</h3>
              <p className="text-gray-700 mb-4">
                En Zhoedent, no solo fabricamos dispositivos dentales: fabricamos confianza, funcionalidad y bienestar para tu sonrisa.
              </p>
              <p className="text-gray-700">
                Si eres profesional de la odontología o paciente particular, y buscas un equipo responsable, ágil y altamente calificado, estás en el lugar indicado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ubicación Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Nuestra ubicación</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.016887889527!2d-58.383759!3d-34.603734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM2JzEzLjQiUyA1OMKwMjMnMDEuNSJX!5e0!3m2!1ses!2sar!4v1620000000000!5m2!1ses!2sar"
                width="100%"
                height="400"
                style={{border:0}}
                allowFullScreen=""
                loading="lazy"
                title="Ubicación de Zhoedent en Google Maps"
                className="w-full"
              ></iframe>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-700 mb-4">Visítanos</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800">📍 Dirección:</h4>
                  <p className="text-gray-700">Calle Falsa 123, [Ciudad], [Región]</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">📞 Teléfono:</h4>
                  <p className="text-gray-700">[Número de teléfono]</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">📧 Email:</h4>
                  <p className="text-gray-700">[Correo electrónico]</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">🕘 Horario:</h4>
                  <p className="text-gray-700">Lunes a Viernes: 9:00 - 18:00</p>
                  <p className="text-gray-700">Sábados: 9:00 - 13:00</p>
                </div>
                <button className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-full hover:bg-blue-700 transition duration-300 mt-4">
                  Cómo llegar
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Confía en Zhoedent: calidad y precisión en cada tratamiento</h2>
          <p className="text-xl mb-8">
            Ya seas profesional de la odontología o paciente, estamos listos para ofrecerte soluciones dentales de alta calidad con el respaldo de nuestra experiencia y tecnología.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-full hover:bg-blue-50 transition duration-300 transform hover:scale-105">
              Contáctanos
            </button>
            <button className="bg-blue-700 text-white font-semibold py-3 px-8 rounded-full hover:bg-blue-800 transition duration-300">
              Conoce nuestros servicios
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SobreNosotros;