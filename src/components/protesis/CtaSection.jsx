const CtaSection = ({ onContactClick }) => (
  <section className="py-16 px-4 bg-blue-700 text-white">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6">Recupera tu calidad de vida con una sonrisa completa</h2>
      <p className="text-xl mb-8">
        La pérdida de dientes no solo afecta la estética, sino también la alimentación, el habla y la autoestima. 
        Con nuestras prótesis acrílicas personalizadas, puedes volver a sonreír con confianza y disfrutar de una vida plena.
      </p>
      <button 
        className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-full hover:bg-blue-50 transition duration-300 transform hover:scale-105"
        onClick={onContactClick}
      >
        Reserva tu turno hoy mismo
      </button>
    </div>
  </section>
);

export default CtaSection;