import { motion } from 'motion/react';
import { Shield, Lock, Eye, Database, UserCheck, AlertCircle } from 'lucide-react';
import { Breadcrumb } from '../components/Breadcrumb';

export function Confidentialite() {
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
              <Shield size={48} className="text-[#E85E27]" />
              <h1 className="text-4xl lg:text-5xl font-bold">
                Politique de Confidentialité
              </h1>
            </div>
            <p className="text-xl text-gray-300">
              Protection et traitement de vos données personnelles chez IGS
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
          {/* Introduction */}
          <section>
            <div className="bg-[#E85E27]/10 border-l-4 border-[#E85E27] rounded-r-xl p-6">
              <p className="text-gray-700 leading-relaxed">
                Ibrahima Golden Services (IGS) s'engage à protéger la confidentialité et la sécurité de vos 
                données personnelles. Cette politique de confidentialité explique comment nous collectons, 
                utilisons, partageons et protégeons vos informations personnelles conformément aux 
                réglementations en vigueur en République de Guinée.
              </p>
            </div>
          </section>

          {/* Collecte des données */}
          <section>
            <h2 className="text-2xl lg:text-3xl font-bold text-[#232d37] mb-6 flex items-center gap-3">
              <Database className="text-[#E85E27]" size={32} />
              Données collectées
            </h2>
            <div className="bg-gray-50 rounded-xl p-6 lg:p-8 space-y-6">
              <div>
                <h3 className="font-semibold text-[#232d37] mb-3 text-lg">
                  Informations que nous collectons
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#E85E27] mt-1">•</span>
                    <span><strong>Données d'identification :</strong> nom, prénom, raison sociale, fonction</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#E85E27] mt-1">•</span>
                    <span><strong>Coordonnées :</strong> adresse postale, e-mail, numéro de téléphone</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#E85E27] mt-1">•</span>
                    <span><strong>Informations commerciales :</strong> demandes de devis, historique des services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#E85E27] mt-1">•</span>
                    <span><strong>Données de navigation :</strong> adresse IP, cookies, pages visitées</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#E85E27] mt-1">•</span>
                    <span><strong>Documents douaniers :</strong> factures, manifestes, déclarations (dans le cadre de nos services)</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-[#232d37] mb-3 text-lg">
                  Moyens de collecte
                </h3>
                <p className="text-gray-700">
                  Nous collectons ces données via nos formulaires de contact, le portail client, 
                  les échanges par e-mail et téléphone, ainsi que lors de l'exécution de nos 
                  prestations de transit et dédouanement.
                </p>
              </div>
            </div>
          </section>

          {/* Utilisation des données */}
          <section>
            <h2 className="text-2xl lg:text-3xl font-bold text-[#232d37] mb-6 flex items-center gap-3">
              <Eye className="text-[#E85E27]" size={32} />
              Utilisation de vos données
            </h2>
            <div className="bg-gray-50 rounded-xl p-6 lg:p-8 space-y-4">
              <p className="text-gray-700">
                Vos données personnelles sont utilisées dans les buts suivants :
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#E85E27] mt-1">✓</span>
                  <span>Traiter vos demandes de devis et gérer vos commandes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#E85E27] mt-1">✓</span>
                  <span>Assurer la prestation de nos services (transit, dédouanement, fret)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#E85E27] mt-1">✓</span>
                  <span>Vous informer sur l'état de vos dossiers et envois</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#E85E27] mt-1">✓</span>
                  <span>Respecter nos obligations légales et réglementaires</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#E85E27] mt-1">✓</span>
                  <span>Améliorer nos services et votre expérience utilisateur</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#E85E27] mt-1">✓</span>
                  <span>Vous envoyer des communications commerciales (avec votre consentement)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#E85E27] mt-1">✓</span>
                  <span>Assurer la sécurité de notre site et prévenir la fraude</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Partage des données */}
          <section>
            <h2 className="text-2xl lg:text-3xl font-bold text-[#232d37] mb-6 flex items-center gap-3">
              <UserCheck className="text-[#E85E27]" size={32} />
              Partage de vos données
            </h2>
            <div className="bg-gray-50 rounded-xl p-6 lg:p-8 space-y-4">
              <p className="text-gray-700">
                Nous pouvons partager vos données avec :
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#E85E27] mt-1">•</span>
                  <span><strong>Les autorités douanières :</strong> dans le cadre des procédures de dédouanement</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#E85E27] mt-1">•</span>
                  <span><strong>Nos partenaires logistiques :</strong> compagnies maritimes, aériennes, transporteurs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#E85E27] mt-1">•</span>
                  <span><strong>Prestataires techniques :</strong> hébergement, maintenance du site</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#E85E27] mt-1">•</span>
                  <span><strong>Autorités légales :</strong> sur demande et conformément à la loi</span>
                </li>
              </ul>
              <div className="bg-white border-l-4 border-[#E85E27] p-4 mt-4">
                <p className="text-gray-700 text-sm">
                  <strong>Important :</strong> Nous ne vendons jamais vos données personnelles à des tiers.
                </p>
              </div>
            </div>
          </section>

          {/* Sécurité des données */}
          <section>
            <h2 className="text-2xl lg:text-3xl font-bold text-[#232d37] mb-6 flex items-center gap-3">
              <Lock className="text-[#E85E27]" size={32} />
              Sécurité et conservation
            </h2>
            <div className="bg-gray-50 rounded-xl p-6 lg:p-8 space-y-6">
              <div>
                <h3 className="font-semibold text-[#232d37] mb-3 text-lg">
                  Mesures de sécurité
                </h3>
                <p className="text-gray-700 mb-3">
                  Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour 
                  protéger vos données contre :
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="text-[#E85E27]">✓</span>
                    <span>L'accès non autorisé</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#E85E27]">✓</span>
                    <span>La divulgation, la modification ou la destruction</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#E85E27]">✓</span>
                    <span>La perte accidentelle</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-[#232d37] mb-3 text-lg">
                  Durée de conservation
                </h3>
                <p className="text-gray-700">
                  Vos données sont conservées pendant la durée nécessaire aux finalités pour lesquelles 
                  elles sont collectées, conformément aux obligations légales applicables en matière de 
                  douane et de commerce (généralement 5 à 10 ans pour les documents douaniers).
                </p>
              </div>
            </div>
          </section>

          {/* Vos droits */}
          <section>
            <h2 className="text-2xl lg:text-3xl font-bold text-[#232d37] mb-6 flex items-center gap-3">
              <AlertCircle className="text-[#E85E27]" size={32} />
              Vos droits
            </h2>
            <div className="bg-gray-50 rounded-xl p-6 lg:p-8 space-y-4">
              <p className="text-gray-700 mb-4">
                Conformément aux réglementations en vigueur, vous disposez des droits suivants :
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h4 className="font-semibold text-[#232d37] mb-2">Droit d'accès</h4>
                  <p className="text-sm text-gray-600">
                    Obtenir une copie de vos données personnelles
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h4 className="font-semibold text-[#232d37] mb-2">Droit de rectification</h4>
                  <p className="text-sm text-gray-600">
                    Corriger des données inexactes ou incomplètes
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h4 className="font-semibold text-[#232d37] mb-2">Droit à l'effacement</h4>
                  <p className="text-sm text-gray-600">
                    Demander la suppression de vos données
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h4 className="font-semibold text-[#232d37] mb-2">Droit d'opposition</h4>
                  <p className="text-sm text-gray-600">
                    Vous opposer au traitement de vos données
                  </p>
                </div>
              </div>
              <div className="bg-[#232d37] text-white rounded-lg p-6 mt-6">
                <h4 className="font-semibold mb-3">Exercer vos droits</h4>
                <p className="text-sm text-gray-300 mb-3">
                  Pour exercer vos droits, contactez-nous à :
                </p>
                <p className="text-[#E85E27] font-semibold">
                  <a href="mailto:contact@igservices.com" className="hover:underline">
                    contact@igservices.com
                  </a>
                </p>
              </div>
            </div>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-2xl lg:text-3xl font-bold text-[#232d37] mb-6">
              Cookies
            </h2>
            <div className="bg-gray-50 rounded-xl p-6 lg:p-8 space-y-4">
              <p className="text-gray-700">
                Notre site utilise des cookies pour améliorer votre expérience de navigation. Les cookies 
                sont de petits fichiers texte stockés sur votre appareil.
              </p>
              <p className="text-gray-700">
                Vous pouvez configurer votre navigateur pour refuser les cookies, mais certaines 
                fonctionnalités du site pourraient ne pas fonctionner correctement.
              </p>
            </div>
          </section>

          {/* Modifications */}
          <section>
            <h2 className="text-2xl lg:text-3xl font-bold text-[#232d37] mb-6">
              Modifications de cette politique
            </h2>
            <div className="bg-gray-50 rounded-xl p-6 lg:p-8">
              <p className="text-gray-700">
                Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. 
                Toute modification sera publiée sur cette page avec une date de mise à jour. Nous vous 
                encourageons à consulter régulièrement cette page.
              </p>
              <p className="text-sm text-gray-500 mt-4">
                <strong>Dernière mise à jour :</strong> Février 2026
              </p>
            </div>
          </section>

          {/* Contact */}
          <section className="border-t border-gray-200 pt-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-[#232d37] mb-6">
              Questions ?
            </h2>
            <div className="bg-[#E85E27] text-white rounded-xl p-6 lg:p-8">
              <p className="mb-4">
                Pour toute question concernant cette politique de confidentialité ou le traitement de 
                vos données personnelles, n'hésitez pas à nous contacter :
              </p>
              <div className="space-y-2">
                <p className="font-semibold">Ibrahima Golden Services</p>
                <p>Email : <a href="mailto:contact@igservices.com" className="hover:underline">contact@igservices.com</a></p>
                <p>Tél : <a href="tel:+224612004903" className="hover:underline">+224 612 004 903</a></p>
              </div>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
