import { motion } from 'motion/react';
import { Ship, Plane, Truck, FileCheck, Package, Shield, CheckCircle2, Phone, FileDown, ArrowRight } from 'lucide-react';
import { Link, useParams, Navigate } from 'react-router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Breadcrumb } from '../components/Breadcrumb';
import { useLanguage } from '../context/LanguageContext';

interface LocalizedText {
  fr: string;
  en: string;
}

interface ServiceData {
  id: string;
  icon: any;
  title: LocalizedText;
  heroTitle: LocalizedText;
  description: LocalizedText;
  image: string;
  detailedSections: {
    title: LocalizedText;
    items: LocalizedText[];
  }[];
  stats: {
    label: LocalizedText;
    value: number;
  }[];
}

const servicesData: Record<string, ServiceData> = {
  maritime: {
    id: 'maritime',
    icon: Ship,
    title: { fr: 'Fret Maritime', en: 'Sea Freight' },
    heroTitle: { fr: 'Transport Maritime Fiable Et Sécurisé', en: 'Reliable and Secure Sea Transport' },
    description: {
      fr: 'IGS propose un service de fret maritime pour vos besoins de transport de marchandises. Notre flotte de partenaires maritimes et notre équipe d\'experts garantissent que vos colis arrivent à destination en toute sécurité et dans les délais. Nous proposons des services de transport adaptés à vos besoins spécifiques, que ce soit pour des expéditions nationales ou internationales. Contactez-nous pour obtenir un devis personnalisé et pour en savoir plus sur notre service de fret maritime.',
      en: 'IGS offers sea freight services for your cargo transport needs. Our network of maritime partners and our expert team ensure that your shipments arrive safely and on time. We provide transport services tailored to your specific needs, whether for national or international shipments. Contact us for a personalized quote and to learn more about our sea freight service.'
    },
    image: 'https://images.unsplash.com/photo-1764041323714-de1d64fb8073?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJnbyUyMHNoaXAlMjBvY2VhbiUyMG1hcml0aW1lfGVufDF8fHx8MTc3MTIwNzA4OHww&ixlib=rb-4.1.0&q=80&w=1080',
    detailedSections: [
      {
        title: { fr: 'Transport Maritime (Fret) National Et International', en: 'National and International Sea Freight Transport' },
        items: [
          { fr: 'Acheminement rapide et sécurisé des biens et marchandises à l\'intérieur du triangle national', en: 'Fast and secure movement of goods within the national triangle' },
          { fr: 'Acheminement rapide et sécurisé des biens et marchandises à l\'intérieur de la sous-région Afrique Centrale', en: 'Fast and secure movement of goods within the Central Africa sub-region' },
          { fr: 'Suivi détaillé des envois ou livraisons (Géolocalisation)', en: 'Detailed tracking of shipments or deliveries (geolocation)' },
          { fr: 'Conteneurs FCL (Full Container Load) et LCL (Less than Container Load)', en: 'FCL and LCL container options' }
        ]
      },
      {
        title: { fr: 'Solutions Sur-Mesure Pour Des Besoins Spécifiques En Logistique Et Transport', en: 'Tailored Solutions for Specific Logistics and Transport Needs' },
        items: [
          { fr: 'Transport maritime de colis urgents ou sensibles avec des options de suivi et de livraison en main propre', en: 'Sea transport for urgent or sensitive parcels with tracking and hand-delivery options' },
          { fr: 'Transport maritime de marchandises sur des distances longues, avec des délais de livraison souples', en: 'Sea transport for long-distance cargo with flexible delivery timelines' },
          { fr: 'Transport de types spécifiques de marchandises telles que des produits dangereux, des denrées périssables ou des œuvres d\'art', en: 'Transport of specific cargo types such as hazardous goods, perishable food or artworks' },
          { fr: 'Tracking et/ou géolocalisation en temps réel', en: 'Real-time tracking and/or geolocation' }
        ]
      }
    ],
    stats: [
      { label: { fr: 'Livraison Avec Succès', en: 'Successful Delivery' }, value: 95 },
      { label: { fr: 'Clients Satisfaits', en: 'Satisfied Clients' }, value: 92 }
    ]
  },
  aerien: {
    id: 'aerien',
    icon: Plane,
    title: { fr: 'Fret Aérien', en: 'Air Freight' },
    heroTitle: { fr: 'Transport Aérien Rapide Et Efficace', en: 'Fast and Efficient Air Transport' },
    description: {
      fr: 'IGS propose un service de fret aérien pour vos besoins de transport urgent de marchandises. Notre réseau de partenaires aériens et notre équipe d\'experts garantissent que vos colis arrivent à destination en toute sécurité et dans les meilleurs délais. Nous proposons des services de transport adaptés à vos besoins spécifiques, que ce soit pour des expéditions express nationales ou internationales. Contactez-nous pour obtenir un devis personnalisé et pour en savoir plus sur notre service de fret aérien.',
      en: 'IGS offers air freight services for urgent shipping needs. Our network of air partners and expert team make sure your shipments arrive safely and as quickly as possible. We provide transport solutions tailored to your specific needs, from express national to international shipments. Contact us for a personalized quote and to learn more about our air freight service.'
    },
    image: 'https://images.unsplash.com/photo-1718365960352-6c07fc217ae8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaXJwbGFuZSUyMGNhcmdvJTIwZnJlaWdodCUyMGFpcnBvcnR8ZW58MXx8fHwxNzcxMjA3MDg4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    detailedSections: [
      {
        title: { fr: 'Transport Aérien (Fret) National Et International', en: 'National and International Air Freight' },
        items: [
          { fr: 'Acheminement express et sécurisé des biens et marchandises urgentes', en: 'Secure and rapid delivery of urgent goods' },
          { fr: 'Solutions pour marchandises de haute valeur nécessitant une livraison rapide', en: 'Solutions for high-value goods requiring fast delivery' },
          { fr: 'Suivi en temps réel de vos expéditions aériennes', en: 'Real-time tracking of your air shipments' },
          { fr: 'Service porte-à-porte pour plus de commodité', en: 'Door-to-door service for greater convenience' }
        ]
      },
      {
        title: { fr: 'Solutions Sur-Mesure Pour Transport Aérien', en: 'Tailored Air Transport Solutions' },
        items: [
          { fr: 'Transport aérien de colis urgents avec garantie de délai', en: 'Air transport for urgent parcels with deadline guarantees' },
          { fr: 'Transport de marchandises sensibles avec emballage spécifique', en: 'Transport of sensitive cargo with specialized packaging' },
          { fr: 'Service charter pour volumes importants', en: 'Charter service for large volumes' },
          { fr: 'Dédouanement express à l\'arrivée', en: 'Express customs clearance on arrival' }
        ]
      }
    ],
    stats: [
      { label: { fr: 'Livraison À Temps', en: 'On-Time Delivery' }, value: 98 },
      { label: { fr: 'Clients Satisfaits', en: 'Satisfied Clients' }, value: 94 }
    ]
  },
  routier: {
    id: 'routier',
    icon: Truck,
    title: { fr: 'Fret Routier', en: 'Road Freight' },
    heroTitle: { fr: 'Transport Routier Fiable Et Efficace', en: 'Reliable and Efficient Road Transport' },
    description: {
      fr: 'IGS propose un service de fret routier pour vos besoins de transport de marchandises. Notre flotte de véhicules modernes et notre équipe d\'experts garantissent que vos colis arrivent à destination en toute sécurité et dans les délais. Nous proposons des services de transport adaptés à vos besoins spécifiques, que ce soit pour des expéditions nationales ou internationales. Contactez-nous pour obtenir un devis personnalisé et pour en savoir plus sur notre service de fret routier.',
      en: 'IGS offers road freight services for your cargo transportation needs. Our modern fleet and expert team ensure that your shipments reach their destination safely and on time. We offer transport solutions adapted to your specific needs, whether national or international. Contact us for a personalized quote and to learn more about our road freight service.'
    },
    image: 'https://images.unsplash.com/photo-1766561994067-dbd575e1cff2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibHVlJTIwdHJ1Y2slMjBoaWdod2F5JTIwdHJhbnNwb3J0fGVufDF8fHx8MTc3MTIwNzA4N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    detailedSections: [
      {
        title: { fr: 'Transport Express (Fret) National Et International', en: 'National and International Express Freight' },
        items: [
          { fr: 'Acheminement rapide et sécurisé des biens et marchandises à l\'intérieur du triangle national', en: 'Fast and secure transport of goods within the national triangle' },
          { fr: 'Acheminement rapide et sécurisé des biens et marchandises à l\'intérieur de la sous-région Afrique Centrale', en: 'Fast and secure transport of goods within the Central African sub-region' },
          { fr: 'Suivi détaillé des envois ou livraisons (Géolocalisation)', en: 'Detailed tracking of shipments or deliveries (geolocation)' },
          { fr: 'Service de livraison flexible selon vos horaires', en: 'Flexible delivery service based on your schedule' }
        ]
      },
      {
        title: { fr: 'Solutions Sur-Mesure Pour Des Besoins Spécifiques En Logistique Et Transport', en: 'Tailored Solutions for Specific Logistics and Transport Needs' },
        items: [
          { fr: 'Transport rapide de plus et colis urgents ou sensibles avec des options de suivi et de livraison en main propre', en: 'Fast transport of urgent or sensitive parcels with tracking and hand-over options' },
          { fr: 'Transport rapide de plus, colis et marchandises sur des distances plus longues, avec des délais de livraison souples', en: 'Fast transport of parcels and goods over longer distances with flexible delivery times' },
          { fr: 'Transport de types spécifiques de marchandises telles que des produits dangereux, des denrées périssables ou des œuvres d\'art', en: 'Transport of specific cargo types such as hazardous goods, perishable food or artworks' },
          { fr: 'Tracking et/ou géolocalisation en temps réel', en: 'Real-time tracking and/or geolocation' }
        ]
      }
    ],
    stats: [
      { label: { fr: 'Livraison Avec Succès', en: 'Successful Delivery' }, value: 82 },
      { label: { fr: 'Clients Satisfaits', en: 'Satisfied Clients' }, value: 90 }
    ]
  },
  dedouanement: {
    id: 'dedouanement',
    icon: FileCheck,
    title: { fr: 'Dédouanement', en: 'Customs Clearance' },
    heroTitle: { fr: 'Services Douaniers Professionnels Et Conformes', en: 'Professional and Compliant Customs Services' },
    description: {
      fr: 'IGS vous accompagne dans toutes vos démarches douanières avec expertise et professionnalisme. Notre équipe spécialisée en réglementation douanière garantit la conformité de vos opérations import/export. Nous gérons l\'ensemble des formalités administratives et documentaires pour faciliter le passage en douane de vos marchandises. Contactez-nous pour bénéficier de notre expertise douanière et optimiser vos opérations internationales.',
      en: 'IGS supports you in all your customs procedures with expertise and professionalism. Our team specialized in customs regulations guarantees the compliance of your import/export operations. We manage all administrative and documentary formalities to facilitate customs clearance for your goods. Contact us to benefit from our customs expertise and optimize your international operations.'
    },
    image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b21zJTIwd2FyZWhvdXNlJTIwbG9naXN0aWNzfGVufDF8fHx8MTc3MTIwNzA4OXww&ixlib=rb-4.1.0&q=80&w=1080',
    detailedSections: [
      {
        title: { fr: 'Services De Dédouanement Complets', en: 'Complete Customs Clearance Services' },
        items: [
          { fr: 'Déclaration en douane import et export', en: 'Import and export customs declaration' },
          { fr: 'Gestion complète des formalités administratives', en: 'Complete management of administrative formalities' },
          { fr: 'Calcul et paiement des droits et taxes', en: 'Calculation and payment of duties and taxes' },
          { fr: 'Conseil en classification tarifaire et réglementation', en: 'Advice on tariff classification and regulations' }
        ]
      },
      {
        title: { fr: 'Expertise Douanière Spécialisée', en: 'Specialized Customs Expertise' },
        items: [
          { fr: 'Veille réglementaire et mise en conformité', en: 'Regulatory monitoring and compliance' },
          { fr: 'Gestion des régimes douaniers particuliers', en: 'Management of special customs regimes' },
          { fr: 'Assistance lors des contrôles douaniers', en: 'Assistance during customs inspections' },
          { fr: 'Optimisation fiscale de vos opérations', en: 'Tax optimization of your operations' }
        ]
      }
    ],
    stats: [
      { label: { fr: 'Dossiers Traités', en: 'Cases Processed' }, value: 88 },
      { label: { fr: 'Clients Satisfaits', en: 'Satisfied Clients' }, value: 93 }
    ]
  },
  entreposage: {
    id: 'entreposage',
    icon: Package,
    title: { fr: 'Entreposage', en: 'Warehousing' },
    heroTitle: { fr: 'Solutions D\'Entreposage Sécurisées Et Modernes', en: 'Secure and Modern Warehousing Solutions' },
    description: {
      fr: 'IGS met à votre disposition des espaces d\'entreposage sécurisés et modernes pour le stockage de vos marchandises. Nos entrepôts sont équipés de systèmes de sécurité avancés et de gestion informatisée des stocks. Nous offrons des solutions flexibles adaptées à tous types de marchandises avec une gestion optimale de vos inventaires. Contactez-nous pour découvrir nos solutions d\'entreposage sur mesure.',
      en: 'IGS provides secure and modern warehousing spaces for storing your goods. Our warehouses are equipped with advanced security systems and computerized inventory management. We offer flexible solutions for all types of cargo with optimal inventory management. Contact us to discover our custom warehousing solutions.'
    },
    image: 'https://images.unsplash.com/photo-1619070284836-e850273d69ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3YXJlaG91c2UlMjBzdG9yYWdlfGVufDF8fHx8MTc3MTIwNzA4OXww&ixlib=rb-4.1.0&q=80&w=1080',
    detailedSections: [
      {
        title: { fr: 'Services D\'Entreposage Professionnels', en: 'Professional Warehousing Services' },
        items: [
          { fr: 'Entrepôts sécurisés avec surveillance 24/7', en: 'Secure warehouses with 24/7 monitoring' },
          { fr: 'Gestion informatisée des stocks en temps réel', en: 'Computerized inventory management in real time' },
          { fr: 'Solutions de stockage pour tous types de marchandises', en: 'Storage solutions for all types of goods' },
          { fr: 'Service de préparation de commandes et conditionnement', en: 'Order preparation and packaging service' }
        ]
      },
      {
        title: { fr: 'Solutions Logistiques Intégrées', en: 'Integrated Logistics Solutions' },
        items: [
          { fr: 'Entreposage sous douane disponible', en: 'Customs bonded warehousing available' },
          { fr: 'Gestion des flux entrants et sortants', en: 'Management of incoming and outgoing flows' },
          { fr: 'Inventaires réguliers et reporting détaillé', en: 'Regular inventory checks and detailed reporting' },
          { fr: 'Solutions de stockage court et long terme', en: 'Short- and long-term storage solutions' }
        ]
      }
    ],
    stats: [
      { label: { fr: 'Espace Disponible', en: 'Available Space' }, value: 85 },
      { label: { fr: 'Clients Satisfaits', en: 'Satisfied Clients' }, value: 91 }
    ]
  },
  conseil: {
    id: 'conseil',
    icon: Shield,
    title: { fr: 'Conseil Logistique', en: 'Logistics Advisory' },
    heroTitle: { fr: 'Expertise Et Conseil En Logistique Internationale', en: 'Expertise and Advice in International Logistics' },
    description: {
      fr: 'IGS met son expertise au service de l\'optimisation de votre chaîne logistique. Nos consultants analysent vos processus, identifient les opportunités d\'amélioration et vous accompagnent dans la mise en œuvre de solutions efficaces. Nous vous aidons à réduire vos coûts, améliorer vos délais et optimiser votre supply chain. Contactez-nous pour bénéficier de notre accompagnement personnalisé.',
      en: 'IGS puts its expertise at the service of optimizing your logistics chain. Our consultants analyze your processes, identify improvement opportunities and support you in implementing efficient solutions. We help you reduce costs, improve lead times and optimize your supply chain. Contact us to benefit from our personalized support.'
    },
    image: 'https://images.unsplash.com/photo-1601467995997-ac1ae9a8fff4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2dpc3RpY3MlMjBjb25zdWx0aW5nJTIwYnVzaW5lc3N8ZW58MXx8fHwxNzcxMjA3MDkwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    detailedSections: [
      {
        title: { fr: 'Conseil Et Optimisation Logistique', en: 'Logistics Consulting and Optimization' },
        items: [
          { fr: 'Audit de votre chaîne logistique actuelle', en: 'Audit of your current logistics chain' },
          { fr: 'Recommandations d\'optimisation des coûts', en: 'Cost optimization recommendations' },
          { fr: 'Mise en place de solutions logistiques innovantes', en: 'Implementation of innovative logistics solutions' },
          { fr: 'Formation de vos équipes aux meilleures pratiques', en: 'Training your teams in best practices' }
        ]
      },
      {
        title: { fr: 'Accompagnement Stratégique', en: 'Strategic Support' },
        items: [
          { fr: 'Définition de votre stratégie supply chain', en: 'Definition of your supply chain strategy' },
          { fr: 'Sélection des meilleurs partenaires et prestataires', en: 'Selection of the best partners and providers' },
          { fr: 'Mise en conformité réglementaire', en: 'Regulatory compliance' },
          { fr: 'Suivi et amélioration continue de vos performances', en: 'Monitoring and continuous improvement of your performance' }
        ]
      }
    ],
    stats: [
      { label: { fr: 'Projets Réussis', en: 'Successful Projects' }, value: 87 },
      { label: { fr: 'Clients Satisfaits', en: 'Satisfied Clients' }, value: 95 }
    ]
  }
};

const allServices = [
  { id: 'maritime', icon: Ship, title: { fr: 'Fret Maritime', en: 'Sea Freight' } },
  { id: 'aerien', icon: Plane, title: { fr: 'Fret Aérien', en: 'Air Freight' } },
  { id: 'routier', icon: Truck, title: { fr: 'Fret Routier', en: 'Road Freight' } },
  { id: 'dedouanement', icon: FileCheck, title: { fr: 'Dédouanement', en: 'Customs Clearance' } },
  { id: 'entreposage', icon: Package, title: { fr: 'Entreposage', en: 'Warehousing' } },
  { id: 'conseil', icon: Shield, title: { fr: 'Conseil Logistique', en: 'Logistics Advisory' } }
];

export default function ServiceDetail() {
  const { serviceId } = useParams<{ serviceId: string }>();
  const { language } = useLanguage();
  const isFrench = language === 'fr';
  const service = serviceId ? servicesData[serviceId] : null;

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const Icon = service.icon;
  const serviceTitle = isFrench ? service.title.fr : service.title.en;
  const heroTitle = isFrench ? service.heroTitle.fr : service.heroTitle.en;
  const description = isFrench ? service.description.fr : service.description.en;

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Banner */}
      <section className="relative mb-12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={service.image}
            alt={serviceTitle}
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
              { label: isFrench ? 'Services' : 'Services', path: '/services' },
              { label: serviceTitle }
            ]} variant="dark" />
            <div className="flex items-center gap-3 mb-4">
              <Icon size={48} className="text-[#E85E27]" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              {serviceTitle}
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              {heroTitle}
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
                <h3 className="font-semibold text-[#232d37] mb-4 text-lg">{isFrench ? 'Nos Services' : 'Our Services'}</h3>
                <nav className="space-y-2">
                  {allServices.map((item) => {
                    const ServiceIcon = item.icon;
                    const isActive = item.id === serviceId;
                    const itemTitle = isFrench ? item.title.fr : item.title.en;
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
                        <span className="font-medium text-sm">{itemTitle}</span>
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
                    {isFrench ? 'Solutions Logistiques' : 'Logistics Solutions'}
                    <br />
                    {isFrench ? 'Pour Les Entreprises' : 'For Businesses'}
                  </h3>
                </div>

                <div className="flex items-center justify-center gap-2 text-[#232d37] mb-6 p-3 bg-white rounded-lg">
                  <Phone size={20} className="text-[#E85E27]" />
                  <span className="font-semibold">+224 612 004 903</span>
                </div>

                <Link
                  to="/contact"
                  className="block w-full bg-[#232d37] hover:bg-[#1a2229] text-white py-3 px-6 rounded-lg font-semibold transition-colors text-center"
                >
                  {isFrench ? 'Contactez-nous' : 'Contact us'}
                </Link>
              </div>

              {/* Brochures Card */}
              <div className="bg-[#232d37] rounded-2xl p-6 text-white">
                <h3 className="font-bold text-xl mb-4">Brochures</h3>
                <p className="text-gray-300 text-sm mb-6">
                  {isFrench
                    ? 'Pour toute demande de documentation ou de présentation détaillée, nous pouvons vous transmettre les éléments adaptés à votre besoin.'
                    : 'For any request for documentation or a detailed presentation, we can provide the materials tailored to your needs.'}
                </p>
                <div className="space-y-3">
                  <a href="mailto:contact@igservices.com?subject=Demande%20de%20brochure%20IGS" className="w-full flex items-center justify-center gap-2 bg-white text-[#232d37] py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors font-medium">
                    <FileDown size={20} />
                    <span>{isFrench ? 'Demander une brochure' : 'Request a brochure'}</span>
                  </a>
                  <a href="/contact" className="w-full flex items-center justify-center gap-2 bg-white text-[#232d37] py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors font-medium">
                    <FileDown size={20} />
                    <span>{isFrench ? 'Nous contacter' : 'Contact us'}</span>
                  </a>
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
                  alt={serviceTitle}
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
                {heroTitle}
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                {description}
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
                  {isFrench ? section.title.fr : section.title.en}
                </h3>
                <div className="space-y-3">
                  {section.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start gap-3">
                      <CheckCircle2 size={24} className="text-[#E85E27] flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700 leading-relaxed">{isFrench ? item.fr : item.en}</p>
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
              <h3 className="text-2xl font-bold text-[#232d37] mb-6">{isFrench ? 'Résultats concrets' : 'Concrete results'}</h3>
              <p className="text-gray-600 mb-8">
                {isFrench
                  ? 'Chaque mission est suivie avec rigueur pour garantir sécurité, performance et conformité opérationnelle.'
                  : 'Each mission is followed with rigor to guarantee safety, performance and operational compliance.'}
              </p>
              <div className="space-y-6">
                {service.stats.map((stat, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-[#232d37]">{isFrench ? stat.label.fr : stat.label.en}</span>
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