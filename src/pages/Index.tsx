import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import { seoConfig } from "@/config/seo";
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
  Globe,
  CircuitBoard,
  Cpu,
  Network,
  Laptop,
  Smartphone,
  Wifi,
  Router,
  KeyboardIcon,
  MousePointer,
  Mail,
  Phone
} from "lucide-react";
import { ContactForm } from "@/components/ContactForm";

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
      <SEO 
        title={seoConfig.home.title}
        description={seoConfig.home.description}
        keywords={seoConfig.home.keywords}
      />
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Hero section icons */}
        <div className="absolute top-[8%] left-[7%] w-20 h-20">
          <Server className="text-primary/20 animate-pulse w-full h-full" />
        </div>
        <div className="absolute top-[55%] right-[7%] w-20 h-20">
          <CircuitBoard className="text-primary/20 animate-pulse w-full h-full" />
        </div>
        <div className="absolute top-[19%] right-[10%] w-20 h-20">
          <Cpu className="text-primary/20 animate-pulse w-full h-full" />
        </div>
        <div className="absolute top-[55%] left-[7%] w-20 h-20">
          <Code className="text-primary/20 animate-pulse w-full h-full" />
        </div>
        
        {/* Contact section icons */}
        <div className="absolute bottom-[1%] left-[85%] w-20 h-20">
          <Network className="text-primary/20 animate-pulse w-full h-full" />
        </div>
        <div className="absolute bottom-[21%] right-[75%] w-20 h-20">
          <Laptop className="text-primary/20 animate-pulse w-full h-full" />
        </div>
        <div className="absolute bottom-[27%] left-[80%] w-20 h-20">
          <Smartphone className="text-primary/20 animate-pulse w-full h-full" />
        </div>
        <div className="absolute bottom-[7%] right-[73%] w-20 h-20">
          <Wifi className="text-primary/20 animate-pulse w-full h-full" />
        </div>
      </div>
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="min-h-[92vh] flex items-center justify-center text-center px-4 pt-24 sm:pt-16 relative">
        <div className={`max-w-4xl ${hasAnimated ? 'animate-fade-up' : ''}`}>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:text-left md:flex-1 md:pl-8">
              <h1 className="text-5xl font-bold mb-8 transform hover:scale-100 transition-all duration-300">
                Skuteczne Rozwiązania IT
              </h1>
              <p className="text-2xl text-gray-400 mb-10 transform hover:scale-105 transition-all duration-300 leading-relaxed">
                Oferuję usługi IT, od automatyzacji procesów biznesowych po tworzenie stron internetowych.
                <p></p> 
                 Moje rozwiązania pozwolą Ci zredukować koszty i zaoszczędzić czas.
              </p>
              <div className="flex gap-6 md:justify-start justify-center">
                <Button 
                  className="bg-primary hover:bg-primary-hover text-white transform hover:scale-110 transition-all duration-300 text-lg px-8 py-6"
                  onClick={() => navigate('/uslugi')}
                >
                  Moje usługi
                </Button>
                <Button 
                  variant="outline" 
                  className="border-primary text-primary hover:bg-primary/10 transform hover:scale-110 transition-all duration-300 text-lg px-8 py-6"
                  onClick={() => navigate('/kontakt')}
                >
                  Skontaktuj się
                </Button>
              </div>
            </div>
            <div className="relative md:flex-1 flex justify-end items-center pt-4 md:pr-8">
              <div className="relative w-60">
                <img 
                  src="/images/profile.png" 
                  alt="Emil Kwieciński" 
                  className="w-full h-auto relative z-10"
                  loading="eager"
                  decoding="sync"
                />
                <div className="absolute inset-0 bg-primary/20 blur-md z-0"></div>
                <div className="absolute inset-0 border-2 border-primary shadow-[0_0_25px_rgba(var(--primary-rgb),0.5)] animate-pulse z-20"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-12 px-4">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-center mb-3 hover:text-primary transition-colors">Usługi</h3>
          <p className="text-gray-400 text-center mb-10 hover:text-gray-300 transition-colors animate-fade-in max-w-3xl mx-auto">
            Wszechstronne Wsparcie IT dla Biznesu
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
<ServiceCard
  icon={<Bot className="w-8 h-8" />}
  title="Automatyzacja Procesów Biznesowych"
  description={
    <>
      <ul className="list-disc pl-4">
  <li>Automatyzacja procesów finansowych, księgowych, administracyjnych i operacyjnych</li>
  <li>Automatyzacja działań marketingowych i zarządzania social media</li>
  <li>Tworzenie botów i skryptów usprawniających pracę</li>
</ul>
    </>
  }
  delay={0}
/>
            <ServiceCard
              icon={<Laptop className="w-8 h-8" />}
              title="Systemy ERP i Analiza Danych"
              description={
                <ul className="list-disc pl-4">
                    <li>Konfiguracja, utrzymanie i usprawnienie pracy systemów ERP oraz schematów księgowania</li>
  <li>Zarządzanie bazami danych (SQL, PL/SQL, T-SQL) – przechowywanie i organizacja danych</li>
  <li>Tworzenie raportów i analiz (Excel, Power BI)</li>
</ul>
              }
              delay={200}
            />
            <ServiceCard
              icon={<Globe className="w-8 h-8" />}
              title="Strony Internetowe i Aplikacje"
              description={
                 <ul className="list-disc pl-4">
                  <li>Tworzenie stron internetowych – wizytówki i strony firmowe</li>
  <li>Projektowanie i rozwój aplikacji webowych oraz mobilnych</li>
  <li>Optymalizacja SEO – poprawa widoczności strony w wyszukiwarce</li>
  <li>Hosting, konfiguracja i utrzymanie stron internetowych</li>
</ul>
              }
              delay={400}
            />
            <ServiceCard
              icon={<Server className="w-8 h-8" />}
              title="Pozostałe"
              description={
             <ul className="list-disc pl-4">
              
              <li>Wybór i wdrożenie rozwiązań OCR</li>
<li>Pomoc w rozwiązywaniu problemów technicznych z oprogramowaniem i sprzętem</li>
<li>Wsparcie programistyczne</li>
<li>Projektowanie grafik, logo i materiałów wizualnych</li>
<li>Montaż filmowy itd.</li>
</ul>
              }
              delay={600}
            />
          </div>
          <div className="text-center mt-8">
            <Button 
              onClick={() => navigate('/uslugi')}
              className="bg-primary hover:bg-primary-hover text-white transform hover:scale-10 transition-all duration-300"
            >
              Dowiedz się więcej
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-10 px-4 bg-dark-lighter">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 hover:text-primary transition-colors">O Mnie</h2>
          <p className="text-gray-400 text-center mb-12 hover:text-gray-300 transition-colors animate-fade-in">
            Doświadczenie i pasja w świecie IT oraz finansach
          </p>
          <div className="max-w-3xl mx-auto space-y-6 text-gray-400">
            <p className="transform hover:scale-105 transition-all duration-300">

              Posiadam wyższe wykształcenie: licencjat z Finansów, Rachunkowości i Ubezpieczeń oraz tytuł magistra inżyniera w Informatyce. Jestem pasjonatem technologii IT i finansów, łączącym wiedzę z obu dziedzin, aby tworzyć efektywne rozwiązania biznesowe. Wśród moich celów jest wspieranie przedsiębiorców w zakładaniu i prowadzeniu biznesu – od rejestracji firmy, przez obsługę księgową, po tworzenie stron internetowych, kampanii marketingowych oraz automatyzacji procesów biznesowych.
            </p>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white transform hover:scale-105 transition-all duration-300">Doświadczenie Komercyjne:</h3>
              <ul className="list-none space-y-2">
                <li className="flex items-center gap-2 transform hover:scale-105 transition-all duration-300">
                  <BarChart className="w-5 h-5 text-primary" />
                  Księgowość oraz wdrożenia na systemach: eNova, Unisoft, RAKS SQL, IFS, SAP, Symfonia
                </li>
                <li className="flex items-center gap-2 transform hover:scale-105 transition-all duration-300">
                  <Settings className="w-6 h-6 text-primary" />
                  Automatyzacja procesów księgowych: wprowadzanie faktur, import wyciągów bankowych i raportów kasowych, oraz konfiguracja obiegu dokumentów
                </li>
                <li className="flex items-center gap-2 transform hover:scale-105 transition-all duration-300">
                  <Calculator className="w-4 h-4 text-primary" />
                  Analiza danych: SQL - Oracle i Microsoft SQL, Excel (m.in. pętle, procedury, widoki, edytowanie danych)
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
            Porozmawiajmy o współpracy. Skontaktuj się ze mną, aby omówić szczegóły.
          </p>
          <div className="bg-dark-lighter p-8 rounded-lg">
            <ContactForm />
            <div className="mt-12 space-y-6 text-center">
              <p className="text-gray-400 hover:text-gray-300 transition-colors animate-fade-in">
                Zapraszam do bezpośredniego kontaktu:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-center gap-3 bg-dark p-4 rounded-lg border border-primary/10 hover:border-primary/30 transition-colors">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-gray-400">Email</p>
                    <a href="mailto:Emil.Kwiecinski410@gmail.com" className="hover:text-primary transition-colors text-sm md:text-base break-all">
                      Emil.Kwiecinski410<br></br>@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-dark p-4 rounded-lg border border-primary/10 hover:border-primary/30 transition-colors">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-gray-400">Telefon</p>
                    <a href="tel:+48690678955" className="hover:text-primary transition-colors">
                      +48 690 678 955
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;





