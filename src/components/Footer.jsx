import ReactGA from "react-ga4";
import { BiLogoFacebookCircle, BiLogoInstagram, BiLogoWhatsapp } from "react-icons/bi";

const contactInfo = {
  brand: {
    name: "ZHOEDENT",
    description: "Expertos en mecánica dental desde 2010"
  },
  contact: {
    phone: "+54 11-5425 8792",
    email: "zhoezhoe40@gmail.com"
  },
  social: [
    {
      name: "Facebook",
      url: "https://www.facebook.com/profile.php?id=100084036373205",
      icon: <BiLogoFacebookCircle className="h-6 w-6" />
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/zhoedent/",
      icon: <BiLogoInstagram className="h-6 w-6" />
    },
    {
      name: "Whatsapp",
      url: "https://wa.me/541154258792",
      icon: <BiLogoWhatsapp className="h-6 w-6" />
    }
  ],
  developer: {
    name: "Leandro Insfrán",
    phone: "11 3308 1248"
  }
};

const trackSocialClick = (socialName) => {
  ReactGA.event({
    category: 'Social',
    action: 'Click',
    label: socialName
  });
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 mt-auto" role="contentinfo">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
        {/* Brand Info */}
        <div>
          <h2 className="text-xl font-bold mb-4">{contactInfo.brand.name}</h2>
          <p className="text-gray-400">{contactInfo.brand.description}</p>
        </div>

        {/* Contact Info */}
        <address>
          <h3 className="text-lg font-semibold mb-4">Contacto</h3>
          <p className="text-gray-400">Tel: {contactInfo.contact.phone}</p>
          <p className="text-gray-400">Email: {contactInfo.contact.email}</p>
        </address>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Redes Sociales</h3>
          <div className="flex gap-4">
            {contactInfo.social.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label={social.name}
                onClick={() => trackSocialClick(social.name)}
              >
                <span className="sr-only">{social.name}</span>
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="container mx-auto px-4 mt-8 pt-8 border-t border-gray-800">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} {contactInfo.brand.name}. Todos los derechos reservados.
          </p>
          <p className="text-gray-500 text-sm">
            Desarrollado por <span className="text-gray-400">{contactInfo.developer.name}</span> - Tel: {contactInfo.developer.phone}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;