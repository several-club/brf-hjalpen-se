import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Logo } from './Logo';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { label: string; to: string }[] = [
    { label: 'Hem', to: '/' },
    { label: 'Guider', to: '/guider' },
    { label: 'Blogg', to: '/blogg' },
    { label: 'Vanliga frågor', to: '/faq' },
  ];

  const closeMobile = () => setMobileMenuOpen(false);

  return (
    <header 
      className="sticky top-0 z-50 bg-[#fcfbf7] border-b-2 border-[#e4dbdb] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]"
      role="banner"
    >
      <div className="container mx-auto px-4 lg:px-[92px] py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="focus:outline-none rounded-lg px-2 py-1" aria-label="BRF Guide startsida" onClick={closeMobile}>
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2" aria-label="Huvudnavigation">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => `px-6 py-3 transition-all focus:outline-none active:outline-none relative ${
                  isActive
                    ? 'text-[#C6B080]'
                    : 'text-[#1a1a1a] hover:text-[#C6B080] focus:ring-2 focus:ring-[#C6B080] focus:ring-offset-2 active:ring-0'
                }`}
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '17px',
                  letterSpacing: '-0.4316px'
                }}
                aria-current={({ isActive }) => (isActive ? 'page' : undefined) as any}
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    {isActive && (
                      <span 
                        className="absolute bottom-0 left-6 right-6 h-0.5 bg-[#C6B080]"
                        aria-hidden="true"
                      />
                    )}
                  </>
                )}
              </NavLink>
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
              <NavLink
                key={item.to}
                to={item.to}
                onClick={closeMobile}
                className={({ isActive }) => `px-4 py-3 text-left transition-all rounded-lg focus:outline-none focus:ring-4 focus:ring-[#C6B080] focus:ring-opacity-50 ${
                  isActive ? 'bg-[#C6B080] text-white' : 'hover:bg-[#f9f9f4] text-[#1a1a1a]'
                }`}
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '17px'
                }}
                aria-current={({ isActive }) => (isActive ? 'page' : undefined) as any}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
