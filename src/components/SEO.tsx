import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  keywords: string;
}

const SEO = ({ title, description, keywords }: SEOProps) => {
  const siteUrl = "https://emilkwiecinski.pl";
  const imageUrl = `${siteUrl}/images/profile.png`;

  const schemaOrg = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Emil Kwieciński",
    "url": siteUrl,
    "image": imageUrl,
    "sameAs": [
      "https://www.linkedin.com/in/emil-kwiecinski/"
    ],
    "jobTitle": "Usługi IT",
    "worksFor": {
      "@type": "Organization",
      "name": "Emil Kwieciński - Usługi IT"
    },
    "description": "Oferuję usługi IT, od automatyzacji procesów biznesowych po tworzenie stron internetowych. Moje rozwiązania pozwolą Ci zredukować koszty i zaoszczędzić czas.",
    "knowsAbout": [
      "Automatyzacja procesów biznesowych",
      "Tworzenie stron internetowych",
      "Bazy danych",
      "Systemy powiadomień",
      "Wsparcie techniczne",
      "Rozwiązania cyfrowe"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "PL"
    }
  };

  return (
    <Helmet>
      {/* Podstawowe meta tagi */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Emil Kwieciński" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="Polish" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content="Emil Kwieciński - Usługi IT" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={siteUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      
      {/* Dodatkowe meta tagi */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#000000" />
      <link rel="canonical" href={siteUrl} />
      
      {/* Preconnect do zewnętrznych zasobów */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

      {/* Google Analytics (do odkomentowania w przyszłości) */}
      {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script> */}
      
      {/* Schema.org */}
      <script type="application/ld+json">
        {JSON.stringify(schemaOrg)}
      </script>
    </Helmet>
  );
};

export default SEO; 