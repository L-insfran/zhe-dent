import { Link } from 'react-router-dom';
 const Breadcrumbs = () => (
    <nav aria-label="Ruta de navegación" className="text-sm py-4 px-4 text-gray-600">
    <ol className="flex space-x-2">
      <li>
        <Link to="/" className="hover:text-red-600  text-white">servicios</Link>
      </li>
      <li>/</li>
      <li aria-current="page" className='text-black'>servicios/protesis-acrilicas</li>
    </ol>
    </nav>
  );

const HeroSection = ({ title, subtitle, onContactClick }) => (
  <section className="py-20 px-4 bg-blue-600 text-white">
      <Breadcrumbs />
    <div className="max-w-4xl mx-auto text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
      <p className="text-xl md:text-2xl mb-8">{subtitle}</p>
      <button
        className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-full hover:bg-blue-50 transition duration-300 transform hover:scale-105"
        onClick={onContactClick}
      >
        ¿Cuál es tu consulta?
      </button>
    </div>
  </section>
);

export default HeroSection;