import { Link } from 'react-router';
import { ArrowRight, LucideIcon } from 'lucide-react';
import { motion } from 'motion/react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link?: string;
  image?: string;
}

export function ServiceCard({ icon: Icon, title, description, link, image }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
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
      <div className="p-6">
        <div className="w-14 h-14 bg-[#E85E27]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#E85E27] transition-colors">
          <Icon size={28} className="text-[#E85E27] group-hover:text-white transition-colors" />
        </div>
        <h3 className="text-xl font-semibold mb-3 text-[#232d37]">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
        {link && (
          <Link 
            to={link}
            className="inline-flex items-center gap-2 text-[#E85E27] font-medium hover:gap-3 transition-all group/link"
          >
            En savoir plus
            <ArrowRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
          </Link>
        )}
      </div>
    </motion.div>
  );
}