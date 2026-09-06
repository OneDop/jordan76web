import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SITE_URL = 'https://jordan2076.netlify.app';
const SITE_NAME = 'JORDAN 2076';

const ROUTE_SEO: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'JORDAN 2076 | Centennial Sci-Fi & Future Tech Summit in Amman',
    description:
      'Jordan 2076 — the premier international futuristic technology and cyber-civilization summit in Amman, Jordan. Hackathon, bootcamp, congress and future-tech tracks.',
  },
  '/about': {
    title: 'About | JORDAN 2076 Future Tech Summit',
    description:
      'About Jordan 2076 — vision, mission and the road to the centennial future-tech summit in Jordan.',
  },
  '/hackathon': {
    title: 'Hackathon | JORDAN 2076 Amman, Irbid & Petra',
    description:
      'Join the Jordan 2076 hackathon across Amman, Irbid and Petra. Build future-tech, AI and cyber-civilization prototypes.',
  },
  '/bootcamp': {
    title: 'Bootcamp | JORDAN 2076 Future Skills Training',
    description:
      'Jordan 2076 bootcamp — intensive training in AI, software engineering, emerging tech and leadership.',
  },
  '/congress': {
    title: 'Congress | JORDAN 2076 Future Tech Congress',
    description:
      'Jordan 2076 congress — global speakers, panels and future-tech dialogue in Amman, Jordan.',
  },
  '/partners': {
    title: 'Partners | JORDAN 2076 Summit Sponsors',
    description:
      'Partners and sponsors of Jordan 2076 — universities, industry and innovation leaders in Jordan.',
  },
  '/faq': {
    title: 'FAQ | JORDAN 2076 Summit Questions',
    description:
      'Frequently asked questions about Jordan 2076 — registration, venues, hackathon, bootcamp and congress.',
  },
  '/contact': {
    title: 'Contact | JORDAN 2076 Summit Team',
    description: 'Contact the Jordan 2076 team for registration, partnerships and press inquiries.',
  },
};

function setMeta(selector: string, attr: string, value: string) {
  let el = document.head.querySelector(selector) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    const [key, val] = selector.replace(/[[\]"]/g, '').split('=');
    el.setAttribute(key === 'meta' ? 'name' : key, val);
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
}

export function useSeo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const seo = ROUTE_SEO[pathname] ?? ROUTE_SEO['/'];
    document.title = seo.title;
    setMeta('meta[name="description"]', 'content', seo.description);
    setMeta('meta[property="og:title"]', 'content', seo.title);
    setMeta('meta[property="og:description"]', 'content', seo.description);
    setMeta('meta[property="og:url"]', 'content', `${SITE_URL}${pathname}`);
    setMeta('meta[name="twitter:title"]', 'content', seo.title);
    setMeta('meta[name="twitter:description"]', 'content', seo.description);

    let canonical = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `${SITE_URL}${pathname}`);
  }, [pathname]);
}

export { SITE_URL, SITE_NAME };
