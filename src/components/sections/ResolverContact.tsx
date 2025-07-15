
import { motion } from 'framer-motion';
import { Phone, Mail, MessageCircle, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ResolverContact = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5545999187722?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20para%20serviços%20elétricos.', '_blank');
  };

  const handleEmailClick = () => {
    window.open('mailto:rsolver2023@gmail.com?subject=Solicitação de Orçamento&body=Olá! Gostaria de solicitar um orçamento para serviços elétricos.', '_blank');
  };

  const handlePhoneClick = () => {
    window.open('tel:+5545999187722', '_blank');
  };

  return (
    <section id="contato" className="py-16 lg:py-20" style={{ backgroundColor: '#021b47' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Entre em <span className="text-orange-500">Contato</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Pronto para transformar seu projeto elétrico? Fale conosco agora mesmo!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-green-500/20 to-green-600/20 backdrop-blur-sm rounded-xl p-6 text-center border border-green-500/30 hover:bg-green-500/30 transition-all duration-300"
          >
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">WhatsApp</h3>
            <p className="text-gray-300 text-sm mb-4">Atendimento rápido e direto</p>
            <Button 
              onClick={handleWhatsAppClick}
              className="w-full bg-green-500 hover:bg-green-600 text-white"
            >
              Conversar Agora
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-orange-500/20 to-orange-600/20 backdrop-blur-sm rounded-xl p-6 text-center border border-orange-500/30 hover:bg-orange-500/30 transition-all duration-300"
          >
            <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Telefone</h3>
            <p className="text-gray-300 text-sm mb-4">Ligue para nós agora</p>
            <Button 
              onClick={handlePhoneClick}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white"
            >
              (45) 99918-7722
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-6 text-center border border-blue-500/30 hover:bg-blue-500/30 transition-all duration-300"
          >
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
            <p className="text-gray-300 text-sm mb-4">Envie sua solicitação</p>
            <Button 
              onClick={handleEmailClick}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white"
            >
              Enviar Email
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 lg:p-12 text-center text-white"
        >
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            Solicite seu Orçamento Gratuito
          </h3>
          <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
            Nossa equipe está pronta para atender suas necessidades elétricas com rapidez e qualidade. 
            Entre em contato e receba um orçamento personalizado sem compromisso.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleWhatsAppClick}
              className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-4 text-lg font-semibold"
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              WhatsApp
            </Button>
            <Button 
              onClick={handlePhoneClick}
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 text-lg font-semibold"
            >
              <Phone className="h-5 w-5 mr-2" />
              Ligar Agora
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResolverContact;
