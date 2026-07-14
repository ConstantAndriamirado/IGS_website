import { useState } from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import {
  LayoutDashboard,
  FileText,
  MessageSquare,
  Settings,
  Eye,
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
    return stored ? JSON.parse(stored) : fallback;
  } catch {
    return fallback;
  }
};

export default function Admin() {
  const { language } = useLanguage();
  const isFrench = language === 'fr';

  const [activeSection, setActiveSection] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [contactMessages, setContactMessages] = useState<ContactMessage[]>(() => loadStoredItems<ContactMessage[]>('igs_contact_messages', []));
  const [quoteRequests, setQuoteRequests] = useState<QuoteRequestEntry[]>(() => loadStoredItems<QuoteRequestEntry[]>('igs_quote_requests', []));

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

  const stats = [
    {
      title: isFrench ? 'Messages reçus' : 'Messages received',
      value: contactMessages.length.toString(),
      change: '+0%',
      icon: Mail,
      color: 'bg-blue-500'
    },
    {
      title: isFrench ? 'Demandes de devis' : 'Quote requests',
      value: quoteRequests.length.toString(),
      change: '+0%',
      icon: Briefcase,
      color: 'bg-[#E85E27]'
    },
    {
      title: isFrench ? 'Articles publiés' : 'Published articles',
      value: '6',
      change: '+2',
      icon: FileText,
      color: 'bg-green-500'
    },
    {
      title: isFrench ? 'Pages actives' : 'Active pages',
      value: '12',
      change: '+2',
      icon: FileCode,
      color: 'bg-purple-500'
    }
  ];

  // Données pour le graphique des visiteurs
  const visitorsData = [
    { name: 'Jan', visiteurs: 4000, devis: 24 },
    { name: 'Fev', visiteurs: 3000, devis: 18 },
    { name: 'Mar', visiteurs: 5000, devis: 32 },
    { name: 'Avr', visiteurs: 4500, devis: 28 },
    { name: 'Mai', visiteurs: 6000, devis: 42 },
    { name: 'Juin', visiteurs: 5500, devis: 38 },
    { name: 'Juil', visiteurs: 7000, devis: 45 }
  ];

  // Données pour le graphique des services
  const servicesData = [
    { name: 'Fret Maritime', value: 45 },
    { name: 'Fret Aérien', value: 30 },
    { name: 'Dédouanement', value: 15 },
    { name: 'Fret Routier', value: 10 }
  ];

  const COLORS = ['#E85E27', '#232d37', '#3b82f6', '#10b981'];

  const recentContacts = [...contactMessages]
    .sort((a, b) => Number(b.id) - Number(a.id))
    .slice(0, 4);

  const recentQuotes = [...quoteRequests]
    .sort((a, b) => Number(b.id) - Number(a.id))
    .slice(0, 4);

  const recentArticles = [
    {
      id: 1,
      title: isFrench ? 'Les nouvelles réglementations douanières 2026' : 'The new customs regulations for 2026',
      author: 'Admin IGS',
      date: '05/03/2026',
      status: 'published',
      views: 1250
    },
    {
      id: 2,
      title: isFrench ? 'Optimiser vos coûts de transport maritime' : 'Optimizing your maritime transport costs',
      author: 'Admin IGS',
      date: '01/03/2026',
      status: 'published',
      views: 890
    },
    {
      id: 3,
      title: isFrench ? 'Guide complet du dédouanement en Guinée' : 'Complete customs clearance guide in Guinea',
      author: 'Admin IGS',
      date: '28/02/2026',
      status: 'draft',
      views: 0
    }
  ];

  const menuItems = [
    { id: 'dashboard', name: isFrench ? 'Tableau de bord' : 'Dashboard', icon: LayoutDashboard },
    { id: 'articles', name: isFrench ? 'Articles' : 'Articles', icon: FileText },
    { id: 'contacts', name: isFrench ? 'Contacts' : 'Contacts', icon: MessageSquare },
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
              <span className="text-green-600 text-sm font-semibold">{stat.change}</span>
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
              <button className="bg-[#E85E27] text-white px-4 py-2 rounded-lg font-medium">{isFrench ? 'Ajouter un article' : 'Add article'}</button>
            </div>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {recentArticles.map((article) => (
                <div key={article.id} className="border border-gray-200 rounded-xl p-5">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-[#232d37]">{article.title}</h3>
                    {article.status === 'published' ? <CheckCircle className="text-green-500" size={18} /> : <Clock className="text-gray-400" size={18} />}
                  </div>
                  <p className="text-sm text-gray-500 mb-4">{article.author} • {article.date}</p>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>{article.views} vues</span>
                    <span className="text-[#E85E27] font-medium">{article.status === 'published' ? (isFrench ? 'Publié' : 'Published') : (isFrench ? 'Brouillon' : 'Draft')}</span>
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
      case 'settings':
        return (
          <div className="bg-white rounded-xl shadow-lg p-6 space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-[#232d37] mb-2">{isFrench ? 'Paramètres de l’espace admin' : 'Admin space settings'}</h2>
              <p className="text-gray-600">{isFrench ? 'Le tableau de bord lit actuellement les données depuis le stockage local du navigateur.' : 'The dashboard currently reads data from the browser local storage.'}</p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-[#232d37] mb-2">{isFrench ? 'Stockage local' : 'Local storage'}</h3>
                <p className="text-sm text-gray-600">{isFrench ? 'Les soumissions de contact et de devis sont conservées localement pour cette version de démonstration.' : 'Contact and quote submissions are stored locally for this demo version.'}</p>
              </div>
              <div className="border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-[#232d37] mb-2">{isFrench ? 'Prochaine étape' : 'Next step'}</h3>
                <p className="text-sm text-gray-600">{isFrench ? 'Connecter ce panneau à une base de données ou à un backend métier pour une gestion en temps réel.' : 'Connect this panel to a database or business backend for real-time management.'}</p>
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