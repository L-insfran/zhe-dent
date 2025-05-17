const ADVANTAGES = [
  {icon: "💰", text: "Costo accesible: Son más económicas que otras opciones como prótesis fijas o implantes dentales."},
  {icon: "😁", text: "Mejora inmediata de la estética facial y la sonrisa."},
  {icon: "🍽️", text: "Recuperación de la función masticatoria, facilitando la alimentación."},
  {icon: "🛠️", text: "Fácil reparación y ajuste en caso de cambios en la boca."},
  {icon: "🦷", text: "Compatibilidad con futuras prótesis definitivas o implantes."},
  {icon: "⏱️", text: "Tiempo de fabricación más rápido que otras alternativas."}
];

const AdvantagesSection = () => (
  <section className="py-16 px-4 bg-white">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Ventajas de las prótesis acrílicas</h2>
      <p className="text-gray-700 mb-8 text-center">
        Las prótesis acrílicas ofrecen múltiples beneficios para quienes buscan una solución efectiva y económica ante la pérdida dental:
      </p>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ADVANTAGES.map((item, index) => (
          <AdvantageCard key={index} icon={item.icon} text={item.text} />
        ))}
      </div>
    </div>
  </section>
);

const AdvantageCard = ({ icon, text }) => (
  <div className="flex items-start bg-blue-50 p-4 rounded-lg">
    <span className="text-2xl mr-3">{icon}</span>
    <span className="text-gray-800">{text}</span>
  </div>
);

export default AdvantagesSection;