import { useState } from 'react';
import { ChevronDown, Search } from 'lucide-react';
import SEO from '@/components/SEO';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['all', 'Ekonomi', 'Underhåll', 'Juridik', 'Styrelse'];

  const faqs: FAQItem[] = [
    {
      question: 'Hur ofta ska vi uppdatera budgeten?',
      answer: 'En årsbudget bör tas fram inför varje verksamhetsår och godkännas på föreningsstämman. Det är också bra att göra en löpande uppföljning varje kvartal för att se om ni ligger i linje med budgeten. Om det uppstår stora avvikelser kan styrelsen behöva göra justeringar eller informera medlemmarna.',
      category: 'Ekonomi'
    },
    {
      question: 'Vad är K3 och gäller det vår förening?',
      answer: 'K3 är ett redovisningsregelverk från Bokföringsnämnden som gäller för de flesta svenska företag, inklusive de flesta bostadsrättsföreningar. Från och med 2014 ska bostadsrättsföreningar som uppfyller vissa kriterier tillämpa K3 i sin redovisning. Det innebär vissa krav på hur årsredovisningen ska upprättas.',
      category: 'Ekonomi'
    },
    {
      question: 'Hur lång tid i förväg måste vi kalla till föreningsstämma?',
      answer: 'Enligt bostadsrättslagen ska kallelse till ordinarie föreningsstämma (årsstämma) skickas ut minst två veckor före stämman. För extra föreningsstämma gäller samma regel. Kallelsen ska skickas till alla medlemmar på det sätt som anges i föreningens stadgar – vanligtvis via brev eller e-post.',
      category: 'Juridik'
    },
    {
      question: 'Vad ska en underhållsplan innehålla?',
      answer: 'En underhållsplan ska innehålla en inventering av fastighetens alla komponenter (tak, fasad, fönster, stammar etc.), uppskattning av när varje komponent behöver underhållas eller bytas, samt beräknade kostnader för varje åtgärd. Planen bör sträcka sig minst 5-10 år framåt och uppdateras årligen.',
      category: 'Underhåll'
    },
    {
      question: 'Hur ofta ska vi besikta fastigheten?',
      answer: 'Det är bra att göra en grundlig fasadbesiktning vart 5-10:e år, beroende på fastighetens ålder och skick. Därutöver bör styrelsen eller fastighetsskötaren göra löpande inspektioner minst en gång per år för att upptäcka eventuella problem i tid. Ventilationssystem bör kontrolleras enligt OVK-reglerna.',
      category: 'Underhåll'
    },
    {
      question: 'Kan vi som styrelse delegera beslut?',
      answer: 'Ja, styrelsen kan delegera vissa beslut till enskilda styrelseledamöter eller till anställd personal, till exempel en fastighetsskötare. Men vissa beslut måste alltid fattas av hela styrelsen, som större investeringar eller ändringar i föreningens stadgar. Det är viktigt att ha en tydlig arbetsordning som reglerar vad som kan delegeras.',
      category: 'Styrelse'
    },
    {
      question: 'Hur hanterar vi intressekonflikter i styrelsen?',
      answer: 'Om en styrelseledamot har ett personligt intresse i ett ärende som styrelsen ska besluta om, ska personen jäva sig – det vill säga inte delta i beslutet. Detta regleras i bostadsrättslagen. Jäv ska protokollföras. Vid tveksamhet är det bättre att vara för försiktig och jäva sig.',
      category: 'Styrelse'
    },
    {
      question: 'Måste vi anlita en revisor?',
      answer: 'Ja, enligt bostadsrättslagen ska föreningar med fler än 50 medlemmar ha minst en auktoriserad eller godkänd revisor. Mindre föreningar kan välja mellan att ha en auktoriserad/godkänd revisor eller två lekmannarevisor valda av stämman. Revisorn granskar föreningens ekonomi och förvaltning.',
      category: 'Juridik'
    },
    {
      question: 'Vad händer om vi inte följer K3-reglerna?',
      answer: 'Om en förening som ska tillämpa K3 inte gör det riskerar ni att få anmärkningar från revisorn. I värsta fall kan årsredovisningen underkännas, vilket kan leda till problem med banker och myndigheter. Det kan också påverka möjligheten att få lån eller refinansiera befintliga lån.',
      category: 'Ekonomi'
    },
    {
      question: 'Hur stor underhållsfond bör vi ha?',
      answer: 'Det finns ingen exakt regel, men en tumregel är att ha minst 3-6 månaders avgifter i underhållsfonden. För äldre fastigheter eller fastigheter med kända underhållsbehov kan det behövas mer. Underhållsplanen ger vägledning om hur mycket ni behöver avsätta varje år.',
      category: 'Underhåll'
    },
    {
      question: 'Kan vi ta ut en extra avgift från medlemmarna?',
      answer: 'Ja, styrelsen kan föreslå en höjning av årsavgiften eller en extra avgift (s.k. tilläggsavgift), men det måste godkännas av föreningsstämman. För större förändringar kan det krävas kvalificerad majoritet (2/3 av rösterna). Mindre justeringar kan ibland styrelsen besluta om själva, beroende på stadgarna.',
      category: 'Juridik'
    },
    {
      question: 'Hur ska vi kommunicera viktiga beslut till medlemmarna?',
      answer: 'Viktiga beslut bör kommuniceras tydligt via flera kanaler – till exempel genom brev/e-post, uppslag i trapphus och på föreningens webbplats om ni har en sådan. För större förändringar är det bra att hålla informationsmöten där medlemmarna kan ställa frågor. Transparens och god kommunikation bygger förtroende.',
      category: 'Styrelse'
    }
  ];

  const filteredFAQs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div style={{ backgroundColor: '#fcfbf7', minHeight: '100vh' }}>
      <SEO
        title="Vanliga frågor – BRF Guide"
        description="Svar på vanliga frågor för BRF‑styrelser om ekonomi, underhåll, juridik och styrelsearbete."
        canonicalPath="/faq"
      />
      {/* Hero */}
      <section className="relative py-20" style={{ background: 'linear-gradient(135deg, #5C4F36 0%, #7A6849 50%, #5C4F36 100%)' }}>
        <div className="container mx-auto px-4 lg:px-[92px] relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 style={{ 
              fontFamily: 'Futura, sans-serif', 
              fontSize: '56px', 
              fontWeight: 800, 
              color: 'white',
              lineHeight: '1.1',
              letterSpacing: '3px',
              marginBottom: '24px'
            }}>
              VANLIGA FRÅGOR
            </h1>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '20px', color: '#edf5fb', lineHeight: '1.6', letterSpacing: '-0.4492px' }}>
              Få svar på vanliga frågor om ekonomi, underhåll, juridik och styrelsearbete
            </p>
          </div>
        </div>
      </section>

      {/* Search and Categories */}
      <section className="py-12 bg-[#f9f9f4] border-b-2 border-[#e4dbdb]">
        <div className="container mx-auto px-4 lg:px-[92px]">
          {/* Search */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#C6B080]" />
              <input
                type="text"
                placeholder="Sök bland frågor..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-6 py-4 rounded-lg border-2 border-[#e4dbdb]"
                style={{
                  backgroundColor: 'white',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '16px'
                }}
              />
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className="px-6 py-3 rounded transition-all"
                style={{
                  backgroundColor: selectedCategory === category ? '#C6B080' : 'transparent',
                  color: selectedCategory === category ? 'white' : '#C6B080',
                  border: '2px solid',
                  borderColor: selectedCategory === category ? '#C6B080' : '#e4dbdb',
                  fontFamily: 'Futura, sans-serif',
                  fontSize: '15px',
                  fontWeight: 600,
                  letterSpacing: '1px'
                }}
              >
                {category === 'all' ? 'ALLA KATEGORIER' : category.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-[92px]">
          <div className="max-w-4xl mx-auto space-y-4">
            {filteredFAQs.length === 0 ? (
              <div className="text-center py-16">
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px', color: '#1a1a1a', letterSpacing: '-0.4395px' }}>
                  Hittade inga matchande frågor. Prova ett annat sökord eller välj en annan kategori.
                </p>
              </div>
            ) : (
              filteredFAQs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white border-2 rounded-lg overflow-hidden transition-all"
                  style={{
                    borderColor: openIndex === index ? '#C6B080' : '#e4dbdb'
                  }}
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full p-6 text-left flex items-start justify-between gap-4 hover:bg-[#f9f9f4] transition-colors"
                  >
                    <div className="flex-1">
                      {/* Category badge */}
                      <div className="inline-block bg-[#f9f9f4] px-3 py-1 rounded mb-3">
                        <span style={{ fontFamily: 'Futura, sans-serif', fontSize: '11px', fontWeight: 600, color: '#C6B080', letterSpacing: '1px' }}>
                          {faq.category.toUpperCase()}
                        </span>
                      </div>
                      <h3 style={{
                        fontFamily: 'Futura, sans-serif',
                        fontSize: '20px',
                        fontWeight: 700,
                        color: '#C6B080',
                        lineHeight: '1.4'
                      }}>
                        {faq.question}
                      </h3>
                    </div>
                    <div
                      className="flex-shrink-0 w-8 h-8 rounded flex items-center justify-center transition-transform"
                      style={{
                        backgroundColor: openIndex === index ? '#C6B080' : '#f9f9f4',
                        transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)'
                      }}
                    >
                      <ChevronDown className="w-5 h-5" style={{ color: openIndex === index ? 'white' : '#C6B080' }} />
                    </div>
                  </button>
                  {openIndex === index && (
                    <div className="px-6 pb-6">
                      <div className="pt-4 border-t-2 border-[#e4dbdb]">
                        <p style={{
                          fontFamily: 'Inter, sans-serif',
                          fontSize: '16px',
                          color: '#1a1a1a',
                          lineHeight: '1.7',
                          letterSpacing: '-0.3125px'
                        }}>
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-[#f9f9f4]">
        <div className="container mx-auto px-4 lg:px-[92px]">
          <div className="max-w-3xl mx-auto text-center bg-white p-12 rounded-lg border-2 border-[#C6B080]">
            <div className="w-16 h-16 rounded-lg mx-auto mb-6 flex items-center justify-center bg-[#C6B080]">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 style={{ 
              fontFamily: 'Futura, sans-serif', 
              fontSize: '32px', 
              fontWeight: 700, 
              color: '#C6B080',
              marginBottom: '16px',
              letterSpacing: '1px'
            }}>
              FÅ TIPS VIA E-POST
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px', color: '#1a1a1a', lineHeight: '1.6', marginBottom: '32px', letterSpacing: '-0.4395px' }}>
              Få nya artiklar, guider och praktiska tips direkt i inkorgen. Kostnadsfritt, utan spam.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Din e-postadress"
                className="flex-1 px-6 py-4 rounded border-2 border-[#e4dbdb]"
                style={{ 
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '16px'
                }}
              />
              <button className="bg-[#C6B080] hover:opacity-90 px-8 py-4 rounded transition-all" style={{ 
                fontFamily: 'Futura, sans-serif',
                fontSize: '16px',
                fontWeight: 500,
                color: 'white',
                letterSpacing: '1.5px'
              }}>
                PRENUMERERA
              </button>
            </div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1a1a1a', marginTop: '16px', letterSpacing: '-0.0762px' }}>
              Du kan avsluta prenumerationen när som helst.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
