import { BiLogoFacebookCircle, BiLogoInstagram } from "react-icons/bi"

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-900 text-white py-12 mt-auto">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-xl font-bold mb-4">ZHOEDENT</h4>
            <p className="text-gray-400">Expertos en mecánica dental desde 2010</p>
          </div>
          <div>
            <h5 className="text-lg font-semibold mb-4">Contacto</h5>
            <p className="text-gray-400">Tel: +54 11-5425 8792</p>
            <p className="text-gray-400">Email: contacto@zhoedent.com</p>
          </div>
          <div>
            <h5 className="text-lg font-semibold mb-4">Redes Sociales</h5>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=100084036373205" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
                aria-label="Facebook">
                <span className="sr-only">Facebook</span>
                <BiLogoFacebookCircle className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/zhoedent/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white" 
                aria-label="Instagram">
                <span className="sr-only">Instagram</span>
                <BiLogoInstagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Sección de copyright y desarrollador */}
        <div className="container mx-auto px-4 mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} ZHOEDENT. Todos los derechos reservados.
            </p>
            <p className="text-gray-500 text-sm">
              Desarrollado por <span className="text-gray-400">Leandro Insfrán</span> - Tel:  11 3308 1248
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer