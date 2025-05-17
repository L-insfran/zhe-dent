const WhatIsSection = () => (
  <section className="py-16 px-4 bg-white">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">¿Qué son las prótesis acrílicas?</h2>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <p className="text-gray-700 mb-4">
            Las prótesis acrílicas son dispositivos removibles fabricados en resina acrílica que reemplazan uno o varios 
            dientes ausentes. Este tipo de prótesis puede ser total (cuando reemplaza todos los dientes de una arcada) o 
            parcial (cuando sustituye algunos dientes en boca).
          </p>
          <p className="text-gray-700">
            Gracias a los avances en materiales y tecnología, las prótesis acrílicas actuales ofrecen una apariencia natural, 
            mayor confort y una excelente relación calidad-precio.
          </p>
        </div>
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
          <h3 className="text-xl font-semibold text-blue-700 mb-3">¿Sabías que?</h3>
          <p className="text-gray-700">
            Las prótesis modernas imitan perfectamente el color y translucidez de los dientes naturales, logrando resultados 
            estéticos sorprendentes.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default WhatIsSection;