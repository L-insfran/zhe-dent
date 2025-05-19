import Seo from "../components/Seo";
import { Link } from 'react-router-dom';
const Breadcrumbs = () => (
  <nav aria-label="Ruta de navegación" className="text-sm py-4 px-4 text-gray-600">
  <ol className="flex space-x-2">
    <li>
      <Link to="/" className="hover:text-red-600  text-white">servicios</Link>
    </li>
    <li>/</li>
    <li aria-current="page" className='text-black'>reparaciones-urgentes</li>
  </ol>
  </nav>
);

const ReparacionesUrgentes = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Seo
        title="Reparaciones Urgentes Dentales en Morón | Zhoedent - Emergencias Odontológicas"
        description="Atención inmediata para emergencias dentales: dolor agudo, prótesis rotas, fracturas dentales. Soluciones rápidas y profesionales cuando más las necesitas."
        keywords="reparación dental urgente, emergencia odontológica, dolor de muelas, prótesis dental rota, fractura dental, urgencias dentales"
      />

      {/* Hero Section */}
      <section className="py-20 px-4 bg-red-600 text-white">
        <Breadcrumbs />
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Reparaciones Urgentes Dentales
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Atención inmediata y soluciones eficaces ante emergencias
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:+54 1154258792"
              className="bg-white text-red-600 font-semibold py-3 px-8 rounded-full hover:bg-red-50 transition duration-300 transform hover:scale-105 text-center"
            >
              Llama ahora
            </a>
            <div className="relative group inline-block">
              <button className="bg-red-700 text-white font-semibold py-3 px-8 rounded-full hover:bg-red-800 focus:outline-none transition duration-300">
                Ubicación
              </button>
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-64 bg-white text-red-700 text-sm font-medium px-4 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300 z-10">
                Estamos a 3 cuadras de la estación de Morón
                <div className="absolute bottom-[-6px] left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white rotate-45"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <p className="text-lg text-gray-700 mb-6">
            En Zhoedent, entendemos que los imprevistos pueden
            ocurrir en cualquier momento. Por eso ofrecemos un servicio
            especializado de reparaciones urgentes dentales, diseñado para
            atender de manera rápida, profesional y segura cualquier situación
            que comprometa tu salud bucal o estética dental.
          </p>
          <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
            <p className="text-red-700 font-medium">
              Una prótesis rota, ¡no
              esperes más! Nuestro equipo está preparado para darte una solución
              inmediata. 
               <strong> Nuestros técnicos dentales estarán atendiendo su EMERGENCIA!!!</strong>
            </p>
          </div>
          {/* <img
            src="/images/reparacion-urgente.jpg"
            alt="Dentista atendiendo emergencia dental"
            className="w-full rounded-lg"
          /> */}
        </div>
      </section>

      {/* Qué son Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            ¿Qué son las reparaciones urgentes?
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-700 mb-4">
                Las reparaciones urgentes comprenden una serie de procedimientos
                que se realizan de forma inmediata ante
                situaciones que requieren atención prioritaria, ya sea por dolor
                intenso, daño estético, funcional o riesgo de complicaciones.
              </p>
              <p className="text-gray-700">
                Este servicio está especialmente dirigido a:
              </p>
              <ul className="mt-4 space-y-3">
                {[
                  "Usuarios de prótesis dentales rotas o desajustadas.",
                  "Emergencias estéticas antes de un evento importante."
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-red-500 mt-1 mr-2 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 5l7 7-7 7M5 5l7 7-7 7"
                      />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h3 className="text-xl font-semibold text-blue-700 mb-3">
                ⚠️ Importante
              </h3>
              <p className="text-gray-700 mb-4">
                Algunas emergcias dentales pueden comprometer seriamente tu
                salud si no son atendidas a tiempo.
              </p>
              <p className="text-gray-700 font-medium">
                El tiempo de respuesta es crucial para salvar dientes y evitar
                complicaciones mayores.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cuándo acudir Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            ¿Cuándo acudir a una reparación urgente?
          </h2>

          <div className="bg-white rounded-xl shadow-md p-8">
            <div className="flex items-start bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-6">
              <span className="text-2xl mr-3">👉</span>
              <span className="text-gray-800 font-medium">
                Acude a una consulta urgente si presentas alguno de estos
                problemas:
              </span>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Dolor de muelas intenso o constante",
                "Diente roto o astillado",
                "Infección o absceso dental",
                "Sangrado persistente en encías",
                "Pérdida o daño de una prótesis (acrílica, removible, fija)",
                "Inflamación facial o dificultad para masticar",
                "Diente permanente que se ha caído por accidente",
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <svg
                    className="w-5 h-5 text-red-500 mt-1 mr-2 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-red-50 border-l-4 border-red-500 p-4">
              <p className="text-red-700 font-medium">
                ⚠️ El tiempo es crucial. Cuanto antes recibas atención, mayores
                serán las posibilidades de conservar tus dientes y evitar
                complicaciones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Servicios de reparaciones urgentes que ofrecemos
          </h2>
          <p className="text-gray-700 mb-12 text-center">
            En Zhoedent estamos preparados para brindarte soluciones
            inmediatas y seguras:
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-gray-200 rounded-lg p-6 hover:border-blue-300 transition duration-300">
              <h3 className="text-xl font-semibold text-blue-600 mb-3">
                ✔️ Reparación de prótesis dentales
              </h3>
              <p className="text-gray-700">
                Reparación o reemplazo de prótesis acrílicas, removibles o
                parciales dañadas o fracturadas. Soluciones en el día para que
                no quedes sin tus dientes.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6 hover:border-blue-300 transition duration-300">
              <h3 className="text-xl font-semibold text-blue-600 mb-3">
              ✔️ Prótesis removibles expresss
              </h3>
              <p className="text-gray-700">
              Fabricación de prótesis parciales removibles en un día, con materiales
              de alta calidad que garantizan comodidad y una estética natural.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Proceso Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            ¿Cómo trabajamos ante una urgencia dental?
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {[
                "Evaluación rápida del caso: analizamos la situación en cuanto llegas.",
                
                "Tratamiento de emergencia: aplicamos la solución más segura y eficaz según el caso.",
                "Seguimiento posterior: en algunos casos, programamos una segunda cita para completar el tratamiento definitivo.",
              ].map((step, index) => (
                <div
                  key={index}
                  className="flex items-start bg-white p-6 rounded-lg shadow-sm"
                >
                  <div className="bg-red-600 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-gray-800">{step}</p>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h3 className="text-xl font-semibold text-blue-700 mb-4">
                Nuestro compromiso con las urgencias
              </h3>
              <ul className="space-y-3">
                {[
                  "Atendemos sin cita previa en casos de verdadera emergencia",
                  "Equipo disponible para evaluar tu situación rápidamente",
                  "Siempre buscamos la opción más conservadora posible",
                  "Materiales de primera calidad incluso en tratamientos de urgencia",
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

      {/* Por qué elegirnos Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            ¿Por qué elegirnos para tu emergencia dental?
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8">
              <ul className="space-y-4">
                {[
                  "✅ Brindamos atención inmediata sin largas esperas",
                  "✅ Somos especialistas y estamos altamente capacitados",
                  "✅ Utilizamos materiales de alta calidad para garantizar resultados duraderos",
                  "✅ Atendemos urgencias los fines de semana y feriados",
                  "✅ Ubicación céntrica y acceso fácil para emergencias",
                  "✅ Equipamiento de última generación",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0"
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
                    <span className="text-gray-800">
                      {item.replace("✅", "").trim()}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
              <h3 className="text-xl font-semibold text-red-700 mb-4">
                Información de contacto para emergencias
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800">📍 Dirección:</h4>
                  <p className="text-gray-700">Estamos a 3 cuadras de la estacion de Moron</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">
                    📞 Teléfono de urgencias:
                  </h4>
                  <p className="text-gray-700">11-5425 8792</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">
                    📅 Horario extendido:
                  </h4>
                  <p className="text-gray-700">
                    Atención sin cita previa (sujeta a disponibilidad)
                  </p>
                </div>
                <div className="mt-4">
               <a
                  href="https://maps.app.goo.gl/iiZSa3t6xsddK6DL8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-600 text-white font-semibold py-2 px-6 rounded-full hover:bg-red-700 transition duration-300 inline-block text-center"
                >
                  Ver mapa y direcciones
                </a>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consejos Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Consejos ante una urgencia 
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <ul className="space-y-4">
                {[
                  "Si se te cae un diente, colócalo en leche o suero fisiológico y ven de inmediato.",
                  "Si tienes una prótesis rota, no intentes pegarla con pegamento casero.",
                  "Si hay sangrado o hinchazón, aplica compresas frías en la zona afectada.",
                  "En caso de trauma facial, evita tocar la zona lesionada y acude inmediatamente."
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                      {index + 1}
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h3 className="text-xl font-semibold text-blue-700 mb-4">
                Kit básico para emergencias dentales
              </h3>
              <p className="text-gray-700 mb-4">
                Te recomendamos tener en casa estos elementos para manejar mejor
                una emergencia dental:
              </p>
              <ul className="space-y-2">
                {[
                  "Analgésicos",
                  "Gasas estériles",
                  "Recipiente pequeño con tapa",
                  "Número de emergencia Zhoedent",
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

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Preguntas frecuentes (FAQ)
          </h2>

          <div className="space-y-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-3">
                ¿Atienden sin cita previa?
              </h3>
              <p className="text-gray-700">
                Sí. Damos prioridad a los casos urgentes. Aconsejamos llamar
                previamente para asegurarte disponibilidad inmediata y reducir
                tiempos de espera.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-3">
                ¿Qué debo hacer si se me rompe una prótesis?
              </h3>
              <p className="text-gray-700">
                Guarda todas las piezas y acude lo antes posible. En la mayoría
                de los casos, podemos repararla en el día. No intentes repararla
                tú mismo con adhesivos caseros.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-red-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            No te sientas intimidado innecesariamente
          </h2>
          <p className="text-xl mb-8">
            En <strong>Zhoedent</strong> estamos comprometidos en tu bienestar dental.
            Sabemos lo importante que es atenderte cuando más lo necesitas. No
            ignores los signos de una urgencia dental. Actuar a tiempo puede
            marcar la diferencia.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
              href="tel:+54 1154258792"
              className="bg-white text-red-600 font-semibold py-3 px-8 rounded-full hover:bg-red-50 transition duration-300 transform hover:scale-105 text-center"
            >
              📞 Llámanos ahora
            </a>
            <div className="relative group inline-block">
              <button className="bg-red-700 text-white font-semibold py-3 px-8 rounded-full hover:bg-red-800 focus:outline-none transition duration-300">
              📍 Visítanos en emergencia
              </button>
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-64 bg-white text-red-700 text-sm font-medium px-4 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300 z-10">
                Estamos a 3 cuadras de la estación de Morón
                <div className="absolute bottom-[-6px] left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white rotate-45"></div>
              </div>
            </div>
           
          </div>
          <p className="mt-6 text-red-100">
            Horario extendido para emergencias: 18:00 a 20:30hs
          </p>
        </div>
      </section>
    </div>
  );
};

export default ReparacionesUrgentes;
