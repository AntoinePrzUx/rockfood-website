import svgPaths from "./svg-pfw2zy190n";
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
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#888] text-[13px] tracking-[0.26px] uppercase whitespace-nowrap">côté resto</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="flex-[1_0_0] min-w-px relative rounded-[6px]">
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
    </div>
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
          <button className="bg-[#ff007a] drop-shadow-[0px_0px_4px_rgba(255,0,122,0.6)] relative rounded-[99px] shrink-0" data-name="Atom/Badge">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[8px] py-[4px] relative size-full">
                <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[13px] text-left text-white tracking-[0.26px] uppercase whitespace-nowrap">Cocktails</p>
              </div>
            </div>
          </button>
          <button className="bg-[#ff007a] drop-shadow-[0px_0px_4px_rgba(255,0,122,0.6)] relative rounded-[99px] shrink-0" data-name="Atom/Badge">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[8px] py-[4px] relative size-full">
                <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[13px] text-left text-white tracking-[0.26px] uppercase whitespace-nowrap">{`Tapas & Planches`}</p>
              </div>
            </div>
          </button>
          <button className="bg-[#ff007a] drop-shadow-[0px_0px_4px_rgba(255,0,122,0.6)] relative rounded-[99px] shrink-0" data-name="Atom/Badge">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[8px] py-[4px] relative size-full">
                <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[13px] text-left text-white tracking-[0.26px] uppercase whitespace-nowrap">{`bières, Cidres & vin`}</p>
              </div>
            </div>
          </button>
          <button className="bg-[#ff007a] drop-shadow-[0px_0px_4px_rgba(255,0,122,0.6)] relative rounded-[99px] shrink-0" data-name="Atom/Badge">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[8px] py-[4px] relative size-full">
                <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[13px] text-left text-white tracking-[0.26px] uppercase whitespace-nowrap">Alcools</p>
              </div>
            </div>
          </button>
          <button className="bg-[#ff007a] drop-shadow-[0px_0px_4px_rgba(255,0,122,0.6)] relative rounded-[99px] shrink-0" data-name="Atom/Badge">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[8px] py-[4px] relative size-full">
                <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[13px] text-left text-white tracking-[0.26px] uppercase whitespace-nowrap">Digestifs</p>
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
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Spritz</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[12px] text-white w-[268px]">Apérol, prosecco, eau gazeuse, tranche orange</p>
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
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative self-stretch">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">10€</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Saint-Germain Spritz</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[12px] text-white w-[268px]">Saint-Germain, prosecco, eau gazeuse, tranche de citron</p>
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
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative self-stretch">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">12€</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Mojito</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[12px] text-white w-[268px]">Rhum Bacardi, feuilles de menthe, citron vert, sucre roux, eau gazeuse</p>
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
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative self-stretch">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">8€</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Mojito Royal</p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[12px] text-white w-[268px]">Rhum Bacardi, feuilles de menthe, citron vert, sucre roux, prosecco</p>
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
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative self-stretch">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">10€</p>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Mojito Fraise ou Passion</p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[12px] text-white w-[268px]">Rhum Bacardi, feuilles de menthe, citron vert, sucre roux, eau gazeuse, purée de fraise ou passion</p>
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
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative self-stretch">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">10€</p>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Mojito Energy</p>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[12px] text-white w-[268px]">Rhum Bacardi, feuilles de menthe, citron vert, sucre roux, energy drinks</p>
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
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative self-stretch">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">10€</p>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Caïpirinha</p>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[12px] text-white w-[268px]">Cachaça, citron vert, sucre roux</p>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
      <Frame30 />
      <Frame33 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative self-stretch">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">9€</p>
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-pre">{`Caïpirinha Fraise ou  Passion`}</p>
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[12px] text-white w-[268px]">Cachaça, citron vert, sucre roux, purée de fraise ou passion</p>
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
      <Frame37 />
      <Frame38 />
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative self-stretch">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">10€</p>
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Caïpiroska</p>
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[12px] text-white w-[268px]">Vodka Eristoff, citron vert, sucre roux</p>
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
      <Frame41 />
      <Frame42 />
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative self-stretch">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">9€</p>
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Gin Fizz</p>
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[12px] text-white w-[268px]">Gin Bombay saphire, jus de citron, eau gazeuse, sucre roux</p>
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
      <Frame45 />
      <Frame46 />
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative self-stretch">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">9€</p>
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Americano Maison</p>
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[12px] text-white w-[268px]">Martini rouge, campari, eau gazeuse, trait d’angostura, tranches orange et citron</p>
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
      <Frame49 />
      <Frame50 />
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative self-stretch">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">10€</p>
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Ti Punch</p>
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[12px] text-white w-[268px]">Rhum 3 Rivières, citron vert, sucre roux</p>
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
      <Frame53 />
      <Frame54 />
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative self-stretch">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">10€</p>
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Sex On The Beach</p>
    </div>
  );
}

function Frame58() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[12px] text-white w-[268px]">Vodka Eristoff, malibu, sirop de fraise, jus d’orange, jus d’ananas</p>
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
      <Frame57 />
      <Frame58 />
    </div>
  );
}

function Frame59() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative self-stretch">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">10€</p>
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Long Island</p>
    </div>
  );
}

function Frame62() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[12px] text-white w-[268px]">Vodka, gin, rhum, triple sec, tequila, jus de citron, coca cola</p>
    </div>
  );
}

function Frame60() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
      <Frame61 />
      <Frame62 />
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative self-stretch">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">10€</p>
    </div>
  );
}

function Frame65() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Piña Colada</p>
    </div>
  );
}

function Frame66() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[12px] text-white w-[268px]">Rhum Bacardi, jus d’ananas, glace noix de coco, sucre roux</p>
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
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative self-stretch">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">10€</p>
    </div>
  );
}

function Frame69() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Soleil Levant</p>
    </div>
  );
}

function Frame70() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[12px] text-white w-[268px]">Sirop de fraise, soho, jus d’ananas, bière blonde</p>
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
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative self-stretch">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">10€</p>
    </div>
  );
}

function Frame73() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Margarita</p>
    </div>
  );
}

function Frame74() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[12px] text-white w-[268px]">Tequila, triple sec, jus de citron, sucre roux</p>
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
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative self-stretch">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">10€</p>
    </div>
  );
}

function Frame77() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Margarita Fraise ou Passion</p>
    </div>
  );
}

function Frame78() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[12px] text-white w-[268px]">Tequila, triple sec, jus de citron, sucre roux, purée de fraise ou passion</p>
    </div>
  );
}

function Frame76() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
      <Frame77 />
      <Frame78 />
    </div>
  );
}

function Frame79() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative self-stretch">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">11€</p>
    </div>
  );
}

function Frame81() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Moscow Mule</p>
    </div>
  );
}

function Frame82() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[12px] text-white w-[268px]">Ginger, vodka, jus de citron</p>
    </div>
  );
}

function Frame80() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
      <Frame81 />
      <Frame82 />
    </div>
  );
}

function Frame83() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative self-stretch">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">10€</p>
    </div>
  );
}

function Frame85() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">London Mule</p>
    </div>
  );
}

function Frame86() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[12px] text-white w-[268px]">Ginger, gin, jus de citron</p>
    </div>
  );
}

function Frame84() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
      <Frame85 />
      <Frame86 />
    </div>
  );
}

function Frame87() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative self-stretch">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">10€</p>
    </div>
  );
}

function Frame89() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Caraïbes Mule</p>
    </div>
  );
}

function Frame90() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[12px] text-white w-[268px]">Ginger, rhum, jus de citron</p>
    </div>
  );
}

function Frame88() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
      <Frame89 />
      <Frame90 />
    </div>
  );
}

function Frame91() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative self-stretch">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">10€</p>
    </div>
  );
}

function Frame93() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Irish Coffee</p>
    </div>
  );
}

function Frame94() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[12px] text-white w-[268px]">​</p>
    </div>
  );
}

function Frame92() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
      <Frame93 />
      <Frame94 />
    </div>
  );
}

function Frame95() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative self-stretch">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">10€</p>
    </div>
  );
}

function Frame97() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Jamaican Coffee</p>
    </div>
  );
}

function Frame98() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[12px] text-white w-[268px]">​</p>
    </div>
  );
}

function Frame96() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
      <Frame97 />
      <Frame98 />
    </div>
  );
}

function Frame99() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative self-stretch">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">10€</p>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center relative shrink-0">
      <div className="bg-[#0a0a0b] drop-shadow-[0px_0px_6px_rgba(255,0,122,0.25)] relative rounded-[6px] shrink-0 w-[320px]" data-name="Molecule/ProductCard">
        <div aria-hidden className="absolute border border-[#5c5c5c] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="content-stretch flex gap-[10px] items-start p-[8px] relative size-full">
          <Frame8 />
          <Frame6 />
        </div>
      </div>
      <div className="bg-[#0a0a0b] drop-shadow-[0px_0px_6px_rgba(255,0,122,0.25)] relative rounded-[6px] shrink-0 w-[320px]" data-name="Molecule/ProductCard">
        <div aria-hidden className="absolute border border-[#5c5c5c] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="content-stretch flex gap-[10px] items-start p-[8px] relative size-full">
          <Frame9 />
          <Frame11 />
        </div>
      </div>
      <div className="bg-[#0a0a0b] drop-shadow-[0px_0px_6px_rgba(255,0,122,0.25)] relative rounded-[6px] shrink-0 w-[320px]" data-name="Molecule/ProductCard">
        <div aria-hidden className="absolute border border-[#5c5c5c] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="content-stretch flex gap-[10px] items-start p-[8px] relative size-full">
          <Frame12 />
          <Frame15 />
        </div>
      </div>
      <div className="bg-[#0a0a0b] drop-shadow-[0px_0px_6px_rgba(255,0,122,0.25)] relative rounded-[6px] shrink-0 w-[320px]" data-name="Molecule/ProductCard">
        <div aria-hidden className="absolute border border-[#5c5c5c] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="content-stretch flex gap-[10px] items-start p-[8px] relative size-full">
          <Frame16 />
          <Frame19 />
        </div>
      </div>
      <div className="bg-[#0a0a0b] drop-shadow-[0px_0px_6px_rgba(255,0,122,0.25)] relative rounded-[6px] shrink-0 w-[320px]" data-name="Molecule/ProductCard">
        <div aria-hidden className="absolute border border-[#5c5c5c] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="content-stretch flex gap-[10px] items-start p-[8px] relative size-full">
          <Frame20 />
          <Frame23 />
        </div>
      </div>
      <div className="bg-[#0a0a0b] drop-shadow-[0px_0px_6px_rgba(255,0,122,0.25)] relative rounded-[6px] shrink-0 w-[320px]" data-name="Molecule/ProductCard">
        <div aria-hidden className="absolute border border-[#5c5c5c] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="content-stretch flex gap-[10px] items-start p-[8px] relative size-full">
          <Frame24 />
          <Frame27 />
        </div>
      </div>
      <div className="bg-[#0a0a0b] drop-shadow-[0px_0px_6px_rgba(255,0,122,0.25)] relative rounded-[6px] shrink-0 w-[320px]" data-name="Molecule/ProductCard">
        <div aria-hidden className="absolute border border-[#5c5c5c] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="content-stretch flex gap-[10px] items-start p-[8px] relative size-full">
          <Frame28 />
          <Frame34 />
        </div>
      </div>
      <div className="bg-[#0a0a0b] drop-shadow-[0px_0px_6px_rgba(255,0,122,0.25)] relative rounded-[6px] shrink-0 w-[320px]" data-name="Molecule/ProductCard">
        <div aria-hidden className="absolute border border-[#5c5c5c] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="content-stretch flex gap-[10px] items-start p-[8px] relative size-full">
          <Frame35 />
          <Frame39 />
        </div>
      </div>
      <div className="bg-[#0a0a0b] drop-shadow-[0px_0px_6px_rgba(255,0,122,0.25)] relative rounded-[6px] shrink-0 w-[320px]" data-name="Molecule/ProductCard">
        <div aria-hidden className="absolute border border-[#5c5c5c] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="content-stretch flex gap-[10px] items-start p-[8px] relative size-full">
          <Frame40 />
          <Frame43 />
        </div>
      </div>
      <div className="bg-[#0a0a0b] drop-shadow-[0px_0px_6px_rgba(255,0,122,0.25)] relative rounded-[6px] shrink-0 w-[320px]" data-name="Molecule/ProductCard">
        <div aria-hidden className="absolute border border-[#5c5c5c] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="content-stretch flex gap-[10px] items-start p-[8px] relative size-full">
          <Frame44 />
          <Frame47 />
        </div>
      </div>
      <div className="bg-[#0a0a0b] drop-shadow-[0px_0px_6px_rgba(255,0,122,0.25)] relative rounded-[6px] shrink-0 w-[320px]" data-name="Molecule/ProductCard">
        <div aria-hidden className="absolute border border-[#5c5c5c] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="content-stretch flex gap-[10px] items-start p-[8px] relative size-full">
          <Frame48 />
          <Frame51 />
        </div>
      </div>
      <div className="bg-[#0a0a0b] drop-shadow-[0px_0px_6px_rgba(255,0,122,0.25)] relative rounded-[6px] shrink-0 w-[320px]" data-name="Molecule/ProductCard">
        <div aria-hidden className="absolute border border-[#5c5c5c] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="content-stretch flex gap-[10px] items-start p-[8px] relative size-full">
          <Frame52 />
          <Frame55 />
        </div>
      </div>
      <div className="bg-[#0a0a0b] drop-shadow-[0px_0px_6px_rgba(255,0,122,0.25)] relative rounded-[6px] shrink-0 w-[320px]" data-name="Molecule/ProductCard">
        <div aria-hidden className="absolute border border-[#5c5c5c] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="content-stretch flex gap-[10px] items-start p-[8px] relative size-full">
          <Frame56 />
          <Frame59 />
        </div>
      </div>
      <div className="bg-[#0a0a0b] drop-shadow-[0px_0px_6px_rgba(255,0,122,0.25)] relative rounded-[6px] shrink-0 w-[320px]" data-name="Molecule/ProductCard">
        <div aria-hidden className="absolute border border-[#5c5c5c] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="content-stretch flex gap-[10px] items-start p-[8px] relative size-full">
          <Frame60 />
          <Frame63 />
        </div>
      </div>
      <div className="bg-[#0a0a0b] drop-shadow-[0px_0px_6px_rgba(255,0,122,0.25)] relative rounded-[6px] shrink-0 w-[320px]" data-name="Molecule/ProductCard">
        <div aria-hidden className="absolute border border-[#5c5c5c] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="content-stretch flex gap-[10px] items-start p-[8px] relative size-full">
          <Frame64 />
          <Frame67 />
        </div>
      </div>
      <div className="bg-[#0a0a0b] drop-shadow-[0px_0px_6px_rgba(255,0,122,0.25)] relative rounded-[6px] shrink-0 w-[320px]" data-name="Molecule/ProductCard">
        <div aria-hidden className="absolute border border-[#5c5c5c] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="content-stretch flex gap-[10px] items-start p-[8px] relative size-full">
          <Frame68 />
          <Frame71 />
        </div>
      </div>
      <div className="bg-[#0a0a0b] drop-shadow-[0px_0px_6px_rgba(255,0,122,0.25)] relative rounded-[6px] shrink-0 w-[320px]" data-name="Molecule/ProductCard">
        <div aria-hidden className="absolute border border-[#5c5c5c] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="content-stretch flex gap-[10px] items-start p-[8px] relative size-full">
          <Frame72 />
          <Frame75 />
        </div>
      </div>
      <div className="bg-[#0a0a0b] drop-shadow-[0px_0px_6px_rgba(255,0,122,0.25)] relative rounded-[6px] shrink-0 w-[320px]" data-name="Molecule/ProductCard">
        <div aria-hidden className="absolute border border-[#5c5c5c] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="content-stretch flex gap-[10px] items-start p-[8px] relative size-full">
          <Frame76 />
          <Frame79 />
        </div>
      </div>
      <div className="bg-[#0a0a0b] drop-shadow-[0px_0px_6px_rgba(255,0,122,0.25)] relative rounded-[6px] shrink-0 w-[320px]" data-name="Molecule/ProductCard">
        <div aria-hidden className="absolute border border-[#5c5c5c] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="content-stretch flex gap-[10px] items-start p-[8px] relative size-full">
          <Frame80 />
          <Frame83 />
        </div>
      </div>
      <div className="bg-[#0a0a0b] drop-shadow-[0px_0px_6px_rgba(255,0,122,0.25)] relative rounded-[6px] shrink-0 w-[320px]" data-name="Molecule/ProductCard">
        <div aria-hidden className="absolute border border-[#5c5c5c] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="content-stretch flex gap-[10px] items-start p-[8px] relative size-full">
          <Frame84 />
          <Frame87 />
        </div>
      </div>
      <div className="bg-[#0a0a0b] drop-shadow-[0px_0px_6px_rgba(255,0,122,0.25)] relative rounded-[6px] shrink-0 w-[320px]" data-name="Molecule/ProductCard">
        <div aria-hidden className="absolute border border-[#5c5c5c] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="content-stretch flex gap-[10px] items-start p-[8px] relative size-full">
          <Frame88 />
          <Frame91 />
        </div>
      </div>
      <div className="bg-[#0a0a0b] drop-shadow-[0px_0px_6px_rgba(255,0,122,0.25)] relative rounded-[6px] shrink-0 w-[320px]" data-name="Molecule/ProductCard">
        <div aria-hidden className="absolute border border-[#5c5c5c] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="content-stretch flex gap-[10px] items-start p-[8px] relative size-full">
          <Frame92 />
          <Frame95 />
        </div>
      </div>
      <div className="bg-[#0a0a0b] drop-shadow-[0px_0px_6px_rgba(255,0,122,0.25)] relative rounded-[6px] shrink-0 w-[320px]" data-name="Molecule/ProductCard">
        <div aria-hidden className="absolute border border-[#5c5c5c] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="content-stretch flex gap-[10px] items-start p-[8px] relative size-full">
          <Frame96 />
          <Frame99 />
        </div>
      </div>
    </div>
  );
}

function Frame102() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Virgin Mojito</p>
    </div>
  );
}

function Frame103() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[12px] text-white w-[268px]">​</p>
    </div>
  );
}

function Frame101() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
      <Frame102 />
      <Frame103 />
    </div>
  );
}

function Frame104() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative self-stretch">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">6€</p>
    </div>
  );
}

function Frame106() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Virgin Piña Colada</p>
    </div>
  );
}

function Frame107() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[12px] text-white w-[268px]">​</p>
    </div>
  );
}

function Frame105() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
      <Frame106 />
      <Frame107 />
    </div>
  );
}

function Frame108() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative self-stretch">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">6€</p>
    </div>
  );
}

function Frame110() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Virgin Sex On The Beach</p>
    </div>
  );
}

function Frame111() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[12px] text-white w-[268px]">​</p>
    </div>
  );
}

function Frame109() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
      <Frame110 />
      <Frame111 />
    </div>
  );
}

function Frame112() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative self-stretch">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">8€</p>
    </div>
  );
}

function Frame114() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Virgin Spritz</p>
    </div>
  );
}

function Frame115() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[12px] text-white w-[268px]">Martini sans alcool, tonic, perrier, tranche d’orange</p>
    </div>
  );
}

function Frame113() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
      <Frame114 />
      <Frame115 />
    </div>
  );
}

function Frame116() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative self-stretch">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">7€</p>
    </div>
  );
}

function Frame118() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Ginger Mule</p>
    </div>
  );
}

function Frame119() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[12px] text-white w-[268px]">Ginger, jus de citron, feuille de menthe</p>
    </div>
  );
}

function Frame117() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
      <Frame118 />
      <Frame119 />
    </div>
  );
}

function Frame120() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative self-stretch">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">7€</p>
    </div>
  );
}

function Frame100() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center relative shrink-0">
      <div className="bg-[#0a0a0b] drop-shadow-[0px_0px_6px_rgba(255,0,122,0.25)] relative rounded-[6px] shrink-0 w-[320px]" data-name="Molecule/ProductCard">
        <div aria-hidden className="absolute border border-[#5c5c5c] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="content-stretch flex gap-[10px] items-start p-[8px] relative size-full">
          <Frame101 />
          <Frame104 />
        </div>
      </div>
      <div className="bg-[#0a0a0b] drop-shadow-[0px_0px_6px_rgba(255,0,122,0.25)] relative rounded-[6px] shrink-0 w-[320px]" data-name="Molecule/ProductCard">
        <div aria-hidden className="absolute border border-[#5c5c5c] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="content-stretch flex gap-[10px] items-start p-[8px] relative size-full">
          <Frame105 />
          <Frame108 />
        </div>
      </div>
      <div className="bg-[#0a0a0b] drop-shadow-[0px_0px_6px_rgba(255,0,122,0.25)] relative rounded-[6px] shrink-0 w-[320px]" data-name="Molecule/ProductCard">
        <div aria-hidden className="absolute border border-[#5c5c5c] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="content-stretch flex gap-[10px] items-start p-[8px] relative size-full">
          <Frame109 />
          <Frame112 />
        </div>
      </div>
      <div className="bg-[#0a0a0b] drop-shadow-[0px_0px_6px_rgba(255,0,122,0.25)] relative rounded-[6px] shrink-0 w-[320px]" data-name="Molecule/ProductCard">
        <div aria-hidden className="absolute border border-[#5c5c5c] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="content-stretch flex gap-[10px] items-start p-[8px] relative size-full">
          <Frame113 />
          <Frame116 />
        </div>
      </div>
      <div className="bg-[#0a0a0b] drop-shadow-[0px_0px_6px_rgba(255,0,122,0.25)] relative rounded-[6px] shrink-0 w-[320px]" data-name="Molecule/ProductCard">
        <div aria-hidden className="absolute border border-[#5c5c5c] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="content-stretch flex gap-[10px] items-start p-[8px] relative size-full">
          <Frame117 />
          <Frame120 />
        </div>
      </div>
    </div>
  );
}

function Cocktails() {
  return (
    <div className="relative shrink-0 w-full" data-name="Cocktails">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start px-[16px] relative size-full">
          <p className="[word-break:break-word] font-['Druk_Wide_Medium:Medium',sans-serif] leading-[1.1] min-w-full not-italic relative shrink-0 text-[20px] text-white uppercase w-[min-content]">{`Cocktails & mocktails`}</p>
          <p className="[word-break:break-word] font-['Druk_Wide_Medium:Medium',sans-serif] leading-[1.1] min-w-full not-italic relative shrink-0 text-[14px] text-white uppercase w-[min-content]">cocktails</p>
          <Frame36 />
          <p className="[word-break:break-word] font-['Druk_Wide_Medium:Medium',sans-serif] leading-[1.1] min-w-full not-italic relative shrink-0 text-[14px] text-white uppercase w-[min-content]">Mocktails</p>
          <Frame100 />
        </div>
      </div>
    </div>
  );
}

function Frame123() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Croquettes de jambon</p>
    </div>
  );
}

function Frame124() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[12px] text-white w-[268px]">​</p>
    </div>
  );
}

function Frame122() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
      <Frame123 />
      <Frame124 />
    </div>
  );
}

function Frame125() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative self-stretch">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">7€</p>
    </div>
  );
}

function Frame127() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Crevettes Panko</p>
    </div>
  );
}

function Frame128() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[12px] text-white w-[268px]">Sauce aigre douce</p>
    </div>
  );
}

function Frame126() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
      <Frame127 />
      <Frame128 />
    </div>
  );
}

function Frame129() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative self-stretch">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">8€</p>
    </div>
  );
}

function Frame131() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Beignets de Calamars</p>
    </div>
  );
}

function Frame132() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[12px] text-white w-[268px]">​</p>
    </div>
  );
}

function Frame130() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
      <Frame131 />
      <Frame132 />
    </div>
  );
}

function Frame133() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative self-stretch">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">7€</p>
    </div>
  );
}

function Frame135() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Chipirons Persillade</p>
    </div>
  );
}

function Frame136() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[12px] text-white w-[268px]">​</p>
    </div>
  );
}

function Frame134() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
      <Frame135 />
      <Frame136 />
    </div>
  );
}

function Frame137() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative self-stretch">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">11€</p>
    </div>
  );
}

function Frame139() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Nachos et Guacamole</p>
    </div>
  );
}

function Frame140() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[12px] text-white w-[268px]">​</p>
    </div>
  );
}

function Frame138() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
      <Frame139 />
      <Frame140 />
    </div>
  );
}

function Frame141() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative self-stretch">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">7€</p>
    </div>
  );
}

function Frame143() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Nuggets de Poulet</p>
    </div>
  );
}

function Frame144() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[12px] text-white w-[268px]">Sauce BBQ</p>
    </div>
  );
}

function Frame142() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
      <Frame143 />
      <Frame144 />
    </div>
  );
}

function Frame145() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative self-stretch">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">7€</p>
    </div>
  );
}

function Frame147() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Stick Mozzarella</p>
    </div>
  );
}

function Frame148() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[12px] text-white w-[268px]">​</p>
    </div>
  );
}

function Frame146() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
      <Frame147 />
      <Frame148 />
    </div>
  );
}

function Frame149() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative self-stretch">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">7€</p>
    </div>
  );
}

function Frame151() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Bouchées Pickles</p>
    </div>
  );
}

function Frame152() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[12px] text-white w-[268px]">​</p>
    </div>
  );
}

function Frame150() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
      <Frame151 />
      <Frame152 />
    </div>
  );
}

function Frame153() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative self-stretch">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">7€</p>
    </div>
  );
}

function Frame121() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center relative shrink-0 w-full">
      <div className="bg-[#0a0a0b] drop-shadow-[0px_0px_6px_rgba(255,0,122,0.25)] relative rounded-[6px] shrink-0 w-[320px]" data-name="Molecule/ProductCard">
        <div aria-hidden className="absolute border border-[#5c5c5c] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="content-stretch flex gap-[10px] items-start p-[8px] relative size-full">
          <Frame122 />
          <Frame125 />
        </div>
      </div>
      <div className="bg-[#0a0a0b] drop-shadow-[0px_0px_6px_rgba(255,0,122,0.25)] relative rounded-[6px] shrink-0 w-[320px]" data-name="Molecule/ProductCard">
        <div aria-hidden className="absolute border border-[#5c5c5c] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="content-stretch flex gap-[10px] items-start p-[8px] relative size-full">
          <Frame126 />
          <Frame129 />
        </div>
      </div>
      <div className="bg-[#0a0a0b] drop-shadow-[0px_0px_6px_rgba(255,0,122,0.25)] relative rounded-[6px] shrink-0 w-[320px]" data-name="Molecule/ProductCard">
        <div aria-hidden className="absolute border border-[#5c5c5c] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="content-stretch flex gap-[10px] items-start p-[8px] relative size-full">
          <Frame130 />
          <Frame133 />
        </div>
      </div>
      <div className="bg-[#0a0a0b] drop-shadow-[0px_0px_6px_rgba(255,0,122,0.25)] relative rounded-[6px] shrink-0 w-[320px]" data-name="Molecule/ProductCard">
        <div aria-hidden className="absolute border border-[#5c5c5c] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="content-stretch flex gap-[10px] items-start p-[8px] relative size-full">
          <Frame134 />
          <Frame137 />
        </div>
      </div>
      <div className="bg-[#0a0a0b] drop-shadow-[0px_0px_6px_rgba(255,0,122,0.25)] relative rounded-[6px] shrink-0 w-[320px]" data-name="Molecule/ProductCard">
        <div aria-hidden className="absolute border border-[#5c5c5c] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="content-stretch flex gap-[10px] items-start p-[8px] relative size-full">
          <Frame138 />
          <Frame141 />
        </div>
      </div>
      <div className="bg-[#0a0a0b] drop-shadow-[0px_0px_6px_rgba(255,0,122,0.25)] relative rounded-[6px] shrink-0 w-[320px]" data-name="Molecule/ProductCard">
        <div aria-hidden className="absolute border border-[#5c5c5c] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="content-stretch flex gap-[10px] items-start p-[8px] relative size-full">
          <Frame142 />
          <Frame145 />
        </div>
      </div>
      <div className="bg-[#0a0a0b] drop-shadow-[0px_0px_6px_rgba(255,0,122,0.25)] relative rounded-[6px] shrink-0 w-[320px]" data-name="Molecule/ProductCard">
        <div aria-hidden className="absolute border border-[#5c5c5c] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="content-stretch flex gap-[10px] items-start p-[8px] relative size-full">
          <Frame146 />
          <Frame149 />
        </div>
      </div>
      <div className="bg-[#0a0a0b] drop-shadow-[0px_0px_6px_rgba(255,0,122,0.25)] relative rounded-[6px] shrink-0 w-[320px]" data-name="Molecule/ProductCard">
        <div aria-hidden className="absolute border border-[#5c5c5c] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="content-stretch flex gap-[10px] items-start p-[8px] relative size-full">
          <Frame150 />
          <Frame153 />
        </div>
      </div>
    </div>
  );
}

function Frame156() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Mundaka</p>
    </div>
  );
}

function Frame157() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[12px] text-white w-[268px]">Croquettes de jambon, bouchées pickles, sticks mozza, beignets de calamars, sauces</p>
    </div>
  );
}

function Frame155() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
      <Frame156 />
      <Frame157 />
    </div>
  );
}

function Frame158() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative self-stretch">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">18€</p>
    </div>
  );
}

function Frame160() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Rock</p>
    </div>
  );
}

function Frame161() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[12px] text-white w-[268px]">Serrano, chorizo, lomo, brebis, pain toasté à l’ail, guindillas, confiture de cerise</p>
    </div>
  );
}

function Frame159() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
      <Frame160 />
      <Frame161 />
    </div>
  );
}

function Frame162() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative self-stretch">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">19€</p>
    </div>
  );
}

function Frame164() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Brebis</p>
    </div>
  );
}

function Frame165() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[12px] text-white w-[268px]">Fromage de brebis, confiture de cerise</p>
    </div>
  );
}

function Frame163() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
      <Frame164 />
      <Frame165 />
    </div>
  );
}

function Frame166() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative self-stretch">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">7€</p>
    </div>
  );
}

function Frame154() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center relative shrink-0 w-full">
      <div className="bg-[#0a0a0b] drop-shadow-[0px_0px_6px_rgba(255,0,122,0.25)] relative rounded-[6px] shrink-0 w-[320px]" data-name="Molecule/ProductCard">
        <div aria-hidden className="absolute border border-[#5c5c5c] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="content-stretch flex gap-[10px] items-start p-[8px] relative size-full">
          <Frame155 />
          <Frame158 />
        </div>
      </div>
      <div className="bg-[#0a0a0b] drop-shadow-[0px_0px_6px_rgba(255,0,122,0.25)] relative rounded-[6px] shrink-0 w-[320px]" data-name="Molecule/ProductCard">
        <div aria-hidden className="absolute border border-[#5c5c5c] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="content-stretch flex gap-[10px] items-start p-[8px] relative size-full">
          <Frame159 />
          <Frame162 />
        </div>
      </div>
      <div className="bg-[#0a0a0b] drop-shadow-[0px_0px_6px_rgba(255,0,122,0.25)] relative rounded-[6px] shrink-0 w-[320px]" data-name="Molecule/ProductCard">
        <div aria-hidden className="absolute border border-[#5c5c5c] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="content-stretch flex gap-[10px] items-start p-[8px] relative size-full">
          <Frame163 />
          <Frame166 />
        </div>
      </div>
    </div>
  );
}

function TapasPlanches() {
  return (
    <div className="relative shrink-0 w-full" data-name="Tapas & Planches">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start px-[16px] relative size-full">
          <p className="[word-break:break-word] font-['Druk_Wide_Medium:Medium',sans-serif] leading-[1.1] not-italic relative shrink-0 text-[20px] text-white uppercase w-full">{`tapas & planches`}</p>
          <p className="[word-break:break-word] font-['Druk_Wide_Medium:Medium',sans-serif] leading-[1.1] not-italic relative shrink-0 text-[14px] text-white uppercase w-full">Tapas</p>
          <Frame121 />
          <p className="[word-break:break-word] font-['Druk_Wide_Medium:Medium',sans-serif] leading-[1.1] not-italic relative shrink-0 text-[14px] text-white uppercase w-full">Planches</p>
          <Frame154 />
        </div>
      </div>
    </div>
  );
}

function Frame170() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Carlsberg</p>
    </div>
  );
}

function Frame172() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center justify-center min-w-px relative">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">4€</p>
      </div>
    </div>
  );
}

function Frame171() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[294px]">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[12px] text-white w-[268px]">25cl</p>
      <Frame172 />
    </div>
  );
}

function Frame174() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="content-stretch flex h-full items-center justify-center relative shrink-0 w-[26px]">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">8€</p>
      </div>
    </div>
  );
}

function Frame173() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[12px] text-white w-[268px]">50cl</p>
      <Frame174 />
    </div>
  );
}

function Frame176() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="content-stretch flex h-full items-center justify-center relative shrink-0 w-[26px]">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">24€</p>
      </div>
    </div>
  );
}

function Frame175() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[12px] text-white w-[268px]">Pichet</p>
      <Frame176 />
    </div>
  );
}

function Frame178() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="content-stretch flex h-full items-center justify-center relative shrink-0 w-[26px]">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">48€</p>
      </div>
    </div>
  );
}

function Frame177() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[12px] text-white w-[268px]">Girafe</p>
      <Frame178 />
    </div>
  );
}

function Frame169() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-[304px]">
      <Frame170 />
      <Frame171 />
      <Frame173 />
      <Frame175 />
      <Frame177 />
    </div>
  );
}

function Frame168() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Frame169 />
    </div>
  );
}

function Frame181() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Grim Blonde Abbaye</p>
    </div>
  );
}

function Frame183() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center justify-center min-w-px relative">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">4,5€</p>
      </div>
    </div>
  );
}

function Frame182() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[294px]">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[12px] text-white w-[268px]">25cl</p>
      <Frame183 />
    </div>
  );
}

function Frame185() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="content-stretch flex h-full items-center justify-center relative shrink-0 w-[26px]">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">9€</p>
      </div>
    </div>
  );
}

function Frame184() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[12px] text-white w-[268px]">50cl</p>
      <Frame185 />
    </div>
  );
}

function Frame187() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="content-stretch flex h-full items-center justify-center relative shrink-0 w-[26px]">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">26€</p>
      </div>
    </div>
  );
}

function Frame186() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[12px] text-white w-[268px]">Pichet</p>
      <Frame187 />
    </div>
  );
}

function Frame189() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="content-stretch flex h-full items-center justify-center relative shrink-0 w-[26px]">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">52€</p>
      </div>
    </div>
  );
}

function Frame188() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[12px] text-white w-[268px]">Girafe</p>
      <Frame189 />
    </div>
  );
}

function Frame180() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-[304px]">
      <Frame181 />
      <Frame182 />
      <Frame184 />
      <Frame186 />
      <Frame188 />
    </div>
  );
}

function Frame179() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Frame180 />
    </div>
  );
}

function Frame192() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Grim Blanche ou IPA</p>
    </div>
  );
}

function Frame194() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center justify-center min-w-px relative">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">5€</p>
      </div>
    </div>
  );
}

function Frame193() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[294px]">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[12px] text-white w-[268px]">25cl</p>
      <Frame194 />
    </div>
  );
}

function Frame196() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="content-stretch flex h-full items-center justify-center relative shrink-0 w-[26px]">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">10€</p>
      </div>
    </div>
  );
}

function Frame195() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[12px] text-white w-[268px]">50cl</p>
      <Frame196 />
    </div>
  );
}

function Frame198() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="content-stretch flex h-full items-center justify-center relative shrink-0 w-[26px]">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">29€</p>
      </div>
    </div>
  );
}

function Frame197() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[12px] text-white w-[268px]">Pichet</p>
      <Frame198 />
    </div>
  );
}

function Frame200() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="content-stretch flex h-full items-center justify-center relative shrink-0 w-[26px]">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">58€</p>
      </div>
    </div>
  );
}

function Frame199() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[12px] text-white w-[268px]">Girafe</p>
      <Frame200 />
    </div>
  );
}

function Frame191() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-[304px]">
      <Frame192 />
      <Frame193 />
      <Frame195 />
      <Frame197 />
      <Frame199 />
    </div>
  );
}

function Frame190() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Frame191 />
    </div>
  );
}

function Frame203() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">La Bête Blonde 8°</p>
    </div>
  );
}

function Frame205() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center justify-center min-w-px relative">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">5€</p>
      </div>
    </div>
  );
}

function Frame204() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[294px]">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[12px] text-white w-[268px]">25cl</p>
      <Frame205 />
    </div>
  );
}

function Frame207() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="content-stretch flex h-full items-center justify-center relative shrink-0 w-[26px]">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">10€</p>
      </div>
    </div>
  );
}

function Frame206() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[12px] text-white w-[268px]">50cl</p>
      <Frame207 />
    </div>
  );
}

function Frame209() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="content-stretch flex h-full items-center justify-center relative shrink-0 w-[26px]">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">29€</p>
      </div>
    </div>
  );
}

function Frame208() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[12px] text-white w-[268px]">Pichet</p>
      <Frame209 />
    </div>
  );
}

function Frame211() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="content-stretch flex h-full items-center justify-center relative shrink-0 w-[26px]">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">58€</p>
      </div>
    </div>
  );
}

function Frame210() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[12px] text-white w-[268px]">Girafe</p>
      <Frame211 />
    </div>
  );
}

function Frame202() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-[304px]">
      <Frame203 />
      <Frame204 />
      <Frame206 />
      <Frame208 />
      <Frame210 />
    </div>
  );
}

function Frame201() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Frame202 />
    </div>
  );
}

function Frame214() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Bière du Moment</p>
    </div>
  );
}

function Frame216() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center justify-center min-w-px relative">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">5€</p>
      </div>
    </div>
  );
}

function Frame215() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[294px]">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[12px] text-white w-[268px]">25cl</p>
      <Frame216 />
    </div>
  );
}

function Frame218() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="content-stretch flex h-full items-center justify-center relative shrink-0 w-[26px]">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">10€</p>
      </div>
    </div>
  );
}

function Frame217() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[12px] text-white w-[268px]">50cl</p>
      <Frame218 />
    </div>
  );
}

function Frame213() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-[304px]">
      <Frame214 />
      <Frame215 />
      <Frame217 />
    </div>
  );
}

function Frame212() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Frame213 />
    </div>
  );
}

function Frame220() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">{`Supplément Picon `}</p>
    </div>
  );
}

function Frame221() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[12px] text-white w-[268px]">​</p>
    </div>
  );
}

function Frame219() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
      <Frame220 />
      <Frame221 />
    </div>
  );
}

function Frame222() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative self-stretch">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">0,5€</p>
    </div>
  );
}

function Frame167() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center relative shrink-0 w-full">
      <div className="bg-[#0a0a0b] drop-shadow-[0px_0px_6px_rgba(255,0,122,0.25)] relative rounded-[6px] shrink-0" data-name="Molecule/ProductCard">
        <div aria-hidden className="absolute border border-[#5c5c5c] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="content-stretch flex items-start p-[8px] relative size-full">
          <Frame168 />
        </div>
      </div>
      <div className="bg-[#0a0a0b] drop-shadow-[0px_0px_6px_rgba(255,0,122,0.25)] relative rounded-[6px] shrink-0" data-name="Molecule/ProductCard">
        <div aria-hidden className="absolute border border-[#5c5c5c] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="content-stretch flex items-start p-[8px] relative size-full">
          <Frame179 />
        </div>
      </div>
      <div className="bg-[#0a0a0b] drop-shadow-[0px_0px_6px_rgba(255,0,122,0.25)] relative rounded-[6px] shrink-0" data-name="Molecule/ProductCard">
        <div aria-hidden className="absolute border border-[#5c5c5c] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="content-stretch flex items-start p-[8px] relative size-full">
          <Frame190 />
        </div>
      </div>
      <div className="bg-[#0a0a0b] drop-shadow-[0px_0px_6px_rgba(255,0,122,0.25)] relative rounded-[6px] shrink-0" data-name="Molecule/ProductCard">
        <div aria-hidden className="absolute border border-[#5c5c5c] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="content-stretch flex items-start p-[8px] relative size-full">
          <Frame201 />
        </div>
      </div>
      <div className="bg-[#0a0a0b] drop-shadow-[0px_0px_6px_rgba(255,0,122,0.25)] relative rounded-[6px] shrink-0" data-name="Molecule/ProductCard">
        <div aria-hidden className="absolute border border-[#5c5c5c] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="content-stretch flex items-start p-[8px] relative size-full">
          <Frame212 />
        </div>
      </div>
      <div className="bg-[#0a0a0b] drop-shadow-[0px_0px_6px_rgba(255,0,122,0.25)] relative rounded-[6px] shrink-0 w-[320px]" data-name="Molecule/ProductCard">
        <div aria-hidden className="absolute border border-[#5c5c5c] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="content-stretch flex gap-[10px] items-start p-[8px] relative size-full">
          <Frame219 />
          <Frame222 />
        </div>
      </div>
    </div>
  );
}

function Frame225() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Desperados 33cl</p>
    </div>
  );
}

function Frame226() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[12px] text-white w-[268px]">​</p>
    </div>
  );
}

function Frame224() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
      <Frame225 />
      <Frame226 />
    </div>
  );
}

function Frame227() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative self-stretch">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">6€</p>
    </div>
  );
}

function Frame229() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">1664 Sans Alcool 25cl</p>
    </div>
  );
}

function Frame230() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[12px] text-white w-[268px]">​</p>
    </div>
  );
}

function Frame228() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
      <Frame229 />
      <Frame230 />
    </div>
  );
}

function Frame231() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative self-stretch">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">6€</p>
    </div>
  );
}

function Frame233() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Corona 33cl</p>
    </div>
  );
}

function Frame234() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[12px] text-white w-[268px]">​</p>
    </div>
  );
}

function Frame232() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
      <Frame233 />
      <Frame234 />
    </div>
  );
}

function Frame235() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative self-stretch">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">7€</p>
    </div>
  );
}

function Frame223() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center relative shrink-0 w-full">
      <div className="bg-[#0a0a0b] drop-shadow-[0px_0px_6px_rgba(255,0,122,0.25)] relative rounded-[6px] shrink-0 w-[320px]" data-name="Molecule/ProductCard">
        <div aria-hidden className="absolute border border-[#5c5c5c] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="content-stretch flex gap-[10px] items-start p-[8px] relative size-full">
          <Frame224 />
          <Frame227 />
        </div>
      </div>
      <div className="bg-[#0a0a0b] drop-shadow-[0px_0px_6px_rgba(255,0,122,0.25)] relative rounded-[6px] shrink-0 w-[320px]" data-name="Molecule/ProductCard">
        <div aria-hidden className="absolute border border-[#5c5c5c] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="content-stretch flex gap-[10px] items-start p-[8px] relative size-full">
          <Frame228 />
          <Frame231 />
        </div>
      </div>
      <div className="bg-[#0a0a0b] drop-shadow-[0px_0px_6px_rgba(255,0,122,0.25)] relative rounded-[6px] shrink-0 w-[320px]" data-name="Molecule/ProductCard">
        <div aria-hidden className="absolute border border-[#5c5c5c] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="content-stretch flex gap-[10px] items-start p-[8px] relative size-full">
          <Frame232 />
          <Frame235 />
        </div>
      </div>
    </div>
  );
}

function Frame238() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Cidre Basque Kupela 33cl</p>
    </div>
  );
}

function Frame239() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[12px] text-white w-[268px]">​</p>
    </div>
  );
}

function Frame237() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
      <Frame238 />
      <Frame239 />
    </div>
  );
}

function Frame240() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative self-stretch">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">7€</p>
    </div>
  );
}

function Frame242() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Cidre Basque Kupela 75cl</p>
    </div>
  );
}

function Frame243() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[12px] text-white w-[268px]">​</p>
    </div>
  );
}

function Frame241() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
      <Frame242 />
      <Frame243 />
    </div>
  );
}

function Frame244() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative self-stretch">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">15cl</p>
    </div>
  );
}

function Frame236() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center relative shrink-0 w-full">
      <div className="bg-[#0a0a0b] drop-shadow-[0px_0px_6px_rgba(255,0,122,0.25)] relative rounded-[6px] shrink-0 w-[320px]" data-name="Molecule/ProductCard">
        <div aria-hidden className="absolute border border-[#5c5c5c] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="content-stretch flex gap-[10px] items-start p-[8px] relative size-full">
          <Frame237 />
          <Frame240 />
        </div>
      </div>
      <div className="bg-[#0a0a0b] drop-shadow-[0px_0px_6px_rgba(255,0,122,0.25)] relative rounded-[6px] shrink-0 w-[320px]" data-name="Molecule/ProductCard">
        <div aria-hidden className="absolute border border-[#5c5c5c] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="content-stretch flex gap-[10px] items-start p-[8px] relative size-full">
          <Frame241 />
          <Frame244 />
        </div>
      </div>
    </div>
  );
}

function Frame248() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Saint Mont (Océanie AOP)</p>
    </div>
  );
}

function Frame250() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center justify-center min-w-px relative">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">5€</p>
      </div>
    </div>
  );
}

function Frame249() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[294px]">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[12px] text-white w-[268px]">Verre</p>
      <Frame250 />
    </div>
  );
}

function Frame252() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="content-stretch flex h-full items-center justify-center relative shrink-0 w-[26px]">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">6€</p>
      </div>
    </div>
  );
}

function Frame251() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[12px] text-white w-[268px]">1/4L</p>
      <Frame252 />
    </div>
  );
}

function Frame254() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="content-stretch flex h-full items-center justify-center relative shrink-0 w-[26px]">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">13€</p>
      </div>
    </div>
  );
}

function Frame253() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[12px] text-white w-[268px]">1/2L</p>
      <Frame254 />
    </div>
  );
}

function Frame256() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="content-stretch flex h-full items-center justify-center relative shrink-0 w-[26px]">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">19€</p>
      </div>
    </div>
  );
}

function Frame255() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[12px] text-white w-[268px]">Bouteille</p>
      <Frame256 />
    </div>
  );
}

function Frame247() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-[304px]">
      <Frame248 />
      <Frame249 />
      <Frame251 />
      <Frame253 />
      <Frame255 />
    </div>
  );
}

function Frame246() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Frame247 />
    </div>
  );
}

function Frame259() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Côte de Provence (Le clos des Crostes)</p>
    </div>
  );
}

function Frame261() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center justify-center min-w-px relative">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">6€</p>
      </div>
    </div>
  );
}

function Frame260() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[294px]">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[12px] text-white w-[268px]">Verre</p>
      <Frame261 />
    </div>
  );
}

function Frame263() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="content-stretch flex h-full items-center justify-center relative shrink-0 w-[26px]">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">8€</p>
      </div>
    </div>
  );
}

function Frame262() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[12px] text-white w-[268px]">1/4L</p>
      <Frame263 />
    </div>
  );
}

function Frame265() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="content-stretch flex h-full items-center justify-center relative shrink-0 w-[26px]">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">18€</p>
      </div>
    </div>
  );
}

function Frame264() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[12px] text-white w-[268px]">1/2L</p>
      <Frame265 />
    </div>
  );
}

function Frame267() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="content-stretch flex h-full items-center justify-center relative shrink-0 w-[26px]">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">28€</p>
      </div>
    </div>
  );
}

function Frame266() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[12px] text-white w-[268px]">Bouteille</p>
      <Frame267 />
    </div>
  );
}

function Frame258() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-[304px]">
      <Frame259 />
      <Frame260 />
      <Frame262 />
      <Frame264 />
      <Frame266 />
    </div>
  );
}

function Frame257() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Frame258 />
    </div>
  );
}

function Frame245() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center relative shrink-0 w-full">
      <div className="bg-[#0a0a0b] drop-shadow-[0px_0px_6px_rgba(255,0,122,0.25)] relative rounded-[6px] shrink-0" data-name="Molecule/ProductCard">
        <div aria-hidden className="absolute border border-[#5c5c5c] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="content-stretch flex items-start p-[8px] relative size-full">
          <Frame246 />
        </div>
      </div>
      <div className="bg-[#0a0a0b] drop-shadow-[0px_0px_6px_rgba(255,0,122,0.25)] relative rounded-[6px] shrink-0" data-name="Molecule/ProductCard">
        <div aria-hidden className="absolute border border-[#5c5c5c] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="content-stretch flex items-start p-[8px] relative size-full">
          <Frame257 />
        </div>
      </div>
    </div>
  );
}

function Frame271() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Saint Mont (Chemin des pèlerins AOP)</p>
    </div>
  );
}

function Frame273() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center justify-center min-w-px relative">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">5€</p>
      </div>
    </div>
  );
}

function Frame272() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[294px]">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[12px] text-white w-[268px]">Verre</p>
      <Frame273 />
    </div>
  );
}

function Frame275() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="content-stretch flex h-full items-center justify-center relative shrink-0 w-[26px]">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">6€</p>
      </div>
    </div>
  );
}

function Frame274() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[12px] text-white w-[268px]">1/4L</p>
      <Frame275 />
    </div>
  );
}

function Frame277() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="content-stretch flex h-full items-center justify-center relative shrink-0 w-[26px]">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">13€</p>
      </div>
    </div>
  );
}

function Frame276() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[12px] text-white w-[268px]">1/2L</p>
      <Frame277 />
    </div>
  );
}

function Frame279() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="content-stretch flex h-full items-center justify-center relative shrink-0 w-[26px]">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">19€</p>
      </div>
    </div>
  );
}

function Frame278() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[12px] text-white w-[268px]">Bouteille</p>
      <Frame279 />
    </div>
  );
}

function Frame270() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-[304px]">
      <Frame271 />
      <Frame272 />
      <Frame274 />
      <Frame276 />
      <Frame278 />
    </div>
  );
}

function Frame269() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Frame270 />
    </div>
  );
}

function Frame282() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] min-w-px not-italic relative text-[14px] text-white">Côte de Gascogne Moelleux (Charme d’automne AOC)</p>
    </div>
  );
}

function Frame284() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center justify-center min-w-px relative">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">5€</p>
      </div>
    </div>
  );
}

function Frame283() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[294px]">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[12px] text-white w-[268px]">Verre</p>
      <Frame284 />
    </div>
  );
}

function Frame286() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="content-stretch flex h-full items-center justify-center relative shrink-0 w-[26px]">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">7€</p>
      </div>
    </div>
  );
}

function Frame285() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[12px] text-white w-[268px]">1/4L</p>
      <Frame286 />
    </div>
  );
}

function Frame288() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="content-stretch flex h-full items-center justify-center relative shrink-0 w-[26px]">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">15€</p>
      </div>
    </div>
  );
}

function Frame287() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[12px] text-white w-[268px]">1/2L</p>
      <Frame288 />
    </div>
  );
}

function Frame290() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="content-stretch flex h-full items-center justify-center relative shrink-0 w-[26px]">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">22€</p>
      </div>
    </div>
  );
}

function Frame289() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[12px] text-white w-[268px]">Bouteille</p>
      <Frame290 />
    </div>
  );
}

function Frame281() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-[304px]">
      <Frame282 />
      <Frame283 />
      <Frame285 />
      <Frame287 />
      <Frame289 />
    </div>
  );
}

function Frame280() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Frame281 />
    </div>
  );
}

function Frame293() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] min-w-px not-italic relative text-[14px] text-white">Chardonnay IGP (Domaine le Grande Castelet)</p>
    </div>
  );
}

function Frame295() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center justify-center min-w-px relative">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">6€</p>
      </div>
    </div>
  );
}

function Frame294() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[294px]">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[12px] text-white w-[268px]">Verre</p>
      <Frame295 />
    </div>
  );
}

function Frame297() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="content-stretch flex h-full items-center justify-center relative shrink-0 w-[26px]">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">7€</p>
      </div>
    </div>
  );
}

function Frame296() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[12px] text-white w-[268px]">1/4L</p>
      <Frame297 />
    </div>
  );
}

function Frame299() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="content-stretch flex h-full items-center justify-center relative shrink-0 w-[26px]">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">13€</p>
      </div>
    </div>
  );
}

function Frame298() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[12px] text-white w-[268px]">1/2L</p>
      <Frame299 />
    </div>
  );
}

function Frame301() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="content-stretch flex h-full items-center justify-center relative shrink-0 w-[26px]">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">20€</p>
      </div>
    </div>
  );
}

function Frame300() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[12px] text-white w-[268px]">Bouteille</p>
      <Frame301 />
    </div>
  );
}

function Frame292() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-[304px]">
      <Frame293 />
      <Frame294 />
      <Frame296 />
      <Frame298 />
      <Frame300 />
    </div>
  );
}

function Frame291() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Frame292 />
    </div>
  );
}

function Frame268() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center relative shrink-0 w-full">
      <div className="bg-[#0a0a0b] drop-shadow-[0px_0px_6px_rgba(255,0,122,0.25)] relative rounded-[6px] shrink-0" data-name="Molecule/ProductCard">
        <div aria-hidden className="absolute border border-[#5c5c5c] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="content-stretch flex items-start p-[8px] relative size-full">
          <Frame269 />
        </div>
      </div>
      <div className="bg-[#0a0a0b] drop-shadow-[0px_0px_6px_rgba(255,0,122,0.25)] relative rounded-[6px] shrink-0" data-name="Molecule/ProductCard">
        <div aria-hidden className="absolute border border-[#5c5c5c] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="content-stretch flex items-start p-[8px] relative size-full">
          <Frame280 />
        </div>
      </div>
      <div className="bg-[#0a0a0b] drop-shadow-[0px_0px_6px_rgba(255,0,122,0.25)] relative rounded-[6px] shrink-0" data-name="Molecule/ProductCard">
        <div aria-hidden className="absolute border border-[#5c5c5c] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="content-stretch flex items-start p-[8px] relative size-full">
          <Frame291 />
        </div>
      </div>
    </div>
  );
}

function Frame305() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] min-w-px not-italic relative text-[14px] text-white">Côte de Gascogne (Born in Gascony BIG)</p>
    </div>
  );
}

function Frame307() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center justify-center min-w-px relative">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">5€</p>
      </div>
    </div>
  );
}

function Frame306() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[294px]">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[12px] text-white w-[268px]">Verre</p>
      <Frame307 />
    </div>
  );
}

function Frame309() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="content-stretch flex h-full items-center justify-center relative shrink-0 w-[26px]">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">6€</p>
      </div>
    </div>
  );
}

function Frame308() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[12px] text-white w-[268px]">1/4L</p>
      <Frame309 />
    </div>
  );
}

function Frame311() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="content-stretch flex h-full items-center justify-center relative shrink-0 w-[26px]">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">16€</p>
      </div>
    </div>
  );
}

function Frame310() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[12px] text-white w-[268px]">1/2L</p>
      <Frame311 />
    </div>
  );
}

function Frame313() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="content-stretch flex h-full items-center justify-center relative shrink-0 w-[26px]">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">22€</p>
      </div>
    </div>
  );
}

function Frame312() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[12px] text-white w-[268px]">Bouteille</p>
      <Frame313 />
    </div>
  );
}

function Frame304() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-[304px]">
      <Frame305 />
      <Frame306 />
      <Frame308 />
      <Frame310 />
      <Frame312 />
    </div>
  );
}

function Frame303() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Frame304 />
    </div>
  );
}

function Frame316() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] min-w-px not-italic relative text-[14px] text-white">Côte du Rhône BIO (La bête à bon dieu)</p>
    </div>
  );
}

function Frame318() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center justify-center min-w-px relative">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">6€</p>
      </div>
    </div>
  );
}

function Frame317() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[294px]">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[12px] text-white w-[268px]">Verre</p>
      <Frame318 />
    </div>
  );
}

function Frame320() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="content-stretch flex h-full items-center justify-center relative shrink-0 w-[26px]">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">7€</p>
      </div>
    </div>
  );
}

function Frame319() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[12px] text-white w-[268px]">1/4L</p>
      <Frame320 />
    </div>
  );
}

function Frame322() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="content-stretch flex h-full items-center justify-center relative shrink-0 w-[26px]">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">17€</p>
      </div>
    </div>
  );
}

function Frame321() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[12px] text-white w-[268px]">1/2L</p>
      <Frame322 />
    </div>
  );
}

function Frame324() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="content-stretch flex h-full items-center justify-center relative shrink-0 w-[26px]">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">24€</p>
      </div>
    </div>
  );
}

function Frame323() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[12px] text-white w-[268px]">Bouteille</p>
      <Frame324 />
    </div>
  );
}

function Frame315() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-[304px]">
      <Frame316 />
      <Frame317 />
      <Frame319 />
      <Frame321 />
      <Frame323 />
    </div>
  );
}

function Frame314() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Frame315 />
    </div>
  );
}

function Frame327() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] min-w-px not-italic relative text-[14px] text-white">Pic Saint Loup (Château la roque)</p>
    </div>
  );
}

function Frame329() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="content-stretch flex h-full items-center justify-center relative shrink-0 w-[26px]">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">30€</p>
      </div>
    </div>
  );
}

function Frame328() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[12px] text-white w-[268px]">Bouteille</p>
      <Frame329 />
    </div>
  );
}

function Frame326() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-[304px]">
      <Frame327 />
      <Frame328 />
    </div>
  );
}

function Frame325() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Frame326 />
    </div>
  );
}

function Frame302() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center relative shrink-0 w-full">
      <div className="bg-[#0a0a0b] drop-shadow-[0px_0px_6px_rgba(255,0,122,0.25)] relative rounded-[6px] shrink-0" data-name="Molecule/ProductCard">
        <div aria-hidden className="absolute border border-[#5c5c5c] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="content-stretch flex items-start p-[8px] relative size-full">
          <Frame303 />
        </div>
      </div>
      <div className="bg-[#0a0a0b] drop-shadow-[0px_0px_6px_rgba(255,0,122,0.25)] relative rounded-[6px] shrink-0" data-name="Molecule/ProductCard">
        <div aria-hidden className="absolute border border-[#5c5c5c] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="content-stretch flex items-start p-[8px] relative size-full">
          <Frame314 />
        </div>
      </div>
      <div className="bg-[#0a0a0b] drop-shadow-[0px_0px_6px_rgba(255,0,122,0.25)] relative rounded-[6px] shrink-0" data-name="Molecule/ProductCard">
        <div aria-hidden className="absolute border border-[#5c5c5c] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="content-stretch flex items-start p-[8px] relative size-full">
          <Frame325 />
        </div>
      </div>
    </div>
  );
}

function Frame332() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Coupe de prosecco</p>
    </div>
  );
}

function Frame333() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[12px] text-white w-[268px]">​</p>
    </div>
  );
}

function Frame331() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
      <Frame332 />
      <Frame333 />
    </div>
  );
}

function Frame334() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative self-stretch">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">7€</p>
    </div>
  );
}

function Frame337() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] min-w-px not-italic relative text-[14px] text-white">Champagne</p>
    </div>
  );
}

function Frame339() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center justify-center min-w-px relative">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">12€</p>
      </div>
    </div>
  );
}

function Frame338() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[294px]">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[12px] text-white w-[268px]">Verre</p>
      <Frame339 />
    </div>
  );
}

function Frame341() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="content-stretch flex h-full items-center justify-center relative shrink-0 w-[26px]">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">60€</p>
      </div>
    </div>
  );
}

function Frame340() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[12px] text-white w-[268px]">Bouteille</p>
      <Frame341 />
    </div>
  );
}

function Frame336() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-[304px]">
      <Frame337 />
      <Frame338 />
      <Frame340 />
    </div>
  );
}

function Frame335() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Frame336 />
    </div>
  );
}

function Frame330() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center relative shrink-0 w-full">
      <div className="bg-[#0a0a0b] drop-shadow-[0px_0px_6px_rgba(255,0,122,0.25)] relative rounded-[6px] shrink-0 w-[320px]" data-name="Molecule/ProductCard">
        <div aria-hidden className="absolute border border-[#5c5c5c] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="content-stretch flex gap-[10px] items-start p-[8px] relative size-full">
          <Frame331 />
          <Frame334 />
        </div>
      </div>
      <div className="bg-[#0a0a0b] drop-shadow-[0px_0px_6px_rgba(255,0,122,0.25)] relative rounded-[6px] shrink-0" data-name="Molecule/ProductCard">
        <div aria-hidden className="absolute border border-[#5c5c5c] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="content-stretch flex items-start p-[8px] relative size-full">
          <Frame335 />
        </div>
      </div>
    </div>
  );
}

function MoulesPoissons() {
  return (
    <div className="relative shrink-0 w-full" data-name="Moules &  Poissons">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start px-[16px] relative size-full">
          <p className="[word-break:break-word] font-['Druk_Wide_Medium:Medium',sans-serif] leading-[1.1] not-italic relative shrink-0 text-[20px] text-white uppercase w-full">{`bières, Cidres & vin`}</p>
          <p className="[word-break:break-word] font-['Druk_Wide_Medium:Medium',sans-serif] leading-[1.1] not-italic relative shrink-0 text-[14px] text-white uppercase w-full">bières pressions</p>
          <Frame167 />
          <p className="[word-break:break-word] font-['Druk_Wide_Medium:Medium',sans-serif] leading-[1.1] not-italic relative shrink-0 text-[14px] text-white uppercase w-full">Bières bouteilles</p>
          <Frame223 />
          <p className="[word-break:break-word] font-['Druk_Wide_Medium:Medium',sans-serif] leading-[1.1] not-italic relative shrink-0 text-[14px] text-white uppercase w-full">Cidres</p>
          <Frame236 />
          <p className="[word-break:break-word] font-['Druk_Wide_Medium:Medium',sans-serif] leading-[1.1] not-italic relative shrink-0 text-[14px] text-white uppercase w-full">Vins Rosés</p>
          <Frame245 />
          <p className="[word-break:break-word] font-['Druk_Wide_Medium:Medium',sans-serif] leading-[1.1] not-italic relative shrink-0 text-[14px] text-white uppercase w-full">Vins Blancs</p>
          <Frame268 />
          <p className="[word-break:break-word] font-['Druk_Wide_Medium:Medium',sans-serif] leading-[1.1] not-italic relative shrink-0 text-[14px] text-white uppercase w-full">Vins Rouges</p>
          <Frame302 />
          <p className="[word-break:break-word] font-['Druk_Wide_Medium:Medium',sans-serif] leading-[1.1] not-italic relative shrink-0 text-[14px] text-white uppercase w-full">champagnes</p>
          <Frame330 />
        </div>
      </div>
    </div>
  );
}

function Frame344() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Campari</p>
    </div>
  );
}

function Frame345() {
  return <div className="content-stretch flex h-[34px] items-center justify-center relative shrink-0 w-[268px]" />;
}

function Frame343() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
      <Frame344 />
      <Frame345 />
    </div>
  );
}

function Frame346() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative self-stretch">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">6€</p>
    </div>
  );
}

function Frame348() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Martini 6cl (Rouge, Blanc)</p>
    </div>
  );
}

function Frame349() {
  return <div className="content-stretch flex h-[34px] items-center justify-center relative shrink-0 w-[268px]" />;
}

function Frame347() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
      <Frame348 />
      <Frame349 />
    </div>
  );
}

function Frame350() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative self-stretch">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">5€</p>
    </div>
  );
}

function Frame352() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Ricard 2cl</p>
    </div>
  );
}

function Frame353() {
  return <div className="content-stretch flex h-[34px] items-center justify-center relative shrink-0 w-[268px]" />;
}

function Frame351() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
      <Frame352 />
      <Frame353 />
    </div>
  );
}

function Frame354() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative self-stretch">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">4€</p>
    </div>
  );
}

function Frame356() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Porto, Muscat</p>
    </div>
  );
}

function Frame357() {
  return <div className="content-stretch flex h-[34px] items-center justify-center relative shrink-0 w-[268px]" />;
}

function Frame355() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
      <Frame356 />
      <Frame357 />
    </div>
  );
}

function Frame358() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative self-stretch">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">5€</p>
    </div>
  );
}

function Frame360() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Kir (pêche, framboise, mûre ou cassis</p>
    </div>
  );
}

function Frame361() {
  return <div className="content-stretch flex h-[34px] items-center justify-center relative shrink-0 w-[268px]" />;
}

function Frame359() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
      <Frame360 />
      <Frame361 />
    </div>
  );
}

function Frame362() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative self-stretch">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">5€</p>
    </div>
  );
}

function Frame364() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Kir Royal</p>
    </div>
  );
}

function Frame365() {
  return <div className="content-stretch flex h-[34px] items-center justify-center relative shrink-0 w-[268px]" />;
}

function Frame363() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
      <Frame364 />
      <Frame365 />
    </div>
  );
}

function Frame366() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative self-stretch">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">8€</p>
    </div>
  );
}

function Frame368() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Suze</p>
    </div>
  );
}

function Frame369() {
  return <div className="content-stretch flex h-[34px] items-center justify-center relative shrink-0 w-[268px]" />;
}

function Frame367() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
      <Frame368 />
      <Frame369 />
    </div>
  );
}

function Frame370() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative self-stretch">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">5€</p>
    </div>
  );
}

function Frame373() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] min-w-px not-italic relative text-[14px] text-white">Sangria</p>
    </div>
  );
}

function Frame375() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center justify-center min-w-px relative">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">5€</p>
      </div>
    </div>
  );
}

function Frame374() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[294px]">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[12px] text-white w-[268px]">Verre</p>
      <Frame375 />
    </div>
  );
}

function Frame377() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="content-stretch flex h-full items-center justify-center relative shrink-0 w-[26px]">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">9€</p>
      </div>
    </div>
  );
}

function Frame376() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[12px] text-white w-[268px]">1/2L</p>
      <Frame377 />
    </div>
  );
}

function Frame379() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="content-stretch flex h-full items-center justify-center relative shrink-0 w-[26px]">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">15€</p>
      </div>
    </div>
  );
}

function Frame378() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[12px] text-white w-[268px]">Litre</p>
      <Frame379 />
    </div>
  );
}

function Frame372() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-[304px]">
      <Frame373 />
      <Frame374 />
      <Frame376 />
      <Frame378 />
    </div>
  );
}

function Frame371() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Frame372 />
    </div>
  );
}

function Frame342() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center relative shrink-0 w-full">
      <div className="bg-[#0a0a0b] drop-shadow-[0px_0px_6px_rgba(255,0,122,0.25)] relative rounded-[6px] shrink-0 w-[320px]" data-name="Molecule/ProductCard">
        <div aria-hidden className="absolute border border-[#5c5c5c] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="content-stretch flex gap-[10px] items-start p-[8px] relative size-full">
          <Frame343 />
          <Frame346 />
        </div>
      </div>
      <div className="bg-[#0a0a0b] drop-shadow-[0px_0px_6px_rgba(255,0,122,0.25)] relative rounded-[6px] shrink-0 w-[320px]" data-name="Molecule/ProductCard">
        <div aria-hidden className="absolute border border-[#5c5c5c] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="content-stretch flex gap-[10px] items-start p-[8px] relative size-full">
          <Frame347 />
          <Frame350 />
        </div>
      </div>
      <div className="bg-[#0a0a0b] drop-shadow-[0px_0px_6px_rgba(255,0,122,0.25)] relative rounded-[6px] shrink-0 w-[320px]" data-name="Molecule/ProductCard">
        <div aria-hidden className="absolute border border-[#5c5c5c] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="content-stretch flex gap-[10px] items-start p-[8px] relative size-full">
          <Frame351 />
          <Frame354 />
        </div>
      </div>
      <div className="bg-[#0a0a0b] drop-shadow-[0px_0px_6px_rgba(255,0,122,0.25)] relative rounded-[6px] shrink-0 w-[320px]" data-name="Molecule/ProductCard">
        <div aria-hidden className="absolute border border-[#5c5c5c] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="content-stretch flex gap-[10px] items-start p-[8px] relative size-full">
          <Frame355 />
          <Frame358 />
        </div>
      </div>
      <div className="bg-[#0a0a0b] drop-shadow-[0px_0px_6px_rgba(255,0,122,0.25)] relative rounded-[6px] shrink-0 w-[320px]" data-name="Molecule/ProductCard">
        <div aria-hidden className="absolute border border-[#5c5c5c] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="content-stretch flex gap-[10px] items-start p-[8px] relative size-full">
          <Frame359 />
          <Frame362 />
        </div>
      </div>
      <div className="bg-[#0a0a0b] drop-shadow-[0px_0px_6px_rgba(255,0,122,0.25)] relative rounded-[6px] shrink-0 w-[320px]" data-name="Molecule/ProductCard">
        <div aria-hidden className="absolute border border-[#5c5c5c] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="content-stretch flex gap-[10px] items-start p-[8px] relative size-full">
          <Frame363 />
          <Frame366 />
        </div>
      </div>
      <div className="bg-[#0a0a0b] drop-shadow-[0px_0px_6px_rgba(255,0,122,0.25)] relative rounded-[6px] shrink-0 w-[320px]" data-name="Molecule/ProductCard">
        <div aria-hidden className="absolute border border-[#5c5c5c] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="content-stretch flex gap-[10px] items-start p-[8px] relative size-full">
          <Frame367 />
          <Frame370 />
        </div>
      </div>
      <div className="bg-[#0a0a0b] drop-shadow-[0px_0px_6px_rgba(255,0,122,0.25)] relative rounded-[6px] shrink-0" data-name="Molecule/ProductCard">
        <div aria-hidden className="absolute border border-[#5c5c5c] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="content-stretch flex items-start p-[8px] relative size-full">
          <Frame371 />
        </div>
      </div>
    </div>
  );
}

function Frame382() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Verre 4cl avec Soft</p>
    </div>
  );
}

function Frame383() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[12px] text-white w-[268px]">Rhum Bacardi, Vodka Eristoff, Get27, Whisky William Lawson ou Jack Daniels, Gin Bombay Saphire</p>
    </div>
  );
}

function Frame381() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
      <Frame382 />
      <Frame383 />
    </div>
  );
}

function Frame384() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative self-stretch">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">8€</p>
    </div>
  );
}

function Frame386() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Vodka Energy</p>
    </div>
  );
}

function Frame387() {
  return <div className="content-stretch flex h-[34px] items-center justify-center relative shrink-0 w-[268px]" />;
}

function Frame385() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
      <Frame386 />
      <Frame387 />
    </div>
  );
}

function Frame388() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative self-stretch">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">9€</p>
    </div>
  );
}

function Frame390() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Verre Supérieur</p>
    </div>
  );
}

function Frame391() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[12px] text-white w-[268px]">Rhum Don Papa, Gin Hendrick’s, Whisky Tougouchi</p>
    </div>
  );
}

function Frame389() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
      <Frame390 />
      <Frame391 />
    </div>
  );
}

function Frame392() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative self-stretch">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">12€</p>
    </div>
  );
}

function Frame394() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Shooter 2cl</p>
    </div>
  );
}

function Frame395() {
  return <div className="content-stretch flex h-[34px] items-center justify-center relative shrink-0 w-[268px]" />;
}

function Frame393() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
      <Frame394 />
      <Frame395 />
    </div>
  );
}

function Frame396() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative self-stretch">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">3€</p>
    </div>
  );
}

function Frame398() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Le Mètre de Shooter</p>
    </div>
  );
}

function Frame399() {
  return <div className="content-stretch flex h-[34px] items-center justify-center relative shrink-0 w-[268px]" />;
}

function Frame397() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
      <Frame398 />
      <Frame399 />
    </div>
  );
}

function Frame400() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative self-stretch">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">28€</p>
    </div>
  );
}

function Frame380() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center relative shrink-0 w-full">
      <div className="bg-[#0a0a0b] drop-shadow-[0px_0px_6px_rgba(255,0,122,0.25)] relative rounded-[6px] shrink-0 w-[320px]" data-name="Molecule/ProductCard">
        <div aria-hidden className="absolute border border-[#5c5c5c] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="content-stretch flex gap-[10px] items-start p-[8px] relative size-full">
          <Frame381 />
          <Frame384 />
        </div>
      </div>
      <div className="bg-[#0a0a0b] drop-shadow-[0px_0px_6px_rgba(255,0,122,0.25)] relative rounded-[6px] shrink-0 w-[320px]" data-name="Molecule/ProductCard">
        <div aria-hidden className="absolute border border-[#5c5c5c] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="content-stretch flex gap-[10px] items-start p-[8px] relative size-full">
          <Frame385 />
          <Frame388 />
        </div>
      </div>
      <div className="bg-[#0a0a0b] drop-shadow-[0px_0px_6px_rgba(255,0,122,0.25)] relative rounded-[6px] shrink-0 w-[320px]" data-name="Molecule/ProductCard">
        <div aria-hidden className="absolute border border-[#5c5c5c] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="content-stretch flex gap-[10px] items-start p-[8px] relative size-full">
          <Frame389 />
          <Frame392 />
        </div>
      </div>
      <div className="bg-[#0a0a0b] drop-shadow-[0px_0px_6px_rgba(255,0,122,0.25)] relative rounded-[6px] shrink-0 w-[320px]" data-name="Molecule/ProductCard">
        <div aria-hidden className="absolute border border-[#5c5c5c] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="content-stretch flex gap-[10px] items-start p-[8px] relative size-full">
          <Frame393 />
          <Frame396 />
        </div>
      </div>
      <div className="bg-[#0a0a0b] drop-shadow-[0px_0px_6px_rgba(255,0,122,0.25)] relative rounded-[6px] shrink-0 w-[320px]" data-name="Molecule/ProductCard">
        <div aria-hidden className="absolute border border-[#5c5c5c] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="content-stretch flex gap-[10px] items-start p-[8px] relative size-full">
          <Frame397 />
          <Frame400 />
        </div>
      </div>
    </div>
  );
}

function Frame403() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Bouteille 70cl avec Soft</p>
    </div>
  );
}

function Frame404() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[12px] text-white w-[268px]">Rhum Bacardi, Vodka Eristoff, Get27, Whisky William Lawson</p>
    </div>
  );
}

function Frame402() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
      <Frame403 />
      <Frame404 />
    </div>
  );
}

function Frame405() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative self-stretch">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">75€</p>
    </div>
  );
}

function Frame407() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Bouteille Premium 70cl</p>
    </div>
  );
}

function Frame408() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[12px] text-white w-[268px]">Jack Daniels, Bombay Saphire, Jagermeister</p>
    </div>
  );
}

function Frame406() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
      <Frame407 />
      <Frame408 />
    </div>
  );
}

function Frame409() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative self-stretch">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">85€</p>
    </div>
  );
}

function Frame411() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Bouteille Supérieure</p>
    </div>
  );
}

function Frame412() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[12px] text-white w-[268px]">Rhum Don Papa, Gin Hendrick’s, Whisky Tougouchi</p>
    </div>
  );
}

function Frame410() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
      <Frame411 />
      <Frame412 />
    </div>
  );
}

function Frame413() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative self-stretch">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">120€</p>
    </div>
  );
}

function Frame416() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] min-w-px not-italic relative text-[14px] text-white">Greygoose</p>
    </div>
  );
}

function Frame418() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="content-stretch flex h-full items-center justify-center relative shrink-0 w-[26px]">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">130€</p>
      </div>
    </div>
  );
}

function Frame417() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[12px] text-white w-[268px]">70cl</p>
      <Frame418 />
    </div>
  );
}

function Frame420() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="content-stretch flex h-full items-center justify-center relative shrink-0 w-[26px]">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">300€</p>
      </div>
    </div>
  );
}

function Frame419() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[12px] text-white w-[268px]">1,75L</p>
      <Frame420 />
    </div>
  );
}

function Frame415() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-[304px]">
      <Frame416 />
      <Frame417 />
      <Frame419 />
    </div>
  );
}

function Frame414() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Frame415 />
    </div>
  );
}

function Frame401() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center relative shrink-0 w-full">
      <div className="bg-[#0a0a0b] drop-shadow-[0px_0px_6px_rgba(255,0,122,0.25)] relative rounded-[6px] shrink-0 w-[320px]" data-name="Molecule/ProductCard">
        <div aria-hidden className="absolute border border-[#5c5c5c] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="content-stretch flex gap-[10px] items-start p-[8px] relative size-full">
          <Frame402 />
          <Frame405 />
        </div>
      </div>
      <div className="bg-[#0a0a0b] drop-shadow-[0px_0px_6px_rgba(255,0,122,0.25)] relative rounded-[6px] shrink-0 w-[320px]" data-name="Molecule/ProductCard">
        <div aria-hidden className="absolute border border-[#5c5c5c] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="content-stretch flex gap-[10px] items-start p-[8px] relative size-full">
          <Frame406 />
          <Frame409 />
        </div>
      </div>
      <div className="bg-[#0a0a0b] drop-shadow-[0px_0px_6px_rgba(255,0,122,0.25)] relative rounded-[6px] shrink-0 w-[320px]" data-name="Molecule/ProductCard">
        <div aria-hidden className="absolute border border-[#5c5c5c] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="content-stretch flex gap-[10px] items-start p-[8px] relative size-full">
          <Frame410 />
          <Frame413 />
        </div>
      </div>
      <div className="bg-[#0a0a0b] drop-shadow-[0px_0px_6px_rgba(255,0,122,0.25)] relative rounded-[6px] shrink-0" data-name="Molecule/ProductCard">
        <div aria-hidden className="absolute border border-[#5c5c5c] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="content-stretch flex items-start p-[8px] relative size-full">
          <Frame414 />
        </div>
      </div>
    </div>
  );
}

function Alcools() {
  return (
    <div className="relative shrink-0 w-full" data-name="Alcools">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start px-[16px] relative size-full">
          <p className="[word-break:break-word] font-['Druk_Wide_Medium:Medium',sans-serif] leading-[1.1] not-italic relative shrink-0 text-[20px] text-white uppercase w-full">Alcools</p>
          <p className="[word-break:break-word] font-['Druk_Wide_Medium:Medium',sans-serif] leading-[1.1] not-italic relative shrink-0 text-[14px] text-white uppercase w-full">Apéritifs</p>
          <Frame342 />
          <p className="[word-break:break-word] font-['Druk_Wide_Medium:Medium',sans-serif] leading-[1.1] not-italic relative shrink-0 text-[14px] text-white uppercase w-full">Au verre</p>
          <Frame380 />
          <p className="[word-break:break-word] font-['Druk_Wide_Medium:Medium',sans-serif] leading-[1.1] not-italic relative shrink-0 text-[14px] text-white uppercase w-full">A la bouteille</p>
          <Frame401 />
        </div>
      </div>
    </div>
  );
}

function Frame423() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Armagnac</p>
    </div>
  );
}

function Frame424() {
  return <div className="content-stretch flex h-[34px] items-center justify-center relative shrink-0 w-[268px]" />;
}

function Frame422() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
      <Frame423 />
      <Frame424 />
    </div>
  );
}

function Frame425() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative self-stretch">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">8€</p>
    </div>
  );
}

function Frame427() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Cognac</p>
    </div>
  );
}

function Frame428() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[12px] text-white w-[268px]">​</p>
    </div>
  );
}

function Frame426() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
      <Frame427 />
      <Frame428 />
    </div>
  );
}

function Frame429() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative self-stretch">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">8€</p>
    </div>
  );
}

function Frame431() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Get</p>
    </div>
  );
}

function Frame432() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[12px] text-white w-[268px]">​</p>
    </div>
  );
}

function Frame430() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
      <Frame431 />
      <Frame432 />
    </div>
  );
}

function Frame433() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative self-stretch">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">8€</p>
    </div>
  );
}

function Frame435() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Baileys</p>
    </div>
  );
}

function Frame436() {
  return <div className="content-stretch flex h-[34px] items-center justify-center relative shrink-0 w-[268px]" />;
}

function Frame434() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
      <Frame435 />
      <Frame436 />
    </div>
  );
}

function Frame437() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative self-stretch">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">8€</p>
    </div>
  );
}

function Frame439() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Manzana</p>
    </div>
  );
}

function Frame440() {
  return <div className="content-stretch flex h-[34px] items-center justify-center relative shrink-0 w-[268px]" />;
}

function Frame438() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
      <Frame439 />
      <Frame440 />
    </div>
  );
}

function Frame441() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative self-stretch">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">5€</p>
    </div>
  );
}

function Frame443() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Patxaran</p>
    </div>
  );
}

function Frame444() {
  return <div className="content-stretch flex h-[34px] items-center justify-center relative shrink-0 w-[268px]" />;
}

function Frame442() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
      <Frame443 />
      <Frame444 />
    </div>
  );
}

function Frame445() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative self-stretch">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">5€</p>
    </div>
  );
}

function Frame421() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center relative shrink-0 w-full">
      <div className="bg-[#0a0a0b] drop-shadow-[0px_0px_6px_rgba(255,0,122,0.25)] relative rounded-[6px] shrink-0 w-[320px]" data-name="Molecule/ProductCard">
        <div aria-hidden className="absolute border border-[#5c5c5c] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="content-stretch flex gap-[10px] items-start p-[8px] relative size-full">
          <Frame422 />
          <Frame425 />
        </div>
      </div>
      <div className="bg-[#0a0a0b] drop-shadow-[0px_0px_6px_rgba(255,0,122,0.25)] relative rounded-[6px] shrink-0 w-[320px]" data-name="Molecule/ProductCard">
        <div aria-hidden className="absolute border border-[#5c5c5c] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="content-stretch flex gap-[10px] items-start p-[8px] relative size-full">
          <Frame426 />
          <Frame429 />
        </div>
      </div>
      <div className="bg-[#0a0a0b] drop-shadow-[0px_0px_6px_rgba(255,0,122,0.25)] relative rounded-[6px] shrink-0 w-[320px]" data-name="Molecule/ProductCard">
        <div aria-hidden className="absolute border border-[#5c5c5c] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="content-stretch flex gap-[10px] items-start p-[8px] relative size-full">
          <Frame430 />
          <Frame433 />
        </div>
      </div>
      <div className="bg-[#0a0a0b] drop-shadow-[0px_0px_6px_rgba(255,0,122,0.25)] relative rounded-[6px] shrink-0 w-[320px]" data-name="Molecule/ProductCard">
        <div aria-hidden className="absolute border border-[#5c5c5c] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="content-stretch flex gap-[10px] items-start p-[8px] relative size-full">
          <Frame434 />
          <Frame437 />
        </div>
      </div>
      <div className="bg-[#0a0a0b] drop-shadow-[0px_0px_6px_rgba(255,0,122,0.25)] relative rounded-[6px] shrink-0 w-[320px]" data-name="Molecule/ProductCard">
        <div aria-hidden className="absolute border border-[#5c5c5c] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="content-stretch flex gap-[10px] items-start p-[8px] relative size-full">
          <Frame438 />
          <Frame441 />
        </div>
      </div>
      <div className="bg-[#0a0a0b] drop-shadow-[0px_0px_6px_rgba(255,0,122,0.25)] relative rounded-[6px] shrink-0 w-[320px]" data-name="Molecule/ProductCard">
        <div aria-hidden className="absolute border border-[#5c5c5c] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="content-stretch flex gap-[10px] items-start p-[8px] relative size-full">
          <Frame442 />
          <Frame445 />
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
          <p className="[word-break:break-word] font-['Druk_Wide_Medium:Medium',sans-serif] leading-[1.1] not-italic relative shrink-0 text-[20px] text-white uppercase w-full">Digestifs</p>
          <Frame421 />
        </div>
      </div>
    </div>
  );
}

function MapContainer() {
  return (
    <div className="h-[160px] relative rounded-[8px] shrink-0 w-full" data-name="Map/Container">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgMapContainer} />
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute h-[500px] left-[-296px] top-[40px] w-[966px]" data-name="image 1" />
        <div className="absolute h-[43px] left-[108px] overflow-clip top-[64px] w-[27px]" data-name="Markers / Spotlight Marker">
          <div className="absolute h-[5px] left-[9px] top-[37px] w-[9px]">
            <div className="absolute inset-[-40%_-22.22%]">
              <svg className="block size-full" fill="none" height="9" preserveAspectRatio="none" viewBox="0 0 13 9" width="13">
                <g filter="url(#filter0_f_0_868)" id="Ellipse 2">
                  <ellipse cx="6.5" cy="4.5" fill="black" fillOpacity="0.12" rx="4.5" ry="2.5" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="9" id="filter0_f_0_868" width="13" x="0" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                    <feGaussianBlur result="effect1_foregroundBlur_0_868" stdDeviation="1" />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
          <div className="absolute h-[38px] left-px top-px w-[25px]" data-name="Union">
            <div className="absolute inset-[-2.63%_-4%]">
              <svg className="block size-full" fill="none" height="40" preserveAspectRatio="none" viewBox="0 0 27 40" width="27">
                <g id="Union">
                  <mask fill="black" height="40" id="path-1-outside-1_0_870" maskUnits="userSpaceOnUse" width="27" x="0" y="0">
                    <rect fill="white" height="40" width="27" />
                    <path d={svgPaths.p1920f500} />
                  </mask>
                  <path d={svgPaths.p1920f500} fill="#00E5FF" />
                  <path d={svgPaths.p2afe60c0} fill="url(#paint0_linear_0_870)" mask="url(#path-1-outside-1_0_870)" />
                </g>
                <defs>
                  <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_870" x1="13.5" x2="13.5" y1="1" y2="39">
                    <stop stopColor="white" />
                    <stop offset="1" stopColor="white" stopOpacity="0.35" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
          <div className="absolute left-[9px] size-[9px] top-[9px]">
            <svg className="absolute block inset-0 size-full" fill="none" height="9" preserveAspectRatio="none" viewBox="0 0 9 9" width="9">
              <circle cx="4.5" cy="4.5" fill="black" fillOpacity="0.4" id="Ellipse 3" r="4.5" />
            </svg>
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#5c5c5c] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame447() {
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

function Frame448() {
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
      <Frame447 />
      <Frame448 />
    </div>
  );
}

function Frame449() {
  return <div className="bg-[#2d2d2d] h-px relative shrink-0 w-full" />;
}

function Frame450() {
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
          <Frame450 />
        </div>
      </div>
    </div>
  );
}

function Frame446() {
  return (
    <div className="bg-[#0a0a0b] h-[485px] relative shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start px-[16px] py-[32px] relative size-full">
          <MapContainer />
          <FooterInfos />
          <Frame449 />
          <FooterBottom />
        </div>
      </div>
    </div>
  );
}

export default function CarteNight() {
  return (
    <div className="bg-[#0a0a0b] content-stretch flex flex-col gap-[40px] items-start pt-[50px] relative size-full" data-name="Carte — Night">
      <Header className="bg-[#0a0a0b] relative shrink-0 w-full" />
      <Frame31 />
      <Frame32 />
      <Cocktails />
      <TapasPlanches />
      <MoulesPoissons />
      <Alcools />
      <Desserts />
      <Frame446 />
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