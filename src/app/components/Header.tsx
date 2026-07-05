import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { Search, Phone, Menu, X, ArrowRight, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const { language, toggleLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsSearchOpen(false);
  }, [location]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?search=${encodeURIComponent(searchQuery)}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  const navLinks = [
    { to: '/', label: language === 'fr' ? 'Accueil' : 'Home' },
    { to: '/services', label: language === 'fr' ? 'Nos Services' : 'Our Services' },
    { to: '/about', label: language === 'fr' ? 'À propos' : 'About Us' },
    { to: '/projects', label: language === 'fr' ? 'Réalisations' : 'Projects' },
    { to: '/contact', label: language === 'fr' ? 'Contact' : 'Contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-lg' : ''}`}>
      {/* Main Navigation */}
      <div className={`bg-white transition-all duration-300 ${isScrolled ? 'py-3' : 'py-5'}`}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex justify-between items-center gap-8">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 flex-shrink-0">
              <img 
                src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2dpc3RpY3MlMjBjb21wYW55JTIwbG9nbyUyMGdvbGRlbnxlbnwxfHx8fDE3NzQ3ODU4NTN8MA&ixlib=rb-4.1.0&q=80&w=400"
                alt="IGS - Ibrahima Golden Services"
                className={`transition-all duration-300 object-contain ${isScrolled ? 'h-12' : 'h-16'}`}
              />
            </Link>

            {/* Desktop Navigation - Centered */}
            <nav className="hidden lg:flex items-center gap-8 flex-grow justify-center">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`font-medium transition-colors relative group ${
                    isActive(link.to) ? 'text-[#E85E27]' : 'text-[#232d37] hover:text-[#E85E27]'
                  }`}
                >
                  {link.label}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#E85E27] transition-transform origin-left ${
                    isActive(link.to) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`} />
                </Link>
              ))}
            </nav>

            {/* Right Section: Search, Phone, Portal Button */}
            <div className="hidden lg:flex items-center gap-6 flex-shrink-0">
              <button 
                onClick={() => setIsSearchOpen(true)}
                className="text-[#232d37] hover:text-[#E85E27] transition-colors" 
                aria-label="Rechercher"
              >
                <Search size={20} />
              </button>
              
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 border border-gray-200 rounded-full px-3 py-2 text-sm font-medium text-[#232d37] hover:border-[#E85E27] hover:text-[#E85E27] transition-colors"
              >
                <Globe size={16} />
                {language === 'fr' ? 'EN' : 'FR'}
              </button>

              <div className="flex items-center gap-2 border-l border-gray-200 pl-6">
                <Phone size={20} className="text-[#E85E27]" />
                <div>
                  <div className="text-xs text-gray-500">{language === 'fr' ? 'Appelez-Nous' : 'Call Us'}</div>
                  <div className="font-semibold text-[#232d37]">+224 612 004 903</div>
                </div>
              </div>

              <Link 
                to="/contact" 
                className="bg-[#E85E27] hover:bg-[#d14d1a] text-white px-6 py-2.5 rounded-lg transition-colors font-medium text-sm ml-2"
              >
                {language === 'fr' ? 'Demander un devis' : 'Request a quote'}
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-[#232d37] hover:text-[#E85E27] transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`font-medium py-2 transition-colors ${
                  isActive(link.to) ? 'text-[#E85E27]' : 'text-[#232d37] hover:text-[#E85E27]'
                }`}
              >
                {link.label}
              </Link>
            ))}
            
            <div className="border-t border-gray-200 pt-4 mt-2 flex flex-col gap-4">
              <div className="flex items-center gap-2 text-[#232d37]">
                <Phone size={18} className="text-[#E85E27]" />
                <div>
                  <div className="text-xs text-gray-600">Appelez-Nous</div>
                  <div className="font-semibold">+224 612 004 903</div>
                </div>
              </div>

              <button
                onClick={toggleLanguage}
                className="flex items-center justify-center gap-2 border border-gray-200 rounded-full px-3 py-2 text-sm font-medium text-[#232d37] hover:border-[#E85E27] hover:text-[#E85E27] transition-colors"
              >
                <Globe size={16} />
                {language === 'fr' ? 'EN' : 'FR'}
              </button>

              <Link 
                to="/contact" 
                className="bg-[#E85E27] hover:bg-[#d14d1a] text-white px-6 py-3 rounded-full transition-colors font-medium text-center"
              >
                {language === 'fr' ? 'Demander un devis' : 'Request a quote'}
              </Link>
            </div>
          </nav>
        </div>
      )}

      {/* Search Modal */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center pt-32 px-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl animate-in fade-in slide-in-from-top-4 duration-300">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-[#232d37]">Rechercher</h3>
                <button 
                  onClick={() => setIsSearchOpen(false)}
                  className="text-gray-400 hover:text-[#E85E27] transition-colors"
                  aria-label="Fermer"
                >
                  <X size={24} />
                </button>
              </div>
              
              <form onSubmit={handleSearch} className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Rechercher des articles, services, informations..."
                  autoFocus
                  className="w-full pl-12 pr-12 py-4 rounded-lg border-2 border-gray-200 focus:border-[#E85E27] focus:outline-none text-[#232d37] placeholder-gray-400"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#E85E27] text-white p-2 rounded-lg hover:bg-[#d14d1a] transition-colors"
                  aria-label="Rechercher"
                >
                  <ArrowRight size={20} />
                </button>
              </form>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-500 mb-3">Recherche rapide :</p>
                <div className="flex flex-wrap gap-2">
                  {['Fret maritime', 'Dédouanement', 'Transit', 'Tracking'].map((tag) => (
                    <button
                      key={tag}
                      onClick={() => {
                        setSearchQuery(tag);
                        navigate(`/search?search=${encodeURIComponent(tag)}`);
                        setIsSearchOpen(false);
                        setSearchQuery('');
                      }}
                      className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-[#E85E27] hover:text-white transition-colors"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}