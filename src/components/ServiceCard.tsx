import { ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  delay: number;
}

const ServiceCard = ({ icon, title, description, delay }: ServiceCardProps) => {
  return (
    <div 
      className="bg-dark-lighter p-6 rounded-lg transition-all duration-300 animate-fade-up transform hover:scale-110 hover:shadow-2xl"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="text-primary mb-4 w-12 h-12 flex items-center justify-center transform hover:scale-125 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-white transition-transform duration-300">{title}</h3>
      <p className="text-gray-400 transition-transform duration-300">{description}</p>
    </div>
  );
};

export default ServiceCard;