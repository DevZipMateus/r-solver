
import { motion } from 'framer-motion';
import { Calendar, Users, Trophy, Zap } from 'lucide-react';

const ResolverAbout = () => {
  const stats = [
    { icon: Calendar, label: 'Fundada em', value: '2023' },
    { icon: Users, label: 'Clientes Atendidos', value: '200+' },
    { icon: Trophy, label: 'Projetos Realizados', value: '150+' },
    { icon: Zap, label: 'Serviços Oferecidos', value: '8' }
  ];

  return (
    <section id="sobre" className="py-16 lg:py-20" style={{ backgroundColor: '#021b47' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Sobre a <span className="text-orange-500">Resolver</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Nossa história de crescimento e dedicação aos melhores serviços elétricos
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Nossa Jornada</h3>
            <div className="space-y-4 text-gray-300">
              <p>
                A <strong className="text-orange-500">Resolver</strong> foi fundada em maio de 2023 com a ideia inicial de prestar pequenos serviços elétricos no período posterior ao expediente comercial. O que começou como um projeto para aumentar a renda, rapidamente se transformou em uma paixão pelo atendimento de qualidade.
              </p>
              <p>
                No início, atendíamos apenas amigos próximos e parentes com pequenos reparos nas proximidades. Com o passar do tempo, a demanda cresceu exponencialmente, tornando-se humanamente impossível conciliar o trabalho comercial tradicional com o atendimento aos nossos clientes.
              </p>
              <p>
                Em novembro de 2024, decidimos nos dedicar integralmente ao negócio, oferecendo um atendimento completo em todos os horários disponíveis, focando em elétrica predial e residencial, sistemas de segurança e automação.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Nosso Diferencial</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                <span className="text-gray-300">Sistema de agendamento de horários</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                <span className="text-gray-300">Análise completa de projetos</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                <span className="text-gray-300">Sistema interno para orçamentos e vendas</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                <span className="text-gray-300">Emissão de notas fiscais</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                <span className="text-gray-300">Múltiplas formas de pagamento</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <stat.icon className="h-8 w-8 text-orange-500 mx-auto mb-3" />
              <div className="text-2xl lg:text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-300">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ResolverAbout;
