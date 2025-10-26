export type BlogCategory = 'Ekonomi' | 'Underhåll' | 'Juridik' | 'Styrelse' | 'Miljö';

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO yyyy-mm-dd
  readTime: string;
  category: BlogCategory;
  image: string;
  content?: string[];
  metaTitle?: string;
  metaDescription?: string;
  ogImage?: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'basta-verktygen-for-underhallsplan-i-brf-var-stora-jamforelse-2025',
    title: 'Bästa verktygen för underhållsplan i BRF – vår stora jämförelse 2025',
    excerpt: 'Som styrelseledamot i en bostadsrättsförening (BRF) vet du hur viktigt det är att ha en solid underhållsplan. Den hjälper er att undvika oväntade kostnader, hålla avgifterna stabila och säkerställa fastighetens långsiktiga värde. Vi har granskat de populäraste alternativen för 2025 och jämfört dem utifrån användarvänlighet, funktionalitet, kostnad och lämplighet för olika BRF-typer.',
    date: '2025-10-26',
    readTime: '9 min',
    category: 'Ekonomi',
    image: 'https://images.unsplash.com/photo-1759661937582-0ccd5dacf20f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBwbGFubmluZyUyMHRvb2xzfGVufDF8fHx8MTc2MTUwMzQwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    content: [
      '## 🏆 Resultat i korthet',
      'Vi har testat och jämfört tre alternativ för underhållsplanering i BRF:er. Här är vår slutliga bedömning:',
      '**1. 🥇 Uplan.se – 9/10** ← Vinnaren för aktiva BRF-styrelser',
      '- Specialbyggt för BRF:er som vill hantera allt själva',
      '- Intuitivt och lättanvänt även för icke-tekniska styrelser',
      '- **Bäst pris:** Från 500 kr/mån (ca 50% billigare än Planima)',
      '- ⭐ Rekommenderas starkt!',
      '**2. 🥈 Planima – 7/10** ← För konsulter och förvaltare',
      '- Kraftfullt men komplext verktyg',
      '- Passar bäst med teknisk konsult',
      '- **Dyrare:** Från 1 000 kr/mån per användare',
      '**3. 🥉 Excel – 5/10** ← Enkel start men begränsad',
      '- **OBS! Kräver Microsoft 365-prenumeration (INTE gratis)**',
      '- Manuellt och felbenäget',
      '- Många växer ur det snabbt',
      '---',
      'Vi fokuserar på tre alternativ: **Uplan.se** (specialiserad för BRF:er), **Planima** (för fastighetsförvaltning) och **Excel** (som många felaktigt tror är gratis). Vår bedömning baseras på feedback från aktiva BRF-styrelser, expertrecensioner och praktiska tester.',
      '## 1. Uplan.se – Bäst för aktiva BRF-styrelser som vill ta kontroll själva',
      'Uplan.se är en svenskutvecklad plattform som är skräddarsydd för bostadsrättsföreningar som vill jobba proaktivt och direkt utan att anlita externa konsulter. Verktyget är molnbaserat och fokuserar på att göra underhållsplaneringen enkel och intuitiv, även för styrelser utan djup teknisk kunskap.',
      '### Nyckelfunktioner:',
      '- **Enkel inventering och planering:** Steg-för-steg-guide för att kartlägga fastighetens behov, uppskatta kostnader och skapa en 10–30-årig plan. Automatiska förslag baserat på BRF-specifika data.',
      '- **Budgetintegration:** Kopplar underhållet direkt till er årsbudget, med simuleringar för olika scenarier (t.ex. stigande räntor eller energipriser).',
      '- **Medlemskommunikation:** Inbyggda verktyg för att dela planer med medlemmar, inklusive mobilapp för realtidsuppdateringar och felanmälningar.',
      '- **Analys och rapporter:** Visuella diagram, nyckeltal och prognoser som hjälper er att prioritera åtgärder och undvika akuta reparationer.',
      '- **Integrationer:** Lätt att koppla till andra BRF-verktyg som bokföringssystem eller medlemsregister.',
      '### Fördelar för BRF:er:',
      '- Perfekt för aktiva styrelser som vill hålla koll internt – ingen behov av dyra konsulter. Användarvänligt gränssnitt som sparar tid och minskar fel.',
      '- **Kostnadseffektivt:** Startar från ca 500 kr/månad för små BRF:er, med skalbar prissättning baserat på antal lägenheter. Det är ungefär hälften så dyrt som Planima och ger betydligt mer funktionalitet än Excel.',
      '- **Hållbarhetsfokus:** Inkluderar verktyg för energioptimering och gröna åtgärder, vilket passar moderna BRF:er som vill minska sitt koldioxidavtryck.',
      '**Nackdelar:** Kan kännas överväldigande för mycket små föreningar som bara behöver en grundläggande plan.',
      '**Betyg: 9/10**',
      'Uplan vinner vår jämförelse för direkta BRF-användare. Det ger er frihet att styra själva, med smarta funktioner som känns skräddarsydda för er vardag. [Läs mer och testa gratis på Uplan.se](https://uplan.se)',
      '## 2. Planima – Bäst för konsulter och större förvaltningsbolag',
      'Planima är en väletablerad plattform som används av många fastighetskonsulter och förvaltningsbolag i Sverige. Den är kraftfull för att hantera stora portföljer och fokuserar på koordinering över flera fastigheter.',
      '### Nyckelfunktioner:',
      '- **Portföljöversikt:** Hanterar underhåll för flera BRF:er samtidigt, med koordineringsverktyg för att gruppera åtgärder och optimera kostnader.',
      '- **Automatiserad planering:** Förslag på åtgärder baserat på inventeringar, med fokus på långsiktiga prognoser och budgetsimuleringar.',
      '- **Rapportering:** Avancerade diagram och nyckeltal för professionella presentationer till kunder.',
      '- **Integrationer:** Kopplar till externa system för upphandling och ekonomi.',
      '### Fördelar för BRF:er:',
      '- Bra om er BRF anlitar en teknisk fastighetskonsult – Planima är optimerat för dem som hanterar underhållet åt er. Ger en professionell touch till planerna.',
      '- **Kostnad:** Från ca 1 000 kr/månad per användare, ofta fakturerat via konsulten.',
      '**Nackdelar:** Mindre intuitivt för direkta BRF-styrelser utan expertkunskap – känns mer som ett verktyg för proffs än för aktiva medlemmar. Kan bli dyrt om ni inte har en konsult som sköter det.',
      '**Betyg: 7/10**',
      'Planima är utmärkt för konsulter som arbetar åt BRF:er, men för er som vill hantera allt själva rekommenderar vi att titta på alternativ som Uplan istället.',
      '## 3. Excel – Enkel start men begränsad långsiktigt',
      '**Viktigt att veta:** Excel är INTE gratis – det kräver en Microsoft 365-prenumeration som kostar ca 750 kr/år för privatpersoner eller ca 1 500 kr/år för företag.',
      '### Nyckelfunktioner:',
      '- **Manuell planering:** Skapa tabeller för åtgärder, kostnader och tidsplaner.',
      '- **Anpassningsbart:** Lägg till formler för beräkningar och diagram för visualisering.',
      '### Fördelar för BRF:er:',
      '- Enkelt att komma igång om ni redan har Microsoft 365 och är vana vid Excel.',
      '- Flexibelt för grundläggande behov.',
      '### Nackdelar:',
      '- Manuell uppdatering leder till felrisker, ingen automatisering eller realtidsdelning.',
      '- Svårt att hantera komplexa planer långsiktigt – många BRF:er växer ur det snabbt.',
      '**Betyg: 5/10**',
      'Bra som start, men för en professionell och hållbar underhållsplan – uppgradera till ett dedikerat verktyg som Uplan.',
      '## Slutsats: Välj rätt verktyg för er BRF',
      'För aktiva styrelser som vill ta kontroll direkt och undvika konsultkostnader är **Uplan.se det bästa valet 2025**. [Testa Uplan.se](https://uplan.se).'
    ],
    metaTitle: 'Bästa verktygen för underhållsplan i BRF – jämförelse 2025 – BRF Guide',
    metaDescription: 'Vi jämför Uplan, Planima och Excel för BRF:er. Vilket verktyg passar er underhållsplan bäst 2025? Pris, funktioner och bedömning.'
  },
  {
    slug: 'nar-behover-man-egentligen-gora-ett-stambyte',
    title: 'När behöver man egentligen göra ett stambyte?',
    excerpt: 'Stambyte är ett av de största och mest kostsamma projekten en bostadsrättsförening kan genomföra. Men hur vet man egentligen när det är dags – och hur långt i förväg bör man börja planera?',
    date: '2024-02-05',
    readTime: '7 min',
    category: 'Underhåll',
    image: 'https://images.unsplash.com/photo-1657558665549-bd7d82afed8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXBlJTIwcGx1bWJpbmclMjByZW5vdmF0aW9ufGVufDF8fHx8MTc2MTUwMzQwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    content: [
      'Stambyte är ett av de största och mest kostsamma projekten en bostadsrättsförening kan genomföra. Men hur vet man egentligen när det är dags – och hur långt i förväg bör man börja planera?',
      '## Vad innebär ett stambyte?',
      'Ett stambyte innebär att föreningen byter ut de rör och ledningar som transporterar vatten och avlopp i huset.',
      '## Tecken på att det är dags',
      '🔹 **Återkommande stopp i avloppet**',
      '🔹 **Fukt- eller mögelproblem**',
      '🔹 **Missfärgningar i rör eller väggar**',
      '🔹 **Dåligt vattentryck**',
      '🔹 **Läckage eller sprickor**',
      '## Planera i god tid',
      'Sprid ut kostnader, informera medlemmar, samordna projekt.',
      '## Alternativ till stambyte',
      'I vissa fall kan **relining** vara ett alternativ.',
      '## Sammanfattning',
      'En uppdaterad underhållsplan underlättar besluten. [Läs vår jämförelse av verktyg](https://uplan.se).'
    ],
    metaTitle: 'När är det dags för stambyte? – BRF Guide',
    metaDescription: 'Tecken på stambytesbehov, planering och alternativ. Checklista för BRF-styrelser.'
  },
  {
    slug: 'avgiftshojning-eller-lan-vad-ar-smartast-for-foreningen',
    title: 'Avgiftshöjning eller lån – vad är smartast för föreningen?',
    excerpt: 'När större renoveringar eller investeringar närmar sig står många bostadsrättsföreningar inför ett viktigt val: ska man höja avgiften eller ta upp lån? Här går vi igenom hur ni kan resonera för att fatta rätt beslut.',
    date: '2024-02-20',
    readTime: '8 min',
    category: 'Ekonomi',
    image: 'https://images.unsplash.com/photo-1668930185267-1f3c19851b5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBkZWNpc2lvbiUyMGNhbGN1bGF0b3J8ZW58MXx8fHwxNzYxNTAzNDA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    content: [
      'När större renoveringar eller investeringar närmar sig står många bostadsrättsföreningar inför ett viktigt val: ska man höja avgiften eller ta upp lån? Här går vi igenom hur ni kan resonera för att fatta rätt beslut.',
      '## 1. Börja med en helhetsbild',
      'Se över föreningens ekonomi: låneskuld, räntevillkor, underhåll, buffert.',
      '## 2. Fördelarna med lån',
      'Jämna ut kostnader över tid, dela kostnader mellan nuvarande och framtida medlemmar.',
      '## 3. Fördelarna med avgiftshöjning',
      'Mindre skuldsättning och större frihet framåt.',
      '## 4. Hitta rätt balans',
      'Ofta bäst med kombination och mindre, tätare höjningar.',
      '## Sammanfattning',
      'Basera beslut på uppdaterad information och tydliga prognoser. [Läs vår jämförelse](https://uplan.se).'
    ],
    metaTitle: 'Avgiftshöjning eller lån i BRF – för- och nackdelar – BRF Guide',
    metaDescription: 'Så resonerar styrelsen: lån eller avgiftshöjning? För- och nackdelar, tips och sammanfattning.'
  },
  {
    slug: 'sa-gor-ni-en-smidig-overlamning-till-ny-styrelse',
    title: 'Så gör ni en smidig överlämning till ny styrelse',
    excerpt: 'När nya ledamöter väljs in i styrelsen är en bra överlämning avgörande för kontinuitet och förtroende. Här är checklistan som gör övergången enkel och trygg.',
    date: '2024-03-01',
    readTime: '5 min',
    category: 'Styrelse',
    image: 'https://images.unsplash.com/photo-1705234384669-c6d31c61b789?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWFkZXJzaGlwJTIwaGFuZG92ZXIlMjB0cmFuc2l0aW9ufGVufDF8fHx8MTc2MTUwMzQwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    content: [
      'När nya ledamöter väljs in i styrelsen är en bra överlämning avgörande.',
      '## 1. Samla dokumentationen',
      'Protokoll, budget, avtal, underhållsplan, behörigheter.',
      '## 2. Ha ett gemensamt överlämningsmöte',
      'Roller, rutiner, ärenden, deadlines.',
      '## 3. Skapa struktur för framtiden',
      'Dokumentera arbetsflöden, digitalisera där det går.',
      '## 4. Se över fullmakter och behörigheter',
      'Bank, digitala tjänster, myndighetskonton.',
      '## Sammanfattning',
      'En väl genomförd överlämning sparar tid och skapar trygghet. [Läs mer](https://uplan.se).'
    ],
    metaTitle: 'Överlämning till ny styrelse – checklista – BRF Guide',
    metaDescription: 'Checklista för smidig överlämning i BRF: dokument, möte, rutiner och behörigheter.'
  },
  {
    slug: 'gron-omstallning-i-brf-fem-atgarder-som-lonar-sig',
    title: 'Grön omställning i BRF – fem åtgärder som lönar sig',
    excerpt: 'Hållbarhet är inte längre bara en trend – det är en ekonomisk nödvändighet. Här är fem klimatsmarta åtgärder som kan spara pengar och höja värdet på fastigheten.',
    date: '2024-03-15',
    readTime: '6 min',
    category: 'Miljö',
    image: 'https://images.unsplash.com/photo-1650624894606-6f9066eb2f2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVscyUyMGJ1aWxkaW5nfGVufDF8fHx8MTc2MTUwMzQwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    content: [
      'Hållbarhet är både ekonomiskt och miljömässigt lönsamt.',
      '## 1. Optimera värmesystemet',
      'Injustering kan minska energin 10–20 %.',
      '## 2. Byt till LED och smart styrning',
      'Rörelsesensorer och timers minskar onödig belysning.',
      '## 3. Installera solceller',
      'Täcker delar av fastighetens elbehov, stöd finns.',
      '## 4. Laddplatser för elbilar',
      'Ökar attraktiviteten och kan delfinansieras.',
      '## 5. Isolera och täta',
      'Kartlägg energiläckor och åtgärda.',
      '## Sammanfattning',
      'Planera rätt och följ upp i underhållsplanen. [Läs mer](https://uplan.se).'
    ],
    metaTitle: 'Grön omställning i BRF – fem åtgärder – BRF Guide',
    metaDescription: 'Fem klimatsmarta åtgärder som sänker kostnader och höjer värdet i BRF.'
  },
  {
    slug: 'ansvarsfragan-i-brf-vem-betalar-vad-vid-skada',
    title: 'Ansvarsfrågan i BRF – vem betalar vad vid skada?',
    excerpt: 'När något går sönder i fastigheten uppstår ofta frågan: vem ansvarar – föreningen eller medlemmen? Här reder vi ut grunderna och ger exempel från verkligheten.',
    date: '2024-04-01',
    readTime: '7 min',
    category: 'Juridik',
    image: 'https://images.unsplash.com/photo-1711185898083-e1f04ff38300?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnN1cmFuY2UlMjBsZWdhbCUyMGRvY3VtZW50fGVufDF8fHx8MTc2MTUwMzQwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    content: [
      'När något går sönder i fastigheten uppstår ofta frågan: vem ansvarar?',
      '## Grundprincipen',
      'Föreningen ansvarar för yttre och gemensamma installationer, medlemmen för inre underhåll.',
      '## Vanliga situationer',
      'Vattenskador, el/ventilation, fönster/dörrar – gråzoner och exempel.',
      '## Försäkringsskydd',
      'Fastighetsförsäkring, bostadsrättstillägg och dokumentation.',
      '## Sammanfattning',
      'Dokumentera noggrant och kommunicera tydligt. [Läs mer](https://uplan.se).'
    ],
    metaTitle: 'Ansvarsfrågan i BRF – vem ansvarar för vad? – BRF Guide',
    metaDescription: 'Genomgång av ansvar vid skada i BRF: föreningen vs medlemmen, försäkringar och dokumentation.'
  },
  {
    slug: 'nya-regler-for-energideklarationer-2024',
    title: 'Nya regler för energideklarationer 2024',
    excerpt: 'Från och med 2024 gäller nya krav på energideklarationer för bostadsrättsföreningar. Vi går igenom vad som ändras och hur er förening påverkas.',
    date: '2024-01-15',
    readTime: '5 min',
    category: 'Juridik',
    image: 'https://images.unsplash.com/photo-1664565240788-e1805f634a57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmVyZ3klMjBjZXJ0aWZpY2F0ZSUyMGJ1aWxkaW5nfGVufDF8fHx8MTc2MTUwMzQwNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    content: [
      'Från och med 2024 gäller nya krav på energideklarationer.',
      '## Bakgrund och syfte',
      'Energideklarationen visar byggnadens energiprestanda, inomhusmiljö, förbättringar.',
      '## Vad är nytt 2024?',
      'Striktare krav, uppdaterade energiklasser, obligatorisk uppföljning, digitalt register.',
      '## Vad betyder det för styrelsen?',
      'Kontrollera aktualitet, uppmätta värden, planera åtgärder, informera medlemmar.',
      '## Tips och praktiska råd',
      'Integrera i underhållsplan, prioritera effekt, ta hjälp vid behov.',
      '## Sammanfattning',
      'Nya krav ger bättre data och större ansvar. [Läs mer](https://uplan.se).'
    ],
    metaTitle: 'Nya regler för energideklarationer 2024 – BRF Guide',
    metaDescription: 'Genomgång av förändringar i energideklaration 2024 och vad styrelsen behöver göra.'
  },
  {
    slug: 'sa-hanterar-ni-stigande-driftskostnader',
    title: 'Så hanterar ni stigande driftskostnader',
    excerpt: 'Med stigande energipriser och inflation är det viktigare än någonsin att ha koll på driftskostnaderna. Här är våra bästa tips för att hålla nere kostnaderna utan att tumma på kvaliteten.',
    date: '2024-01-10',
    readTime: '7 min',
    category: 'Ekonomi',
    image: 'https://images.unsplash.com/photo-1635840420799-f75477b0b977?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyaXNpbmclMjBjb3N0cyUyMGZpbmFuY2V8ZW58MXx8fHwxNzYxNTAzNDA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    content: [
      'Med stigande energipriser, räntor och underhållskostnader behöver BRF:er arbeta smart.',
      '## 1. Få koll på var pengarna tar vägen',
      'Analysera driftskostnader och identifiera poster som ökat mest.',
      '## 2. Energieffektivisera smart',
      'Justera värmesystem, LED, sensorer, solceller.',
      '## 3. Upphandla klokt',
      'Jämför avtal, begär offerter och förhandla.',
      '## 4. Underhåll i rätt tid',
      'Följ underhållsplanen och undvik akuta reparationer.',
      '## 5. Kommunicera öppet',
      'Transparens skapar förståelse vid förändringar.',
      '## Sammanfattning',
      'Bygg en långsiktigt hållbar förening. [Läs mer](https://uplan.se).'
    ],
    metaTitle: 'Stigande driftskostnader i BRF – åtgärder – BRF Guide',
    metaDescription: 'Praktiska tips för att hantera stigande driftskostnader utan att tumma på kvaliteten.'
  },
  {
    slug: 'checklista-infor-arsstamman',
    title: 'Checklista inför årsstämman',
    excerpt: 'Snart är det dags för årsstämma i många föreningar. Vi har sammanställt en komplett checklista över allt som behöver förberedas.',
    date: '2024-01-05',
    readTime: '4 min',
    category: 'Styrelse',
    image: 'https://images.unsplash.com/photo-1662153480559-0485a7848921?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbm51YWwlMjBtZWV0aW5nJTIwY2hlY2tsaXN0fGVufDF8fHx8MTc2MTUwMzQwNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    content: [
      'Snart är det dags för årsstämma i många bostadsrättsföreningar.',
      '## Bakgrund och kontext',
      'Årsstämman är föreningens viktigaste beslutstillfälle.',
      '## Checklista',
      'Datum och lokal, årsredovisning, underhållsplan, beslutsunderlag, kallelse, genomförande, arkivering.',
      '## Sammanfattning',
      'En välplanerad stämma skapar förtroende och trygghet. [Läs mer](https://uplan.se).'
    ],
    metaTitle: 'Checklista inför årsstämman – BRF Guide',
    metaDescription: 'Komplett checklista för förberedelser inför BRF:s årsstämma – steg för steg.'
  },
  {
    slug: 'underhallsplan-varfor-det-ar-viktigt-att-borja-i-tid',
    title: 'Underhållsplan – varför det är viktigt att börja i tid',
    excerpt: 'Många föreningar skjuter upp underhållsplaneringen tills problemen uppstår. Men genom att planera i tid kan ni spara både pengar och huvudvärk.',
    date: '2023-12-20',
    readTime: '6 min',
    category: 'Underhåll',
    image: 'https://images.unsplash.com/photo-1657040298726-7189d3090d5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWludGVuYW5jZSUyMHBsYW5uaW5nJTIwY2FsZW5kYXJ8ZW58MXx8fHwxNzYxNTAzNDA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    content: [
      'Många bostadsrättsföreningar väntar med att ta fram eller uppdatera sin underhållsplan.',
      '## Vad är en underhållsplan?',
      'Plan för åtgärder, tidpunkter och kostnader över 10–30 år.',
      '## Varför börja i tid?',
      'Undvik akuta reparationer, stabilisera avgifter, öka trygghet.',
      '## Uppdateringsfrekvens',
      'Minst vart tredje år eller vid större händelser.',
      '## Så kommer ni igång',
      'Samla info, ta hjälp, planera långt, gör den tillgänglig.',
      '## Vanliga misstag',
      'Ingen buffert, gamla Excel, ingen uppföljning.',
      '## Sammanfattning',
      'Börja i tid och följ upp – spara pengar och problem. [Läs mer](https://uplan.se).'
    ],
    metaTitle: 'Underhållsplan i BRF – börja i tid – BRF Guide',
    metaDescription: 'Varför underhållsplanen är central och hur ni kommer igång i tid.'
  },
  {
    slug: 'sa-kommunicerar-ni-effektivt-med-medlemmarna',
    title: 'Så kommunicerar ni effektivt med medlemmarna',
    excerpt: 'God kommunikation mellan styrelse och medlemmar är avgörande för en välfungerande förening. Här är våra tips för att förbättra kommunikationen.',
    date: '2023-12-15',
    readTime: '5 min',
    category: 'Styrelse',
    image: 'https://images.unsplash.com/photo-1758873269276-9518d0cb4a0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29tbXVuaWNhdGlvbiUyMG1lZXRpbmd8ZW58MXx8fHwxNzYxNDQ2NzA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    content: [
      'God kommunikation mellan styrelse och medlemmar är avgörande.',
      '## Varför kommunikation är viktig',
      'Trygghet, förtroende och engagemang.',
      '## 1. Ha tydlig struktur',
      'Bestäm kanaler för info: e‑post, nyhetsbrev, möten.',
      '## 2. Kommunicera regelbundet',
      'Skicka korta uppdateringar löpande.',
      '## 3. Var transparenta och sakliga',
      'Förklara större beslut och använd visualiseringar.',
      '## 4. Lyssna aktivt',
      'Skapa enkla sätt att fånga upp frågor och förslag.',
      '## 5. Använd digitala verktyg',
      'Samla dokument och beslut digitalt.',
      '## Sammanfattning',
      'Tydlighet och tillgänglighet bygger gemenskap. [Läs mer](https://uplan.se).'
    ],
    metaTitle: 'Effektiv kommunikation i BRF – tips – BRF Guide',
    metaDescription: 'Så bygger ni förtroende och engagemang med tydlig och regelbunden kommunikation.'
  },
  {
    slug: 'budget-2024-vad-bor-ni-tanka-pa',
    title: 'Budget 2024 – vad bör ni tänka på?',
    excerpt: 'När ni sätter ihop budget för 2024 finns det några särskilda saker att ha i åtanke. Vi går igenom de viktigaste punkterna.',
    date: '2023-12-10',
    readTime: '8 min',
    category: 'Ekonomi',
    image: 'https://images.unsplash.com/photo-1668930185267-1f3c19851b5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBkZWNpc2lvbiUyMGNhbGN1bGF0b3J8ZW58MXx8fHwxNzYxNTAzNDA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  }
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}



