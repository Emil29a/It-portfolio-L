import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { FileText, Bell } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Wiadomość wysłana",
      description: "Dziękujemy za kontakt. Odpowiemy najszybciej jak to możliwe.",
    });
  };

  return (
    <div className="min-h-screen bg-dark text-white">
      <Navbar />
      <div className="container mx-auto px-4 pt-24">
        <h1 className="text-4xl font-bold text-center mb-12 animate-fade-up">Kontakt</h1>
        
        <div className="max-w-2xl mx-auto">
          <div className="bg-dark-lighter p-8 rounded-lg animate-fade-up" style={{ animationDelay: "200ms" }}>
            <form onSubmit={handleSubmit} className="space-y-6">
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
      </div>
    </div>
  );
};

export default Contact;