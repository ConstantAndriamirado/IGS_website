import { motion } from 'motion/react';
import { ArrowRight, BadgeCheck, Briefcase, FileCheck, Globe, Ship, Truck } from 'lucide-react';
import { Link } from 'react-router';
import { Breadcrumb } from '../components/Breadcrumb';
import { useLanguage } from '../context/LanguageContext';

export default function Projects() {
  const { language } = useLanguage();
  const isFrench = language === 'fr';

  const stats = [
    { label: isFrench ? 'Conteneurs dédouanés' : 'Containers cleared', value: '1 500+' },
    { label: isFrench ? 'Opérations réalisées' : 'Operations completed', value: '500+' },
    { label: isFrench ? 'Ports et frontières desservis' : 'Ports and borders served', value: '10+' },
    { label: isFrench ? 'Taux de livraison dans les délais' : 'On-time delivery rate', value: '95%' }
  ];

  const caseStudies = [
    {
      title: isFrench ? 'Importation d’un complexe industriel' : 'Industrial complex import',
      sector: isFrench ? 'Industrie' : 'Industry',
      mission: isFrench ? 'Assurer le transport international, le dédouanement et la livraison finale d’un lot d’équipements stratégiques.' : 'Ensure the international transport, customs clearance and final delivery of a batch of strategic equipment.',
      challenge: isFrench ? 'Plusieurs conteneurs, délais serrés et exigences qualité élevées sur l’ensemble de la chaîne.' : 'Several containers, tight deadlines and high quality requirements across the whole chain.',
      solution: isFrench ? 'Coordination internationale, préparation documentaire rigoureuse et suivi opérationnel jusqu’à la réception finale.' : 'International coordination, rigorous document preparation and operational follow-up until final reception.',
      result: isFrench ? 'Projet livré dans les délais, sans interruption de production.' : 'Project delivered on time, without interrupting production.'
    },
    {
      title: isFrench ? 'Transit de marchandises sensibles sous contraintes réglementaires' : 'Sensitive cargo transit under regulatory constraints',
      sector: isFrench ? 'Pharmaceutique' : 'Pharmaceutical',
      mission: isFrench ? 'Garantir la continuité du transit tout en respectant des exigences de conformité strictes.' : 'Guarantee continuity of transit while meeting strict compliance requirements.',
      challenge: isFrench ? 'Échéances très courtes, documentation renforcée et suivi permanent requis.' : 'Very short deadlines, enhanced documentation and constant monitoring required.',
      solution: isFrench ? 'Planification logistique détaillée, dédouanement prioritaire et communication continue avec les parties prenantes.' : 'Detailed logistics planning, priority customs clearance and continuous communication with stakeholders.',
      result: isFrench ? 'Livraison sécurisée, conformité totale respectée et visibilité permanente sur l’avancement.' : 'Secure delivery, full compliance maintained and continuous visibility on progress.'
    }
  ];

  const partners = [
    'Compagnies maritimes',
    'Terminaux portuaires',
    'Transporteurs',
    'Institutions',
    'Partenaires internationaux'
  ];

  const trustItems = [
    isFrench ? 'Expertise douanière' : 'Customs expertise',
    isFrench ? 'Respect des délais' : 'On-time delivery',
    isFrench ? 'Suivi personnalisé' : 'Personalized tracking',
    isFrench ? 'Équipe expérimentée' : 'Experienced team'
  ];

  return (
    <div className="min-h-screen pt-20 pb-20">
      <section className="relative mb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1621060344848-262c81b806a2" alt="IGS projects" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#232d37]/80 to-[#232d37]/60" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 py-20 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl text-white">
            <Breadcrumb variant="dark" />
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">{isFrench ? 'Nos' : 'Our'} <span className="text-[#E85E27]">{isFrench ? 'réalisations' : 'projects'}</span></h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              {isFrench
                ? 'Depuis plusieurs années, IGS accompagne des entreprises nationales et internationales dans leurs opérations logistiques avec rapidité, conformité et une vraie capacité d’exécution sur le terrain.'
                : 'For several years, IGS has supported national and international companies in their logistics operations with speed, compliance and real execution capacity on the ground.'}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="container mx-auto px-4 lg:px-8 space-y-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm text-center">
              <div className="text-3xl font-bold text-[#E85E27] mb-2">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-[#232d37] text-white rounded-3xl p-8 lg:p-10">
            <h2 className="text-3xl font-bold mb-4">{isFrench ? 'Des résultats concrets au service de nos clients' : 'Concrete results at the service of our clients'}</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              {isFrench
                ? 'Chaque dossier traité reflète notre engagement envers la rapidité, la conformité et la qualité de l’accompagnement client.'
                : 'Each file handled reflects our commitment to speed, compliance and the quality of client support.'}
            </p>
            <div className="space-y-3">
              {trustItems.map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm">
                  <BadgeCheck className="text-[#E85E27]" size={18} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-lg">
            <img src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80" alt="IGS operation" className="w-full h-full object-cover" />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-[#E85E27] font-semibold uppercase tracking-wide text-sm">{isFrench ? 'Études de cas' : 'Case studies'}</p>
              <h2 className="text-3xl font-bold text-[#232d37]">{isFrench ? 'Des réalisations qui rassurent' : 'Achievements that inspire confidence'}</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {caseStudies.map((study) => (
              <div key={study.title} className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-[#232d37] mb-3">{study.title}</h3>
                <p className="text-sm text-[#E85E27] font-medium mb-4">{study.sector}</p>
                <div className="space-y-3 text-gray-600 text-sm">
                  <p><span className="font-semibold text-[#232d37]">{isFrench ? 'Mission :' : 'Mission :'}</span> {study.mission}</p>
                  <p><span className="font-semibold text-[#232d37]">{isFrench ? 'Défis :' : 'Challenges :'}</span> {study.challenge}</p>
                  <p><span className="font-semibold text-[#232d37]">{isFrench ? 'Solutions :' : 'Solutions :'}</span> {study.solution}</p>
                  <p><span className="font-semibold text-[#232d37]">{isFrench ? 'Résultat :' : 'Result :'}</span> {study.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#F3F3F3] rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-[#232d37] mb-4">{isFrench ? 'Nos partenaires' : 'Our partners'}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {isFrench
                ? 'Nous travaillons avec un réseau de partenaires stratégiques pour garantir la continuité, la qualité et la rapidité de chaque opération.'
                : 'We work with a network of strategic partners to guarantee continuity, quality and speed in every operation.'}
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {partners.map((partner) => (
              <div key={partner} className="bg-white rounded-xl border border-gray-200 p-4 text-center text-sm font-semibold text-[#232d37] shadow-sm">
                {partner}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-[#232d37] mb-6">{isFrench ? 'Notre méthode de travail' : 'Our working method'}</h2>
            <div className="space-y-4">
              {['Analyse du besoin', 'Étude documentaire', 'Planification', 'Transport', 'Dédouanement', 'Livraison', 'Suivi client'].map((step, index) => (
                <div key={step} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#E85E27] text-white flex items-center justify-center text-sm font-semibold">{index + 1}</div>
                  <span className="text-gray-700">{step}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[#232d37] text-white rounded-3xl p-8 lg:p-10">
            <h2 className="text-2xl font-bold mb-4">{isFrench ? 'Pourquoi nos clients nous font confiance' : 'Why our clients trust us'}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[FileCheck, Globe, Briefcase, Truck].map((Icon, index) => (
                <div key={index} className="bg-white/10 rounded-2xl p-4">
                  <Icon className="text-[#E85E27] mb-3" size={22} />
                  <div className="font-semibold">{trustItems[index]}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-[#F3F3F3] rounded-3xl p-8 lg:p-12 text-center">
          <h2 className="text-3xl font-bold text-[#232d37] mb-4">{isFrench ? 'Prêt à démarrer votre prochain projet ?' : 'Ready to start your next project?'}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            {isFrench
              ? 'Notre équipe vous accompagne depuis la première demande jusqu’à l’achèvement de vos opérations, avec un suivi attentif à chaque étape.'
              : 'Our team supports you from your first request through to the completion of your operations, with attentive follow-up at every stage.'}
          </p>
          <Link to="/quote-request" className="inline-flex items-center gap-2 bg-[#E85E27] hover:bg-[#d14d1a] text-white px-8 py-3.5 rounded-lg font-medium transition-colors">
            {isFrench ? 'Demander un devis' : 'Request a quote'}
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
