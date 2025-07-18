import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

const ResolverLocation = () => {
  return <section id="localizacao" className="py-16 lg:py-20" style={{
    backgroundColor: '#021b47'
  }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} viewport={{
        once: true
      }} className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Nossa <span className="text-orange-500">Localização</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Visite-nos ou entre em contato para agendar uma visita técnica
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Map */}
          <motion.div initial={{
          opacity: 0,
          x: -30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }} className="relative">
            <div className="w-full h-80 lg:h-96 rounded-xl overflow-hidden shadow-lg border border-white/20">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.123456789!2d-53.742839!3d-24.713889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f3d0a0a0a0a0a0%3A0x0!2sR.%20Almerico%20%C3%82ngelo%20Sartori%2C%20649%20-%20S%C3%A3o%20Francisco%2C%20Toledo%20-%20PR%2C%2085915-215!5e0!3m2!1spt-BR!2sbr!4v1234567890" width="100%" height="100%" style={{
              border: 0
            }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Localização da Resolver - Toledo-PR"></iframe>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div initial={{
          opacity: 0,
          x: 30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }} className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4">Informações de Contato</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-orange-500 mt-1" />
                  <div>
                    <h4 className="font-medium text-white">Endereço</h4>
                    <p className="text-gray-300">R. Almerico Ângelo Sartori, 649</p>
                    <p className="text-gray-300">São Francisco, Toledo - PR</p>
                    <p className="text-gray-300">CEP: 85915-215</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-orange-500 mt-1" />
                  <div>
                    <h4 className="font-medium text-white">Telefone</h4>
                    <a href="tel:+5545999187722" className="text-orange-400 hover:text-orange-300">
                      (45) 99918-7722
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-orange-500 mt-1" />
                  <div>
                    <h4 className="font-medium text-white">Email</h4>
                    <a href="mailto:rsolver2023@gmail.com" className="text-orange-400 hover:text-orange-300">
                      rsolver2023@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-orange-500 mt-1" />
                  <div>
                    <h4 className="font-medium text-white">Horário de Atendimento</h4>
                    <p className="text-gray-300">Segunda a Sexta: 8h às 18h</p>
                    
                    <p className="text-gray-300">Emergências: 24h</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-6 text-white">
              <h3 className="text-xl font-semibold mb-3">Área de Atendimento</h3>
              <p className="text-orange-100 mb-4">
                Atendemos Toledo e região com serviços de qualidade e agilidade.
              </p>
              <ul className="space-y-2 text-orange-100">
                <li>• Toledo - PR</li>
                <li>• Marechal Cândido Rondon</li>
                <li>• Assis Chateaubriand</li>
                <li>• Nova Santa Rosa</li>
                <li>• E região</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};

export default ResolverLocation;
