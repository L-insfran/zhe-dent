const PROCESS_STEPS = [
  "Evaluación personalizada.",
  "Toma de impresiones dentales precisas.",
  "Diseño y fabricación especializada.",
  "Pruebas de adaptación y ajuste.",
  "Entrega y orientación sobre el uso y mantenimiento.",
  "Controles periódicos para asegurar el buen estado."
];

const ProcessSection = () => (
  <section className="py-16 px-4 bg-gray-50">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">¿Cómo es el proceso para obtener tu prótesis acrílica?</h2>
      
      <div className="space-y-6">
        {PROCESS_STEPS.map((step, index) => (
          <ProcessStep key={index} number={index + 1} text={step} />
        ))}
      </div>
    </div>
  </section>
);

const ProcessStep = ({ number, text }) => (
  <div className="flex items-start bg-white p-6 rounded-lg shadow-sm">
    <div className="bg-blue-600 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
      {number}
    </div>
    <p className="text-gray-800 text-lg">{text}</p>
  </div>
);

export default ProcessSection;