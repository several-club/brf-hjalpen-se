export type MallCategory = 'Ekonomi' | 'Underhåll' | 'Juridik' | 'Styrelse' | 'Formulär';

export interface MallItem {
  slug: string;
  title: string;
  description: string;
  category: MallCategory;
  filename: string; // relative to /mallar in public
}

export const mallar: MallItem[] = [
  {
    slug: 'kallelse-arsstamma',
    title: 'Kallelse till årsstämma',
    description: 'Standardiserad kallelse till ordinarie föreningsstämma enligt stadgarna.',
    category: 'Juridik',
    filename: 'kallelse-arsstamma.pdf',
  },
  {
    slug: 'protokoll-arsstamma',
    title: 'Protokoll årsstämma',
    description: 'Mall för protokollföring av årsstämma med justeringsmän och beslut.',
    category: 'Juridik',
    filename: 'protokoll-arsstamma.pdf',
  },
  {
    slug: 'fullmakt-stamma',
    title: 'Fullmakt till stämma',
    description: 'Fullmaktsblankett för medlem som företräds av ombud på stämma.',
    category: 'Juridik',
    filename: 'fullmakt-stamma.pdf',
  },
  {
    slug: 'protokoll-styrelsemote',
    title: 'Protokoll styrelsemöte',
    description: 'Strukturerad mall för styrelsemötesprotokoll inklusive beslutsuppföljning.',
    category: 'Styrelse',
    filename: 'protokoll-styrelsemote.pdf',
  },
  {
    slug: 'budgetmall-checklista',
    title: 'Budgetmall – checklista',
    description: 'Checklista för årsbudget: intäkter, kostnader, underhåll och buffert.',
    category: 'Ekonomi',
    filename: 'budgetmall-checklista.pdf',
  },
  {
    slug: 'underhallsplan-checklista',
    title: 'Underhållsplan – checklista',
    description: 'Steg för steg för att kartlägga åtgärder, kostnader och prioriteringar.',
    category: 'Underhåll',
    filename: 'underhallsplan-checklista.pdf',
  },
  {
    slug: 'felanmalan-blankett',
    title: 'Felanmälan – blankett',
    description: 'Blankett för medlemmars felanmälan till styrelse/förvaltare.',
    category: 'Formulär',
    filename: 'felanmalan-blankett.pdf',
  },
  {
    slug: 'nyckelkvittens',
    title: 'Nyckelkvittens',
    description: 'Kvittens på utlämnade nycklar, brickor eller passer-taggar.',
    category: 'Styrelse',
    filename: 'nyckelkvittens.pdf',
  },
  {
    slug: 'overlamning-ny-styrelse-checklista',
    title: 'Överlämning ny styrelse – checklista',
    description: 'Säker överlämning av dokument, behörigheter och åtaganden.',
    category: 'Styrelse',
    filename: 'overlamning-ny-styrelse-checklista.pdf',
  },
  {
    slug: 'revisionsunderlag-checklista',
    title: 'Revisionsunderlag – checklista',
    description: 'Underlag som revisorn brukar efterfråga – ordna och kontrollera.',
    category: 'Ekonomi',
    filename: 'revisionsunderlag-checklista.pdf',
  },
];

export function getTopMallar(limit = 6): MallItem[] {
  return mallar.slice(0, limit);
}


