import React from 'react';
import Seo from '../components/Seo';

const PlacasDescarga = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Seo 
        title="Placas de Descarga Dentales | Zhoedent - Tratamiento para Bruxismo"
        description="Protege tus dientes del bruxismo con placas de descarga personalizadas. Alivia dolor mandibular, previene desgaste dental y mejora tu calidad de sueño."
        keywords="placa de descarga, férula dental, bruxismo tratamiento, rechinar dientes, dolor mandíbula, ATM tratamiento"
      />

      {/* Hero Section */}
      <section className="py-20 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Placas de Descarga Dentales</h1>
          <p className="text-xl md:text-2xl mb-8">Protege tus dientes y alivia el bruxismo con un tratamiento profesional</p>
          <button className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-full hover:bg-blue-50 transition duration-300 transform hover:scale-105">
            Reserva tu consulta
          </button>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <p className="text-lg text-gray-700 mb-6">
            Las placas de descarga son uno de los tratamientos más eficaces para prevenir el desgaste dental y aliviar molestias causadas por el bruxismo (rechinar o apretar los dientes). En nuestra clínica odontológica, diseñamos placas personalizadas para cada paciente, fabricadas con materiales de alta calidad, que permiten proteger la salud bucal y mejorar la calidad del sueño.
          </p>
          <img src="/images/placa-descarga.jpg" alt="Placa de descarga dental transparente sobre modelo de dientes" className="w-full rounded-lg mb-6" />
        </div>
      </section>

      {/* Qué es Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">¿Qué es una placa de descarga?</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-700 mb-4">
                Una placa de descarga dental, también conocida como férula de descarga, es un dispositivo removible, transparente y fabricado a medida que se coloca sobre una arcada dental, generalmente superior, durante las horas de sueño.
              </p>
              <p className="text-gray-700">
                Su principal función es proteger los dientes del desgaste provocado por el bruxismo y relajar la articulación temporomandibular (ATM), reduciendo dolores musculares, cefaleas y tensión mandibular.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h3 className="text-xl font-semibold text-blue-700 mb-3">¿Sabías que?</h3>
              <p className="text-gray-700">
                El bruxismo afecta a aproximadamente el 20% de la población, y muchas personas no son conscientes de que lo padecen hasta que aparecen síntomas avanzados.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Indicaciones Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">¿Para qué sirve una placa de descarga?</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {icon: "🦷", text: "Bruxismo: prevención del desgaste dental por fricción excesiva."},
              {icon: "😬", text: "Tensión en la mandíbula o dolor al despertar."},
              {icon: "💥", text: "Dolores de cabeza o cuello asociados a la ATM."},
              {icon: "💤", text: "Mejorar la calidad del sueño reduciendo el estrés mandibular."},
              {icon: "🛡️", text: "Proteger tratamientos dentales recientes, como carillas, coronas o implantes."},
              {icon: "⚖️", text: "Redistribuir las fuerzas masticatorias para evitar sobrecargas."}
            ].map((item, index) => (
              <div key={index} className="flex items-start bg-white p-4 rounded-lg shadow-sm">
                <span className="text-2xl mr-3">{item.icon}</span>
                <span className="text-gray-800">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Síntomas Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">¿Cómo saber si necesito una placa de descarga?</h2>
          
          <div className="bg-blue-50 rounded-xl p-8 mb-8">
            <p className="text-gray-700 mb-6">
              Algunos de los síntomas más comunes que indican la necesidad de una placa de descarga son:
            </p>
            
            <ul className="grid md:grid-cols-2 gap-4">
              {[
                "Rechinar los dientes durante la noche (ruido audible).",
                "Dolor en la mandíbula, cuello o cabeza al despertar.",
                "Dientes desgastados, fracturados o sensibles.",
                "Chasquidos o bloqueo en la articulación mandibular.",
                "Estrés o ansiedad, factores que suelen agravar el bruxismo.",
                "Sensación de cansancio en los músculos faciales por la mañana."
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-800">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
            <p className="text-yellow-800 font-medium">
              📌 Recomendación profesional: No todas las placas son iguales. El diagnóstico odontológico es clave para determinar el tipo de férula que necesitas.
            </p>
          </div>
        </div>
      </section>

      {/* Tipos Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Tipos de placas de descarga</h2>
          <p className="text-gray-700 mb-8 text-center">
            Existen distintos tipos de placas según el caso clínico del paciente:
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-600 mb-3 flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Placa rígida
              </h3>
              <p className="text-gray-700">
                Fabricada en acrílico duro, ideal para casos de bruxismo severo. Ofrece gran durabilidad y estabilidad.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-600 mb-3 flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Placa semirrígida
              </h3>
              <p className="text-gray-700">
                Hecha de materiales más blandos. Se usa generalmente en casos leves o como solución temporal.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-600 mb-3 flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Placa para ATM
              </h3>
              <p className="text-gray-700">
                Diseñada para pacientes con trastornos temporomandibulares. Alivia la presión sobre la articulación.
              </p>
            </div>
          </div>
          
          <div className="mt-8 text-center text-gray-700">
            <p>En nuestra clínica, realizamos una evaluación precisa para elegir la mejor opción según tus necesidades.</p>
          </div>
        </div>
      </section>

      {/* Proceso Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">¿Cómo se fabrica una placa de descarga?</h2>
          
          <div className="space-y-6">
            {[
              "Consulta y diagnóstico clínico.",
              "Toma de impresiones dentales precisas.",
              "Diseño personalizado en laboratorio dental.",
              "Prueba, ajuste y recomendaciones de uso.",
              "Seguimiento periódico para garantizar efectividad."
            ].map((step, index) => (
              <div key={index} className="flex items-start bg-gray-50 p-6 rounded-lg">
                <div className="bg-blue-600 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                  {index + 1}
                </div>
                <p className="text-gray-800 text-lg">{step}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-8 bg-blue-50 p-6 rounded-lg text-center">
            <p className="text-gray-700">
              💬 Además, te brindamos seguimiento periódico para garantizar su efectividad y comodidad a largo plazo.
            </p>
          </div>
        </div>
      </section>

      {/* Beneficios Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Beneficios de usar una placa de descarga</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "✅ Previene el desgaste de los dientes",
              "✅ Reduce dolores musculares y articulares",
              "✅ Mejora el descanso nocturno",
              "✅ Protege tratamientos estéticos y rehabilitaciones dentales",
              "✅ Disminuye el riesgo de fracturas dentales",
              "✅ Aumenta la calidad de vida del paciente"
            ].map((benefit, index) => (
              <div key={index} className="flex items-start bg-white p-4 rounded-lg">
                <svg className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-800">{benefit.replace("✅", "").trim()}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consecuencias Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">¿Qué pasa si no uso una placa de descarga?</h2>
          
          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
            <p className="text-gray-700 mb-6">
              Ignorar el bruxismo o los problemas de ATM puede tener consecuencias graves a mediano y largo plazo:
            </p>
            
            <ul className="space-y-3">
              {[
                "Fracturas dentales o desgaste prematuro",
                "Dolor crónico en mandíbula y cuello",
                "Problemas articulares o desplazamiento de la mandíbula",
                "Interrupción del sueño y fatiga diaria",
                "Necesidad de tratamientos más costosos en el futuro",
                "Pérdida de piezas dentales en casos avanzados"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-5 h-5 text-red-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-gray-800">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Cuidados Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Mantenimiento y cuidados</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-700 mb-6">
                Para prolongar la vida útil de tu placa de descarga y mantener una buena salud oral:
              </p>
              
              <div className="space-y-4">
                {[
                  {icon: "🧼", text: "Lavarla diariamente con agua y jabón neutro (evita pastas abrasivas)."},
                  {icon: "💧", text: "Guardarla en un estuche ventilado cuando no la uses."},
                  {icon: "🦷", text: "No exponerla a altas temperaturas ni dejarla al sol."},
                  {icon: "👨‍⚕️", text: "Realizar controles odontológicos periódicos."},
                  {icon: "🚿", text: "Enjuagarla antes de cada uso."},
                  {icon: "🔍", text: "Revisar periódicamente en busca de desgastes o fisuras."}
                ].map((item, index) => (
                  <div key={index} className="flex items-start bg-white p-4 rounded-lg shadow-sm">
                    <span className="text-2xl mr-3">{item.icon}</span>
                    <span className="text-gray-800">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h3 className="text-xl font-semibold text-blue-700 mb-4">¿Por qué elegir nuestra clínica para tu placa de descarga?</h3>
              <ul className="space-y-3">
                {[
                  "Odontólogos especializados en trastornos de ATM y bruxismo",
                  "Tecnología de vanguardia para diseño personalizado",
                  "Materiales de alta calidad y biocompatibles",
                  "Atención profesional centrada en el bienestar del paciente",
                  "Seguimiento post-entrega para ajustes necesarios",
                  "Asesoramiento integral sobre hábitos y cuidados"
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

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Preguntas frecuentes (FAQ)</h2>
          
          <div className="space-y-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-3">¿Puedo comprar una placa de descarga en una farmacia?</h3>
              <p className="text-gray-700">
                No es recomendable. Las placas genéricas no se ajustan adecuadamente y pueden empeorar el problema. Es fundamental que sea personalizada y supervisada por un odontólogo.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-3">¿Cuánto dura una placa de descarga?</h3>
              <p className="text-gray-700">
                Dependiendo del uso y del material, pueden durar entre 2 y 5 años. Se recomienda controlarla periódicamente para evaluar desgaste o deformaciones.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-3">¿Se puede hablar o dormir cómodamente con la placa?</h3>
              <p className="text-gray-700">
                Sí. Puede haber un periodo corto de adaptación (1-2 semanas), pero están diseñadas para ser cómodas durante el sueño. La mayoría de pacientes se acostumbran rápidamente.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-3">¿Es cubierta por seguros médicos?</h3>
              <p className="text-gray-700">
                Muchos seguros dentales cubren parcial o totalmente las placas de descarga cuando son médicamente necesarias. Consúltanos para ayudarte con la gestión de tu seguro.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-blue-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Protege tu sonrisa y tu salud</h2>
          <p className="text-xl mb-8">
            No esperes a que el bruxismo cause daños irreversibles en tus dientes. Agenda una evaluación y descubre cómo una placa de descarga personalizada puede mejorar tu calidad de vida.
          </p>
          <button className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-full hover:bg-blue-50 transition duration-300 transform hover:scale-105">
            Agenda tu consulta hoy
          </button>
        </div>
      </section>
    </div>
  );
};

export default PlacasDescarga;