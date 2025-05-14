
import { BiCheckCircle, BiPhoneCall, BiTime } from 'react-icons/bi';
import { Link } from 'react-router-dom'; // Cambiamos next/link por react-router-dom

const Gracias = () => {

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <BiCheckCircle className="mx-auto text-6xl mb-4" />
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
              <p>
                Hemos recibido tu consulta y nuestro equipo te responderá antes de <span className="font-semibold">24 horas hábiles</span>.
              </p>
              <p>
                Mientras tanto, te invitamos a conocer más sobre nuestros servicios:
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-8">
              {[
                {
                  icon: <BiCheckCircle className="text-3xl mx-auto text-blue-500" />,
                  text: "Reparaciones urgentes en 48h"
                },
                {
                  icon: <BiCheckCircle className="text-3xl mx-auto text-blue-500" />,
                  text: "Prótesis dentales personalizadas"
                },
                {
                  icon: <BiCheckCircle className="text-3xl mx-auto text-blue-500" />,
                  text: "Placas de descarga a medida"
                }
              ].map((item, index) => (
                <div key={index} className="bg-blue-50 p-4 rounded-lg">
                  {item.icon}
                  <p className="mt-2 font-medium">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="bg-blue-100 border-l-4 border-blue-500 p-4 mb-8 text-left">
              <p className="font-semibold text-blue-800">📌 ¿Es una emergencia?</p>
              <p className="text-blue-700">
                Llámanos directamente al <a href="tel:+541154258792" className="font-bold hover:underline">+54 11-5425-8792</a> para atención inmediata.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/" 
                className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-full hover:bg-blue-700 transition duration-300 text-center"
                replace 
              >
                Volver al inicio
              </Link>
              <a 
                href="https://wa.me/5491154258792" 
                className="bg-green-500 text-white font-semibold py-3 px-8 rounded-full hover:bg-green-600 transition duration-300 text-center flex items-center justify-center gap-2"
              >
                <BiPhoneCall /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Confianza */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Por qué confiar en Zhoedent</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "🔹 12+ años de experiencia",
              "🔹 Materiales certificados",
              "🔹 Garantía en todos nuestros trabajos"
            ].map((item, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                <p className="text-gray-800">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gracias;