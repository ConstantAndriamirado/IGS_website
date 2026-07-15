import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { toast } from 'sonner';
import { useLanguage } from '../context/LanguageContext';
import { loadPortalClientSettings, resetPortalClientSettings, savePortalClientSettings, type PortalClientSettings } from '../utils/portalSettings';
import { BLOG_POST_CATEGORIES, createEmptyBlogPost, defaultSiteContent, loadSiteContent, saveSiteContent, type BlogPostRecord, type SiteSettings } from '../utils/siteContent';
import {
  LayoutDashboard,
  FileText,
  MessageSquare,
  Settings,
  Clock,
  CheckCircle,
  Menu,
  X,
  LogOut,
  BarChart3,
  Download,
  FileCode,
  Globe,
  Image as ImageIcon,
  Mail,
  Briefcase,
  RotateCcw,
  AlertTriangle
} from 'lucide-react';
import {
  Line,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

type SubmissionStatus = 'pending' | 'processed' | 'rejected';

interface ContactMessage {
  id: number;
  name: string;
  email: string;
  phone: string;
  phoneCountryCode: string;
  service: string;
  message: string;
  submittedAt: string;
  status: SubmissionStatus;
}

interface QuoteRequestEntry {
  id: number;
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  origin: string;
  destination: string;
  cargoType: string;
  message: string;
  submittedAt: string;
  status: SubmissionStatus;
}

const loadStoredItems = <T,>(key: string, fallback: T[]): T[] => {
  if (typeof window === 'undefined') return fallback;
  try {
    const stored = window.localStorage.getItem(key);
    return stored ? (JSON.parse(stored) as T[]) : fallback;
  } catch {
    return fallback;
  }
};

export default function Admin() {
  const { language } = useLanguage();
  const isFrench = language === 'fr';

  const [activeSection, setActiveSection] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [contactMessages, setContactMessages] = useState<ContactMessage[]>(() => loadStoredItems<ContactMessage>('igs_contact_messages', [] as ContactMessage[]));
  const [quoteRequests, setQuoteRequests] = useState<QuoteRequestEntry[]>(() => loadStoredItems<QuoteRequestEntry>('igs_quote_requests', [] as QuoteRequestEntry[]));
  const [portalSettings, setPortalSettings] = useState<PortalClientSettings>(() => loadPortalClientSettings());
  const [siteContent, setSiteContent] = useState(() => loadSiteContent());
  const [editingPost, setEditingPost] = useState<BlogPostRecord | null>(null);
  const [postToDelete, setPostToDelete] = useState<BlogPostRecord | null>(null);

  useEffect(() => {
    const syncPortalSettings = () => setPortalSettings(loadPortalClientSettings());
    const syncSiteContent = () => setSiteContent(loadSiteContent());

    syncPortalSettings();
    syncSiteContent();

    window.addEventListener('igs-portal-settings-updated', syncPortalSettings);
    window.addEventListener('igs-site-content-updated', syncSiteContent);

    return () => {
      window.removeEventListener('igs-portal-settings-updated', syncPortalSettings);
      window.removeEventListener('igs-site-content-updated', syncSiteContent);
    };
  }, []);

  const saveToStorage = (key: string, value: unknown) => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(key, JSON.stringify(value));
    }
  };

  const updateSubmissionStatus = (type: 'contact' | 'quote', id: number, status: SubmissionStatus) => {
    if (type === 'contact') {
      const next = contactMessages.map((item) => (item.id === id ? { ...item, status } : item));
      setContactMessages(next);
      saveToStorage('igs_contact_messages', next);
      return;
    }

    const next = quoteRequests.map((item) => (item.id === id ? { ...item, status } : item));
    setQuoteRequests(next);
    saveToStorage('igs_quote_requests', next);
  };

  const publishedArticlesCount = siteContent.posts.filter((post) => post.status === 'published').length;
  const totalViews = siteContent.posts.reduce((sum, post) => sum + (post.views || 0), 0);
  const activePagesCount = [
    siteContent.posts.some((post) => post.status === 'published') ? 1 : 0,
    Boolean(portalSettings.url) ? 1 : 0,
    Boolean(siteContent.settings.companyName) ? 1 : 0,
    Boolean(siteContent.settings.email) ? 1 : 0
  ].reduce((sum, value) => sum + value, 0) + publishedArticlesCount;

  const normalizeServiceName = (value: string) => {
    const normalized = value.trim().toLowerCase();
    const aliases: Record<string, string> = {
      'fret maritime': 'Fret Maritime',
      'transport maritime': 'Fret Maritime',
      'fret aerien': 'Fret Aérien',
      'fret aérien': 'Fret Aérien',
      'dédouanement': 'Dédouanement',
      'dedouanement': 'Dédouanement',
      'fret routier': 'Fret Routier',
      'transit & douane': 'Transit & Douane',
      'transit douane': 'Transit & Douane',
      'logistique': 'Logistique',
      'reglementation': 'Réglementation',
      'réglementation': 'Réglementation',
      'autre': 'Autre'
    };

    return aliases[normalized] || value.trim() || 'Autre';
  };

  const buildVisitorsData = () => {
    const now = new Date();
    const months = Array.from({ length: 6 }, (_, index) => {
      const date = new Date(now.getFullYear(), now.getMonth() - (5 - index), 1);
      return {
        name: date.toLocaleDateString(isFrench ? 'fr-FR' : 'en-US', { month: 'short' }),
        visiteurs: 0,
        devis: 0
      };
    });

    const monthKey = (date: Date) => `${date.getFullYear()}-${date.getMonth()}`;

    siteContent.posts.forEach((post) => {
      const publishedDate = post.publishedAt ? new Date(post.publishedAt) : null;
      if (!publishedDate || Number.isNaN(publishedDate.getTime())) {
        return;
      }

      const key = monthKey(publishedDate);
      const entry = months.find((item) => item.name === publishedDate.toLocaleDateString(isFrench ? 'fr-FR' : 'en-US', { month: 'short' }));
      if (!entry) {
        return;
      }

      const monthIndex = months.findIndex((item) => item.name === entry.name);
      if (monthIndex >= 0) {
        months[monthIndex].visiteurs += post.views || 0;
      }
    });

    quoteRequests.forEach((quote) => {
      const createdAt = new Date(quote.submittedAt);
      if (Number.isNaN(createdAt.getTime())) {
        return;
      }

      const key = monthKey(createdAt);
      const monthIndex = months.findIndex((item) => item.name === createdAt.toLocaleDateString(isFrench ? 'fr-FR' : 'en-US', { month: 'short' }));
      if (monthIndex >= 0) {
        months[monthIndex].devis += 1;
      }
    });

    return months;
  };

  const buildServicesData = () => {
    const counts: Record<string, number> = {};
    const registerService = (label: string) => {
      if (!label) {
        return;
      }
      const normalizedName = normalizeServiceName(label);
      counts[normalizedName] = (counts[normalizedName] || 0) + 1;
    };

    contactMessages.forEach((message) => registerService(message.service));
    quoteRequests.forEach((quote) => registerService(quote.service));

    if (Object.keys(counts).length === 0) {
      siteContent.posts.forEach((post) => {
        const category = post.category || 'Actualités';
        counts[category] = (counts[category] || 0) + 1;
      });
    }

    return Object.entries(counts)
      .map(([name, value]) => ({ name, value }))
      .sort((a, b) => b.value - a.value)
      .slice(0, 6);
  };

  const stats = [
    {
      title: isFrench ? 'Messages reçus' : 'Messages received',
      value: contactMessages.length.toString(),
      icon: Mail,
      color: 'bg-blue-500'
    },
    {
      title: isFrench ? 'Demandes de devis' : 'Quote requests',
      value: quoteRequests.length.toString(),
      icon: Briefcase,
      color: 'bg-[#E85E27]'
    },
    {
      title: isFrench ? 'Articles publiés' : 'Published articles',
      value: publishedArticlesCount.toString(),
      icon: FileText,
      color: 'bg-green-500'
    },
    {
      title: isFrench ? 'Pages actives' : 'Active pages',
      value: activePagesCount.toString(),
      icon: FileCode,
      color: 'bg-purple-500'
    }
  ];

  const visitorsData = buildVisitorsData();
  const servicesData = buildServicesData();

  const COLORS = ['#E85E27', '#232d37', '#3b82f6', '#10b981'];

  const recentContacts = [...contactMessages]
    .sort((a, b) => Number(b.id) - Number(a.id))
    .slice(0, 4);

  const recentQuotes = [...quoteRequests]
    .sort((a, b) => Number(b.id) - Number(a.id))
    .slice(0, 4);

  const recentArticles = siteContent.posts.slice(0, 6).map((post) => ({
    id: post.id,
    title: post.title || (isFrench ? 'Sans titre' : 'Untitled'),
    author: post.author,
    date: post.date,
    status: post.status,
    views: post.views || 0
  }));

  const updateSiteSetting = <K extends keyof SiteSettings>(key: K, value: SiteSettings[K]) => {
    setSiteContent((prev) => ({
      ...prev,
      settings: {
        ...prev.settings,
        [key]: value
      }
    }));
  };

  const saveSiteContentState = (nextContent: typeof siteContent) => {
    const persisted = saveSiteContent(nextContent);
    setSiteContent(persisted);
    toast.success(isFrench ? 'Contenu enregistré localement.' : 'Content saved locally.');
  };

  const handleCreatePost = () => {
    setEditingPost(createEmptyBlogPost());
  };

  const handleEditPost = (post: BlogPostRecord) => {
    setEditingPost({ ...post });
  };

  const handleDeletePost = (postId: number) => {
    const selectedPost = siteContent.posts.find((post) => post.id === postId) || null;
    setPostToDelete(selectedPost);
  };

  const confirmDeletePost = () => {
    if (!postToDelete) {
      return;
    }

    const nextPosts = siteContent.posts.filter((post) => post.id !== postToDelete.id);
    saveSiteContentState({ ...siteContent, posts: nextPosts });
    setPostToDelete(null);
  };

  const handleSavePost = () => {
    if (!editingPost) {
      return;
    }

    const normalizedPost: BlogPostRecord = {
      ...editingPost,
      publishedAt: editingPost.publishedAt || new Date().toISOString(),
      views: editingPost.views || 0,
      date: editingPost.publishedAt
        ? new Date(editingPost.publishedAt).toLocaleDateString('fr-FR')
        : editingPost.date,
      category: BLOG_POST_CATEGORIES.includes(editingPost.category as (typeof BLOG_POST_CATEGORIES)[number])
        ? editingPost.category
        : 'Actualités'
    };

    const nextPosts = siteContent.posts.some((post) => post.id === normalizedPost.id)
      ? siteContent.posts.map((post) => (post.id === normalizedPost.id ? normalizedPost : post))
      : [normalizedPost, ...siteContent.posts];

    saveSiteContentState({ ...siteContent, posts: nextPosts });
    setEditingPost(null);
  };

  const menuItems = [
    { id: 'dashboard', name: isFrench ? 'Tableau de bord' : 'Dashboard', icon: LayoutDashboard },
    { id: 'articles', name: isFrench ? 'Articles' : 'Articles', icon: FileText },
    { id: 'contacts', name: isFrench ? 'Contacts' : 'Contacts', icon: MessageSquare },
    { id: 'portal-settings', name: isFrench ? 'Portail Client' : 'Client Portal', icon: Globe },
    { id: 'settings', name: isFrench ? 'Paramètres' : 'Settings', icon: Settings }
  ];

  const renderDashboard = () => (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-xl shadow-lg p-6 border border-gray-100"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`${stat.color} w-12 h-12 rounded-lg flex items-center justify-center`}>
                <stat.icon className="text-white" size={24} />
              </div>
            </div>
            <h3 className="text-gray-600 text-sm mb-1">{stat.title}</h3>
            <p className="text-3xl font-bold text-[#232d37]">{stat.value}</p>
          </motion.div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Visiteurs Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white rounded-xl shadow-lg p-6 border border-gray-100"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-[#232d37]">Visiteurs & Devis</h3>
            <button aria-label={isFrench ? 'Télécharger' : 'Download'} className="text-gray-400 hover:text-gray-600">
              <Download size={20} />
            </button>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={visitorsData}>
              <defs>
                <linearGradient id="colorVisiteurs" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#E85E27" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#E85E27" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="name" stroke="#888" />
              <YAxis stroke="#888" />
              <Tooltip />
              <Legend />
              <Area
                type="monotone"
                dataKey="visiteurs"
                stroke="#E85E27"
                fillOpacity={1}
                fill="url(#colorVisiteurs)"
                name="Visiteurs"
              />
              <Line type="monotone" dataKey="devis" stroke="#232d37" name="Devis" />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Services Distribution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-white rounded-xl shadow-lg p-6 border border-gray-100"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-[#232d37]">Répartition des Services</h3>
            <button aria-label={isFrench ? 'Afficher le graphique' : 'Show chart'} className="text-gray-400 hover:text-gray-600">
              <BarChart3 size={20} />
            </button>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={servicesData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {servicesData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* Recent Activities */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Contacts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-white rounded-xl shadow-lg border border-gray-100"
        >
          <div className="p-6 border-b border-gray-100">
            <h3 className="text-lg font-semibold text-[#232d37]">{isFrench ? 'Messages récents' : 'Recent messages'}</h3>
          </div>
          <div className="divide-y divide-gray-100">
            {recentContacts.length > 0 ? recentContacts.map((contact) => (
              <div key={contact.id} className="p-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-[#232d37]">{contact.name}</h4>
                  {contact.status === 'pending' && (
                    <span className="bg-yellow-100 text-yellow-700 text-xs px-2 py-1 rounded-full">{isFrench ? 'En attente' : 'Pending'}</span>
                  )}
                  {contact.status === 'processed' && (
                    <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">{isFrench ? 'Traité' : 'Processed'}</span>
                  )}
                  {contact.status === 'rejected' && (
                    <span className="bg-red-100 text-red-700 text-xs px-2 py-1 rounded-full">{isFrench ? 'Refusé' : 'Rejected'}</span>
                  )}
                </div>
                <p className="text-sm text-gray-600 mb-1">{contact.email}</p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{contact.service}</span>
                  <span>{new Date(contact.submittedAt).toLocaleDateString()}</span>
                </div>
              </div>
            )) : (
              <div className="p-6 text-sm text-gray-500">{isFrench ? 'Aucun message reçu pour le moment.' : 'No messages received yet.'}</div>
            )}
          </div>
        </motion.div>

        {/* Recent Quotes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="bg-white rounded-xl shadow-lg border border-gray-100"
        >
          <div className="p-6 border-b border-gray-100">
            <h3 className="text-lg font-semibold text-[#232d37]">{isFrench ? 'Devis récents' : 'Recent quotes'}</h3>
          </div>
          <div className="divide-y divide-gray-100">
            {recentQuotes.length > 0 ? recentQuotes.map((quote) => (
              <div key={quote.id} className="p-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-[#232d37]">{quote.company || quote.name}</h4>
                  {quote.status === 'pending' && (
                    <span className="bg-yellow-100 text-yellow-700 text-xs px-2 py-1 rounded-full">{isFrench ? 'En attente' : 'Pending'}</span>
                  )}
                  {quote.status === 'processed' && (
                    <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">{isFrench ? 'Traité' : 'Processed'}</span>
                  )}
                  {quote.status === 'rejected' && (
                    <span className="bg-red-100 text-red-700 text-xs px-2 py-1 rounded-full">{isFrench ? 'Refusé' : 'Rejected'}</span>
                  )}
                </div>
                <p className="text-sm text-gray-600 mb-1">{quote.service}</p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{quote.origin} → {quote.destination}</span>
                  <span>{new Date(quote.submittedAt).toLocaleDateString()}</span>
                </div>
              </div>
            )) : (
              <div className="p-6 text-sm text-gray-500">{isFrench ? 'Aucune demande de devis enregistrée.' : 'No quote requests recorded yet.'}</div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );

  const renderSection = () => {
    switch (activeSection) {
      case 'dashboard':
        return renderDashboard();
      case 'articles':
        return (
          <div className="bg-white rounded-xl shadow-lg p-6 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-[#232d37] mb-2">{isFrench ? 'Gestion des articles' : 'Article management'}</h2>
                <p className="text-gray-600">{isFrench ? 'Prévisualisation du contenu publié et des brouillons.' : 'Preview of published content and drafts.'}</p>
              </div>
              <button onClick={handleCreatePost} className="bg-[#E85E27] text-white px-4 py-2 rounded-lg font-medium">{isFrench ? 'Ajouter un article' : 'Add article'}</button>
            </div>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {recentArticles.map((article) => (
                <div key={article.id} className="border border-gray-200 rounded-xl p-5">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-[#232d37]">{article.title}</h3>
                    {article.status === 'published' ? <CheckCircle className="text-green-500" size={18} /> : <Clock className="text-gray-400" size={18} />}
                  </div>
                  <p className="text-sm text-gray-500 mb-3">{article.author} • {article.date}</p>
                  <div className="mb-4 space-y-1 text-sm text-gray-600">
                    <p><span className="font-medium text-[#232d37]">Vues :</span> {article.views}</p>
                    <p><span className="font-medium text-[#232d37]">Publication :</span> {article.date}</p>
                  </div>
                  <div className="flex items-center justify-end text-sm text-gray-600">
                    <div className="flex gap-2">
                      <button onClick={() => handleEditPost(siteContent.posts.find((post) => post.id === article.id)!)} className="text-[#E85E27] font-medium">{isFrench ? 'Éditer' : 'Edit'}</button>
                      <button onClick={() => handleDeletePost(article.id)} className="text-red-600 font-medium">{isFrench ? 'Suppr.' : 'Del.'}</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'contacts':
        return (
          <div className="bg-white rounded-xl shadow-lg p-6 space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-[#232d37] mb-2">{isFrench ? 'Gestion des contacts' : 'Contact management'}</h2>
              <p className="text-gray-600">{isFrench ? 'Suivi des messages reçus depuis le formulaire de contact.' : 'Tracking of messages received from the contact form.'}</p>
            </div>
            <div className="space-y-4">
              {contactMessages.length > 0 ? contactMessages.map((message) => (
                <div key={message.id} className="border border-gray-200 rounded-xl p-5">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 mb-3">
                    <div>
                      <h3 className="font-semibold text-[#232d37]">{message.name}</h3>
                      <p className="text-sm text-gray-500">{message.email} • {message.phone}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      {message.status === 'pending' && <span className="bg-yellow-100 text-yellow-700 text-xs px-2 py-1 rounded-full">{isFrench ? 'En attente' : 'Pending'}</span>}
                      {message.status === 'processed' && <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">{isFrench ? 'Traité' : 'Processed'}</span>}
                      {message.status === 'rejected' && <span className="bg-red-100 text-red-700 text-xs px-2 py-1 rounded-full">{isFrench ? 'Refusé' : 'Rejected'}</span>}
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{message.service}</p>
                  <p className="text-sm text-gray-700 mb-4">{message.message}</p>
                  <div className="flex flex-wrap gap-2">
                    <button onClick={() => updateSubmissionStatus('contact', message.id, 'processed')} className="px-3 py-2 rounded-lg bg-green-600 text-white text-sm">{isFrench ? 'Marquer traité' : 'Mark processed'}</button>
                    <button onClick={() => updateSubmissionStatus('contact', message.id, 'rejected')} className="px-3 py-2 rounded-lg bg-red-600 text-white text-sm">{isFrench ? 'Refuser' : 'Reject'}</button>
                    <button onClick={() => updateSubmissionStatus('contact', message.id, 'pending')} className="px-3 py-2 rounded-lg bg-gray-100 text-gray-700 text-sm">{isFrench ? 'Remettre en attente' : 'Set pending'}</button>
                  </div>
                </div>
              )) : (
                <div className="text-sm text-gray-500">{isFrench ? 'Aucun message enregistré pour le moment.' : 'No messages recorded yet.'}</div>
              )}
            </div>
          </div>
        );
      case 'portal-settings':
        return (
          <div className="bg-white rounded-xl shadow-lg p-6 space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-[#232d37] mb-2">{isFrench ? 'Paramètres du Portail Client' : 'Client Portal settings'}</h2>
              <p className="text-gray-600">{isFrench ? 'Configurez l’URL, le libellé du bouton et le comportement du portail depuis cette rubrique.' : 'Configure the portal URL, button label and behavior from this section.'}</p>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <div className="space-y-4">
                <label className="block text-sm font-medium text-[#232d37]">
                  {isFrench ? 'Libellé du bouton' : 'Button label'}
                  <input
                    value={portalSettings.buttonLabel}
                    onChange={(e) => setPortalSettings({ ...portalSettings, buttonLabel: e.target.value })}
                    className="mt-2 w-full rounded-lg border border-gray-200 px-3 py-2"
                  />
                </label>

                <label className="block text-sm font-medium text-[#232d37]">
                  {isFrench ? 'URL du portail' : 'Portal URL'}
                  <input
                    value={portalSettings.url}
                    onChange={(e) => setPortalSettings({ ...portalSettings, url: e.target.value })}
                    className="mt-2 w-full rounded-lg border border-gray-200 px-3 py-2"
                  />
                </label>

                <label className="block text-sm font-medium text-[#232d37]">
                  {isFrench ? 'Message d’information' : 'Info message'}
                  <textarea
                    value={portalSettings.infoMessage}
                    onChange={(e) => setPortalSettings({ ...portalSettings, infoMessage: e.target.value })}
                    rows={3}
                    className="mt-2 w-full rounded-lg border border-gray-200 px-3 py-2"
                  />
                </label>
              </div>

              <div className="space-y-4">
                <label className="flex items-center gap-3 text-sm font-medium text-[#232d37]">
                  <input
                    type="checkbox"
                    checked={portalSettings.enabled}
                    onChange={(e) => setPortalSettings({ ...portalSettings, enabled: e.target.checked })}
                    className="h-4 w-4 rounded border-gray-300"
                  />
                  {isFrench ? 'Activer le bouton Portail Client' : 'Enable the Client Portal button'}
                </label>

                <label className="flex items-center gap-3 text-sm font-medium text-[#232d37]">
                  <input
                    type="checkbox"
                    checked={portalSettings.openInNewTab}
                    onChange={(e) => setPortalSettings({ ...portalSettings, openInNewTab: e.target.checked })}
                    className="h-4 w-4 rounded border-gray-300"
                  />
                  {isFrench ? 'Ouvrir dans un nouvel onglet' : 'Open in a new tab'}
                </label>

                <label className="block text-sm font-medium text-[#232d37]">
                  {isFrench ? 'Couleur du bouton' : 'Button color'}
                  <select
                    value={portalSettings.buttonColor}
                    onChange={(e) => setPortalSettings({ ...portalSettings, buttonColor: e.target.value })}
                    className="mt-2 w-full rounded-lg border border-gray-200 px-3 py-2"
                  >
                    <option value="bg-[#E85E27]">Orange IGS</option>
                    <option value="bg-[#232d37]">Bleu nuit</option>
                    <option value="bg-[#2563eb]">Bleu</option>
                    <option value="bg-[#0f766e]">Vert</option>
                  </select>
                </label>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => {
                  const nextSettings = savePortalClientSettings({ ...portalSettings });
                  setPortalSettings(nextSettings);
                  toast.success(isFrench ? 'Configuration enregistrée avec succès.' : 'Configuration saved successfully.', {
                    description: isFrench ? 'Les paramètres du Portail Client ont bien été enregistrés.' : 'The Client Portal settings have been saved successfully.',
                    duration: 5000
                  });
                }}
                className="rounded-lg bg-[#E85E27] px-4 py-2 text-white"
              >
                {isFrench ? 'Enregistrer les paramètres' : 'Save settings'}
              </button>
              <button
                onClick={() => {
                  const resetSettings = resetPortalClientSettings();
                  setPortalSettings(resetSettings);
                  toast.info(isFrench ? 'Configuration réinitialisée.' : 'Configuration reset.', {
                    description: isFrench ? 'Les valeurs par défaut du Portail Client ont été restaurées.' : 'The default Client Portal values have been restored.',
                    duration: 5000
                  });
                }}
                className="rounded-lg border border-gray-200 px-4 py-2 text-gray-700"
              >
                {isFrench ? 'Réinitialiser' : 'Reset'}
              </button>
            </div>
          </div>
        );
      case 'settings':
        return (
          <div className="bg-white rounded-xl shadow-lg p-6 space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-[#232d37] mb-2">{isFrench ? 'Paramètres de l’espace admin' : 'Admin space settings'}</h2>
              <p className="text-gray-600">{isFrench ? 'Les informations visibles sur le site et dans le blog sont maintenant pilotées depuis ce panneau.' : 'The information visible on the site and the blog is now driven from this panel.'}</p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="border border-gray-200 rounded-xl p-5 space-y-3">
                <h3 className="font-semibold text-[#232d37]">{isFrench ? 'Informations entreprise' : 'Company information'}</h3>
                <label className="block text-sm font-medium text-[#232d37]">
                  {isFrench ? 'Nom de l’entreprise' : 'Company name'}
                  <input value={siteContent.settings.companyName} onChange={(e) => updateSiteSetting('companyName', e.target.value)} className="mt-2 w-full rounded-lg border border-gray-200 px-3 py-2" />
                </label>
                <label className="block text-sm font-medium text-[#232d37]">
                  {isFrench ? 'Slogan' : 'Tagline'}
                  <input value={siteContent.settings.tagline} onChange={(e) => updateSiteSetting('tagline', e.target.value)} className="mt-2 w-full rounded-lg border border-gray-200 px-3 py-2" />
                </label>
                <label className="block text-sm font-medium text-[#232d37]">
                  {isFrench ? 'Téléphone' : 'Phone'}
                  <input value={siteContent.settings.phone} onChange={(e) => updateSiteSetting('phone', e.target.value)} className="mt-2 w-full rounded-lg border border-gray-200 px-3 py-2" />
                </label>
              </div>
              <div className="border border-gray-200 rounded-xl p-5 space-y-3">
                <h3 className="font-semibold text-[#232d37] mb-2">{isFrench ? 'Coordonnées et sauvegarde' : 'Contact details and storage'}</h3>
                <label className="block text-sm font-medium text-[#232d37]">
                  {isFrench ? 'Email' : 'Email'}
                  <input value={siteContent.settings.email} onChange={(e) => updateSiteSetting('email', e.target.value)} className="mt-2 w-full rounded-lg border border-gray-200 px-3 py-2" />
                </label>
                <label className="block text-sm font-medium text-[#232d37]">
                  {isFrench ? 'Adresse' : 'Address'}
                  <input value={siteContent.settings.address} onChange={(e) => updateSiteSetting('address', e.target.value)} className="mt-2 w-full rounded-lg border border-gray-200 px-3 py-2" />
                </label>
                <button onClick={() => saveSiteContentState(siteContent)} className="rounded-lg bg-[#E85E27] px-4 py-2 text-white">{isFrench ? 'Enregistrer les changements' : 'Save changes'}</button>
              </div>
            </div>
          </div>
        );
      default:
        return renderDashboard();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {postToDelete && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/60 p-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl"
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-600">
                <AlertTriangle size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#232d37]">
                  {isFrench ? 'Supprimer cet article ?' : 'Delete this article?'}
                </h3>
                <p className="text-sm text-gray-500">
                  {isFrench ? 'Cette action est irréversible.' : 'This action cannot be undone.'}
                </p>
              </div>
            </div>

            <p className="mb-6 text-sm text-gray-700">
              {isFrench
                ? `L’article « ${postToDelete.title || 'Sans titre'} » sera définitivement supprimé.`
                : `The article “${postToDelete.title || 'Untitled'}” will be permanently deleted.`}
            </p>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setPostToDelete(null)}
                className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
              >
                {isFrench ? 'Annuler' : 'Cancel'}
              </button>
              <button
                onClick={confirmDeletePost}
                className="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-700"
              >
                {isFrench ? 'Supprimer' : 'Delete'}
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {editingPost && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 p-4">
          <div className="w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold text-[#232d37]">{isFrench ? 'Éditer l’article' : 'Edit article'}</h3>
                <p className="text-sm text-gray-500">{isFrench ? 'Les modifications sont sauvegardées localement dans votre navigateur.' : 'Changes are saved locally in your browser.'}</p>
              </div>
              <button onClick={() => setEditingPost(null)} className="text-sm text-gray-500">{isFrench ? 'Fermer' : 'Close'}</button>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-3">
                <label className="block text-sm font-medium text-[#232d37]">
                  {isFrench ? 'Titre' : 'Title'}
                  <input value={editingPost.title} onChange={(e) => setEditingPost({ ...editingPost, title: e.target.value })} className="mt-2 w-full rounded-lg border border-gray-200 px-3 py-2" />
                </label>
                <label className="block text-sm font-medium text-[#232d37]">
                  {isFrench ? 'Slug' : 'Slug'}
                  <input value={editingPost.slug} onChange={(e) => setEditingPost({ ...editingPost, slug: e.target.value })} className="mt-2 w-full rounded-lg border border-gray-200 px-3 py-2" />
                </label>
                <label className="block text-sm font-medium text-[#232d37]">
                  {isFrench ? 'Catégorie' : 'Category'}
                  <select value={editingPost.category} onChange={(e) => setEditingPost({ ...editingPost, category: e.target.value })} className="mt-2 w-full rounded-lg border border-gray-200 px-3 py-2">
                    {BLOG_POST_CATEGORIES.map((category) => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </label>
                <label className="block text-sm font-medium text-[#232d37]">
                  {isFrench ? 'Auteur' : 'Author'}
                  <input value={editingPost.author} onChange={(e) => setEditingPost({ ...editingPost, author: e.target.value })} className="mt-2 w-full rounded-lg border border-gray-200 px-3 py-2" />
                </label>
              </div>
              <div className="space-y-3">
                <label className="block text-sm font-medium text-[#232d37]">
                  {isFrench ? 'Extrait' : 'Excerpt'}
                  <textarea value={editingPost.excerpt} onChange={(e) => setEditingPost({ ...editingPost, excerpt: e.target.value })} className="mt-2 w-full rounded-lg border border-gray-200 px-3 py-2" rows={3} />
                </label>
                <label className="block text-sm font-medium text-[#232d37]">
                  {isFrench ? 'Image' : 'Image'}
                  <input value={editingPost.image} onChange={(e) => setEditingPost({ ...editingPost, image: e.target.value })} className="mt-2 w-full rounded-lg border border-gray-200 px-3 py-2" />
                </label>
                <label className="block text-sm font-medium text-[#232d37]">
                  {isFrench ? 'Date de publication' : 'Publication date'}
                  <input
                    type="datetime-local"
                    value={editingPost.publishedAt ? new Date(editingPost.publishedAt).toISOString().slice(0, 16) : ''}
                    onChange={(e) => setEditingPost({ ...editingPost, publishedAt: new Date(e.target.value).toISOString() })}
                    className="mt-2 w-full rounded-lg border border-gray-200 px-3 py-2"
                  />
                </label>
                <label className="flex items-center gap-3 text-sm font-medium text-[#232d37]">
                  <input type="checkbox" checked={editingPost.featured} onChange={(e) => setEditingPost({ ...editingPost, featured: e.target.checked })} />
                  {isFrench ? 'Mettre en avant' : 'Feature this article'}
                </label>
                <label className="block text-sm font-medium text-[#232d37]">
                  {isFrench ? 'Statut' : 'Status'}
                  <select value={editingPost.status} onChange={(e) => setEditingPost({ ...editingPost, status: e.target.value as BlogPostRecord['status'] })} className="mt-2 w-full rounded-lg border border-gray-200 px-3 py-2">
                    <option value="published">{isFrench ? 'Publié' : 'Published'}</option>
                    <option value="draft">{isFrench ? 'Brouillon' : 'Draft'}</option>
                  </select>
                </label>
              </div>
            </div>
            <label className="mt-3 block text-sm font-medium text-[#232d37]">
              {isFrench ? 'Contenu' : 'Content'}
              <textarea value={editingPost.content} onChange={(e) => setEditingPost({ ...editingPost, content: e.target.value })} className="mt-2 w-full rounded-lg border border-gray-200 px-3 py-2" rows={8} />
            </label>
            <div className="mt-6 flex justify-end gap-2">
              <button onClick={() => setEditingPost(null)} className="rounded-lg border border-gray-200 px-4 py-2 text-gray-700">{isFrench ? 'Annuler' : 'Cancel'}</button>
              <button onClick={handleSavePost} className="rounded-lg bg-[#E85E27] px-4 py-2 text-white">{isFrench ? 'Enregistrer' : 'Save'}</button>
            </div>
          </div>
        </div>
      )}
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-[#232d37] text-white transition-all duration-300 z-50 ${
          sidebarOpen ? 'w-64' : 'w-0 -translate-x-full lg:translate-x-0 lg:w-20'
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-700">
          {sidebarOpen && (
            <h1 className="text-xl font-bold">
              Admin <span className="text-[#E85E27]">IGS</span>
            </h1>
          )}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-label={sidebarOpen ? (isFrench ? 'Fermer le menu' : 'Close menu') : (isFrench ? 'Ouvrir le menu' : 'Open menu')}
            className="text-white hover:text-[#E85E27] transition-colors"
          >
            {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <nav className="p-4 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              aria-label={item.name}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeSection === item.id
                  ? 'bg-[#E85E27] text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              <item.icon size={20} />
              {sidebarOpen && <span>{item.name}</span>}
            </button>
          ))}
        </nav>

          {sidebarOpen && (
          <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-700">
            <button aria-label={isFrench ? 'Se déconnecter' : 'Log out'} className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white transition-colors">
              <LogOut size={20} />
              <span>Déconnexion</span>
            </button>
          </div>
        )}
      </aside>

      {/* Main Content */}
      <main
        className={`transition-all duration-300 ${
          sidebarOpen ? 'lg:ml-64' : 'lg:ml-20'
        }`}
      >
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40">
          <div className="px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                aria-label={isFrench ? 'Ouvrir le menu' : 'Open menu'}
                className="lg:hidden text-gray-600 hover:text-[#E85E27]"
              >
                <Menu size={24} />
              </button>
              <h2 className="text-2xl font-bold text-[#232d37]">
                {menuItems.find((item) => item.id === activeSection)?.name || 'Tableau de bord'}
              </h2>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-sm font-semibold text-[#232d37]">Administrateur</p>
                <p className="text-xs text-gray-500">admin@igs-guinee.com</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-[#E85E27] flex items-center justify-center text-white font-semibold">
                A
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="p-6">{renderSection()}</div>
      </main>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}