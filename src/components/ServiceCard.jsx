import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';
import reparaciones from '../assets/reparaciones.png';

const ServiceCard = ({ service }) => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  if (service.id === 4) {
    service.icon = reparaciones;
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ 
        scale: 1.03,
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
      }}
      transition={{ 
        type: 'spring',
        stiffness: 300,
        damping: 15,
        duration: 0.3
      }}
      className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 relative overflow-hidden group"
    >
      {/* Efecto sutil de brillo al hacer hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="relative z-10">
        <img 
          src={service.icon} 
          alt={service.title}
          className="w-40 h-32 mb-4 mx-auto object-contain transition-transform duration-300 group-hover:scale-110"
          loading="lazy"
        />
        
        <h3 className="text-2xl font-bold mb-4 text-center text-gray-800 group-hover:text-blue-600 transition-colors">
          {service.title}
        </h3>
        
        <p className="text-gray-600 text-center leading-relaxed">
          {service.description}
        </p>
        
        {/* Botón visible en móviles o al hacer hover */}
        <div className={`mt-6 text-center transition-all duration-300 ${isMobile ? 'opacity-100 translate-y-0' : 'opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0'}`}>
          <button 
            onClick={() => navigate(`/servicios/${service.url}`)}
            className="inline-block px-4 py-2 text-sm font-medium text-blue-600 rounded-lg bg-blue-50 hover:bg-blue-100 cursor-pointer transition-colors duration-200"
          >
            Más información
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default ServiceCard;