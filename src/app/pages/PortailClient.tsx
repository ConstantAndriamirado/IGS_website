import { motion } from 'motion/react';
import { useEffect } from 'react';
import { ArrowRight, BarChart3, Bell, Clock, PackageSearch, Rocket, Upload } from 'lucide-react';
import { Breadcrumb } from '../components/Breadcrumb';
import { useLanguage } from '../context/LanguageContext';

export default function PortailClient() {
  const { language } = useLanguage();
  const isFrench = language === 'fr';
  const portalUrl = 'https://portail.igs-guinee.com';

  useEffect(() => {
    window.location.assign(portalUrl);
  }, []);

  const features = [
    {
      icon: PackageSearch,
      title: isFrench ? 'Suivi en Temps Réel' : 'Real-Time Tracking',
      description: isFrench ? 'Suivez vos expéditions où qu’elles soient avec notre système de tracking avancé.' : 'Track your shipments anywhere with our advanced tracking system.'
    },
    {
      icon: Upload,
      title: isFrench ? 'Gestion Documentaire' : 'Document Management',
      description: isFrench ? 'Uploadez et gérez tous vos documents douaniers en toute sécurité.' : 'Upload and manage all your customs documents securely.'
    },
    {
      icon: BarChart3,
      title: isFrench ? 'Tableaux de Bord' : 'Dashboards',
      description: isFrench ? 'Visualisez vos statistiques et historiques d’expédition en un coup d’œil.' : 'View your shipment statistics and history at a glance.'
    },
    {
      icon: Bell,
      title: isFrench ? 'Notifications' : 'Notifications',
      description: isFrench ? 'Recevez des alertes instantanées sur l’état de vos dossiers.' : 'Receive instant alerts about the status of your files.'
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-20 bg-gradient-to-br from-[#F3F3F3] via-white to-[#FFF5F0]">
      <div className="container mx-auto px-4 lg:px-8 pt-8">
        <Breadcrumb />
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-4xl mx-auto text-center pt-12 pb-8">
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.6, delay: 0.1, type: 'spring' }} className="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-[#E85E27] to-[#ff7a47] rounded-full flex items-center justify-center shadow-xl">
            <Rocket size={48} className="text-white" />
          </motion.div>
          <div className="inline-flex items-center gap-2 bg-[#E85E27]/10 text-[#E85E27] px-4 py-2 rounded-full mb-6">
            <Clock size={18} />
            <span className="font-semibold text-sm">{isFrench ? 'Redirection vers le portail client' : 'Redirecting to the client portal'}</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-[#232d37] mb-6">{isFrench ? 'Portail Client' : 'Client Portal'} <span className="text-[#E85E27]">IGS</span></h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            {isFrench ? 'Vous allez être redirigé vers votre espace sécurisé IGS. Si la redirection ne se fait pas automatiquement, utilisez le lien ci-dessous.' : 'You will be redirected to your secure IGS space. If the redirect does not happen automatically, use the link below.'}
          </p>
          <a href={portalUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-[#E85E27] hover:bg-[#d14d1a] text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl">
            {isFrench ? 'Accéder au portail' : 'Access the portal'}
            <ArrowRight size={20} />
          </a>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="max-w-5xl mx-auto mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div key={feature.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 + index * 0.08 }} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="flex gap-4 items-start">
                  <div className="w-14 h-14 bg-[#E85E27]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <feature.icon size={28} className="text-[#E85E27]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#232d37] mb-2 text-lg">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
