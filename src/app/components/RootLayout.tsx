import { Outlet, useLocation } from 'react-router';
import { useEffect } from 'react';
import { Toaster } from 'sonner';

export function RootLayout() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Update page title based on route
    const titles: Record<string, string> = {
      '/': 'IGS - Transit & Logistique en Guinée',
      '/services': 'Nos Services - IGS',
      '/about': 'À propos - IGS',
      '/partners': 'Nos Partenaires - IGS',
      '/blog': 'Blog - IGS',
      '/search': 'Recherche - IGS',
      '/contact': 'Contact - IGS',
      '/portail-client': 'Portail Client - IGS',
      '/admin': 'Admin - IGS',
      '/mentions-legales': 'Mentions Légales - IGS',
      '/confidentialite': 'Politique de Confidentialité - IGS',
      '/cgu': 'Conditions Générales d\'Utilisation - IGS'
    };
    
    // Handle dynamic service detail pages
    if (pathname.startsWith('/services/')) {
      document.title = 'Service - IGS';
    } else if (pathname.startsWith('/blog/')) {
      document.title = 'Article - IGS';
    } else {
      document.title = titles[pathname] || 'IGS - Ibrahima Golden Services';
    }

    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Outlet />
      <Toaster
        position="top-right"
        richColors
        expand
        closeButton
        toastOptions={{
          duration: 5000,
          className: 'min-w-[280px] rounded-xl shadow-xl border border-gray-200'
        }}
      />
    </div>
  );
}
