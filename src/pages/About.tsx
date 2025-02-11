import Navbar from "@/components/Navbar";
import { BarChart, Settings, Calculator, GraduationCap, Briefcase, Award, Code, Heart, Image } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-dark text-white">
      <Navbar />
      <div className="container mx-auto px-4 pt-24">
        <h1 className="text-4xl font-bold text-center mb-12 animate-fade-up">Curriculum Vitae</h1>
        
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-dark-lighter p-8 rounded-lg animate-fade-up transform hover:scale-105 transition-all duration-300 flex items-center gap-8">
            <div className="w-48 h-48 bg-dark/50 rounded-full overflow-hidden flex items-center justify-center border-2 border-primary">
              <Image className="w-12 h-12 text-gray-400" />
              {/* Add your photo here */}
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-semibold mb-4">O Mnie</h2>
              <p className="text-gray-300 leading-relaxed">
                Jestem pasjonatem technologii i finansów, łączącym wiedzę z obu dziedzin
                w celu tworzenia efektywnych rozwiązań biznesowych.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-dark-lighter p-8 rounded-lg animate-fade-up transform hover:scale-105 transition-all duration-300" style={{ animationDelay: "200ms" }}>
            <div className="flex items-center gap-3 mb-4">
              <Briefcase className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-semibold">Doświadczenie Zawodowe</h2>
            </div>
            <div className="space-y-4">
              <div className="border-l-2 border-primary pl-4">
                <h3 className="text-xl font-semibold">Konsultant IT & Analityk Finansowy</h3>
                <p className="text-gray-400">2020 - obecnie</p>
                <ul className="list-disc pl-5 mt-2 text-gray-300">
                  <li>Wdrażanie i konfiguracja systemów ERP</li>
                  <li>Automatyzacja procesów księgowych</li>
                  <li>Integracja systemów IT</li>
                </ul>
              </div>
              <div className="border-l-2 border-primary pl-4">
                <h3 className="text-xl font-semibold">Księgowy</h3>
                <p className="text-gray-400">2018 - 2020</p>
                <ul className="list-disc pl-5 mt-2 text-gray-300">
                  <li>Prowadzenie pełnej księgowości</li>
                  <li>Raportowanie finansowe</li>
                  <li>Optymalizacja procesów</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-dark-lighter p-8 rounded-lg animate-fade-up transform hover:scale-105 transition-all duration-300" style={{ animationDelay: "400ms" }}>
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-semibold">Wykształcenie</h2>
            </div>
            <div className="space-y-4">
              <div className="border-l-2 border-primary pl-4">
                <h3 className="text-xl font-semibold">Magister Inżynier Informatyki</h3>
                <p className="text-gray-400">2016 - 2020</p>
                <p className="text-gray-300">Specjalizacja: Systemy i Sieci Komputerowe</p>
              </div>
              <div className="border-l-2 border-primary pl-4">
                <h3 className="text-xl font-semibold">Licencjat Finanse i Rachunkowość</h3>
                <p className="text-gray-400">2015 - 2018</p>
                <p className="text-gray-300">Specjalizacja: Rachunkowość Przedsiębiorstw</p>
              </div>
            </div>
          </div>
          
          <div className="bg-dark-lighter p-8 rounded-lg animate-fade-up transform hover:scale-105 transition-all duration-300" style={{ animationDelay: "600ms" }}>
            <div className="flex items-center gap-3 mb-4">
              <Code className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-semibold">Umiejętności Techniczne</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Systemy ERP</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-300">
                  <li>SAP (3 lata)</li>
                  <li>Symfonia</li>
                  <li>eNova</li>
                  <li>Comarch ERP</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Programowanie</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-300">
                  <li>Python</li>
                  <li>JavaScript/TypeScript</li>
                  <li>SQL</li>
                  <li>VBA</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-dark-lighter p-8 rounded-lg animate-fade-up transform hover:scale-105 transition-all duration-300" style={{ animationDelay: "800ms" }}>
            <div className="flex items-center gap-3 mb-4">
              <Award className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-semibold">Certyfikaty</h2>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              <li>Certyfikowany Księgowy</li>
              <li>SAP Financial Consultant</li>
              <li>Microsoft Excel Expert</li>
              <li>PRINCE2 Foundation</li>
            </ul>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-dark-lighter p-8 rounded-lg animate-fade-up transform hover:scale-105 transition-all duration-300" style={{ animationDelay: "1000ms" }}>
            <div className="flex items-center gap-3 mb-4">
              <Heart className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-semibold">Zainteresowania i Hobby</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="border-l-2 border-primary pl-4">
                  <h3 className="text-xl font-semibold mb-2">Technologia</h3>
                  <p className="text-gray-300">
                    Miejsce na opis Twoich zainteresowań technologicznych...
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="border-l-2 border-primary pl-4">
                  <h3 className="text-xl font-semibold mb-2">Rozwój Osobisty</h3>
                  <p className="text-gray-300">
                    Miejsce na opis Twoich innych pasji i zainteresowań...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
