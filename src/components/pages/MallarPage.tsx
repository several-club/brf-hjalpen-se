import { useMemo, useState } from 'react';
import { Download, Search, Filter } from 'lucide-react';
import SEO from '@/components/SEO';
import { mallar, type MallItem, type MallCategory } from '@/data/mallar';

export function MallarPage() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<MallCategory | 'all'>('all');

  const categories: Array<{ id: MallCategory | 'all'; label: string }> = [
    { id: 'all', label: 'Alla' },
    { id: 'Ekonomi', label: 'Ekonomi' },
    { id: 'Underhåll', label: 'Underhåll' },
    { id: 'Juridik', label: 'Juridik' },
    { id: 'Styrelse', label: 'Styrelse' },
    { id: 'Formulär', label: 'Formulär' },
  ];

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return mallar.filter((m) => {
      const matchCat = category === 'all' || m.category === category;
      const hay = `${m.title} ${m.description}`.toLowerCase();
      const matchQ = !q || hay.includes(q);
      return matchCat && matchQ;
    });
  }, [query, category]);

  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: filtered.map((m, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: m.title,
      url: `/mallar/${m.filename}`,
    })),
  } as const;

  return (
    <div style={{ backgroundColor: '#fcfbf7', minHeight: '100vh' }}>
      <SEO
        title="Mallar – nedladdningsbara PDF:er för BRF"
        description="Gratis mallar för BRF: kallelser, protokoll, checklistor och blanketter som PDF."
        canonicalPath="/mallar"
        type="website"
        jsonLd={[
          {
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Mallar',
            mainEntity: itemList,
          },
          itemList,
        ]}
      />

      {/* Hero */}
      <section className="relative py-20" style={{ background: 'linear-gradient(135deg, #5C4F36 0%, #7A6849 50%, #5C4F36 100%)' }}>
        <div className="container mx-auto px-4 lg:px-[92px]">
          <div className="max-w-4xl mx-auto text-center">
            <h1 style={{ fontFamily: 'Futura, sans-serif', fontSize: '56px', fontWeight: 800, color: 'white', lineHeight: '1.1', letterSpacing: '3px', marginBottom: '24px' }}>
              MALLAR
            </h1>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '20px', color: '#edf5fb', lineHeight: '1.6', letterSpacing: '-0.4492px' }}>
              Gratis mallar för kallelser, protokoll, checklistor och blanketter – klara att ladda ner som PDF.
            </p>
          </div>
        </div>
      </section>

      {/* Controls */}
      <section className="py-8 bg-[#f9f9f4] border-b-2 border-[#e4dbdb]">
        <div className="container mx-auto px-4 lg:px-[92px]">
          <div className="flex flex-col md:flex-row gap-4 items-stretch">
            <div className="flex-1 inline-flex items-center gap-3 bg-white border-2 border-[#e4dbdb] rounded-lg px-4">
              <Search className="w-5 h-5 text-[#7A6849]" />
              <input
                type="text"
                placeholder="Sök mall (t.ex. protokoll, budget, stämma)"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="flex-1 py-3 outline-none"
                style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px' }}
              />
            </div>
            <div className="inline-flex items-center gap-3 bg-white border-2 border-[#e4dbdb] rounded-lg px-4">
              <Filter className="w-5 h-5 text-[#7A6849]" />
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as MallCategory | 'all')}
                className="py-3 bg-transparent outline-none"
                style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px' }}
              >
                {categories.map((c) => (
                  <option key={c.id} value={c.id}>{c.label}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-[92px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {filtered.map((m: MallItem) => (
              <article key={m.slug} className="bg-white rounded-lg border-2 border-[#e4dbdb] overflow-hidden hover:border-[#C6B080] hover:shadow-xl transition-all group">
                <div className="p-6">
                  <div className="mb-2">
                    <span className="px-3 py-1 rounded-full bg-[#f9f9f4] border-2 border-[#e4dbdb]"
                      style={{ fontFamily: 'Futura, sans-serif', fontSize: '11px', fontWeight: 600, color: '#7A6849', letterSpacing: '1px' }}>
                      {m.category.toUpperCase()}
                    </span>
                  </div>
                  <h3 style={{ fontFamily: 'Futura, sans-serif', fontSize: '22px', fontWeight: 700, color: '#C6B080', marginBottom: '12px', lineHeight: '1.3' }}>{m.title}</h3>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', color: '#1a1a1a', lineHeight: '1.6', letterSpacing: '-0.2344px' }}>{m.description}</p>
                </div>
                <div className="px-6 pb-6">
                  <a
                    href={`/mallar/${m.filename}`}
                    download
                    className="inline-flex items-center gap-2 px-4 py-2 rounded bg-[#C6B080] text-white hover:opacity-90 transition"
                    style={{ fontFamily: 'Futura, sans-serif', fontSize: '14px', fontWeight: 600, letterSpacing: '1px' }}
                  >
                    <Download className="w-4 h-4" />
                    LADDA NER PDF
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default MallarPage;


