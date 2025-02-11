import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { 
  Monitor, 
  Database, 
  Workflow, 
  Code, 
  FileSpreadsheet,
  Bot,
  Receipt,
  Bell,
  BarChart,
  FileText,
  Calculator,
  Settings,
  Server,
  CircuitBoard,
  Cpu,
  Network,
  Laptop,
  Smartphone,
  Wifi,
  Router,
  KeyboardIcon,
  MousePointer
} from "lucide-react";

const Index = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const hasSeenAnimation = localStorage.getItem("hasSeenAnimation");
    if (!hasSeenAnimation) {
      setHasAnimated(true);
      localStorage.setItem("hasSeenAnimation", "true");
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-dark text-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <Server className="absolute top-20 left-10 w-20 h-20 text-primary/10 animate-pulse" />
        <CircuitBoard className="absolute top-40 right-20 w-16 h-16 text-primary/10 animate-pulse" />
        <Cpu className="absolute bottom-40 left-30 w-24 h-24 text-primary/10 animate-pulse" />
        <Code className="absolute bottom-20 right-10 w-20 h-20 text-primary/10 animate-pulse" />
        <Network className="absolute top-60 left-40 w-16 h-16 text-primary/10 animate-pulse" />
        <Laptop className="absolute top-80 right-40 w-20 h-20 text-primary/10 animate-pulse" />
        <Smartphone className="absolute bottom-60 left-20 w-16 h-16 text-primary/10 animate-pulse" />
        <Wifi className="absolute bottom-80 right-30 w-18 h-18 text-primary/10 animate-pulse" />
        <Router className="absolute top-96 left-60 w-16 h-16 text-primary/10 animate-pulse" />
        <KeyboardIcon className="absolute top-32 right-60 w-20 h-20 text-primary/10 animate-pulse" />
        <MousePointer className="absolute bottom-96 right-40 w-14 h-14 text-primary/10 animate-pulse" />
      </div>
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center text-center px-4 pt-16 relative">
        <div className={`max-w-3xl ${hasAnimated ? 'animate-fade-up' : ''}`}>
          <h1 className="text-5xl font-bold mb-6 transform hover:scale-105 transition-all duration-300">
            Profesjonalne Rozwiązania IT
          </h1>
          <p className="text-xl text-gray-400 mb-8 transform hover:scale-105 transition-all duration-300">
            Specjalizuję się w automatyzacji procesów biznesowych, integracji systemów księgowych i
            optymalizacji przepływu pracy
          </p>
            <div className="flex gap-4 justify-center">
            <Button 
              className="bg-primary hover:bg-primary-hover text-white transform hover:scale-110 transition-all duration-300"
              onClick={() => navigate('/uslugi')}
            >
              Zobacz ofertę
            </Button>
            <Button 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary/10 transform hover:scale-110 transition-all duration-300"
              onClick={() => navigate('/kontakt')}
            >
              Skontaktuj się
            </Button>
            </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 hover:text-primary transition-colors">Usługi</h2>
          <p className="text-gray-400 text-center mb-12 hover:text-gray-300 transition-colors animate-fade-in">
            Kompleksowe rozwiązania IT dla Twojego biznesu
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard
              icon={<Bot className="w-8 h-8" />}
              title="Automatyzacja Procesów"
              description="Automatyzacja importu wyciągów bankowych, klasyfikacja dokumentów AI, przyspieszenie księgowania faktur"
              delay={0}
            />
            <ServiceCard
              icon={<FileSpreadsheet className="w-8 h-8" />}
              title="Integracje IT w Księgowości"
              description="Konfiguracja przepływów pracy, raporty w Excel i Power BI, integracja z SAP, eNova, Symfonia"
              delay={200}
            />
            <ServiceCard
              icon={<Receipt className="w-8 h-8" />}
              title="Optymalizacja Workflow"
              description="Elektroniczny obieg dokumentów, OCR, narzędzia finansowe i kalkulatory biznesowe"
              delay={400}
            />
            <ServiceCard
              icon={<Code className="w-8 h-8" />}
              title="Web Development"
              description="Profesjonalne strony internetowe, aplikacje webowe i mobilne, optymalizacja SEO"
              delay={600}
            />
          </div>
            <div className="text-center mt-8">
            <Button 
              onClick={() => navigate('/uslugi')}
              className="bg-primary hover:bg-primary-hover text-white transform hover:scale-110 transition-all duration-300"
            >
              Dowiedz się więcej
            </Button>
            </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-dark-lighter">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 hover:text-primary transition-colors">O Mnie</h2>
          <p className="text-gray-400 text-center mb-12 hover:text-gray-300 transition-colors animate-fade-in">
            Doświadczenie i pasja w świecie IT i finansów
          </p>
          <div className="max-w-3xl mx-auto space-y-6 text-gray-400">
            <p className="transform hover:scale-105 transition-all duration-300">
              Posiadam 4 lata doświadczenia w księgowości połączone z solidną wiedzą IT. 
              Moje poprzednie role obejmowały stanowiska konsultanta systemów ERP, księgowego 
              i analityka danych finansowych.
            </p>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white transform hover:scale-105 transition-all duration-300">Doświadczenie z systemami:</h3>
              <ul className="list-none space-y-2">
                <li className="flex items-center gap-2 transform hover:scale-105 transition-all duration-300">
                  <BarChart className="w-5 h-5 text-primary" />
                  eNova (3 lata), Unisoft (1 rok), SAP, Symfonia, IFS, RAKS SQL
                </li>
                <li className="flex items-center gap-2 transform hover:scale-105 transition-all duration-300">
                  <Settings className="w-5 h-5 text-primary" />
                  Automatyzacja księgowości i elektroniczny obieg dokumentów
                </li>
                <li className="flex items-center gap-2 transform hover:scale-105 transition-all duration-300">
                  <Calculator className="w-5 h-5 text-primary" />
                  Raportowanie finansowe i analiza danych
                </li>
              </ul>
            </div>
          </div>
            <div className="text-center mt-8">
            <Button 
                onClick={() => navigate('/o-mnie')}
              className="bg-primary hover:bg-primary-hover text-white transform hover:scale-110 transition-all duration-300"
            >
              Dowiedz się więcej
            </Button>
            </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold text-center mb-4 hover:text-primary transition-colors">Kontakt</h2>
          <p className="text-gray-400 text-center mb-8 hover:text-gray-300 transition-colors animate-fade-in">
            Skontaktuj się ze mną, aby omówić szczegóły projektu
          </p>
          <div className="bg-dark-lighter p-8 rounded-lg">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Imię i Nazwisko
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 rounded-md bg-dark border border-gray-700 text-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 rounded-md bg-dark border border-gray-700 text-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Telefon (opcjonalnie)
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full p-3 rounded-md bg-dark border border-gray-700 text-white"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Wiadomość
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full p-3 rounded-md bg-dark border border-gray-700 text-white"
                  required
                />
              </div>
              <Button className="w-full bg-primary hover:bg-primary-hover text-white">
                Wyślij wiadomość
              </Button>
            </form>
            <div className="mt-8 space-y-4 text-center">
              <p className="flex items-center justify-center gap-2">
                <FileText className="w-5 h-5 text-primary" />
                Email: kontakt@emil-nazwisko.pl
              </p>
              <p className="flex items-center justify-center gap-2">
                <Bell className="w-5 h-5 text-primary" />
                Telefon: +48 XXX XXX XXX
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
