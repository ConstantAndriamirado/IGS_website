import { motion } from 'motion/react';
import { useState } from 'react';
import { PackageSearch, Upload, BarChart3, Bell, Rocket, Mail, ArrowRight, Clock } from 'lucide-react';
import { toast } from 'sonner';
import { Breadcrumb } from '../components/Breadcrumb';

export default function PortailClient() {
  const [email, setEmail] = useState('');

  const handleNotifyMe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success('Merci ! Nous vous tiendrons informé du lancement du portail client.');
      setEmail('');
    }
  };

  const features = [
    {
      icon: PackageSearch,
      title: 'Suivi en Temps Réel',
      description: 'Suivez vos expéditions où qu\'elles soient avec notre système de tracking avancé'
    },
    {
      icon: Upload,
      title: 'Gestion Documentaire',
      description: 'Uploadez et gérez tous vos documents douaniers en toute sécurité'
    },
    {
      icon: BarChart3,
      title: 'Tableaux de Bord',
      description: 'Visualisez vos statistiques et historiques d\'expédition en un coup d\'œil'
    },
    {
      icon: Bell,
      title: 'Notifications',
      description: 'Recevez des alertes instantanées sur l\'état de vos dossiers'
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-20 bg-gradient-to-br from-[#F3F3F3] via-white to-[#FFF5F0]">
      <div className="container mx-auto px-4 lg:px-8 pt-8">
        <Breadcrumb />
        
        {/* Hero Section - Coming Soon */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center pt-12 pb-8"
        >
          {/* Icon Animation */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
            className="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-[#E85E27] to-[#ff7a47] rounded-full flex items-center justify-center shadow-xl"
          >
            <Rocket size={48} className="text-white" />
          </motion.div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-flex items-center gap-2 bg-[#E85E27]/10 text-[#E85E27] px-4 py-2 rounded-full mb-6"
          >
            <Clock size={18} />
            <span className="font-semibold text-sm">Bientôt Disponible</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-5xl lg:text-6xl font-bold text-[#232d37] mb-6"
          >
            Portail Client <span className="text-[#E85E27]">IGS</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Nous travaillons actuellement sur votre nouvel espace client digital. 
            Une plateforme moderne pour gérer tous vos dossiers de transit et logistique en toute simplicité.
          </motion.p>

          {/* Notification Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="max-w-md mx-auto"
          >
            <form onSubmit={handleNotifyMe} className="flex gap-3">
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full pl-12 pr-4 py-4 bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E85E27] focus:border-transparent transition-all shadow-lg"
                  placeholder="votre@email.com"
                />
              </div>
              <button
                type="submit"
                className="bg-[#E85E27] hover:bg-[#d14d1a] text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2 group"
              >
                Me notifier
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
            </form>
            <p className="text-sm text-gray-500 mt-3">
              Soyez le premier informé du lancement officiel
            </p>
          </motion.div>
        </motion.div>

        {/* Features Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="max-w-5xl mx-auto mt-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#232d37] mb-4">
              Ce qui vous attend
            </h2>
            <p className="text-gray-600 text-lg">
              Découvrez les fonctionnalités qui révolutionneront votre gestion logistique
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100 group hover:border-[#E85E27]/30"
              >
                <div className="flex gap-4 items-start">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#E85E27]/10 to-[#E85E27]/5 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
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

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="max-w-4xl mx-auto mt-20"
        >
          <div className="bg-gradient-to-r from-[#232d37] to-[#2d3947] rounded-2xl p-8 lg:p-12 shadow-2xl text-center text-white relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#E85E27]/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#E85E27]/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4">
                Déjà client IGS ?
              </h2>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Notre équipe vous contactera dès le lancement du portail pour activer votre compte et vous accompagner dans vos premiers pas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="/contact"
                  className="bg-[#E85E27] hover:bg-[#d14d1a] text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2 group"
                >
                  Nous contacter
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </a>
                <a
                  href="/services"
                  className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold transition-all border border-white/20 inline-flex items-center gap-2"
                >
                  Découvrir nos services
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="max-w-3xl mx-auto mt-16 text-center"
        >
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-gray-200">
            <p className="text-gray-600">
              <strong className="text-[#232d37]">Une question ?</strong>{' '}
              Notre équipe est disponible pour vous renseigner sur le portail client et toutes nos solutions digitales.{' '}
              <a href="/contact" className="text-[#E85E27] hover:text-[#d14d1a] font-semibold transition-colors">
                Contactez-nous
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
