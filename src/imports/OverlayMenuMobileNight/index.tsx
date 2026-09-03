import svgPaths from "./svg-6c8r4xywac";

function Frame3() {
  return (
    <a className="content-stretch flex flex-col h-[40px] items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Old_London:Regular',sans-serif] leading-[1.1] not-italic relative shrink-0 text-[20px] text-left text-white uppercase whitespace-nowrap">Rock food</p>
    </a>
  );
}

function CloseRound() {
  return <div className="relative shrink-0 size-[24px]" data-name="Close_round" />;
}

function Frame1() {
  return (
    <button className="content-stretch flex items-center justify-center relative shrink-0 size-[40px]">
      <CloseRound />
    </button>
  );
}

function Header() {
  return (
    <div className="bg-[#0a0a0b] content-stretch cursor-pointer flex items-center justify-between overflow-clip px-[16px] py-[12px] relative shrink-0 w-[393px]" data-name="Header">
      <Frame3 />
      <Frame1 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="[word-break:break-word] content-stretch flex flex-col font-['Druk_Wide_Medium:Medium',sans-serif] gap-[24px] items-center justify-center not-italic p-[10px] relative size-full text-[20px] text-center text-white uppercase whitespace-nowrap">
          <a className="block cursor-pointer leading-[0] relative shrink-0">
            <p className="leading-[1.1]">ACCUEIL</p>
          </a>
          <a className="block cursor-pointer leading-[0] relative shrink-0">
            <p className="leading-[1.1]">La carte</p>
          </a>
          <p className="leading-[1.1] relative shrink-0">Le shop</p>
          <a className="block cursor-pointer leading-[0] relative shrink-0">
            <p className="leading-[1.1]">L’adn rockfood</p>
          </a>
          <a className="block cursor-pointer leading-[0] relative shrink-0">
            <p className="leading-[1.1]">contact</p>
          </a>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Druk_Wide_Medium:Medium',sans-serif] leading-[1.1] not-italic relative shrink-0 text-[10px] text-white uppercase whitespace-nowrap">OUVERT</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[40px] items-center overflow-clip p-[10px] relative shrink-0">
      <a className="block cursor-pointer overflow-clip relative shrink-0 size-[40px]" href="https://www.instagram.com/rockfoodhossegor/?hl=fr" target="_blank" data-name="Social Icons">
        <div className="absolute inset-[0_0.06%_0.02%_0]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="39.9922" preserveAspectRatio="none" viewBox="0 0 39.9766 39.9922" width="39.9766">
            <path d={svgPaths.p2562b100} fill="white" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[24.32%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="20.5469" preserveAspectRatio="none" viewBox="0 0 20.5469 20.5469" width="20.5469">
            <path d={svgPaths.p2ba9da00} fill="white" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[17.3%_17.3%_70.7%_70.7%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="4.79688" preserveAspectRatio="none" viewBox="0 0 4.79687 4.79688" width="4.79687">
            <path d={svgPaths.p2334f000} fill="white" id="Vector" />
          </svg>
        </div>
      </a>
      <div className="overflow-clip relative shrink-0 size-[40px]" data-name="Social Icons">
        <div className="absolute inset-[0_0_0.37%_0]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="39.8536" preserveAspectRatio="none" viewBox="0 0 40.0008 39.8536" width="40.0008">
            <path d={svgPaths.p2f1f8900} fill="white" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="drop-shadow-[0px_0px_6px_rgba(0,0,0,0.25)] relative shrink-0 size-[40px]" data-name="Social Icons">
        <div className="absolute inset-[0_0.31%_0.31%_0]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="39.8769" preserveAspectRatio="none" viewBox="0 0 39.8779 39.8769" width="39.8779">
            <path d={svgPaths.p2647e2f0} fill="white" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function OverlayMenuMobileNight() {
  return (
    <div className="bg-[#0a0a0b] content-stretch flex flex-col gap-[40px] items-center pb-[10px] pt-[50px] relative size-full" data-name="Overlay / Menu Mobile — Night">
      <Header />
      <Frame4 />
      <div className="relative shrink-0" data-name="Atom/LiveStatus">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center relative size-full">
            <div className="relative shrink-0 size-[8px]">
              <svg className="absolute block inset-0 size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 8 8" width="8">
                <circle cx="4" cy="4" fill="#00FF66" id="Ellipse 1" r="4" />
              </svg>
            </div>
            <Frame />
          </div>
        </div>
      </div>
      <Frame2 />
    </div>
  );
}