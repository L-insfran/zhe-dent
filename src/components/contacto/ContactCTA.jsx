const ContactCTA = ({ onTrackClick }) => (
  <section className="py-16 px-4 bg-blue-600 text-white">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6">📲 ¡Estamos a un clic de distancia!</h2>
      <p className="text-xl mb-8">
        En Zhoedent, cada sonrisa cuenta. No dudes en contactarnos si necesitás una solución dental confiable, rápida y profesional. Nuestro compromiso es estar cerca de vos y ayudarte en cada paso del tratamiento.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <a 
          className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-full hover:bg-blue-50 transition duration-300 transform hover:scale-105"
          href="tel:+5491154258792"
          onClick={() => onTrackClick('Llamada telefónica')}
        >
          Llamar ahora
        </a>
        <button 
          className="bg-blue-700 text-white font-semibold py-3 px-8 rounded-full hover:bg-blue-800 transition duration-300"
          onClick={() => {
            onTrackClick('WhatsApp');
            window.open('https://wa.me/541154258792', '_blank');
          }}
        >
          Enviar WhatsApp
        </button>
      </div>
    </div>
  </section>
);

export default ContactCTA;