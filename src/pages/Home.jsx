import Seo from '../components/Seo';
import ServiceCard from '../components/ServiceCard';
const Home = () => {
  
// Datos de servicios
const servicesData = [
  {
    title: "Prótesis Acrílicas",
    description: "Elaboración artesanal en acrílico de alta calidad para una perfecta adaptación bucal.",
    icon: "https://st.depositphotos.com/1471531/2250/i/950/depositphotos_22503757-stock-photo-a-set-of-dentures.jpg"
  },
  {
    title: "Arañitas Dentales",
    description: "Diseño preciso de arañitas para ortodoncia con materiales biocompatibles.",
    icon: "https://imgs.search.brave.com/sTuWSgoiRiqlQXvcPjAtj7RAGIe2m0epaec-diNUhaw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vRF9RX05QXzJY/Xzc0ODc0Ni1NTEE2/OTI2ODUzMTg4NV8w/NTIwMjMtVi53ZWJw"
  },
  {
    title: "Placas de Descarga",
    description: "Fabricación personalizada para tratamiento de bruxismo y problemas de ATM.",
    icon: "https://imgs.search.brave.com/Lblfo4Ql-bC-TUCgumhBxpRZIRIfOgT5UOB4vcfGQhc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/b3J0b2RvbmNpYXJp/dmVyby5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMjMvMDYv/ZmVydWxhLWRlLWRl/c2NhcmdhLTEtMTAy/NHg3NjguanBn"
  },
  {
    title: "Reparaciones Urgentes",
    description: "Servicio rápido y eficiente para reparaciones de emergencia.",
    icon: "https://imgs.search.brave.com/EcxfP0DkLvNrP5JbzTU9bGwCl75lhYNPCGgUjNCxLrE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/b2Rvc2RlbnRhbC5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjIvMTAvSU1HLTIw/MjIxMDMxLVdBMDAx/My0zMDB4MjI1Lmpw/Zw"
  }
];

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
              Fabricación y reparación de elementos dentales con tecnología de última generación
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
