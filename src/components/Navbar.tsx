import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isDark, setIsDark] = useState(true);
  const location = useLocation();

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('light-mode');
  };

  return (
    <nav className="fixed w-full top-0 z-50 bg-dark-lighter/80 backdrop-blur-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex space-x-6 text-gray-300">
            <Link 
            to="/" 
            className={`hover:text-primary transition-colors ${location.pathname === '/' ? 'text-primary' : ''}`}
            >
            Strona główna
            </Link>
            <Link 
            to="/uslugi" 
            className={`hover:text-primary transition-colors ${location.pathname === '/uslugi' ? 'text-primary' : ''}`}
            >
            Usługi
            </Link>
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
        <Button 
          variant="ghost" 
          size="icon" 
          className="text-primary"
          onClick={toggleTheme}
        >
          {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;