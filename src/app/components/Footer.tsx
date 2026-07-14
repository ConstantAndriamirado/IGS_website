import { Link } from 'react-router';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import logoSrc from '../../assets/images/logo_IGS.png';

export function Footer() {
  const { language } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#232d37] text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logoSrc} alt="IGS" className="h-12 object-contain" />
            </div>
            <p className="text-gray-400 mb-4">
              {language === 'fr'
                ? 'Votre partenaire stratégique pour le transit, le dédouanement, le fret et la logistique internationale en Guinée.'
                : 'Your trusted strategic partner for transit, customs clearance, freight and international logistics in Guinea.'}
            </p>
            <div className="flex gap-4">
              <a href="https://wa.me/224612004903" target="_blank" rel="noreferrer" className="w-10 h-10 bg-white/10 hover:bg-[#E85E27] rounded-full flex items-center justify-center transition-colors" aria-label="WhatsApp">
                <MessageCircle size={20} />
              </a>
              <a href="mailto:contact@igservices.com" className="w-10 h-10 bg-white/10 hover:bg-[#E85E27] rounded-full flex items-center justify-center transition-colors" aria-label="Email">
                <Mail size={20} />
              </a>
              <a href="tel:+224612004903" className="w-10 h-10 bg-white/10 hover:bg-[#E85E27] rounded-full flex items-center justify-center transition-colors" aria-label="Téléphone">
                <Phone size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">{language === 'fr' ? 'Liens Rapides' : 'Quick Links'}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-[#E85E27] transition-colors">
                  {language === 'fr' ? 'Accueil' : 'Home'}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-[#E85E27] transition-colors">
                  {language === 'fr' ? 'Nos Services' : 'Our Services'}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-[#E85E27] transition-colors">
                  {language === 'fr' ? 'À propos' : 'About Us'}
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-[#E85E27] transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-[#E85E27] transition-colors">
                  {language === 'fr' ? 'Contact' : 'Contact'}
                </Link>
              </li>
              <li>
                <Link to="/portail-client" className="text-gray-400 hover:text-[#E85E27] transition-colors">
                  Portail Client
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">{language === 'fr' ? 'Nos Services' : 'Our Services'}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/maritime" className="text-gray-400 hover:text-[#E85E27] transition-colors">
                  {language === 'fr' ? 'Fret Maritime' : 'Sea Freight'}
                </Link>
              </li>
              <li>
                <Link to="/services/aerien" className="text-gray-400 hover:text-[#E85E27] transition-colors">
                  {language === 'fr' ? 'Fret Aérien' : 'Air Freight'}
                </Link>
              </li>
              <li>
                <Link to="/services/routier" className="text-gray-400 hover:text-[#E85E27] transition-colors">
                  {language === 'fr' ? 'Fret Routier' : 'Road Freight'}
                </Link>
              </li>
              <li>
                <Link to="/services/dedouanement" className="text-gray-400 hover:text-[#E85E27] transition-colors">
                  {language === 'fr' ? 'Dédouanement' : 'Customs Clearance'}
                </Link>
              </li>
              <li>
                <Link to="/services/entreposage" className="text-gray-400 hover:text-[#E85E27] transition-colors">
                  {language === 'fr' ? 'Entreposage' : 'Warehousing'}
                </Link>
              </li>
              <li>
                <Link to="/services/conseil" className="text-gray-400 hover:text-[#E85E27] transition-colors">
                  {language === 'fr' ? 'Conseil Logistique' : 'Logistics Advisory'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">{language === 'fr' ? 'Contactez-nous' : 'Contact Us'}</h3>
            <ul className="space-y-3">
              <li className="flex gap-3 text-gray-400">
                <MapPin size={20} className="text-[#E85E27] flex-shrink-0 mt-1" />
                <span>Almamya, Kaloum, Rue de la gare, Immeuble Azur, Conakry, République de Guinée</span>
              </li>
              <li className="flex gap-3 text-gray-400">
                <Phone size={20} className="text-[#E85E27] flex-shrink-0" />
                <span>+224 612 004 903</span>
              </li>
              <li className="flex gap-3 text-gray-400">
                <Mail size={20} className="text-[#E85E27] flex-shrink-0" />
                <span>contact@igservices.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>&copy; {currentYear} Ibrahima Golden Services. {language === 'fr' ? 'Tous droits réservés.' : 'All rights reserved.'} | {language === 'fr' ? 'Développé par' : 'Developed by'} <a href="https://www.soulcom.gn" target="_blank" rel="noopener noreferrer" className="hover:text-[#E85E27] transition-colors">SoulMédias</a></p>
            <div className="flex gap-6">
              <Link to="/mentions-legales" className="hover:text-[#E85E27] transition-colors">{language === 'fr' ? 'Mentions légales' : 'Legal notices'}</Link>
              <Link to="/confidentialite" className="hover:text-[#E85E27] transition-colors">{language === 'fr' ? 'Confidentialité' : 'Privacy policy'}</Link>
              <Link to="/cgu" className="hover:text-[#E85E27] transition-colors">CGU</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}