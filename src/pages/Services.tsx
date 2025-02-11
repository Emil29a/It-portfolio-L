
import Navbar from "@/components/Navbar";
import ServiceCard from "@/components/ServiceCard";
import { Bot, FileSpreadsheet, Receipt, Code, Database, Monitor, Workflow, CircuitBoard } from "lucide-react";

const Services = () => {
  return (
    <div className="min-h-screen bg-dark text-white">
      <Navbar />
      <div className="container mx-auto px-4 pt-24">
        <h1 className="text-4xl font-bold text-center mb-12 animate-fade-up">Usługi</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-8">
            <ServiceCard
              icon={<Bot className="w-8 h-8" />}
              title="Automatyzacja Procesów Biznesowych"
              description="• Import wyciągów bankowych
              • Klasyfikacja dokumentów AI
              • Księgowanie faktur
              • Przypomnienia podatkowe"
              delay={0}
            />
            <ServiceCard
              icon={<Database className="w-8 h-8" />}
              title="Zarządzanie Danymi"
              description="• Integracja baz danych
              • Migracja danych
              • Archiwizacja
              • Bezpieczeństwo danych"
              delay={200}
            />
            <ServiceCard
              icon={<Monitor className="w-8 h-8" />}
              title="Wsparcie Systemów"
              description="• Administracja systemami
              • Rozwiązywanie problemów
              • Aktualizacje
              • Monitorowanie wydajności"
              delay={400}
            />
            <ServiceCard
              icon={<CircuitBoard className="w-8 h-8" />}
              title="Integracje Systemowe"
              description="• API i webhooki
              • Synchronizacja danych
              • Automatyzacja
              • Monitoring integracji"
              delay={600}
            />
          </div>
          <div className="space-y-8">
            <ServiceCard
              icon={<FileSpreadsheet className="w-8 h-8" />}
              title="Integracje IT w Księgowości"
              description="• Systemy ERP
              • Excel i Power BI
              • SAP, eNova, Symfonia
              • Analiza danych"
              delay={100}
            />
            <ServiceCard
              icon={<Receipt className="w-8 h-8" />}
              title="Optymalizacja Workflow"
              description="• Elektroniczny obieg
              • Systemy OCR
              • Narzędzia finansowe
              • Kalkulatory biznesowe"
              delay={300}
            />
            <ServiceCard
              icon={<Workflow className="w-8 h-8" />}
              title="Procesy Biznesowe"
              description="• Mapowanie procesów
              • Optymalizacja
              • Automatyzacja
              • Raportowanie"
              delay={500}
            />
            <ServiceCard
              icon={<Code className="w-8 h-8" />}
              title="Web Development"
              description="• Strony internetowe
              • Aplikacje webowe
              • Aplikacje mobilne
              • Optymalizacja SEO"
              delay={700}
            />
          </div>
        </div>

        <div className="prose prose-invert max-w-none bg-dark-lighter p-8 rounded-lg animate-fade-up transform hover:scale-105 transition-all duration-300">
          <h2 className="text-2xl font-semibold mb-4">Szczegółowy Zakres Usług</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">Automatyzacja Procesów</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Rozwój narzędzi automatyzujących zadania księgowe</li>
                <li>Automatyczny import wyciągów bankowych</li>
                <li>Boty klasyfikujące dokumenty z użyciem AI</li>
                <li>Optymalizacja procesu księgowania faktur</li>
                <li>System przypomnień o terminach podatkowych</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3">Integracje Systemów</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Konfiguracja workflow księgowego</li>
                <li>Tworzenie raportów w Excel i Power BI</li>
                <li>Integracja z systemami księgowymi</li>
                <li>Automatyzacja operacji finansowych</li>
                <li>Monitoring i utrzymanie integracji</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
