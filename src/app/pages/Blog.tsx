import { useState, useEffect, type FormEvent } from 'react';
import { motion } from 'motion/react';
import { Calendar, User, ArrowRight, Search, Tag } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Link, useSearchParams } from 'react-router';
import { toast } from 'sonner';
import { Breadcrumb } from '../components/Breadcrumb';
import { getRelativePublishLabel, loadSiteContent, type BlogPostRecord } from '../utils/siteContent';

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

  const [blogPosts, setBlogPosts] = useState<BlogPostRecord[]>(() => loadSiteContent().posts);

  useEffect(() => {
    const refreshPosts = () => setBlogPosts(loadSiteContent().posts);
    refreshPosts();
    window.addEventListener('igs-site-content-updated', refreshPosts);
    return () => window.removeEventListener('igs-site-content-updated', refreshPosts);
  }, []);

  const handleNewsletterSubmit = (e: FormEvent) => {
    e.preventDefault();
    const email = (e.currentTarget as HTMLFormElement).elements[0] as HTMLInputElement;
    const value = email.value.trim();
    if (!value) {
      return;
    }
    const existing = JSON.parse(localStorage.getItem('igs_newsletter_subscribers') || '[]');
    localStorage.setItem('igs_newsletter_subscribers', JSON.stringify([...existing, { email: value, subscribedAt: new Date().toISOString() }]));
    toast.success('Merci pour votre inscription à la newsletter.');
    email.value = '';
  };

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
                    <div className="flex flex-wrap items-center gap-3 mb-3 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {post.author}
                      </span>
                      <span className="text-[#E85E27] font-medium">{getRelativePublishLabel(post.publishedAt, post.date)}</span>
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
                    <div className="flex flex-wrap items-center gap-3 mb-3 text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </span>
                      <span className="text-[#E85E27] font-medium">{getRelativePublishLabel(post.publishedAt, post.date)}</span>
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
          <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Votre adresse e-mail"
              className="flex-1 px-6 py-4 rounded-lg bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#232d37]"
            />
            <button type="submit" className="bg-[#232d37] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#1a2129] transition-colors whitespace-nowrap">
              S'abonner
            </button>
          </form>
        </motion.div>
      </section>
    </div>
  );
}