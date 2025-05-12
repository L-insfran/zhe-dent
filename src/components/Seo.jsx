import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Seo({ title, description, keywords }) {
  const location = useLocation();

  useEffect(() => {
    // Actualizar título
    document.title = title || 'Zhoedent - Mecánica Dental Profesional';
    
    // Actualizar o crear meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = description || 'Taller especializado en prótesis dentales';
    
    // Actualizar o crear meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.content = keywords || 'prótesis dentales, arañitas dentales';
    
    // Añadir canonical link
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.rel = 'canonical';
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.href = window.location.origin + location.pathname;
    
  }, [title, description, keywords, location.pathname]);

  return null;
}