import svgPaths from "./svg-wrd2lg1pqv";
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

function Frame29({ className }: { className?: string }) {
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
type MoleculeProductCardProps = {
  className?: string;
  theme?: "Day";
  type?: "Liste" | "Product" | "Bières";
};

function MoleculeProductCard({ className, theme = "Day", type = "Product" }: MoleculeProductCardProps) {
  const isDayAndBieres = theme === "Day" && type === "Bières";
  const isDayAndIsBieresOrListe = theme === "Day" && ["Bières", "Liste"].includes(type);
  const isDayAndProduct = theme === "Day" && type === "Product";
  return (
    <div className={className || `bg-[#f9f9f6] relative rounded-[6px] ${isDayAndBieres ? "" : "w-[320px]"}`}>
      <div aria-hidden className="absolute border border-[#5c5c5c] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className={`content-stretch flex items-start p-[8px] relative size-full ${isDayAndIsBieresOrListe ? "" : "gap-[10px]"}`}>
        <div className={`content-stretch flex flex-col items-start relative shrink-0 ${isDayAndIsBieresOrListe ? "" : "gap-[6px]"}`}>
          <div className={`content-stretch flex relative shrink-0 ${isDayAndIsBieresOrListe ? "flex-col gap-[6px] items-start w-[304px]" : "items-center justify-center"}`}>
            {isDayAndIsBieresOrListe && (
              <>
                <div className={`content-stretch flex relative shrink-0 ${theme === "Day" && type === "Liste" ? "items-center justify-center" : "items-start w-full"}`}>
                  <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[#111] text-[14px] whitespace-nowrap">Vittel</p>
                </div>
                <div className="content-stretch flex items-center justify-center relative shrink-0 w-[294px]">
                  <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[#111] text-[12px] w-[268px]">25cl</p>
                  <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
                    <div className="content-stretch flex flex-[1_0_0] h-full items-center justify-center min-w-px relative">
                      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[#111] text-[14px] whitespace-nowrap">3,5€</p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex items-center justify-center relative shrink-0">
                  <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[#111] text-[12px] w-[268px]">50cl</p>
                  <div className="flex flex-row items-center self-stretch">
                    <div className="content-stretch flex h-full items-center justify-center relative shrink-0 w-[26px]">
                      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[#111] text-[14px] whitespace-nowrap">5€</p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex items-center justify-center relative shrink-0">
                  <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[#111] text-[12px] w-[268px]">1 Litre</p>
                  <div className="flex flex-row items-center self-stretch">
                    <div className="content-stretch flex h-full items-center justify-center relative shrink-0 w-[26px]">
                      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[#111] text-[14px] whitespace-nowrap">8€</p>
                    </div>
                  </div>
                </div>
              </>
            )}
            {isDayAndProduct && <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[#111] text-[14px] whitespace-nowrap">Mick Burger</p>}
            {isDayAndBieres && (
              <div className="content-stretch flex items-center justify-center relative shrink-0">
                <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[#111] text-[12px] w-[268px]">Girafe</p>
                <div className="flex flex-row items-center self-stretch">
                  <div className="content-stretch flex h-full items-center justify-center relative shrink-0 w-[26px]">
                    <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[#111] text-[14px] whitespace-nowrap">8€</p>
                  </div>
                </div>
              </div>
            )}
          </div>
          {isDayAndProduct && (
            <div className="content-stretch flex items-center justify-center relative shrink-0">
              <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[#111] text-[12px] w-[268px]">Steak haché de 150g, oignons crispies, cornichons, bacon, cheddar, salade et tomate</p>
            </div>
          )}
        </div>
        {isDayAndProduct && (
          <div className="content-stretch flex items-center justify-center relative self-stretch shrink-0 w-[26px]">
            <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[#111] text-[14px] whitespace-nowrap">16€</p>
          </div>
        )}
      </div>
    </div>
  );
}

function FluentWeatherSunny48Filled({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[28px]"} data-name="fluent:weather-sunny-48-filled">
      <div className="absolute inset-[8.34%_8.33%_8.33%_8.33%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="23.3328" preserveAspectRatio="none" viewBox="0 0 23.3333 23.3328" width="23.3333">
          <path d={svgPaths.p1c51a200} fill="#FFC700" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Menu({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[24px]"} data-name="Menu">
      <div className="absolute inset-[29.17%_20.83%_70.83%_20.83%]">
        <div className="absolute inset-[-1px_-7.14%]">
          <svg className="block size-full" fill="none" height="2" preserveAspectRatio="none" viewBox="0 0 16 2" width="16">
            <path d="M1 1H15" id="Vector 7" stroke="#33363F" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/2 left-[20.83%] right-[20.83%] top-1/2">
        <div className="absolute inset-[-1px_-7.14%]">
          <svg className="block size-full" fill="none" height="2" preserveAspectRatio="none" viewBox="0 0 16 2" width="16">
            <path d="M1 1H15" id="Vector 7" stroke="#33363F" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[70.83%_20.83%_29.17%_20.83%]">
        <div className="absolute inset-[-1px_-7.14%]">
          <svg className="block size-full" fill="none" height="2" preserveAspectRatio="none" viewBox="0 0 16 2" width="16">
            <path d="M1 1H15" id="Vector 7" stroke="#33363F" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}
type AtomLiveStatusProps = {
  className?: string;
  propriete1?: "Par défaut";
};

function AtomLiveStatus({ className, propriete1 = "Par défaut" }: AtomLiveStatusProps) {
  return (
    <div className={className || "relative"}>
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center relative size-full">
          <div className="relative shrink-0 size-[8px]">
            <svg className="absolute block inset-0 size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 8 8" width="8">
              <circle cx="4" cy="4" fill="#00FF66" id="Ellipse 1" r="4" />
            </svg>
          </div>
          <div className="content-stretch flex items-center justify-center relative shrink-0">
            <p className="[word-break:break-word] font-['Druk_Wide_Medium:Medium',sans-serif] leading-[1.1] not-italic relative shrink-0 text-[10px] text-black uppercase whitespace-nowrap">OUVERT</p>
          </div>
        </div>
      </div>
    </div>
  );
}
type HeaderProps = {
  className?: string;
  theme?: "Day";
};

function Header({ className, theme = "Day" }: HeaderProps) {
  return (
    <div className={className || "bg-[#f9f9f6] relative w-[393px]"}>
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between p-[12px] relative size-full">
          <div className="content-stretch flex flex-col h-[40px] items-center justify-center relative shrink-0">
            <p className="[word-break:break-word] font-['Old_London:Regular',sans-serif] leading-[1.1] not-italic relative shrink-0 text-[20px] text-black uppercase whitespace-nowrap">Rock food</p>
          </div>
          <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0">
            <AtomLiveStatus className="relative shrink-0" />
            <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[40px]">
              <Menu className="relative shrink-0 size-[24px]" />
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
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#111] text-[13px] tracking-[0.26px] uppercase whitespace-nowrap">côté resto</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[#f9f9f6] flex-[1_0_0] min-w-px relative rounded-[6px]">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[16px] py-[10px] relative size-full">
          <FluentWeatherSunny48Filled className="relative shrink-0 size-[28px]" />
          <Frame />
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#888] text-[13px] text-left tracking-[0.26px] uppercase whitespace-nowrap">Côté nuit</p>
    </div>
  );
}

function Frame3() {
  return (
    <a className="cursor-pointer flex-[1_0_0] min-w-px relative rounded-[6px]">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[16px] py-[10px] relative size-full">
          <div className="relative shrink-0 size-[28px]" data-name="fluent:weather-moon-28-filled">
            <div className="absolute inset-[7.28%_9%_7.14%_10.71%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" height="23.9624" preserveAspectRatio="none" viewBox="0 0 22.48 23.9624" width="22.48">
                <path d={svgPaths.p7089680} fill="#888888" id="Vector" />
              </svg>
            </div>
          </div>
          <Frame2 />
        </div>
      </div>
    </a>
  );
}

function Frame31() {
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

function Frame32() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-center cursor-pointer flex flex-wrap gap-[8px] items-center px-[16px] relative size-full">
          <button className="bg-[#00e5ff] drop-shadow-[0px_0px_4px_rgba(0,229,255,0.6)] relative rounded-[99px] shrink-0" data-name="Atom/Badge">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[8px] py-[4px] relative size-full">
                <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#111] text-[13px] text-left tracking-[0.26px] uppercase whitespace-nowrap">Salades</p>
              </div>
            </div>
          </button>
          <button className="bg-[#00e5ff] drop-shadow-[0px_0px_4px_rgba(0,229,255,0.6)] relative rounded-[99px] shrink-0" data-name="Atom/Badge">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[8px] py-[4px] relative size-full">
                <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#111] text-[13px] text-left tracking-[0.26px] uppercase whitespace-nowrap">{`Burgers & viandes`}</p>
              </div>
            </div>
          </button>
          <button className="bg-[#00e5ff] drop-shadow-[0px_0px_4px_rgba(0,229,255,0.6)] relative rounded-[99px] shrink-0" data-name="Atom/Badge">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[8px] py-[4px] relative size-full">
                <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#111] text-[13px] text-left tracking-[0.26px] uppercase whitespace-nowrap">{`Moules & poissons`}</p>
              </div>
            </div>
          </button>
          <button className="bg-[#00e5ff] drop-shadow-[0px_0px_4px_rgba(0,229,255,0.6)] relative rounded-[99px] shrink-0" data-name="Atom/Badge">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[8px] py-[4px] relative size-full">
                <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#111] text-[13px] text-left tracking-[0.26px] uppercase whitespace-nowrap">desserts</p>
              </div>
            </div>
          </button>
          <button className="bg-[#00e5ff] drop-shadow-[0px_0px_4px_rgba(0,229,255,0.6)] relative rounded-[99px] shrink-0" data-name="Atom/Badge">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[8px] py-[4px] relative size-full">
                <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#111] text-[13px] text-left tracking-[0.26px] uppercase whitespace-nowrap">Boissons</p>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[#111] text-[14px] whitespace-nowrap">Burrata</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[#111] text-[12px] w-[268px]">Salade, tomates, burrata, croutons, vinaigrette, basilic, vinaigre balsamic.</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
      <Frame4 />
      <Frame5 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-center justify-center relative self-stretch shrink-0 w-[26px]">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[#111] text-[14px] whitespace-nowrap">16€</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[#111] text-[14px] whitespace-nowrap">Waiméa</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[#111] text-[12px] w-[268px]">Salade, tomates, poulet pané, serrano, œuf, croutons, pickles d’oignon rouge, sauce césar.</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
      <Frame7 />
      <Frame10 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex items-center justify-center relative self-stretch shrink-0 w-[26px]">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[#111] text-[14px] whitespace-nowrap">16€</p>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center relative shrink-0">
      <div className="bg-[#f9f9f6] relative rounded-[6px] shrink-0 w-[320px]" data-name="Molecule/ProductCard">
        <div aria-hidden className="absolute border border-[#5c5c5c] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="content-stretch flex gap-[10px] items-start p-[8px] relative size-full">
          <Frame8 />
          <Frame6 />
        </div>
      </div>
      <div className="bg-[#f9f9f6] relative rounded-[6px] shrink-0 w-[320px]" data-name="Molecule/ProductCard">
        <div aria-hidden className="absolute border border-[#5c5c5c] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="content-stretch flex gap-[10px] items-start p-[8px] relative size-full">
          <Frame9 />
          <Frame11 />
        </div>
      </div>
    </div>
  );
}

function Salades() {
  return (
    <div className="relative shrink-0 w-full" data-name="Salades">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start px-[16px] relative size-full">
          <p className="[word-break:break-word] font-['Druk_Wide_Medium:Medium',sans-serif] leading-[1.1] min-w-full not-italic relative shrink-0 text-[20px] text-black uppercase w-[min-content]">Salades</p>
          <Frame36 />
        </div>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[#111] text-[14px] whitespace-nowrap">Mick Burger</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[#111] text-[12px] w-[268px]">Steak de 150g, oignons crispies, cornichons, bacon, cheddar, salade et tomate.</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
      <Frame13 />
      <Frame14 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex items-center justify-center relative self-stretch shrink-0 w-[26px]">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[#111] text-[14px] whitespace-nowrap">16€</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[#111] text-[14px] whitespace-nowrap">Medina Burger</p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[#111] text-[12px] w-[268px]">Tenders de poulet, sauce césar, oignons crispies, cheddar, tomate, salade et pickles d’oignon rouge.</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
      <Frame17 />
      <Frame18 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex items-center justify-center relative self-stretch shrink-0 w-[26px]">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[#111] text-[14px] whitespace-nowrap">16€</p>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[#111] text-[14px] whitespace-nowrap">Kelly Végé</p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[#111] text-[12px] w-[268px]">Galette de pomme de terre, guacamole, pickles d’oignon rouge, salade et tomate.</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
      <Frame21 />
      <Frame22 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex items-center justify-center relative self-stretch shrink-0 w-[26px]">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[#111] text-[14px] whitespace-nowrap">16€</p>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[#111] text-[14px] whitespace-nowrap">Flores Burger</p>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[#111] text-[12px] w-[268px]">Steak de 150g, galette rosty, oignons crispies, salade et tomates.</p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
      <Frame25 />
      <Frame26 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex items-center justify-center relative self-stretch shrink-0 w-[26px]">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[#111] text-[14px] whitespace-nowrap">16€</p>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[#111] text-[14px] whitespace-nowrap">RockFood Burger</p>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[#111] text-[12px] w-[268px]">Steak de 150g, serrano frit, brebis, crispy, salade et tomates.</p>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
      <Frame30 />
      <Frame34 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex items-center justify-center relative self-stretch shrink-0 w-[26px]">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[#111] text-[14px] whitespace-nowrap">16€</p>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center relative shrink-0 w-full">
      <div className="bg-[#f9f9f6] relative rounded-[6px] shrink-0 w-[320px]" data-name="Molecule/ProductCard">
        <div aria-hidden className="absolute border border-[#5c5c5c] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="content-stretch flex gap-[10px] items-start p-[8px] relative size-full">
          <Frame12 />
          <Frame15 />
        </div>
      </div>
      <div className="bg-[#f9f9f6] relative rounded-[6px] shrink-0 w-[320px]" data-name="Molecule/ProductCard">
        <div aria-hidden className="absolute border border-[#5c5c5c] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="content-stretch flex gap-[10px] items-start p-[8px] relative size-full">
          <Frame16 />
          <Frame19 />
        </div>
      </div>
      <div className="bg-[#f9f9f6] relative rounded-[6px] shrink-0 w-[320px]" data-name="Molecule/ProductCard">
        <div aria-hidden className="absolute border border-[#5c5c5c] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="content-stretch flex gap-[10px] items-start p-[8px] relative size-full">
          <Frame20 />
          <Frame23 />
        </div>
      </div>
      <div className="bg-[#f9f9f6] relative rounded-[6px] shrink-0 w-[320px]" data-name="Molecule/ProductCard">
        <div aria-hidden className="absolute border border-[#5c5c5c] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="content-stretch flex gap-[10px] items-start p-[8px] relative size-full">
          <Frame24 />
          <Frame27 />
        </div>
      </div>
      <div className="bg-[#f9f9f6] relative rounded-[6px] shrink-0 w-[320px]" data-name="Molecule/ProductCard">
        <div aria-hidden className="absolute border border-[#5c5c5c] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="content-stretch flex gap-[10px] items-start p-[8px] relative size-full">
          <Frame28 />
          <Frame35 />
        </div>
      </div>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[#111] text-[14px] whitespace-nowrap">Tartare de bœuf</p>
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[#111] text-[12px] w-[268px]">Servi avec frites et salade</p>
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
      <Frame39 />
      <Frame40 />
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex items-center justify-center relative self-stretch shrink-0 w-[26px]">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[#111] text-[14px] whitespace-nowrap">17€</p>
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[#111] text-[14px] whitespace-nowrap">Brochette de bœuf</p>
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[#111] text-[12px] w-[268px]">Servies avec frites et salade</p>
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
      <Frame43 />
      <Frame44 />
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex items-center justify-center relative self-stretch shrink-0 w-[26px]">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[#111] text-[14px] whitespace-nowrap">18€</p>
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center relative shrink-0 w-full">
      <div className="bg-[#f9f9f6] relative rounded-[6px] shrink-0 w-[320px]" data-name="Molecule/ProductCard">
        <div aria-hidden className="absolute border border-[#5c5c5c] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="content-stretch flex gap-[10px] items-start p-[8px] relative size-full">
          <Frame38 />
          <Frame41 />
        </div>
      </div>
      <div className="bg-[#f9f9f6] relative rounded-[6px] shrink-0 w-[320px]" data-name="Molecule/ProductCard">
        <div aria-hidden className="absolute border border-[#5c5c5c] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="content-stretch flex gap-[10px] items-start p-[8px] relative size-full">
          <Frame42 />
          <Frame45 />
        </div>
      </div>
    </div>
  );
}

function BurgerViandes() {
  return (
    <div className="relative shrink-0 w-full" data-name="Burger & viandes">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start px-[16px] relative size-full">
          <p className="[word-break:break-word] font-['Druk_Wide_Medium:Medium',sans-serif] leading-[1.1] not-italic relative shrink-0 text-[20px] text-black uppercase w-full">{`Burgers & viandes`}</p>
          <p className="[word-break:break-word] font-['Druk_Wide_Medium:Medium',sans-serif] leading-[1.1] not-italic relative shrink-0 text-[14px] text-black uppercase w-full">Burgers</p>
          <Frame33 />
          <p className="[word-break:break-word] font-['Druk_Wide_Medium:Medium',sans-serif] leading-[1.1] not-italic relative shrink-0 text-[14px] text-black uppercase w-full">Viandes</p>
          <Frame37 />
        </div>
      </div>
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[#111] text-[14px] whitespace-nowrap">Marinière</p>
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[#111] text-[12px] w-[268px]">Servies avec frites</p>
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
      <Frame48 />
      <Frame49 />
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex items-center justify-center relative self-stretch shrink-0 w-[26px]">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[#111] text-[14px] whitespace-nowrap">15€</p>
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[#111] text-[14px] whitespace-nowrap">Crème</p>
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[#111] text-[12px] w-[268px]">Servies avec frites</p>
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
      <Frame52 />
      <Frame53 />
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex items-center justify-center relative self-stretch shrink-0 w-[26px]">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[#111] text-[14px] whitespace-nowrap">16€</p>
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[#111] text-[14px] whitespace-nowrap">Roquefort</p>
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[#111] text-[12px] w-[268px]">Servies avec frites</p>
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
      <Frame56 />
      <Frame57 />
    </div>
  );
}

function Frame58() {
  return (
    <div className="content-stretch flex items-center justify-center relative self-stretch shrink-0 w-[26px]">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[#111] text-[14px] whitespace-nowrap">16€</p>
    </div>
  );
}

function Frame60() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[#111] text-[14px] whitespace-nowrap">Curry</p>
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[#111] text-[12px] w-[268px]">Servies avec frites</p>
    </div>
  );
}

function Frame59() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
      <Frame60 />
      <Frame61 />
    </div>
  );
}

function Frame62() {
  return (
    <div className="content-stretch flex items-center justify-center relative self-stretch shrink-0 w-[26px]">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[#111] text-[14px] whitespace-nowrap">16€</p>
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center relative shrink-0 w-full">
      <div className="bg-[#f9f9f6] relative rounded-[6px] shrink-0 w-[320px]" data-name="Molecule/ProductCard">
        <div aria-hidden className="absolute border border-[#5c5c5c] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="content-stretch flex gap-[10px] items-start p-[8px] relative size-full">
          <Frame47 />
          <Frame50 />
        </div>
      </div>
      <div className="bg-[#f9f9f6] relative rounded-[6px] shrink-0 w-[320px]" data-name="Molecule/ProductCard">
        <div aria-hidden className="absolute border border-[#5c5c5c] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="content-stretch flex gap-[10px] items-start p-[8px] relative size-full">
          <Frame51 />
          <Frame54 />
        </div>
      </div>
      <div className="bg-[#f9f9f6] relative rounded-[6px] shrink-0 w-[320px]" data-name="Molecule/ProductCard">
        <div aria-hidden className="absolute border border-[#5c5c5c] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="content-stretch flex gap-[10px] items-start p-[8px] relative size-full">
          <Frame55 />
          <Frame58 />
        </div>
      </div>
      <div className="bg-[#f9f9f6] relative rounded-[6px] shrink-0 w-[320px]" data-name="Molecule/ProductCard">
        <div aria-hidden className="absolute border border-[#5c5c5c] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="content-stretch flex gap-[10px] items-start p-[8px] relative size-full">
          <Frame59 />
          <Frame62 />
        </div>
      </div>
    </div>
  );
}

function Frame65() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[#111] text-[14px] whitespace-nowrap">{`Fish & chips`}</p>
    </div>
  );
}

function Frame66() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[#111] text-[12px] w-[268px]">Servi avec frites, salade et sauce tartare</p>
    </div>
  );
}

function Frame64() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
      <Frame65 />
      <Frame66 />
    </div>
  );
}

function Frame67() {
  return (
    <div className="content-stretch flex items-center justify-center relative self-stretch shrink-0 w-[26px]">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[#111] text-[14px] whitespace-nowrap">16€</p>
    </div>
  );
}

function Frame69() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[#111] text-[14px] whitespace-nowrap">Chipirons persillade</p>
    </div>
  );
}

function Frame70() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[#111] text-[12px] w-[268px]">Servis avec frites et salade</p>
    </div>
  );
}

function Frame68() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
      <Frame69 />
      <Frame70 />
    </div>
  );
}

function Frame71() {
  return (
    <div className="content-stretch flex items-center justify-center relative self-stretch shrink-0 w-[26px]">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[#111] text-[14px] whitespace-nowrap">20€</p>
    </div>
  );
}

function Frame73() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[#111] text-[14px] whitespace-nowrap">Thon à la tahitienne</p>
    </div>
  );
}

function Frame74() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[#111] text-[12px] w-[268px]">Servi avec riz</p>
    </div>
  );
}

function Frame72() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
      <Frame73 />
      <Frame74 />
    </div>
  );
}

function Frame75() {
  return (
    <div className="content-stretch flex items-center justify-center relative self-stretch shrink-0 w-[26px]">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[#111] text-[14px] whitespace-nowrap">19€</p>
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center relative shrink-0 w-full">
      <div className="bg-[#f9f9f6] relative rounded-[6px] shrink-0 w-[320px]" data-name="Molecule/ProductCard">
        <div aria-hidden className="absolute border border-[#5c5c5c] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="content-stretch flex gap-[10px] items-start p-[8px] relative size-full">
          <Frame64 />
          <Frame67 />
        </div>
      </div>
      <div className="bg-[#f9f9f6] relative rounded-[6px] shrink-0 w-[320px]" data-name="Molecule/ProductCard">
        <div aria-hidden className="absolute border border-[#5c5c5c] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="content-stretch flex gap-[10px] items-start p-[8px] relative size-full">
          <Frame68 />
          <Frame71 />
        </div>
      </div>
      <div className="bg-[#f9f9f6] relative rounded-[6px] shrink-0 w-[320px]" data-name="Molecule/ProductCard">
        <div aria-hidden className="absolute border border-[#5c5c5c] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="content-stretch flex gap-[10px] items-start p-[8px] relative size-full">
          <Frame72 />
          <Frame75 />
        </div>
      </div>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] min-w-full not-italic relative shrink-0 text-[12px] text-black w-[min-content]">Possibilité de remplacer les frites par du riz</p>
    </div>
  );
}

function MoulesPoissons() {
  return (
    <div className="relative shrink-0 w-full" data-name="Moules &  Poissons">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start px-[16px] relative size-full">
          <p className="[word-break:break-word] font-['Druk_Wide_Medium:Medium',sans-serif] leading-[1.1] not-italic relative shrink-0 text-[20px] text-black uppercase w-full">{`MOULES & POISSONS`}</p>
          <p className="[word-break:break-word] font-['Druk_Wide_Medium:Medium',sans-serif] leading-[1.1] not-italic relative shrink-0 text-[14px] text-black uppercase w-full">Moules</p>
          <Frame46 />
          <p className="[word-break:break-word] font-['Druk_Wide_Medium:Medium',sans-serif] leading-[1.1] not-italic relative shrink-0 text-[14px] text-black uppercase w-full">Poissons</p>
          <Frame63 />
        </div>
      </div>
    </div>
  );
}

function Frame78() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[#111] text-[14px] whitespace-nowrap">Fromage de brebis</p>
    </div>
  );
}

function Frame79() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[#111] text-[12px] w-[268px]">et sa confiture</p>
    </div>
  );
}

function Frame77() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
      <Frame78 />
      <Frame79 />
    </div>
  );
}

function Frame80() {
  return (
    <div className="content-stretch flex items-center justify-center relative self-stretch shrink-0 w-[26px]">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[#111] text-[14px] whitespace-nowrap">7€</p>
    </div>
  );
}

function Frame82() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[#111] text-[14px] whitespace-nowrap">Mi-cuit chocolat</p>
    </div>
  );
}

function Frame83() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[#111] text-[12px] w-[268px]">Boule vanille et chantilly</p>
    </div>
  );
}

function Frame81() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
      <Frame82 />
      <Frame83 />
    </div>
  );
}

function Frame84() {
  return (
    <div className="content-stretch flex items-center justify-center relative self-stretch shrink-0 w-[26px]">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[#111] text-[14px] whitespace-nowrap">8€</p>
    </div>
  );
}

function Frame86() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[#111] text-[14px] whitespace-nowrap">Café gourmand</p>
    </div>
  );
}

function Frame87() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[#111] text-[12px] w-[268px]">+1,50€ pour thé, double expresso, cappuccino...</p>
    </div>
  );
}

function Frame85() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
      <Frame86 />
      <Frame87 />
    </div>
  );
}

function Frame88() {
  return (
    <div className="content-stretch flex items-center justify-center relative self-stretch shrink-0 w-[26px]">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[#111] text-[14px] whitespace-nowrap">9€</p>
    </div>
  );
}

function Frame90() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[#111] text-[14px] whitespace-nowrap">Pancakes</p>
    </div>
  );
}

function Frame91() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[#111] text-[12px] w-[268px]">Sucre, chantilly, nutella, caramel</p>
    </div>
  );
}

function Frame89() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
      <Frame90 />
      <Frame91 />
    </div>
  );
}

function Frame92() {
  return (
    <div className="content-stretch flex items-center justify-center relative self-stretch shrink-0 w-[26px]">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[#111] text-[14px] whitespace-nowrap">5€</p>
    </div>
  );
}

function Frame94() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[#111] text-[14px] whitespace-nowrap">Tarte tatin</p>
    </div>
  );
}

function Frame95() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[#111] text-[12px] w-[268px]">Boule vanille</p>
    </div>
  );
}

function Frame93() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
      <Frame94 />
      <Frame95 />
    </div>
  );
}

function Frame96() {
  return (
    <div className="content-stretch flex items-center justify-center relative self-stretch shrink-0 w-[26px]">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[#111] text-[14px] whitespace-nowrap">8€</p>
    </div>
  );
}

function Frame76() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center relative shrink-0 w-full">
      <div className="bg-[#f9f9f6] relative rounded-[6px] shrink-0 w-[320px]" data-name="Molecule/ProductCard">
        <div aria-hidden className="absolute border border-[#5c5c5c] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="content-stretch flex gap-[10px] items-start p-[8px] relative size-full">
          <Frame77 />
          <Frame80 />
        </div>
      </div>
      <div className="bg-[#f9f9f6] relative rounded-[6px] shrink-0 w-[320px]" data-name="Molecule/ProductCard">
        <div aria-hidden className="absolute border border-[#5c5c5c] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="content-stretch flex gap-[10px] items-start p-[8px] relative size-full">
          <Frame81 />
          <Frame84 />
        </div>
      </div>
      <div className="bg-[#f9f9f6] relative rounded-[6px] shrink-0 w-[320px]" data-name="Molecule/ProductCard">
        <div aria-hidden className="absolute border border-[#5c5c5c] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="content-stretch flex gap-[10px] items-start p-[8px] relative size-full">
          <Frame85 />
          <Frame88 />
        </div>
      </div>
      <div className="bg-[#f9f9f6] relative rounded-[6px] shrink-0 w-[320px]" data-name="Molecule/ProductCard">
        <div aria-hidden className="absolute border border-[#5c5c5c] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="content-stretch flex gap-[10px] items-start p-[8px] relative size-full">
          <Frame89 />
          <Frame92 />
        </div>
      </div>
      <div className="bg-[#f9f9f6] relative rounded-[6px] shrink-0 w-[320px]" data-name="Molecule/ProductCard">
        <div aria-hidden className="absolute border border-[#5c5c5c] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="content-stretch flex gap-[10px] items-start p-[8px] relative size-full">
          <Frame93 />
          <Frame96 />
        </div>
      </div>
    </div>
  );
}

function Frame98() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[#111] text-[14px] whitespace-nowrap">Parfums Glaces :</p>
    </div>
  );
}

function Frame99() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[#111] text-[12px] w-[268px]">Vanille Bourbon/Chocolat/Café arabica du Brésil/Caramel sel de Camargue/Menthe chocolat/Pistache de Californie/Rhum raisin/Yaourt Malo</p>
    </div>
  );
}

function Frame97() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
      <Frame98 />
      <Frame99 />
    </div>
  );
}

function Frame101() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[#111] text-[14px] whitespace-nowrap">Parfums Sorbets :</p>
    </div>
  );
}

function Frame102() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[#111] text-[12px] w-[268px]">Citron jaune de Sicile/Fraise/Fruit de la passion/Myrtille/Mangue Alphonso</p>
    </div>
  );
}

function Frame100() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
      <Frame101 />
      <Frame102 />
    </div>
  );
}

function Frame106() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[#111] text-[14px] whitespace-nowrap">Glaces et Sorbets</p>
    </div>
  );
}

function Frame108() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center justify-center min-w-px relative">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[#111] text-[14px] whitespace-nowrap">3€</p>
      </div>
    </div>
  );
}

function Frame107() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[294px]">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[#111] text-[12px] w-[268px]">Coupe 1 Boule</p>
      <Frame108 />
    </div>
  );
}

function Frame110() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="content-stretch flex h-full items-center justify-center relative shrink-0 w-[26px]">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[#111] text-[14px] whitespace-nowrap">5€</p>
      </div>
    </div>
  );
}

function Frame109() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[#111] text-[12px] w-[268px]">Coupe 2 Boules</p>
      <Frame110 />
    </div>
  );
}

function Frame112() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="content-stretch flex h-full items-center justify-center relative shrink-0 w-[26px]">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[#111] text-[14px] whitespace-nowrap">6€</p>
      </div>
    </div>
  );
}

function Frame111() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[#111] text-[12px] w-[268px]">Coupe 3 Boules</p>
      <Frame112 />
    </div>
  );
}

function Frame114() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="content-stretch flex h-full items-center justify-center relative shrink-0 w-[26px]">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[#111] text-[14px] whitespace-nowrap">1€</p>
      </div>
    </div>
  );
}

function Frame113() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[#111] text-[12px] w-[268px]">Supplément Chantilly</p>
      <Frame114 />
    </div>
  );
}

function Frame105() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-[304px]">
      <Frame106 />
      <Frame107 />
      <Frame109 />
      <Frame111 />
      <Frame113 />
    </div>
  );
}

function Frame104() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Frame105 />
    </div>
  );
}

function Frame103() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full">
      <div className="bg-[#f9f9f6] relative rounded-[6px] shrink-0" data-name="Molecule/ProductCard">
        <div aria-hidden className="absolute border border-[#5c5c5c] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="content-stretch flex items-start p-[8px] relative size-full">
          <Frame104 />
        </div>
      </div>
    </div>
  );
}

function Desserts() {
  return (
    <div className="relative shrink-0 w-full" data-name="Desserts">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start px-[16px] relative size-full">
          <p className="[word-break:break-word] font-['Druk_Wide_Medium:Medium',sans-serif] leading-[1.1] min-w-full not-italic relative shrink-0 text-[20px] text-black uppercase w-[min-content]">Desserts</p>
          <p className="[word-break:break-word] font-['Druk_Wide_Medium:Medium',sans-serif] leading-[1.1] min-w-full not-italic relative shrink-0 text-[14px] text-black uppercase w-[min-content]">Desserts</p>
          <Frame76 />
          <p className="[word-break:break-word] font-['Druk_Wide_Medium:Medium',sans-serif] leading-[1.1] min-w-full not-italic relative shrink-0 text-[14px] text-black uppercase w-[min-content]">Glaces</p>
          <div className="bg-[#f9f9f6] relative rounded-[6px] shrink-0 w-[320px]" data-name="Molecule/ProductCard">
            <div aria-hidden className="absolute border border-[#5c5c5c] border-solid inset-0 pointer-events-none rounded-[6px]" />
            <div className="content-stretch flex gap-[10px] items-start p-[8px] relative size-full">
              <Frame97 />
            </div>
          </div>
          <div className="bg-[#f9f9f6] relative rounded-[6px] shrink-0 w-[320px]" data-name="Molecule/ProductCard">
            <div aria-hidden className="absolute border border-[#5c5c5c] border-solid inset-0 pointer-events-none rounded-[6px]" />
            <div className="content-stretch flex gap-[10px] items-start p-[8px] relative size-full">
              <Frame100 />
            </div>
          </div>
          <Frame103 />
        </div>
      </div>
    </div>
  );
}

function Frame117() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[#111] text-[14px] whitespace-nowrap">Jus de fruit PAGO (20cl)</p>
    </div>
  );
}

function Frame118() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[#111] text-[12px] w-[268px]">Orange/ACE/Pamplemousse/Abricot/Pomme/Tomate/Ananas</p>
    </div>
  );
}

function Frame116() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
      <Frame117 />
      <Frame118 />
    </div>
  );
}

function Frame119() {
  return (
    <div className="content-stretch flex items-center justify-center relative self-stretch shrink-0 w-[26px]">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[#111] text-[14px] whitespace-nowrap">3,5€</p>
    </div>
  );
}

function Frame121() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[#111] text-[14px] whitespace-nowrap">Sirop ou Pulco à l’eau (25cl)</p>
    </div>
  );
}

function Frame122() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[#111] text-[12px] w-[268px]">​</p>
    </div>
  );
}

function Frame120() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
      <Frame121 />
      <Frame122 />
    </div>
  );
}

function Frame123() {
  return (
    <div className="content-stretch flex items-center justify-center relative self-stretch shrink-0 w-[26px]">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[#111] text-[14px] whitespace-nowrap">2,5€</p>
    </div>
  );
}

function Frame125() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[#111] text-[14px] whitespace-nowrap">Café frappé</p>
    </div>
  );
}

function Frame126() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[#111] text-[12px] w-[268px]">+1€ supplément lait</p>
    </div>
  );
}

function Frame124() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
      <Frame125 />
      <Frame126 />
    </div>
  );
}

function Frame127() {
  return (
    <div className="content-stretch flex items-center justify-center relative self-stretch shrink-0 w-[26px]">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[#111] text-[14px] whitespace-nowrap">5€</p>
    </div>
  );
}

function Frame129() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[#111] text-[14px] whitespace-nowrap">Sodas (33cl)</p>
    </div>
  );
}

function Frame130() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[#111] text-[12px] w-[268px]">Oasis tropical, Coca, Coca cherry, Coca zéro, Perrier, Orangina, Sprite, Fanta, Schweppes agrumes, Fuze tea, diabolo, Finley tonic</p>
    </div>
  );
}

function Frame128() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
      <Frame129 />
      <Frame130 />
    </div>
  );
}

function Frame131() {
  return (
    <div className="content-stretch flex items-center justify-center relative self-stretch shrink-0 w-[26px]">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[#111] text-[14px] whitespace-nowrap">3,5€</p>
    </div>
  );
}

function Frame134() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[#111] text-[14px] whitespace-nowrap">San Pellegrino</p>
    </div>
  );
}

function Frame136() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="content-stretch flex h-full items-center justify-center relative shrink-0 w-[26px]">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[#111] text-[14px] whitespace-nowrap">6€</p>
      </div>
    </div>
  );
}

function Frame135() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[#111] text-[12px] w-[268px]">50cl</p>
      <Frame136 />
    </div>
  );
}

function Frame138() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="content-stretch flex h-full items-center justify-center relative shrink-0 w-[26px]">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[#111] text-[14px] whitespace-nowrap">8€</p>
      </div>
    </div>
  );
}

function Frame137() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[#111] text-[12px] w-[268px]">1 Litre</p>
      <Frame138 />
    </div>
  );
}

function Frame133() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-[304px]">
      <Frame134 />
      <Frame135 />
      <Frame137 />
    </div>
  );
}

function Frame132() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Frame133 />
    </div>
  );
}

function Frame115() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center relative shrink-0 w-full">
      <div className="bg-[#f9f9f6] relative rounded-[6px] shrink-0 w-[320px]" data-name="Molecule/ProductCard">
        <div aria-hidden className="absolute border border-[#5c5c5c] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="content-stretch flex gap-[10px] items-start p-[8px] relative size-full">
          <Frame116 />
          <Frame119 />
        </div>
      </div>
      <div className="bg-[#f9f9f6] relative rounded-[6px] shrink-0 w-[320px]" data-name="Molecule/ProductCard">
        <div aria-hidden className="absolute border border-[#5c5c5c] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="content-stretch flex gap-[10px] items-start p-[8px] relative size-full">
          <Frame120 />
          <Frame123 />
        </div>
      </div>
      <div className="bg-[#f9f9f6] relative rounded-[6px] shrink-0 w-[320px]" data-name="Molecule/ProductCard">
        <div aria-hidden className="absolute border border-[#5c5c5c] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="content-stretch flex gap-[10px] items-start p-[8px] relative size-full">
          <Frame124 />
          <Frame127 />
        </div>
      </div>
      <div className="bg-[#f9f9f6] relative rounded-[6px] shrink-0 w-[320px]" data-name="Molecule/ProductCard">
        <div aria-hidden className="absolute border border-[#5c5c5c] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="content-stretch flex gap-[10px] items-start p-[8px] relative size-full">
          <Frame128 />
          <Frame131 />
        </div>
      </div>
      <MoleculeProductCard className="bg-[#f9f9f6] relative rounded-[6px] shrink-0 w-[320px]" type="Liste" />
      <div className="bg-[#f9f9f6] relative rounded-[6px] shrink-0 w-[320px]" data-name="Molecule/ProductCard">
        <div aria-hidden className="absolute border border-[#5c5c5c] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="content-stretch flex items-start p-[8px] relative size-full">
          <Frame132 />
        </div>
      </div>
    </div>
  );
}

function Frame141() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[#111] text-[14px] whitespace-nowrap">Café</p>
    </div>
  );
}

function Frame142() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[#111] text-[12px] w-[268px]">​</p>
    </div>
  );
}

function Frame140() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
      <Frame141 />
      <Frame142 />
    </div>
  );
}

function Frame143() {
  return (
    <div className="content-stretch flex items-center justify-center relative self-stretch shrink-0 w-[26px]">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[#111] text-[14px] whitespace-nowrap">1,9€</p>
    </div>
  );
}

function Frame145() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[#111] text-[14px] whitespace-nowrap">Déca ou noisette</p>
    </div>
  );
}

function Frame146() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[#111] text-[12px] w-[268px]">​</p>
    </div>
  );
}

function Frame144() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
      <Frame145 />
      <Frame146 />
    </div>
  );
}

function Frame147() {
  return (
    <div className="content-stretch flex items-center justify-center relative self-stretch shrink-0 w-[26px]">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[#111] text-[14px] whitespace-nowrap">2€</p>
    </div>
  );
}

function Frame149() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[#111] text-[14px] whitespace-nowrap">Café allongé</p>
    </div>
  );
}

function Frame150() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[#111] text-[12px] w-[268px]">​</p>
    </div>
  );
}

function Frame148() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
      <Frame149 />
      <Frame150 />
    </div>
  );
}

function Frame151() {
  return (
    <div className="content-stretch flex items-center justify-center relative self-stretch shrink-0 w-[26px]">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[#111] text-[14px] whitespace-nowrap">2€</p>
    </div>
  );
}

function Frame153() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[#111] text-[14px] whitespace-nowrap">Double café</p>
    </div>
  );
}

function Frame154() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[#111] text-[12px] w-[268px]">​</p>
    </div>
  );
}

function Frame152() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
      <Frame153 />
      <Frame154 />
    </div>
  );
}

function Frame155() {
  return (
    <div className="content-stretch flex items-center justify-center relative self-stretch shrink-0 w-[26px]">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[#111] text-[14px] whitespace-nowrap">3,5€</p>
    </div>
  );
}

function Frame157() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[#111] text-[14px] whitespace-nowrap">Cappuccino</p>
    </div>
  );
}

function Frame158() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[#111] text-[12px] w-[268px]">​</p>
    </div>
  );
}

function Frame156() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
      <Frame157 />
      <Frame158 />
    </div>
  );
}

function Frame159() {
  return (
    <div className="content-stretch flex items-center justify-center relative self-stretch shrink-0 w-[26px]">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[#111] text-[14px] whitespace-nowrap">4€</p>
    </div>
  );
}

function Frame161() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[#111] text-[14px] whitespace-nowrap">Café ou chocolat viennois</p>
    </div>
  );
}

function Frame162() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[#111] text-[12px] w-[268px]">​</p>
    </div>
  );
}

function Frame160() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
      <Frame161 />
      <Frame162 />
    </div>
  );
}

function Frame163() {
  return (
    <div className="content-stretch flex items-center justify-center relative self-stretch shrink-0 w-[26px]">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[#111] text-[14px] whitespace-nowrap">4,5€</p>
    </div>
  );
}

function Frame165() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[#111] text-[14px] whitespace-nowrap">Chocolat chaud</p>
    </div>
  );
}

function Frame166() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[#111] text-[12px] w-[268px]">​</p>
    </div>
  );
}

function Frame164() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
      <Frame165 />
      <Frame166 />
    </div>
  );
}

function Frame167() {
  return (
    <div className="content-stretch flex items-center justify-center relative self-stretch shrink-0 w-[26px]">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[#111] text-[14px] whitespace-nowrap">3,5€</p>
    </div>
  );
}

function Frame169() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[#111] text-[14px] whitespace-nowrap">Thé ou infusion Dammann</p>
    </div>
  );
}

function Frame170() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[#111] text-[12px] w-[268px]">Nautre/caramel/vert naturé/vert menthe/jasmin/fruits rouges/earl grey/verveine/verveine menthe/tilleul/tilleul menthe.</p>
    </div>
  );
}

function Frame168() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
      <Frame169 />
      <Frame170 />
    </div>
  );
}

function Frame171() {
  return (
    <div className="content-stretch flex items-center justify-center relative self-stretch shrink-0 w-[26px]">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[#111] text-[14px] whitespace-nowrap">4€</p>
    </div>
  );
}

function Frame173() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[#111] text-[14px] whitespace-nowrap">Irish coffee</p>
    </div>
  );
}

function Frame174() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[#111] text-[12px] w-[268px]">​</p>
    </div>
  );
}

function Frame172() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
      <Frame173 />
      <Frame174 />
    </div>
  );
}

function Frame175() {
  return (
    <div className="content-stretch flex items-center justify-center relative self-stretch shrink-0 w-[26px]">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[#111] text-[14px] whitespace-nowrap">10€</p>
    </div>
  );
}

function Frame177() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[#111] text-[14px] whitespace-nowrap">Jamaican coffee</p>
    </div>
  );
}

function Frame178() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[#111] text-[12px] w-[268px]">​</p>
    </div>
  );
}

function Frame176() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
      <Frame177 />
      <Frame178 />
    </div>
  );
}

function Frame179() {
  return (
    <div className="content-stretch flex items-center justify-center relative self-stretch shrink-0 w-[26px]">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[#111] text-[14px] whitespace-nowrap">10€</p>
    </div>
  );
}

function Frame181() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[#111] text-[14px] whitespace-nowrap">Supplément lait végétal (Avoine)</p>
    </div>
  );
}

function Frame182() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[#111] text-[12px] w-[268px]">​</p>
    </div>
  );
}

function Frame180() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
      <Frame181 />
      <Frame182 />
    </div>
  );
}

function Frame183() {
  return (
    <div className="content-stretch flex items-center justify-center relative self-stretch shrink-0 w-[26px]">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[#111] text-[14px] whitespace-nowrap">1€</p>
    </div>
  );
}

function Frame139() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center relative shrink-0 w-full">
      <div className="bg-[#f9f9f6] relative rounded-[6px] shrink-0 w-[320px]" data-name="Molecule/ProductCard">
        <div aria-hidden className="absolute border border-[#5c5c5c] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="content-stretch flex gap-[10px] items-start p-[8px] relative size-full">
          <Frame140 />
          <Frame143 />
        </div>
      </div>
      <div className="bg-[#f9f9f6] relative rounded-[6px] shrink-0 w-[320px]" data-name="Molecule/ProductCard">
        <div aria-hidden className="absolute border border-[#5c5c5c] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="content-stretch flex gap-[10px] items-start p-[8px] relative size-full">
          <Frame144 />
          <Frame147 />
        </div>
      </div>
      <div className="bg-[#f9f9f6] relative rounded-[6px] shrink-0 w-[320px]" data-name="Molecule/ProductCard">
        <div aria-hidden className="absolute border border-[#5c5c5c] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="content-stretch flex gap-[10px] items-start p-[8px] relative size-full">
          <Frame148 />
          <Frame151 />
        </div>
      </div>
      <div className="bg-[#f9f9f6] relative rounded-[6px] shrink-0 w-[320px]" data-name="Molecule/ProductCard">
        <div aria-hidden className="absolute border border-[#5c5c5c] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="content-stretch flex gap-[10px] items-start p-[8px] relative size-full">
          <Frame152 />
          <Frame155 />
        </div>
      </div>
      <div className="bg-[#f9f9f6] relative rounded-[6px] shrink-0 w-[320px]" data-name="Molecule/ProductCard">
        <div aria-hidden className="absolute border border-[#5c5c5c] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="content-stretch flex gap-[10px] items-start p-[8px] relative size-full">
          <Frame156 />
          <Frame159 />
        </div>
      </div>
      <div className="bg-[#f9f9f6] relative rounded-[6px] shrink-0 w-[320px]" data-name="Molecule/ProductCard">
        <div aria-hidden className="absolute border border-[#5c5c5c] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="content-stretch flex gap-[10px] items-start p-[8px] relative size-full">
          <Frame160 />
          <Frame163 />
        </div>
      </div>
      <div className="bg-[#f9f9f6] relative rounded-[6px] shrink-0 w-[320px]" data-name="Molecule/ProductCard">
        <div aria-hidden className="absolute border border-[#5c5c5c] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="content-stretch flex gap-[10px] items-start p-[8px] relative size-full">
          <Frame164 />
          <Frame167 />
        </div>
      </div>
      <div className="bg-[#f9f9f6] relative rounded-[6px] shrink-0 w-[320px]" data-name="Molecule/ProductCard">
        <div aria-hidden className="absolute border border-[#5c5c5c] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="content-stretch flex gap-[10px] items-start p-[8px] relative size-full">
          <Frame168 />
          <Frame171 />
        </div>
      </div>
      <div className="bg-[#f9f9f6] relative rounded-[6px] shrink-0 w-[320px]" data-name="Molecule/ProductCard">
        <div aria-hidden className="absolute border border-[#5c5c5c] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="content-stretch flex gap-[10px] items-start p-[8px] relative size-full">
          <Frame172 />
          <Frame175 />
        </div>
      </div>
      <div className="bg-[#f9f9f6] relative rounded-[6px] shrink-0 w-[320px]" data-name="Molecule/ProductCard">
        <div aria-hidden className="absolute border border-[#5c5c5c] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="content-stretch flex gap-[10px] items-start p-[8px] relative size-full">
          <Frame176 />
          <Frame179 />
        </div>
      </div>
      <div className="bg-[#f9f9f6] relative rounded-[6px] shrink-0 w-[320px]" data-name="Molecule/ProductCard">
        <div aria-hidden className="absolute border border-[#5c5c5c] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="content-stretch flex gap-[10px] items-start p-[8px] relative size-full">
          <Frame180 />
          <Frame183 />
        </div>
      </div>
    </div>
  );
}

function Boissons() {
  return (
    <div className="relative shrink-0 w-full" data-name="Boissons">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start px-[16px] relative size-full">
          <p className="[word-break:break-word] font-['Druk_Wide_Medium:Medium',sans-serif] leading-[1.1] not-italic relative shrink-0 text-[20px] text-black uppercase w-full">Boissons</p>
          <p className="[word-break:break-word] font-['Druk_Wide_Medium:Medium',sans-serif] leading-[1.1] not-italic relative shrink-0 text-[14px] text-black uppercase w-full">Boissons froides</p>
          <Frame115 />
          <p className="[word-break:break-word] font-['Druk_Wide_Medium:Medium',sans-serif] leading-[1.1] not-italic relative shrink-0 text-[14px] text-black uppercase w-full">Boissons Chaudes</p>
          <Frame139 />
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

function Frame185() {
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

function Frame186() {
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
      <Frame185 />
      <Frame186 />
    </div>
  );
}

function Frame187() {
  return <div className="bg-[#2d2d2d] h-px relative shrink-0 w-full" />;
}

function Frame188() {
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
          <Frame29 className="bg-[#0a0a0b] col-1 h-[48px] relative row-1 shrink-0 w-[162.5px]" />
          <Frame188 />
        </div>
      </div>
    </div>
  );
}

function Frame184() {
  return (
    <div className="bg-[#0a0a0b] relative shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start px-[16px] py-[32px] relative size-full">
          <MapContainer />
          <FooterInfos />
          <Frame187 />
          <FooterBottom />
        </div>
      </div>
    </div>
  );
}

export default function CarteDay() {
  return (
    <div className="bg-[#f9f9f6] content-stretch flex flex-col gap-[40px] items-start pt-[50px] relative size-full" data-name="Carte — Day">
      <Header className="bg-[#f9f9f6] relative shrink-0 w-full" />
      <Frame31 />
      <Frame32 />
      <Salades />
      <BurgerViandes />
      <MoulesPoissons />
      <Desserts />
      <Boissons />
      <Frame184 />
      <button className="absolute bg-[#0a0a0b] cursor-pointer left-[calc(75%+38.25px)] rounded-[999px] size-[44px] top-[667px]" data-name="Atom/BackToTop">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute left-[10px] size-[24px] top-[10px]" data-name="Arrow_top">
            <div className="absolute bottom-[20.83%] flex items-center justify-center left-1/4 right-1/4 top-[16.67%]" style={{ containerType: "size" }}>
              <div className="-rotate-90 -scale-x-100 flex-none h-[100cqw] w-[100cqh]">
                <div className="relative size-full">
                  <div className="absolute inset-[-5.89%_-6.67%_-5.89%_-9.43%]">
                    <svg className="block size-full" fill="none" height="13.4142" preserveAspectRatio="none" viewBox="0 0 17.4142 13.4142" width="17.4142">
                      <path d={svgPaths.p2998ca80} fill="white" id="Vector 9" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#5c5c5c] border-solid inset-0 pointer-events-none rounded-[999px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.25)]" />
      </button>
    </div>
  );
}