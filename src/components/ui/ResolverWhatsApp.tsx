
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const ResolverWhatsApp = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5545999187722?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento.', '_blank');
  };

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50"
    >
      <motion.button
        onClick={handleWhatsAppClick}
        className="bg-green-500 hover:bg-green-600 text-white p-3 sm:p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 group relative"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Contato via WhatsApp"
      >
        {/* Pulse ring */}
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20"></div>
        
        {/* Icon */}
        <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6 relative z-10" />
        
        {/* Tooltip */}
        <div className="absolute right-full mr-2 sm:mr-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-2 sm:px-3 py-1 sm:py-2 rounded-lg text-xs sm:text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Fale conosco!
          <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
        </div>
      </motion.button>
    </motion.div>
  );
};

export default ResolverWhatsApp;
