import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import reparaciones from '../assets/reparaciones.png';

const ServiceCard = ({ service }) => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Detectar si es móvil al montar el componente y al cambiar el tamaño
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Verificar al montar
    checkIfMobile();

    // Escuchar cambios de tamaño
    window.addEventListener('resize', checkIfMobile);

    // Limpiar listener al desmontar
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Asignar icono especial si es el servicio con ID 4
  if (service.id === 4) {
    service.icon = reparaciones;
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={!isMobile ? { 
        scale: 1.03,
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
      } : {}}
      transition={{ 
        type: 'spring',
        stiffness: 300,
        damping: 15,
        duration: 0.3
      }}
      className="bg-white p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 border border-gray-100 relative overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Efecto de overlay simplificado */}
      <div className="absolute inset-0 bg-blue-50 opacity-0 group-hover:opacity-10 transition-opacity duration-200"></div>
      
      <div className="relative z-10 flex flex-col h-full">
        {/* Contenedor de imagen con tamaño fijo */}
        <div className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 mx-auto mb-3 sm:mb-4 flex items-center justify-center">
          <img 
            src={service.icon} 
            alt={service.title}
            className="w-full h-full object-contain"
            loading="lazy"
            width={isMobile ? 64 : 128}
            height={isMobile ? 64 : 128}
            decoding="async"
          />
        </div>
        
        {/* Contenido textual */}
        <div className="flex-grow">
          <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 text-center text-gray-800 line-clamp-2">
            {service.title}
          </h3>
          
          <p className="text-xs sm:text-sm text-gray-600 text-center leading-relaxed line-clamp-3">
            {service.description}
          </p>
        </div>
        
        {/* Botón siempre visible */}
        <div className="mt-3 sm:mt-4 text-center">
          <button 
            onClick={() => navigate(`/servicios/${service.url}`)}
            className="inline-block px-3 py-1 text-xs sm:text-sm font-medium text-blue-600 rounded-lg bg-blue-50 hover:bg-blue-100 active:bg-blue-200 cursor-pointer transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50"
            aria-label={`Más información sobre ${service.title}`}
          >
            Más información
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;