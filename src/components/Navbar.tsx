import { Sun, Moon, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { MobileMenu } from "./MobileMenu";

const Navbar = () => {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : true;
  });
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();
  const servicesRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 300); // Opóźnienie przed zamknięciem menu
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const services = [
    { id: 'automatyzacja', title: 'Automatyzacja procesów biznesowych' },
    { id: 'analiza-danych', title: 'Parametryzacja i analiza danych' },
    { id: 'bazy-danych', title: 'Bazy danych i CRM' },
    { id: 'powiadomienia', title: 'System powiadomień' },
    { id: 'wsparcie-techniczne', title: 'Wsparcie techniczne' },
    { id: 'rozwiazania-cyfrowe', title: 'Rozwiązania cyfrowe' }
  ];

  // Add a CSS-in-JS solution for media queries
  const mobileStyles = {
    '@media (max-width: 640px)': {
      '.text-xl': {
        fontSize: '1rem',
      },
      '.space-x-6 > *': {
        marginRight: '0.5rem',
      },
      '.w-4.h-4': {
        width: '1rem',
        height: '1rem',
      },
      '.p-2': {
        padding: '0.5rem',
      },
      '.container': {
        paddingLeft: '1rem',
        paddingRight: '1rem',
      },
      '.py-4': {
        paddingTop: '0.5rem',
        paddingBottom: '0.5rem',
      },
    },
  };

  return (
    <nav className="fixed w-full top-0 z-50 bg-dark-lighter/80 backdrop-blur-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Menu dla większych ekranów */}
        <div className="hidden md:flex space-x-6 text-gray-300 text-base">
          <Link 
            to="/" 
            className={`hover:text-primary transition-colors ${location.pathname === '/' ? 'text-primary' : ''}`}
          >
            Strona główna
          </Link>
          <div 
            ref={servicesRef}
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div 
              className={`flex items-center gap-1 cursor-pointer hover:text-primary transition-colors ${location.pathname === '/uslugi' ? 'text-primary' : ''}`}
            >
              <Link to="/uslugi">Usługi</Link>
              <ChevronDown className="w-4 h-4 sm:w-4 sm:h-4 w-3 h-3" />
            </div>
            <div 
              className={`absolute top-full left-0 mt-2 w-64 sm:w-64 w-56 bg-dark-lighter rounded-lg shadow-lg py-2 border border-gray-700 transition-all duration-300 ${
                isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
              }`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {services.map((service) => (
                <Link
                  key={service.id}
                  to={`/uslugi/${service.id}`}
                  className="block px-4 py-2 text-sm sm:text-base hover:bg-primary/10 hover:text-primary transition-colors"
                >
                  {service.title}
                </Link>
              ))}
            </div>
          </div>
          <Link 
            to="/o-mnie" 
            className={`hover:text-primary transition-colors ${location.pathname === '/o-mnie' ? 'text-primary' : ''}`}
          >
            O mnie
          </Link>
          <Link 
            to="/kontakt" 
            className={`hover:text-primary transition-colors ${location.pathname === '/kontakt' ? 'text-primary' : ''}`}
          >
            Kontakt
          </Link>
        </div>
        
        {/* Logo i przyciski */}
        <div className="flex items-center space-x-3 md:space-x-6">
          <Link to="/" className="text-primary font-bold text-sm md:text-xl hover:scale-105 transition-transform">
            Emil Kwieciński
          </Link>
          <Button 
            variant="ghost" 
            size="icon" 
            className={`rounded-full p-1 sm:p-2 transition-all duration-300 ${
              isDark 
                ? 'bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20' 
                : 'bg-blue-500/10 text-blue-500 hover:bg-blue-500/20'
            }`}
            onClick={toggleTheme}
          >
            {isDark ? <Sun className="h-4 w-4 sm:h-5 sm:w-5" /> : <Moon className="h-4 w-4 sm:h-5 sm:w-5" />}
          </Button>
        </div>
        
        {/* Menu mobilne */}
        <MobileMenu />
      </div>
    </nav>
  );
};

export default Navbar;




