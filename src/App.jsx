import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Seo from './components/Seo';
import { GraciasProvider } from './context/GraciasContext';
import ArañitasDentales from './pages/ArañitasDentales';
import Contacto from './pages/Contacto';
import Gracias from './pages/Gracias';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import PlacasDescarga from './pages/PlacasDescarga';
import ProtesisAcrilicas from './pages/ProtesisAcrilicas';
import ReparacionesUrgentes from './pages/ReparacionesUrgentes';
import SobreNosotros from './pages/SobreNosotros';
import RutaProtegida from './routes/RutaProtegida';
import data from "./utils/data";

const App = () => (
  <GraciasProvider>
    <Router>
      <Seo 
        title="Zhoedent - Mecánica Dental Profesional"
        description="Taller especializado en prótesis dentales, arañitas, placas de descarga y reparaciones urgentes"
        keywords="prótesis dentales, arañitas dentales, placas de descarga, reparación dental, mecánica dental"
      />
      
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home servicesData={data} />} />
            <Route path="/servicios" element={<Home servicesData={data}/>} />
            <Route path="/servicios/aranitas-dentales" element={<ArañitasDentales />} />
            <Route path="/servicios/protesis-acrilicas" element={<ProtesisAcrilicas />} />
            <Route path="/servicios/placas-de-descarga" element={<PlacasDescarga />} />
            <Route path="/servicios/reparaciones-urgentes" element={<ReparacionesUrgentes />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path='/sobrenosotros' element={<SobreNosotros />} />
            <Route path="/gracias" element={ 
              <RutaProtegida>
                <Gracias />
              </RutaProtegida>
            } />
            <Route path="*" element={<NotFound />} />
    
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  </GraciasProvider>
);

export default App;