export interface SiteSettings {
  companyName: string;
  tagline: string;
  phone: string;
  email: string;
  address: string;
  whatsapp: string;
  footerText: string;
  adminName: string;
  adminEmail: string;
}

export interface BlogPostRecord {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  featured: boolean;
  content: string;
  status: 'published' | 'draft';
  publishedAt: string;
  views: number;
}

export interface SiteContentState {
  settings: SiteSettings;
  posts: BlogPostRecord[];
}

export const SITE_CONTENT_EVENT = 'igs-site-content-updated';
const STORAGE_KEY = 'igs_site_content_v1';

export const BLOG_POST_CATEGORIES = [
  'Transit & Douane',
  'Fret Maritime',
  'Fret Aérien',
  'Logistique',
  'Réglementation',
  'Actualités'
] as const;

export function getRelativePublishLabel(publishedAt?: string, fallbackDate?: string): string {
  const source = publishedAt || fallbackDate || new Date().toISOString();
  const publishedTime = new Date(source).getTime();
  const now = Date.now();
  const diffMs = Math.max(0, now - publishedTime);
  const minutes = Math.floor(diffMs / (1000 * 60));

  if (minutes < 60) {
    return `${Math.max(0, minutes)}min`;
  }

  const hours = Math.floor(minutes / 60);
  if (hours < 24) {
    return `${hours}h`;
  }

  const days = Math.floor(hours / 24);
  if (days < 30) {
    return `${days}j`;
  }

  const publishedDate = new Date(publishedTime);
  const currentDate = new Date(now);
  const monthsDifference = (currentDate.getFullYear() - publishedDate.getFullYear()) * 12
    + (currentDate.getMonth() - publishedDate.getMonth());

  if (monthsDifference >= 12) {
    const years = Math.max(1, Math.floor(monthsDifference / 12));
    return `${years} an${years > 1 ? 's' : ''}`;
  }

  const months = Math.max(1, monthsDifference);
  return `${months} mois`;
}

export const defaultSiteSettings: SiteSettings = {
  companyName: 'IGS - Ibrahima Golden Services',
  tagline: 'Votre partenaire stratégique pour le transit, le dédouanement, le fret et la logistique internationale en Guinée.',
  phone: '+224 612 004 903',
  email: 'contact@igservices.com',
  address: 'Almamya, Kaloum, Rue de la gare, Immeuble Azur, Conakry, République de Guinée',
  whatsapp: '+224 612 004 903',
  footerText: 'Votre partenaire stratégique pour un commerce international fluide.',
  adminName: 'Administrateur IGS',
  adminEmail: 'admin@igs-guinee.com'
};

export const defaultBlogPosts: BlogPostRecord[] = [
  {
    id: 1,
    slug: 'nouvelles-procedures-douanieres-guinee-2026',
    title: 'Les nouvelles procédures douanières en Guinée pour 2026',
    excerpt: 'Découvrez les dernières modifications réglementaires qui impactent vos opérations d\'import-export et comment IGS vous accompagne dans cette transition.',
    category: 'Transit & Douane',
    author: 'Mamadou Bah',
    date: '12 Février 2026',
    readTime: '5 min',
    image: 'https://images.unsplash.com/photo-1763225271111-dd9363584249?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b21zJTIwZG9jdW1lbnRzJTIwcGFwZXJ3b3JrfGVufDF8fHx8MTc3MTIxMTQzNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    featured: true,
    content: '<p>Les nouveautés douanières de 2026... </p>',
    status: 'published',
    publishedAt: '2026-02-12T10:00:00.000Z',
    views: 124
  },
  {
    id: 2,
    slug: 'optimiser-couts-fret-maritime-strategies',
    title: 'Optimiser vos coûts de fret maritime : 7 stratégies essentielles',
    excerpt: 'Dans un contexte de hausse des tarifs maritimes, découvrez comment réduire vos dépenses tout en maintenant la qualité de service.',
    category: 'Fret Maritime',
    author: 'Aissatou Sylla',
    date: '8 Février 2026',
    readTime: '7 min',
    image: 'https://images.unsplash.com/photo-1735047974891-df59713d8192?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxjYXJnbyUyMHNoaXAlMjBjb250YWluZXIlMjBwb3J0fGVufDF8fHx8MTc3MTIxMTQzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    featured: true,
    content: '<p>Le transport maritime représente ...</p>',
    status: 'published',
    publishedAt: '2026-02-08T14:30:00.000Z',
    views: 89
  }
];

export const defaultSiteContent: SiteContentState = {
  settings: defaultSiteSettings,
  posts: defaultBlogPosts
};

export function loadSiteContent(): SiteContentState {
  if (typeof window === 'undefined') {
    return defaultSiteContent;
  }

  try {
    const storedValue = window.localStorage.getItem(STORAGE_KEY);
    if (!storedValue) {
      return defaultSiteContent;
    }

    const parsed = JSON.parse(storedValue) as Partial<SiteContentState>;
    const normalizedPosts: BlogPostRecord[] = Array.isArray(parsed.posts)
      ? parsed.posts.map((post: Partial<BlogPostRecord> | undefined, index): BlogPostRecord => ({
          id: typeof post?.id === 'number' ? post.id : Date.now() + index,
          slug: post?.slug || '',
          title: post?.title || '',
          excerpt: post?.excerpt || '',
          category: post?.category || 'Actualités',
          author: post?.author || 'IGS',
          date: post?.date || new Date().toLocaleDateString('fr-FR'),
          readTime: post?.readTime || '5 min',
          image: post?.image || 'https://images.unsplash.com/photo-1504307651254-35680f356dfd',
          featured: Boolean(post?.featured),
          content: post?.content || '<p>Contenu de l’article...</p>',
          status: post?.status === 'draft' ? 'draft' : 'published',
          publishedAt: post?.publishedAt || new Date().toISOString(),
          views: typeof post?.views === 'number' ? post.views : 0
        }))
      : defaultBlogPosts;

    return {
      settings: {
        ...defaultSiteSettings,
        ...(parsed.settings || {})
      },
      posts: normalizedPosts.length > 0 ? normalizedPosts : defaultBlogPosts
    };
  } catch {
    return defaultSiteContent;
  }
}

export function saveSiteContent(content: SiteContentState): SiteContentState {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(content));
    window.dispatchEvent(new Event(SITE_CONTENT_EVENT));
  }

  return content;
}

export function subscribeSiteContent(listener: () => void): () => void {
  if (typeof window === 'undefined') {
    return () => undefined;
  }

  window.addEventListener(SITE_CONTENT_EVENT, listener);
  window.addEventListener('storage', (event) => {
    if (event.key === STORAGE_KEY) {
      listener();
    }
  });

  return () => {
    window.removeEventListener(SITE_CONTENT_EVENT, listener);
  };
}

export function createEmptyBlogPost(): BlogPostRecord {
  const now = new Date();
  return {
    id: Date.now(),
    slug: '',
    title: '',
    excerpt: '',
    category: 'Actualités',
    author: 'IGS',
    date: now.toLocaleDateString('fr-FR'),
    readTime: '5 min',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd',
    featured: false,
    content: '<p>Contenu de l’article...</p>',
    status: 'published',
    publishedAt: now.toISOString(),
    views: 0
  };
}
