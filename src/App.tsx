import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "@/pages/Index";
import About from "@/pages/About";
import Services from "@/pages/Services";
import ServiceDetails from "@/pages/ServiceDetails";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/o-mnie" element={<About />} />
          <Route path="/uslugi" element={<Services />} />
          <Route path="/uslugi/:id" element={<ServiceDetails />} />
          <Route path="/kontakt" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;