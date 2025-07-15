
import { Instagram, Phone, Mail, MapPin } from 'lucide-react';

const ResolverFooter = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <img 
              src="/lovable-uploads/ce7bfa4b-2cf4-4b26-85c5-6cc48b2270b7.png" 
              alt="Resolver - Soluções Elétricas Inteligentes" 
              className="h-12 w-auto mb-4"
            />
            <p className="text-gray-400 mb-4 max-w-md">
              Especialistas em soluções elétricas inteligentes, oferecendo serviços de qualidade 
              em instalações residenciais e prediais, sistemas de segurança e automação.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/eletricaresolver"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 transition-colors"
                aria-label="Instagram da Resolver"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Instalação Elétrica</li>
              <li>Iluminação LED</li>
              <li>Sistemas de Segurança</li>
              <li>CFTV e Alarmes</li>
              <li>Cabeamento de Rede</li>
              <li>Materiais Elétricos</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1 text-orange-500" />
                <span className="text-sm">
                  Rua Almerico Angelo Sartori, 649<br />
                  São Francisco, Toledo-PR
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-orange-500" />
                <a href="tel:+5545999187722" className="hover:text-orange-500 transition-colors">
                  (45) 99918-7722
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-orange-500" />
                <a href="mailto:rsolver2023@gmail.com" className="hover:text-orange-500 transition-colors">
                  rsolver2023@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Resolver - Soluções Elétricas Inteligentes. Todos os direitos reservados.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            CNPJ: XX.XXX.XXX/0001-XX | Toledo-PR
          </p>
        </div>
      </div>
    </footer>
  );
};

export default ResolverFooter;
