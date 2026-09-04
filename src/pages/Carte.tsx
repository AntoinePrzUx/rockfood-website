import { useRef, useState, useMemo, useEffect } from 'react'
import { useTheme } from '../context/ThemeContext'
import { useLanguage } from '../context/LanguageContext'
import Footer from '../components/Footer'

type DietTag = 'veg' | 'seafood' | 'gf'

const TAG_ICONS: Record<DietTag, string> = { veg: '🌱', seafood: '🐟', gf: '🌾' }

const MENU_API = 'https://opensheet.elk.sh/16Y_1gEeRKrxkdIKhg8uXVJi6K9WoLX4pwUUhemKKC4Q/Carte'

interface ApiMenuItem {
  category: string
  name: string
  description?: string
  price: string
  tags?: string
  mode?: string
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
    pairs.push({ label: seg, price: '' })
  }
  return pairs.length >= 2 ? pairs : null
}

const CATEGORY_ORDER = ['SALADES', 'BURGERS', 'BURGERS & VIANDES', 'POISSONS', 'MOULES & POISSONS', 'DESSERTS', 'DESSERTS & GLACES']
const NIGHT_CATEGORY_ORDER = ['COCKTAILS', 'COCKTAILS & MOCKTAILS', 'MOCKTAILS', 'SANS ALCOOL', 'TAPAS', 'TAPAS & PLANCHES', 'PLANCHES', 'BIERES', 'PRESSIONS', 'BOUTEILLES', 'BIÈRES & VINS', 'VINS ROUGES', 'VINS ROSÉS', 'VINS BLANCS', 'CHAMPAGNES & BULLES', 'CHAMPAGNES']

const CATEGORY_LABEL_MAP: Record<string, string> = {
  'SALADES': 'cat_salades', 'BURGERS': 'cat_burgers', 'BURGERS & VIANDES': 'cat_burgers', 'POISSONS': 'cat_poissons', 'MOULES & POISSONS': 'cat_poissons', 'DESSERTS': 'cat_desserts', 'DESSERTS & GLACES': 'cat_desserts', 'BOISSONS': 'cat_boissons',
  'COCKTAILS': 'cat_cocktails', 'COCKTAILS & MOCKTAILS': 'cat_cocktails', 'MOCKTAILS': 'sans_alcool', 'SANS ALCOOL': 'sans_alcool', 'TAPAS': 'cat_tapas', 'TAPAS & PLANCHES': 'cat_tapas', 'PLANCHES': 'planches',
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
          <div className="flex-1 flex flex-col gap-2"><div className={`h-4 w-1/3 rounded ${barBg}`} /><div className={`h-3 w-2/3 rounded ${barBg}`} /></div>
          <div className={`h-5 w-10 rounded ${barBg} shrink-0`} />
        </div>
      ))}
    </div>
  )
}

type TaggedItem = { name: string; desc?: string; price: string; tags: DietTag[] }

export default function Carte() {
  const { theme } = useTheme()
  const { t, lang } = useLanguage()
  const isNight = theme === 'night'

  const [menuItems, setMenuItems] = useState<ApiMenuItem[] | null>(null)
  const [menuLoading, setMenuLoading] = useState(true)
  const [menuError, setMenuError] = useState(false)

  // NOUVEAU : State pour la recherche
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    let cancelled = false
    setMenuLoading(true)
    fetch(MENU_API)
      .then(r => { if (!r.ok) throw new Error(); return r.json() })
      .then((d: ApiMenuItem[]) => { if (!cancelled) { setMenuItems(d); setMenuLoading(false) } })
      .catch(() => { if (!cancelled) { setMenuError(true); setMenuLoading(false) } })
    return () => { cancelled = true }
  }, [])

  const dayGroups = useMemo(() => {
    const items = (menuItems ?? []).filter(i => { const m = (i.mode ?? 'RESTO').toUpperCase(); return m === 'RESTO' || m === 'BOTH' })
    return groupByCategory(items)
  }, [menuItems])

  const nightGroups = useMemo(() => {
    const items = (menuItems ?? []).filter(i => { const m = (i.mode ?? '').toUpperCase(); return m === 'NUIT' || m === 'BOTH' })
    return groupByCategory(items)
  }, [menuItems])

  const apiDayCategories = useMemo(() => sortByCategoryOrder(Object.keys(dayGroups).filter(c => c !== 'BOISSONS'), CATEGORY_ORDER), [dayGroups])
  const apiNightCategories = useMemo(() => sortByCategoryOrder(Object.keys(nightGroups).filter(c => c !== 'BIERES'), NIGHT_CATEGORY_ORDER), [nightGroups])

  const getCatLabel = (cat: string) => { const key = CATEGORY_LABEL_MAP[cat]; return key ? t(key) : cat }

  const [activeDayPill, setActiveDayPill] = useState<string>('')
  const [activeNightPill, setActiveNightPill] = useState<string>('BIERES')
  const [dietFilter, setDietFilter] = useState<DietTag | null>(null)

  useEffect(() => { setDietFilter(null); setSearchQuery('') }, [isNight])
  useEffect(() => { if (apiDayCategories.length > 0 && !activeDayPill) setActiveDayPill(apiDayCategories[0]) }, [apiDayCategories, activeDayPill])
  useEffect(() => { if (apiNightCategories.length > 0) setActiveNightPill(apiNightCategories[0]) }, [apiNightCategories])

  const daySectionRefs = useRef<Record<string, HTMLElement | null>>({})
  const nightSectionRefs = useRef<Record<string, HTMLElement | null>>({})

  const scrollTo = (refs: React.MutableRefObject<Record<string, HTMLElement | null>>, key: string) => {
    const el = refs.current[key]; if (!el) return
    const top = el.getBoundingClientRect().top + window.scrollY - 180
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

  const DIET_FILTERS: { tag: DietTag; labelKey: string }[] = [{ tag: 'veg', labelKey: 'filter_veg' }, { tag: 'seafood', labelKey: 'filter_seafood' }, { tag: 'gf', labelKey: 'filter_gf' }]

  // Fonction de filtrage globale (Diet + Recherche)
  const filterItems = (items: ApiMenuItem[]) => {
    return items.filter(item => {
      const tags = parseTags(item.tags)
      const matchDiet = !dietFilter || tags.includes(dietFilter)
      const q = searchQuery.toLowerCase()
      const matchSearch = !searchQuery || item.name.toLowerCase().includes(q) || (item.description && item.description.toLowerCase().includes(q))
      return matchDiet && matchSearch
    }).map(i => ({ name: i.name, desc: i.description, price: i.price, tags: parseTags(i.tags) }))
  }

  return (
    <div className={`${bg} min-h-screen transition-colors duration-300`}>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[118px]">

        <div className="py-6">
          <p className={`text-[11px] uppercase tracking-[0.08em] mb-1 ${textSub}`} style={{ fontFamily: "'Inter', sans-serif" }}>{t('consultation_only')}</p>
          <h1 className={`text-[30px] uppercase leading-none ${text}`} style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900 }}>
            {isNight ? t('carte_title_night') : t('carte_title_day')}
          </h1>
        </div>

        {/* ─── DAY MODE ─── */}
        {!isNight && (
          <div key="day" className="mode-fade-in">
            <div className={`sticky top-[118px] z-30 ${headerBg} border-b ${divider}`}>
              <div className="w-full max-w-7xl mx-auto px-4 py-3 flex justify-start md:justify-center overflow-x-auto md:overflow-visible md:flex-wrap gap-3 [&::-webkit-scrollbar]:hidden">
                {(menuLoading ? ['...'] : [...apiDayCategories, ...(dayGroups['BOISSONS'] ? ['BOISSONS'] : [])]).map(cat => (
                  <button key={cat} onClick={() => { setActiveDayPill(cat); scrollTo(daySectionRefs, cat) }} className={`shrink-0 whitespace-nowrap h-8 px-4 rounded-full border text-[12px] uppercase tracking-[0.04em] transition-all ${activeDayPill === cat ? pillActive : pillBg}`} style={{ fontFamily: "'Inter', sans-serif" }}>
                    {getCatLabel(cat)}
                  </button>
                ))}
              </div>
            </div>

            <div className={`py-3 flex flex-col items-center gap-3 border-b ${divider}`}>
              {/* NOUVEAU : Barre de recherche */}
              <input
                type="text"
                placeholder={lang === 'en' ? "Search a dish..." : "Rechercher un plat, une boisson..."}
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className={`w-full max-w-md px-4 py-2 rounded-full border text-[13px] outline-none transition-all ${isNight ? 'bg-[#1E1E24] border-[#2D2D2D] text-white focus:border-[#FF007A]' : 'bg-[#F5F5F7] border-[#E0E0E0] text-black focus:border-black'}`}
                style={{ fontFamily: "'Inter', sans-serif" }}
              />
              <div className="flex justify-start md:justify-center overflow-x-auto md:flex-wrap gap-2 w-full [&::-webkit-scrollbar]:hidden">
                <button onClick={() => setDietFilter(null)} className={`shrink-0 h-7 px-3 rounded-full border text-[11px] tracking-[0.03em] ${!dietFilter ? dietPillActive : dietPillInactive}`}>{t('filter_all')}</button>
                {DIET_FILTERS.map(({ tag, labelKey }) => (
                  <button key={tag} onClick={() => setDietFilter(dietFilter === tag ? null : tag)} className={`shrink-0 h-7 px-3 rounded-full border text-[11px] tracking-[0.03em] flex items-center gap-1 ${dietFilter === tag ? dietPillActive : dietPillInactive}`}>{TAG_ICONS[tag]} {t(labelKey)}</button>
                ))}
              </div>
            </div>

            <div className="py-6 flex flex-col gap-10">
              {menuLoading ? <MenuSkeleton /> : (
                [...apiDayCategories, ...(dayGroups['BOISSONS'] ? ['BOISSONS'] : [])].map(cat => {
                  const filtered = filterItems(dayGroups[cat] ?? [])
                  if (filtered.length === 0) return null // Cache la catégorie si aucun résultat
                  return (
                    <section key={cat} ref={el => { daySectionRefs.current[cat] = el }} id={`section-${cat}`} style={{ scrollMarginTop: 180 }}>
                      <SectionTitle label={getCatLabel(cat)} text={text} />
                      <TaggedItemList items={filtered} text={text} textSub={textSub} accentText={accentText} cardBg={cardBg} isNight={isNight} />
                    </section>
                  )
                })
              )}
            </div>
          </div>
        )}

        {/* ─── NIGHT MODE ─── */}
        {isNight && (
          <div key="night" className="mode-fade-in">
            <div className={`sticky top-[118px] z-30 ${headerBg} border-b ${divider}`}>
              <div className="w-full max-w-7xl mx-auto px-4 py-3 flex justify-start md:justify-center overflow-x-auto md:overflow-visible md:flex-wrap gap-3 [&::-webkit-scrollbar]:hidden">
                {(menuLoading ? ['...'] : apiNightCategories).map(cat => (
                  <button key={cat} onClick={() => { setActiveNightPill(cat); scrollTo(nightSectionRefs, cat) }} className={`shrink-0 whitespace-nowrap h-8 px-4 rounded-full border text-[12px] uppercase tracking-[0.04em] transition-all ${activeNightPill === cat ? pillActive : pillBg}`} style={{ fontFamily: "'Inter', sans-serif" }}>
                    {getCatLabel(cat)}
                  </button>
                ))}
              </div>
            </div>

            <div className={`py-3 flex flex-col items-center gap-3 border-b ${divider}`}>
              {/* NOUVEAU : Barre de recherche */}
              <input
                type="text"
                placeholder={lang === 'en' ? "Search a cocktail..." : "Rechercher un cocktail, tapas..."}
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className={`w-full max-w-md px-4 py-2 rounded-full border text-[13px] outline-none transition-all ${isNight ? 'bg-[#1E1E24] border-[#2D2D2D] text-white focus:border-[#FF007A]' : 'bg-[#F5F5F7] border-[#E0E0E0] text-black focus:border-black'}`}
                style={{ fontFamily: "'Inter', sans-serif" }}
              />
              <div className="flex justify-start md:justify-center overflow-x-auto md:flex-wrap gap-2 w-full [&::-webkit-scrollbar]:hidden">
                <button onClick={() => setDietFilter(null)} className={`shrink-0 h-7 px-3 rounded-full border text-[11px] tracking-[0.03em] ${!dietFilter ? dietPillActive : dietPillInactive}`}>{t('filter_all')}</button>
                {DIET_FILTERS.map(({ tag, labelKey }) => (
                  <button key={tag} onClick={() => setDietFilter(dietFilter === tag ? null : tag)} className={`shrink-0 h-7 px-3 rounded-full border text-[11px] tracking-[0.03em] flex items-center gap-1 ${dietFilter === tag ? dietPillActive : dietPillInactive}`}>{TAG_ICONS[tag]} {t(labelKey)}</button>
                ))}
              </div>
            </div>

            <div className="py-6 flex flex-col gap-10">
              {menuLoading ? <MenuSkeleton night /> : (
                apiNightCategories.map(cat => {
                  const filtered = filterItems(nightGroups[cat] ?? [])
                  if (filtered.length === 0) return null // Cache la catégorie si aucun résultat
                  return (
                    <section key={cat} ref={el => { nightSectionRefs.current[cat] = el }} id={`section-${cat}`} style={{ scrollMarginTop: 180 }}>
                      <SectionTitle label={getCatLabel(cat)} text={text} nightAccent />
                      <TaggedItemList items={filtered} text={text} textSub={textSub} accentText={accentText} cardBg={cardBg} isNight />
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

function SectionTitle({ label, text, nightAccent }: { label: string; text: string; nightAccent?: boolean }) {
  return <h2 className={`text-[22px] uppercase leading-none mb-4 ${nightAccent ? 'text-white' : text}`} style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900 }}>{label}</h2>
}

function TaggedItemList({ items, text, textSub, accentText, cardBg, isNight }: { items: TaggedItem[]; text: string; textSub: string; accentText: string; cardBg: string; isNight?: boolean }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      {items.map((item, i) => {
        const multiPrice = parseMultiPrice(item.price) ?? parseMultiPrice(item.desc ?? '')
        return (
          <div key={i} className={`rounded-[8px] border p-3 flex items-start gap-3 transition-opacity duration-200 ${cardBg} opacity-100`}>
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <p className={`text-[14px] font-bold leading-[1.4] ${isNight ? 'text-white' : text}`} style={{ fontFamily: "'Inter', sans-serif" }}>{item.name}</p>
                  {item.tags.map(tag => <span key={tag} className="text-[12px] leading-none">{TAG_ICONS[tag]}</span>)}
                </div>
                {!multiPrice && <span className={`text-[14px] font-bold shrink-0 ${isNight ? 'text-[#FF007A] neon-price' : accentText}`} style={{ fontFamily: "'Inter', sans-serif" }}>{item.price}</span>}
              </div>
              {item.desc && !multiPrice && <p className={`text-[12px] leading-[1.4] mt-0.5 ${isNight ? 'text-[#A0A0A0]' : textSub}`} style={{ fontFamily: "'Inter', sans-serif" }}>{item.desc}</p>}
              {multiPrice && (
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {multiPrice.map((pair, j) => (
                    <span key={j} className={`inline-flex items-center gap-1 px-2 py-1 rounded-[5px] text-[12px] font-medium border ${isNight ? 'bg-[#2A2A32] border-[rgba(255,0,122,0.35)] text-[#E0E0E0]' : 'bg-[#F5F5F7] border-[#E0E0E0] text-[#333]'}`} style={{ fontFamily: "'Inter', sans-serif" }}>
                      <span className={isNight ? 'text-[#A0A0A0]' : 'text-[#777]'}>{pair.label}</span>
                      {pair.price && <><span className={isNight ? 'text-[#2D2D2D]' : 'text-[#CCC]'}>·</span><span className={isNight ? 'text-[#FF007A]' : accentText}>{pair.price}</span></>}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}
