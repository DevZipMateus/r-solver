import { motion } from 'framer-motion';
import { Star, Quote, ExternalLink } from 'lucide-react';

const ResolverTestimonials = () => {
  const testimonials = [
    {
      name: 'Felipe Papini',
      location: 'Toledo-PR',
      text: 'Tive uma excelente experiência com a empresa. Desde o primeiro contato, fui muito bem atendido, com agilidade, clareza e profissionalismo. A equipe demonstrou conhecimento e compromisso em todas as etapas.',
      rating: 5,
      service: 'Atendimento Completo'
    },
    {
      name: 'Sabrina Santana',
      location: 'Toledo-PR',
      text: 'Profissional pontual, educado, organizado e muito competente. Explicou cada etapa do trabalho com clareza e realizou tudo com muita segurança e capricho, ao final, deixou tudo limpinho. Recomendo com certeza!',
      rating: 5,
      service: 'Serviço Elétrico'
    },
    {
      name: 'Vera Mascarello',
      location: 'Toledo-PR',
      text: 'Profissional bem preparado, pontual, honesto e rápido. Serviço garantido, super indico!',
      rating: 5,
      service: 'Instalação Elétrica'
    },
    {
      name: 'Ivan Rotta',
      location: 'Toledo-PR',
      text: 'Pessoa de extrema confiança, agilidade no trabalho, com muita qualidade, capricho e eficiência!!',
      rating: 5,
      service: 'Manutenção Elétrica'
    },
    {
      name: 'Elizandra Carla Silva',
      location: 'Toledo-PR',
      text: 'Um ótimo profissional, serviço capricho, tanto para residencial como para o comércio e indústria',
      rating: 5,
      service: 'Elétrica Predial'
    },
    {
      name: 'Danielly Correa',
      location: 'Toledo-PR',
      text: 'Fui muito bem atendida desde o primeiro contato, a equipe é atenciosa e demonstra conhecimento e agilidade!',
      rating: 5,
      service: 'Atendimento Técnico'
    }
  ];

  return (
    <section id="depoimentos" className="py-12 sm:py-16 lg:py-20" style={{ backgroundColor: '#021b47' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
            O que nossos <span className="text-orange-500">clientes</span> dizem
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto px-4">
            Depoimentos reais de clientes satisfeitos com nossos serviços
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 relative border border-white/20"
            >
              <Quote className="h-6 w-6 sm:h-8 sm:w-8 text-orange-300 mb-3 sm:mb-4" />
              
              <div className="flex mb-3 sm:mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 text-orange-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-300 mb-3 sm:mb-4 italic text-sm sm:text-base leading-relaxed">"{testimonial.text}"</p>
              
              <div className="border-t border-white/20 pt-3 sm:pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-white text-sm sm:text-base">{testimonial.name}</h4>
                    <p className="text-xs sm:text-sm text-gray-400">{testimonial.location}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-orange-400 font-medium">{testimonial.service}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-8 sm:mt-12 space-y-4"
        >
          <button
            onClick={() => window.open('https://www.google.com/maps/place//data=!4m3!3m2!1s0x4a72544e44400c37:0xbe3e5cf6b164cfaa!12e1?source=g.page.m._&laa=merchant-review-solicitation', '_blank')}
            className="bg-white/10 hover:bg-white/20 text-white border border-white/30 hover:border-white/50 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 text-sm sm:text-base inline-flex items-center gap-2 mb-4"
          >
            Veja mais depoimentos aqui
            <ExternalLink className="h-4 w-4" />
          </button>
          
          <div>
            <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
              Quer fazer parte dos nossos clientes satisfeitos?
            </p>
            <button
              onClick={() => window.open('https://wa.me/5545999187722?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento.', '_blank')}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 text-sm sm:text-base"
            >
              Solicite Seu Orçamento
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResolverTestimonials;
