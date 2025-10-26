import svgPaths from "./svg-ulg689q1jw";
import imgImageStyrelsesammantradeIBostadsrattsforening from "figma:asset/3fdf683013e2b0e5a82d296eb98905331b128386.png";
import imgImageBostadsrattsforeningMedParkeringOchGronomraden from "figma:asset/04c1c854fcd7e64239c73e007c19a33518e72868.png";
import imgImageModernBostadsrattsforening from "figma:asset/b8c99ceb382b3b8cd41caa87fcc4c622da16f125.png";

function Container() {
  return <div className="absolute bg-[#f4b335] left-[1048px] size-[384px] top-0" data-name="Container" />;
}

function Container1() {
  return <div className="absolute bg-[#a2a2a2] left-0 size-[320px] top-[536px]" data-name="Container" />;
}

function Container2() {
  return (
    <div className="absolute h-[856px] left-0 opacity-10 top-0 w-[1432px]" data-name="Container">
      <Container />
      <Container1 />
    </div>
  );
}

function Container3() {
  return <div className="absolute h-[80px] left-0 top-[776px] w-[1432px]" data-name="Container" />;
}

function Container4() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[10px] items-start left-0 px-[24px] py-[11px] rounded-[4px] top-0 w-[314.305px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5aa36] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Futura:Medium',_sans-serif] leading-[21px] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[1.5px] whitespace-pre">KOSTNADSFRI KUNSKAPSRESURS</p>
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute h-[114.391px] left-0 top-[72px] w-[592px]" data-name="Heading 1">
      <p className="absolute font-['Futura:Condensed_ExtraBold',_sans-serif] leading-[57.2px] left-0 not-italic text-[52px] text-white top-[-0.5px] tracking-[2px] w-[543px]">VÄGLEDNING FÖR BRF-STYRELSER</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[96px] left-0 top-[218.39px] w-[592px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[32px] left-0 not-italic text-[#edf5fb] text-[20px] top-0 tracking-[-0.4492px] w-[563px]">Som styrelseledamot behöver du kunna fatta välgrundade beslut om ekonomi, underhåll och drift – även om du inte är expert. Vi hjälper dig med det.</p>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#e5aa36] h-[63px] relative rounded-[4px] shrink-0 w-[261.234px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[63px] relative w-[261.234px]">
        <p className="absolute font-['Futura:Medium',_sans-serif] leading-[27px] left-[32px] not-italic text-[18px] text-nowrap text-white top-[18px] tracking-[2px] whitespace-pre">UTFORSKA GUIDER</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="h-[63px] relative rounded-[4px] shrink-0 w-[257.078px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[63px] relative w-[257.078px]">
        <p className="absolute font-['Futura:Medium',_sans-serif] leading-[27px] left-[34px] not-italic text-[18px] text-nowrap text-white top-[18px] tracking-[2px] whitespace-pre">VANLIGA FRÅGOR</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute box-border content-stretch flex gap-[16px] h-[79px] items-start left-0 pb-0 pt-[16px] px-0 top-[346.79px] w-[592px]" data-name="Container">
      <Button />
      <Button1 />
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute h-[560.578px] left-0 top-[35.5px] w-[592px]" data-name="Container">
      <Container4 />
      <Heading />
      <Paragraph />
      <Container5 />
    </div>
  );
}

function ImageStyrelsesammantradeIBostadsrattsforening() {
  return (
    <div className="absolute h-[592px] left-[4px] top-[4px] w-[584px]" data-name="Image (Styrelsesammanträde i bostadsrättsförening)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageStyrelsesammantradeIBostadsrattsforening} />
    </div>
  );
}

function Container7() {
  return <div className="absolute bg-[#e5aa36] left-[460px] size-[128px] top-[4px]" data-name="Container" />;
}

function Container8() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] h-[600px] left-0 rounded-[8px] top-0 w-[592px]" data-name="Container">
      <div className="h-[600px] overflow-clip relative rounded-[inherit] w-[592px]">
        <ImageStyrelsesammantradeIBostadsrattsforening />
        <Container7 />
      </div>
      <div aria-hidden="true" className="absolute border-4 border-[#e5aa36] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function Container9() {
  return (
    <div className="bg-[#009966] opacity-[0.592] relative rounded-[1.67772e+07px] shrink-0 size-[12px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[12px]" />
    </div>
  );
}

function Text() {
  return (
    <div className="h-[21px] relative shrink-0 w-[133.648px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-[133.648px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[21px] left-0 not-italic text-[#1a1a1a] text-[14px] text-nowrap top-0 tracking-[-0.1504px] whitespace-pre">Används av styrelser</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex gap-[12px] h-[21px] items-center relative shrink-0 w-full" data-name="Container">
      <Container9 />
      <Text />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[42px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Futura:Bold',_sans-serif] leading-[42px] left-0 not-italic text-[#009966] text-[28px] text-nowrap top-[-0.5px] whitespace-pre">500+ LÄSTA/VECKA</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute bg-[#fcfbf7] box-border content-stretch flex flex-col gap-[8px] h-[123px] items-start left-[-24px] pb-[2px] pt-[26px] px-[26px] rounded-[8px] top-[501px] w-[348.578px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#e4dbdb] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" />
      <Container10 />
      <Paragraph1 />
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute h-[600px] left-[656px] top-0 w-[592px]" data-name="Container">
      <Container8 />
      <Container11 />
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute h-[600px] left-[92px] top-[128px] w-[1248px]" data-name="Container">
      <Container6 />
      <Container12 />
    </div>
  );
}

function Section() {
  return (
    <div className="h-[856px] overflow-clip relative shrink-0 w-full" data-name="Section">
      <Container2 />
      <Container3 />
      <Container13 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[126px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Futura:Bold',_sans-serif] leading-[63px] left-[384.38px] not-italic text-[#e5aa36] text-[42px] text-center top-0 tracking-[2px] translate-x-[-50%] w-[570px]">VANLIGA FRÅGOR OCH UTMANINGAR</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[57.594px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[28.8px] left-[384.46px] not-italic text-[#1a1a1a] text-[18px] text-center top-[0.5px] tracking-[-0.4395px] translate-x-[-50%] w-[695px]">Oavsett om det handlar om ekonomi, underhåll eller juridik – här får du svar på det som verkligen är viktigt för er förening.</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[207.594px] items-start left-[332px] top-[96px] w-[768px]" data-name="Container">
      <Heading1 />
      <Paragraph2 />
    </div>
  );
}

function Container15() {
  return <div className="absolute bg-[#f4b335] left-[34px] rounded-[1.67772e+07px] size-[8px] top-[34px]" data-name="Container" />;
}

function Heading2() {
  return (
    <div className="absolute h-[36px] left-[34px] top-[58px] w-[492px]" data-name="Heading 3">
      <p className="absolute font-['Futura:Bold',_sans-serif] leading-[36px] left-0 not-italic text-[#e5aa36] text-[24px] text-nowrap top-[0.5px] whitespace-pre">Skapa en årsbudget som håller</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="absolute h-[102.375px] left-[34px] top-[110px] w-[492px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[25.6px] left-0 not-italic text-[#1a1a1a] text-[16px] top-[-1px] tracking-[-0.3125px] w-[470px]">Som styrelse ansvarar ni för att ta fram en realistisk budget som både speglar föreningens behov och håller kostnaderna i schack. En välplanerad budget ger trygghet för både styrelse och medlemmar.</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="[grid-area:1_/_1] bg-white relative rounded-[8px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#e4dbdb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Container15 />
      <Heading2 />
      <Paragraph3 />
    </div>
  );
}

function Container17() {
  return <div className="absolute bg-[#a2a2a2] left-[34px] rounded-[1.67772e+07px] size-[8px] top-[34px]" data-name="Container" />;
}

function Heading3() {
  return (
    <div className="absolute h-[36px] left-[34px] top-[58px] w-[492px]" data-name="Heading 3">
      <p className="absolute font-['Futura:Bold',_sans-serif] leading-[36px] left-0 not-italic text-[#e5aa36] text-[24px] text-nowrap top-[0.5px] whitespace-pre">Förstå K3-redovisning</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="absolute h-[76.781px] left-[34px] top-[110px] w-[492px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[25.6px] left-0 not-italic text-[#1a1a1a] text-[16px] top-[-1px] tracking-[-0.3125px] w-[492px]">K3 är det redovisningsregelverk som gäller för de flesta bostadsrättsföreningar. Det kan verka komplext, men med rätt vägledning blir det hanterbart. Vi hjälper er att förstå vad som krävs.</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="[grid-area:1_/_2] bg-white relative rounded-[8px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#e4dbdb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Container17 />
      <Heading3 />
      <Paragraph4 />
    </div>
  );
}

function Container19() {
  return <div className="absolute bg-[#f4b335] left-[34px] rounded-[1.67772e+07px] size-[8px] top-[34px]" data-name="Container" />;
}

function Heading4() {
  return (
    <div className="absolute h-[36px] left-[34px] top-[58px] w-[492px]" data-name="Heading 3">
      <p className="absolute font-['Futura:Bold',_sans-serif] leading-[36px] left-0 not-italic text-[#e5aa36] text-[24px] text-nowrap top-[0.5px] whitespace-pre">Planera underhåll långsiktigt</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="absolute h-[76.781px] left-[34px] top-[110px] w-[492px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[25.6px] left-0 not-italic text-[#1a1a1a] text-[16px] top-[-1px] tracking-[-0.3125px] w-[472px]">En genomtänkt underhållsplan hjälper er att undvika akuta reparationer och oväntade kostnader. Genom att planera i god tid kan ni sprida kostnaderna över tid och hålla avgifterna stabila.</p>
    </div>
  );
}

function Container20() {
  return (
    <div className="[grid-area:2_/_1] bg-white h-[220.781px] relative rounded-[8px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#e4dbdb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Container19 />
      <Heading4 />
      <Paragraph5 />
    </div>
  );
}

function Container21() {
  return <div className="absolute bg-[#a2a2a2] left-[34px] rounded-[1.67772e+07px] size-[8px] top-[34px]" data-name="Container" />;
}

function Heading5() {
  return (
    <div className="absolute h-[36px] left-[34px] top-[58px] w-[492px]" data-name="Heading 3">
      <p className="absolute font-['Futura:Bold',_sans-serif] leading-[36px] left-0 not-italic text-[#e5aa36] text-[24px] text-nowrap top-[0.5px] whitespace-pre">Förbered er inför revisionen</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="absolute h-[76.781px] left-[34px] top-[110px] w-[492px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[25.6px] left-0 not-italic text-[#1a1a1a] text-[16px] top-[-1px] tracking-[-0.3125px] w-[477px]">Revisionen är en viktig del av föreningens kvalitetssäkring. Genom att veta vad revisorn tittar på kan ni säkerställa att dokumentation och rutiner är på plats.</p>
    </div>
  );
}

function Container22() {
  return (
    <div className="[grid-area:2_/_2] bg-white h-[220.781px] relative rounded-[8px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#e4dbdb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Container21 />
      <Heading5 />
      <Paragraph6 />
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute gap-[32px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[246.38px_minmax(0px,_1fr)] h-[499.156px] left-[140px] top-[367.59px] w-[1152px]" data-name="Container">
      <Container16 />
      <Container18 />
      <Container20 />
      <Container22 />
    </div>
  );
}

function Section1() {
  return (
    <div className="bg-[#fcfbf7] h-[962.75px] relative shrink-0 w-full" data-name="Section">
      <Container14 />
      <Container23 />
    </div>
  );
}

function Container24() {
  return <div className="h-[80px] shrink-0 w-full" data-name="Container" />;
}

function Heading6() {
  return (
    <div className="h-[114px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Futura:Bold',_sans-serif] leading-[57px] left-0 not-italic text-[#e5aa36] text-[38px] top-[0.5px] tracking-[1px] w-[551px]">KUNSKAP GER TRYGGARE BESLUT</p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[86.391px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[28.8px] left-0 not-italic text-[#1a1a1a] text-[18px] top-[0.5px] tracking-[-0.4395px] w-[549px]">Som styrelseledamot i en bostadsrättsförening fattar du beslut som påverkar både medlemmarnas ekonomi och deras vardag. Beslut om underhåll, avgifter, renoveringar och långsiktig planering.</p>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[86.391px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[28.8px] left-0 not-italic text-[#1a1a1a] text-[18px] top-[0.5px] tracking-[-0.4395px] w-[536px]">Med rätt kunskap blir det lättare att navigera genom utmaningarna. Våra guider ger dig konkreta svar på vanliga frågor – från hur man bygger en budget till vad som gäller enligt lagen.</p>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[51.188px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[25.6px] left-0 not-italic text-[#1a1a1a] text-[16px] top-[-1px] tracking-[-0.3125px] w-[523px]">Allt material är skrivet för att vara begripligt och användbart, även om du inte har tidigare erfarenhet av ekonomi eller förvaltning.</p>
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[409.969px] items-start left-[740px] top-[141.02px] w-[552px]" data-name="Container">
      <Heading6 />
      <Paragraph7 />
      <Paragraph8 />
      <Paragraph9 />
    </div>
  );
}

function ImageBostadsrattsforeningMedParkeringOchGronomraden() {
  return (
    <div className="absolute h-[496px] left-[2px] top-[2px] w-[548px]" data-name="Image (Bostadsrättsförening med parkering och grönområden)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageBostadsrattsforeningMedParkeringOchGronomraden} />
    </div>
  );
}

function Container26() {
  return <div className="absolute bg-[#f4b335] left-[2px] size-[96px] top-[402px]" data-name="Container" />;
}

function Container27() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] h-[500px] left-[140px] rounded-[8px] top-[96px] w-[552px]" data-name="Container">
      <div className="h-[500px] overflow-clip relative rounded-[inherit] w-[552px]">
        <ImageBostadsrattsforeningMedParkeringOchGronomraden />
        <Container26 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#e4dbdb] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Section2() {
  return (
    <div className="bg-[#f9f9f4] h-[692px] relative shrink-0 w-full" data-name="Section">
      <Container25 />
      <Container27 />
    </div>
  );
}

function Heading7() {
  return (
    <div className="h-[63px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Futura:Bold',_sans-serif] leading-[63px] left-[624.03px] not-italic text-[#e5aa36] text-[42px] text-center text-nowrap top-0 tracking-[2px] translate-x-[-50%] whitespace-pre">POPULÄRA GUIDER</p>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[28.797px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[28.8px] left-[624.47px] not-italic text-[#1a1a1a] text-[18px] text-center text-nowrap top-[0.5px] tracking-[-0.4395px] translate-x-[-50%] whitespace-pre">Börja här – detta är de guider som andra styrelser använder mest</p>
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[115.797px] items-start left-[92px] top-[96px] w-[1248px]" data-name="Container">
      <Heading7 />
      <Paragraph10 />
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute content-stretch flex h-[15.5px] items-start left-[16px] top-[9.5px] w-[72.703px]" data-name="Text">
      <p className="basis-0 font-['Futura:Medium',_sans-serif] grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#e5aa36] text-[12px] tracking-[1px]">EKONOMI</p>
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute bg-[#f9f9f4] h-[32px] left-[34px] rounded-[4px] top-[34px] w-[104.703px]" data-name="Container">
      <Text1 />
    </div>
  );
}

function Heading8() {
  return (
    <div className="absolute h-[57.188px] left-[34px] top-[82px] w-[294.664px]" data-name="Heading 3">
      <p className="absolute font-['Futura:Bold',_sans-serif] leading-[28.6px] left-0 not-italic text-[#e5aa36] text-[22px] top-0 w-[277px]">Så skapar ni en årsbudget steg för steg</p>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="absolute h-[120px] left-[34px] top-[155.19px] w-[294.664px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[#1a1a1a] text-[15px] top-0 tracking-[-0.2344px] w-[281px]">En komplett genomgång av budgetprocessen – från att samla in data till att få godkännande på stämman. Med konkreta exempel och mallar som ni kan använda direkt.</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[80.33px] size-[16px] top-[2.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, #F4B335)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.9569 0.7020 0.2078)", strokeOpacity: "1" }} />
          <path d={svgPaths.p1d405500} id="Vector_2" stroke="var(--stroke-0, #F4B335)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.9569 0.7020 0.2078)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute h-[21px] left-[34px] top-[297.19px] w-[96.328px]" data-name="Button">
      <p className="absolute font-['Futura:Medium',_sans-serif] leading-[21px] left-0 not-italic text-[#e5aa36] text-[14px] text-nowrap top-[0.5px] tracking-[1px] whitespace-pre">LÄS MER</p>
      <Icon />
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute bg-white h-[353.188px] left-0 rounded-[8px] top-0 w-[362.664px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#e4dbdb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Container29 />
      <Heading8 />
      <Paragraph11 />
      <Button2 />
    </div>
  );
}

function Text2() {
  return (
    <div className="absolute content-stretch flex h-[15.5px] items-start left-[16px] top-[9.5px] w-[72.703px]" data-name="Text">
      <p className="basis-0 font-['Futura:Medium',_sans-serif] grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#e5aa36] text-[12px] tracking-[1px]">EKONOMI</p>
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute bg-[#f9f9f4] h-[32px] left-[34px] rounded-[4px] top-[34px] w-[104.703px]" data-name="Container">
      <Text2 />
    </div>
  );
}

function Heading9() {
  return (
    <div className="absolute content-stretch flex h-[28.594px] items-start left-[34px] top-[82px] w-[294.664px]" data-name="Heading 3">
      <p className="font-['Futura:Bold',_sans-serif] leading-[28.6px] not-italic relative shrink-0 text-[#e5aa36] text-[22px] text-nowrap whitespace-pre">K3-redovisning förklarat</p>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="absolute h-[96px] left-[34px] top-[126.59px] w-[294.664px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[#1a1a1a] text-[15px] top-0 tracking-[-0.2344px] w-[283px]">Vad K3 innebär för er förening, vilka krav som ställs på årsredovisningen och hur ni praktiskt hanterar övergången. Med exempel från verkliga föreningar.</p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-[80.33px] size-[16px] top-[2.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, #F4B335)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.9569 0.7020 0.2078)", strokeOpacity: "1" }} />
          <path d={svgPaths.p1d405500} id="Vector_2" stroke="var(--stroke-0, #F4B335)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.9569 0.7020 0.2078)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute h-[21px] left-[34px] top-[244.59px] w-[96.328px]" data-name="Button">
      <p className="absolute font-['Futura:Medium',_sans-serif] leading-[21px] left-0 not-italic text-[#e5aa36] text-[14px] text-nowrap top-[0.5px] tracking-[1px] whitespace-pre">LÄS MER</p>
      <Icon1 />
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute bg-white h-[353.188px] left-[394.66px] rounded-[8px] top-0 w-[362.664px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#e4dbdb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Container31 />
      <Heading9 />
      <Paragraph12 />
      <Button3 />
    </div>
  );
}

function Text3() {
  return (
    <div className="absolute content-stretch flex h-[15.5px] items-start left-[16px] top-[9.5px] w-[86.898px]" data-name="Text">
      <p className="basis-0 font-['Futura:Medium',_sans-serif] grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#e5aa36] text-[12px] tracking-[1px]">UNDERHÅLL</p>
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute bg-[#f9f9f4] h-[32px] left-[34px] rounded-[4px] top-[34px] w-[118.898px]" data-name="Container">
      <Text3 />
    </div>
  );
}

function Heading10() {
  return (
    <div className="absolute h-[57.188px] left-[34px] top-[82px] w-[294.664px]" data-name="Heading 3">
      <p className="absolute font-['Futura:Bold',_sans-serif] leading-[28.6px] left-0 not-italic text-[#e5aa36] text-[22px] top-0 w-[281px]">Bygg en underhållsplan som fungerar</p>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="absolute h-[96px] left-[34px] top-[155.19px] w-[294.664px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[#1a1a1a] text-[15px] top-0 tracking-[-0.2344px] w-[261px]">Lär er identifiera underhållsbehov, uppskatta kostnader och skapa en långsiktig plan som ger medlemmarna trygghet och förutsägbarhet.</p>
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-[80.33px] size-[16px] top-[2.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, #F4B335)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.9569 0.7020 0.2078)", strokeOpacity: "1" }} />
          <path d={svgPaths.p1d405500} id="Vector_2" stroke="var(--stroke-0, #F4B335)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.9569 0.7020 0.2078)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute h-[21px] left-[34px] top-[273.19px] w-[96.328px]" data-name="Button">
      <p className="absolute font-['Futura:Medium',_sans-serif] leading-[21px] left-0 not-italic text-[#e5aa36] text-[14px] text-nowrap top-[0.5px] tracking-[1px] whitespace-pre">LÄS MER</p>
      <Icon2 />
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute bg-white h-[353.188px] left-[789.33px] rounded-[8px] top-0 w-[362.664px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#e4dbdb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Container33 />
      <Heading10 />
      <Paragraph13 />
      <Button4 />
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute h-[353.188px] left-[140px] top-[275.8px] w-[1152px]" data-name="Container">
      <Container30 />
      <Container32 />
      <Container34 />
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute h-[63px] left-[596.49px] rounded-[4px] top-[676.98px] w-[239.016px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[#e5aa36] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="absolute font-['Futura:Medium',_sans-serif] leading-[27px] left-[34px] not-italic text-[#e5aa36] text-[18px] text-nowrap top-[18px] tracking-[2px] whitespace-pre">SE ALLA GUIDER</p>
    </div>
  );
}

function Section3() {
  return (
    <div className="bg-[#fcfbf7] h-[835.984px] relative shrink-0 w-full" data-name="Section">
      <Container28 />
      <Container35 />
      <Button5 />
    </div>
  );
}

function Heading11() {
  return (
    <div className="h-[63px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Futura:Bold',_sans-serif] leading-[63px] left-[576.37px] not-italic text-[#e5aa36] text-[42px] text-center text-nowrap top-0 tracking-[2px] translate-x-[-50%] whitespace-pre">DIGITALA VERKTYG OCH RESURSER</p>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="h-[28.797px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[28.8px] left-[576.33px] not-italic text-[#1a1a1a] text-[18px] text-center text-nowrap top-[0.5px] tracking-[-0.4395px] translate-x-[-50%] whitespace-pre">Förutom våra guider finns det digitala verktyg som kan förenkla styrelsearbetet. Här är några som används av BRF-styrelser i Sverige.</p>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[115.797px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading11 />
      <Paragraph14 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p26428b00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{ stroke: "white", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute bg-[#e5aa36] content-stretch flex items-center justify-center left-[34px] rounded-[8px] size-[48px] top-[34px]" data-name="Container">
      <Icon3 />
    </div>
  );
}

function Heading12() {
  return (
    <div className="absolute h-[33px] left-[34px] top-[106px] w-[294.664px]" data-name="Heading 3">
      <p className="absolute font-['Futura:Bold',_sans-serif] leading-[33px] left-0 not-italic text-[#e5aa36] text-[22px] text-nowrap top-0 whitespace-pre">Budget och planering</p>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="absolute h-[72px] left-[34px] top-[151px] w-[294.664px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[#1a1a1a] text-[15px] top-0 tracking-[-0.2344px] w-[289px]">Verktyg för att hantera budget, ekonomisk uppföljning och underhållsplanering digitalt.</p>
    </div>
  );
}

function Text4() {
  return (
    <div className="absolute h-[22.5px] left-0 top-0 w-[60.039px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[22.5px] left-0 not-italic text-[#414141] text-[15px] text-nowrap top-[-0.5px] tracking-[-0.2344px] whitespace-pre">Uplan.se</p>
    </div>
  );
}

function Icon4() {
  return (
    <div className="absolute left-[68.04px] size-[16px] top-[3.25px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M10 2H14V6" id="Vector" stroke="var(--stroke-0, #414141)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.2535 0.2535 0.2535)", strokeOpacity: "1" }} />
          <path d="M6.66667 9.33333L14 2" id="Vector_2" stroke="var(--stroke-0, #414141)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.2535 0.2535 0.2535)", strokeOpacity: "1" }} />
          <path d={svgPaths.p25f66900} id="Vector_3" stroke="var(--stroke-0, #414141)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.2535 0.2535 0.2535)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Link() {
  return (
    <div className="absolute h-[22.5px] left-0 top-px w-[84.039px]" data-name="Link">
      <Text4 />
      <Icon4 />
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="absolute h-[19.5px] left-0 top-[28px] w-[294.664px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[#1a1a1a] text-[13px] text-nowrap top-px tracking-[-0.0762px] whitespace-pre">Specialiserat för BRF:er</p>
    </div>
  );
}

function Container38() {
  return (
    <div className="h-[47.5px] relative shrink-0 w-full" data-name="Container">
      <Link />
      <Paragraph16 />
    </div>
  );
}

function Text5() {
  return (
    <div className="absolute h-[22.5px] left-0 top-0 w-[65.625px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[22.5px] left-0 not-italic text-[#414141] text-[15px] text-nowrap top-[-0.5px] tracking-[-0.2344px] whitespace-pre">Proceedo</p>
    </div>
  );
}

function Icon5() {
  return (
    <div className="absolute left-[73.63px] size-[16px] top-[3.25px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M10 2H14V6" id="Vector" stroke="var(--stroke-0, #414141)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.2535 0.2535 0.2535)", strokeOpacity: "1" }} />
          <path d="M6.66667 9.33333L14 2" id="Vector_2" stroke="var(--stroke-0, #414141)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.2535 0.2535 0.2535)", strokeOpacity: "1" }} />
          <path d={svgPaths.p25f66900} id="Vector_3" stroke="var(--stroke-0, #414141)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.2535 0.2535 0.2535)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Link1() {
  return (
    <div className="absolute h-[22.5px] left-0 top-px w-[89.625px]" data-name="Link">
      <Text5 />
      <Icon5 />
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="absolute h-[19.5px] left-0 top-[28px] w-[294.664px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[#1a1a1a] text-[13px] text-nowrap top-px tracking-[-0.0762px] whitespace-pre">Upphandling och inköp</p>
    </div>
  );
}

function Container39() {
  return (
    <div className="h-[47.5px] relative shrink-0 w-full" data-name="Container">
      <Link1 />
      <Paragraph17 />
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[107px] items-start left-[34px] top-[247.97px] w-[294.664px]" data-name="Container">
      <Container38 />
      <Container39 />
    </div>
  );
}

function Container41() {
  return (
    <div className="absolute bg-white h-[388px] left-0 rounded-[8px] top-0 w-[362.664px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#e4dbdb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Container37 />
      <Heading12 />
      <Paragraph15 />
      <Container40 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p3a2fce80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{ stroke: "white", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container42() {
  return (
    <div className="absolute bg-[#f4b335] content-stretch flex items-center justify-center left-[34px] rounded-[8px] size-[48px] top-[34px]" data-name="Container">
      <Icon6 />
    </div>
  );
}

function Heading13() {
  return (
    <div className="absolute h-[33px] left-[34px] top-[106px] w-[294.664px]" data-name="Heading 3">
      <p className="absolute font-['Futura:Bold',_sans-serif] leading-[33px] left-0 not-italic text-[#e5aa36] text-[22px] text-nowrap top-0 whitespace-pre">Kommunikation</p>
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="absolute h-[48px] left-[34px] top-[151px] w-[294.664px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[#1a1a1a] text-[15px] top-0 tracking-[-0.2344px] w-[253px]">Plattformar för att kommunicera med medlemmar och hantera ärenden.</p>
    </div>
  );
}

function Text6() {
  return (
    <div className="absolute h-[22.5px] left-0 top-0 w-[51.461px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[22.5px] left-0 not-italic text-[#414141] text-[15px] text-nowrap top-[-0.5px] tracking-[-0.2344px] whitespace-pre">Boplats</p>
    </div>
  );
}

function Icon7() {
  return (
    <div className="absolute left-[59.46px] size-[16px] top-[3.25px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M10 2H14V6" id="Vector" stroke="var(--stroke-0, #414141)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.2535 0.2535 0.2535)", strokeOpacity: "1" }} />
          <path d="M6.66667 9.33333L14 2" id="Vector_2" stroke="var(--stroke-0, #414141)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.2535 0.2535 0.2535)", strokeOpacity: "1" }} />
          <path d={svgPaths.p25f66900} id="Vector_3" stroke="var(--stroke-0, #414141)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.2535 0.2535 0.2535)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Link2() {
  return (
    <div className="absolute h-[22.5px] left-0 top-px w-[75.461px]" data-name="Link">
      <Text6 />
      <Icon7 />
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="absolute h-[19.5px] left-0 top-[28px] w-[294.664px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[#1a1a1a] text-[13px] text-nowrap top-px tracking-[-0.0762px] whitespace-pre">Ärende- och felanmälan</p>
    </div>
  );
}

function Container43() {
  return (
    <div className="h-[47.5px] relative shrink-0 w-full" data-name="Container">
      <Link2 />
      <Paragraph19 />
    </div>
  );
}

function Text7() {
  return (
    <div className="absolute h-[22.5px] left-0 top-0 w-[88.578px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[22.5px] left-0 not-italic text-[#414141] text-[15px] text-nowrap top-[-0.5px] tracking-[-0.2344px] whitespace-pre">Kontorsdröm</p>
    </div>
  );
}

function Icon8() {
  return (
    <div className="absolute left-[96.58px] size-[16px] top-[3.25px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M10 2H14V6" id="Vector" stroke="var(--stroke-0, #414141)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.2535 0.2535 0.2535)", strokeOpacity: "1" }} />
          <path d="M6.66667 9.33333L14 2" id="Vector_2" stroke="var(--stroke-0, #414141)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.2535 0.2535 0.2535)", strokeOpacity: "1" }} />
          <path d={svgPaths.p25f66900} id="Vector_3" stroke="var(--stroke-0, #414141)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.2535 0.2535 0.2535)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Link3() {
  return (
    <div className="absolute h-[22.5px] left-0 top-px w-[112.578px]" data-name="Link">
      <Text7 />
      <Icon8 />
    </div>
  );
}

function Paragraph20() {
  return (
    <div className="absolute h-[19.5px] left-0 top-[28px] w-[294.664px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[#1a1a1a] text-[13px] text-nowrap top-px tracking-[-0.0762px] whitespace-pre">Digital styrelseportal</p>
    </div>
  );
}

function Container44() {
  return (
    <div className="h-[47.5px] relative shrink-0 w-full" data-name="Container">
      <Link3 />
      <Paragraph20 />
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[107px] items-start left-[34px] top-[247.97px] w-[294.664px]" data-name="Container">
      <Container43 />
      <Container44 />
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute bg-white h-[388px] left-[394.66px] rounded-[8px] top-0 w-[362.664px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#e4dbdb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Container42 />
      <Heading13 />
      <Paragraph18 />
      <Container45 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p2e9f4770} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{ stroke: "white", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container47() {
  return (
    <div className="absolute bg-[#e5aa36] content-stretch flex items-center justify-center left-[34px] rounded-[8px] size-[48px] top-[34px]" data-name="Container">
      <Icon9 />
    </div>
  );
}

function Heading14() {
  return (
    <div className="absolute h-[33px] left-[34px] top-[106px] w-[294.664px]" data-name="Heading 3">
      <p className="absolute font-['Futura:Bold',_sans-serif] leading-[33px] left-0 not-italic text-[#e5aa36] text-[22px] text-nowrap top-0 whitespace-pre">Juridik och dokument</p>
    </div>
  );
}

function Paragraph21() {
  return (
    <div className="absolute h-[48px] left-[34px] top-[151px] w-[294.664px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[#1a1a1a] text-[15px] top-0 tracking-[-0.2344px] w-[245px]">Resurser för juridisk vägledning och dokumenthantering.</p>
    </div>
  );
}

function Text8() {
  return (
    <div className="absolute h-[22.5px] left-0 top-0 w-[38.984px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[22.5px] left-0 not-italic text-[#414141] text-[15px] text-nowrap top-[-0.5px] tracking-[-0.2344px] whitespace-pre">Ratsit</p>
    </div>
  );
}

function Icon10() {
  return (
    <div className="absolute left-[46.98px] size-[16px] top-[3.25px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M10 2H14V6" id="Vector" stroke="var(--stroke-0, #414141)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.2535 0.2535 0.2535)", strokeOpacity: "1" }} />
          <path d="M6.66667 9.33333L14 2" id="Vector_2" stroke="var(--stroke-0, #414141)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.2535 0.2535 0.2535)", strokeOpacity: "1" }} />
          <path d={svgPaths.p25f66900} id="Vector_3" stroke="var(--stroke-0, #414141)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.2535 0.2535 0.2535)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Link4() {
  return (
    <div className="absolute h-[22.5px] left-0 top-px w-[62.984px]" data-name="Link">
      <Text8 />
      <Icon10 />
    </div>
  );
}

function Paragraph22() {
  return (
    <div className="absolute h-[19.5px] left-0 top-[28px] w-[294.664px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[#1a1a1a] text-[13px] text-nowrap top-px tracking-[-0.0762px] whitespace-pre">Företagsinformation</p>
    </div>
  );
}

function Container48() {
  return (
    <div className="h-[47.5px] relative shrink-0 w-full" data-name="Container">
      <Link4 />
      <Paragraph22 />
    </div>
  );
}

function Text9() {
  return (
    <div className="absolute h-[22.5px] left-0 top-0 w-[63.156px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[22.5px] left-0 not-italic text-[#414141] text-[15px] text-nowrap top-[-0.5px] tracking-[-0.2344px] whitespace-pre">Allabolag</p>
    </div>
  );
}

function Icon11() {
  return (
    <div className="absolute left-[71.16px] size-[16px] top-[3.25px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M10 2H14V6" id="Vector" stroke="var(--stroke-0, #414141)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.2535 0.2535 0.2535)", strokeOpacity: "1" }} />
          <path d="M6.66667 9.33333L14 2" id="Vector_2" stroke="var(--stroke-0, #414141)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.2535 0.2535 0.2535)", strokeOpacity: "1" }} />
          <path d={svgPaths.p25f66900} id="Vector_3" stroke="var(--stroke-0, #414141)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.2535 0.2535 0.2535)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Link5() {
  return (
    <div className="absolute h-[22.5px] left-0 top-px w-[87.156px]" data-name="Link">
      <Text9 />
      <Icon11 />
    </div>
  );
}

function Paragraph23() {
  return (
    <div className="absolute h-[19.5px] left-0 top-[28px] w-[294.664px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[#1a1a1a] text-[13px] text-nowrap top-px tracking-[-0.0762px] whitespace-pre">Bolagsinfo och nyckeltal</p>
    </div>
  );
}

function Container49() {
  return (
    <div className="h-[47.5px] relative shrink-0 w-full" data-name="Container">
      <Link5 />
      <Paragraph23 />
    </div>
  );
}

function Container50() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[107px] items-start left-[34px] top-[247.97px] w-[294.664px]" data-name="Container">
      <Container48 />
      <Container49 />
    </div>
  );
}

function Container51() {
  return (
    <div className="absolute bg-white h-[388px] left-[789.33px] rounded-[8px] top-0 w-[362.664px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#e4dbdb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Container47 />
      <Heading14 />
      <Paragraph21 />
      <Container50 />
    </div>
  );
}

function Container52() {
  return (
    <div className="h-[388px] relative shrink-0 w-full" data-name="Container">
      <Container41 />
      <Container46 />
      <Container51 />
    </div>
  );
}

function Paragraph24() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[21px] left-[576.03px] not-italic text-[#1a1a1a] text-[14px] text-center text-nowrap top-0 tracking-[-0.1504px] translate-x-[-50%] whitespace-pre">Observera: BRF-guide.se är oberoende och har inga kommersiella samarbeten med ovanstående verktyg.</p>
    </div>
  );
}

function Section4() {
  return (
    <div className="bg-[#f9f9f4] h-[828.797px] relative shrink-0 w-full" data-name="Section">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[64px] h-[828.797px] items-start pb-0 pt-[96px] px-[140px] relative w-full">
          <Container36 />
          <Container52 />
          <Paragraph24 />
        </div>
      </div>
    </div>
  );
}

function Heading15() {
  return (
    <div className="absolute h-[114px] left-0 top-0 w-[552px]" data-name="Heading 2">
      <p className="absolute font-['Futura:Bold',_sans-serif] leading-[57px] left-0 not-italic text-[#e5aa36] text-[38px] top-[0.5px] tracking-[1px] w-[533px]">LÅNGSIKTIG PLANERING LÖNAR SIG</p>
    </div>
  );
}

function Paragraph25() {
  return (
    <div className="absolute h-[86.391px] left-0 top-[138px] w-[552px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[28.8px] left-0 not-italic text-[#1a1a1a] text-[18px] top-[0.5px] tracking-[-0.4395px] w-[552px]">En genomtänkt underhållsplan är skillnaden mellan att styra proaktivt och att hela tiden släcka bränder. Med en plan vet ni vad som behöver göras när, och kan budgetera för det i god tid.</p>
    </div>
  );
}

function Paragraph26() {
  return (
    <div className="absolute h-[86.391px] left-0 top-[248.39px] w-[552px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[28.8px] left-0 not-italic text-[#1a1a1a] text-[18px] top-[0.5px] tracking-[-0.4395px] w-[547px]">Våra guider hjälper er att komma igång med underhållsplaneringen – från att inventera fastigheten till att uppskatta kostnader och prioritera åtgärder.</p>
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute bg-[#e5aa36] h-[59px] left-0 rounded-[4px] top-[366.78px] w-[278.141px]" data-name="Button">
      <p className="absolute font-['Futura:Medium',_sans-serif] leading-[27px] left-[32px] not-italic text-[18px] text-nowrap text-white top-[16px] tracking-[2px] whitespace-pre">LÄS OM UNDERHÅLL</p>
    </div>
  );
}

function Container53() {
  return (
    <div className="absolute h-[425.781px] left-[140px] top-[133.11px] w-[552px]" data-name="Container">
      <Heading15 />
      <Paragraph25 />
      <Paragraph26 />
      <Button6 />
    </div>
  );
}

function ImageModernBostadsrattsforening() {
  return (
    <div className="absolute h-[496px] left-[2px] top-[2px] w-[548px]" data-name="Image (Modern bostadsrättsförening)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageModernBostadsrattsforening} />
    </div>
  );
}

function Container54() {
  return <div className="absolute bg-[#a2a2a2] left-[454px] size-[96px] top-[2px]" data-name="Container" />;
}

function Container55() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] h-[500px] left-[740px] rounded-[8px] top-[96px] w-[552px]" data-name="Container">
      <div className="h-[500px] overflow-clip relative rounded-[inherit] w-[552px]">
        <ImageModernBostadsrattsforening />
        <Container54 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#e4dbdb] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Section5() {
  return (
    <div className="bg-[#fcfbf7] h-[692px] relative shrink-0 w-full" data-name="Section">
      <Container53 />
      <Container55 />
    </div>
  );
}

function HomePage() {
  return (
    <div className="bg-[#fcfbf7] h-[5187.53px] relative shrink-0 w-[1432px]" data-name="HomePage">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[5187.53px] items-start relative w-[1432px]">
        <Section />
        <Section1 />
        <Container24 />
        <Section2 />
        <Container24 />
        <Section3 />
        <Container24 />
        <Section4 />
        <Container24 />
        <Section5 />
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute bottom-[0.04%] contents left-0 right-[0.02%] top-0">
      <div className="absolute bottom-[0.07%] left-[72.9%] right-[0.02%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 40">
          <path d={svgPaths.p21f5dd00} fill="var(--fill-0, #425F40)" id="Rectangle 94" style={{ fill: "color(display-p3 0.2588 0.3725 0.2510)", fillOpacity: "1" }} />
        </svg>
      </div>
      <div className="absolute inset-[6.1%_69.29%_0.11%_10.01%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 38">
          <path d={svgPaths.p1f19d00} fill="var(--fill-0, #007A55)" id="Rectangle 90" style={{ fill: "color(display-p3 0.0000 0.4782 0.3335)", fillOpacity: "1" }} />
        </svg>
      </div>
      <div className="absolute inset-[25.56%_22.53%_0.07%_57.51%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 30">
          <path d={svgPaths.p2302fb00} fill="var(--fill-0, #E5AA36)" id="Rectangle 92" style={{ fill: "color(display-p3 0.8980 0.6667 0.2118)", fillOpacity: "1" }} />
        </svg>
      </div>
      <div className="absolute bottom-[0.11%] left-0 right-[79.35%] top-[19.9%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 32">
          <path d={svgPaths.pe479800} fill="var(--fill-0, #A3D0C1)" id="Rectangle 88" style={{ fill: "color(display-p3 0.6404 0.8154 0.7571)", fillOpacity: "1" }} />
        </svg>
      </div>
      <div className="absolute bottom-[0.04%] left-[29.21%] right-[50.67%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 40">
          <path d={svgPaths.p330a2880} fill="var(--fill-0, #425F40)" id="Rectangle 91" style={{ fill: "color(display-p3 0.2588 0.3725 0.2510)", fillOpacity: "1" }} />
        </svg>
      </div>
      <div className="absolute inset-[8.99%_37.2%_0.04%_42.05%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 37">
          <path d={svgPaths.p2aec2a80} fill="var(--fill-0, #A3D0C1)" id="Rectangle 93" style={{ fill: "color(display-p3 0.6404 0.8154 0.7571)", fillOpacity: "1" }} />
        </svg>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="h-[40px] overflow-clip relative shrink-0 w-full" data-name="Group">
      <Group2 />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col h-[40px] items-start left-0 overflow-clip top-[-0.03px] w-[62px]" data-name="Frame">
      <Group />
    </div>
  );
}

function Text10() {
  return (
    <div className="absolute h-[30px] left-[78px] top-[9.97px] w-[113.742px]" data-name="Text">
      <p className="absolute font-['Futura:Bold',_sans-serif] leading-[30px] left-0 not-italic text-[#e5aa36] text-[20px] text-nowrap top-0 whitespace-pre">BRF GUIDEN</p>
    </div>
  );
}

function Container56() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <Frame />
      <Text10 />
    </div>
  );
}

function Paragraph27() {
  return (
    <div className="h-[51.188px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[25.6px] left-0 not-italic text-[#1a1a1a] text-[16px] top-[-1px] tracking-[-0.3125px] w-[241px]">Praktisk vägledning för styrelser i bostadsrättsföreningar</p>
    </div>
  );
}

function Container57() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Container">
      <Container56 />
      <Paragraph27 />
    </div>
  );
}

function Heading16() {
  return (
    <div className="h-[27px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Futura:Bold',_sans-serif] leading-[27px] left-0 not-italic text-[#e5aa36] text-[18px] text-nowrap top-0 whitespace-pre">Navigation</p>
    </div>
  );
}

function Button7() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[34.703px]" data-name="Button">
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[24px] left-0 not-italic text-[#1a1a1a] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">Hem</p>
    </div>
  );
}

function ListItem() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Button7 />
    </div>
  );
}

function Button8() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[49.578px]" data-name="Button">
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[24px] left-0 not-italic text-[#1a1a1a] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">Guider</p>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Button8 />
    </div>
  );
}

function Button9() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[42.922px]" data-name="Button">
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[24px] left-0 not-italic text-[#1a1a1a] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">Blogg</p>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Button9 />
    </div>
  );
}

function Button10() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[103.539px]" data-name="Button">
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[24px] left-0 not-italic text-[#1a1a1a] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">Vanliga frågor</p>
    </div>
  );
}

function ListItem3() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Button10 />
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[132px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem />
      <ListItem1 />
      <ListItem2 />
      <ListItem3 />
    </div>
  );
}

function Container58() {
  return (
    <div className="[grid-area:1_/_2] content-stretch flex flex-col gap-[24px] items-start relative shrink-0" data-name="Container">
      <Heading16 />
      <List />
    </div>
  );
}

function Heading17() {
  return (
    <div className="h-[27px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Futura:Bold',_sans-serif] leading-[27px] left-0 not-italic text-[#e5aa36] text-[18px] text-nowrap top-0 whitespace-pre">Information</p>
    </div>
  );
}

function Button11() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[57.305px]" data-name="Button">
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[24px] left-0 not-italic text-[#1a1a1a] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">Kontakt</p>
    </div>
  );
}

function ListItem4() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Button11 />
    </div>
  );
}

function Button12() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[120.5px]" data-name="Button">
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[24px] left-0 not-italic text-[#1a1a1a] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">Integritetspolicy</p>
    </div>
  );
}

function ListItem5() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Button12 />
    </div>
  );
}

function Button13() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[59.68px]" data-name="Button">
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[24px] left-0 not-italic text-[#1a1a1a] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">Cookies</p>
    </div>
  );
}

function ListItem6() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Button13 />
    </div>
  );
}

function List1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[96px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem4 />
      <ListItem5 />
      <ListItem6 />
    </div>
  );
}

function Container59() {
  return (
    <div className="[grid-area:1_/_3] content-stretch flex flex-col gap-[24px] items-start relative shrink-0" data-name="Container">
      <Heading17 />
      <List1 />
    </div>
  );
}

function Heading18() {
  return (
    <div className="h-[27px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Futura:Bold',_sans-serif] leading-[27px] left-0 not-italic text-[#e5aa36] text-[18px] text-nowrap top-0 whitespace-pre">Användbara resurser</p>
    </div>
  );
}

function Icon12() {
  return (
    <div className="absolute left-[72px] size-[16px] top-[4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M10 2H14V6" id="Vector" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.1000 0.1000 0.1000)", strokeOpacity: "1" }} />
          <path d="M6.66667 9.33333L14 2" id="Vector_2" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.1000 0.1000 0.1000)", strokeOpacity: "1" }} />
          <path d={svgPaths.p25f66900} id="Vector_3" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.1000 0.1000 0.1000)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Link6() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[88px]" data-name="Link">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[#1a1a1a] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">Boverket</p>
      <Icon12 />
    </div>
  );
}

function ListItem7() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link6 />
    </div>
  );
}

function Icon13() {
  return (
    <div className="absolute left-[101.83px] size-[16px] top-[4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M10 2H14V6" id="Vector" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.1000 0.1000 0.1000)", strokeOpacity: "1" }} />
          <path d="M6.66667 9.33333L14 2" id="Vector_2" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.1000 0.1000 0.1000)", strokeOpacity: "1" }} />
          <path d={svgPaths.p25f66900} id="Vector_3" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.1000 0.1000 0.1000)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Link7() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[117.828px]" data-name="Link">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[#1a1a1a] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">Bolagsverket</p>
      <Icon13 />
    </div>
  );
}

function ListItem8() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link7 />
    </div>
  );
}

function Icon14() {
  return (
    <div className="absolute left-[86.96px] size-[16px] top-[4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M10 2H14V6" id="Vector" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.1000 0.1000 0.1000)", strokeOpacity: "1" }} />
          <path d="M6.66667 9.33333L14 2" id="Vector_2" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.1000 0.1000 0.1000)", strokeOpacity: "1" }} />
          <path d={svgPaths.p25f66900} id="Vector_3" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.1000 0.1000 0.1000)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Link8() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[102.961px]" data-name="Link">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[#1a1a1a] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">Riksgälden</p>
      <Icon14 />
    </div>
  );
}

function ListItem9() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link8 />
    </div>
  );
}

function Icon15() {
  return (
    <div className="absolute left-[39.65px] size-[16px] top-[4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M10 2H14V6" id="Vector" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.1000 0.1000 0.1000)", strokeOpacity: "1" }} />
          <path d="M6.66667 9.33333L14 2" id="Vector_2" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.1000 0.1000 0.1000)", strokeOpacity: "1" }} />
          <path d={svgPaths.p25f66900} id="Vector_3" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.1000 0.1000 0.1000)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Link9() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[55.648px]" data-name="Link">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[#1a1a1a] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">HSB</p>
      <Icon15 />
    </div>
  );
}

function ListItem10() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link9 />
    </div>
  );
}

function Icon16() {
  return (
    <div className="absolute left-[171.52px] size-[16px] top-[4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M10 2H14V6" id="Vector" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.1000 0.1000 0.1000)", strokeOpacity: "1" }} />
          <path d="M6.66667 9.33333L14 2" id="Vector_2" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.1000 0.1000 0.1000)", strokeOpacity: "1" }} />
          <path d={svgPaths.p25f66900} id="Vector_3" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.1000 0.1000 0.1000)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Link10() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[187.523px]" data-name="Link">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[#1a1a1a] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">Sveriges BRF-centrum</p>
      <Icon16 />
    </div>
  );
}

function ListItem11() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link10 />
    </div>
  );
}

function List2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[168px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem7 />
      <ListItem8 />
      <ListItem9 />
      <ListItem10 />
      <ListItem11 />
    </div>
  );
}

function Container60() {
  return (
    <div className="[grid-area:1_/_4] content-stretch flex flex-col gap-[24px] items-start relative shrink-0" data-name="Container">
      <Heading18 />
      <List2 />
    </div>
  );
}

function Container61() {
  return (
    <div className="gap-[48px] grid grid-cols-[repeat(4,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[219px] relative shrink-0 w-full" data-name="Container">
      <Container57 />
      <Container58 />
      <Container59 />
      <Container60 />
    </div>
  );
}

function Paragraph28() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-[624.34px] not-italic text-[#1a1a1a] text-[16px] text-center top-[-0.5px] tracking-[-0.3125px] translate-x-[-50%] w-[355px]">© 2025 BRF-guide.se. Alla rättigheter förbehålls.</p>
    </div>
  );
}

function Container62() {
  return (
    <div className="box-border content-stretch flex flex-col h-[58px] items-start pb-0 pt-[34px] px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e4dbdb] border-[2px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Paragraph28 />
    </div>
  );
}

function Container63() {
  return (
    <div className="h-[453px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[48px] h-[453px] items-start pb-0 pt-[64px] px-[16px] relative w-full">
          <Container61 />
          <Container62 />
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#f9f9f4] h-[455px] relative shrink-0 w-[1432px]" data-name="Footer">
      <div aria-hidden="true" className="absolute border-[#e4dbdb] border-[2px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[455px] items-start pb-0 pt-[2px] px-[76px] relative w-[1432px]">
        <Container63 />
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[80px] h-[5816.03px] items-start left-0 pb-0 pt-[93.5px] px-0 top-0 w-[1432px]" data-name="App">
      <HomePage />
      <Footer />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute bottom-[0.04%] contents left-0 right-[0.02%] top-0">
      <div className="absolute bottom-[0.07%] left-[72.9%] right-[0.02%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 40">
          <path d={svgPaths.p1706b300} fill="var(--fill-0, #425F40)" id="Rectangle 94" style={{ fill: "color(display-p3 0.2588 0.3725 0.2510)", fillOpacity: "1" }} />
        </svg>
      </div>
      <div className="absolute inset-[6.1%_69.29%_0.11%_10.01%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 38">
          <path d={svgPaths.p7a3e100} fill="var(--fill-0, #007A55)" id="Rectangle 90" style={{ fill: "color(display-p3 0.0000 0.4782 0.3335)", fillOpacity: "1" }} />
        </svg>
      </div>
      <div className="absolute inset-[25.56%_22.53%_0.07%_57.51%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 30">
          <path d={svgPaths.p1f8ed500} fill="var(--fill-0, #E5AA36)" id="Rectangle 92" style={{ fill: "color(display-p3 0.8980 0.6667 0.2118)", fillOpacity: "1" }} />
        </svg>
      </div>
      <div className="absolute bottom-[0.11%] left-0 right-[79.35%] top-[19.9%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 32">
          <path d={svgPaths.p31d98780} fill="var(--fill-0, #A3D0C1)" id="Rectangle 88" style={{ fill: "color(display-p3 0.6404 0.8154 0.7571)", fillOpacity: "1" }} />
        </svg>
      </div>
      <div className="absolute bottom-[0.04%] left-[29.21%] right-[50.67%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 40">
          <path d={svgPaths.p3e161800} fill="var(--fill-0, #425F40)" id="Rectangle 91" style={{ fill: "color(display-p3 0.2588 0.3725 0.2510)", fillOpacity: "1" }} />
        </svg>
      </div>
      <div className="absolute inset-[8.99%_37.2%_0.04%_42.05%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 37">
          <path d={svgPaths.p9e5a000} fill="var(--fill-0, #A3D0C1)" id="Rectangle 93" style={{ fill: "color(display-p3 0.6404 0.8154 0.7571)", fillOpacity: "1" }} />
        </svg>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="h-[40px] overflow-clip relative shrink-0 w-full" data-name="Group">
      <Group3 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[40px] items-start left-0 overflow-clip top-[0.25px] w-[66px]" data-name="Frame">
      <Group1 />
    </div>
  );
}

function Text11() {
  return (
    <div className="absolute h-[36px] left-[52px] top-[2px] w-[145.492px]" data-name="Text">
      <p className="absolute font-['Futura:Bold',_sans-serif] leading-[36px] left-[27px] not-italic text-[#e5aa36] text-[24px] text-nowrap top-[9.25px] tracking-[1px] whitespace-pre">BRF GUIDEN</p>
    </div>
  );
}

function Button14() {
  return (
    <div className="h-[40px] relative shrink-0 w-[197.492px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[40px] relative w-[197.492px]">
        <Frame1 />
        <Text11 />
      </div>
    </div>
  );
}

function Button15() {
  return (
    <div className="h-[51.5px] relative shrink-0 w-[85.336px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#e5aa36] border-[0px_0px_2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[51.5px] relative w-[85.336px]">
        <p className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[25.5px] left-[24px] not-italic text-[#e5aa36] text-[17px] text-nowrap top-[12.5px] tracking-[-0.4316px] whitespace-pre">Hem</p>
      </div>
    </div>
  );
}

function Button16() {
  return (
    <div className="h-[49.5px] relative shrink-0 w-[98.852px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[49.5px] relative w-[98.852px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[25.5px] left-[24px] not-italic text-[#1a1a1a] text-[17px] text-nowrap top-[12.5px] tracking-[-0.4316px] whitespace-pre">Guider</p>
      </div>
    </div>
  );
}

function Button17() {
  return (
    <div className="h-[49.5px] relative shrink-0 w-[92.078px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[49.5px] relative w-[92.078px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[25.5px] left-[24px] not-italic text-[#1a1a1a] text-[17px] text-nowrap top-[12.5px] tracking-[-0.4316px] whitespace-pre">Blogg</p>
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="h-[51.5px] relative shrink-0 w-[593.32px]" data-name="Navigation">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[51.5px] items-center justify-end relative w-[593.32px]">
        <Button15 />
        <Button16 />
        <Button17 />
        <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[25.5px] not-italic relative shrink-0 text-[#1a1a1a] text-[17px] text-nowrap tracking-[-0.4316px] whitespace-pre">Vanliga frågor</p>
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Button14 />
      <Navigation />
    </div>
  );
}

function Header() {
  return (
    <div className="absolute bg-[#fcfbf7] box-border content-stretch flex flex-col h-[93.5px] items-start left-0 pb-[2px] pt-[20px] px-[92px] top-0 w-[1432px]" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#e4dbdb] border-[0px_0px_2px] border-solid inset-0 pointer-events-none shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <Container64 />
    </div>
  );
}

export default function BrfHjalpenSeWebsiteDesign() {
  return (
    <div className="bg-[#fcfbf7] relative size-full" data-name="BRF-hjälpen.se Website Design">
      <App />
      <Header />
    </div>
  );
}