import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { useParams, Link, Navigate } from 'react-router';
import { Calendar, User, Clock, ArrowRight, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { toast } from 'sonner';
import { Breadcrumb } from '../components/Breadcrumb';
import { getRelativePublishLabel, loadSiteContent, saveSiteContent } from '../utils/siteContent';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const [blogPosts, setBlogPosts] = useState(() => loadSiteContent().posts);
  const viewTrackedRef = useRef<string | null>(null);

  useEffect(() => {
    const refreshPosts = () => setBlogPosts(loadSiteContent().posts);
    refreshPosts();
    window.addEventListener('igs-site-content-updated', refreshPosts);
    return () => window.removeEventListener('igs-site-content-updated', refreshPosts);
  }, []);

  const post = blogPosts.find((p) => p.slug === slug);

  useEffect(() => {
    if (!post || viewTrackedRef.current === post.slug) {
      return;
    }

    viewTrackedRef.current = post.slug;
    const content = loadSiteContent();
    const nextPosts = content.posts.map((item) =>
      item.id === post.id ? { ...item, views: (item.views || 0) + 1 } : item
    );
    const nextContent = { ...content, posts: nextPosts };
    saveSiteContent(nextContent);
    setBlogPosts(nextPosts);
  }, [post?.id, post?.slug]);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const text = post.title;

    let shareUrl = '';
    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        break;
      default:
        navigator.clipboard.writeText(url);
        toast.success('Lien copié dans le presse-papier');
        return;
    }

    window.open(shareUrl, '_blank', 'width=600,height=400');
  };

  return (
    <div className="min-h-screen pt-20 pb-20">
      <section className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#232d37] via-[#232d37]/70 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative h-full flex items-end pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl text-white"
          >
            <Breadcrumb
              items={[
                { label: 'Blog', path: '/blog' },
                { label: post.title }
              ]}
              variant="dark"
            />

            <span className="inline-block bg-[#E85E27] text-white px-4 py-2 rounded-full text-sm font-semibold mb-8">
              {post.category}
            </span>

            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-white/80">
              <span className="flex items-center gap-2">
                <User size={18} />
                {post.author}
              </span>
              <span className="flex items-center gap-2">
                <Calendar size={18} />
                {post.date}
              </span>
              <span className="flex items-center gap-2">
                <Clock size={18} />
                {post.readTime} de lecture
              </span>
              <span className="flex items-center gap-2">
                <Calendar size={18} />
                {getRelativePublishLabel(post.publishedAt, post.date)}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="container mx-auto px-4 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_300px] gap-12">
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="prose prose-lg max-w-none"
            >
              <div
                className="blog-content text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </motion.article>

            <motion.aside
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="sticky top-24 self-start space-y-8">
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="font-bold text-[#232d37] mb-4 flex items-center gap-2">
                    <Share2 size={20} className="text-[#E85E27]" />
                    Partager l'article
                  </h3>
                  <div className="flex flex-col gap-3">
                    <button
                      onClick={() => handleShare('facebook')}
                      className="flex items-center gap-3 px-4 py-3 bg-[#1877f2] text-white rounded-lg hover:bg-[#166fe5] transition-colors"
                    >
                      <Facebook size={20} />
                      Facebook
                    </button>
                    <button
                      onClick={() => handleShare('twitter')}
                      className="flex items-center gap-3 px-4 py-3 bg-[#1da1f2] text-white rounded-lg hover:bg-[#1a91da] transition-colors"
                    >
                      <Twitter size={20} />
                      Twitter
                    </button>
                    <button
                      onClick={() => handleShare('linkedin')}
                      className="flex items-center gap-3 px-4 py-3 bg-[#0a66c2] text-white rounded-lg hover:bg-[#094d92] transition-colors"
                    >
                      <Linkedin size={20} />
                      LinkedIn
                    </button>
                    <button
                      onClick={() => handleShare('copy')}
                      className="flex items-center gap-3 px-4 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                    >
                      <Share2 size={20} />
                      Copier le lien
                    </button>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-[#E85E27] to-[#c54d1e] text-white rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <User size={24} />
                    </div>
                    <div>
                      <p className="font-semibold">{post.author}</p>
                      <p className="text-sm text-white/80">Expert IGS</p>
                    </div>
                  </div>
                  <p className="text-sm text-white/90">
                    Spécialiste en transit douanier et logistique internationale
                  </p>
                </div>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>

      {relatedPosts.length > 0 && (
        <section className="container mx-auto px-4 lg:px-8 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold text-[#232d37] mb-2">Articles similaires</h2>
            <div className="w-20 h-1 bg-[#E85E27]"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {relatedPosts.map((relatedPost, index) => (
              <motion.article
                key={relatedPost.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <Link to={`/blog/${relatedPost.slug}`}>
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <span className="inline-block bg-[#E85E27]/10 text-[#E85E27] px-3 py-1 rounded-full text-xs font-semibold mb-3">
                      {relatedPost.category}
                    </span>
                    <h3 className="text-xl font-bold text-[#232d37] mb-3 group-hover:text-[#E85E27] transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2 text-sm">
                      {relatedPost.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-[#E85E27] font-semibold text-sm group-hover:gap-3 transition-all">
                      Lire l'article
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </section>
      )}

      <section className="container mx-auto px-4 lg:px-8 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-[#232d37] to-[#1a2129] text-white rounded-2xl p-8 lg:p-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Besoin d'assistance ?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-300">
            Notre équipe d'experts est à votre disposition pour répondre à vos questions et vous accompagner dans vos projets logistiques
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#E85E27] hover:bg-[#d14d1a] text-white px-8 py-3.5 rounded-lg transition-colors font-medium text-base"
          >
            Contactez-nous
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </section>

      <style>{`
        .blog-content h2 {
          font-size: 1.875rem;
          font-weight: 700;
          color: #232d37;
          margin-top: 2.5rem;
          margin-bottom: 1.25rem;
        }
        .blog-content h3 {
          font-size: 1.5rem;
          font-weight: 600;
          color: #232d37;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }
        .blog-content p {
          margin-bottom: 1.25rem;
          line-height: 1.8;
        }
        .blog-content ul, .blog-content ol {
          margin-bottom: 1.5rem;
          padding-left: 1.5rem;
        }
        .blog-content li {
          margin-bottom: 0.75rem;
          line-height: 1.7;
        }
        .blog-content strong {
          color: #E85E27;
          font-weight: 600;
        }
        .blog-content a {
          color: #E85E27;
          text-decoration: underline;
        }
        .blog-content a:hover {
          color: #d14d1a;
        }
      `}</style>
    </div>
  );
}
