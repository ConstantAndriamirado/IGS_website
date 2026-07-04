import { motion } from 'motion/react';
import { Building2, Mail, Phone, MapPin, Scale } from 'lucide-react';
import { Breadcrumb } from '../components/Breadcrumb';

export function MentionsLegales() {
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Header Section */}
      <div className="bg-gradient-to-br from-[#232d37] to-[#2a3a47] text-white pt-12 pb-20 lg:pt-16 lg:pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <Breadcrumb variant="dark" />
            <div className="flex items-center gap-4 mb-4">
              <Scale size={48} className="text-[#E85E27]" />
              <h1 className="text-4xl lg:text-5xl font-bold">
                Mentions Légales
              </h1>
            </div>
            <p className="text-xl text-gray-300">
              Informations légales et réglementaires d'Ibrahima Golden Services
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto space-y-12"
        >
          {/* Identification de l'entreprise */}
          <section>
            <h2 className="text-2xl lg:text-3xl font-bold text-[#232d37] mb-6 flex items-center gap-3">
              <Building2 className="text-[#E85E27]" size={32} />
              Identification de l'entreprise
            </h2>
            <div className="bg-gray-50 rounded-xl p-6 lg:p-8 space-y-4">
              <div>
                <h3 className="font-semibold text-[#232d37] mb-2">Raison sociale</h3>
                <p className="text-gray-700">Ibrahima Golden Services (IGS)</p>
              </div>
              <div>
                <h3 className="font-semibold text-[#232d37] mb-2">Forme juridique</h3>
                <p className="text-gray-700">Société à Responsabilité Limitée (SARL)</p>
              </div>
              <div>
                <h3 className="font-semibold text-[#232d37] mb-2">Siège social</h3>
                <p className="text-gray-700 flex items-start gap-2">
                  <MapPin size={20} className="text-[#E85E27] flex-shrink-0 mt-1" />
                  <span>Almamya, Kaloum, Rue de la gare, Immeuble Azur, Conakry, République de Guinée</span>
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-[#232d37] mb-2">Numéro de téléphone</h3>
                <p className="text-gray-700 flex items-center gap-2">
                  <Phone size={20} className="text-[#E85E27]" />
                  <a href="tel:+224612004903" className="hover:text-[#E85E27] transition-colors">
                    +224 612 004 903
                  </a>
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-[#232d37] mb-2">Adresse e-mail</h3>
                <p className="text-gray-700 flex items-center gap-2">
                  <Mail size={20} className="text-[#E85E27]" />
                  <a href="mailto:contact@igservices.com" className="hover:text-[#E85E27] transition-colors">
                    contact@igservices.com
                  </a>
                </p>
              </div>
            </div>
          </section>

          {/* Directeur de publication */}
          <section>
            <h2 className="text-2xl lg:text-3xl font-bold text-[#232d37] mb-6">
              Directeur de publication
            </h2>
            <div className="bg-gray-50 rounded-xl p-6 lg:p-8">
              <p className="text-gray-700">
                Le directeur de la publication du site est le représentant légal d'Ibrahima Golden Services.
              </p>
            </div>
          </section>

          {/* Hébergement du site */}
          <section>
            <h2 className="text-2xl lg:text-3xl font-bold text-[#232d37] mb-6">
              Hébergement du site
            </h2>
            <div className="bg-gray-50 rounded-xl p-6 lg:p-8 space-y-4">
              <p className="text-gray-700">
                Le site web d'Ibrahima Golden Services est hébergé par un prestataire professionnel.
              </p>
              <p className="text-gray-700 text-sm">
                Pour toute question relative à l'hébergement, veuillez nous contacter à l'adresse : 
                <a href="mailto:contact@igservices.com" className="text-[#E85E27] hover:underline ml-1">
                  contact@igservices.com
                </a>
              </p>
            </div>
          </section>

          {/* Propriété intellectuelle */}
          <section>
            <h2 className="text-2xl lg:text-3xl font-bold text-[#232d37] mb-6">
              Propriété intellectuelle
            </h2>
            <div className="bg-gray-50 rounded-xl p-6 lg:p-8 space-y-4">
              <p className="text-gray-700">
                L'ensemble du contenu présent sur ce site (textes, images, logos, vidéos, graphismes, etc.) 
                est la propriété exclusive d'Ibrahima Golden Services ou fait l'objet d'une autorisation 
                d'utilisation.
              </p>
              <p className="text-gray-700">
                Toute reproduction, représentation, modification, publication, adaptation de tout ou partie 
                des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf 
                autorisation écrite préalable d'Ibrahima Golden Services.
              </p>
            </div>
          </section>

          {/* Limitation de responsabilité */}
          <section>
            <h2 className="text-2xl lg:text-3xl font-bold text-[#232d37] mb-6">
              Limitation de responsabilité
            </h2>
            <div className="bg-gray-50 rounded-xl p-6 lg:p-8 space-y-4">
              <p className="text-gray-700">
                Ibrahima Golden Services met tout en œuvre pour offrir aux utilisateurs des informations 
                et/ou outils disponibles et vérifiés. Toutefois, elle ne saurait être tenue responsable 
                des erreurs, d'une absence de disponibilité des informations et/ou de la présence de virus 
                sur son site.
              </p>
              <p className="text-gray-700">
                Les informations fournies par Ibrahima Golden Services le sont à titre indicatif. Elles ne 
                sauraient dispenser l'utilisateur d'une analyse complémentaire et personnalisée.
              </p>
            </div>
          </section>

          {/* Développement du site */}
          <section>
            <h2 className="text-2xl lg:text-3xl font-bold text-[#232d37] mb-6">
              Conception et développement
            </h2>
            <div className="bg-gray-50 rounded-xl p-6 lg:p-8">
              <p className="text-gray-700">
                Ce site a été conçu et développé par{' '}
                <a 
                  href="https://www.soulcom.gn" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#E85E27] hover:underline font-semibold"
                >
                  SoulCom
                </a>
              </p>
            </div>
          </section>

          {/* Contact */}
          <section className="border-t border-gray-200 pt-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-[#232d37] mb-6">
              Nous contacter
            </h2>
            <div className="bg-[#232d37] text-white rounded-xl p-6 lg:p-8">
              <p className="mb-4">
                Pour toute question concernant les mentions légales, n'hésitez pas à nous contacter :
              </p>
              <div className="space-y-2">
                <p className="flex items-center gap-2">
                  <Mail size={18} className="text-[#E85E27]" />
                  <a href="mailto:contact@igservices.com" className="hover:text-[#E85E27] transition-colors">
                    contact@igservices.com
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <Phone size={18} className="text-[#E85E27]" />
                  <a href="tel:+224612004903" className="hover:text-[#E85E27] transition-colors">
                    +224 612 004 903
                  </a>
                </p>
              </div>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
