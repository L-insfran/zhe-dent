import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Seo from './components/Seo';
import Home from './pages/Home';

const App = () => (
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
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<Home />} />
          {/* Agregar otras rutas */}
        </Routes>
      </main>
      
      <Footer />
    </div>
  </Router>
);

export default App;