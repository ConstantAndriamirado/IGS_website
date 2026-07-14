import { motion } from 'motion/react';
import { Ship, Plane, Truck, FileCheck, Package, Shield, Globe, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import { Breadcrumb } from '../components/Breadcrumb';
import { useLanguage } from '../context/LanguageContext';

export default function Services() {
  const { language } = useLanguage();
  const isFrench = language === 'fr';

  const services = [
    {
      id: 'maritime',
      icon: Ship,
      title: isFrench ? 'Transit Maritime' : 'Maritime Transit',
      description: isFrench
        ? 'Organisation du transport maritime international, coordination portuaire et accompagnement administratif pour vos cargaisons.'
        : 'Organisation of international sea transport, port coordination and administrative support for your cargo.',
      image: 'https://images.unsplash.com/photo-1604506522146-316c8bedd874'
    },
    {
      id: 'aerien',
      icon: Plane,
      title: isFrench ? 'Transit Aérien' : 'Air Transit',
      description: isFrench
        ? 'Solutions aériennes rapides pour les envois urgents, sensibles ou à forte valeur ajoutée.'
        : 'Fast air solutions for urgent, sensitive or high-value shipments.',
      image: 'https://images.unsplash.com/photo-1720428112577-528107b9c140?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJnbyUyMGFpcnBsYW5lJTIwZnJlaWdodHxlbnwxfHx8fDE3NzExOTg4MjV8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 'routier',
      icon: Truck,
      title: isFrench ? 'Transport Routier' : 'Road Transport',
      description: isFrench
        ? 'Transport routier fiable pour les liaisons nationales, régionales et transfrontalières avec suivi opérationnel.'
        : 'Reliable road transport for national, regional and cross-border links with operational tracking.',
      image: 'https://images.unsplash.com/photo-1618582948377-cd7eb0e8cb14'
    },
    {
      id: 'dedouanement',
      icon: FileCheck,
      title: isFrench ? 'Dédouanement Import & Export' : 'Import & Export Customs Clearance',
      description: isFrench
        ? 'Préparation documentaire, déclaration en douane et accompagnement réglementaire pour des opérations conformes et fluides.'
        : 'Document preparation, customs declaration and regulatory support for compliant and smooth operations.',
      image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b21zJTIwd2FyZWhvdXNlJTIwaW50ZXJuYXRpb25hbHxlbnwxfHx8fDE3NzExOTg4MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 'entreposage',
      icon: Package,
      title: isFrench ? 'Logistique & Entreposage' : 'Logistics & Warehousing',
      description: isFrench
        ? 'Solutions d\'entreposage sécurisées et modernes pour la gestion efficace de vos stocks et flux de marchandises.'
        : 'Secure and modern warehousing solutions for efficient inventory and cargo flow management.',
      image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjBzdG9yYWdlJTIwbG9naXN0aWNzfGVufDF8fHx8MTc3MTIwNjM2NXww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 'conseil',
      icon: Shield,
      title: isFrench ? 'Conseil en Commerce International' : 'International Trade Advisory',
      description: isFrench
        ? 'Conseils stratégiques pour optimiser vos coûts, sécuriser vos opérations et renforcer votre performance commerciale.'
        : 'Strategic advice to optimize costs, secure operations and strengthen your commercial performance.',
      image: 'https://plus.unsplash.com/premium_photo-1707155465598-72c956ca9bae'
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-20">
      {/* Hero Section */}
      <section className="relative mb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1769752803940-0acb89683123?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2dpc3RpY3MlMjB3YXJlaG91c2UlMjBjb250YWluZXJzJTIwaW50ZXJuYXRpb25hbHxlbnwxfHx8fDE3NzEyMDYwMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Services logistiques"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#232d37]/80 to-[#232d37]/60" />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 py-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl text-white"
          >
            <Breadcrumb variant="dark" />
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              {isFrench ? 'Nos' : 'Our'} <span className="text-[#E85E27]">{isFrench ? 'services' : 'services'}</span>
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              {isFrench
                ? 'Des solutions de transit, de dédouanement, de fret et de logistique sur mesure pour accompagner vos opérations d’import-export avec efficacité, conformité et réactivité.'
                : 'Tailored transit, customs clearance, freight and logistics solutions to support your import-export operations with efficiency, compliance and responsiveness.'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-4 lg:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Image with Icon Badge */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
               
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-[#232d37] mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                
                {/* Button */}
                <Link
                  to={`/services/${service.id}`}
                  className="inline-flex items-center gap-1 text-[#E85E27] hover:text-[#d14d1a] font-medium transition-colors group"
                >
                  {isFrench ? 'En savoir plus' : 'Learn more'}
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 lg:px-8 mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#232d37] rounded-2xl p-8 lg:p-12 text-center text-white"
        >
          <Globe className="w-16 h-16 text-[#E85E27] mx-auto mb-6" />
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            {isFrench ? 'Besoin d\'une Solution Personnalisée ?' : 'Need a Tailored Solution?'}
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto text-lg">
            {isFrench
              ? 'Nos experts analysent votre besoin, vos délais et vos contraintes pour vous proposer la solution la plus adaptée à votre réalité opérationnelle.'
              : 'Our experts analyze your needs, deadlines and constraints to propose the most suitable solution for your operational reality.'}
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#E85E27] hover:bg-[#d14d1a] text-white px-8 py-4 rounded-lg font-semibold transition-colors group"
          >
            {isFrench ? 'Contactez nos experts' : 'Contact our experts'}
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}