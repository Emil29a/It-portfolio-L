import { toast } from "sonner";

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export const sendContactForm = async (formData: ContactFormData): Promise<boolean> => {
  try {
    // W przyszłości możesz tutaj podłączyć prawdziwe API
    // Przykład implementacji z API:
    // const response = await fetch('https://your-api.com/contact', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(formData),
    // });
    // return response.ok;

    // Symulacja wysyłania formularza (opóźnienie)
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Dla testów zawsze zwracamy sukces
    console.log('Wysłano formularz:', formData);
    return true;
    
    // W wersji produkcyjnej możesz dodać obsługę błędów:
    // if (response.ok) {
    //   return true;
    // } else {
    //   const errorData = await response.json();
    //   console.error('Błąd wysyłania formularza:', errorData);
    //   return false;
    // }
  } catch (error) {
    console.error('Błąd wysyłania formularza:', error);
    return false;
  }
}; 