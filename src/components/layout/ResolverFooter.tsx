
import { Instagram, Phone, Mail, MapPin } from 'lucide-react';

const ResolverFooter = () => {
  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background gradient for better visual appeal */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="relative inline-block">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 shadow-2xl border border-white/20 mb-6">
                <img 
                  src="/lovable-uploads/661a5537-04e5-47cc-8fff-c12fad4d94f2.png" 
                  alt="Resolver - Soluções Elétricas Inteligentes" 
                  className="h-14 w-auto drop-shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400/30 to-orange-600/30 rounded-xl blur-lg -z-10"></div>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md leading-relaxed">
              Especialistas em soluções elétricas inteligentes, oferecendo serviços de qualidade 
              em instalações residenciais e prediais, sistemas de segurança e automação.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/eletricaresolver"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 transition-all duration-300 transform hover:scale-110 bg-white/5 p-2 rounded-lg hover:bg-orange-500/20"
                aria-label="Instagram da Resolver"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-400">Serviços</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white transition-colors cursor-pointer">Instalação Elétrica</li>
              <li className="hover:text-white transition-colors cursor-pointer">Iluminação LED</li>
              <li className="hover:text-white transition-colors cursor-pointer">Sistemas de Segurança</li>
              <li className="hover:text-white transition-colors cursor-pointer">CFTV e Alarmes</li>
              <li className="hover:text-white transition-colors cursor-pointer">Cabeamento de Rede</li>
              <li className="hover:text-white transition-colors cursor-pointer">Materiais Elétricos</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-400">Contato</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-start space-x-3 hover:text-white transition-colors group">
                <MapPin className="h-4 w-4 mt-1 text-orange-500 group-hover:scale-110 transition-transform" />
                <span className="text-sm">
                  Rua Almerico Angelo Sartori, 649<br />
                  São Francisco, Toledo-PR
                </span>
              </div>
              <div className="flex items-center space-x-3 hover:text-white transition-colors group">
                <Phone className="h-4 w-4 text-orange-500 group-hover:scale-110 transition-transform" />
                <a href="tel:+5545999187722" className="hover:text-orange-500 transition-colors">
                  (45) 99918-7722
                </a>
              </div>
              <div className="flex items-center space-x-3 hover:text-white transition-colors group">
                <Mail className="h-4 w-4 text-orange-500 group-hover:scale-110 transition-transform" />
                <a href="mailto:rsolver2023@gmail.com" className="hover:text-orange-500 transition-colors">
                  rsolver2023@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Resolver - Soluções Elétricas Inteligentes. Todos os direitos reservados.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            MEI: 56.219.926/0001-06 | Toledo-PR
          </p>
        </div>
      </div>
    </footer>
  );
};

export default ResolverFooter;
