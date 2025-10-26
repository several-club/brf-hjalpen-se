import { useState } from 'react';
import { Download, ArrowLeft, ArrowRight } from 'lucide-react';
import boardMeetingImage from 'figma:asset/3fdf683013e2b0e5a82d296eb98905331b128386.png';
import residentialAreaImage from 'figma:asset/04c1c854fcd7e64239c73e007c19a33518e72868.png';
import apartmentBuildingImage from 'figma:asset/b8c99ceb382b3b8cd41caa87fcc4c622da16f125.png';
import SEO from '@/components/SEO';


type GuideCategory = 'all' | 'economy' | 'maintenance' | 'legal' | 'board';

interface Guide {
  title: string;
  description: string;
  category: GuideCategory;
  sections: string[];
  image: string;
}

export function GuidesPage() {
  const [selectedCategory, setSelectedCategory] = useState<GuideCategory>('all');
  const [selectedGuide, setSelectedGuide] = useState<Guide | null>(null);

  const categories = [
    { id: 'all' as GuideCategory, label: 'Alla guider' },
    { id: 'economy' as GuideCategory, label: 'Ekonomi' },
    { id: 'maintenance' as GuideCategory, label: 'Underhåll' },
    { id: 'legal' as GuideCategory, label: 'Juridik' },
    { id: 'board' as GuideCategory, label: 'Styrelse' },
  ];

  const guides: Guide[] = [
    {
      title: 'Så skapar ni en årsbudget steg för steg',
      description: 'En komplett genomgång av hur man tar fram en realistisk årsbudget för bostadsrättsföreningen. Från att samla in kostnadsdata till att få budgeten godkänd på stämman. Innehåller konkreta exempel och mallar.',
      category: 'economy',
      sections: [
        'Vad är en budget och varför behöver vi en?',
        'Steg 1: Samla in underlag från tidigare år',
        'Steg 2: Uppskatta kommande kostnader',
        'Steg 3: Planera för underhåll och oförutsett',
        'Steg 4: Presentera budgeten för styrelsen',
        'Steg 5: Förankra budgeten på föreningsstämman',
        'Vanliga misstag att undvika',
        'Ladda ner budgetmall (Excel)'
      ],
      image: boardMeetingImage
    },
    {
      title: 'K3-redovisning förklarat',
      description: 'Vad K3-regelverket innebär för er bostadsrättsförening, vilka krav som ställs på årsredovisningen och hur ni praktiskt hanterar övergången. Med exempel från verkliga föreningar.',
      category: 'economy',
      sections: [
        'Vad är K3?',
        'Vilka bostadsrättsföreningar omfattas?',
        'Grundläggande principer i K3',
        'Krav på årsredovisningen',
        'Övergång till K3 – så här gör ni',
        'Vanliga utmaningar och lösningar',
        'Checklistat: Är ni K3-kompatibla?'
      ],
      image: residentialAreaImage
    },
    {
      title: 'Bygg en underhållsplan som fungerar',
      description: 'Lär er identifiera underhållsbehov, uppskatta kostnader och skapa en långsiktig plan som ger medlemmarna trygghet och förutsägbarhet. Med praktiska verktyg och mallar.',
      category: 'maintenance',
      sections: [
        'Varför behöver vi en underhållsplan?',
        'Inventera fastigheten – vad behöver underhållas?',
        'Uppskatta livslängd på olika komponenter',
        'Beräkna framtida underhållskostnader',
        'Prioritera åtgärder',
        'Avsättningar till underhållsfond',
        'Uppdatera planen regelbundet',
        'Ladda ner mall för underhållsplan'
      ],
      image: apartmentBuildingImage
    },
    {
      title: 'Hantera stora renoveringsprojekt',
      description: 'Praktisk vägledning för större renoveringar som fasadrenovering, fönsterbyte eller takbyte. Från planering och upphandling till genomförande och uppföljning.',
      category: 'maintenance',
      sections: [
        'Planering av stora projekt',
        'Besiktning och behovsanalys',
        'Upphandling av entreprenörer',
        'Finansiering och lånebehov',
        'Kommunicera med medlemmarna',
        'Uppföljning under projektet',
        'Slutbesiktning och garanti'
      ],
      image: apartmentBuildingImage
    },
    {
      title: 'Styrelsens ansvar och arbetsformer',
      description: 'En översikt över styrelsens juridiska ansvar, hur ni organiserar arbetet och vilka rutiner som underlättar det dagliga styrelsearbetet.',
      category: 'board',
      sections: [
        'Styrelsens juridiska ansvar',
        'Arbetsordning för styrelsen',
        'Rollfördelning i styrelsen',
        'Protokollföring',
        'Att förbereda styrelsesammanträden',
        'Delegering och firmateckning',
        'Vanliga juridiska fallgropar'
      ],
      image: boardMeetingImage
    },
    {
      title: 'Föreningsstämman – förberedelser och genomförande',
      description: 'Allt ni behöver veta för att förbereda och genomföra en årsstämma eller extra föreningsstämma. Från kallelse till protokoll.',
      category: 'legal',
      sections: [
        'Regler för föreningsstämman',
        'Kallelse och dagordning',
        'Handlingar som ska finnas tillgängliga',
        'Genomföra stämman',
        'Rösträtt och beslut',
        'Protokollföring',
        'Efter stämman – vad händer nu?'
      ],
      image: boardMeetingImage
    },
  ];

  const filteredGuides = selectedCategory === 'all' 
    ? guides 
    : guides.filter(guide => guide.category === selectedCategory);

  if (selectedGuide) {
    return (
      <div style={{ backgroundColor: '#fcfbf7', minHeight: '100vh' }}>
        <SEO
          title={selectedGuide.title + ' – BRF Guide'}
          description={selectedGuide.description}
          canonicalPath={'/guider'}
        />
        {/* Hero */}
        <section className="relative py-20" style={{ background: 'linear-gradient(135deg, #5C4F36 0%, #7A6849 50%, #5C4F36 100%)' }}>
          <div className="container mx-auto px-4 lg:px-[92px]">
            <button
              onClick={() => setSelectedGuide(null)}
              className="inline-flex items-center gap-2 mb-8 hover:opacity-80 transition-opacity"
              style={{ fontFamily: 'Futura, sans-serif', fontSize: '14px', color: 'white', letterSpacing: '1px' }}
            >
              <ArrowLeft className="w-5 h-5" />
              TILLBAKA TILL GUIDER
            </button>
            <h1 style={{ 
              fontFamily: 'Futura, sans-serif', 
              fontSize: '48px', 
              fontWeight: 700, 
              color: 'white',
              lineHeight: '1.2',
              letterSpacing: '1px',
              marginBottom: '24px'
            }}>
              {selectedGuide.title}
            </h1>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '20px', color: '#edf5fb', lineHeight: '1.6', maxWidth: '800px', letterSpacing: '-0.4492px' }}>
              {selectedGuide.description}
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-[92px]">
            <div className="max-w-4xl mx-auto">
              {/* Featured image */}
              <div className="mb-16 rounded-lg overflow-hidden border-2 border-[#e4dbdb] shadow-xl">
                <img
                  src={selectedGuide.image}
                  alt={selectedGuide.title}
                  className="w-full h-96 object-cover"
                />
              </div>

              {/* Sections */}
              <div className="space-y-6">
                {selectedGuide.sections.map((section, index) => (
                  <div key={index} className="bg-white p-8 rounded-lg border-2 border-[#e4dbdb]">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-2 h-2 rounded-full mt-2" style={{ backgroundColor: index % 2 === 0 ? '#C6B080' : '#a2a2a2' }}></div>
                      <div className="flex-1">
                        <h3 style={{ fontFamily: 'Futura, sans-serif', fontSize: '22px', fontWeight: 700, color: '#C6B080', marginBottom: '12px' }}>
                          {section}
                        </h3>
                        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#1a1a1a', lineHeight: '1.6', letterSpacing: '-0.3125px' }}>
                          Här kommer detaljerad information om {section.toLowerCase()}. Detta är exempeltext som visar hur guiderna är strukturerade med tydliga rubriker och läsbar text.
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Download button */}
              <div className="mt-12 text-center">
                <button className="inline-flex items-center gap-3 bg-[#C6B080] hover:opacity-90 px-8 py-4 rounded transition-all" style={{ 
                  fontFamily: 'Futura, sans-serif',
                  fontSize: '16px',
                  fontWeight: 500,
                  color: 'white',
                  letterSpacing: '1.5px'
                }}>
                  <Download className="w-5 h-5" />
                  LADDA NER SOM PDF
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: '#fcfbf7', minHeight: '100vh' }}>
      <SEO
        title="Guider och mallar – BRF Guide"
        description="Steg-för-steg guider för BRF‑styrelser inom ekonomi, underhåll, juridik och styrelsearbete."
        canonicalPath="/guider"
      />
      {/* Hero */}
      <section className="relative py-20" style={{ background: 'linear-gradient(135deg, #5C4F36 0%, #7A6849 50%, #5C4F36 100%)' }}>
        <div className="container mx-auto px-4 lg:px-[92px]">
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
              GUIDER OCH MALLAR
            </h1>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '20px', color: '#edf5fb', lineHeight: '1.6', letterSpacing: '-0.4492px' }}>
              Steg-för-steg vägledning i styrelsefrågor. Alla guider är kostnadsfria att läsa och ladda ner.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-[#f9f9f4] border-b-2 border-[#e4dbdb]">
        <div className="container mx-auto px-4 lg:px-[92px]">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className="px-6 py-3 rounded transition-all"
                style={{
                  backgroundColor: selectedCategory === category.id ? '#C6B080' : 'transparent',
                  color: selectedCategory === category.id ? 'white' : '#C6B080',
                  border: '2px solid',
                  borderColor: selectedCategory === category.id ? '#C6B080' : '#e4dbdb',
                  fontFamily: 'Futura, sans-serif',
                  fontSize: '15px',
                  fontWeight: 600,
                  letterSpacing: '1px'
                }}
              >
                {category.label.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-[92px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {filteredGuides.map((guide, index) => (
              <div
                key={index}
                className="bg-white rounded-lg border-2 border-[#e4dbdb] overflow-hidden hover:border-[#C6B080] hover:shadow-xl transition-all cursor-pointer group"
                onClick={() => setSelectedGuide(guide)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={guide.image}
                    alt={guide.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  {/* Category badge */}
                  <div className="absolute top-4 left-4 bg-[#f9f9f4] px-4 py-2 rounded">
                    <span style={{ fontFamily: 'Futura, sans-serif', fontSize: '12px', fontWeight: 600, color: '#C6B080', letterSpacing: '1px' }}>
                      {categories.find(c => c.id === guide.category)?.label.toUpperCase()}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 style={{ 
                    fontFamily: 'Futura, sans-serif', 
                    fontSize: '20px', 
                    fontWeight: 700, 
                    color: '#C6B080',
                    marginBottom: '12px',
                    lineHeight: '1.3'
                  }}>
                    {guide.title}
                  </h3>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1a1a1a', lineHeight: '1.6', marginBottom: '16px', letterSpacing: '-0.1504px' }}>
                    {guide.description.substring(0, 120)}...
                  </p>
                  <div className="flex items-center gap-2">
                    <span style={{ fontFamily: 'Futura, sans-serif', fontSize: '13px', fontWeight: 600, color: '#C6B080', letterSpacing: '1px' }}>
                      LÄS MER
                    </span>
                    <ArrowRight className="w-4 h-4 text-[#C6B080] group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
