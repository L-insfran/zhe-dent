const IntroSection = () => (
  <section className="py-16 px-4 max-w-4xl mx-auto">
    <div className="bg-white rounded-xl shadow-lg p-8">
      <p className="text-lg text-gray-700 mb-6">
        Las prótesis acrílicas son una de las opciones más comunes, eficaces y económicas para reemplazar dientes perdidos. 
        En Zhoedent, te ofrecemos prótesis dentales acrílicas personalizadas, diseñadas para adaptarse a tu boca de forma 
        cómoda y natural, devolviéndote la funcionalidad masticatoria y la estética de tu sonrisa.
      </p>
      <img 
        src="https://www.expadent.com/wp-content/uploads/2023/10/Acrilica-02.jpg" 
        alt="Prótesis acrílicas mostrando diseño natural" 
        className="w-full rounded-lg mb-6"
        loading="lazy"
      />
    </div>
  </section>
);

export default IntroSection;