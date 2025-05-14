import { BiArrowBack, BiHome } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import image404 from '../assets/404.jpg'; // Asegúrate de tener una imagen 404.jpg en la carpeta assets

const NotFound = () => {
  return (
    <div 
      className="min-h-screen bg-gray-900 text-white flex items-center justify-center"
      style={{
        backgroundImage: "url(" + image404 + ")",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        backgroundBlendMode: 'overlay'
      }}
    >
      <div className="max-w-2xl mx-auto text-center p-8 bg-gray-900 bg-opacity-80 rounded-xl backdrop-blur-sm">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold text-blue-400 mb-4">404</h1>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Página no encontrada</h2>
          <p className="text-xl text-gray-300">
            Lo sentimos, la página que buscas no existe o ha sido movida.
          </p>
        </div>

        <div className="mb-8">
          <p className="text-lg text-gray-400 mb-6">
            Mientras tanto, puedes explorar nuestros servicios dentales profesionales:
          </p>
          <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
            {[
              { text: 'Prótesis', icon: '🦷' },
              { text: 'Reparaciones', icon: '🔧' },
              { text: 'Placas', icon: '😴' },
              { text: 'Ortodoncia', icon: '🦴' }
            ].map((item, index) => (
              <div key={index} className="bg-gray-800 p-3 rounded-lg hover:bg-blue-900 transition">
                <span className="text-2xl block mb-1">{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link 
            to="/" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full transition flex items-center justify-center gap-2"
          >
            <BiHome /> Volver al inicio
          </Link>
          <Link 
            to="/contacto" 
            className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-full transition flex items-center justify-center gap-2"
          >
            <BiArrowBack /> Contactar soporte
          </Link>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-700">
          <p className="text-gray-400">
            Zhoedent &copy; {new Date().getFullYear()} - Mecánica Dental Profesional
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;