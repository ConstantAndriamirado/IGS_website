import { Link } from 'react-router';
import { motion } from 'motion/react';
import { Ship, Plane, Truck, FileCheck, ArrowRight, Zap, Shield, Globe, Headphones, CheckCircle2, Users, Star, TruckIcon, Package, ClipboardCheck, FileText, Calendar } from 'lucide-react';
import { ServiceCard } from '../components/ServiceCard';
import { useLanguage } from '../context/LanguageContext';

export default function Home() {
  const { language } = useLanguage();
  const services = [
    {
      icon: Ship,
      title: language === 'fr' ? 'Fret Maritime' : 'Sea Freight',
      description: language === 'fr'
        ? 'Coordination portuaire et transport maritime pour vos expéditions import/export, avec suivi et sécurité.'
        : 'Port coordination and international sea freight for your import/export shipments, with tracking and security.',
      link: '/services/maritime',
      image: 'https://images.unsplash.com/photo-1699588999949-e25959a59550'
    },
    {
      icon: Plane,
      title: language === 'fr' ? 'Fret Aérien' : 'Air Freight',
      description: language === 'fr'
        ? 'Solutions aériennes rapides et fiables pour les cargaisons urgentes, sensibles ou à haute valeur.'
        : 'Fast and reliable air freight solutions for urgent, sensitive and high-value cargo.',
      link: '/services/aerien',
      image: 'https://images.unsplash.com/photo-1720428112577-528107b9c140'
    },
    {
      icon: Truck,
      title: language === 'fr' ? 'Fret Routier' : 'Road Freight',
      description: language === 'fr'
        ? 'Transport routier sécurisé et ponctuel pour les liaisons nationales, régionales et transfrontalières.'
        : 'Secure and punctual road transport for national, regional and cross-border movements.',
      link: '/services/routier',
      image: 'https://plus.unsplash.com/premium_photo-1661962316679-cd9b3b70bcaa'
    },
    {
      icon: FileCheck,
      title: language === 'fr' ? 'Dédouanement' : 'Customs Clearance',
      description: language === 'fr'
        ? 'Gestion documentaire, procédures import/export et conformité douanière pour des opérations sans friction.'
        : 'Document management, import/export procedures and customs compliance for smooth operations.',
      link: '/services/dedouanement',
      image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492'
    }
  ];

  const whyUsItems = [
    {
      icon: Zap,
      title: language === 'fr' ? 'Rapidité' : 'Speed',
      description: language === 'fr'
        ? 'Traitement express de vos dossiers et délais de livraison optimisés.'
        : 'Fast processing of your files and optimized delivery timelines.'
    },
    {
      icon: Shield,
      title: language === 'fr' ? 'Maîtrise Douanière' : 'Customs Expertise',
      description: language === 'fr'
        ? 'Expertise complète des procédures douanières guinéennes et internationales.'
        : 'Full expertise in Guinean and international customs procedures.'
    },
    {
      icon: Globe,
      title: language === 'fr' ? 'Réseau International' : 'International Network',
      description: language === 'fr'
        ? 'Partenaires de confiance dans plusieurs pays à travers le monde.'
        : 'Trusted partners in multiple countries around the world.'
    },
    {
      icon: Headphones,
      title: language === 'fr' ? 'Suivi Personnalisé' : 'Personalized Support',
      description: language === 'fr'
        ? 'Accompagnement dédié et support client disponible 24/7.'
        : 'Dedicated support and client assistance available 24/7.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center pt-16 lg:pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1703977883249-d959f2b0c1ae"
            alt="Logistics"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1F1F1F]/90 via-[#1F1F1F]/70 to-[#1F1F1F]/50" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl lg:max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                {language === 'fr' ? 'Votre partenaire stratégique pour un commerce international fluide' : 'Your strategic partner for smooth international trade'}
              </h1>
              <p className="text-xl text-gray-200 mb-8 max-w-3xl">
                {language === 'fr'
                  ? 'De la préparation documentaire à la livraison finale, IGS organise chaque étape avec rapidité, conformité et visibilité pour vous faire gagner en sérénité.'
                  : 'From document preparation to final delivery, IGS manages every step with speed, compliance and visibility so you can operate with confidence.'}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/quote-request"
                  className="bg-[#E85E27] hover:bg-[#d14d1a] text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center gap-2 group"
                >
                  {language === 'fr' ? 'Demander un devis' : 'Request a quote'}
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </Link>
                <Link
                  to="/contact"
                  className="bg-white hover:bg-gray-100 text-[#232d37] px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
                >
                  {language === 'fr' ? 'Nous contacter' : 'Contact us'}
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Us Section - Image Grid + Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
            {/* Left Side - Image Grid */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-full"
            >
              <div className="rounded-3xl overflow-hidden h-full min-h-[400px]">
                <img
                  src="https://images.unsplash.com/photo-1590497008307-a56b3007197e"
                  alt="Container Logistics"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Right Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-4">
                <span className="text-[#E85E27] font-semibold uppercase tracking-wide text-sm">
                  {language === 'fr' ? 'Expertise en transit, dédouanement et logistique' : 'Expertise in transit, customs clearance and logistics'}
                </span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#232d37] mb-6 leading-tight">
                {language === 'fr' ? 'Une présence fiable pour chaque opération qui doit avancer' : 'A dependable presence for every operation that must move forward'}
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                {language === 'fr'
                  ? 'IGS accompagne les entreprises qui doivent importer, exporter ou faire évoluer leurs flux de marchandises sans compromis sur la conformité, les délais ou la qualité du suivi.'
                  : 'IGS supports companies that need to import, export or expand their cargo flows without compromising compliance, deadlines or service quality.'}
              </p>

              {/* Checkmarks List */}
              <div className="space-y-4 mb-8">
                {[
                  language === 'fr'
                    ? 'Expertise en dédouanement import/export et formalités douanières'
                    : 'Expertise in import/export customs clearance and formalities',
                  language === 'fr'
                    ? 'Traitement rapide, conforme et transparent de chaque dossier'
                    : 'Fast, compliant and transparent handling of every file',
                  language === 'fr'
                    ? 'Maîtrise des réglementations guinéennes et internationales'
                    : 'Mastery of Guinean and international regulations',
                  language === 'fr'
                    ? 'Accompagnement sur mesure pour chaque chaîne logistique'
                    : 'Tailored support for every logistics chain'
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-[#E85E27] flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 size={16} className="text-white" />
                    </div>
                    <span className="text-[#232d37] font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>

              {/* Bottom Stats and CTA */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <Link
                  to="/contact"
                  className="bg-[#E85E27] hover:bg-[#d14d1a] text-white px-8 py-3.5 rounded-lg transition-colors font-medium text-base"
                >
                  {language === 'fr' ? 'Contactez-Nous' : 'Contact us'}
                </Link>

                <div className="flex items-center gap-6">
                  {/* Client Reviews */}
                  <div className="flex flex-col items-center">
                    <div className="flex items-center gap-1 mb-1">
                      <Users size={24} className="text-[#E85E27]" />
                    </div>
                    <div className="flex gap-0.5 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} className="fill-[#E85E27] text-[#E85E27]" />
                      ))}
                    </div>
                    <p className="text-xs text-gray-600">
                      {language === 'fr' ? 'Clients 4.8 (250+ Avis)' : 'Customers 4.8 (250+ Reviews)'}
                    </p>
                  </div>

                  {/* Years of Experience */}

                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-[#F3F3F3]">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 gap-6"
          >
            <div>
              <div className="mb-3">
                <span className="text-[#E85E27] font-semibold uppercase tracking-wide text-sm">
                  {language === 'fr' ? 'NOS MEILLEURS SERVICES' : 'OUR CORE SERVICES'}
                </span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#232d37] leading-tight">
                {language === 'fr' ? (
                  <>
                    Des solutions complètes
                    <br />
                    pour sécuriser votre chaîne logistique
                  </>
                ) : (
                  <>
                    Complete solutions
                    <br />
                    to secure your logistics chain
                  </>
                )}
              </h2>
            </div>
            <Link
              to="/services"
              className="flex items-center gap-2 text-[#232d37] font-semibold hover:text-[#E85E27] transition-colors group"
            >
              {language === 'fr' ? 'Nos Services' : 'Our Services'}
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-20 bg-[#232d37]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1521790797524-b2497295b8a0" 
                  alt="IGS Professional Team" 
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </motion.div>

            {/* Content Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col lg:flex-row gap-8"
            >
              <div className="flex-1">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                  {language === 'fr' ? 'Pourquoi Nous Choisir ?' : 'Why Choose Us?'}
                </h2>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  {language === 'fr'
                    ? 'En choisissant IGS, vous gagnez en visibilité, en réactivité et en assurance opérationnelle. Nous transformons la complexité logistique en un avantage concret pour votre activité.'
                    : 'By choosing IGS, you gain visibility, responsiveness and operational peace of mind. We turn logistics complexity into a concrete advantage for your business.'}
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-[#E85E27] hover:bg-[#d14d1a] text-white px-8 py-3.5 rounded-lg transition-colors font-medium text-base"
                >
                  {language === 'fr' ? 'Contactez-nous' : 'Contact us'}
                  <ArrowRight size={20} />
                </Link>
              </div>

              {/* Stats */}
              <div className="flex flex-row lg:flex-col gap-8 justify-start">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                    <TruckIcon size={32} className="text-[#E85E27]" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white">2000+</div>
                    <div className="text-gray-300 text-sm">{language === 'fr' ? 'Expéditions Réalisées' : 'Shipments handled'}</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                    <Globe size={32} className="text-[#E85E27]" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white">4+</div>
                    <div className="text-gray-300 text-sm">{language === 'fr' ? 'Années d’Expérience' : 'Years of experience'}</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield size={32} className="text-[#E85E27]" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white">24/7</div>
                    <div className="text-gray-300 text-sm">{language === 'fr' ? 'Support Client' : 'Customer support'}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-[#232d37] mb-4">
                {language === 'fr' ? 'Nos Réalisations' : 'Our Achievements'}
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                {language === 'fr'
                  ? 'IGS traite quotidiennement des opérations de dédouanement complexes avec une expertise reconnue dans le transit maritime, aérien et routier.'
                  : 'IGS handles complex customs operations every day with recognized expertise in maritime, air and road transit.'}
              </p>
              <Link to="/projects" className="inline-flex items-center gap-2 text-[#E85E27] font-semibold hover:text-[#d14d1a] transition-colors mb-8">
                {language === 'fr' ? 'Découvrir nos réalisations' : 'Discover our projects'}
                <ArrowRight size={18} />
              </Link>

              {/* Progress Bars */}
              <div className="space-y-6">
                {/* Dossiers Dédouanés */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-[#232d37]">{language === 'fr' ? 'Dossiers Dédouanés Sans Incident' : 'Customs Files Processed Without Incident'}</span>
                    <span className="font-bold text-[#232d37]">95%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "95%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="h-full bg-[#E85E27] rounded-full"
                    />
                  </div>
                </div>

                {/* Transit Maritime */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-[#232d37]">{language === 'fr' ? 'Transit Maritime & Aérien' : 'Maritime & Air Transit'}</span>
                    <span className="font-bold text-[#232d37]">88%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "88%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                      className="h-full bg-[#E85E27] rounded-full"
                    />
                  </div>
                </div>

                {/* Transport des Marchandises */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-[#232d37]">{language === 'fr' ? 'Transport des Marchandises' : 'Cargo Transport'}</span>
                    <span className="font-bold text-[#232d37]">87%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "87%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeOut", delay: 0.4 }}
                      className="h-full bg-[#E85E27] rounded-full"
                    />
                  </div>
                </div>

                {/* Clients Satisfaits */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-[#232d37]">{language === 'fr' ? 'Clients Satisfaits' : 'Satisfied Clients'}</span>
                    <span className="font-bold text-[#232d37]">92%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "92%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeOut", delay: 0.6 }}
                      className="h-full bg-[#E85E27] rounded-full"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1524758631624-e2822e304c36" 
                alt="Logistique et transit douanier IGS" 
                className="w-full h-auto rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-[#232d37] text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-[#E85E27] font-semibold text-sm uppercase tracking-wider mb-3">
              COMMENT ÇA MARCHE ?
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Une prise en charge simple, rapide
              <br />
              et sécurisée de vos marchandises
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative">
            {/* Step 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center relative"
            >
              <div className="relative inline-block mb-6">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto shadow-lg">
                  <FileText size={40} className="text-[#232d37]" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#E85E27] rounded-full flex items-center justify-center text-white font-bold text-sm">
                  01
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Analyse de la demande</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Contactez-Nous, nous analysons votre marchandise de l&apos;origine aux documents nécessaires.
              </p>
              {/* Arrow for desktop */}
              <div className="hidden lg:block absolute top-12 -right-4 text-[#E85E27]">
                <ArrowRight size={24} strokeWidth={2} />
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center relative"
            >
              <div className="relative inline-block mb-6">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto shadow-lg">
                  <ClipboardCheck size={40} className="text-[#232d37]" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#E85E27] rounded-full flex items-center justify-center text-white font-bold text-sm">
                  02
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Proposition de solution</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Nos experts vous proposent la solution optimale et vous recevez un devis détaillé.
              </p>
              {/* Arrow for desktop */}
              <div className="hidden lg:block absolute top-12 -right-4 text-[#E85E27]">
                <ArrowRight size={24} strokeWidth={2} />
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center relative"
            >
              <div className="relative inline-block mb-6">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto shadow-lg">
                  <Package size={40} className="text-[#232d37]" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#E85E27] rounded-full flex items-center justify-center text-white font-bold text-sm">
                  03
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Organisation Transport</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Organisation du fret maritime, aérien ou routier avec nos partenaires.
              </p>
              {/* Arrow for desktop */}
              <div className="hidden lg:block absolute top-12 -right-4 text-[#E85E27]">
                <ArrowRight size={24} strokeWidth={2} />
              </div>
            </motion.div>

            {/* Step 4 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center relative"
            >
              <div className="relative inline-block mb-6">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto shadow-lg">
                  <FileCheck size={40} className="text-[#232d37]" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#E85E27] rounded-full flex items-center justify-center text-white font-bold text-sm">
                  04
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Dédouanement</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Prise en charge totale des procédures douanières.
              </p>
              {/* Arrow for desktop */}
              <div className="hidden lg:block absolute top-12 -right-4 text-[#E85E27]">
                <ArrowRight size={24} strokeWidth={2} />
              </div>
            </motion.div>

            {/* Step 5 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-center"
            >
              <div className="relative inline-block mb-6">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto shadow-lg">
                  <TruckIcon size={40} className="text-[#232d37]" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#E85E27] rounded-full flex items-center justify-center text-white font-bold text-sm">
                  05
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Livraison & Suivi</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Livraison finale et suivi en temps réel via notre portail client.
              </p>
            </motion.div>
          </div>

          {/* Result Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center"
          >

          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#F3F3F3]">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-[#232d37] mb-4">
              Prêt à renforcer votre logistique ?
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Faisons le point sur votre besoin, votre calendrier et vos contraintes pour vous proposer une solution claire, rapide et conforme.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/quote-request"
                className="bg-[#E85E27] hover:bg-[#d14d1a] text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center gap-2 group"
              >
                Demander un devis rapide
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              <Link
                to="/services"
                className="bg-[#F3F3F3] hover:bg-gray-200 text-[#232d37] px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
              >
                Découvrir nos services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Header */}
          <div className="flex justify-between items-end mb-12">
            <div>
              <p className="text-[#E85E27] font-semibold uppercase tracking-wide mb-2">
                ACTUALITÉS & CONSEILS
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#232d37]">
                Les réflexions utiles pour mieux piloter vos opérations
              </h2>
            </div>
            <Link to="/blog" className="hidden md:flex items-center gap-2 text-[#232d37] font-semibold hover:text-[#E85E27] transition-colors">
              Voir Tout
              <ArrowRight size={20} />
            </Link>
          </div>

          {/* Blog Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1585713181935-d5f622cc2415" 
                  alt="Transit maritime" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                  <Calendar size={16} />
                  <span>12 Fév, 2026</span>
                </div>
                <h3 className="text-xl font-bold text-[#232d37] mb-3">
                  Optimisez vos opérations de transit maritime
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Découvrez comment IGS simplifie vos processus d'import-export avec des solutions adaptées.
                </p>
                <Link to="/blog/optimiser-couts-fret-maritime-strategies" className="flex items-center gap-2 text-[#232d37] font-semibold hover:text-[#E85E27] transition-colors group">
                  Savoir Plus
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.article>

            {/* Card 2 */}
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1583521214690-73421a1829a9" 
                  alt="Dédouanement" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                  <Calendar size={16} />
                  <span>08 Fév, 2026</span>
                </div>
                <h3 className="text-xl font-bold text-[#232d37] mb-3">
                  Guide complet du dédouanement en Guinée
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Tout ce que vous devez savoir sur les procédures douanières et la documentation requise.
                </p>
                <Link to="/blog/nouvelles-procedures-douanieres-guinee-2026" className="flex items-center gap-2 text-[#232d37] font-semibold hover:text-[#E85E27] transition-colors group">
                  Savoir Plus
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.article>

            {/* Card 3 */}
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1713846047266-12aa96cbbb6c" 
                  alt="Fret aérien" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                  <Calendar size={16} />
                  <span>05 Fév, 2026</span>
                </div>
                <h3 className="text-xl font-bold text-[#232d37] mb-3">
                  Fret aérien : rapidité et efficacité garanties
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Expédiez vos marchandises en toute sécurité avec nos services de fret aérien express.
                </p>
                <Link to="/blog/fret-aerien-express-rapidite-difference" className="flex items-center gap-2 text-[#232d37] font-semibold hover:text-[#E85E27] transition-colors group">
                  Savoir Plus
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.article>
          </div>

          {/* Mobile "Voir Tout" Button */}
          <div className="flex md:hidden justify-center mt-8">
            <Link to="/blog" className="flex items-center gap-2 text-[#232d37] font-semibold hover:text-[#E85E27] transition-colors">
              Voir Tout
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}