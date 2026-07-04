import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Calendar, User, ArrowRight, Search, Tag } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Link, useSearchParams } from 'react-router';
import { Breadcrumb } from '../components/Breadcrumb';

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const searchParam = searchParams.get('search');
    if (searchParam) {
      setSearchQuery(searchParam);
    }
  }, [searchParams]);

  const categories = [
    'Tous',
    'Transit & Douane',
    'Fret Maritime',
    'Fret Aérien',
    'Logistique',
    'Réglementation',
    'Actualités'
  ];

  const blogPosts = [
    {
      id: 1,
      slug: 'nouvelles-procedures-douanieres-guinee-2026',
      title: 'Les nouvelles procédures douanières en Guinée pour 2026',
      excerpt: 'Découvrez les dernières modifications réglementaires qui impactent vos opérations d\'import-export et comment IGS vous accompagne dans cette transition.',
      category: 'Transit & Douane',
      author: 'Mamadou Bah',
      date: '12 Février 2026',
      readTime: '5 min',
      image: 'https://images.unsplash.com/photo-1763225271111-dd9363584249?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b21zJTIwZG9jdW1lbnRzJTIwcGFwZXJ3b3JrfGVufDF8fHx8MTc3MTIxMTQzNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      featured: true
    },
    {
      id: 2,
      slug: 'optimiser-couts-fret-maritime-strategies',
      title: 'Optimiser vos coûts de fret maritime : 7 stratégies essentielles',
      excerpt: 'Dans un contexte de hausse des tarifs maritimes, découvrez comment réduire vos dépenses tout en maintenant la qualité de service.',
      category: 'Fret Maritime',
      author: 'Aissatou Sylla',
      date: '8 Février 2026',
      readTime: '7 min',
      image: 'https://images.unsplash.com/photo-1735047974891-df59713d8192?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJnbyUyMHNoaXAlMjBjb250YWluZXIlMjBwb3J0fGVufDF8fHx8MTc3MTIxMTQzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      featured: true
    },
    {
      id: 3,
      slug: 'fret-aerien-express-rapidite-difference',
      title: 'Le fret aérien express : quand la rapidité fait la différence',
      excerpt: 'Pour vos envois urgents, le fret aérien reste la solution privilégiée. Analyse des avantages et des meilleures pratiques.',
      category: 'Fret Aérien',
      author: 'Fatoumata Camara',
      date: '5 Février 2026',
      readTime: '4 min',
      image: 'https://images.unsplash.com/photo-1696385041146-d2827a77b992?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaXJwbGFuZSUyMGNhcmdvJTIwbG9hZGluZ3xlbnwxfHx8fDE3NzExNDUwMDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      featured: false
    },
    {
      id: 4,
      slug: 'transport-routier-afrique-ouest-defis-opportunites',
      title: 'Transport routier en Afrique de l\'Ouest : défis et opportunités',
      excerpt: 'Le corridor routier guinéen offre des perspectives intéressantes pour le commerce régional. Tour d\'horizon des infrastructures.',
      category: 'Logistique',
      author: 'Ibrahima Diallo',
      date: '1 Février 2026',
      readTime: '6 min',
      image: 'https://images.unsplash.com/photo-1758224388408-b060b4e0f2cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cnVjayUyMHRyYW5zcG9ydGF0aW9uJTIwaGlnaHdheXxlbnwxfHx8fDE3NzEyMTE0Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      featured: false
    },
    {
      id: 5,
      slug: 'gestion-stocks-entreposage-efficace',
      title: 'Gestion des stocks : les clés d\'un entreposage efficace',
      excerpt: 'Un entreposage optimisé garantit la sécurité de vos marchandises et accélère vos opérations. Nos conseils d\'experts.',
      category: 'Logistique',
      author: 'Fatoumata Camara',
      date: '28 Janvier 2026',
      readTime: '5 min',
      image: 'https://images.unsplash.com/photo-1763752194641-3c5638aec65e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2dpc3RpY3MlMjB3YXJlaG91c2UlMjBmcmVpZ2h0fGVufDF8fHx8MTc3MTIxMTQzNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      featured: false
    },
    {
      id: 6,
      slug: 'partenariat-igs-chaine-logistique-guinee',
      title: 'Partenariat IGS : renforcer la chaîne logistique en Guinée',
      excerpt: 'Retour sur nos récents partenariats stratégiques qui améliorent notre offre de services et bénéficient à nos clients.',
      category: 'Actualités',
      author: 'Ibrahima Diallo',
      date: '24 Janvier 2026',
      readTime: '3 min',
      image: 'https://images.unsplash.com/photo-1745847768380-2caeadbb3b71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGhhbmRzaGFrZSUyMHBhcnRuZXJzaGlwfGVufDF8fHx8MTc3MTE4NjEwM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      featured: false
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'Tous' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = filteredPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen pt-20 pb-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#232d37] to-[#1a2129] text-white py-20">
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
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Blog IGS
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Actualités, conseils et expertise en transit douanier et logistique internationale
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Rechercher un article..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E85E27] focus:border-transparent"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-white border-b border-gray-200 sticky top-20 z-40">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
            <Tag className="w-5 h-5 text-[#E85E27] flex-shrink-0" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                  selectedCategory === category
                    ? 'bg-[#E85E27] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="container mx-auto px-4 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold text-[#232d37] mb-2">Articles à la une</h2>
            <div className="w-20 h-1 bg-[#E85E27]"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {featuredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <Link to={`/blog/${post.slug}`}>
                  <div className="relative h-64 overflow-hidden">
                    <ImageWithFallback
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#E85E27] text-white px-3 py-1 rounded-full text-sm font-semibold">
                        À la une
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-3 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {post.author}
                      </span>
                      <span>{post.readTime}</span>
                    </div>
                    <span className="inline-block bg-[#E85E27]/10 text-[#E85E27] px-3 py-1 rounded-full text-xs font-semibold mb-3">
                      {post.category}
                    </span>
                    <h3 className="text-2xl font-bold text-[#232d37] mb-3 group-hover:text-[#E85E27] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-[#E85E27] font-semibold group-hover:gap-3 transition-all">
                      Lire l'article
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </section>
      )}

      {/* Regular Posts */}
      {regularPosts.length > 0 && (
        <section className="container mx-auto px-4 lg:px-8 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold text-[#232d37] mb-2">Tous les articles</h2>
            <div className="w-20 h-1 bg-[#E85E27]"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <Link to={`/blog/${post.slug}`}>
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3 text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </span>
                      <span>{post.readTime}</span>
                    </div>
                    <span className="inline-block bg-[#E85E27]/10 text-[#E85E27] px-3 py-1 rounded-full text-xs font-semibold mb-3">
                      {post.category}
                    </span>
                    <h3 className="text-xl font-bold text-[#232d37] mb-3 group-hover:text-[#E85E27] transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2 text-sm">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-[#E85E27] font-semibold text-sm group-hover:gap-3 transition-all">
                      Lire plus
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </section>
      )}

      {/* No Results */}
      {filteredPosts.length === 0 && (
        <section className="container mx-auto px-4 lg:px-8 py-20">
          <div className="text-center">
            <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-[#232d37] mb-2">Aucun article trouvé</h3>
            <p className="text-gray-600">
              Essayez de modifier vos critères de recherche ou de sélectionner une autre catégorie.
            </p>
          </div>
        </section>
      )}

      {/* Newsletter CTA */}
      <section className="container mx-auto px-4 lg:px-8 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-[#E85E27] to-[#c54d1e] text-white rounded-2xl p-8 lg:p-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Restez informé</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Abonnez-vous à notre newsletter pour recevoir les dernières actualités et conseils en logistique internationale
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Votre adresse e-mail"
              className="flex-1 px-6 py-4 rounded-lg bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#232d37]"
            />
            <button className="bg-[#232d37] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#1a2129] transition-colors whitespace-nowrap">
              S'abonner
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}