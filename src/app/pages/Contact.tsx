import { motion } from 'motion/react';
import { useState, type ChangeEvent, type FormEvent } from 'react';
import { MapPin, Phone, Mail, Clock, Send, ChevronDown } from 'lucide-react';
import { toast } from 'sonner';
import { Breadcrumb } from '../components/Breadcrumb';
import { useLanguage } from '../context/LanguageContext';

export default function Contact() {
  const { language } = useLanguage();
  const isFrench = language === 'fr';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    phoneCountryCode: '+224',
    service: '',
    message: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const existing = JSON.parse(localStorage.getItem('igs_contact_messages') || '[]');
    const payload = {
      id: Date.now(),
      ...formData,
      submittedAt: new Date().toISOString()
    };
    localStorage.setItem('igs_contact_messages', JSON.stringify([...existing, payload]));
    toast.success(isFrench ? 'Message envoyé avec succès! Nous vous répondrons dans les plus brefs délais.' : 'Message sent successfully! We will get back to you as soon as possible.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      phoneCountryCode: '+224',
      service: '',
      message: ''
    });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const countryCodes = [
    { code: '+224', country: 'GN', name: 'Guinée', flag: '🇬🇳' },
    { code: '+225', country: 'CI', name: 'Côte d\'Ivoire', flag: '🇨🇮' },
    { code: '+221', country: 'SN', name: 'Sénégal', flag: '🇸🇳' },
    { code: '+223', country: 'ML', name: 'Mali', flag: '🇲🇱' },
    { code: '+226', country: 'BF', name: 'Burkina Faso', flag: '🇧🇫' },
    { code: '+227', country: 'NE', name: 'Niger', flag: '🇳🇪' },
    { code: '+228', country: 'TG', name: 'Togo', flag: '🇹🇬' },
    { code: '+229', country: 'BJ', name: 'Bénin', flag: '🇧🇯' },
    { code: '+231', country: 'LR', name: 'Libéria', flag: '🇱🇷' },
    { code: '+232', country: 'SL', name: 'Sierra Leone', flag: '🇸🇱' },
    { code: '+233', country: 'GH', name: 'Ghana', flag: '🇬🇭' },
    { code: '+234', country: 'NG', name: 'Nigeria', flag: '🇳🇬' },
    { code: '+237', country: 'CM', name: 'Cameroun', flag: '🇨🇲' },
    { code: '+212', country: 'MA', name: 'Maroc', flag: '🇲🇦' },
    { code: '+213', country: 'DZ', name: 'Algérie', flag: '🇩🇿' },
    { code: '+216', country: 'TN', name: 'Tunisie', flag: '🇹🇳' },
    { code: '+33', country: 'FR', name: 'France', flag: '🇫🇷' },
    { code: '+32', country: 'BE', name: 'Belgique', flag: '🇧🇪' },
    { code: '+41', country: 'CH', name: 'Suisse', flag: '🇨🇭' },
    { code: '+1', country: 'US', name: 'États-Unis/Canada', flag: '🇺🇸' },
    { code: '+44', country: 'GB', name: 'Royaume-Uni', flag: '🇬🇧' },
    { code: '+86', country: 'CN', name: 'Chine', flag: '🇨🇳' },
    { code: '+971', country: 'AE', name: 'EAU', flag: '🇦🇪' },
  ];

  const contactInfo = [
    {
      icon: MapPin,
      title: isFrench ? 'Adresse' : 'Address',
      content: isFrench
        ? 'Almamya, Kaloum, Rue de la Gare\nImmeuble Azur, Conakry\nRépublique de Guinée'
        : 'Almamya, Kaloum, Rue de la Gare\nAzur Building, Conakry\nRepublic of Guinea',
      link: null
    },
    {
      icon: Phone,
      title: isFrench ? 'Téléphone' : 'Phone',
      content: '+224 612 004 903\n+224 612 004 900',
      link: 'tel:+224612004903'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'contact@igservices.com\ninfo@igservices.com',
      link: 'mailto:contact@igservices.com'
    },
    {
      icon: Clock,
      title: isFrench ? 'Heures d\'ouverture' : 'Opening hours',
      content: isFrench ? 'Lun - Ven : 08h30 - 17h30' : 'Mon - Fri : 08:30 - 17:30',
      link: null
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-20">
      {/* Hero Banner */}
      <section className="relative mb-12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1758519290802-516e99b4688a"
            alt="Contact IGS"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#232d37]/80 to-[#232d37]/60" />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 py-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl text-white"
          >
            <Breadcrumb variant="dark" />
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              {isFrench ? 'Contactez' : 'Contact'} <span className="text-[#E85E27]">IGS</span>
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              {isFrench
                ? 'Notre équipe d\'experts est à votre écoute pour analyser vos besoins, préparer votre demande et vous accompagner dans vos projets de transit, de dédouanement et de logistique.'
                : 'Our team of experts is at your disposal to analyze your needs, prepare your request and support your transit, customs and logistics projects.'}
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#E85E27]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <info.icon size={24} className="text-[#E85E27]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-[#232d37] mb-2">{info.title}</h3>
                    {info.link ? (
                      <a 
                        href={info.link}
                        className="text-gray-600 hover:text-[#E85E27] transition-colors whitespace-pre-line"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-gray-600 whitespace-pre-line">{info.content}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <h2 className="text-2xl font-bold text-[#232d37] mb-6">
                {isFrench ? 'Envoyez-nous un message' : 'Send us a message'}
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#232d37] mb-2">
                      {isFrench ? 'Nom complet *' : 'Full name *'}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#F3F3F3] border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E85E27] focus:border-transparent transition-all"
                      placeholder={isFrench ? 'Votre nom' : 'Your name'}
                      autoComplete="name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#232d37] mb-2">
                      {isFrench ? 'Email *' : 'Email *'}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#F3F3F3] border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E85E27] focus:border-transparent transition-all"
                      placeholder={isFrench ? 'votre@email.com' : 'your@email.com'}
                      autoComplete="email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-[#232d37] mb-2">
                      {isFrench ? 'Téléphone *' : 'Phone *'}
                    </label>
                    <div className="flex gap-2">
                      <div className="relative w-44">
                        <select
                          id="phoneCountryCode"
                          name="phoneCountryCode"
                          value={formData.phoneCountryCode}
                          onChange={handleChange}
                          className="w-full px-3 py-3 pr-8 bg-[#F3F3F3] border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E85E27] focus:border-transparent transition-all appearance-none cursor-pointer text-sm"
                        aria-label={isFrench ? 'Indicatif téléphonique' : 'Phone country code'}
                        >
                          {countryCodes.map((item) => (
                            <option key={item.code} value={item.code}>
                              {item.flag} {item.code}
                            </option>
                          ))}
                        </select>
                        <ChevronDown 
                          size={16} 
                          className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                        />
                      </div>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="flex-1 px-4 py-3 bg-[#F3F3F3] border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E85E27] focus:border-transparent transition-all"
                        placeholder={isFrench ? 'XXX XXX XXX' : 'XXX XXX XXX'}
                        autoComplete="tel"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-[#232d37] mb-2">
                      {isFrench ? 'Service concerné *' : 'Service needed *'}
                    </label>
                    <div className="relative">
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 pr-10 bg-[#F3F3F3] border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E85E27] focus:border-transparent transition-all appearance-none cursor-pointer"
                        aria-label={isFrench ? 'Service concerné' : 'Service needed'}
                      >
                        <option value="">{isFrench ? 'Sélectionnez un service' : 'Select a service'}</option>
                        <option value="maritime">{isFrench ? 'Transit Maritime' : 'Maritime Transit'}</option>
                        <option value="aerien">{isFrench ? 'Transit Aérien' : 'Air Transit'}</option>
                        <option value="routier">{isFrench ? 'Transport Routier' : 'Road Transport'}</option>
                        <option value="dedouanement">{isFrench ? 'Dédouanement Import & Export' : 'Import & Export Customs Clearance'}</option>
                        <option value="logistique">{isFrench ? 'Logistique & Entreposage' : 'Logistics & Warehousing'}</option>
                        <option value="conseil">{isFrench ? 'Conseil en Commerce International' : 'International Trade Advisory'}</option>
                        <option value="autre">{isFrench ? 'Autre demande' : 'Other request'}</option>
                      </select>
                      <ChevronDown 
                        size={20} 
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#232d37] mb-2">
                    {isFrench ? 'Message *' : 'Message *'}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-[#F3F3F3] border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E85E27] focus:border-transparent transition-all resize-none"
                    placeholder={isFrench ? 'Décrivez votre besoin...' : 'Describe your needs...'}
                    autoComplete="off"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#E85E27] hover:bg-[#d14d1a] text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center gap-2 group"
                >
                  {isFrench ? 'Envoyer le message' : 'Send message'}
                  <Send className="group-hover:translate-x-1 transition-transform" size={20} />
                </button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl shadow-lg overflow-hidden"
        >
          <div className="aspect-video w-full bg-gray-200 relative">
            {/* Google Maps Embed - À remplacer par une vraie API key */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31542.548574366657!2d-13.70622!3d9.51667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xf1cd0d9a5d52cc9%3A0x4c0d5b5e5f5e5f5e!2sConakry%2C%20Guinea!5e0!3m2!1sen!2s!4v1234567890"
              width="100%"
              height="100%"
              className="border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="IGS Location"
            />
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 bg-[#232d37] rounded-2xl p-8 lg:p-12 text-center text-white"
        >
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            {isFrench ? 'Besoin d\'un Devis Rapide ?' : 'Need a quick quote?'}
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            {isFrench
              ? 'Appelez-nous directement pour obtenir une réponse immédiate à vos questions ou un devis personnalisé.'
              : 'Call us directly for an immediate response to your questions or a personalized quote.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="tel:+224612004903"
              className="inline-flex items-center gap-2 bg-[#E85E27] hover:bg-[#d14d1a] text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              <Phone size={20} />
              +224 612 004 903
            </a>
            <a 
              href="mailto:contact@igservices.com"
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-[#232d37] px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              <Mail size={20} />
              contact@igservices.com
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
