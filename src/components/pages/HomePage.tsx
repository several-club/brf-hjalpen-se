import { ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import boardMeetingImage from 'figma:asset/3fdf683013e2b0e5a82d296eb98905331b128386.png';
import residentialAreaImage from 'figma:asset/04c1c854fcd7e64239c73e007c19a33518e72868.png';
import apartmentBuildingImage from 'figma:asset/b8c99ceb382b3b8cd41caa87fcc4c622da16f125.png';
import type { Page } from '../../App';

export function HomePage() {
  const challenges = [
    {
      title: 'Skapa en årsbudget som håller',
      description: 'Som styrelse ansvarar ni för att ta fram en realistisk budget som både speglar föreningens behov och håller kostnaderna i schack. En välplanerad budget ger trygghet för både styrelse och medlemmar.',
      color: '#C6B080'
    },
    {
      title: 'Förstå K3-redovisning',
      description: 'K3 är det redovisningsregelverk som gäller för de flesta bostadsrättsföreningar. Det kan verka komplext, men med rätt vägledning blir det hanterbart. Vi hjälper er att förstå vad som krävs.',
      color: '#3F4733'
    },
    {
      title: 'Planera underhåll långsiktigt',
      description: 'En genomtänkt underhållsplan hjälper er att undvika akuta reparationer och oväntade kostnader. Genom att planera i god tid kan ni sprida kostnaderna över tid och hålla avgifterna stabila.',
      color: '#C6B080'
    },
    {
      title: 'Förbered er inför revisionen',
      description: 'Revisionen är en viktig del av föreningens kvalitetssäkring. Genom att veta vad revisorn tittar på kan ni säkerställa att dokumentation och rutiner är på plats.',
      color: '#3F4733'
    },
  ];

  const popularGuides = [
    {
      title: 'Så skapar ni en årsbudget steg för steg',
      description: 'En komplett genomgång av budgetprocessen – från att samla in data till att få godkännande på stämman. Med konkreta exempel och mallar som ni kan använda direkt.',
      category: 'EKONOMI',
    },
    {
      title: 'K3-redovisning förklarat',
      description: 'Vad K3 innebär för er förening, vilka krav som ställs på årsredovisningen och hur ni praktiskt hanterar övergången. Med exempel från verkliga föreningar.',
      category: 'EKONOMI',
    },
    {
      title: 'Bygg en underhållsplan som fungerar',
      description: 'Lär er identifiera underhållsbehov, uppskatta kostnader och skapa en långsiktig plan som ger medlemmarna trygghet och förutsägbarhet.',
      category: 'UNDERHÅLL',
    },
  ];

  // Generate consistent daily reader count between 1000-1400
  const getDailyReaderCount = () => {
    const today = new Date();
    const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000);
    // Use day of year as seed for consistent daily number
    const seed = dayOfYear * 9301 + 49297;
    const random = (seed % 233280) / 233280;
    return Math.floor(1000 + random * 400); // Range: 1000-1400
  };

  const dailyReaders = getDailyReaderCount();

  return (
    <div style={{ backgroundColor: '#fcfbf7' }}>
      <SEO
        title="BRF Guide – Vägledning för BRF‑styrelser"
        description="Kunskap och verktyg för BRF‑styrelser: budget, K3, underhållsplan och jämförelser (Uplan m.fl.)."
        canonicalPath="/"
      />
      {/* Hero Section */}
      <section 
        className="relative overflow-hidden" 
        style={{ minHeight: '856px', background: 'linear-gradient(135deg, #3F4733 0%, #4a5a3e 50%, #3F4733 100%)' }}
        aria-labelledby="hero-heading"
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <div className="absolute bg-[#C6B080] left-[1048px] w-[384px] h-[384px] top-0"></div>
          <div className="absolute bg-[#3F4733] left-0 w-[320px] h-[320px] top-[536px]"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-[92px] py-32 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left column - Text content */}
            <div className="space-y-8">
              <div 
                className="inline-block px-4 py-2 rounded-full border-2 border-[#C6B080] bg-transparent"
                role="text"
                aria-label="Kostnadsfri kunskapsresurs"
              >
                <span style={{ fontFamily: 'Futura, sans-serif', fontSize: '12px', fontWeight: 600, color: '#C6B080', letterSpacing: '1.2px' }}>
                  KOSTNADSFRI KUNSKAPSRESURS
                </span>
              </div>
              
              <h1 
                id="hero-heading"
                style={{ 
                  fontFamily: 'Futura, sans-serif', 
                  fontSize: 'clamp(32px, 5vw, 52px)', 
                  fontWeight: 800, 
                  color: 'white',
                  lineHeight: '1.1',
                  letterSpacing: '2px',
                  textShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }}
              >
                VÄGLEDNING FÖR BRF-STYRELSER
              </h1>
              
              <p style={{ 
                fontFamily: 'Inter, sans-serif', 
                fontSize: 'clamp(16px, 2vw, 20px)', 
                color: '#edf5fb',
                lineHeight: '1.6',
                letterSpacing: '-0.4492px'
              }}>
                Som styrelseledamot behöver ni kunna fatta välgrundade beslut om ekonomi, underhåll och drift – även utan att vara experter. Här får ni hjälpen ni behöver.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  to="/guider"
                  className="bg-[#C6B080] hover:bg-[#3F4733] hover:shadow-xl hover:-translate-y-0.5 px-6 py-2.5 rounded-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#C6B080] focus:ring-opacity-50 shadow-md inline-flex items-center gap-2 group whitespace-nowrap text-white"
                  style={{ 
                    fontFamily: 'Futura, sans-serif',
                    fontSize: '13px',
                    fontWeight: 600,
                    letterSpacing: '1px'
                  }}
                  aria-label="Utforska våra guider"
                >
                  UTFORSKA GUIDER
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/faq"
                  className="border-2 border-[#C6B080] text-[#C6B080] hover:bg-[#C6B080] hover:text-white hover:shadow-xl hover:-translate-y-0.5 px-6 py-2.5 rounded-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#C6B080] focus:ring-opacity-50 shadow-md inline-flex items-center gap-2 group whitespace-nowrap"
                  style={{ 
                    fontFamily: 'Futura, sans-serif',
                    fontSize: '13px',
                    fontWeight: 600,
                    letterSpacing: '1px'
                  }}
                  aria-label="Gå till vanliga frågor"
                >
                  VANLIGA FRÅGOR
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right column - Image with stats card */}
            <div className="relative">
              <div className="relative rounded-lg overflow-hidden border-4 border-[#C6B080] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]">
                <img
                  src={boardMeetingImage}
                  alt="Styrelsemedlemmar i diskussion under ett styrelsesammanträde i bostadsrättsförening"
                  className="w-full h-[600px] object-cover"
                  loading="eager"
                />
                {/* Yellow corner accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#C6B080]" aria-hidden="true"></div>
              </div>

              {/* Floating stats card */}
              <div 
                className="absolute -bottom-6 -left-6 bg-[#fcfbf7] border-2 border-[#e4dbdb] rounded-lg p-6 shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]"
                role="status"
                aria-label="Statistik: 1253 aktiva läsare denna vecka, 1000+ BRFer"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="relative">
                    <div className="w-3 h-3 rounded-full bg-[#3F4733] animate-pulse" aria-hidden="true"></div>
                    <div className="absolute inset-0 w-3 h-3 rounded-full bg-[#3F4733] animate-ping opacity-75" aria-hidden="true"></div>
                  </div>
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1a1a1a', letterSpacing: '-0.1504px' }}>
                    {dailyReaders} aktiva läsare denna vecka
                  </span>
                </div>
                <p style={{ fontFamily: 'Futura, sans-serif', fontSize: '28px', fontWeight: 700, color: '#3F4733', lineHeight: '1.5' }}>
                  1000+ BRFer
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured News Section */}
      <section className="py-16 bg-white border-b-2 border-[#e4dbdb]">
        <div className="container mx-auto px-4 lg:px-[92px]">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-2 h-2 rounded-full bg-[#C6B080] animate-pulse"></div>
              <span style={{ 
                fontFamily: 'Futura, sans-serif', 
                fontSize: '14px', 
                fontWeight: 600, 
                color: '#C6B080',
                letterSpacing: '1.5px'
              }}>
                SENASTE NYHET
              </span>
            </div>

            <div className="grid md:grid-cols-2 gap-8 bg-[#f9f9f4] rounded-lg border-2 border-[#C6B080] overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              {/* Image */}
              <div className="relative h-80 md:h-auto">
                <img
                  src="https://images.unsplash.com/photo-1759661937582-0ccd5dacf20f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwcGxhbm5pbmclMjB0b29sc3xlbnwxfHx8fDE3NjE1MDE1NDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Digital underhållsplanering för BRF"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                <div className="absolute top-4 left-4 px-4 py-2 rounded-full bg-white border-2 border-[#B89665]">
                  <span style={{ 
                    fontFamily: 'Futura, sans-serif', 
                    fontSize: '12px', 
                    fontWeight: 600, 
                    color: '#B89665',
                    letterSpacing: '1px' 
                  }}>
                    EKONOMI & UNDERHÅLL
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h2 style={{ 
                  fontFamily: 'Futura, sans-serif', 
                  fontSize: '28px', 
                  fontWeight: 700, 
                  color: '#3F4733',
                  lineHeight: '1.3',
                  marginBottom: '12px',
                  letterSpacing: '0.5px'
                }}>
                  Bästa verktygen för underhållsplan i BRF – vår stora jämförelse 2025
                </h2>

                <div className="flex items-center gap-4 mb-4">
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1a1a1a', letterSpacing: '-0.1504px' }}>
                    26 oktober 2025
                  </span>
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1a1a1a', letterSpacing: '-0.1504px' }}>
                    •
                  </span>
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1a1a1a', letterSpacing: '-0.1504px' }}>
                    8 min läsning
                  </span>
                </div>

                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1a1a1a', lineHeight: '1.6', marginBottom: '20px', letterSpacing: '-0.3125px' }}>
                  Som styrelseledamot vet du hur viktigt det är att ha en solid underhållsplan. Vi har granskat de populäraste alternativen för 2025 – från Uplan.se och Planima till Excel – och jämfört dem utifrån användarvänlighet, funktionalitet och kostnad.
                </p>

                <Link
                  to="/blogg/basta-verktygen-for-underhallsplan-i-brf-var-stora-jamforelse-2025"
                  className="flex items-center gap-2 hover:gap-3 transition-all group"
                  style={{
                    fontFamily: 'Futura, sans-serif',
                    fontSize: '14px',
                    fontWeight: 600,
                    color: '#C6B080',
                    letterSpacing: '1px'
                  }}
                >
                  LÄS HELA JÄMFÖRELSEN
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Guides Section */}
      <section className="py-24" aria-labelledby="guides-heading">
        <div className="container mx-auto px-4 lg:px-[92px]">
          <div className="text-center mb-16">
            <h2 
              id="guides-heading"
              style={{ 
                fontFamily: 'Futura, sans-serif', 
                fontSize: 'clamp(28px, 4vw, 42px)', 
                fontWeight: 700, 
                color: '#C6B080',
                letterSpacing: '2px',
                marginBottom: '12px'
              }}
            >
              POPULÄRA GUIDER
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px', color: '#1a1a1a', letterSpacing: '-0.4395px' }}>
              De mest använda guiderna – perfekt att börja med
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {popularGuides.map((guide, index) => {
              const getCategoryColor = (category: string) => {
                const colors: { [key: string]: string } = {
                  'EKONOMI': '#B89665',
                  'UNDERHÅLL': '#9A6D54',
                  'JURIDIK': '#9B9661',
                  'STYRELSE': '#A88F66'
                };
                return colors[category] || '#B89665';
              };
              
              const categoryColor = getCategoryColor(guide.category);
              
              return (
              <article 
                key={index} 
                className="bg-white p-8 rounded-lg border-2 border-[#e4dbdb] hover:border-[#C6B080] hover:shadow-xl transition-all cursor-pointer group focus-within:border-[#C6B080] focus-within:ring-4 focus-within:ring-[#C6B080] focus-within:ring-opacity-20 flex flex-col"
                tabIndex={0}
                role="button"
                aria-label={`Läs mer om ${guide.title}`}
              >
                <div className="flex-grow">
                  <div className="rounded-full px-3 py-1.5 inline-flex items-center mb-4 transition-all hover:scale-105 hover:shadow-md" style={{ border: `2px solid ${categoryColor}` }}>
                    <span style={{ fontFamily: 'Futura, sans-serif', fontSize: '11px', fontWeight: 600, color: categoryColor, letterSpacing: '1.5px', textTransform: 'uppercase' }}>
                      {guide.category}
                    </span>
                  </div>
                  <h3 style={{ 
                    fontFamily: 'Futura, sans-serif', 
                    fontSize: 'clamp(18px, 2vw, 22px)', 
                    fontWeight: 700, 
                    color: '#C6B080',
                    marginBottom: '16px',
                    lineHeight: '1.3'
                  }}>
                    {guide.title}
                  </h3>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', color: '#1a1a1a', lineHeight: '1.6', letterSpacing: '-0.2344px', marginBottom: '20px' }}>
                    {guide.description}
                  </p>
                </div>
                <div className="flex items-center gap-2 mt-auto">
                  <span style={{ fontFamily: 'Futura, sans-serif', fontSize: '14px', fontWeight: 600, color: '#C6B080', letterSpacing: '1px' }}>
                    LÄS MER
                  </span>
                  <ArrowRight className="w-4 h-4 text-[#C6B080] group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </div>
              </article>
            );
            })}
          </div>

          <div className="text-center">
            <Link
              to="/guider"
              className="min-h-[48px] bg-[#C6B080] hover:bg-[#3F4733] text-white px-8 py-4 rounded-lg transition-all focus:outline-none focus:ring-4 focus:ring-[#C6B080] focus:ring-opacity-50 hover:shadow-xl"
              style={{ 
                fontFamily: 'Futura, sans-serif',
                fontSize: '18px',
                fontWeight: 500,
                letterSpacing: '2px'
              }}
              aria-label="Se alla guider"
            >
              SE ALLA GUIDER
            </Link>
          </div>
        </div>
      </section>

      {/* Spacer */}
      <div className="h-20" aria-hidden="true"></div>

      {/* Knowledge Section with Image */}
      <section className="bg-[#f9f9f4] py-24" aria-labelledby="knowledge-heading">
        <div className="container mx-auto px-4 lg:px-[92px]">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="relative rounded-lg overflow-hidden border-2 border-[#e4dbdb] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]">
                <img
                  src={residentialAreaImage}
                  alt="Välskötta bostadsrättsförening med parkering och grönområden"
                  className="w-full h-[500px] object-cover"
                  loading="lazy"
                />
                {/* Yellow corner accent */}
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#C6B080]" aria-hidden="true"></div>
              </div>
            </div>

            {/* Text */}
            <div className="space-y-6">
              <h2 
                id="knowledge-heading"
                style={{ 
                  fontFamily: 'Futura, sans-serif', 
                  fontSize: 'clamp(28px, 3vw, 38px)', 
                  fontWeight: 700, 
                  color: '#C6B080',
                  lineHeight: '1.5',
                  letterSpacing: '1px'
                }}
              >
                KUNSKAP GER TRYGGARE BESLUT
              </h2>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px', color: '#1a1a1a', lineHeight: '1.6', letterSpacing: '-0.4395px' }}>
                Som styrelseledamot i en bostadsrättsförening fattar ni beslut som påverkar både medlemmarnas ekonomi och deras vardag. Det handlar om underhåll, avgifter, renoveringar och långsiktig planering.
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px', color: '#1a1a1a', lineHeight: '1.6', letterSpacing: '-0.4395px' }}>
                Med rätt kunskap blir det enklare att navigera genom utmaningarna. Våra guider ger er konkreta svar på vanliga frågor – från hur ni bygger en budget till vad som gäller enligt lagen.
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1a1a1a', lineHeight: '1.6', letterSpacing: '-0.3125px' }}>
                Allt material är skrivet för att vara lättbegripligt och användbart, även för er utan tidigare erfarenhet av ekonomi eller förvaltning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer */}
      <div className="h-20" aria-hidden="true"></div>

      {/* Tools and Resources Section */}
      <section className="bg-[#f9f9f4] py-24" aria-labelledby="tools-heading">
        <div className="container mx-auto px-4 lg:px-[92px]">
          <div className="text-center mb-16">
            <h2 
              id="tools-heading"
              style={{ 
                fontFamily: 'Futura, sans-serif', 
                fontSize: 'clamp(28px, 4vw, 42px)', 
                fontWeight: 700, 
                color: '#C6B080',
                letterSpacing: '2px',
                marginBottom: '24px'
              }}
            >
              DIGITALA VERKTYG OCH RESURSER
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px', color: '#1a1a1a', letterSpacing: '-0.4395px' }}>
              Förutom våra guider finns det digitala verktyg som förenklar styrelsearbetet. Här är några som används av BRF-styrelser runt om i Sverige – för planering, kommunikation och juridiskt stöd.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Budget och planering */}
            <article className="bg-white p-8 rounded-lg border-2 border-[#e4dbdb] hover:border-[#C6B080] hover:shadow-xl transition-all flex flex-col">
              <div className="flex-grow">
                <div className="w-12 h-12 rounded-lg bg-[#C6B080] flex items-center justify-center mb-6" aria-hidden="true">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 style={{ fontFamily: 'Futura, sans-serif', fontSize: '22px', fontWeight: 700, color: '#C6B080', marginBottom: '12px', minHeight: '56px' }}>
                  Budget och planering
                </h3>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', color: '#1a1a1a', lineHeight: '1.6', letterSpacing: '-0.2344px', marginBottom: '24px', minHeight: '72px' }}>
                  Verktyg för att hantera budget, ekonomi och underhållsplanering digitalt.
                </p>
              </div>
              <nav aria-label="Budget och planering länkar" className="mt-auto">
                <ul className="space-y-3">
                  <li>
                    <a 
                      href="https://uplan.se" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-2 group focus:outline-none focus:underline"
                    >
                      <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', color: '#414141', letterSpacing: '-0.2344px' }} className="group-hover:text-[#C6B080]">Uplan.se</span>
                      <ExternalLink className="w-4 h-4 text-[#414141]" aria-hidden="true" />
                      <span className="sr-only">(öppnas i ny flik)</span>
                    </a>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1a1a1a', letterSpacing: '-0.0762px', marginTop: '4px' }}>
                      Specialiserat för BRF:er – digital underhållsplan och budgetöversikt.
                    </p>
                  </li>
                  <li>
                    <a 
                      href="https://planima.se" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-2 group focus:outline-none focus:underline"
                    >
                      <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', color: '#414141', letterSpacing: '-0.2344px' }} className="group-hover:text-[#C6B080]">Planima.se</span>
                      <ExternalLink className="w-4 h-4 text-[#414141]" aria-hidden="true" />
                      <span className="sr-only">(öppnas i ny flik)</span>
                    </a>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1a1a1a', letterSpacing: '-0.0762px', marginTop: '4px' }}>
                      Populärt alternativ för tekniska förvaltare och konsulter.
                    </p>
                  </li>
                </ul>
              </nav>
            </article>

            {/* Kommunikation */}
            <article className="bg-white p-8 rounded-lg border-2 border-[#e4dbdb] hover:border-[#C6B080] hover:shadow-xl transition-all flex flex-col">
              <div className="flex-grow">
                <div className="w-12 h-12 rounded-lg bg-[#C6B080] flex items-center justify-center mb-6" aria-hidden="true">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
                <h3 style={{ fontFamily: 'Futura, sans-serif', fontSize: '22px', fontWeight: 700, color: '#C6B080', marginBottom: '12px', minHeight: '56px' }}>
                  Kommunikation
                </h3>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', color: '#1a1a1a', lineHeight: '1.6', letterSpacing: '-0.2344px', marginBottom: '24px', minHeight: '72px' }}>
                  Verktyg som förenklar kommunikationen mellan styrelse och medlemmar.
                </p>
              </div>
              <nav aria-label="Kommunikation länkar" className="mt-auto">
                <ul className="space-y-3">
                  <li>
                    <a 
                      href="https://boappa.se" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-2 group focus:outline-none focus:underline"
                    >
                      <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', color: '#414141', letterSpacing: '-0.2344px' }} className="group-hover:text-[#C6B080]">Boappa</span>
                      <ExternalLink className="w-4 h-4 text-[#414141]" aria-hidden="true" />
                      <span className="sr-only">(öppnas i ny flik)</span>
                    </a>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1a1a1a', letterSpacing: '-0.0762px', marginTop: '4px' }}>
                      App för kommunikation, bokningar och aviseringar i bostadsrättsföreningar.
                    </p>
                  </li>
                  <li>
                    <a 
                      href="https://simpleko.se" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-2 group focus:outline-none focus:underline"
                    >
                      <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', color: '#414141', letterSpacing: '-0.2344px' }} className="group-hover:text-[#C6B080]">Simpleko</span>
                      <ExternalLink className="w-4 h-4 text-[#414141]" aria-hidden="true" />
                      <span className="sr-only">(öppnas i ny flik)</span>
                    </a>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1a1a1a', letterSpacing: '-0.0762px', marginTop: '4px' }}>
                      För medlemshantering, avisering och ekonomisk förvaltning.
                    </p>
                  </li>
                  <li>
                    <a 
                      href="https://workspace.google.com" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-2 group focus:outline-none focus:underline"
                    >
                      <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', color: '#414141', letterSpacing: '-0.2344px' }} className="group-hover:text-[#C6B080]">Google Workspace</span>
                      <ExternalLink className="w-4 h-4 text-[#414141]" aria-hidden="true" />
                      <span className="sr-only">(öppnas i ny flik)</span>
                    </a>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1a1a1a', letterSpacing: '-0.0762px', marginTop: '4px' }}>
                      För intern styrelsesamverkan, dokument och kalenderhantering.
                    </p>
                  </li>
                </ul>
              </nav>
            </article>

            {/* Juridik och dokument */}
            <article className="bg-white p-8 rounded-lg border-2 border-[#e4dbdb] hover:border-[#C6B080] hover:shadow-xl transition-all flex flex-col">
              <div className="flex-grow">
                <div className="w-12 h-12 rounded-lg bg-[#C6B080] flex items-center justify-center mb-6" aria-hidden="true">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 style={{ fontFamily: 'Futura, sans-serif', fontSize: '22px', fontWeight: 700, color: '#C6B080', marginBottom: '12px', minHeight: '56px' }}>
                  Juridik och dokument
                </h3>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', color: '#1a1a1a', lineHeight: '1.6', letterSpacing: '-0.2344px', marginBottom: '24px', minHeight: '72px' }}>
                  Resurser och verktyg för juridisk vägledning, avtal och dokumenthantering.
                </p>
              </div>
              <nav aria-label="Juridik och dokument länkar" className="mt-auto">
                <ul className="space-y-3">
                  <li>
                    <a 
                      href="https://www.bostadsratterna.se" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-2 group focus:outline-none focus:underline"
                    >
                      <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', color: '#414141', letterSpacing: '-0.2344px' }} className="group-hover:text-[#C6B080]">Bostadsrätterna</span>
                      <ExternalLink className="w-4 h-4 text-[#414141]" aria-hidden="true" />
                      <span className="sr-only">(öppnas i ny flik)</span>
                    </a>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1a1a1a', letterSpacing: '-0.0762px', marginTop: '4px' }}>
                      Rådgivning, mallar och juridisk hjälp för bostadsrättsföreningar.
                    </p>
                  </li>
                  <li>
                    <a 
                      href="https://www.sbr.se" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-2 group focus:outline-none focus:underline"
                    >
                      <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', color: '#414141', letterSpacing: '-0.2344px' }} className="group-hover:text-[#C6B080]">SBC</span>
                      <ExternalLink className="w-4 h-4 text-[#414141]" aria-hidden="true" />
                      <span className="sr-only">(öppnas i ny flik)</span>
                    </a>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1a1a1a', letterSpacing: '-0.0762px', marginTop: '4px' }}>
                      Erbjuder juridiskt stöd, avtal och förvaltningshjälp för BRF:er.
                    </p>
                  </li>
                  <li>
                    <a 
                      href="https://www.bolagsverket.se" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-2 group focus:outline-none focus:underline"
                    >
                      <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', color: '#414141', letterSpacing: '-0.2344px' }} className="group-hover:text-[#C6B080]">Bolagsverket</span>
                      <ExternalLink className="w-4 h-4 text-[#414141]" aria-hidden="true" />
                      <span className="sr-only">(öppnas i ny flik)</span>
                    </a>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1a1a1a', letterSpacing: '-0.0762px', marginTop: '4px' }}>
                      Registrering av styrelse, stadgar och årsredovisning.
                    </p>
                  </li>
                </ul>
              </nav>
            </article>
          </div>
        </div>
      </section>

      {/* Spacer */}
      <div className="h-20" aria-hidden="true"></div>

      {/* Long-term Planning Section */}
      <section className="py-24" aria-labelledby="planning-heading">
        <div className="container mx-auto px-4 lg:px-[92px]">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div className="space-y-6">
              <h2 
                id="planning-heading"
                style={{ 
                  fontFamily: 'Futura, sans-serif', 
                  fontSize: 'clamp(28px, 3vw, 38px)', 
                  fontWeight: 700, 
                  color: '#C6B080',
                  lineHeight: '1.5',
                  letterSpacing: '1px'
                }}
              >
                LÅNGSIKTIG PLANERING LÖNAR SIG
              </h2>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px', color: '#1a1a1a', lineHeight: '1.6', letterSpacing: '-0.4395px' }}>
                En genomtänkt underhållsplan är skillnaden mellan att styra proaktivt och att hela tiden släcka bränder. Med en plan vet ni vad som behöver göras när, och kan budgetera för det i god tid.
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px', color: '#1a1a1a', lineHeight: '1.6', letterSpacing: '-0.4395px' }}>
                Våra guider hjälper er att komma igång – från att inventera fastigheten till att uppskatta kostnader och prioritera rätt åtgärder.
              </p>
              <Link
                to="/guider"
                className="min-h-[48px] bg-[#C6B080] hover:opacity-90 px-8 py-4 rounded-lg transition-all focus:outline-none focus:ring-4 focus:ring-[#C6B080] focus:ring-opacity-50"
                style={{ 
                  fontFamily: 'Futura, sans-serif',
                  fontSize: '18px',
                  fontWeight: 500,
                  color: 'white',
                  letterSpacing: '2px'
                }}
                aria-label="Läs om underhåll i våra guider"
              >
                LÄS OM UNDERHÅLL
              </Link>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative rounded-lg overflow-hidden border-2 border-[#e4dbdb] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]">
                <img
                  src={apartmentBuildingImage}
                  alt="Modern bostadsrättsförening med välplanerat underhåll"
                  className="w-full h-[500px] object-cover"
                  loading="lazy"
                />
                {/* Grey corner accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#a2a2a2]" aria-hidden="true"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer */}
      <div className="h-20" aria-hidden="true"></div>

      {/* Challenges Section */}
      <section className="bg-[#f9f9f4] py-24" aria-labelledby="challenges-heading">
        <div className="container mx-auto px-4 lg:px-[92px]">
          <div className="text-center mb-16">
            <h2 
              id="challenges-heading"
              style={{ 
                fontFamily: 'Futura, sans-serif', 
                fontSize: 'clamp(28px, 4vw, 42px)', 
                fontWeight: 700, 
                color: '#C6B080',
                letterSpacing: '2px',
                lineHeight: '1.5',
                marginBottom: '24px'
              }}
            >
              VANLIGA FRÅGOR OCH UTMANINGAR
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px', color: '#1a1a1a', lineHeight: '1.6', letterSpacing: '-0.4395px', maxWidth: '695px', margin: '0 auto' }}>
              Oavsett om det handlar om ekonomi, underhåll eller juridik – här får du svar på det som verkligen är viktigt för er förening.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {challenges.map((challenge, index) => (
              <article 
                key={index} 
                className="bg-white p-8 rounded-lg border-2 border-[#e4dbdb]"
              >
                <div className="w-2 h-2 rounded-full mb-4" style={{ backgroundColor: challenge.color }} aria-hidden="true"></div>
                <h3 style={{ 
                  fontFamily: 'Futura, sans-serif', 
                  fontSize: 'clamp(20px, 2vw, 24px)', 
                  fontWeight: 700, 
                  color: '#C6B080',
                  marginBottom: '16px',
                  lineHeight: '1.5'
                }}>
                  {challenge.title}
                </h3>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1a1a1a', lineHeight: '1.6', letterSpacing: '-0.3125px' }}>
                  {challenge.description}
                </p>
              </article>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center mt-12">
            <Link
              to="/faq"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-[#C6B080] hover:bg-[#B89665] transition-all group shadow-lg hover:shadow-xl"
              style={{
                fontFamily: 'Futura, sans-serif',
                fontSize: '16px',
                fontWeight: 600,
                color: 'white',
                letterSpacing: '1px'
              }}
              aria-label="Se alla vanliga frågor"
            >
              SE ALLA VANLIGA FRÅGOR
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
