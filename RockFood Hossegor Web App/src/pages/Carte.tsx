import { useRef, useState, useMemo, useEffect } from 'react'
import { useTheme } from '../context/ThemeContext'
import { useLanguage } from '../context/LanguageContext'
import Footer from '../components/Footer'

type DietTag = 'veg' | 'seafood' | 'gf'

const TAG_ICONS: Record<DietTag, string> = { veg: '🌱', seafood: '🐟', gf: '🌾' }

// ─── MENU API ─────────────────────────────────────────────────────────────────

const MENU_API = 'https://opensheet.elk.sh/16Y_1gEeRKrxkdIKhg8uXVJi6K9WoLX4pwUUhemKKC4Q/Carte'

interface ApiMenuItem {
  category: string
  name: string
  description?: string
  price: string
  tags?: string
  mode?: string  // 'RESTO' | 'NUIT' | 'BOTH'
}

function parseTags(raw?: string): DietTag[] {
  if (!raw) return []
  return raw.split(',').map(s => s.trim()).filter((s): s is DietTag => ['veg', 'seafood', 'gf'].includes(s))
}

interface PricePair { label: string; price: string }

function parseMultiPrice(raw: string | undefined): PricePair[] | null {
  if (!raw || !raw.includes('/')) return null
  const segments = raw.split('/').map(s => s.trim()).filter(Boolean)
  const pairs: PricePair[] = []
  for (const seg of segments) {
    const colonIdx = seg.lastIndexOf(':')
    if (colonIdx !== -1) {
      const label = seg.slice(0, colonIdx).trim()
      const price = seg.slice(colonIdx + 1).trim()
      if (label && price) { pairs.push({ label, price }); continue }
    }
    // No colon — treat whole segment as a label-only entry (unlikely but safe)
    pairs.push({ label: seg, price: '' })
  }
  return pairs.length >= 2 ? pairs : null
}

const CATEGORY_ORDER = ['SALADES', 'BURGERS', 'BURGERS & VIANDES', 'POISSONS', 'MOULES & POISSONS', 'DESSERTS', 'DESSERTS & GLACES']
const NIGHT_CATEGORY_ORDER = ['COCKTAILS', 'COCKTAILS & MOCKTAILS', 'MOCKTAILS', 'SANS ALCOOL', 'TAPAS', 'TAPAS & PLANCHES', 'PLANCHES', 'BIERES', 'PRESSIONS', 'BOUTEILLES', 'BIÈRES & VINS', 'VINS ROUGES', 'VINS ROSÉS', 'VINS BLANCS', 'CHAMPAGNES & BULLES', 'CHAMPAGNES']

const CATEGORY_LABEL_MAP: Record<string, string> = {
  // Day
  'SALADES': 'cat_salades',
  'BURGERS': 'cat_burgers',
  'BURGERS & VIANDES': 'cat_burgers',
  'POISSONS': 'cat_poissons',
  'MOULES & POISSONS': 'cat_poissons',
  'DESSERTS': 'cat_desserts',
  'DESSERTS & GLACES': 'cat_desserts',
  'BOISSONS': 'cat_boissons',
  // Night
  'COCKTAILS': 'cat_cocktails',
  'COCKTAILS & MOCKTAILS': 'cat_cocktails',
  'MOCKTAILS': 'sans_alcool',
  'SANS ALCOOL': 'sans_alcool',
  'TAPAS': 'cat_tapas',
  'TAPAS & PLANCHES': 'cat_tapas',
  'PLANCHES': 'planches',
}

function sortByCategoryOrder(cats: string[], order: string[]): string[] {
  return [...cats].sort((a, b) => {
    const ia = order.indexOf(a), ib = order.indexOf(b)
    if (ia === -1 && ib === -1) return 0
    if (ia === -1) return 1
    if (ib === -1) return -1
    return ia - ib
  })
}

function groupByCategory(items: ApiMenuItem[]): Record<string, ApiMenuItem[]> {
  return items.reduce<Record<string, ApiMenuItem[]>>((acc, item) => {
    ;(acc[item.category] ??= []).push(item)
    return acc
  }, {})
}


function MenuSkeleton({ night = false }: { night?: boolean }) {
  const itemBg = night ? 'bg-[#1E1E24] border-[#2D2D2D]' : 'bg-white border-[#E0E0E0]'
  const barBg = night ? 'bg-[#2D2D2D]' : 'bg-[#E8E8E4]'
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      {[1, 2, 3, 4].map(i => (
        <div key={i} className={`rounded-[8px] border p-3 flex items-start gap-3 animate-pulse ${itemBg}`}>
          <div className="flex-1 flex flex-col gap-2">
            <div className={`h-4 w-1/3 rounded ${barBg}`} />
            <div className={`h-3 w-2/3 rounded ${barBg}`} />
          </div>
          <div className={`h-5 w-10 rounded ${barBg} shrink-0`} />
        </div>
      ))}
    </div>
  )
}

type TaggedItem = { name: string; desc?: string; price: string; tags: DietTag[] }

// ─── COMPONENT ────────────────────────────────────────────────────────────────

export default function Carte() {
  const { theme } = useTheme()
  const { t } = useLanguage()
  const isNight = theme === 'night'

  // ── Menu API state ─────────────────────────────────────────────────────────
  const [menuItems, setMenuItems] = useState<ApiMenuItem[] | null>(null)
  const [menuLoading, setMenuLoading] = useState(true)
  const [menuError, setMenuError] = useState(false)

  useEffect(() => {
    let cancelled = false
    setMenuLoading(true)
    fetch(MENU_API)
      .then(r => { if (!r.ok) throw new Error(); return r.json() })
      .then((d: ApiMenuItem[]) => { if (!cancelled) { setMenuItems(d); setMenuLoading(false) } })
      .catch(() => { if (!cancelled) { setMenuError(true); setMenuLoading(false) } })
    return () => { cancelled = true }
  }, [])

  // ── Filter by mode, group by category ─────────────────────────────────────
  const dayGroups = useMemo(() => {
    const items = (menuItems ?? []).filter(i => {
      const m = (i.mode ?? 'RESTO').toUpperCase()
      return m === 'RESTO' || m === 'BOTH'
    })
    return groupByCategory(items)
  }, [menuItems])

  const nightGroups = useMemo(() => {
    const items = (menuItems ?? []).filter(i => {
      const m = (i.mode ?? '').toUpperCase()
      return m === 'NUIT' || m === 'BOTH'
    })
    return groupByCategory(items)
  }, [menuItems])

  // Ordered category lists (BIERES excluded — always hardcoded)
  const apiDayCategories = useMemo(() =>
    sortByCategoryOrder(Object.keys(dayGroups).filter(c => c !== 'BOISSONS'), CATEGORY_ORDER),
    [dayGroups]
  )
  const apiNightCategories = useMemo(() =>
    sortByCategoryOrder(Object.keys(nightGroups).filter(c => c !== 'BIERES'), NIGHT_CATEGORY_ORDER),
    [nightGroups]
  )

  const getCatLabel = (cat: string) => {
    const key = CATEGORY_LABEL_MAP[cat]
    return key ? t(key) : cat
  }

  // ── Navigation / filter state ──────────────────────────────────────────────
  const [activeDayPill, setActiveDayPill] = useState<string>('')
  const [activeNightPill, setActiveNightPill] = useState<string>('BIERES')
  const [dietFilter, setDietFilter] = useState<DietTag | null>(null)

  // Reset diet filter on mode switch; init first pill once API data arrives
  useEffect(() => { setDietFilter(null) }, [isNight])
  useEffect(() => {
    if (apiDayCategories.length > 0 && !activeDayPill) setActiveDayPill(apiDayCategories[0])
  }, [apiDayCategories, activeDayPill])
  useEffect(() => {
    if (apiNightCategories.length > 0) setActiveNightPill(apiNightCategories[0])
  }, [apiNightCategories])

  const daySectionRefs = useRef<Record<string, HTMLElement | null>>({})
  const nightSectionRefs = useRef<Record<string, HTMLElement | null>>({})

  const scrollTo = (refs: React.MutableRefObject<Record<string, HTMLElement | null>>, key: string) => {
    const el = refs.current[key]
    if (!el) return
    const offset = 118 + 50 + 12
    const top = el.getBoundingClientRect().top + window.scrollY - offset
    window.scrollTo({ top, behavior: 'smooth' })
  }

  const bg = isNight ? 'bg-[#0A0A0B]' : 'bg-[#F9F9F6]'
  const text = isNight ? 'text-white' : 'text-black'
  const textSub = isNight ? 'text-[#A0A0A0]' : 'text-[#555]'
  const accentText = isNight ? 'text-[#FF007A]' : 'text-[#111]'
  const cardBg = isNight ? 'bg-[#1E1E24] border-[#2D2D2D] neon-card' : 'bg-white border-[#E0E0E0]'
  const pillBg = isNight ? 'bg-[#1E1E24] border-[#2D2D2D] text-[#A0A0A0]' : 'bg-white border-[#E0E0E0] text-[#555]'
  const pillActive = isNight ? 'bg-[#FF007A] border-[#FF007A] text-white' : 'bg-[#111] border-[#111] text-white'
  const headerBg = isNight ? 'bg-[#0A0A0B]' : 'bg-[#F9F9F6]'
  const divider = isNight ? 'border-[#2D2D2D]' : 'border-[#E8E8E4]'
  const dietPillActive = isNight ? 'bg-[#FF007A] border-[#FF007A] text-white shadow-[0_0_8px_rgba(255,0,122,0.4)]' : 'bg-[#111] border-[#111] text-white'
  const dietPillInactive = isNight ? 'bg-[#1E1E24] border-[#2D2D2D] text-[#A0A0A0]' : 'bg-white border-[#E0E0E0] text-[#555]'

  const DIET_FILTERS: { tag: DietTag; labelKey: string }[] = [
    { tag: 'veg', labelKey: 'filter_veg' },
    { tag: 'seafood', labelKey: 'filter_seafood' },
    { tag: 'gf', labelKey: 'filter_gf' },
  ]

  const itemVisible = (tags: DietTag[]) => !dietFilter || tags.includes(dietFilter)

  return (
    <div className={`${bg} min-h-screen transition-colors duration-300`}>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[118px]">

        {/* Page title */}
        <div className="py-6">
          <p className={`text-[11px] uppercase tracking-[0.08em] mb-1 ${textSub}`} style={{ fontFamily: "'Inter', sans-serif" }}>
            {t('consultation_only')}
          </p>
          <h1
            className={`text-[30px] uppercase leading-none ${text}`}
            style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900 }}
          >
            {isNight ? t('carte_title_night') : t('carte_title_day')}
          </h1>
          <p className={`text-[13px] mt-1 ${textSub}`} style={{ fontFamily: "'Inter', sans-serif" }}>
            {isNight ? t('carte_subtitle_night') : t('carte_subtitle_day')}
          </p>
        </div>

        {/* ─── DAY MODE ─────────────────────────────────────────────── */}
        {!isNight && (
          <div key="day" className="mode-fade-in">
            {/* Category pills — derived from API + static BOISSONS */}
            <div className={`sticky top-[118px] z-30 ${headerBg} border-b ${divider}`}>
              <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-center flex-wrap gap-3">
                {(menuLoading ? ['...'] : [...apiDayCategories, ...(dayGroups['BOISSONS'] ? ['BOISSONS'] : [])]).map(cat => (
                  <button
                    key={cat}
                    onClick={() => { setActiveDayPill(cat); scrollTo(daySectionRefs, cat) }}
                    disabled={menuLoading}
                    className={`shrink-0 h-8 px-4 rounded-full border text-[12px] uppercase tracking-[0.04em] transition-all ${menuLoading ? 'opacity-40 cursor-default border-[#E0E0E0] text-[#AAA]' : activeDayPill === cat ? pillActive : pillBg}`}
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {menuLoading ? '·····' : getCatLabel(cat)}
                  </button>
                ))}
              </div>
            </div>

            {/* Dietary filter bar */}
            <div className={`py-2 flex justify-center flex-wrap gap-2 border-b ${divider}`}>
              <button
                onClick={() => setDietFilter(null)}
                className={`shrink-0 h-7 px-3 rounded-full border text-[11px] tracking-[0.03em] transition-all ${!dietFilter ? dietPillActive : dietPillInactive}`}
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {t('filter_all')}
              </button>
              {DIET_FILTERS.map(({ tag, labelKey }) => (
                <button
                  key={tag}
                  onClick={() => setDietFilter(dietFilter === tag ? null : tag)}
                  className={`shrink-0 h-7 px-3 rounded-full border text-[11px] tracking-[0.03em] transition-all flex items-center gap-1 ${dietFilter === tag ? dietPillActive : dietPillInactive}`}
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {TAG_ICONS[tag]} {t(labelKey)}
                </button>
              ))}
            </div>

            <div className="py-6 flex flex-col gap-10">

              {/* ── API-driven food sections ── */}
              {menuLoading ? (
                <>
                  <div>
                    <div className="h-6 w-32 rounded bg-[#E8E8E4] animate-pulse mb-4" />
                    <MenuSkeleton />
                  </div>
                  <div>
                    <div className="h-6 w-40 rounded bg-[#E8E8E4] animate-pulse mb-4" />
                    <MenuSkeleton />
                  </div>
                </>
              ) : menuError ? (
                <p className={`text-[13px] py-4 ${textSub}`} style={{ fontFamily: "'Inter', sans-serif" }}>
                  Impossible de charger la carte. Veuillez réessayer.
                </p>
              ) : (
                [...apiDayCategories, ...(dayGroups['BOISSONS'] ? ['BOISSONS'] : [])].map(cat => {
                  const items = (dayGroups[cat] ?? []).map((i: ApiMenuItem) => ({
                    name: i.name,
                    desc: i.description,
                    price: i.price,
                    tags: parseTags(i.tags),
                  }))
                  if (items.length === 0) return null
                  return (
                    <section
                      key={cat}
                      ref={el => { daySectionRefs.current[cat] = el }}
                      id={`section-${cat}`}
                      style={{ scrollMarginTop: 180 }}
                    >
                      <SectionTitle label={getCatLabel(cat)} text={text} />
                      <TaggedItemList items={items} text={text} textSub={textSub} accentText={accentText} cardBg={cardBg} dietFilter={dietFilter} />
                    </section>
                  )
                })
              )}

            </div>
          </div>
        )}

        {/* ─── NIGHT MODE ───────────────────────────────────────────── */}
        {isNight && (
          <div key="night" className="mode-fade-in">
            {/* Category pills — fully API-driven */}
            <div className={`sticky top-[118px] z-30 ${headerBg} border-b ${divider}`}>
              <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-center flex-wrap gap-3">
                {(menuLoading ? ['...'] : apiNightCategories).map(cat => (
                  <button
                    key={cat}
                    onClick={() => { setActiveNightPill(cat); scrollTo(nightSectionRefs, cat) }}
                    disabled={menuLoading}
                    className={`shrink-0 h-8 px-4 rounded-full border text-[12px] uppercase tracking-[0.04em] transition-all ${menuLoading ? 'opacity-40 cursor-default border-[#2D2D2D] text-[#555]' : activeNightPill === cat ? pillActive : pillBg}`}
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {menuLoading ? '·····' : getCatLabel(cat)}
                  </button>
                ))}
              </div>
            </div>

            {/* Dietary filter bar */}
            <div className={`py-2 flex justify-center flex-wrap gap-2 border-b ${divider}`}>
              <button
                onClick={() => setDietFilter(null)}
                className={`shrink-0 h-7 px-3 rounded-full border text-[11px] tracking-[0.03em] transition-all ${!dietFilter ? dietPillActive : dietPillInactive}`}
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {t('filter_all')}
              </button>
              {DIET_FILTERS.map(({ tag, labelKey }) => (
                <button
                  key={tag}
                  onClick={() => setDietFilter(dietFilter === tag ? null : tag)}
                  className={`shrink-0 h-7 px-3 rounded-full border text-[11px] tracking-[0.03em] transition-all flex items-center gap-1 ${dietFilter === tag ? dietPillActive : dietPillInactive}`}
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {TAG_ICONS[tag]} {t(labelKey)}
                </button>
              ))}
            </div>

            <div className="py-6 flex flex-col gap-10">

              {/* ── API-driven night sections (COCKTAILS, TAPAS, etc.) ── */}
              {menuLoading ? (
                <>
                  <div>
                    <div className="h-6 w-40 rounded bg-[#2D2D2D] animate-pulse mb-4" />
                    <MenuSkeleton night />
                  </div>
                  <div>
                    <div className="h-6 w-32 rounded bg-[#2D2D2D] animate-pulse mb-4" />
                    <MenuSkeleton night />
                  </div>
                </>
              ) : menuError ? (
                <p className="text-[13px] py-4 text-[#A0A0A0]" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Impossible de charger la carte. Veuillez réessayer.
                </p>
              ) : (
                apiNightCategories.map(cat => {
                  const items = (nightGroups[cat] ?? []).map(i => ({
                    name: i.name,
                    desc: i.description,
                    price: i.price,
                    tags: parseTags(i.tags),
                  }))
                  return (
                    <section
                      key={cat}
                      ref={el => { nightSectionRefs.current[cat] = el }}
                      id={`section-${cat}`}
                      style={{ scrollMarginTop: 180 }}
                    >
                      <SectionTitle label={getCatLabel(cat)} text={text} nightAccent />
                      <TaggedItemList
                        items={items}
                        text={text}
                        textSub={textSub}
                        accentText={accentText}
                        cardBg={cardBg}
                        dietFilter={dietFilter}
                        isNight
                      />
                    </section>
                  )
                })
              )}

            </div>
          </div>
        )}

        <Footer />
      </div>
    </div>
  )
}

// ─── SUB-COMPONENTS ───────────────────────────────────────────────────────────

function SectionTitle({ label, text, nightAccent }: { label: string; text: string; nightAccent?: boolean }) {
  return (
    <h2
      className={`text-[22px] uppercase leading-none mb-4 ${nightAccent ? 'text-white' : text}`}
      style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900 }}
    >
      {label}
    </h2>
  )
}

function TaggedItemList({
  items, text, textSub, accentText, cardBg, dietFilter, isNight,
}: {
  items: TaggedItem[]
  text: string
  textSub: string
  accentText: string
  cardBg: string
  dietFilter: DietTag | null
  isNight?: boolean
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      {items.map((item, i) => {
        const visible = !dietFilter || item.tags.includes(dietFilter)
        return (
          <div
            key={i}
            className={`rounded-[8px] border p-3 flex items-start gap-3 transition-opacity duration-200 ${cardBg} ${visible ? 'opacity-100' : 'opacity-20 pointer-events-none'}`}
          >
            {(() => {
              const multiPrice = parseMultiPrice(item.price) ?? parseMultiPrice(item.desc ?? '')
              return (
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <p className={`text-[14px] font-bold leading-[1.4] ${isNight ? 'text-white' : text}`} style={{ fontFamily: "'Inter', sans-serif" }}>
                        {item.name}
                      </p>
                      {item.tags.map(tag => (
                        <span key={tag} className="text-[12px] leading-none">{TAG_ICONS[tag]}</span>
                      ))}
                    </div>
                    {!multiPrice && (
                      <span
                        className={`text-[14px] font-bold shrink-0 ${isNight ? 'text-[#FF007A] neon-price' : accentText}`}
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {item.price}
                      </span>
                    )}
                  </div>
                  {item.desc && !multiPrice && (
                    <p className={`text-[12px] leading-[1.4] mt-0.5 ${isNight ? 'text-[#A0A0A0]' : textSub}`} style={{ fontFamily: "'Inter', sans-serif" }}>
                      {item.desc}
                    </p>
                  )}
                  {multiPrice && (
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {multiPrice.map((pair, j) => (
                        <span
                          key={j}
                          className={`inline-flex items-center gap-1 px-2 py-1 rounded-[5px] text-[12px] font-medium border ${
                            isNight
                              ? 'bg-[#2A2A32] border-[rgba(255,0,122,0.35)] text-[#E0E0E0]'
                              : 'bg-[#F5F5F7] border-[#E0E0E0] text-[#333]'
                          }`}
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          <span className={isNight ? 'text-[#A0A0A0]' : 'text-[#777]'}>{pair.label}</span>
                          {pair.price && (
                            <>
                              <span className={isNight ? 'text-[#2D2D2D]' : 'text-[#CCC]'}>·</span>
                              <span className={isNight ? 'text-[#FF007A]' : accentText}>{pair.price}</span>
                            </>
                          )}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              )
            })()}
          </div>
        )
      })}
    </div>
  )
}
