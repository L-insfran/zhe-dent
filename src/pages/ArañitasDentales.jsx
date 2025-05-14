
import Seo from '../components/Seo';

const ArañitasDentales = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Seo 
        title="Tratamiento de Arañitas Dentales | Zhoedent"
        description="Soluciones profesionales para microfisuras dentales. Tratamientos estéticos y preventivos para arañitas en los dientes. Diagnóstico preciso y personalizado."
        keywords="arañitas dentales, microfisuras dientes, grietas esmalte dental, tratamiento fisuras dientes, bruxismo, carillas dentales, férula de descarga"
      />

      {/* Hero Section */}
      <section className="py-20 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Tratamiento de Arañitas Dentales</h1>
          <p className="text-xl md:text-2xl mb-8">Soluciones estéticas y preventivas para microfisuras en los dientes</p>
          <button className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-full hover:bg-blue-50 transition duration-300 transform hover:scale-105">
            Reserva tu consulta
          </button>
        </div>
      </section>

      {/* Resto del contenido (igual que antes) */}
      {/* Intro Section */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <p className="text-lg text-gray-700 mb-6">
            ¿Has notado pequeñas líneas o grietas en tus dientes que parecen telarañas? Estas marcas, conocidas como <strong>arañitas dentales</strong>, pueden afectar la apariencia de tu sonrisa y ser una señal de desgaste en el esmalte. En nuestra clínica dental, te ofrecemos un diagnóstico profesional y tratamientos efectivos para mantener tu salud bucal en óptimas condiciones.
          </p>
          <img src="https://http2.mlstatic.com/D_959761-MLA69871852366_062023-C.jpg" alt="Arañitas dentales en esmalte" className="w-full rounded-lg mb-6" />
        </div>
      </section>

      {/* Qué son Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">¿Qué son las arañitas dentales?</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-700 mb-4">
                Las arañitas dentales son <strong>microfisuras superficiales en el esmalte dental</strong>, también llamadas líneas de estrés. Suelen manifestarse como finas grietas visibles, especialmente al reflejarse la luz.
              </p>
              <p className="text-gray-700">
                Aunque no siempre causan dolor, sí pueden afectar la estética de tu sonrisa y, en algunos casos, revelar problemas como el <strong>bruxismo</strong> o desgaste excesivo.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h3 className="text-xl font-semibold text-blue-700 mb-3">¿Debo preocuparme?</h3>
              <p className="text-gray-700">
                Si bien muchas microfisuras son solo estéticas, algunas pueden progresar. Te recomendamos una evaluación profesional para determinar si necesitas tratamiento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Causas Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Causas frecuentes de las arañitas dentales</h2>
          <p className="text-gray-700 mb-8 text-center">
            Estas pequeñas fracturas pueden originarse por distintos factores:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300">
              <div className="flex items-start mb-3">
                <div className="bg-blue-100 p-2 rounded-full mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Bruxismo</h3>
              </div>
              <p className="text-gray-700">Rechinar o apretar los dientes, especialmente por la noche, genera presión que puede causar microfisuras.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300">
              <div className="flex items-start mb-3">
                <div className="bg-blue-100 p-2 rounded-full mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Cambios de temperatura</h3>
              </div>
              <p className="text-gray-700">Alternar alimentos muy fríos con muy calientes puede provocar estrés térmico en el esmalte.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300">
              <div className="flex items-start mb-3">
                <div className="bg-blue-100 p-2 rounded-full mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Traumatismos</h3>
              </div>
              <p className="text-gray-700">Golpes o accidentes pueden generar fisuras incluso si no son visibles inmediatamente.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300">
              <div className="flex items-start mb-3">
                <div className="bg-blue-100 p-2 rounded-full mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Malos hábitos</h3>
              </div>
              <p className="text-gray-700">Morder objetos duros como hielo, lápices o tapas de botellas daña progresivamente el esmalte.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Importancia Section */}
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">¿Por qué es importante tratar las arañitas dentales?</h2>
          
          <div className="bg-blue-700 rounded-xl p-8 mb-8">
            <p className="mb-6">
              Aunque suelen ser superficiales, ignorar las arañitas dentales puede derivar en problemas mayores. Las microgrietas pueden permitir la acumulación de bacterias, aumentando el riesgo de caries y sensibilidad dental.
            </p>
            <p>
              Además, si están relacionadas con el bruxismo, el daño podría avanzar hacia fracturas más graves o desgaste excesivo del diente.
            </p>
          </div>
          
          <p className="text-center text-xl font-semibold">
            Por eso, es fundamental un diagnóstico profesional temprano para evaluar la severidad de las fisuras y aplicar el tratamiento adecuado.
          </p>
        </div>
      </section>

      {/* Tratamientos Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Tratamientos disponibles en nuestra clínica</h2>
          <p className="text-gray-700 mb-12 text-center">
            En nuestra clínica odontológica, contamos con diversas soluciones personalizadas para tratar las arañitas dentales:
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-gray-200 rounded-lg p-6 hover:border-blue-300 transition duration-300">
              <h3 className="text-xl font-semibold text-blue-600 mb-3">Férulas de descarga</h3>
              <p className="text-gray-700 mb-4">Ideales para pacientes con bruxismo. Protegen los dientes durante la noche y evitan la progresión de las fisuras.</p>
              <div className="bg-blue-50 text-blue-800 text-sm font-medium px-3 py-1 rounded-full inline-block">Tratamiento preventivo</div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6 hover:border-blue-300 transition duration-300">
              <h3 className="text-xl font-semibold text-blue-600 mb-3">Pulido estético</h3>
              <p className="text-gray-700 mb-4">Un procedimiento mínimamente invasivo que mejora la apariencia del esmalte eliminando imperfecciones superficiales.</p>
              <div className="bg-blue-50 text-blue-800 text-sm font-medium px-3 py-1 rounded-full inline-block">Solución estética</div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6 hover:border-blue-300 transition duration-300">
              <h3 className="text-xl font-semibold text-blue-600 mb-3">Carillas dentales</h3>
              <p className="text-gray-700 mb-4">Las carillas de porcelana o resina compuesta son una excelente opción para cubrir grietas visibles y mejorar la estética dental de forma duradera.</p>
              <div className="bg-blue-50 text-blue-800 text-sm font-medium px-3 py-1 rounded-full inline-block">Rehabilitación estética</div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6 hover:border-blue-300 transition duration-300">
              <h3 className="text-xl font-semibold text-blue-600 mb-3">Control preventivo</h3>
              <p className="text-gray-700 mb-4">Te ayudamos a identificar los hábitos que pueden estar causando el problema y cómo evitarlos.</p>
              <div className="bg-blue-50 text-blue-800 text-sm font-medium px-3 py-1 rounded-full inline-block">Educación al paciente</div>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Beneficios de atender las arañitas dentales a tiempo</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Prevención de daños mayores",
              "Reducción de sensibilidad dental",
              "Mejora estética visible",
              "Conservación de la salud del esmalte",
              "Diagnóstico temprano de problemas como el bruxismo",
              "Mayor durabilidad de tus dientes naturales"
            ].map((benefit, index) => (
              <div key={index} className="flex items-start bg-white p-4 rounded-lg">
                <svg className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-800">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-blue-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">¿Cómo saber si necesito tratamiento?</h2>
          <p className="text-xl mb-8">
            Si notas líneas finas en tus dientes, tienes sensibilidad al frío o calor, o rechinas los dientes mientras duermes, agenda una consulta odontológica. Evaluaremos tu caso con tecnología de diagnóstico avanzada y te recomendaremos el tratamiento más adecuado para proteger y embellecer tu sonrisa.
          </p>
          <button className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-full hover:bg-blue-50 transition duration-300 transform hover:scale-105">
            Agenda tu consulta hoy mismo
          </button>
        </div>
      </section>
    </div>
  );
};

export default ArañitasDentales;