import { Link, useLocation } from 'react-router';
import { ChevronRight, Home } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbProps {
  items?: BreadcrumbItem[];
  variant?: 'light' | 'dark'; // Pour s'adapter aux différents fonds
}

export function Breadcrumb({ items, variant = 'light' }: BreadcrumbProps) {
  const location = useLocation();
  const { language } = useLanguage();
  const isFrench = language === 'fr';

  const isDark = variant === 'dark';
  const textColor = isDark ? 'text-white/80' : 'text-gray-600';
  const hoverColor = isDark ? 'hover:text-white' : 'hover:text-[#E85E27]';
  const activeColor = isDark ? 'text-[#E85E27]' : 'text-[#E85E27]';
  const separatorColor = isDark ? 'text-white/40' : 'text-gray-400';

  const homeLabel = isFrench ? 'Accueil' : 'Home';

  // Si des items personnalisés sont fournis, les utiliser
  if (items && items.length > 0) {
    return (
      <nav className="container mx-auto px-4 lg:px-8 mb-4">
        <ol className="flex items-center gap-2 text-sm flex-wrap">
          <li>
            <Link
              to="/"
              className={`flex items-center gap-1 ${textColor} ${hoverColor} transition-colors`}
            >
              <Home size={16} />
              <span>{homeLabel}</span>
            </Link>
          </li>
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              <ChevronRight size={16} className={separatorColor} />
              {item.path ? (
                <Link
                  to={item.path}
                  className={`${textColor} ${hoverColor} transition-colors`}
                >
                  {item.label}
                </Link>
              ) : (
                <span className={`${activeColor} font-medium`}>{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    );
  }

  // Générer automatiquement le breadcrumb basé sur l'URL
  const pathnames = location.pathname.split('/').filter((x) => x);

  // Mapping des noms de routes et leurs chemins
  const routeNames: Record<string, string> = {
    // Pages principales
    services: isFrench ? 'Services' : 'Services',
    about: isFrench ? 'À propos' : 'About',
    blog: isFrench ? 'Blog' : 'Blog',
    search: isFrench ? 'Recherche' : 'Search',
    contact: isFrench ? 'Contact' : 'Contact',
    'portail-client': isFrench ? 'Portail Client' : 'Client Portal',
    
    // Pages légales
    'mentions-legales': isFrench ? 'Mentions Légales' : 'Legal notices',
    confidentialite: isFrench ? 'Politique de Confidentialité' : 'Privacy policy',
    cgu: isFrench ? 'Conditions Générales d\'Utilisation' : 'Terms of Use',
    partners: isFrench ? 'Partenaires' : 'Partners',
    
    // Services détails (IDs services)
    maritime: isFrench ? 'Transit Maritime' : 'Maritime Transit',
    aerien: isFrench ? 'Transit Aérien' : 'Air Transit',
    routier: isFrench ? 'Transport Routier' : 'Road Transport',
    dedouanement: isFrench ? 'Dédouanement' : 'Customs Clearance',
    entreposage: isFrench ? 'Logistique & Entreposage' : 'Logistics & Warehousing',
    conseil: isFrench ? 'Conseil en Commerce International' : 'International Trade Advisory'
  };

  if (pathnames.length === 0) {
    return null; // Pas de breadcrumb sur la page d'accueil
  }

  return (
    <nav className="container mx-auto px-4 lg:px-8 mb-4">
      <ol className="flex items-center gap-2 text-sm flex-wrap">
        <li>
          <Link
            to="/"
            className={`flex items-center gap-1 ${textColor} ${hoverColor} transition-colors`}
          >
            <Home size={16} />
            <span>{homeLabel}</span>
          </Link>
        </li>
        {pathnames.map((pathname, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          const label = routeNames[pathname] || pathname;

          return (
            <li key={routeTo} className="flex items-center gap-2">
              <ChevronRight size={16} className={separatorColor} />
              {isLast ? (
                <span className={`${activeColor} font-medium`}>{label}</span>
              ) : (
                <Link
                  to={routeTo}
                  className={`${textColor} ${hoverColor} transition-colors`}
                >
                  {label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}