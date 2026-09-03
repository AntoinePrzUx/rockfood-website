import { createContext, useContext, useState } from 'react'

export type Lang = 'fr' | 'en'

interface LanguageContextValue {
  lang: Lang
  setLang: (l: Lang) => void
  t: (key: string) => string
}

const TRANSLATIONS: Record<string, Record<Lang, string>> = {
  // ── Theme toggle ──────────────────────────────────────────────────────
  'cote_resto': { fr: 'Côté Resto', en: 'Resto Mode' },
  'cote_nuit': { fr: 'Côté Nuit', en: 'Night Mode' },

  // ── Live status ───────────────────────────────────────────────────────
  'ouvert': { fr: 'OUVERT', en: 'OPEN' },
  'ferme': { fr: 'FERMÉ', en: 'CLOSED' },

  // ── Navigation ────────────────────────────────────────────────────────
  'accueil': { fr: 'ACCUEIL', en: 'HOME' },
  'la_carte': { fr: 'LA CARTE', en: 'MENU' },
  'adn': { fr: "L'ADN ROCKFOOD", en: 'OUR STORY' },
  'contact': { fr: 'CONTACT', en: 'CONTACT & LOCATION' },
  'evenements': { fr: 'ÉVÉNEMENTS', en: 'EVENTS' },

  // ── Landing ───────────────────────────────────────────────────────────
  'voir_la_carte': { fr: 'VOIR LA CARTE', en: 'VIEW MENU' },
  'sy_rendre': { fr: "S'Y RENDRE", en: 'GET DIRECTIONS' },
  'events_section_title': { fr: 'ÉVÉNEMENTS & DJ SETS', en: 'EVENTS & DJ SETS' },
  'voir_tous_events': { fr: 'DÉCOUVRIR TOUS LES ÉVÉNEMENTS', en: 'VIEW ALL EVENTS' },

  // ── Carte page ────────────────────────────────────────────────────────
  'carte_title_day': { fr: 'LA CARTE', en: 'MENU' },
  'carte_title_night': { fr: 'CÔTÉ NUIT', en: 'NIGHT MENU' },
  'carte_subtitle_day': { fr: 'Good Spot — Resto & Déjeuner', en: 'Good Spot — Food & Lunch' },
  'carte_subtitle_night': { fr: 'Bad Habits — Bar & Soirées', en: 'Bad Habits — Bar & Nights' },
  'consultation_only': { fr: 'CONSULTATION UNIQUEMENT', en: 'MENU ONLY — NO ORDER' },

  // ── Day categories ────────────────────────────────────────────────────
  'cat_salades': { fr: 'SALADES', en: 'SALADS' },
  'cat_burgers': { fr: 'BURGERS & VIANDES', en: 'BURGERS & MEATS' },
  'cat_poissons': { fr: 'MOULES & POISSONS', en: 'MUSSELS & FISH' },
  'cat_desserts': { fr: 'DESSERTS & GLACES', en: 'DESSERTS & ICE CREAMS' },
  'cat_boissons': { fr: 'BOISSONS', en: 'DRINKS' },

  // ── Night categories ──────────────────────────────────────────────────
  'cat_cocktails': { fr: 'COCKTAILS & MOCKTAILS', en: 'COCKTAILS & MOCKTAILS' },
  'cat_tapas': { fr: 'TAPAS & PLANCHES', en: 'TAPAS & PLATTERS' },
  'cat_bieres': { fr: 'BIÈRES & VINS', en: 'BEERS, CIDERS & WINE' },

  // ── Dietary filters ───────────────────────────────────────────────────
  'filter_all': { fr: 'Tout', en: 'All' },
  'filter_veg': { fr: 'Végétarien', en: 'Vegetarian' },
  'filter_seafood': { fr: 'Poissons & Mer', en: 'Seafood' },
  'filter_gf': { fr: 'Sans Gluten', en: 'Gluten-Free' },

  // ── Carte misc ────────────────────────────────────────────────────────
  'supplements': { fr: 'Suppléments', en: 'Extras' },
  'ice_cream': { fr: 'Glaces Artisanales — Mon Petit Glacier', en: 'Artisan Ice Cream — Mon Petit Glacier' },
  'cold_drinks': { fr: 'Froides', en: 'Cold' },
  'hot_drinks': { fr: 'Chaudes', en: 'Hot' },
  'pressions': { fr: 'Pressions', en: 'Draft Beers' },
  'bouteilles': { fr: 'Bières & Cidres Bouteilles', en: 'Bottled Beers & Ciders' },
  'picon': { fr: 'Supplément Picon : 0,5€', en: 'Picon add-on: 0.5€' },
  'vins_roses': { fr: 'Vins Rosés', en: 'Rosé Wines' },
  'vins_blancs': { fr: 'Vins Blancs', en: 'White Wines' },
  'vins_rouges': { fr: 'Vins Rouges', en: 'Red Wines' },
  'champagnes': { fr: 'Champagnes & Bulles', en: 'Champagne & Bubbles' },
  'sans_alcool': { fr: 'Sans Alcool', en: 'Non-Alcoholic' },
  'planches': { fr: 'Planches à partager', en: 'Sharing Platters' },

  // ── Wine / beer table columns ─────────────────────────────────────────
  'col_verre': { fr: 'Verre', en: 'Glass' },
  'col_bouteille': { fr: 'Bouteille', en: 'Bottle' },
  'col_pichet': { fr: 'Pichet', en: 'Pitcher' },
  'col_girafe': { fr: 'Girafe', en: 'Giraffe' },
  'col_biere': { fr: 'Bière', en: 'Beer' },

  // ── Contact page ──────────────────────────────────────────────────────
  'contact_overline': { fr: 'NOUS TROUVER & NOUS ÉCRIRE', en: 'FIND US & WRITE TO US' },
  'appeler_bar': { fr: 'APPELER LE BAR', en: 'CALL THE BAR' },
  'horaires_detail': { fr: 'Du lundi au dimanche - 10h / 2h', en: 'Monday to Sunday - 10am / 2am' },
  'parking_tip': { fr: 'Privilégie le parking de la Centrale tôt le matin ou viens directement à vélo.', en: 'Use the Central beach parking early morning or come directly by bike.' },
  'map_badge': { fr: 'ITINÉRAIRE', en: 'DIRECTIONS' },
  'maps_modal_title': { fr: "Ouvrir l'itinéraire avec", en: 'Open directions with' },
  'annuler': { fr: 'Annuler', en: 'Cancel' },
  'faq_title': { fr: 'FAQ', en: 'FAQ' },

  // ── Events page ───────────────────────────────────────────────────────
  'prochain_event': { fr: 'PROCHAIN ÉVÉNEMENT', en: 'NEXT EVENT' },
  'agenda': { fr: 'AGENDA', en: 'LINEUP' },
  'djs_residents': { fr: 'DJS RÉSIDENTS', en: 'RESIDENT DJS' },
  'filter_tous': { fr: 'TOUS', en: 'ALL' },
  'filter_evenement_type': { fr: 'ÉVÉNEMENT', en: 'EVENT' },

  // ── ADN page ──────────────────────────────────────────────────────────
  'adn_overline': { fr: 'GOOD SPOT • BAD HABITS SINCE 1990', en: 'GOOD SPOT • BAD HABITS SINCE 1990' },
  'adn_histoire_title': { fr: "L'HISTOIRE DEPUIS LE DÉBUT", en: 'THE STORY FROM THE START' },
  'adn_p1': {
    fr: "Né en 1990 place des Landais à Hossegor, le Rock Food est devenu le repère mythique de la culture surf locale. Il incarne l'esprit rock, la convivialité et la passion partagée de l'océan.",
    en: 'Born in 1990 on Place des Landais in Hossegor, Rock Food became the mythical hub of local surf culture. It embodies the rock spirit, conviviality and the shared passion for the ocean.',
  },
  'adn_p2': {
    fr: "Véritable QG des locaux et des champions du monde, le Rock Food bat au rythme de la culture surf. On s'y rassemble après chaque session pour célébrer l'esprit de glisse.",
    en: 'A true headquarters for locals and world champions alike, Rock Food beats to the rhythm of surf culture. People gather here after every session to celebrate the spirit of the wave.',
  },
  'spotify_tracks_label': { fr: '120 titres • Surf Rock, Indie & Synthwave', en: '120 tracks • Surf Rock, Indie & Synthwave' },

  // ── Footer ────────────────────────────────────────────────────────────
  'footer_horaires': { fr: '7j/7 • 10h00 — 02h00', en: '7 days a week • 10:00 AM — 02:00 AM' },
  'mentions_legales': { fr: 'Mentions Légales', en: 'Legal Mentions' },
  'confidentialite': { fr: 'Confidentialité', en: 'Privacy Policy' },
  'gerer_cookies': { fr: 'Gérer les cookies', en: 'Manage Cookies' },
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: 'fr',
  setLang: () => {},
  t: (k) => k,
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('fr')

  const t = (key: string): string => {
    const entry = TRANSLATIONS[key]
    if (!entry) return key
    return entry[lang]
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
