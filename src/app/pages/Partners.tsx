import { motion } from 'motion/react';
import { Briefcase, Globe, Shield, Users } from 'lucide-react';
import { Breadcrumb } from '../components/Breadcrumb';
import { useLanguage } from '../context/LanguageContext';

export default function Partners() {
  const { language } = useLanguage();
  const isFrench = language === 'fr';

  const partners = [
    { name: 'Oceanic Shipping Ltd.', type: isFrench ? 'Transport maritime' : 'Maritime transport' },
    { name: 'Airlink Cargo', type: isFrench ? 'Transport aérien' : 'Air transport' },
    { name: 'TransRoute Logistics', type: isFrench ? 'Transport routier' : 'Road transport' },
    { name: 'Customs Net', type: isFrench ? 'Services douaniers' : 'Customs services' },
  ];

  return (
    <div className="min-h-screen pt-20 pb-20 bg-white">
      <section className="relative mb-20 overflow-hidden bg-gradient-to-br from-[#232d37] to-[#1a2129] text-white py-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJ0bmVyc2hpcCUyMGxvZ2lzdGljfGVufDB8fHx8MTY5NjA1MzI0Mw&ixlib=rb-4.0.3&q=80&w=1080"
            alt={isFrench ? 'Partenariat et logistique' : 'Partnership and logistics'}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#232d37]/80 to-[#232d37]/60" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl text-white"
          >
            <Breadcrumb variant="dark" />
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              {isFrench ? 'Nos partenaires stratégiques' : 'Our strategic partners'}
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              {isFrench
                ? 'IGS travaille avec un réseau de partenaires fiables pour garantir des solutions de transport, de dédouanement et de logistique efficaces.'
                : 'IGS works with a reliable network of partners to ensure efficient transport, customs clearance and logistics solutions.'}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="container mx-auto px-4 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-[#F3F3F3] p-10 shadow-lg"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-3xl bg-[#E85E27]/10 flex items-center justify-center">
                <Users size={28} className="text-[#E85E27]" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-[#E85E27] mb-2">
                  {isFrench ? 'Réseau' : 'Network'}
                </p>
                <h2 className="text-3xl font-bold text-[#232d37]">
                  {isFrench ? 'Partenaires locaux et internationaux' : 'Local and international partners'}
                </h2>
              </div>
            </div>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                {isFrench
                  ? 'Notre réseau de partenaires s’appuie sur des acteurs expérimentés du fret maritime, aérien, routier et des services douaniers. Ensemble, nous sécurisons vos opérations et garantissons une livraison maîtrisée.'
                  : 'Our partner network is built with experienced actors in sea, air, and road freight as well as customs services. Together, we secure your operations and ensure controlled delivery.'}
              </p>
              <p>
                {isFrench
                  ? 'Nos partenaires locaux offrent une présence opérationnelle renforcée sur le terrain, tandis que nos partenaires internationaux ouvrent des corridors fiables vers les marchés d’Europe, d’Afrique et du Moyen-Orient. Cette complémentarité nous permet d’offrir des solutions agiles, réactives et parfaitement coordonnées.'
                  : 'Our local partners provide strong operational support on the ground, while our international partners open reliable corridors to Europe, Africa and the Middle East. This complementarity allows us to deliver agile, responsive and fully coordinated solutions.'}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid gap-6"
          >
            {partners.map((partner) => (
              <div key={partner.name} className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-[#232d37]">{partner.name}</h3>
                    <p className="text-sm text-gray-500">{partner.type}</p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-[#E85E27]/10 flex items-center justify-center">
                    <Briefcase size={22} className="text-[#E85E27]" />
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {isFrench
                    ? 'Un partenaire fiable pour renforcer nos services et garantir la continuité de votre chaîne logistique.'
                    : 'A trusted partner to strengthen our services and ensure continuity in your logistics chain.'}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
