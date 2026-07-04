import { motion } from 'motion/react';
import { Ship, Plane, Truck, FileCheck, Anchor, Package, Clock, Shield, MapPin, CheckCircle2, Globe, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import { Breadcrumb } from '../components/Breadcrumb';

export default function Services() {
  const services = [
    {
      id: 'maritime',
      icon: Ship,
      title: 'Fret Maritime',
      description: 'Nous proposons des services de fret maritime adaptés à vos besoins spécifiques, que ce soit pour des expéditions nationales ou internationales.',
      image: 'https://images.unsplash.com/photo-1634638022229-5a52221886dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJnbyUyMHNoaXAlMjBwb3J0JTIwbG9naXN0aWNzfGVufDF8fHx8MTc3MTE1ODQzNHww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 'aerien',
      icon: Plane,
      title: 'Fret Aérien',
      description: 'Des solutions de transport aérien rapides et fiables pour vos marchandises urgentes et de haute valeur.',
      image: 'https://images.unsplash.com/photo-1720428112577-528107b9c140?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJnbyUyMGFpcnBsYW5lJTIwZnJlaWdodHxlbnwxfHx8fDE3NzExOTg4MjV8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 'routier',
      icon: Truck,
      title: 'Fret Routier',
      description: 'Nous proposons des services de transport routier adaptés à vos besoins spécifiques, que ce soit pour des expéditions nationales ou internationales.',
      image: 'https://images.unsplash.com/photo-1761666519980-e29488141562?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cnVjayUyMHRyYW5zcG9ydGF0aW9uJTIwbG9naXN0aWNzfGVufDF8fHx8MTc3MTE5ODgyNXww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 'dedouanement',
      icon: FileCheck,
      title: 'Dédouanement',
      description: 'Notre expertise douanière vous accompagne dans toutes vos démarches import/export en toute conformité réglementaire.',
      image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b21zJTIwd2FyZWhvdXNlJTIwaW50ZXJuYXRpb25hbHxlbnwxfHx8fDE3NzExOTg4MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 'entreposage',
      icon: Package,
      title: 'Entreposage',
      description: 'Des solutions d\'entreposage sécurisées et modernes pour vos marchandises avec gestion optimale de vos stocks.',
      image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjBzdG9yYWdlJTIwbG9naXN0aWNzfGVufDF8fHx8MTc3MTIwNjM2NXww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 'conseil',
      icon: Shield,
      title: 'Conseil Logistique',
      description: 'Nos experts vous accompagnent dans l\'optimisation de votre chaîne logistique et la réduction de vos coûts.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbnN1bHRpbmclMjBtZWV0aW5nfGVufDF8fHx8MTc3MTIwNjM2NXww&ixlib=rb-4.1.0&q=80&w=1080'
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
              Nos <span className="text-[#E85E27]">Services</span>
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Des solutions logistiques complètes et sur mesure pour tous vos besoins de transport et dédouanement
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
                
                {/* Icon Badge */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                  <div className="bg-[#232d37] w-16 h-16 rounded-lg flex items-center justify-center shadow-xl">
                    <service.icon size={32} className="text-white" />
                  </div>
                </div>
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
                  En savoir plus
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
            Besoin d'une Solution Personnalisée ?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto text-lg">
            Nos experts sont à votre disposition pour analyser vos besoins spécifiques et vous proposer la solution logistique la plus adaptée.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#E85E27] hover:bg-[#d14d1a] text-white px-8 py-4 rounded-lg font-semibold transition-colors group"
          >
            Contactez nos experts
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}