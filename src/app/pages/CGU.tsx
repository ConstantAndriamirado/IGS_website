import { motion } from 'motion/react';
import { FileText, CheckCircle, AlertTriangle, Scale, Users } from 'lucide-react';
import { Breadcrumb } from '../components/Breadcrumb';

export function CGU() {
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
              <FileText size={48} className="text-[#E85E27]" />
              <h1 className="text-4xl lg:text-5xl font-bold">
                Conditions Générales d'Utilisation
              </h1>
            </div>
            <p className="text-xl text-gray-300">
              Règles d'utilisation du site et des services IGS
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
                Les présentes Conditions Générales d'Utilisation (CGU) régissent l'accès et l'utilisation 
                du site web d'Ibrahima Golden Services ainsi que l'ensemble de ses services. En utilisant 
                ce site, vous acceptez sans réserve les présentes CGU.
              </p>
            </div>
          </section>

          {/* Article 1 : Objet */}
          <section>
            <h2 className="text-2xl lg:text-3xl font-bold text-[#232d37] mb-6 flex items-center gap-3">
              <FileText className="text-[#E85E27]" size={32} />
              Article 1 - Objet
            </h2>
            <div className="bg-gray-50 rounded-xl p-6 lg:p-8 space-y-4">
              <p className="text-gray-700">
                Les présentes CGU ont pour objet de définir les modalités et conditions dans lesquelles 
                Ibrahima Golden Services (IGS) met à disposition des utilisateurs son site web et ses 
                services de transit douanier, fret maritime, aérien, routier et dédouanement.
              </p>
              <p className="text-gray-700">
                Toute utilisation du site implique l'acceptation sans réserve des présentes CGU.
              </p>
            </div>
          </section>

          {/* Article 2 : Accès au site */}
          <section>
            <h2 className="text-2xl lg:text-3xl font-bold text-[#232d37] mb-6 flex items-center gap-3">
              <Users className="text-[#E85E27]" size={32} />
              Article 2 - Accès au site
            </h2>
            <div className="bg-gray-50 rounded-xl p-6 lg:p-8 space-y-4">
              <div>
                <h3 className="font-semibold text-[#232d37] mb-3">2.1 Accès libre</h3>
                <p className="text-gray-700">
                  L'accès au site est gratuit et ouvert à tous les utilisateurs disposant d'un accès à 
                  Internet. Tous les coûts afférents à l'accès au site, que ce soient les frais matériels, 
                  logiciels ou d'accès à Internet sont exclusivement à la charge de l'utilisateur.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-[#232d37] mb-3">2.2 Portail client</h3>
                <p className="text-gray-700">
                  L'accès au portail client nécessite la création d'un compte avec identifiants personnels. 
                  L'utilisateur est responsable de la confidentialité de ses identifiants.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-[#232d37] mb-3">2.3 Disponibilité</h3>
                <p className="text-gray-700">
                  IGS s'efforce de maintenir le site accessible 24h/24 et 7j/7, mais ne peut garantir une 
                  disponibilité absolue. Le site peut être temporairement indisponible en raison 
                  d'opérations de maintenance ou de circonstances indépendantes de notre volonté.
                </p>
              </div>
            </div>
          </section>

          {/* Article 3 : Services proposés */}
          <section>
            <h2 className="text-2xl lg:text-3xl font-bold text-[#232d37] mb-6 flex items-center gap-3">
              <CheckCircle className="text-[#E85E27]" size={32} />
              Article 3 - Services proposés
            </h2>
            <div className="bg-gray-50 rounded-xl p-6 lg:p-8 space-y-4">
              <p className="text-gray-700 mb-4">
                Le site permet notamment :
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#E85E27] mt-1">•</span>
                  <span>La présentation de nos services de transit et dédouanement</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#E85E27] mt-1">•</span>
                  <span>La demande de devis en ligne</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#E85E27] mt-1">•</span>
                  <span>Le suivi des dossiers via le portail client</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#E85E27] mt-1">•</span>
                  <span>L'upload de documents douaniers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#E85E27] mt-1">•</span>
                  <span>La consultation d'informations sur le transit en Guinée</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#E85E27] mt-1">•</span>
                  <span>Le contact direct avec nos équipes</span>
                </li>
              </ul>
              <div className="bg-white border-l-4 border-[#E85E27] p-4 mt-4">
                <p className="text-gray-700 text-sm">
                  <strong>Note :</strong> Les devis et prestations sont soumis à des conditions particulières 
                  qui seront communiquées lors de votre demande.
                </p>
              </div>
            </div>
          </section>

          {/* Article 4 : Obligations de l'utilisateur */}
          <section>
            <h2 className="text-2xl lg:text-3xl font-bold text-[#232d37] mb-6 flex items-center gap-3">
              <AlertTriangle className="text-[#E85E27]" size={32} />
              Article 4 - Obligations de l'utilisateur
            </h2>
            <div className="bg-gray-50 rounded-xl p-6 lg:p-8 space-y-4">
              <p className="text-gray-700 mb-4">
                L'utilisateur s'engage à :
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#E85E27] mt-1">✓</span>
                  <span>Fournir des informations exactes et à jour</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#E85E27] mt-1">✓</span>
                  <span>Ne pas utiliser le site à des fins illégales ou frauduleuses</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#E85E27] mt-1">✓</span>
                  <span>Respecter les droits de propriété intellectuelle d'IGS</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#E85E27] mt-1">✓</span>
                  <span>Ne pas tenter d'accéder de manière non autorisée au site ou aux données</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#E85E27] mt-1">✓</span>
                  <span>Maintenir la confidentialité de ses identifiants de connexion</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#E85E27] mt-1">✓</span>
                  <span>Respecter les lois et règlements en vigueur en République de Guinée</span>
                </li>
              </ul>
              <div className="bg-[#232d37] text-white rounded-lg p-6 mt-6">
                <p className="text-sm">
                  <strong>Important :</strong> Tout manquement à ces obligations peut entraîner la 
                  suspension ou la suppression de votre accès au site et à nos services.
                </p>
              </div>
            </div>
          </section>

          {/* Article 5 : Propriété intellectuelle */}
          <section>
            <h2 className="text-2xl lg:text-3xl font-bold text-[#232d37] mb-6">
              Article 5 - Propriété intellectuelle
            </h2>
            <div className="bg-gray-50 rounded-xl p-6 lg:p-8 space-y-4">
              <p className="text-gray-700">
                L'ensemble des éléments du site (structure, textes, images, logos, vidéos, sons, bases de 
                données, logiciels, etc.) est la propriété exclusive d'IGS ou fait l'objet d'une 
                autorisation d'utilisation.
              </p>
              <p className="text-gray-700">
                Toute reproduction, représentation, modification, publication ou adaptation de tout ou 
                partie des éléments du site, par quelque moyen ou procédé que ce soit, est interdite sauf 
                autorisation écrite préalable d'IGS.
              </p>
              <p className="text-gray-700">
                Toute exploitation non autorisée du site ou de ses éléments sera considérée comme 
                constitutive d'une contrefaçon et poursuivie conformément aux dispositions légales en vigueur.
              </p>
            </div>
          </section>

          {/* Article 6 : Responsabilité */}
          <section>
            <h2 className="text-2xl lg:text-3xl font-bold text-[#232d37] mb-6 flex items-center gap-3">
              <Scale className="text-[#E85E27]" size={32} />
              Article 6 - Responsabilité
            </h2>
            <div className="bg-gray-50 rounded-xl p-6 lg:p-8 space-y-4">
              <div>
                <h3 className="font-semibold text-[#232d37] mb-3">6.1 Contenu du site</h3>
                <p className="text-gray-700">
                  IGS s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur le 
                  site. Toutefois, IGS ne peut garantir l'exactitude, la précision ou l'exhaustivité des 
                  informations mises à disposition.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-[#232d37] mb-3">6.2 Liens externes</h3>
                <p className="text-gray-700">
                  Le site peut contenir des liens vers des sites tiers. IGS n'exerce aucun contrôle sur 
                  ces sites et décline toute responsabilité quant à leur contenu.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-[#232d37] mb-3">6.3 Services</h3>
                <p className="text-gray-700">
                  La responsabilité d'IGS concernant la prestation de services de transit et dédouanement 
                  est régie par les conditions générales de vente qui sont communiquées lors de chaque 
                  demande de service.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-[#232d37] mb-3">6.4 Force majeure</h3>
                <p className="text-gray-700">
                  IGS ne pourra être tenue responsable en cas d'inexécution ou de mauvaise exécution de 
                  ses obligations due à un cas de force majeure (catastrophe naturelle, grève, panne, etc.).
                </p>
              </div>
            </div>
          </section>

          {/* Article 7 : Données personnelles */}
          <section>
            <h2 className="text-2xl lg:text-3xl font-bold text-[#232d37] mb-6">
              Article 7 - Données personnelles
            </h2>
            <div className="bg-gray-50 rounded-xl p-6 lg:p-8">
              <p className="text-gray-700 mb-4">
                Le traitement des données personnelles collectées via le site est régi par notre 
                Politique de Confidentialité, accessible sur le site.
              </p>
              <p className="text-gray-700">
                En utilisant le site, vous consentez à la collecte et au traitement de vos données 
                personnelles conformément à notre Politique de Confidentialité.
              </p>
            </div>
          </section>

          {/* Article 8 : Modification des CGU */}
          <section>
            <h2 className="text-2xl lg:text-3xl font-bold text-[#232d37] mb-6">
              Article 8 - Modification des CGU
            </h2>
            <div className="bg-gray-50 rounded-xl p-6 lg:p-8">
              <p className="text-gray-700">
                IGS se réserve le droit de modifier les présentes CGU à tout moment. Les nouvelles 
                conditions seront portées à la connaissance des utilisateurs par leur mise en ligne sur 
                le site. Il est donc conseillé de consulter régulièrement cette page.
              </p>
              <p className="text-sm text-gray-500 mt-4">
                <strong>Dernière mise à jour :</strong> Février 2026
              </p>
            </div>
          </section>

          {/* Article 9 : Droit applicable */}
          <section>
            <h2 className="text-2xl lg:text-3xl font-bold text-[#232d37] mb-6">
              Article 9 - Droit applicable et juridiction
            </h2>
            <div className="bg-gray-50 rounded-xl p-6 lg:p-8 space-y-4">
              <p className="text-gray-700">
                Les présentes CGU sont régies par le droit guinéen. En cas de litige et à défaut d'accord 
                amiable, le litige sera porté devant les tribunaux compétents de Conakry, République de Guinée.
              </p>
            </div>
          </section>

          {/* Article 10 : Contact */}
          <section className="border-t border-gray-200 pt-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-[#232d37] mb-6">
              Article 10 - Contact
            </h2>
            <div className="bg-[#232d37] text-white rounded-xl p-6 lg:p-8">
              <p className="mb-4">
                Pour toute question relative aux présentes CGU, vous pouvez nous contacter :
              </p>
              <div className="space-y-2">
                <p className="font-semibold text-[#E85E27]">Ibrahima Golden Services (IGS)</p>
                <p>Almamya, Kaloum, Rue de la gare, Immeuble Azur</p>
                <p>Conakry, République de Guinée</p>
                <p className="mt-3">
                  Email : <a href="mailto:contact@igservices.com" className="hover:text-[#E85E27] transition-colors">contact@igservices.com</a>
                </p>
                <p>
                  Tél : <a href="tel:+224612004903" className="hover:text-[#E85E27] transition-colors">+224 612 004 903</a>
                </p>
              </div>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
