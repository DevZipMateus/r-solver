
import { motion } from 'framer-motion';
import { Eye, Download } from 'lucide-react';

const ResolverGallery = () => {
  const galleryImages = [
    '/lovable-uploads/F818661FF8CFE30165DF34A7648C321F.jpeg',
    '/lovable-uploads/F086900BFCEBC12F7618CB5F0DAB7E61.jpeg',
    '/lovable-uploads/E41C5AF8FC5F37078E2B626FF147FC7F.jpeg',
    '/lovable-uploads/D99967FA723F2B017C031D14A75115F0.jpeg',
    '/lovable-uploads/D892975ECD43A12CB969A47BEC1E1040.jpeg',
    '/lovable-uploads/CE98BCA40A9B4F14FFAFCCA37F4189FB.jpeg',
    '/lovable-uploads/CD2F6E1B68C9C7F03AA35558D5CB3FCE.jpeg',
    '/lovable-uploads/B90B76F71111DFB4DD147B785CC9A431.jpeg',
    '/lovable-uploads/89783CA20A0402AC83AA627A1DD8B744.jpeg',
    '/lovable-uploads/82265DD1E84703CF2CB97B3F0851BA94.jpeg',
    '/lovable-uploads/5F1DCB4E1A627EEA506A316183B455B3.jpeg',
    '/lovable-uploads/4D93EF68ECC2BE9153EA39B596FF2246.jpeg',
    '/lovable-uploads/28BE16FF03DA05FF599889DEEC168983.jpeg',
    '/lovable-uploads/1FF6EB8893814B0B20D0CCABC7121604.jpeg',
    '/lovable-uploads/1F6F502BD2E5B1654BC6D30C8C62FBF7.jpeg',
    '/lovable-uploads/0AD0EC5AA382C80DE34BC98B0ED0E96B.jpeg',
    '/lovable-uploads/019447C4AAF9369CCA2972A86B66BC66.jpeg'
  ];

  const handleImageClick = (imageSrc: string) => {
    window.open(imageSrc, '_blank');
  };

  return (
    <section id="galeria" className="py-20" style={{ backgroundColor: '#021b47' }}>
      <div className="section-container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Nossa <span className="text-green-400">Galeria</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Confira alguns dos nossos trabalhos recentes em instalações elétricas, 
            sistemas de segurança e automação residencial
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              className="group relative aspect-square overflow-hidden rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 cursor-pointer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              onClick={() => handleImageClick(image)}
            >
              <img 
                src={image} 
                alt={`Projeto ${index + 1} - Resolver Elétrica`}
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                loading="lazy"
              />
              
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                <div className="text-center">
                  <Eye className="h-8 w-8 text-white mx-auto mb-2" />
                  <span className="text-white font-semibold text-sm">Ver Imagem</span>
                </div>
              </div>

              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(image, '_blank');
                  }}
                  className="p-2 bg-green-500 hover:bg-green-600 text-white rounded-full transition-colors duration-300"
                >
                  <Download className="h-4 w-4" />
                </button>
              </div>

              <div className="absolute bottom-2 left-2 right-2">
                <div className="bg-black/70 backdrop-blur-sm rounded px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-xs font-medium">
                    Projeto #{index + 1}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-slate-300 mb-6 text-lg">
            Quer ver seu próximo projeto aqui?
          </p>
          <button
            onClick={() => window.open('https://wa.me/5545999187722?text=Olá!%20Vi%20a%20galeria%20de%20projetos%20e%20gostaria%20de%20solicitar%20um%20orçamento.', '_blank')}
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-green-500/25"
          >
            Solicitar Orçamento
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ResolverGallery;
