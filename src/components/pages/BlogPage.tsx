import { useState } from 'react';
import * as React from 'react';
import { Calendar, Clock, ArrowRight, ArrowLeft } from 'lucide-react';

interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  content?: string[];
}

interface BlogPageProps {
  initialSelectedPostTitle?: string | null;
}

export function BlogPage({ initialSelectedPostTitle }: BlogPageProps = {}) {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const blogPosts: BlogPost[] = [
    {
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
        'Vi fokuserar p�� tre alternativ: **Uplan.se** (en modern utmanare specialiserad för BRF:er), **Planima** (en etablerad aktör för fastighetsförvaltning) och **Excel** (det klassiska gratisalternativet). Vår bedömning baseras på feedback från aktiva BRF-styrelser, expertrecensioner och praktiska tester. Spoiler: För aktiva styrelser som vill hantera allt själva utan mellanhänder är Uplan det bästa valet.',
        
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
        
        '**Viktigt att veta:** Excel är INTE gratis – det kräver en Microsoft 365-prenumeration som kostar ca 750 kr/år för privatpersoner eller ca 1 500 kr/år för företag. Många tror Excel är gratis, men det är en viktig missuppfattning. För BRF:er som redan har Microsoft 365 kan det dock vara ett alternativ att testa med.',
        
        '### Nyckelfunktioner:',
        '- **Manuell planering:** Skapa tabeller för åtgärder, kostnader och tidsplaner.',
        '- **Anpassningsbart:** Lägg till formler för beräkningar och diagram för visualisering.',
        
        '### Fördelar för BRF:er:',
        '- Enkelt att komma igång om ni redan har Microsoft 365 och är vana vid Excel.',
        '- Flexibelt för grundläggande behov.',
        '- **Kostnad:** Ca 750–1 500 kr/år för Microsoft 365-prenumeration.',
        
        '**Nackdelar:** Manuell uppdatering leder till felrisker, ingen automatisering eller realtidsdelning. Svårt att hantera komplexa planer långsiktigt – många BRF:er växer ur det snabbt.',
        
        '**Betyg: 5/10**',
        
        'Bra som start, men för en professionell och hållbar underhållsplan – uppgradera till ett dedikerat verktyg som Uplan.',
        
        '## Slutsats: Välj rätt verktyg för er BRF',
        
        'För aktiva styrelser som vill ta kontroll direkt och undvika konsultkostnader är **Uplan.se det bästa valet 2025**. Det ger er verktygen att jobba smartare, spara pengar och engagera medlemmarna. Planima passar bättre om ni har en teknisk förvaltare involverad, medan Excel är en temporär lösning för nybörjare.',
        
        'Vill ni veta mer? Kolla in vår guide "Bygg en underhållsplan som fungerar" för steg-för-steg-tips, eller [testa Uplan.se gratis idag](https://uplan.se). Har ni erfarenheter av dessa verktyg? Dela i kommentarerna nedan!',
        
        '**Utforska fler digitala verktyg för BRF:er** – inklusive [Uplan.se](https://uplan.se) för budget och planering.'
      ]
    },
    {
      title: 'När behöver man egentligen göra ett stambyte?',
      excerpt: 'Stambyte är ett av de största och mest kostsamma projekten en bostadsrättsförening kan genomföra. Men hur vet man egentligen när det är dags – och hur långt i förväg bör man börja planera?',
      date: '2024-02-05',
      readTime: '7 min',
      category: 'Underhåll',
      image: 'https://images.unsplash.com/photo-1657558665549-bd7d82afed8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXBlJTIwcGx1bWJpbmclMjByZW5vdmF0aW9ufGVufDF8fHx8MTc2MTUwMzQwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      content: [
        'Stambyte är ett av de största och mest kostsamma projekten en bostadsrättsförening kan genomföra. Men hur vet man egentligen när det är dags – och hur långt i förväg bör man börja planera?',
        
        '## Vad innebär ett stambyte?',
        
        'Ett stambyte innebär att föreningen byter ut de rör och ledningar som transporterar vatten och avlopp i huset. Arbetet omfattar ofta även badrum och kök eftersom ytskikten måste återställas.',
        
        'Livslängden för vatten- och avloppsstammar är normalt 40–60 år, men varierar beroende på material, belastning och underhåll.',
        
        '## Tecken på att det är dags',
        
        'Det finns flera varningssignaler som tyder på att era stammar börjar bli uttjänta:',
        
        '🔹 **Återkommande stopp i avloppet** – om samma problem uppstår om och om igen kan det bero på rostangrepp eller igensatta ledningar.',
        
        '🔹 **Fukt- eller mögelproblem** – läckage i rören kan orsaka fuktskador i väggar och golv.',
        
        '🔹 **Missfärgningar i rör eller väggar** – brunt eller rostfärgat vatten är ett tydligt tecken på att rören rostar inifrån.',
        
        '🔹 **Dåligt vattentryck** – igensatta eller förträngda rör kan minska vattentrycket i lägenheterna.',
        
        '🔹 **Läckage eller sprickor** – synliga skador på exponerade rör är ett direkt tecken.',
        
        'Om något av detta förekommer bör föreningen beställa en statusbesiktning av en sakkunnig konsult. En kameraundersökning av avloppsstammarna kan visa inre skador och hjälpa till att bedöma åtgärdsbehov.',
        
        '## Planera i god tid',
        
        'Ett stambyte tar ofta flera år från beslut till färdig renovering. Genom att börja planera tidigt kan föreningen:',
        
        '- **Sprida ut kostnaderna över tid** – genom att avsätta pengar löpande i stället för att ta stora lån eller höja avgiften drastiskt.',
        
        '- **Hinna informera medlemmarna ordentligt** – projektet påverkar alla boende och kräver ofta tillfällig evakuering av lägenheter.',
        
        '- **Samordna med andra projekt** – t.ex. el- eller ventilationsbyte, vilket kan spara både tid och pengar.',
        
        'En välplanerad tidsplan ger också bättre möjligheter att förhandla med entreprenörer och välja rätt tidpunkt för genomförandet.',
        
        '## Alternativ till stambyte',
        
        'I vissa fall kan **relining** vara ett alternativ. Det innebär att man renoverar rören invändigt istället för att byta dem helt. En ny slang dras in i det befintliga röret och härdas på plats.',
        
        '**Fördelar med relining:**',
        '- Billigare än fullständigt byte.',
        '- Går snabbare att genomföra.',
        '- Mindre ingrepp i lägenheter och gemensamma utrymmen.',
        
        '**Nackdelar:**',
        '- Fungerar inte i alla typer av rörsystem.',
        '- Kortare livslängd än nya rör.',
        '- Kan inte användas om rören är för skadade.',
        
        'En teknisk konsult kan hjälpa er att bedöma om relining är ett lämpligt alternativ för er förening.',
        
        '## Sammanfattning',
        
        'Ett stambyte kräver både framförhållning och tydlig planering. Genom att följa fastighetens skick, göra regelbundna besiktningar och lägga in projektet i underhållsplanen kan föreningen undvika obehagliga överraskningar.',
        
        'Att ha en uppdaterad underhållsplan med tydlig kostnadsöversikt och tidslinje gör det också mycket lättare att informera medlemmarna, få finansieringen på plats och genomföra projektet när det verkligen behövs.',
        
        '👉 [Läs vår jämförelse av de bästa verktygen för underhållsplaner här](https://uplan.se) – där **Uplan** utsågs till det bästa valet för styrelser som vill planera större projekt som stambyten med tydlig kostnadsöversikt och långsiktig kontroll.'
      ]
    },
    {
      title: 'Avgiftshöjning eller lån – vad är smartast för föreningen?',
      excerpt: 'När större renoveringar eller investeringar närmar sig står många bostadsrättsföreningar inför ett viktigt val: ska man höja avgiften eller ta upp lån? Här går vi igenom hur ni kan resonera för att fatta rätt beslut.',
      date: '2024-02-20',
      readTime: '8 min',
      category: 'Ekonomi',
      image: 'https://images.unsplash.com/photo-1668930185267-1f3c19851b5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBkZWNpc2lvbiUyMGNhbGN1bGF0b3J8ZW58MXx8fHwxNzYxNTAzNDA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      content: [
        'När större renoveringar eller investeringar närmar sig står många bostadsrättsföreningar inför ett viktigt val: ska man höja avgiften eller ta upp lån? Här går vi igenom hur ni kan resonera för att fatta rätt beslut.',
        
        '## 1. Börja med en helhetsbild',
        
        'Innan styrelsen bestämmer hur en större investering ska finansieras är det viktigt att se över hela föreningens ekonomi. Titta på:',
        
        '- **Nuvarande låneskuld** – hur mycket är föreningen redan skuldsatt?',
        '- **Räntevillkor** – hur känslig är ekonomin f��r ränteförändringar?',
        '- **Planerat underhåll** – finns det fler större projekt på gång inom de närmaste åren?',
        '- **Sparnivå och buffer** – hur stor är föreningens eget kapital?',
        
        'Målet är att förstå hur en ny kostnad påverkar både den löpande avgiften och föreningens långsiktiga risknivå.',
        
        '## 2. Fördelarna med lån',
        
        'Att l��na kan vara ett sätt att jämna ut kostnader över tid. Det gör att både nuvarande och framtida medlemmar delar på investeringen, vilket ofta upplevs som mer rättvist.',
        
        '**Fördelar:**',
        '- Avgiften behöver inte höjas lika kraftigt på en gång.',
        '- Föreningen kan behålla bufferten för oförutsedda utgifter.',
        '- Större investeringar blir möjliga utan att dränera kassan.',
        
        '**Nackdelar:**',
        '- Ränteläget kan förändras snabbt, vilket gör ekonomin mer känslig.',
        '- Högre skuldsättning kan påverka kreditvärdigheten negativt.',
        '- Totalkostnaden blir högre på grund av räntor.',
        
        '## 3. Fördelarna med avgiftshöjning',
        
        'Att finansiera med egna medel, genom att höja avgiften, minskar skuldsättningen och ger större frihet i framtiden.',
        
        '**Fördelar:**',
        '- Ingen ränterisk – pengarna är era egna.',
        '- Stärker föreningens finansiella ställning.',
        '- Inga långsiktiga skulder att hantera.',
        
        '**Nackdelar:**',
        '- En för hög engångshöjning kan skapa oro bland medlemmarna.',
        '- Nuvarande medlemmar betalar hela notan, även om investeringen gynnar framtida boende.',
        '- Risk för minskad attraktivitet på marknaden om avgiften blir för hög jämfört med liknande föreningar.',
        
        '## 4. Hitta rätt balans',
        
        'I många fall är den bästa lösningen en kombination: ett mindre lån kompletterat med en måttlig avgiftshöjning. På så sätt sprids kostnaden över tid samtidigt som föreningen behåller kontroll och minimerar ränterisken.',
        
        'Det kan också vara klokt att höja avgiften **lite och ofta** snarare än i stora steg. Det ger mer förutsägbarhet och mindre chock för medlemmarna.',
        
        '## Sammanfattning',
        
        'Det finns inget universalsvar på om lån eller avgiftshöjning är bäst. Det beror på fastighetens skick, ränteläget, medlemmarnas ekonomiska situation och föreningens långsiktiga mål.',
        
        'Det viktigaste är att beslutet baseras på uppdaterad information, tydliga prognoser och öppen kommunikation med medlemmarna. En välgrundad analys ger trygghet – både för styrelsen och för de boende.',
        
        '👉 Med **Uplan** kan styrelsen enkelt simulera olika scenarier och se hur både lån och avgiftsjusteringar påverkar föreningens budget över tid. [Läs vår jämförelse av underhållsplanverktyg här](https://uplan.se).'
      ]
    },
    {
      title: 'Så gör ni en smidig överlämning till ny styrelse',
      excerpt: 'När nya ledamöter väljs in i styrelsen är en bra överlämning avgörande för kontinuitet och förtroende. Här är checklistan som gör övergången enkel och trygg.',
      date: '2024-03-01',
      readTime: '5 min',
      category: 'Styrelse',
      image: 'https://images.unsplash.com/photo-1705234384669-c6d31c61b789?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWFkZXJzaGlwJTIwaGFuZG92ZXIlMjB0cmFuc2l0aW9ufGVufDF8fHx8MTc2MTUwMzQwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      content: [
        'När nya ledamöter väljs in i styrelsen är en bra överlämning avgörande för kontinuitet och förtroende. Här är checklistan som gör övergången enkel och trygg.',
        
        '## 1. Samla dokumentationen',
        
        'All väsentlig information ska vara lätt att hitta och tillgänglig för den nya styrelsen. Se till att följande finns samlat och uppdaterat:',
        
        '✅ **Protokoll och beslut** från de senaste årens styrelsemöten och årsstämmor.',
        
        '✅ **Budget och årsredovisning** – både senaste godkända versionen och historiska underlag.',
        
        '✅ **Avtal och kontaktuppgifter** för leverantörer, fastighetsskötare, konsulter, revisorer och förvaltare.',
        
        '✅ **Underhållsplan** – inkluderande pågående projekt, planerade åtgärder och kostnadsberäkningar.',
        
        '✅ **Fullmakter och behörigheter** – vem som har rätt att teckna avtal, göra utbetalningar eller representera föreningen.',
        
        'Genom att ha allt samlat digitalt blir det mycket enklare för nya ledamöter att sätta sig in i föreningens situation.',
        
        '## 2. Ha ett gemensamt överlämningsmöte',
        
        'Bjud in både avgående och tillträdande styrelse till ett gemensamt möte. Gå igenom:',
        
        '- Ansvarsfördelning mellan ordförande, kassör, sekreterare och ledamöter.',
        '- Rutiner för styrelsemöten, beslut och kommunikation med medlemmar.',
        '- Pågående ärenden och kommande utmaningar.',
        '- Viktiga årliga deadlines (budget, årsstämma, revision).',
        
        'Ett sådant möte skapar trygghet och ger möjlighet att ställa frågor direkt till dem som haft ansvaret tidigare.',
        
        '## 3. Skapa struktur för framtiden',
        
        'Undvik att all kunskap sitter i enskilda personers huvuden. Dokumentera rutiner och arbetsflöden skriftligt så att nästa styrelse enkelt kan ta vid.',
        
        '**Exempel på saker som bör dokumenteras:**',
        '- Hur man förbereder årsstämman.',
        '- Vilka rapporter som ska skickas till revisor och myndigheter.',
        '- Hur felanmälningar och medlemskontakt hanteras.',
        
        'Digitala verktyg underlättar här enormt – allt finns samlat på ett ställe och är sökbart.',
        
        '## 4. Se över fullmakter och behörigheter',
        
        'Glöm inte att uppdatera:',
        
        '- Firmateckning och behörighet hos banken.',
        '- Tillgång till digitala tjänster (e-post, webbplatser, verktyg).',
        '- Kontaktuppgifter till myndigheter, leverantörer och försäkringsbolag.',
        
        'Det är lätt att missa detta, men kan skapa onödiga förseningar om ingen i den nya styrelsen har rätt behörighet.',
        
        '## Sammanfattning',
        
        'En väl genomförd överlämning sparar både tid och frustration. Det bygger dessutom förtroende bland medlemmarna och säkerställer att föreningens arbete kan fortsätta utan avbrott.',
        
        'Genom att ha tydlig dokumentation, genomföra ett gemensamt möte och säkerställa att behörigheter uppdateras kan ni skapa en smidig och professionell övergång.',
        
        '👉 I **Uplan** kan föreningen samla alla dokument, beslut och underhållsplaner på ett och samma ställe – så att varje ny styrelse snabbt får full överblick. [Läs vår jämförelse av verktygen här](https://uplan.se).'
      ]
    },
    {
      title: 'Grön omställning i BRF – fem åtgärder som lönar sig',
      excerpt: 'Hållbarhet är inte längre bara en trend – det är en ekonomisk nödvändighet. Här är fem klimatsmarta åtgärder som kan spara pengar och höja värdet på fastigheten.',
      date: '2024-03-15',
      readTime: '6 min',
      category: 'Miljö',
      image: 'https://images.unsplash.com/photo-1650624894606-6f9066eb2f2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVscyUyMGJ1aWxkaW5nfGVufDF8fHx8MTc2MTUwMzQwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      content: [
        'Hållbarhet är inte längre bara en trend – det är en ekonomisk nödvändighet. Här är fem klimatsmarta åtgärder som kan spara pengar och höja värdet på fastigheten.',
        
        '## 1. Optimera värmesystemet',
        
        'Värme är ofta den största energikostnaden i en bostadsrättsförening. Genom att injustera värmesystemet kan ni säkerställa att varje lägenhet får rätt temperatur utan onödig energiförbrukning.',
        
        '**Vad innebär injustering?**',
        'En tekniker går igenom hela värmesystemet och justerar ventiler så att värmen fördelas jämnt. Detta kan minska energiförbrukningen med 10–20 % utan att någon behöver frysa.',
        
        '**Kostnad:** Från ca 15 000–50 000 kr beroende på storlek.',
        '**Återbetalningstid:** Ofta 2–5 år.',
        
        '## 2. Byt till LED och smart styrning',
        
        'Gammal belysning i trapphus, garage och gemensamma utrymmen drar onödigt mycket el. LED-lampor använder upp till 80 % mindre energi och håller mycket längre.',
        
        'Kombinera med rörelsesensorer och timer för att undvika att lampor står p�� i onödan. Det ger både lägre elkostnader och längre livslängd på lamporna.',
        
        '**Kostnad:** Ofta runt 20 000–100 000 kr beroende på antal lampor.',
        '**Återbetalningstid:** 3–7 år.',
        
        '## 3. Installera solceller',
        
        'Solenergi kan täcka delar av fastighetens elbehov och minska beroendet av höga elpriser. Med rätt placering och storlek kan solceller även ge möjlighet att sälja överskottsel tillbaka till nätet.',
        
        'Det finns dessutom ofta statliga och kommunala bidrag för solcellsinstallationer, vilket kan sänka investeringskostnaden avsevärt.',
        
        '**Kostnad:** Från ca 200 000 kr och uppåt.',
        '**Återbetalningstid:** 10–15 år, men kan bli kortare med bidrag och höga elpriser.',
        
        '## 4. Laddplatser för elbilar',
        
        'Allt fler efterfrågar elbilsladdning i sin bostadsrättsförening. Att installera laddstolpar ökar attraktiviteten för bostäderna och kan finansieras genom olika stöd och bidrag.',
        
        'Börja smått – en eller två laddplatser kan utökas senare när efterfrågan växer.',
        
        '**Kostnad:** Från ca 15 000–50 000 kr per laddplats.',
        '**Fördel:** Ökar fastighetsvärdet och attraktiviteten.',
        
        '## 5. Isolera och täta',
        
        'Energieffektiv isolering av vind, fasad och fönster ger både bättre komfort och lägre värmekostnader. Äldre fastigheter kan ofta spara mycket genom att fylla igen köldbryggor och byta till energiglas.',
        
        'Börja med att göra en energikartläggning för att identifiera var de största läckorna finns.',
        
        '**Kostnad:** Varierar kraftigt beroende på åtgärd.',
        '**Återbetalningstid:** 5–20 år beroende på åtgärd och fastighetens skick.',
        
        '## Sammanfattning',
        
        'Gröna investeringar är ofta lönsamma – både ekonomiskt och miljömässigt. Genom att planera rätt kan föreningen ta steg mot lägre kostnader, högre värde och ett minskat klimatavtryck.',
        
        'Det viktigaste är att välja åtgärder som passar just er fastighet och era förutsättningar. En uppdaterad underhållsplan hjälper er att prioritera och budgetera för klimatsmarta investeringar.',
        
        '👉 Med **Uplan** kan ni lägga in era energiprojekt direkt i underhållsplanen och se hur de påverkar kostnader och klimatavtryck över tid. [Läs vår jämförelse av verktyg här](https://uplan.se).'
      ]
    },
    {
      title: 'Ansvarsfrågan i BRF – vem betalar vad vid skada?',
      excerpt: 'När något går sönder i fastigheten uppstår ofta frågan: vem ansvarar – föreningen eller medlemmen? Här reder vi ut grunderna och ger exempel från verkligheten.',
      date: '2024-04-01',
      readTime: '7 min',
      category: 'Juridik',
      image: 'https://images.unsplash.com/photo-1711185898083-e1f04ff38300?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnN1cmFuY2UlMjBsZWdhbCUyMGRvY3VtZW50fGVufDF8fHx8MTc2MTUwMzQwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      content: [
        'När något går sönder i fastigheten uppstår ofta frågan: vem ansvarar – föreningen eller medlemmen? Här reder vi ut grunderna och ger exempel från verkligheten.',
        
        '## Grundprincipen',
        
        'Enligt bostadsrättslagen ansvarar **bostadsrättsföreningen** för byggnadens yttre och gemensamma installationer, medan **medlemmen** ansvarar för det inre underhållet av sin lägenhet.',
        
        'Men gränsdragningen är inte alltid självklar. Det beror på vad som står i föreningens stadgar, hur fastigheten är konstruerad och vad som exakt har skadats.',
        
        '## Vanliga situationer',
        
        '### Vattenskador',
        
        'Vattenskador är en av de vanligaste frågorna kring ansvar.',
        
        '**Föreningen ansvarar för:**',
        '- Ledningar och tätskikt som tillhör fastigheten (stamledningar, avlopp).',
        '- Skador på byggnaden och gemensamma utrymmen.',
        
        '**Medlemmen ansvarar för:**',
        '- Inredning, ytskikt och personlig egendom.',
        '- Skador orsakade av vårdslöshet (t.ex. glömd kran).',
        
        'Om en stamledning brister är det föreningens ansvar att reparera den. Men om skadan orsakades av att någon borrade fel kan ansvaret ligga på medlemmen.',
        
        '### El och ventilation',
        
        '**Föreningen ansvarar för:**',
        '- Stamledningar för el och ventilation.',
        '- Centrala system och installationer utanför lägenheten.',
        
        '**Medlemmen ansvarar för:**',
        '- Eluttag, armaturer och annan utrustning inne i lägenheten.',
        '- Ventilationsgaller och filter i lägenheten.',
        
        '### Fönster och dörrar',
        
        'Detta är ofta en gråzon. I många fall ansvarar föreningen för själva fönstren och ytterdörrarna, medan medlemmen ansvarar för målning och underhåll av insidan.',
        
        'Men stadgarna kan säga något annat – därför är det viktigt att alltid kolla vad som gäller i just er förening.',
        
        '## Försäkringsskydd',
        
        'Både föreningen och medlemmarna bör ha försäkringar som täcker skador på respektive ansvar.',
        
        '**Föreningens fastighetsförsäkring** täcker byggnaden och gemensamma installationer.',
        
        '**Medlemmens bostadsrättsförsäkring** täcker inredning och lösöre.',
        
        '**Bostadsrättstilläggsförsäkring** är viktig för medlemmar – den täcker det som inte ingår i basförsäkringen, som köks- och badrumsinredning samt eventuella avgiftshöjningar efter skada.',
        
        '## Dokumentation är nyckeln',
        
        'För att undvika konflikter och missförstånd är det viktigt att föreningen dokumenterar underhåll och åtgärder noggrant.',
        
        '- När genomfördes senaste stambytet?',
        '- Vilka reparationer har gjorts i fastigheten?',
        '- Finns protokoll från besiktningar och statusrapporter?',
        
        'Då är det enkelt att visa vad som gjorts – och vems ansvar det var. Det sparar både tid, pengar och irritation.',
        
        '## Sammanfattning',
        
        'Klara ansvarsförhållanden skapar trygghet och sparar både tid och pengar. Genom att ha koll på stadgar, försäkringar och dokumentation kan styrelsen agera snabbt och rätt vid en skada.',
        
        'Det viktigaste är att ha tydlighet kring vad föreningen ansvarar för och vad som är medlemmens ansvar – och att detta kommuniceras öppet till alla boende.',
        
        '👉 Med **Uplan** kan ni enkelt dokumentera underhåll och historik, vilket gör det tydligt vem som ansvarar för vad om något händer. [Läs vår jämförelse av underhållsplanverktyg här](https://uplan.se).'
      ]
    },
    {
      title: 'Nya regler för energideklarationer 2024',
      excerpt: 'Från och med 2024 gäller nya krav på energideklarationer för bostadsrättsföreningar. Vi går igenom vad som ändras och hur er förening påverkas.',
      date: '2024-01-15',
      readTime: '5 min',
      category: 'Juridik',
      image: 'https://images.unsplash.com/photo-1664565240788-e1805f634a57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmVyZ3klMjBjZXJ0aWZpY2F0ZSUyMGJ1aWxkaW5nfGVufDF8fHx8MTc2MTUwMzQwNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      content: [
        'Från och med 2024 gäller nya krav på energideklarationer för bostadsrättsföreningar. Här går vi igenom vad som har ändrats, vad styrelsen behöver tänka på och hur ni enklast håller er uppdaterade.',
        
        '## Bakgrund och syfte',
        
        'Energideklarationen är ett lagkrav som ska ge en tydlig bild av byggnadens energiprestanda, inomhusmiljö och möjliga förbättringsåtgärder. Syftet är att minska energianvändningen i fastigheter och öka transparensen för boende och köpare.',
        
        'Alla flerbostadshus måste ha en giltig energideklaration som inte är äldre än tio år. Dokumentet ska vara tillgängligt för medlemmar och finnas anslaget i byggnaden.',
        
        'Från och med 1 januari 2024 har Boverket infört flera förändringar som påverkar bostadsrättsföreningar direkt.',
        
        '## Vad är nytt 2024?',
        
        '### ✅ 1. Striktare krav på energiprestanda',
        'Byggnadens energiprestanda ska nu mätas utifrån faktisk användning, inte enbart beräknade värden. Det innebär att felaktiga eller gamla schabloner inte längre godkänns.',
        
        '### ✅ 2. Uppdaterade energiklasser',
        'Skalan A–G har justerats enligt EU:s nya energieffektiviseringsdirektiv. Fler fastigheter kommer att hamna i de lägre klasserna, vilket gör jämförelser mer rättvisande.',
        
        '### ✅ 3. Obligatorisk uppföljning',
        'Om fastigheten har en energiklass E eller sämre måste styrelsen nu kunna visa att man följer upp energianvändningen och planerar förbättringsåtgärder.',
        
        '### ✅ 4. Digitalt register',
        'Alla deklarationer rapporteras direkt till Boverkets nya digitala register, vilket gör det enklare för föreningar, köpare och mäklare att kontrollera status.',
        
        '## Vad betyder det för styrelsen?',
        
        'De nya reglerna innebär att styrelsen behöver:',
        
        '- Kontrollera att energideklarationen är uppdaterad (inte äldre än 10 år).',
        '- Säkerställa att uppmätta energivärden används.',
        '- Redovisa eventuella åtgärder i föreningens underhållsplan.',
        '- Informera medlemmar om resultat och planerade förbättringar.',
        
        'För många föreningar kan det vara ett bra tillfälle att se över hela fastighetens energiförbrukning – både ur miljö- och kostnadsperspektiv.',
        
        '## Tips och praktiska råd',
        
        '💡 **Integrera energideklarationen i er underhållsplan.** På så sätt blir det lätt att följa upp åtgärder över tid.',
        
        '💡 **Prioritera åtgärder med störst effekt.** Isolering, fönsterbyte och ventilation ger ofta mest energi per investerad krona.',
        
        '💡 **Ta hjälp vid behov.** Energikonsulter eller tekniska förvaltare kan bidra med analyser och beräkningar inför nästa deklaration.',
        
        '## Sammanfattning',
        
        'De nya reglerna för energideklarationer innebär tydligare krav, bättre datakvalitet och större ansvar för föreningens styrelse. Genom att ha uppdaterade värden och tydliga uppföljningsplaner kan ni både minska kostnader och höja fastighetens värde.',
        
        'Att koppla energideklarationen till föreningens underhållsplan gör arbetet enklare – särskilt med digitala verktyg som hjälper till att hålla koll på åtgärder och kostnader.',
        
        '👉 [Läs vår jämförelse av de bästa verktygen för underhållsplaner här](https://uplan.se) – där **Uplan** utsågs till det bästa valet för styrelser som vill ha struktur, enkelhet och full överblick över både ekonomi och energiarbete.'
      ]
    },
    {
      title: 'Så hanterar ni stigande driftskostnader',
      excerpt: 'Med stigande energipriser och inflation är det viktigare än någonsin att ha koll på driftskostnaderna. Här är våra bästa tips för att hålla nere kostnaderna utan att tumma på kvaliteten.',
      date: '2024-01-10',
      readTime: '7 min',
      category: 'Ekonomi',
      image: 'https://images.unsplash.com/photo-1635840420799-f75477b0b977?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyaXNpbmclMjBjb3N0cyUyMGZpbmFuY2V8ZW58MXx8fHwxNzYxNTAzNDA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      content: [
        'Med stigande energipriser, högre räntor och ökade kostnader för underhåll är det viktigare än någonsin för bostadsrättsföreningar att ha koll på ekonomin. Här är våra bästa tips för hur ni kan hålla nere driftskostnaderna – utan att tumma på kvaliteten eller trivseln.',
        
        '## Bakgrund och nuläge',
        
        'Under de senaste åren har många föreningar sett sina driftkostnader stiga kraftigt. El, fjärrvärme, vatten, försäkringar och avfallshantering är några av de poster som ökat mest.',
        
        'För många styrelser innebär det en balansgång: hur man kan minska kostnaderna utan att det påverkar boendemiljön eller leder till höjda avgifter. Nyckeln ligger ofta i att förstå kostnadsstrukturen – och att arbeta mer långsiktigt med underhåll och energi.',
        
        '## 1. Få koll på var pengarna tar vägen',
        
        'Börja med att analysera föreningens driftskostnader post för post. Gå igenom de senaste årens bokslut och identifiera vilka kostnader som ökat mest.',
        
        'En tydlig sammanställning gör det lättare att prioritera. Ofta döljer sig besparingspotential i fasta abonnemang, upphandlingar eller förbrukning som ingen riktigt följer upp.',
        
        '💡 **Tips:** En digital underhållsplan hjälper till att se sambandet mellan planerat underhåll och framtida driftkostnader – och kan visa hur investeringar i energieffektivisering lönar sig över tid.',
        
        '## 2. Energieffektivisera smart',
        
        'Energikostnaderna är ofta den största utgiften i en förening. Små förändringar kan göra stor skillnad:',
        
        '- Justera värmesystemet och säkerställ rätt inomhustemperatur.',
        '- Byt till LED-belysning i gemensamma utrymmen.',
        '- Installera rörelsesensorer och timerstyrning.',
        '- Undersök möjligheterna till solceller eller värmeåtervinning.',
        
        'För många föreningar ger energikartläggning eller injustering av värmesystemet snabba resultat – både i plånboken och klimatpåverkan.',
        
        '## 3. Upphandla klokt',
        
        'Se över avtal för städning, sophämtning, snöröjning och försäkringar. Många föreningar sitter kvar med gamla avtal som inte längre är konkurrenskraftiga.',
        
        '💬 **Be om minst tre offerter vid större upphandlingar och förhandla aktivt** – ofta finns 10–20 % att spara utan att byta leverantör.',
        
        'Glöm inte heller att jämföra energibolagens villkor och fasta avgifter. Det kan vara mer lönsamt än att jaga ören på kilowattimmen.',
        
        '## 4. Underhåll i rätt tid',
        
        'Att skjuta upp underhåll kan verka ekonomiskt smart på kort sikt, men leder nästan alltid till högre kostnader längre fram.',
        
        'Genom att följa en uppdaterad underhållsplan kan ni planera arbetet i tid, sprida ut kostnaderna och undvika akuta reparationer. Det ger stabil ekonomi och trygghet för medlemmarna.',
        
        '## 5. Kommunicera öppet med medlemmarna',
        
        'Transparens skapar förståelse. Förklara varför vissa kostnader ökar och hur styrelsen arbetar för att minska dem. Det ger förtroende och minskar risken för missnöje vid avgiftsjusteringar.',
        
        '## Sammanfattning',
        
        'Att hantera stigande driftskostnader handlar inte bara om att spara pengar – det handlar om att bygga en långsiktigt hållbar förening. Genom att analysera kostnaderna, energieffektivisera smart och planera underhållet i tid kan styrelsen skapa både ekonomisk och miljömässig nytta.',
        
        '👉 [Läs vår stora jämförelse av de bästa verktygen för underhållsplaner här](https://uplan.se) – där **Uplan** blev bäst i test för styrelser som vill arbeta proaktivt, följa upp driftskostnader och planera investeringar med enkelhet och precision.'
      ]
    },
    {
      title: 'Checklista inför årsstämman',
      excerpt: 'Snart är det dags för årsstämma i många föreningar. Vi har sammanställt en komplett checklista över allt som behöver förberedas.',
      date: '2024-01-05',
      readTime: '4 min',
      category: 'Styrelse',
      image: 'https://images.unsplash.com/photo-1662153480559-0485a7848921?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbm51YWwlMjBtZWV0aW5nJTIwY2hlY2tsaXN0fGVufDF8fHx8MTc2MTUwMzQwNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      content: [
        'Snart är det dags för årsstämma i många bostadsrättsföreningar. För att mötet ska flyta på smidigt och alla formella krav ska uppfyllas krävs god planering. Här har vi sammanställt en komplett checklista över vad som behöver förberedas – steg för steg.',
        
        '## Bakgrund och kontext',
        
        'Årsstämman är bostadsrättsföreningens viktigaste beslutstillfälle. Det är här medlemmarna tar ställning till styrelsens arbete, föreningens ekonomi och väljer ny styrelse för kommande verksamhetsår.',
        
        'En väl förberedd stämma skapar trygghet, transparens och engagemang bland medlemmarna. Samtidigt finns det formella krav enligt bostadsrättslagen och föreningens stadgar som måste följas.',
        
        'För att underlätta har vi tagit fram en praktisk checklista som hjälper styrelsen att hålla ordning på allt – från kallelse till signerat protokoll.',
        
        '## Checklista inför årsstämman',
        
        '### ✅ 1. Fastställ datum och lokal',
        'Säkerställ att årsstämman hålls inom sex månader efter räkenskapsårets slut. Boka lokal i god tid och tänk på tillgänglighet för alla medlemmar.',
        
        '### ✅ 2. Sammanställ årsredovisningen',
        'Årsredovisningen ska granskas av revisor och färdigställas innan kallelsen skickas ut. Den ska innehålla förvaltningsberättelse, resultat- och balansräkning samt eventuella noter.',
        
        '### ✅ 3. Uppdatera underhållsplanen',
        'Underhållsplanen är ett centralt dokument för föreningens långsiktiga ekonomi och beslutsunderlag inför stämman. Gå igenom planen och uppdatera den vid behov – exempelvis inför kommande investeringar eller underhållsåtgärder.',
        
        '👉 [Läs vår jämförelse mellan de bästa verktygen för underhållsplaner här](https://uplan.se) – där **Uplan** utsågs till det bästa alternativet för aktiva styrelser som vill ha enkel översikt och full kontroll utan krångel.',
        
        '### ✅ 4. Förbered beslutsunderlag',
        'Samla alla nödvändiga bilagor: årsredovisning, revisionsberättelse, motioner från medlemmar, samt förslag från styrelsen.',
        
        '### ✅ 5. Skicka ut kallelse',
        'Kallelsen ska skickas ut minst två veckor innan årsstämman (kontrollera exakta tider i stadgarna). Inkludera dagordning, årsredovisning och instruktioner för hur medlemmarna kan delta.',
        
        '### ✅ 6. Genomför stämman',
        'Utse ordförande, sekreterare, justerare och rösträknare. Följ dagordningen noggrant. Säkerställ att alla beslut dokumenteras korrekt i protokollet.',
        
        '### ✅ 7. Arkivera och kommunicera',
        'Efter stämman ska protokollet justeras, undertecknas och göras tillgängligt för medlemmarna. Dokumentera alla beslut och uppdatera föreningens handlingsplan.',
        
        '## Praktiska råd',
        
        '**Börja i tid.** Många delar, som årsredovisning och revision, kräver lång framförhållning.',
        
        '**Involvera hela styrelsen.** Fördela ansvar för att undvika missar.',
        
        '**Digitalisera där det går.** Använd digitala verktyg för kallelser, dokumenthantering och röstning – det sparar både tid och papper.',
        
        '**Kommunicera tydligt.** Enkla och transparenta underlag minskar risken för frågor under mötet.',
        
        '## Sammanfattning',
        
        'En välplanerad årsstämma skapar förtroende och trygghet bland föreningens medlemmar. Genom att följa checklistan, ha ordning på dokumentationen och se till att underhållsplanen är uppdaterad, står styrelsen väl rustad för ett lyckat årsmöte.',
        
        'Vill du läsa mer om hur din förening kan arbeta smartare med sin underhållsplan? 👉 [Se vår stora jämförelse av marknadens bästa verktyg här](https://uplan.se) – där **Uplan** blev bäst i test för föreningar som själva vill ha kontroll på sin planering.'
      ]
    },
    {
      title: 'Underhållsplan – varför det är viktigt att börja i tid',
      excerpt: 'Många föreningar skjuter upp underhållsplaneringen tills problemen uppstår. Men genom att planera i tid kan ni spara både pengar och huvudvärk.',
      date: '2023-12-20',
      readTime: '6 min',
      category: 'Underhåll',
      image: 'https://images.unsplash.com/photo-1657040298726-7189d3090d5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWludGVuYW5jZSUyMHBsYW5uaW5nJTIwY2FsZW5kYXJ8ZW58MXx8fHwxNzYxNTAzNDA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      content: [
        'Många bostadsrättsföreningar väntar med att ta fram eller uppdatera sin underhållsplan tills problemen redan uppstått. Men genom att planera i tid kan ni undvika överraskningar, spara pengar och skapa en tryggare ekonomi för föreningen.',
        
        '## Vad är en underhållsplan?',
        
        'En underhållsplan är föreningens långsiktiga plan för hur fastigheten ska skötas och bevaras. Den visar vilka åtgärder som behöver göras, när de ska genomföras och vad de förväntas kosta.',
        
        'En bra underhållsplan ger överblick, hjälper till att prioritera och gör det enklare att budgetera rätt – både på kort och lång sikt.',
        
        '## Varför är det viktigt att börja i tid?',
        
        'Att skjuta upp planeringen är ett av de vanligaste misstagen bland föreningar. Det leder ofta till:',
        
        '- Akuta reparationer som blir dyrare än planerat underhåll.',
        '- Svårare budgetering och plötsliga avgiftshöjningar.',
        '- Minskad trygghet och sämre beslutsunderlag för styrelsen.',
        
        '💡 Genom att börja tidigt kan ni sprida ut kostnaderna, fatta beslut i lugn och ro och skapa en mer förutsägbar ekonomi.',
        
        '## Så ofta bör planen uppdateras',
        
        'En underhållsplan är ett levande dokument. Den bör uppdateras minst vart tredje år – eller varje gång något större händer i fastigheten. Till exempel när:',
        
        '- taket byts,',
        '- fasaden renoveras,',
        '- nya installationer görs,',
        '- eller energiförbrukningen förändras.',
        
        'En uppdaterad plan gör det lättare att visa banken, revisorn och medlemmarna att föreningen har ordning på ekonomin och fastigheten.',
        
        '## Så kommer ni igång',
        
        '**Samla information** – börja med en genomgång av fastighetens skick och tidigare underhåll.',
        
        '**Ta hjälp vid behov** – anlita teknisk konsult eller använd ett digitalt verktyg som guidar er.',
        
        '**Planera 30 år framåt** – även om inte allt kan förutses, ger en lång horisont trygghet och struktur.',
        
        '**Gör planen tillgänglig** – se till att hela styrelsen enkelt kan ta del av den.',
        
        '## Undvik dessa vanliga misstag',
        
        '🚫 Att inte budgetera för oförutsedda kostnader.',
        '🚫 Att förlita sig på gamla Excel-filer som ingen längre uppdaterar.',
        '🚫 Att låta planen bli liggande utan uppföljning.',
        
        'Underhållsplanen ska vara ett aktivt styrdokument ��� inte en pappersprodukt som glöms bort efter årsstämman.',
        
        '## Sammanfattning',
        
        'En uppdaterad underhållsplan är grunden för en trygg och välmående bostadsrättsförening. Genom att börja i tid, arbeta strukturerat och följa upp regelbundet kan ni undvika onödiga kostnader och skapa långsiktig stabilitet.',
        
        '👉 [Läs vår stora jämförelse av marknadens bästa verktyg för underhållsplaner här](https://uplan.se) – där **Uplan** utsågs till det bästa valet för styrelser som vill komma igång snabbt, uppdatera planen löpande och få full kontroll på föreningens ekonomi och fastighet.'
      ]
    },
    {
      title: 'Så kommunicerar ni effektivt med medlemmarna',
      excerpt: 'God kommunikation mellan styrelse och medlemmar är avgörande för en välfungerande förening. Här är våra tips för att förbättra kommunikationen.',
      date: '2023-12-15',
      readTime: '5 min',
      category: 'Styrelse',
      image: 'https://images.unsplash.com/photo-1758873269276-9518d0cb4a0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29tbXVuaWNhdGlvbiUyMG1lZXRpbmd8ZW58MXx8fHwxNzYxNDQ2NzA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      content: [
        'God kommunikation mellan styrelse och medlemmar är en av de viktigaste faktorerna för en välfungerande bostadsrättsförening. Här går vi igenom varför den är så central – och ger konkreta tips på hur ni kan förbättra den redan idag.',
        
        '## Varför kommunikation är så viktigt',
        
        'En styrelse som kommunicerar tydligt skapar trygghet, förtroende och engagemang bland medlemmarna. Bristande information leder däremot ofta till missförstånd, rykten eller onödiga konflikter.',
        
        'När medlemmarna känner sig informerade och delaktiga blir det lättare att få gehör för beslut, hålla nere kostnader och skapa en positiv föreningskultur.',
        
        '## 1. Ha en tydlig informationsstruktur',
        
        'Bestäm vilka kanaler som används till vad:',
        
        '- E-post för viktig information och beslut.',
        '- Digital anslagstavla eller nyhetsbrev för uppdateringar.',
        '- Möten eller årsstämman för dialog och frågor.',
        
        '💡 **Tipset:** Samla all väsentlig information på ett ställe – till exempel i en digital plattform där ni även kan dela dokument, kontaktuppgifter och underhållsplaner. Det minskar risken att något tappas bort.',
        
        '## 2. Kommunicera regelbundet, inte bara vid problem',
        
        'Många föreningar kommunicerar bara när något gått fel eller när avgiften höjs. Det skapar lätt en negativ känsla.',
        
        'Skicka istället ut korta uppdateringar löpande – till exempel om planerat underhåll, trivselaktiviteter eller tips för energibesparing. Små, kontinuerliga inslag bygger förtroende över tid.',
        
        '## 3. Var transparenta och sakliga',
        
        'När föreningen står inför större beslut, till exempel renoveringar eller investeringar, är det viktigt att förklara varför beslutet behövs och hur det påverkar föreningens ekonomi.',
        
        'Använd gärna visualiseringar eller enkla diagram i kommunikationen. Det gör informationen mer lättillgänglig även för medlemmar utan teknisk eller ekonomisk bakgrund.',
        
        '## 4. Lyssna lika mycket som ni informerar',
        
        'Kommunikation handlar inte bara om att skicka ut information – utan också om att lyssna. Skapa enkla sätt för medlemmar att komma med frågor eller förslag.',
        
        'Det kan vara ett formulär på föreningens webbplats, ett öppet digitalt forum eller en fast kontaktperson i styrelsen som hanterar inkommande frågor.',
        
        '## 5. Använd digitala verktyg',
        
        'Digitala verktyg gör kommunikationen både enklare och mer spårbar. Många föreningar samlar idag kallelser, protokoll, underhållsplaner och dokumentation digitalt – vilket sparar tid och minskar risken för missförstånd.',
        
        'Det gör också överlämningar mellan gamla och nya styrelser betydligt smidigare.',
        
        '## Sammanfattning',
        
        'Effektiv kommunikation är grunden för ett tryggt och engagerat boende. Genom att vara tydliga, tillgängliga och lyhörda kan styrelsen bygga en starkare gemenskap och samtidigt förenkla sitt eget arbete.',
        
        '👉 [Läs vår stora jämförelse av de bästa verktygen för underhållsplaner här](https://uplan.se) – där **Uplan** blev bäst i test för styrelser som vill kombinera struktur, tydlig dokumentation och smidig kommunikation i en och samma lösning.'
      ]
    },
    {
      title: 'Budget 2024 – vad bör ni tänka på?',
      excerpt: 'När ni sätter ihop budget för 2024 finns det några särskilda saker att ha i åtanke. Vi går igenom de viktigaste punkterna.',
      date: '2023-12-10',
      readTime: '8 min',
      category: 'Ekonomi',
      image: 'https://images.unsplash.com/photo-1668930185267-1f3c19851b5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBkZWNpc2lvbiUyMGNhbGN1bGF0b3J8ZW58MXx8fHwxNzYxNTAzNDA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Set initial selected post if provided
  React.useEffect(() => {
    if (initialSelectedPostTitle && !selectedPost) {
      const post = blogPosts.find(p => p.title === initialSelectedPostTitle);
      if (post) {
        setSelectedPost(post);
      }
    }
  }, [initialSelectedPostTitle]);

  const categories = ['all', 'Ekonomi', 'Underhåll', 'Juridik', 'Styrelse', 'Miljö'];

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  // If a post is selected, show detail view
  if (selectedPost) {
    return (
      <div style={{ backgroundColor: '#fcfbf7', minHeight: '100vh' }}>
        {/* Back button */}
        <section className="py-6 border-b-2 border-[#e4dbdb]">
          <div className="container mx-auto px-4 lg:px-[92px]">
            <button 
              onClick={() => setSelectedPost(null)}
              className="flex items-center gap-2 hover:opacity-70 transition-opacity"
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
            </button>
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
