
import { motion } from 'framer-motion';
import { Zap, Shield, Lightbulb, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { usePerformance } from '@/hooks/usePerformance';
import { useEffect, useRef } from 'react';

const ResolverHero = () => {
  const { reduceAnimations } = usePerformance();
  const vantaRef = useRef<HTMLElement>(null);
  const vantaEffect = useRef<any>(null);
  
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5545999187722?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20Resolver.', '_blank');
  };

  useEffect(() => {
    if (!reduceAnimations && vantaRef.current && (window as any).VANTA) {
      vantaEffect.current = (window as any).VANTA.NET({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0xFF6B35,
        backgroundColor: 0x0F0F0F,
        points: 7.00,
        maxDistance: 23.00,
        spacing: 18.00
      });
    }

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
      }
    };
  }, [reduceAnimations]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: reduceAnimations ? 0 : 0.05,
        delayChildren: reduceAnimations ? 0 : 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: reduceAnimations ? 0 : 0.4 }
    }
  };

  return (
    <section 
      id="inicio"
      ref={vantaRef} 
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 pt-0" 
      style={{ backgroundColor: '#0F0F0F' }}
    >
      <motion.div 
        className="relative z-10 w-full max-w-7xl mx-auto text-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div className="mb-4 sm:mb-6 md:mb-8" variants={itemVariants}>
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-orange-400/30 bg-orange-400/10 mb-4 sm:mb-6">
            <Zap className="h-3 w-3 sm:h-4 sm:w-4 text-orange-400" />
            <span className="text-orange-400 text-xs sm:text-sm font-medium">Soluções Elétricas Inteligentes</span>
          </div>
        </motion.div>

        <motion.h1 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-white mb-3 sm:mb-4 md:mb-6 leading-tight" 
          variants={itemVariants}
        >
          <span className="text-orange-400">Resolver</span><br className="hidden sm:block" />
          <span className="sm:hidden"> </span>Conecta <span className="text-gray-300">Inteligência</span>
        </motion.h1>

        <motion.p 
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto mb-4 sm:mb-6 md:mb-8 bg-black/30 rounded-lg p-3 sm:p-4 backdrop-blur-sm"
          variants={itemVariants}
        >
          Especialistas em <strong>instalações elétricas</strong>, <strong>sistemas de segurança</strong> e <strong>automação residencial</strong> em Toledo-PR desde 2023
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-6 sm:mb-8 md:mb-12" 
          variants={itemVariants}
        >
          <Button 
            onClick={handleWhatsAppClick} 
            className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-6 text-sm sm:text-base md:text-lg font-semibold rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl hover:scale-105"
          >
            <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="text-sm sm:text-base md:text-lg">Solicite seu Orçamento</span>
          </Button>
          
          <Button 
            variant="outline" 
            className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-black px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-6 text-sm sm:text-base md:text-lg font-semibold rounded-lg transition-all duration-300" 
            onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Conheça Nossos Serviços
          </Button>
        </motion.div>

        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-6 max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl mx-auto" 
          variants={itemVariants}
        >
          {[
            { icon: Zap, title: 'Elétrica', desc: 'Instalações completas' },
            { icon: Shield, title: 'Segurança', desc: 'CFTV e alarmes' },
            { icon: Lightbulb, title: 'LED', desc: 'Iluminação eficiente' },
            { icon: Phone, title: 'Suporte', desc: 'Atendimento ágil' }
          ].map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={index} className="text-center p-2 sm:p-3 md:p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
                <IconComponent className="h-4 w-4 sm:h-6 sm:w-6 md:h-8 md:w-8 text-orange-400 mx-auto mb-1 sm:mb-2" />
                <h3 className="text-white font-semibold text-xs sm:text-sm md:text-base">{item.title}</h3>
                <p className="text-gray-400 text-xs sm:text-sm hidden sm:block">{item.desc}</p>
              </div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ResolverHero;
