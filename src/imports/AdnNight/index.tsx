import svgPaths from "./svg-q28ubrsok3";
import imgFrame49 from "./4e6d95808eb0a4831dbbf04d923a2780e4638e96.png";
import imgFrame52 from "./75dfd56a73ee02bd9f2bc46d4fc2af40c8c6cb5e.png";
import imgFrame53 from "./9e0dbdef13a88ede7a71b57b9ad77270cc4b86a8.png";
import imgLogoBadgeMix011 from "./0e4e19e0e18de5fc2ef21befef5fa15993a2b572.png";
import imgMapContainer from "./3bb8b33f14b60c68d51fb84839f5479a9523ae7b.png";
type SocialIconsProps = {
  className?: string;
  color?: "Negative";
  platform?: "Facebook" | "Instagram" | "Spotify";
};

function SocialIcons({ className, color = "Negative", platform = "Facebook" }: SocialIconsProps) {
  const isFacebookAndNegative = platform === "Facebook" && color === "Negative";
  const isInstagramAndNegative = platform === "Instagram" && color === "Negative";
  return (
    <div className={className || `relative size-[48px] ${color === "Negative" && ["Instagram", "Facebook"].includes(platform) ? "overflow-clip" : ""}`}>
      <div className={`absolute ${isFacebookAndNegative ? "inset-[0_0_0.37%_0]" : isInstagramAndNegative ? "inset-[0_0.06%_0.02%_0]" : "inset-[0_0.31%_0.31%_0]"}`} data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height={isFacebookAndNegative ? "47.8243" : isInstagramAndNegative ? "47.9906" : "47.8523"} preserveAspectRatio="none" viewBox={isFacebookAndNegative ? "0 0 48.001 47.8243" : isInstagramAndNegative ? "0 0 47.9719 47.9906" : "0 0 47.8534 47.8523"} width={isFacebookAndNegative ? "48.001" : isInstagramAndNegative ? "47.9719" : "47.8534"}>
          <path d={isFacebookAndNegative ? svgPaths.p13d8c500 : isInstagramAndNegative ? svgPaths.p5204b00 : svgPaths.pd794900} fill="white" id="Vector" />
        </svg>
      </div>
      {isInstagramAndNegative && (
        <>
          <div className="absolute inset-[24.32%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" height="24.6562" preserveAspectRatio="none" viewBox="0 0 24.6562 24.6562" width="24.6562">
              <path d={svgPaths.p384ced00} fill="white" id="Vector" />
            </svg>
          </div>
          <div className="absolute inset-[17.3%_17.3%_70.7%_70.7%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" height="5.75626" preserveAspectRatio="none" viewBox="0 0 5.75625 5.75626" width="5.75625">
              <path d={svgPaths.p1e966f00} fill="white" id="Vector" />
            </svg>
          </div>
        </>
      )}
    </div>
  );
}

function Frame7({ className }: { className?: string }) {
  return (
    <div className={className || "bg-[#0a0a0b] h-[48px] relative w-[162.5px]"}>
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between p-[10px] relative size-full">
          <SocialIcons className="block cursor-pointer overflow-clip relative shrink-0 size-[40px]" platform="Instagram" />
          <SocialIcons className="block cursor-pointer overflow-clip relative shrink-0 size-[40px]" />
          <SocialIcons className="relative shrink-0 size-[40px]" platform="Spotify" />
        </div>
      </div>
    </div>
  );
}
type HeaderProps = {
  className?: string;
  theme?: "Night";
};

function Header({ className, theme = "Night" }: HeaderProps) {
  return (
    <div className={className || "bg-[#0a0a0b] relative w-[393px]"}>
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between p-[12px] relative size-full">
          <div className="content-stretch flex flex-col h-[40px] items-center justify-center relative shrink-0">
            <p className="[word-break:break-word] font-['Old_London:Regular',sans-serif] leading-[1.1] not-italic relative shrink-0 text-[20px] text-white uppercase whitespace-nowrap">Rock food</p>
          </div>
          <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
            <div className="relative shrink-0" data-name="Atom/LiveStatus">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center relative size-full">
                  <div className="relative shrink-0 size-[8px]">
                    <svg className="absolute block inset-0 size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 8 8" width="8">
                      <circle cx="4" cy="4" fill="#00FF66" id="Ellipse 1" r="4" />
                    </svg>
                  </div>
                  <div className="content-stretch flex items-center justify-center relative shrink-0">
                    <p className="[word-break:break-word] font-['Druk_Wide_Medium:Medium',sans-serif] leading-[1.1] not-italic relative shrink-0 text-[10px] text-white uppercase whitespace-nowrap">OUVERT</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[40px]">
              <div className="relative shrink-0 size-[24px]" data-name="Menu">
                <div className="absolute inset-[29.17%_20.83%_70.83%_20.83%]">
                  <div className="absolute inset-[-1px_-7.14%]">
                    <svg className="block size-full" fill="none" height="2" preserveAspectRatio="none" viewBox="0 0 16 2" width="16">
                      <path d="M1 1H15" id="Vector 7" stroke="white" strokeLinecap="round" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-1/2 left-[20.83%] right-[20.83%] top-1/2">
                  <div className="absolute inset-[-1px_-7.14%]">
                    <svg className="block size-full" fill="none" height="2" preserveAspectRatio="none" viewBox="0 0 16 2" width="16">
                      <path d="M1 1H15" id="Vector 7" stroke="white" strokeLinecap="round" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
                <div className="absolute inset-[70.83%_20.83%_29.17%_20.83%]">
                  <div className="absolute inset-[-1px_-7.14%]">
                    <svg className="block size-full" fill="none" height="2" preserveAspectRatio="none" viewBox="0 0 16 2" width="16">
                      <path d="M1 1H15" id="Vector 7" stroke="white" strokeLinecap="round" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#888] text-[13px] text-left tracking-[0.26px] uppercase whitespace-nowrap">côté resto</p>
    </div>
  );
}

function Frame1() {
  return (
    <a className="cursor-pointer flex-[1_0_0] min-w-px relative rounded-[6px]">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[16px] py-[10px] relative size-full">
          <div className="relative shrink-0 size-[28px]" data-name="fluent:weather-sunny-48-filled">
            <div className="absolute inset-[8.34%_8.33%_8.33%_8.33%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" height="23.3328" preserveAspectRatio="none" viewBox="0 0 23.3333 23.3328" width="23.3333">
                <path d={svgPaths.p1c51a200} fill="#888888" id="Vector" />
              </svg>
            </div>
          </div>
          <Frame />
        </div>
      </div>
    </a>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[13px] text-white tracking-[0.26px] uppercase whitespace-nowrap">Côté nuit</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-[#ff007a] flex-[1_0_0] min-w-px relative rounded-[6px]">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[16px] py-[10px] relative size-full">
          <div className="relative shrink-0 size-[28px]" data-name="fluent:weather-moon-28-filled">
            <div className="absolute inset-[7.28%_9%_7.14%_10.71%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" height="23.9624" preserveAspectRatio="none" viewBox="0 0 22.48 23.9624" width="22.48">
                <path d={svgPaths.p7089680} fill="white" id="Vector" />
              </svg>
            </div>
          </div>
          <Frame2 />
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[20px] relative size-full">
          <div className="bg-[#1e1e24] h-[55px] relative rounded-[8px] shrink-0 w-[266px]" data-name="Molecule/ToggleSwitch">
            <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex gap-[4px] items-center justify-center p-[4px] relative size-full">
                <Frame1 />
                <Frame3 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="h-[240px] relative rounded-[8px] shrink-0 w-full">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgFrame49} />
    </div>
  );
}

function Frame10() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start px-[16px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white w-full">GOOD SPOT • BAD HABITS SINCE 1990</p>
          <p className="[word-break:break-word] font-['Druk_Wide_Trial:Heavy',sans-serif] leading-[0] not-italic relative shrink-0 text-[0px] text-white uppercase w-full">
            <span className="leading-none text-[36px]">{`L'ADN `}</span>
            <span className="font-['Old_London:Regular',sans-serif] leading-none text-[45px]">ROCKFOOD</span>
          </p>
          <Frame11 />
        </div>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[140px]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
        <img alt="" className="absolute h-full left-[-64.47%] max-w-none top-[-0.01%] w-[228.96%]" src={imgFrame52} />
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full">
      <Frame14 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium h-[120px] leading-[1.4] not-italic relative shrink-0 text-[12px] text-white w-[175px]">{`Né en 1990 place des Landais à Hossegor, le Rock Food est devenu le repère mythique de la culture surf locale. Il incarne l'esprit rock, la convivialité et la passion partagée de l'océan.`}</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[140px]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
        <img alt="" className="absolute h-[314.29%] left-[-73.06%] max-w-none top-[-99.66%] w-[235.71%]" src={imgFrame53} />
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[1.4] not-italic relative shrink-0 text-[12px] text-white w-[175px]">{`Véritable QG des locaux et des champions du monde, le Rock Food bat au rythme de la culture surf. On s'y rassemble après chaque session pour célébrer l'esprit de glisse.`}</p>
      <Frame16 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start px-[16px] relative size-full">
          <p className="[word-break:break-word] font-['Druk_Wide_Medium:Medium',sans-serif] leading-[1.1] not-italic relative shrink-0 text-[20px] text-white uppercase w-full">{`L'HISTOIRE DEPUIS LE DEBUT`}</p>
          <Frame13 />
          <Frame15 />
        </div>
      </div>
    </div>
  );
}

function VideoFill() {
  return <div className="relative shrink-0 size-[50px]" data-name="Video_fill" />;
}

function Frame19() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="flex-[1_0_0] h-full min-w-px relative">
        <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[10px] items-center justify-center p-[10px] relative size-full">
            <p className="[word-break:break-word] font-['Druk_Wide_Trial:Heavy',sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[0px] text-center text-white w-[min-content]">
              <span className="font-['Old_London:Regular',sans-serif] leading-[1.4] text-[20px]">ROCKFOOD</span>
              <span className="leading-[1.4] text-[14px]">{` SPOTIFY SELECTION`}</span>
            </p>
            <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] min-w-full not-italic relative shrink-0 text-[12px] text-center text-white w-[min-content]">{`120 titres • Surf Rock, Indie & Synthwave`}</p>
            <VideoFill />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="bg-[#0a0a0b] drop-shadow-[0px_0px_6px_rgba(255,0,122,0.25)] relative rounded-[8px] shrink-0 w-full">
      <div aria-hidden className="absolute border border-[#ff007a] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[16px] items-center justify-center p-[16px] relative size-full">
          <div className="h-[147px] pointer-events-none relative shrink-0 w-[148px]" data-name="LOGO_BADGE_MIX-01 1">
            <div aria-hidden className="absolute inset-0">
              <div className="absolute bg-white inset-0" />
              <img alt="" className="absolute max-w-none object-cover size-full" src={imgLogoBadgeMix011} />
            </div>
            <div aria-hidden className="absolute border border-[#5c5c5c] border-solid inset-0" />
          </div>
          <Frame19 />
        </div>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[16px] relative size-full">
        <Frame18 />
      </div>
    </div>
  );
}

function MarkersSpotlightMarker() {
  return <div className="absolute h-[43px] left-[108px] top-[64px] w-[27px]" data-name="Markers / Spotlight Marker" />;
}

function MapContainer() {
  return (
    <div className="h-[160px] relative rounded-[8px] shrink-0 w-full" data-name="Map/Container">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgMapContainer} />
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute h-[500px] left-[-296px] top-[40px] w-[966px]" data-name="image 1" />
        <MarkersSpotlightMarker />
      </div>
      <div aria-hidden className="absolute border border-[#5c5c5c] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame4() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center p-[10px] relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] min-w-px not-italic relative text-[12px] text-white">Plage Centrale, 40150 Soorts-Hossegor</p>
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center p-[10px] relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] min-w-px not-italic relative text-[12px] text-white">7j/7 • 10h00 — 02h00</p>
        </div>
      </div>
    </div>
  );
}

function FooterInfos() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative shrink-0 w-full" data-name="Footer/Infos">
      <p className="[word-break:break-word] font-['Old_London:Regular',sans-serif] leading-[1.1] not-italic relative shrink-0 text-[30px] text-white uppercase w-full">rockfood</p>
      <Frame4 />
      <Frame5 />
    </div>
  );
}

function Frame6() {
  return <div className="bg-[#2d2d2d] h-px relative shrink-0 w-full" />;
}

function Frame8() {
  return (
    <div className="col-2 content-stretch flex flex-col items-center justify-center justify-self-stretch overflow-clip relative row-1 self-stretch shrink-0">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-end leading-[0] min-h-px not-italic relative text-[#666] text-[12px] text-center w-full">
        <p className="leading-[1.4]">© 2026 ROCKFOOD</p>
      </div>
    </div>
  );
}

function FooterBottom() {
  return (
    <div className="h-[68px] relative shrink-0 w-full" data-name="Footer/Bottom">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] p-[10px] relative size-full">
          <Frame7 className="bg-[#0a0a0b] col-1 h-[48px] relative row-1 shrink-0 w-[162.5px]" />
          <Frame8 />
        </div>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="bg-[#0a0a0b] relative shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start px-[16px] py-[32px] relative size-full">
          <MapContainer />
          <FooterInfos />
          <Frame6 />
          <FooterBottom />
        </div>
      </div>
    </div>
  );
}

export default function AdnNight() {
  return (
    <div className="bg-[#0a0a0b] content-stretch flex flex-col gap-[40px] items-start pt-[50px] relative size-full" data-name="ADN — Night">
      <Header className="bg-[#0a0a0b] relative shrink-0 w-full" />
      <Frame9 />
      <Frame10 />
      <Frame12 />
      <Frame17 />
      <Frame20 />
      <button className="absolute bg-[#1e1e24] cursor-pointer left-[calc(75%+38.25px)] rounded-[999px] size-[44px] top-[667px]" data-name="Atom/BackToTop">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute left-[10px] size-[24px] top-[10px]" data-name="Arrow_top">
            <div className="absolute bottom-[20.83%] flex items-center justify-center left-1/4 right-1/4 top-[16.67%]" style={{ containerType: "size" }}>
              <div className="-rotate-90 -scale-x-100 flex-none h-[100cqw] w-[100cqh]">
                <div className="relative size-full">
                  <div className="absolute inset-[-5.89%_-6.67%_-5.89%_-9.43%]">
                    <svg className="block size-full" fill="none" height="13.4142" preserveAspectRatio="none" viewBox="0 0 17.4142 13.4142" width="17.4142">
                      <path d={svgPaths.p2998ca80} fill="#FF007A" id="Vector 9" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#ff007a] border-solid inset-0 pointer-events-none rounded-[999px] shadow-[0px_0px_12px_0px_rgba(255,0,122,0.25)]" />
      </button>
    </div>
  );
}