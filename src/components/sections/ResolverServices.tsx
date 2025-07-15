
import { motion } from 'framer-motion';
import { 
  Zap, 
  Shield, 
  Camera, 
  Lightbulb, 
  Wifi, 
  ShoppingCart, 
  AlertTriangle,
  Monitor
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const ResolverServices = () => {
  const handleWhatsAppClick = (service: string) => {
    window.open(`https://wa.me/5545999187722?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20${service}.`, '_blank');
  };

  const services = [
    {
      icon: Zap,
      title: 'Instalação Elétrica Residencial e Predial',
      description: 'Instalações elétricas completas em casas, apartamentos e empresas de acordo com projeto técnico',
      features: ['Projeto elétrico', 'Instalação conforme normas', 'Certificação e garantia']
    },
    {
      icon: Lightbulb,
      title: 'Instalação de Iluminação LED',
      description: 'Modernização do seu sistema de iluminação com tecnologia LED eficiente',
      features: ['Economia de energia', 'Maior durabilidade', 'Iluminação personalizada']
    },
    {
      icon: AlertTriangle,
      title: 'Instalação de Alarmes',
      description: 'Sistemas de alarme residencial e comercial para máxima segurança',
      features: ['Sensores de movimento', 'Central de monitoramento', 'App móvel']
    },
    {
      icon: Camera,
      title: 'Instalação de Câmeras',
      description: 'Sistemas de CFTV com câmeras de alta resolução e monitoramento remoto',
      features: ['Câmeras HD/4K', 'Visão noturna', 'Acesso remoto']
    },
    {
      icon: Wifi,
      title: 'Instalação de Rede',
      description: 'Cabeamento estruturado e redes de dados para residências e empresas',
      features: ['Cabeamento Cat6', 'Pontos de rede', 'WiFi profissional']
    },
    {
      icon: ShoppingCart,
      title: 'Venda de Materiais Elétricos',
      description: 'Fornecimento de materiais elétricos de qualidade com preços competitivos',
      features: ['Marcas reconhecidas', 'Garantia de fábrica', 'Entrega rápida']
    },
    {
      icon: Shield,
      title: 'Venda de Alarmes',
      description: 'Comercialização de sistemas de alarme com instalação incluída',
      features: ['Equipamentos modernos', 'Configuração personalizada', 'Suporte técnico']
    },
    {
      icon: Monitor,
      title: 'Sistemas de CFTV Completos',
      description: 'Venda e instalação de centrais e sistemas completos de CFTV',
      features: ['Centrais profissionais', 'Armazenamento local/nuvem', 'Integração total']
    }
  ];

  return (
    <section id="servicos" className="py-12 sm:py-16 lg:py-20" style={{ backgroundColor: '#021b47' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
            Nossos <span className="text-orange-500">Serviços</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto px-4">
            Soluções elétricas completas e inteligentes para residências e empresas
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
            >
              <div className="flex-grow">
                <service.icon className="h-8 w-8 sm:h-10 sm:w-10 text-orange-500 mb-3 sm:mb-4" />
                <h3 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3 leading-tight">{service.title}</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm leading-relaxed">{service.description}</p>
                
                <ul className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="text-gray-400 text-xs sm:text-sm flex items-center">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <Button
                onClick={() => handleWhatsAppClick(service.title)}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white text-xs sm:text-sm py-2 sm:py-3 mt-auto"
              >
                Solicitar Orçamento
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-8 sm:mt-12"
        >
          <Button
            onClick={() => handleWhatsAppClick('todos os serviços')}
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-lg"
          >
            Fale Conosco pelo WhatsApp
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ResolverServices;
