import { motion } from 'motion/react';
import { Link } from 'react-router';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F3F3F3] px-4 pt-32 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl"
      >
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-[#E85E27] mb-4">404</h1>
          <h2 className="text-3xl font-bold text-[#232d37] mb-4">
            Page non trouvée
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 bg-[#E85E27] hover:bg-[#d14d1a] text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            <Home size={20} />
            Retour à l'accueil
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-[#232d37] px-6 py-3 rounded-lg font-semibold transition-colors border border-gray-200"
          >
            <ArrowLeft size={20} />
            Page précédente
          </button>
        </div>
      </motion.div>
    </div>
  );
}