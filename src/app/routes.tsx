import { createBrowserRouter, Navigate } from 'react-router';
import { RootLayout } from './components/RootLayout';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';
import { WhatsAppButton } from './components/WhatsAppButton';
import Home from './pages/Home';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import About from './pages/About';
import Projects from './pages/Projects';
import QuoteRequest from './pages/QuoteRequest';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Search from './pages/Search';
import Contact from './pages/Contact';
import PortailClient from './pages/PortailClient';
import Partners from './pages/Partners';
import Admin from './pages/Admin';
import { MentionsLegales } from './pages/MentionsLegales';
import { Confidentialite } from './pages/Confidentialite';
import { CGU } from './pages/CGU';
import NotFound from './pages/NotFound';

// Layout component for pages with Header and Footer
function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <BackToTop />
      <WhatsAppButton />
    </>
  );
}

function AdminRoute() {
  const location = window.location;
  const isAllowed = location.search.includes('access=igs-admin') || window.localStorage.getItem('igs_admin_access') === 'true';

  return isAllowed ? <Admin /> : <Navigate to="/" replace />;
}

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <MainLayout><Home /></MainLayout>,
      },
      {
        path: "/services",
        element: <MainLayout><Services /></MainLayout>,
      },
      {
        path: "/services/:serviceId",
        element: <MainLayout><ServiceDetail /></MainLayout>,
      },
      {
        path: "/about",
        element: <MainLayout><About /></MainLayout>,
      },
      {
        path: "/blog",
        element: <MainLayout><Blog /></MainLayout>,
      },
      {
        path: "/blog/:slug",
        element: <MainLayout><BlogPost /></MainLayout>,
      },
      {
        path: "/search",
        element: <MainLayout><Search /></MainLayout>,
      },
      {
        path: "/projects",
        element: <MainLayout><Projects /></MainLayout>,
      },
      {
        path: "/contact",
        element: <MainLayout><Contact /></MainLayout>,
      },
      {
        path: "/quote-request",
        element: <MainLayout><QuoteRequest /></MainLayout>,
      },
      {
        path: "/partners",
        element: <MainLayout><Partners /></MainLayout>,
      },
      {
        path: "/portail-client",
        element: <MainLayout><PortailClient /></MainLayout>,
      },
      {
        path: "/mentions-legales",
        element: <MainLayout><MentionsLegales /></MainLayout>,
      },
      {
        path: "/confidentialite",
        element: <MainLayout><Confidentialite /></MainLayout>,
      },
      {
        path: "/cgu",
        element: <MainLayout><CGU /></MainLayout>,
      },
      {
        path: "/admin",
        element: <AdminRoute />,
      },
      {
        path: "*",
        element: <MainLayout><NotFound /></MainLayout>,
      },
    ],
  },
]);