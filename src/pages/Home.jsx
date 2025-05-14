
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
      <main className="pt-24">
        <section className="bg-gradient-to-r from-blue-50 to-cyan-50 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Mecánica Dental de <span className="text-blue-600">Precisión</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Fabricación y reparación de protesis dentales con tecnología de última generación
            </p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Nuestros Servicios</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
