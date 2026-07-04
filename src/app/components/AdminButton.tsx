import { Link } from 'react-router';
import { Settings } from 'lucide-react';

export function AdminButton() {
  return (
    <Link
      to="/admin"
      className="fixed bottom-24 right-6 z-50 bg-[#232d37] text-white p-4 rounded-full shadow-lg hover:bg-[#E85E27] transition-all duration-300 hover:scale-110 group"
      title="Administration"
    >
      <Settings className="w-6 h-6" />
      <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-[#232d37] text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Admin
      </span>
    </Link>
  );
}
