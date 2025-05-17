const CARE_ITEMS = [
  {icon: "🧼", text: "Lavar la prótesis diariamente con cepillo suave y jabón neutro (no pasta dental)."},
  {icon: "💧", text: "Retirar la prótesis por la noche para permitir el descanso de las encías."},
  {icon: "👨‍⚕️", text: "Acudir a controles periódicos para ajustes y revisiones."},
  {icon: "❌", text: "Evitar exponerla al calor excesivo o caídas que puedan deformarla."},
  {icon: "💦", text: "Mantenerla en agua o solución limpiadora cuando no esté en uso."},
  {icon: "🚭", text: "Evitar fumar, ya que puede manchar la resina acrílica."}
];

const DISADVANTAGES = [
  "Menor estabilidad en comparación con prótesis sobre implantes.",
  "Riesgo de fractura si no se manipulan adecuadamente.",
  "Posible irritación en las encías si no se ajustan correctamente."
];

const CareSection = () => (
  <section className="py-16 px-4 bg-white">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Cuidados y mantenimiento de las prótesis acrílicas</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <p className="text-gray-700 mb-6">
            Para garantizar la duración y el buen funcionamiento de tu prótesis acrílica, es importante seguir ciertas recomendaciones:
          </p>
          
          <div className="space-y-4">
            {CARE_ITEMS.map((item, index) => (
              <CareItem key={index} icon={item.icon} text={item.text} />
            ))}
          </div>
        </div>
        
        <DisadvantagesBox />
      </div>
    </div>
  </section>
);

const CareItem = ({ icon, text }) => (
  <div className="flex items-start bg-gray-50 p-4 rounded-lg">
    <span className="text-2xl mr-3">{icon}</span>
    <span className="text-gray-800">{text}</span>
  </div>
);

const DisadvantagesBox = () => (
  <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
    <h3 className="text-xl font-semibold text-blue-700 mb-4">Posibles desventajas (y cómo las solucionamos)</h3>
    <p className="text-gray-700 mb-4">
      Aunque las prótesis acrílicas son muy útiles, pueden presentar ciertas limitaciones:
    </p>
    <ul className="space-y-3 mb-4">
      {DISADVANTAGES.map((item, index) => (
        <li key={index} className="flex items-start">
          <svg className="w-5 h-5 text-red-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
          <span>{item}</span>
        </li>
      ))}
    </ul>
    <p className="text-gray-700 font-medium">
      👉 En Zhoedent, diseñamos cada prótesis de forma personalizada y realizamos pruebas y ajustes progresivos para garantizar la máxima comodidad y adaptación funcional.
    </p>
  </div>
);

export default CareSection;