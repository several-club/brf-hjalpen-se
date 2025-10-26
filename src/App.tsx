import { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './components/pages/HomePage';
import { GuidesPage } from './components/pages/GuidesPage';
import { BlogPage } from './components/pages/BlogPage';
import { FAQPage } from './components/pages/FAQPage';

export type Page = 'home' | 'guides' | 'blog' | 'faq';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedBlogPostTitle, setSelectedBlogPostTitle] = useState<string | null>(null);

  const navigateToPage = (page: Page, blogPostTitle?: string) => {
    setCurrentPage(page);
    if (page === 'blog' && blogPostTitle) {
      setSelectedBlogPostTitle(blogPostTitle);
    } else {
      setSelectedBlogPostTitle(null);
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={navigateToPage} />;
      case 'guides':
        return <GuidesPage onNavigate={navigateToPage} />;
      case 'blog':
        return <BlogPage initialSelectedPostTitle={selectedBlogPostTitle} />;
      case 'faq':
        return <FAQPage />;
      default:
        return <HomePage onNavigate={navigateToPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Skip to main content link for keyboard users */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-6 focus:py-3 focus:bg-[#C6B080] focus:text-white focus:rounded-lg focus:shadow-lg"
        style={{ fontFamily: 'Futura, sans-serif', fontSize: '16px', fontWeight: 600, letterSpacing: '1px' }}
      >
        HOPPA TILL INNEHÅLL
      </a>
      
      <Header currentPage={currentPage} onNavigate={navigateToPage} />
      
      <main id="main-content" className="flex-1" role="main">
        {renderPage()}
      </main>
      
      <Footer onNavigate={navigateToPage} />
    </div>
  );
}
