import { motion } from 'motion/react';
import { useState, type ChangeEvent, type FormEvent } from 'react';
import { ArrowRight, Building2, Mail, MessageSquareText, Package, Phone, Send, Truck } from 'lucide-react';
import { toast } from 'sonner';
import { Breadcrumb } from '../components/Breadcrumb';
import { useLanguage } from '../context/LanguageContext';

interface QuoteFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  origin: string;
  destination: string;
  cargoType: string;
  message: string;
}

export default function QuoteRequest() {
  const { language } = useLanguage();
  const isFrench = language === 'fr';

  const [formData, setFormData] = useState<QuoteFormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'maritime',
    origin: '',
    destination: '',
    cargoType: '',
    message: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const existing = JSON.parse(localStorage.getItem('igs_quote_requests') || '[]');
    const submission = {
      id: Date.now(),
      ...formData,
      submittedAt: new Date().toISOString()
    };
    localStorage.setItem('igs_quote_requests', JSON.stringify([...existing, submission]));
    toast.success(isFrench ? 'Votre demande de devis a bien été enregistrée. Notre équipe vous contactera rapidement.' : 'Your quote request has been recorded. Our team will contact you shortly.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: 'maritime',
      origin: '',
      destination: '',
      cargoType: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen pt-20 pb-20 bg-[#f8fafc]">
      <section className="relative overflow-hidden bg-[#232d37] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(232,94,39,0.25),_transparent_45%)]" />
        <div className="container mx-auto px-4 lg:px-8 py-20 relative z-10">
          <Breadcrumb variant="dark" />
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Truck size={18} className="text-[#E85E27]" />
              {isFrench ? 'Demande de devis' : 'Quote request'}
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              {isFrench ? 'Obtenez une proposition adaptée à votre opération' : 'Get a tailored proposal for your operation'}
            </h1>
            <p className="text-lg text-gray-200 leading-relaxed">
              {isFrench
                ? 'Décrivez votre besoin, votre origine, votre destination et vos contraintes logistiques pour recevoir une réponse rapide et précise.'
                : 'Describe your need, origin, destination and logistics constraints to receive a fast and accurate response.'}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
            <h2 className="text-2xl font-bold text-[#232d37] mb-6">
              {isFrench ? 'Pourquoi demander un devis chez IGS ?' : 'Why request a quote from IGS?'}
            </h2>
            <div className="space-y-4 text-gray-600">
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full bg-[#E85E27]/10 flex items-center justify-center text-[#E85E27] flex-shrink-0"><Truck size={18} /></div>
                <div>
                  <h3 className="font-semibold text-[#232d37] mb-1">{isFrench ? 'Réponse rapide' : 'Fast response'}</h3>
                  <p>{isFrench ? 'Nous analysons votre demande rapidement pour vous proposer la meilleure option.' : 'We analyze your request quickly to propose the best option.'}</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full bg-[#E85E27]/10 flex items-center justify-center text-[#E85E27] flex-shrink-0"><Building2 size={18} /></div>
                <div>
                  <h3 className="font-semibold text-[#232d37] mb-1">{isFrench ? 'Approche sur mesure' : 'Tailored approach'}</h3>
                  <p>{isFrench ? 'Chaque dossier est étudié en fonction de votre volume, votre origine et votre destination.' : 'Each file is reviewed according to your volume, origin and destination.'}</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full bg-[#E85E27]/10 flex items-center justify-center text-[#E85E27] flex-shrink-0"><MessageSquareText size={18} /></div>
                <div>
                  <h3 className="font-semibold text-[#232d37] mb-1">{isFrench ? 'Support expert' : 'Expert support'}</h3>
                  <p>{isFrench ? 'Notre équipe vous accompagne de la préparation documentaire jusqu’à la livraison finale.' : 'Our team supports you from documentation preparation to final delivery.'}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-[#232d37] mb-2">{isFrench ? 'Nom complet *' : 'Full name *'}</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-[#f8fafc] focus:outline-none focus:ring-2 focus:ring-[#E85E27]" />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#232d37] mb-2">{isFrench ? 'Entreprise' : 'Company'}</label>
                <input type="text" name="company" value={formData.company} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-[#f8fafc] focus:outline-none focus:ring-2 focus:ring-[#E85E27]" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-[#232d37] mb-2">Email *</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 bg-[#f8fafc] focus:outline-none focus:ring-2 focus:ring-[#E85E27]" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#232d37] mb-2">{isFrench ? 'Téléphone' : 'Phone'}</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 bg-[#f8fafc] focus:outline-none focus:ring-2 focus:ring-[#E85E27]" />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-[#232d37] mb-2">{isFrench ? 'Service souhaité' : 'Service needed'}</label>
                <select name="service" value={formData.service} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-[#f8fafc] focus:outline-none focus:ring-2 focus:ring-[#E85E27]">
                  <option value="maritime">{isFrench ? 'Fret maritime' : 'Sea freight'}</option>
                  <option value="aerien">{isFrench ? 'Fret aérien' : 'Air freight'}</option>
                  <option value="routier">{isFrench ? 'Fret routier' : 'Road freight'}</option>
                  <option value="dedouanement">{isFrench ? 'Dédouanement' : 'Customs clearance'}</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#232d37] mb-2">{isFrench ? 'Type de marchandise' : 'Cargo type'}</label>
                <input type="text" name="cargoType" value={formData.cargoType} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-[#f8fafc] focus:outline-none focus:ring-2 focus:ring-[#E85E27]" placeholder={isFrench ? 'Ex. équipements industriels' : 'e.g. industrial equipment'} />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-[#232d37] mb-2">{isFrench ? 'Origine' : 'Origin'}</label>
                <input type="text" name="origin" value={formData.origin} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-[#f8fafc] focus:outline-none focus:ring-2 focus:ring-[#E85E27]" />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#232d37] mb-2">{isFrench ? 'Destination' : 'Destination'}</label>
                <input type="text" name="destination" value={formData.destination} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-[#f8fafc] focus:outline-none focus:ring-2 focus:ring-[#E85E27]" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-[#232d37] mb-2">{isFrench ? 'Précisions sur votre besoin' : 'Additional details'}</label>
              <textarea name="message" rows={5} value={formData.message} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-[#f8fafc] focus:outline-none focus:ring-2 focus:ring-[#E85E27]" />
            </div>
            <button type="submit" className="w-full bg-[#E85E27] hover:bg-[#d14d1a] text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center gap-2 group">
              {isFrench ? 'Envoyer ma demande' : 'Send my request'}
              <Send className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
          </motion.form>
        </div>
      </section>
    </div>
  );
}
