const INDICATIONS = [
  "Pacientes que han perdido uno o más dientes.",
  "Personas mayores con pérdida total dentaria.",
  "Pacientes que requieren una solución temporal mientras se preparan para un tratamiento definitivo (como implantes).",
  "Personas que buscan una alternativa funcional a bajo costo.",
  "Pacientes con limitaciones médicas para otros tipos de prótesis.",
  "Como prótesis provisionales durante tratamientos odontológicos complejos."
];

const IndicationsSection = () => (
  <section className="py-16 px-4 bg-gray-50">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">¿Para quién están indicadas las prótesis acrílicas?</h2>
      
      <div className="bg-white rounded-lg shadow-md p-8">
        <p className="text-gray-700 mb-6">
          Las prótesis dentales acrílicas están recomendadas para:
        </p>
        <ul className="grid md:grid-cols-2 gap-4">
          {INDICATIONS.map((item, index) => (
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
);

export default IndicationsSection;