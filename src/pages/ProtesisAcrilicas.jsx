import Seo from '../components/Seo';

const ProtesisAcrilicas = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Seo 
        title="Prótesis Acrílicas | Zhoedent - Soluciones Dentales"
        description="Recupera tu sonrisa con prótesis acrílicas personalizadas. Opciones económicas, funcionales y estéticas para reemplazar dientes perdidos."
        keywords="prótesis acrílicas, dentadura postiza, prótesis dental removible, dientes acrílicos, solución pérdida dental"
      />

      {/* Hero Section */}
      <section className="py-20 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Prótesis Acrílicas</h1>
          <p className="text-xl md:text-2xl mb-8">Recupera tu sonrisa con soluciones accesibles, funcionales y estéticas</p>
          <button
            className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-full hover:bg-blue-50 transition duration-300 transform hover:scale-105"
            onClick={() => {
              const mensaje = encodeURIComponent("Hola zhoedent tengo una duda sobre las prótesis acrílicas");
              const numero = "541154258792";
              const url = `https://wa.me/${numero}?text=${mensaje}`;
              window.open(url, "_blank");
            }}
          >
            ¿cuál es tu consulta?
          </button>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <p className="text-lg text-gray-700 mb-6">
            Las prótesis acrílicas son una de las opciones más comunes, eficaces y económicas para reemplazar dientes perdidos. En Zhoedent, te ofrecemos prótesis dentales acrílicas personalizadas, diseñadas para adaptarse a tu boca de forma cómoda y natural, devolviéndote la funcionalidad masticatoria y la estética de tu sonrisa.
          </p>
          <img src="https://www.expadent.com/wp-content/uploads/2023/10/Acrilica-02.jpg" alt="Prótesis acrílicas mostrando diseño natural" className="w-full rounded-lg mb-6" />
        </div>
      </section>

      {/* Qué son Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">¿Qué son las prótesis acrílicas?</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-700 mb-4">
                Las prótesis acrílicas son dispositivos removibles fabricados en resina acrílica que reemplazan uno o varios dientes ausentes. Este tipo de prótesis puede ser total (cuando reemplaza todos los dientes de una arcada) o parcial (cuando sustituye algunos dientes en boca).
              </p>
              <p className="text-gray-700">
                Gracias a los avances en materiales y tecnología, las prótesis acrílicas actuales ofrecen una apariencia natural, mayor confort y una excelente relación calidad-precio.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h3 className="text-xl font-semibold text-blue-700 mb-3">¿Sabías que?</h3>
              <p className="text-gray-700">
                Las prótesis modernas imitan perfectamente el color y translucidez de los dientes naturales, logrando resultados estéticos sorprendentes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tipos Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Tipos de prótesis acrílicas</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-blue-600 mb-4 flex items-center">
                <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Prótesis acrílica total
              </h3>
              <p className="text-gray-700">
                Se utiliza cuando el paciente ha perdido todos los dientes de una arcada (superior, inferior o ambas). Reposa directamente sobre la encía y el hueso maxilar, devolviendo la función masticatoria y la estética facial.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-blue-600 mb-4 flex items-center">
                <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Prótesis acrílica parcial
              </h3>
              <p className="text-gray-700">
                Indicada cuando el paciente conserva algunos dientes naturales. Esta prótesis se sujeta mediante ganchos metálicos o sistemas de retención que se apoyan en los dientes remanentes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ventajas Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Ventajas de las prótesis acrílicas</h2>
          <p className="text-gray-700 mb-8 text-center">
            Las prótesis acrílicas ofrecen múltiples beneficios para quienes buscan una solución efectiva y económica ante la pérdida dental:
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {icon: "💰", text: "Costo accesible: Son más económicas que otras opciones como prótesis fijas o implantes dentales."},
              {icon: "😁", text: "Mejora inmediata de la estética facial y la sonrisa."},
              {icon: "🍽️", text: "Recuperación de la función masticatoria, facilitando la alimentación."},
              {icon: "🛠️", text: "Fácil reparación y ajuste en caso de cambios en la boca."},
              {icon: "🦷", text: "Compatibilidad con futuras prótesis definitivas o implantes."},
              {icon: "⏱️", text: "Tiempo de fabricación más rápido que otras alternativas."}
            ].map((item, index) => (
              <div key={index} className="flex items-start bg-blue-50 p-4 rounded-lg">
                <span className="text-2xl mr-3">{item.icon}</span>
                <span className="text-gray-800">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Indicaciones Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">¿Para quién están indicadas las prótesis acrílicas?</h2>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-gray-700 mb-6">
              Las prótesis dentales acrílicas están recomendadas para:
            </p>
            <ul className="grid md:grid-cols-2 gap-4">
              {[
                "Pacientes que han perdido uno o más dientes.",
                "Personas mayores con pérdida total dentaria.",
                "Pacientes que requieren una solución temporal mientras se preparan para un tratamiento definitivo (como implantes).",
                "Personas que buscan una alternativa funcional a bajo costo.",
                "Pacientes con limitaciones médicas para otros tipos de prótesis.",
                "Como prótesis provisionales durante tratamientos odontológicos complejos."
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-5 h-5 text-blue-500 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Cuidados Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Cuidados y mantenimiento de las prótesis acrílicas</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-700 mb-6">
                Para garantizar la duración y el buen funcionamiento de tu prótesis acrílica, es importante seguir ciertas recomendaciones:
              </p>
              
              <div className="space-y-4">
                {[
                  {icon: "🧼", text: "Lavar la prótesis diariamente con cepillo suave y jabón neutro (no pasta dental)."},
                  {icon: "💧", text: "Retirar la prótesis por la noche para permitir el descanso de las encías."},
                  {icon: "👨‍⚕️", text: "Acudir a controles periódicos para ajustes y revisiones."},
                  {icon: "❌", text: "Evitar exponerla al calor excesivo o caídas que puedan deformarla."},
                  {icon: "💦", text: "Mantenerla en agua o solución limpiadora cuando no esté en uso."},
                  {icon: "🚭", text: "Evitar fumar, ya que puede manchar la resina acrílica."}
                ].map((item, index) => (
                  <div key={index} className="flex items-start bg-gray-50 p-4 rounded-lg">
                    <span className="text-2xl mr-3">{item.icon}</span>
                    <span className="text-gray-800">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h3 className="text-xl font-semibold text-blue-700 mb-4">Posibles desventajas (y cómo las solucionamos)</h3>
              <p className="text-gray-700 mb-4">
                Aunque las prótesis acrílicas son muy útiles, pueden presentar ciertas limitaciones:
              </p>
              <ul className="space-y-3 mb-4">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-red-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>Menor estabilidad en comparación con prótesis sobre implantes.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-red-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>Riesgo de fractura si no se manipulan adecuadamente.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-red-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>Posible irritación en las encías si no se ajustan correctamente.</span>
                </li>
              </ul>
              <p className="text-gray-700 font-medium">
                👉 En Zhoedent, diseñamos cada prótesis de forma personalizada y realizamos pruebas y ajustes progresivos para garantizar la máxima comodidad y adaptación funcional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Proceso Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">¿Cómo es el proceso para obtener tu prótesis acrílica?</h2>
          
          <div className="space-y-6">
            {[
              "Evaluación personalizada.",
              "Toma de impresiones dentales precisas.",
              "Diseño y fabricación especializada.",
              "Pruebas de adaptación y ajuste.",
              "Entrega y orientación sobre el uso y mantenimiento.",
              "Controles periódicos para asegurar el buen estado."
            ].map((step, index) => (
              <div key={index} className="flex items-start bg-white p-6 rounded-lg shadow-sm">
                <div className="bg-blue-600 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                  {index + 1}
                </div>
                <p className="text-gray-800 text-lg">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Preguntas frecuentes sobre prótesis acrílicas</h2>
          
          <div className="space-y-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-3">¿Duelen las prótesis acrílicas?</h3>
              <p className="text-gray-700">
                No. Puede haber un periodo corto de adaptación, pero no deben causar dolor. Si ocurre, es necesario ajustar la prótesis.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-3">¿Cuánto tiempo duran?</h3>
              <p className="text-gray-700">
                Con buen cuidado y controles periódicos, pueden durar entre 5 y 10 años, dependiendo del uso y condiciones bucales del paciente.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-3">¿Puedo comer normalmente?</h3>
              <p className="text-gray-700">
                Sí. Al principio, se recomienda una dieta blanda mientras te adaptas. Luego, podrás comer con normalidad, aunque es aconsejable evitar alimentos extremadamente duros o pegajosos.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-3">¿Cómo afecta el habla?</h3>
              <p className="text-gray-700">
                Puede haber un breve periodo de adaptación (1-2 semanas) donde notes cambios en tu pronunciación. Con práctica y ajustes si son necesarios, recuperarás tu habla normal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-blue-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Recupera tu calidad de vida con una sonrisa completa</h2>
          <p className="text-xl mb-8">
            La pérdida de dientes no solo afecta la estética, sino también la alimentación, el habla y la autoestima. Con nuestras prótesis acrílicas personalizadas, puedes volver a sonreír con confianza y disfrutar de una vida plena.
          </p>
          <button className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-full hover:bg-blue-50 transition duration-300 transform hover:scale-105"
            onClick={() => {
              const mensaje = encodeURIComponent("Hola zhoedent me gustaria resevar un turno por el servicio de protesis acrilica");
              const numero = "541154258792";
              const url = `https://wa.me/${numero}?text=${mensaje}`;
              window.open(url, "_blank");
            }}>
            reserva tu turno hoy mismo
          </button>
        </div>
      </section>
    </div>
  );
};

export default ProtesisAcrilicas;