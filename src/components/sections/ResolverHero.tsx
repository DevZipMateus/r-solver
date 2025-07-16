import { motion } from 'framer-motion';
import { Phone, MessageCircle, Star, Zap, Shield, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useRef } from 'react';
const ResolverHero = () => {
  const vantaRef = useRef<HTMLElement>(null);
  const vantaEffect = useRef<any>(null);
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5545999187722?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento.', '_blank');
  };
  const handlePhoneClick = () => {
    window.location.href = 'tel:+5545999187722';
  };
  useEffect(() => {
    if (vantaRef.current && (window as any).VANTA) {
      vantaEffect.current = (window as any).VANTA.NET({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0xea580c,
        // Orange-600 for network lines
        backgroundColor: 0x000000,
        // Black background
        points: 6.00,
        maxDistance: 25.00,
        spacing: 16.00
      });
    }
    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
      }
    };
  }, []);
  const features = [{
    icon: Zap,
    text: 'Instalações Elétricas'
  }, {
    icon: Shield,
    text: 'Segurança e CFTV'
  }, {
    icon: Award,
    text: 'Qualidade Garantida'
  }];
  return <section ref={vantaRef} id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{
    backgroundColor: '#000000'
  }}>
      {/* Floating Elements - keeping as complement to Vanta effect */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div animate={{
        y: [-20, 20, -20],
        rotate: [0, 10, -10, 0]
      }} transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }} className="absolute top-1/4 left-1/4 w-8 h-8 sm:w-12 sm:h-12 bg-white/20 rounded-full blur-sm" />
        <motion.div animate={{
        y: [20, -20, 20],
        rotate: [0, -10, 10, 0]
      }} transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }} className="absolute top-1/3 right-1/4 w-6 h-6 sm:w-10 sm:h-10 bg-white/15 rounded-full blur-sm" />
        <motion.div animate={{
        y: [-15, 15, -15],
        x: [-10, 10, -10]
      }} transition={{
        duration: 7,
        repeat: Infinity,
        ease: "easeInOut"
      }} className="absolute bottom-1/3 left-1/3 w-4 h-4 sm:w-8 sm:h-8 bg-white/25 rounded-full blur-sm" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8
        }} className="text-center lg:text-left">
            {/* Badge */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.2
          }} className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 mb-4 sm:mb-6 text-xs sm:text-sm font-medium text-orange-800 bg-orange-100 rounded-full">
              <Star className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
              Soluções Elétricas Inteligentes
            </motion.div>

            {/* Main Title */}
            <motion.h1 initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.3
          }} className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Transforme Sua Casa em um 
              <span className="block text-yellow-200">Ambiente Inteligente</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.4
          }} className="text-base sm:text-lg lg:text-xl text-orange-100 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">Especialistas em instalações elétricas, sistemas de segurança, CFTV, alarmes  em Toledo-PR.</motion.p>

            {/* Features */}
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.5
          }} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-6 mb-6 sm:mb-8">
              {features.map((feature, index) => <div key={index} className="flex items-center text-white/90">
                  <feature.icon className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-yellow-200" />
                  <span className="text-sm sm:text-base font-medium">{feature.text}</span>
                </div>)}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.6
          }} className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center lg:justify-start">
              <Button onClick={handleWhatsAppClick} className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg">
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Solicitar Orçamento
              </Button>
              
              <Button onClick={handlePhoneClick} variant="outline" className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-orange-600 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold rounded-lg transition-all duration-300 hover:scale-105">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                (45) 99918-7722
              </Button>
            </motion.div>
          </motion.div>

          {/* Image/Visual */}
          <motion.div initial={{
          opacity: 0,
          x: 50
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8,
          delay: 0.4
        }} className="relative lg:block hidden">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/30 to-orange-400/30 rounded-3xl blur-2xl"></div>
              <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-6 lg:p-8 border border-white/20 shadow-2xl">
                <div className="grid grid-cols-2 gap-4 lg:gap-6">
                  <div className="bg-white/20 rounded-2xl p-4 lg:p-6 text-center">
                    <Zap className="w-8 h-8 lg:w-12 lg:h-12 text-yellow-200 mx-auto mb-3" />
                    <h3 className="text-white font-semibold text-sm lg:text-base">Elétrica</h3>
                    <p className="text-white/80 text-xs lg:text-sm">Instalações</p>
                  </div>
                  <div className="bg-white/20 rounded-2xl p-4 lg:p-6 text-center">
                    <Shield className="w-8 h-8 lg:w-12 lg:h-12 text-yellow-200 mx-auto mb-3" />
                    <h3 className="text-white font-semibold text-sm lg:text-base">Segurança</h3>
                    <p className="text-white/80 text-xs lg:text-sm">CFTV & Alarmes</p>
                  </div>
                  <div className="bg-white/20 rounded-2xl p-4 lg:p-6 text-center">
                    <Award className="w-8 h-8 lg:w-12 lg:h-12 text-yellow-200 mx-auto mb-3" />
                    <h3 className="text-white font-semibold text-sm lg:text-base">Qualidade</h3>
                    <p className="text-white/80 text-xs lg:text-sm">Garantida</p>
                  </div>
                  <div className="bg-white/20 rounded-2xl p-4 lg:p-6 text-center">
                    <Star className="w-8 h-8 lg:w-12 lg:h-12 text-yellow-200 mx-auto mb-3" />
                    <h3 className="text-white font-semibold text-sm lg:text-base">Confiança</h3>
                    <p className="text-white/80 text-xs lg:text-sm">5 Estrelas</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      duration: 1,
      delay: 1
    }} className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2">
        <motion.div animate={{
        y: [0, 10, 0]
      }} transition={{
        duration: 2,
        repeat: Infinity
      }} className="w-1 h-8 sm:h-12 bg-white/60 rounded-full" />
      </motion.div>
    </section>;
};
export default ResolverHero;