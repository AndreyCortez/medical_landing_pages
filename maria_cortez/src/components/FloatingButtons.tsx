import { MessageCircle, Instagram } from "lucide-react";
import { contactData } from "@/data/contact";
import ReactGA from 'react-ga4';

const FloatingButtons = () => {
  const handleWhatsAppClick = () => {
    ReactGA.event({
      category: "Floating Action Button",
      action: "Click",
      label: "WhatsApp"
    });
  };

  const handleInstagramClick = () => {
    ReactGA.event({
      category: "Floating Action Button",
      action: "Click",
      label: "Instagram"
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      <a 
        href={contactData.socialMedia.whatsapp} 
        target="_blank" 
        rel="noopener noreferrer"
        onClick={handleWhatsAppClick} 
        className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        aria-label="WhatsApp"
      >
        <MessageCircle className="h-6 w-6 text-white" />
      </a>
      
      <a 
        href={contactData.socialMedia.instagram} 
        target="_blank" 
        rel="noopener noreferrer"
        onClick={handleInstagramClick} 
        className="w-14 h-14 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 hover:from-purple-600 hover:via-pink-600 hover:to-orange-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 "
        aria-label="Instagram"
      >
        <Instagram className="h-6 w-6 text-white" />
      </a>
    </div>
  );
};

export default FloatingButtons;