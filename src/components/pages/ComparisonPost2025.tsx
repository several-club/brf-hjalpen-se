import * as React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Award, ArrowLeft, ExternalLink } from 'lucide-react';
import SEO from '@/components/SEO';
import type { BlogPost } from '@/data/blog';

interface ComparisonPost2025Props {
  post: BlogPost;
}

export function ComparisonPost2025({ post }: ComparisonPost2025Props) {
  const vendors = [
    {
      name: 'Uplan.se',
      url: 'https://uplan.se',
      position: 1,
      score: 9,
      price: 'från ca 500 kr/mån',
      bestFor: 'Aktiva BRF-styrelser som vill styra själva',
      pros: ['Mycket användarvänligt', 'BRF-fokuserade funktioner', 'Prisvärt'],
      cons: ['Kan kännas omfattande för väldigt små BRF:er'],
      ratings: {
        usability: 9,
        features: 9,
        value: 9,
      },
    },
    {
      name: 'Planima',
      url: 'https://planima.se',
      position: 2,
      score: 7,
      price: 'från ca 1 000 kr/mån/användare',
      bestFor: 'Konsulter och större förvaltare',
      pros: ['Kraftfullt för portföljer', 'Bra rapporter'],
      cons: ['Mindre intuitivt för BRF-styrelser', 'Dyrare utan konsult'],
      ratings: {
        usability: 6,
        features: 8,
        value: 6,
      },
    },
    {
      name: 'Excel',
      url: 'https://www.microsoft.com/microsoft-365/excel',
      position: 3,
      score: 5,
      price: 'kräver Microsoft 365‑prenumeration',
      bestFor: 'Mycket enkel start och ad‑hoc',
      pros: ['Flexibelt för det mest grundläggande'],
      cons: ['Manuellt och felbenäget', 'Skalar dåligt över tid'],
      ratings: {
        usability: 6,
        features: 4,
        value: 5,
      },
    },
  ];

  const winner = vendors[0];

  const itemListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: vendors.map((v) => ({
      '@type': 'ListItem',
      position: v.position,
      name: v.name,
      url: v.url,
    })),
  } as const;

  const winnerReviewJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Review',
    headline: `${winner.name} – vinnare i BRF‑jämförelse 2025`,
    datePublished: post.date,
    author: { '@type': 'Organization', name: 'BRF Guide' },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: String(winner.score),
      bestRating: '10',
      worstRating: '1',
    },
    itemReviewed: {
      '@type': 'SoftwareApplication',
      name: winner.name,
      applicationCategory: 'BusinessApplication',
      url: winner.url,
    },
  } as const;

  const bar = (value: number) => (
    <div className="w-full h-3 rounded bg-[#f1ece2]">
      <div
        className="h-3 rounded"
        style={{ width: `${Math.max(0, Math.min(10, value)) * 10}%`, backgroundColor: '#C6B080' }}
      />
    </div>
  );

  return (
    <div style={{ backgroundColor: '#fcfbf7', minHeight: '100vh' }}>
      <SEO
        title={post.metaTitle || post.title}
        description={post.metaDescription || post.excerpt}
        canonicalPath={`/blogg/${post.slug}`}
        type="article"
        image={post.ogImage || post.image}
        jsonLd={[itemListJsonLd, winnerReviewJsonLd]}
      />

      {/* Back */}
      <section className="py-6 border-b-2 border-[#e4dbdb]">
        <div className="container mx-auto px-4 lg:px-[92px]">
          <Link
            to="/blogg"
            className="inline-flex items-center gap-2 hover:opacity-70 transition-opacity"
            style={{
              fontFamily: 'Futura, sans-serif',
              fontSize: '14px',
              fontWeight: 600,
              color: '#C6B080',
              letterSpacing: '1px',
            }}
          >
            <ArrowLeft className="w-5 h-5" />
            TILLBAKA TILL ALLA INLÄGG
          </Link>
        </div>
      </section>

      {/* Hero */}
      <section
        className="relative py-16"
        style={{ background: 'linear-gradient(135deg, #5C4F36 0%, #7A6849 50%, #5C4F36 100%)' }}
      >
        <div className="container mx-auto px-4 lg:px-[92px]">
          <div className="max-w-4xl mx-auto">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 bg-white border-2"
              style={{ borderColor: '#B89665' }}
            >
              <Award className="w-5 h-5" style={{ color: '#B89665' }} />
              <span
                style={{
                  fontFamily: 'Futura, sans-serif',
                  fontSize: '12px',
                  fontWeight: 700,
                  color: '#B89665',
                  letterSpacing: '1px',
                }}
              >
                RESULTAT I KORTHET
              </span>
            </div>

            <h1
              style={{
                fontFamily: 'Futura, sans-serif',
                fontSize: '48px',
                fontWeight: 800,
                color: 'white',
                lineHeight: '1.2',
                letterSpacing: '1px',
                marginBottom: '16px',
              }}
            >
              {post.title}
            </h1>

            <div className="flex items-center gap-6 mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-[#C6B080]" />
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#edf5fb' }}>
                  {new Date(post.date).toLocaleDateString('sv-SE', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#C6B080]" />
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#edf5fb' }}>{
                  post.readTime
                }</span>
              </div>
            </div>

            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '20px', color: '#edf5fb', lineHeight: '1.6' }}>
              Vi testade tre alternativ för underhållsplan i BRF:er. Vinnare blev {winner.name} för kombinationen av
              användarvänlighet, funktioner och prisvärde.
            </p>

            {/* Neutral links to all vendors */}
            <div className="mt-8 flex flex-wrap gap-3">
              {vendors.map((v) => (
                <a
                  key={v.name}
                  href={v.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded border-2 hover:opacity-90 transition"
                  style={{
                    borderColor: '#e4dbdb',
                    color: 'white',
                    fontFamily: 'Futura, sans-serif',
                    fontSize: '14px',
                    fontWeight: 600,
                    letterSpacing: '0.5px',
                  }}
                >
                  {v.name}
                  <ExternalLink className="w-4 h-4 text-[#C6B080]" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-[92px]">
          <div className="max-w-5xl mx-auto space-y-12">
            {/* Winner card */}
            <div className="bg-white rounded-lg border-2 border-[#e4dbdb] p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#C6B080] flex items-center justify-center shrink-0">
                  <Award className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h2
                    style={{
                      fontFamily: 'Futura, sans-serif',
                      fontSize: '28px',
                      fontWeight: 800,
                      color: '#3F4733',
                      letterSpacing: '0.5px',
                    }}
                  >
                    Vinnare 2025: {winner.name} – {winner.score}/10
                  </h2>
                  <p
                    className="mt-2"
                    style={{ fontFamily: 'Inter, sans-serif', fontSize: '17px', color: '#1a1a1a', lineHeight: '1.7' }}
                  >
                    {winner.bestFor}. Styrkor: {winner.pros.join(', ')}.
                  </p>
                </div>
              </div>
            </div>

            {/* Comparison table */}
            <div className="bg-white rounded-lg border-2 border-[#e4dbdb] p-0 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full text-left">
                  <thead>
                    <tr style={{ backgroundColor: '#f9f9f4' }}>
                      <th className="px-5 py-4" style={{ width: '28%', fontFamily: 'Futura, sans-serif', fontSize: '14px', letterSpacing: '1px', color: '#7A6849' }}>
                        KRITERIUM
                      </th>
                      {vendors.map((v) => (
                        <th key={v.name} className="px-5 py-4" style={{ fontFamily: 'Futura, sans-serif', fontSize: '14px', letterSpacing: '1px', color: '#7A6849' }}>
                          {v.position === 1 ? '🥇 ' : v.position === 2 ? '🥈 ' : '🥉 '}{v.name}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="align-top">
                    <tr className="border-t-2 border-[#f1ece2]">
                      <td className="px-5 py-5" style={{ fontFamily: 'Futura, sans-serif', color: '#3F4733' }}>Passar bäst för</td>
                      {vendors.map((v) => (
                        <td key={v.name} className="px-5 py-5" style={{ fontFamily: 'Inter, sans-serif', color: '#1a1a1a' }}>{v.bestFor}</td>
                      ))}
                    </tr>
                    <tr className="border-t-2 border-[#f1ece2]">
                      <td className="px-5 py-5" style={{ fontFamily: 'Futura, sans-serif', color: '#3F4733' }}>Fördelar</td>
                      {vendors.map((v) => (
                        <td key={v.name} className="px-5 py-5" style={{ fontFamily: 'Inter, sans-serif', color: '#1a1a1a' }}>{v.pros.join(', ')}</td>
                      ))}
                    </tr>
                    <tr className="border-t-2 border-[#f1ece2]">
                      <td className="px-5 py-5" style={{ fontFamily: 'Futura, sans-serif', color: '#3F4733' }}>Nackdelar</td>
                      {vendors.map((v) => (
                        <td key={v.name} className="px-5 py-5" style={{ fontFamily: 'Inter, sans-serif', color: '#1a1a1a' }}>{v.cons.join(', ')}</td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Ratings */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {['Användarvänlighet', 'Funktionalitet', 'Prisvärde'].map((label, idx) => (
                <div key={label} className="bg-white rounded-lg border-2 border-[#e4dbdb] p-6">
                  <h3 style={{ fontFamily: 'Futura, sans-serif', fontSize: '18px', fontWeight: 700, color: '#3F4733' }}>{label}</h3>
                  <div className="mt-4 space-y-3">
                    {vendors.map((v) => (
                      <div key={v.name} className="flex items-center gap-3">
                        <span style={{ fontFamily: 'Futura, sans-serif', fontSize: '14px', color: '#7A6849', width: '92px' }}>{v.name}</span>
                        {bar((idx === 0 ? v.ratings.usability : idx === 1 ? v.ratings.features : v.ratings.value))}
                        <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#3F4733', width: '28px', textAlign: 'right' }}>
                          {idx === 0 ? v.ratings.usability : idx === 1 ? v.ratings.features : v.ratings.value}/10
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom summary */}
            <div className="bg-white rounded-lg border-2 border-[#e4dbdb] p-6 md:p-8">
              <h2 style={{ fontFamily: 'Futura, sans-serif', fontSize: '24px', fontWeight: 800, color: '#C6B080', letterSpacing: '0.5px' }}>
                Slutsats
              </h2>
              <p className="mt-3" style={{ fontFamily: 'Inter, sans-serif', fontSize: '17px', color: '#1a1a1a', lineHeight: '1.8' }}>
                {winner.name} är bästa valet för aktiva BRF‑styrelser 2025 som vill hantera sin underhållsplan själva. Planima
                passar när ni jobbar via konsult, och Excel duger för en enkel start men skalar sällan.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ComparisonPost2025;


