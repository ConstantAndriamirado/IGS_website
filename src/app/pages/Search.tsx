import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router';
import { Search as SearchIcon, ArrowRight, FileText, Briefcase, Info, Phone, Calendar, User } from 'lucide-react';
import { Breadcrumb } from '../components/Breadcrumb';

interface SearchResult {
  id: string;
  type: 'blog' | 'service' | 'page';
  title: string;
  description: string;
  url: string;
  category?: string;
  date?: string;
  author?: string;
}

export default function Search() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('search') || '';
  const [results, setResults] = useState<SearchResult[]>([]);

  // Définir tout le contenu recherchable du site
  const searchableContent: SearchResult[] = [
    // Articles de blog
    {
      id: 'blog-1',
      type: 'blog',
      title: 'Les nouvelles procédures douanières en Guinée pour 2026',
      description: 'Découvrez les dernières modifications réglementaires qui impactent vos opérations d\'import-export et comment IGS vous accompagne dans cette transition.',
      url: '/blog',
      category: 'Transit & Douane',
      date: '12 Février 2026',
      author: 'Mamadou Bah'
    },
    {
      id: 'blog-2',
      type: 'blog',
      title: 'Optimiser vos coûts de fret maritime : 7 stratégies essentielles',
      description: 'Dans un contexte de hausse des tarifs maritimes, découvrez comment réduire vos dépenses tout en maintenant la qualité de service.',
      url: '/blog',
      category: 'Fret Maritime',
      date: '8 Février 2026',
      author: 'Aissatou Sylla'
    },
    {
      id: 'blog-3',
      type: 'blog',
      title: 'Le fret aérien express : quand la rapidité fait la différence',
      description: 'Pour vos envois urgents, le fret aérien reste la solution privilégiée. Analyse des avantages et des meilleures pratiques.',
      url: '/blog',
      category: 'Fret Aérien',
      date: '5 Février 2026',
      author: 'Fatoumata Camara'
    },
    {
      id: 'blog-4',
      type: 'blog',
      title: 'Guide complet du dédouanement en Guinée',
      description: 'Comprendre les étapes, documents requis et meilleures pratiques pour un dédouanement rapide et conforme.',
      url: '/blog',
      category: 'Transit & Douane',
      date: '1 Février 2026',
      author: 'Ibrahima Diallo'
    },
    {
      id: 'blog-5',
      type: 'blog',
      title: 'Chaîne logistique optimisée : les clés du succès',
      description: 'Comment structurer votre supply chain pour maximiser l\'efficacité et réduire les délais de livraison.',
      url: '/blog',
      category: 'Logistique',
      date: '28 Janvier 2026',
      author: 'Mariama Touré'
    },
    {
      id: 'blog-6',
      type: 'blog',
      title: 'Tracking de marchandises : la transparence au service du client',
      description: 'L\'importance du suivi en temps réel dans la gestion moderne de la chaîne d\'approvisionnement.',
      url: '/blog',
      category: 'Actualités',
      date: '25 Janvier 2026',
      author: 'Mamadou Bah'
    },

    // Services
    {
      id: 'service-1',
      type: 'service',
      title: 'Fret Maritime',
      description: 'Transport maritime international de conteneurs (FCL/LCL), consolidation de cargaisons, réservation d\'espace sur navires, suivi en temps réel, coordination avec compagnies maritimes internationales, groupage et dégroupage.',
      url: '/services/fret-maritime'
    },
    {
      id: 'service-2',
      type: 'service',
      title: 'Fret Aérien',
      description: 'Transport aérien express et standard, cargo aérien pour marchandises urgentes, coordination avec les principales compagnies aériennes, gestion des envois sensibles et périssables, suivi tracking en temps réel.',
      url: '/services/fret-aerien'
    },
    {
      id: 'service-3',
      type: 'service',
      title: 'Fret Routier',
      description: 'Transport terrestre national et international, livraison porte-à-porte, camions dédiés et partagés, transport de charges lourdes et volumineuses, couverture CEDEAO complète.',
      url: '/services/fret-routier'
    },
    {
      id: 'service-4',
      type: 'service',
      title: 'Transit Douanier',
      description: 'Déclaration en douane import/export, gestion administrative complète, représentation auprès des autorités, paiement des droits et taxes, conseil en réglementation douanière, optimisation des procédures.',
      url: '/services/transit-douanier'
    },
    {
      id: 'service-5',
      type: 'service',
      title: 'Dédouanement',
      description: 'Expertise en procédures douanières guinéennes, traitement rapide des formalités, assistance documentaire complète, résolution de problèmes douaniers, optimisation fiscale légale.',
      url: '/services/dedouanement'
    },
    {
      id: 'service-6',
      type: 'service',
      title: 'Conseil en Logistique',
      description: 'Audit de chaîne logistique, optimisation des coûts de transport, conseil en supply chain management, études de faisabilité, accompagnement personnalisé.',
      url: '/services/conseil-logistique'
    },

    // Pages principales
    {
      id: 'page-home',
      type: 'page',
      title: 'Accueil - IGS Transit & Logistique',
      description: 'Ibrahima Golden Services (IGS), votre partenaire de confiance en transit douanier et logistique internationale en Guinée. Services de fret maritime, aérien, routier et dédouanement depuis 2023.',
      url: '/'
    },
    {
      id: 'page-services',
      type: 'page',
      title: 'Nos Services de Transit et Logistique',
      description: 'Découvrez notre gamme complète de services : fret maritime, aérien et routier, transit douanier, dédouanement et conseil en logistique. Solutions sur-mesure pour vos besoins d\'import-export.',
      url: '/services'
    },
    {
      id: 'page-about',
      type: 'page',
      title: 'À propos d\'IGS',
      description: 'Créée en 2023 par Ibrahima Diallo, IGS est une entreprise guinéenne spécialisée en transit douanier et logistique internationale. Notre mission : faciliter vos échanges commerciaux avec expertise et transparence.',
      url: '/about'
    },
    {
      id: 'page-contact',
      type: 'page',
      title: 'Contactez-nous',
      description: 'Contactez IGS pour tous vos besoins en transit et logistique. Bureau à Conakry, Guinée. Téléphone: +224 612 004 903. Disponibles pour devis et consultations.',
      url: '/contact'
    },
    {
      id: 'page-portail',
      type: 'page',
      title: 'Portail Client IGS',
      description: 'Accédez à votre espace client sécurisé pour suivre vos envois en temps réel, télécharger des documents, consulter vos factures et gérer vos demandes de service.',
      url: '/portail-client'
    },
    {
      id: 'page-blog',
      type: 'page',
      title: 'Blog IGS - Actualités Transit et Logistique',
      description: 'Suivez nos actualités, guides et conseils en matière de transit douanier, fret maritime, aérien, routier et logistique internationale en Guinée et en Afrique de l\'Ouest.',
      url: '/blog'
    }
  ];

  useEffect(() => {
    if (query.trim()) {
      const searchTerm = query.toLowerCase();
      const filtered = searchableContent.filter(item => 
        item.title.toLowerCase().includes(searchTerm) ||
        item.description.toLowerCase().includes(searchTerm) ||
        item.category?.toLowerCase().includes(searchTerm)
      );
      setResults(filtered);
    } else {
      setResults([]);
    }
  }, [query]);

  const getIcon = (type: string) => {
    switch (type) {
      case 'blog':
        return <FileText className="w-5 h-5" />;
      case 'service':
        return <Briefcase className="w-5 h-5" />;
      case 'page':
        return <Info className="w-5 h-5" />;
      default:
        return <SearchIcon className="w-5 h-5" />;
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'blog':
        return 'Article';
      case 'service':
        return 'Service';
      case 'page':
        return 'Page';
      default:
        return '';
    }
  };

  return (
    <div className="min-h-screen bg-white pt-20 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#232d37] via-[#2a3844] to-[#232d37] text-white py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="flex justify-center mb-4">
              <Breadcrumb variant="dark" />
            </div>
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-6">
              <SearchIcon className="w-5 h-5 text-[#E85E27]" />
              <span className="text-sm font-medium">Résultats de recherche</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Recherche : <span className="text-[#E85E27]">"{query}"</span>
            </h1>
            <p className="text-xl text-gray-300">
              {results.length > 0 
                ? `${results.length} résultat${results.length > 1 ? 's' : ''} trouvé${results.length > 1 ? 's' : ''}`
                : 'Aucun résultat trouvé'
              }
            </p>
          </motion.div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          {results.length > 0 ? (
            <div className="space-y-6">
              {results.map((result, index) => (
                <motion.div
                  key={result.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    to={result.url}
                    className="block bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-[#E85E27] transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#E85E27]/10 rounded-lg flex items-center justify-center text-[#E85E27] group-hover:bg-[#E85E27] group-hover:text-white transition-colors">
                        {getIcon(result.type)}
                      </div>
                      
                      <div className="flex-grow">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-xs font-semibold text-[#E85E27] bg-[#E85E27]/10 px-3 py-1 rounded-full">
                            {getTypeLabel(result.type)}
                          </span>
                          {result.category && (
                            <span className="text-xs text-gray-500 flex items-center gap-1">
                              <FileText className="w-3 h-3" />
                              {result.category}
                            </span>
                          )}
                        </div>
                        
                        <h3 className="text-xl font-bold text-[#232d37] mb-2 group-hover:text-[#E85E27] transition-colors">
                          {result.title}
                        </h3>
                        
                        <p className="text-gray-600 mb-4 line-clamp-2">
                          {result.description}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            {result.date && (
                              <span className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {result.date}
                              </span>
                            )}
                            {result.author && (
                              <span className="flex items-center gap-1">
                                <User className="w-4 h-4" />
                                {result.author}
                              </span>
                            )}
                          </div>
                          
                          <div className="flex items-center gap-2 text-[#E85E27] font-medium group-hover:gap-3 transition-all">
                            <span className="text-sm">Voir plus</span>
                            <ArrowRight className="w-4 h-4" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : query.trim() ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <SearchIcon className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-[#232d37] mb-4">
                Aucun résultat trouvé
              </h3>
              <p className="text-gray-600 mb-8 max-w-md mx-auto">
                Nous n'avons trouvé aucun résultat pour "<span className="font-semibold">{query}</span>". 
                Essayez avec d'autres mots-clés.
              </p>
              
              <div className="bg-gray-50 rounded-xl p-8 max-w-2xl mx-auto">
                <h4 className="font-bold text-[#232d37] mb-4">Suggestions de recherche :</h4>
                <div className="flex flex-wrap gap-3 justify-center">
                  {['Fret maritime', 'Dédouanement', 'Transit douanier', 'Tracking', 'Logistique', 'Import-export'].map((keyword) => (
                    <Link
                      key={keyword}
                      to={`/search?search=${encodeURIComponent(keyword)}`}
                      className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-700 hover:border-[#E85E27] hover:text-[#E85E27] transition-colors"
                    >
                      {keyword}
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <SearchIcon className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-[#232d37] mb-4">
                Entrez un terme de recherche
              </h3>
              <p className="text-gray-600">
                Utilisez la barre de recherche pour trouver des articles, services et pages.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Quick Links */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <h3 className="text-xl font-bold text-[#232d37] mb-6 text-center">Accès rapide</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              to="/services"
              className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg hover:border-[#E85E27] transition-all group"
            >
              <Briefcase className="w-10 h-10 text-[#E85E27] mx-auto mb-3" />
              <h4 className="font-bold text-[#232d37] group-hover:text-[#E85E27] transition-colors">
                Nos Services
              </h4>
            </Link>
            
            <Link
              to="/blog"
              className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg hover:border-[#E85E27] transition-all group"
            >
              <FileText className="w-10 h-10 text-[#E85E27] mx-auto mb-3" />
              <h4 className="font-bold text-[#232d37] group-hover:text-[#E85E27] transition-colors">
                Blog & Actualités
              </h4>
            </Link>
            
            <Link
              to="/contact"
              className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg hover:border-[#E85E27] transition-all group"
            >
              <Phone className="w-10 h-10 text-[#E85E27] mx-auto mb-3" />
              <h4 className="font-bold text-[#232d37] group-hover:text-[#E85E27] transition-colors">
                Nous Contacter
              </h4>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}