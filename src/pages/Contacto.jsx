import { useEffect } from 'react';
import ReactGA from 'react-ga4';
import { Link, useNavigate } from 'react-router-dom';
import ContactCTA from '../components/contacto/ContactCTA';
import ContactForm from '../components/contacto/ContactForm';
import ContactInfo from '../components/contacto/ContactInfo';
import ContactReasons from '../components/contacto/ContactReasons';
import MapSection from '../components/contacto/MapSection';
import Seo from '../components/Seo';
import { useGracias } from '../context/GraciasContext';

const Contacto = () => {
  const { autorizar } = useGracias();
  const navigate = useNavigate();

  // Track page view
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: "/contacto" });
  }, []);

  const trackContactClick = (method) => {
    ReactGA.event({
      category: 'Contacto',
      action: 'Click en contacto',
      label: method
    });
  };

  const handleSubmit = async (formData, setIsSubmitting) => {
    setIsSubmitting(true);
    
    ReactGA.event({
      category: 'Formulario',
      action: 'Envio de formulario',
      label: 'Contacto - ' + formData.asunto
    });

    try {
      const response = await fetch('https://formsubmit.co/ajax/zhoezhoe40@gmail.com', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          _subject: `Nuevo mensaje de ${formData.nombre} - ${formData.asunto}`,
          _template: 'table',
          _autoresponse: `Hola ${formData.nombre}, hemos recibido tu mensaje sobre "${formData.asunto}". Te responderemos pronto.`
        })
      });

      const data = await response.json();
      if (data.success === 'true') {
        autorizar();
        navigate('/gracias', { replace: true });
      }
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const Breadcrumbs = () => (
    <nav aria-label="Ruta de navegación" className="text-sm py-4 px-4 text-gray-600">
    <ol className="flex space-x-2">
      <li>
        <Link to="/" className="hover:text-red-600  text-white">Inicio</Link>
      </li>
      <li>/</li>
      <li aria-current="page" className='text-black'>Contacto</li>
    </ol>
    </nav>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Seo 
        title="Contacto – Zhoedent"
        description="Formulario de contacto para solicitar información o cotizaciones"
        canonical="https://zhoedent.netlify.app/contacto"
      />

      {/* Hero Section */}
      <section className="py-20 px-4 bg-blue-600 text-white">
          <Breadcrumbs />
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">📞 Contacto – Zhoedent</h1>
          <p className="text-xl md:text-2xl mb-8">Estamos aquí para ayudarte con soluciones técnicas de calidad</p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <p className="text-lg text-gray-700 mb-6">
            En Zhoedent, valoramos la comunicación directa con nuestros clientes. Ya sea que necesites agendar una reparación urgente o resolver dudas sobre nuestras prótesis dentales, placas de descarga u otros servicios, nuestro equipo está listo para brindarte una atención rápida, clara y personalizada.
          </p>
        </div>
      </section>

      {/* Formulario y Ubicación Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <ContactForm onSubmit={handleSubmit} />
          <ContactInfo />
        </div>
      </section>

      <ContactReasons />
      <MapSection onTrackClick={trackContactClick} />
      <ContactCTA onTrackClick={trackContactClick} />
    </div>
  );
};

export default Contacto;