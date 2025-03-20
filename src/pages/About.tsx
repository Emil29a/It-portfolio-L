import Navbar from "@/components/Navbar";
import SEO from "@/components/SEO";
import { seoConfig } from "@/config/seo";
import { ChevronDown, ChevronUp, GraduationCap, Briefcase, Code, Heart } from "lucide-react";
import { useState } from "react";

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="min-h-screen bg-dark text-white">
      <SEO 
        title={seoConfig.about.title}
        description={seoConfig.about.description}
        keywords={seoConfig.about.keywords}
      />
      <Navbar />
      <div className="container mx-auto px-4 pt-24">
        <h1 className="text-4xl font-bold text-center mb-12 animate-fade-up">O mnie</h1>
        
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-dark-lighter p-8 rounded-lg animate-fade-up transform hover:scale-105 transition-all duration-300">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="self-start">
                <div className="w-48 h-48 bg-dark/50 rounded-full overflow-hidden flex items-center justify-center border-2 border-primary relative">
                  <img 
                    src="/images/profile2.png"
                    alt="Emil Kwieciński"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="flex-1">
                <div className="text-gray-300 leading-relaxed">
                  <p>
                    Jestem pasjonatem technologii IT i finansów, łączącym wiedzę z obu dziedzin w celu tworzenia efektywnych rozwiązań biznesowych.
                    <br></br>
                    Wśród moich celów jest stanie się osobą, która będzie w stanie pomóc kompleksowo z założeniem własnego biznesu - od zarejestrowania firmy/działalności, do obsługi księgowej, stworzenia strony internetowej oraz kampanii marketingowej i programów komputerowych do automatyzacji opartych głównie na narzędziach AI oraz innych potrzebnych narzędzi, które pozwolą zredukować koszty i zaoszczędzić czas.
                  </p>
                  <div className={`transition-all duration-500 ${isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                    <p className="mt-4">
                      Moja przygoda z bardziej zaawansowanym IT zaczęła się nieświadomie, gdy miałem 13 lat. Wówczas, razem ze znajomym, graliśmy w grę Counter-Strike 1.6 i wpadliśmy na pomysł założenia własnego serwera. Okazało się, że to wcale nie jest takie proste – pomijając szczegóły samego procesu, miałem wówczas do czynienia z językiem programowania C++ (o czym, jako 13-latek, nie miałem pojęcia ani nie zdawałem sobie sprawy, że taka wiedza może być użyteczna poza grą). 
                      <br/><br/>
                      Podczas studiów podejmowałem różne prace – byłem magazynierem, pracownikiem administracyjnym, dorabiałem także jako sprzedawca i uczestniczyłem w inwentaryzacjach. Poważniejsze zatrudnienie znalazłem po pierwszym roku studiów, rozpoczynając pracę w księgowości w firmie Prime Number. Zaczynałem od podstaw, początkowo nie widziałem siebie w tym zawodzie i rozważałem zmianę, jednak wybuch pandemii sprawił, że pozostałem w tej branży. Z biegiem czasu zyskałem pewność siebie i poczułem się coraz bardziej komfortowo w tej roli. Bardzo dobrze wspominam to doświadczenie, ponieważ otworzyło mi ono nowe możliwości i wskazało kierunek, w jakim mogę się rozwijać. Współpraca z firmami takimi jak Spotlight, Arskom czy Move Federation była natomiast niezwykle cenna.
                      <br/><br/>
                      Z czasem zdecydowałem się na zmianę – chciałem przejść z pracy typowo księgowej do bardziej technicznej. Zatrudniłem się w firmie Emma Biuro Usług Księgowych, gdzie poza prowadzeniem księgowości, miałem więcej zadań technicznych. Mając więcej czasu, starałem się dorabiać w różnych firmach księgowych, m.in. na programie Symfonia, a także podjąłem się wolontariatu jako grafik komputerowy. W pewnym momencie praca jako księgowy przestała mi sprawiać satysfakcję, więc postanowiłem spróbować przebranżowić się do IT. Rozpocząłem pracę jako Młodszy specjalista ds. wdrożeń ERP, gdzie zajmowałem się wsparciem użytkowników i konfiguracją systemu księgowego. Okazało się, że praca w obszarze wdrożeń, mimo pewnych podobieństw, była znacznie bardziej satysfakcjonująca dla mnie niż praca w księgowości.
                      <br/><br/>
                      Jako wdrożeniowiec brałem udział w wdrożeniach systemów dla firm z Otwocka i Tomaszowa Lubelskiego, odgrywając w nich kluczową rolę. Kontaktowałem się z każdym pracownikiem – od sekretarek, przez kierowników działów, aż po głównych księgowych i prezesów zarządów, ucząc ich obsługi systemu. Początkowo upewniałem się, że na każdym komputerze działa nasze oprogramowanie, później przeprowadzałem szkolenia z podstawowej obsługi, a ostatecznie pomagałem w realizacji konkretnych zadań, zależnie od stanowiska. Choć początkowo skupiałem się na module finanse-księgowość, z czasem rozszerzałem swoje obowiązki o inne obszary systemu. Zmiana pracy wynikała z konieczności napisania pracy magisterskiej i potrzeby zmiany narzędzi, na których pracowałem na co dzień.
                      <br/><br/>
                      Wtedy trafiła się oferta pracy w analityce finansowej w firmie GSK. Zainteresowała mnie możliwość pracy z nowoczesnymi rozwiązaniami, takimi jak SAP i Power BI, elastyczny grafik umożliwiający łączenie pracy ze studiami, a także profesjonalizm samej firmy oraz jej biura. Praca ta dała mi również okazję, by spróbować czegoś nowego w finansach, poza księgowością, oraz upewnić się, czy branża IT to ta, w której chcę się rozwijać. Po napisaniu pracy magisterskiej, mając więcej czasu przed obroną, podjąłem staż w Analityce Danych w BNP Paribas, gdzie dogadałem się, że będę mógł łączyć obie prace. Już na początku stażu w BNP Paribas wiedziałem, że aby kontynuować pracę w firmie na dłużej, muszę zmienić dział, czego ostatecznie nie udało mi się zrealizować. Mimo wszystko, to doświadczenie wspominam pozytywnie, ponieważ miałem okazję pracować z bazami danych SQL oraz rozwinąć swoje umiejętności w zakresie pracy z Excelem. W przypadku GSK, z którym współpracowałem przez cały ten czas, ustaliliśmy, że nie przedłużamy umowy, która kończyła się w marcu. Analityka finansowa nie jest jednak tym obszarem, w którym chciałbym się rozwijać na pełen etat. 
                      <br/><br/>
                      Z perspektywy czasu uważam, że 2024 rok był nietypowy w mojej karierze zawodowej – praca w GSK i BNP Paribas, choć krótka, różniła się od moich wcześniejszych doświadczeń w pracy z systemami księgowymi i ERP. Moje CV może wydawać się niejednolite, jednak moim celem do 26. roku życia było próbowanie różnych zawodowych dróg, by później nie żałować, że poświęciłem czas na rzeczy, które mnie nie interesowały. Dziś, gdy ulgi podatkowe związane z wiekiem już mnie nie obowiązują, staram się znaleźć stałą pracę i dorabiać w obszarach, który naprawdę mnie fascynują – a o tym mówi ta strona internetowa 😊
                    </p>
                  </div>
                  <button 
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="flex items-center gap-2 text-primary mt-2 hover:text-primary-hover transition-colors"
                  >
                    {isExpanded ? (
                      <>Zwiń tekst <ChevronUp className="w-4 h-4" /></>
                    ) : (
                      <>Rozwiń tekst <ChevronDown className="w-4 h-4" /></>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-dark-lighter p-8 rounded-lg animate-fade-up transform hover:scale-105 transition-all duration-300" style={{ animationDelay: "200ms" }}>
            <div className="flex items-center gap-3 mb-4">
              <Briefcase className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-semibold">Doświadczenie Zawodowe</h2>
            </div>
            <div className="space-y-10">
              <div className="border-l-2 border-primary pl-4">
                <h3 className="text-xl font-semibold">Staż w Analityce Danych (Zespół Zarządzania Efektywnością)</h3>
                <p className="text-gray-400">BNP Paribas</p>
                <ul className="list-disc pl-3 mt-1 text-gray-300">
                <li>Tworzenie i optymalizacja skryptów SQL – pisanie zapytań oraz pętli SQL wspierających zespół w codziennej pracy</li>
<li>Monitorowanie zgodności przydziału opiekunów klientówi wprowadzanie zmian w bazach danych (Oracle SQL, Microsoft SQL Server)</li>
<li>Generowanie danych z Oracle i Microsoft SQL do Excela oraz wykorzystywanie zaawansowanych formuł i tabel przestawnych do analizy i raportowania</li>
<li>Projektowanie interfejsów w Figma oraz wsparcie w rozwoju przestrzeni zespołu w Confluence</li>
<li>Konsultacje i prowadzenie szkoleń dla dyrektorów centrów doradczych</li>
                </ul>
              </div>
              <div className="border-l-2 border-primary pl-4">
                <h3 className="text-xl font-semibold">Młodszy Specjalista ds. wdrożeń ERP (Finanse-Księgowość)</h3>
                <p className="text-gray-400">Unisoft</p>
                <ul className="list-disc pl-3 mt-1 text-gray-300">
 <li>Używanie zapytań SQL w praktyce (m.in. edycja wprowadzonych dokumentów) oraz modyfikowanie procedur PL/SQL zgodnie z wytycznymi klienta.</li>
  <li>Parametryzowanie, administrowanie, monitorowanie, reagowanie na ewentualne awarie lub problemy i wdrażanie systemu.</li>
  <li>Projektowanie i generowanie raportów za pomocą narzędzi podobnych do Crystal Reports, w tym używanie języka Delphi do bardziej zaawansowanych technik raportowania.</li>
  <li>Obsługa głównie modułów: Finanse-Księgowość, Workflow, Obrót Towarowo-Materiałowy (Sprzedaż, Magazyn).</li>
  <li>Prowadzenie szkoleń grupowych i indywidualnych - osobiście i zdalnie.</li>
  <li>Udzielanie merytorycznego wsparcia klientom pracującym na systemie (m.in. księgowości).</li>
                </ul>
              </div>
              <div className="border-l-2 border-primary pl-4">
                <h3 className="text-xl font-semibold">Samodzielny Księgowy</h3>
                <p className="text-gray-400">Emma Biuro Usług Księgowych</p>
                <ul className="list-disc pl-3 mt-1 text-gray-300">
 <li>Prowadzenie kompleksowej księgowości, w tym sporządzanie manualnych dekretów i wprowadzanie ich do programu księgowego.</li>
  <li>Tworzenie schematów księgowych dostosowanych do potrzeb całego biura.</li>
  <li>Bezpośredni kontakt z obsługą klienta programu RAKS w celu rozwiązywania problemów technicznych i udzielania wsparcia.</li>
  <li>Udzielanie pomocy informatycznej pracownikom, w tym obsługa programu księgowego.</li>
  <li>Ustawianie parametrów spółek od strony administratora w programie księgowym zgodnie z przepisami prawno-księgowymi.</li>
                </ul>
              </div>
              <div className="border-l-2 border-primary pl-4">
                <h3 className="text-xl font-semibold">Młodszy Księgowy</h3>
                <p className="text-gray-400">Prime Number</p>
                <ul className="list-disc pl-3 mt-1 text-gray-300">
<li>Wystawianie faktur sprzedaży, faktur zaliczkowych i korekt.</li>
  <li>Księgowanie dokumentów i wyciągów bankowych.</li>
  <li>Dbanie o obieg dokumentów wspólnie z firmami współpracującymi.</li>
  <li>Przygotowywanie przelewów bankowych.</li>
  <li>Sporządzanie deklaracji (m.in. JPK_VAT, CIT, NIP8, VAT-R).</li>
  <li>Prowadzenie ksiąg przychodów i rozchodów.</li>
  <li>Sporządzanie sprawozdań finansowych dla mniejszych spółek.</li>
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
                <h3 className="text-xl font-semibold">Magister Inżynier: Informatyka</h3>
                <p className="text-gray-400">2022 - 2024</p>
                <p className="text-gray-300">Europejska Uczelnia w Warszawie</p>
              </div>
              <div className="border-l-2 border-primary pl-4">
                <h3 className="text-xl font-semibold">Licencjat: Finanse, Rachunkowość i Ubezpieczenia</h3>
                <p className="text-gray-400">2018 - 2022</p>
                <p className="text-gray-300">Uniwersytet Warszawski</p>
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
                <h3 className="text-xl font-semibold mb-3">Systemy ERP i Narzędzia Biznesowe</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-300">
                  <li>eNova365 – średnio zaawansowany</li>
                  <li>Unisoft (System ERP) – zaawansowany</li>
                  <li>SAP, IFS – podstawowy</li>
                  <li>RAKS SQL - ponadpodstawowy</li>
                  <li>Saldeo - średnio zaawansowany</li>
                  <li>UiPath - ponadpodstawowy</li>
                  <li>Confluence – podstawowy</li>
                  <li>BPMN, UML - podstawowy</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Programowanie i Bazy Danych</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-300">
                  <li>SQL – średnio zaawansowany <span className="text-sm">(pętle, procedury, widoki, edytowanie danych)</span></li>
                  <li>PL/SQL - podstawowy</li>
                  <li>T/SQL - podstawowy</li>
                  <li>Python – podstawowy <span className="text-sm">(PyAutoGUI, Pandas)</span></li>
                  <li>HTML, CSS, JavaScript – ponadpodstawowy</li>
                  <li>Oracle Apex - ponadpostawowy</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Narzędzia Analityczne i Biurowe</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-300">
                  <li>Excel – średnio zaawansowany <span className="text-sm">(proste makra, tabele przestawne, formuły, wykresy)</span></li>
                  <li>VBA – podstawowy</li>
                  <li>PowerBI - ponadpodstawowy</li>
                  <li>Word – średnio zaawansowany</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Media i Design</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-300">
                  <li>Pakiet Adobe – średnio zaawansowany <span className="text-sm">(Photoshop, Premiere Pro, After Effects)</span></li>
                  <li>Zarządzanie profilami społecznościowymi – średnio zaawansowany <span className="text-sm">(Youtube, Facebook, Instagram, Tiktok)</span></li>
                   <li>Figma – ponadpostawowy</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-dark-lighter p-8 rounded-lg animate-fade-up transform hover:scale-105 transition-all duration-300" style={{ animationDelay: "800ms" }}>
            <div className="flex items-center gap-3 mb-4">
              <Heart className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-semibold">Zainteresowania i Hobby</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-4">
                <div className="border-l-2 border-primary pl-4">
                  <h3 className="text-xl font-semibold mb-2">Animacje</h3>
                  <p className="text-gray-300">
                    Pracując jako księgowy i dzieląc biuro z zaprzyjaźnionymi firmami marketingowymi, miałem okazję z bliska obserwować ich działania. Zainspirowany tym, co działo się wokół mnie, postanowiłem spróbować swoich sił w tworzeniu materiałów wideo na YouTube. W 2020 roku brakowało tam kreskówek, więc zdecydowałem się je tworzyć. <br></br>
Aby to zrealizować, musiałem od podstaw nauczyć się rysowania postaci, animacji, montażu oraz dodawania efektów specjalnych. Choć mój kanał na YouTube nie odniósł wielkiego sukcesu, wspominam tę przygodę z ogromnym sentymentem. Początkowo planowałem zająć się animacją zawodowo, podobnie jak dziś zajmuję się IT i księgowością, jednak ostatecznie wybrałem inną ścieżkę. Mimo to, gdybym otrzymał zlecenie na stworzenie animacji, z chęcią bym się go podjął.
                   
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="border-l-2 border-primary pl-4">
                  <h3 className="text-xl font-semibold mb-2">Sport</h3>
                  <p className="text-gray-300">
                    Od dziecka byłem aktywny sportowo. Głównie łączyłem grę w piłkę nożną z bieganiem. Piłkę nożną traktowałem hobbystycznie, grając w juniorskich ligach, natomiast w bieganiu radziłem sobie lepiej – patrząc na półkę z medalami w rodzinnym domu, trochę ich się nazbierało. Mieszkając w Warszawie, chodziłem na zajęcia jogi, basen i akrobatykę. Obecnie staram się regularnie trenować na siłowni oraz śledzić wyniki moich ulubionych klubów piłkarskich. Oczywiście nie zapominam o kibicowaniu polskim drużynom w europejskich pucharach!
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="border-l-2 border-primary pl-4">
                  <h3 className="text-xl font-semibold mb-2">Muzyka</h3>
                  <p className="text-gray-300">
                    Głównie polski rap. Razem ze znajomymi nie tylko chodzimy na koncerty i spotkania z artystami, ale też organizujemy wydarzenia związane z improwizowanym rapem (freestyle), gdzie liczy się kreatywność i umiejętność rymowania. Miałem również okazję spróbować swoich sił w miksie i masteringu – zajmowałem się obróbką wokalu w programie Reaper.
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
