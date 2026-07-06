import { motion } from 'motion/react';
import { Ship, Plane, Truck, FileCheck, Package, Shield, CheckCircle2, Phone, FileDown, ArrowRight } from 'lucide-react';
import { Link, useParams, Navigate } from 'react-router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Breadcrumb } from '../components/Breadcrumb';

interface ServiceData {
  id: string;
  icon: any;
  title: string;
  heroTitle: string;
  description: string;
  image: string;
  detailedSections: {
    title: string;
    items: string[];
  }[];
  stats: {
    label: string;
    value: number;
  }[];
}

const servicesData: Record<string, ServiceData> = {
  maritime: {
    id: 'maritime',
    icon: Ship,
    title: 'Fret Maritime',
    heroTitle: 'Transport Maritime Fiable Et Sécurisé',
    description: 'IGS propose un service de fret maritime pour vos besoins de transport de marchandises. Notre flotte de partenaires maritimes et notre équipe d\'experts garantissent que vos colis arrivent à destination en toute sécurité et dans les délais. Nous proposons des services de transport adaptés à vos besoins spécifiques, que ce soit pour des expéditions nationales ou internationales. Contactez-nous pour obtenir un devis personnalisé et pour en savoir plus sur notre service de fret maritime.',
    image: 'https://images.unsplash.com/photo-1764041323714-de1d64fb8073?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJnbyUyMHNoaXAlMjBvY2VhbiUyMG1hcml0aW1lfGVufDF8fHx8MTc3MTIwNzA4OHww&ixlib=rb-4.1.0&q=80&w=1080',
    detailedSections: [
      {
        title: 'Transport Maritime (Fret) National Et International',
        items: [
          'Acheminement rapide et sécurisé des biens et marchandises à l\'intérieur du triangle national',
          'Acheminement rapide et sécurisé des biens et marchandises à l\'intérieur de la sous-région Afrique Centrale',
          'Suivi détaillé des envois ou livraisons (Géolocalisation)',
          'Conteneurs FCL (Full Container Load) et LCL (Less than Container Load)'
        ]
      },
      {
        title: 'Solutions Sur-Mesure Pour Des Besoins Spécifiques En Logistique Et Transport',
        items: [
          'Transport maritime de colis urgents ou sensibles avec des options de suivi et de livraison en main propre',
          'Transport maritime de marchandises sur des distances longues, avec des délais de livraison souples',
          'Transport de types spécifiques de marchandises telles que des produits dangereux, des denrées périssables ou des œuvres d\'art',
          'Tracking et/ou géolocalisation en temps réel'
        ]
      }
    ],
    stats: [
      { label: 'Livraison Avec Succès', value: 95 },
      { label: 'Clients Satisfaits', value: 92 }
    ]
  },
  aerien: {
    id: 'aerien',
    icon: Plane,
    title: 'Fret Aérien',
    heroTitle: 'Transport Aérien Rapide Et Efficace',
    description: 'IGS propose un service de fret aérien pour vos besoins de transport urgent de marchandises. Notre réseau de partenaires aériens et notre équipe d\'experts garantissent que vos colis arrivent à destination en toute sécurité et dans les meilleurs délais. Nous proposons des services de transport adaptés à vos besoins spécifiques, que ce soit pour des expéditions express nationales ou internationales. Contactez-nous pour obtenir un devis personnalisé et pour en savoir plus sur notre service de fret aérien.',
    image: 'https://images.unsplash.com/photo-1718365960352-6c07fc217ae8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaXJwbGFuZSUyMGNhcmdvJTIwZnJlaWdodCUyMGFpcnBvcnR8ZW58MXx8fHwxNzcxMjA3MDg4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    detailedSections: [
      {
        title: 'Transport Aérien (Fret) National Et International',
        items: [
          'Acheminement express et sécurisé des biens et marchandises urgentes',
          'Solutions pour marchandises de haute valeur nécessitant une livraison rapide',
          'Suivi en temps réel de vos expéditions aériennes',
          'Service porte-à-porte pour plus de commodité'
        ]
      },
      {
        title: 'Solutions Sur-Mesure Pour Transport Aérien',
        items: [
          'Transport aérien de colis urgents avec garantie de délai',
          'Transport de marchandises sensibles avec emballage spécifique',
          'Service charter pour volumes importants',
          'Dédouanement express à l\'arrivée'
        ]
      }
    ],
    stats: [
      { label: 'Livraison À Temps', value: 98 },
      { label: 'Clients Satisfaits', value: 94 }
    ]
  },
  routier: {
    id: 'routier',
    icon: Truck,
    title: 'Fret Routier',
    heroTitle: 'Transport Routier Fiable Et Efficace',
    description: 'IGS propose un service de fret routier pour vos besoins de transport de marchandises. Notre flotte de véhicules modernes et notre équipe d\'experts garantissent que vos colis arrivent à destination en toute sécurité et dans les délais. Nous proposons des services de transport adaptés à vos besoins spécifiques, que ce soit pour des expéditions nationales ou internationales. Contactez-nous pour obtenir un devis personnalisé et pour en savoir plus sur notre service de fret routier.',
    image: 'https://images.unsplash.com/photo-1766561994067-dbd575e1cff2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibHVlJTIwdHJ1Y2slMjBoaWdod2F5JTIwdHJhbnNwb3J0fGVufDF8fHx8MTc3MTIwNzA4N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    detailedSections: [
      {
        title: 'Transport Express (Fret) National Et International',
        items: [
          'Acheminement rapide et sécurisé des biens et marchandises à l\'intérieur du triangle national',
          'Acheminement rapide et sécurisé des biens et marchandises à l\'intérieur de la sous-région Afrique Centrale',
          'Suivi détaillé des envois ou livraisons (Géolocalisation)',
          'Service de livraison flexible selon vos horaires'
        ]
      },
      {
        title: 'Solutions Sur-Mesure Pour Des Besoins Spécifiques En Logistique Et Transport',
        items: [
          'Transport rapide de plus et colis urgents ou sensibles avec des options de suivi et de livraison en main propre',
          'Transport rapide de plus, colis et marchandises sur des distances plus longues, avec des délais de livraison souples',
          'Transport de types spécifiques de marchandises telles que des produits dangereux, des denrées périssables ou des œuvres d\'art',
          'Tracking et/ou géolocalisation en temps réel'
        ]
      }
    ],
    stats: [
      { label: 'Livraison Avec Succès', value: 82 },
      { label: 'Clients Satisfaits', value: 90 }
    ]
  },
  dedouanement: {
    id: 'dedouanement',
    icon: FileCheck,
    title: 'Dédouanement',
    heroTitle: 'Services Douaniers Professionnels Et Conformes',
    description: 'IGS vous accompagne dans toutes vos démarches douanières avec expertise et professionnalisme. Notre équipe spécialisée en réglementation douanière garantit la conformité de vos opérations import/export. Nous gérons l\'ensemble des formalités administratives et documentaires pour faciliter le passage en douane de vos marchandises. Contactez-nous pour bénéficier de notre expertise douanière et optimiser vos opérations internationales.',
    image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b21zJTIwd2FyZWhvdXNlJTIwbG9naXN0aWNzfGVufDF8fHx8MTc3MTIwNzA4OXww&ixlib=rb-4.1.0&q=80&w=1080',
    detailedSections: [
      {
        title: 'Services De Dédouanement Complets',
        items: [
          'Déclaration en douane import et export',
          'Gestion complète des formalités administratives',
          'Calcul et paiement des droits et taxes',
          'Conseil en classification tarifaire et réglementation'
        ]
      },
      {
        title: 'Expertise Douanière Spécialisée',
        items: [
          'Veille réglementaire et mise en conformité',
          'Gestion des régimes douaniers particuliers',
          'Assistance lors des contrôles douaniers',
          'Optimisation fiscale de vos opérations'
        ]
      }
    ],
    stats: [
      { label: 'Dossiers Traités', value: 88 },
      { label: 'Clients Satisfaits', value: 93 }
    ]
  },
  entreposage: {
    id: 'entreposage',
    icon: Package,
    title: 'Entreposage',
    heroTitle: 'Solutions D\'Entreposage Sécurisées Et Modernes',
    description: 'IGS met à votre disposition des espaces d\'entreposage sécurisés et modernes pour le stockage de vos marchandises. Nos entrepôts sont équipés de systèmes de sécurité avancés et de gestion informatisée des stocks. Nous offrons des solutions flexibles adaptées à tous types de marchandises avec une gestion optimale de vos inventaires. Contactez-nous pour découvrir nos solutions d\'entreposage sur mesure.',
    image: 'https://images.unsplash.com/photo-1619070284836-e850273d69ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3YXJlaG91c2UlMjBzdG9yYWdlfGVufDF8fHx8MTc3MTIwNzA4OXww&ixlib=rb-4.1.0&q=80&w=1080',
    detailedSections: [
      {
        title: 'Services D\'Entreposage Professionnels',
        items: [
          'Entrepôts sécurisés avec surveillance 24/7',
          'Gestion informatisée des stocks en temps réel',
          'Solutions de stockage pour tous types de marchandises',
          'Service de préparation de commandes et conditionnement'
        ]
      },
      {
        title: 'Solutions Logistiques Intégrées',
        items: [
          'Entreposage sous douane disponible',
          'Gestion des flux entrants et sortants',
          'Inventaires réguliers et reporting détaillé',
          'Solutions de stockage court et long terme'
        ]
      }
    ],
    stats: [
      { label: 'Espace Disponible', value: 85 },
      { label: 'Clients Satisfaits', value: 91 }
    ]
  },
  conseil: {
    id: 'conseil',
    icon: Shield,
    title: 'Conseil Logistique',
    heroTitle: 'Expertise Et Conseil En Logistique Internationale',
    description: 'IGS met son expertise au service de l\'optimisation de votre chaîne logistique. Nos consultants analysent vos processus, identifient les opportunités d\'amélioration et vous accompagnent dans la mise en œuvre de solutions efficaces. Nous vous aidons à réduire vos coûts, améliorer vos délais et optimiser votre supply chain. Contactez-nous pour bénéficier de notre accompagnement personnalisé.',
    image: 'https://images.unsplash.com/photo-1601467995997-ac1ae9a8fff4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2dpc3RpY3MlMjBjb25zdWx0aW5nJTIwYnVzaW5lc3N8ZW58MXx8fHwxNzcxMjA3MDkwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    detailedSections: [
      {
        title: 'Conseil Et Optimisation Logistique',
        items: [
          'Audit de votre chaîne logistique actuelle',
          'Recommandations d\'optimisation des coûts',
          'Mise en place de solutions logistiques innovantes',
          'Formation de vos équipes aux meilleures pratiques'
        ]
      },
      {
        title: 'Accompagnement Stratégique',
        items: [
          'Définition de votre stratégie supply chain',
          'Sélection des meilleurs partenaires et prestataires',
          'Mise en conformité réglementaire',
          'Suivi et amélioration continue de vos performances'
        ]
      }
    ],
    stats: [
      { label: 'Projets Réussis', value: 87 },
      { label: 'Clients Satisfaits', value: 95 }
    ]
  }
};

const allServices = [
  { id: 'maritime', icon: Ship, title: 'Fret Maritime' },
  { id: 'aerien', icon: Plane, title: 'Fret Aérien' },
  { id: 'routier', icon: Truck, title: 'Fret Routier' },
  { id: 'dedouanement', icon: FileCheck, title: 'Dédouanement' },
  { id: 'entreposage', icon: Package, title: 'Entreposage' },
  { id: 'conseil', icon: Shield, title: 'Conseil Logistique' }
];

export default function ServiceDetail() {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = serviceId ? servicesData[serviceId] : null;

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const Icon = service.icon;

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Banner */}
      <section className="relative mb-12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={service.image}
            alt={service.title}
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
            <Breadcrumb items={[
              { label: 'Services', path: '/services' },
              { label: service.title }
            ]} variant="dark" />
            <div className="flex items-center gap-3 mb-4">
              <Icon size={48} className="text-[#E85E27]" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              {service.title}
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              {service.heroTitle}
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Sidebar - Services Navigation + CTA */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="sticky top-24 space-y-6">
              {/* Services Navigation */}
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h3 className="font-semibold text-[#232d37] mb-4 text-lg">Nos Services</h3>
                <nav className="space-y-2">
                  {allServices.map((item) => {
                    const ServiceIcon = item.icon;
                    const isActive = item.id === serviceId;
                    return (
                      <Link
                        key={item.id}
                        to={`/services/${item.id}`}
                        className={`flex items-center gap-3 p-3 rounded-lg transition-all group ${
                          isActive
                            ? 'bg-[#232d37] text-white shadow-md'
                            : 'bg-white text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        <ServiceIcon
                          size={20}
                          className={isActive ? 'text-[#E85E27]' : 'text-gray-400 group-hover:text-[#E85E27]'}
                        />
                        <span className="font-medium text-sm">{item.title}</span>
                        <ArrowRight
                          size={16}
                          className={`ml-auto transition-transform ${
                            isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                          }`}
                        />
                      </Link>
                    );
                  })}
                </nav>
              </div>

              {/* Company Info Card */}
              <div className="bg-gray-50 rounded-2xl p-6 text-center border border-gray-200">
                <div className="flex flex-col items-center mb-6">
                  <div className="flex flex-col mb-4">
                    <span className="text-4xl font-bold leading-none text-[#232d37]">IGS</span>
                    <span className="text-sm text-[#E85E27] font-medium">Ibrahima Golden Services</span>
                  </div>
                  <h3 className="font-bold text-[#232d37] text-lg">
                    Logistique & Fret
                    <br />
                    Pour Les Entreprises
                  </h3>
                </div>

                <div className="flex items-center justify-center gap-2 text-[#232d37] mb-6 p-3 bg-white rounded-lg">
                  <Phone size={20} className="text-[#E85E27]" />
                  <span className="font-semibold">+237 6 72 14 41 91</span>
                </div>

                <Link
                  to="/contact"
                  className="block w-full bg-[#232d37] hover:bg-[#1a2229] text-white py-3 px-6 rounded-lg font-semibold transition-colors text-center"
                >
                  Contact Avec Nous
                </Link>
              </div>

              {/* Brochures Card */}
              <div className="bg-[#232d37] rounded-2xl p-6 text-white">
                <h3 className="font-bold text-xl mb-4">Brochures</h3>
                <p className="text-gray-300 text-sm mb-6">
                  Pour Tout Besoin De Brochures, Veuillez Télécharger Un Ci-dessous
                </p>
                <div className="space-y-3">
                  <button className="w-full flex items-center justify-center gap-2 bg-white text-[#232d37] py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors font-medium">
                    <FileDown size={20} />
                    <span>PDF Download</span>
                  </button>
                  <button className="w-full flex items-center justify-center gap-2 bg-white text-[#232d37] py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors font-medium">
                    <FileDown size={20} />
                    <span>PDF Download</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-8"
            >
              <div className="relative h-[300px] lg:h-[400px] rounded-2xl overflow-hidden shadow-lg">
                <ImageWithFallback
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Main Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-[#232d37] mb-4">
                {service.heroTitle}
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                {service.description}
              </p>
            </motion.div>

            {/* Detailed Sections */}
            {service.detailedSections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="mb-8"
              >
                <h3 className="text-2xl font-bold text-[#232d37] mb-4">
                  {section.title}
                </h3>
                <div className="space-y-3">
                  {section.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start gap-3">
                      <CheckCircle2 size={24} className="text-[#E85E27] flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700 leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Stats Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-gray-50 rounded-2xl p-8 mt-12"
            >
              <h3 className="text-2xl font-bold text-[#232d37] mb-6">Nos Succès !</h3>
              <p className="text-gray-600 mb-8">
                Nous avons le plaisir de vous montrer les statistiques de nos réalisations...
              </p>
              <div className="space-y-6">
                {service.stats.map((stat, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-[#232d37]">{stat.label}</span>
                      <span className="text-[#E85E27] font-bold text-lg">{stat.value}%</span>
                    </div>
                    <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${stat.value}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="h-full bg-[#232d37] rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}