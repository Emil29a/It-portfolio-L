import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { sendContactForm } from "@/api/contact";
import { toast } from "sonner";

interface ContactFormProps {
  className?: string;
}

export const ContactForm = ({ className = "" }: ContactFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const success = await sendContactForm(formData);
      if (success) {
        setSubmitStatus('success');
        toast.success("Wiadomość została wysłana pomyślnie!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setSubmitStatus('error');
        toast.error("Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie później.");
      }
    } catch (error) {
      setSubmitStatus('error');
      toast.error("Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie później.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className={`space-y-6 ${className}`}>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Imię i nazwisko
              </label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-dark-lighter border-primary/20 focus:border-primary/50 transition-colors"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-dark-lighter border-primary/20 focus:border-primary/50 transition-colors"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-2">
              Telefon (opcjonalnie)
            </label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-dark-lighter border-primary/20 focus:border-primary/50 transition-colors"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Wiadomość
            </label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full min-h-[150px] bg-dark-lighter border-primary/20 focus:border-primary/50 transition-colors"
            />
          </div>
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary hover:bg-primary/90 text-white transition-all duration-300"
        >
          {isSubmitting ? "Wysyłanie..." : "Wyślij wiadomość"}
        </Button>
      </form>

      {submitStatus === 'success' && (
        <div className="p-4 bg-green-500/20 border border-green-500 rounded-md text-center">
          <p className="text-green-300 font-medium">Dziękujemy! Twoja wiadomość została wysłana pomyślnie.</p>
        </div>
      )}
      
      {submitStatus === 'error' && (
        <div className="p-4 bg-red-500/20 border border-red-500 rounded-md text-center">
          <p className="text-red-300 font-medium">Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie później.</p>
        </div>
      )}
    </div>
  );
}; 
