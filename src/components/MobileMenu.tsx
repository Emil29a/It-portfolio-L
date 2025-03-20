import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Home, User, Mail, Layers } from "lucide-react";

const services = [
  { id: 'automatyzacja', title: 'Automatyzacja procesów biznesowych' },
  { id: 'analiza-danych', title: 'Parametryzacja i analiza danych' },
  { id: 'bazy-danych', title: 'Bazy danych i CRM' },
  { id: 'powiadomienia', title: 'System powiadomień' },
  { id: 'wsparcie-techniczne', title: 'Wsparcie techniczne' },
  { id: 'rozwiazania-cyfrowe', title: 'Rozwiązania cyfrowe' }
];

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  const toggleServices = () => setShowServices(!showServices);
  
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    closeMenu();
  }, [location.pathname]);
  
  return (
    <div className="md:hidden">
      {/* Przycisk otwierający menu */}
      <button 
        onClick={toggleMenu}
        className="p-2 text-white bg-primary rounded-lg hover:bg-opacity-80 transition-colors focus:outline-none"
        aria-label={isOpen ? "Zamknij menu" : "Otwórz menu"}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      
      {/* Pełnoekranowe menu */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center"
          onClick={closeMenu} // Kliknięcie poza menu je zamyka
        >
          <div 
            className="w-[95%] max-w-md bg-gray-900/95 text-white shadow-lg rounded-lg p-4 max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()} // Zapobiega zamykaniu po kliknięciu w menu
          >
            {/* Nagłówek menu */}
            <div className="flex items-center justify-between border-b border-gray-700 pb-3">
              <span className="text-primary font-bold text-xl">Menu</span>
              <button 
                onClick={closeMenu}
                className="p-2 text-white hover:text-primary transition-colors"
                aria-label="Zamknij menu"
              >
                <X size={24} />
              </button>
            </div>
            
            {/* Elementy menu */}
            <nav className="flex-1 py-4 flex flex-col justify-around">
              <Link to="/" className="flex items-center gap-3 text-lg font-medium hover:text-primary transition-colors p-2 rounded-lg hover:bg-gray-800/50" onClick={closeMenu}>
                <Home size={22} /> Strona główna
              </Link>
              
              {/* Menu usług */}
              <div>
                <button
                  className="flex items-center justify-between w-full text-lg font-medium hover:text-primary transition-colors p-2 rounded-lg hover:bg-gray-800/50"
                  onClick={toggleServices}
                >
                  <div className="flex items-center gap-3">
                    <Layers size={22} /> Usługi
                  </div>
                  <ChevronDown className={`w-6 h-6 transition-transform ${showServices ? 'rotate-180' : ''}`} />
                </button>
                
                {showServices && (
                  <div className="mt-1 space-y-1">
                    {services.map((service) => (
                      <Link
                        key={service.id}
                        to={`/uslugi/${service.id}`}
                        className="block text-gray-200 hover:text-primary transition-colors py-2 px-4 text-base hover:bg-gray-800/50 rounded-lg"
                        onClick={closeMenu}
                      >
                        <div className="text-left">{service.title}</div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              
              <Link to="/o-mnie" className="flex items-center gap-3 text-lg font-medium hover:text-primary transition-colors p-2 rounded-lg hover:bg-gray-800/50" onClick={closeMenu}>
                <User size={22} /> O mnie
              </Link>
              
              <Link to="/kontakt" className="flex items-center gap-3 text-lg font-medium hover:text-primary transition-colors p-2 rounded-lg hover:bg-gray-800/50" onClick={closeMenu}>
                <Mail size={22} /> Kontakt
              </Link>
            </nav>
            
            {/* Stopka menu */}
            <div className="border-t border-gray-700 pt-3 text-center">
              <span className="text-primary font-bold text-lg">Emil Kwieciński</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
