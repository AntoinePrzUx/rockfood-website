import svgPaths from "./svg-bzsda94szx";
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

function Frame8({ className }: { className?: string }) {
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

function IconChevron({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[20px]"} data-name="Icon_Chevron">
      <div className="absolute bottom-1/4 flex items-center justify-center left-[37.5%] right-[37.5%] top-1/4" style={{ containerType: "size" }}>
        <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
          <div className="relative size-full">
            <div className="absolute inset-[-7.07%_-14.14%_-7.07%_-28.28%]">
              <svg className="block size-full" fill="none" height="11.4142" preserveAspectRatio="none" viewBox="0 0 7.12132 11.4142" width="7.12132">
                <path d={svgPaths.p16b0f380} id="Vector 9" stroke="#111111" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
type CardFaqProps = {
  className?: string;
  question?: string;
  state?: "Close";
  theme?: "Day";
};

function CardFaq({ className, question = "Intitulé de la question", state = "Close", theme = "Day" }: CardFaqProps) {
  return (
    <div className={className || "bg-[#f9f9f6] relative rounded-[8px] w-[129px]"}>
      <div aria-hidden className="absolute border border-[#111] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-center p-[16px] relative size-full">
          <div className="relative shrink-0 w-full" data-name="Header_Row">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-between p-[10px] relative size-full">
                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] min-w-px not-italic relative text-[14px] text-black">
                  <p className="leading-[1.4]">{question}</p>
                </div>
                <IconChevron className="relative shrink-0 size-[20px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MapDuotoneLine({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[24px]"} data-name="Map_duotone_line">
      <div className="absolute inset-[22.92%_64.58%_29.17%_18.75%]">
        <svg className="absolute block inset-0 size-full" fill="none" height="11.5" preserveAspectRatio="none" viewBox="0 0 4 11.5" width="4">
          <path d="M0 2L4 0V10L1 11.5H0V2Z" fill="#00E5FF" fillOpacity="0.2" id="Vector 372" />
        </svg>
      </div>
      <div className="absolute bottom-[27.08%] flex items-center justify-center left-[64.58%] right-[18.75%] top-1/4" style={{ containerType: "size" }}>
        <div className="flex-none h-[100cqh] rotate-180 w-[100cqw]">
          <div className="relative size-full">
            <svg className="absolute block inset-0 size-full" fill="none" height="11.5" preserveAspectRatio="none" viewBox="0 0 4 11.5" width="4">
              <path d="M0 2L4 0V10L1 11.5H0V2Z" fill="#00E5FF" fillOpacity="0.2" id="Vector 373" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute inset-[22.92%_18.75%_27.08%_18.75%]">
        <div className="absolute inset-[-3.91%_-3.33%]">
          <svg className="block size-full" fill="none" height="12.9385" preserveAspectRatio="none" viewBox="0 0 16 12.9385" width="16">
            <path d={svgPaths.p24cc2d00} id="Vector 326" stroke="#00E5FF" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[31.25%_35.42%_27.08%_64.58%]">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 1 10" width="1">
            <path d="M0.5 10V0" id="Vector 327" stroke="#00E5FF" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[22.92%_64.58%_35.42%_35.42%]">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 1 10" width="1">
            <path d="M0.5 10V0" id="Vector 327" stroke="#00E5FF" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function TimeDuotoneLine({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[24px]"} data-name="Time_duotone_line">
      <div className="absolute inset-[16.67%]">
        <div className="absolute inset-[-7.5%]">
          <svg className="block size-full" fill="none" height="18.4" preserveAspectRatio="none" viewBox="0 0 18.4 18.4" width="18.4">
            <circle cx="9.2" cy="9.2" fill="#00E5FF" fillOpacity="0.2" id="Ellipse 54" r="8.6" stroke="#00E5FF" strokeWidth="1.2" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/2 left-1/2 right-[31.25%] top-[35.42%]">
        <div className="absolute inset-[-17.14%_-13.33%]">
          <svg className="block size-full" fill="none" height="4.7" preserveAspectRatio="none" viewBox="0 0 5.7 4.7" width="5.7">
            <path d={svgPaths.p194aac0} id="Vector 64" stroke="#00E5FF" strokeLinecap="round" strokeWidth="1.2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function PinAltDuotoneLine({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[24px]"} data-name="Pin_alt_duotone_line">
      <div className="absolute inset-[8.33%_20.83%_25.41%_20.83%]" data-name="Subtract">
        <div className="absolute inset-[-3.77%_-4.29%]">
          <svg className="block size-full" fill="none" height="17.1021" preserveAspectRatio="none" viewBox="0 0 15.2 17.1021" width="15.2">
            <g id="Subtract">
              <path d={svgPaths.p108a7380} fill="#00E5FF" fillOpacity="0.2" />
              <path d={svgPaths.p2a17400} fill="#00E5FF" />
            </g>
          </svg>
        </div>
      </div>
      <div className="absolute inset-[66.67%_12.5%_8.33%_12.5%]">
        <div className="absolute inset-[15%_-3.33%_-10%_-3.33%]">
          <svg className="block size-full" fill="none" height="5.7001" preserveAspectRatio="none" viewBox="0 0 19.2 5.7001" width="19.2">
            <path d={svgPaths.p2155de80} id="Ellipse 40" stroke="#00E5FF" strokeLinecap="round" strokeWidth="1.2" />
          </svg>
        </div>
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

function Frame10() {
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

function AtomButton() {
  return (
    <div className="content-stretch flex gap-[10px] h-[44px] items-center justify-center px-[24px] py-[14px] relative rounded-[4px] shrink-0 w-[173px]" data-name="Atom/Button">
      <div aria-hidden className="absolute border border-[#111] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Social Icons">
        <div className="absolute inset-[0_0.06%_0.02%_0]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="23.9953" preserveAspectRatio="none" viewBox="0 0 23.9859 23.9953" width="23.9859">
            <path d={svgPaths.pe5f40} fill="#111111" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[24.32%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="12.3281" preserveAspectRatio="none" viewBox="0 0 12.3281 12.3281" width="12.3281">
            <path d={svgPaths.p3e16b40} fill="#111111" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[17.3%_17.3%_70.7%_70.7%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="2.87813" preserveAspectRatio="none" viewBox="0 0 2.87812 2.87813" width="2.87812">
            <path d={svgPaths.p6838b00} fill="#111111" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#111] text-[13px] tracking-[0.26px] uppercase whitespace-nowrap">INSTAGRAM</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[12px] items-start overflow-clip relative shrink-0 w-full">
      <div className="bg-[#111] relative rounded-[4px] shrink-0" data-name="Atom/Button">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[24px] py-[14px] relative size-full">
            <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[13px] text-white tracking-[0.26px] uppercase whitespace-nowrap">📞 APPELER LE BAR</p>
          </div>
        </div>
      </div>
      <AtomButton />
    </div>
  );
}

function Frame11() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start px-[16px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[#111] text-[14px] text-center whitespace-nowrap">{`NOUS TROUVER & NOUS ÉCRIRE`}</p>
          <p className="[word-break:break-word] font-['Druk_Wide_Medium:Medium',sans-serif] leading-[1.1] not-italic relative shrink-0 text-[20px] text-black text-center uppercase whitespace-nowrap">CONTACT</p>
          <Frame12 />
        </div>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-center p-[10px] relative size-full">
          <PinAltDuotoneLine className="relative shrink-0 size-[24px]" />
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] min-w-px not-italic relative text-[14px] text-black">
            <p className="leading-[1.4]">Place des Landais, 40150 Hossegor</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-center p-[10px] relative size-full">
          <TimeDuotoneLine className="relative shrink-0 size-[24px]" />
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px not-italic relative text-[14px] text-black">
            <p className="leading-[1.4]">Du lundi au dimanche - 10h / 2h</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-center p-[10px] relative size-full">
          <MapDuotoneLine className="relative shrink-0 size-[24px]" />
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px not-italic relative text-[14px] text-black">
            <p className="leading-[1.4]">Privilégie le parking de la Centrale tôt le matin ou viens directement à vélo.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[16px] py-[10px] relative size-full">
          <Frame15 />
          <Frame16 />
          <Frame17 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#111] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame13() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[16px] relative size-full">
          <Frame14 />
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
    <div className="h-[160px] relative rounded-[8px] shrink-0 w-[361px]" data-name="Map/Container">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgMapContainer} />
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute h-[500px] left-[-296px] top-[40px] w-[966px]" data-name="image 1" />
        <MarkersSpotlightMarker />
      </div>
      <div aria-hidden className="absolute border border-[#5c5c5c] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame18() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start px-[16px] py-[10px] relative size-full">
          <MapContainer />
        </div>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip px-[16px] relative shrink-0 w-[393px]">
      <CardFaq className="bg-[#f9f9f6] relative rounded-[8px] shrink-0 w-full" question="Peut-on réserver une table le soir ?" />
      <CardFaq className="bg-[#f9f9f6] relative rounded-[8px] shrink-0 w-full" question="Acceptez-vous les animaux en terrasse ?" />
      <CardFaq className="bg-[#f9f9f6] relative rounded-[8px] shrink-0 w-full" question="Quels sont les moyens de paiement acceptés ?" />
    </div>
  );
}

function MarkersSpotlightMarker1() {
  return <div className="absolute h-[43px] left-[108px] top-[64px] w-[27px]" data-name="Markers / Spotlight Marker" />;
}

function MapContainer1() {
  return (
    <div className="h-[160px] relative rounded-[8px] shrink-0 w-full" data-name="Map/Container">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgMapContainer} />
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute h-[500px] left-[-296px] top-[40px] w-[966px]" data-name="image 1" />
        <MarkersSpotlightMarker1 />
      </div>
      <div aria-hidden className="absolute border border-[#5c5c5c] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame5() {
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

function Frame6() {
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
      <Frame5 />
      <Frame6 />
    </div>
  );
}

function Frame7() {
  return <div className="bg-[#2d2d2d] h-px relative shrink-0 w-full" />;
}

function Frame9() {
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
          <Frame8 className="bg-[#0a0a0b] col-1 h-[48px] relative row-1 shrink-0 w-[162.5px]" />
          <Frame9 />
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-[#0a0a0b] relative shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start px-[16px] py-[32px] relative size-full">
          <MapContainer1 />
          <FooterInfos />
          <Frame7 />
          <FooterBottom />
        </div>
      </div>
    </div>
  );
}

export default function ContactDay() {
  return (
    <div className="bg-[#f9f9f6] content-stretch flex flex-col gap-[40px] items-start pt-[50px] relative size-full" data-name="Contact — Day">
      <Header className="bg-[#f9f9f6] relative shrink-0 w-full" />
      <Frame10 />
      <Frame11 />
      <Frame13 />
      <Frame18 />
      <Frame19 />
      <Frame4 />
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