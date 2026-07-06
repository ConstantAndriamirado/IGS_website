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
        ? 'Transport maritime international de marchandises avec suivi en temps réel. Solutions adaptées à chaque volume et chaque besoin.'
        : 'International sea freight services with real-time tracking and tailored solutions for every shipment volume.',
      link: '/services',
      image: 'https://images.unsplash.com/photo-1634638022229-5a52221886dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJnbyUyMHNoaXAlMjBwb3J0JTIwbG9naXN0aWNzfGVufDF8fHx8MTc3MTE1ODQzNHww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      icon: Plane,
      title: language === 'fr' ? 'Fret Aérien' : 'Air Freight',
      description: language === 'fr'
        ? 'Solutions aériennes rapides pour les expéditions urgentes, sensibles ou à forte valeur.'
        : 'Fast air freight solutions for urgent, high-value or time-sensitive shipments.',
      link: '/services',
      image: 'https://images.unsplash.com/photo-1720428112577-528107b9c140?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJnbyUyMGFpcnBsYW5lJTIwZnJlaWdodHxlbnwxfHx8fDE3NzExOTg4MjV8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      icon: Truck,
      title: language === 'fr' ? 'Fret Routier' : 'Road Freight',
      description: language === 'fr'
        ? 'Transport routier fiable pour les liaisons nationales, régionales et transfrontalières.'
        : 'Reliable road transportation for national, regional and cross-border deliveries.',
      link: '/services',
      image: 'https://images.unsplash.com/photo-1761666519980-e29488141562?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cnVjayUyMHRyYW5zcG9ydGF0aW9uJTIwbG9naXN0aWNzfGVufDF8fHx8MTc3MTE5ODgyNXww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      icon: FileCheck,
      title: language === 'fr' ? 'Dédouanement' : 'Customs Clearance',
      description: language === 'fr'
        ? 'Expertise en procédures douanières import/export pour des opérations conformes et sans retard.'
        : 'Customs expertise for import/export procedures with full compliance and smooth processing.',
      link: '/services',
      image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b21zJTIwd2FyZWhvdXNlJTIwaW50ZXJuYXRpb25hbHxlbnwxfHx8fDE3NzExOTg4MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080'
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
      <section className="relative h-[90vh] min-h-[600px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1703977883249-d959f2b0c1ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaGlwcGluZyUyMGNvbnRhaW5lcnMlMjBjYXJnbyUyMHBvcnQlMjBsb2dpc3RpY3N8ZW58MXx8fHwxNzc0Nzg1MTYxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Logistics"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1F1F1F]/90 via-[#1F1F1F]/70 to-[#1F1F1F]/50" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                {language === 'fr' ? 'Votre partenaire stratégique en' : 'Your strategic partner in'}{' '}
                <span className="text-[#E85E27]">{language === 'fr' ? 'Transit & Logistique' : 'Transit & Logistics'}</span>
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                {language === 'fr'
                  ? 'Solutions complètes de fret maritime, aérien, routier et dédouanement en Guinée. Performance, fiabilité et expertise au service de votre réussite.'
                  : 'Comprehensive solutions for sea, air, road freight and customs clearance in Guinea. Performance, reliability and expertise at the service of your success.'}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-[#E85E27] hover:bg-[#d14d1a] text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center gap-2 group"
                >
                  {language === 'fr' ? 'Demander un devis' : 'Request a quote'}
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </Link>
                <Link
                  to="/portail-client"
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
                  src="https://images.unsplash.com/photo-1644134913822-1cd030b3d148?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaGlwcGluZyUyMGNvbnRhaW5lciUyMGxvZ2lzdGljcyUyMHBvcnQ8ZW58MXx8fHwxNzcxMjAwMTE0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
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
                  {language === 'fr' ? 'Expertise en Transit Douanier et Dédouanement' : 'Expertise in Customs Transit and Clearance'}
                </span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#232d37] mb-6 leading-tight">
                {language === 'fr' ? 'Votre Partenaire de Confiance pour le Dédouanement en Guinée' : 'Your Trusted Partner for Customs Clearance in Guinea'}
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                {language === 'fr'
                  ? 'IGS vous accompagne dans toutes vos démarches de transit douanier avec une expertise reconnue en dédouanement maritime, aérien et routier. Nous simplifions vos formalités douanières pour une importation et exportation sans tracas.'
                  : 'IGS supports you in all your customs transit processes with recognized expertise in maritime, air and road clearance. We simplify your customs formalities for smooth import and export operations.'}
              </p>

              {/* Checkmarks List */}
              <div className="space-y-4 mb-8">
                {[
                  language === 'fr'
                    ? 'Expertise en dédouanement et formalités douanières'
                    : 'Expertise in customs clearance and formalities',
                  language === 'fr'
                    ? 'Traitement rapide et conforme de vos documents'
                    : 'Fast and compliant processing of your documents',
                  language === 'fr'
                    ? 'Maîtrise des réglementations douanières guinéennes'
                    : 'Mastery of Guinean customs regulations',
                  language === 'fr'
                    ? 'Accompagnement personnalisé pour chaque dossier'
                    : 'Personalized support for every file'
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
                  Contactez-Nous
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
                    <p className="text-xs text-gray-600">Clients 4.8 (250+ Avis)</p>
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
                    de transit douanier
                  </>
                ) : (
                  <>
                    Complete solutions
                    <br />
                    for customs transit
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
                  src="https://images.unsplash.com/photo-1739204618173-3e89def7140f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjB3b3JrZXIlMjBsb2dpc3RpY3MlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzcxMjAyMTAzfDA&ixlib=rb-4.1.0&q=80&w=1080" 
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
                    ? 'En choisissant IGS, vous pouvez être sûr de recevoir des services de transit douanier de haute qualité, adaptés à vos besoins spécifiques. Contactez-nous aujourd\'hui pour en savoir plus sur comment nous pouvons vous aider !'
                    : 'By choosing IGS, you can be sure to receive high-quality customs transit services tailored to your specific needs. Contact us today to learn more about how we can help you!'}
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-[#E85E27] hover:bg-[#d14d1a] text-white px-8 py-3.5 rounded-lg transition-colors font-medium text-base"
                >
                  Contactez-Nous
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
                    <div className="text-3xl font-bold text-white">+1.5K</div>
                    <div className="text-gray-300 text-sm">Dossiers Traités</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                    <Globe size={32} className="text-[#E85E27]" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white">80+</div>
                    <div className="text-gray-300 text-sm">Partenaires</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield size={32} className="text-[#E85E27]" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white">Certifié</div>
                    <div className="text-gray-300 text-sm">Agrément Douanier</div>
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
                src="https://images.unsplash.com/photo-1644134913822-1cd030b3d148?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJnbyUyMHNoaXBwaW5nJTIwY29udGFpbmVyJTIwbG9naXN0aWNzfGVufDF8fHx8MTc3MTIwMzUzMHww&ixlib=rb-4.1.0&q=80&w=1080" 
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
              <h3 className="text-xl font-semibold mb-3">Demande & Analyse</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Contact et analyse de votre marchandise, origine, destination et documents nécessaires.
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
              <h3 className="text-xl font-semibold mb-3">Proposition de Solution</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Nos experts proposent la solution optimale et vous recevez un devis détaillé.
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
                Prise en charge complète des procédures douanières et liquidation.
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
              Prêt à Optimiser Votre Logistique ?
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Contactez-nous dès aujourd'hui pour obtenir un devis personnalisé et découvrir comment nous pouvons vous accompagner dans vos projets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
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
                Dernières Nouvelles
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#232d37]">
                Publications Récentes
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
                  src="https://images.unsplash.com/photo-1644134913822-1cd030b3d148?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaGlwcGluZyUyMGNvbnRhaW5lciUyMHBvcnQlMjBsb2dpc3RpY3N8ZW58MXx8fHwxNzcxMjAzOTY5fDA&ixlib=rb-4.1.0&q=80&w=1080" 
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
                  src="https://images.unsplash.com/photo-1583521214690-73421a1829a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b21zJTIwY2xlYXJhbmNlJTIwZG9jdW1lbnRzJTIwcGFwZXJ3b3JrfGVufDF8fHx8MTc3MTIwMzk2OXww&ixlib=rb-4.1.0&q=80&w=1080" 
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
                  src="https://images.unsplash.com/photo-1713846047266-12aa96cbbb6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJnbyUyMGFpcmNyYWZ0JTIwYWlyJTIwZnJlaWdodxlbnwxfHx8fDE3NzEyMDM5NzB8MA&ixlib=rb-4.1.0&q=80&w=1080" 
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
            <button className="flex items-center gap-2 text-[#232d37] font-semibold hover:text-[#E85E27] transition-colors">
              Voir Tout
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}