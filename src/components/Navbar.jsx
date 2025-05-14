import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <>
      <nav className="fixed w-full bg-white shadow-lg z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-blue-600">ZHOEDENT</Link>
          <div className="space-x-6">
            <Link to="/servicios" className="text-gray-700 hover:text-blue-600">Servicios</Link>
            <Link to="/contacto" className="text-gray-700 hover:text-blue-600">Contacto</Link>
            <Link to="/sobrenosotros" className="text-gray-700 hover:text-blue-600">Nosotros</Link>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
