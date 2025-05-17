const TYPES = [
  {
    title: "Prótesis acrílica total",
    description: "Se utiliza cuando el paciente ha perdido todos los dientes de una arcada (superior, inferior o ambas). Reposa directamente sobre la encía y el hueso maxilar, devolviendo la función masticatoria y la estética facial."
  },
  {
    title: "Prótesis acrílica parcial",
    description: "Indicada cuando el paciente conserva algunos dientes naturales. Esta prótesis se sujeta mediante ganchos metálicos o sistemas de retención que se apoyan en los dientes remanentes."
  }
];

const TypesSection = () => (
  <section className="py-16 px-4 bg-gray-50">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Tipos de prótesis acrílicas</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        {TYPES.map((type, index) => (
          <TypeCard key={index} title={type.title} description={type.description} />
        ))}
      </div>
    </div>
  </section>
);

const TypeCard = ({ title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h3 className="text-2xl font-semibold text-blue-600 mb-4 flex items-center">
      <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
      {title}
    </h3>
    <p className="text-gray-700">{description}</p>
  </div>
);

export default TypesSection;