import { useParams, useNavigate } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import { Bot, FileSpreadsheet, Database, Globe, Code, Video, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from 'react';
import SEO from "@/components/SEO";
import { seoConfig } from "@/config/seo";
import React from 'react';

const ServiceNavigation = ({ currentServiceId }: { currentServiceId: string }) => {
  const navigate = useNavigate();
  
  const servicesList = [
    { id: 'automatyzacja-procesow', name: 'Automatyzacja Procesów' },
    { id: 'konfiguracja-erp', name: 'Konfiguracja ERP' },
    { id: 'analiza-danych', name: 'Analiza Danych' },
    { id: 'bazy-danych', name: 'Bazy Danych' },
    { id: 'wsparcie-techniczne', name: 'Wsparcie Techniczne' },
    { id: 'rozwiazania-cyfrowe', name: 'Rozwiązania Cyfrowe' }
  ];
  
  return (
    <div className="bg-dark-lighter rounded-lg p-4 mb-8">
      <h3 className="text-lg font-medium mb-3 text-primary">Inne usługi:</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        {servicesList
          .filter(service => service.id !== currentServiceId)
          .map(service => (
            <button
              key={service.id}
              onClick={() => navigate(`/uslugi/${service.id}`)}
              className="text-left p-2 hover:bg-dark rounded-md text-gray-300 hover:text-white transition-colors truncate"
            >
              {service.name}
            </button>
          ))}
      </div>
    </div>
  );
};

const ServiceDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [shouldAnimate, setShouldAnimate] = useState(true);

  useEffect(() => {
    const hasSeenAnimation = localStorage.getItem(`hasSeenServiceAnimation_${id}`);
    if (hasSeenAnimation) {
      setShouldAnimate(false);
    } else {
      localStorage.setItem(`hasSeenServiceAnimation_${id}`, "true");
    }
  }, [id]);

  const services = {
    'automatyzacja-procesow': {
      icon: <Bot className="w-5 h-5" />,
      title: 'Automatyzacja Procesów Biznesowych',
      description: (
        <div className="space-y-6">
          <p className="text-xl text-gray-300">
            Specjalizuję się w tworzeniu zaawansowanych rozwiązań automatyzujących procesy biznesowe,
            ze szczególnym uwzględnieniem procesów finansowych i księgowych.
          </p>
          
          <div className="space-y-8 mt-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Główne obszary automatyzacji:</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-dark p-6 rounded-lg">
                  <h4 className="text-xl font-medium mb-3 text-primary">Automatyzacja księgowości</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Automatyczne księgowanie faktur i dokumentów</li>
                    <li>• Import wyciągów bankowych</li>
                    <li>• Automatyczna klasyfikacja dokumentów</li>
                    <li>• Generowanie raportów księgowych</li>
                  </ul>
                </div>
                <div className="bg-dark p-6 rounded-lg">
                  <h4 className="text-xl font-medium mb-3 text-primary">Procesy administracyjne</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Automatyzacja obiegu dokumentów</li>
                    <li>• Zarządzanie terminami i zadaniami</li>
                    <li>• Automatyczne powiadomienia</li>
                    <li>• Integracja systemów</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">Korzyści z automatyzacji:</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-dark p-6 rounded-lg">
                  <h4 className="text-xl font-medium mb-3 text-primary">Oszczędność czasu</h4>
                  <p className="text-gray-300">Redukcja czasu potrzebnego na wykonanie powtarzalnych zadań nawet o 80%</p>
                </div>
                <div className="bg-dark p-6 rounded-lg">
                  <h4 className="text-xl font-medium mb-3 text-primary">Minimalizacja błędów</h4>
                  <p className="text-gray-300">Eliminacja błędów ludzkich w procesach zautomatyzowanych</p>
                </div>
                <div className="bg-dark p-6 rounded-lg">
                  <h4 className="text-xl font-medium mb-3 text-primary">Skalowalność</h4>
                  <p className="text-gray-300">Łatwe skalowanie procesów bez zwiększania zatrudnienia</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">Wykorzystywane technologie:</h3>
              <div className="bg-dark p-6 rounded-lg">
                <ul className="grid md:grid-cols-2 gap-4 text-gray-300">
                  <li>• UiPath - automatyzacja procesów RPA</li>
                  <li>• Python - skrypty automatyzujące</li>
                  <li>• VBA - automatyzacja w Excel</li>
                  <li>• SQL - automatyzacja baz danych</li>
                  <li>• Power Automate - przepływy pracy</li>
                  <li>• Zapier - integracje systemów</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },
    'konfiguracja-erp': {
      icon: <FileSpreadsheet className="w-5 h-5" />,
      title: 'Konfiguracja Systemów ERP',
      description: (
        <div className="space-y-6">
          <p className="text-xl text-gray-300">
            Oferuję kompleksowe usługi w zakresie konfiguracji systemów ERP,
            umożliwiające efektywne zarządzanie procesami biznesowymi i finansowymi w firmie.
          </p>
          
          <div className="space-y-8 mt-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Zakres usług:</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-dark p-6 rounded-lg">
                  <h4 className="text-xl font-medium mb-3 text-primary">Parametryzacja systemów</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Konfiguracja modułów finansowych</li>
                    <li>• Dostosowanie schematów księgowych</li>
                    <li>• Integracja z systemami bankowymi</li>
                    <li>• Optymalizacja procesów</li>
                  </ul>
                </div>
                <div className="bg-dark p-6 rounded-lg">
                  <h4 className="text-xl font-medium mb-3 text-primary">Raportowanie i analizy</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Tworzenie szablonów raportów</li>
                    <li>• Automatyzacja raportowania</li>
                    <li>• Integracja z narzędziami BI</li>
                    <li>• Dashboardy zarządcze</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">Wspierane systemy ERP:</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-dark p-6 rounded-lg">
                  <h4 className="text-xl font-medium mb-3 text-primary">Systemy popularne</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• SAP</li>
                    <li>• Oracle ERP</li>
                    <li>• Microsoft Dynamics</li>
                    <li>• Sage</li>
                  </ul>
                </div>
                <div className="bg-dark p-6 rounded-lg">
                  <h4 className="text-xl font-medium mb-3 text-primary">Systemy dla MŚP</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Comarch ERP</li>
                    <li>• Enova365</li>
                    <li>• Optima</li>
                    <li>• Insert</li>
                  </ul>
                </div>
                <div className="bg-dark p-6 rounded-lg">
                  <h4 className="text-xl font-medium mb-3 text-primary">Rozwiązania branżowe</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Systemy dla handlu</li>
                    <li>• Systemy dla produkcji</li>
                    <li>• Systemy dla usług</li>
                    <li>• Rozwiązania dedykowane</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    'analiza-danych': {
      icon: <Database className="w-5 h-5" />,
      title: 'Analiza Danych',
      description: (
        <div className="space-y-6">
          <p className="text-xl text-gray-300">
            Zapewniam profesjonalną analizę danych biznesowych, która pomaga w podejmowaniu
            trafnych decyzji i optymalizacji działalności przedsiębiorstwa.
          </p>
          
          <div className="space-y-8 mt-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Oferowane rozwiązania:</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-dark p-6 rounded-lg">
                  <h4 className="text-xl font-medium mb-3 text-primary">Analiza biznesowa</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Analiza efektywności procesów</li>
                    <li>• Identyfikacja obszarów optymalizacji</li>
                    <li>• Prognozowanie trendów</li>
                    <li>• Analiza rynku i konkurencji</li>
                  </ul>
                </div>
                <div className="bg-dark p-6 rounded-lg">
                  <h4 className="text-xl font-medium mb-3 text-primary">Wizualizacja danych</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Interaktywne dashboardy</li>
                    <li>• Raporty graficzne</li>
                    <li>• Prezentacje wyników</li>
                    <li>• Automatyczne aktualizacje</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">Narzędzia analityczne:</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-dark p-6 rounded-lg">
                  <h4 className="text-xl font-medium mb-3 text-primary">Narzędzia BI</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Power BI</li>
                    <li>• Tableau</li>
                    <li>• QlikView</li>
                    <li>• Looker</li>
                  </ul>
                </div>
                <div className="bg-dark p-6 rounded-lg">
                  <h4 className="text-xl font-medium mb-3 text-primary">Analiza statystyczna</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• R</li>
                    <li>• Python (pandas, numpy)</li>
                    <li>• SPSS</li>
                    <li>• Excel zaawansowany</li>
                  </ul>
                </div>
                <div className="bg-dark p-6 rounded-lg">
                  <h4 className="text-xl font-medium mb-3 text-primary">Big Data</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Hadoop</li>
                    <li>• Spark</li>
                    <li>• MongoDB</li>
                    <li>• Elasticsearch</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    'strony-i-aplikacje': {
      icon: <Globe className="w-5 h-5" />,
      title: 'Strony Internetowe i Aplikacje',
      description: (
        <div className="space-y-6">
          <p className="text-xl text-gray-300">
            Projektuję i tworzę nowoczesne strony internetowe oraz aplikacje webowe, 
            które wyróżniają się atrakcyjnym designem i funkcjonalnością.
          </p>
          
          <div className="space-y-8 mt-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Rodzaje projektów:</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-dark p-6 rounded-lg">
                  <h4 className="text-xl font-medium mb-3 text-primary">Strony internetowe</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Strony firmowe i wizytówkowe</li>
                    <li>• Strony produktowe</li>
                    <li>• Portfolio i CV</li>
                    <li>• Blogi i serwisy informacyjne</li>
                  </ul>
                </div>
                <div className="bg-dark p-6 rounded-lg">
                  <h4 className="text-xl font-medium mb-3 text-primary">Aplikacje webowe</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Platformy e-commerce</li>
                    <li>• Systemy zarządzania treścią</li>
                    <li>• Aplikacje SaaS</li>
                    <li>• Dashboardy i panele administracyjne</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">Technologie:</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-dark p-6 rounded-lg">
                  <h4 className="text-xl font-medium mb-3 text-primary">Frontend</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• React / Next.js</li>
                    <li>• Vue.js / Nuxt.js</li>
                    <li>• Tailwind CSS</li>
                    <li>• TypeScript</li>
                  </ul>
                </div>
                <div className="bg-dark p-6 rounded-lg">
                  <h4 className="text-xl font-medium mb-3 text-primary">Backend</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Node.js</li>
                    <li>• PHP / Laravel</li>
                    <li>• Python / Django</li>
                    <li>• Bazy danych SQL i NoSQL</li>
                  </ul>
                </div>
                <div className="bg-dark p-6 rounded-lg">
                  <h4 className="text-xl font-medium mb-3 text-primary">Optymalizacja</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• SEO</li>
                    <li>• Wydajność stron</li>
                    <li>• Dostępność (WCAG)</li>
                    <li>• Responsywność</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    'wsparcie-techniczne': {
      icon: <Code className="w-5 h-5" />,
      title: 'Wsparcie Techniczne i Programistyczne',
      description: (
        <div className="space-y-6">
          <p className="text-xl text-gray-300">
            Zapewniam kompleksowe wsparcie techniczne i programistyczne, pomagając w rozwiązywaniu
            problemów i optymalizacji procesów IT.
          </p>
          
          <div className="space-y-8 mt-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Obszary wsparcia:</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-dark p-6 rounded-lg">
                  <h4 className="text-xl font-medium mb-3 text-primary">Wsparcie systemowe</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Konfiguracja systemów</li>
                    <li>• Rozwiązywanie problemów</li>
                    <li>• Optymalizacja wydajności</li>
                    <li>• Aktualizacje i konserwacja</li>
                  </ul>
                </div>
                <div className="bg-dark p-6 rounded-lg">
                  <h4 className="text-xl font-medium mb-3 text-primary">Programowanie</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Rozwój aplikacji</li>
                    <li>• Integracje systemów</li>
                    <li>• Skrypty automatyzujące</li>
                    <li>• Debugowanie</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">Technologie:</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-dark p-6 rounded-lg">
                  <h4 className="text-xl font-medium mb-3 text-primary">Języki programowania</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Python</li>
                    <li>• JavaScript</li>
                    <li>• SQL</li>
                    <li>• VBA</li>
                  </ul>
                </div>
                <div className="bg-dark p-6 rounded-lg">
                  <h4 className="text-xl font-medium mb-3 text-primary">Narzędzia</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Git</li>
                    <li>• Visual Studio Code</li>
                    <li>• Power BI</li>
                    <li>• Excel</li>
                  </ul>
                </div>
                <div className="bg-dark p-6 rounded-lg">
                  <h4 className="text-xl font-medium mb-3 text-primary">Systemy</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Windows Server</li>
                    <li>• Linux</li>
                    <li>• Docker</li>
                    <li>• Cloud (AWS, Azure)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    'grafika-i-wideo': {
      icon: <Video className="w-5 h-5" />,
      title: 'Grafika i Montaż Wideo',
      description: (
        <div className="space-y-6">
          <p className="text-xl text-gray-300">
            Tworzę profesjonalne materiały graficzne i wideo, które pomagają w budowaniu wizerunku
            marki i efektywnej komunikacji z klientami.
          </p>
          
          <div className="space-y-8 mt-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Oferowane usługi:</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-dark p-6 rounded-lg">
                  <h4 className="text-xl font-medium mb-3 text-primary">Projektowanie graficzne</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Logo i identyfikacja wizualna</li>
                    <li>• Materiały marketingowe</li>
                    <li>• Banery i grafiki na social media</li>
                    <li>• Retusz i obróbka zdjęć</li>
                  </ul>
                </div>
                <div className="bg-dark p-6 rounded-lg">
                  <h4 className="text-xl font-medium mb-3 text-primary">Produkcja wideo</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Filmy promocyjne</li>
                    <li>• Animacje i motion design</li>
                    <li>• Montaż materiałów wideo</li>
                    <li>• Efekty specjalne i korekta kolorów</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">Narzędzia i technologie:</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-dark p-6 rounded-lg">
                  <h4 className="text-xl font-medium mb-3 text-primary">Grafika</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Adobe Photoshop</li>
                    <li>• Adobe Illustrator</li>
                    <li>• Adobe InDesign</li>
                    <li>• Figma</li>
                  </ul>
                </div>
                <div className="bg-dark p-6 rounded-lg">
                  <h4 className="text-xl font-medium mb-3 text-primary">Wideo</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Adobe Premiere Pro</li>
                    <li>• Adobe After Effects</li>
                    <li>• DaVinci Resolve</li>
                    <li>• Final Cut Pro</li>
                  </ul>
                </div>
                <div className="bg-dark p-6 rounded-lg">
                  <h4 className="text-xl font-medium mb-3 text-primary">Animacja</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Cinema 4D</li>
                    <li>• Blender</li>
                    <li>• Adobe Animate</li>
                    <li>• Lottie</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  };

  const service = services[id as keyof typeof services];

  if (!service) {
    return (
      <div className="min-h-screen bg-dark text-white">
        <SEO 
          title="Nie znaleziono usługi | Emil Kwieciński - Specjalista IT"
          description="Przepraszamy, ale nie znaleziono wybranej usługi. Zapraszamy do zapoznania się z naszą pełną ofertą usług IT."
          keywords="IT, usługi, błąd, nie znaleziono"
        />
        <Navbar />
        <div className="container mx-auto px-8 pt-29">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-9">Nie znaleziono usługi</h1>
            <Button 
              onClick={() => navigate('/uslugi')}
              className="bg-primary hover:bg-primary-hover text-white"
            >
              Wróć do listy usług
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark text-white dark:bg-dark dark:text-white">
      <SEO 
        title={seoConfig.serviceDetails(service.title).title}
        description={seoConfig.serviceDetails(service.title).description}
        keywords={seoConfig.serviceDetails(service.title).keywords}
      />
      <Navbar />
      <div className="container mx-auto px-4">
        <div className="pt-24 sm:pt-20 pb-8">
          <div className="max-w-7xl mx-auto mb-8">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <Button 
                onClick={() => navigate('/uslugi')}
                variant="outline"
                size="lg"
                className="text-primary border-2 border-primary hover:bg-primary hover:text-white transition-all duration-300 text-lg px-6 py-3 whitespace-nowrap"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Wróć do strony usług
              </Button>

              <div className="flex-1">
                <div className="bg-white/80 dark:bg-dark/50 p-4 rounded-lg border-2 border-primary/30 shadow-lg relative group">
                  <div className="absolute inset-0 bg-primary/5 rounded-lg animate-pulse transition-opacity duration-500"></div>
                  <h3 className="text-sm font-medium mb-3 text-gray-800 dark:text-white px-1 relative z-10">Przełącz na inną usługę:</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2 relative z-10">
                    {Object.entries(services).map(([serviceId, serviceData]) => {
                      const isActive = id === serviceId;
                      return (
                        <Button
                          key={serviceId}
                          onClick={() => navigate(`/uslugi/${serviceId}`)}
                          variant="ghost"
                          className={`flex items-center justify-start gap-2 h-8 px-3 relative overflow-hidden transition-colors ${
                            isActive 
                              ? 'bg-primary/20 text-primary border border-primary shadow-lg shadow-primary/20' 
                              : 'text-gray-700 dark:text-primary hover:text-primary hover:bg-primary/10'
                          }`}
                          style={{ minWidth: '150px', height: '32px' }}
                        >
                          <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                          <div className={`w-4 h-4 flex-shrink-0 ${isActive ? 'text-primary' : 'text-gray-700 dark:text-primary'}`}>
                            {serviceData.icon}
                          </div>
                          <span className={`text-sm font-medium whitespace-nowrap relative z-10 ${isActive ? 'text-primary' : ''}`}>
                            {serviceData.title}
                          </span>
                        </Button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className={`flex flex-col gap-8 ${shouldAnimate ? 'animate-fade-up delay-100' : ''}`}>
              <div className="flex items-center gap-4 bg-dark-lighter dark:bg-dark-lighter p-3 rounded-lg border-2 border-primary/10 shadow-lg">
                <div className="flex-shrink-0 text-primary w-12 h-12 flex items-center justify-center">
                  {React.cloneElement(service.icon as React.ReactElement, { className: 'w-8 h-8' })}
                </div>
                <h1 className="text-xl font-bold text-primary">{service.title}</h1>
              </div>

              <div className="space-y-8 text-primary/90 dark:text-gray-300">
                {service.description}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;


