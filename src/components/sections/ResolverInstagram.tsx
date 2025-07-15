
import { motion } from 'framer-motion';
import { Instagram, ExternalLink, Eye, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ResolverInstagram = () => {
  const instagramUrl = 'https://www.instagram.com/eletricaresolver';

  const handleInstagramClick = () => {
    window.open(instagramUrl, '_blank');
  };

  const stats = [
    { icon: Eye, label: 'Projetos Visualizados', value: '500+' },
    { icon: Users, label: 'Clientes Satisfeitos', value: '200+' },
    { icon: Instagram, label: 'Posts Inspiradores', value: '100+' }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20" style={{ backgroundColor: '#021b47' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
            Siga nosso <span className="text-orange-500">Instagram</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto px-4">
            Acompanhe nossos projetos em tempo real e inspire-se com nossos trabalhos já realizados
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Conteúdo Principal */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <Instagram className="h-8 w-8 text-orange-500" />
              <span className="text-xl font-semibold text-white">@eletricaresolver</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
              Veja nossos serviços em ação!
            </h3>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6">
              No nosso Instagram você encontra fotos e vídeos dos nossos projetos concluídos, 
              desde instalações elétricas residenciais até sistemas de segurança complexos. 
              Cada post mostra a qualidade e dedicação que colocamos em cada trabalho.
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-center text-gray-300">
                <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                <span className="text-sm sm:text-base">Projetos antes e depois</span>
              </div>
              <div className="flex items-center text-gray-300">
                <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                <span className="text-sm sm:text-base">Dicas técnicas exclusivas</span>
              </div>
              <div className="flex items-center text-gray-300">
                <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                <span className="text-sm sm:text-base">Trabalhos em andamento</span>
              </div>
              <div className="flex items-center text-gray-300">
                <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                <span className="text-sm sm:text-base">Depoimentos de clientes</span>
              </div>
            </div>

            <Button
              onClick={handleInstagramClick}
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 text-sm sm:text-base flex items-center gap-2"
            >
              <Instagram className="h-5 w-5" />
              Seguir no Instagram
              <ExternalLink className="h-4 w-4" />
            </Button>
          </motion.div>

          {/* Estatísticas */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-4 sm:gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20 text-center hover:bg-white/20 transition-all duration-300"
              >
                <stat.icon className="h-8 w-8 sm:h-10 sm:w-10 text-orange-500 mx-auto mb-3" />
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-gray-300 text-sm sm:text-base">{stat.label}</div>
              </motion.div>
            ))}

            {/* Call to Action Adicional */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-orange-500/20 to-orange-600/20 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-orange-500/30 text-center"
            >
              <h4 className="text-lg font-semibold text-white mb-2">
                📸 Seu projeto pode ser o próximo!
              </h4>
              <p className="text-gray-300 text-sm mb-4">
                Compartilhamos todos os nossos trabalhos para inspirar e mostrar nossa dedicação
              </p>
              <button
                onClick={handleInstagramClick}
                className="text-orange-400 hover:text-orange-300 font-medium text-sm flex items-center justify-center gap-1 mx-auto transition-colors"
              >
                Ver galeria completa
                <ExternalLink className="h-3 w-3" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ResolverInstagram;
