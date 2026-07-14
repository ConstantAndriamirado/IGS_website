import { Link } from 'react-router';
import { ArrowRight, LucideIcon } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link?: string;
  image?: string;
}

export function ServiceCard({ icon: Icon, title, description, link, image }: ServiceCardProps) {
  const { language } = useLanguage();
  const isFrench = language === 'fr';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group h-full bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
    >
      {image && (
        <div className="h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>
      )}
      <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
        <div className="w-12 h-12 rounded-xl bg-[#E85E27]/10 flex items-center justify-center mb-4 text-[#E85E27]">
          <Icon size={22} />
        </div>
        <h3 className="text-xl font-semibold mb-3 text-[#232d37]">{title}</h3>
        <p className="text-gray-600 mb-5 line-clamp-3 leading-relaxed">{description}</p>
        {link && (
          <Link 
            to={link}
            className="mt-auto inline-flex items-center gap-2 text-[#E85E27] font-medium hover:gap-3 transition-all group/link"
          >
            {isFrench ? 'En savoir plus' : 'Learn more'}
            <ArrowRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
          </Link>
        )}
      </div>
    </motion.div>
  );
}