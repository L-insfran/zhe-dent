import Seo from '../components/Seo';
import ServiceCard from '../components/ServiceCard';
const Home = ({servicesData}) => {
  
  return (
    <>
      <Seo 
        title="Zhoedent - Mecánica Dental Profesional"
        description="Taller especializado en prótesis dentales, arañitas, placas de descarga y reparaciones urgentes"
        keywords="prótesis dentales, arañitas dentales, placas de descarga"
      />
      <main className="pt-16 md:pt-24"> {/* Reducir padding-top en móvil */}
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-50 to-cyan-50 py-12 md:py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6">
              Mecánica Dental de <span className="text-blue-600">Precisión</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Fabricación y reparación de protesis dentales con tecnología de última generación
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-12 md:py-20 bg-white px-4">
          <div className="container mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">Nuestros Servicios</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {servicesData.map((service, index) => (
                <ServiceCard key={`service-${index}`} service={service} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Home