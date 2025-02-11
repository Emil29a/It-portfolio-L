import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-dark">
      <div className="text-center animate-fade-up">
        <h1 className="text-8xl font-bold mb-4 text-white">404</h1>
        <p className="text-2xl text-gray-400 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Ups! Nie znaleziono strony
        </p>
        <p className="text-gray-400 mb-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          Strona, której szukasz ({location.pathname}) nie istnieje
        </p>
        <Button
          asChild
          className="animate-fade-in hover:bg-gray-700"
          style={{ animationDelay: '0.6s' }}
        >
            <Link to="/">Wróć do strony głównej</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
