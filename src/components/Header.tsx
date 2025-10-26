import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Logo } from './Logo';
import type { Page } from '../App';

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page, blogPostTitle?: string) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { label: string; page: Page }[] = [
    { label: 'Hem', page: 'home' },
    { label: 'Guider', page: 'guides' },
    { label: 'Blogg', page: 'blog' },
    { label: 'Vanliga frågor', page: 'faq' },
  ];

  const handleNavigate = (page: Page) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header 
      className="sticky top-0 z-50 bg-[#fcfbf7] border-b-2 border-[#e4dbdb] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]"
      role="banner"
    >
      <div className="container mx-auto px-4 lg:px-[92px] py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavigate('home')}
            className="focus:outline-none rounded-lg px-2 py-1"
            aria-label="BRF Guide startsida"
          >
            <Logo />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2" aria-label="Huvudnavigation">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavigate(item.page)}
                className={`px-6 py-3 transition-all focus:outline-none active:outline-none relative ${
                  currentPage === item.page
                    ? 'text-[#C6B080]'
                    : 'text-[#1a1a1a] hover:text-[#C6B080] focus:ring-2 focus:ring-[#C6B080] focus:ring-offset-2 active:ring-0'
                }`}
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '17px',
                  fontWeight: currentPage === item.page ? 600 : 400,
                  letterSpacing: '-0.4316px'
                }}
                aria-current={currentPage === item.page ? 'page' : undefined}
              >
                {item.label}
                {currentPage === item.page && (
                  <span 
                    className="absolute bottom-0 left-6 right-6 h-0.5 bg-[#C6B080]"
                    aria-hidden="true"
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-3 rounded-lg hover:bg-[#f9f9f4] transition-colors focus:outline-none focus:ring-4 focus:ring-[#C6B080] focus:ring-opacity-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Stäng meny' : 'Öppna meny'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav 
            id="mobile-menu"
            className="md:hidden mt-6 pb-4 flex flex-col gap-3"
            aria-label="Mobil navigation"
          >
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavigate(item.page)}
                className={`px-4 py-3 text-left transition-all rounded-lg focus:outline-none focus:ring-4 focus:ring-[#C6B080] focus:ring-opacity-50 ${
                  currentPage === item.page
                    ? 'bg-[#C6B080] text-white'
                    : 'hover:bg-[#f9f9f4] text-[#1a1a1a]'
                }`}
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '17px'
                }}
                aria-current={currentPage === item.page ? 'page' : undefined}
              >
                {item.label}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
