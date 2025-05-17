const ContactReasons = () => (
  <section className="py-16 px-4 bg-gray-50">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">🤝 ¿Por qué contactarnos?</h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          "🔹 Atención inmediata ante reparaciones urgentes de prótesis",
          "🔹 Asesoramiento profesional en placas de descarga",
          "🔹 Seguimiento personalizado de casos clínicos",
          "🔹 Soluciones a medida para cada necesidad dental"
        ].map((item, index) => (
          <div key={index} className="flex items-start bg-white p-4 rounded-lg shadow-sm">
            <span className="text-xl mr-3">{item.split(' ')[0]}</span>
            <span className="text-gray-800">{item.split(' ').slice(1).join(' ')}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ContactReasons;