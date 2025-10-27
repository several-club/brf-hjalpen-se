import { useState } from 'react';
import * as React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, ArrowLeft } from 'lucide-react';
import SEO from '@/components/SEO';
import { blogPosts, getPostBySlug, type BlogPost } from '@/data/blog';
import ComparisonPost2025 from './ComparisonPost2025';

interface BlogPageProps {}

export function BlogPage({}: BlogPageProps = {}) {
  const params = useParams();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  React.useEffect(() => {
    const slug = params.slug;
    if (slug) {
      const post = getPostBySlug(slug);
      setSelectedPost(post ?? null);
    } else {
      setSelectedPost(null);
    }
  }, [params.slug]);

  const categories = ['all', 'Ekonomi', 'Underhåll', 'Juridik', 'Styrelse', 'Miljö'];

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  // If a post is selected, show detail view
  if (selectedPost) {
    // Special layout for the 2025 comparison post
    if (selectedPost.slug === 'basta-verktygen-for-underhallsplan-i-brf-var-stora-jamforelse-2025') {
      return <ComparisonPost2025 post={selectedPost} />;
    }
    return (
      <div style={{ backgroundColor: '#fcfbf7', minHeight: '100vh' }}>
        <SEO
          title={selectedPost.metaTitle || selectedPost.title}
          description={selectedPost.metaDescription || selectedPost.excerpt}
          canonicalPath={`/blogg/${selectedPost.slug}`}
          type="article"
          image={selectedPost.ogImage || selectedPost.image}
          jsonLd={{
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: selectedPost.title,
            datePublished: selectedPost.date,
            image: selectedPost.image,
            author: { '@type': 'Organization', name: 'BRF Guide' },
            inLanguage: 'sv-SE'
          }}
        />
        {/* Back button */}
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
                letterSpacing: '1px'
              }}
            >
              <ArrowLeft className="w-5 h-5" />
              TILLBAKA TILL ALLA INLÄGG
            </Link>
          </div>
        </section>

        {/* Post hero */}
        <section className="relative py-16" style={{ background: 'linear-gradient(135deg, #5C4F36 0%, #7A6849 50%, #5C4F36 100%)' }}>
          <div className="container mx-auto px-4 lg:px-[92px]">
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex px-4 py-2 rounded-full mb-6" style={{
                backgroundColor: 'white',
                border: `2px solid ${
                  selectedPost.category === 'Ekonomi' ? '#B89665' :
                  selectedPost.category === 'Underhåll' ? '#9A6D54' :
                  selectedPost.category === 'Juridik' ? '#9B9661' :
                  selectedPost.category === 'Styrelse' ? '#A88F66' : '#B89665'
                }`
              }}>
                <span style={{ 
                  fontFamily: 'Futura, sans-serif', 
                  fontSize: '12px', 
                  fontWeight: 600, 
                  color: selectedPost.category === 'Ekonomi' ? '#B89665' :
                         selectedPost.category === 'Underhåll' ? '#9A6D54' :
                         selectedPost.category === 'Juridik' ? '#9B9661' :
                         selectedPost.category === 'Styrelse' ? '#A88F66' : '#B89665',
                  letterSpacing: '1px' 
                }}>
                  {selectedPost.category.toUpperCase()}
                </span>
              </div>
              
              <h1 style={{ 
                fontFamily: 'Futura, sans-serif', 
                fontSize: '48px', 
                fontWeight: 800, 
                color: 'white',
                lineHeight: '1.2',
                letterSpacing: '1px',
                marginBottom: '16px'
              }}>
                {selectedPost.title}
              </h1>
              
              <div className="flex items-center gap-6 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-[#C6B080]" />
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#edf5fb', letterSpacing: '-0.3125px' }}>
                    {new Date(selectedPost.date).toLocaleDateString('sv-SE', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-[#C6B080]" />
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#edf5fb', letterSpacing: '-0.3125px' }}>
                    {selectedPost.readTime}
                  </span>
                </div>
              </div>
              
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '20px', color: '#edf5fb', lineHeight: '1.6', letterSpacing: '-0.4492px' }}>
                {selectedPost.excerpt}
              </p>
            </div>
          </div>
        </section>

        {/* Post content */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-[92px]">
            <div className="max-w-4xl mx-auto">
              {/* Featured image */}
              <div className="mb-16 rounded-lg overflow-hidden border-2 border-[#e4dbdb] shadow-xl">
                <img
                  src={selectedPost.image}
                  alt={selectedPost.title}
                  className="w-full h-96 object-cover"
                  loading="eager"
                />
              </div>

              {/* Article content */}
              <div className="prose prose-lg max-w-none space-y-6">
                {selectedPost.content && selectedPost.content.length > 0 ? (
                  selectedPost.content.map((paragraph, index) => {
                    // Check if it's a heading
                    if (paragraph.startsWith('## ')) {
                      return (
                        <h2 
                          key={index}
                          style={{ 
                            fontFamily: 'Futura, sans-serif', 
                            fontSize: '32px', 
                            fontWeight: 700, 
                            color: '#C6B080', 
                            marginTop: '32px',
                            marginBottom: '16px',
                            letterSpacing: '0.5px'
                          }}
                        >
                          {paragraph.replace('## ', '')}
                        </h2>
                      );
                    }
                    
                    if (paragraph.startsWith('### ')) {
                      return (
                        <h3 
                          key={index}
                          style={{ 
                            fontFamily: 'Futura, sans-serif', 
                            fontSize: '24px', 
                            fontWeight: 700, 
                            color: '#3F4733', 
                            marginTop: '24px',
                            marginBottom: '12px'
                          }}
                        >
                          {paragraph.replace('### ', '')}
                        </h3>
                      );
                    }
                    
                    // Check if it's a list item
                    if (paragraph.startsWith('- ')) {
                      return (
                        <div key={index} className="bg-white p-6 rounded-lg border-2 border-[#e4dbdb] mb-4">
                          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '17px', color: '#1a1a1a', lineHeight: '1.7', letterSpacing: '-0.3125px' }}>
                            {paragraph.replace('- ', '• ')}
                          </p>
                        </div>
                      );
                    }
                    
                    // Regular paragraph
                    return (
                      <div key={index} className="bg-white p-8 rounded-lg border-2 border-[#e4dbdb]">
                        <p 
                          style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px', color: '#1a1a1a', lineHeight: '1.8', letterSpacing: '-0.4395px' }}
                          dangerouslySetInnerHTML={{ 
                            __html: paragraph
                              .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                              .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" style="color: #C6B080; text-decoration: underline;" target="_blank" rel="noopener noreferrer">$1</a>')
                          }}
                        />
                      </div>
                    );
                  })
                ) : (
                  <>
                    <div className="bg-white p-8 rounded-lg border-2 border-[#e4dbdb] mb-6">
                      <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px', color: '#1a1a1a', lineHeight: '1.8', letterSpacing: '-0.4395px' }}>
                        Detta är ett exempel på en bloggpost. I en verklig implementation skulle innehållet hämtas från en databas eller CMS. Artikeln skulle innehålla detaljerad information om {selectedPost.title.toLowerCase()}.
                      </p>
                    </div>

                    <div className="bg-white p-8 rounded-lg border-2 border-[#e4dbdb] mb-6">
                      <h2 style={{ fontFamily: 'Futura, sans-serif', fontSize: '28px', fontWeight: 700, color: '#C6B080', marginBottom: '16px' }}>
                        Bakgrund och kontext
                      </h2>
                      <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px', color: '#1a1a1a', lineHeight: '1.8', letterSpacing: '-0.4395px' }}>
                        Här skulle det finnas utförlig bakgrundsinformation och kontext kring ämnet. Texten skulle vara välstrukturerad och lätt att följa, med tydliga rubriker och styckeindelning.
                      </p>
                    </div>

                    <div className="bg-white p-8 rounded-lg border-2 border-[#e4dbdb] mb-6">
                      <h2 style={{ fontFamily: 'Futura, sans-serif', fontSize: '28px', fontWeight: 700, color: '#C6B080', marginBottom: '16px' }}>
                        Praktiska råd
                      </h2>
                      <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px', color: '#1a1a1a', lineHeight: '1.8', letterSpacing: '-0.4395px' }}>
                        Denna sektion skulle innehålla konkreta och praktiska råd som styrelser direkt kan tillämpa i sin verksamhet. Tips och best practices från erfarna styrelsemedlemmar.
                      </p>
                    </div>

                    <div className="bg-white p-8 rounded-lg border-2 border-[#e4dbdb]">
                      <h2 style={{ fontFamily: 'Futura, sans-serif', fontSize: '28px', fontWeight: 700, color: '#C6B080', marginBottom: '16px' }}>
                        Sammanfattning
                      </h2>
                      <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px', color: '#1a1a1a', lineHeight: '1.8', letterSpacing: '-0.4395px' }}>
                        En sammanfattning av artikelns viktigaste punkter och slutsatser. Detta hjälper läsaren att snabbt få en överblick över innehållet.
                      </p>
                    </div>
                  </>
                )}
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
        title="Blogg och nyheter – BRF Guide"
        description="Aktuella artiklar om styrelsefrågor, ekonomi och underhåll för BRF‑styrelser."
        canonicalPath="/blogg"
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
              BLOGG OCH NYHETER
            </h1>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '20px', color: '#edf5fb', lineHeight: '1.6', letterSpacing: '-0.4492px' }}>
              Aktuella artiklar om styrelsefrågor, ekonomi och regelverksförändringar
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
                {category === 'all' ? 'ALLA INLÄGG' : category.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-[92px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {filteredPosts.map((post, index) => (
              <article
                key={index}
                onClick={() => setSelectedPost(post)}
                className="bg-white rounded-lg border-2 border-[#e4dbdb] overflow-hidden hover:border-[#C6B080] hover:shadow-xl transition-all cursor-pointer group"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Category badge */}
                  <div className="absolute top-4 left-4 px-4 py-2 rounded-full" style={{
                    backgroundColor: 'white',
                    border: `2px solid ${
                      post.category === 'Ekonomi' ? '#B89665' :
                      post.category === 'Underhåll' ? '#9A6D54' :
                      post.category === 'Juridik' ? '#9B9661' :
                      post.category === 'Styrelse' ? '#A88F66' : '#B89665'
                    }`
                  }}>
                    <span style={{ 
                      fontFamily: 'Futura, sans-serif', 
                      fontSize: '12px', 
                      fontWeight: 600, 
                      color: post.category === 'Ekonomi' ? '#B89665' :
                             post.category === 'Underhåll' ? '#9A6D54' :
                             post.category === 'Juridik' ? '#9B9661' :
                             post.category === 'Styrelse' ? '#A88F66' : '#B89665',
                      letterSpacing: '1px' 
                    }}>
                      {post.category.toUpperCase()}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  {/* Meta */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-[#C6B080]" />
                      <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1a1a1a', letterSpacing: '-0.0762px' }}>
                        {new Date(post.date).toLocaleDateString('sv-SE', { year: 'numeric', month: 'long', day: 'numeric' })}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#C6B080]" />
                      <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1a1a1a', letterSpacing: '-0.0762px' }}>
                        {post.readTime}
                      </span>
                    </div>
                  </div>

                  <h3 style={{ 
                    fontFamily: 'Futura, sans-serif', 
                    fontSize: '22px', 
                    fontWeight: 700, 
                    color: '#C6B080',
                    marginBottom: '12px',
                    lineHeight: '1.3'
                  }}>
                    {post.title}
                  </h3>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', color: '#1a1a1a', lineHeight: '1.6', marginBottom: '16px', letterSpacing: '-0.2344px' }}>
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-2">
                    <span style={{ fontFamily: 'Futura, sans-serif', fontSize: '13px', fontWeight: 600, color: '#C6B080', letterSpacing: '1px' }}>
                      LÄS MER
                    </span>
                    <ArrowRight className="w-4 h-4 text-[#C6B080] group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
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
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px', color: '#1a1a1a', lineHeight: '1.6', marginBottom: '32px', letterSpacing: '-0.4395px', maxWidth: '480px', marginLeft: 'auto', marginRight: 'auto' }}>
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
