const MapSection = ({ onTrackClick }) => (
  <section className="py-16 px-4 bg-white">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Encuéntranos fácilmente</h2>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3097.465312650228!2d-58.61937711403133!3d-34.64857023140528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc761ac003d3d%3A0x11485a3469d8ab37!2zTW9yw7Nu!5e0!3m2!1sen!2sar!4v1747277048552!5m2!1sen!2sar"
          width="100%"
          height="400"
          style={{border:0}}
          allowFullScreen=""
          loading="lazy"
          title="Ubicación de Zhoedent en Morón"
          aria-label="Mapa de ubicación de Zhoedent"
          referrerPolicy="Ubicación de Zhoedent en Google Maps"
        ></iframe>
      </div>

      <div className="mt-8 text-center">
        <a
          href="https://maps.app.goo.gl/iiZSa3t6xsddK6DL8"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => onTrackClick('Mapa - Cómo llegar')}
        >
          <button className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-full hover:bg-blue-700 transition duration-300 inline-flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Cómo llegar
          </button>
        </a>
      </div>
    </div>
  </section>
);

export default MapSection;