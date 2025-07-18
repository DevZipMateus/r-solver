import { motion } from 'framer-motion';
import { Eye } from 'lucide-react';
import { useEffect, useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

const ResolverGallery = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

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
    '/lovable-uploads/28BE16FF03DA05FF599889DEEC168983.jpeg',
    '/lovable-uploads/1F6F502BD2E5B1654BC6D30C8C62FBF7.jpeg',
    '/lovable-uploads/019447C4AAF9369CCA2972A86B66BC66.jpeg'
  ];

  useEffect(() => {
    if (!api) {
      return;
    }

    // Auto-advance carousel every 3 seconds
    const timer = setInterval(() => {
      api.scrollNext();
    }, 3000);

    // Update current index when carousel changes
    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);

    return () => {
      clearInterval(timer);
      api.off("select", onSelect);
    };
  }, [api]);

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
            Nossa <span className="text-orange-400">Galeria</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Confira alguns dos nossos trabalhos recentes em instalações elétricas, 
            sistemas de segurança e automação residencial
          </p>
        </motion.div>

        <motion.div
          className="relative max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Carousel
            setApi={setApi}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              {galleryImages.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <div
                      className="group relative aspect-square overflow-hidden rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 cursor-pointer"
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

                      <div className="absolute bottom-2 left-2 right-2">
                        <div className="bg-black/70 backdrop-blur-sm rounded px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <span className="text-white text-xs font-medium">
                            Projeto #{index + 1}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 bg-white/10 border-white/20 text-white hover:bg-white/20" />
            <CarouselNext className="right-4 bg-white/10 border-white/20 text-white hover:bg-white/20" />
          </Carousel>

          {/* Indicadores de posição */}
          <div className="flex justify-center space-x-2 mt-6">
            {Array.from({ length: Math.ceil(galleryImages.length / 3) }).map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  Math.floor(current / 3) === index 
                    ? 'bg-orange-400 w-6' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                onClick={() => api?.scrollTo(index * 3)}
              />
            ))}
          </div>
        </motion.div>

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
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-orange-500/25"
          >
            Solicitar Orçamento
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ResolverGallery;
