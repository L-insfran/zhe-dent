const ContactInfo = () => (
  <div className="space-y-6">
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">📍 Nuestra ubicación</h2>
      <p className="text-gray-700 font-medium mb-2">Zhoedent – Técnico dental</p>
      <p className="text-gray-700 mb-4">📌 Estamos a 3 cuadras de la estacion Morón</p>
      
      <div className="bg-gray-100 p-4 rounded-lg">
        <h3 className="font-semibold text-gray-800 mb-2">🕒 Horario de atención:</h3>
        <ul className="text-gray-700 space-y-1">
          <li>Lunes a Viernes – 9:00 a 18:00</li>
          <li>Sábados – 9:00 a 13:00</li>
          <li>Domingos y feriados: Emergencias (consultar disponibilidad)</li>
        </ul>
      </div>
    </div>
    
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">📞 Líneas de contacto directo</h2>
      <ul className="space-y-3 text-gray-700">
        <li className="flex items-start">
          <span className="mr-2">📲</span>
          <span>WhatsApp / Teléfono: <span className="font-medium">+54 11-5425-8792</span></span>
        </li>
        <li className="flex items-start">
          <span className="mr-2">📧</span>
          <span>Email: <span className="font-medium">zhoezhoe40@gmail.com</span></span>
        </li>
      </ul>
    </div>
  </div>
);

export default ContactInfo;