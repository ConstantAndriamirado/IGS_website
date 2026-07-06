import { motion } from 'motion/react';
import { Briefcase, ArrowRight, Ship, Truck, FileCheck, Globe } from 'lucide-react';
import { Link } from 'react-router';
import { Breadcrumb } from '../components/Breadcrumb';
import { useLanguage } from '../context/LanguageContext';

export default function Projects() {
  const { language } = useLanguage();
  const isFrench = language === 'fr';

  const projects = [
    {
      title: isFrench ? 'Dédouanement import/export' : 'Import/export customs clearance',
      description: isFrench
        ? 'Accompagnement complet des formalités douanières pour des opérations rapides, conformes et sécurisées.'
        : 'Complete support for customs formalities to ensure fast, compliant and secure operations.',
      icon: FileCheck,
    },
    {
      title: isFrench ? 'Transit international' : 'International transit',
      description: isFrench
        ? 'Coordination de la chaîne logistique internationale depuis le point de départ jusqu’à la livraison.'
        : 'Coordination of the international logistics chain from departure to final delivery.',
      icon: Globe,
    },
    {
      title: isFrench ? 'Transport maritime et aérien' : 'Sea and air transport',
      description: isFrench
        ? 'Solutions adaptées aux exigences de rapidité, coût et sécurité selon la nature des marchandises.'
        : 'Solutions tailored to speed, cost and safety requirements based on the nature of the cargo.',
      icon: Ship,
    },
    {
      title: isFrench ? 'Transport routier' : 'Road transport',
      description: isFrench
        ? 'Gestion fluide des déplacements nationaux et régionaux avec suivi et expertise locale.'
        : 'Smooth management of national and regional movements with tracking and local expertise.',
      icon: Truck,
    },
    {
      title: isFrench ? 'Logistique sur mesure' : 'Tailored logistics',
      description: isFrench
        ? 'Organisation de la chaîne logistique autour des besoins spécifiques de chaque client.'
        : 'Organization of the logistics chain around each client\'s specific requirements.',
      icon: Briefcase,
    },
    {
      title: isFrench ? 'Conseil et support' : 'Advisory and support',
      description: isFrench
        ? 'Appui stratégique pour optimiser les opérations, réduire les risques et gagner en efficacité.'
        : 'Strategic support to optimize operations, reduce risks and improve efficiency.',
      icon: ArrowRight,
    },
  ];

  return (
    <div className="min-h-screen pt-20 pb-20">
      <section className="relative mb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHJlcGFpciUyMHBhcnRuZXJzfGVufDF8fHx8MTc3MTIwOTU4N3ww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="IGS projects"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#232d37]/80 to-[#232d37]/60" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 py-20 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl text-white">
            <Breadcrumb variant="dark" />
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">{isFrench ? 'Nos' : 'Our'} <span className="text-[#E85E27]">{isFrench ? 'réalisations' : 'projects'}</span></h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              {isFrench
                ? 'IGS accompagne ses clients dans des opérations logistiques complexes avec efficacité, rapidité et fiabilité.'
                : 'IGS supports its clients in complex logistics operations with efficiency, speed and reliability.'}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-100"
              >
                <div className="w-14 h-14 bg-[#E85E27]/10 rounded-full flex items-center justify-center mb-4">
                  <Icon size={28} className="text-[#E85E27]" />
                </div>
                <h3 className="text-xl font-semibold text-[#232d37] mb-3">{project.title}</h3>
                <p className="text-gray-600 leading-relaxed">{project.description}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-16 bg-[#F3F3F3] rounded-2xl p-8 lg:p-12 text-center">
          <h2 className="text-3xl font-bold text-[#232d37] mb-4">{isFrench ? 'Prêt à démarrer votre prochain projet ?' : 'Ready to start your next project?'}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            {isFrench
              ? 'Notre équipe vous accompagne depuis la première demande jusqu’à l’achèvement de vos opérations.'
              : 'Our team supports you from your first request through to the completion of your operations.'}
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-[#E85E27] hover:bg-[#d14d1a] text-white px-8 py-3.5 rounded-lg font-medium transition-colors">
            {isFrench ? 'Demander un devis' : 'Request a quote'}
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
