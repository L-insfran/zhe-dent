import React from 'react';
import Seo from '../components/Seo';

const Contacto = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Seo 
        title="Contacto – Zhoedent | Soluciones Odontológicas Profesionales"
        description="Contactá con Zhoedent para consultas, cotizaciones o reparaciones urgentes. Atención personalizada para clínicas, laboratorios y pacientes."
        keywords="contacto Zhoedent, laboratorio dental contacto, reparación urgente prótesis dental, placas de descarga a medida, atención odontológica personalizada, contacto para clínicas dentales, soporte técnico odontológico"
      />

      {/* Hero Section */}
      <section className="py-20 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">📞 Contacto – Zhoedent</h1>
          <p className="text-xl md:text-2xl mb-8">Estamos aquí para ayudarte con soluciones odontológicas de calidad</p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <p className="text-lg text-gray-700 mb-6">
            En Zhoedent, valoramos la comunicación directa con nuestros clientes, clínicas y profesionales de la odontología. Ya sea que necesites una cotización, agendar una reparación urgente o resolver dudas sobre nuestras prótesis dentales, placas de descarga u otros servicios, nuestro equipo está listo para brindarte una atención rápida, clara y personalizada.
          </p>
        </div>
      </section>

      {/* Formulario y Ubicación Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Formulario */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">📬 Escríbenos o solicita tu cotización</h2>
            <p className="text-gray-700 mb-6">
              Utiliza el siguiente formulario para enviarnos un mensaje. Nos pondremos en contacto contigo lo antes posible para brindarte toda la información que necesites.
            </p>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="nombre" className="block text-gray-700 font-medium mb-2">
                  Nombre completo <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Correo electrónico <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              
              <div>
                <label htmlFor="telefono" className="block text-gray-700 font-medium mb-2">
                  Teléfono de contacto <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              
              <div>
                <label htmlFor="clinica" className="block text-gray-700 font-medium mb-2">
                  Clínica o empresa (opcional)
                </label>
                <input
                  type="text"
                  id="clinica"
                  name="clinica"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              
              <div>
                <label htmlFor="asunto" className="block text-gray-700 font-medium mb-2">
                  Asunto <span className="text-red-500">*</span>
                </label>
                <select
                  id="asunto"
                  name="asunto"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Selecciona un asunto</option>
                  <option value="cotizacion">Cotización</option>
                  <option value="reparacion">Reparación urgente</option>
                  <option value="consulta">Consulta general</option>
                  <option value="clinicas">Atención a clínicas</option>
                  <option value="otros">Otros</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="mensaje" className="block text-gray-700 font-medium mb-2">
                  Mensaje <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows="4"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
              </div>
              
              <div className="pt-2">
                <button
                  type="submit"
                  className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-full hover:bg-blue-700 transition duration-300"
                >
                  Enviar mensaje
                </button>
              </div>
            </form>
            
            <p className="text-sm text-gray-500 mt-4">
              <span className="text-red-500">*</span> Todos los campos marcados son obligatorios. Responderemos tu consulta dentro de las siguientes 24 horas hábiles.
            </p>
          </div>
          
          {/* Ubicación y Contacto */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">📍 Nuestra ubicación</h2>
              <p className="text-gray-700 font-medium mb-2">Zhoedent – Laboratorio y Soluciones Odontológicas</p>
              <p className="text-gray-700 mb-4">📌 Calle Falsa 123, [Ciudad], [Provincia]</p>
              
              <div className="bg-gray-100 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">🕒 Horario de atención:</h3>
                <ul className="text-gray-700 space-y-1">
                  <li>Lunes a Viernes – 9:00 a 18:00</li>
                  <li>Sábados – 9:00 a 13:00</li>
                  <li>Domingos y feriados: Emergencias (consultar disponibilidad)</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">📞 Líneas de contacto directo</h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2">📲</span>
                  <span>WhatsApp / Teléfono: <span className="font-medium">[+XX 000 000 000]</span></span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">📧</span>
                  <span>Email: <span className="font-medium">[info@zhoedent.com]</span></span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">💼</span>
                  <span>Atención a clínicas y laboratorios: <span className="font-medium">[servicios@zhoedent.com]</span></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Por qué contactarnos Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">🤝 ¿Por qué contactarnos?</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "🔹 Atención inmediata ante reparaciones urgentes de prótesis",
              "🔹 Asesoramiento profesional en placas de descarga",
              "🔹 Soporte técnico para odontólogos y laboratorios",
              "🔹 Solicitud de presupuestos y convenios",
              "🔹 Seguimiento personalizado de casos clínicos",
              "🔹 Soluciones a medida para cada necesidad dental"
            ].map((item, index) => (
              <div key={index} className="flex items-start bg-white p-4 rounded-lg shadow-sm">
                <span className="text-xl mr-3">{item.split(' ')[0]}</span>
                <span className="text-gray-800">{item.split(' ').slice(1).join(' ')}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mapa Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Encuéntranos fácilmente</h2>
          
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
          
          <div className="mt-8 text-center">
            <button className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-full hover:bg-blue-700 transition duration-300 inline-flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Cómo llegar
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">📲 ¡Estamos a un clic de distancia!</h2>
          <p className="text-xl mb-8">
            En Zhoedent, cada sonrisa cuenta. No dudes en contactarnos si necesitás una solución dental confiable, rápida y profesional. Nuestro compromiso es estar cerca de vos y ayudarte en cada paso del tratamiento.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-full hover:bg-blue-50 transition duration-300 transform hover:scale-105">
              Llamar ahora
            </button>
            <button className="bg-blue-700 text-white font-semibold py-3 px-8 rounded-full hover:bg-blue-800 transition duration-300">
              Enviar WhatsApp
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacto;