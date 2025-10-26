import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';

export function NotFoundPage() {
  return (
    <div style={{ backgroundColor: '#fcfbf7', minHeight: '60vh' }}>
      <SEO
        title="Sidan kunde inte hittas – BRF Guide"
        description="Sidan du söker finns inte. Gå tillbaka till startsidan."
        canonicalPath="/404"
      />
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-[92px] text-center">
          <h1 style={{ fontFamily: 'Futura, sans-serif', fontSize: '48px', fontWeight: 800, color: '#C6B080', lineHeight: '1.2' }}>404</h1>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px', color: '#1a1a1a', marginTop: '12px' }}>
            Sidan kunde inte hittas.
          </p>
          <div className="mt-8">
            <Link
              to="/"
              className="inline-block bg-[#C6B080] text-white px-6 py-3 rounded hover:opacity-90"
              style={{ fontFamily: 'Futura, sans-serif', fontSize: '16px', letterSpacing: '1px' }}
            >
              Till startsidan
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default NotFoundPage;



