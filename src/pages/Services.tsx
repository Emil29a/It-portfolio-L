import { Bot, Laptop, FileSpreadsheet, Database, Globe, Code, Video, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import SEO from "@/components/SEO";
import { seoConfig } from "@/config/seo";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Services = () => {
  const [shouldAnimate, setShouldAnimate] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const hasSeenAnimation = localStorage.getItem("hasSeenServicesAnimation");
    if (hasSeenAnimation) {
      setShouldAnimate(false);
    } else {
      localStorage.setItem("hasSeenServicesAnimation", "true");
    }
  }, []);

  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const services = [
    {
      id: "automatyzacja-procesow",
      icon: <Bot className="w-12 h-12 text-primary" />,
      title: "Automatyzacja Procesów",
      shortDesc:
        "Automatyzacja procesów finansowych, księgowych i administracyjnych.",
    },
    {
      id: 'konfiguracja-erp',
      icon: <Laptop className="w-12 h-12 text-primary" />,
      title: 'Konfiguracja Systemów ERP',
      shortDesc: 'Konfiguracja schematów księgowych, raportów i analiz w systemach ERP.',
    },
    {
      id: 'analiza-danych',
      icon: <Database className="w-12 h-12 text-primary" />,
      title: 'Analiza Danych',
      shortDesc: 'Analiza danych biznesowych, dashboardy i raporty, prognozowanie trendów.',
    },
    {
      id: 'strony-i-aplikacje',
      icon: <Globe className="w-12 h-12 text-primary" />,
      title: 'Strony i Aplikacje',
      shortDesc: 'Tworzenie stron internetowych, aplikacji webowych i mobilnych.',
    },
    {
      id: 'wsparcie-techniczne',
      icon: <Code className="w-12 h-12 text-primary" />,
      title: 'Wsparcie Techniczne',
      shortDesc: 'Pomoc w konfiguracji systemów, rozwiązywanie problemów technicznych.',
    },
    {
      id: 'grafika-i-wideo',
      icon: <Video className="w-12 h-12 text-primary" />,
      title: 'Grafika i Montaż Wideo',
      shortDesc: 'Projektowanie graficzne, obróbka zdjęć, montaż i edycja wideo.',
    }
  ];

  // Add a CSS-in-JS solution for media queries
  const mobileStyles = {
    '@media (max-width: 640px)': {
      gridTemplateColumns: '1fr',
      '.text-lg': {
        fontSize: '1rem',
      },
      '.w-12.h-12': {
        width: '2.5rem',
        height: '2.5rem',
      },
      '.p-5': {
        padding: '1rem',
      },
      '.mb-3': {
        marginBottom: '0.75rem',
      },
      '.text-xl': {
        fontSize: '0.875rem',
      },
      '.group-hover:translate-x-1': {
        transform: 'translateX(0.25rem)',
      },
    },
  };

  return (
    <div className="min-h-screen bg-dark text-white flex flex-col">
      <SEO 
        title={seoConfig.services.title}
        description={seoConfig.services.description}
        keywords={seoConfig.services.keywords}
      />
      <Navbar />
      <div className="container mx-auto px-4 py-6 flex-grow flex flex-col">
        <h1 className={`text-3xl font-bold text-center mb-6 ${shouldAnimate ? 'animate-fade-up' : ''}`}>Usługi</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl mx-auto flex-grow">
          {services.map((service, index) => (
            <div 
              key={service.id}
              id={service.id}
              className={`bg-dark-lighter p-5 rounded-lg hover:scale-[1.02] transition-all duration-300 cursor-pointer h-full shadow-md border border-primary/10 flex flex-col ${
                shouldAnimate ? 'animate-fade-up' : ''
              }`}
              style={{ animationDelay: shouldAnimate ? `${index * 50}ms` : '0ms' }}
              onClick={() => navigate(`/uslugi/${service.id}`)}
            >
              <div className="flex items-center gap-3 mb-3">
                {service.icon}
                <h3 className="text-lg font-semibold">{service.title}</h3>
              </div>
              <div className="flex-grow">
                <p className="text-gray-300 text-xl">
                  {service.shortDesc}
                </p>
              </div>
              <div className="flex justify-end pt-3">
                <div className="flex items-center gap-2 text-primary group-hover:scale-105 transition-transform">
                  <span className="font-medium">Szczegóły</span>
                  <ChevronRight className="w-12 h-12 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Apply these styles to the relevant components or use a library like styled-components to handle this.

export default Services;
