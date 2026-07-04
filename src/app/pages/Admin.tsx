import { useState } from 'react';
import { motion } from 'motion/react';
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
  Image as ImageIcon
} from 'lucide-react';
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
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

export default function Admin() {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Mock data pour les statistiques
  const stats = [
    {
      title: 'Visiteurs (Mois)',
      value: '12,458',
      change: '+12.5%',
      icon: Eye,
      color: 'bg-blue-500'
    },
    {
      title: 'Demandes de Contact',
      value: '142',
      change: '+8.2%',
      icon: MessageSquare,
      color: 'bg-[#E85E27]'
    },
    {
      title: 'Articles Publiés',
      value: '38',
      change: '+3',
      icon: FileText,
      color: 'bg-green-500'
    },
    {
      title: 'Pages Actives',
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

  // Données pour les contacts récents
  const recentContacts = [
    {
      id: 1,
      name: 'Amadou Diallo',
      email: 'amadou@exemple.com',
      service: 'Fret Maritime',
      date: '07/03/2026',
      status: 'pending'
    },
    {
      id: 2,
      name: 'Fatoumata Bah',
      email: 'fatoumata@exemple.com',
      service: 'Dédouanement',
      date: '06/03/2026',
      status: 'processed'
    },
    {
      id: 3,
      name: 'Mamadou Sylla',
      email: 'mamadou@exemple.com',
      service: 'Fret Aérien',
      date: '05/03/2026',
      status: 'pending'
    },
    {
      id: 4,
      name: 'Aissatou Camara',
      email: 'aissatou@exemple.com',
      service: 'Fret Routier',
      date: '04/03/2026',
      status: 'rejected'
    }
  ];

  // Articles de blog récents
  const recentArticles = [
    {
      id: 1,
      title: 'Les nouvelles réglementations douanières 2026',
      author: 'Admin IGS',
      date: '05/03/2026',
      status: 'published',
      views: 1250
    },
    {
      id: 2,
      title: 'Optimiser vos coûts de transport maritime',
      author: 'Admin IGS',
      date: '01/03/2026',
      status: 'published',
      views: 890
    },
    {
      id: 3,
      title: 'Guide complet du dédouanement en Guinée',
      author: 'Admin IGS',
      date: '28/02/2026',
      status: 'draft',
      views: 0
    }
  ];

  const menuItems = [
    { id: 'dashboard', name: 'Tableau de bord', icon: LayoutDashboard },
    { id: 'articles', name: 'Articles', icon: FileText },
    { id: 'contacts', name: 'Contacts', icon: MessageSquare },
    { id: 'settings', name: 'Paramètres', icon: Settings }
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
            <button className="text-gray-400 hover:text-gray-600">
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
            <button className="text-gray-400 hover:text-gray-600">
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
            <h3 className="text-lg font-semibold text-[#232d37]">Demandes Récentes</h3>
          </div>
          <div className="divide-y divide-gray-100">
            {recentContacts.map((contact) => (
              <div key={contact.id} className="p-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-[#232d37]">{contact.name}</h4>
                  {contact.status === 'pending' && (
                    <span className="bg-yellow-100 text-yellow-700 text-xs px-2 py-1 rounded-full">
                      En attente
                    </span>
                  )}
                  {contact.status === 'processed' && (
                    <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">
                      Traité
                    </span>
                  )}
                  {contact.status === 'rejected' && (
                    <span className="bg-red-100 text-red-700 text-xs px-2 py-1 rounded-full">
                      Refusé
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-600 mb-1">{contact.email}</p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{contact.service}</span>
                  <span>{contact.date}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Recent Articles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="bg-white rounded-xl shadow-lg border border-gray-100"
        >
          <div className="p-6 border-b border-gray-100">
            <h3 className="text-lg font-semibold text-[#232d37]">Articles Récents</h3>
          </div>
          <div className="divide-y divide-gray-100">
            {recentArticles.map((article) => (
              <div key={article.id} className="p-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-[#232d37] text-sm">{article.title}</h4>
                  {article.status === 'published' && (
                    <CheckCircle className="text-green-500" size={16} />
                  )}
                  {article.status === 'draft' && <Clock className="text-gray-400" size={16} />}
                </div>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{article.author}</span>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <Eye size={12} />
                      {article.views}
                    </span>
                    <span>{article.date}</span>
                  </div>
                </div>
              </div>
            ))}
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
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-[#232d37] mb-4">Gestion des Articles</h2>
            <p className="text-gray-600">Section en développement...</p>
          </div>
        );
      case 'contacts':
        return (
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-[#232d37] mb-4">Gestion des Contacts</h2>
            <p className="text-gray-600">Section en développement...</p>
          </div>
        );
      case 'settings':
        return (
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-[#232d37] mb-4">Paramètres</h2>
            <p className="text-gray-600">Section en développement...</p>
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
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white transition-colors">
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