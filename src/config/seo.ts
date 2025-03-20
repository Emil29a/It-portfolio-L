export const seoConfig = {
  home: {
    title: "Emil Kwieciński | Skuteczne Rozwiązania IT",
    description: "Oferuję usługi IT, od automatyzacji procesów biznesowych po tworzenie stron internetowych. Moje rozwiązania pozwolą Ci zredukować koszty i zaoszczędzić czas. Sprawdź moje portfolio i skontaktuj się ze mną.",
    keywords: "IT, automatyzacja, analiza danych, bazy danych, wsparcie techniczne, specjalista IT, portfolio, Emil Kwieciński"
  },
  about: {
    title: "O mnie | Emil Kwieciński - Usługi IT",
    description: "Poznaj moje doświadczenie i kwalifikacje. Jestem pasjonatem technologii IT i finansów, łączącym wiedzę z obu dziedzin w celu tworzenia efektywnych rozwiązań biznesowych. Sprawdź moje portfolio",
    keywords: "Emil Kwieciński, doświadczenie IT, kwalifikacje, portfolio, specjalista IT, automatyzacja, analiza danych"
  },
  services: {
    title: "Usługi | Emil Kwieciński - Usługi IT",
    description: "Oferuję szeroki zakres usług IT: automatyzacja procesów biznesowych, analiza danych, bazy danych, systemy powiadomień, wsparcie techniczne i rozwiązania cyfrowe. Sprawdź szczegóły.",
    keywords: "usługi IT, automatyzacja, analiza danych, bazy danych, powiadomienia, wsparcie techniczne, rozwiązania cyfrowe, Emil Kwieciński"
  },
  contact: {
    title: "Kontakt | Emil Kwieciński - Usługi IT",
    description: "Skontaktuj się ze mną, aby omówić Twoje potrzeby IT. Oferuję profesjonalne doradztwo i kompleksowe rozwiązania technologiczne dla Twojej firmy.",
    keywords: "kontakt, Emil Kwieciński, specjalista IT, doradztwo IT, rozwiązania technologiczne"
  },
  serviceDetails: (serviceTitle: string) => ({
    title: `${serviceTitle} | Emil Kwieciński - Usługi IT`,
    description: `Profesjonalne usługi w zakresie ${serviceTitle.toLowerCase()}. Oferuję kompleksowe rozwiązania IT, automatyzację procesów i wsparcie techniczne. Sprawdź szczegóły oferty.`,
    keywords: `${serviceTitle.toLowerCase()}, IT, automatyzacja, analiza danych, bazy danych, powiadomienia, wsparcie techniczne, Emil Kwieciński`
  })
}; 