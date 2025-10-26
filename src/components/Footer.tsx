import { ExternalLink } from 'lucide-react';
import { Logo } from './Logo';
import { Link } from 'react-router-dom';

export function Footer() {
  const handleClick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#f9f9f4] border-t-2 border-[#e4dbdb]" role="contentinfo">
      <div className="container mx-auto px-4 lg:px-[92px] py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <Logo />
          </div>

          {/* Navigation */}
          <nav aria-labelledby="footer-nav-heading">
            <h2 id="footer-nav-heading" className="mb-6" style={{ fontFamily: 'Futura, sans-serif', fontSize: '18px', fontWeight: 700, color: '#C6B080' }}>
              Navigation
            </h2>
            <ul className="space-y-3">
              <li>
                <Link to="/" onClick={handleClick} className="hover:text-[#C6B080] transition-colors focus:outline-none focus:text-[#C6B080] focus:underline" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: 500, color: '#1a1a1a', letterSpacing: '-0.3125px' }}>
                  Hem
                </Link>
              </li>
              <li>
                <Link to="/guider" onClick={handleClick} className="hover:text-[#C6B080] transition-colors focus:outline-none focus:text-[#C6B080] focus:underline" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: 500, color: '#1a1a1a', letterSpacing: '-0.3125px' }}>
                  Guider
                </Link>
              </li>
              <li>
                <Link to="/blogg" onClick={handleClick} className="hover:text-[#C6B080] transition-colors focus:outline-none focus:text-[#C6B080] focus:underline" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: 500, color: '#1a1a1a', letterSpacing: '-0.3125px' }}>
                  Blogg
                </Link>
              </li>
              <li>
                <Link to="/faq" onClick={handleClick} className="hover:text-[#C6B080] transition-colors focus:outline-none focus:text-[#C6B080] focus:underline" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: 500, color: '#1a1a1a', letterSpacing: '-0.3125px' }}>
                  Vanliga frågor
                </Link>
              </li>
            </ul>
          </nav>

          {/* Information */}
          <nav aria-labelledby="footer-info-heading">
            <h2 id="footer-info-heading" className="mb-6" style={{ fontFamily: 'Futura, sans-serif', fontSize: '18px', fontWeight: 700, color: '#C6B080' }}>
              Information
            </h2>
            <ul className="space-y-3">
              <li>
                <button 
                  className="hover:text-[#C6B080] transition-colors focus:outline-none focus:text-[#C6B080] focus:underline" 
                  style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: 500, color: '#1a1a1a', letterSpacing: '-0.3125px' }}
                >
                  Integritetspolicy
                </button>
              </li>
              <li>
                <button 
                  className="hover:text-[#C6B080] transition-colors focus:outline-none focus:text-[#C6B080] focus:underline" 
                  style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: 500, color: '#1a1a1a', letterSpacing: '-0.3125px' }}
                >
                  Cookies
                </button>
              </li>
            </ul>
          </nav>

          {/* External Links */}
          <nav aria-labelledby="footer-resources-heading">
            <h2 id="footer-resources-heading" className="mb-6" style={{ fontFamily: 'Futura, sans-serif', fontSize: '18px', fontWeight: 700, color: '#C6B080' }}>
              Användbara resurser
            </h2>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.boverket.se"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#C6B080] transition-colors inline-flex items-center gap-2 focus:outline-none focus:text-[#C6B080] focus:underline"
                  style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1a1a1a', letterSpacing: '-0.3125px' }}
                >
                  Boverket
                  <ExternalLink className="w-4 h-4" aria-hidden="true" />
                  <span className="sr-only">(öppnas i ny flik)</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.bolagsverket.se"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#C6B080] transition-colors inline-flex items-center gap-2 focus:outline-none focus:text-[#C6B080] focus:underline"
                  style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1a1a1a', letterSpacing: '-0.3125px' }}
                >
                  Bolagsverket
                  <ExternalLink className="w-4 h-4" aria-hidden="true" />
                  <span className="sr-only">(öppnas i ny flik)</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.hsb.se"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#C6B080] transition-colors inline-flex items-center gap-2 focus:outline-none focus:text-[#C6B080] focus:underline"
                  style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1a1a1a', letterSpacing: '-0.3125px' }}
                >
                  HSB
                  <ExternalLink className="w-4 h-4" aria-hidden="true" />
                  <span className="sr-only">(öppnas i ny flik)</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.bostadsratterna.se"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#C6B080] transition-colors inline-flex items-center gap-2 focus:outline-none focus:text-[#C6B080] focus:underline"
                  style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1a1a1a', letterSpacing: '-0.3125px' }}
                >
                  Bostadsrätterna
                  <ExternalLink className="w-4 h-4" aria-hidden="true" />
                  <span className="sr-only">(öppnas i ny flik)</span>
                </a>
              </li>
              <li>
                <a
                  href="https://uplan.se"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#C6B080] transition-colors inline-flex items-center gap-2 focus:outline-none focus:text-[#C6B080] focus:underline"
                  style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1a1a1a', letterSpacing: '-0.3125px' }}
                >
                  Uplan
                  <ExternalLink className="w-4 h-4" aria-hidden="true" />
                  <span className="sr-only">(öppnas i ny flik)</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-16 pt-8 border-t border-[#e4dbdb]">
          <p className="text-center" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#666', letterSpacing: '-0.3125px' }}>
            © {currentYear} BRF-guide.se. Alla rättigheter förbehålls.
          </p>
        </div>
      </div>
    </footer>
  );
}
