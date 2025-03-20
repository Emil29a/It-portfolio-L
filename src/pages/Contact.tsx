import Navbar from "@/components/Navbar";
import { ContactForm } from "@/components/ContactForm";
import { Mail, Phone } from "lucide-react";
import SEO from "@/components/SEO";
import { seoConfig } from "@/config/seo";

const Contact = () => {
  return (
    <div className="min-h-screen bg-dark text-white">
      <SEO 
        title={seoConfig.contact.title}
        description={seoConfig.contact.description}
        keywords={seoConfig.contact.keywords}
      />
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">Kontakt</h1>
          
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Formularz kontaktowy</h2>
              <ContactForm />
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-semibold mb-4">Dane kontaktowe</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-center gap-3 bg-dark-lighter p-4 rounded-lg border border-primary/10 hover:border-primary/30 transition-colors">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">E-mail</p>
                    <a href="mailto:Emil.Kwiecinski410@gmail.com" className="hover:text-primary transition-colors">
                      Emil.Kwiecinski410@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-dark-lighter p-4 rounded-lg border border-primary/10 hover:border-primary/30 transition-colors">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
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
      </div>
    </div>
  );
};

export default Contact;