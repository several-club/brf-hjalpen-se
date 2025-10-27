import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './components/pages/HomePage';
import { GuidesPage } from './components/pages/GuidesPage';
import { MallarPage } from './components/pages/MallarPage';
import { BlogPage } from './components/pages/BlogPage';
import { FAQPage } from './components/pages/FAQPage';
import { NotFoundPage } from './components/pages/NotFoundPage';
import SEO from './components/SEO';

export default function App() {
  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'BRF Guide',
    url: 'https://www.brf-guide.se/',
  };
  const orgJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'BRF Guide',
    url: 'https://www.brf-guide.se/',
    logo: 'https://www.brf-guide.se/favicon.svg'
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEO jsonLd={[websiteJsonLd, orgJsonLd]} />
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-6 focus:py-3 focus:bg-[#C6B080] focus:text-white focus:rounded-lg focus:shadow-lg"
        style={{ fontFamily: 'Futura, sans-serif', fontSize: '16px', fontWeight: 600, letterSpacing: '1px' }}
      >
        HOPPA TILL INNEHÅLL
      </a>
      <Header />
      <main id="main-content" className="flex-1" role="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/guider" element={<GuidesPage />} />
          <Route path="/mallar" element={<MallarPage />} />
          <Route path="/blogg" element={<BlogPage />} />
          <Route path="/blogg/:slug" element={<BlogPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
