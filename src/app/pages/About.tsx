import { motion } from 'motion/react';
import { Target, Eye, Award, Users, Shield, Zap, Heart, CheckCircle2, TrendingUp, Facebook, Linkedin } from 'lucide-react';
import { Breadcrumb } from '../components/Breadcrumb';

export default function About() {
  const values = [
    {
      icon: Shield,
      title: 'Transparence',
      description: 'Communication claire et honnête à chaque étape de votre projet logistique.'
    },
    {
      icon: Zap,
      title: 'Rapidité',
      description: 'Engagement ferme sur les délais avec un suivi rigoureux de vos expéditions.'
    },
    {
      icon: CheckCircle2,
      title: 'Conformité',
      description: 'Respect strict des réglementations douanières et standards internationaux.'
    },
    {
      icon: Heart,
      title: 'Engagement',
      description: 'Dévouement total à la réussite de vos opérations import-export.'
    }
  ];

  const team = [
    {
      name: 'Ibrahima Diallo',
      role: 'Directeur Général',
      image: 'https://images.unsplash.com/photo-1758518731468-98e90ffd7430?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHRlYW18ZW58MXx8fHwxNzcxMTU5NTI4fDA&ixlib=rb-4.1.0&q=80&w=400'
    },
    {
      name: 'Fatoumata Camara',
      role: 'Directrice des Opérations',
      image: 'https://images.unsplash.com/photo-1758518731468-98e90ffd7430?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHRlYW18ZW58MXx8fHwxNzcxMTU5NTI4fDA&ixlib=rb-4.1.0&q=80&w=400'
    },
    {
      name: 'Mamadou Bah',
      role: 'Responsable Douane',
      image: 'https://images.unsplash.com/photo-1758518731468-98e90ffd7430?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHRlYW18ZW58MXx8fHwxNzcxMTU5NTI4fDA&ixlib=rb-4.1.0&q=80&w=400'
    },
    {
      name: 'Aissatou Sylla',
      role: 'Responsable Fret',
      image: 'https://images.unsplash.com/photo-1758518731468-98e90ffd7430?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHRlYW18ZW58MXx8fHwxNzcxMTU5NTI4fDA&ixlib=rb-4.1.0&q=80&w=400'
    }
  ];

  const milestones = [
    {
      year: '2023',
      title: 'Création d\'IGS',
      description: 'Lancement de nos activités de transit et dédouanement à Conakry'
    },
    {
      year: '2024',
      title: 'Croissance rapide',
      description: 'Développement de notre réseau de partenaires et expansion de nos services'
    },
    {
      year: '2025',
      title: 'Digitalisation',
      description: 'Lancement du portail client en ligne pour un suivi en temps réel'
    },
    {
      year: '2026',
      title: 'Consolidation',
      description: 'Renforcement de notre position comme acteur majeur du transit en Guinée'
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-20">
      {/* Hero Section */}
      <section className="relative mb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1694702740570-0a31ee1525c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBidWlsZGluZ3xlbnwxfHx8fDE3NzExOTAzOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Office building"
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
              À Propos d'<span className="text-[#E85E27]">IGS</span>
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Plus qu'un prestataire logistique, IGS est votre partenaire stratégique pour tous vos projets de transit et dédouanement en Guinée et à l'international.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Presentation */}
      <section className="container mx-auto px-4 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-[#232d37] mb-6">
              Notre Histoire
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Fondée en 2012, <strong className="text-[#E85E27]">Ibrahima Golden Services (IGS)</strong> s'est rapidement imposée comme un acteur majeur du secteur du transit douanier et de la logistique en Guinée.
              </p>
              <p>
                Notre expertise couvre l'ensemble de la chaîne logistique : fret maritime, aérien, routier et dédouanement. Grâce à notre connaissance approfondie des réglementations locales et internationales, nous facilitons vos opérations import-export en toute conformité.
              </p>
              <p>
                Aujourd'hui, IGS c'est plus de <strong>12 années d'expérience</strong>, <strong>1500+ dossiers traités</strong> avec succès, et un réseau de <strong>80+ partenaires internationaux</strong> dans les plus grands ports et aéroports mondiaux.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="bg-[#E85E27] text-white p-6 rounded-xl">
              <div className="text-4xl font-bold mb-2">1500+</div>
              <div className="text-sm">Dossiers Traités</div>
            </div>
            <div className="bg-[#232d37] text-white p-6 rounded-xl">
              <div className="text-4xl font-bold mb-2">80+</div>
              <div className="text-sm">Partenaires</div>
            </div>
            <div className="bg-[#232d37] text-white p-6 rounded-xl">
              <div className="text-4xl font-bold mb-2">12+</div>
              <div className="text-sm">Années d'Expérience</div>
            </div>
            <div className="bg-[#E85E27] text-white p-6 rounded-xl">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-sm">Support Client</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-[#F3F3F3] py-20 mb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="w-16 h-16 bg-[#E85E27]/10 rounded-full flex items-center justify-center mb-6">
                <Target size={32} className="text-[#E85E27]" />
              </div>
              <h3 className="text-2xl font-bold text-[#232d37] mb-4">Notre Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                Faciliter le commerce international de nos clients en leur offrant des solutions logistiques complètes, fiables et conformes aux normes les plus strictes. Nous nous engageons à simplifier la complexité des opérations douanières et de transport.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="w-16 h-16 bg-[#E85E27]/10 rounded-full flex items-center justify-center mb-6">
                <Eye size={32} className="text-[#E85E27]" />
              </div>
              <h3 className="text-2xl font-bold text-[#232d37] mb-4">Notre Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                Devenir le leader incontesté du transit douanier et de la logistique en Guinée, reconnu pour notre excellence opérationnelle, notre innovation technologique et notre engagement envers la satisfaction client.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="container mx-auto px-4 lg:px-8 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-[#232d37] mb-4">
            Nos Valeurs
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Les principes qui guident nos actions au quotidien
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="w-14 h-14 bg-[#E85E27]/10 rounded-full flex items-center justify-center mb-4">
                <value.icon size={28} className="text-[#E85E27]" />
              </div>
              <h3 className="text-xl font-semibold text-[#232d37] mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="container mx-auto px-4 lg:px-8 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <TrendingUp className="w-12 h-12 text-[#E85E27] mx-auto mb-4" />
          <h2 className="text-3xl lg:text-4xl font-bold text-[#232d37] mb-4">
            Notre Parcours
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Une croissance continue guidée par l'excellence
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#E85E27]/20" />
          
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col lg:flex-row gap-8 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                  <div className="inline-block bg-white p-6 rounded-xl shadow-lg border-2 border-[#E85E27]/20">
                    <div className="text-[#E85E27] font-bold text-2xl mb-2">{milestone.year}</div>
                    <h3 className="font-semibold text-[#232d37] text-xl mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
                
                <div className="relative flex-shrink-0">
                  <div className="w-4 h-4 bg-[#E85E27] rounded-full border-4 border-white shadow-lg" />
                </div>
                
                <div className="flex-1 hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section avec Photo */}
      <section className="container mx-auto px-4 lg:px-8 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl h-[500px]"
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1767620275245-70721d786653?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwcGhvdG8lMjBvZmZpY2UlMjBzdGFmZnxlbnwxfHx8fDE3NzEyNjY1NDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Équipe IGS"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#232d37]/95 via-[#232d37]/85 to-[#232d37]/70"></div>
          </div>

          {/* Content */}
          <div className="relative h-full flex items-center px-8 lg:px-16">
            <div className="max-w-2xl text-white">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Users className="w-16 h-16 text-[#E85E27] mb-6" />
                <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                  Une équipe d'experts dévoués
                </h2>
                <p className="text-lg text-gray-200 mb-4 leading-relaxed">
                  L'équipe IGS combine expertise technique, connaissance du terrain et engagement envers l'excellence pour vous offrir des solutions logistiques sur mesure.
                </p>
                <p className="text-lg text-gray-200 leading-relaxed">
                  Nos professionnels qualifiés mettent leur savoir-faire et leur expérience au service de votre réussite, garantissant un accompagnement personnalisé à chaque étape de vos projets.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Team Members */}
      <section className="bg-[#F3F3F3] py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-[#232d37] mb-4">
              Nos Dirigeants
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Des professionnels expérimentés dédiés à votre réussite
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div className="aspect-square overflow-hidden bg-gray-200 relative">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {/* Social Icons Overlay */}
                  <div className="absolute inset-0 bg-[#232d37]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <a
                      href="#"
                      className="w-10 h-10 bg-[#1877f2] rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
                      onClick={(e) => e.preventDefault()}
                    >
                      <Facebook size={20} />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-[#0a66c2] rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
                      onClick={(e) => e.preventDefault()}
                    >
                      <Linkedin size={20} />
                    </a>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-semibold text-[#232d37] mb-1">{member.name}</h3>
                  <p className="text-[#E85E27] text-sm">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
