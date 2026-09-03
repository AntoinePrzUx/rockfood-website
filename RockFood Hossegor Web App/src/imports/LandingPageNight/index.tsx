import svgPaths from "./svg-6je4ee43t0";
import imgHeroContainer from "./47d76d21e4bdf74c3e2dc0065a176be500964705.png";
import imgMoleculeEventCard from "./3bb1c1b26cb30f4c9d5f94881e0c96d4d8936ec4.png";
import imgMoleculeEventCard1 from "./9518ea16e5c5d58e5fcb361f42c46ffb6dcd7e79.png";
import imgRectangle1 from "./4adf6f613da00675a5868e3bcf668696e5a8e836.png";
import imgRectangle2 from "./d0cccce613d317457c28d930f73a2ba4a743a870.png";
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

function Frame21({ className }: { className?: string }) {
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
type AtomButtonProps = {
  className?: string;
  theme?: "Night";
  type?: "Primary" | "Secondary";
};

function AtomButton({ className, theme = "Night", type = "Primary" }: AtomButtonProps) {
  const isSecondaryAndNight = type === "Secondary" && theme === "Night";
  return (
    <div className={className || `relative rounded-[4px] ${isSecondaryAndNight ? "" : "bg-[#ff007a] drop-shadow-[0px_0px_6px_rgba(255,0,122,0.25)]"}`}>
      <div aria-hidden={isSecondaryAndNight ? true : undefined} className={isSecondaryAndNight ? "absolute border-[#ff007a] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[4px]" : "flex flex-row items-center justify-center size-full"}>
        {type === "Primary" && theme === "Night" && (
          <div className="content-stretch flex items-center justify-center px-[24px] py-[14px] relative size-full">
            <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[13px] text-white tracking-[0.26px] uppercase whitespace-nowrap">VOIR LA CARTE</p>
          </div>
        )}
      </div>
      {isSecondaryAndNight && (
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[24px] py-[14px] relative size-full">
            <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#ff007a] text-[13px] tracking-[0.26px] uppercase whitespace-nowrap">VOIR LA CARTE</p>
          </div>
        </div>
      )}
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

function Frame1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#888] text-[13px] text-left tracking-[0.26px] uppercase whitespace-nowrap">côté resto</p>
    </div>
  );
}

function Frame2() {
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
          <Frame1 />
        </div>
      </div>
    </a>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[13px] text-white tracking-[0.26px] uppercase whitespace-nowrap">Côté nuit</p>
    </div>
  );
}

function Frame4() {
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
          <Frame3 />
        </div>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[20px] relative size-full">
          <div className="bg-[#1e1e24] h-[55px] relative rounded-[8px] shrink-0 w-[266px]" data-name="Molecule/ToggleSwitch">
            <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex gap-[4px] items-center justify-center p-[4px] relative size-full">
                <Frame2 />
                <Frame4 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch cursor-pointer flex gap-[10px] items-center justify-center p-[10px] relative size-full">
          <AtomButton className="bg-[#ff007a] drop-shadow-[0px_0px_6px_rgba(255,0,122,0.25)] relative rounded-[4px] shrink-0" />
          <a className="relative rounded-[4px] shrink-0" data-name="Atom/Button">
            <div aria-hidden className="absolute border-[#ff007a] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[24px] py-[14px] relative size-full">
                <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#ff007a] text-[13px] text-left tracking-[0.26px] uppercase whitespace-nowrap">S’y rendre</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Old_London:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[45px] text-white uppercase whitespace-nowrap">rock food</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[13px] text-white tracking-[0.26px] uppercase whitespace-nowrap">GOOD SPOT • BAD HABITS SINCE 1990</p>
      <Frame9 />
    </div>
  );
}

function HeroContainer() {
  return (
    <div className="h-[440px] relative rounded-[8px] shrink-0 w-full" data-name="Hero/Container">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[8px]">
        <div className="absolute inset-0 overflow-hidden rounded-[8px]">
          <img alt="" className="absolute h-[99.93%] left-[-43.35%] max-w-none top-[0.1%] w-[162.39%]" src={imgHeroContainer} />
        </div>
        <div className="absolute bg-gradient-to-t from-[rgba(136,136,136,0.85)] inset-0 rounded-[8px] to-1/2 to-[rgba(136,136,136,0)]" />
      </div>
      <div className="flex flex-col items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-end pb-[20px] pt-[16px] px-[16px] relative size-full">
          <Frame />
        </div>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="h-[440px] relative shrink-0 w-full">
      <div className="flex flex-col justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-end px-[16px] relative size-full">
          <HeroContainer />
        </div>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[1.4] not-italic relative shrink-0 text-[14px] w-full whitespace-nowrap">
      <p className="font-['Druk_Wide_Trial:Heavy',sans-serif] relative shrink-0 text-white">DJ 4RRERE</p>
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#00e5ff]">VEN. 22 AOUT - 22H</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[1.4] not-italic relative shrink-0 text-[14px] w-full whitespace-nowrap">
      <p className="font-['Druk_Wide_Trial:Heavy',sans-serif] relative shrink-0 text-white">ROCK DJ SET</p>
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#00e5ff]">VEN. 22 AOUT - 22H</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-start p-[16px] relative size-full">
          <div className="h-[160px] relative rounded-[8px] shrink-0 w-[207px]" data-name="Molecule/EventCard">
            <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[8px]">
              <div className="absolute bg-gradient-to-b from-[50.082%] from-[rgba(0,0,0,0)] inset-0 rounded-[8px] to-[rgba(0,0,0,0.18)]" />
              <div className="absolute inset-0 overflow-hidden rounded-[8px]">
                <img alt="" className="absolute h-[200%] left-[-0.05%] max-w-none top-[-72.79%] w-full" src={imgMoleculeEventCard} />
              </div>
            </div>
            <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex flex-col items-start justify-between p-[12px] relative size-full">
                <div className="bg-[#ff007a] drop-shadow-[0px_0px_4px_rgba(255,0,122,0.6)] relative rounded-[99px] shrink-0" data-name="Atom/Badge">
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="content-stretch flex items-center justify-center px-[8px] py-[4px] relative size-full">
                      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[13px] text-white tracking-[0.26px] uppercase whitespace-nowrap">DJ SET</p>
                    </div>
                  </div>
                </div>
                <Frame12 />
              </div>
            </div>
          </div>
          <div className="h-[160px] relative rounded-[8px] shrink-0 w-[207px]" data-name="Molecule/EventCard">
            <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[8px]">
              <img alt="" className="absolute max-w-none object-cover rounded-[8px] size-full" src={imgMoleculeEventCard1} />
              <div className="absolute bg-gradient-to-b from-[50.082%] from-[rgba(0,0,0,0)] inset-0 rounded-[8px] to-[rgba(0,0,0,0.18)]" />
            </div>
            <div className="flex flex-col justify-center size-full">
              <div className="content-stretch flex flex-col items-start justify-between p-[12px] relative size-full">
                <div className="bg-[#ff007a] drop-shadow-[0px_0px_4px_rgba(255,0,122,0.6)] relative rounded-[99px] shrink-0" data-name="Atom/Badge">
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="content-stretch flex items-center justify-center px-[8px] py-[4px] relative size-full">
                      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[13px] text-white tracking-[0.26px] uppercase whitespace-nowrap">DJ SET</p>
                    </div>
                  </div>
                </div>
                <Frame14 />
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
    <div className="content-stretch flex flex-col gap-[16px] items-center justify-center relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Druk_Wide_Medium:Medium',sans-serif] leading-[1.1] not-italic relative shrink-0 text-[20px] text-white uppercase whitespace-nowrap">{`events & dj sets`}</p>
      <Frame13 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">T-Shirt World Cup</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-center justify-center relative shrink-0 w-[165px]">
      <Frame5 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">T-Shirt Yellow Party</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-center justify-center relative shrink-0 w-[165px]">
      <Frame6 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex gap-[12px] items-start p-[10px] relative size-full">
        <div className="bg-[#1e1e24] relative rounded-[6px] shrink-0" data-name="Molecule/ShopCard">
          <div aria-hidden className="absolute border border-[#5c5c5c] border-solid inset-0 pointer-events-none rounded-[6px]" />
          <div className="flex flex-col items-center justify-center size-full">
            <div className="content-stretch flex flex-col gap-[10px] items-center justify-center p-[8px] relative size-full">
              <div className="h-[140px] relative rounded-[8px] shrink-0 w-[165px]">
                <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
                  <img alt="" className="absolute h-[133.63%] left-[4.99%] max-w-none top-[-5.92%] w-[91.16%]" src={imgRectangle1} />
                </div>
              </div>
              <Frame7 />
              <div className="bg-[#ff007a] drop-shadow-[0px_0px_6px_rgba(255,0,122,0.25)] relative rounded-[4px] shrink-0" data-name="Atom/Button">
                <div className="flex flex-row items-center justify-center size-full">
                  <div className="content-stretch flex items-center justify-center px-[24px] py-[14px] relative size-full">
                    <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[13px] text-white tracking-[0.26px] uppercase whitespace-nowrap">Voir l’article</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#1e1e24] relative rounded-[6px] shrink-0" data-name="Molecule/ShopCard">
          <div aria-hidden className="absolute border border-[#5c5c5c] border-solid inset-0 pointer-events-none rounded-[6px]" />
          <div className="flex flex-col items-center justify-center size-full">
            <div className="content-stretch flex flex-col gap-[10px] items-center justify-center p-[8px] relative size-full">
              <div className="h-[140px] relative rounded-[8px] shrink-0 w-[165px]">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgRectangle2} />
              </div>
              <Frame8 />
              <div className="bg-[#ff007a] drop-shadow-[0px_0px_6px_rgba(255,0,122,0.25)] relative rounded-[4px] shrink-0" data-name="Atom/Button">
                <div className="flex flex-row items-center justify-center size-full">
                  <div className="content-stretch flex items-center justify-center px-[24px] py-[14px] relative size-full">
                    <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[13px] text-white tracking-[0.26px] uppercase whitespace-nowrap">Voir l’article</p>
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

function Frame16() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start p-[10px] relative size-full">
        <Frame17 />
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center justify-center px-[16px] relative size-full">
          <p className="[word-break:break-word] font-['Druk_Wide_Medium:Medium',sans-serif] leading-[1.1] not-italic relative shrink-0 text-[20px] text-white uppercase whitespace-nowrap">LE SHOP ROCKFOOD</p>
          <Frame16 />
          <div className="relative rounded-[4px] shrink-0" data-name="Atom/Button">
            <div aria-hidden className="absolute border-[#ff007a] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[24px] py-[14px] relative size-full">
                <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#ff007a] text-[13px] tracking-[0.26px] uppercase whitespace-nowrap">Voir tout le shop</p>
              </div>
            </div>
          </div>
        </div>
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

function Frame19() {
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

function Frame20() {
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
      <Frame19 />
      <Frame20 />
    </div>
  );
}

function Frame22() {
  return <div className="bg-[#2d2d2d] h-px relative shrink-0 w-full" />;
}

function Frame24() {
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
          <Frame21 className="bg-[#0a0a0b] col-1 h-[48px] relative row-1 shrink-0 w-[162.5px]" />
          <Frame24 />
        </div>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="bg-[#0a0a0b] relative shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start px-[16px] py-[32px] relative size-full">
          <MapContainer />
          <FooterInfos />
          <Frame22 />
          <FooterBottom />
        </div>
      </div>
    </div>
  );
}

export default function LandingPageNight() {
  return (
    <div className="bg-[#0a0a0b] content-stretch flex flex-col gap-[40px] items-start pt-[50px] relative size-full" data-name="Landing Page — Night">
      <Header className="bg-[#0a0a0b] relative shrink-0 w-full" />
      <Frame23 />
      <Frame10 />
      <Frame11 />
      <Frame15 />
      <Frame18 />
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