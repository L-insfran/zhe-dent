import { useState } from 'react';

const ContactForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    clinica: '',
    asunto: '',
    mensaje: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData, setIsSubmitting);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">📬 Escríbenos o solicita tu cita</h2>
      <p className="text-gray-700 mb-6">
        Utiliza el siguiente formulario para enviarnos un mensaje. Nos pondremos en contacto contigo lo antes posible.
      </p>
      
      <form onSubmit={handleSubmit}>
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value="https://zhoedent.com/gracias" />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_subject" value="Nuevo contacto desde Zhoedent" />
        <input type="hidden" name="_autoresponse" value={`Hola ${formData.nombre},\n\nGracias por contactar a Zhoedent. Hemos recibido tu consulta sobre "${formData.asunto}" y te responderemos dentro de las próximas 24 horas hábiles.\n\nEste es un mensaje automático, no es necesario responder.\n\nAtentamente,\nEquipo Zhoedent`} />
        <input type="hidden" name="_cc" value="copia@zhoedent.com" />

        <div className="space-y-4">
          <FormField
            label="Nombre completo"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
          <FormField
            label="Correo electrónico"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <FormField
            label="Teléfono de contacto"
            type="tel"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            required
          />
          <FormSelect
            label="Asunto"
            name="asunto"
            value={formData.asunto}
            onChange={handleChange}
            options={[
              { value: "", label: "Selecciona un asunto" },
              { value: "Reparación urgente", label: "Reparación urgente" },
              { value: "Consulta general", label: "Consulta general" },
              { value: "Atención a clínicas", label: "Nuestros servicios" },
              { value: "Otros", label: "Otros" }
            ]}
            required
          />
          <FormTextarea
            label="Mensaje"
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            required
          />
        </div>

        <div className="pt-6">
          <button 
            type="submit" 
            disabled={isSubmitting}
            className={`bg-blue-600 text-white font-semibold py-3 px-8 rounded-full w-full ${isSubmitting ? 'opacity-50' : 'hover:bg-blue-700'} transition duration-300`}
          >
            {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
          </button>
        </div>
      </form>
      
      <p className="text-sm text-gray-500 mt-4">
        <span className="text-red-500">*</span> Todos los campos marcados son obligatorios. 
        Al enviar este formulario aceptas nuestra <a href="/politica-privacidad" className="text-blue-600 hover:underline">Política de Privacidad</a>.
      </p>
    </div>
  );
};

// Componentes auxiliares reutilizables
const FormField = ({ label, type = 'text', name, value, onChange, required }) => (
  <div>
    <label htmlFor={name} className="block text-gray-700 font-medium mb-2">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <input
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
    />
  </div>
);

const FormSelect = ({ label, name, value, onChange, options, required }) => (
  <div>
    <label htmlFor={name} className="block text-gray-700 font-medium mb-2">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <select
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);

const FormTextarea = ({ label, name, value, onChange, required }) => (
  <div>
    <label htmlFor={name} className="block text-gray-700 font-medium mb-2">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <textarea
      id={name}
      name={name}
      rows="4"
      value={value}
      onChange={onChange}
      required={required}
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
    ></textarea>
  </div>
);

export default ContactForm;