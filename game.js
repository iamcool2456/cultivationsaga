import * as THREE from 'three'
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js'

// ============================================================================
// CULTIVATION SAGA - Button-Only Cultivation RPG
// ============================================================================

// ============================================================================
// BLOODLINE DATA (50 TOTAL)
// ============================================================================
const BLOODLINES = [
  { name: 'Mortal', weight: 8, qiMult: 1.10, hpMult: 1.10, strMult: 1.10, tier: 5 },
  { name: 'Commoner', weight: 7, qiMult: 1.20, hpMult: 1.20, strMult: 1.20, tier: 5 },
  { name: 'Farmhand', weight: 6, qiMult: 1.25, hpMult: 1.25, strMult: 1.25, tier: 5 },
  { name: "Merchant's Line", weight: 5, qiMult: 1.30, hpMult: 1.30, strMult: 1.30, tier: 5 },
  { name: "Demon's Guard Line", weight: 5, qiMult: 1.35, hpMult: 1.35, strMult: 1.35, tier: 5 },
  { name: 'Hunter', weight: 4, qiMult: 1.40, hpMult: 1.40, strMult: 1.40, tier: 5 },
  { name: "Scholar's Line", weight: 4, qiMult: 1.45, hpMult: 1.45, strMult: 1.45, tier: 5 },
  { name: 'Craftsman', weight: 3, qiMult: 1.50, hpMult: 1.50, strMult: 1.50, tier: 5 },
  { name: 'Minor Noble', weight: 3, qiMult: 1.55, hpMult: 1.55, strMult: 1.55, tier: 5 },
  { name: 'Demonic Retainer Line', weight: 3, qiMult: 1.60, hpMult: 1.60, strMult: 1.60, tier: 5 },
  
  { name: 'Martial Apprentice', weight: 5, qiMult: 1.23, hpMult: 1.22, strMult: 1.22, tier: 4 },
  { name: 'Traveling Monk', weight: 5, qiMult: 1.26, hpMult: 1.25, strMult: 1.25, tier: 4 },
  { name: 'Eastern Line', weight: 4, qiMult: 1.29, hpMult: 1.28, strMult: 1.28, tier: 4 },
  { name: 'Forest Kin', weight: 4, qiMult: 1.33, hpMult: 1.31, strMult: 1.32, tier: 4 },
  { name: 'Desert Line', weight: 4, qiMult: 1.37, hpMult: 1.35, strMult: 1.36, tier: 4 },
  { name: 'River Clan', weight: 3.5, qiMult: 1.41, hpMult: 1.39, strMult: 1.40, tier: 4 },
  { name: 'Mountain Kin', weight: 3.5, qiMult: 1.46, hpMult: 1.44, strMult: 1.45, tier: 4 },
  { name: 'Mystic Apprentice', weight: 3, qiMult: 1.51, hpMult: 1.48, strMult: 1.50, tier: 4 },
  { name: 'Spiritual Line', weight: 3, qiMult: 1.56, hpMult: 1.53, strMult: 1.55, tier: 4 },
  { name: 'Hidden Sect Descendant', weight: 3, qiMult: 1.62, hpMult: 1.59, strMult: 1.61, tier: 4 },
  
  { name: 'Shadow Line', weight: 3, qiMult: 1.68, hpMult: 1.65, strMult: 1.67, tier: 3 },
  { name: 'Demonwater Line', weight: 3, qiMult: 1.74, hpMult: 1.71, strMult: 1.73, tier: 3 },
  { name: 'Star Kin', weight: 2.8, qiMult: 1.81, hpMult: 1.78, strMult: 1.80, tier: 3 },
  { name: 'Demon Thunder Line', weight: 2.6, qiMult: 1.88, hpMult: 1.85, strMult: 1.87, tier: 3 },
  { name: 'Iron Line', weight: 2.4, qiMult: 1.96, hpMult: 1.92, strMult: 1.95, tier: 3 },
  { name: 'Thunder Line', weight: 2.2, qiMult: 2.05, hpMult: 2.01, strMult: 2.03, tier: 3 },
  { name: 'Jade Kin', weight: 2, qiMult: 2.14, hpMult: 2.10, strMult: 2.12, tier: 3 },
  { name: 'Azure Line', weight: 1.8, qiMult: 2.24, hpMult: 2.20, strMult: 2.22, tier: 3 },
  { name: 'Tiger Line', weight: 1.6, qiMult: 2.35, hpMult: 2.31, strMult: 2.33, tier: 3 },
  { name: 'Crane Line', weight: 1.5, qiMult: 2.47, hpMult: 2.42, strMult: 2.45, tier: 3 },
  
  { name: 'Phoenix Line', weight: 2, qiMult: 2.60, hpMult: 2.55, strMult: 2.57, tier: 2 },
  { name: 'Celestial Line', weight: 1.8, qiMult: 2.74, hpMult: 2.69, strMult: 2.71, tier: 2 },
  { name: 'Dragonborn Line', weight: 1.6, qiMult: 2.89, hpMult: 2.83, strMult: 2.86, tier: 2 },
  { name: 'Serpent Line', weight: 1.4, qiMult: 3.05, hpMult: 2.99, strMult: 3.02, tier: 2 },
  { name: 'Spirit Wolf Line', weight: 1.2, qiMult: 10, hpMult: 9, strMult: 9.5, tier: 2 },
  { name: 'Demonic Crusader Line', weight: 1, qiMult: 14, hpMult: 11, strMult: 11, tier: 2 },
  { name: 'Demonic Line', weight: 0.9, qiMult: 16, hpMult: 13, strMult: 13, tier: 2 },
  { name: 'Spirit Tiger Line', weight: 0.8, qiMult: 18, hpMult: 15, strMult: 16, tier: 2 },
  { name: 'Sky Demon Serpent Line', weight: 0.7, qiMult: 30, hpMult: 25, strMult: 27, tier: 2 },
  { name: 'Star Dragon Line', weight: 0.6, qiMult: 50, hpMult: 42, strMult: 45, tier: 2 },
  
  { name: 'Moon Demon Tiger Line', weight: 1, qiMult: 80, hpMult: 65, strMult: 70, tier: 1 },
  { name: 'Sun Phoenix Line', weight: 0.9, qiMult: 120, hpMult: 95, strMult: 100, tier: 1 },
  { name: 'Cosmic Demon Dragon Line', weight: 0.8, qiMult: 180, hpMult: 145, strMult: 150, tier: 1 },
  { name: 'Celestial Demon Tiger Line', weight: 0.7, qiMult: 230, hpMult: 185, strMult: 200, tier: 1 },
  { name: 'Heavenly Phoenix Line', weight: 0.6, qiMult: 270, hpMult: 210, strMult: 225, tier: 1 },
  { name: 'Star Serpent Line', weight: 0.5, qiMult: 300, hpMult: 235, strMult: 250, tier: 1 },
  { name: 'Eternal Dragon Line', weight: 0.4, qiMult: 320, hpMult: 250, strMult: 270, tier: 1 },
  { name: 'Supreme Celestial Line', weight: 0.3, qiMult: 330, hpMult: 260, strMult: 280, tier: 1 },
  { name: 'Primordial Demon Dragon Line', weight: 0.2, qiMult: 340, hpMult: 265, strMult: 290, tier: 1 },
  { name: 'Immortal Celestial Dragon Cultivator', weight: 0.1, qiMult: 350, hpMult: 270, strMult: 300, tier: 1 },
  
  { name: "Primordial Immortal's Bloodline", weight: 0.5, qiMult: 1400, hpMult: 1080, strMult: 1200, tier: 0 }
]

// Fill these in with your own descriptions. They will show in the Farming header.
const BLOODLINE_LORE = {
  'Mortal': 'A human born without an awakened bloodline. Their fate is unmarked by lineage.',
  'Commoner': 'A widespread bloodline found among ordinary people. Its history is rooted in daily survival.',
  'Farmhand': 'Descended from agricultural families tied to the land. Their blood carries generations of rural life.',
  "Merchant's Line": 'A lineage shaped by trade, travel, and exchange. Often found among caravans and market cities.',
  "Demon's Guard Line": 'Blood linked to those who once stood watch over demonic domains. Their lineage bears ancient oaths.',
  'Hunter': 'Descended from those who lived by tracking beasts. Their blood remembers wilderness and pursuit.',
  "Scholar's Line": 'A lineage associated with study and record keeping. Many descendants serve as historians or advisors.',
  'Craftsman': 'Blood passed down through builders and makers. Their lineage is tied to creation and refinement.',
  'Minor Noble': 'A diluted aristocratic bloodline. Its authority is local and often ceremonial.',
  'Demonic Retainer Line': 'Descended from servants of demonkind. Their blood carries traces of old allegiances.',

  'Martial Apprentice': 'A lineage historically trained in combat traditions. Its roots lie in martial schools.',
  'Traveling Monk': 'Blood shaped by ascetic wanderers. Their lineage reflects discipline and pilgrimage.',
  'Eastern Line': 'A bloodline originating from eastern cultivation regions. Its traditions are old and formalized.',
  'Forest Kin': 'Descended from clans living close to woodland realms. Their blood carries ties to beasts and trees.',
  'Desert Line': 'A lineage born of arid lands and endless sands. Survival shaped its culture and customs.',
  'River Clan': 'Blood tied to settlements along major waterways. Their history follows trade routes and floods.',
  'Mountain Kin': 'Descended from highland and mountain clans. Their lineage reflects isolation and endurance.',
  'Mystic Apprentice': 'A bloodline connected to early mystical study. Many ancestors served under greater masters.',
  'Spiritual Line': 'A lineage known for its association with spiritual practices. Its blood is often recorded in sect registries.',
  'Hidden Sect Descendant': 'Descended from a sect that vanished or went into secrecy. Records of their origin are fragmented.',

  'Shadow Line': 'A lineage tied to secrecy and covert traditions. Its history is poorly documented.',
  'Demonwater Line': 'Blood associated with corrupted rivers or seas. Its origins are linked to tainted environments.',
  'Star Kin': 'A lineage connected to celestial observation. Many ancestors were astrologers or sky-watchers.',
  'Demon Thunder Line': 'Blood tied to violent storms touched by demonic influence. Its origin is marked by catastrophe.',
  'Iron Line': 'Descended from clans associated with metal and fortification. Their blood is tied to industry and war.',
  'Thunder Line': 'A lineage born during eras of frequent storms. Its history is marked by natural upheaval.',
  'Jade Kin': 'Blood historically prized by cultivation sects. Its lineage appears often in ancient genealogies.',
  'Azure Line': 'A bloodline associated with the open sky and high places. Often found among wanderers and travelers.',
  'Tiger Line': 'Descended from clans that revered the tiger. Their lineage is steeped in martial symbolism.',
  'Crane Line': 'A bloodline tied to grace and ritual. Often associated with temples and high culture.',

  'Phoenix Line': 'A lineage bound to fire and renewal myths. Its history includes cycles of rise and fall.',
  'Celestial Line': 'Blood touched by heaven-aligned traditions. Its descendants are often watched by higher powers.',
  'Dragonborn Line': 'Descended from those claiming draconic ancestry. Their lineage is surrounded by legend.',
  'Serpent Line': 'A bloodline tied to serpents and ancient cults. Its history favors patience and secrecy.',
  'Spirit Wolf Line': 'Descended from clans bonded to wolf spirits. Their lineage values unity and survival.',
  'Demonic Crusader Line': 'Blood tied to wars against demonkind. Their history is written in conflict and zeal.',
  'Demonic Line': 'A lineage of true demonic origin. Its existence is often contested or feared.',
  'Spirit Tiger Line': 'A spiritual offshoot of tiger-revering clans. Their blood mixes reverence and spirit lore.',
  'Sky Demon Serpent Line': 'A rare lineage blending demonic serpents and the heavens. Its origins are heavily mythologized.',
  'Star Dragon Line': 'Blood said to descend from dragons of the night sky. Its history is recorded in star charts.',

  'Moon Demon Tiger Line': 'A lineage bound to lunar cycles and demonic rites. Its rituals are rarely shared.',
  'Sun Phoenix Line': 'Blood tied to solar myths and phoenix legends. Its records speak of fire and rebirth.',
  'Cosmic Demon Dragon Line': 'A lineage born from cosmic calamity and demonkind. Its existence challenges natural order.',
  'Celestial Demon Tiger Line': 'Blood shaped by both heaven and demon realms. Its history reflects internal contradiction.',
  'Heavenly Phoenix Line': 'A divine-adjacent phoenix lineage. Its name appears in sacred texts.',
  'Star Serpent Line': 'Blood tied to astral serpents and fate myths. Its genealogy follows constellations.',
  'Eternal Dragon Line': 'A lineage associated with timeless dragons. Its ancestry spans multiple eras.',
  'Supreme Celestial Line': 'Blood close to the highest heavens. Its descendants are rare and closely observed.',
  'Primordial Demon Dragon Line': 'A lineage predating structured realms. Its records are fragmented and forbidden.',
  'Immortal Celestial Dragon Cultivator': 'A perfected bloodline formed through ascension. Its bearer exists beyond mortal classification.',

  "Primordial Immortal's Bloodline": 'Blood from the earliest age of existence. Its origin lies before recorded history.'
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function stripTradeoffLines(text) {
  const raw = String(text || '')
  if (!raw.trim()) return ''
  const lines = raw.split(/\r?\n/)
  const kept = lines.filter(l => !/^\s*Tradeoff\s*:/i.test(String(l || '')))
  return kept.join('\n').replace(/\n{3,}/g, '\n\n').trim()
}

function renderUiIcon(name, opts = {}) {
  const n = String(name || '')
  const size = Number.isFinite(opts.size) ? opts.size : 24
  const title = (opts.title != null) ? String(opts.title) : ''
  const titleId = title ? `uiicon_${n.replace(/[^a-z0-9]+/gi, '_')}_${Math.floor(Math.random() * 1e9)}` : ''
  const a11y = title ? `role="img" aria-labelledby="${titleId}"` : 'aria-hidden="true"'

  const common = `class="ui-inline-icon" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ${a11y}`
  const withTitle = (body) => `
    <svg ${common}>
      ${title ? `<title id="${titleId}">${escapeHtml(title)}</title>` : ''}
      ${body}
    </svg>
  `.trim()

  switch (n) {
    case 'stats':
      return withTitle('<path d="M4 20V10"/><path d="M10 20V4"/><path d="M16 20v-6"/><path d="M22 20V8"/>')
    case 'inventory':
      return withTitle('<path d="M21 8l-9-5-9 5 9 5 9-5Z"/><path d="M3 8v10l9 5 9-5V8"/><path d="M12 13v10"/>')
    case 'actions':
      return withTitle('<path d="M13 2L3 14h8l-1 8 10-12h-8l1-8Z"/>')
    case 'profile':
      return withTitle('<path d="M20 21a8 8 0 0 0-16 0"/><circle cx="12" cy="8" r="4"/>')
    case 'sect':
      return withTitle('<path d="M4 10l8-6 8 6"/><path d="M6 10v10"/><path d="M18 10v10"/><path d="M9 20v-6h6v6"/>')
    case 'quests':
      return withTitle('<path d="M7 3h10v4H7z"/><path d="M6 7h12v14H6z"/><path d="M9 11h6"/><path d="M9 15h6"/>')
    case 'moves':
      return withTitle('<path d="M14 3l7 7-3 3-7-7 3-3Z"/><path d="M2 21l7-7"/><path d="M6 18l-3 3"/>')
    case 'shop':
      return withTitle('<path d="M6 7l2-4h8l2 4"/><path d="M4 7h16l-1 14H5L4 7Z"/><path d="M9 11v0"/><path d="M15 11v0"/>')
    case 'settings':
      return withTitle('<path d="M12 1l1.5 2.6 3-.2 1.2 2.8 2.7 1.1-.9 2.9 1.9 2.4-1.9 2.4.9 2.9-2.7 1.1-1.2 2.8-3-.2L12 23l-1.5-2.6-3 .2-1.2-2.8-2.7-1.1.9-2.9L2.6 12 4.5 9.6l-.9-2.9 2.7-1.1 1.2-2.8 3 .2L12 1Z"/><circle cx="12" cy="12" r="3"/>')
    case 'flag':
      return withTitle('<path d="M5 3v18"/><path d="M5 4h11l-1.5 3L16 10H5"/>')
    case 'dice':
      return withTitle('<rect x="4" y="4" width="16" height="16" rx="3"/><path d="M9 9h.01"/><path d="M15 9h.01"/><path d="M12 12h.01"/><path d="M9 15h.01"/><path d="M15 15h.01"/>')
    case 'spark':
      return withTitle('<path d="M12 2l1.6 5.2L19 9l-5.4 1.8L12 16l-1.6-5.2L5 9l5.4-1.8L12 2Z"/>')
    default:
      return withTitle('<circle cx="12" cy="12" r="9"/><path d="M12 7v0"/><path d="M12 11v6"/>')
  }
}

function getAffinityAssetIconSrc(affinityType) {
  const type = String(affinityType || '').toLowerCase().replace(/\s+/g, '')
  if (!type) return ''
  return `assets/${type}.png`
}

function getBloodlineLore(name) {
  const raw = BLOODLINE_LORE[name] || ''
  if (!raw) return ''
  return escapeHtml(raw).replace(/\n/g, '<br>')
}

function hashStringToInt(s) {
  let h = 2166136261
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  return h >>> 0
}

function mulberry32(seed) {
  let a = seed >>> 0
  return function() {
    a |= 0
    a = (a + 0x6D2B79F5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

function renderBloodlinePortrait(name) {
  // Deterministic, unique clan crest per bloodline name.
  // No faces. Sharp/ink-like lines.
  const seed = hashStringToInt(String(name || ''))
  const rnd = mulberry32(seed)

  const stroke = 3.1
  const common = `fill="none" stroke="currentColor" stroke-width="${stroke}" stroke-linecap="square" stroke-linejoin="miter"`
  const thin = `fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="square" stroke-linejoin="miter" opacity="0.9"`
  const faint = `fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="square" stroke-linejoin="miter" opacity="0.65"`

  const borderType = Math.floor(rnd() * 5)
  const coreType = Math.floor(rnd() * 8)
  const runeCount = 2 + Math.floor(rnd() * 4)
  const notch = rnd() > 0.5
  const innerRing = rnd() > 0.25

  const border = (() => {
    switch (borderType) {
      case 0:
        return `
          <circle cx="32" cy="32" r="25" ${common} />
          ${innerRing ? `<circle cx="32" cy="32" r="20" ${faint} />` : ''}
        `
      case 1:
        return `
          <path d="M32 8 L52 18 V34 C52 47 42 55 32 56 C22 55 12 47 12 34 V18 Z" ${common} />
          ${innerRing ? `<path d="M32 14 L46 20 V33 C46 42 39 48 32 49 C25 48 18 42 18 33 V20 Z" ${faint} />` : ''}
        `
      case 2:
        return `
          <path d="M32 7 L53 19 L53 45 L32 57 L11 45 L11 19 Z" ${common} />
          ${innerRing ? `<path d="M32 13 L47 22 L47 42 L32 51 L17 42 L17 22 Z" ${faint} />` : ''}
        `
      case 3:
        return `
          <path d="M32 8 L54 32 L32 56 L10 32 Z" ${common} />
          ${innerRing ? `<path d="M32 16 L46 32 L32 48 L18 32 Z" ${faint} />` : ''}
        `
      default:
        return `
          <path d="M18 12 H46 L54 22 V42 L46 52 H18 L10 42 V22 Z" ${common} />
          ${innerRing ? `<path d="M22 18 H42 L48 25 V39 L42 46 H22 L16 39 V25 Z" ${faint} />` : ''}
        `
    }
  })()

  const core = (() => {
    switch (coreType) {
      case 0:
        return `<path d="M32 16 L40 30 L56 32 L40 34 L32 48 L24 34 L8 32 L24 30 Z" ${thin} />`
      case 1:
        return `<path d="M20 44 L32 16 L44 44 Z" ${thin} />\n<path d="M22 40 H42" ${faint} />`
      case 2:
        return `<path d="M20 24 H44" ${thin} />\n<path d="M24 24 V44" ${thin} />\n<path d="M40 24 V44" ${thin} />\n<path d="M24 44 H40" ${thin} />`
      case 3:
        return `<path d="M18 34 C22 22 30 18 40 18 C46 18 50 22 50 28 C50 40 34 38 34 46 C34 50 40 52 46 50" ${thin} />`
      case 4:
        return `<path d="M32 16 V48" ${thin} />\n<path d="M20 26 H44" ${faint} />\n<path d="M22 20 L32 16 L42 20" ${faint} />\n<path d="M24 48 L32 40 L40 48" ${faint} />`
      case 5:
        return `<path d="M18 40 C20 28 26 22 32 20 C38 22 44 28 46 40" ${thin} />\n<path d="M24 40 C26 32 29 28 32 27 C35 28 38 32 40 40" ${faint} />`
      case 6:
        return `<path d="M32 18 L46 26 L46 42 L32 50 L18 42 L18 26 Z" ${thin} />\n<path d="M32 22 L40 28 V40 L32 46 L24 40 V28 Z" ${faint} />`
      default:
        return `<path d="M22 22 L42 42" ${thin} />\n<path d="M42 22 L22 42" ${thin} />\n<path d="M18 32 H46" ${faint} />\n<path d="M32 18 V46" ${faint} />`
    }
  })()

  const runes = Array.from({ length: runeCount }).map((_, i) => {
    const a = (i / runeCount) * Math.PI * 2
    const r1 = 17.5 + rnd() * 2
    const r2 = 21.5 + rnd() * 2
    const x1 = 32 + Math.cos(a) * r1
    const y1 = 32 + Math.sin(a) * r1
    const x2 = 32 + Math.cos(a) * r2
    const y2 = 32 + Math.sin(a) * r2
    return `<path d="M${x1.toFixed(2)} ${y1.toFixed(2)} L${x2.toFixed(2)} ${y2.toFixed(2)}" ${faint} />`
  }).join('\n')

  const notchMarks = notch
    ? `<path d="M12 32 H18" ${faint} />\n<path d="M46 32 H52" ${faint} />\n<path d="M32 12 V18" ${faint} />\n<path d="M32 46 V52" ${faint} />`
    : ''

  return `
    <svg class="bloodline-portrait" viewBox="0 0 64 64" role="img" aria-label="Bloodline Crest">
      ${border}
      ${notchMarks}
      ${runes}
      ${core}
    </svg>
  `.trim()
}

// Ensure multipliers are always strictly improving in the displayed list order.
// This prevents cases where adjacent bloodlines feel like "no upgrade".
{
  const minStep = 0.01
  let prevQi = 0
  let prevHp = 0
  let prevStr = 0

  const roundSmall = (v) => {
    if (!Number.isFinite(v)) return v
    if (Math.abs(v) >= 10) return v
    return Math.round(v * 100) / 100
  }

  for (const b of BLOODLINES) {
    if (Number.isFinite(b.qiMult) && b.qiMult < prevQi + minStep) b.qiMult = prevQi + minStep
    if (Number.isFinite(b.hpMult) && b.hpMult < prevHp + minStep) b.hpMult = prevHp + minStep
    if (Number.isFinite(b.strMult) && b.strMult < prevStr + minStep) b.strMult = prevStr + minStep

    b.qiMult = roundSmall(b.qiMult)
    b.hpMult = roundSmall(b.hpMult)
    b.strMult = roundSmall(b.strMult)

    prevQi = Number.isFinite(b.qiMult) ? b.qiMult : prevQi
    prevHp = Number.isFinite(b.hpMult) ? b.hpMult : prevHp
    prevStr = Number.isFinite(b.strMult) ? b.strMult : prevStr
  }
}

// Rarity multipliers by tier (lower tier number = better bloodline).
// Note: tiers 3-5 are left unchanged; only the higher-end tiers get rarer.
const BLOODLINE_TIER_WEIGHT_MULT = {
  5: 1,
  4: 1,
  3: 1,
  // Make high tiers meaningfully rarer early; rebirth luck upgrades can offset this.
  2: 0.4,
  1: 0.2,
  0: 0.06
}

function getBloodlineWeightMultiplier(tier) {
  return BLOODLINE_TIER_WEIGHT_MULT[tier] ?? 1
}

// ============================================================================
// SPIRITUAL ROOTS DATA
// ============================================================================
const SPIRITUAL_ROOTS = [
  { count: 1, weight: 68, qiMult: 2.0 },
  { count: 2, weight: 21, qiMult: 3.2 },
  { count: 3, weight: 6.5, qiMult: 5.8 },
  { count: 4, weight: 2.3, qiMult: 8.3 },
  { count: 5, weight: 0.9, qiMult: 12.8 },
  { count: 6, weight: 0.35, qiMult: 17.0 },
  { count: 7, weight: 0.15, qiMult: 22.0 },
  { count: 8, weight: 0.06, qiMult: 28.0 },
  { count: 9, weight: 0.025, qiMult: 36.0 },
  { count: 10, weight: 0.01, qiMult: 46.0 }
]

// ============================================================================
// AFFINITY DATA
// ============================================================================
const AFFINITIES = [
  'Fire', 'Decay', 'Sound', 'Water', 'Ice', 'Space', 'Earth', 
  'Cloud', 'Air', 'Black Hole', 'Grass', 'Thunder', 'Poison', 'Sickness'
]

// Affinity count roll weights (higher counts are possible, but rarer)
const AFFINITY_COUNT_WEIGHTS = [
  { count: 1, weight: 60 },
  { count: 2, weight: 25 },
  { count: 3, weight: 10 },
  { count: 4, weight: 4 },
  { count: 5, weight: 1 }
]

// ============================================================================
// SECT DATA
// ============================================================================
const SECTS = {
  'Fire': { name: 'Crimson Pyre Sect', icon: '' },
  'Decay': { name: 'Withering Ash Sect', icon: '' },
  'Sound': { name: 'Resonant Echo Sect', icon: '' },
  'Water': { name: 'Tideflow Pavilion', icon: '' },
  'Ice': { name: 'Frostbound Lotus Sect', icon: '' },
  'Space': { name: 'Voidstep Sect', icon: '' },
  'Earth': { name: 'Stoneheart Sect', icon: '' },
  'Cloud': { name: 'Cloud Sect', icon: '' },
  'Air': { name: 'Galespirit Sect', icon: '' },
  'Black Hole': { name: 'Singularity Abyss Sect', icon: '' },
  'Grass': { name: 'Verdant Bloom Sect', icon: '' },
  'Thunder': { name: 'Heavenclap Sect', icon: '' },
  'Poison': { name: 'Venomshade Sect', icon: '' },
  'Sickness': { name: 'Pale Omen Sect', icon: '' },
  'Orthodox': { name: 'Orthodox Sect', icon: '' }
}

function getConqueredSectMeta(key) {
  const k = String(key || '')
  if (!k) return { name: '', icon: '' }
  if (k === 'Heavenly Demon') return { name: 'Heavenly Demon Sect', icon: '' }
  if (k === 'Demon Monarch') return { name: 'Demon Monarch Sect', icon: '' }
  const meta = SECTS[k]
  if (meta) return { name: meta.name, icon: meta.icon }
  return { name: k, icon: '' }
}

// ============================================================================
// BASIC COMBAT MOVES (always available)
// Cooldowns are in milliseconds.
// ============================================================================
const BASIC_MOVES = {
  punch: { id: 'punch', name: 'Punch', icon: '', damageMult: 1, qiCost: 0, cooldownMs: 900 },
  superPunch: { id: 'superPunch', name: 'Super Punch', icon: '', damageMult: 2, qiCost: 0, cooldownMs: 2000 }
}

// Unlocked when ANY manual is equipped. Display name changes for specific manuals.
// Combat moves are cooldown-only (no Qi costs).
const QI_BLAST_MOVE = { id: 'qiBlast', name: 'Qi Blast', icon: '⚡', damageMult: 3, qiCost: 0, cooldownMs: 3000 }

// ============================================================================
// MANUAL SPECIAL MOVES DATA
// ============================================================================
const MANUAL_MOVES = {
  'Fire': [
    { tier: 1, name: 'Flame Palm', damage: 2, qiCost: 5, cooldown: 2 },
    { tier: 5, name: 'Inferno Strike', damage: 5, qiCost: 15, cooldown: 4 },
    { tier: 10, name: 'Phoenix Rebirth', damage: 10, qiCost: 50, cooldown: 8, special: 'heal' },
    { tier: 15, name: 'Crimson Hellfire', damage: 20, qiCost: 100, cooldown: 12 },
    { tier: 20, name: 'Solar Annihilation', damage: 50, qiCost: 300, cooldown: 20 }
  ],
  'Water': [
    { tier: 1, name: 'Water Whip', damage: 1.5, qiCost: 4, cooldown: 2 },
    { tier: 5, name: 'Tidal Wave', damage: 4, qiCost: 12, cooldown: 4 },
    { tier: 10, name: 'Whirlpool Prison', damage: 8, qiCost: 40, cooldown: 7, special: 'stun' },
    { tier: 15, name: 'Tsunami Force', damage: 18, qiCost: 90, cooldown: 11 },
    { tier: 20, name: 'Ocean God Strike', damage: 45, qiCost: 280, cooldown: 18 }
  ],
  'Thunder': [
    { tier: 1, name: 'Lightning Bolt', damage: 2.5, qiCost: 6, cooldown: 2 },
    { tier: 5, name: 'Thunder Clap', damage: 6, qiCost: 18, cooldown: 4 },
    { tier: 10, name: 'Storm Fury', damage: 12, qiCost: 60, cooldown: 8 },
    { tier: 15, name: 'Heavenly Tribulation', damage: 25, qiCost: 120, cooldown: 13 },
    { tier: 20, name: 'Divine Thunder Judgment', damage: 60, qiCost: 350, cooldown: 22 }
  ],
  'Ice': [
    { tier: 1, name: 'Frost Touch', damage: 1.8, qiCost: 5, cooldown: 2, special: 'slow' },
    { tier: 5, name: 'Ice Spike', damage: 4.5, qiCost: 14, cooldown: 4 },
    { tier: 10, name: 'Frozen Domain', damage: 9, qiCost: 45, cooldown: 7 },
    { tier: 15, name: 'Glacial Prison', damage: 19, qiCost: 95, cooldown: 12 },
    { tier: 20, name: 'Absolute Zero', damage: 48, qiCost: 290, cooldown: 19 }
  ],
  'Earth': [
    { tier: 1, name: 'Stone Fist', damage: 2.2, qiCost: 5, cooldown: 2 },
    { tier: 5, name: 'Boulder Crash', damage: 5.5, qiCost: 16, cooldown: 4 },
    { tier: 10, name: 'Earthquake', damage: 11, qiCost: 55, cooldown: 8 },
    { tier: 15, name: 'Mountain Collapse', damage: 22, qiCost: 110, cooldown: 13 },
    { tier: 20, name: 'Continental Sunder', damage: 55, qiCost: 320, cooldown: 21 }
  ],
  'Poison': [
    { tier: 1, name: 'Venom Touch', damage: 1.5, qiCost: 4, cooldown: 2, special: 'dot' },
    { tier: 5, name: 'Toxic Cloud', damage: 3.5, qiCost: 11, cooldown: 4 },
    { tier: 10, name: 'Plague Strike', damage: 7, qiCost: 35, cooldown: 6 },
    { tier: 15, name: 'Deadly Miasma', damage: 16, qiCost: 85, cooldown: 10 },
    { tier: 20, name: 'Extinction Poison', damage: 40, qiCost: 260, cooldown: 17 }
  ],
  'Space': [
    { tier: 1, name: 'Void Step', damage: 2, qiCost: 6, cooldown: 2, special: 'dodge' },
    { tier: 5, name: 'Spatial Slash', damage: 5.5, qiCost: 17, cooldown: 4 },
    { tier: 10, name: 'Dimensional Rift', damage: 11, qiCost: 56, cooldown: 8 },
    { tier: 15, name: 'Reality Tear', damage: 23, qiCost: 115, cooldown: 13 },
    { tier: 20, name: 'Universe Collapse', damage: 58, qiCost: 330, cooldown: 22 }
  ],
  'Demon': [
    { tier: 1, name: 'Dark Claw', damage: 2.5, qiCost: 5, cooldown: 2 },
    { tier: 5, name: 'Soul Rend', damage: 6.5, qiCost: 19, cooldown: 4, special: 'lifesteal' },
    { tier: 10, name: 'Demon Possession', damage: 13, qiCost: 65, cooldown: 8 },
    { tier: 15, name: 'Infernal Chains', damage: 27, qiCost: 130, cooldown: 14 },
    { tier: 20, name: 'Apocalypse', damage: 70, qiCost: 380, cooldown: 24 }
  ],
  'Decay': [
    { tier: 1, name: 'Rotting Touch', damage: 1.8, qiCost: 5, cooldown: 2, special: 'dot' },
    { tier: 5, name: 'Ashen Grasp', damage: 4.5, qiCost: 14, cooldown: 4 },
    { tier: 10, name: 'Wither Bloom', damage: 9, qiCost: 45, cooldown: 7, special: 'slow' },
    { tier: 15, name: 'Gravewind', damage: 19, qiCost: 100, cooldown: 12 },
    { tier: 20, name: 'Entropy Spiral', damage: 50, qiCost: 300, cooldown: 20 }
  ],
  'Sound': [
    { tier: 1, name: 'Resonant Tap', damage: 2.0, qiCost: 5, cooldown: 2 },
    { tier: 5, name: 'Echo Slice', damage: 5.0, qiCost: 15, cooldown: 4 },
    { tier: 10, name: 'Disrupting Chime', damage: 10, qiCost: 50, cooldown: 8, special: 'stun' },
    { tier: 15, name: 'Harmonic Collapse', damage: 21, qiCost: 110, cooldown: 13 },
    { tier: 20, name: 'World-Shattering Requiem', damage: 55, qiCost: 320, cooldown: 21 }
  ],
  'Cloud': [
    { tier: 1, name: 'Mist Veil', damage: 1.7, qiCost: 5, cooldown: 2, special: 'dodge' },
    { tier: 5, name: 'Drifting Gale', damage: 4.8, qiCost: 15, cooldown: 4 },
    { tier: 10, name: 'Sky Bind', damage: 10.5, qiCost: 55, cooldown: 8, special: 'slow' },
    { tier: 15, name: 'Tempest Curtain', damage: 22, qiCost: 115, cooldown: 13 },
    { tier: 20, name: 'Celestial Cloudfall', damage: 58, qiCost: 330, cooldown: 22 }
  ],
  'Air': [
    { tier: 1, name: 'Wind Step', damage: 2.1, qiCost: 5, cooldown: 2, special: 'dodge' },
    { tier: 5, name: 'Vacuum Cut', damage: 5.4, qiCost: 16, cooldown: 4 },
    { tier: 10, name: 'Suffocating Spiral', damage: 11, qiCost: 55, cooldown: 8, special: 'slow' },
    { tier: 15, name: 'Jetstream Lance', damage: 23, qiCost: 120, cooldown: 13 },
    { tier: 20, name: 'Stormfront Sever', damage: 60, qiCost: 350, cooldown: 22 }
  ],
  'Black Hole': [
    { tier: 1, name: 'Event Horizon', damage: 2.3, qiCost: 6, cooldown: 2, special: 'slow' },
    { tier: 5, name: 'Gravity Crush', damage: 6.0, qiCost: 18, cooldown: 4 },
    { tier: 10, name: 'Singularity Grip', damage: 12, qiCost: 60, cooldown: 8, special: 'stun' },
    { tier: 15, name: 'Accretion Torrent', damage: 25, qiCost: 125, cooldown: 13 },
    { tier: 20, name: 'Total Collapse', damage: 65, qiCost: 360, cooldown: 22 }
  ],
  'Grass': [
    { tier: 1, name: 'Vine Lash', damage: 1.9, qiCost: 5, cooldown: 2 },
    { tier: 5, name: 'Thorn Barrage', damage: 4.7, qiCost: 14, cooldown: 4 },
    { tier: 10, name: 'Rejuvenating Bloom', damage: 9.5, qiCost: 50, cooldown: 8, special: 'heal' },
    { tier: 15, name: 'Ancient Grove Wrath', damage: 20, qiCost: 105, cooldown: 12 },
    { tier: 20, name: 'Verdant Overgrowth', damage: 52, qiCost: 310, cooldown: 20 }
  ],
  'Sickness': [
    { tier: 1, name: 'Fever Touch', damage: 1.7, qiCost: 5, cooldown: 2, special: 'dot' },
    { tier: 5, name: 'Contagion Breath', damage: 4.2, qiCost: 13, cooldown: 4, special: 'dot' },
    { tier: 10, name: 'Pale Omen', damage: 9.0, qiCost: 48, cooldown: 8 },
    { tier: 15, name: 'Plague Court', damage: 19.5, qiCost: 100, cooldown: 12 },
    { tier: 20, name: 'Black Death Mandate', damage: 50, qiCost: 300, cooldown: 20 }
  ],
  'Orthodox': [
    { tier: 1, name: 'Righteous Palm', damage: 2.2, qiCost: 5, cooldown: 2 },
    { tier: 5, name: 'Oathbound Strike', damage: 5.6, qiCost: 16, cooldown: 4 },
    { tier: 10, name: 'Purifying Flame', damage: 11, qiCost: 55, cooldown: 8, special: 'heal' },
    { tier: 15, name: 'Heavenly Mandate', damage: 23, qiCost: 120, cooldown: 13 },
    { tier: 20, name: 'Judgment of the Ten Thousand Laws', damage: 60, qiCost: 350, cooldown: 22 }
  ]
}

// Defensive fallback: if any affinity is missing a move list, mirror a sane generic set.
for (const affinity of AFFINITIES) {
  if (MANUAL_MOVES[affinity]) continue
  MANUAL_MOVES[affinity] = [
    { tier: 1, name: `${affinity} Strike`, damage: 2, qiCost: 5, cooldown: 2 },
    { tier: 5, name: `${affinity} Burst`, damage: 5, qiCost: 15, cooldown: 4 },
    { tier: 10, name: `${affinity} Dominance`, damage: 10, qiCost: 50, cooldown: 8 },
    { tier: 15, name: `${affinity} Catastrophe`, damage: 20, qiCost: 100, cooldown: 12 },
    { tier: 20, name: `${affinity} Apocalypse`, damage: 50, qiCost: 300, cooldown: 20 }
  ]
}

// ============================================================================
// CULTIVATION REALMS DATA
// ============================================================================
const CULTIVATION_REALMS = [
  { major: 'Meridian Opening', subRealms: [
    { sub: 'I', qiMult: 1.1, strMult: 1, hpMult: 1, minorCost: 2, majorCost: null },
    { sub: 'II', qiMult: 1.2, strMult: 1.1, hpMult: 1.1, minorCost: 4, majorCost: null },
    { sub: 'III', qiMult: 1.3, strMult: 1.2, hpMult: 1.2, minorCost: 6, majorCost: null },
    { sub: 'IV', qiMult: 1.4, strMult: 1.3, hpMult: 1.3, minorCost: 8, majorCost: null },
    { sub: 'V', qiMult: 1.5, strMult: 1.4, hpMult: 1.4, minorCost: 10, majorCost: null },
    { sub: 'VI', qiMult: 1.6, strMult: 1.5, hpMult: 1.5, minorCost: 12, majorCost: null },
    { sub: 'VII', qiMult: 1.7, strMult: 1.6, hpMult: 1.6, minorCost: 14, majorCost: null },
    { sub: 'VIII', qiMult: 1.8, strMult: 1.7, hpMult: 1.7, minorCost: 16, majorCost: null },
    { sub: 'IX', qiMult: 1.9, strMult: 1.8, hpMult: 1.8, minorCost: 18, majorCost: 35 }
  ]},
  { major: 'Meridian Channeling', subRealms: [
    { sub: 'I', qiMult: 2, strMult: 2, hpMult: 2, minorCost: 40, majorCost: null },
    { sub: 'II', qiMult: 2.2, strMult: 2.2, hpMult: 2.2, minorCost: 50, majorCost: null },
    { sub: 'III', qiMult: 2.4, strMult: 2.4, hpMult: 2.4, minorCost: 60, majorCost: null },
    { sub: 'IV', qiMult: 2.6, strMult: 2.6, hpMult: 2.6, minorCost: 70, majorCost: null },
    { sub: 'V', qiMult: 2.8, strMult: 2.8, hpMult: 2.8, minorCost: 80, majorCost: null },
    { sub: 'VI', qiMult: 3, strMult: 3, hpMult: 3, minorCost: 90, majorCost: null },
    { sub: 'VII', qiMult: 3.2, strMult: 3.2, hpMult: 3.2, minorCost: 100, majorCost: null },
    { sub: 'VIII', qiMult: 3.4, strMult: 3.4, hpMult: 3.4, minorCost: 110, majorCost: null },
    { sub: 'IX', qiMult: 3.6, strMult: 3.6, hpMult: 3.6, minorCost: 120, majorCost: 200 }
  ]},
  { major: 'Qi Channeling', subRealms: [
    { sub: 'I', qiMult: 4, strMult: 4, hpMult: 4, minorCost: 250, majorCost: null },
    { sub: 'II', qiMult: 4.5, strMult: 4.5, hpMult: 4.5, minorCost: 300, majorCost: null },
    { sub: 'III', qiMult: 5, strMult: 5, hpMult: 5, minorCost: 350, majorCost: null },
    { sub: 'IV', qiMult: 5.5, strMult: 5.5, hpMult: 5.5, minorCost: 400, majorCost: null },
    { sub: 'V', qiMult: 6, strMult: 6, hpMult: 6, minorCost: 450, majorCost: null },
    { sub: 'VI', qiMult: 6.5, strMult: 6.5, hpMult: 6.5, minorCost: 500, majorCost: null },
    { sub: 'VII', qiMult: 7, strMult: 7, hpMult: 7, minorCost: 550, majorCost: null },
    { sub: 'VIII', qiMult: 7.5, strMult: 7.5, hpMult: 7.5, minorCost: 600, majorCost: null },
    { sub: 'IX', qiMult: 8, strMult: 8, hpMult: 8, minorCost: 650, majorCost: 1200 }
  ]},
  { major: 'Qi Fusion', subRealms: [
    { sub: 'I', qiMult: 9, strMult: 9, hpMult: 9, minorCost: 1500, majorCost: null },
    { sub: 'II', qiMult: 10, strMult: 10, hpMult: 10, minorCost: 1700, majorCost: null },
    { sub: 'III', qiMult: 11, strMult: 11, hpMult: 11, minorCost: 1900, majorCost: null },
    { sub: 'IV', qiMult: 12, strMult: 12, hpMult: 12, minorCost: 2100, majorCost: null },
    { sub: 'V', qiMult: 13, strMult: 13, hpMult: 13, minorCost: 2300, majorCost: null },
    { sub: 'VI', qiMult: 14, strMult: 14, hpMult: 14, minorCost: 2500, majorCost: null },
    { sub: 'VII', qiMult: 15, strMult: 15, hpMult: 15, minorCost: 2700, majorCost: null },
    { sub: 'VIII', qiMult: 16, strMult: 16, hpMult: 16, minorCost: 2900, majorCost: null },
    { sub: 'IX', qiMult: 17, strMult: 17, hpMult: 17, minorCost: 3100, majorCost: 5500 }
  ]},
  { major: 'Core Formation', subRealms: [
    { sub: 'I', qiMult: 19, strMult: 19, hpMult: 19, minorCost: 6000, majorCost: null },
    { sub: 'II', qiMult: 21, strMult: 21, hpMult: 21, minorCost: 6500, majorCost: null },
    { sub: 'III', qiMult: 23, strMult: 23, hpMult: 23, minorCost: 7000, majorCost: null },
    { sub: 'IV', qiMult: 25, strMult: 25, hpMult: 25, minorCost: 7500, majorCost: null },
    { sub: 'V', qiMult: 27, strMult: 27, hpMult: 27, minorCost: 8000, majorCost: null },
    { sub: 'VI', qiMult: 29, strMult: 29, hpMult: 29, minorCost: 8500, majorCost: null },
    { sub: 'VII', qiMult: 31, strMult: 31, hpMult: 31, minorCost: 9000, majorCost: null },
    { sub: 'VIII', qiMult: 33, strMult: 33, hpMult: 33, minorCost: 9500, majorCost: null },
    { sub: 'IX', qiMult: 35, strMult: 35, hpMult: 35, minorCost: 10000, majorCost: 18000 }
  ]},
  { major: 'Core Foundation', subRealms: [
    { sub: 'I', qiMult: 38, strMult: 38, hpMult: 38, minorCost: 20000, majorCost: null },
    { sub: 'II', qiMult: 41, strMult: 41, hpMult: 41, minorCost: 22000, majorCost: null },
    { sub: 'III', qiMult: 44, strMult: 44, hpMult: 44, minorCost: 24000, majorCost: null },
    { sub: 'IV', qiMult: 47, strMult: 47, hpMult: 47, minorCost: 26000, majorCost: null },
    { sub: 'V', qiMult: 50, strMult: 50, hpMult: 50, minorCost: 28000, majorCost: null },
    { sub: 'VI', qiMult: 53, strMult: 53, hpMult: 53, minorCost: 30000, majorCost: null },
    { sub: 'VII', qiMult: 56, strMult: 56, hpMult: 56, minorCost: 32000, majorCost: null },
    { sub: 'VIII', qiMult: 59, strMult: 59, hpMult: 59, minorCost: 34000, majorCost: null },
    { sub: 'IX', qiMult: 62, strMult: 62, hpMult: 62, minorCost: 36000, majorCost: 65000 }
  ]},
  { major: 'Golden Core Formation', subRealms: [
    { sub: 'I', qiMult: 66, strMult: 66, hpMult: 66, minorCost: 70000, majorCost: null },
    { sub: 'II', qiMult: 70, strMult: 70, hpMult: 70, minorCost: 75000, majorCost: null },
    { sub: 'III', qiMult: 74, strMult: 74, hpMult: 74, minorCost: 80000, majorCost: null },
    { sub: 'IV', qiMult: 78, strMult: 78, hpMult: 78, minorCost: 85000, majorCost: null },
    { sub: 'V', qiMult: 82, strMult: 82, hpMult: 82, minorCost: 90000, majorCost: null },
    { sub: 'VI', qiMult: 86, strMult: 86, hpMult: 86, minorCost: 95000, majorCost: null },
    { sub: 'VII', qiMult: 90, strMult: 90, hpMult: 90, minorCost: 100000, majorCost: null },
    { sub: 'VIII', qiMult: 94, strMult: 94, hpMult: 94, minorCost: 105000, majorCost: null },
    { sub: 'IX', qiMult: 98, strMult: 98, hpMult: 98, minorCost: 110000, majorCost: 200000 }
  ]},
  { major: 'Golden Core Foundation', subRealms: [
    { sub: 'I', qiMult: 103, strMult: 103, hpMult: 103, minorCost: 220000, majorCost: null },
    { sub: 'II', qiMult: 108, strMult: 108, hpMult: 108, minorCost: 240000, majorCost: null },
    { sub: 'III', qiMult: 113, strMult: 113, hpMult: 113, minorCost: 260000, majorCost: null },
    { sub: 'IV', qiMult: 118, strMult: 118, hpMult: 118, minorCost: 280000, majorCost: null },
    { sub: 'V', qiMult: 123, strMult: 123, hpMult: 123, minorCost: 300000, majorCost: null },
    { sub: 'VI', qiMult: 128, strMult: 128, hpMult: 128, minorCost: 320000, majorCost: null },
    { sub: 'VII', qiMult: 133, strMult: 133, hpMult: 133, minorCost: 340000, majorCost: null },
    { sub: 'VIII', qiMult: 138, strMult: 138, hpMult: 138, minorCost: 360000, majorCost: null },
    { sub: 'IX', qiMult: 143, strMult: 143, hpMult: 143, minorCost: 380000, majorCost: 700000 }
  ]},
  { major: 'Foundation Establishment', subRealms: [
    { sub: 'I', qiMult: 150, strMult: 150, hpMult: 150, minorCost: 750000, majorCost: null },
    { sub: 'II', qiMult: 157, strMult: 157, hpMult: 157, minorCost: 800000, majorCost: null },
    { sub: 'III', qiMult: 164, strMult: 164, hpMult: 164, minorCost: 850000, majorCost: null },
    { sub: 'IV', qiMult: 171, strMult: 171, hpMult: 171, minorCost: 900000, majorCost: null },
    { sub: 'V', qiMult: 178, strMult: 178, hpMult: 178, minorCost: 950000, majorCost: null },
    { sub: 'VI', qiMult: 185, strMult: 185, hpMult: 185, minorCost: 1000000, majorCost: null },
    { sub: 'VII', qiMult: 192, strMult: 192, hpMult: 192, minorCost: 1050000, majorCost: null },
    { sub: 'VIII', qiMult: 199, strMult: 199, hpMult: 199, minorCost: 1100000, majorCost: null },
    { sub: 'IX', qiMult: 206, strMult: 206, hpMult: 206, minorCost: 1150000, majorCost: 2000000 }
  ]},
  { major: 'Spiritual Understanding', subRealms: [
    { sub: 'I', qiMult: 215, strMult: 215, hpMult: 215, minorCost: 2200000, majorCost: null },
    { sub: 'II', qiMult: 224, strMult: 224, hpMult: 224, minorCost: 2400000, majorCost: null },
    { sub: 'III', qiMult: 233, strMult: 233, hpMult: 233, minorCost: 2600000, majorCost: null },
    { sub: 'IV', qiMult: 242, strMult: 242, hpMult: 242, minorCost: 2800000, majorCost: null },
    { sub: 'V', qiMult: 251, strMult: 251, hpMult: 251, minorCost: 3000000, majorCost: null },
    { sub: 'VI', qiMult: 260, strMult: 260, hpMult: 260, minorCost: 3200000, majorCost: null },
    { sub: 'VII', qiMult: 269, strMult: 269, hpMult: 269, minorCost: 3400000, majorCost: null },
    { sub: 'VIII', qiMult: 278, strMult: 278, hpMult: 278, minorCost: 3600000, majorCost: null },
    { sub: 'IX', qiMult: 287, strMult: 287, hpMult: 287, minorCost: 3800000, majorCost: 7000000 }
  ]},
  { major: 'Soul Understanding', subRealms: [
    { sub: 'I', qiMult: 300, strMult: 300, hpMult: 300, minorCost: 7500000, majorCost: null },
    { sub: 'II', qiMult: 313, strMult: 313, hpMult: 313, minorCost: 8000000, majorCost: null },
    { sub: 'III', qiMult: 326, strMult: 326, hpMult: 326, minorCost: 8500000, majorCost: null },
    { sub: 'IV', qiMult: 339, strMult: 339, hpMult: 339, minorCost: 9000000, majorCost: null },
    { sub: 'V', qiMult: 352, strMult: 352, hpMult: 352, minorCost: 9500000, majorCost: null },
    { sub: 'VI', qiMult: 365, strMult: 365, hpMult: 365, minorCost: 10000000, majorCost: null },
    { sub: 'VII', qiMult: 378, strMult: 378, hpMult: 378, minorCost: 10500000, majorCost: null },
    { sub: 'VIII', qiMult: 391, strMult: 391, hpMult: 391, minorCost: 11000000, majorCost: null },
    { sub: 'IX', qiMult: 404, strMult: 404, hpMult: 404, minorCost: 11500000, majorCost: 20000000 }
  ]},
  { major: 'Nascent Soul', subRealms: [
    { sub: 'I', qiMult: 420, strMult: 420, hpMult: 420, minorCost: 22000000, majorCost: null },
    { sub: 'II', qiMult: 436, strMult: 436, hpMult: 436, minorCost: 24000000, majorCost: null },
    { sub: 'III', qiMult: 452, strMult: 452, hpMult: 452, minorCost: 26000000, majorCost: null },
    { sub: 'IV', qiMult: 468, strMult: 468, hpMult: 468, minorCost: 28000000, majorCost: null },
    { sub: 'V', qiMult: 484, strMult: 484, hpMult: 484, minorCost: 30000000, majorCost: null },
    { sub: 'VI', qiMult: 500, strMult: 500, hpMult: 500, minorCost: 32000000, majorCost: null },
    { sub: 'VII', qiMult: 516, strMult: 516, hpMult: 516, minorCost: 34000000, majorCost: null },
    { sub: 'VIII', qiMult: 532, strMult: 532, hpMult: 532, minorCost: 36000000, majorCost: null },
    { sub: 'IX', qiMult: 548, strMult: 548, hpMult: 548, minorCost: 38000000, majorCost: 65000000 }
  ]},
  { major: 'Spatial Awareness', subRealms: [
    { sub: 'I', qiMult: 570, strMult: 570, hpMult: 570, minorCost: 70000000, majorCost: null },
    { sub: 'II', qiMult: 592, strMult: 592, hpMult: 592, minorCost: 75000000, majorCost: null },
    { sub: 'III', qiMult: 614, strMult: 614, hpMult: 614, minorCost: 80000000, majorCost: null },
    { sub: 'IV', qiMult: 636, strMult: 636, hpMult: 636, minorCost: 85000000, majorCost: null },
    { sub: 'V', qiMult: 658, strMult: 658, hpMult: 658, minorCost: 90000000, majorCost: null },
    { sub: 'VI', qiMult: 680, strMult: 680, hpMult: 680, minorCost: 95000000, majorCost: null },
    { sub: 'VII', qiMult: 702, strMult: 702, hpMult: 702, minorCost: 100000000, majorCost: null },
    { sub: 'VIII', qiMult: 724, strMult: 724, hpMult: 724, minorCost: 105000000, majorCost: null },
    { sub: 'IX', qiMult: 746, strMult: 746, hpMult: 746, minorCost: 110000000, majorCost: 200000000 }
  ]},
  { major: 'Spatial Mastery', subRealms: [
    { sub: 'I', qiMult: 775, strMult: 775, hpMult: 775, minorCost: 220000000, majorCost: null },
    { sub: 'II', qiMult: 804, strMult: 804, hpMult: 804, minorCost: 240000000, majorCost: null },
    { sub: 'III', qiMult: 833, strMult: 833, hpMult: 833, minorCost: 260000000, majorCost: null },
    { sub: 'IV', qiMult: 862, strMult: 862, hpMult: 862, minorCost: 280000000, majorCost: null },
    { sub: 'V', qiMult: 891, strMult: 891, hpMult: 891, minorCost: 300000000, majorCost: null },
    { sub: 'VI', qiMult: 920, strMult: 920, hpMult: 920, minorCost: 320000000, majorCost: null },
    { sub: 'VII', qiMult: 949, strMult: 949, hpMult: 949, minorCost: 340000000, majorCost: null },
    { sub: 'VIII', qiMult: 978, strMult: 978, hpMult: 978, minorCost: 360000000, majorCost: null },
    { sub: 'IX', qiMult: 1007, strMult: 1007, hpMult: 1007, minorCost: 380000000, majorCost: 700000000 }
  ]},
  { major: 'Cosmic Channeling', subRealms: [
    { sub: 'I', qiMult: 1045, strMult: 1045, hpMult: 1045, minorCost: 750000000, majorCost: null },
    { sub: 'II', qiMult: 1083, strMult: 1083, hpMult: 1083, minorCost: 800000000, majorCost: null },
    { sub: 'III', qiMult: 1121, strMult: 1121, hpMult: 1121, minorCost: 850000000, majorCost: null },
    { sub: 'IV', qiMult: 1159, strMult: 1159, hpMult: 1159, minorCost: 900000000, majorCost: null },
    { sub: 'V', qiMult: 1197, strMult: 1197, hpMult: 1197, minorCost: 950000000, majorCost: null },
    { sub: 'VI', qiMult: 1235, strMult: 1235, hpMult: 1235, minorCost: 1000000000, majorCost: null },
    { sub: 'VII', qiMult: 1273, strMult: 1273, hpMult: 1273, minorCost: 1050000000, majorCost: null },
    { sub: 'VIII', qiMult: 1311, strMult: 1311, hpMult: 1311, minorCost: 1100000000, majorCost: null },
    { sub: 'IX', qiMult: 1349, strMult: 1349, hpMult: 1349, minorCost: 1150000000, majorCost: 2000000000 }
  ]},
  { major: 'Cosmic Fusion', subRealms: [
    { sub: 'I', qiMult: 1400, strMult: 1400, hpMult: 1400, minorCost: 2200000000, majorCost: null },
    { sub: 'II', qiMult: 1451, strMult: 1451, hpMult: 1451, minorCost: 2400000000, majorCost: null },
    { sub: 'III', qiMult: 1502, strMult: 1502, hpMult: 1502, minorCost: 2600000000, majorCost: null },
    { sub: 'IV', qiMult: 1553, strMult: 1553, hpMult: 1553, minorCost: 2800000000, majorCost: null },
    { sub: 'V', qiMult: 1604, strMult: 1604, hpMult: 1604, minorCost: 3000000000, majorCost: null },
    { sub: 'VI', qiMult: 1655, strMult: 1655, hpMult: 1655, minorCost: 3200000000, majorCost: null },
    { sub: 'VII', qiMult: 1706, strMult: 1706, hpMult: 1706, minorCost: 3400000000, majorCost: null },
    { sub: 'VIII', qiMult: 1757, strMult: 1757, hpMult: 1757, minorCost: 3600000000, majorCost: null },
    { sub: 'IX', qiMult: 1808, strMult: 1808, hpMult: 1808, minorCost: 3800000000, majorCost: 7000000000 }
  ]},
  { major: 'Early Immortality', subRealms: [
    { sub: 'I', qiMult: 1875, strMult: 1875, hpMult: 1875, minorCost: 7500000000, majorCost: null },
    { sub: 'II', qiMult: 1942, strMult: 1942, hpMult: 1942, minorCost: 8000000000, majorCost: null },
    { sub: 'III', qiMult: 2009, strMult: 2009, hpMult: 2009, minorCost: 8500000000, majorCost: null },
    { sub: 'IV', qiMult: 2076, strMult: 2076, hpMult: 2076, minorCost: 9000000000, majorCost: null },
    { sub: 'V', qiMult: 2143, strMult: 2143, hpMult: 2143, minorCost: 9500000000, majorCost: null },
    { sub: 'VI', qiMult: 2210, strMult: 2210, hpMult: 2210, minorCost: 10000000000, majorCost: null },
    { sub: 'VII', qiMult: 2277, strMult: 2277, hpMult: 2277, minorCost: 10500000000, majorCost: null },
    { sub: 'VIII', qiMult: 2344, strMult: 2344, hpMult: 2344, minorCost: 11000000000, majorCost: null },
    { sub: 'IX', qiMult: 2411, strMult: 2411, hpMult: 2411, minorCost: 11500000000, majorCost: 20000000000 }
  ]},
  { major: 'Demi-God', subRealms: [
    { sub: 'I', qiMult: 2500, strMult: 2500, hpMult: 2500, minorCost: 22000000000, majorCost: null },
    { sub: 'II', qiMult: 2589, strMult: 2589, hpMult: 2589, minorCost: 24000000000, majorCost: null },
    { sub: 'III', qiMult: 2678, strMult: 2678, hpMult: 2678, minorCost: 26000000000, majorCost: null },
    { sub: 'IV', qiMult: 2767, strMult: 2767, hpMult: 2767, minorCost: 28000000000, majorCost: null },
    { sub: 'V', qiMult: 2856, strMult: 2856, hpMult: 2856, minorCost: 30000000000, majorCost: null },
    { sub: 'VI', qiMult: 2945, strMult: 2945, hpMult: 2945, minorCost: 32000000000, majorCost: null },
    { sub: 'VII', qiMult: 3034, strMult: 3034, hpMult: 3034, minorCost: 34000000000, majorCost: null },
    { sub: 'VIII', qiMult: 3123, strMult: 3123, hpMult: 3123, minorCost: 36000000000, majorCost: null },
    { sub: 'IX', qiMult: 3212, strMult: 3212, hpMult: 3212, minorCost: 38000000000, majorCost: 65000000000 }
  ]},
  { major: 'Universal Fusion', subRealms: [
    { sub: 'I', qiMult: 3325, minorCost: 70000000000, majorCost: null },
    { sub: 'II', qiMult: 3438, minorCost: 75000000000, majorCost: null },
    { sub: 'III', qiMult: 3551, minorCost: 80000000000, majorCost: null },
    { sub: 'IV', qiMult: 3664, minorCost: 85000000000, majorCost: null },
    { sub: 'V', qiMult: 3777, minorCost: 90000000000, majorCost: null },
    { sub: 'VI', qiMult: 3890, minorCost: 95000000000, majorCost: null },
    { sub: 'VII', qiMult: 4003, minorCost: 100000000000, majorCost: null },
    { sub: 'VIII', qiMult: 4116, minorCost: 105000000000, majorCost: null },
    { sub: 'IX', qiMult: 4229, minorCost: 110000000000, majorCost: 200000000000 }
  ]},
  { major: 'Monarch Immortal', subRealms: [
    { sub: 'I', qiMult: 4375, minorCost: 220000000000, majorCost: null },
    { sub: 'II', qiMult: 4521, minorCost: 240000000000, majorCost: null },
    { sub: 'III', qiMult: 4667, minorCost: 260000000000, majorCost: null },
    { sub: 'IV', qiMult: 4813, minorCost: 280000000000, majorCost: null },
    { sub: 'V', qiMult: 4959, minorCost: 300000000000, majorCost: null },
    { sub: 'VI', qiMult: 5105, minorCost: 320000000000, majorCost: null },
    { sub: 'VII', qiMult: 5251, minorCost: 340000000000, majorCost: null },
    { sub: 'VIII', qiMult: 5397, minorCost: 360000000000, majorCost: null },
    { sub: 'IX', qiMult: 5543, minorCost: 380000000000, majorCost: null }
  ]}
]

// ============================================================================
// DEMON CULTIVATION REALMS DATA
// ============================================================================
const DEMON_REALMS = [
  { major: 'Demonic Sensing', subRealms: [
    { sub: 'I', qiMult: 1.2, strMult: 1.3, hpMult: 1.2, minorCost: 2, majorCost: null, corruptionGain: 1 },
    { sub: 'II', qiMult: 1.4, strMult: 1.5, hpMult: 1.4, minorCost: 4, majorCost: null, corruptionGain: 1 },
    { sub: 'III', qiMult: 1.6, strMult: 1.7, hpMult: 1.6, minorCost: 6, majorCost: null, corruptionGain: 1 },
    { sub: 'IV', qiMult: 1.8, strMult: 1.9, hpMult: 1.8, minorCost: 8, majorCost: null, corruptionGain: 1 },
    { sub: 'V', qiMult: 2.0, strMult: 2.1, hpMult: 2.0, minorCost: 10, majorCost: null, corruptionGain: 1 },
    { sub: 'VI', qiMult: 2.2, strMult: 2.3, hpMult: 2.2, minorCost: 12, majorCost: null, corruptionGain: 1 },
    { sub: 'VII', qiMult: 2.4, strMult: 2.5, hpMult: 2.4, minorCost: 14, majorCost: null, corruptionGain: 1 },
    { sub: 'VIII', qiMult: 2.6, strMult: 2.7, hpMult: 2.6, minorCost: 16, majorCost: null, corruptionGain: 1 },
    { sub: 'IX', qiMult: 2.8, strMult: 2.9, hpMult: 2.8, minorCost: 18, majorCost: 40, corruptionGain: 2 }
  ]},
  { major: 'Flesh Corruption', subRealms: [
    { sub: 'I', qiMult: 3.2, strMult: 3.5, hpMult: 3.2, minorCost: 45, majorCost: null, corruptionGain: 2 },
    { sub: 'II', qiMult: 3.6, strMult: 3.9, hpMult: 3.6, minorCost: 55, majorCost: null, corruptionGain: 2 },
    { sub: 'III', qiMult: 4.0, strMult: 4.3, hpMult: 4.0, minorCost: 65, majorCost: null, corruptionGain: 2 },
    { sub: 'IV', qiMult: 4.4, strMult: 4.7, hpMult: 4.4, minorCost: 75, majorCost: null, corruptionGain: 2 },
    { sub: 'V', qiMult: 4.8, strMult: 5.1, hpMult: 4.8, minorCost: 85, majorCost: null, corruptionGain: 2 },
    { sub: 'VI', qiMult: 5.2, strMult: 5.5, hpMult: 5.2, minorCost: 95, majorCost: null, corruptionGain: 2 },
    { sub: 'VII', qiMult: 5.6, strMult: 5.9, hpMult: 5.6, minorCost: 105, majorCost: null, corruptionGain: 2 },
    { sub: 'VIII', qiMult: 6.0, strMult: 6.3, hpMult: 6.0, minorCost: 115, majorCost: null, corruptionGain: 2 },
    { sub: 'IX', qiMult: 6.4, strMult: 6.7, hpMult: 6.4, minorCost: 125, majorCost: 220, corruptionGain: 3 }
  ]},
  { major: 'Blood Circulation', subRealms: [
    { sub: 'I', qiMult: 7.2, strMult: 7.8, hpMult: 7.0, minorCost: 280, majorCost: null, corruptionGain: 3 },
    { sub: 'II', qiMult: 8.0, strMult: 8.6, hpMult: 7.8, minorCost: 330, majorCost: null, corruptionGain: 3 },
    { sub: 'III', qiMult: 8.8, strMult: 9.4, hpMult: 8.6, minorCost: 380, majorCost: null, corruptionGain: 3 },
    { sub: 'IV', qiMult: 9.6, strMult: 10.2, hpMult: 9.4, minorCost: 430, majorCost: null, corruptionGain: 3 },
    { sub: 'V', qiMult: 10.4, strMult: 11.0, hpMult: 10.2, minorCost: 480, majorCost: null, corruptionGain: 3 },
    { sub: 'VI', qiMult: 11.2, strMult: 11.8, hpMult: 11.0, minorCost: 530, majorCost: null, corruptionGain: 3 },
    { sub: 'VII', qiMult: 12.0, strMult: 12.6, hpMult: 11.8, minorCost: 580, majorCost: null, corruptionGain: 3 },
    { sub: 'VIII', qiMult: 12.8, strMult: 13.4, hpMult: 12.6, minorCost: 630, majorCost: null, corruptionGain: 3 },
    { sub: 'IX', qiMult: 13.6, strMult: 14.2, hpMult: 13.4, minorCost: 680, majorCost: 1400, corruptionGain: 4 }
  ]},
  { major: 'Sin Core Formation', subRealms: [
    { sub: 'I', qiMult: 15.5, strMult: 16.5, hpMult: 15.0, minorCost: 1700, majorCost: null, corruptionGain: 4 },
    { sub: 'II', qiMult: 17.5, strMult: 18.5, hpMult: 17.0, minorCost: 1950, majorCost: null, corruptionGain: 4 },
    { sub: 'III', qiMult: 19.5, strMult: 20.5, hpMult: 19.0, minorCost: 2200, majorCost: null, corruptionGain: 4 },
    { sub: 'IV', qiMult: 21.5, strMult: 22.5, hpMult: 21.0, minorCost: 2450, majorCost: null, corruptionGain: 4 },
    { sub: 'V', qiMult: 23.5, strMult: 24.5, hpMult: 23.0, minorCost: 2700, majorCost: null, corruptionGain: 4 },
    { sub: 'VI', qiMult: 25.5, strMult: 26.5, hpMult: 25.0, minorCost: 2950, majorCost: null, corruptionGain: 4 },
    { sub: 'VII', qiMult: 27.5, strMult: 28.5, hpMult: 27.0, minorCost: 3200, majorCost: null, corruptionGain: 4 },
    { sub: 'VIII', qiMult: 29.5, strMult: 30.5, hpMult: 29.0, minorCost: 3450, majorCost: null, corruptionGain: 4 },
    { sub: 'IX', qiMult: 31.5, strMult: 32.5, hpMult: 31.0, minorCost: 3700, majorCost: 6500, corruptionGain: 5 }
  ]},
  { major: 'Will of Atrocity', subRealms: [
    { sub: 'I', qiMult: 36, strMult: 38, hpMult: 35, minorCost: 7500, majorCost: null, corruptionGain: 5 },
    { sub: 'II', qiMult: 41, strMult: 43, hpMult: 40, minorCost: 8200, majorCost: null, corruptionGain: 5 },
    { sub: 'III', qiMult: 46, strMult: 48, hpMult: 45, minorCost: 8900, majorCost: null, corruptionGain: 5 },
    { sub: 'IV', qiMult: 51, strMult: 53, hpMult: 50, minorCost: 9600, majorCost: null, corruptionGain: 5 },
    { sub: 'V', qiMult: 56, strMult: 58, hpMult: 55, minorCost: 10300, majorCost: null, corruptionGain: 5 },
    { sub: 'VI', qiMult: 61, strMult: 63, hpMult: 60, minorCost: 11000, majorCost: null, corruptionGain: 5 },
    { sub: 'VII', qiMult: 66, strMult: 68, hpMult: 65, minorCost: 11700, majorCost: null, corruptionGain: 5 },
    { sub: 'VIII', qiMult: 71, strMult: 73, hpMult: 70, minorCost: 12400, majorCost: null, corruptionGain: 5 },
    { sub: 'IX', qiMult: 76, strMult: 78, hpMult: 75, minorCost: 13100, majorCost: 25000, corruptionGain: 6 }
  ]},
  { major: 'Domain of Slaughter', subRealms: [
    { sub: 'I', qiMult: 88, strMult: 92, hpMult: 85, minorCost: 30000, majorCost: null, corruptionGain: 6 },
    { sub: 'II', qiMult: 100, strMult: 104, hpMult: 97, minorCost: 34000, majorCost: null, corruptionGain: 6 },
    { sub: 'III', qiMult: 112, strMult: 116, hpMult: 109, minorCost: 38000, majorCost: null, corruptionGain: 6 },
    { sub: 'IV', qiMult: 124, strMult: 128, hpMult: 121, minorCost: 42000, majorCost: null, corruptionGain: 6 },
    { sub: 'V', qiMult: 136, strMult: 140, hpMult: 133, minorCost: 46000, majorCost: null, corruptionGain: 6 },
    { sub: 'VI', qiMult: 148, strMult: 152, hpMult: 145, minorCost: 50000, majorCost: null, corruptionGain: 6 },
    { sub: 'VII', qiMult: 160, strMult: 164, hpMult: 157, minorCost: 54000, majorCost: null, corruptionGain: 6 },
    { sub: 'VIII', qiMult: 172, strMult: 176, hpMult: 169, minorCost: 58000, majorCost: null, corruptionGain: 6 },
    { sub: 'IX', qiMult: 184, strMult: 188, hpMult: 181, minorCost: 62000, majorCost: 110000, corruptionGain: 7 }
  ]},
  { major: 'Law of Ruin Perception', subRealms: [
    { sub: 'I', qiMult: 210, strMult: 220, hpMult: 205, minorCost: 140000, majorCost: null, corruptionGain: 7 },
    { sub: 'II', qiMult: 236, strMult: 246, hpMult: 231, minorCost: 160000, majorCost: null, corruptionGain: 7 },
    { sub: 'III', qiMult: 262, strMult: 272, hpMult: 257, minorCost: 180000, majorCost: null, corruptionGain: 7 },
    { sub: 'IV', qiMult: 288, strMult: 298, hpMult: 283, minorCost: 200000, majorCost: null, corruptionGain: 7 },
    { sub: 'V', qiMult: 314, strMult: 324, hpMult: 309, minorCost: 220000, majorCost: null, corruptionGain: 7 },
    { sub: 'VI', qiMult: 340, strMult: 350, hpMult: 335, minorCost: 240000, majorCost: null, corruptionGain: 7 },
    { sub: 'VII', qiMult: 366, strMult: 376, hpMult: 361, minorCost: 260000, majorCost: null, corruptionGain: 7 },
    { sub: 'VIII', qiMult: 392, strMult: 402, hpMult: 387, minorCost: 280000, majorCost: null, corruptionGain: 7 },
    { sub: 'IX', qiMult: 418, strMult: 428, hpMult: 413, minorCost: 300000, majorCost: 550000, corruptionGain: 8 }
  ]},
  { major: 'Fate Devouring', subRealms: [
    { sub: 'I', qiMult: 480, strMult: 500, hpMult: 475, minorCost: 700000, majorCost: null, corruptionGain: 8 },
    { sub: 'II', qiMult: 542, strMult: 562, hpMult: 537, minorCost: 820000, majorCost: null, corruptionGain: 8 },
    { sub: 'III', qiMult: 604, strMult: 624, hpMult: 599, minorCost: 940000, majorCost: null, corruptionGain: 8 },
    { sub: 'IV', qiMult: 666, strMult: 686, hpMult: 661, minorCost: 1060000, majorCost: null, corruptionGain: 8 },
    { sub: 'V', qiMult: 728, strMult: 748, hpMult: 723, minorCost: 1180000, majorCost: null, corruptionGain: 8 },
    { sub: 'VI', qiMult: 790, strMult: 810, hpMult: 785, minorCost: 1300000, majorCost: null, corruptionGain: 8 },
    { sub: 'VII', qiMult: 852, strMult: 872, hpMult: 847, minorCost: 1420000, majorCost: null, corruptionGain: 8 },
    { sub: 'VIII', qiMult: 914, strMult: 934, hpMult: 909, minorCost: 1540000, majorCost: null, corruptionGain: 8 },
    { sub: 'IX', qiMult: 976, strMult: 996, hpMult: 971, minorCost: 1660000, majorCost: 3000000, corruptionGain: 9 }
  ]},
  { major: 'Abyssal Ascension', subRealms: [
    { sub: 'I', qiMult: 1120, strMult: 1160, hpMult: 1100, minorCost: 3800000, majorCost: null, corruptionGain: 9 },
    { sub: 'II', qiMult: 1264, strMult: 1304, hpMult: 1244, minorCost: 4400000, majorCost: null, corruptionGain: 9 },
    { sub: 'III', qiMult: 1408, strMult: 1448, hpMult: 1388, minorCost: 5000000, majorCost: null, corruptionGain: 9 },
    { sub: 'IV', qiMult: 1552, strMult: 1592, hpMult: 1532, minorCost: 5600000, majorCost: null, corruptionGain: 9 },
    { sub: 'V', qiMult: 1696, strMult: 1736, hpMult: 1676, minorCost: 6200000, majorCost: null, corruptionGain: 9 },
    { sub: 'VI', qiMult: 1840, strMult: 1880, hpMult: 1820, minorCost: 6800000, majorCost: null, corruptionGain: 9 },
    { sub: 'VII', qiMult: 1984, strMult: 2024, hpMult: 1964, minorCost: 7400000, majorCost: null, corruptionGain: 9 },
    { sub: 'VIII', qiMult: 2128, strMult: 2168, hpMult: 2108, minorCost: 8000000, majorCost: null, corruptionGain: 9 },
    { sub: 'IX', qiMult: 2272, strMult: 2312, hpMult: 2252, minorCost: 8600000, majorCost: 15000000, corruptionGain: 10 }
  ]},
  { major: 'Demon Monarch Existence', subRealms: [
    { sub: 'I', qiMult: 2600, strMult: 2700, hpMult: 2550, minorCost: 19000000, majorCost: null, corruptionGain: 10 },
    { sub: 'II', qiMult: 2928, strMult: 3028, hpMult: 2878, minorCost: 22000000, majorCost: null, corruptionGain: 10 },
    { sub: 'III', qiMult: 3256, strMult: 3356, hpMult: 3206, minorCost: 25000000, majorCost: null, corruptionGain: 10 },
    { sub: 'IV', qiMult: 3584, strMult: 3684, hpMult: 3534, minorCost: 28000000, majorCost: null, corruptionGain: 10 },
    { sub: 'V', qiMult: 3912, strMult: 4012, hpMult: 3862, minorCost: 31000000, majorCost: null, corruptionGain: 10 },
    { sub: 'VI', qiMult: 4240, strMult: 4340, hpMult: 4190, minorCost: 34000000, majorCost: null, corruptionGain: 10 },
    { sub: 'VII', qiMult: 4568, strMult: 4668, hpMult: 4518, minorCost: 37000000, majorCost: null, corruptionGain: 10 },
    { sub: 'VIII', qiMult: 4896, strMult: 4996, hpMult: 4846, minorCost: 40000000, majorCost: null, corruptionGain: 10 },
    { sub: 'IX', qiMult: 5224, strMult: 5324, hpMult: 5174, minorCost: 43000000, majorCost: null, corruptionGain: 12 }
  ]}
]

// ============================================================================
// GAME STATE
// ============================================================================
const state = {
  // Current phase
  phase: 'FATE_ROLL', // INTRO_LOADING, FATE_ROLL, FARMING, FAKE_IMMORTAL, WOOD, COMBAT

  // Player identity (set during intro flow)
  playerName: '',
  playerGender: null, // 'male' | 'female'
  intro: {
    progress: 0,
    step: 'loading', // loading -> username -> gender -> ready
    usernameDraft: '',
    hasAnimatedTitle: false
  },
  
  // Fate roll results
  bloodline: null,
  spiritualRoots: null,
  luck: 0,
  affinities: [], // Array of {type: 'Fire', score: 25}
  primaryAffinity: null, // Highest scoring affinity
  
  // Resources
  stamina: 10,
  maxStamina: 10,
  qi: 0,
  copper: 0,
  silver: 0,
  gold: 0,
  spiritStonesLow: 0,
  spiritStonesMid: 0,
  spiritStonesHigh: 0,
  isResting: false,
  isCultivating: false,
  
  // Character stats
  health: 100,
  maxHealth: 100,
  strength: 10,
  
  // Cultivation progress
  cultivationMajorIndex: 0, // Index in CULTIVATION_REALMS array
  cultivationSubIndex: 0, // Index in subRealms array (0-8 for I-IX)

  // Best-ever progress (persists across rebirth via meta)
  bestMajorRealm: {
    index: 0,
    subIndex: 0,
    isDemon: false,
    label: ''
  },
  bestRebirthPoints: 0,

  // Global leaderboards (downloaded on demand)
  leaderboards: {
    major: { rows: [], loading: false, error: '', fetchedAt: 0 },
    rebirth: { rows: [], loading: false, error: '', fetchedAt: 0 }
  },
  leaderboardsTab: 'major',

  // UI toggles
  showCredits: false,

  // Age / Lifespan (months)
  // Cultivating accelerates aging; lifespan can be extended via breakthroughs.
  ageMonths: 0,
  expectedLifespanMonths: 1200, // 100 years
  
  // Story progress flags
  hasMetFakeImmortal: false,
  hasPaidFakeImmortal: false,
  hasUnlockedWood: false,
  hasJoinedSect: false,
  currentSect: null,
  isDemonPath: false,
  corruption: 0,
  demonCorruptionAscended: false,
  demonCosmicFinaleDone: false,
  dozeOffUnlocked: false,
  demonCabinRevengeStage: '',
  runEnded: false,
  hardMode: false,

  // Orthodox: True ending chain
  orthodoxWarStage: 0, // 0..6
  orthodoxTrueEndingDone: false,
  
  // Farming
  farmingLevel: 1,
  farmingToolCost: 10,
  copperMultiplier: 1,
  qiMultiplier: 1,
  silverMultiplier: 1,
  hasBoughtTools: false,
  hasBoughtNormalAxe: false,
  hasBoughtLegendaryTools: false,
  hasSeenBargain: false,

  bargainOfferRolled: false,
  bargainOfferAvailable: false,

  // One-time offer rolls (to avoid re-render RNG turning into "eventually guaranteed")
  legendaryAxeOfferRolled: false,
  legendaryAxeOfferAvailable: false,
  
  // Business & Story
  hasStartedBusiness: false,
  isBusinessOriented: false,
  incomeCycleSeconds: 0,
  businessCycleSeconds: 5,
  businessIncomePerCycle: { silver: 5, copper: 15, gold: 0 },
  businessUpgradedExpansion: false,
  businessUpgradedEmployees: false,
  businessChoseStabilityIsntEnough: false,
  businessChoseNoMoreGames: false,
  businessMerchantGuildPartnered: false,
  businessNervousNeighboringSectOpened: false,
  businessNeighboringSectNegotiated: false,
  businessNeighboringSectDenied: false,
  businessSectRetaliationResolved: false,
  businessFoundMysteriousManual: false,
  businessGuildRetaliationPrepared: false,
  businessCarpetBombDone: false,
  // Business: Heavenly Demon Opportunity (deny negotiation branch continuation)
  businessHeavenlyDemonWatcherFollowed: false,
  businessHeavenlyDemonOfferMade: false,
  businessHeavenlyDemonOfferResolved: false,
  businessHeavenlyDemonOfferAccepted: false,
  businessHeavenlyDemonOfferDenied: false,
  // Business: post–Carpet Bomb tech escalation chain
  businessMergedWithMilitary: false,
  businessBombTestingDone: false,
  businessAntiMatterCreationDone: false,
  businessWarpingDone: false,
  businessStormHeavensStarted: false,
  businessStormHeavensCinematicDone: false,
  // Heavens ending chain
  heavensImmortalGodClashStarted: false,
  heavensEnding: null, // 'demonKingDeath' | 'tartarusEaten' | null
  // Heavenly Demon detour chain (after choosing heavenly manual in Cloud library)
  hdDetour: {
    unlocked: false,
    choseDifferentPath: false,
    exploredCave: false,
    caveChoice: null, // 'demonicManual' | 'ignore' | null
    startedFamily: false,
    groceriesCount: 0,
    returnHomeAvailable: false,
    demonCinematicResolved: false
  },
  // Demonic Monarch fate chain (Destroy the Sect from Within -> Decide Fate)
  dmFate: {
    unlocked: false,
    stage: null // 'awaitLeader' | 'choose' | 'slaughterFinal' | 'stay_find' | 'stay_capture' | 'stay_end' | 'done' | 'dead' | null
  },
  storyDialog: null,
  storyDialogReturnPhase: null,
  sectIncomeSeconds: 0,
  hasChosen100SilverRoute: false,
  cloudCultivatorStoryStage: 0,
  // Cloud Sect: Conquest continuation (unlocked after the "Find nothing" library route)
  cloudConqueredSects: [], // array of sect keys from SECTS (excluding Cloud/Orthodox)
  cloudConqueredSectsUnlocked: false,
  searchingAndConqueringCooldown: 0, // seconds
  // Cloud Sect: Coalition war endgame (unlocked after conquering all normal sects)
  cloudCoalitionWarStage: 0, // 0 locked, 1 face, 2 wave running, 3 champions unlocked, 4 final unlocked, 5 done
  cloudCoalitionWave: null, // { kind: 'armies'|'champions', index: 0..2, awaitingStaminaFull: bool, pendingStart: bool }
  cloudFinalConfrontationCinematicDone: false,
  hasLargerBagSpace: false,
  largerBagSpaceUnlocked: false,
  hasManual: false,
  contributionPoints: 0,
  encounterCooldown: 0,
  manualTier: 0,
  manualType: null,

  // Story flags
  demonMonarchOnly: false,

  // Demon encounter branch flags
  fledDemon: false,
  joinedOrthodoxSect: false,
  customSectName: '',
  orthodoxHide: {
    stage: null // 'discover' | 'saved' | 'loyalty' | 'joined' | null
  },
  
  // Combat
  inCombat: false,
  enemy: null,
  playerCooldowns: {
    punch: 0,
    superPunch: 0,
    qiBlast: 0
  },

  equippedMoves: ['punch', 'superPunch', 'punch'],
  
  // Rebirth / Meta
  rebirthPoints: 0,
  // Tracks the last computed spirit-stone bonus so we can apply deltas.
  // (1 Rebirth Point per 500 Low/Mid/High spirit stones; decreases when spent.)
  rebirthStoneBonusLast: 0,
  rebirthUpgrades: {
    minRootCount: 1,
    maxRootCount: 5,
    bloodlineBias: 0,
    canRerollFate: false,
    resetUnlockProgress: 0,
    qiMultiplierLevel: 0,

    // Infinite nodes
    herbGatherSpeedLevel: 0,
    herbMultiGatherLevel: 0,
    strengthMultiplierLevel: 0,
    healthMultiplierLevel: 0,
    specialCooldownLevel: 0,
    repeatableSpeedLevel: 0,
    autoGatherLevel: 0,
    autoCraftLevel: 0,
    pillCraftSpeedLevel: 0,
    minRootBonusLevel: 0,

    // Fate / meta luck nodes
    rootLuckLevel: 0,
    maxRootBonusLevel: 0,
    extraRerollsLevel: 0,
    bloodlineLuckLevel: 0,
    multiAffinityLuckLevel: 0,
    affinityAlignmentLuckLevel: 0,
    storyLuckLuckLevel: 0,
    spiritStoneRpMultLevel: 0,
    questDropChanceLevel: 0
  },

  // Tracks which story milestones already granted RP this run.
  rebirthStoryAwards: {},
  
  // Fate rerolls
  rerollsRemaining: 5,
  
  // UI state
  showResetModal: false,
  showRebirthNodeModal: false,
  rebirthNodeModalId: null,
  autoCraftPillFile: '',
  devModalMode: 'RESET', // 'RESET' | 'SPEED'
  devSpeed3x: false,
  devIgnoreRequirements: false,
  activeSidePanels: new Set(), // Set of 'stats', 'inventory', 'actions', 'profile', 'sect', 'quests', 'moves', 'shop', 'herbalism'

  // Sect panel UI
  sectJoinPickerOpen: false,

  // Sect ranks (pyramid duels)
  sectRankPyramidOpen: false,
  sectRankLayer: 'outer',
  sectRankNumber: 6,

  // Quests panel
  activeQuest: null,
  questReturnPhase: null,

  // Generic combat context (used for non-quest duels)
  combatContext: null,

  // Sect manual multipliers (applied in addition to bloodline/realm/etc)
  sectTier: 0,
  sectMultipliers: { qi: 1, str: 1, hp: 1 },

  // Cosmetic character profile (no gameplay impact)
  characterProfile: {
    attributes: null
  },

  // Audio settings
  audio: {
    enabled: false,
    sfxVolume: 0.7,
    musicVolume: 0.35
  },

  // Persisted drag offsets (CSS translate) per panel
  panelPositions: {
    stats: { x: 0, y: 0 },
    inventory: { x: 0, y: 0 },
    actions: { x: 0, y: 0 },
    herbalism: { x: 0, y: 0 },
    settings: { x: 0, y: 0 },
    recipes: { x: 0, y: 0 },
    profile: { x: 0, y: 0 },
    sect: { x: 0, y: 0 },
    quests: { x: 0, y: 0 },
    moves: { x: 0, y: 0 },
    shop: { x: 0, y: 0 },
    leaderboards: { x: 0, y: 0 },
    conqueredSects: { x: 0, y: 0 },
    // Back-compat: older saves stored separate shop panels.
    townShop: { x: 0, y: 0 },
    hourShop: { x: 0, y: 0 }
  },

  // Persisted sizes per panel (set when user resizes)
  panelSizes: {},
  
  // Inventory
  inventory: [],
  selectedInventoryIndex: null,
  equipped: { tool: null, manual: null },

  // Shop UI
  shopTab: 'town',

  // Shops
  shops: {
    town: { resetAt: 0, offers: [] },
    hour: { resetAt: 0, offers: [] }
  },
  
  // Actions (for story management)
  repeatableActions: [],
  specialActions: [],
  
  // Cooldown system
  buttonCooldowns: {},
  villageMaterialsCooldown: 0
}

// ============================================================================
// SHOPS (Town / Hour)
// ============================================================================
const SHOP_TOWN_RESET_MS = 5 * 60 * 1000
const SHOP_HOUR_RESET_MS = 60 * 60 * 1000

function clampNonNegativeMs(v) {
  const n = Number(v)
  if (!Number.isFinite(n) || n <= 0) return 0
  return Math.floor(n)
}

function formatCountdown(ms) {
  const m = Math.max(0, Math.floor(ms / 1000))
  const s = m % 60
  const totalMin = Math.floor(m / 60)
  const mm = totalMin % 60
  const hh = Math.floor(totalMin / 60)
  const pad2 = (x) => String(x).padStart(2, '0')
  return hh > 0 ? `${hh}:${pad2(mm)}:${pad2(s)}` : `${mm}:${pad2(s)}`
}

function getPillCatalog() {
  // Keep this list explicit (no filesystem access in browser).
  // Names are derived from the PNG filename as requested.
  return [
    { file: 'ying_yang_pill.png', src: 'assets/ying_yang_pill.png', name: 'Ying-Yang Pill' },
    { file: 'herb_pill.png', src: 'assets/herb_pill.png', name: 'Herbal Pill' },
    { file: 'qi_pill.png', src: 'assets/qi_pill.png', name: 'Qi Pill' },
    { file: 'breakthrough_pill.png', src: 'assets/breakthrough_pill.png', name: 'Breakthrough Pill' },
    { file: 'iron_body_pill.png', src: 'assets/iron_body_pill.png', name: 'Iron Body Pill' },
    { file: 'angel_pill.png', src: 'assets/angel_pill.png', name: 'Angel Pill' },
    { file: 'corruption_pill.png', src: 'assets/corruption_pill.png', name: 'Corruption Pill' },
    { file: 'demon_pill.png', src: 'assets/demon_pill.png', name: 'Demon Pill' },
    { file: 'lightning_pill.png', src: 'assets/lightning_pill.png', name: 'Lightning Pill' },
    { file: 'death_pill.png', src: 'assets/death_pill.png', name: 'Death Pill' }
  ]
}

function getPillDescription(fileName) {
  const n = String(fileName || '')
  const map = {
    'breakthrough_pill.png': 'A sharp pill that pushes the boundary of your realm.',
    'corruption_pill.png': 'A dark pill that whispers of forbidden power.',
    'herb_pill.png': 'A fragrant pill brewed from concentrated spirit herbs.',
    'qi_pill.png': 'A simple pill that restores and refines your Qi.',
    'ying_yang_pill.png': 'A balanced pill that steadies your inner flow.',
    'iron_body_pill.png': 'A dense pill that hardens flesh and bone.',
    'angel_pill.png': 'A gentle pill that leaves a calming warmth behind.',
    'death_pill.png': 'A chilling pill that numbs the senses and sharpens focus.',
    'demon_pill.png': 'A fierce pill that burns with demonic intent.',
    'lightning_pill.png': 'A crackling pill that tingles with storm essence.'
  }
  if (map[n]) return map[n]

  // Deterministic one-liner for the sliced pill_* assets.
  const templates = [
    'A glossy pill that hums faintly with stored essence.',
    'A dense pill that smells of minerals and cold air.',
    'A bright pill that tingles on the tongue.',
    'A bitter pill that leaves a metallic aftertaste.',
    'A strange pill that seems heavier than it looks.',
    'A smooth pill that swirls with faint, shifting light.'
  ]
  let h = 0
  for (let i = 0; i < n.length; i++) h = ((h * 31) + n.charCodeAt(i)) >>> 0
  return templates[h % templates.length]
}

function randomIntInclusive(min, max) {
  const a = Math.ceil(Number(min))
  const b = Math.floor(Number(max))
  if (!Number.isFinite(a) || !Number.isFinite(b) || b < a) return a
  return Math.floor(Math.random() * (b - a + 1)) + a
}

function makeRandomPrice() {
  const roll = Math.floor(Math.random() * 4)
  if (roll === 0) return { currency: 'copper', amount: randomIntInclusive(100, 125) }
  if (roll === 1) return { currency: 'silver', amount: randomIntInclusive(60, 90) }
  if (roll === 2) return { currency: 'gold', amount: randomIntInclusive(20, 30) }
  return { currency: 'spiritLow', amount: randomIntInclusive(5, 10) }
}

function currencyLabel(cur) {
  if (cur === 'copper') return 'COPPER'
  if (cur === 'silver') return 'SILVER'
  if (cur === 'gold') return 'GOLD'
  if (cur === 'spiritLow') return 'LOW SPIRIT STONES'
  if (cur === 'spiritMid') return 'MID SPIRIT STONES'
  if (cur === 'spiritHigh') return 'HIGH SPIRIT STONES'
  return String(cur || '').toUpperCase()
}

function getCurrencyAmount(cur) {
  if (cur === 'copper') return clampNonNegativeInt(state.copper)
  if (cur === 'silver') return clampNonNegativeInt(state.silver)
  if (cur === 'gold') return clampNonNegativeInt(state.gold)
  if (cur === 'spiritLow') return clampNonNegativeInt(state.spiritStonesLow)
  if (cur === 'spiritMid') return clampNonNegativeInt(state.spiritStonesMid)
  if (cur === 'spiritHigh') return clampNonNegativeInt(state.spiritStonesHigh)
  return 0
}

function spendCurrency(cur, amount) {
  if (state.devIgnoreRequirements) return
  const a = clampNonNegativeInt(amount)
  if (cur === 'copper') state.copper = Math.max(0, clampNonNegativeInt(state.copper) - a)
  else if (cur === 'silver') state.silver = Math.max(0, clampNonNegativeInt(state.silver) - a)
  else if (cur === 'gold') state.gold = Math.max(0, clampNonNegativeInt(state.gold) - a)
  else if (cur === 'spiritLow') state.spiritStonesLow = Math.max(0, clampNonNegativeInt(state.spiritStonesLow) - a)
  else if (cur === 'spiritMid') state.spiritStonesMid = Math.max(0, clampNonNegativeInt(state.spiritStonesMid) - a)
  else if (cur === 'spiritHigh') state.spiritStonesHigh = Math.max(0, clampNonNegativeInt(state.spiritStonesHigh) - a)
}

function canAffordPrice(cur, amount) {
  if (state.devIgnoreRequirements) return true
  return getCurrencyAmount(cur) >= clampNonNegativeInt(amount)
}

function ensureShopsState() {
  if (!state.shops || typeof state.shops !== 'object') {
    state.shops = { town: { resetAt: 0, offers: [] }, hour: { resetAt: 0, offers: [] } }
  }
  if (!state.shops.town || typeof state.shops.town !== 'object') state.shops.town = { resetAt: 0, offers: [] }
  if (!state.shops.hour || typeof state.shops.hour !== 'object') state.shops.hour = { resetAt: 0, offers: [] }
  if (!Array.isArray(state.shops.town.offers)) state.shops.town.offers = []
  if (!Array.isArray(state.shops.hour.offers)) state.shops.hour.offers = []
  state.shops.town.resetAt = clampNonNegativeMs(state.shops.town.resetAt)
  state.shops.hour.resetAt = clampNonNegativeMs(state.shops.hour.resetAt)
}

function generateShopOffers(kind) {
  const count = 6
  const catalog = getPillCatalog().slice()
  const death = catalog.find(p => p && p.file === 'death_pill.png')
  const pool = catalog.filter(p => p && p.file !== 'death_pill.png')

  // Death Pill: 5% chance to appear per shop reset (at most one slot).
  const includeDeath = Boolean(death) && (Math.random() < 0.05)

  // Shuffle pool and take without replacement.
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const tmp = pool[i]
    pool[i] = pool[j]
    pool[j] = tmp
  }

  const picks = []
  if (includeDeath) picks.push(death)
  picks.push(...pool.slice(0, Math.max(0, Math.min(count - picks.length, pool.length))))

  const now = Date.now()
  return picks.map((p, idx) => {
    const price = makeRandomPrice()
    return {
      id: `${kind}:${now}:${idx}:${p.file}`,
      pillFile: p.file,
      pillName: String(p.name || '').trim() || p.file.replace(/\.(png|webp)$/i, ''),
      imageSrc: p.src,
      description: getPillDescription(p.file),
      priceCurrency: price.currency,
      priceAmount: price.amount,
      purchased: false
    }
  })
}

function resetShop(kind) {
  ensureShopsState()
  const now = Date.now()
  if (kind === 'hour') {
    state.shops.hour.offers = generateShopOffers('hour')
    state.shops.hour.resetAt = now + SHOP_HOUR_RESET_MS
  } else {
    state.shops.town.offers = generateShopOffers('town')
    state.shops.town.resetAt = now + SHOP_TOWN_RESET_MS
  }
}

function ensureShopsInitialized() {
  ensureShopsState()
  const now = Date.now()
  if (!state.shops.town.resetAt || state.shops.town.resetAt <= now || state.shops.town.offers.length !== 6) {
    resetShop('town')
  }
  if (!state.shops.hour.resetAt || state.shops.hour.resetAt <= now || state.shops.hour.offers.length !== 6) {
    resetShop('hour')
  }
}

function tickShops() {
  ensureShopsInitialized()
  const now = Date.now()
  let changed = false
  if (state.shops.town.resetAt && now >= state.shops.town.resetAt) {
    resetShop('town')
    changed = true
  }
  if (state.shops.hour.resetAt && now >= state.shops.hour.resetAt) {
    resetShop('hour')
    changed = true
  }
  return changed
}

window.buyShopOffer = (shopKind, offerId) => {
  const kind = String(shopKind || '')
  const id = String(offerId || '')
  ensureShopsInitialized()

  const shop = (kind === 'hour') ? state.shops.hour : state.shops.town
  const offers = Array.isArray(shop?.offers) ? shop.offers : []
  const offer = offers.find(o => o && String(o.id) === id)
  if (!offer || offer.purchased) return

  const cur = String(offer.priceCurrency || '')
  const amt = clampNonNegativeInt(offer.priceAmount)
  if (!canAffordPrice(cur, amt)) {
    try { playSfx('error') } catch (_) {}
    log('Insufficient funds.')
    render()
    saveGame()
    return
  }

  spendCurrency(cur, amt)
  offer.purchased = true

  try { playSfx('buy') } catch (_) {}

  // Add to inventory as a usable item.
  if (!Array.isArray(state.inventory)) state.inventory = []
  try {
    addToInventory({
      name: offer.pillName,
      kind: 'pill',
      pillFile: String(offer.pillFile || ''),
      imageSrc: offer.imageSrc,
      description: offer.description,
      quantity: 1
    })
  } catch (_) {
    // Fallback if addToInventory isn't available for some reason.
    state.inventory.push({
      name: offer.pillName,
      kind: 'pill',
      pillFile: String(offer.pillFile || ''),
      imageSrc: offer.imageSrc,
      description: offer.description,
      quantity: 1
    })
  }

  log(`Purchased ${offer.pillName} for ${amt} ${currencyLabel(cur)}.`)
  render()
  saveGame()
}

// ============================================================================
// SPECIAL-EVENT CHANCE MODIFIER (Hidden World)
// ============================================================================
function rollSpecialEventChance(baseChance) {
  const p = Number(baseChance)
  if (!Number.isFinite(p) || p <= 0) return false
  if (p >= 1) return true
  const mult = state.isBusinessOriented ? 0.8 : 1
  return Math.random() < (p * mult)
}

// ============================================================================
// ACTION TOOLTIP (hover overlay)
// ============================================================================
function ensureActionTooltipEl() {
  let el = document.getElementById('action-tooltip')
  if (el) return el
  el = document.createElement('div')
  el.id = 'action-tooltip'
  el.className = 'action-tooltip'
  el.style.display = 'none'
  document.body.appendChild(el)
  return el
}

function positionTooltip(el, x, y) {
  const pad = 12
  const vw = Math.max(0, window.innerWidth || 0)
  const vh = Math.max(0, window.innerHeight || 0)

  el.style.left = '0px'
  el.style.top = '0px'
  el.style.maxWidth = '280px'

  const rect = el.getBoundingClientRect()
  const w = rect.width || 0
  const h = rect.height || 0

  const clampedX = Math.max(pad, Math.min(vw - w - pad, x + 14))
  const clampedY = Math.max(pad, Math.min(vh - h - pad, y + 14))
  el.style.left = `${clampedX}px`
  el.style.top = `${clampedY}px`
}

window.showActionTooltip = (ev, text) => {
  const t = String(text || '').trim()
  if (!t) return
  const el = ensureActionTooltipEl()
  el.textContent = t
  el.style.display = 'block'
  try {
    const e = ev || window.event
    if (e && Number.isFinite(e.clientX) && Number.isFinite(e.clientY)) {
      positionTooltip(el, e.clientX, e.clientY)
    }
  } catch (_) {}
}

window.moveActionTooltip = (ev) => {
  const el = document.getElementById('action-tooltip')
  if (!el || el.style.display === 'none') return
  try {
    const e = ev || window.event
    if (e && Number.isFinite(e.clientX) && Number.isFinite(e.clientY)) {
      positionTooltip(el, e.clientX, e.clientY)
    }
  } catch (_) {}
}

window.hideActionTooltip = () => {
  const el = document.getElementById('action-tooltip')
  if (!el) return
  el.style.display = 'none'
}

function getActionTooltipText(action) {
  const desc = stripTradeoffLines((action && typeof action.description === 'string') ? action.description : '')

  const rawName = String(action?.name || '').trim() || 'Action'
  const name = rawName.replaceAll('.', '').trim() || 'Action'

  const explicitCostText = (typeof action?.costText === 'string') ? action.costText.trim() : ''
  // Tradeoffs are intentionally not shown in UI.

  // Best-effort cost detection.
  const costParts = []

  // Try to infer stamina cost from the common onStart() pattern.
  try {
    const src = typeof action?.onStart === 'function' ? String(action.onStart) : ''
    const m = src.match(/state\.stamina\s*-=?=\s*(\d+)/)
    if (m) {
      const n = Number(m[1])
      if (Number.isFinite(n) && n > 0) costParts.push(`${formatNumber(n)} stamina`)
    }
  } catch (_) {}

  const costKeys = [
    ['costCopper', 'copper'],
    ['costSilver', 'silver'],
    ['costGold', 'gold'],
    ['costSpiritStonesLow', 'Low Spirit Stones'],
    ['costSpiritStonesMid', 'Mid Spirit Stones'],
    ['costSpiritStonesHigh', 'High Spirit Stones']
  ]
  for (const [key, label] of costKeys) {
    const v = Number(action?.[key])
    if (Number.isFinite(v) && v > 0) costParts.push(`${formatNumber(v)} ${label}`)
  }

  const derivedCostText = costParts.length ? costParts.join(', ') : 'None'
  const costText = explicitCostText || derivedCostText

  // Always ensure a Cost line exists in tooltips.
  const shouldAppendCosts = !/(^|\n)Cost\s*:/i.test(desc)

  if (desc) {
    if (shouldAppendCosts) {
      return `${desc}\nCost: ${costText}`
    }
    return desc
  }

  return `${name}\nCost: ${costText}`
}

function getActionDisplayName(name) {
  return String(name || '').replaceAll('.', '').trim()
}

// ============================================================================
// ACTION CALLBACK REHYDRATION (saved actions lose functions)
//
// IMPORTANT:
// - Action objects are serialized to JSON; their `callback` / `onStart` functions are lost on save.
// - We rehydrate by mapping exact action `name` strings back to window.* functions.
// - If you add/rename an action name anywhere, update this mapping AND any reload-safe injection.
// ============================================================================
function rehydrateActionCallbacks() {
  if (!Array.isArray(state.repeatableActions)) state.repeatableActions = []
  if (!Array.isArray(state.specialActions)) state.specialActions = []

  const fix = (type, action) => {
    if (!action || typeof action !== 'object') return action
    if (typeof action.callback === 'function') return action

    const name = String(action.name || '')
    const a = { ...action }

    if (type === 'repeatable') {
      if (name === 'Rest') a.callback = () => window.rest()
      else if (name === 'Farm Crops') a.callback = () => window.farmCrops()
      else if (name === 'Sell Crops') a.callback = () => window.sellCrops()
      else if (name === 'Chop Wood') a.callback = () => window.chopWood()
      else if (name === 'Sell Wood') a.callback = () => window.sellWood()
      else if (name === 'Gather Materials for Village') a.callback = () => window.gatherMaterialsForVillage()
      else if (name === 'Grab Groceries') a.callback = () => window.hdGrabGroceries()
      else if (name === 'Searching and Conquering') a.callback = () => window.searchingAndConquering()
      else if (name === 'Slaughter Sheep') a.callback = () => window.slaughterSheep()
      else if (name === 'Slaughter Random Civilians') a.callback = () => window.slaughterRandomCivilians()
      return a
    }

    // Special
    if (name.includes('Buy Farming Tools') || name.includes('Buy Better Farming Tools')) a.callback = () => window.buyTools()
    else if (name.includes('Meet the')) a.callback = () => window.meetFakeImmortal()
    else if (name.includes('Buy Axe')) a.callback = () => window.buyAxe()
    else if (name === 'Buy Normal Axe') a.callback = () => window.buyNormalAxe()
    else if (name.includes('Buy Legendary Axe')) a.callback = () => window.buyLegendaryTools()
    else if (name === 'Bargain') a.callback = () => window.startBargain()
    else if (name.includes('Bargain with Merchant')) a.callback = () => window.acceptBargain()
    else if (name === 'Ignore Merchant') a.callback = () => window.ignoreBargain()
    else if (name === 'Help Neighboring Village') a.callback = () => window.helpNeighboringVillage()
    else if (name === 'Steady Coin') a.callback = () => window.chooseSteadyCoin()
    else if (name === 'Follow the Mysterious Cultivator') a.callback = () => window.followMysteriousCultivator()
    else if (name === 'Walk with the Mysterious Cultivator to the Building.') a.callback = () => window.cloudStoryWalkToBuilding()
    else if (name === 'Sect Leader Offers Items and Recruitment.') a.callback = () => window.cloudStoryLeaderOffers()
    else if (name === 'Arrival Among Clouds.') a.callback = () => window.cloudStoryArrivalAmongClouds()
    else if (name === 'Confronted by an Outer Disciple.') a.callback = () => window.cloudStoryConfrontedByOuterDisciple()
    else if (name === 'Battle starts.') a.callback = () => window.cloudStoryBattleStarts()
    else if (name === 'Exploring the Sect Library.') a.callback = () => window.cloudStoryExploreLibrary()
    else if (name === 'Find heavenly demon manual.') a.callback = () => window.cloudStoryFindHeavenlyDemonManual()
    else if (name === 'Find nothing.') a.callback = () => window.cloudStoryFindNothingInLibrary()
    else if (name === 'Take the Demonic Manual.') a.callback = () => window.cloudStoryTakeDemonicManual()

    // Cloud Sect: Find-nothing continuation chain
    else if (name === 'Venture Out to the Neighboring Sects') a.callback = () => window.cloudStoryVentureOutToNeighboringSects()
    else if (name === 'Cause Commotion') a.callback = () => window.cloudStoryCauseCommotion()
    else if (name === 'Attacked') a.callback = () => window.cloudStoryAttacked()
    else if (name === 'Run to Sect Leader') a.callback = () => window.cloudStoryRunToSectLeader()
    else if (name === 'Conquering Sect') a.callback = () => window.cloudStoryConqueringSect()
    else if (name === 'Major Accident') a.callback = () => window.cloudStoryMajorAccident()
    // Cloud Sect: Coalition war chain
    else if (name === 'Face the United Sects') a.callback = () => window.cloudStoryFaceUnitedSects()
    else if (name === 'Sect Armies Clash') a.callback = () => window.cloudStorySectArmiesClash()
    else if (name === 'Champions Duel') a.callback = () => window.cloudStoryChampionsDuel()
    else if (name === 'Final Confrontation') a.callback = () => window.cloudStoryFinalConfrontation()
    else if (name === 'Larger Bag Space') a.callback = () => window.claimLargerBagSpace()
    else if (name === 'Expansion Opportunity.') a.callback = () => window.businessExpansionOpportunity()
    else if (name === 'Hiring Employees.') a.callback = () => window.businessHiringEmployees()
    else if (name === 'Stability Isn’t Enough') a.callback = () => window.businessStabilityIsntEnough()
    else if (name === 'No More Games') a.callback = () => window.businessNoMoreGames()

    // Heavenly Demon detour chain
    else if (name === 'I Rather Walk a Different Path.') a.callback = () => window.hdRatherWalkDifferentPath()
    else if (name === 'Explore a Mysterious Cave.') a.callback = () => window.hdExploreMysteriousCave()
    else if (name === 'The Demonic Manual has followed you.') a.callback = () => window.hdCaveDemonicManualFollowed()
    else if (name === 'Ignore the calling and continue journey.') a.callback = () => window.hdCaveIgnoreCalling()
    else if (name === 'Settling down and starting a family.') a.callback = () => window.hdStartFamily()
    else if (name === 'Gather Groceries.') a.callback = () => window.hdGatherGroceries()
    else if (name === 'Return Home.') a.callback = () => window.hdReturnHome()
    // Demonic Monarch fate chain
    else if (name === 'Destroy the Sect from Within.') a.callback = () => window.dmDestroySectFromWithin()
    else if (name === 'Decide Fate of the Sect') a.callback = () => window.dmDecideFateOfSect()
    else if (name === 'Slaughter Sect.') a.callback = () => window.dmSlaughterSect()
    else if (name === 'Stay as a demon.') a.callback = () => window.dmStayAsDemon()
    else if (name === 'Find the demon who killed your family.') a.callback = () => window.dmFindFamilyKiller()
    else if (name === 'Capture the demon.') a.callback = () => window.dmCaptureDemon()
    else if (name === 'End the life of the demon.') a.callback = () => window.dmEndLifeOfDemon()
    else if (name === 'To end the demons is to end myself.') a.callback = () => window.dmEndDemonsEndMyself()

    // Demon path: cosmic finale
    else if (name === 'Rend the Multiverse.') a.callback = () => window.dmRendMultiverse()

    // Demon path: cabin revenge chain (run-ending)
    else if (name === 'Slaughter the family in the cabin.') a.callback = () => window.dmCabinSlaughterFamily()
    else if (name === 'The family man returns.') a.callback = () => window.dmCabinFamilyManReturns()
    else if (name === 'Recruit the family man.') a.callback = () => window.dmCabinRecruitFamilyMan()
    else if (name === 'Successful recruitment.') a.callback = () => window.dmCabinSuccessfulRecruitment()
    else if (name === 'Stay focused on your journey.') a.callback = () => window.dmCabinStayFocused()
    else if (name === 'Doze off.') a.callback = () => window.dmCabinDozeOff()
    else if (name === 'Wake up with a sack covering your face.') a.callback = () => window.dmCabinWakeUpSack()
    else if (name === 'Realization.') a.callback = () => window.dmCabinRealization()
    else if (name === 'The end.') a.callback = () => window.dmCabinTheEnd()

    // Demon cinematic outcomes
    else if (name === "What's the point.") a.callback = () => window.demonCinematicWhatsPoint()
    else if (name === 'Just lay down and rot') a.callback = () => window.demonCinematicLayDownAndRot()

    // Business continuation (Heavenly Demon opportunity + post-carpet-bomb chain)
    else if (name === 'Follow the Unseen Watcher') a.callback = () => window.businessFollowUnseenWatcher()
    else if (name === 'Offer of a lifetime') a.callback = () => window.businessOfferOfLifetime()
    else if (name === 'Accept') a.callback = () => window.businessAcceptHeavenlyDemonOffer()
    else if (name === 'Deny') a.callback = () => window.businessDenyHeavenlyDemonOffer()
    else if (name === 'Merge With the Private Military') a.callback = () => window.businessMergeWithPrivateMilitary()
    else if (name === 'Bomb Testing') a.callback = () => window.businessBombTesting()
    else if (name === 'Anti-Matter Creation') a.callback = () => window.businessAntiMatterCreation()
    else if (name === 'Warping') a.callback = () => window.businessWarping()
    else if (name === 'Storm the Heavens') a.callback = () => window.businessStormTheHeavens()
    else if (name === 'Clash with the Immortal God') a.callback = () => window.heavensClashImmortalGod()
    else if (name === 'Fall of Heaven') a.callback = () => window.heavensFallOfHeaven()
    else if (name === 'Final confrontation: Demon King') a.callback = () => window.heavensFinalConfrontationDemonKing()

    // Orthodox hide chain
    else if (name === 'Discover Hidden Orthodox Sect') a.callback = () => window.orthodoxDiscoverHiddenSect()
    else if (name === 'Saved by the mysterious sect.') a.callback = () => window.orthodoxSavedByMysteriousSect()
    else if (name === 'In exchange for utmost loyalty you will learn the way of the orthodox.') a.callback = () => window.orthodoxPledgeUtmostLoyalty()

    // Orthodox true ending war chain
    else if (name === 'Orthodox War Council') a.callback = () => window.orthodoxWarCouncil()
    else if (name === 'March to the Front') a.callback = () => window.orthodoxWarMarchToFront()
    else if (name === 'Break the Demonic Lines') a.callback = () => window.orthodoxWarBreakTheDemonicLines()
    else if (name === 'Confront the Demonic Monarch') a.callback = () => window.orthodoxWarConfrontTheMonarch()
    else if (name === 'Shatter the Mandate of Hell') a.callback = () => window.orthodoxWarShatterTheMandate()
    else if (name === 'The world ends.') a.callback = () => window.orthodoxTheWorldEnds()

    // Endings / rebirth
    else if (name === 'Rebirth.') a.callback = () => window.beginRebirth()

    return a
  }

  state.repeatableActions = state.repeatableActions.map(a => fix('repeatable', a))
  state.specialActions = state.specialActions.map(a => fix('special', a))
}

function ensureCloudConquestState() {
  if (!Array.isArray(state.cloudConqueredSects)) state.cloudConqueredSects = []
  state.cloudConqueredSects = state.cloudConqueredSects
    .map(x => String(x || ''))
    .filter(Boolean)
  if (typeof state.cloudConqueredSectsUnlocked !== 'boolean') state.cloudConqueredSectsUnlocked = false
  if (!Number.isFinite(state.searchingAndConqueringCooldown) || state.searchingAndConqueringCooldown < 0) {
    state.searchingAndConqueringCooldown = 0
  }
}

function getAvailableConquerableSectKeys() {
  ensureCloudConquestState()
  const excluded = new Set([
    'Cloud',
    'Orthodox',
    String(state.currentSect || '')
  ].filter(Boolean))
  for (const k of state.cloudConqueredSects) excluded.add(String(k || ''))

  return Object.keys(SECTS)
    .filter(k => !excluded.has(k))
}

function addConqueredSect(key) {
  ensureCloudConquestState()
  const k = String(key || '')
  if (!k) return false
  if (state.cloudConqueredSects.includes(k)) return false
  state.cloudConqueredSects.push(k)
  return true
}

function conquerRandomSectOnce(labelPrefix) {
  const avail = getAvailableConquerableSectKeys()
  if (!avail.length) {
    log('You search for a vulnerable sect... but there are none left to take.')
    return null
  }
  const pick = avail[Math.floor(Math.random() * avail.length)]
  const meta = SECTS[pick]
  const name = meta?.name || pick
  addConqueredSect(pick)
  const prefix = String(labelPrefix || '').trim()
  log(`${prefix ? prefix + ' ' : ''}Conquered: ${name}.`)
  return pick
}

// ============================================================================
// Cloud Sect — Coalition war endgame helpers
// ============================================================================
function ensureCloudCoalitionWarState() {
  if (!Number.isFinite(state.cloudCoalitionWarStage) || state.cloudCoalitionWarStage < 0) state.cloudCoalitionWarStage = 0
  if (typeof state.cloudFinalConfrontationCinematicDone !== 'boolean') state.cloudFinalConfrontationCinematicDone = false

  const w = state.cloudCoalitionWave
  if (!w || typeof w !== 'object') {
    state.cloudCoalitionWave = null
    return
  }
  const kind = String(w.kind || '')
  const okKind = kind === 'armies' || kind === 'champions'
  const idx = Math.floor(Number(w.index))
  const okIdx = Number.isFinite(idx) && idx >= 0 && idx <= 2
  if (!okKind || !okIdx) {
    state.cloudCoalitionWave = null
    return
  }
  state.cloudCoalitionWave = {
    kind,
    index: idx,
    awaitingStaminaFull: Boolean(w.awaitingStaminaFull),
    pendingStart: Boolean(w.pendingStart)
  }
}

function getNormalSectKeys() {
  return Object.keys(SECTS).filter(k => k !== 'Cloud' && k !== 'Orthodox')
}

function hasConqueredAllNormalSects() {
  ensureCloudConquestState()
  const owned = new Set(state.cloudConqueredSects)
  const normals = getNormalSectKeys()
  if (normals.length === 0) return false
  for (const k of normals) {
    if (!owned.has(k)) return false
  }
  return true
}

function injectCloudCoalitionWarActionsIfReady() {
  ensureCloudCoalitionWarState()
  const shouldUnlock = Boolean(state.cloudConqueredSectsUnlocked && hasConqueredAllNormalSects())
  const names = ['Face the United Sects', 'Sect Armies Clash', 'Champions Duel', 'Final Confrontation']

  if (!shouldUnlock) {
    removeSpecialActionsByName(names)
    if (state.cloudCoalitionWarStage !== 0) state.cloudCoalitionWarStage = 0
    if (state.cloudCoalitionWave) state.cloudCoalitionWave = null
    return
  }

  // If a wave is active, do not show these buttons.
  if (state.cloudCoalitionWave) {
    removeSpecialActionsByName(names)
    return
  }

  const stage = clampNonNegativeInt(state.cloudCoalitionWarStage)
  removeSpecialActionsByName(names)

  if (stage <= 0) {
    upsertSpecialActionByName({
      name: 'Face the United Sects',
      icon: '⚔️',
      description: 'The heavenly demon, demonic monarch, and orthodox sects put aside their differences and joined together under a common enemy. You, the player, the conquerer. This will be one of the largest wars in history.',
      disabled: false,
      callback: () => window.cloudStoryFaceUnitedSects()
    })
    return
  }

  if (stage === 1) {
    upsertSpecialActionByName({
      name: 'Sect Armies Clash',
      icon: '🛡️',
      description: 'Player’s conquered sects fight coalition armies.',
      disabled: false,
      callback: () => window.cloudStorySectArmiesClash()
    })
    return
  }

  if (stage === 3) {
    upsertSpecialActionByName({
      name: 'Champions Duel',
      icon: '🥊',
      description: 'You get to personally fight some mysteriously ranked personel of the coalition.',
      disabled: false,
      callback: () => window.cloudStoryChampionsDuel()
    })
    return
  }

  if (stage === 4) {
    upsertSpecialActionByName({
      name: 'Final Confrontation',
      icon: '🔥',
      description: 'The coalition prepared for you. A fusion of a sect elder from each of the 3 sects. Very close to a god.',
      disabled: false,
      callback: () => window.cloudStoryFinalConfrontation()
    })
  }
}

// ============================================================================
// WEIGHTED RANDOM SELECTION
// ============================================================================
function weightedRandom(items, weightKey = 'weight') {
  const totalWeight = items.reduce((sum, item) => sum + item[weightKey], 0)
  let random = Math.random() * totalWeight
  
  for (const item of items) {
    random -= item[weightKey]
    if (random <= 0) return item
  }
  
  return items[items.length - 1]
}

// ============================================================================
// MANUAL MOVE HELPERS
// ============================================================================
function getAvailableManualMoves() {
  const equippedType = getEquippedManualType()
  if (!equippedType) return []

  const learnedType = String(state.manualType || '')
  const learnedTier = clampNonNegativeInt(state.manualTier)
  const tier = (equippedType === learnedType && learnedTier > 0) ? learnedTier : 1

  const moves = MANUAL_MOVES[equippedType] || []
  return moves.filter(m => m.tier <= tier)
}

function getEquippedManualType() {
  const name = String(state.equipped?.manual || '')
  if (!name) return null

  if (name === 'Beginner Cultivation Manual') return 'Cloud'

  if (name === 'Hidden Heavenly Demon Manual') return 'Demon'
  if (name === 'Demonic Manual') return 'Demon'
  if (name.startsWith('Heavenly Demon Manual')) return 'Demon'
  if (name.startsWith('Demon Monarch Manual')) return 'Demon'
  if (name === 'Orthodox Manual') return 'Orthodox'

  const tiered = name.match(/^(.*) Manual \(Tier (\d+)\)$/)
  if (tiered) {
    const type = String(tiered[1] || '').trim()
    if (type === 'Heavenly Demon') return 'Demon'
    if (type === 'Demon Monarch') return 'Demon'
    return type || null
  }

  return null
}

function getAffinityScore(affinityType) {
  const aff = state.affinities.find(a => a.type === affinityType)
  return aff ? aff.score : 0
}

function getAffinityBonus(affinityType) {
  const score = getAffinityScore(affinityType)
  return score / 50 // Returns 0.0 to 1.0 multiplier
}

function canUseSectPanelActions() {
  // 2nd major realm or above (index 1+)
  return state.cultivationMajorIndex >= 1
}

function getSectTierFromAlignmentScore(score) {
  const s = Math.floor(Number(score) || 0)
  if (s < 5) return 0
  if (s <= 19) return 1
  if (s <= 29) return 2
  if (s <= 39) return 3
  if (s <= 45) return 4
  return 5
}

function getManualMultipliersForSectTier(tier) {
  const t = Math.floor(Number(tier) || 0)
  if (t <= 0) return { qi: 1, str: 1, hp: 1 }
  // Sect tier bonus (manual effectiveness):
  // Tier 1: +20%  (1.2x)
  // Tier 2: +40%  (1.4x)
  // Tier 3: +60%  (1.6x)
  // Tier 4: +80%  (1.8x)
  // Tier 5: +100% (2.0x)
  if (t === 1) return { qi: 1.2, str: 1.2, hp: 1.2 }
  if (t === 2) return { qi: 1.4, str: 1.4, hp: 1.4 }
  if (t === 3) return { qi: 1.6, str: 1.6, hp: 1.6 }
  if (t === 4) return { qi: 1.8, str: 1.8, hp: 1.8 }
  return { qi: 2.0, str: 2.0, hp: 2.0 }
}

function getCurrentSectDisplay() {
  const id = state.currentSect
  if (!id) return null
  if (id === 'Heavenly Demon' || id === 'Demon Monarch') {
    const fallbackTier = 5
    const t = Math.floor(Number(state.sectTier) || 0)
    const tier = (t >= 1 && t <= 5) ? t : fallbackTier
    return { id, name: id + ' Sect', icon: '', tier }
  }
  const sect = SECTS[id]
  if (sect) {
    const alignment = getAffinityScore(id)
    const tier = getSectTierFromAlignmentScore(alignment)
    return { id, name: sect.name, icon: '', tier }
  }
  return { id, name: String(id), icon: '', tier: Number.isFinite(state.sectTier) ? state.sectTier : 0 }
}

function applySectMultipliers(tier) {
  state.sectTier = Math.floor(Number(tier) || 0)
  state.sectMultipliers = getManualMultipliersForSectTier(state.sectTier)
  updateCombatStats()
}

function clearSectState() {
  state.hasJoinedSect = false
  state.currentSect = null
  state.sectTier = 0
  state.sectMultipliers = { qi: 1, str: 1, hp: 1 }
  state.sectJoinPickerOpen = false
  state.sectRankPyramidOpen = false
  state.sectRankLayer = 'outer'
  state.sectRankNumber = 6
  state.sectIncomeSeconds = 0
  if (state.combatContext && typeof state.combatContext === 'object' && state.combatContext.type === 'sectRankDuel') {
    state.combatContext = null
  }
  // Keep demon-path progression flags as-is (unaffiliated demonic cultivator is allowed).
  state.manualType = null
  state.manualTier = 0
  updateCombatStats()
}

window.openSectJoinPicker = () => {
  if (!canUseSectPanelActions()) return
  if (state.hasJoinedSect) return
  state.sectJoinPickerOpen = true
  render()
  saveGame()
}

window.joinSectFromPanel = (affinityType) => {
  if (!canUseSectPanelActions()) return
  if (state.hasJoinedSect) return

  const type = String(affinityType || '')
  const sect = SECTS[type]
  if (!sect) return

  const alignment = getAffinityScore(type)
  if (alignment < 5) return

  const tier = getSectTierFromAlignmentScore(alignment)
  state.hasJoinedSect = true
  state.currentSect = type
  state.manualType = type
  state.manualTier = 1
  state.sectRankLayer = 'outer'
  state.sectRankNumber = 6
  state.sectRankPyramidOpen = false
  applySectMultipliers(tier)

  log(`You join the ${sect.name}! (Tier ${tier})`)
  log(`Sect Manual Bonuses: Qi ${formatMultiplier(state.sectMultipliers.qi)}, STR ${formatMultiplier(state.sectMultipliers.str)}, HP ${formatMultiplier(state.sectMultipliers.hp)}`)

  initializeManualMoveCooldowns()
  state.sectJoinPickerOpen = false
  render()
  saveGame()
}

window.leaveSectFromPanel = () => {
  if (!state.hasJoinedSect) return
  if (!canUseSectPanelActions()) return
  if (state.joinedOrthodoxSect) return

  const current = getCurrentSectDisplay()
  if (current) {
    log(`You leave the ${current.name}.`)
  }
  clearSectState()
  render()
  saveGame()
}

function renderSectPanel() {
  let panel = document.getElementById('sect-panel')
  const isNewPanel = !panel

  if (!panel) {
    panel = document.createElement('div')
    panel.id = 'sect-panel'
    panel.className = 'sect-panel draggable-panel'

    applySavedPanelSize(panel, 'sect')
    getSidePanelsMount().appendChild(panel)
    attachPanelResizePersistence(panel, 'sect')

    const pos = state.panelPositions?.sect
    if (pos && (pos.x !== 0 || pos.y !== 0)) {
      panel.style.transform = `translate(${pos.x}px, ${pos.y}px)`
    }
  }

  const unlocked = canUseSectPanelActions()
  const joined = Boolean(state.hasJoinedSect && state.currentSect)
  const current = joined ? getCurrentSectDisplay() : null

  const demonOnly = Boolean(state.demonMonarchOnly)

  const showPicker = Boolean(!joined && unlocked && state.sectJoinPickerOpen)
  const affinitySects = (Array.isArray(state.affinities) ? state.affinities : [])
    .filter(a => a && typeof a.type === 'string' && Number.isFinite(a.score))
    .filter(a => a.score >= 5)
    .map(a => {
      const sect = SECTS[a.type]
      if (!sect) return null
      const tier = getSectTierFromAlignmentScore(a.score)
      return { affinity: a.type, alignment: a.score, tier, name: sect.name }
    })
    .filter(Boolean)
    .sort((a, b) => (b.tier - a.tier) || (b.alignment - a.alignment) || String(a.name).localeCompare(String(b.name)))

  const joinDisabled = joined || !unlocked

  const currentManualTier = clampNonNegativeInt(state.manualTier)
  const nextManualTier = currentManualTier + 1
  const nextManualCost = nextManualTier <= 20 ? getManualUpgradeCost(nextManualTier) : null
  const cpNow = clampNonNegativeNumber(state.contributionPoints)
  const canUpgradeManual = joined && Number.isFinite(nextManualCost) && nextManualCost > 0 && currentManualTier < 20 && cpNow >= nextManualCost

  const rankLabel = joined ? getSectPyramidRankLabel(state.sectRankLayer, state.sectRankNumber) : ''
  const showRanks = Boolean(joined && state.sectRankPyramidOpen)
  const incomeNow = joined ? getSectRankIncomePerMinute(state.sectRankLayer, state.sectRankNumber) : { low: 0, mid: 0, high: 0 }
  const bonusParts = []
  if ((incomeNow.low || 0) > 0) bonusParts.push(`+${formatNumber(incomeNow.low)} Low Spirit Stones/min`)
  if ((incomeNow.mid || 0) > 0) bonusParts.push(`+${formatNumber(incomeNow.mid)} Mid Spirit Stones/min`)
  if ((incomeNow.high || 0) > 0) bonusParts.push(`+${formatNumber(incomeNow.high)} High Spirit Stones/min`)
  const bonusText = bonusParts.length ? bonusParts.join(', ') : 'None'

  panel.innerHTML = `
    <div class="panel-header" onmousedown="window.startDrag(event, 'sect-panel')">
      <h3>SECT</h3>
      <span class="drag-hint">✥ Drag to move ✥</span>
    </div>
    <div class="panel-content">
      ${!joined ? `
        <button class="sect-gate-btn" onclick="window.openSectJoinPicker()" ${joinDisabled ? 'disabled' : ''}>
          <div class="sect-gate-title">Join a Sect</div>
          ${!unlocked ? `<div class="sect-gate-sub">Requires higher realm</div>` : (demonOnly ? `<div class="sect-gate-sub">Only the Demon Monarch Sect will accept you</div>` : `<div class="sect-gate-sub">Choose a sect aligned to your affinities</div>`)}
        </button>

        ${showPicker ? `
          <div class="sect-picker">
            ${demonOnly ? `
              <button class="sect-choice-btn" onclick="window.joinDemonMonarchSect()">
                <div class="sect-choice-left">
                  <span class="sect-choice-icon"><img class="inline-asset-icon" src="assets/demon.png" alt="" aria-hidden="true"></span>
                  <span class="sect-choice-name">Demon Monarch Sect</span>
                </div>
                <div class="sect-choice-right">
                  <span class="sect-choice-tier">Tier 5</span>
                </div>
              </button>
            ` : (affinitySects.length === 0 ? `
              <div class="sect-empty">No eligible sects. (Need affinity alignment ≥ 5)</div>
            ` : `
              ${affinitySects.map(s => `
                ${(() => {
                  const iconSrc = getAffinityAssetIconSrc(s.affinity) || ''
                  const iconHtml = iconSrc
                    ? `<img class="inline-asset-icon" src="${escapeHtml(iconSrc)}" alt="" aria-hidden="true">`
                    : renderUiIcon('spark')
                  return `
                <button class="sect-choice-btn" onclick="window.joinSectFromPanel('${escapeHtml(s.affinity)}')">
                  <div class="sect-choice-left">
                    <span class="sect-choice-icon">${iconHtml}</span>
                    <span class="sect-choice-name">${escapeHtml(s.name)}</span>
                  </div>
                  <div class="sect-choice-right">
                    <span class="sect-choice-tier">Tier ${s.tier}</span>
                    <span class="sect-choice-align">Align ${formatNumber(s.alignment)}/50</span>
                  </div>
                </button>
                  `.trim()
                })()}
              `).join('')}
            `)}
          </div>
        ` : ''}
      ` : `
        ${showRanks ? `
          <div class="sect-ranks-header">
            <button class="sect-ranks-back" onclick="window.sectCloseRanks()">BACK</button>
            <div class="sect-ranks-title">SECT RANKS</div>
            <div style="width:72px;"></div>
          </div>
          <div class="sect-ranks-bonus">Current Bonus: ${escapeHtml(bonusText)}</div>
          <div class="sect-ranks-current">Current: ${escapeHtml(rankLabel)}</div>
          <div class="sect-ranks-pyramid">${renderSectRankPyramidHtml()}</div>
        ` : `
          <div class="sect-btn-grid top">
            <button class="sect-btn" style="grid-column: 1 / -1;" disabled>Sect Shop</button>
          </div>

          <div class="sect-btn-grid mid">
            <button class="sect-btn" onclick="window.upgradeSectManual()" ${canUpgradeManual ? '' : 'disabled'}>Upgrade Manual</button>
            <button class="sect-btn" onclick="window.sectGetQuest()">Get Quest</button>
            <button class="sect-btn" onclick="window.sectShowRank()">Sect Ranks</button>
          </div>

          <div class="sect-info">
            <div>Current Sect: ${current ? escapeHtml(current.name) : 'Unknown'}</div>
            ${String(state.customSectName || '').trim() ? `<div>Your Sect Name: ${escapeHtml(String(state.customSectName).trim())}</div>` : ''}
            <div>Sect Tier: ${current ? current.tier : 0}</div>
            <div>Sect Rank: ${escapeHtml(rankLabel)}</div>
            <div>Sect Manual: ${escapeHtml(String(state.manualType || 'None'))} Manual</div>
            <div>Current Manual Tier: ${formatNumber(currentManualTier)}</div>
            <div>Next Manual Tier Cost: ${currentManualTier >= 20 ? 'MAX' : formatPoints(nextManualCost || 0)}</div>
            <div>Contribution Points: ${formatPoints(state.contributionPoints || 0)}</div>
          </div>

          <button class="sect-leave-btn" onclick="window.leaveSectFromPanel()" ${(unlocked && !state.joinedOrthodoxSect) ? '' : 'disabled'}>
            LEAVE SECT
          </button>
        `}
      `}
    </div>
  `

  if (isNewPanel) {
    // Panel was just created
  }
}

function initializeManualMoveCooldowns() {
  const moves = getAvailableManualMoves()
  moves.forEach(move => {
    const cooldownKey = `manual_${move.name.replace(/\s+/g, '_')}`
    if (!(cooldownKey in state.playerCooldowns)) {
      state.playerCooldowns[cooldownKey] = 0
    }
  })
}

// ============================================================================
// SAVE/LOAD SYSTEM
// ============================================================================

const META_STORAGE_KEY = 'cultivationSagaMeta'

const LEADERBOARD_CFG_STORAGE_URL_KEY = 'cultivationSagaSupabaseUrl'
const LEADERBOARD_CFG_STORAGE_ANON_KEY = 'cultivationSagaSupabaseAnonKey'

function __readLeaderboardCfgOverrideFromStorage() {
  try {
    const url = String(localStorage.getItem(LEADERBOARD_CFG_STORAGE_URL_KEY) || '').trim()
    const anonKey = String(localStorage.getItem(LEADERBOARD_CFG_STORAGE_ANON_KEY) || '').trim()
    return { url, anonKey }
  } catch (_) {
    return { url: '', anonKey: '' }
  }
}

function __readLeaderboardCfgOverrideFromWindow() {
  try {
    const w = window
    if (!w || typeof w !== 'object') return { url: '', anonKey: '' }
    const url = String(w.__CS_SUPABASE_URL || w.__CULTIVATION_SAGA_SUPABASE_URL || '').trim()
    const anonKey = String(w.__CS_SUPABASE_ANON_KEY || w.__CULTIVATION_SAGA_SUPABASE_ANON_KEY || '').trim()
    return { url, anonKey }
  } catch (_) {
    return { url: '', anonKey: '' }
  }
}

function __sanitizeSupabaseUrl(raw) {
  let url = String(raw || '').trim()
  if (!url) return ''

  // Strip simple wrapping quotes (common when users paste values into secrets).
  if ((url.startsWith('"') && url.endsWith('"')) || (url.startsWith("'") && url.endsWith("'"))) {
    url = url.slice(1, -1).trim()
  }
  if (!url) return ''

  // Accept schemeless Supabase URLs by assuming https.
  if (!/^https?:\/\//i.test(url)) {
    const looksLikeHost = /^[a-z0-9.-]+\.[a-z]{2,}$/i.test(url)
    if (looksLikeHost) url = `https://${url}`
  }

  // Avoid accidentally accepting non-URLs.
  if (!/^https?:\/\//i.test(url)) return ''
  return url
}

function getLeaderboardConfig() {
  // Vite exposes VITE_* env vars to client bundles, but only reliably inlines
  // them when accessed as `import.meta.env.VITE_*` (no optional chaining).
  let envUrl = ''
  let envAnonKey = ''
  try {
    envUrl = String(import.meta.env.VITE_SUPABASE_URL || '').trim()
    envAnonKey = String(import.meta.env.VITE_SUPABASE_ANON_KEY || '').trim()
  } catch (_) {
    envUrl = ''
    envAnonKey = ''
  }

  const win = __readLeaderboardCfgOverrideFromWindow()
  const stored = __readLeaderboardCfgOverrideFromStorage()

  const url = __sanitizeSupabaseUrl(envUrl || win.url || stored.url)
  const anonKey = String(envAnonKey || win.anonKey || stored.anonKey || '').trim()

  const source = (envUrl && envAnonKey)
    ? 'env'
    : (win.url && win.anonKey)
      ? 'window'
      : (stored.url && stored.anonKey)
        ? 'localStorage'
        : ''

  return { url, anonKey, source }
}

function isLeaderboardConfigured() {
  const cfg = getLeaderboardConfig()
  return Boolean(cfg.url && cfg.anonKey)
}

// Optional runtime helper for live static builds (e.g. GitHub Pages) where secrets
// were not injected at build time. This does not add UI; it only exposes a helper.
window.setLeaderboardConfig = (url, anonKey) => {
  const safeUrl = __sanitizeSupabaseUrl(url)
  let key = String(anonKey || '').trim()
  if ((key.startsWith('"') && key.endsWith('"')) || (key.startsWith("'") && key.endsWith("'"))) {
    key = key.slice(1, -1).trim()
  }
  if (!safeUrl || !key) return false
  try {
    localStorage.setItem(LEADERBOARD_CFG_STORAGE_URL_KEY, safeUrl)
    localStorage.setItem(LEADERBOARD_CFG_STORAGE_ANON_KEY, key)
  } catch (_) {
    return false
  }
  try { leaderboardScheduleSync('set_config') } catch (_) {}
  try { window.refreshLeaderboards() } catch (_) {}
  return true
}

function getCurrentMajorRealmLabel() {
  try {
    const realm = getCurrentCultivationRealm()
    const major = String(realm.major || '')
    const sub = String(realm.sub || '')
    if (!major) return ''
    return sub ? `${major}-${sub}` : major
  } catch (_) {
    return ''
  }
}

function getMajorRealmLabelByIndex(majorIndex, subIndex, isDemon) {
  try {
    const realmArray = isDemon ? DEMON_REALMS : CULTIVATION_REALMS
    const mi = clampNonNegativeInt(majorIndex)
    const major = realmArray[mi]
    const subs = major && Array.isArray(major.subRealms) ? major.subRealms : []
    const siRaw = clampNonNegativeInt(subIndex)
    const si = subs.length ? Math.max(0, Math.min(subs.length - 1, siRaw)) : 0
    const sub = subs[si]
    const majorName = String(major?.major || '')
    const subName = String(sub?.sub || '')
    if (!majorName) return ''
    return subName ? `${majorName}-${subName}` : majorName
  } catch (_) {
    return ''
  }
}

function syncBestMajorRealm() {
  const idx = clampNonNegativeInt(state.cultivationMajorIndex)
  const subIdx = clampNonNegativeInt(state.cultivationSubIndex)
  const currentIsDemon = Boolean(state.isDemonPath)

  if (!state.bestMajorRealm || typeof state.bestMajorRealm !== 'object') {
    state.bestMajorRealm = { index: 0, subIndex: 0, isDemon: false, label: '' }
  }

  const prevIdx = clampNonNegativeInt(state.bestMajorRealm.index)
  const prevSubIdx = clampNonNegativeInt(state.bestMajorRealm.subIndex)

  // Migration: older saves may have a label without the minor realm.
  // Refresh it from the stored best indices even if the player is currently below their best.
  try {
    const expected = getMajorRealmLabelByIndex(prevIdx, prevSubIdx, Boolean(state.bestMajorRealm.isDemon))
    if (expected && String(state.bestMajorRealm.label || '') !== expected) {
      state.bestMajorRealm.label = expected
      try { leaderboardScheduleSync('best_major_label_migrate') } catch (_) {}
    }
  } catch (_) {}

  if (idx < prevIdx) return
  if (idx === prevIdx && subIdx < prevSubIdx) return

  const shouldUpdateLabel = () => state.bestMajorRealm.label === ''
    || state.bestMajorRealm.label !== getCurrentMajorRealmLabel()

  // If equal index, prefer non-demon label stability; otherwise update.
  if (idx === prevIdx && subIdx === prevSubIdx && Boolean(state.bestMajorRealm.isDemon) && !currentIsDemon) {
    state.bestMajorRealm.isDemon = currentIsDemon
    state.bestMajorRealm.label = getCurrentMajorRealmLabel()
    return
  }

  if (idx > prevIdx || subIdx > prevSubIdx || shouldUpdateLabel()) {
    state.bestMajorRealm.index = idx
    state.bestMajorRealm.subIndex = subIdx
    state.bestMajorRealm.isDemon = currentIsDemon
    state.bestMajorRealm.label = getCurrentMajorRealmLabel()
    try { leaderboardScheduleSync('best_major_update') } catch (_) {}
  }
}

function syncBestRebirthPoints() {
  const cur = clampNonNegativeInt(state.rebirthPoints)
  if (!Number.isFinite(state.bestRebirthPoints) || state.bestRebirthPoints < 0) state.bestRebirthPoints = 0
  state.bestRebirthPoints = Math.max(clampNonNegativeInt(state.bestRebirthPoints), cur)
}

function computeRebirthPointsFromSpiritStones() {
  const low = clampNonNegativeInt(state.spiritStonesLow)
  const mid = clampNonNegativeInt(state.spiritStonesMid)
  const high = clampNonNegativeInt(state.spiritStonesHigh)
  const base = Math.floor(low / 500) + Math.floor(mid / 500) + Math.floor(high / 500)
  const mult = getRebirthSpiritStoneRpMultiplier()
  return Math.floor(base * mult)
}

function syncRebirthPointsWithSpiritStoneBonus() {
  const current = clampNonNegativeInt(computeRebirthPointsFromSpiritStones())
  const prev = Number.isFinite(state.rebirthStoneBonusLast)
    ? clampNonNegativeInt(state.rebirthStoneBonusLast)
    : 0
  const delta = current - prev
  if (delta === 0) return

  if (!Number.isFinite(state.rebirthPoints) || state.rebirthPoints < 0) state.rebirthPoints = 0
  state.rebirthPoints = Math.max(0, Math.floor(state.rebirthPoints + delta))
  state.rebirthStoneBonusLast = current
  try { syncBestRebirthPoints() } catch (_) {}
  try { saveMeta() } catch (_) {}
}

function normalizeRebirthUpgrades(u) {
  const up = (u && typeof u === 'object') ? u : {}
  const minRootCount = clampNonNegativeInt(up.minRootCount)
  const maxRootCount = clampNonNegativeInt(up.maxRootCount)
  const bloodlineBias = clampNonNegativeNumber(up.bloodlineBias)
  const resetUnlockProgress = clampNonNegativeInt(up.resetUnlockProgress)
  const qiMultiplierLevel = clampNonNegativeInt(up.qiMultiplierLevel)
  const herbGatherSpeedLevel = clampNonNegativeInt(up.herbGatherSpeedLevel)
  const herbMultiGatherLevel = clampNonNegativeInt(up.herbMultiGatherLevel)
  const strengthMultiplierLevel = clampNonNegativeInt(up.strengthMultiplierLevel)
  const healthMultiplierLevel = clampNonNegativeInt(up.healthMultiplierLevel)
  const specialCooldownLevel = clampNonNegativeInt(up.specialCooldownLevel)
  const repeatableSpeedLevel = clampNonNegativeInt(up.repeatableSpeedLevel)
  const autoGatherLevel = clampNonNegativeInt(up.autoGatherLevel)
  const autoCraftLevel = clampNonNegativeInt(up.autoCraftLevel)
  const pillCraftSpeedLevel = clampNonNegativeInt(up.pillCraftSpeedLevel)
  const minRootBonusLevel = clampNonNegativeInt(up.minRootBonusLevel)
  const rootLuckLevel = clampNonNegativeInt(up.rootLuckLevel)
  const maxRootBonusLevel = clampNonNegativeInt(up.maxRootBonusLevel)
  const extraRerollsLevel = clampNonNegativeInt(up.extraRerollsLevel)
  const bloodlineLuckLevel = clampNonNegativeInt(up.bloodlineLuckLevel)
  const multiAffinityLuckLevel = clampNonNegativeInt(up.multiAffinityLuckLevel)
  const affinityAlignmentLuckLevel = clampNonNegativeInt(up.affinityAlignmentLuckLevel)
  const storyLuckLuckLevel = clampNonNegativeInt(up.storyLuckLuckLevel)
  const spiritStoneRpMultLevel = clampNonNegativeInt(up.spiritStoneRpMultLevel)
  const questDropChanceLevel = clampNonNegativeInt(up.questDropChanceLevel)
  return {
    minRootCount: Math.max(1, minRootCount || 1),
    maxRootCount: Math.max(1, maxRootCount || 5),
    bloodlineBias: Number.isFinite(bloodlineBias) ? bloodlineBias : 0,
    canRerollFate: Boolean(up.canRerollFate),
    resetUnlockProgress: Math.max(0, Math.min(100, resetUnlockProgress)),
    qiMultiplierLevel: Math.max(0, qiMultiplierLevel),

    herbGatherSpeedLevel: Math.max(0, herbGatherSpeedLevel),
    herbMultiGatherLevel: Math.max(0, herbMultiGatherLevel),
    strengthMultiplierLevel: Math.max(0, strengthMultiplierLevel),
    healthMultiplierLevel: Math.max(0, healthMultiplierLevel),
    specialCooldownLevel: Math.max(0, specialCooldownLevel),
    repeatableSpeedLevel: Math.max(0, repeatableSpeedLevel),
    autoGatherLevel: Math.max(0, autoGatherLevel),
    autoCraftLevel: Math.max(0, autoCraftLevel),
    pillCraftSpeedLevel: Math.max(0, pillCraftSpeedLevel),
    minRootBonusLevel: Math.max(0, minRootBonusLevel),

    rootLuckLevel: Math.max(0, rootLuckLevel),
    maxRootBonusLevel: Math.max(0, maxRootBonusLevel),
    extraRerollsLevel: Math.max(0, extraRerollsLevel),
    bloodlineLuckLevel: Math.max(0, bloodlineLuckLevel),
    multiAffinityLuckLevel: Math.max(0, multiAffinityLuckLevel),
    affinityAlignmentLuckLevel: Math.max(0, affinityAlignmentLuckLevel),
    storyLuckLuckLevel: Math.max(0, storyLuckLuckLevel),
    spiritStoneRpMultLevel: Math.max(0, spiritStoneRpMultLevel),
    questDropChanceLevel: Math.max(0, questDropChanceLevel)
  }
}

function getRebirthInfiniteNodeCost(level, scale = 1.5) {
  const lvl = clampNonNegativeInt(level)
  const s = Number(scale)
  const safeScale = (Number.isFinite(s) && s > 1) ? s : 1.5
  return Math.max(1, Math.ceil(1 * Math.pow(safeScale, lvl)))
}

function getRebirthSpiritStoneRpMultiplier() {
  const u = normalizeRebirthUpgrades(state.rebirthUpgrades)
  state.rebirthUpgrades = u
  // Each purchase adds +2× (1 + 2*level)
  return 1 + (2 * clampNonNegativeInt(u.spiritStoneRpMultLevel))
}

function getRebirthStrengthMultiplier() {
  const u = normalizeRebirthUpgrades(state.rebirthUpgrades)
  state.rebirthUpgrades = u
  return 1 + (0.1 * clampNonNegativeInt(u.strengthMultiplierLevel))
}

function getRebirthHealthMultiplier() {
  const u = normalizeRebirthUpgrades(state.rebirthUpgrades)
  state.rebirthUpgrades = u
  return 1 + (0.1 * clampNonNegativeInt(u.healthMultiplierLevel))
}

function getRebirthHerbGatherSpeedMultiplier() {
  const u = normalizeRebirthUpgrades(state.rebirthUpgrades)
  state.rebirthUpgrades = u
  return 1 + (0.05 * clampNonNegativeInt(u.herbGatherSpeedLevel))
}

function getRebirthHerbsPerGather() {
  const u = normalizeRebirthUpgrades(state.rebirthUpgrades)
  state.rebirthUpgrades = u
  const lvl = clampNonNegativeInt(u.herbMultiGatherLevel)
  // +10% per level; 100% => 2 herbs, 200% => 3 herbs, etc.
  return 1 + Math.floor(lvl / 10)
}

function isRebirthAutoGatherUnlocked() {
  const u = normalizeRebirthUpgrades(state.rebirthUpgrades)
  state.rebirthUpgrades = u
  // +5% per level; unlock at 100%
  return clampNonNegativeInt(u.autoGatherLevel) >= 20
}

function isRebirthAutoCraftUnlocked() {
  const u = normalizeRebirthUpgrades(state.rebirthUpgrades)
  state.rebirthUpgrades = u
  // +5% per level; unlock at 100%
  return clampNonNegativeInt(u.autoCraftLevel) >= 20
}

function getRebirthPillCraftDurationReductionMs() {
  const u = normalizeRebirthUpgrades(state.rebirthUpgrades)
  state.rebirthUpgrades = u
  return clampNonNegativeInt(u.pillCraftSpeedLevel) * 250
}

function getRebirthRepeatableDurationReductionMs() {
  const u = normalizeRebirthUpgrades(state.rebirthUpgrades)
  state.rebirthUpgrades = u
  return clampNonNegativeInt(u.repeatableSpeedLevel) * 250
}

function getRebirthSpecialCooldownReductionSeconds() {
  const u = normalizeRebirthUpgrades(state.rebirthUpgrades)
  state.rebirthUpgrades = u
  return clampNonNegativeInt(u.specialCooldownLevel) * 0.5
}

function getRebirthQiMultiplierLevel() {
  const u = normalizeRebirthUpgrades(state.rebirthUpgrades)
  state.rebirthUpgrades = u
  return clampNonNegativeInt(u.qiMultiplierLevel)
}

function getRebirthQiMultiplier() {
  const lvl = getRebirthQiMultiplierLevel()
  return 1 + (0.2 * lvl)
}

function getRebirthQiMultiplierNextCost() {
  const lvl = getRebirthQiMultiplierLevel()
  const base = 1
  const cost = base * Math.pow(1.5, lvl)
  // Keep it simple and always increasing.
  return Math.max(1, Math.ceil(cost))
}

function ensureRebirthStoryAwards() {
  if (!state.rebirthStoryAwards || typeof state.rebirthStoryAwards !== 'object') state.rebirthStoryAwards = {}
}

function awardStoryMilestoneOnce(key, points, reason) {
  ensureRebirthStoryAwards()
  const k = String(key || '')
  if (!k) return
  if (state.rebirthStoryAwards[k]) return
  state.rebirthStoryAwards[k] = true
  awardRebirthPoints(points, reason)
}

function reconcileRebirthPointsFromStoryProgress() {
  // This runs during saveGame() so story progression awards happen naturally while playing.
  ensureRebirthStoryAwards()

  // Cloud Sect story progress
  const cloudStage = clampNonNegativeInt(state.cloudCultivatorStoryStage)
  if (cloudStage >= 1) awardStoryMilestoneOnce('cloud_stage_1', 1, 'Cloud Sect')
  if (cloudStage >= 3) awardStoryMilestoneOnce('cloud_stage_3', 2, 'Cloud Sect')
  if (cloudStage >= 5) awardStoryMilestoneOnce('cloud_stage_5', 3, 'Cloud Sect')

  // Cloud conquest / coalition endgame
  if (Boolean(state.cloudConqueredSectsUnlocked)) awardStoryMilestoneOnce('cloud_conquest_unlocked', 5, 'Cloud Conquest')
  const warStage = clampNonNegativeInt(state.cloudCoalitionWarStage)
  if (warStage >= 3) awardStoryMilestoneOnce('cloud_coalition_mid', 8, 'Cloud Coalition')
  if (Boolean(state.cloudFinalConfrontationCinematicDone) || warStage >= 5) {
    awardStoryMilestoneOnce('cloud_coalition_final', 20, 'Cloud Coalition Finale')
  }

  // Business path milestones
  if (Boolean(state.hasStartedBusiness)) awardStoryMilestoneOnce('biz_started', 2, 'Business')
  if (Boolean(state.businessUpgradedExpansion)) awardStoryMilestoneOnce('biz_expansion', 2, 'Business')
  if (Boolean(state.businessUpgradedEmployees)) awardStoryMilestoneOnce('biz_employees', 2, 'Business')
  if (Boolean(state.businessStormHeavensStarted)) awardStoryMilestoneOnce('biz_storm_started', 10, 'Storm the Heavens')

  // Heavens endings (do not end the run)
  const heavens = state.heavensEnding
  if (heavens === 'demonKingDeath') awardStoryMilestoneOnce('heavens_ending_demonKingDeath', 55, 'Heavens: Demon King')
  if (heavens === 'tartarusEaten') awardStoryMilestoneOnce('heavens_ending_tartarus', 45, 'Heavens: Tartarus')

  // Orthodox true ending chain
  const oStage = clampNonNegativeInt(state.orthodoxWarStage)
  if (oStage >= 1) awardStoryMilestoneOnce('orthodox_war_1', 2, 'Orthodox War')
  if (oStage >= 3) awardStoryMilestoneOnce('orthodox_war_3', 4, 'Orthodox War')
  if (oStage >= 5) awardStoryMilestoneOnce('orthodox_war_5', 6, 'Orthodox War')
  if (Boolean(state.orthodoxTrueEndingDone)) awardStoryMilestoneOnce('orthodox_true_ending', 50, 'True Ending')

  // Demon cinematics / endings
  if (Boolean(state.demonCosmicFinaleDone)) awardStoryMilestoneOnce('demon_cosmic_finale', 80, 'Demonic Finale')
  const cabin = String(state.demonCabinRevengeStage || '')
  if (cabin === 'end') awardStoryMilestoneOnce('demon_cabin_end', 20, 'Cabin Betrayal')
  const dmStage = String(state.dmFate?.stage || '')
  if (dmStage === 'dead') awardStoryMilestoneOnce('dm_good_self_extinction', 35, 'Self-Extinction')
  if (dmStage === 'done') awardStoryMilestoneOnce('dm_neutral_blood_price', 25, 'Blood Price')

  // Heavenly Demon detour demon cinematic
  if (Boolean(state.hdDetour?.demonCinematicResolved)) awardStoryMilestoneOnce('hd_demon_cinematic', 10, 'Heavenly Detour')
}

function saveMeta() {
  try {
    const meta = {
      // Identity
      playerName: (state.playerName && String(state.playerName).trim()) ? String(state.playerName).trim() : '',
      playerGender: (state.playerGender === 'male' || state.playerGender === 'female') ? state.playerGender : null,

      rebirthPoints: clampNonNegativeInt(state.rebirthPoints),
      bestRebirthPoints: clampNonNegativeInt(state.bestRebirthPoints),
      rebirthStoneBonusLast: clampNonNegativeInt(state.rebirthStoneBonusLast),
      rebirthUpgrades: normalizeRebirthUpgrades(state.rebirthUpgrades),
      bestMajorRealm: {
        index: clampNonNegativeInt(state.bestMajorRealm?.index),
        subIndex: clampNonNegativeInt(state.bestMajorRealm?.subIndex),
        isDemon: Boolean(state.bestMajorRealm?.isDemon),
        label: String(state.bestMajorRealm?.label || '')
      }
    }
    localStorage.setItem(META_STORAGE_KEY, JSON.stringify(meta))
  } catch (_) {}
}

function applyMetaFromStorage() {
  try {
    const raw = localStorage.getItem(META_STORAGE_KEY)
    if (!raw) return
    const parsed = JSON.parse(raw)

    // Identity
    const name = String(parsed?.playerName || '').trim()
    const gender = parsed?.playerGender
    if (name) state.playerName = name
    if (gender === 'male' || gender === 'female') state.playerGender = gender

    const pts = clampNonNegativeInt(parsed?.rebirthPoints)
    const bestPts = clampNonNegativeInt(parsed?.bestRebirthPoints)
    const bonusLast = clampNonNegativeInt(parsed?.rebirthStoneBonusLast)
    const ups = normalizeRebirthUpgrades(parsed?.rebirthUpgrades)

    const best = parsed?.bestMajorRealm
    const bestIdx = clampNonNegativeInt(best?.index)
    const bestSubIdx = clampNonNegativeInt(best?.subIndex)
    const bestIsDemon = Boolean(best?.isDemon)
    const bestLabel = String(best?.label || '')

    // Rebirth points can now go up OR down (due to spirit stone bonus), so meta is authoritative.
    state.rebirthPoints = pts
    state.rebirthStoneBonusLast = bonusLast
    state.rebirthUpgrades = normalizeRebirthUpgrades({ ...ups, ...(state.rebirthUpgrades || {}) })

    if (!state.bestMajorRealm || typeof state.bestMajorRealm !== 'object') state.bestMajorRealm = { index: 0, subIndex: 0, isDemon: false, label: '' }
    state.bestMajorRealm.index = bestIdx
    state.bestMajorRealm.subIndex = bestSubIdx
    state.bestMajorRealm.isDemon = bestIsDemon
    state.bestMajorRealm.label = bestLabel

    state.bestRebirthPoints = Math.max(bestPts, clampNonNegativeInt(state.rebirthPoints))
  } catch (_) {}
}

function awardRebirthPoints(points, reasonLabel) {
  const p = clampNonNegativeInt(points)
  if (p <= 0) return
  if (!Number.isFinite(state.rebirthPoints) || state.rebirthPoints < 0) state.rebirthPoints = 0
  state.rebirthPoints += p
  try { syncBestRebirthPoints() } catch (_) {}
  const r = String(reasonLabel || '').trim()
  log(`Rebirth Points +${formatNumber(p)}${r ? ` (${r})` : ''}. Total: ${formatNumber(state.rebirthPoints)}.`)
  try { saveMeta() } catch (_) {}
}

window.beginRebirth = () => {
  // Rebirth keeps the same account (name/gender + meta upgrades/points),
  // but clears the run save so you return to the Fate Roll screen.
  try { syncBestMajorRealm() } catch (_) {}
  try { syncBestRebirthPoints() } catch (_) {}
  try { saveMeta() } catch (_) {}
  try {
    localStorage.removeItem('cultivationSagaSave')
    location.reload()
  } catch (e) {
    console.error('Failed to rebirth:', e)
  }
}

function saveGame() {
  try {
    try { reconcileRebirthPointsFromStoryProgress() } catch (_) {}
    try { syncRebirthPointsWithSpiritStoneBonus() } catch (_) {}
    try { syncBestMajorRealm() } catch (_) {}
    try { syncBestRebirthPoints() } catch (_) {}
    // Convert Set to array for JSON serialization
    const stateToSave = {
      ...state,
      activeSidePanels: Array.from(state.activeSidePanels),
      panelPositions: state.panelPositions,
      panelSizes: state.panelSizes
    }
    localStorage.setItem('cultivationSagaSave', JSON.stringify(stateToSave))
    try { saveMeta() } catch (_) {}
  } catch (e) {
    console.error('Failed to save game:', e)
  }
}

function loadGame() {
  try {
    const saved = localStorage.getItem('cultivationSagaSave')
    if (saved) {
      const loadedState = JSON.parse(saved)
      // Restore all state properties
      Object.assign(state, loadedState)

      // Migrate removed herb name: Medicinal Herb -> Ginseng
      try {
        if (Array.isArray(state.inventory)) {
          for (const item of state.inventory) {
            if (!item || typeof item !== 'object') continue
            if (String(item.name || '') === 'Medicinal Herb') {
              item.name = 'Ginseng'
              if (!item.description) item.description = 'A hardy root used in many formulas.'
              if (!item.kind) item.kind = 'ingredient'
              if (!item.imageSrc) item.imageSrc = 'assets/grass.png'
            }
          }
        }
      } catch (_) {}

      // Migrate legacy storyLuck -> luck
      if (Number.isFinite(loadedState.storyLuck)) {
        state.luck = loadedState.storyLuck
      }

      if (typeof state.demonMonarchOnly !== 'boolean') state.demonMonarchOnly = false
      if (typeof state.isDemonPath !== 'boolean') state.isDemonPath = false
      if (!Number.isFinite(state.corruption) || state.corruption < 0) state.corruption = 0
      state.corruption = Math.min(100, Math.floor(state.corruption))
      if (typeof state.demonCorruptionAscended !== 'boolean') state.demonCorruptionAscended = state.corruption >= 100
      if (typeof state.demonCosmicFinaleDone !== 'boolean') state.demonCosmicFinaleDone = false

      if (typeof state.dozeOffUnlocked !== 'boolean') state.dozeOffUnlocked = false
      if (typeof state.demonCabinRevengeStage !== 'string') state.demonCabinRevengeStage = ''
      if (typeof state.runEnded !== 'boolean') state.runEnded = false
      if (typeof state.hardMode !== 'boolean') state.hardMode = false

      if (!Number.isFinite(state.rebirthStoneBonusLast) || state.rebirthStoneBonusLast < 0) state.rebirthStoneBonusLast = 0

      // Rebirth defaults for older saves
      if (!Number.isFinite(state.rebirthPoints) || state.rebirthPoints < 0) state.rebirthPoints = 0
      state.rebirthPoints = Math.floor(state.rebirthPoints)
      state.rebirthUpgrades = normalizeRebirthUpgrades(state.rebirthUpgrades)
      if (!state.rebirthStoryAwards || typeof state.rebirthStoryAwards !== 'object') state.rebirthStoryAwards = {}

      // Orthodox true ending defaults
      if (!Number.isFinite(state.orthodoxWarStage) || state.orthodoxWarStage < 0) state.orthodoxWarStage = 0
      state.orthodoxWarStage = Math.floor(state.orthodoxWarStage)
      if (typeof state.orthodoxTrueEndingDone !== 'boolean') state.orthodoxTrueEndingDone = false

      // Ensure cooldown map exists for action cooldowns.
      if (!state.buttonCooldowns || typeof state.buttonCooldowns !== 'object') state.buttonCooldowns = {}
      
      // Restore Set objects that were converted to arrays/objects during JSON serialization
      // Also handle migration from old activeSidePanel (singular) to activeSidePanels (plural Set)
      if (Array.isArray(loadedState.activeSidePanels)) {
        const s = new Set(loadedState.activeSidePanels)
        // Migrate old separate shop panels into unified Shop.
        if (s.has('townShop') || s.has('hourShop')) {
          s.delete('townShop')
          s.delete('hourShop')
          s.add('shop')
        }
        state.activeSidePanels = s
      } else if (loadedState.activeSidePanel) {
        // Migrate old format: if there was an active panel, add it to the Set
        state.activeSidePanels = new Set([loadedState.activeSidePanel])
      } else {
        state.activeSidePanels = new Set()
      }

      // Leaderboards tab default for older saves.
      if (state.leaderboardsTab !== 'major' && state.leaderboardsTab !== 'rebirth') {
        state.leaderboardsTab = 'major'
      }

      // Ensure panelPositions exists and has numeric x/y
      if (!state.panelPositions) {
        state.panelPositions = { stats: { x: 0, y: 0 }, inventory: { x: 0, y: 0 }, actions: { x: 0, y: 0 }, herbalism: { x: 0, y: 0 }, settings: { x: 0, y: 0 }, recipes: { x: 0, y: 0 }, profile: { x: 0, y: 0 }, sect: { x: 0, y: 0 }, quests: { x: 0, y: 0 }, moves: { x: 0, y: 0 }, shop: { x: 0, y: 0 }, leaderboards: { x: 0, y: 0 }, conqueredSects: { x: 0, y: 0 }, townShop: { x: 0, y: 0 }, hourShop: { x: 0, y: 0 } }
      }
      for (const key of ['stats', 'inventory', 'actions', 'herbalism', 'settings', 'recipes', 'profile', 'sect', 'quests', 'moves', 'shop', 'leaderboards', 'conqueredSects', 'townShop', 'hourShop']) {
        const p = state.panelPositions[key] || {}
        state.panelPositions[key] = {
          x: Number.isFinite(p.x) ? p.x : 0,
          y: Number.isFinite(p.y) ? p.y : 0
        }
      }

      // If an older save only has townShop/hourShop positions, keep the first non-zero as the unified shop position.
      const shopPos = state.panelPositions.shop
      if ((!shopPos || (shopPos.x === 0 && shopPos.y === 0))) {
        const t = state.panelPositions.townShop
        const h = state.panelPositions.hourShop
        if (t && (t.x !== 0 || t.y !== 0)) state.panelPositions.shop = { x: t.x, y: t.y }
        else if (h && (h.x !== 0 || h.y !== 0)) state.panelPositions.shop = { x: h.x, y: h.y }
      }

      // Ensure panelSizes exists and contains numeric w/h if present
      if (!state.panelSizes || typeof state.panelSizes !== 'object') {
        state.panelSizes = {}
      }
      for (const key of ['stats', 'inventory', 'actions', 'herbalism', 'settings', 'recipes', 'profile', 'sect', 'quests', 'moves', 'shop', 'leaderboards', 'conqueredSects', 'townShop', 'hourShop']) {
        const s = state.panelSizes[key]
        if (!s || typeof s !== 'object') continue
        const w = Number.isFinite(s.w) ? s.w : undefined
        const h = Number.isFinite(s.h) ? s.h : undefined
        state.panelSizes[key] = {
          ...(w !== undefined ? { w } : {}),
          ...(h !== undefined ? { h } : {})
        }
      }

      // Migrate old shop panel size to unified key if needed.
      if (!state.panelSizes.shop) {
        if (state.panelSizes.townShop) state.panelSizes.shop = { ...state.panelSizes.townShop }
        else if (state.panelSizes.hourShop) state.panelSizes.shop = { ...state.panelSizes.hourShop }
      }

      // Ensure shops exist for older saves.
      try { ensureShopsState() } catch (_) {}

      // Best-effort: remove any stored emoji icons from loaded saves.
      try { stripEmojiIconsFromState() } catch (_) {}

      if (typeof state.bargainOfferRolled !== 'boolean') state.bargainOfferRolled = false
      if (typeof state.bargainOfferAvailable !== 'boolean') state.bargainOfferAvailable = false

      if (!Array.isArray(state.equippedMoves) || state.equippedMoves.length !== 3) {
        state.equippedMoves = ['punch', 'superPunch', 'punch']
      }

      // Migrate legacy cooldowns (seconds) -> ms
      if (!state.playerCooldowns || typeof state.playerCooldowns !== 'object') {
        state.playerCooldowns = { punch: 0, superPunch: 0, qiBlast: 0 }
      }
      for (const k of Object.keys(state.playerCooldowns)) {
        const v = Number(state.playerCooldowns[k])
        if (!Number.isFinite(v) || v <= 0) {
          state.playerCooldowns[k] = 0
          continue
        }
        if (v > 0 && v <= 60) {
          state.playerCooldowns[k] = v * 1000
        }
      }

      // Sect panel / multipliers defaults for older saves
      if (typeof state.sectJoinPickerOpen !== 'boolean') state.sectJoinPickerOpen = false
      if (typeof state.sectRankPyramidOpen !== 'boolean') state.sectRankPyramidOpen = false
      if (!Number.isFinite(state.sectIncomeSeconds) || state.sectIncomeSeconds < 0) state.sectIncomeSeconds = 0
      if (!Number.isFinite(state.sectTier)) state.sectTier = 0
      if (!state.sectMultipliers || typeof state.sectMultipliers !== 'object') {
        state.sectMultipliers = { qi: 1, str: 1, hp: 1 }
      } else {
        const qi = Number(state.sectMultipliers.qi)
        const str = Number(state.sectMultipliers.str)
        const hp = Number(state.sectMultipliers.hp)
        state.sectMultipliers = {
          qi: Number.isFinite(qi) && qi > 0 ? qi : 1,
          str: Number.isFinite(str) && str > 0 ? str : 1,
          hp: Number.isFinite(hp) && hp > 0 ? hp : 1
        }
      }

      // Migrate sect reputation -> contribution points
      if (!Number.isFinite(state.contributionPoints)) state.contributionPoints = 0
      if (Number.isFinite(loadedState.sectReputation) && !Number.isFinite(loadedState.contributionPoints)) {
        state.contributionPoints = loadedState.sectReputation
      }

      // Sect pyramid rank defaults for older saves
      if (!isValidSectRankLayer(state.sectRankLayer) || !Number.isFinite(state.sectRankNumber)) {
        if (state.hasJoinedSect) {
          state.sectRankLayer = 'outer'
          state.sectRankNumber = 6
        } else {
          const mapped = mapContributionPointsToPyramidRank(state.contributionPoints)
          state.sectRankLayer = mapped.layer
          state.sectRankNumber = mapped.rank
        }
      }

      // Quests defaults for older saves
      if (state.activeQuest && typeof state.activeQuest !== 'object') state.activeQuest = null
      if (state.activeQuest && typeof state.activeQuest.title !== 'string') state.activeQuest = null
      if (typeof state.questReturnPhase !== 'string') state.questReturnPhase = null

      // Migrate intro/player identity fields for older saves
      if (typeof state.playerName !== 'string') state.playerName = ''
      if (state.playerGender !== 'male' && state.playerGender !== 'female') state.playerGender = null
      if (!state.characterProfile || typeof state.characterProfile !== 'object') {
        state.characterProfile = { attributes: null }
      } else {
        if (!Array.isArray(state.characterProfile.attributes)) state.characterProfile.attributes = null
      }
      if (!state.intro || typeof state.intro !== 'object') {
        state.intro = { progress: 0, step: 'loading', usernameDraft: '', hasAnimatedTitle: false }
      } else {
        if (!Number.isFinite(state.intro.progress)) state.intro.progress = 0
        if (typeof state.intro.step !== 'string') state.intro.step = 'loading'
        if (typeof state.intro.usernameDraft !== 'string') state.intro.usernameDraft = ''
        if (typeof state.intro.hasAnimatedTitle !== 'boolean') state.intro.hasAnimatedTitle = false
      }

      // Migrate age/lifespan fields for older saves
      if (!Number.isFinite(state.ageMonths) || state.ageMonths < 0) state.ageMonths = 0
      if (!Number.isFinite(state.expectedLifespanMonths) || state.expectedLifespanMonths <= 0) state.expectedLifespanMonths = 1200
      if (state.isDemonPath) {
        state.expectedLifespanMonths = Math.max(clampNonNegativeInt(state.expectedLifespanMonths), 1000 * 12)
      }

      // Remove legacy SECT crossroads phase (old stub screen)
      if (state.phase === 'SECT') state.phase = 'FARMING'

      // Default dev flags for older saves
      state.showResetModal = false
      state.devModalMode = 'RESET'
      state.devSpeed3x = false
      state.devIgnoreRequirements = false

      // Remove legacy/unused story flags from older saves
      try {
        delete state.hasGoneWithCultivator
        delete state.hasMetRealCultivator
        delete state.hasAdvancedManual
      } catch (_) {}

      // Defaults for best-ever progress + leaderboards
      if (!state.bestMajorRealm || typeof state.bestMajorRealm !== 'object') {
        state.bestMajorRealm = { index: 0, subIndex: 0, isDemon: false, label: '' }
      }
      if (!Number.isFinite(state.bestMajorRealm.index) || state.bestMajorRealm.index < 0) state.bestMajorRealm.index = 0
      if (!Number.isFinite(state.bestMajorRealm.subIndex) || state.bestMajorRealm.subIndex < 0) state.bestMajorRealm.subIndex = 0
      if (typeof state.bestMajorRealm.label !== 'string') state.bestMajorRealm.label = ''
      state.bestMajorRealm.isDemon = Boolean(state.bestMajorRealm.isDemon)

      if (!Number.isFinite(state.bestRebirthPoints) || state.bestRebirthPoints < 0) {
        state.bestRebirthPoints = clampNonNegativeInt(state.rebirthPoints)
      }

      if (!state.leaderboards || typeof state.leaderboards !== 'object') {
        state.leaderboards = {
          major: { rows: [], loading: false, error: '', fetchedAt: 0 },
          rebirth: { rows: [], loading: false, error: '', fetchedAt: 0 }
        }
      }

      // Demon encounter branch defaults
      if (typeof state.fledDemon !== 'boolean') state.fledDemon = false
      if (typeof state.joinedOrthodoxSect !== 'boolean') state.joinedOrthodoxSect = false
      if (typeof state.customSectName !== 'string') state.customSectName = ''
      if (!state.orthodoxHide || typeof state.orthodoxHide !== 'object') {
        state.orthodoxHide = { stage: null }
      } else {
        const st = state.orthodoxHide.stage
        const s = (st === null || typeof st === 'string') ? String(st || '') : ''
        const ok = s === '' || s === 'discover' || s === 'saved' || s === 'loyalty' || s === 'joined'
        state.orthodoxHide.stage = ok && s ? s : null
      }

      // Offer-roll flags for older saves
      if (typeof state.legendaryAxeOfferRolled !== 'boolean') state.legendaryAxeOfferRolled = false
      if (typeof state.legendaryAxeOfferAvailable !== 'boolean') state.legendaryAxeOfferAvailable = false

      // Business/story route defaults
      if (typeof state.isBusinessOriented !== 'boolean') state.isBusinessOriented = false
      if (!Number.isFinite(state.incomeCycleSeconds) || state.incomeCycleSeconds < 0) state.incomeCycleSeconds = 0
      if (!Number.isFinite(state.businessCycleSeconds) || state.businessCycleSeconds <= 0) state.businessCycleSeconds = 5
      if (!state.businessIncomePerCycle || typeof state.businessIncomePerCycle !== 'object') {
        state.businessIncomePerCycle = { silver: 5, copper: 15, gold: 0, spiritStonesLow: 0 }
      } else {
        const s = Number(state.businessIncomePerCycle.silver)
        const c = Number(state.businessIncomePerCycle.copper)
        const g = Number(state.businessIncomePerCycle.gold)
        const low = Number(state.businessIncomePerCycle.spiritStonesLow)
        state.businessIncomePerCycle = {
          silver: Number.isFinite(s) && s >= 0 ? Math.floor(s) : 5,
          copper: Number.isFinite(c) && c >= 0 ? Math.floor(c) : 15,
          gold: Number.isFinite(g) && g >= 0 ? Math.floor(g) : 0,
          spiritStonesLow: Number.isFinite(low) && low >= 0 ? Math.floor(low) : 0
        }
      }
      if (typeof state.businessUpgradedExpansion !== 'boolean') state.businessUpgradedExpansion = false
      if (typeof state.businessUpgradedEmployees !== 'boolean') state.businessUpgradedEmployees = false
      if (typeof state.businessChoseStabilityIsntEnough !== 'boolean') state.businessChoseStabilityIsntEnough = false
      if (typeof state.businessChoseNoMoreGames !== 'boolean') state.businessChoseNoMoreGames = false
      if (typeof state.businessMerchantGuildPartnered !== 'boolean') state.businessMerchantGuildPartnered = false
      if (typeof state.businessNervousNeighboringSectOpened !== 'boolean') state.businessNervousNeighboringSectOpened = false
      if (typeof state.businessNeighboringSectNegotiated !== 'boolean') state.businessNeighboringSectNegotiated = false
      if (typeof state.businessNeighboringSectDenied !== 'boolean') state.businessNeighboringSectDenied = false
      if (typeof state.businessSectRetaliationResolved !== 'boolean') state.businessSectRetaliationResolved = false
      if (typeof state.businessFoundMysteriousManual !== 'boolean') state.businessFoundMysteriousManual = false
      if (typeof state.businessGuildRetaliationPrepared !== 'boolean') state.businessGuildRetaliationPrepared = false
      if (typeof state.businessCarpetBombDone !== 'boolean') state.businessCarpetBombDone = false
      if (typeof state.businessHeavenlyDemonWatcherFollowed !== 'boolean') state.businessHeavenlyDemonWatcherFollowed = false
      if (typeof state.businessHeavenlyDemonOfferMade !== 'boolean') state.businessHeavenlyDemonOfferMade = false
      if (typeof state.businessHeavenlyDemonOfferResolved !== 'boolean') state.businessHeavenlyDemonOfferResolved = false
      if (typeof state.businessHeavenlyDemonOfferAccepted !== 'boolean') state.businessHeavenlyDemonOfferAccepted = false
      if (typeof state.businessHeavenlyDemonOfferDenied !== 'boolean') state.businessHeavenlyDemonOfferDenied = false
      if (typeof state.businessMergedWithMilitary !== 'boolean') state.businessMergedWithMilitary = false
      if (typeof state.businessBombTestingDone !== 'boolean') state.businessBombTestingDone = false
      if (typeof state.businessAntiMatterCreationDone !== 'boolean') state.businessAntiMatterCreationDone = false
      if (typeof state.businessWarpingDone !== 'boolean') state.businessWarpingDone = false
      if (typeof state.businessStormHeavensStarted !== 'boolean') state.businessStormHeavensStarted = false
      if (typeof state.businessStormHeavensCinematicDone !== 'boolean') state.businessStormHeavensCinematicDone = false
      if (typeof state.heavensImmortalGodClashStarted !== 'boolean') state.heavensImmortalGodClashStarted = false
      if (state.heavensEnding !== null && state.heavensEnding !== 'demonKingDeath' && state.heavensEnding !== 'tartarusEaten') state.heavensEnding = null
      if (typeof state.hasChosen100SilverRoute !== 'boolean') state.hasChosen100SilverRoute = false
      if (!Number.isFinite(state.cloudCultivatorStoryStage) || state.cloudCultivatorStoryStage < 0) state.cloudCultivatorStoryStage = 0
      if (!Array.isArray(state.cloudConqueredSects)) state.cloudConqueredSects = []
      state.cloudConqueredSects = state.cloudConqueredSects
        .map(x => String(x || ''))
        .filter(Boolean)
      if (typeof state.cloudConqueredSectsUnlocked !== 'boolean') state.cloudConqueredSectsUnlocked = false
      if (!Number.isFinite(state.searchingAndConqueringCooldown) || state.searchingAndConqueringCooldown < 0) state.searchingAndConqueringCooldown = 0

      // Cloud coalition war endgame defaults
      if (!Number.isFinite(state.cloudCoalitionWarStage) || state.cloudCoalitionWarStage < 0) state.cloudCoalitionWarStage = 0
      if (typeof state.cloudFinalConfrontationCinematicDone !== 'boolean') state.cloudFinalConfrontationCinematicDone = false
      if (!state.cloudCoalitionWave || typeof state.cloudCoalitionWave !== 'object') {
        state.cloudCoalitionWave = null
      } else {
        const kind = String(state.cloudCoalitionWave.kind || '')
        const okKind = kind === 'armies' || kind === 'champions'
        const idx = Math.floor(Number(state.cloudCoalitionWave.index))
        const okIdx = Number.isFinite(idx) && idx >= 0 && idx <= 2
        if (!okKind || !okIdx) {
          state.cloudCoalitionWave = null
        } else {
          state.cloudCoalitionWave = {
            kind,
            index: idx,
            awaitingStaminaFull: Boolean(state.cloudCoalitionWave.awaitingStaminaFull),
            pendingStart: Boolean(state.cloudCoalitionWave.pendingStart)
          }
        }
      }

      // Apply meta storage (survives hard resets)
      try { applyMetaFromStorage() } catch (_) {}

      // Sync rebirth points to current spirit stones immediately.
      try { syncRebirthPointsWithSpiritStoneBonus() } catch (_) {}

    // If there's no save, still apply meta storage so rebirth persists across runs.
    try {
      if (!Number.isFinite(state.rebirthPoints) || state.rebirthPoints < 0) state.rebirthPoints = 0
      if (!Number.isFinite(state.rebirthStoneBonusLast) || state.rebirthStoneBonusLast < 0) state.rebirthStoneBonusLast = 0
      state.rebirthUpgrades = normalizeRebirthUpgrades(state.rebirthUpgrades)
      applyMetaFromStorage()
      try { syncRebirthPointsWithSpiritStoneBonus() } catch (_) {}
    } catch (_) {}
      if (typeof state.hasLargerBagSpace !== 'boolean') state.hasLargerBagSpace = false
      if (typeof state.largerBagSpaceUnlocked !== 'boolean') state.largerBagSpaceUnlocked = false
      if (state.hasLargerBagSpace) state.largerBagSpaceUnlocked = true

      // Heavenly Demon detour chain defaults
      if (!state.hdDetour || typeof state.hdDetour !== 'object') {
        state.hdDetour = {
          unlocked: false,
          choseDifferentPath: false,
          exploredCave: false,
          caveChoice: null,
          startedFamily: false,
          groceriesCount: 0,
          returnHomeAvailable: false,
          demonCinematicResolved: false
        }
      } else {
        if (typeof state.hdDetour.unlocked !== 'boolean') state.hdDetour.unlocked = false
        if (typeof state.hdDetour.choseDifferentPath !== 'boolean') state.hdDetour.choseDifferentPath = false
        if (typeof state.hdDetour.exploredCave !== 'boolean') state.hdDetour.exploredCave = false
        if (state.hdDetour.caveChoice !== 'demonicManual' && state.hdDetour.caveChoice !== 'ignore') state.hdDetour.caveChoice = null
        if (typeof state.hdDetour.startedFamily !== 'boolean') state.hdDetour.startedFamily = false
        if (!Number.isFinite(state.hdDetour.groceriesCount) || state.hdDetour.groceriesCount < 0) state.hdDetour.groceriesCount = 0
        if (typeof state.hdDetour.returnHomeAvailable !== 'boolean') state.hdDetour.returnHomeAvailable = false
        if (typeof state.hdDetour.demonCinematicResolved !== 'boolean') state.hdDetour.demonCinematicResolved = false
      }

      // Demonic Monarch fate chain defaults
      if (!state.dmFate || typeof state.dmFate !== 'object') {
        state.dmFate = { unlocked: false, stage: null }
      } else {
        if (typeof state.dmFate.unlocked !== 'boolean') state.dmFate.unlocked = false
        const s = String(state.dmFate.stage || '')
        const ok = s === ''
          || s === 'awaitLeader'
          || s === 'choose'
          || s === 'slaughterFinal'
          || s === 'stay_find'
          || s === 'stay_capture'
          || s === 'stay_end'
          || s === 'done'
          || s === 'dead'
        state.dmFate.stage = ok && s ? s : null
      }
      if (state.storyDialog && typeof state.storyDialog !== 'object') state.storyDialog = null
      if (typeof state.storyDialogReturnPhase !== 'string') state.storyDialogReturnPhase = null

      // Inventory defaults/migration
      if (!Array.isArray(state.inventory)) state.inventory = []
      state.inventory = state.inventory
        .filter(i => i && typeof i === 'object' && typeof i.name === 'string' && i.name)
        .map(i => ({ ...i, quantity: Number.isFinite(i.quantity) ? i.quantity : 1 }))

      if (!Number.isFinite(state.selectedInventoryIndex)) state.selectedInventoryIndex = null
      if (!state.equipped || typeof state.equipped !== 'object') state.equipped = { tool: null, manual: null }
      if (typeof state.equipped.tool !== 'string') state.equipped.tool = null
      if (typeof state.equipped.manual !== 'string') state.equipped.manual = null

      // Salvage older saves where items were never stored due to the previous inventory filter.
      const hasItem = (n) => state.inventory.some(i => i?.name === n)
      const ensureItem = (obj) => { if (!hasItem(obj.name)) state.inventory.push({ ...obj, quantity: 1 }) }

      if (state.hasBoughtTools) ensureItem({ name: 'Farming Tools', icon: '🔨', description: 'Increases copper gained from selling crops by 50%' })
      if (state.hasUnlockedWood) ensureItem({ name: 'Rusted Axe', icon: '🪓', description: 'A basic axe for chopping wood' })
      if (state.hasBoughtNormalAxe) ensureItem({ name: 'Normal Axe', icon: '🪓', description: 'A quality axe that increases silver gain by 50%' })
      if (state.hasBoughtLegendaryTools) ensureItem({ name: 'Legendary Axe', icon: '', description: 'A legendary axe that increases silver gain by 70%' })
      if (state.hasManual) ensureItem({ name: 'Beginner Cultivation Manual', icon: '', description: 'A basic manual that allows major realm breakthroughs' })

      // Try to keep multipliers consistent with equipped items for older saves.
      // Prefer best tool available.
      if (state.hasBoughtLegendaryTools) state.equipped.tool = 'Legendary Axe'
      else if (state.hasBoughtNormalAxe) state.equipped.tool = 'Normal Axe'
      else if (state.hasBoughtTools) state.equipped.tool = 'Farming Tools'
      else if (state.hasUnlockedWood) state.equipped.tool = 'Rusted Axe'

      // Re-apply equipment-derived multipliers.
      try { applyEquipmentEffects() } catch (_) {}

      // Remove broken/out-of-scope story special actions from older saves.
      if (!Array.isArray(state.specialActions)) state.specialActions = []
      state.specialActions = state.specialActions.filter(a => {
        const name = a?.name
        if (typeof name !== 'string') return true
        const blocked = [
          'Trade Spirit Stones',
          'Decline Trade',
          'Explore Ruins',
          'Ignore Ruins',
          'Go into Business',
          'Go with Mysterious Cultivator',
          'Seek Azure Peak Sect',
          'Sect Mission',
          'Visit Sect Treasury',
          'Leave Treasury',
          'Buy Qi Gathering Pill',
          'Buy Advanced Manual',
          'Upgrade Manual',
          'Legendary Farming Tools'
        ]
        return !blocked.some(b => name.includes(b))
      })

      // Remove deprecated Explore option if it exists in older saves.
      state.specialActions = state.specialActions.filter(a => {
        const n = a?.name
        return n !== 'Explore the Nearby Forest' && n !== 'Enter Deep into the Woods' && n !== 'Find Nothing' && n !== 'Find Mysterious Herb'
      })

      // Audio defaults for older saves
      try { ensureAudioState() } catch (_) {}
      
      return true
    }
  } catch (e) {
    console.error('Failed to load game:', e)
  }
  return false
}

// ============================================================================
// AUDIO (WebAudio SFX + background music)
// ============================================================================
let __audioCtx = null
let __audioMaster = null
let __audioSfx = null
let __audioMusic = null
let __audioMusicNodes = null
let __audioMusicMode = ''
let __audioInitBound = false
let __audioButtonClickBound = false
const __audioLastSfxAtMs = new Map()

// Background music via HTMLAudioElement (asset-backed). Falls back to procedural if missing.
// Served from Vite's public/ so it exists on GitHub Pages builds.
const __bgMusicAssetSrc = 'assets/alex-productions-chinese-new-year.mp3'
let __bgMusicEl = null
let __bgMusicFailed = false

// Cinematic SFX via HTMLAudioElement (asset-backed). Falls back to procedural.
const __sfxMp3ByKind = {
  shoot: 'assets/sfx/clean-machine-gun-burst-98224.mp3',
  explosion: 'assets/sfx/explosion-fx-343683.mp3',
  lightning: 'assets/sfx/peals-of-thunder-191992.mp3',
  plane: 'assets/sfx/aeroplane-327235.mp3'
}

const __sfxMp3Pools = new Map()
const __sfxMp3PoolIndex = new Map()
const __sfxMp3FailedKinds = new Set()

function __tryPlayMp3Sfx(kind) {
  ensureAudioState()
  if (!state.audio?.enabled) return false

  const k = String(kind || '')
  const src = __sfxMp3ByKind[k]
  if (!src) return false
  if (__sfxMp3FailedKinds.has(k)) return false

  let pool = __sfxMp3Pools.get(k)
  if (!pool) {
    pool = []
    const poolSize = 4
    for (let i = 0; i < poolSize; i++) {
      try {
        const el = new Audio()
        el.preload = 'auto'
        el.src = src
        el.addEventListener('error', () => { __sfxMp3FailedKinds.add(k) }, { once: true })
        pool.push(el)
      } catch (_) {}
    }
    __sfxMp3Pools.set(k, pool)
    __sfxMp3PoolIndex.set(k, 0)
  }

  if (!pool || pool.length === 0) return false

  const idx = __sfxMp3PoolIndex.get(k) || 0
  __sfxMp3PoolIndex.set(k, idx + 1)
  const el = pool[idx % pool.length]
  if (!el) return false

  try {
    const sv = clampNonNegativeNumber(state.audio?.sfxVolume)
    el.volume = Math.max(0, Math.min(1, sv))
  } catch (_) {}

  try { el.currentTime = 0 } catch (_) {}

  try {
    const p = el.play()
    if (p && typeof p.catch === 'function') {
      p.catch((e) => {
        const name = String(e?.name || '')
        // Autoplay blocks can happen before a user gesture; don't permanently disable.
        if (name && name !== 'NotAllowedError') __sfxMp3FailedKinds.add(k)
      })
    }
    return true
  } catch (_) {
    return false
  }
}

const __emojiRegex = (() => {
  try { return new RegExp('\\p{Extended_Pictographic}', 'u') } catch (_) { return null }
})()

function __stringHasEmoji(s) {
  if (!__emojiRegex) return false
  try { return __emojiRegex.test(String(s || '')) } catch (_) { return false }
}

function stripEmojiIconsFromState() {
  // Best-effort cleanup so we don't render any emoji-based icons anywhere.
  try {
    if (Array.isArray(state.inventory)) {
      for (const it of state.inventory) {
        if (it && typeof it === 'object' && typeof it.icon === 'string' && __stringHasEmoji(it.icon)) it.icon = ''
      }
    }
  } catch (_) {}

  try {
    if (Array.isArray(state.repeatableActions)) {
      for (const a of state.repeatableActions) {
        if (a && typeof a === 'object' && typeof a.icon === 'string' && __stringHasEmoji(a.icon)) a.icon = ''
      }
    }
  } catch (_) {}

  try {
    if (Array.isArray(state.specialActions)) {
      for (const a of state.specialActions) {
        if (a && typeof a === 'object' && typeof a.icon === 'string' && __stringHasEmoji(a.icon)) a.icon = ''
      }
    }
  } catch (_) {}

  try {
    if (state.enemy && typeof state.enemy === 'object' && typeof state.enemy.icon === 'string' && __stringHasEmoji(state.enemy.icon)) {
      state.enemy.icon = ''
    }
  } catch (_) {}
}

function ensureAudioState() {
  if (!state.audio || typeof state.audio !== 'object') {
    state.audio = { enabled: false, sfxVolume: 0.7, musicVolume: 0.6 }
  }
  if (typeof state.audio.enabled !== 'boolean') state.audio.enabled = false
  const sv = Number(state.audio.sfxVolume)
  const mv = Number(state.audio.musicVolume)
  state.audio.sfxVolume = Number.isFinite(sv) ? Math.max(0, Math.min(1, sv)) : 0.7
  state.audio.musicVolume = Number.isFinite(mv) ? Math.max(0, Math.min(1, mv)) : 0.6

  // Bind a one-time gesture hook so audio can start on browsers that block autoplay.
  if (!__audioInitBound) {
    __audioInitBound = true
    try {
      window.addEventListener('pointerdown', () => {
        if (!state.audio?.enabled) return
        try {
          ensureAudioContext()
          try { __audioCtx && __audioCtx.resume && __audioCtx.resume() } catch (_) {}
          ensureAmbientMusic()
        } catch (_) {}
      }, { once: false, passive: true })
    } catch (_) {}
  }

  if (!__audioButtonClickBound) {
    __audioButtonClickBound = true
    try {
      document.addEventListener('click', (e) => {
        try {
          const t = e && e.target
          if (!t || !t.closest) return
          const btn = t.closest('button')
          if (!btn) return
          if (btn.disabled) return
          playSfx('click')
        } catch (_) {}
      }, true)
    } catch (_) {}
  }
}

function ensureAudioContext() {
  if (__audioCtx) return __audioCtx
  const Ctx = window.AudioContext || window.webkitAudioContext
  if (!Ctx) return null
  __audioCtx = new Ctx()
  __audioMaster = __audioCtx.createGain()
  __audioSfx = __audioCtx.createGain()
  __audioMusic = __audioCtx.createGain()
  __audioMaster.gain.value = 0.9
  __audioSfx.gain.value = 0.0
  __audioMusic.gain.value = 0.0
  __audioSfx.connect(__audioMaster)
  __audioMusic.connect(__audioMaster)
  __audioMaster.connect(__audioCtx.destination)
  syncAudioGains()
  return __audioCtx
}

function syncAudioGains() {
  ensureAudioState()
  const on = Boolean(state.audio?.enabled)
  const sfxVol = clampNonNegativeNumber(state.audio?.sfxVolume)
  const musicVol = clampNonNegativeNumber(state.audio?.musicVolume)

  // HTMLAudioElement music volume.
  try {
    if (__bgMusicEl) {
      __bgMusicEl.volume = Math.max(0, Math.min(1, on ? musicVol : 0))
      if (!on) {
        try { __bgMusicEl.pause() } catch (_) {}
      }
    }
  } catch (_) {}

  // HTMLAudioElement cinematic SFX volume.
  try {
    for (const pool of __sfxMp3Pools.values()) {
      if (!Array.isArray(pool)) continue
      for (const el of pool) {
        try { if (el) el.volume = Math.max(0, Math.min(1, on ? sfxVol : 0)) } catch (_) {}
      }
    }
  } catch (_) {}

  // WebAudio SFX + (procedural fallback) music.
  if (!__audioCtx || !__audioSfx || !__audioMusic) return
  const t = __audioCtx.currentTime
  try {
    __audioSfx.gain.setTargetAtTime(on ? sfxVol : 0.0, t, 0.03)
    __audioMusic.gain.setTargetAtTime(on ? musicVol : 0.0, t, 0.10)
  } catch (_) {
    __audioSfx.gain.value = on ? sfxVol : 0.0
    __audioMusic.gain.value = on ? musicVol : 0.0
  }
}

function ensureBackgroundMp3Music() {
  ensureAudioState()
  if (!state.audio?.enabled) return false
  if (__bgMusicFailed) return false

  if (!__bgMusicEl) {
    try {
      const el = new Audio()
      el.preload = 'auto'
      el.loop = true
      el.src = __bgMusicAssetSrc
      el.addEventListener('error', () => { __bgMusicFailed = true }, { once: true })
      __bgMusicEl = el
    } catch (_) {
      __bgMusicFailed = true
      return false
    }
  }

  try {
    const mv = clampNonNegativeNumber(state.audio?.musicVolume)
    __bgMusicEl.volume = Math.max(0, Math.min(1, mv))
  } catch (_) {}

  try {
    if (__bgMusicEl.paused) {
      const p = __bgMusicEl.play()
      if (p && typeof p.catch === 'function') p.catch(() => {})
    }
  } catch (_) {}

  return true
}

function playSfx(kind) {
  ensureAudioState()
  if (!state.audio?.enabled) return

  // Avoid accidental double fires (global click + explicit playSfx calls).
  try {
    const k0 = String(kind || '')
    const now = Date.now()
    const prev = __audioLastSfxAtMs.get(k0) || 0
    if (now - prev < 35) return
    __audioLastSfxAtMs.set(k0, now)
  } catch (_) {}

  const k = String(kind || '')

  // Prefer MP3-backed SFX for cinematic cues; fall back to procedural.
  if (k === 'shoot' || k === 'explosion' || k === 'lightning' || k === 'plane') {
    try {
      if (__tryPlayMp3Sfx(k)) return
    } catch (_) {}
  }

  const ctx = ensureAudioContext()
  if (!ctx || !__audioSfx) return
  try { if (ctx.state === 'suspended') ctx.resume() } catch (_) {}

  const t0 = ctx.currentTime
  const osc = ctx.createOscillator()
  const g = ctx.createGain()
  let type = 'triangle'
  let f0 = 220
  let f1 = 440
  let dur = 0.08
  let peak = 0.18

  if (k === 'click') { type = 'triangle'; f0 = 520; f1 = 360; dur = 0.045; peak = 0.10 }
  else if (k === 'start') { type = 'sine'; f0 = 260; f1 = 520; dur = 0.08; peak = 0.14 }
  else if (k === 'complete') { type = 'triangle'; f0 = 660; f1 = 880; dur = 0.10; peak = 0.16 }
  else if (k === 'hit') { type = 'square'; f0 = 160; f1 = 120; dur = 0.06; peak = 0.12 }
  else if (k === 'buy') { type = 'sine'; f0 = 740; f1 = 980; dur = 0.11; peak = 0.14 }
  else if (k === 'error') { type = 'sawtooth'; f0 = 220; f1 = 140; dur = 0.11; peak = 0.10 }
  else if (k === 'gather') { type = 'triangle'; f0 = 380; f1 = 620; dur = 0.09; peak = 0.12 }
  else if (k === 'craft') { type = 'sine'; f0 = 520; f1 = 1040; dur = 0.12; peak = 0.14 }
  else if (k === 'rebirth') { type = 'triangle'; f0 = 440; f1 = 1320; dur = 0.14; peak = 0.16 }

  const makeNoiseBuffer = (seconds) => {
    const s = Math.max(0.01, Number(seconds) || 0.01)
    const len = Math.max(1, Math.floor(ctx.sampleRate * s))
    const b = ctx.createBuffer(1, len, ctx.sampleRate)
    const data = b.getChannelData(0)
    for (let i = 0; i < len; i++) data[i] = (Math.random() * 2 - 1) * 0.98
    return b
  }

  const playNoise = (seconds, filterType, fStart, fEnd, peakGain, attackSec, releaseSec) => {
    const src = ctx.createBufferSource()
    const ng = ctx.createGain()
    const flt = ctx.createBiquadFilter()

    src.buffer = makeNoiseBuffer(seconds)
    flt.type = filterType || 'lowpass'

    const durS = Math.max(0.02, Number(seconds) || 0.02)
    const a = Math.max(0.002, Number(attackSec) || 0.004)
    const r = Math.max(0.01, Number(releaseSec) || durS)
    const pk = Math.max(0.0002, Number(peakGain) || 0.10)

    ng.gain.setValueAtTime(0.0001, t0)
    ng.gain.exponentialRampToValueAtTime(pk, t0 + a)
    ng.gain.exponentialRampToValueAtTime(0.0001, t0 + durS)

    const fs0 = Math.max(30, Number(fStart) || 220)
    const fs1 = Math.max(30, Number(fEnd) || fs0)
    try {
      flt.frequency.setValueAtTime(fs0, t0)
      flt.frequency.exponentialRampToValueAtTime(fs1, t0 + Math.max(0.02, r))
    } catch (_) {
      flt.frequency.value = fs0
    }

    src.connect(flt)
    flt.connect(ng)
    ng.connect(__audioSfx)
    src.start(t0)
    src.stop(t0 + durS + 0.02)
    src.onended = () => {
      try { src.disconnect() } catch (_) {}
      try { flt.disconnect() } catch (_) {}
      try { ng.disconnect() } catch (_) {}
    }
  }

  // Cinematic SFX (procedural)
  if (k === 'shoot') {
    // Short crack + tiny tail
    try { playNoise(0.06, 'highpass', 1400, 900, 0.10, 0.003, 0.06) } catch (_) {}
    type = 'square'; f0 = 1900; f1 = 520; dur = 0.055; peak = 0.10
  } else if (k === 'explosion') {
    // Low boom + noisy blast
    try { playNoise(0.85, 'lowpass', 220, 85, 0.18, 0.004, 0.85) } catch (_) {}
    type = 'sine'; f0 = 85; f1 = 32; dur = 0.65; peak = 0.14
  } else if (k === 'lightning') {
    // Crack + rolling thunder
    try { playNoise(0.12, 'highpass', 2600, 1400, 0.12, 0.002, 0.12) } catch (_) {}
    try { playNoise(1.35, 'lowpass', 180, 70, 0.16, 0.01, 1.35) } catch (_) {}
    type = 'sine'; f0 = 58; f1 = 26; dur = 1.05; peak = 0.12
  } else if (k === 'plane') {
    // Engine drone / flyover
    try { playNoise(1.25, 'bandpass', 420, 280, 0.06, 0.02, 1.25) } catch (_) {}
    type = 'sawtooth'; f0 = 120; f1 = 78; dur = 1.25; peak = 0.06
  }

  osc.type = type
  osc.frequency.setValueAtTime(f0, t0)
  osc.frequency.exponentialRampToValueAtTime(Math.max(40, f1), t0 + dur)

  g.gain.setValueAtTime(0.0001, t0)
  g.gain.exponentialRampToValueAtTime(Math.max(0.0002, peak), t0 + 0.01)
  g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur)

  osc.connect(g)
  g.connect(__audioSfx)
  osc.start(t0)
  osc.stop(t0 + dur + 0.02)
  osc.onended = () => {
    try { osc.disconnect() } catch (_) {}
    try { g.disconnect() } catch (_) {}
  }
} 

// Cinematic timer helpers
let __carpetBombTimers = []
let __heavensThreeTimers = []

function __clearCinematicTimers(list) {
  if (!Array.isArray(list)) return
  for (const id of list) {
    try { clearTimeout(id) } catch (_) {}
    try { clearInterval(id) } catch (_) {}
  }
  list.length = 0
}

window.forceLeaderboardSyncNow = async () => {
  if (!isLeaderboardConfigured()) {
    log('Leaderboards are not configured for this build.')
    return
  }

  if (!state.leaderboardsSync || typeof state.leaderboardsSync !== 'object') {
    state.leaderboardsSync = { lastAt: 0, lastOk: false, lastMsg: '', sentLabel: '', storedLabel: '' }
  }
  state.leaderboardsSync.lastAt = Date.now()
  state.leaderboardsSync.lastOk = false
  state.leaderboardsSync.lastMsg = 'Syncing...'
  state.leaderboardsSync.sentLabel = ''
  state.leaderboardsSync.storedLabel = ''
  try { saveGame() } catch (_) {}
  try { render() } catch (_) {}

  try {
    __leaderboardLastSent = { username: '', rp: -1, bestRp: -1, bestMajor: -1, bestMajorIsDemon: null, bestMajorLabel: '' }
  } catch (_) {}

  try {
    // Ensure label is in the latest format before syncing.
    try { syncBestMajorRealm() } catch (_) {}

    // Capture what we're about to send.
    try {
      const payload = getLeaderboardPlayerPayload()
      state.leaderboardsSync.sentLabel = String(payload?.best_major_label || '')
    } catch (_) {}

    await leaderboardUpsertNow()
    // Verify what Supabase stored for this username.
    try {
      const cfg = getLeaderboardConfig()
      const u = (state.playerName && String(state.playerName).trim()) ? String(state.playerName).trim() : ''
      const base = `${cfg.url.replace(/\/+$|\/+$/g, '')}/rest/v1/leaderboard`
      const url = `${base}?select=username,best_major_label,best_major_index,best_major_sub_index,best_major_is_demon&username=eq.${encodeURIComponent(u)}`
      const res = await fetch(url, {
        method: 'GET',
        headers: { 'apikey': cfg.anonKey, 'Authorization': `Bearer ${cfg.anonKey}` }
      })
      if (res.ok) {
        const data = await res.json().catch(() => [])
        const row = Array.isArray(data) ? data[0] : null
        const stored = String(row?.best_major_label || '')
        state.leaderboardsSync.lastOk = true
        state.leaderboardsSync.storedLabel = stored
        state.leaderboardsSync.lastMsg = stored
        log(`Leaderboard synced. Sent: ${String(state.leaderboardsSync.sentLabel || '') || '(empty)'} | Stored: ${stored || '(empty)'}`)
      } else {
        const txt = await res.text().catch(() => '')
        state.leaderboardsSync.lastOk = true
        state.leaderboardsSync.lastMsg = 'Synced, but verify fetch failed.'
        log(`Leaderboard synced. Verify fetch failed (${res.status}): ${txt || res.statusText}`)
      }
    } catch (_) {
      state.leaderboardsSync.lastOk = true
      state.leaderboardsSync.lastMsg = 'Synced.'
      log('Leaderboard synced.')
    }
  } catch (e) {
    const msg = String(e && e.message ? e.message : e)
    state.leaderboardsSync.lastOk = false
    state.leaderboardsSync.lastMsg = msg
    log(`Leaderboard sync failed: ${msg}`)
  }

  try { window.refreshLeaderboards() } catch (_) {}
  try { saveGame() } catch (_) {}
  try { render() } catch (_) {}
}

function stopAmbientMusic() {
  try {
    if (__bgMusicEl) {
      try { __bgMusicEl.pause() } catch (_) {}
      try { __bgMusicEl.currentTime = 0 } catch (_) {}
    }
  } catch (_) {}

  if (!__audioMusicNodes) return
  try {
    // Support both legacy array-form and the newer object-form with timers.
    const nodes = Array.isArray(__audioMusicNodes) ? __audioMusicNodes : (__audioMusicNodes?.nodes || [])
    const timers = Array.isArray(__audioMusicNodes) ? [] : (__audioMusicNodes?.timers || [])

    for (const id of timers) {
      try { clearInterval(id) } catch (_) {}
      try { clearTimeout(id) } catch (_) {}
    }

    for (const n of nodes) {
      try { n.stop && n.stop() } catch (_) {}
      try { n.disconnect && n.disconnect() } catch (_) {}
    }
  } catch (_) {}
  __audioMusicNodes = null
  __audioMusicMode = ''
}

function ensureAmbientMusic() {
  ensureAudioState()
  if (!state.audio?.enabled) {
    stopAmbientMusic()
    syncAudioGains()
    return
  }

  // Prefer the MP3 background track (asset-backed). If it fails to load, fall back to procedural.
  const usingMp3 = ensureBackgroundMp3Music()
  syncAudioGains()
  if (usingMp3) {
    // If procedural music was previously active, stop it.
    if (__audioMusicNodes) stopAmbientMusic()
    __audioMusicMode = 'mp3'
    return
  }

  const ctx = ensureAudioContext()
  if (!ctx || !__audioMusic) return

  const mode = (state.phase === 'COMBAT')
    ? 'combat'
    : (state.phase === 'FATE_ROLL')
      ? 'fate'
      : 'calm'

  if (__audioMusicNodes && __audioMusicMode === mode) return
  if (__audioMusicNodes && __audioMusicMode !== mode) stopAmbientMusic()
  __audioMusicMode = mode

  // East-Asian-inspired procedural bed: pentatonic flute + light drums + plucked strings + gong.
  // No audio assets; keep it lightweight but more characteristic.
  const t0 = ctx.currentTime
  const tempo = (mode === 'combat') ? 104 : (mode === 'fate') ? 86 : 74
  const beatSec = 60 / Math.max(30, tempo)

  const midiToHz = (m) => 440 * Math.pow(2, (Number(m) - 69) / 12)
  const rootMidi = (mode === 'combat') ? 57 : (mode === 'fate') ? 62 : 55 // A3 / D4 / G3

  // Major pentatonic degrees (0,2,4,7,9) gives a familiar “flute” feel.
  const pent = [0, 2, 4, 7, 9]
  const pick = (arr, i) => arr[(i % arr.length + arr.length) % arr.length]

  const master = ctx.createGain()
  // Louder overall; we'll add a compressor for headroom.
  master.gain.setValueAtTime((mode === 'combat') ? 0.62 : 0.55, t0)

  const comp = ctx.createDynamicsCompressor()
  comp.threshold.setValueAtTime(-26, t0)
  comp.knee.setValueAtTime(18, t0)
  comp.ratio.setValueAtTime(7, t0)
  comp.attack.setValueAtTime(0.004, t0)
  comp.release.setValueAtTime(0.22, t0)
  master.connect(comp)
  comp.connect(__audioMusic)

  // Subtle drone (very low, just to fill space).
  const droneGain = ctx.createGain(); droneGain.gain.setValueAtTime(0.0001, t0)
  droneGain.gain.setTargetAtTime(0.03, t0 + 0.05, 0.6)
  const droneFilter = ctx.createBiquadFilter(); droneFilter.type = 'lowpass'
  droneFilter.frequency.setValueAtTime(280, t0)
  droneGain.connect(droneFilter); droneFilter.connect(master)
  const drone = ctx.createOscillator(); drone.type = 'sine'
  drone.frequency.setValueAtTime(midiToHz(rootMidi - 24), t0)
  drone.connect(droneGain)

  // Flute synth (triangle through bandpass + gentle vibrato).
  const fluteGain = ctx.createGain(); fluteGain.gain.setValueAtTime(0.0001, t0)
  const fluteBp = ctx.createBiquadFilter(); fluteBp.type = 'bandpass'
  fluteBp.frequency.setValueAtTime(1200, t0)
  fluteBp.Q.setValueAtTime(6.5, t0)
  fluteGain.connect(fluteBp); fluteBp.connect(master)
  const flute = ctx.createOscillator(); flute.type = 'triangle'
  flute.connect(fluteGain)

  const vib = ctx.createOscillator(); vib.type = 'sine'
  vib.frequency.setValueAtTime(5.2, t0)
  const vibAmt = ctx.createGain(); vibAmt.gain.setValueAtTime(12, t0) // cents
  vib.connect(vibAmt)
  vibAmt.connect(flute.detune)

  // Light drums: kick + snare + hat.
  const drumBus = ctx.createGain(); drumBus.gain.setValueAtTime((mode === 'combat') ? 0.20 : 0.17, t0)
  const drumLp = ctx.createBiquadFilter(); drumLp.type = 'lowpass'
  drumLp.frequency.setValueAtTime(5000, t0)
  drumBus.connect(drumLp); drumLp.connect(master)

  // Guzheng-ish pluck (short bright bandpassed saw) for accompaniment.
  const pluckBus = ctx.createGain(); pluckBus.gain.setValueAtTime(0.0001, t0)
  const pluckBp = ctx.createBiquadFilter(); pluckBp.type = 'bandpass'
  pluckBp.frequency.setValueAtTime(1800, t0)
  pluckBp.Q.setValueAtTime(3.6, t0)
  pluckBus.connect(pluckBp); pluckBp.connect(master)
  const pluckOsc = ctx.createOscillator(); pluckOsc.type = 'sawtooth'
  pluckOsc.detune.setValueAtTime(-6, t0)
  pluckOsc.connect(pluckBus)

  const gongBus = ctx.createGain(); gongBus.gain.setValueAtTime(0.0001, t0)
  const gongLp = ctx.createBiquadFilter(); gongLp.type = 'lowpass'
  gongLp.frequency.setValueAtTime(2400, t0)
  gongBus.connect(gongLp); gongLp.connect(master)

  const gong = () => {
    const t = ctx.currentTime
    const o1 = ctx.createOscillator(); o1.type = 'sine'
    const o2 = ctx.createOscillator(); o2.type = 'sine'
    const g = ctx.createGain(); g.gain.setValueAtTime(0.0001, t)
    const base = midiToHz(rootMidi - 12)
    o1.frequency.setValueAtTime(base, t)
    o2.frequency.setValueAtTime(base * 2.01, t)
    o2.detune.setValueAtTime(7, t)
    g.gain.exponentialRampToValueAtTime((mode === 'combat') ? 0.12 : 0.095, t + 0.02)
    g.gain.exponentialRampToValueAtTime(0.0001, t + 1.4)
    o1.connect(g); o2.connect(g); g.connect(gongBus)
    o1.start(t); o2.start(t)
    o1.stop(t + 1.6); o2.stop(t + 1.6)
    o2.onended = () => {
      try { o1.disconnect() } catch (_) {}
      try { o2.disconnect() } catch (_) {}
      try { g.disconnect() } catch (_) {}
    }
  }

  // One noise buffer for snare/hat.
  let noiseBuf = null
  try {
    const len = Math.floor(ctx.sampleRate * 0.35)
    noiseBuf = ctx.createBuffer(1, len, ctx.sampleRate)
    const data = noiseBuf.getChannelData(0)
    for (let i = 0; i < len; i++) data[i] = (Math.random() * 2 - 1) * 0.7
  } catch (_) {}

  const kick = () => {
    const t = ctx.currentTime
    const o = ctx.createOscillator(); o.type = 'sine'
    const g = ctx.createGain(); g.gain.setValueAtTime(0.0001, t)
    o.frequency.setValueAtTime(120, t)
    o.frequency.exponentialRampToValueAtTime(48, t + 0.12)
    g.gain.exponentialRampToValueAtTime(mode === 'combat' ? 0.25 : 0.18, t + 0.01)
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.18)
    o.connect(g); g.connect(drumBus)
    o.start(t); o.stop(t + 0.22)
    o.onended = () => { try { o.disconnect() } catch (_) {}; try { g.disconnect() } catch (_) {} }
  }

  const noiseHit = (kind) => {
    if (!noiseBuf) return
    const t = ctx.currentTime
    const src = ctx.createBufferSource(); src.buffer = noiseBuf
    const g = ctx.createGain(); g.gain.setValueAtTime(0.0001, t)
    const bp = ctx.createBiquadFilter(); bp.type = 'bandpass'
    bp.frequency.setValueAtTime(kind === 'snare' ? 1800 : 9000, t)
    bp.Q.setValueAtTime(kind === 'snare' ? 0.9 : 0.7, t)
    src.connect(bp); bp.connect(g); g.connect(drumBus)
    const peak = (kind === 'snare') ? 0.10 : 0.05
    const dur = (kind === 'snare') ? 0.12 : 0.05
    g.gain.exponentialRampToValueAtTime(peak, t + 0.005)
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur)
    src.start(t); src.stop(t + Math.max(0.07, dur + 0.02))
    src.onended = () => {
      try { src.disconnect() } catch (_) {}
      try { bp.disconnect() } catch (_) {}
      try { g.disconnect() } catch (_) {}
    }
  }

  const playFluteNote = (midi, durBeats) => {
    const t = ctx.currentTime
    const hz = midiToHz(midi)
    const dur = Math.max(0.08, (Number(durBeats) || 1) * beatSec)
    try {
      flute.frequency.setTargetAtTime(hz, t, 0.015)
    } catch (_) {
      flute.frequency.setValueAtTime(hz, t)
    }
    // Breath envelope.
    const peak = (mode === 'combat') ? 0.14 : 0.12
    fluteGain.gain.cancelScheduledValues(t)
    fluteGain.gain.setValueAtTime(0.0001, t)
    fluteGain.gain.exponentialRampToValueAtTime(peak, t + 0.02)
    fluteGain.gain.exponentialRampToValueAtTime(0.0001, t + dur)
  }

  const playPluck = (midi) => {
    const t = ctx.currentTime
    const hz = midiToHz(midi)
    try { pluckOsc.frequency.setValueAtTime(Math.max(40, hz), t) } catch (_) {}
    pluckBus.gain.cancelScheduledValues(t)
    pluckBus.gain.setValueAtTime(0.0001, t)
    pluckBus.gain.exponentialRampToValueAtTime(0.12, t + 0.008)
    pluckBus.gain.exponentialRampToValueAtTime(0.0001, t + 0.12)
  }

  // Start continuous nodes.
  drone.start(t0)
  flute.start(t0)
  vib.start(t0)
  pluckOsc.start(t0)

  const timers = []
  let step = 0

  // Gong on downbeats.
  timers.push(setInterval(() => {
    if (!__audioCtx || __audioMusicMode !== mode) return
    gong()
  }, Math.max(200, Math.floor(beatSec * 1000 * 8))))

  // Drum clock: 8th notes.
  timers.push(setInterval(() => {
    if (!__audioCtx || __audioMusicMode !== mode) return
    const s = step % 16
    // Kick on 1 and 9 (and extra in combat).
    if (s === 0 || s === 8 || (mode === 'combat' && (s === 6 || s === 14))) kick()
    // Snare-ish on 5 and 13.
    if (s === 4 || s === 12) noiseHit('snare')
    // Light hat on offbeats.
    if (s % 2 === 1) noiseHit('hat')
    step++
  }, Math.max(40, Math.floor(beatSec * 1000 * 0.5))))

  // Plucked accompaniment on offbeats.
  let plStep = 0
  timers.push(setInterval(() => {
    if (!__audioCtx || __audioMusicMode !== mode) return
    const s = plStep % 16
    // Hit on 3, 7, 11, 15 (offbeats)
    if (s === 2 || s === 6 || s === 10 || s === 14) {
      const degree = pick(pent, (s === 10) ? 3 : 1)
      const midi = rootMidi + 12 + degree
      playPluck(midi)
    }
    plStep++
  }, Math.max(60, Math.floor(beatSec * 1000 * 0.5))))

  // Flute melody: mostly quarter notes with occasional rests.
  let melStep = 0
  const melodyPattern = (mode === 'combat')
    ? [0, 2, 4, 2, 7, 4, 2, -1, 9, 7, 4, 2, 0, 2, 4, 7]
    : (mode === 'fate')
      ? [0, 2, 4, 7, 4, 2, 0, -1, 0, 2, 4, 9, 7, 4, 2, 0]
      : [0, 2, 4, 7, 4, 2, 0, -1, 0, 2, 4, 2, 0, -1, 2, 0]

  timers.push(setInterval(() => {
    if (!__audioCtx || __audioMusicMode !== mode) return
    const deg = melodyPattern[melStep % melodyPattern.length]
    melStep++
    if (deg === -1) return
    const octave = (mode === 'combat') ? 2 : 1
    const degree = pick(pent, deg)
    const midi = rootMidi + 12 * octave + degree
    playFluteNote(midi, 1)
  }, Math.max(80, Math.floor(beatSec * 1000))))

  __audioMusicNodes = {
    nodes: [master, comp, drumBus, drumLp, droneGain, droneFilter, drone, fluteGain, fluteBp, flute, vib, vibAmt, pluckBus, pluckBp, pluckOsc, gongBus, gongLp],
    timers
  }
}

window.setAudioEnabled = (enabled) => {
  ensureAudioState()
  state.audio.enabled = Boolean(enabled)
  if (state.audio.enabled) {
    try { ensureAudioContext() } catch (_) {}
    try { __audioCtx && __audioCtx.resume && __audioCtx.resume() } catch (_) {}
    ensureAmbientMusic()
    playSfx('complete')
  } else {
    stopAmbientMusic()
  }
  syncAudioGains()
  saveGame()
  render()
}

window.setAudioSfxVolume = (v) => {
  ensureAudioState()
  const n = Number(v)
  if (Number.isFinite(n)) state.audio.sfxVolume = Math.max(0, Math.min(1, n))
  syncAudioGains()
  saveGame()
}

window.setAudioMusicVolume = (v) => {
  ensureAudioState()
  const n = Number(v)
  if (Number.isFinite(n)) state.audio.musicVolume = Math.max(0, Math.min(1, n))
  syncAudioGains()
  ensureAmbientMusic()
  saveGame()
}

window.toggleCredits = () => {
  state.showCredits = !Boolean(state.showCredits)
  saveGame()
  render()
}

window.audioTestSfx = () => {
  ensureAudioState()
  if (!state.audio.enabled) return
  playSfx('click')
}

// ============================================================================
// INTRO LOADING FLOW (before Fate Roll)
// ============================================================================
let _introRafId = null
let _introStartTime = 0
const INTRO_LOADING_DURATION_MS = 2600

function updateIntroProgressUI(pct) {
  const safePct = Math.max(0, Math.min(100, Math.floor(Number(pct) || 0)))
  const bar = document.getElementById('intro-progress-bar')
  const tip = document.getElementById('intro-progress-tip')
  if (bar) bar.style.width = `${safePct}%`
  if (tip) tip.textContent = `${safePct}%`

  // Keep the label at the bar's right edge, but clamp inside the track so it
  // doesn't overflow at 100%.
  const track = document.querySelector('.intro-loading-track')
  if (track && tip) {
    const trackWidth = track.clientWidth
    const tipWidth = tip.offsetWidth
    const barEnd = (safePct / 100) * trackWidth
    const desiredLeft = barEnd + 6
    const clampedLeft = Math.max(0, Math.min(trackWidth - tipWidth, desiredLeft))
    tip.style.left = `${clampedLeft}px`
  } else if (tip) {
    tip.style.left = `${safePct}%`
  }
}

function stopIntroProgressLoop() {
  if (_introRafId) {
    try { cancelAnimationFrame(_introRafId) } catch (_) {}
  }
  _introRafId = null
  _introStartTime = 0
}

function startIntroProgressLoop() {
  if (_introRafId) return
  if (state.phase !== 'INTRO_LOADING') return
  if (state.intro?.step !== 'loading') return
  if (state.intro.progress >= 100) return

  _introStartTime = performance.now()

  const tick = (now) => {
    if (state.phase !== 'INTRO_LOADING' || state.intro?.step !== 'loading') {
      stopIntroProgressLoop()
      return
    }

    const elapsed = now - _introStartTime
    const t = Math.max(0, Math.min(1, elapsed / INTRO_LOADING_DURATION_MS))
    const pct = Math.max(0, Math.min(100, Math.floor(t * 100)))
    state.intro.progress = pct

    updateIntroProgressUI(pct)

    if (pct >= 100) {
      state.intro.progress = 100
      state.intro.step = 'username'
      stopIntroProgressLoop()
      render()
      return
    }

    _introRafId = requestAnimationFrame(tick)
  }

  _introRafId = requestAnimationFrame(tick)
}

function renderCultivatorSilhouette(kind) {
  const common = 'fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"'
  if (kind === 'female') {
    return `
      <svg class="intro-silhouette" viewBox="0 0 64 64" role="img" aria-label="Female cultivator silhouette">
        <path d="M32 10c6 0 10 4 10 10s-4 10-10 10-10-4-10-10 4-10 10-10z" ${common} />
        <path d="M20 54c2-14 10-22 12-22s10 8 12 22" ${common} />
        <path d="M22 38c4 2 6 2 10 2s6 0 10-2" ${common} opacity="0.8" />
        <path d="M18 46c6-4 22-4 28 0" ${common} opacity="0.7" />
      </svg>
    `.trim()
  }
  return `
    <svg class="intro-silhouette" viewBox="0 0 64 64" role="img" aria-label="Male cultivator silhouette">
      <path d="M32 10c6 0 10 4 10 10s-4 10-10 10-10-4-10-10 4-10 10-10z" ${common} />
      <path d="M18 54c3-16 11-24 14-24s11 8 14 24" ${common} />
      <path d="M22 36c4 3 6 4 10 4s6-1 10-4" ${common} opacity="0.8" />
      <path d="M24 54v-8" ${common} opacity="0.7" />
      <path d="M40 54v-8" ${common} opacity="0.7" />
    </svg>
  `.trim()
}

window.onIntroUsernameInput = function(event) {
  const value = event?.target?.value ?? ''
  state.intro.usernameDraft = value
  const btn = document.getElementById('intro-username-confirm')
  if (btn) btn.disabled = value.trim().length === 0
  const err = document.getElementById('intro-username-error')
  if (err) err.textContent = ''
}

window.confirmIntroUsername = function() {
  const name = String(state.intro?.usernameDraft ?? '').trim()
  if (!name) {
    const err = document.getElementById('intro-username-error')
    if (err) err.textContent = 'Username is required.'
    return
  }
  state.playerName = name
  state.intro.step = 'gender'
  try { saveGame() } catch (_) {}
  render()
}

function ensureIntroKeybindings() {
  if (window.__introKeybindingsBound) return
  window.__introKeybindingsBound = true

  window.addEventListener('keydown', (e) => {
    if (state.phase !== 'INTRO_LOADING') return
    if (e.key !== 'Enter') return

    // Prevent Enter from doing anything unexpected (like form submission)
    e.preventDefault()

    const step = state.intro?.step
    if (step === 'username') {
      window.confirmIntroUsername()
      return
    }
    if (step === 'ready') {
      window.introContinue()
    }
  })
}

window.selectIntroGender = function(gender) {
  if (gender !== 'male' && gender !== 'female') return
  state.playerGender = gender
  state.intro.step = 'ready'
  try { saveGame() } catch (_) {}
  render()
}

window.introContinue = function() {
  if (state.phase !== 'INTRO_LOADING') return
  if (state.intro?.step !== 'ready') return
  if (!state.playerName || !String(state.playerName).trim()) return
  if (state.playerGender !== 'male' && state.playerGender !== 'female') return

  // Now roll fate and move into the fate screen
  rollFate()
  state.phase = 'FATE_ROLL'
  saveGame()
  try { leaderboardScheduleSync('intro') } catch (_) {}
  render()
}

// ============================================================================
// GLOBAL LEADERBOARDS (Supabase REST)
// ============================================================================
let __leaderboardSyncTimer = null
let __leaderboardLastSent = { username: '', rp: -1, bestRp: -1, bestMajor: -1, bestMajorSub: -1, bestMajorIsDemon: null, bestMajorLabel: '' }

function getLeaderboardPlayerPayload() {
  const username = (state.playerName && String(state.playerName).trim()) ? String(state.playerName).trim() : ''
  const rp = clampNonNegativeInt(state.rebirthPoints)
  const bestRp = clampNonNegativeInt(state.bestRebirthPoints)
  const bm = state.bestMajorRealm && typeof state.bestMajorRealm === 'object'
    ? state.bestMajorRealm
    : { index: 0, subIndex: 0, isDemon: false, label: '' }
  const bestMajorIndex = clampNonNegativeInt(bm.index)
  const bestMajorSubIndex = clampNonNegativeInt(bm.subIndex)
  const bestMajorIsDemon = Boolean(bm.isDemon)
  const bestMajorLabel = String(bm.label || '')
  return {
    username,
    rebirth_points: rp,
    best_rebirth_points: bestRp,
    best_major_index: bestMajorIndex,
    best_major_sub_index: bestMajorSubIndex,
    best_major_is_demon: bestMajorIsDemon,
    best_major_label: bestMajorLabel
  }
}

async function leaderboardUpsertNow() {
  if (!isLeaderboardConfigured()) return false
  const payload = getLeaderboardPlayerPayload()
  if (!payload.username) return false

  // Avoid spamming the backend if nothing meaningful changed.
  const last = __leaderboardLastSent
  const same = last.username === payload.username
    && last.rp === payload.rebirth_points
    && last.bestRp === payload.best_rebirth_points
    && last.bestMajor === payload.best_major_index
    && last.bestMajorSub === payload.best_major_sub_index
    && last.bestMajorIsDemon === payload.best_major_is_demon
    && last.bestMajorLabel === payload.best_major_label
  if (same) return true

  const cfg = getLeaderboardConfig()
  const url = `${cfg.url.replace(/\/+$/, '')}/rest/v1/leaderboard?on_conflict=username`

  const doPost = async (bodyObj) => {
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': cfg.anonKey,
        'Authorization': `Bearer ${cfg.anonKey}`,
        'Prefer': 'resolution=merge-duplicates,return=minimal'
      },
      body: JSON.stringify(bodyObj)
    })
  }

  // Prefer the new schema field `best_major_sub_index`, but fall back if the column
  // hasn't been added yet (keeps old deployments functional).
  let res = await doPost(payload)
  if (!res.ok) {
    const txt = await res.text().catch(() => '')
    const lower = String(txt || '').toLowerCase()
    const missingSubIdx = res.status === 400 && (lower.includes('best_major_sub_index') || lower.includes('best_major_sub'))
    if (missingSubIdx) {
      const legacy = { ...payload }
      try { delete legacy.best_major_sub_index } catch (_) {}
      res = await doPost(legacy)
      if (!res.ok) {
        const txt2 = await res.text().catch(() => '')
        throw new Error(`Leaderboard upsert failed (${res.status}): ${txt2 || res.statusText}`)
      }
    } else {
      throw new Error(`Leaderboard upsert failed (${res.status}): ${txt || res.statusText}`)
    }
  }

  __leaderboardLastSent = {
    username: payload.username,
    rp: payload.rebirth_points,
    bestRp: payload.best_rebirth_points,
    bestMajor: payload.best_major_index,
    bestMajorSub: payload.best_major_sub_index,
    bestMajorIsDemon: payload.best_major_is_demon,
    bestMajorLabel: payload.best_major_label
  }
  return true
}

function leaderboardScheduleSync(reason) {
  // Debounce so we don't hammer the backend during rapid saves.
  if (!isLeaderboardConfigured()) return
  if (state.phase === 'INTRO_LOADING') return
  const r = String(reason || '').trim()

  if (r) {
    // no-op: useful for debugging
  }

  if (__leaderboardSyncTimer) {
    try { clearTimeout(__leaderboardSyncTimer) } catch (_) {}
  }
  __leaderboardSyncTimer = setTimeout(async () => {
    __leaderboardSyncTimer = null
    try {
      await leaderboardUpsertNow()
    } catch (e) {
      // Do not crash the game if the leaderboard is misconfigured.
      console.warn(String(e && e.message ? e.message : e))
    }
  }, 1500)
}

async function leaderboardFetch(kind) {
  const k = String(kind || '')
  if (!isLeaderboardConfigured()) {
    throw new Error(
      'Leaderboards are not configured. Missing Supabase URL/key. '
      + 'Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY at build time, '
      + 'or set window.__CS_SUPABASE_URL / window.__CS_SUPABASE_ANON_KEY, '
      + `or localStorage keys ${LEADERBOARD_CFG_STORAGE_URL_KEY} / ${LEADERBOARD_CFG_STORAGE_ANON_KEY}.`
    )
  }
  const cfg = getLeaderboardConfig()
  const base = `${cfg.url.replace(/\/+$/, '')}/rest/v1/leaderboard`
  const selectNew = 'select=username,rebirth_points,best_rebirth_points,best_major_index,best_major_sub_index,best_major_is_demon,best_major_label'
  const selectLegacy = 'select=username,rebirth_points,best_rebirth_points,best_major_index,best_major_is_demon,best_major_label'

  let order = 'order=best_major_index.desc'
  if (k === 'rebirth') order = 'order=best_rebirth_points.desc'

  const headers = {
    'apikey': cfg.anonKey,
    'Authorization': `Bearer ${cfg.anonKey}`
  }

  // Try new schema first (sub index). If column doesn't exist yet, fall back.
  let url = `${base}?${selectNew}&${order}&limit=25`
  let res = await fetch(url, { method: 'GET', headers })
  if (!res.ok) {
    const txt = await res.text().catch(() => '')
    const lower = String(txt || '').toLowerCase()
    const missingSubIdx = res.status === 400 && (lower.includes('best_major_sub_index') || lower.includes('best_major_sub'))
    if (missingSubIdx) {
      url = `${base}?${selectLegacy}&${order}&limit=25`
      res = await fetch(url, { method: 'GET', headers })
    } else {
      throw new Error(`Leaderboard fetch failed (${res.status}): ${txt || res.statusText}`)
    }
  }

  if (!res.ok) {
    const txt2 = await res.text().catch(() => '')
    throw new Error(`Leaderboard fetch failed (${res.status}): ${txt2 || res.statusText}`)
  }

  const data = await res.json().catch(() => [])
  return Array.isArray(data) ? data : []
}

window.refreshLeaderboards = async () => {
  // Safe to call even if panel is closed.
  if (!state.leaderboards || typeof state.leaderboards !== 'object') return
  state.leaderboards.major.loading = true
  state.leaderboards.rebirth.loading = true
  state.leaderboards.major.error = ''
  state.leaderboards.rebirth.error = ''
  render()

  try {
    const [maj, reb] = await Promise.all([
      leaderboardFetch('major'),
      leaderboardFetch('rebirth')
    ])
    state.leaderboards.major.rows = maj
    state.leaderboards.rebirth.rows = reb
    const now = Date.now()
    state.leaderboards.major.fetchedAt = now
    state.leaderboards.rebirth.fetchedAt = now
  } catch (e) {
    const msg = String(e && e.message ? e.message : e)
    state.leaderboards.major.error = msg
    state.leaderboards.rebirth.error = msg
  } finally {
    state.leaderboards.major.loading = false
    state.leaderboards.rebirth.loading = false
    render()
  }
}

function renderIntroLoading(container) {
  const progress = Math.max(0, Math.min(100, Math.floor(Number(state.intro?.progress) || 0)))
  const step = state.intro?.step || 'loading'
  const draft = state.intro?.usernameDraft ?? ''
  const canConfirmUsername = String(draft).trim().length > 0
  const animateTitle = state.intro?.hasAnimatedTitle ? false : true

  container.innerHTML = `
    <div class="intro-loading-screen">
      <div class="intro-loading-card">
        <div class="intro-title ${animateTitle ? 'intro-title-animate' : ''}">Cultivation Saga</div>
        <div class="intro-loading-bar-wrap">
          <div class="intro-loading-track">
            <div id="intro-progress-bar" class="intro-loading-bar" style="width: ${progress}%"></div>
            <div id="intro-progress-tip" class="intro-progress-tip" style="left: ${progress}%">${progress}%</div>
          </div>
        </div>

        ${step === 'ready' ? `
          <button class="intro-continue" onclick="window.introContinue()">Continue</button>
        ` : ''}
      </div>

      ${step === 'username' ? `
        <div class="modal-overlay intro-modal-overlay">
          <div class="modal-content intro-modal-content">
            <h2>Enter Username</h2>
            <input
              id="intro-username-input"
              class="password-input"
              type="text"
              value="${escapeHtml(draft)}"
              oninput="window.onIntroUsernameInput(event)"
              onkeydown="if(event.key==='Enter'){ event.preventDefault(); window.confirmIntroUsername(); }"
              placeholder="Username"
              autocomplete="off"
              spellcheck="false"
            />
            <div id="intro-username-error" class="password-error" style="display:block; min-height: 22px;"></div>
            <div class="modal-buttons">
              <button id="intro-username-confirm" onclick="window.confirmIntroUsername()" ${canConfirmUsername ? '' : 'disabled'}>
                Enter
              </button>
            </div>
          </div>
        </div>
      ` : ''}

      ${step === 'gender' ? `
        <div class="modal-overlay intro-modal-overlay">
          <div class="modal-content intro-modal-content">
            <h2>Select Cultivator</h2>
            <div class="intro-gender-grid">
              <button class="intro-gender-option" onclick="window.selectIntroGender('male')">
                ${renderCultivatorSilhouette('male')}
                <div class="intro-gender-label">Male cultivator silhouette</div>
              </button>
              <button class="intro-gender-option" onclick="window.selectIntroGender('female')">
                ${renderCultivatorSilhouette('female')}
                <div class="intro-gender-label">Female cultivator silhouette</div>
              </button>
            </div>
          </div>
        </div>
      ` : ''}
    </div>
  `

  updateIntroProgressUI(progress)

  ensureIntroKeybindings()

  if (animateTitle) {
    state.intro.hasAnimatedTitle = true
  }

  if (step === 'loading') {
    startIntroProgressLoop()
  } else {
    stopIntroProgressLoop()
  }
}

function resetGame() {
  try {
    localStorage.removeItem('cultivationSagaSave')
    location.reload()
  } catch (e) {
    console.error('Failed to reset game:', e)
  }
}

// ============================================================================
// FATE ROLL SYSTEM
// ============================================================================
function rollFate() {
  // Keep rebirth upgrade state normalized.
  state.rebirthUpgrades = normalizeRebirthUpgrades(state.rebirthUpgrades)

  const up = state.rebirthUpgrades
  const bloodlineLuckMult = 1 + clampNonNegativeInt(up.bloodlineLuckLevel)
  const rootLuckLvl = clampNonNegativeInt(up.rootLuckLevel)
  const maxRootsBonusLvl = clampNonNegativeInt(up.maxRootBonusLevel)
  const multiAffinityLuckLvl = clampNonNegativeInt(up.multiAffinityLuckLevel)
  const alignLuckLvl = clampNonNegativeInt(up.affinityAlignmentLuckLevel)
  const storyLuckLvl = clampNonNegativeInt(up.storyLuckLuckLevel)

  // Apply bloodline bias from rebirth upgrades
  const biasedBloodlines = BLOODLINES.map(b => {
    const rebirthBias = b.tier <= 3 ? (1 + state.rebirthUpgrades.bloodlineBias) : 1
    const tierRarity = getBloodlineWeightMultiplier(b.tier)
    const luckMult = b.tier <= 3 ? bloodlineLuckMult : 1
    return {
      ...b,
      weight: b.weight * rebirthBias * tierRarity * luckMult
    }
  })
  
  state.bloodline = weightedRandom(biasedBloodlines)
  
  // Roll spiritual roots with min/max constraints
  const effectiveMinRoots = clampNonNegativeInt(state.rebirthUpgrades.minRootCount)
    + clampNonNegativeInt(state.rebirthUpgrades.minRootBonusLevel)
  const effectiveMaxRoots = Math.max(
    effectiveMinRoots,
    clampNonNegativeInt(state.rebirthUpgrades.maxRootCount) + maxRootsBonusLvl
  )
  const validRoots = SPIRITUAL_ROOTS
    .filter(r => r.count >= effectiveMinRoots && r.count <= effectiveMaxRoots)
    .map(r => {
      const count = clampNonNegativeInt(r.count)
      const bonus = Math.max(0, count - 1)
      const luck = 1 + (rootLuckLvl * bonus)
      return { ...r, weight: clampNonNegativeNumber(r.weight) * luck }
    })

  state.spiritualRoots = weightedRandom(validRoots)
  
  // Roll story luck (1-100). Each purchase adds +5% chance to roll higher.
  const baseLuck = Math.floor(Math.random() * 100) + 1
  const storyBoostChance = Math.max(0, Math.min(1, 0.05 * storyLuckLvl))
  const boostedLuck = Math.floor(Math.random() * 100) + 1
  state.luck = (Math.random() < storyBoostChance) ? Math.max(baseLuck, boostedLuck) : baseLuck
  
  // Roll affinities (1-5 affinities, weighted toward fewer)
  const affinityWeights = AFFINITY_COUNT_WEIGHTS.map(o => {
    const count = clampNonNegativeInt(o.count)
    const luck = 1 + (multiAffinityLuckLvl * Math.max(0, count - 1))
    return { ...o, weight: clampNonNegativeNumber(o.weight) * luck }
  })
  const affinityCount = weightedRandom(affinityWeights).count
  state.affinities = []
  const shuffledAffinities = [...AFFINITIES].sort(() => Math.random() - 0.5)
  
  for (let i = 0; i < affinityCount; i++) {
    // Each purchase adds +1% chance to roll higher alignment (higher score).
    const highChance = Math.max(0, Math.min(0.95, 0.01 * alignLuckLvl))
    const score = (Math.random() < highChance)
      ? (Math.floor(Math.random() * 25) + 26) // 26..50
      : (Math.floor(Math.random() * 50) + 1)  // 1..50
    state.affinities.push({
      type: shuffledAffinities[i],
      score: score
    })
  }
  
  // Sort by score and set primary affinity
  state.affinities.sort((a, b) => b.score - a.score)
  state.primaryAffinity = state.affinities[0].type
  
  // Apply multipliers to base stats using calculation functions
  state.strength = calculateStrength()
  state.maxHealth = calculateMaxHealth()
  state.health = state.maxHealth
  
  console.log('Fate rolled:', state.bloodline.name, state.spiritualRoots.count, 'roots', 'Luck:', state.luck)
}

// ============================================================================
// RESOURCE CALCULATIONS
// ============================================================================
function getCurrentCultivationRealm() {
  const realmArray = state.isDemonPath ? DEMON_REALMS : CULTIVATION_REALMS
  const major = realmArray[state.cultivationMajorIndex]
  const sub = major.subRealms[state.cultivationSubIndex]
  return { major: major.major, sub: sub.sub, data: sub }
}

function enterDemonPathFromDemonicManualAcquisition() {
  // The Demonic Manual is the point-of-no-return for realm naming/progression.
  // Keep this minimal: just flip realm table + seed corruption.
  if (!state.isDemonPath) {
    state.isDemonPath = true
    state.cultivationMajorIndex = 0
    state.cultivationSubIndex = 0
    log('The Demonic Manual twists your path. Your cultivation realms are replaced by Demonic Major Realms.')
  }

  // Life is no longer a restraint on the demon path.
  // Expected lifespan jumps to 1000 years immediately.
  state.expectedLifespanMonths = Math.max(clampNonNegativeInt(state.expectedLifespanMonths), 1000 * 12)

  if (!Number.isFinite(state.corruption)) state.corruption = 0
  if (state.corruption <= 0) {
    state.corruption = 1
    log(`Corruption awakens within you. Corruption: ${state.corruption}`)
  }

  try { updateCombatStats() } catch (_) {}
}

function getAverageRealmStatsForMajorIndex(majorIndex, isDemon = false) {
  const idx = Math.max(0, Math.floor(Number(majorIndex) || 0))
  const realmArray = isDemon ? DEMON_REALMS : CULTIVATION_REALMS
  const major = realmArray[idx]
  const subs = major && Array.isArray(major.subRealms) ? major.subRealms : []
  if (!subs.length) return { qiMult: 1, strMult: 1, hpMult: 1 }
  let qi = 0, str = 0, hp = 0
  for (const s of subs) {
    qi += Number.isFinite(s?.qiMult) ? s.qiMult : 1
    str += Number.isFinite(s?.strMult) ? s.strMult : 1
    hp += Number.isFinite(s?.hpMult) ? s.hpMult : 1
  }
  const n = subs.length
  return { qiMult: qi / n, strMult: str / n, hpMult: hp / n }
}

function getProjectedPlayerCombatStatsAtMajorRealm(majorIndex) {
  // Uses the player's bloodline multipliers and current sect multipliers,
  // but projects realm scaling using the average sub-realm multipliers.
  const avg = getAverageRealmStatsForMajorIndex(majorIndex, Boolean(state.isDemonPath))
  const sectStr = Number.isFinite(state.sectMultipliers?.str) ? state.sectMultipliers.str : 1
  const sectHp = Number.isFinite(state.sectMultipliers?.hp) ? state.sectMultipliers.hp : 1
  const bl = state.bloodline || { strMult: 1, hpMult: 1 }
  const strMult = Number.isFinite(bl.strMult) ? bl.strMult : 1
  const hpMult = Number.isFinite(bl.hpMult) ? bl.hpMult : 1
  return {
    strength: Math.floor(10 * strMult * avg.strMult * sectStr),
    maxHealth: Math.floor(100 * hpMult * avg.hpMult * sectHp)
  }
}

function clampNonNegativeInt(n) {
  const x = Math.floor(Number(n) || 0)
  return x < 0 ? 0 : x
}

function clampNonNegativeNumber(n) {
  const x = Number(n)
  if (!Number.isFinite(x)) return 0
  return x < 0 ? 0 : x
}

function formatPoints(value) {
  const n = Number(value)
  if (!Number.isFinite(n)) return String(value)
  const rounded = Math.round(n * 10) / 10
  if (Math.abs(rounded - Math.round(rounded)) < 1e-9) return String(Math.round(rounded))
  return rounded.toFixed(1)
}

function splitYearsMonths(totalMonths) {
  const safeMonths = clampNonNegativeInt(totalMonths)
  return {
    years: Math.floor(safeMonths / 12),
    months: safeMonths % 12
  }
}

function getCultivationAgeLimitMonths() {
  // Cultivation becomes impossible 2 months before expected lifespan.
  return Math.max(0, clampNonNegativeInt(state.expectedLifespanMonths) - 2)
}

function canCultivateNow() {
  return clampNonNegativeInt(state.ageMonths) < getCultivationAgeLimitMonths()
}

function getLifespanGainMonthsForMinorAdvance(majorIndex, newSubIndex) {
  // First major realm: no lifespan gain.
  if (majorIndex <= 0) return 0

  // 2nd major realm: 5th minor breakthrough grants +1 year.
  // Interpreted as reaching sub-realm V.
  if (majorIndex === 1 && newSubIndex === 4) return 12

  // From 3rd major realm onward: +5 years per minor breakthrough.
  if (majorIndex >= 2) return 60

  return 0
}

function scaleCultivationCost(baseCost, type) {
  if (!baseCost) return baseCost

  // Keep scaling mild since realm data already increases significantly.
  // Goal: costs feel progressively harder within a major realm, and major breakthroughs
  // remain meaningfully more expensive than minor advances.
  const majorIndex = state.cultivationMajorIndex
  const subIndex = state.cultivationSubIndex

  if (type === 'advancement') {
    const withinMajorScale = Math.pow(1.06, subIndex) // 1.00 .. ~1.59
    const acrossMajorScale = Math.pow(1.03, majorIndex) // slow increase across majors
    return Math.ceil(baseCost * withinMajorScale * acrossMajorScale)
  }

  if (type === 'breakthrough') {
    // Breakthroughs should meaningfully gate major realm progression.
    // Keep early majors reasonable, but ramp up once players approach midgame.
    const acrossMajorScale = Math.pow(1.06, majorIndex)
    const breakthroughEmphasis = Math.min(1.35 + majorIndex * 0.12, 2.6)
    const lateMajorWall = 1 + Math.max(0, majorIndex - 3) * 0.25
    return Math.ceil(baseCost * acrossMajorScale * breakthroughEmphasis * lateMajorWall)
  }

  return baseCost
}

function getNextCultivationCost() {
  const realm = getCurrentCultivationRealm()
  const isLastSubRealm = state.cultivationSubIndex === 8 // IX is the last (index 8)
  
  if (isLastSubRealm && realm.data.majorCost) {
    return { cost: scaleCultivationCost(realm.data.majorCost, 'breakthrough'), type: 'breakthrough' }
  } else if (!isLastSubRealm) {
    return { cost: scaleCultivationCost(realm.data.minorCost, 'advancement'), type: 'advancement' }
  } else {
    return { cost: null, type: 'max' } // Max realm reached
  }
}

function calculateQiGain(baseQi) {
  const realm = getCurrentCultivationRealm()
  const realmQiMult = Number.isFinite(realm?.data?.qiMult) ? realm.data.qiMult : 1
  const safeRealmQiMult = Math.max(1.1, realmQiMult)
  const sectQi = Number.isFinite(state.sectMultipliers?.qi) ? state.sectMultipliers.qi : 1
  const demonAsc = state.demonCorruptionAscended ? 2.5 : 1
  return baseQi * state.bloodline.qiMult * state.spiritualRoots.qiMult * safeRealmQiMult * (state.qiMultiplier || 1) * getRebirthQiMultiplier() * sectQi * demonAsc
}

function calculateStrength() {
  const realm = getCurrentCultivationRealm()
  const sectStr = Number.isFinite(state.sectMultipliers?.str) ? state.sectMultipliers.str : 1
  const demonAsc = state.demonCorruptionAscended ? 2.5 : 1
  return Math.floor(10 * state.bloodline.strMult * realm.data.strMult * sectStr * demonAsc * getRebirthStrengthMultiplier())
}

function calculateMaxHealth() {
  const realm = getCurrentCultivationRealm()
  const sectHp = Number.isFinite(state.sectMultipliers?.hp) ? state.sectMultipliers.hp : 1
  const demonAsc = state.demonCorruptionAscended ? 2.5 : 1
  return Math.floor(100 * state.bloodline.hpMult * realm.data.hpMult * sectHp * demonAsc * getRebirthHealthMultiplier())
}

function addCorruptionPercent(amount, sourceLabel) {
  const amt = Math.floor(Number(amount))
  if (!Number.isFinite(amt) || amt <= 0) return
  if (!state.isDemonPath) return

  const before = clampNonNegativeInt(state.corruption)
  const after = Math.min(100, before + amt)
  state.corruption = after

  const src = String(sourceLabel || '').trim()
  log(`Corruption +${amt}%${src ? ` (${src})` : ''}. Total: ${after}%`)

  if (after >= 100 && !state.demonCorruptionAscended) {
    state.demonCorruptionAscended = true
    log('Your corruption reaches 100%. A permanent demonic ascension takes hold (+2.5× Health/Strength/Qi).')
    updateCombatStats()
  }
}

function formatNumber(value) {
  const numberValue = Number(value)
  if (!Number.isFinite(numberValue)) return String(value)

  const sign = numberValue < 0 ? '-' : ''
  const n = Math.floor(Math.abs(numberValue))

  const suffixes = [
    { unit: 1e33, suffix: 'Dc' },
    { unit: 1e30, suffix: 'No' },
    { unit: 1e27, suffix: 'Oc' },
    { unit: 1e24, suffix: 'Sp' },
    { unit: 1e21, suffix: 'Sx' },
    { unit: 1e18, suffix: 'Qi' },
    { unit: 1e15, suffix: 'Qa' },
    { unit: 1e12, suffix: 'T' },
    { unit: 1e9, suffix: 'B' },
    { unit: 1e6, suffix: 'M' },
    { unit: 1e3, suffix: 'k' }
  ]

  for (const { unit, suffix } of suffixes) {
    if (n >= unit) return `${sign}${Math.floor(n / unit)}${suffix}`
  }

  return `${sign}${n}`
}

function formatMultiplier(value) {
  const numberValue = Number(value)
  if (!Number.isFinite(numberValue)) return String(value)

  const abs = Math.abs(numberValue)
  if (abs >= 10) {
    const formatted = formatNumber(numberValue)
    // If formatNumber added a suffix (k/M/etc), do not append the multiplier "x".
    // This avoids awkward strings like "12kx" (or "1Sxx" where the suffix itself ends with "x").
    return /[A-Za-z]$/.test(formatted) ? formatted : `${formatted}x`
  }

  const rounded = Math.round(numberValue * 100) / 100
  let s = rounded.toFixed(2)
  s = s.replace(/0+$/, '').replace(/\.$/, '')
  return `${s}x`
}

function updateCombatStats() {
  const oldMaxHealth = state.maxHealth
  state.strength = calculateStrength()
  state.maxHealth = calculateMaxHealth()
  
  // Scale current health proportionally
  if (oldMaxHealth > 0) {
    const healthPercent = state.health / oldMaxHealth
    state.health = Math.floor(state.maxHealth * healthPercent)
  } else {
    state.health = state.maxHealth
  }
}

function renderCultivationInfo() {
  const realm = getCurrentCultivationRealm()
  const nextCost = getNextCultivationCost()
  const age = splitYearsMonths(state.ageMonths)
  const expected = splitYearsMonths(state.expectedLifespanMonths)
  const canCultivate = canCultivateNow()
  const isQiCapped = Boolean(nextCost && Number.isFinite(nextCost.cost) && nextCost.cost > 0 && state.qi >= nextCost.cost)

  const realmLabel = state.isDemonPath
    ? `Demonic Major Realm ${clampNonNegativeInt(state.cultivationMajorIndex) + 1} — ${realm.major} ${realm.sub}`
    : `${realm.major} ${realm.sub}`

  const realmQiMult = Number.isFinite(realm?.data?.qiMult) ? realm.data.qiMult : 1
  const safeRealmQiMult = Math.max(1.1, realmQiMult)
  const sectQi = Number.isFinite(state.sectMultipliers?.qi) ? state.sectMultipliers.qi : 1

  const totalQiMult = calculateQiGain(1)
  
  // Calculate progress percentage for visual fill
  let progressPercent = 0
  
  if (nextCost.cost) {
    progressPercent = Math.min((state.qi / nextCost.cost) * 100, 100)
  } else {
    progressPercent = 100 // Max realm
  }
  
  let nextRealmText = ''
  if (nextCost.type === 'breakthrough') {
    const realmArray = state.isDemonPath ? DEMON_REALMS : CULTIVATION_REALMS
    const nextMajor = realmArray[state.cultivationMajorIndex + 1]
    nextRealmText = nextMajor ? `${nextMajor.major} I` : 'MAX REALM'
  } else if (nextCost.type === 'advancement') {
    const nextSubIndex = state.cultivationSubIndex + 1
    const romanNumerals = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX']
    nextRealmText = `${realm.major} ${romanNumerals[nextSubIndex]}`
  } else {
    nextRealmText = 'MAX REALM'
  }
  
  const currentQi = Number(state.qi) || 0
  const neededQi = Number.isFinite(nextCost?.cost) ? nextCost.cost : null
  const remainingQi = neededQi !== null ? Math.max(0, neededQi - currentQi) : 0
  const perSecond = Math.max(1e-9, calculateQiGain(1))
  const secondsLeft = neededQi !== null ? Math.ceil(remainingQi / perSecond) : 0
  const minutesLeft = Math.floor(secondsLeft / 60)
  const secondsLeftR = secondsLeft % 60
  const timeLeftText = neededQi === null
    ? 'MAX'
    : `${minutesLeft} minutes and ${secondsLeftR} seconds`

  const equippedManualName = String(state.equipped?.manual || '')

  return `
    <div class="cultivation-panel">
      <div class="cultivation-top">
        <div class="cultivation-left">
          <div class="cultivation-silhouette-container" onmouseenter="window.setCultivationMultiplierPeek(true)" onmouseleave="window.setCultivationMultiplierPeek(false)">
            <div class="cultivation-silhouette-base" aria-hidden="true"></div>
            <div class="cultivation-silhouette-fill ${state.isCultivating ? 'cultivating-active' : ''}"
                 style="--fill: ${progressPercent}%;" aria-hidden="true"></div>

            <div class="cultivation-box" aria-label="Cultivation Multipliers" onmouseenter="window.setCultivationMultiplierPeek(true)" onmouseleave="window.setCultivationMultiplierPeek(false)">
              <div class="cultivation-box-title">CULTIVATION</div>
              <div class="cultivation-box-rows">
                <div class="cultivation-box-row"><span>SPIRITUAL ROOTS:</span><span>${formatMultiplier(state.spiritualRoots?.qiMult || 1)}</span></div>
                <div class="cultivation-box-row"><span>MANUAL TIER:</span><span>${formatNumber(state.manualTier || 0)}%</span></div>
                <div class="cultivation-box-row"><span>REALM:</span><span>${formatMultiplier(safeRealmQiMult)}</span></div>
                <div class="cultivation-box-row"><span>BLOODLINE:</span><span>${formatMultiplier(state.bloodline?.qiMult || 1)}</span></div>
                <div class="cultivation-box-row"><span>QI BONUS:</span><span>${formatMultiplier((state.qiMultiplier || 1) * getRebirthQiMultiplier())}</span></div>
                <div class="cultivation-box-row"><span>SECT MANUAL:</span><span>${formatMultiplier(sectQi)}</span></div>
              </div>
              <div class="cultivation-box-total">TOTAL: ${formatMultiplier(totalQiMult)}</div>
            </div>
          </div>

          <button onclick="window.toggleCultivate()" ${(!canCultivate || isQiCapped) && !state.isCultivating ? 'disabled' : ''} class="cultivate-btn ${state.isCultivating ? 'cultivating' : ''}">
            ${state.isCultivating ? 'CULTIVATING...' : 'CULTIVATE'}
          </button>
        </div>

        <div class="cultivation-meta" aria-label="Cultivation Status">
          <div class="meta-row"><span class="meta-label">Realm:</span><span class="meta-value">${realmLabel}</span></div>
          <div class="meta-row"><span class="meta-label">Age:</span><span class="meta-value">${age.years} year(s), ${age.months} month(s)</span></div>
          <div class="meta-row"><span class="meta-label">Current Manual:</span><span class="meta-value">${escapeHtml(equippedManualName || 'None')}</span></div>
          <div class="meta-row"><span class="meta-label">Current Qi Amount:</span><span class="meta-value">${formatNumber(currentQi)}</span></div>
          <div class="meta-row"><span class="meta-label">Qi Multiplication Rate:</span><span class="meta-value">${formatMultiplier(totalQiMult)}</span></div>
          <div class="meta-row"><span class="meta-label">Needed Qi Amount:</span><span class="meta-value">${neededQi === null ? 'MAX' : formatNumber(neededQi)}</span></div>
          <div class="meta-row"><span class="meta-label">Expected Lifespan:</span><span class="meta-value">${expected.years} years</span></div>
          <div class="meta-row"><span class="meta-label">Time Left:</span><span class="meta-value">${timeLeftText}</span></div>
        </div>
      </div>

      <div class="cultivation-actions-row">
        ${nextCost.cost ? `
          <button onclick="window.advanceRealm()" ${state.qi < nextCost.cost || (nextCost.type === 'breakthrough' && state.cultivationMajorIndex === 0 && !state.hasManual) ? 'disabled' : ''}>
            ${nextCost.type === 'breakthrough' ? 'Breakthrough' : 'Advance'} to ${nextRealmText} (${formatNumber(nextCost.cost)} Qi)
          </button>
          ${nextCost.type === 'breakthrough' && state.cultivationMajorIndex === 0 && !state.hasManual ? '<div class="cultivation-warn">Requires cultivation manual</div>' : ''}
        ` : '<div class="max-realm">Maximum Realm Achieved!</div>'}
      </div>
    </div>
  `
}

window.setCultivationMultiplierPeek = (isOn) => {
  const on = Boolean(isOn)
  const panel = document.querySelector('.cultivation-panel')
  if (!panel) return

  if (!window.__cultivationPeekOffTimer) window.__cultivationPeekOffTimer = null

  if (on) {
    if (window.__cultivationPeekOffTimer) {
      clearTimeout(window.__cultivationPeekOffTimer)
      window.__cultivationPeekOffTimer = null
    }
    panel.classList.add('cultivation-mults-peek')
    return
  }

  if (window.__cultivationPeekOffTimer) clearTimeout(window.__cultivationPeekOffTimer)
  window.__cultivationPeekOffTimer = setTimeout(() => {
    try { panel.classList.remove('cultivation-mults-peek') } catch (_) {}
    window.__cultivationPeekOffTimer = null
  }, 70)
}

function getInventoryItemImageSrc(item) {
  if (item?.imageSrc) return String(item.imageSrc)
  const name = String(item?.name || '')
  if (name === 'Demonic Manual' || name === 'Demon Monarch Manual' || name === 'Demon Monarch Manual (Tier 1)') {
    return 'assets/Demonic_manual.png'
  }
  if (name === 'Hidden Heavenly Demon Manual' || name === 'Heavenly Demon Manual') {
    return 'assets/Heavenly_demon_manual.png'
  }

  const manualMatch = name.match(/^(.*) Manual \(Tier \d+\)$/)
  if (manualMatch) {
    const affinity = String(manualMatch[1] || '').trim().toLowerCase()
    const safe = affinity
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9\-]/g, '')
    return `assets/${safe}-manual.png`
  }

  const map = {
    'Beginner Cultivation Manual': 'assets/cloud-manual.png',
    'Demonic Manual': 'assets/Demonic_manual.png',
    'Hidden Heavenly Demon Manual': 'assets/Heavenly_demon_manual.png',
    'Orthodox Manual': 'assets/Orthodox_manual.png',
    'Farming Tools': 'assets/rusted-pickaxe.png',
    'Rusted Axe': 'assets/rusted-axe.png',
    'Normal Axe': 'assets/silver-axe.png',
    'Legendary Axe': 'assets/thunder-axe.png',
    'Mysterious Herb': 'assets/grass.png',
    'Ginseng': 'assets/grass.png',
    'Spirit Grass': 'assets/grass.png',
    'Bloody Root': 'assets/grass.png',
    'Snow Lotus': 'assets/grass.png',
    'Jade Leaf': 'assets/grass.png',
    'Moonflower': 'assets/grass.png',
    'Dragonwort': 'assets/grass.png',
    'Herb Pill': 'assets/herb_pill.png',
    'Qi Gathering Pill': 'assets/qi_pill.png'
  }
  return map[name] || ''
}

function getInventoryItemBonuses(item) {
  const name = String(item?.name || '')
  if (name === 'Farming Tools') return ['Copper gained from selling crops: +50%']
  if (name === 'Normal Axe') return ['Silver gained from selling wood: +50%']
  if (name === 'Legendary Axe') return ['Silver gained from selling wood: +70%']
  if (name === 'Mysterious Herb') return ['Qi gain: +20%']
  if (name === 'Qi Gathering Pill') return ['Use: Instantly grants 500 Qi']
  if (item?.kind === 'pill' || name === 'Herb Pill') {
    const pillFile = String(item?.pillFile || '')

    // Keep these in sync with `useInventoryItem()` pill effects.
    if (pillFile === 'qi_pill.png' || name === 'Qi Pill') return ['Use: Instantly grants 120 Qi']
    if (pillFile === 'herb_pill.png' || name === 'Herbal Pill' || name === 'Herb Pill') return ['Use: Instantly grants 25 Qi']
    if (pillFile === 'breakthrough_pill.png' || name === 'Breakthrough Pill') return ['Use: Instantly grants 200 Qi']
    if (pillFile === 'iron_body_pill.png' || name === 'Iron Body Pill') return ['Use: Instantly grants 40 Qi', 'Bonus: +10 Max HP']
    if (pillFile === 'ying_yang_pill.png' || name === 'Ying-Yang Pill') return ['Use: Instantly grants 30 Qi', 'Bonus: Fully heals you']
    if (pillFile === 'angel_pill.png' || name === 'Angel Pill') return ['Use: Instantly grants 60 Qi', 'Bonus: Fully heals you', 'Bonus: +1 fate reroll']
    if (pillFile === 'lightning_pill.png' || name === 'Lightning Pill') return ['Use: Instantly grants 80 Qi', 'Bonus: +1 stamina']
    if (pillFile === 'demon_pill.png' || name === 'Demon Pill') return ['Use: Instantly grants 250 Qi']
    if (pillFile === 'corruption_pill.png' || name === 'Corruption Pill') return ['Use: Instantly grants 180 Qi']
    if (pillFile === 'death_pill.png' || name === 'Death Pill') return ['Use: Instantly grants 500 Qi']

    return ['Use: Instantly grants Qi']
  }
  if (name.endsWith('Manual (Tier 1)')) return ['Unlocks manual moves (Tier 1)']
  if (name === 'Beginner Cultivation Manual') return ['Allows major realm breakthroughs']
  return []
}

function getInventoryEquipSlot(item) {
  const name = String(item?.name || '')
  if (name.includes('Axe') || name === 'Farming Tools') return 'tool'
  if (name.includes('Manual')) return 'manual'
  return null
}

function canUseInventoryItem(item) {
  const name = String(item?.name || '')
  return name === 'Qi Gathering Pill' || name === 'Mysterious Herb' || name === 'Herb Pill' || item?.kind === 'pill'
}

function applyEquipmentEffects() {
  // Reset to defaults that are not handled elsewhere.
  // NOTE: This keeps current behavior compatible with older saves.
  state.copperMultiplier = 1
  state.silverMultiplier = 1

  const toolName = state.equipped?.tool
  if (toolName === 'Farming Tools') state.copperMultiplier = 1.5
  if (toolName === 'Normal Axe') state.silverMultiplier = 1.5
  if (toolName === 'Legendary Axe') state.silverMultiplier = 1.7
}

window.selectInventoryItem = (index) => {
  const idx = Number(index)
  if (!Number.isFinite(idx)) return
  state.selectedInventoryIndex = idx
  render()
  saveGame()
}

window.equipInventoryItem = (index) => {
  const idx = Number(index)
  const items = Array.isArray(state.inventory) ? state.inventory : []
  const item = items[idx]
  if (!item) return
  const slot = getInventoryEquipSlot(item)
  if (!slot) return

  if (!state.equipped || typeof state.equipped !== 'object') {
    state.equipped = { tool: null, manual: null }
  }

  state.equipped[slot] = String(item.name || '')
  applyEquipmentEffects()

  if (slot === 'manual') {
    const manualName = String(item.name || '')
    if (manualName === 'Demonic Manual') {
      if (state.hasJoinedSect) {
        log('Your demonic ways will not be tolerated in this sect! BE GONE!')
        state.demonExileReturnPhase = state.phase
        state.phase = 'DEMON_EXILE'
      }
      clearSectState()
      state.demonMonarchOnly = true
      state.sectJoinPickerOpen = false
      state.sectRankPyramidOpen = false
    }
  }
  render()
  saveGame()
}

window.dismissDemonExile = () => {
  state.phase = state.demonExileReturnPhase || 'FARMING'
  state.demonExileReturnPhase = null
  render()
  saveGame()
}

window.useInventoryItem = (index) => {
  const idx = Number(index)
  const items = Array.isArray(state.inventory) ? state.inventory : []
  const item = items[idx]
  if (!item) return
  if (!canUseInventoryItem(item)) return

  const name = String(item.name || '')

  // Pills (including older saves where pills may not have `kind`).
  if (item.kind === 'pill' || name === 'Qi Gathering Pill' || name === 'Herb Pill') {
    const pillFile = String(item.pillFile || '')
    const pillName = name

    // Default fallback: modest Qi gain.
    let gainedQi = 10
    let healToFull = false
    let gainedStamina = 0
    let gainedRerolls = 0
    let incMaxHealth = 0

    if (pillName === 'Qi Gathering Pill') {
      gainedQi = 500
    } else if (pillFile === 'qi_pill.png' || pillName === 'Qi Pill') {
      gainedQi = 120
    } else if (pillFile === 'herb_pill.png' || pillName === 'Herbal Pill' || pillName === 'Herb Pill') {
      gainedQi = 25
    } else if (pillFile === 'breakthrough_pill.png' || pillName === 'Breakthrough Pill') {
      gainedQi = 200
    } else if (pillFile === 'iron_body_pill.png' || pillName === 'Iron Body Pill') {
      gainedQi = 40
      incMaxHealth = 10
    } else if (pillFile === 'ying_yang_pill.png' || pillName === 'Ying-Yang Pill') {
      gainedQi = 30
      healToFull = true
    } else if (pillFile === 'angel_pill.png' || pillName === 'Angel Pill') {
      gainedQi = 60
      healToFull = true
      gainedRerolls = 1
    } else if (pillFile === 'lightning_pill.png' || pillName === 'Lightning Pill') {
      gainedQi = 80
      gainedStamina = 1
    } else if (pillFile === 'demon_pill.png' || pillName === 'Demon Pill') {
      gainedQi = 250
      // If corruption exists, lean into it without forcing demon path.
      if (typeof state.corruption === 'number') state.corruption = clampNonNegativeInt(state.corruption) + 1
    } else if (pillFile === 'corruption_pill.png' || pillName === 'Corruption Pill') {
      gainedQi = 180
      if (typeof state.corruption === 'number') state.corruption = clampNonNegativeInt(state.corruption) + 2
    } else if (pillFile === 'death_pill.png' || pillName === 'Death Pill') {
      gainedQi = 500
      // Powerful but risky: drops you to 1 HP.
      state.health = Math.max(1, clampNonNegativeInt(state.health))
      state.health = 1
    }

    if (incMaxHealth > 0) {
      state.maxHealth = clampNonNegativeInt(state.maxHealth) + incMaxHealth
      state.health = Math.min(clampNonNegativeInt(state.maxHealth), clampNonNegativeInt(state.health))
    }
    if (healToFull) {
      state.health = clampNonNegativeInt(state.maxHealth)
    }
    if (gainedStamina > 0) {
      state.stamina = Math.min(clampNonNegativeInt(state.maxStamina), clampNonNegativeInt(state.stamina) + gainedStamina)
    }
    if (gainedRerolls > 0) {
      state.rerollsRemaining = clampNonNegativeInt(state.rerollsRemaining) + gainedRerolls
    }

    state.qi = (Number(state.qi) || 0) + gainedQi
    log(`You consume ${pillName}. +${gainedQi} Qi.`)
    if (incMaxHealth > 0) log(`Your body hardens. +${incMaxHealth} Max HP.`)
    if (healToFull) log('Your wounds knit closed.')
    if (gainedStamina > 0) log(`You feel energized. +${gainedStamina} stamina.`)
    if (gainedRerolls > 0) log(`Fate stirs. +${gainedRerolls} reroll.`)
  } else if (name === 'Mysterious Herb') {
    state.qiMultiplier = 1.2
    log('You consume the Mysterious Herb. Qi gain permanently increased by 20%!')
  }

  const q = Number(item.quantity) || 1
  if (q <= 1) {
    items.splice(idx, 1)
    if (state.selectedInventoryIndex === idx) state.selectedInventoryIndex = null
    if (state.selectedInventoryIndex !== null && state.selectedInventoryIndex > idx) {
      state.selectedInventoryIndex -= 1
    }
  } else {
    item.quantity = q - 1
  }

  state.inventory = items
  render()
  saveGame()
}

// ============================================================================
// UI RENDERING
// ============================================================================
function render() {
  // Preserve log scroll position across full screen re-renders.
  captureLogScrollState()

  // Keep spirit-stone rebirth-point bonus applied in real time.
  try { syncRebirthPointsWithSpiritStoneBonus() } catch (_) {}

  const app = document.getElementById('app')

  // Theme hook: keep intro/loading visuals intact, switch the rest to paper style.
  try {
    document.body.classList.toggle('phase-intro-loading', state.phase === 'INTRO_LOADING')
  } catch (_) {}

  // Only the Fate Roll screen needs extra width; keep the main game compact
  // so side panels fit correctly.
  if (state.phase === 'FATE_ROLL') {
    app.classList.add('app-wide')
  } else {
    app.classList.remove('app-wide')
  }

  // Render into a persistent content container so side panels (mounted outside of it)
  // are not destroyed by screen re-renders.
  let root = document.getElementById('app-root')
  if (!root) {
    root = document.createElement('div')
    root.id = 'app-root'
    root.className = 'main-container'
    app.appendChild(root)
  }

  let content = document.getElementById('app-content')
  if (!content) {
    content = document.createElement('div')
    content.id = 'app-content'
    root.appendChild(content)
  }

  // Ensure side panel state is always a Set (saved games may deserialize this as an array/object)
  if (!(state.activeSidePanels instanceof Set)) {
    if (Array.isArray(state.activeSidePanels)) {
      state.activeSidePanels = new Set(state.activeSidePanels)
    } else {
      state.activeSidePanels = new Set()
    }
  }
  
  if (state.phase === 'INTRO_LOADING') {
    renderIntroLoading(content)
  } else if (state.phase === 'FATE_ROLL') {
    renderFateRoll(content)
  } else if (state.phase === 'FARMING') {
    renderFarming(content)
  } else if (state.phase === 'FAKE_IMMORTAL') {
    renderFakeImmortal(content)
  } else if (state.phase === 'STORY_DIALOG') {
    renderStoryDialog(content)
    // If a save was loaded mid-dialog, restart the timed paging.
    try {
      if (state.storyDialog && typeof state.storyDialog === 'object' && !state.storyDialog.done) {
        startStoryDialogTimerTick()
      }
    } catch (_) {}
  } else if (state.phase === 'DEMON_EXILE') {
    renderDemonExile(content)
  } else if (state.phase === 'WOOD') {
    renderWood(content)
  } else if (state.phase === 'COMBAT') {
    renderCombat(content)
  }
  
  // Always update log after render
  renderLog()

  // Ensure we have a main-container anchor + overlay layer for side panels.
  // This must exist BEFORE rendering any side panels.
  ensureSidePanelsOverlay()
  
  // Render side panel toggle buttons and active panel
  if (state.phase !== 'FATE_ROLL' && state.phase !== 'INTRO_LOADING' && state.phase !== 'STORY_DIALOG') {
    renderSidePanelToggles()
    renderActivePanel()
  } else {
    // Remove toggle buttons and panels on fate roll screen
    const toggles = document.getElementById('side-panel-toggles')
    if (toggles) {
      toggles.remove()
    }
    const statsPanel = document.getElementById('stats-panel')
    if (statsPanel) {
      statsPanel.remove()
    }
    const inventoryPanel = document.getElementById('inventory-panel')
    if (inventoryPanel) {
      inventoryPanel.remove()
    }
    const actionsPanel = document.getElementById('actions-panel')
    if (actionsPanel) {
      detachPanelResizePersistence(actionsPanel)
      actionsPanel.remove()
    }
  }
  
  // Remove dev-only UI affordances (dev reset, speed, cinematic previews, etc)
  const devUi = document.getElementById('dev-reset-container')
  if (devUi) devUi.remove()
  const resetModal = document.getElementById('reset-modal')
  if (resetModal) resetModal.remove()

  // Render rebirth node modal if needed
  if (state.showRebirthNodeModal) {
    renderRebirthNodeModal()
  } else {
    const modal = document.getElementById('rebirth-node-modal')
    if (modal) modal.remove()
  }
}

function getMainContainerElement() {
  // Always prefer the persistent root so side panels survive screen re-renders.
  return document.getElementById('app-root') || document.getElementById('app')
}

function ensureSidePanelsOverlay() {
  const main = getMainContainerElement()
  if (!main) return null

  // Mark as anchor reference
  if (!main.classList.contains('main-container')) main.classList.add('main-container')

  // Ensure overlay layer exists inside the anchor
  let overlay = main.querySelector('#side-panels-overlay')
  if (!overlay) {
    overlay = document.createElement('div')
    overlay.id = 'side-panels-overlay'
    overlay.className = 'side-panels-overlay'
    main.appendChild(overlay)
  }
  return overlay
}

function getSidePanelsMount() {
  return ensureSidePanelsOverlay() || document.body
}

// ============================================================================
// RESIZABLE PANEL PERSISTENCE (width/height)
// ============================================================================
const _panelResizeMeta = new WeakMap()
const _panelResizeSaveTimers = Object.create(null)

function applySavedPanelSize(el, key) {
  const saved = state.panelSizes && state.panelSizes[key]
  if (!saved || typeof saved !== 'object') return
  if (Number.isFinite(saved.w)) el.style.width = `${saved.w}px`
  if (Number.isFinite(saved.h)) el.style.height = `${saved.h}px`
}

function detachPanelResizePersistence(el) {
  const meta = _panelResizeMeta.get(el)
  if (!meta) return
  try {
    meta.ro?.disconnect?.()
  } catch (_) {}
  _panelResizeMeta.delete(el)
}

function attachPanelResizePersistence(el, key) {
  if (_panelResizeMeta.has(el)) return

  // Only start persisting once the user has interacted with the panel.
  // This avoids auto-saving an initial clamped size on smaller screens.
  let armed = false
  const onArm = () => { armed = true }
  el.addEventListener('pointerdown', onArm, { passive: true })

  const ro = typeof ResizeObserver !== 'undefined'
    ? new ResizeObserver(() => {
      if (!armed) return
      const w = el.offsetWidth
      const h = el.offsetHeight
      if (!Number.isFinite(w) || !Number.isFinite(h)) return

      if (!state.panelSizes || typeof state.panelSizes !== 'object') {
        state.panelSizes = {}
      }
      const prev = state.panelSizes[key] || {}
      if (prev.w === w && prev.h === h) return
      state.panelSizes[key] = { w, h }

      clearTimeout(_panelResizeSaveTimers[key])
      _panelResizeSaveTimers[key] = setTimeout(() => {
        try { saveGame() } catch (_) {}
      }, 250)
    })
    : null

  ro?.observe?.(el)
  _panelResizeMeta.set(el, { ro })
}

function getRebirthNodeIconSrc(nodeId) {
  const id = String(nodeId || '')
  const map = {
    start: 'assets/ying_yang_pill.png',
    reroll: 'assets/Orthodox_manual.png',
    bias1: 'assets/gold-coin.png',
    bias2: 'assets/silver-coin.png',
    bias3: 'assets/copper-coin.png',
    min2: 'assets/grass.png',
    min3: 'assets/grass-manual.png',
    max6: 'assets/rock.png',
    max7: 'assets/space.png',
    reset: 'assets/breakthrough_pill.png',
    qi_mult: 'assets/ki.png',

    herb_speed: 'assets/grass.png',
    herb_multi: 'assets/spiritstone-low.png',
    auto_gather: 'assets/rusted-pickaxe.png',
    auto_craft: 'assets/herb_pill.png',
    pill_speed: 'assets/qi_pill.png',

    str_mult: 'assets/gold-sword.png',
    hp_mult: 'assets/iron_body_pill.png',
    special_cd: 'assets/battery.png',
    repeat_speed: 'assets/rusted-axe.png',

    min_roots_plus: 'assets/grass-manual.png',

    root_luck: 'assets/space.png',
    max_roots_plus: 'assets/rock.png',
    more_rerolls: 'assets/Orthodox_manual.png',
    bloodline_luck: 'assets/gold-coin.png',
    multi_affinity_luck: 'assets/ki.png',
    affinity_alignment: 'assets/Pentagram.png',
    story_luck: 'assets/battery.png',
    spiritstone_rp: 'assets/spiritstone-high.png',
    quest_drop: 'assets/gold-sword.png'
  }
  return map[id] || 'assets/qi_pill.png'
}

function getRebirthNodeDefinition(nodeId) {
  const id = String(nodeId || '')
  const u = normalizeRebirthUpgrades(state.rebirthUpgrades)
  state.rebirthUpgrades = u

  const resetProgress = clampNonNegativeInt(u.resetUnlockProgress)
  const resetNext = Math.min(100, resetProgress + 10)
  const resetCost = 5

  const qiLvl = getRebirthQiMultiplierLevel()
  const qiMult = getRebirthQiMultiplier()
  const qiCost = getRebirthQiMultiplierNextCost()

  const herbSpeedLvl = clampNonNegativeInt(u.herbGatherSpeedLevel)
  const herbSpeedPct = herbSpeedLvl * 5
  const herbSpeedCost = getRebirthInfiniteNodeCost(herbSpeedLvl)

  const herbMultiLvl = clampNonNegativeInt(u.herbMultiGatherLevel)
  const herbMultiPct = herbMultiLvl * 10
  const herbsPerGather = 1 + Math.floor(herbMultiLvl / 10)
  const herbMultiCost = getRebirthInfiniteNodeCost(herbMultiLvl)

  const strLvl = clampNonNegativeInt(u.strengthMultiplierLevel)
  const strMult = 1 + (0.1 * strLvl)
  const strCost = getRebirthInfiniteNodeCost(strLvl)

  const hpLvl = clampNonNegativeInt(u.healthMultiplierLevel)
  const hpMult = 1 + (0.1 * hpLvl)
  const hpCost = getRebirthInfiniteNodeCost(hpLvl)

  const specialLvl = clampNonNegativeInt(u.specialCooldownLevel)
  const specialCdRed = 0.5 * specialLvl
  const specialCost = getRebirthInfiniteNodeCost(specialLvl)

  const repeatLvl = clampNonNegativeInt(u.repeatableSpeedLevel)
  const repeatRed = 0.25 * repeatLvl
  const repeatCost = getRebirthInfiniteNodeCost(repeatLvl)

  const autoGatherLvl = clampNonNegativeInt(u.autoGatherLevel)
  const autoGatherPct = autoGatherLvl * 5
  const autoGatherUnlocked = autoGatherPct >= 100
  const autoGatherCost = getRebirthInfiniteNodeCost(autoGatherLvl)

  const autoCraftLvl = clampNonNegativeInt(u.autoCraftLevel)
  const autoCraftPct = autoCraftLvl * 5
  const autoCraftUnlocked = autoCraftPct >= 100
  const autoCraftCost = getRebirthInfiniteNodeCost(autoCraftLvl)

  const pillSpeedLvl = clampNonNegativeInt(u.pillCraftSpeedLevel)
  const pillRed = 0.25 * pillSpeedLvl
  const pillSpeedCost = getRebirthInfiniteNodeCost(pillSpeedLvl)

  const minRootsLvl = clampNonNegativeInt(u.minRootBonusLevel)
  const minRootsCost = getRebirthInfiniteNodeCost(minRootsLvl)
  const effectiveMinRoots = clampNonNegativeInt(u.minRootCount) + minRootsLvl

  const rootLuckLvl = clampNonNegativeInt(u.rootLuckLevel)
  const rootLuckCost = getRebirthInfiniteNodeCost(rootLuckLvl)

  const maxRootsBonusLvl = clampNonNegativeInt(u.maxRootBonusLevel)
  const maxRootsBonusCost = getRebirthInfiniteNodeCost(maxRootsBonusLvl)
  const effectiveMaxRoots = Math.max(effectiveMinRoots, clampNonNegativeInt(u.maxRootCount) + maxRootsBonusLvl)

  const moreRerollsLvl = clampNonNegativeInt(u.extraRerollsLevel)
  const moreRerollsCost = getRebirthInfiniteNodeCost(moreRerollsLvl)

  const bloodlineLuckLvl = clampNonNegativeInt(u.bloodlineLuckLevel)
  const bloodlineLuckCost = getRebirthInfiniteNodeCost(bloodlineLuckLvl)

  const multiAffinityLuckLvl = clampNonNegativeInt(u.multiAffinityLuckLevel)
  const multiAffinityLuckCost = getRebirthInfiniteNodeCost(multiAffinityLuckLvl)

  const alignLuckLvl = clampNonNegativeInt(u.affinityAlignmentLuckLevel)
  const alignLuckCost = getRebirthInfiniteNodeCost(alignLuckLvl)

  const storyLuckLvl = clampNonNegativeInt(u.storyLuckLuckLevel)
  const storyLuckCost = getRebirthInfiniteNodeCost(storyLuckLvl)

  const stoneRpLvl = clampNonNegativeInt(u.spiritStoneRpMultLevel)
  const stoneRpMult = getRebirthSpiritStoneRpMultiplier()
  const stoneRpCost = getRebirthInfiniteNodeCost(stoneRpLvl, 3)

  const questDropLvl = clampNonNegativeInt(u.questDropChanceLevel)
  const questDropPct = questDropLvl * 1
  const questDropCost = getRebirthInfiniteNodeCost(questDropLvl)

  const defs = {
    start: {
      id: 'start',
      name: 'Rebirth',
      description: 'The origin of your fate blessings.',
      cost: 0,
      prereq: [],
      purchased: true,
      canBuy: () => false
    },
    qi_mult: {
      id: 'qi_mult',
      name: 'Qi Multiplier',
      description: `Permanently increases your Qi gain multiplier. Current: ${formatMultiplier(qiMult)} (level ${qiLvl}). Each purchase adds +0.2×.`,
      cost: qiCost,
      prereq: ['start'],
      purchased: false,
      canBuy: () => true,
      apply: () => {
        const next = getRebirthQiMultiplierLevel() + 1
        u.qiMultiplierLevel = Math.max(u.qiMultiplierLevel, next)
      },
      levelText: () => `Level: ${qiLvl}`,
      nextText: () => `Next: ${formatMultiplier(1 + 0.2 * (qiLvl + 1))}`
    },

    herb_speed: {
      id: 'herb_speed',
      name: 'Faster Herb Gathering',
      description: `Herb gathering becomes faster. Current: +${formatNumber(herbSpeedPct)}% (level ${herbSpeedLvl}). Each purchase adds +5%.`,
      cost: herbSpeedCost,
      prereq: ['start'],
      purchased: false,
      canBuy: () => true,
      apply: () => { u.herbGatherSpeedLevel = herbSpeedLvl + 1 },
      levelText: () => `Speed: +${formatNumber(herbSpeedPct)}%`,
      nextText: () => `Next: +${formatNumber(herbSpeedPct + 5)}%`
    },
    herb_multi: {
      id: 'herb_multi',
      name: 'Gather Multiple Herbs',
      description: `Increases the number of herbs gathered per completion. Current: +${formatNumber(herbMultiPct)}% (level ${herbMultiLvl}) → ${formatNumber(herbsPerGather)} herb(s)/gather. Each purchase adds +10%. At 100% you gather 2, at 200% you gather 3, etc.`,
      cost: herbMultiCost,
      prereq: ['start'],
      purchased: false,
      canBuy: () => true,
      apply: () => { u.herbMultiGatherLevel = herbMultiLvl + 1 },
      levelText: () => `Per gather: ${formatNumber(herbsPerGather)} herb(s)`,
      nextText: () => `Next: +${formatNumber(herbMultiPct + 10)}%`
    },
    auto_gather: {
      id: 'auto_gather',
      name: 'Auto Gather Herbs',
      description: `Progress: ${formatNumber(autoGatherPct)}% (level ${autoGatherLvl}). Each purchase adds +5%. At 100% you unlock Auto Gather. Faster gathering + multi-gather apply to auto gather.`,
      cost: autoGatherCost,
      prereq: ['start'],
      purchased: false,
      canBuy: () => true,
      apply: () => { u.autoGatherLevel = autoGatherLvl + 1 },
      levelText: () => autoGatherUnlocked ? 'Status: UNLOCKED' : `Status: LOCKED (${formatNumber(autoGatherPct)}%)`,
      nextText: () => `Next: ${formatNumber(autoGatherPct + 5)}%`
    },
    auto_craft: {
      id: 'auto_craft',
      name: 'Auto Pill Crafting',
      description: `Progress: ${formatNumber(autoCraftPct)}% (level ${autoCraftLvl}). Each purchase adds +5%. At 100% you unlock Auto Craft and can select a pill to craft automatically.`,
      cost: autoCraftCost,
      prereq: ['start'],
      purchased: false,
      canBuy: () => true,
      apply: () => { u.autoCraftLevel = autoCraftLvl + 1 },
      levelText: () => autoCraftUnlocked ? 'Status: UNLOCKED' : `Status: LOCKED (${formatNumber(autoCraftPct)}%)`,
      nextText: () => `Next: ${formatNumber(autoCraftPct + 5)}%`
    },
    pill_speed: {
      id: 'pill_speed',
      name: 'Faster Pill Crafting',
      description: `Reduces pill crafting time. Current: -${pillRed.toFixed(2)}s (level ${pillSpeedLvl}). Each purchase reduces by 0.25s. Applies to auto crafting.`,
      cost: pillSpeedCost,
      prereq: ['start'],
      purchased: false,
      canBuy: () => true,
      apply: () => { u.pillCraftSpeedLevel = pillSpeedLvl + 1 },
      levelText: () => `Craft time: -${pillRed.toFixed(2)}s`,
      nextText: () => `Next: -${(pillRed + 0.25).toFixed(2)}s`
    },

    str_mult: {
      id: 'str_mult',
      name: 'Strength Multiplier',
      description: `Permanently increases Strength. Current: ${formatMultiplier(strMult)} (level ${strLvl}). Each purchase adds +0.1×.`,
      cost: strCost,
      prereq: ['start'],
      purchased: false,
      canBuy: () => true,
      apply: () => { u.strengthMultiplierLevel = strLvl + 1 },
      levelText: () => `Strength: ${formatMultiplier(strMult)}`,
      nextText: () => `Next: ${formatMultiplier(1 + 0.1 * (strLvl + 1))}`
    },
    hp_mult: {
      id: 'hp_mult',
      name: 'Health Multiplier',
      description: `Permanently increases Max Health. Current: ${formatMultiplier(hpMult)} (level ${hpLvl}). Each purchase adds +0.1×.`,
      cost: hpCost,
      prereq: ['start'],
      purchased: false,
      canBuy: () => true,
      apply: () => { u.healthMultiplierLevel = hpLvl + 1 },
      levelText: () => `Health: ${formatMultiplier(hpMult)}`,
      nextText: () => `Next: ${formatMultiplier(1 + 0.1 * (hpLvl + 1))}`
    },
    special_cd: {
      id: 'special_cd',
      name: 'Faster Special Action Cooldowns',
      description: `Reduces special action cooldowns. Current: -${specialCdRed.toFixed(1)}s (level ${specialLvl}). Each purchase reduces by 0.5s.`,
      cost: specialCost,
      prereq: ['start'],
      purchased: false,
      canBuy: () => true,
      apply: () => { u.specialCooldownLevel = specialLvl + 1 },
      levelText: () => `Cooldowns: -${specialCdRed.toFixed(1)}s`,
      nextText: () => `Next: -${(specialCdRed + 0.5).toFixed(1)}s`
    },
    repeat_speed: {
      id: 'repeat_speed',
      name: 'Faster Repeatable Actions',
      description: `Repeatable actions complete faster. Current: -${repeatRed.toFixed(2)}s (level ${repeatLvl}). Each purchase reduces by 0.25s.`,
      cost: repeatCost,
      prereq: ['start'],
      purchased: false,
      canBuy: () => true,
      apply: () => { u.repeatableSpeedLevel = repeatLvl + 1 },
      levelText: () => `Duration: -${repeatRed.toFixed(2)}s`,
      nextText: () => `Next: -${(repeatRed + 0.25).toFixed(2)}s`
    },

    min_roots_plus: {
      id: 'min_roots_plus',
      name: 'Increase Minimum Roots',
      description: `Increases the minimum spiritual roots you can roll. Current bonus: +${formatNumber(minRootsLvl)} (effective min ${formatNumber(effectiveMinRoots)}). Each purchase adds +1.`,
      cost: minRootsCost,
      prereq: ['start'],
      purchased: false,
      canBuy: () => true,
      apply: () => { u.minRootBonusLevel = minRootsLvl + 1 },
      levelText: () => `Bonus: +${formatNumber(minRootsLvl)}`,
      nextText: () => `Next bonus: +${formatNumber(minRootsLvl + 1)}`
    },

    root_luck: {
      id: 'root_luck',
      name: 'Increase Root Luck',
      description: `Increases your luck of rolling more spiritual roots within your min/max range. Current: +${formatNumber(rootLuckLvl)} luck (level ${rootLuckLvl}). Each purchase adds +1.`,
      cost: rootLuckCost,
      prereq: ['start'],
      purchased: false,
      canBuy: () => true,
      apply: () => { u.rootLuckLevel = rootLuckLvl + 1 },
      levelText: () => `Luck: +${formatNumber(rootLuckLvl)}`,
      nextText: () => `Next: +${formatNumber(rootLuckLvl + 1)}`
    },
    max_roots_plus: {
      id: 'max_roots_plus',
      name: 'Increase Maximum Roots',
      description: `Increases the maximum spiritual roots you can roll. Current bonus: +${formatNumber(maxRootsBonusLvl)} (effective max ${formatNumber(effectiveMaxRoots)}). Each purchase adds +1.`,
      cost: maxRootsBonusCost,
      prereq: ['start'],
      purchased: false,
      canBuy: () => true,
      apply: () => { u.maxRootBonusLevel = maxRootsBonusLvl + 1 },
      levelText: () => `Bonus: +${formatNumber(maxRootsBonusLvl)}`,
      nextText: () => `Next bonus: +${formatNumber(maxRootsBonusLvl + 1)}`
    },
    more_rerolls: {
      id: 'more_rerolls',
      name: 'More Fate Rerolls',
      description: `Grants +1 additional fate reroll per purchase. Current bonus purchased: +${formatNumber(moreRerollsLvl)}.`,
      cost: moreRerollsCost,
      prereq: ['reroll'],
      purchased: false,
      canBuy: () => true,
      apply: () => { u.extraRerollsLevel = moreRerollsLvl + 1 },
      levelText: () => `Bonus rerolls: +${formatNumber(moreRerollsLvl)}`,
      nextText: () => `Next: +${formatNumber(moreRerollsLvl + 1)}`
    },
    bloodline_luck: {
      id: 'bloodline_luck',
      name: 'Better Bloodline Luck',
      description: `Increases your luck of rolling better bloodlines. Current: +${formatNumber(bloodlineLuckLvl)} luck (level ${bloodlineLuckLvl}). Each purchase adds +1.`,
      cost: bloodlineLuckCost,
      prereq: ['start'],
      purchased: false,
      canBuy: () => true,
      apply: () => { u.bloodlineLuckLevel = bloodlineLuckLvl + 1 },
      levelText: () => `Luck: +${formatNumber(bloodlineLuckLvl)}`,
      nextText: () => `Next: +${formatNumber(bloodlineLuckLvl + 1)}`
    },
    multi_affinity_luck: {
      id: 'multi_affinity_luck',
      name: 'Multiple Affinity Luck',
      description: `Increases your luck of rolling multiple affinities. Current: +${formatNumber(multiAffinityLuckLvl)} luck (level ${multiAffinityLuckLvl}). Each purchase adds +1.`,
      cost: multiAffinityLuckCost,
      prereq: ['start'],
      purchased: false,
      canBuy: () => true,
      apply: () => { u.multiAffinityLuckLevel = multiAffinityLuckLvl + 1 },
      levelText: () => `Luck: +${formatNumber(multiAffinityLuckLvl)}`,
      nextText: () => `Next: +${formatNumber(multiAffinityLuckLvl + 1)}`
    },
    affinity_alignment: {
      id: 'affinity_alignment',
      name: 'Higher Affinity Alignment',
      description: `Each purchase adds +1% chance for higher affinity alignment (higher affinity scores). Current: +${formatNumber(alignLuckLvl)}%.`,
      cost: alignLuckCost,
      prereq: ['start'],
      purchased: false,
      canBuy: () => true,
      apply: () => { u.affinityAlignmentLuckLevel = alignLuckLvl + 1 },
      levelText: () => `Chance: +${formatNumber(alignLuckLvl)}%`,
      nextText: () => `Next: +${formatNumber(alignLuckLvl + 1)}%`
    },
    story_luck: {
      id: 'story_luck',
      name: 'Higher Story Luck',
      description: `Each purchase adds +5% chance to roll higher Story Luck. Current: +${formatNumber(storyLuckLvl * 5)}%.`,
      cost: storyLuckCost,
      prereq: ['start'],
      purchased: false,
      canBuy: () => true,
      apply: () => { u.storyLuckLuckLevel = storyLuckLvl + 1 },
      levelText: () => `Chance: +${formatNumber(storyLuckLvl * 5)}%`,
      nextText: () => `Next: +${formatNumber((storyLuckLvl + 1) * 5)}%`
    },
    spiritstone_rp: {
      id: 'spiritstone_rp',
      name: 'More RP from Spirit Stones',
      description: `Increases rebirth points gained from spirit stones (per 500 of any grade). Current multiplier: ${formatMultiplier(stoneRpMult)}. Each purchase adds +2×. Cost scales by 3× per level.`,
      cost: stoneRpCost,
      prereq: ['start'],
      purchased: false,
      canBuy: () => true,
      apply: () => { u.spiritStoneRpMultLevel = stoneRpLvl + 1 },
      levelText: () => `Multiplier: ${formatMultiplier(stoneRpMult)}`,
      nextText: () => `Next: ${formatMultiplier(1 + 2 * (stoneRpLvl + 1))}`
    },
    quest_drop: {
      id: 'quest_drop',
      name: 'Higher Quest Drop Chance',
      description: `Increases item drop rate for quests that can drop bonus items. Current: +${formatNumber(questDropPct)}%. Each purchase adds +1%.`,
      cost: questDropCost,
      prereq: ['start'],
      purchased: false,
      canBuy: () => true,
      apply: () => { u.questDropChanceLevel = questDropLvl + 1 },
      levelText: () => `Bonus: +${formatNumber(questDropPct)}%`,
      nextText: () => `Next: +${formatNumber(questDropPct + 1)}%`
    },
    reroll: {
      id: 'reroll',
      name: 'Reroll Fate',
      description: 'Unlocks the ability to reroll your starting fate.',
      cost: 20,
      prereq: ['start'],
      purchased: Boolean(u.canRerollFate),
      canBuy: () => !u.canRerollFate,
      apply: () => { u.canRerollFate = true }
    },
    bias1: {
      id: 'bias1',
      name: 'Bloodline Bias I',
      description: 'Increases your odds of better bloodlines.',
      cost: 5,
      prereq: ['reroll'],
      purchased: u.bloodlineBias >= 0.10,
      canBuy: () => u.bloodlineBias < 0.10,
      apply: () => { u.bloodlineBias = Math.max(u.bloodlineBias, 0.10) }
    },
    bias2: {
      id: 'bias2',
      name: 'Bloodline Bias II',
      description: 'Further increases your odds of better bloodlines.',
      cost: 12,
      prereq: ['bias1'],
      purchased: u.bloodlineBias >= 0.25,
      canBuy: () => u.bloodlineBias < 0.25,
      apply: () => { u.bloodlineBias = Math.max(u.bloodlineBias, 0.25) }
    },
    bias3: {
      id: 'bias3',
      name: 'Bloodline Bias III',
      description: 'Greatly increases your odds of better bloodlines.',
      cost: 25,
      prereq: ['bias2'],
      purchased: u.bloodlineBias >= 0.50,
      canBuy: () => u.bloodlineBias < 0.50,
      apply: () => { u.bloodlineBias = Math.max(u.bloodlineBias, 0.50) }
    },
    min2: {
      id: 'min2',
      name: 'Minimum Roots II',
      description: 'Guarantees at least 2 spiritual roots.',
      cost: 8,
      prereq: ['start'],
      purchased: u.minRootCount >= 2,
      canBuy: () => u.minRootCount < 2,
      apply: () => {
        u.minRootCount = Math.max(u.minRootCount, 2)
        if (u.maxRootCount < u.minRootCount) u.maxRootCount = u.minRootCount
      }
    },
    min3: {
      id: 'min3',
      name: 'Minimum Roots III',
      description: 'Guarantees at least 3 spiritual roots.',
      cost: 16,
      prereq: ['min2'],
      purchased: u.minRootCount >= 3,
      canBuy: () => u.minRootCount < 3,
      apply: () => {
        u.minRootCount = Math.max(u.minRootCount, 3)
        if (u.maxRootCount < u.minRootCount) u.maxRootCount = u.minRootCount
      }
    },
    max6: {
      id: 'max6',
      name: 'Maximum Roots VI',
      description: 'Raises your maximum spiritual roots to 6.',
      cost: 10,
      prereq: ['start'],
      purchased: u.maxRootCount >= 6,
      canBuy: () => u.maxRootCount < 6,
      apply: () => { u.maxRootCount = Math.max(u.maxRootCount, 6) }
    },
    max7: {
      id: 'max7',
      name: 'Maximum Roots VII',
      description: 'Raises your maximum spiritual roots to 7.',
      cost: 18,
      prereq: ['max6'],
      purchased: u.maxRootCount >= 7,
      canBuy: () => u.maxRootCount < 7,
      apply: () => { u.maxRootCount = Math.max(u.maxRootCount, 7) }
    },
    reset: {
      id: 'reset',
      name: 'Reset Unlock',
      description: resetProgress >= 100
        ? 'Reset is fully unlocked.'
        : `Progress toward unlocking Reset in Settings. Upgrade to ${resetNext}% each purchase.`,
      cost: resetProgress >= 100 ? 0 : resetCost,
      prereq: ['bias3', 'max7'],
      purchased: resetProgress >= 100,
      canBuy: () => resetProgress < 100,
      apply: () => { u.resetUnlockProgress = Math.max(u.resetUnlockProgress, resetNext) },
      levelText: () => `Progress: ${resetProgress}%`,
      nextText: () => `Next: ${resetNext}%`
    }
  }

  return defs[id] || {
    id,
    name: id,
    description: 'Coming soon.',
    cost: 0,
    prereq: [],
    purchased: false,
    canBuy: () => false
  }
}

window.openRebirthNodeModal = (nodeId) => {
  const id = String(nodeId || '')
  if (!id) return
  state.rebirthNodeModalId = id
  state.showRebirthNodeModal = true
  render()
  try { saveGame() } catch (_) {}
}

window.closeRebirthNodeModal = () => {
  state.showRebirthNodeModal = false
  state.rebirthNodeModalId = null
  render()
  try { saveGame() } catch (_) {}
}

window.buyRebirthNodeFromModal = () => {
  const id = String(state.rebirthNodeModalId || '')
  if (!id) return
  window.buyRebirthNode(id)
  // If purchase succeeded, keep the modal open but refresh its contents.
  state.showRebirthNodeModal = true
  render()
}

function renderRebirthNodeModal() {
  let modal = document.getElementById('rebirth-node-modal')
  if (!modal) {
    modal = document.createElement('div')
    modal.id = 'rebirth-node-modal'
    modal.className = 'modal-overlay'
    document.body.appendChild(modal)
  }

  const id = String(state.rebirthNodeModalId || '')
  const def = getRebirthNodeDefinition(id)
  const pts = clampNonNegativeInt(state.rebirthPoints || 0)

  // Determine lock status based on purchased prereqs.
  const prereq = Array.isArray(def.prereq) ? def.prereq : []
  const prereqPurchased = (rid) => {
    const d = getRebirthNodeDefinition(rid)
    return Boolean(d.purchased)
  }
  const locked = prereq.some(r => !prereqPurchased(r))
  const cost = clampNonNegativeInt(def.cost)
  const afford = pts >= cost
  const canBuy = (typeof def.canBuy === 'function' ? Boolean(def.canBuy()) : true)
  const buyDisabled = locked || cost <= 0 || !afford || !canBuy

  const iconSrc = escapeHtml(String(getRebirthNodeIconSrc(def.id) || ''))
  const levelText = typeof def.levelText === 'function' ? String(def.levelText() || '') : ''
  const nextText = typeof def.nextText === 'function' ? String(def.nextText() || '') : ''
  const prereqText = prereq.length ? `Requires: ${prereq.map(p => escapeHtml(String(getRebirthNodeDefinition(p).name || p))).join(', ')}` : ''

  modal.innerHTML = `
    <div class="modal-content">
      <div class="rebirth-node-modal-top">
        <img class="rebirth-node-icon" src="${iconSrc}" alt="" />
        <h2>${escapeHtml(String(def.name || 'Node'))}</h2>
      </div>
      <p>${escapeHtml(String(def.description || ''))}</p>
      ${levelText ? `<p><strong>${escapeHtml(levelText)}</strong></p>` : ''}
      ${nextText ? `<p><strong>${escapeHtml(nextText)}</strong></p>` : ''}
      ${prereqText ? `<p class="muted">${prereqText}</p>` : ''}
      <p><strong>Cost:</strong> ${formatNumber(cost)} RP</p>
      <div class="modal-buttons">
        <button onclick="window.buyRebirthNodeFromModal()" class="reset-button" ${buyDisabled ? 'disabled' : ''}>Buy</button>
        <button onclick="window.closeRebirthNodeModal()" class="cancel-button">Close</button>
      </div>
    </div>
  `
}

// ============================================================================
// SIDE PANEL TOGGLE SYSTEM
// ============================================================================
const CHARACTER_PROFILE_ATTRIBUTES = Object.freeze([
  'Short',
  'Tall',
  'Funny',
  'Ugly',
  'Hot',
  'Intelligent',
  'Dumb',
  'Capable',
  'Disabled',
  'Smelly',
  'Aromatic',
  'Romantic',
  'Chud'
])

function generateCharacterProfileAttributes() {
  // 20% each: 1..5 attributes
  const count = 1 + Math.floor(Math.random() * 5)

  const attributes = []

  // 'Hot' has a 1% chance of being included at all.
  const includeHot = Math.random() < 0.01
  if (includeHot) attributes.push('Hot')

  const remaining = count - attributes.length
  if (remaining <= 0) return attributes

  const pool = CHARACTER_PROFILE_ATTRIBUTES.filter(a => a !== 'Hot')

  // Shuffle and take without replacement
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const tmp = pool[i]
    pool[i] = pool[j]
    pool[j] = tmp
  }

  return attributes.concat(pool.slice(0, remaining))
}

function ensureCharacterProfileGenerated() {
  if (!state.characterProfile || typeof state.characterProfile !== 'object') {
    state.characterProfile = { attributes: null }
  }
  if (!Array.isArray(state.characterProfile.attributes) || state.characterProfile.attributes.length === 0) {
    state.characterProfile.attributes = generateCharacterProfileAttributes()
    try { saveGame() } catch (_) {}
  }
}

function renderSidePanelToggles() {
  let togglesContainer = document.getElementById('side-panel-toggles')
  if (!togglesContainer) {
    togglesContainer = document.createElement('div')
    togglesContainer.id = 'side-panel-toggles'
    togglesContainer.className = 'side-panel-toggles'
    document.body.appendChild(togglesContainer)
  }

  // If we have a 13th toggle (Conquered Sects), expand the grid to show it.
  togglesContainer.classList.toggle('has-conquered', Boolean(state.cloudConqueredSectsUnlocked))
  
  togglesContainer.innerHTML = `
    <button class="panel-toggle-btn ${state.activeSidePanels.has('stats') ? 'active' : ''}" onclick="window.toggleSidePanel('stats')" title="Stats">
      📊
    </button>
    <button class="panel-toggle-btn ${state.activeSidePanels.has('inventory') ? 'active' : ''}" onclick="window.toggleSidePanel('inventory')" title="Inventory">
      🎒
    </button>
    <button class="panel-toggle-btn ${state.activeSidePanels.has('actions') ? 'active' : ''}" onclick="window.toggleSidePanel('actions')" title="Actions">
      ⚔️
    </button>
    <button class="panel-toggle-btn ${state.activeSidePanels.has('herbalism') ? 'active' : ''}" onclick="window.toggleSidePanel('herbalism')" title="Herbalism">
      🌿
    </button>
    <button class="panel-toggle-btn ${state.activeSidePanels.has('settings') ? 'active' : ''}" onclick="window.toggleSidePanel('settings')" title="Settings">
      ⚙️
    </button>
    <button class="panel-toggle-btn ${state.activeSidePanels.has('quests') ? 'active' : ''}" onclick="window.toggleSidePanel('quests')" title="Quests">
      📜
    </button>
    <button class="panel-toggle-btn ${state.activeSidePanels.has('profile') ? 'active' : ''}" onclick="window.toggleSidePanel('profile')" title="Character Profile">
      👤
    </button>
    <button class="panel-toggle-btn ${state.activeSidePanels.has('sect') ? 'active' : ''}" onclick="window.toggleSidePanel('sect')" title="Sect">
      🏯
    </button>
    <button class="panel-toggle-btn ${state.activeSidePanels.has('recipes') ? 'active' : ''}" onclick="window.toggleSidePanel('recipes')" title="Recipe Book">
      📖
    </button>
    <button class="panel-toggle-btn ${state.activeSidePanels.has('moves') ? 'active' : ''}" onclick="window.toggleSidePanel('moves')" title="Moves">
      🥋
    </button>
    <button class="panel-toggle-btn ${state.activeSidePanels.has('shop') ? 'active' : ''}" onclick="window.toggleSidePanel('shop')" title="Shop">
      🛒
    </button>

    <button class="panel-toggle-btn ${state.activeSidePanels.has('leaderboards') ? 'active' : ''}" onclick="window.toggleSidePanel('leaderboards')" title="Leaderboards">
      🏆
    </button>

    ${state.cloudConqueredSectsUnlocked ? `
      <button class="panel-toggle-btn ${state.activeSidePanels.has('conqueredSects') ? 'active' : ''}" onclick="window.toggleSidePanel('conqueredSects')" title="Conquered Sects">
        🚩
      </button>
    ` : ''}
  `
}

window.toggleSidePanel = function(panelType) {
  // Toggle the panel - if it's already open, close it; otherwise, open it
  if (state.activeSidePanels.has(panelType)) {
    state.activeSidePanels.delete(panelType)
    if (panelType === 'leaderboards') {
      try { leaderboardsStopAutoRefresh() } catch (_) {}
    }
  } else {
    state.activeSidePanels.add(panelType)
    if (panelType === 'profile') {
      ensureCharacterProfileGenerated()
    }
    if (panelType === 'shop') {
      try { ensureShopsInitialized() } catch (_) {}
      if (!state.shopTab) state.shopTab = 'town'
    }
    if (panelType === 'leaderboards') {
      try { leaderboardScheduleSync('open_panel') } catch (_) {}
      try { leaderboardsStartAutoRefresh() } catch (_) {}
      try { window.refreshLeaderboards() } catch (_) {}
    }
  }
  render()
}

function renderActivePanel() {
  // Render all active panels, remove inactive ones
  const statsPanel = document.getElementById('stats-panel')
  const inventoryPanel = document.getElementById('inventory-panel')
  const actionsPanel = document.getElementById('actions-panel')
  const herbalismPanel = document.getElementById('herbalism-panel')
  const settingsPanel = document.getElementById('settings-panel')
  const recipeBookPanel = document.getElementById('recipe-book-panel')
  const profilePanel = document.getElementById('profile-panel')
  const sectPanel = document.getElementById('sect-panel')
  const questPanel = document.getElementById('quest-panel')
  const movesPanel = document.getElementById('moves-panel')
  const shopPanel = document.getElementById('shop-panel')
  const conqueredSectsPanel = document.getElementById('conquered-sects-panel')
  const leaderboardsPanel = document.getElementById('leaderboards-panel')
  // Back-compat: remove old separate shop panels if present.
  const townShopPanel = document.getElementById('town-shop-panel')
  const hourShopPanel = document.getElementById('hour-shop-panel')
  
  // Remove panels that shouldn't be visible
  if (statsPanel && !state.activeSidePanels.has('stats')) {
    statsPanel.remove()
  }
  if (inventoryPanel && !state.activeSidePanels.has('inventory')) {
    inventoryPanel.remove()
  }
  if (actionsPanel && !state.activeSidePanels.has('actions')) {
    detachPanelResizePersistence(actionsPanel)
    actionsPanel.remove()
  }
  if (herbalismPanel && !state.activeSidePanels.has('herbalism')) {
    detachPanelResizePersistence(herbalismPanel)
    herbalismPanel.remove()
  }
  if (settingsPanel && !state.activeSidePanels.has('settings')) {
    detachPanelResizePersistence(settingsPanel)
    settingsPanel.remove()
  }
  if (recipeBookPanel && !state.activeSidePanels.has('recipes')) {
    detachPanelResizePersistence(recipeBookPanel)
    recipeBookPanel.remove()
  }
  if (profilePanel && !state.activeSidePanels.has('profile')) {
    detachPanelResizePersistence(profilePanel)
    profilePanel.remove()
  }
  if (sectPanel && !state.activeSidePanels.has('sect')) {
    detachPanelResizePersistence(sectPanel)
    sectPanel.remove()
  }
  if (questPanel && !state.activeSidePanels.has('quests')) {
    detachPanelResizePersistence(questPanel)
    questPanel.remove()
  }
  if (movesPanel && !state.activeSidePanels.has('moves')) {
    detachPanelResizePersistence(movesPanel)
    movesPanel.remove()
  }
  if (shopPanel && !state.activeSidePanels.has('shop')) {
    detachPanelResizePersistence(shopPanel)
    shopPanel.remove()
  }
  if (conqueredSectsPanel && !state.activeSidePanels.has('conqueredSects')) {
    detachPanelResizePersistence(conqueredSectsPanel)
    conqueredSectsPanel.remove()
  }
  if (leaderboardsPanel && !state.activeSidePanels.has('leaderboards')) {
    detachPanelResizePersistence(leaderboardsPanel)
    leaderboardsPanel.remove()
  }
  if (townShopPanel) {
    detachPanelResizePersistence(townShopPanel)
    townShopPanel.remove()
  }
  if (hourShopPanel) {
    detachPanelResizePersistence(hourShopPanel)
    hourShopPanel.remove()
  }
  
  // Render all active panels (will update if exists, create if not)
  if (state.activeSidePanels.has('stats')) {
    renderStatsPanel()
  }
  if (state.activeSidePanels.has('inventory')) {
    renderInventory()
  }
  if (state.activeSidePanels.has('actions')) {
    renderActionsPanel()
  }
  if (state.activeSidePanels.has('herbalism')) {
    renderHerbalismPanel()
  }
  if (state.activeSidePanels.has('settings')) {
    renderSettingsPanel()
  }
  if (state.activeSidePanels.has('recipes')) {
    renderRecipeBookPanel()
  }
  if (state.activeSidePanels.has('profile')) {
    renderCharacterProfilePanel()
  }
  if (state.activeSidePanels.has('sect')) {
    renderSectPanel()
  }
  if (state.activeSidePanels.has('quests')) {
    renderQuestPanel()
  }
  if (state.activeSidePanels.has('moves')) {
    renderMovesPanel()
  }
  if (state.activeSidePanels.has('shop')) {
    renderShopPanel()
  }
  if (state.activeSidePanels.has('conqueredSects')) {
    renderConqueredSectsPanel()
  }
  if (state.activeSidePanels.has('leaderboards')) {
    renderLeaderboardsPanel()
  }
}

function renderLeaderboardsPanel() {
  let panel = document.getElementById('leaderboards-panel')
  const isNewPanel = !panel

  if (!panel) {
    panel = document.createElement('div')
    panel.id = 'leaderboards-panel'
    panel.className = 'draggable-panel stats-panel'

    applySavedPanelSize(panel, 'leaderboards')
    getSidePanelsMount().appendChild(panel)
    attachPanelResizePersistence(panel, 'leaderboards')

    const pos = state.panelPositions?.leaderboards
    if (pos && (pos.x !== 0 || pos.y !== 0)) {
      panel.style.transform = `translate(${pos.x}px, ${pos.y}px)`
    }
  }

  const cfg = getLeaderboardConfig()
  const configured = Boolean(cfg?.url && cfg?.anonKey)
  const major = state.leaderboards?.major || { rows: [], loading: false, error: '', fetchedAt: 0 }
  const rebirth = state.leaderboards?.rebirth || { rows: [], loading: false, error: '', fetchedAt: 0 }

  const selfName = (state.playerName && String(state.playerName).trim()) ? String(state.playerName).trim() : ''
  const selfNameNorm = selfName ? selfName.trim().toLowerCase() : ''

  if (state.leaderboardsTab !== 'major' && state.leaderboardsTab !== 'rebirth') {
    state.leaderboardsTab = 'major'
  }
  const tab = state.leaderboardsTab

  const anyLoading = Boolean(major.loading || rebirth.loading)
  const err = String(major.error || rebirth.error || '')

  const renderRankedRow = (row, rank, mode) => {
    const u = String(row?.username || '')
    const isSelf = selfNameNorm && u.trim().toLowerCase() === selfNameNorm

    const bestRp = clampNonNegativeInt(row?.best_rebirth_points)
    const realmIdx = clampNonNegativeInt(row?.best_major_index)
    const realmIsDemon = Boolean(row?.best_major_is_demon)
    const subRaw = row?.best_major_sub_index
    const hasSub = Number.isFinite(Number(subRaw))
    const subIdx = hasSub ? clampNonNegativeInt(subRaw) : 0
    const computed = hasSub ? getMajorRealmLabelByIndex(realmIdx, subIdx, realmIsDemon) : ''
    const realmLabel = String(row?.best_major_label || '')
    const realm = computed || realmLabel || (realmIdx >= 0 ? `Major Realm ${realmIdx + 1}` : '')
    const value = (mode === 'rebirth') ? formatNumber(bestRp) : realm

    return `
      <div class="lb-row ${isSelf ? 'is-self' : ''}">
        <div class="lb-rank">#${clampNonNegativeInt(rank)}</div>
        <div class="lb-namecell">
          <div class="lb-avatar" aria-hidden="true">${renderUiIcon('profile')}</div>
          <div class="lb-name">${escapeHtml(u || 'Unknown')}</div>
        </div>
        <div class="lb-value">${escapeHtml(String(value || ''))}</div>
      </div>
    `.trim()
  }

  const rowsMajor = Array.isArray(major.rows) ? major.rows : []
  const rowsRebirth = Array.isArray(rebirth.rows) ? rebirth.rows : []
  const activeRows = (tab === 'rebirth') ? rowsRebirth : rowsMajor
  const listHtml = activeRows.map((r, i) => renderRankedRow(r, i + 1, tab)).join('')

  panel.innerHTML = `
    <div class="panel-header" onmousedown="window.startDrag(event, 'leaderboards-panel')">
      <h3>LEADERBOARD</h3>
      <span class="drag-hint">✥ Drag to move ✥</span>
    </div>
    <div class="panel-content">
      ${!configured ? `
        <div class="inventory-empty">Global leaderboards are not configured for this build.</div>
        <div class="settings-hint">
          Set <strong>VITE_SUPABASE_URL</strong> and <strong>VITE_SUPABASE_ANON_KEY</strong> (GitHub Actions secrets),
          or define <strong>window.__CS_SUPABASE_URL</strong> / <strong>window.__CS_SUPABASE_ANON_KEY</strong>,
          or set them in <strong>localStorage</strong>.
        </div>
        <div class="settings-hint" style="opacity:0.85">
          Status: URL=${cfg?.url ? 'yes' : 'no'}; Key=${cfg?.anonKey ? 'yes' : 'no'}; Source=${escapeHtml(String(cfg?.source || 'none'))}
        </div>
      ` : ''}

      ${configured ? `
        ${err ? `<div class="password-error" style="display:block; margin-top:8px;">${escapeHtml(err)}</div>` : ''}

        <div class="leaderboards-tabs" role="tablist" aria-label="Leaderboard tabs">
          <button class="leaderboards-tab ${tab === 'major' ? 'active' : ''}" onclick="window.setLeaderboardsTab('major')" role="tab" aria-selected="${tab === 'major' ? 'true' : 'false'}">Cultivation LB</button>
          <button class="leaderboards-tab ${tab === 'rebirth' ? 'active' : ''}" onclick="window.setLeaderboardsTab('rebirth')" role="tab" aria-selected="${tab === 'rebirth' ? 'true' : 'false'}">Rebirth Points LB</button>
        </div>

        <div class="lb-table-header">
          <div class="lb-col lb-col-rank">Rank</div>
          <div class="lb-col lb-col-name">Name</div>
          <div class="lb-col lb-col-value">${tab === 'rebirth' ? 'Rebirth' : 'Cultivation'}</div>
        </div>

        <div class="lb-table" role="table" aria-label="Leaderboard">
          ${listHtml || (anyLoading ? '<div class="inventory-empty">Loading...</div>' : '<div class="inventory-empty">No entries yet.</div>')}
        </div>
      ` : ''}
    </div>
  `

  // Auto-refresh (no button): fetch on open and keep reasonably fresh.
  if (configured) {
    try { leaderboardsStartAutoRefresh() } catch (_) {}
    const now = Date.now()
    const fetchedAt = clampNonNegativeInt(major.fetchedAt)
    if (!anyLoading && (!fetchedAt || (now - fetchedAt) > 20000)) {
      setTimeout(() => {
        try { window.refreshLeaderboards() } catch (_) {}
      }, 0)
    }
  } else {
    try { leaderboardsStopAutoRefresh() } catch (_) {}
  }

  if (isNewPanel) {
    // Panel was just created
  }
}

let __leaderboardsAutoRefreshTimer = null

function leaderboardsStartAutoRefresh() {
  if (__leaderboardsAutoRefreshTimer) return
  __leaderboardsAutoRefreshTimer = setInterval(() => {
    try {
      if (!state.activeSidePanels || !state.activeSidePanels.has('leaderboards')) {
        leaderboardsStopAutoRefresh()
        return
      }
      if (!isLeaderboardConfigured()) return
      if (!state.leaderboards || typeof state.leaderboards !== 'object') return
      if (state.leaderboards.major?.loading || state.leaderboards.rebirth?.loading) return

      const last = clampNonNegativeInt(state.leaderboards.major?.fetchedAt)
      const now = Date.now()
      // Refresh occasionally so the panel stays up to date without a button.
      if (!last || (now - last) > 30000) {
        window.refreshLeaderboards()
      }
    } catch (_) {}
  }, 5000)
}

function leaderboardsStopAutoRefresh() {
  if (!__leaderboardsAutoRefreshTimer) return
  try { clearInterval(__leaderboardsAutoRefreshTimer) } catch (_) {}
  __leaderboardsAutoRefreshTimer = null
}

window.setLeaderboardsTab = (tab) => {
  const t = (String(tab || '') === 'rebirth') ? 'rebirth' : 'major'
  state.leaderboardsTab = t
  // If we already have data, just re-render; otherwise try to fetch.
  try {
    if (isLeaderboardConfigured()) {
      const last = clampNonNegativeInt(state.leaderboards?.major?.fetchedAt)
      if (!last) window.refreshLeaderboards()
    }
  } catch (_) {}
  render()
}

function renderConqueredSectsPanel() {
  ensureCloudConquestState()

  let panel = document.getElementById('conquered-sects-panel')
  const isNewPanel = !panel

  if (!panel) {
    panel = document.createElement('div')
    panel.id = 'conquered-sects-panel'
    panel.className = 'conquered-sects-panel draggable-panel'

    applySavedPanelSize(panel, 'conqueredSects')
    getSidePanelsMount().appendChild(panel)
    attachPanelResizePersistence(panel, 'conqueredSects')

    const pos = state.panelPositions?.conqueredSects
    if (pos && (pos.x !== 0 || pos.y !== 0)) {
      panel.style.transform = `translate(${pos.x}px, ${pos.y}px)`
    }
  }

  const keys = Array.isArray(state.cloudConqueredSects) ? state.cloudConqueredSects : []
  const listHtml = keys.length
    ? keys.map(k => {
        const meta = getConqueredSectMeta(k)
        const name = meta?.name || String(k || '')
        const iconSrc = getAffinityAssetIconSrc(k) || ''
        const iconHtml = iconSrc
          ? `<img class="inline-asset-icon" src="${escapeHtml(iconSrc)}" alt="" aria-hidden="true">`
          : renderUiIcon('flag')
        return `<div class="profile-trait">${iconHtml} ${escapeHtml(String(name))}</div>`
      }).join('')
    : '<div class="inventory-empty">None conquered yet.</div>'

  panel.innerHTML = `
    <div class="panel-header" onmousedown="window.startDrag(event, 'conquered-sects-panel')">
      <h3>${renderUiIcon('flag', { title: 'Conquered Sects' })} Conquered Sects</h3>
      <span class="drag-hint">✥ Drag to move ✥</span>
    </div>
    <div class="panel-content">
      ${listHtml}
    </div>
  `

  if (isNewPanel) {
    // Panel was just created
  }
}

function renderCharacterProfilePanel() {
  ensureCharacterProfileGenerated()

  let panel = document.getElementById('profile-panel')
  const isNewPanel = !panel

  if (!panel) {
    panel = document.createElement('div')
    panel.id = 'profile-panel'
    panel.className = 'profile-panel draggable-panel'

    applySavedPanelSize(panel, 'profile')
    getSidePanelsMount().appendChild(panel)

    attachPanelResizePersistence(panel, 'profile')

    const pos = state.panelPositions?.profile
    if (pos && (pos.x !== 0 || pos.y !== 0)) {
      panel.style.transform = `translate(${pos.x}px, ${pos.y}px)`
    }
  }

  const name = (state.playerName && state.playerName.trim()) ? state.playerName.trim() : 'Wanderer'
  const attrs = Array.isArray(state.characterProfile?.attributes) ? state.characterProfile.attributes : []

  panel.innerHTML = `
    <div class="panel-header" onmousedown="window.startDrag(event, 'profile-panel')">
      <h3>${renderUiIcon('profile', { title: 'Character Profile' })} Character Profile</h3>
      <span class="drag-hint">✥ Drag to move ✥</span>
    </div>
    <div class="panel-content">
      <div class="profile-name">${escapeHtml(name)}</div>
      <div class="profile-traits">
        ${attrs.map(a => `<div class="profile-trait">• ${escapeHtml(a)}</div>`).join('')}
      </div>
    </div>
  `

  if (isNewPanel) {
    // Panel was just created
  }
}

function renderStatsPanel() {
  // Check if stats panel already exists
  let statsPanel = document.getElementById('stats-panel')
  const isNewPanel = !statsPanel
  
  if (!statsPanel) {
    statsPanel = document.createElement('div')
    statsPanel.id = 'stats-panel'
    statsPanel.className = 'stats-panel draggable-panel'
    getSidePanelsMount().appendChild(statsPanel)

    // Re-apply saved drag position so re-renders don't reset moved panels
    const pos = state.panelPositions?.stats
    if (pos && (pos.x !== 0 || pos.y !== 0)) {
      statsPanel.style.transform = `translate(${pos.x}px, ${pos.y}px)`
    }
  }
  
  statsPanel.innerHTML = `
    <div class="panel-header" onmousedown="window.startDrag(event, 'stats-panel')">
      <h3>${renderUiIcon('stats', { title: 'Stats' })} Stats</h3>
      <span class="drag-hint">✥ Drag to move ✥</span>
    </div>
    <div class="panel-content">
    <div class="stat-item">
      <span class="stat-label"><img src="assets/battery.png" class="stat-icon" alt="Stamina"> Stamina:</span>
      <span class="stat-value">${formatNumber(state.stamina)}/${formatNumber(state.maxStamina)}</span>
    </div>
    <div class="stat-item">
      <span class="stat-label">Strength:</span>
      <span class="stat-value">${formatNumber(state.strength)}</span>
    </div>
    <div class="stat-item">
      <span class="stat-label">Health:</span>
      <span class="stat-value">${formatNumber(state.health)}/${formatNumber(state.maxHealth)}</span>
    </div>
    <div class="stat-item">
      <span class="stat-label"><img src="assets/ki.png" class="stat-icon" alt="Qi"> Qi:</span>
      <span class="stat-value">${formatNumber(state.qi)}</span>
    </div>
    <div class="stat-item">
      <span class="stat-label">Luck:</span>
      <span class="stat-value">${formatNumber(state.luck)}</span>
    </div>
    
    <div class="stat-divider"></div>
    <h4>Currencies</h4>
    
    <div class="stat-item">
      <span class="stat-label"><img src="assets/copper-coin.png" class="stat-icon" alt="Copper"> Copper:</span>
      <span class="stat-value">${formatNumber(state.copper)}</span>
    </div>
    <div class="stat-item">
      <span class="stat-label"><img src="assets/silver-coin.png" class="stat-icon" alt="Silver"> Silver:</span>
      <span class="stat-value">${formatNumber(state.silver)}</span>
    </div>
    <div class="stat-item">
      <span class="stat-label"><img src="assets/gold-coin.png" class="stat-icon" alt="Gold"> Gold:</span>
      <span class="stat-value">${formatNumber(state.gold)}</span>
    </div>

    <div class="stat-item">
      <span class="stat-label">Contribution Points:</span>
      <span class="stat-value">${formatPoints(state.contributionPoints || 0)}</span>
    </div>

    <div class="stat-divider"></div>
    <h4>Meta</h4>

    <div class="stat-item">
      <span class="stat-label">Rebirth Points:</span>
      <span class="stat-value">${formatNumber(clampNonNegativeInt(state.rebirthPoints || 0))}</span>
    </div>

    <div class="stat-divider"></div>
    <h4>Spirit Stones</h4>

    <div class="stat-item">
      <span class="stat-label"><img src="assets/spiritstone-low.png" class="stat-icon" alt="Low"> Low:</span>
      <span class="stat-value">${formatNumber(state.spiritStonesLow)}</span>
    </div>
    <div class="stat-item">
      <span class="stat-label"><img src="assets/spiritstone-mid.png" class="stat-icon" alt="Mid"> Mid:</span>
      <span class="stat-value">${formatNumber(state.spiritStonesMid)}</span>
    </div>
    <div class="stat-item">
      <span class="stat-label"><img src="assets/spiritstone-high.png" class="stat-icon" alt="High"> High:</span>
      <span class="stat-value">${formatNumber(state.spiritStonesHigh)}</span>
    </div>
    
    ${state.isDemonPath ? `
      <div class="stat-divider"></div>
      <h4>Demon Path</h4>
      <div class="stat-item">
        <span class="stat-label">Corruption:</span>
        <span class="stat-value">${state.corruption}</span>
      </div>
    ` : ''}
    
    </div>
  `
  
  if (isNewPanel) {
    // Panel was just created
  }
}

function renderInventory() {
  let inventoryPanel = document.getElementById('inventory-panel')
  const isNewPanel = !inventoryPanel
  
  if (!inventoryPanel) {
    inventoryPanel = document.createElement('div')
    inventoryPanel.id = 'inventory-panel'
    inventoryPanel.className = 'inventory-panel draggable-panel'
    getSidePanelsMount().appendChild(inventoryPanel)

    const pos = state.panelPositions?.inventory
    if (pos && (pos.x !== 0 || pos.y !== 0)) {
      inventoryPanel.style.transform = `translate(${pos.x}px, ${pos.y}px)`
    }
  }

  const items = Array.isArray(state.inventory) ? state.inventory : []
  const selectedIndex = Number.isFinite(state.selectedInventoryIndex) ? state.selectedInventoryIndex : null
  const selectedItem = selectedIndex !== null ? items[selectedIndex] : null
  
  inventoryPanel.innerHTML = `
    <div class="panel-header" onmousedown="window.startDrag(event, 'inventory-panel')">
      <h3>${renderUiIcon('inventory', { title: 'Inventory' })} Inventory</h3>
      <span class="drag-hint">✥ Drag to move ✥</span>
    </div>
    <div class="panel-content">
      <div class="inventory-grid" role="list">
        ${items.length === 0 ? '<div class="inventory-empty">Empty</div>' : ''}
        ${items.map((item, index) => {
          const img = getInventoryItemImageSrc(item)
          const qty = Number(item.quantity) || 1
          const isSelected = selectedIndex === index
          return `
            <button class="inv-tile ${isSelected ? 'selected' : ''}" onclick="window.selectInventoryItem(${index})" title="${escapeHtml(String(item.name || ''))}">
              ${img ? `<img class="inv-tile-img" src="${img}" alt="${escapeHtml(String(item.name || 'Item'))}">` : `<div class="inv-tile-emoji">${renderUiIcon('inventory')}</div>`}
              ${qty > 1 ? `<div class="inv-tile-qty">x${formatNumber(qty)}</div>` : ''}
            </button>
          `
        }).join('')}
      </div>

      <div class="inventory-detail" aria-label="Item Details">
        ${selectedItem ? (() => {
          const img = getInventoryItemImageSrc(selectedItem)
          const desc = String(selectedItem.description || '')
          const bonuses = getInventoryItemBonuses(selectedItem)
          const slot = getInventoryEquipSlot(selectedItem)
          const equippedName = slot ? String(state.equipped?.[slot] || '') : ''
          const isEquipped = slot && equippedName === String(selectedItem.name || '')
          const canEquip = Boolean(slot)
          const canUse = canUseInventoryItem(selectedItem)
          const primaryAction = canUse
            ? `<button class="inv-primary-btn" onclick="window.useInventoryItem(${selectedIndex})">USE</button>`
            : (canEquip
              ? `<button class="inv-primary-btn" onclick="window.equipInventoryItem(${selectedIndex})" ${isEquipped ? 'disabled' : ''}>${isEquipped ? 'EQUIPPED' : 'EQUIP'}</button>`
              : `<button class="inv-primary-btn" disabled>${'NO ACTION'}</button>`)

          return `
            <div class="inv-detail-top">
              <div class="inv-detail-imgwrap">
                ${img ? `<img class="inv-detail-img" src="${img}" alt="${escapeHtml(String(selectedItem.name || 'Item'))}">` : `<div class="inv-detail-img" aria-hidden="true"></div>`}
              </div>
              <div class="inv-detail-text">
                <div class="inv-detail-name">${escapeHtml(String(selectedItem.name || ''))}</div>
                ${desc ? `<div class="inv-detail-desc">${escapeHtml(desc)}</div>` : ''}
                ${bonuses.length ? `<div class="inv-detail-bonuses">${bonuses.map(b => `<div class="inv-bonus">• ${escapeHtml(b)}</div>`).join('')}</div>` : ''}
              </div>
            </div>
            <div class="inv-detail-actions">${primaryAction}</div>
          `
        })() : '<div class="inventory-empty">Select an item</div>'}
      </div>
    </div>
  `
  
  if (isNewPanel) {
    // Panel was just created
  }
}

function renderHerbalismPanel() {
  let panel = document.getElementById('herbalism-panel')
  const isNewPanel = !panel

  if (!panel) {
    panel = document.createElement('div')
    panel.id = 'herbalism-panel'
    panel.className = 'herbalism-panel draggable-panel'

    applySavedPanelSize(panel, 'herbalism')
    getSidePanelsMount().appendChild(panel)
    attachPanelResizePersistence(panel, 'herbalism')

    const pos = state.panelPositions?.herbalism
    if (pos && (pos.x !== 0 || pos.y !== 0)) {
      panel.style.transform = `translate(${pos.x}px, ${pos.y}px)`
    }
  }

  const ignore = !!state.devIgnoreRequirements
  const gatherKey = 'herbalism:Gather Herbs'
  const isGathering = isActionRunning(gatherKey)
  const craftKey = 'herbalism:Craft Pill'
  const isCrafting = isActionRunning(craftKey)

  const gatherSeconds = Math.max(0.25, (10 / Math.max(1, getRebirthHerbGatherSpeedMultiplier())))
  const herbsPerGather = Math.max(1, clampNonNegativeInt(getRebirthHerbsPerGather()))
  const autoGatherUnlocked = isRebirthAutoGatherUnlocked()
  const autoCraftUnlocked = isRebirthAutoCraftUnlocked()
  const pills = getPillCatalog()
  const selectedAutoPill = String(state.autoCraftPillFile || '')
  const selectedAutoPillName = pills.find(p => String(p.file || '') === selectedAutoPill)?.name || ''

  const herbs = getHerbCatalog()
  const herbCounts = Object.fromEntries(herbs.map(h => [h.name, getInventoryQuantityByName(h.name)]))

  if (!Array.isArray(state.herbalismCraftSlots) || state.herbalismCraftSlots.length !== 3) {
    state.herbalismCraftSlots = [null, null, null]
  }
  if (!Number.isFinite(state.herbalismCraftPickerIndex)) state.herbalismCraftPickerIndex = -1

  const slots = state.herbalismCraftSlots.map(s => (typeof s === 'string' && s.trim()) ? s.trim() : '')
  const filled = slots.filter(Boolean).length
  const canCraft = ignore ? (filled === 3) : (filled === 3 && slots.every(h => getInventoryQuantityByName(h) >= 1))

  panel.innerHTML = `
    <div class="panel-header" onmousedown="window.startDrag(event, 'herbalism-panel')">
      <h3>${renderUiIcon('spark', { title: 'Herbalism' })} Herbalism</h3>
      <span class="drag-hint">✥ Drag to move ✥</span>
    </div>
    <div class="panel-content herbalism-content">
      <div class="herbalism-summary">
        ${herbs.map(h => `
          <div class="herbalism-line"><img class="inline-asset-icon" src="${escapeHtml(String(h.imageSrc || 'assets/grass.png'))}" alt=""> ${escapeHtml(h.name)}: <strong>${formatNumber(herbCounts[h.name] || 0)}</strong></div>
        `.trim()).join('')}
      </div>

      <div class="herbalism-block">
        <div class="herbalism-block-title">GATHER</div>
        <button class="herbalism-btn" onclick="window.gatherHerbs()" ${(isGathering && !ignore) ? 'disabled' : ''}>
          ${isGathering ? 'Gathering…' : `Gather Herbs (${gatherSeconds.toFixed(1)}s)`}
        </button>
        <div class="herbalism-progress" ${isGathering ? '' : 'style="display:none;"'}>
          <div class="herbalism-progress-bar">
            <div class="herbalism-progress-fill" data-progress-key="${escapeHtml(gatherKey)}"></div>
          </div>
        </div>
        <div class="herbalism-hint">Herb gathering costs no stamina and gathers ${formatNumber(herbsPerGather)} herb(s) per completion.</div>
        ${autoGatherUnlocked ? `<div class="herbalism-hint">Auto Gather: UNLOCKED (runs automatically).</div>` : ''}
      </div>

      <div class="herbalism-block">
        <div class="herbalism-block-title">CRAFT</div>
        <div class="herbalism-craft-grid" aria-label="Crafting herbs">
          ${[0, 1, 2].map(i => {
            const v = slots[i]
            const label = v ? v : 'Select herb'
            return `
              <button class="herbalism-craft-slot" type="button" onclick="window.openHerbCraftPicker(${i})">${escapeHtml(label)}</button>
            `.trim()
          }).join('')}
        </div>
        <div class="herbalism-hint">Pick 3 herbs to match a recipe from the Recipe Book.</div>

        ${state.herbalismCraftPickerIndex >= 0 ? `
          <div class="herbalism-picker" aria-label="Choose herb">
            <div class="herbalism-block-title">CHOOSE HERB</div>
            <div class="herbalism-picker-list">
              ${herbs
                .filter(h => (ignore ? true : (getInventoryQuantityByName(h.name) > 0)))
                .map(h => `<button class="herbalism-picker-item" type="button" onclick="window.setHerbCraftSlot(${state.herbalismCraftPickerIndex}, ${JSON.stringify(String(h.name))})">${escapeHtml(h.name)} (${formatNumber(getInventoryQuantityByName(h.name))})</button>`)
                .join('') || '<div class="inventory-empty">No herbs available.</div>'}
            </div>
            <div class="herbalism-picker-actions">
              <button class="herbalism-btn" type="button" onclick="window.clearHerbCraftSlot(${state.herbalismCraftPickerIndex})">Clear Slot</button>
              <button class="herbalism-btn" type="button" onclick="window.closeHerbCraftPicker()">Close</button>
            </div>
          </div>
        ` : ''}

        <button class="herbalism-btn" onclick="window.craftFromHerbSlots()" ${((!canCraft && !ignore) || (isCrafting && !ignore)) ? 'disabled' : ''}>
          ${isCrafting ? 'Crafting…' : 'Craft (use selected herbs)'}
        </button>
        <div class="herbalism-progress" ${isCrafting ? '' : 'style="display:none;"'}>
          <div class="herbalism-progress-bar">
            <div class="herbalism-progress-fill" data-progress-key="${escapeHtml(craftKey)}"></div>
          </div>
        </div>
        <div class="herbalism-hint">Crafting consumes exactly 3 herbs and produces 1 pill.</div>

        ${autoCraftUnlocked ? `
          <div class="herbalism-hint">Auto Craft: UNLOCKED (crafts automatically when possible).</div>
          <div class="herbalism-line">
            Auto craft pill:
            <select class="herbalism-select" onchange="window.setAutoCraftPillFile(this.value)">
              <option value="" ${selectedAutoPill ? '' : 'selected'}>None</option>
              ${pills.map(p => {
                const file = String(p.file || '')
                const name = String(p.name || file)
                return `<option value="${escapeHtml(file)}" ${file === selectedAutoPill ? 'selected' : ''}>${escapeHtml(name)}</option>`
              }).join('')}
            </select>
          </div>
          ${selectedAutoPillName ? `<div class="herbalism-hint">Selected: ${escapeHtml(String(selectedAutoPillName))}</div>` : ''}
        ` : ''}
      </div>

      <div class="herbalism-block">
        <div class="herbalism-block-title">RECIPE BOOK</div>
        <button class="herbalism-btn" onclick="window.toggleSidePanel('recipes')">Open Recipe Book</button>
        <div class="herbalism-hint">View all pills and their herb recipes.</div>
      </div>
    </div>
  `

  if (isNewPanel) {
    // Panel was just created
  }
}

function getHerbCatalog() {
  return [
    { name: 'Ginseng', kind: 'ingredient', imageSrc: 'assets/grass.png', description: 'A hardy root used in many formulas.' },
    { name: 'Spirit Grass', kind: 'ingredient', imageSrc: 'assets/grass.png', description: 'A grass infused with faint Qi.' },
    { name: 'Bloody Root', kind: 'ingredient', imageSrc: 'assets/grass.png', description: 'A crimson root that carries a sharp essence.' },
    { name: 'Snow Lotus', kind: 'ingredient', imageSrc: 'assets/grass.png', description: 'A rare lotus that grows in cold peaks.' },
    { name: 'Jade Leaf', kind: 'ingredient', imageSrc: 'assets/grass.png', description: 'A leaf with a clean, cooling essence.' },
    { name: 'Moonflower', kind: 'ingredient', imageSrc: 'assets/grass.png', description: 'A pale flower that blooms under moonlight.' },
    { name: 'Dragonwort', kind: 'ingredient', imageSrc: 'assets/grass.png', description: 'A pungent herb said to carry draconic warmth.' }
  ]
}

function getPillRecipeByFile(pillFile) {
  const file = String(pillFile || '')
  const map = {
    'herb_pill.png': [
      { herb: 'Jade Leaf', qty: 2 },
      { herb: 'Spirit Grass', qty: 1 }
    ],
    'qi_pill.png': [
      { herb: 'Spirit Grass', qty: 2 },
      { herb: 'Ginseng', qty: 1 }
    ],
    'ying_yang_pill.png': [
      { herb: 'Moonflower', qty: 1 },
      { herb: 'Ginseng', qty: 1 },
      { herb: 'Jade Leaf', qty: 1 }
    ],
    'breakthrough_pill.png': [
      { herb: 'Ginseng', qty: 2 },
      { herb: 'Snow Lotus', qty: 1 }
    ],
    'iron_body_pill.png': [
      { herb: 'Bloody Root', qty: 2 },
      { herb: 'Dragonwort', qty: 1 }
    ],
    'angel_pill.png': [
      { herb: 'Snow Lotus', qty: 2 },
      { herb: 'Moonflower', qty: 1 }
    ],
    'corruption_pill.png': [
      { herb: 'Bloody Root', qty: 2 },
      { herb: 'Moonflower', qty: 1 }
    ],
    'demon_pill.png': [
      { herb: 'Dragonwort', qty: 2 },
      { herb: 'Bloody Root', qty: 1 }
    ],
    'lightning_pill.png': [
      { herb: 'Spirit Grass', qty: 1 },
      { herb: 'Moonflower', qty: 2 }
    ],
    'death_pill.png': [
      { herb: 'Bloody Root', qty: 1 },
      { herb: 'Dragonwort', qty: 1 },
      { herb: 'Moonflower', qty: 1 }
    ]
  }

  const recipe = Array.isArray(map[file]) ? map[file] : null
  // Fallback: ensure exactly 3 total herbs.
  if (recipe && recipe.reduce((a, r) => a + clampNonNegativeInt(r?.qty), 0) === 3) return recipe
  return [
    { herb: 'Ginseng', qty: 1 },
    { herb: 'Spirit Grass', qty: 1 },
    { herb: 'Jade Leaf', qty: 1 }
  ]
}

function awardRandomGatheredHerbs(count) {
  const herbs = getHerbCatalog()
  const times = Math.max(1, clampNonNegativeInt(count))
  const gainedByName = Object.create(null)

  const pickOne = () => {
    const roll = Math.random()
    // Weighted pick.
    let picked = herbs.find(h => h.name === 'Spirit Grass') || herbs[0]
    if (roll < 0.12) picked = herbs.find(h => h.name === 'Snow Lotus') || picked
    else if (roll < 0.24) picked = herbs.find(h => h.name === 'Moonflower') || picked
    else if (roll < 0.38) picked = herbs.find(h => h.name === 'Dragonwort') || picked
    else if (roll < 0.54) picked = herbs.find(h => h.name === 'Bloody Root') || picked
    else if (roll < 0.72) picked = herbs.find(h => h.name === 'Ginseng') || picked
    else if (roll < 0.88) picked = herbs.find(h => h.name === 'Jade Leaf') || picked
    return picked
  }

  for (let i = 0; i < times; i++) {
    const picked = pickOne()
    const name = picked?.name || 'Spirit Grass'
    gainedByName[name] = (gainedByName[name] || 0) + 1
    addToInventory({
      name,
      kind: 'ingredient',
      description: picked?.description || '',
      imageSrc: picked?.imageSrc || 'assets/grass.png',
      quantity: 1
    })
  }

  const parts = Object.keys(gainedByName).map(n => `+${formatNumber(gainedByName[n])} ${n}`)
  log(`You gather herbs. ${parts.join(', ') || '+1 Spirit Grass'}.`)
}

function getHerbGatherDurationMs() {
  const baseMs = 10000
  const speed = Math.max(1, getRebirthHerbGatherSpeedMultiplier())
  return Math.max(250, Math.floor(baseMs / speed))
}

function getHerbCraftDurationMs() {
  const baseMs = 5000
  const reduction = getRebirthPillCraftDurationReductionMs()
  return Math.max(250, baseMs - reduction)
}

function startHerbalismCraftTimed(pill, opts) {
  const options = (opts && typeof opts === 'object') ? opts : {}
  const ignore = Boolean(options.ignoreRequirements)
  const p = pill && typeof pill === 'object' ? pill : null
  if (!p) return false

  const action = {
    name: 'Craft Pill',
    callback: () => {
      addToInventory({
        name: String(p.name || 'Pill'),
        kind: 'pill',
        pillFile: String(p.file || ''),
        imageSrc: String(p.src || ''),
        description: getPillDescription(p.file),
        quantity: 1
      })
      log(`You craft a ${String(p.name || 'pill')}.`)
    }
  }

  const key = getActionKey('herbalism', action)
  if (ignore) {
    if (isActionRunning(key)) finishTimedActionWithOptions(key, { ignoreCooldown: true })
    action.callback()
    render()
    saveGame()
    return true
  }

  if (isActionRunning(key)) return false
  startTimedAction('herbalism', action, getHerbCraftDurationMs())
  saveGame()
  return true
}

function canAutoCraftSelectedPill() {
  const file = String(state.autoCraftPillFile || '')
  if (!file) return false
  const pill = getPillCatalog().find(p => String(p.file || '') === file)
  if (!pill) return false
  const recipe = getPillRecipeByFile(file)
  if (!Array.isArray(recipe) || recipe.length === 0) return false
  if (state.devIgnoreRequirements) return true
  for (const r of recipe) {
    const herb = String(r?.herb || '')
    const qty = clampNonNegativeInt(r?.qty)
    if (!herb || qty <= 0) return false
    if (getInventoryQuantityByName(herb) < qty) return false
  }
  return true
}

function consumeRecipeForPillFile(file) {
  const recipe = getPillRecipeByFile(file)
  if (!Array.isArray(recipe) || recipe.length === 0) return false
  if (state.devIgnoreRequirements) return true
  for (const r of recipe) {
    const herb = String(r?.herb || '')
    const qty = clampNonNegativeInt(r?.qty)
    if (!herb || qty <= 0) return false
    if (getInventoryQuantityByName(herb) < qty) return false
  }
  for (const r of recipe) {
    const herb = String(r?.herb || '')
    const qty = clampNonNegativeInt(r?.qty)
    if (!consumeInventoryByName(herb, qty)) return false
  }
  return true
}

window.setAutoCraftPillFile = (pillFile) => {
  state.autoCraftPillFile = String(pillFile || '')
  render()
  saveGame()
}

function startHerbGatherTimed(opts) {
  const options = (opts && typeof opts === 'object') ? opts : {}
  const silent = Boolean(options.silent)

  if (!silent) {
    try { playSfx('gather') } catch (_) {}
  }

  const action = {
    name: 'Gather Herbs',
    callback: () => {
      state.isResting = false
      if (typeof state.mysteriousHerbFound !== 'boolean') state.mysteriousHerbFound = false

      awardRandomGatheredHerbs(getRebirthHerbsPerGather())

      // Rare, one-time permanent herb.
      if (!state.mysteriousHerbFound && Math.random() < 0.03) {
        state.mysteriousHerbFound = true
        addToInventory({
          name: 'Mysterious Herb',
          description: 'Qi gain permanently increased by 20%',
          quantity: 1
        })
        log('You discover a Mysterious Herb.')
      }
    }
  }

  startTimedAction('herbalism', action, getHerbGatherDurationMs())
}

window.gatherHerbs = () => {
  startHerbGatherTimed({ silent: false })
}

window.openHerbCraftPicker = (slotIndex) => {
  const i = clampNonNegativeInt(slotIndex)
  state.herbalismCraftPickerIndex = (i >= 0 && i <= 2) ? i : -1
  render()
}

window.closeHerbCraftPicker = () => {
  state.herbalismCraftPickerIndex = -1
  render()
}

window.setHerbCraftSlot = (slotIndex, herbName) => {
  const i = clampNonNegativeInt(slotIndex)
  if (!Array.isArray(state.herbalismCraftSlots) || state.herbalismCraftSlots.length !== 3) state.herbalismCraftSlots = [null, null, null]
  const n = String(herbName || '').trim()
  if (!n) return
  state.herbalismCraftSlots[i] = n
  state.herbalismCraftPickerIndex = -1
  render()
  saveGame()
}

window.clearHerbCraftSlot = (slotIndex) => {
  const i = clampNonNegativeInt(slotIndex)
  if (!Array.isArray(state.herbalismCraftSlots) || state.herbalismCraftSlots.length !== 3) state.herbalismCraftSlots = [null, null, null]
  state.herbalismCraftSlots[i] = null
  state.herbalismCraftPickerIndex = -1
  render()
  saveGame()
}

function multisetFromList(list) {
  const out = Object.create(null)
  for (const v of list) {
    const k = String(v || '').trim()
    if (!k) continue
    out[k] = (out[k] || 0) + 1
  }
  return out
}

function multisetEquals(a, b) {
  const ka = Object.keys(a || {})
  const kb = Object.keys(b || {})
  if (ka.length !== kb.length) return false
  for (const k of ka) {
    if ((a[k] || 0) !== (b[k] || 0)) return false
  }
  return true
}

function findPillBySelectedHerbs(herbNames) {
  const chosen = multisetFromList(herbNames)
  const pills = getPillCatalog()
  for (const p of pills) {
    const recipe = getPillRecipeByFile(p.file)
    const expanded = []
    for (const r of recipe) {
      const q = clampNonNegativeInt(r.qty)
      for (let i = 0; i < q; i++) expanded.push(String(r.herb || ''))
    }
    const rec = multisetFromList(expanded)
    if (multisetEquals(chosen, rec)) return p
  }
  return null
}

window.craftFromHerbSlots = () => {
  try { playSfx('craft') } catch (_) {}
  if (!Array.isArray(state.herbalismCraftSlots) || state.herbalismCraftSlots.length !== 3) state.herbalismCraftSlots = [null, null, null]
  const slots = state.herbalismCraftSlots.map(s => (typeof s === 'string' && s.trim()) ? s.trim() : '').filter(Boolean)
  if (slots.length !== 3) return

  const pill = findPillBySelectedHerbs(slots)
  if (!pill) {
    log('No known recipe matches those herbs. Check the Recipe Book.')
    render()
    saveGame()
    return
  }

  if (!state.devIgnoreRequirements) {
    const need = multisetFromList(slots)
    for (const herb of Object.keys(need)) {
      if (getInventoryQuantityByName(herb) < need[herb]) return
    }
    for (const herb of Object.keys(need)) {
      if (!consumeInventoryByName(herb, need[herb])) return
    }
  }

  startHerbalismCraftTimed(pill, { ignoreRequirements: !!state.devIgnoreRequirements })
}

function renderRecipeBookPanel() {
  let panel = document.getElementById('recipe-book-panel')
  const isNewPanel = !panel

  if (!panel) {
    panel = document.createElement('div')
    panel.id = 'recipe-book-panel'
    panel.className = 'recipe-book-panel draggable-panel'

    applySavedPanelSize(panel, 'recipes')
    getSidePanelsMount().appendChild(panel)
    attachPanelResizePersistence(panel, 'recipes')

    const pos = state.panelPositions?.recipes
    if (pos && (pos.x !== 0 || pos.y !== 0)) {
      panel.style.transform = `translate(${pos.x}px, ${pos.y}px)`
    }
  }

  const pills = getPillCatalog()
  const list = pills.map(p => {
    const recipe = getPillRecipeByFile(p.file)
    const recipeText = recipe.map(r => `${formatNumber(r.qty)} ${escapeHtml(r.herb)}`).join(', ')
    return `
      <div class="profile-trait">
        <strong>${escapeHtml(String(p.name || 'Pill'))}</strong><br>
        <span>${recipeText}</span>
      </div>
    `.trim()
  }).join('')

  panel.innerHTML = `
    <div class="panel-header" onmousedown="window.startDrag(event, 'recipe-book-panel')">
      <h3>${renderUiIcon('quests', { title: 'Recipe Book' })} Recipe Book</h3>
      <span class="drag-hint">✥ Drag to move ✥</span>
    </div>
    <div class="panel-content">
      ${list || '<div class="inventory-empty">No recipes.</div>'}
    </div>
  `

  if (isNewPanel) {
    // Panel was just created
  }
}

function isResetRunUnlocked() {
  const u = normalizeRebirthUpgrades(state.rebirthUpgrades)
  state.rebirthUpgrades = u
  return clampNonNegativeInt(u.resetUnlockProgress) >= 100
}

window.setHardMode = (enabled) => {
  state.hardMode = Boolean(enabled)
  log(state.hardMode
    ? 'Hard Mode enabled. Enemies hit harder, and death ends your run.'
    : 'Hard Mode disabled.')
  render()
  saveGame()
}

function applyHardModeEnemyScaling(enemy) {
  if (!state.hardMode) return enemy
  if (!enemy || typeof enemy !== 'object') return enemy

  const hpMult = 1.12
  const strMult = 1.12

  const maxHp = Math.max(1, Math.floor(clampNonNegativeNumber(enemy.maxHealth ?? enemy.health) * hpMult))
  const hp = Math.max(1, Math.floor(clampNonNegativeNumber(enemy.health ?? maxHp) * hpMult))
  const str = Math.max(1, Math.floor(clampNonNegativeNumber(enemy.strength) * strMult))

  enemy.maxHealth = maxHp
  enemy.health = Math.min(maxHp, hp)
  enemy.strength = str
  return enemy
}

window.endRunViaUnlockedReset = () => {
  if (!isResetRunUnlocked()) return
  if (state.runEnded) return
  log('You invoke the Reset blessing. Your run ends.')
  window.endRunToRebirth()
}

function renderSettingsPanel() {
  try { ensureAudioState() } catch (_) {}

  let panel = document.getElementById('settings-panel')
  const isNewPanel = !panel

  if (!panel) {
    panel = document.createElement('div')
    panel.id = 'settings-panel'
    panel.className = 'settings-panel draggable-panel'

    applySavedPanelSize(panel, 'settings')
    getSidePanelsMount().appendChild(panel)
    attachPanelResizePersistence(panel, 'settings')

    const pos = state.panelPositions?.settings
    if (pos && (pos.x !== 0 || pos.y !== 0)) {
      panel.style.transform = `translate(${pos.x}px, ${pos.y}px)`
    }
  }

  const u = normalizeRebirthUpgrades(state.rebirthUpgrades)
  state.rebirthUpgrades = u
  const resetPct = clampNonNegativeInt(u.resetUnlockProgress)
  const resetReady = resetPct >= 100

  const audioEnabled = Boolean(state.audio?.enabled)
  const sfxVol = clampNonNegativeNumber(state.audio?.sfxVolume)
  const musicVol = clampNonNegativeNumber(state.audio?.musicVolume)
  const showCredits = Boolean(state.showCredits)

  const syncAt = clampNonNegativeInt(state.leaderboardsSync?.lastAt)
  const syncOk = Boolean(state.leaderboardsSync?.lastOk)
  const syncMsg = String(state.leaderboardsSync?.lastMsg || '')
  const syncSent = String(state.leaderboardsSync?.sentLabel || '')
  const syncStored = String(state.leaderboardsSync?.storedLabel || '')
  const syncStamp = syncAt ? new Date(syncAt).toLocaleString() : ''

  panel.innerHTML = `
    <div class="panel-header" onmousedown="window.startDrag(event, 'settings-panel')">
      <h3>${renderUiIcon('settings', { title: 'Settings' })} Settings</h3>
      <span class="drag-hint">✥ Drag to move ✥</span>
    </div>
    <div class="panel-content settings-content">
      <div class="settings-block">
        <div class="settings-block-title">DIFFICULTY</div>
        <label class="settings-row">
          <input type="checkbox" ${state.hardMode ? 'checked' : ''} onchange="window.setHardMode(this.checked)" />
          <span class="settings-row-text">Hard Mode (death ends your run)</span>
        </label>
      </div>

      <div class="settings-block">
        <div class="settings-hint">Unlock progress: <strong>${formatNumber(resetPct)}%</strong></div>
        <button class="settings-btn" onclick="window.endRunViaUnlockedReset()" ${(!resetReady || state.runEnded) ? 'disabled' : ''}>
          End Run (Reset)
        </button>
        <div class="settings-hint">This button unlocks from the Rebirth Tree at 100%.</div>
      </div>

      <div class="settings-block">
        <button class="settings-btn" onclick="window.forceLeaderboardSyncNow()">Sync Leaderboard Now</button>
        <div class="settings-hint">Sends your best cultivation + rebirth stats to the global leaderboard.</div>
        ${syncAt ? `<div class="settings-hint" style="opacity:0.9">Last sync: <strong>${escapeHtml(syncStamp)}</strong> — ${syncOk ? 'OK' : 'FAILED'}${syncMsg ? ` — ${escapeHtml(syncMsg)}` : ''}</div>` : ''}
        ${syncAt ? `<div class="settings-hint" style="opacity:0.85">Sent label: <strong>${escapeHtml(syncSent || '(empty)')}</strong><br>Stored label: <strong>${escapeHtml(syncStored || '(empty)')}</strong></div>` : ''}
      </div>

      <div class="profile-audio">
        <div class="profile-audio-title">Audio</div>
        <label class="profile-audio-row">
          <input type="checkbox" ${audioEnabled ? 'checked' : ''} onchange="window.setAudioEnabled(this.checked)">
          <span>Enable sound</span>
        </label>
        <label class="profile-audio-row">
          <span class="profile-audio-label">SFX</span>
          <input class="profile-audio-range" type="range" min="0" max="1" step="0.01" value="${escapeHtml(String(sfxVol))}" oninput="window.setAudioSfxVolume(this.value)">
          <button class="profile-audio-test" type="button" onclick="window.audioTestSfx()">TEST</button>
        </label>
        <label class="profile-audio-row">
          <span class="profile-audio-label">Music</span>
          <input class="profile-audio-range" type="range" min="0" max="1" step="0.01" value="${escapeHtml(String(musicVol))}" oninput="window.setAudioMusicVolume(this.value)">
        </label>
      </div>

      <div class="settings-block">
        <button class="settings-btn" onclick="window.toggleCredits()">${showCredits ? 'Hide Credits' : 'Show Credits'}</button>
        ${showCredits ? `
          <div class="settings-hint" style="margin-top:8px">
            Chinese New Year by Alex-Productions | <a href="https://onsound.eu/" target="_blank" rel="noopener noreferrer">https://onsound.eu/</a>
            <br>
            Music promoted by <a href="https://www.free-stock-music.com" target="_blank" rel="noopener noreferrer">https://www.free-stock-music.com</a>
            <br>
            Creative Commons / Attribution 3.0 Unported License (CC BY 3.0)
            <br>
            <a href="https://creativecommons.org/licenses/by/3.0/deed.en_US" target="_blank" rel="noopener noreferrer">https://creativecommons.org/licenses/by/3.0/deed.en_US</a>
          </div>
        ` : ''}
      </div>
    </div>
  `

  if (isNewPanel) {
    // Panel was just created
  }
}

function renderActionsPanel() {
  let actionsPanel = document.getElementById('actions-panel')
  const isNewPanel = !actionsPanel
  
  if (!actionsPanel) {
    actionsPanel = document.createElement('div')
    actionsPanel.id = 'actions-panel'
    actionsPanel.className = 'actions-panel draggable-panel'

    applySavedPanelSize(actionsPanel, 'actions')
    getSidePanelsMount().appendChild(actionsPanel)

    attachPanelResizePersistence(actionsPanel, 'actions')

    const pos = state.panelPositions?.actions
    if (pos && (pos.x !== 0 || pos.y !== 0)) {
      actionsPanel.style.transform = `translate(${pos.x}px, ${pos.y}px)`
    }
  }
  
  // Update action states dynamically based on current game state
  if (state.phase === 'FARMING') {
    const ignoreRequirements = !!state.devIgnoreRequirements
    // Saved games drop callbacks from actions; rehydrate on-demand.
    try { rehydrateActionCallbacks() } catch (_) {}

    // If the run has ended, offer a single Rebirth button.
    if (state.runEnded) {
      state.repeatableActions = []
      state.specialActions = []
      upsertSpecialActionByName({
        name: 'Rebirth.',
        icon: '🔁',
        description: 'Start a new life. (Keeps Rebirth Points.)',
        disabled: false,
        callback: () => window.beginRebirth()
      })
    }

    // Ensure removed/deprecated forest exploration actions never appear.
    state.specialActions = state.specialActions.filter(a => {
      const n = a?.name
      return n !== 'Explore the Nearby Forest' && n !== 'Enter Deep into the Woods' && n !== 'Find Nothing' && n !== 'Find Mysterious Herb'
    })

    // Update repeatable action states
    const restAction = state.repeatableActions.find(a => a.name === 'Rest')
    if (restAction) {
      restAction.disabled = ignoreRequirements ? false : (state.stamina >= state.maxStamina)
    }
    
    const farmAction = state.repeatableActions.find(a => a.name === 'Farm Crops')
    if (farmAction) {
      farmAction.disabled = ignoreRequirements ? false : (state.stamina < 2)
    }
    
    const chopWoodAction = state.repeatableActions.find(a => a.name === 'Chop Wood')
    if (chopWoodAction) {
      chopWoodAction.disabled = ignoreRequirements ? false : (state.stamina < 3)
    }
    
    const gatherMaterialsAction = state.repeatableActions.find(a => a.name === 'Gather Materials for Village')
    if (gatherMaterialsAction) {
      gatherMaterialsAction.disabled = ignoreRequirements ? false : (state.villageMaterialsCooldown > 0)
    }

    const grabGroceriesAction = state.repeatableActions.find(a => a.name === 'Grab Groceries')
    if (grabGroceriesAction) {
      grabGroceriesAction.disabled = ignoreRequirements ? false : (state.stamina < 2)
    }

    // Herb gathering/crafting live in the Herbalism panel now.
    state.repeatableActions = (Array.isArray(state.repeatableActions) ? state.repeatableActions : []).filter(a => a?.name !== 'Gather Herbs')
    try { removeSpecialActionsByName(['Craft Herb Pill']) } catch (_) {}

    // Cloud conquest repeatable (unlocked after Major Accident)
    try { ensureCloudConquestState() } catch (_) {}
    if (state.cloudConqueredSectsUnlocked) {
      if (!state.repeatableActions.some(a => a?.name === 'Searching and Conquering')) {
        state.repeatableActions.push({
          name: 'Searching and Conquering',
          icon: '🗺️',
          disabled: false,
          callback: () => window.searchingAndConquering()
        })
      }
    } else {
      state.repeatableActions = state.repeatableActions.filter(a => a?.name !== 'Searching and Conquering')
    }

    const searchConquerAction = state.repeatableActions.find(a => a?.name === 'Searching and Conquering')
    if (searchConquerAction) {
      const noTargets = getAvailableConquerableSectKeys().length === 0
      searchConquerAction.disabled = ignoreRequirements ? false : (state.searchingAndConqueringCooldown > 0 || noTargets)
    }

    // Demon path repeatables: corruption farming
    const demonRepeatableNames = ['Slaughter Sheep', 'Slaughter Random Civilians']
    if (state.isDemonPath) {
      if (!state.repeatableActions.some(a => a?.name === 'Slaughter Sheep')) {
        state.repeatableActions.push({
          name: 'Slaughter Sheep',
          icon: '🐑',
          cooldownSeconds: 3,
          disabled: false,
          callback: () => window.slaughterSheep()
        })
      }
      if (!state.repeatableActions.some(a => a?.name === 'Slaughter Random Civilians')) {
        state.repeatableActions.push({
          name: 'Slaughter Random Civilians',
          icon: '🔪',
          cooldownSeconds: 5,
          disabled: false,
          callback: () => window.slaughterRandomCivilians()
        })
      }
    } else {
      state.repeatableActions = (Array.isArray(state.repeatableActions) ? state.repeatableActions : []).filter(a => !demonRepeatableNames.includes(a?.name))
    }

    // If the player chose the Cloud story route (not business), hide wood actions.
    if (state.hasChosen100SilverRoute && !state.isBusinessOriented) {
      state.repeatableActions = (Array.isArray(state.repeatableActions) ? state.repeatableActions : []).filter(a => a?.name !== 'Chop Wood' && a?.name !== 'Sell Wood')
    }
    
    // Dynamically add meet immortal action when copper >= 30
    if (!state.hasMetFakeImmortal && state.copper >= 30) {
      if (!state.specialActions.find(a => a.name && a.name.includes('Meet the'))) {
        state.specialActions.push({
          name: 'Meet the "Immortal Cultivator"',
          icon: '🧙',
          disabled: false,
          callback: () => window.meetFakeImmortal()
        })
      }
    }
    
    // Update special action states
    const toolsAction = state.specialActions.find(a => a.name && a.name.includes('Buy Farming Tools'))
    if (toolsAction) {
      toolsAction.disabled = state.copper < state.farmingToolCost
    }
    
    const meetImmortalAction = state.specialActions.find(a => a.name && a.name.includes('Meet the'))
    if (meetImmortalAction) {
      meetImmortalAction.disabled = state.copper < 30
    }
    
    const buyAxeAction = state.specialActions.find(a => a.name && a.name.includes('Buy Axe'))
    if (buyAxeAction) {
      buyAxeAction.disabled = state.copper < 50
    }
    
    // (Removed) Forest exploration chain actions.
    
    // Dynamically add silver-related actions when reaching 50 silver
    if (state.silver >= 50 && !state.hasBoughtNormalAxe && !state.hasBoughtLegendaryTools) {
      // Roll the legendary axe offer ONCE when first eligible (20% chance)
      if (!state.legendaryAxeOfferRolled) {
        state.legendaryAxeOfferRolled = true
        state.legendaryAxeOfferAvailable = Math.random() < 0.2
      }

      // Roll the bargain offer ONCE when first eligible (50% chance)
      if (!state.bargainOfferRolled) {
        state.bargainOfferRolled = true
        state.bargainOfferAvailable = rollSpecialEventChance(0.5)
      }

      // Add normal axe option if not exists
      if (!state.specialActions.find(a => a.name && a.name.includes('Buy Normal Axe'))) {
        state.specialActions.push({
          name: 'Buy Normal Axe',
          icon: '🪓',
          disabled: false,
          onStart: () => {
            // Prevent bargain option appearing after clicking buy.
            state.bargainOfferAvailable = false
            state.specialActions = state.specialActions.filter(a => {
              const n = String(a?.name || '')
              return !n.includes('Bargain')
            })
            return true
          },
          callback: () => window.buyNormalAxe()
        })
      }
      
      // Add legendary axe option if not exists
      if (state.legendaryAxeOfferAvailable && !state.specialActions.find(a => a.name && a.name.includes('Buy Legendary Axe'))) {
        state.specialActions.push({
          name: 'Buy Legendary Axe (20 Luck)',
          icon: '✨',
          disabled: false,
          callback: () => window.buyLegendaryTools()
        })
      }
      
      // Add bargain option (if it rolled true) at the same time as the normal axe offer.
      if (!state.hasSeenBargain && state.bargainOfferAvailable && !state.specialActions.find(a => a.name && a.name.includes('Bargain'))) {
        state.specialActions.push({
          name: 'Bargain',
          icon: '💰',
          disabled: false,
          callback: () => window.startBargain()
        })
      }
    }
    
    // Update special action states for silver-related actions
    const normalAxeAction = state.specialActions.find(a => a.name && a.name === 'Buy Normal Axe')
    if (normalAxeAction) {
      normalAxeAction.disabled = state.silver < 50
    }
    
    const legendaryToolsAction = state.specialActions.find(a => a.name && a.name.includes('Buy Legendary Axe'))
    if (legendaryToolsAction) {
      legendaryToolsAction.disabled = state.luck < 20
    }

    // 100 silver story route choice (two paths)
    const hasRoute = Boolean(state.hasChosen100SilverRoute)
    const hasSteady = state.specialActions.some(a => a?.name === 'Steady Coin')
    const hasFollow = state.specialActions.some(a => a?.name === 'Follow the Mysterious Cultivator')

    if (hasRoute) {
      // Ensure route choice buttons never reappear.
      state.specialActions = state.specialActions.filter(a => a?.name !== 'Steady Coin' && a?.name !== 'Follow the Mysterious Cultivator')
    } else if (state.silver >= 100) {
      if (!hasSteady) {
        state.specialActions.push({
          name: 'Steady Coin',
          icon: '🪙',
          description: 'You invest in storage, tools, and repeatable agreements.',
          costSilver: 100,
          disabled: false,
          onStart: () => {
            // Lock choice immediately: remove the other path button.
            state.specialActions = state.specialActions.filter(a => a?.name !== 'Follow the Mysterious Cultivator')
            return true
          },
          callback: () => {
            window.chooseSteadyCoin()
          }
        })
      }
      if (!hasFollow) {
        state.specialActions.push({
          name: 'Follow the Mysterious Cultivator',
          icon: '☁️',
          costSilver: 100,
          disabled: false,
          onStart: () => {
            state.specialActions = state.specialActions.filter(a => a?.name !== 'Steady Coin')
            return true
          },
          callback: () => {
            state.hasChosen100SilverRoute = true
            state.cloudCultivatorStoryStage = Math.max(1, clampNonNegativeInt(state.cloudCultivatorStoryStage))

            // Next step in the chain
            if (!state.specialActions.some(a => a?.name === 'Walk with the Mysterious Cultivator to the Building.')) {
              state.specialActions.push({
                name: 'Walk with the Mysterious Cultivator to the Building.',
                icon: '🚶',
                description: 'The cultivator leads you beyond familiar paths, toward a quiet structure half-hidden by drifting cloud.',
                disabled: false,
                callback: () => window.cloudStoryWalkToBuilding()
              })
            }
          }
        })
      }
    }

    // Third guaranteed 100-silver threshold special action (free): Larger Bag Space
    if (!state.hasLargerBagSpace && (state.largerBagSpaceUnlocked || state.silver >= 100)) {
      if (!state.largerBagSpaceUnlocked && state.silver >= 100) state.largerBagSpaceUnlocked = true
      if (!state.specialActions.some(a => a?.name === 'Larger Bag Space')) {
        state.specialActions.push({
          name: 'Larger Bag Space',
          icon: '🎒',
          disabled: false,
          callback: () => window.claimLargerBagSpace()
        })
      }
    }

    // Ensure chain actions exist if player reloads after starting the chain.
    if (clampNonNegativeInt(state.cloudCultivatorStoryStage) === 2) {
      if (!state.specialActions.some(a => a?.name === 'Sect Leader Offers Items and Recruitment.')) {
        state.specialActions.push({
          name: 'Sect Leader Offers Items and Recruitment.',
          icon: '🏯',
          description: 'A figure waits within, unmoving. “You’ve reached the end of your road as a wanderer,” they say.\nA thin manual glides forward, light as mist.',
          disabled: false,
          callback: () => window.cloudStoryLeaderOffers()
        })
      }
    }

    // Cloud Sect continuation branch actions
    if (state.hasJoinedSect && state.currentSect === 'Cloud') {
      const stage = clampNonNegativeInt(state.cloudCultivatorStoryStage)

      const hasAnyCloudContinuation = state.specialActions.some(a => {
        const n = String(a?.name || '')
        return n === 'Arrival Among Clouds.'
          || n === 'Confronted by an Outer Disciple.'
          || n === 'Battle starts.'
          || n === 'Exploring the Sect Library.'
          || n === 'Find heavenly demon manual.'
          || n === 'Take the Demonic Manual.'
          || n === 'Find nothing.'
          || n === 'Venture Out to the Neighboring Sects'
          || n === 'Cause Commotion'
          || n === 'Attacked'
          || n === 'Run to Sect Leader'
          || n === 'Conquering Sect'
          || n === 'Major Accident'
      })

      // If player is already in Cloud sect from the story, restore the correct next step.
      // (Do NOT restart the story at "Arrival" when the player is already at later stages.)
      if (stage >= 3 && !hasAnyCloudContinuation) {
        if (stage <= 4) {
          state.cloudCultivatorStoryStage = Math.max(4, stage)
          state.specialActions.push({
            name: 'Arrival Among Clouds.',
            icon: '☁️',
            description: 'The Cloud Sect is quieter than you expected. You can feel it — you don’t belong here yet.',
            disabled: false,
            callback: () => window.cloudStoryArrivalAmongClouds()
          })
        } else if (stage === 5) {
          state.specialActions.push({
            name: 'Confronted by an Outer Disciple.',
            icon: '🥋',
            description: 'A young disciple steps into your path, blocking the stone walkway.\n“Another lucky mortal,” they scoff. This is not a discussion.',
            disabled: false,
            callback: () => window.cloudStoryConfrontedByOuterDisciple()
          })
        } else if (stage === 6) {
          state.specialActions.push({
            name: 'Battle starts.',
            icon: '⚔️',
            description: 'This is not a discussion.',
            disabled: false,
            callback: () => window.cloudStoryBattleStarts()
          })
        } else if (stage === 7) {
          state.specialActions.push({
            name: 'Exploring the Sect Library.',
            icon: '📚',
            description: 'With your new standing, the Cloud Sect’s library opens to you.',
            disabled: state.stamina < 15,
            onStart: () => {
              if (state.stamina < 15) return false
              state.stamina -= 15
              return true
            },
            callback: () => window.cloudStoryExploreLibrary()
          })
        } else if (stage === 8) {
          // Restore the library choice buttons if they are missing.
          upsertSpecialActionByName({
            name: 'Find heavenly demon manual.',
            icon: '📖',
            description: 'Cost: Story Luck −55\nRequirement: Story Luck ≥ 55\nOutcome: Obtain Hidden Heavenly Demon Manual',
            disabled: state.luck < 55,
            onStart: () => {
              if (state.luck < 55) return false
              state.luck -= 55
              state.specialActions = state.specialActions.filter(a => a?.name !== 'Take the Demonic Manual.' && a?.name !== 'Find nothing.')
              return true
            },
            callback: () => window.cloudStoryFindHeavenlyDemonManual()
          })
          upsertSpecialActionByName({
            name: 'Take the Demonic Manual.',
            icon: '📕',
            description: 'Cost: None\nOutcome: Obtain Demonic Manual\nEquipping it will get you expelled from your sect.',
            disabled: false,
            onStart: () => {
              state.specialActions = state.specialActions.filter(a => a?.name !== 'Find heavenly demon manual.')
              return true
            },
            callback: () => window.cloudStoryTakeDemonicManual()
          })
          upsertSpecialActionByName({
            name: 'Find nothing.',
            icon: '🫙',
            description: 'Cost: None\nOutcome: You find nothing of value.',
            disabled: false,
            callback: () => window.cloudStoryFindNothingInLibrary()
          })
        } else if (stage === 9) {
          // Find-nothing continuation chain (step 1)
          removeSpecialActionsByName(['Find heavenly demon manual.', 'Take the Demonic Manual.', 'Find nothing.'])
          upsertSpecialActionByName({
            name: 'Venture Out to the Neighboring Sects',
            icon: '🧭',
            description: 'You leave the library empty-handed. If knowledge cannot be found, it must be taken.',
            disabled: state.stamina < 15,
            onStart: () => {
              if (state.stamina < 15) return false
              state.stamina -= 15
              return true
            },
            callback: () => window.cloudStoryVentureOutToNeighboringSects()
          })
        } else if (stage === 10) {
          removeSpecialActionsByName(['Find heavenly demon manual.', 'Take the Demonic Manual.', 'Find nothing.'])
          upsertSpecialActionByName({
            name: 'Cause Commotion',
            icon: '💥',
            description: 'You stir the outer halls of a neighboring sect—just enough to draw attention.',
            disabled: state.stamina < 5,
            onStart: () => {
              if (state.stamina < 5) return false
              state.stamina -= 5
              return true
            },
            callback: () => window.cloudStoryCauseCommotion()
          })
        } else if (stage === 11) {
          removeSpecialActionsByName(['Find heavenly demon manual.', 'Take the Demonic Manual.', 'Find nothing.'])
          upsertSpecialActionByName({
            name: 'Attacked',
            icon: '🩸',
            description: 'Your commotion works. Too well. You are struck in the dark.',
            disabled: false,
            onStart: () => {
              const q = clampNonNegativeNumber(state.qi)
              const cost = Math.floor(q * 0.25)
              state.qi = Math.max(0, q - cost)
              return true
            },
            callback: () => window.cloudStoryAttacked()
          })
        } else if (stage === 12) {
          removeSpecialActionsByName(['Find heavenly demon manual.', 'Take the Demonic Manual.', 'Find nothing.'])
          upsertSpecialActionByName({
            name: 'Run to Sect Leader',
            icon: '🏃',
            description: 'You return to the Cloud Sect, bleeding anger into your steps.',
            disabled: state.stamina < 5,
            onStart: () => {
              if (state.stamina < 5) return false
              state.stamina -= 5
              return true
            },
            callback: () => window.cloudStoryRunToSectLeader()
          })
        } else if (stage === 13) {
          removeSpecialActionsByName(['Find heavenly demon manual.', 'Take the Demonic Manual.', 'Find nothing.'])
          upsertSpecialActionByName({
            name: 'Conquering Sect',
            icon: '🏴',
            description: 'The answer is simple: if they can strike you, you can end them.',
            disabled: false,
            callback: () => window.cloudStoryConqueringSect()
          })
        } else if (stage === 14) {
          removeSpecialActionsByName(['Find heavenly demon manual.', 'Take the Demonic Manual.', 'Find nothing.'])
          upsertSpecialActionByName({
            name: 'Major Accident',
            icon: '⚠️',
            description: 'A single misstep becomes a chain of consequences that no disciple can contain.',
            disabled: false,
            callback: () => window.cloudStoryMajorAccident()
          })
        } else {
          // Stage 15+ indicates the library choice + continuation chain has been resolved.
          // Do not inject earlier steps.
          removeSpecialActionsByName([
            'Find heavenly demon manual.',
            'Take the Demonic Manual.',
            'Find nothing.',
            'Venture Out to the Neighboring Sects',
            'Cause Commotion',
            'Attacked',
            'Run to Sect Leader',
            'Conquering Sect',
            'Major Accident'
          ])

          // Ensure conquest system stays unlocked if the player reloads.
          try {
            ensureCloudConquestState()
            if (state.cloudConqueredSectsUnlocked) {
              // Panel toggle and repeatable are handled elsewhere.
              // Coalition-war endgame actions are injected here once all normal sects are conquered.
              try { injectCloudCoalitionWarActionsIfReady() } catch (_) {}
            }
          } catch (_) {}
        }
      }

      // Dynamic disables
      const lib = state.specialActions.find(a => a?.name === 'Exploring the Sect Library.')
      if (lib) lib.disabled = state.stamina < 15
      const heavenly = state.specialActions.find(a => a?.name === 'Find heavenly demon manual.')
      if (heavenly) heavenly.disabled = state.luck < 55

      const venture = state.specialActions.find(a => a?.name === 'Venture Out to the Neighboring Sects')
      if (venture) venture.disabled = state.stamina < 15
      const commotion = state.specialActions.find(a => a?.name === 'Cause Commotion')
      if (commotion) commotion.disabled = state.stamina < 5
      const runLead = state.specialActions.find(a => a?.name === 'Run to Sect Leader')
      if (runLead) runLead.disabled = state.stamina < 5
    }

    // ------------------------------------------------------------------------
    // RELOAD-SAFE ACTION INJECTION
    //
    // Purpose:
    // - Story chains add/remove actions over time.
    // - If the player reloads mid-chain, we must reconstruct the correct actions
    //   from saved state flags, otherwise the chain can soft-lock.
    //
    // Rule of thumb:
    // - Any multi-step story chain should have BOTH:
    //   (1) callback rehydration entries (by action name)
    //   (2) a reload-safe injection block here driven by saved state
    // ------------------------------------------------------------------------

    // Heavenly Demon detour chain recovery (reload-safe)
    try {
      ensureHdDetourState()
      const hd = state.hdDetour
      if (hd && typeof hd === 'object' && hd.unlocked) {
        const hasSpecial = (name) => state.specialActions.some(a => a?.name === name)
        const removeSpecial = (names) => {
          state.specialActions = state.specialActions.filter(a => !names.includes(a?.name))
        }
        const hasRepeatable = (name) => Array.isArray(state.repeatableActions) && state.repeatableActions.some(a => a?.name === name)

        if (!hd.choseDifferentPath) {
          if (!hasSpecial('I Rather Walk a Different Path.')) {
            upsertSpecialActionByName({
              name: 'I Rather Walk a Different Path.',
              icon: '🚪',
              disabled: false,
              callback: () => window.hdRatherWalkDifferentPath()
            })
          }
        } else {
          removeSpecial(['I Rather Walk a Different Path.'])

          if (!hd.exploredCave) {
            if (!hasSpecial('Explore a Mysterious Cave.')) {
              upsertSpecialActionByName({
                name: 'Explore a Mysterious Cave.',
                icon: '🕳️',
                disabled: false,
                callback: () => window.hdExploreMysteriousCave()
              })
            }
          } else {
            removeSpecial(['Explore a Mysterious Cave.'])

            if (hd.caveChoice !== 'demonicManual' && hd.caveChoice !== 'ignore') {
              if (!hasSpecial('The Demonic Manual has followed you.')) {
                upsertSpecialActionByName({
                  name: 'The Demonic Manual has followed you.',
                  icon: '📕',
                  disabled: false,
                  callback: () => window.hdCaveDemonicManualFollowed()
                })
              }
              if (!hasSpecial('Ignore the calling and continue journey.')) {
                upsertSpecialActionByName({
                  name: 'Ignore the calling and continue journey.',
                  icon: '🚶',
                  disabled: false,
                  callback: () => window.hdCaveIgnoreCalling()
                })
              }
            } else if (hd.caveChoice === 'ignore') {
              removeSpecial(['The Demonic Manual has followed you.', 'Ignore the calling and continue journey.'])

              if (!hd.startedFamily) {
                upsertSpecialActionByName({
                  name: 'Settling down and starting a family.',
                  icon: '👪',
                  disabled: state.stamina < 15,
                  onStart: () => {
                    if (state.stamina < 15) return false
                    state.stamina -= 15
                    return true
                  },
                  callback: () => window.hdStartFamily()
                })
              } else {
                removeSpecial(['Settling down and starting a family.'])

                if (clampNonNegativeInt(hd.groceriesCount) >= 5) hd.returnHomeAvailable = true

                if (hd.returnHomeAvailable) {
                  state.repeatableActions = (Array.isArray(state.repeatableActions) ? state.repeatableActions : []).filter(a => a?.name !== 'Grab Groceries')
                  upsertSpecialActionByName({
                    name: 'Return Home.',
                    icon: '🏠',
                    disabled: state.stamina < 15,
                    onStart: () => {
                      if (state.stamina < 15) return false
                      state.stamina -= 15
                      return true
                    },
                    callback: () => window.hdReturnHome()
                  })
                  removeSpecial(['Gather Groceries.'])
                } else {
                  const groceriesCount = clampNonNegativeInt(hd.groceriesCount)
                  const hasStarter = hasSpecial('Gather Groceries.')
                  const hasLoop = hasRepeatable('Grab Groceries')

                  if (groceriesCount <= 0 && !hasStarter && !hasLoop) {
                    upsertSpecialActionByName({
                      name: 'Gather Groceries.',
                      icon: '🛒',
                      disabled: false,
                      callback: () => window.hdGatherGroceries()
                    })
                  }

                  if (!hasStarter && (groceriesCount > 0 || hasLoop)) {
                    if (!Array.isArray(state.repeatableActions)) state.repeatableActions = []
                    if (!state.repeatableActions.some(a => a?.name === 'Grab Groceries')) {
                      state.repeatableActions.push({
                        name: 'Grab Groceries',
                        icon: '🛍️',
                        disabled: state.stamina < 2,
                        onStart: () => {
                          if (state.stamina < 2) return false
                          state.stamina -= 2
                          return true
                        },
                        callback: () => window.hdGrabGroceries()
                      })
                    }
                  }
                }
              }
            }
          }
        }
      }
    } catch (_) {}

    // Demonic Monarch fate chain recovery (reload-safe)
    try {
      ensureDmFateState()
      const dm = state.dmFate
      if (dm && typeof dm === 'object' && dm.unlocked) {
        const stage = String(dm.stage || '')
        const all = [
          'Decide Fate of the Sect',
          'Slaughter Sect.',
          'Stay as a demon.',
          'Find the demon who killed your family.',
          'Capture the demon.',
          'End the life of the demon.',
          'To end the demons is to end myself.'
        ]
        const keep = (name) => removeSpecialActionsByName(all.filter(n => n !== name))

        if (stage === 'awaitLeader') {
          keep('Decide Fate of the Sect')
          upsertSpecialActionByName({
            name: 'Decide Fate of the Sect',
            icon: '⚖️',
            description: 'Requirement: Reach Sect Leader rank in the Demonic Monarch Sect',
            disabled: !isDemonMonarchSectLeader(),
            onStart: () => isDemonMonarchSectLeader(),
            callback: () => window.dmDecideFateOfSect()
          })
        } else if (stage === 'choose') {
          removeSpecialActionsByName(['Decide Fate of the Sect', 'Find the demon who killed your family.', 'Capture the demon.', 'End the life of the demon.', 'To end the demons is to end myself.'])
          upsertSpecialActionByName({
            name: 'Slaughter Sect.',
            icon: '🩸',
            disabled: state.stamina < 15,
            onStart: () => {
              if (state.stamina < 15) return false
              state.stamina -= 15
              return true
            },
            callback: () => window.dmSlaughterSect()
          })
          upsertSpecialActionByName({
            name: 'Stay as a demon.',
            icon: '😈',
            disabled: state.stamina < 15,
            onStart: () => {
              if (state.stamina < 15) return false
              state.stamina -= 15
              return true
            },
            callback: () => window.dmStayAsDemon()
          })
        } else if (stage === 'slaughterFinal') {
          keep('To end the demons is to end myself.')
          upsertSpecialActionByName({
            name: 'To end the demons is to end myself.',
            icon: '🕯️',
            disabled: false,
            callback: () => window.dmEndDemonsEndMyself()
          })
        } else if (stage === 'stay_find') {
          keep('Find the demon who killed your family.')
          upsertSpecialActionByName({
            name: 'Find the demon who killed your family.',
            icon: '🕵️',
            disabled: state.stamina < 15,
            onStart: () => {
              if (state.stamina < 15) return false
              state.stamina -= 15
              return true
            },
            callback: () => window.dmFindFamilyKiller()
          })
        } else if (stage === 'stay_capture') {
          keep('Capture the demon.')
          upsertSpecialActionByName({
            name: 'Capture the demon.',
            icon: '⛓️',
            disabled: state.stamina < 15,
            onStart: () => {
              if (state.stamina < 15) return false
              state.stamina -= 15
              return true
            },
            callback: () => window.dmCaptureDemon()
          })
        } else if (stage === 'stay_end') {
          keep('End the life of the demon.')
          upsertSpecialActionByName({
            name: 'End the life of the demon.',
            icon: '🗡️',
            disabled: state.stamina < 15,
            onStart: () => {
              if (state.stamina < 15) return false
              state.stamina -= 15
              return true
            },
            callback: () => window.dmEndLifeOfDemon()
          })
        } else if (stage === 'done' || stage === 'dead') {
          removeSpecialActionsByName(all)
        }
      }
    } catch (_) {}

    // Demon path: cosmic finale action recovery (reload-safe)
    try {
      const eligible = Boolean(state.isDemonPath)
        && !state.demonCosmicFinaleDone
        && clampNonNegativeInt(state.cultivationMajorIndex) >= 9

      if (!eligible) {
        removeSpecialActionsByName(['Rend the Multiverse.'])
      } else {
        upsertSpecialActionByName({
          name: 'Rend the Multiverse.',
          icon: '🌌',
          description: 'At the peak of demonic cultivation, you can challenge the laws of existence itself.',
          disabled: false,
          callback: () => window.dmRendMultiverse()
        })
      }
    } catch (_) {}

    // Demon path: cabin revenge chain (reload-safe)
    try {
      const stage = String(state.demonCabinRevengeStage || '')
      const corruptionOk = clampNonNegativeInt(state.corruption) >= 50
      // Only *start* showing this chain at 50% corruption, but once started keep it available.
      const active = Boolean(state.isDemonPath) && !state.runEnded && (corruptionOk || stage !== '')
      const all = [
        'Slaughter the family in the cabin.',
        'The family man returns.',
        'Recruit the family man.',
        'Successful recruitment.',
        'Stay focused on your journey.',
        'Doze off.',
        'Wake up with a sack covering your face.',
        'Realization.',
        'The end.'
      ]

      if (!active) {
        removeSpecialActionsByName(all)
      } else {
        // Stage machine:
        // '' -> slaughter -> returns -> recruit -> recruited -> (focused | doze) -> sack -> realization -> end -> (runEnded)
        if (stage === '') {
          removeSpecialActionsByName(all.filter(n => n !== 'Slaughter the family in the cabin.'))
          upsertSpecialActionByName({
            name: 'Slaughter the family in the cabin.',
            icon: '🩸',
            disabled: false,
            callback: () => window.dmCabinSlaughterFamily()
          })
        } else if (stage === 'slaughter') {
          removeSpecialActionsByName(all.filter(n => n !== 'The family man returns.'))
          upsertSpecialActionByName({
            name: 'The family man returns.',
            icon: '🚪',
            disabled: false,
            callback: () => window.dmCabinFamilyManReturns()
          })
        } else if (stage === 'returns') {
          removeSpecialActionsByName(all.filter(n => n !== 'Recruit the family man.'))
          upsertSpecialActionByName({
            name: 'Recruit the family man.',
            icon: '🤝',
            disabled: false,
            callback: () => window.dmCabinRecruitFamilyMan()
          })
        } else if (stage === 'recruit') {
          removeSpecialActionsByName(all.filter(n => n !== 'Successful recruitment.'))
          upsertSpecialActionByName({
            name: 'Successful recruitment.',
            icon: '✅',
            disabled: false,
            callback: () => window.dmCabinSuccessfulRecruitment()
          })
        } else if (stage === 'recruited') {
          // Branch choice: avoid death path OR trigger it.
          removeSpecialActionsByName(all.filter(n => n !== 'Stay focused on your journey.' && n !== 'Doze off.'))
          upsertSpecialActionByName({
            name: 'Stay focused on your journey.',
            icon: '🧘',
            disabled: false,
            callback: () => window.dmCabinStayFocused()
          })
          upsertSpecialActionByName({
            name: 'Doze off.',
            icon: '😴',
            disabled: false,
            callback: () => window.dmCabinDozeOff()
          })
        } else if (stage === 'doze') {
          removeSpecialActionsByName(all.filter(n => n !== 'Wake up with a sack covering your face.'))
          upsertSpecialActionByName({
            name: 'Wake up with a sack covering your face.',
            icon: '🧺',
            disabled: false,
            callback: () => window.dmCabinWakeUpSack()
          })
        } else if (stage === 'sack') {
          removeSpecialActionsByName(all.filter(n => n !== 'Realization.'))
          upsertSpecialActionByName({
            name: 'Realization.',
            icon: '🕯️',
            disabled: false,
            callback: () => window.dmCabinRealization()
          })
        } else if (stage === 'realization') {
          removeSpecialActionsByName(all.filter(n => n !== 'The end.'))
          upsertSpecialActionByName({
            name: 'The end.',
            icon: '⚰️',
            disabled: false,
            callback: () => window.dmCabinTheEnd()
          })
        } else if (stage === 'end') {
          removeSpecialActionsByName(all)
        } else {
          // Any unknown stage: clear chain to avoid soft-lock.
          removeSpecialActionsByName(all)
        }
      }
    } catch (_) {}

    // Orthodox hide chain recovery (reload-safe)
    // Notes:
    // - Stage progression is tracked in `state.orthodoxHide.stage`.
    // - `state.joinedOrthodoxSect` hard-locks leaving the sect.
    try {
      ensureOrthodoxHideState()
      const st = String(state.orthodoxHide?.stage || '')
      const active = Boolean(state.fledDemon) && !state.joinedOrthodoxSect && (st === 'discover' || st === 'saved' || st === 'loyalty')

      const all = [
        'Discover Hidden Orthodox Sect',
        'Saved by the mysterious sect.',
        'In exchange for utmost loyalty you will learn the way of the orthodox.'
      ]

      if (!active) {
        removeSpecialActionsByName(all)
      } else if (st === 'discover') {
        removeSpecialActionsByName(all.filter(n => n !== 'Discover Hidden Orthodox Sect'))
        upsertSpecialActionByName({
          name: 'Discover Hidden Orthodox Sect',
          icon: '☯️',
          disabled: false,
          callback: () => window.orthodoxDiscoverHiddenSect()
        })
      } else if (st === 'saved') {
        removeSpecialActionsByName(all.filter(n => n !== 'Saved by the mysterious sect.'))
        upsertSpecialActionByName({
          name: 'Saved by the mysterious sect.',
          icon: '🕯️',
          disabled: state.stamina < 5,
          onStart: () => {
            if (state.stamina < 5) return false
            state.stamina -= 5
            return true
          },
          callback: () => window.orthodoxSavedByMysteriousSect()
        })
      } else if (st === 'loyalty') {
        removeSpecialActionsByName(all.filter(n => n !== 'In exchange for utmost loyalty you will learn the way of the orthodox.'))
        upsertSpecialActionByName({
          name: 'In exchange for utmost loyalty you will learn the way of the orthodox.',
          icon: '📜',
          disabled: false,
          callback: () => window.orthodoxPledgeUtmostLoyalty()
        })
      }
    } catch (_) {}

    // Orthodox true ending war chain recovery (reload-safe)
    try {
      ensureOrthodoxWarState()
      const active = Boolean(state.joinedOrthodoxSect) && !state.isDemonPath && !state.runEnded && !state.orthodoxTrueEndingDone
      const all = [
        'Orthodox War Council',
        'March to the Front',
        'Break the Demonic Lines',
        'Confront the Demonic Monarch',
        'Shatter the Mandate of Hell',
        'The world ends.'
      ]

      if (!active) {
        removeSpecialActionsByName(all)
      } else {
        const stage = clampNonNegativeInt(state.orthodoxWarStage)
        removeSpecialActionsByName(all)

        if (stage <= 0) {
          upsertSpecialActionByName({
            name: 'Orthodox War Council',
            icon: '☯️',
            description: 'The Orthodox Sect declares war on the Demonic Monarch Sect.',
            disabled: false,
            callback: () => window.orthodoxWarCouncil()
          })
        } else if (stage === 1) {
          upsertSpecialActionByName({
            name: 'March to the Front',
            icon: '🛡️',
            description: 'You march with righteous armies toward the demonic battlefield.',
            disabled: state.stamina < 10,
            onStart: () => {
              if (state.stamina < 10) return false
              state.stamina -= 10
              return true
            },
            callback: () => window.orthodoxWarMarchToFront()
          })
        } else if (stage === 2) {
          upsertSpecialActionByName({
            name: 'Break the Demonic Lines',
            icon: '⚔️',
            description: 'A decisive push. The battlefield bends around your intent.',
            disabled: state.stamina < 15,
            onStart: () => {
              if (state.stamina < 15) return false
              state.stamina -= 15
              return true
            },
            callback: () => window.orthodoxWarBreakTheDemonicLines()
          })
        } else if (stage === 3) {
          upsertSpecialActionByName({
            name: 'Confront the Demonic Monarch',
            icon: '👁️',
            description: 'The heart of the war. The Monarch awaits.',
            disabled: state.stamina < 20,
            onStart: () => {
              if (state.stamina < 20) return false
              state.stamina -= 20
              return true
            },
            callback: () => window.orthodoxWarConfrontTheMonarch()
          })
        } else if (stage === 4) {
          upsertSpecialActionByName({
            name: 'Shatter the Mandate of Hell',
            icon: '🕯️',
            description: 'You break the law that allows demons to rule.',
            disabled: false,
            callback: () => window.orthodoxWarShatterTheMandate()
          })
        } else {
          // Final action, gated at Major Realm 15.
          const reqOk = clampNonNegativeInt(state.cultivationMajorIndex) >= 14
          upsertSpecialActionByName({
            name: 'The world ends.',
            icon: '🌍',
            description: 'Requirement: Major Realm 15',
            disabled: !reqOk,
            onStart: () => reqOk,
            callback: () => window.orthodoxTheWorldEnds()
          })
        }
      }
    } catch (_) {}

    // Business continuation branch actions
    if (state.isBusinessOriented && state.hasStartedBusiness) {
      const hasExpansion = state.specialActions.some(a => a?.name === 'Expansion Opportunity.')
      const hasHiring = state.specialActions.some(a => a?.name === 'Hiring Employees.')
      const hasStability = state.specialActions.some(a => a?.name === 'Stability Isn’t Enough')
      const hasNoMoreGames = state.specialActions.some(a => a?.name === 'No More Games')
      const hasMerchantGuild = state.specialActions.some(a => a?.name === 'A Merchant Guild Seeks Partnership')
      const hasNervousSect = state.specialActions.some(a => a?.name === 'Nervous Neighboring Sect')
      const hasNegotiate = state.specialActions.some(a => a?.name === 'Negotiate With Sect')
      const hasDeny = state.specialActions.some(a => a?.name === 'Deny Negoitation')
      const hasRetaliation = state.specialActions.some(a => a?.name === 'Sect Retaliation')
      const hasManual = state.specialActions.some(a => a?.name === 'Find Mysterious Manual in Rubble')

      if (!state.businessUpgradedExpansion && !hasExpansion) {
        state.specialActions.push({
          name: 'Expansion Opportunity.',
          icon: '📈',
          description: 'Your operation stabilizes faster than expected. Coin circulates.\nOutcome: Passive income improves significantly.',
          costSilver: 150,
          costCopper: 250,
          disabled: state.silver < 150 || state.copper < 250,
          callback: () => window.businessExpansionOpportunity()
        })
      }

      if (state.businessUpgradedExpansion && !state.businessUpgradedEmployees && !hasHiring) {
        state.specialActions.push({
          name: 'Hiring Employees.',
          icon: '👥',
          description: 'Coin alone isn’t enough anymore. Hands are.\nOutcome: Income cycle time reduced (faster payouts).',
          costCopper: 700,
          disabled: state.copper < 700,
          callback: () => window.businessHiringEmployees()
        })
      }

      // Post-employees branch options (two specials appear after Hiring Employees)
      if (state.businessUpgradedEmployees && !state.businessChoseStabilityIsntEnough && !state.businessChoseNoMoreGames) {
        if (!hasStability) {
          state.specialActions.push({
            name: 'Stability Isn’t Enough',
            icon: '🏦',
            description: 'You throw in all your money. Your copper. Silver, and gold all for a chance for better riches.\nOutcome: Massive steady returns per income cycle.',
            costCopper: 1000,
            costSilver: 1000,
            costGold: 50,
            disabled: state.copper < 1000 || state.silver < 1000 || state.gold < 50,
            onStart: () => {
              if (state.copper < 1000 || state.silver < 1000 || state.gold < 50) return false
              state.specialActions = state.specialActions.filter(a => a?.name !== 'No More Games')
              return true
            },
            callback: () => window.businessStabilityIsntEnough()
          })
        }

        if (!hasNoMoreGames) {
          state.specialActions.push({
            name: 'No More Games',
            icon: '🕶️',
            description: 'You decide you had enough following rules. Screw corporate. You wanna go underground and make the real cash.\nOutcome: Huge gold and spirit-stone payouts per income cycle.',
            costText: 'All copper, all silver, all gold',
            tradeoffText: 'Spend all copper, silver, and gold.',
            disabled: false,
            onStart: () => {
              state.specialActions = state.specialActions.filter(a => a?.name !== 'Stability Isn’t Enough')
              state.copper = 0
              state.silver = 0
              state.gold = 0
              return true
            },
            callback: () => window.businessNoMoreGames()
          })
        }
      }

      // Good-route continuation (only after choosing Stability Isn't Enough)
      if (state.businessChoseStabilityIsntEnough) {
        if (!state.businessMerchantGuildPartnered && !hasMerchantGuild) {
          state.specialActions.push({
            name: 'A Merchant Guild Seeks Partnership',
            icon: '🤝',
            description: 'The merchant guild notices you know how to make cash flow. They like that.',
            costText: '25% of your current income per cycle',
            tradeoffText: 'Income cycle becomes every 0.9 seconds.',
            disabled: false,
            callback: () => window.businessMerchantGuildSeeksPartnership()
          })
        }

        if (state.businessMerchantGuildPartnered && !state.businessNervousNeighboringSectOpened && !hasNervousSect) {
          state.specialActions.push({
            name: 'Nervous Neighboring Sect',
            icon: '🏯',
            description: 'The neighboring sect, once holding lots of power, is slowly losing its grip because of your growing business. They want to make a deal.',
            costText: 'None',
            tradeoffText: 'Progresses story.',
            disabled: false,
            callback: () => window.businessNervousNeighboringSect()
          })
        }

        // Choice prompt after opening the sect event
        if (state.businessNervousNeighboringSectOpened && !state.businessNeighboringSectNegotiated && !state.businessNeighboringSectDenied) {
          // Ensure the intro action is not stuck around after opening.
          state.specialActions = state.specialActions.filter(a => a?.name !== 'Nervous Neighboring Sect')

          if (!hasNegotiate) {
            state.specialActions.push({
              name: 'Negotiate With Sect',
              icon: '📜',
              description: 'The sect wants a fraction of your power. And where does your power come from? Money.',
              costText: '15% of your income per cycle',
              tradeoffText: 'The sect backs off for now.',
              disabled: false,
              callback: () => window.businessNegotiateWithSect()
            })
          }

          if (!hasDeny) {
            state.specialActions.push({
              name: 'Deny Negoitation',
              icon: '🚫',
              description: '',
              costText: '15 stamina',
              tradeoffText: 'None.',
              disabled: !state.devIgnoreRequirements && state.stamina < 15,
              onStart: () => {
                if (!state.devIgnoreRequirements && state.stamina < 15) return false
                if (!state.devIgnoreRequirements) state.stamina -= 15
                return true
              },
              callback: () => window.businessDenyNegoitation()
            })
          }
        }

        // Retaliation chain after denying
        if (state.businessNeighboringSectDenied && !state.businessSectRetaliationResolved && !hasRetaliation) {
          state.specialActions.push({
            name: 'Sect Retaliation',
            icon: '🔥',
            description: 'With them feeling anxious they decide to strike first. They burn down the merchants guild. Killing everyone inside, but you.',
            costText: 'None',
            tradeoffText: 'Progresses story.',
            disabled: false,
            callback: () => window.businessSectRetaliation()
          })
        }

        if (state.businessSectRetaliationResolved && !state.businessFoundMysteriousManual && !hasManual) {
          state.specialActions.push({
            name: 'Find Mysterious Manual in Rubble',
            icon: '📖',
            description: 'As you sit in the remains of the building, surrounded by charred bodies, something catches your eye. Something untouched by the flames. You pick it up.',
            costText: '15 stamina',
            tradeoffText: 'You get the heavenly demon manual.',
            disabled: !state.devIgnoreRequirements && state.stamina < 15,
            onStart: () => {
              if (!state.devIgnoreRequirements && state.stamina < 15) return false
              if (!state.devIgnoreRequirements) state.stamina -= 15
              return true
            },
            callback: () => window.businessFindMysteriousManualInRubble()
          })
        }

        // Heavenly Demon Opportunity (continues after finding the manual in rubble)
        const hasWatcher = state.specialActions.some(a => a?.name === 'Follow the Unseen Watcher')
        const hasOffer = state.specialActions.some(a => a?.name === 'Offer of a lifetime')
        const hasAccept = state.specialActions.some(a => a?.name === 'Accept')
        const hasDenyOffer = state.specialActions.some(a => a?.name === 'Deny')

        if (state.businessFoundMysteriousManual && !state.businessHeavenlyDemonOfferResolved) {
          if (!state.businessHeavenlyDemonWatcherFollowed && !hasWatcher) {
            state.specialActions.push({
              name: 'Follow the Unseen Watcher',
              icon: '🕯️',
              description: 'There was an unknown watcher who saw everything...and you. When you make eye contact he turns around and puts on his robe.',
              costText: '15 stamina',
              tradeoffText: 'You follow, unable to look away.',
              disabled: !state.devIgnoreRequirements && state.stamina < 15,
              onStart: () => {
                if (!state.devIgnoreRequirements && state.stamina < 15) return false
                if (!state.devIgnoreRequirements) state.stamina -= 15
                return true
              },
              callback: () => window.businessFollowUnseenWatcher()
            })
          }

          if (state.businessHeavenlyDemonWatcherFollowed && !state.businessHeavenlyDemonOfferMade && !hasOffer) {
            state.specialActions.push({
              name: 'Offer of a lifetime',
              icon: '🎭',
              description: 'As you follow behind the unknown watcher he turns around and asks for you to come out. What else is there to lose. He offers you ultimate power like no other.',
              costText: 'None',
              tradeoffText: 'A choice you cannot un-hear.',
              disabled: false,
              callback: () => window.businessOfferOfLifetime()
            })
          }

          if (state.businessHeavenlyDemonOfferMade && !state.businessHeavenlyDemonOfferResolved) {
            // Ensure the offer action does not linger once choices appear.
            state.specialActions = state.specialActions.filter(a => a?.name !== 'Offer of a lifetime')

            if (!hasAccept) {
              state.specialActions.push({
                name: 'Accept',
                icon: '😇',
                description: 'You accept. The path opens.',
                costText: 'None',
                tradeoffText: 'You join the Heavenly Demon Sect.',
                disabled: false,
                callback: () => window.businessAcceptHeavenlyDemonOffer()
              })
            }

            if (!hasDenyOffer) {
              state.specialActions.push({
                name: 'Deny',
                icon: '🚫',
                description: 'You reject the offer. You keep the manual — and your freedom.',
                costText: 'None',
                tradeoffText: 'You keep the Heavenly Demon Manual and can still use its moves.',
                disabled: false,
                callback: () => window.businessDenyHeavenlyDemonOffer()
              })
            }
          }
        }
      }

      // Negotiated branch continuation: Guild Retaliation -> Carpet Bomb
      const hasGuildRetaliation = state.specialActions.some(a => a?.name === 'Guild Retaliation')
      const hasCarpetBomb = state.specialActions.some(a => a?.name === 'Carpet Bomb')

      if (state.businessNeighboringSectNegotiated && !state.businessGuildRetaliationPrepared && !hasGuildRetaliation) {
        state.specialActions.push({
          name: 'Guild Retaliation',
          icon: '⚔️',
          description: 'You noticed the evil glint in the sect leader eyes when you shook hands. You decide you and the guild will strike first. But you need the funds first.',
          costText: '15 stamina',
          tradeoffText: '20% in income in your income cycle.',
          disabled: !state.devIgnoreRequirements && state.stamina < 15,
          onStart: () => {
            if (!state.devIgnoreRequirements && state.stamina < 15) return false
            if (!state.devIgnoreRequirements) state.stamina -= 15
            applyBusinessIncomeMultiplier(0.8)
            return true
          },
          callback: () => window.businessGuildRetaliation()
        })
      }

      if (state.businessGuildRetaliationPrepared && !state.businessCarpetBombDone && !hasCarpetBomb) {
        state.specialActions.push({
          name: 'Carpet Bomb',
          icon: '✈️',
          description: 'You may not outmatch the sect with magic, but you outmatch them with money. And money is essentially power. You hire a private military and bomb the sect\'s property killing all of the members.',
          costText: 'All of your silver, copper, gold, and low spirit stones',
          tradeoffText: 'Get to blow some people to smithereens.',
          disabled: false,
          callback: () => window.businessCarpetBomb()
        })
      }

      // Post–Carpet Bomb escalation chain
      const hasMerge = state.specialActions.some(a => a?.name === 'Merge With the Private Military')
      const hasBombTesting = state.specialActions.some(a => a?.name === 'Bomb Testing')
      const hasAntiMatter = state.specialActions.some(a => a?.name === 'Anti-Matter Creation')
      const hasWarping = state.specialActions.some(a => a?.name === 'Warping')
      const hasStormHeavens = state.specialActions.some(a => a?.name === 'Storm the Heavens')
      const hasClashGod = state.specialActions.some(a => a?.name === 'Clash with the Immortal God')

      if (state.businessCarpetBombDone && !state.businessMergedWithMilitary && !hasMerge) {
        state.specialActions.push({
          name: 'Merge With the Private Military',
          icon: '🎖️',
          description: 'Money and technology. How could that not equal power. The private military is thrilled to see the places you can take them too. The Player becomes a General in the military.',
          costText: 'None',
          tradeoffText: 'Progresses story.',
          disabled: false,
          callback: () => window.businessMergeWithPrivateMilitary()
        })
      }

      if (state.businessMergedWithMilitary && !state.businessBombTestingDone && !hasBombTesting) {
        state.specialActions.push({
          name: 'Bomb Testing',
          icon: '💣',
          description: 'The Guild funds the advanced bombs and the player gets to press the button. It\'s marvelous.',
          // Costs are dynamically computed each render (20 income cycles).
          costText: '20 income cycles worth of currency',
          tradeoffText: 'Spend the equivalent of 20 passive income cycles.',
          disabled: false,
          callback: () => window.businessBombTesting()
        })
      }

      if (state.businessBombTestingDone && !state.businessAntiMatterCreationDone && !hasAntiMatter) {
        state.specialActions.push({
          name: 'Anti-Matter Creation',
          icon: '⚛️',
          description: 'The stakes are raising. Power increasing 10 fold but something else is happening. Sky anomalies begin.',
          costText: '40 income cycles worth of currency',
          tradeoffText: 'Spend the equivalent of 40 passive income cycles.',
          disabled: false,
          callback: () => window.businessAntiMatterCreation()
        })
      }

      if (state.businessAntiMatterCreationDone && !state.businessWarpingDone && !hasWarping) {
        state.specialActions.push({
          name: 'Warping',
          icon: '🌀',
          description: 'The power to explore has increased. The player has access to anywhere and everywhere now. A certain entity will not forget this.',
          costText: '60 income cycles worth of currency',
          tradeoffText: 'Spend the equivalent of 60 passive income cycles.',
          disabled: false,
          callback: () => window.businessWarping()
        })
      }

      // Locked until Major Realm ≥ 15 (index 14)
      if (state.businessWarpingDone && !state.businessStormHeavensStarted && !hasStormHeavens) {
        const reqMet = state.cultivationMajorIndex >= 14
        state.specialActions.push({
          name: 'Storm the Heavens',
          icon: '⛈️',
          description: 'Your power has reached the threshold. You will storm the heavens.',
          costText: 'Requirement: Major Realm ≥ 15',
          tradeoffText: 'Begins the Heavens assault cinematic.',
          disabled: !reqMet,
          callback: () => window.businessStormTheHeavens()
        })
      }

      if (state.businessStormHeavensCinematicDone && !state.heavensImmortalGodClashStarted && !hasClashGod) {
        state.specialActions.push({
          name: 'Clash with the Immortal God',
          icon: '⚔️',
          description: 'You face the Immortal God.',
          costText: 'None',
          tradeoffText: 'A battle that decides everything.',
          disabled: false,
          callback: () => window.heavensClashImmortalGod()
        })
      }

      // Keep business action disabled/cost metadata in sync as resources change.
      const exp = state.specialActions.find(a => a?.name === 'Expansion Opportunity.')
      if (exp) {
        exp.costSilver = 150
        exp.costCopper = 250
        if (typeof exp.description === 'string' && exp.description && !/(^|\n)Outcome\s*:/i.test(exp.description)) {
          exp.description = `${exp.description.trim()}\nOutcome: Passive income improves significantly.`
        }
        exp.disabled = state.silver < 150 || state.copper < 250
      }

      const hire = state.specialActions.find(a => a?.name === 'Hiring Employees.')
      if (hire) {
        hire.costCopper = 700
        if (typeof hire.description === 'string' && hire.description && !/(^|\n)Outcome\s*:/i.test(hire.description)) {
          hire.description = `${hire.description.trim()}\nOutcome: Income cycle time reduced (faster payouts).`
        }
        hire.disabled = state.copper < 700
      }

      const st = state.specialActions.find(a => a?.name === 'Stability Isn’t Enough')
      if (st) {
        st.costCopper = 1000
        st.costSilver = 1000
        st.costGold = 50
        if (typeof st.description === 'string' && st.description && !/(^|\n)Outcome\s*:/i.test(st.description)) {
          st.description = `${st.description.trim()}\nOutcome: Massive steady returns per income cycle.`
        }
        st.disabled = state.copper < 1000 || state.silver < 1000 || state.gold < 50
      }

      const nm = state.specialActions.find(a => a?.name === 'No More Games')
      if (nm) {
        if (typeof nm.costText !== 'string' || !nm.costText.trim()) nm.costText = 'All copper, all silver, all gold'
        if (typeof nm.tradeoffText !== 'string' || !nm.tradeoffText.trim()) nm.tradeoffText = 'Spend all copper, silver, and gold.'
        if (typeof nm.description === 'string' && nm.description && !/(^|\n)Outcome\s*:/i.test(nm.description)) {
          nm.description = `${nm.description.trim()}\nOutcome: Huge gold and spirit-stone payouts per income cycle.`
        }
        nm.disabled = false
      }

      const deny = state.specialActions.find(a => a?.name === 'Deny Negoitation')
      if (deny) {
        deny.costText = '15 stamina'
        if (typeof deny.tradeoffText !== 'string' || !deny.tradeoffText.trim()) deny.tradeoffText = 'None.'
        deny.disabled = !state.devIgnoreRequirements && state.stamina < 15
      }

      const manual = state.specialActions.find(a => a?.name === 'Find Mysterious Manual in Rubble')
      if (manual) {
        manual.costText = '15 stamina'
        if (typeof manual.tradeoffText !== 'string' || !manual.tradeoffText.trim()) manual.tradeoffText = 'You get the heavenly demon manual.'
        manual.disabled = !state.devIgnoreRequirements && state.stamina < 15
      }

      const guildRet = state.specialActions.find(a => a?.name === 'Guild Retaliation')
      if (guildRet) {
        guildRet.costText = '15 stamina'
        if (typeof guildRet.tradeoffText !== 'string' || !guildRet.tradeoffText.trim()) guildRet.tradeoffText = '20% in income in your income cycle.'
        guildRet.disabled = !state.devIgnoreRequirements && state.stamina < 15
      }

      // Cycle-cost business actions: compute exact per-currency costs each render.
      const applyCycleCostMeta = (actionName, cycles) => {
        const a = state.specialActions.find(x => x?.name === actionName)
        if (!a) return
        const cost = getBusinessIncomeCycleCost(cycles)

        a.costCopper = cost.copper
        a.costSilver = cost.silver
        a.costGold = cost.gold
        a.costSpiritStonesLow = cost.spiritStonesLow
        a.costSpiritStonesMid = cost.spiritStonesMid
        a.costSpiritStonesHigh = cost.spiritStonesHigh

        // Force tooltips to show the real, computed costs.
        a.costText = ''
        a.tradeoffText = ''
        a.disabled = !canAffordCostObject(cost)
      }

      applyCycleCostMeta('Bomb Testing', 20)
      applyCycleCostMeta('Anti-Matter Creation', 40)
      applyCycleCostMeta('Warping', 60)
    }
  }
  
  actionsPanel.innerHTML = `
    <div class="panel-header" onmousedown="window.startDrag(event, 'actions-panel')">
      <h3>${renderUiIcon('actions', { title: 'Actions' })} Actions</h3>
      <span class="drag-hint">✥ Drag to move ✥</span>
    </div>
    <div class="panel-content">
    <div class="actions-columns">
      <div class="actions-section">
        <h4>Repeatable Actions</h4>
        <div class="actions-list">
          ${state.repeatableActions.length === 0 ? '<div class="actions-empty">None available</div>' : ''}
          ${state.repeatableActions.map((action, index) => {
            const key = getActionKey('repeatable', action)
            const cooldownParts = []
            if (action.name === 'Gather Materials for Village' && state.villageMaterialsCooldown > 0) cooldownParts.push(`Cooldown: ${state.villageMaterialsCooldown}s`)
            if (action.name === 'Searching and Conquering' && state.searchingAndConqueringCooldown > 0) cooldownParts.push(`Cooldown: ${state.searchingAndConqueringCooldown}s`)

            const cd = getActionCooldownRemainingSeconds(key)
            if (cd > 0) cooldownParts.push(`Cooldown: ${cd}s`)

            const cooldownText = cooldownParts.length ? `<br><small>${cooldownParts.join(' • ')}</small>` : ''
            const progress = getActionProgress(key)
            const progressPct = `${(progress * 100).toFixed(1)}%`
            const isRunning = isActionRunning(key)
            const tipText = getActionTooltipText(action)
            const descJson = tipText ? JSON.stringify(String(tipText)) : null
            const hoverAttrs = descJson
              ? ` onmouseenter='window.showActionTooltip(event, ${descJson})' onmousemove="window.moveActionTooltip(event)" onmouseleave="window.hideActionTooltip()"`
              : ''
            const isOnCooldown = cd > 0
            return `
              <button class="action-button" data-action-key="${escapeHtml(String(key))}" data-running="${isRunning ? 1 : 0}" ${isRunning ? 'aria-busy="true"' : ''} style="--progressPct:${progressPct};" onclick="window.executeAction('repeatable', ${index})" ${((action.disabled || isOnCooldown) && !state.devIgnoreRequirements) ? 'disabled' : ''}${hoverAttrs}>
                <span class="action-button-label">${escapeHtml(getActionDisplayName(action.name))}${cooldownText}</span>
              </button>
            `
          }).join('')}
        </div>
      </div>
      
      <div class="actions-section">
        <h4>Special Actions</h4>
        <div class="actions-list">
          ${state.specialActions.length === 0 ? '<div class="actions-empty">None available</div>' : ''}
          ${state.specialActions.map((action, index) => `
            ${(() => {
              const key = getActionKey('special', action)
              const cd = getActionCooldownRemainingSeconds(key)
              const progress = getActionProgress(key)
              const progressPct = `${(progress * 100).toFixed(1)}%`
              const isRunning = isActionRunning(key)
              const tipText = getActionTooltipText(action)
              const descJson = tipText ? JSON.stringify(String(tipText)) : null
              const hoverAttrs = descJson
                ? ` onmouseenter='window.showActionTooltip(event, ${descJson})' onmousemove="window.moveActionTooltip(event)" onmouseleave="window.hideActionTooltip()"`
                : ''
              const isOnCooldown = cd > 0
              const cdText = cd > 0 ? `<br><small>Cooldown: ${cd}s</small>` : ''
              return `
                <button class="action-button special" data-action-key="${escapeHtml(String(key))}" data-running="${isRunning ? 1 : 0}" ${isRunning ? 'aria-busy="true"' : ''} style="--progressPct:${progressPct};" onclick="window.executeAction('special', ${index})" ${((action.disabled || isOnCooldown) && !state.devIgnoreRequirements) ? 'disabled' : ''}${hoverAttrs}>
                  <span class="action-button-label">${escapeHtml(getActionDisplayName(action.name))}${cdText}</span>
                </button>
              `
            })()}
          `).join('')}
        </div>
      </div>
    </div>
    </div>
  `

  // Keep cooldown text and enable/disable states fresh while the Actions panel is open.
  try { ensureActionsCooldownUiLoop() } catch (_) {}
  
  if (isNewPanel) {
    // Panel was just created
  }
}

let __actionsCooldownUiTimer = null

function ensureActionsCooldownUiLoop() {
  const open = Boolean(state.activeSidePanels && state.activeSidePanels.has('actions'))
  if (!open) {
    if (__actionsCooldownUiTimer) {
      try { clearInterval(__actionsCooldownUiTimer) } catch (_) {}
      __actionsCooldownUiTimer = null
    }
    return
  }

  // Only run the loop if there's at least one visible action on cooldown.
  const lists = [
    ...(Array.isArray(state.repeatableActions) ? state.repeatableActions.map(a => getActionKey('repeatable', a)) : []),
    ...(Array.isArray(state.specialActions) ? state.specialActions.map(a => getActionKey('special', a)) : [])
  ]
  const hasCd = lists.some(k => getActionCooldownRemainingMs(k) > 0)

  if (!hasCd) {
    if (__actionsCooldownUiTimer) {
      try { clearInterval(__actionsCooldownUiTimer) } catch (_) {}
      __actionsCooldownUiTimer = null
    }
    return
  }

  if (__actionsCooldownUiTimer) return

  __actionsCooldownUiTimer = setInterval(() => {
    try {
      const stillOpen = Boolean(state.activeSidePanels && state.activeSidePanels.has('actions'))
      if (!stillOpen) {
        try { clearInterval(__actionsCooldownUiTimer) } catch (_) {}
        __actionsCooldownUiTimer = null
        return
      }

      const keys = [
        ...(Array.isArray(state.repeatableActions) ? state.repeatableActions.map(a => getActionKey('repeatable', a)) : []),
        ...(Array.isArray(state.specialActions) ? state.specialActions.map(a => getActionKey('special', a)) : [])
      ]
      const any = keys.some(k => getActionCooldownRemainingMs(k) > 0)
      if (!any) {
        try { clearInterval(__actionsCooldownUiTimer) } catch (_) {}
        __actionsCooldownUiTimer = null
        return
      }

      // Re-render to refresh countdown text and disabled state.
      renderActionsPanel()
    } catch (_) {}
  }, 1000)
}

function renderFateRoll(container) {
  const profileName = (state.playerName && String(state.playerName).trim()) ? String(state.playerName).trim() : 'Wanderer'
  const profileGender = (state.playerGender === 'male' || state.playerGender === 'female') ? state.playerGender : null

  container.innerHTML = `
    <div class="fate-screen">
      <h1>Fate Roll</h1>
      <div class="fate-results">
        <div class="fate-section bloodline-section">
          <h2>Bloodline</h2>
          <div class="bloodline-name">${state.bloodline.name}</div>
          <div class="bloodline-tier">Tier ${formatNumber(state.bloodline.tier)}</div>
          <div class="multipliers">
            <div>Qi: ${formatMultiplier(state.bloodline.qiMult)}</div>
            <div>Health: ${formatMultiplier(state.bloodline.hpMult)}</div>
            <div>Strength: ${formatMultiplier(state.bloodline.strMult)}</div>
          </div>
        </div>

        <div class="fate-section affinity-section">
          <h2>Elemental Affinities</h2>
          <div class="magic-circle">
            <svg class="pentagram" viewBox="0 0 100 100" aria-label="Pentagram" role="img">
              <defs>
                <radialGradient id="flameGrad" cx="50%" cy="50%" r="60%">
                  <stop offset="0%" style="stop-color: var(--accent); stop-opacity: 0.0" />
                  <stop offset="55%" style="stop-color: var(--accent); stop-opacity: 0.55" />
                  <stop offset="100%" style="stop-color: var(--maroon); stop-opacity: 0.0" />
                </radialGradient>
                <filter id="flameJitter" x="-35%" y="-35%" width="170%" height="170%">
                  <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="7" result="noise" />
                  <feDisplacementMap in="SourceGraphic" in2="noise" scale="10" xChannelSelector="R" yChannelSelector="G" />
                  <feGaussianBlur stdDeviation="0.4" />
                </filter>
              </defs>

              <!-- Fiery outer spread -->
              <circle cx="50" cy="50" r="47" fill="url(#flameGrad)" filter="url(#flameJitter)" opacity="0.9" />

              <!-- Pentagram ring (tips touch this) -->
              <circle cx="50" cy="50" r="37" fill="none" stroke="var(--ink)" stroke-width="3" opacity="0.75" />

              <!-- Regular pentagram (inscribed) -->
              <path
                d="M50 13 L71.749 79.933 L14.811 38.567 L85.189 38.567 L28.251 79.933 Z"
                fill="none"
                stroke="var(--ink)"
                stroke-width="2.6"
                stroke-linejoin="round"
                opacity="0.88"
              />

              <!-- Inner circle -->
              <circle cx="50" cy="50" r="28" fill="none" stroke="var(--ink)" stroke-width="1.5" opacity="0.35" />
            </svg>
            <div class="affinity-display">
              ${state.affinities.map((aff, idx) => {
                const affinityLower = aff.type.toLowerCase().replace(/\s+/g, '')
                const iconSrc = getAffinityAssetIconSrc(aff.type)
                // Place affinity icons on the 5 tips of the pentagram (regular 5-point layout)
                const tipOrderByCount = {
                  1: [0],
                  2: [0, 2],
                  3: [0, 2, 4],
                  4: [0, 1, 3, 4],
                  5: [0, 1, 2, 3, 4]
                }
                const tipOrder = tipOrderByCount[state.affinities.length] || tipOrderByCount[5]
                const tipIndex = tipOrder[idx] ?? (idx % 5)
                // Use the same exact geometry as the SVG pentagram so icons land on the tips
                const angle = ((tipIndex * 360) / 5) - 90 // Start at top tip
                const tipRadiusInSvg = 37 // Must match the ring radius above (viewBox units)
                const pentagramSizePct = 78 // Must match .pentagram width/height in CSS
                const svgHalfPct = pentagramSizePct / 2
                const tipRadiusPct = svgHalfPct * (tipRadiusInSvg / 50)
                const x = 50 + tipRadiusPct * Math.cos(angle * Math.PI / 180)
                const y = 50 + tipRadiusPct * Math.sin(angle * Math.PI / 180)
                return `
                  <div class="affinity-item ${idx === 0 ? 'primary' : ''}" style="left: ${x}%; top: ${y}%;">
                    <img src="${escapeHtml(iconSrc || (`assets/${affinityLower}.png`))}" class="affinity-icon" alt="${aff.type}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'">
                    <div class="affinity-icon-fallback">${renderUiIcon('spark')}</div>
                    <div class="affinity-name">${aff.type}</div>
                    <div class="affinity-score">${formatNumber(aff.score)}</div>
                  </div>
                `
              }).join('')}
            </div>
          </div>
          <div class="primary-affinity-label">
            Primary Affinity: <span>${state.primaryAffinity}</span> (${formatNumber(state.affinities[0]?.score || 0)})
          </div>
          <div class="multipliers">
            <div>Higher scores boost manual effectiveness</div>
            <div>Multiple affinities unlock different sect paths</div>
          </div>
        </div>

        <div class="fate-section fate-profile-inline" aria-label="Player Profile">
          <div class="fate-profile-top">
            ${profileGender ? renderCultivatorSilhouette(profileGender) : '<div class="fate-profile-unknown">?</div>'}
          </div>
          <div class="fate-profile-bottom">
            <div class="fate-profile-name">${escapeHtml(profileName)}</div>
          </div>
        </div>

        <div class="fate-section roots-section">
          <h2>Spiritual Roots</h2>
          <div class="root-count">${state.spiritualRoots.count} Root${state.spiritualRoots.count > 1 ? 's' : ''}</div>
          <div class="multipliers">
            <div>Qi Multiplier: ${formatMultiplier(state.spiritualRoots.qiMult)}</div>
          </div>
        </div>

        <div class="fate-section luck-section">
          <h2>Story Luck</h2>
          <div class="root-count">${formatNumber(state.luck)}</div>
          <div class="multipliers">
            <div>Unlocks special story paths</div>
          </div>
        </div>
      </div>
      
      <div class="fate-actions">
        ${state.rebirthUpgrades?.canRerollFate && state.rerollsRemaining > 0 ? `<button onclick="window.rerollFate()">${renderUiIcon('dice', { title: 'Reroll' })} Reroll (${state.rerollsRemaining} left)</button>` : ''}
        <button onclick="window.startGame()">Continue →</button>
      </div>
    </div>
  `
}

function renderFarming(container) {
  container.innerHTML = `
    <div class="game-screen">
      <div class="character-display">
        <div class="bloodline-portrait-wrap">${renderBloodlinePortrait(state.bloodline.name)}</div>
        <div class="character-info">
          <div><strong>${state.bloodline.name}</strong></div>
          <div>${state.spiritualRoots.count} Spiritual Root${state.spiritualRoots.count > 1 ? 's' : ''}</div>
        </div>
        <div class="bloodline-lore">${getBloodlineLore(state.bloodline.name)}</div>
      </div>
      
      <div class="game-content-layout">
        <div class="log">
          <h3>Activity Log</h3>
          <div id="game-log"></div>
        </div>
        
        <div class="panels-container">
          ${renderCultivationInfo()}
        </div>
      </div>
    </div>
  `
}

function renderFakeImmortal(container) {
  container.innerHTML = `
    <div class="game-screen">
      <div class="character-display">
        <div class="character-silhouette"><img class="character-silhouette-img" src="assets/Cultivation_silhouette_new_mask.png" alt="" /></div>
        <div class="character-info">
          <div><strong>Alchemy Apprentice Phase</strong></div>
          <div>A chance encounter with a "master"</div>
        </div>
      </div>
      
      <div class="action-panel">
        <h2>The "Immortal" Cultivator</h2>
        <p class="story-text">"Greetings, mortal! I sense great potential within you. For a mere 30 copper coins, I can teach you the ancient arts of alchemy! You shall become my... assistant. A great honor!"</p>
        
        <div class="button-group">
          <button onclick="window.acceptImmortal()">
            Accept (Pay 30 Copper)
          </button>
          
          <button onclick="window.rejectImmortal()">
            Reject
          </button>
        </div>
      </div>
    </div>
  `
}

function ensureHdDetourState() {
  if (!state.hdDetour || typeof state.hdDetour !== 'object') {
    state.hdDetour = {
      unlocked: false,
      choseDifferentPath: false,
      exploredCave: false,
      caveChoice: null,
      startedFamily: false,
      groceriesCount: 0,
      returnHomeAvailable: false,
      demonCinematicResolved: false
    }
  }
}

// ---------------------------------------------------------------------------
// ORTHODOX HIDE CHAIN STATE
//
// Stages:
// - 'discover' : player fled the demon; can begin searching
// - 'saved'    : next step costs stamina; leads to pledge choice
// - 'loyalty'  : pledge step (no stamina cost)
// - 'joined'   : forced Orthodox sect membership; leaving is disabled
// ---------------------------------------------------------------------------

function ensureOrthodoxHideState() {
  if (!state.orthodoxHide || typeof state.orthodoxHide !== 'object') {
    state.orthodoxHide = { stage: null }
  }
  const st = state.orthodoxHide.stage
  const s = (st === null || typeof st === 'string') ? String(st || '') : ''
  const ok = s === '' || s === 'discover' || s === 'saved' || s === 'loyalty' || s === 'joined'
  state.orthodoxHide.stage = ok && s ? s : null
}

// ============================================================================
// ORTHODOX TRUE ENDING STATE
// ============================================================================
function ensureOrthodoxWarState() {
  if (!Number.isFinite(state.orthodoxWarStage) || state.orthodoxWarStage < 0) state.orthodoxWarStage = 0
  state.orthodoxWarStage = Math.floor(state.orthodoxWarStage)
  if (typeof state.orthodoxTrueEndingDone !== 'boolean') state.orthodoxTrueEndingDone = false
}

const ORTHODOX_TRUE_ENDING_REBIRTH_POINTS = 50

window.orthodoxWarCouncil = () => {
  ensureOrthodoxWarState()
  if (!state.joinedOrthodoxSect) return
  if (state.runEnded) return
  state.orthodoxWarStage = 1
  removeSpecialActionsByName(['Orthodox War Council'])
  log('☯️ The Orthodox Sect convenes. A war is declared against the Demonic Monarch Sect.')
  render()
  saveGame()
}

window.orthodoxWarMarchToFront = () => {
  ensureOrthodoxWarState()
  if (!state.joinedOrthodoxSect) return
  if (state.runEnded) return
  state.orthodoxWarStage = 2
  removeSpecialActionsByName(['March to the Front'])
  log('🛡️ You march with the righteous armies. The air is thick with killing intent.')
  render()
  saveGame()
}

window.orthodoxWarBreakTheDemonicLines = () => {
  ensureOrthodoxWarState()
  if (!state.joinedOrthodoxSect) return
  if (state.runEnded) return
  state.orthodoxWarStage = 3
  removeSpecialActionsByName(['Break the Demonic Lines'])
  log('You break the demonic lines. Countless lives are saved — countless more are lost.')
  render()
  saveGame()
}

window.orthodoxWarConfrontTheMonarch = () => {
  ensureOrthodoxWarState()
  if (!state.joinedOrthodoxSect) return
  if (state.runEnded) return
  state.orthodoxWarStage = 4
  removeSpecialActionsByName(['Confront the Demonic Monarch'])
  log('👁️ You step into the heart of enemy territory. The Demonic Monarch turns toward you.')
  render()
  saveGame()
}

window.orthodoxWarShatterTheMandate = () => {
  ensureOrthodoxWarState()
  if (!state.joinedOrthodoxSect) return
  if (state.runEnded) return
  state.orthodoxWarStage = 5
  removeSpecialActionsByName(['Shatter the Mandate of Hell'])
  log('🕯️ You shatter the Mandate of Hell. The world holds its breath for what comes next.')
  render()
  saveGame()
}

window.orthodoxTrueEndingClaimRebirth = () => {
  try { window.closeStoryDialog() } catch (_) {}
  if (state.runEnded) return
  // Award is handled via story milestone reconciliation; claiming should not end the run.
  try { reconcileRebirthPointsFromStoryProgress() } catch (_) {}
  render()
  saveGame()
}

window.orthodoxTheWorldEnds = () => {
  ensureOrthodoxWarState()
  if (!state.joinedOrthodoxSect) return
  if (state.runEnded) return

  // Gate: Major Realm ≥ 15 (index 14)
  if (clampNonNegativeInt(state.cultivationMajorIndex) < 14) return

  state.orthodoxWarStage = 6
  state.orthodoxTrueEndingDone = true
  removeSpecialActionsByName(['The world ends.'])

  const sentences = [
    'The Orthodox Sect and the Demonic Monarch Sect collide. The war consumes everything.',
    'You do not fight to win. You fight to end it.',
    'You strike the Earth’s core. It shatters like glass.',
    'The world ends — not with noise, but with silence.',
    'You drift through space, immortal and alone.',
    'Time passes. The stars forget your name.',
    'Then you crash into a new world.',
    'A planet of waifus. A second chance.',
    'TRUE ENDING',
    'best choices of all time'
  ]

  openStoryDialog(
    'TRUE_ENDING',
    'True Ending',
    sentences,
    [
      { label: `Claim ${ORTHODOX_TRUE_ENDING_REBIRTH_POINTS} Rebirth Points.`, onClick: 'window.orthodoxTrueEndingClaimRebirth()' }
    ],
    {
      mode: 'PAGE_SWAP',
      sentencesPerPage: 1,
      pageHoldMs: 9000,
      transitionMs: 1100,
      choicesFadeInDelayMs: 950
    }
  )
}

function ensureDmFateState() {
  if (!state.dmFate || typeof state.dmFate !== 'object') {
    state.dmFate = { unlocked: false, stage: null }
  }
  if (typeof state.dmFate.unlocked !== 'boolean') state.dmFate.unlocked = false
  if (state.dmFate.stage !== null && typeof state.dmFate.stage !== 'string') state.dmFate.stage = null
}

function upsertSpecialActionByName(action) {
  const name = String(action?.name || '')
  if (!name) return
  const idx = state.specialActions.findIndex(a => a?.name === name)
  if (idx === -1) state.specialActions.push(action)
  else state.specialActions[idx] = { ...state.specialActions[idx], ...action }
}

function isDemonMonarchSectLeader() {
  if (!state.hasJoinedSect || state.currentSect !== 'Demon Monarch') return false
  return String(state.sectRankLayer || '') === 'leader'
}

function removeSpecialActionsByName(names) {
  const set = new Set((Array.isArray(names) ? names : []).map(String))
  state.specialActions = (Array.isArray(state.specialActions) ? state.specialActions : []).filter(a => !set.has(String(a?.name || '')))
}

// ============================================================================
// DEMONIC MONARCH: FATE CHAIN
// ============================================================================
window.dmDestroySectFromWithin = () => {
  ensureDmFateState()
  state.dmFate.unlocked = true
  state.dmFate.stage = 'awaitLeader'

  removeSpecialActionsByName([
    'Destroy the Sect from Within.',
    'Decide Fate of the Sect',
    'Slaughter Sect.',
    'Stay as a demon.',
    'Find the demon who killed your family.',
    'Capture the demon.',
    'End the life of the demon.',
    'To end the demons is to end myself.'
  ])

  upsertSpecialActionByName({
    name: 'Decide Fate of the Sect',
    icon: '⚖️',
    description: 'Requirement: Reach Sect Leader rank in the Demonic Monarch Sect',
    disabled: !isDemonMonarchSectLeader(),
    onStart: () => isDemonMonarchSectLeader(),
    callback: () => window.dmDecideFateOfSect()
  })

  log('🗡️ You move through the shadows. The sect will never see it coming.')
  render()
  saveGame()
}

window.dmDecideFateOfSect = () => {
  ensureDmFateState()
  if (!isDemonMonarchSectLeader()) {
    render()
    saveGame()
    return
  }

  state.dmFate.stage = 'choose'
  removeSpecialActionsByName([
    'Decide Fate of the Sect',
    'Slaughter Sect.',
    'Stay as a demon.',
    'Find the demon who killed your family.',
    'Capture the demon.',
    'End the life of the demon.',
    'To end the demons is to end myself.'
  ])

  upsertSpecialActionByName({
    name: 'Slaughter Sect.',
    icon: '🩸',
    disabled: state.stamina < 15,
    onStart: () => {
      if (state.stamina < 15) return false
      state.stamina -= 15
      return true
    },
    callback: () => window.dmSlaughterSect()
  })

  upsertSpecialActionByName({
    name: 'Stay as a demon.',
    icon: '😈',
    disabled: state.stamina < 15,
    onStart: () => {
      if (state.stamina < 15) return false
      state.stamina -= 15
      return true
    },
    callback: () => window.dmStayAsDemon()
  })

  render()
  saveGame()
}

window.dmSlaughterSect = () => {
  ensureDmFateState()
  state.dmFate.stage = 'slaughterFinal'

  removeSpecialActionsByName([
    'Slaughter Sect.',
    'Stay as a demon.',
    'Find the demon who killed your family.',
    'Capture the demon.',
    'End the life of the demon.'
  ])

  upsertSpecialActionByName({
    name: 'To end the demons is to end myself.',
    icon: '🕯️',
    disabled: false,
    callback: () => window.dmEndDemonsEndMyself()
  })

  render()
  saveGame()
}

window.dmEndDemonsEndMyself = () => {
  ensureDmFateState()
  state.dmFate.stage = 'dead'
  removeSpecialActionsByName(['To end the demons is to end myself.'])

  openStoryDialog(
    'ENDING',
    'Good Ending — Self-Extinction',
    [
      '🕯️ To end the demons is to end yourself.',
      'You cut the rot out at the root — and the blade does not stop at the target.',
      'The world survives you. That was the price.'
    ],
    [
      { label: 'Continue.', onClick: 'window.closeStoryDialog()' }
    ],
    {
      mode: 'PAGE_SWAP',
      sentencesPerPage: 1,
      pageHoldMs: 9000,
      transitionMs: 1100,
      choicesFadeInDelayMs: 950
    }
  )

  render()
  saveGame()
}

window.dmStayAsDemon = () => {
  ensureDmFateState()
  state.dmFate.stage = 'stay_find'

  removeSpecialActionsByName([
    'Slaughter Sect.',
    'Stay as a demon.',
    'To end the demons is to end myself.',
    'Find the demon who killed your family.',
    'Capture the demon.',
    'End the life of the demon.'
  ])

  upsertSpecialActionByName({
    name: 'Find the demon who killed your family.',
    icon: '🕵️',
    disabled: state.stamina < 15,
    onStart: () => {
      if (state.stamina < 15) return false
      state.stamina -= 15
      return true
    },
    callback: () => window.dmFindFamilyKiller()
  })

  render()
  saveGame()
}

window.dmFindFamilyKiller = () => {
  ensureDmFateState()
  state.dmFate.stage = 'stay_capture'
  removeSpecialActionsByName(['Find the demon who killed your family.'])

  upsertSpecialActionByName({
    name: 'Capture the demon.',
    icon: '⛓️',
    disabled: state.stamina < 15,
    onStart: () => {
      if (state.stamina < 15) return false
      state.stamina -= 15
      return true
    },
    callback: () => window.dmCaptureDemon()
  })

  render()
  saveGame()
}

window.dmCaptureDemon = () => {
  ensureDmFateState()
  state.dmFate.stage = 'stay_end'
  removeSpecialActionsByName(['Capture the demon.'])

  upsertSpecialActionByName({
    name: 'End the life of the demon.',
    icon: '🗡️',
    disabled: state.stamina < 15,
    onStart: () => {
      if (state.stamina < 15) return false
      state.stamina -= 15
      return true
    },
    callback: () => window.dmEndLifeOfDemon()
  })

  render()
  saveGame()
}

let __bloodEndingInterval = null
let __bloodEndingTimeout = null

function stopBloodEndingTimers() {
  if (__bloodEndingInterval) {
    try { clearInterval(__bloodEndingInterval) } catch (_) {}
    __bloodEndingInterval = null
  }
  if (__bloodEndingTimeout) {
    try { clearTimeout(__bloodEndingTimeout) } catch (_) {}
    __bloodEndingTimeout = null
  }
}

function ensureBloodEndingOverlay() {
  let el = document.getElementById('blood-ending-overlay')
  if (el) return el
  el = document.createElement('div')
  el.id = 'blood-ending-overlay'
  el.className = 'blood-ending-overlay'
  el.innerHTML = `<div class="blood-ending-splatters" aria-hidden="true"></div>`
  document.body.appendChild(el)
  return el
}

function addBloodSplatter(host) {
  const d = document.createElement('div')
  d.className = 'blood-splatter'
  const size = 60 + Math.floor(Math.random() * 220)
  const x = Math.floor(Math.random() * 100)
  const y = Math.floor(Math.random() * 100)
  const rot = -45 + Math.floor(Math.random() * 90)
  d.style.left = `${x}%`
  d.style.top = `${y}%`
  d.style.width = `${size}px`
  d.style.height = `${Math.max(40, Math.floor(size * (0.55 + Math.random() * 0.8)))}px`
  d.style.setProperty('--rot', `${rot}deg`)
  host.appendChild(d)
  // Trigger transition
  setTimeout(() => {
    try { d.classList.add('show') } catch (_) {}
  }, 10)
}

function runBloodEndingAnimation(onDone) {
  stopBloodEndingTimers()
  const el = ensureBloodEndingOverlay()
  const host = el.querySelector('.blood-ending-splatters')
  if (host) host.innerHTML = ''

  el.classList.remove('fade-out')
  el.classList.add('active')

  if (host) {
    addBloodSplatter(host)
    __bloodEndingInterval = setInterval(() => {
      try { addBloodSplatter(host) } catch (_) {}
    }, 2000)
  }

  __bloodEndingTimeout = setTimeout(() => {
    try {
      stopBloodEndingTimers()
      el.classList.add('fade-out')
      setTimeout(() => {
        try {
          el.classList.remove('active')
          el.classList.remove('fade-out')
          if (host) host.innerHTML = ''
        } catch (_) {}
        try { if (typeof onDone === 'function') onDone() } catch (_) {}
      }, 900)
    } catch (_) {
      try { if (typeof onDone === 'function') onDone() } catch (_) {}
    }
  }, 20000)
}

window.dmEndLifeOfDemon = () => {
  ensureDmFateState()
  removeSpecialActionsByName(['End the life of the demon.'])
  runBloodEndingAnimation(() => {
    try {
      ensureDmFateState()
      state.dmFate.stage = 'done'

      openStoryDialog(
        'ENDING',
        'Neutral Ending — Blood Price',
        [
          'The deed is done.',
          'Revenge is a clean word for a dirty act.',
          'The screaming stops. The stain does not.'
        ],
        [
          { label: 'Continue.', onClick: 'window.closeStoryDialog()' }
        ],
        {
          mode: 'PAGE_SWAP',
          sentencesPerPage: 1,
          pageHoldMs: 8500,
          transitionMs: 1100,
          choicesFadeInDelayMs: 950
        }
      )

      render()
      saveGame()
    } catch (_) {}
  })
  render()
  saveGame()
}

// ============================================================================
// Shared run-ending helper (used by multiple endings)
// ============================================================================
window.endRunToRebirth = (options) => {
  try { window.closeStoryDialog() } catch (_) {}
  if (state.runEnded) return

  const opts = (options && typeof options === 'object') ? options : {}
  const actionName = String(opts.actionName || 'Rebirth.')
  const actionIcon = String(opts.actionIcon || '🔁')
  const actionDescription = String(opts.actionDescription || 'Start a new life. (Keeps Rebirth Points.)')

  state.runEnded = true
  state.isResting = false
  state.isCultivating = false
  state.repeatableActions = []
  state.specialActions = []
  upsertSpecialActionByName({
    name: actionName,
    icon: actionIcon,
    description: actionDescription,
    disabled: false,
    callback: () => window.beginRebirth()
  })
  render()
  saveGame()
}

// ============================================================================
// DEMON PATH: COSMIC FINALE (PURE ENERGY)
// ============================================================================
function startDemonCosmicFinaleCombat() {
  if (state.inCombat) return
  if (state.demonCosmicFinaleDone) return

  // Gate: must be at the peak of the demonic ladder.
  if (!state.isDemonPath || clampNonNegativeInt(state.cultivationMajorIndex) < 9) return

  // Scale off the player's projected stats at Demonic Major Realm 10 (index 9).
  const projected = getProjectedPlayerCombatStatsAtMajorRealm(9)
  const bossHp = Math.max(1, Math.floor(clampNonNegativeInt(projected.maxHealth) * 1.35))
  const bossStr = Math.max(1, Math.floor(clampNonNegativeInt(projected.strength) * 1.25))

  state.combatContext = { type: 'demonCosmicFinale' }
  state.questReturnPhase = state.phase
  closePanelsForCombatStart()
  state.inCombat = true
  state.enemy = applyHardModeEnemyScaling({
    name: 'Being of Pure Energy',
    icon: '✨',
    health: bossHp,
    maxHealth: bossHp,
    strength: bossStr
  })
  state.phase = 'COMBAT'
  ensureCombatLoop()

  log('🌌 You tear at reality itself. The multiverse answers.')
  log('A Being of Pure Energy descends — silent, absolute.')
}

window.dmRendMultiverse = () => {
  if (state.inCombat) return
  if (state.demonCosmicFinaleDone) return

  // Remove the button before starting combat to avoid double-starts.
  removeSpecialActionsByName(['Rend the Multiverse.'])
  startDemonCosmicFinaleCombat()
  render()
  saveGame()
}

function handleDemonCosmicFinaleCombatVictory(_enemyName) {
  const ctx = state.combatContext
  if (!ctx || ctx.type !== 'demonCosmicFinale') return
  state.combatContext = null

  state.demonCosmicFinaleDone = true
  removeSpecialActionsByName(['Rend the Multiverse.'])

  openStoryDialog(
    'ENDING',
    'Demonic Finale',
    [
      '💥 The energy form fractures into impossible colors.',
      '🜏 You do not ascend. You overwrite the rules.',
      '🌌 Reality tears. Somewhere, something screams without a mouth.',
      '…and then there is only you.'
    ],
    [
      { label: 'Continue.', onClick: 'window.closeStoryDialog()' }
    ],
    {
      mode: 'PAGE_SWAP',
      sentencesPerPage: 1,
      pageHoldMs: 8500,
      transitionMs: 1100,
      choicesFadeInDelayMs: 950
    }
  )

  render()
  saveGame()
}

window.demonCosmicEndingEndRun = () => {
  window.closeStoryDialog()
}

function handleDemonCosmicFinaleCombatDefeat() {
  const ctx = state.combatContext
  if (!ctx || ctx.type !== 'demonCosmicFinale') return false

  state.inCombat = false
  state.enemy = null
  state.combatContext = null
  state.phase = state.questReturnPhase || 'FARMING'
  state.questReturnPhase = null
  ensureCombatLoop()

  log('🕳️ You are erased at the edge of existence — then forced back into form.')
  log('The Being of Pure Energy remains unbroken.')

  render()
  saveGame()
  return true
}

function handleDemonCosmicFinaleCombatFlee() {
  const ctx = state.combatContext
  if (!ctx || ctx.type !== 'demonCosmicFinale') return false

  exitCombatToReturnPhase()
  state.health = Math.max(1, clampNonNegativeInt(state.health))

  log('You retreat. The multiverse does not forget you tried.')

  render()
  saveGame()
  return true
}

// ============================================================================
// DEMON PATH: CORRUPTION FARMING (REPEATABLE ACTIONS)
// ============================================================================
window.slaughterSheep = () => {
  if (!state.isDemonPath) return
  const gain = randomIntInclusive(1, 5)
  log('🐑 You slaughter sheep without hesitation.')
  addCorruptionPercent(gain, 'Slaughter Sheep')
  updateCombatStats()
  render()
  saveGame()
}

window.slaughterRandomCivilians = () => {
  if (!state.isDemonPath) return
  const gain = randomIntInclusive(3, 5)
  log('🔪 You slaughter random civilians. The screams fade, but the power remains.')
  addCorruptionPercent(gain, 'Slaughter Civilians')
  updateCombatStats()
  render()
  saveGame()
}

// ============================================================================
// DEMON PATH: CABIN REVENGE CHAIN (RUN-ENDING)
// ============================================================================
window.dmCabinSlaughterFamily = () => {
  if (state.runEnded) return
  if (!state.isDemonPath) return

  state.demonCabinRevengeStage = 'slaughter'
  removeSpecialActionsByName(['Slaughter the family in the cabin.'])
  log('You slaughter the family in the cabin. Silence follows.')
  render()
  saveGame()
}

window.dmCabinFamilyManReturns = () => {
  if (state.runEnded) return
  if (!state.isDemonPath) return

  state.demonCabinRevengeStage = 'returns'
  removeSpecialActionsByName(['The family man returns.'])
  log('🚪 The family man returns and finds what you left behind.')
  log('🤝 You offer him a place at your side — vengeance redirected into loyalty.')
  render()
  saveGame()
}

window.dmCabinRecruitFamilyMan = () => {
  if (state.runEnded) return
  if (!state.isDemonPath) return

  state.demonCabinRevengeStage = 'recruit'
  removeSpecialActionsByName(['Recruit the family man.'])
  log('🤝 He accepts. The hatred in his eyes becomes a weapon you can point.')
  render()
  saveGame()
}

window.dmCabinSuccessfulRecruitment = () => {
  if (state.runEnded) return
  if (!state.isDemonPath) return

  state.demonCabinRevengeStage = 'recruited'
  removeSpecialActionsByName(['Successful recruitment.'])
  log('Successful recruitment.')
  render()
  saveGame()
}

window.dmCabinStayFocused = () => {
  if (state.runEnded) return
  if (!state.isDemonPath) return

  state.demonCabinRevengeStage = 'focused'
  removeSpecialActionsByName(['Stay focused on your journey.', 'Doze off.'])
  log('🧘 You stay focused on your journey. You do not let exhaustion dull your instincts.')
  render()
  saveGame()
}

window.dmCabinDozeOff = () => {
  if (state.runEnded) return
  if (!state.isDemonPath) return

  state.dozeOffUnlocked = true
  state.demonCabinRevengeStage = 'doze'
  removeSpecialActionsByName(['Doze off.'])
  log('😴 You doze off. Your body recovers faster now. (Rest: +1.5 stamina/sec)')
  render()
  saveGame()
}

window.dmCabinWakeUpSack = () => {
  if (state.runEnded) return
  if (!state.isDemonPath) return

  state.demonCabinRevengeStage = 'sack'
  removeSpecialActionsByName(['Wake up with a sack covering your face.'])
  state.isResting = false
  state.isCultivating = false
  log('🧺 You wake up with a sack covering your face. Hands bind. Breath is hot and thin.')
  render()
  saveGame()
}

window.dmCabinRealization = () => {
  if (state.runEnded) return
  if (!state.isDemonPath) return

  state.demonCabinRevengeStage = 'realization'
  removeSpecialActionsByName(['Realization.'])
  log('🕯️ Realization hits like a blade: you made a disciple out of a grieving man.')
  log('⚰️ He didn’t forget. He learned.')
  render()
  saveGame()
}

window.dmCabinTheEnd = () => {
  if (state.runEnded) return

  if (!state.isDemonPath) return

  // Mark as finished so the reload-safe injector doesn't re-add the chain.
  state.demonCabinRevengeStage = 'end'

  state.isResting = false
  state.isCultivating = false
  state.repeatableActions = []
  removeSpecialActionsByName([
    'Slaughter the family in the cabin.',
    'The family man returns.',
    'Recruit the family man.',
    'Successful recruitment.',
    'Stay focused on your journey.',
    'Doze off.',
    'Wake up with a sack covering your face.',
    'Realization.',
    'The end.'
  ])

  openStoryDialog(
    'ENDING',
    'Idiot Ending — Cabin Betrayal',
    [
      '⚰️ You wanted a disciple. You forged a weapon.',
      'It learned fast.',
      'It learned you.'
    ],
    [
      { label: 'Continue.', onClick: 'window.closeStoryDialog()' }
    ],
    {
      mode: 'PAGE_SWAP',
      sentencesPerPage: 1,
      pageHoldMs: 8500,
      transitionMs: 1100,
      choicesFadeInDelayMs: 950
    }
  )

  render()
  saveGame()
}

function removeInventoryItemsByNamePredicate(pred) {
  if (!Array.isArray(state.inventory)) state.inventory = []
  state.inventory = state.inventory.filter(i => {
    const n = String(i?.name || '')
    return !pred(n)
  })
  // Clamp selection
  if (state.selectedInventoryIndex !== null && Number.isFinite(state.selectedInventoryIndex)) {
    const idx = state.selectedInventoryIndex
    if (idx < 0 || idx >= state.inventory.length) state.selectedInventoryIndex = null
  }
}

function hasInventoryItemNamed(name) {
  const n = String(name || '')
  return Array.isArray(state.inventory) && state.inventory.some(i => i && String(i.name || '') === n)
}

function getInventoryQuantityByName(name) {
  const n = String(name || '')
  if (!n) return 0
  if (!Array.isArray(state.inventory)) state.inventory = []
  const item = state.inventory.find(i => i && String(i.name || '') === n)
  return clampNonNegativeInt(item?.quantity || 0)
}

function consumeInventoryByName(name, qty) {
  const n = String(name || '')
  const need = clampNonNegativeInt(qty)
  if (!n || need <= 0) return false
  if (!Array.isArray(state.inventory)) state.inventory = []

  const idx = state.inventory.findIndex(i => i && String(i.name || '') === n)
  if (idx < 0) return false
  const item = state.inventory[idx]
  const have = clampNonNegativeInt(item?.quantity || 0)
  if (have < need) return false

  const next = have - need
  if (next <= 0) {
    state.inventory.splice(idx, 1)
    if (state.selectedInventoryIndex === idx) state.selectedInventoryIndex = null
    if (state.selectedInventoryIndex !== null && Number.isFinite(state.selectedInventoryIndex) && state.selectedInventoryIndex > idx) {
      state.selectedInventoryIndex -= 1
    }
  } else {
    item.quantity = next
  }
  return true
}

// ============================================================================
// STORY DIALOG (paged slow text)
// ============================================================================
let __storyDialogTimer = null

function chunkSentencesIntoPages(sentences, perPage) {
  const out = []
  const pageSize = Math.max(1, clampNonNegativeInt(perPage) || 1)
  const list = Array.isArray(sentences) ? sentences : []
  for (let i = 0; i < list.length; i += pageSize) {
    const page = list.slice(i, i + pageSize).map(s => String(s || '').trim()).filter(Boolean)
    if (page.length) out.push(page)
  }
  return out
}

function stopStoryDialogTimer() {
  if (__storyDialogTimer) {
    try { clearTimeout(__storyDialogTimer) } catch (_) {}
    __storyDialogTimer = null
  }
}

function startStoryDialogTimerTick() {
  stopStoryDialogTimer()
  const d = state.storyDialog
  if (!d || typeof d !== 'object') return
  if (d.done) return

  // Page-swap mode: show N sentences at once for a fixed duration,
  // then wobble-fade out, swap text, wobble-fade in.
  if (d.mode === 'PAGE_SWAP') {
    const pages = Array.isArray(d.pages) ? d.pages : []
    if (!pages.length) {
      d.done = true
      render()
      saveGame()
      return
    }

    const pageIndex = clampNonNegativeInt(d.pageIndex)
    const pageHoldMs = clampNonNegativeInt(d.pageHoldMs) || 12000
    const transitionMs = clampNonNegativeInt(d.transitionMs) || 1100
    const choicesFadeInDelayMs = clampNonNegativeInt(d.choicesFadeInDelayMs) || 850

    const atLastPage = pageIndex >= pages.length - 1
    if (atLastPage) {
      d.pageIndex = Math.min(pageIndex, pages.length - 1)
      d.pageText = Array.isArray(pages[d.pageIndex]) ? pages[d.pageIndex].join(' ') : ''
      d.transition = 'in'
      d.done = true

      if (!d.choicesVisible) {
        __storyDialogTimer = setTimeout(() => {
          try {
            if (!state.storyDialog || state.phase !== 'STORY_DIALOG') return
            if (state.storyDialog.mode !== 'PAGE_SWAP') return
            state.storyDialog.choicesVisible = true
            render()
            saveGame()
          } catch (_) {}
        }, choicesFadeInDelayMs)
      }

      render()
      saveGame()
      return
    }

    // Hold current page, then animate out.
    d.transition = 'in'
    d.pageText = Array.isArray(pages[pageIndex]) ? pages[pageIndex].join(' ') : ''
    render()
    saveGame()

    __storyDialogTimer = setTimeout(() => {
      try {
        if (!state.storyDialog || state.phase !== 'STORY_DIALOG') return
        if (state.storyDialog.mode !== 'PAGE_SWAP') return

        state.storyDialog.transition = 'out'
        render()
        saveGame()

        __storyDialogTimer = setTimeout(() => {
          try {
            if (!state.storyDialog || state.phase !== 'STORY_DIALOG') return
            if (state.storyDialog.mode !== 'PAGE_SWAP') return
            state.storyDialog.pageIndex = clampNonNegativeInt(state.storyDialog.pageIndex) + 1
            state.storyDialog.transition = 'in'
            render()
            saveGame()
            startStoryDialogTimerTick()
          } catch (_) {}
        }, transitionMs)
      } catch (_) {}
    }, pageHoldMs)
    return
  }

  const sentences = Array.isArray(d.sentences) ? d.sentences : []
  const perPage = clampNonNegativeInt(d.sentencesPerPage) || 3
  const sentenceMs = clampNonNegativeInt(d.sentenceMs) || 1800
  const pagePauseMs = clampNonNegativeInt(d.pagePauseMs) || 2300

  const sentenceIndex = clampNonNegativeInt(d.sentenceIndex)
  if (sentenceIndex >= sentences.length) {
    d.done = true
    render()
    saveGame()
    return
  }

  const nextSentence = String(sentences[sentenceIndex] || '').trim()
  d.sentenceIndex = sentenceIndex + 1
  if (!Array.isArray(d.pageSentences)) d.pageSentences = []
  d.pageSentences.push(nextSentence)

  const isPageFull = d.pageSentences.length >= perPage
  const hasMore = d.sentenceIndex < sentences.length

  render()
  saveGame()

  if (isPageFull && hasMore) {
    __storyDialogTimer = setTimeout(() => {
      try {
        if (!state.storyDialog || state.phase !== 'STORY_DIALOG') return
        state.storyDialog.pageIndex = clampNonNegativeInt(state.storyDialog.pageIndex) + 1
        state.storyDialog.pageSentences = []
        render()
        saveGame()
        startStoryDialogTimerTick()
      } catch (_) {}
    }, pagePauseMs)
    return
  }

  __storyDialogTimer = setTimeout(() => {
    try { startStoryDialogTimerTick() } catch (_) {}
  }, sentenceMs)
}

function openStoryDialog(kind, title, sentences, choices) {
  stopStoryDialogTimer()
  state.storyDialogReturnPhase = state.phase
  state.phase = 'STORY_DIALOG'
  const options = arguments.length >= 5 ? arguments[4] : null
  const mode = options && typeof options === 'object' && options.mode ? String(options.mode) : 'SENTENCE_SCROLL'
  const normalizedSentences = Array.isArray(sentences) ? sentences.map(s => String(s || '').trim()).filter(Boolean) : []
  const normalizedChoices = Array.isArray(choices) ? choices : []

  if (mode === 'PAGE_SWAP') {
    const perPage = clampNonNegativeInt(options?.sentencesPerPage) || 2
    const pages = chunkSentencesIntoPages(normalizedSentences, perPage)
    state.storyDialog = {
      kind: String(kind || ''),
      title: String(title || ''),
      mode: 'PAGE_SWAP',
      sentences: normalizedSentences,
      pages,
      pageIndex: 0,
      pageText: pages.length ? pages[0].join(' ') : '',
      pageHoldMs: clampNonNegativeInt(options?.pageHoldMs) || 12000,
      transitionMs: clampNonNegativeInt(options?.transitionMs) || 1100,
      choicesFadeInDelayMs: clampNonNegativeInt(options?.choicesFadeInDelayMs) || 850,
      transition: 'in',
      done: false,
      choices: normalizedChoices,
      choicesVisible: false
    }
    render()
    saveGame()
    startStoryDialogTimerTick()
    return
  }

  state.storyDialog = {
    kind: String(kind || ''),
    title: String(title || ''),
    mode: 'SENTENCE_SCROLL',
    sentences: normalizedSentences,
    sentencesPerPage: 3,
    sentenceMs: 1900,
    pagePauseMs: 2600,
    sentenceIndex: 0,
    pageIndex: 0,
    pageSentences: [],
    done: false,
    choices: normalizedChoices
  }
  render()
  saveGame()
  startStoryDialogTimerTick()
}

window.closeStoryDialog = () => {
  stopStoryDialogTimer()
  state.storyDialog = null
  const back = state.storyDialogReturnPhase
  state.storyDialogReturnPhase = null
  state.phase = (typeof back === 'string' && back) ? back : 'FARMING'
  render()
  saveGame()
}

function renderStoryDialog(container) {
  const d = state.storyDialog
  const title = d && typeof d === 'object' ? String(d.title || '') : ''
  const pageSentences = (d && typeof d === 'object' && Array.isArray(d.pageSentences)) ? d.pageSentences : []
  const done = Boolean(d && typeof d === 'object' && d.done)
  const choices = (d && typeof d === 'object' && Array.isArray(d.choices)) ? d.choices : []

  const mode = (d && typeof d === 'object') ? String(d.mode || 'SENTENCE_SCROLL') : 'SENTENCE_SCROLL'
  const transition = (d && typeof d === 'object') ? String(d.transition || 'in') : 'in'
  const choicesVisible = Boolean(d && typeof d === 'object' && d.choicesVisible)
  const pageText = mode === 'PAGE_SWAP'
    ? String(d && typeof d === 'object' ? (d.pageText || '') : '')
    : pageSentences.join(' ')

  const storyTextClass = mode === 'PAGE_SWAP'
    ? (transition === 'out' ? 'story-text story-text-wobble-out' : 'story-text story-text-wobble-in')
    : 'story-text'

  const showChoices = mode === 'PAGE_SWAP' ? (done && choicesVisible) : done
  const choicesClass = mode === 'PAGE_SWAP' ? 'button-group story-choices story-choices-fade-in' : 'button-group'

  container.innerHTML = `
    <div class="game-screen">
      <div class="character-display">
        <div class="character-silhouette"><img class="character-silhouette-img" src="assets/Cultivation_silhouette_new_mask.png" alt="" /></div>
        <div class="character-info">
          <div><strong>${escapeHtml(title || 'Story')}</strong></div>
          <div></div>
        </div>
      </div>

      <div class="action-panel story-dialog-panel">
        <h2>${escapeHtml(title || 'Story')}</h2>
        <p class="${storyTextClass}">${escapeHtml(pageText || '')}</p>

        ${showChoices ? `
          <div class="${choicesClass}">
            ${choices.map(c => {
              const label = escapeHtml(String(c?.label || ''))
              const onClick = String(c?.onClick || '')
              if (!label || !onClick) return ''
              return `<button onclick="${escapeHtml(onClick)}">${label}</button>`
            }).join('')}
          </div>
        ` : ''}
      </div>
    </div>
  `
}

// ============================================================================
// DEMON BATTLE CINEMATIC (50/50)
// ============================================================================
let __demonCinematicTimers = []
let __demonCinematicRafId = null
let __demonCinematicResizeHandler = null

function stopDemonCinematicTimers() {
  if (!Array.isArray(__demonCinematicTimers)) __demonCinematicTimers = []
  for (const t of __demonCinematicTimers) {
    try { clearTimeout(t) } catch (_) {}
  }
  __demonCinematicTimers = []

  if (__demonCinematicRafId) {
    try { cancelAnimationFrame(__demonCinematicRafId) } catch (_) {}
    __demonCinematicRafId = null
  }
  if (__demonCinematicResizeHandler) {
    try { window.removeEventListener('resize', __demonCinematicResizeHandler) } catch (_) {}
    __demonCinematicResizeHandler = null
  }
}

function ensureCinematicOverlay() {
  let el = document.getElementById('cinematic-overlay')
  if (el) return el
  el = document.createElement('div')
  el.id = 'cinematic-overlay'
  el.className = 'cinematic-overlay'
  el.innerHTML = `
    <div class="cinematic-stage">
      <div class="cinematic-bg" aria-hidden="true"></div>
      <div class="cinematic-vignette" aria-hidden="true"></div>
      <div class="cinematic-grain" aria-hidden="true"></div>

      <canvas class="cinematic-canvas" aria-hidden="true"></canvas>

      <div class="cinematic-fighter left" aria-hidden="true">
        <div class="cinematic-fighter-icon"><img class="cinematic-fighter-sprite" src="assets/Cultivation_silhouette_new_mask.png" alt="" /></div>
        <div class="cinematic-fighter-badge">You</div>
      </div>

      <div class="cinematic-fighter right" aria-hidden="true">
        <div class="cinematic-fighter-icon"><img class="cinematic-fighter-sprite" src="assets/demon.png" alt="" /></div>
        <div class="cinematic-fighter-badge">Demon</div>
      </div>

      <div class="cinematic-flash" aria-hidden="true"></div>
      <div class="cinematic-explosion" aria-hidden="true"></div>
      <div class="cinematic-shockwave" aria-hidden="true"></div>
      <div class="cinematic-blood" aria-hidden="true"></div>
    </div>
  `
  document.body.appendChild(el)
  return el
}

function runDemonCinematicCore(opts) {
  const options = opts && typeof opts === 'object' ? opts : {}
  const onResolved = typeof options.onResolved === 'function' ? options.onResolved : null

  stopDemonCinematicTimers()
  const el = ensureCinematicOverlay()
  el.classList.remove('active', 'impact', 'fade-out')
  // Force reflow so restarting animation works.
  void el.offsetWidth
  el.classList.add('active')

  const canvas = el.querySelector('.cinematic-canvas')
  const ctx = canvas && canvas.getContext ? canvas.getContext('2d') : null
  if (!canvas || !ctx) {
    // Fallback: if canvas isn't available for some reason, resolve immediately.
    const playerWins = typeof options.playerWins === 'boolean' ? options.playerWins : (Math.random() < 0.5)
    try { el.remove() } catch (_) {}
    if (onResolved) onResolved(playerWins)
    render()
    saveGame()
    return
  }

  // Canvas mode: hide legacy DOM fighters/layers (canvas owns visuals).
  el.classList.add('canvas-mode')

  function cssVar(name, fallback) {
    try {
      const v = getComputedStyle(document.documentElement).getPropertyValue(name).trim()
      return v || fallback
    } catch (_) {
      return fallback
    }
  }

  const colors = {
    paper: cssVar('--paper', '#eeeeee'),
    accent: cssVar('--accent', '#b91c1c'),
    maroon: cssVar('--maroon', '#5b2323'),
    maroon2: cssVar('--maroon-2', '#3f1a1a'),
    backdrop0: cssVar('--backdrop-0', '#0b1220'),
    backdrop1: cssVar('--backdrop-1', '#0f172a'),
    backdrop2: cssVar('--backdrop-2', '#111827')
  }

  const dpr = Math.max(1, Math.min(2.5, window.devicePixelRatio || 1))
  function resizeCanvas() {
    const w = Math.max(1, window.innerWidth)
    const h = Math.max(1, window.innerHeight)
    canvas.width = Math.floor(w * dpr)
    canvas.height = Math.floor(h * dpr)
    canvas.style.width = w + 'px'
    canvas.style.height = h + 'px'
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
  }
  resizeCanvas()
  __demonCinematicResizeHandler = () => {
    try { resizeCanvas() } catch (_) {}
  }
  try { window.addEventListener('resize', __demonCinematicResizeHandler) } catch (_) {}

  const rand = (a, b) => a + Math.random() * (b - a)
  const clamp01 = (x) => Math.max(0, Math.min(1, x))
  const lerp = (a, b, t) => a + (b - a) * t
  const easeInOutCubic = (t) => (t < 0.5) ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2

  function smoothNoise(t) {
    // Smooth, deterministic pseudo-noise (no per-frame randomness).
    // Keeps the "mirage" feeling fluid instead of jittery.
    return (
      Math.sin(t * 6.1) * 0.55 +
      Math.sin(t * 10.7 + 1.7) * 0.28 +
      Math.sin(t * 17.3 + 3.2) * 0.17
    )
  }

  function mulberry32(seed) {
    let t = seed >>> 0
    return () => {
      t += 0x6D2B79F5
      let r = Math.imul(t ^ (t >>> 15), 1 | t)
      r ^= r + Math.imul(r ^ (r >>> 7), 61 | r)
      return ((r ^ (r >>> 14)) >>> 0) / 4294967296
    }
  }

  const playerWins = typeof options.playerWins === 'boolean' ? options.playerWins : (Math.random() < 0.5)

  const impactAtMs = 1350
  const bloodHoldMs = 10000
  const fadeOutMs = 1200
  const totalMs = impactAtMs + bloodHoldMs + fadeOutMs

  const fighters = {
    player: { spriteSrc: 'assets/Cultivation_silhouette_new_mask.png', side: -1 },
    demon: { spriteSrc: 'assets/demon.png', side: 1 }
  }

  // Simple sprite cache for this cinematic run (keeps drawing fast).
  const __cinematicSpriteCache = new Map()
  const getSprite = (src) => {
    const key = String(src || '')
    if (!key) return null
    const existing = __cinematicSpriteCache.get(key)
    if (existing) return existing
    let img
    try {
      img = new Image()
      img.decoding = 'async'
      img.loading = 'eager'
      img.src = key
    } catch (_) {
      img = null
    }
    __cinematicSpriteCache.set(key, img)
    return img
  }

  // Smoothed motion-blur (mirage) state for charge phase.
  let lastBlurPx = null
  let lastBlurDx = null
  let lastBlurY = null
  const particles = []
  const bloodDrops = []
  const drips = []
  let bloodSplatTex = null
  let impactSpawned = false

  function createBloodSplatTexture(seed) {
    const r = mulberry32(seed)
    const rand01 = () => r()
    const randRange = (a, b) => a + rand01() * (b - a)

    const size = 900
    let c
    try {
      c = document.createElement('canvas')
    } catch (_) {
      return null
    }
    c.width = size
    c.height = size
    const g = c.getContext('2d')
    if (!g) return null

    const cx = size * 0.5
    const cy = size * 0.5
    g.clearRect(0, 0, size, size)
    g.save()
    g.translate(cx, cy)

    // Build one cohesive, huge splat by blurring merged blobs (no shard look).
    try { g.filter = 'blur(14px)' } catch (_) {}
    g.globalAlpha = 1
    g.fillStyle = colors.accent

    // Main mass
    g.beginPath(); g.arc(0, 0, 270, 0, Math.PI * 2); g.fill()

    // Irregular edge bulges (blur merges this into a single shape)
    for (let i = 0; i < 58; i++) {
      const ang = randRange(0, Math.PI * 2)
      const dist = randRange(120, 290)
      const rr = randRange(55, 170)
      g.beginPath()
      g.arc(Math.cos(ang) * dist, Math.sin(ang) * dist * randRange(0.75, 1.15), rr, 0, Math.PI * 2)
      g.fill()
    }

    // Extra "sheet" lobes to make it feel like a giant spat across the screen
    for (let i = 0; i < 10; i++) {
      const ang = randRange(-0.55, 0.55) + (rand01() < 0.5 ? Math.PI : 0)
      const dist = randRange(220, 360)
      const rr = randRange(90, 210)
      g.beginPath()
      g.arc(Math.cos(ang) * dist, Math.sin(ang) * dist, rr, 0, Math.PI * 2)
      g.fill()
    }

    try { g.filter = 'none' } catch (_) {}

    // Darker center depth (kept subtle so it reads as one big splat)
    const rg = g.createRadialGradient(0, 0, 40, 0, 0, 420)
    rg.addColorStop(0, colors.maroon2)
    rg.addColorStop(0.55, colors.maroon)
    rg.addColorStop(1, 'rgba(0,0,0,0)')
    g.globalAlpha = 0.42
    g.fillStyle = rg
    g.beginPath(); g.arc(0, 0, 430, 0, Math.PI * 2); g.fill()

    g.restore()
    return { canvas: c, size }
  }

  function spawnImpact(cx, cy) {
    // Generate the main splat once so it doesn't "vibrate" frame-to-frame.
    bloodSplatTex = createBloodSplatTexture((Math.random() * 1e9) >>> 0)

    // Explosion particles
    for (let i = 0; i < 180; i++) {
      const ang = rand(0, Math.PI * 2)
      const spd = rand(220, 820)
      particles.push({
        x: cx,
        y: cy,
        vx: Math.cos(ang) * spd,
        vy: Math.sin(ang) * spd,
        r: rand(2, 8),
        life: rand(0.35, 0.9),
        age: 0,
        color: Math.random() < 0.45 ? colors.paper : (Math.random() < 0.6 ? colors.accent : colors.maroon2)
      })
    }

    // Blood droplets
    for (let i = 0; i < 140; i++) {
      const ang = rand(0, Math.PI * 2)
      const spd = rand(160, 760)
      bloodDrops.push({
        x: cx,
        y: cy,
        vx: Math.cos(ang) * spd,
        vy: Math.sin(ang) * spd * 0.85,
        r: rand(2, 10),
        age: 0,
        life: rand(2.5, 7.5),
        color: Math.random() < 0.5 ? colors.accent : colors.maroon
      })
    }

    // Drips that melt downward (rain wash)
    for (let i = 0; i < 70; i++) {
      const x = cx + rand(-Math.min(320, window.innerWidth * 0.25), Math.min(320, window.innerWidth * 0.25))
      drips.push({
        x,
        y: cy + rand(-40, 120),
        vy: rand(26, 85),
        w: rand(3, 10),
        len: rand(40, 260),
        age: 0,
        life: rand(6, 12)
      })
    }
  }

  let __bgW = 0
  let __bgH = 0
  let __bgGradient = null
  function drawBackground(w, h) {
    // Creating gradients every frame can be expensive; cache it until size changes.
    if (!__bgGradient || __bgW !== w || __bgH !== h) {
      __bgW = w
      __bgH = h
      const g = ctx.createRadialGradient(w * 0.5, h * 0.4, 20, w * 0.5, h * 0.4, Math.max(w, h) * 0.9)
      g.addColorStop(0, colors.backdrop2)
      g.addColorStop(0.6, colors.backdrop1)
      g.addColorStop(1, colors.backdrop0)
      __bgGradient = g
    }
    ctx.fillStyle = __bgGradient
    ctx.fillRect(0, 0, w, h)
  }

  function drawShockwave(cx, cy, tNorm) {
    const r = lerp(10, Math.max(window.innerWidth, window.innerHeight) * 0.95, tNorm)
    const a = (1 - tNorm) * 0.9
    ctx.save()
    ctx.globalAlpha = a
    ctx.lineWidth = 3
    ctx.strokeStyle = 'rgba(255,255,255,0.75)'
    ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.stroke()
    ctx.lineWidth = 2
    ctx.strokeStyle = 'rgba(185,28,28,0.55)'
    ctx.beginPath(); ctx.arc(cx, cy, r * 0.92, 0, Math.PI * 2); ctx.stroke()
    ctx.restore()
  }

  function drawFighter(fighter, x, y, scale, glowColor) {
    const spriteSrc = fighter && typeof fighter.spriteSrc === 'string' ? fighter.spriteSrc : ''
    const side = fighter && Number.isFinite(fighter.side) ? fighter.side : 0
    const img = spriteSrc ? getSprite(spriteSrc) : null

    // Match old emoji visual weight (~96px glyph) but let scale drive it.
    const basePx = 118
    const sizePx = basePx * scale

    ctx.save()
    ctx.translate(x, y)
    ctx.shadowColor = glowColor
    ctx.shadowBlur = 26

    if (img && img.complete && img.naturalWidth > 0) {
      ctx.globalAlpha = 1
      ctx.drawImage(img, -sizePx * 0.5, -sizePx * 0.5, sizePx, sizePx)
    } else {
      // Non-emoji fallback: ink circle + slash silhouette.
      ctx.globalAlpha = 0.92
      ctx.lineWidth = Math.max(2, 3 * scale)
      ctx.strokeStyle = 'rgba(255,255,255,0.80)'
      ctx.fillStyle = side > 0 ? 'rgba(185,28,28,0.18)' : 'rgba(255,255,255,0.10)'
      ctx.beginPath()
      ctx.arc(0, 0, sizePx * 0.38, 0, Math.PI * 2)
      ctx.fill()
      ctx.stroke()

      ctx.globalAlpha = 0.75
      ctx.beginPath()
      ctx.moveTo(-sizePx * 0.16, -sizePx * 0.18)
      ctx.lineTo(sizePx * 0.18, sizePx * 0.16)
      ctx.stroke()
    }

    ctx.restore()
  }

  function drawBloodSplat(cx, cy, meltT) {
    if (!bloodSplatTex || !bloodSplatTex.canvas) return
    const w = window.innerWidth
    const h = window.innerHeight

    // Huge: cover most of the screen immediately, then smear downward.
    const cover = Math.max(w, h) * 1.65
    const baseScale = cover / bloodSplatTex.size
    const smearY = meltT * 220
    ctx.save()
    ctx.translate(cx, cy + smearY)
    ctx.globalAlpha = 1
    ctx.drawImage(
      bloodSplatTex.canvas,
      -0.5 * bloodSplatTex.size * baseScale,
      -0.5 * bloodSplatTex.size * baseScale,
      bloodSplatTex.size * baseScale,
      bloodSplatTex.size * baseScale
    )
    ctx.restore()
  }

  let start = performance.now()
  let last = start

  function tick(now) {
    const dt = Math.min(0.05, (now - last) / 1000)
    last = now
    const elapsedMs = now - start
    const w = window.innerWidth
    const h = window.innerHeight

    // Fade out at the end
    const fadeT = clamp01((elapsedMs - (impactAtMs + bloodHoldMs)) / fadeOutMs)
    const masterAlpha = 1 - fadeT

    ctx.save()
    ctx.globalAlpha = 1
    drawBackground(w, h)

    // Camera shake / mirage around impact (smooth, not random per frame)
    const shakeWindowMs = 520
    const shakeT = clamp01(1 - Math.abs(elapsedMs - impactAtMs) / shakeWindowMs)
    const shakeMag = shakeT * 14
    const tSec = elapsedMs / 1000
    const sx = smoothNoise(tSec) * shakeMag
    const sy = smoothNoise(tSec + 0.33) * shakeMag
    ctx.translate(sx, sy)

    // Charge phase
    const chargeT = clamp01(elapsedMs / impactAtMs)
    const eased = easeInOutCubic(chargeT)
    const cx = w * 0.5
    const cy = h * 0.5
    const startOffset = Math.min(520, w * 0.42)
    let px = lerp(cx - startOffset, cx, eased)
    let dx = lerp(cx + startOffset, cx, eased)
    const scale = lerp(1.0, 1.25, eased)

    // Prevent any visible overlap: clamp them to "touch" at collision.
    const fighterRadius = 46 * scale
    const minSep = fighterRadius * 2 + 10
    if ((dx - px) < minSep) {
      px = cx - (minSep * 0.5)
      dx = cx + (minSep * 0.5)
    }

    // Mirage trails (only during charge): draw a smooth smear between last & current
    // positions to avoid the stepped/laggy "ghost" look.
    if (elapsedMs < impactAtMs) {
      if (lastBlurPx != null && lastBlurDx != null) {
        const dist = Math.abs(px - lastBlurPx) + Math.abs(dx - lastBlurDx)
        const steps = Math.max(6, Math.min(18, Math.floor(dist / 16)))

        for (let s = 0; s < steps; s++) {
          const t = (s + 1) / (steps + 1)
          const ipx = lerp(lastBlurPx, px, t)
          const idx = lerp(lastBlurDx, dx, t)
          const iy = (lastBlurY != null) ? lerp(lastBlurY, cy, t) : cy
          const a = (1 - t) * 0.22
          ctx.globalAlpha = a
          drawFighter(fighters.player, ipx, iy, scale, 'rgba(255,255,255,0.14)')
          drawFighter(fighters.demon, idx, iy, scale, 'rgba(185,28,28,0.20)')
        }
      }

      lastBlurPx = px
      lastBlurDx = dx
      lastBlurY = cy
    } else {
      lastBlurPx = null
      lastBlurDx = null
      lastBlurY = null
    }

    // Draw fighters until impact moment
    ctx.globalAlpha = 1
    if (elapsedMs < impactAtMs) {
      drawFighter(fighters.player, px, cy, scale, 'rgba(255,255,255,0.18)')
      drawFighter(fighters.demon, dx, cy, scale, 'rgba(185,28,28,0.30)')
    }

    // Impact + aftermath
    if (!impactSpawned && elapsedMs >= impactAtMs) {
      impactSpawned = true
      spawnImpact(cx, cy)
    }

    if (elapsedMs >= impactAtMs) {
      // Blinding collision flash should happen immediately on collision.
      // During the flash window, we intentionally *do not* show aftermath.
      const flashDurationMs = 240
      const flashT = clamp01((elapsedMs - impactAtMs) / flashDurationMs)

      // Ensure the flash truly whites-out everything above the canvas, too.
      // (Otherwise vignette/grain can make fighters appear to "remain".)
      el.classList.toggle('hard-flash', elapsedMs < impactAtMs + flashDurationMs)

      // Full-screen white flash (no chance to see overlap).
      ctx.save()
      ctx.globalAlpha = (1 - flashT)
      ctx.fillStyle = colors.paper
      ctx.fillRect(-sx, -sy, w, h)
      ctx.restore()

      // After the flash, show the blood after-effects.
      if (elapsedMs >= impactAtMs + flashDurationMs) {
        // Shockwave ring
        const shockT = clamp01((elapsedMs - (impactAtMs + flashDurationMs)) / 700)
        drawShockwave(cx, cy, shockT)

        // Explosion particles
        for (let i = particles.length - 1; i >= 0; i--) {
          const p = particles[i]
          p.age += dt
          if (p.age >= p.life) {
            particles.splice(i, 1)
            continue
          }
          p.vx *= Math.pow(0.08, dt)
          p.vy *= Math.pow(0.08, dt)
          p.x += p.vx * dt
          p.y += p.vy * dt
          const a = (1 - p.age / p.life)
          ctx.globalAlpha = a * 0.95
          ctx.fillStyle = p.color
          ctx.beginPath()
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
          ctx.fill()
        }

        // Blood base splat + melt
        const meltT = clamp01((elapsedMs - (impactAtMs + flashDurationMs)) / bloodHoldMs)
        ctx.globalAlpha = 1
        drawBloodSplat(cx, cy, meltT)

        // Blood droplets fall + smear
        const g = 980
        for (let i = bloodDrops.length - 1; i >= 0; i--) {
          const b = bloodDrops[i]
          b.age += dt
          if (b.age >= b.life) {
            bloodDrops.splice(i, 1)
            continue
          }
          b.vy += g * dt
          b.vx *= Math.pow(0.35, dt)
          b.vy *= Math.pow(0.45, dt)
          b.x += b.vx * dt
          b.y += b.vy * dt
          const a = 1 - (b.age / b.life)
          ctx.globalAlpha = a
          ctx.fillStyle = b.color
          ctx.beginPath(); ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2); ctx.fill()
        }

        // Drips wash downward
        for (let i = drips.length - 1; i >= 0; i--) {
          const d = drips[i]
          d.age += dt
          if (d.age >= d.life) {
            drips.splice(i, 1)
            continue
          }
          d.y += d.vy * dt
          const a = 1 - (d.age / d.life)
          ctx.globalAlpha = a
          ctx.strokeStyle = colors.maroon
          ctx.lineWidth = d.w
          ctx.lineCap = 'round'
          ctx.beginPath()
          ctx.moveTo(d.x, d.y)
          ctx.lineTo(d.x, d.y + d.len)
          ctx.stroke()
        }
      }
    }

    // Apply master alpha fade
    ctx.restore()
    if (masterAlpha < 1) {
      ctx.save()
      ctx.globalAlpha = 1 - masterAlpha
      ctx.fillStyle = 'rgba(0,0,0,1)'
      ctx.fillRect(0, 0, w, h)
      ctx.restore()
    }

    if (elapsedMs >= totalMs) {
      try { el.remove() } catch (_) {}
      if (onResolved) onResolved(playerWins)
      render()
      saveGame()
      return
    }

    __demonCinematicRafId = requestAnimationFrame(tick)
  }

  __demonCinematicRafId = requestAnimationFrame(tick)
}

function runDemonCinematic() {
  runDemonCinematicCore({
    onResolved: (playerWins) => {
      if (playerWins) {
        log('You stand victorious.')
        upsertSpecialActionByName({
          name: "What's the point.",
          icon: '…',
          disabled: false,
          callback: () => window.demonCinematicWhatsPoint()
        })
      } else {
        log('💀 The demon wins.')
        upsertSpecialActionByName({
          name: 'Just lay down and rot',
          icon: '💀',
          disabled: false,
          callback: () => window.demonCinematicLayDownAndRot()
        })
      }
      ensureHdDetourState()
      state.hdDetour.demonCinematicResolved = true
    }
  })
}

// Demon cinematic outcome: player wins
window.demonCinematicWhatsPoint = () => {
  if (state.runEnded) return
  removeSpecialActionsByName(["What's the point."])
  openStoryDialog(
    'ENDING',
    "Bad Ending — What's the Point",
    [
      'You win.',
      '…and nothing changes inside you.',
      'You stare at the horizon until the horizon stares back.'
    ],
    [
      { label: 'Continue.', onClick: 'window.closeStoryDialog()' }
    ],
    {
      mode: 'PAGE_SWAP',
      sentencesPerPage: 1,
      pageHoldMs: 8500,
      transitionMs: 1100,
      choicesFadeInDelayMs: 950
    }
  )
}

// Demon cinematic outcome: player loses
window.demonCinematicLayDownAndRot = () => {
  if (state.runEnded) return
  removeSpecialActionsByName(['Just lay down and rot'])
  openStoryDialog(
    'ENDING',
    'Terrible Ending — Lay Down and Rot',
    [
      '💀 The demon wins.',
      'You stop running. You stop fighting.',
      'The world keeps moving without you.'
    ],
    [
      { label: 'Continue.', onClick: 'window.closeStoryDialog()' }
    ],
    {
      mode: 'PAGE_SWAP',
      sentencesPerPage: 1,
      pageHoldMs: 8500,
      transitionMs: 1100,
      choicesFadeInDelayMs: 950
    }
  )
}

// ============================================================================
// HEAVENLY DEMON DETOUR CHAIN
// ============================================================================
window.hdRatherWalkDifferentPath = () => {
  ensureHdDetourState()
  state.hdDetour.choseDifferentPath = true

  // Leave Cloud sect automatically.
  if (state.hasJoinedSect) {
    clearSectState()
  }

  // Replace the button with the next step.
  state.specialActions = state.specialActions.filter(a => a?.name !== 'I Rather Walk a Different Path.')
  upsertSpecialActionByName({
    name: 'Explore a Mysterious Cave.',
    icon: '🕳️',
    disabled: false,
    callback: () => window.hdExploreMysteriousCave()
  })

  render()
  saveGame()
}

window.hdExploreMysteriousCave = () => {
  ensureHdDetourState()
  state.hdDetour.exploredCave = true

  state.specialActions = state.specialActions.filter(a => a?.name !== 'Explore a Mysterious Cave.')

  upsertSpecialActionByName({
    name: 'The Demonic Manual has followed you.',
    icon: '📕',
    disabled: false,
    callback: () => window.hdCaveDemonicManualFollowed()
  })

  upsertSpecialActionByName({
    name: 'Ignore the calling and continue journey.',
    icon: '🚶',
    disabled: false,
    callback: () => window.hdCaveIgnoreCalling()
  })

  render()
  saveGame()
}

window.hdCaveDemonicManualFollowed = () => {
  ensureHdDetourState()
  state.hdDetour.caveChoice = 'demonicManual'

  // Remove cave choice buttons.
  state.specialActions = state.specialActions.filter(a => a?.name !== 'The Demonic Manual has followed you.' && a?.name !== 'Ignore the calling and continue journey.')

  // Replace Heavenly Demon manual in inventory with Demonic Manual.
  removeInventoryItemsByNamePredicate(n => n === 'Hidden Heavenly Demon Manual' || n.startsWith('Heavenly Demon Manual'))
  if (!hasInventoryItemNamed('Demonic Manual')) {
    addToInventory({
      name: 'Demonic Manual',
      icon: '📕',
      description: 'A manual steeped in demonic intent. Other sects will not tolerate its use.',
      equippable: true
    })
  }

  enterDemonPathFromDemonicManualAcquisition()

  render()
  saveGame()
}

window.hdCaveIgnoreCalling = () => {
  ensureHdDetourState()
  state.hdDetour.caveChoice = 'ignore'

  // Remove cave choice buttons.
  state.specialActions = state.specialActions.filter(a => a?.name !== 'The Demonic Manual has followed you.' && a?.name !== 'Ignore the calling and continue journey.')

  upsertSpecialActionByName({
    name: 'Settling down and starting a family.',
    icon: '👪',
    disabled: state.stamina < 15,
    onStart: () => {
      if (state.stamina < 15) return false
      state.stamina -= 15
      return true
    },
    callback: () => window.hdStartFamily()
  })

  render()
  saveGame()
}

window.hdStartFamily = () => {
  ensureHdDetourState()
  state.hdDetour.startedFamily = true
  state.specialActions = state.specialActions.filter(a => a?.name !== 'Settling down and starting a family.')

  upsertSpecialActionByName({
    name: 'Gather Groceries.',
    icon: '🛒',
    disabled: false,
    callback: () => window.hdGatherGroceries()
  })

  render()
  saveGame()
}

window.hdGatherGroceries = () => {
  ensureHdDetourState()
  state.specialActions = state.specialActions.filter(a => a?.name !== 'Gather Groceries.')
  state.hdDetour.groceriesCount = 0
  state.hdDetour.returnHomeAvailable = false

  // Add repeatable grocery action.
  if (!Array.isArray(state.repeatableActions)) state.repeatableActions = []
  if (!state.repeatableActions.some(a => a?.name === 'Grab Groceries')) {
    state.repeatableActions.push({
      name: 'Grab Groceries',
      icon: '🛍️',
      disabled: false,
      onStart: () => {
        if (state.stamina < 2) return false
        state.stamina -= 2
        return true
      },
      callback: () => window.hdGrabGroceries()
    })
  }

  render()
  saveGame()
}

window.hdGrabGroceries = () => {
  ensureHdDetourState()
  state.hdDetour.groceriesCount = clampNonNegativeInt(state.hdDetour.groceriesCount) + 1
  const left = Math.max(0, 5 - state.hdDetour.groceriesCount)
  log(`You gather groceries. (${left} remaining)`)

  if (state.hdDetour.groceriesCount >= 5) {
    // Remove repeatable action and unlock Return Home.
    state.repeatableActions = (Array.isArray(state.repeatableActions) ? state.repeatableActions : []).filter(a => a?.name !== 'Grab Groceries')
    state.hdDetour.returnHomeAvailable = true
    upsertSpecialActionByName({
      name: 'Return Home.',
      icon: '🏠',
      disabled: state.stamina < 15,
      onStart: () => {
        if (state.stamina < 15) return false
        state.stamina -= 15
        return true
      },
      callback: () => window.hdReturnHome()
    })
  }

  render()
  saveGame()
}

window.hdReturnHome = () => {
  // Remove the button to prevent re-entry.
  state.specialActions = state.specialActions.filter(a => a?.name !== 'Return Home.')

  const sentences = [
    'You return to your house.',
    'The door is open, though you remember closing it.',
    'Stepping inside blood is splattered everywhere.',
    'You go into shock from horror.',
    'The world blurs.',
    'You walk deeper inside.',
    'You see your kids and wife pale white and covered in blood laying in the living room.',
    'The man who did this, no the demon who did this is sitting on their bodies.',
    'The demon speaks: "You should have taken the demon manual when you had the chance. Your poor sweet family. Anyways its a shame but I\'ll be kind and in exchange I\'ll allow you one last opportunity to join a higher power. What do you say?"'
  ]

  openStoryDialog(
    'RETURN_HOME',
    'Return Home',
    sentences,
    [
      { label: 'Face the Demon.', onClick: 'window.hdFaceDemon()' },
      { label: 'Go With Demon.', onClick: 'window.hdGoWithDemon()' },
      { label: 'Run Away from Demon.', onClick: 'window.hdRunAwayFromDemon()' }
    ],
    {
      mode: 'PAGE_SWAP',
      sentencesPerPage: 2,
      pageHoldMs: 12000,
      transitionMs: 1100,
      choicesFadeInDelayMs: 950
    }
  )
}

// ---------------------------------------------------------------------------
// DEMON RETURN HOME: THIRD CHOICE BRANCH
//
// "Run Away from Demon" starts the Orthodox hide chain and returns the player
// to normal play with a new special action chain.
// ---------------------------------------------------------------------------

window.hdRunAwayFromDemon = () => {
  window.closeStoryDialog()
  ensureOrthodoxHideState()

  state.fledDemon = true
  if (!state.orthodoxHide.stage) state.orthodoxHide.stage = 'discover'

  log('You run. You do not look back.')
  log('☯️ In the days that follow, whispers reach you — a hidden orthodox sect.')

  upsertSpecialActionByName({
    name: 'Discover Hidden Orthodox Sect',
    icon: '☯️',
    disabled: false,
    callback: () => window.orthodoxDiscoverHiddenSect()
  })

  render()
  saveGame()
}

// ---------------------------------------------------------------------------
// ORTHODOX HIDE CHAIN CALLBACKS
//
// These functions correspond 1:1 with action names in rehydrateActionCallbacks
// and the reload-safe injection block in renderActionsPanel.
// ---------------------------------------------------------------------------

window.orthodoxDiscoverHiddenSect = () => {
  ensureOrthodoxHideState()
  state.orthodoxHide.stage = 'saved'

  removeSpecialActionsByName([
    'Discover Hidden Orthodox Sect',
    'Saved by the mysterious sect.',
    'In exchange for utmost loyalty you will learn the way of the orthodox.'
  ])

  log('☯️ You follow the rumors into the mountains...')
  log('🌫️ Shadows move. You are being watched.')

  upsertSpecialActionByName({
    name: 'Saved by the mysterious sect.',
    icon: '🕯️',
    disabled: state.stamina < 5,
    onStart: () => {
      if (state.stamina < 5) return false
      state.stamina -= 5
      return true
    },
    callback: () => window.orthodoxSavedByMysteriousSect()
  })

  render()
  saveGame()
}

window.orthodoxSavedByMysteriousSect = () => {
  ensureOrthodoxHideState()
  state.orthodoxHide.stage = 'loyalty'

  removeSpecialActionsByName([
    'Discover Hidden Orthodox Sect',
    'Saved by the mysterious sect.',
    'In exchange for utmost loyalty you will learn the way of the orthodox.'
  ])

  log('The demon finds you — but not before the sect does.')
  log('☯️ A formation flares. You are pulled to safety.')

  upsertSpecialActionByName({
    name: 'In exchange for utmost loyalty you will learn the way of the orthodox.',
    icon: '📜',
    disabled: false,
    callback: () => window.orthodoxPledgeUtmostLoyalty()
  })

  render()
  saveGame()
}

window.orthodoxPledgeUtmostLoyalty = () => {
  ensureOrthodoxHideState()

  state.orthodoxHide.stage = 'joined'
  state.joinedOrthodoxSect = true
  state.demonMonarchOnly = false

  removeSpecialActionsByName([
    'Discover Hidden Orthodox Sect',
    'Saved by the mysterious sect.',
    'In exchange for utmost loyalty you will learn the way of the orthodox.'
  ])

  // Remove all other manuals.
  removeInventoryItemsByNamePredicate(n => {
    const name = String(n || '')
    if (!name.includes('Manual')) return false
    return name !== 'Orthodox Manual'
  })

  if (!hasInventoryItemNamed('Orthodox Manual')) {
    addToInventory({
      name: 'Orthodox Manual',
      icon: '📕',
      description: 'A manual of righteous cultivation. Its loyalty binds you forever.',
      equippable: true
    })
  }

  // Force Orthodox sect membership and lock leaving.
  state.hasJoinedSect = true
  state.currentSect = 'Orthodox'
  state.manualType = 'Orthodox'
  state.manualTier = 1
  state.sectRankLayer = 'outer'
  state.sectRankNumber = 6
  state.sectRankPyramidOpen = false
  applySectMultipliers(5)

  if (!state.equipped || typeof state.equipped !== 'object') state.equipped = {}
  state.equipped.manual = 'Orthodox Manual'

  initializeManualMoveCooldowns()

  log('☯️ You kneel and pledge loyalty. The sect accepts you.')
  log('You receive the Orthodox Manual.')
  log('Your loyalty is sealed. You can never leave this sect.')

  // Begin the Orthodox true-ending war chain.
  try {
    ensureOrthodoxWarState()
    if (state.orthodoxWarStage === 0) state.orthodoxWarStage = 0
  } catch (_) {}

  render()
  saveGame()
}

window.hdFaceDemon = () => {
  window.closeStoryDialog()
  // Run cinematic battle (50/50).
  runDemonCinematic()
}

window.hdGoWithDemon = () => {
  window.closeStoryDialog()

  // Ensure player has the Demonic Manual and joins Demon Monarch Sect.
  removeInventoryItemsByNamePredicate(n => n === 'Hidden Heavenly Demon Manual' || n.startsWith('Heavenly Demon Manual'))
  if (!hasInventoryItemNamed('Demonic Manual')) {
    addToInventory({
      name: 'Demonic Manual',
      icon: '📕',
      description: 'A manual steeped in demonic intent. Other sects will not tolerate its use.',
      equippable: true
    })
  }
  window.joinDemonMonarchSect()

  upsertSpecialActionByName({
    name: 'Destroy the Sect from Within.',
    icon: '🗡️',
    disabled: state.stamina < 15,
    onStart: () => {
      if (state.stamina < 15) return false
      state.stamina -= 15
      return true
    },
    callback: () => window.dmDestroySectFromWithin()
  })

  render()
  saveGame()
}

function renderDemonExile(container) {
  container.innerHTML = `
    <div class="game-screen">
      <div class="character-display">
        <div class="character-silhouette"><img class="character-silhouette-img" src="assets/Demonic_manual.png" alt="" /></div>
        <div class="character-info">
          <div><strong>Forbidden Manual</strong></div>
          <div>You have been cast out</div>
        </div>
      </div>

      <div class="action-panel">
        <h2>Expelled</h2>
        <p class="story-text">Your demonic ways will not be tolerated in this sect! BE GONE!</p>
        <div class="button-group">
          <button onclick="window.dismissDemonExile()">Continue</button>
        </div>
      </div>
    </div>
  `
}

function renderWood(container) {
  container.innerHTML = `
    <div class="game-screen">
      <div class="character-display">
        <div class="character-silhouette"><img class="character-silhouette-img" src="assets/rusted-axe.png" alt="" /></div>
        <div class="character-info">
          <div><strong>Lumberjack Phase</strong></div>
          <div>Honest work in the forest</div>
        </div>
      </div>
      
      <div class="game-content-layout">
        <div class="log">
          <h3>Activity Log</h3>
          <div id="game-log"></div>
        </div>
        
        <div class="panels-container">
          ${renderCultivationInfo()}
        </div>
      </div>
    </div>
  `
}

function getEnemySilhouetteSrc(enemy) {
  const name = String(enemy?.name || '').toLowerCase()
  if (name.includes('demon') || name.includes('monarch') || name.includes('hell')) return 'assets/demon.png'
  if (name.includes('heaven') || name.includes('immortal') || name.includes('angel')) return 'assets/heavenly-demon.png'
  return 'assets/Cultivation_silhouette_new_mask.png'
}

function renderCombat(container) {
  const enemy = state.enemy
  const enemySrc = getEnemySilhouetteSrc(enemy)
  
  container.innerHTML = `
    <div class="game-screen">
      <div class="character-display">
        <div class="character-silhouette">${renderUiIcon('moves')}</div>
        <div class="character-info">
          <div><strong>Combat Phase</strong></div>
          <div>Life and death hang in the balance</div>
        </div>
      </div>
      
      <div class="combat-view">
        <div class="combatant player-side">
          <div class="character-silhouette"><img class="character-silhouette-img" src="assets/Cultivation_silhouette_new_mask.png" alt="" /></div>
          <div class="hp-bar">
            <div class="hp-fill" style="width: ${(state.health / state.maxHealth) * 100}%"></div>
          </div>
          <div class="hp-text">${state.health}/${state.maxHealth} HP</div>
          <div class="combat-name">You</div>
        </div>
        
        <div class="vs">VS</div>
        
        <div class="combatant enemy-side">
          <div class="character-silhouette"><img class="character-silhouette-img" src="${escapeHtml(enemySrc)}" alt="" /></div>
          <div class="hp-bar">
            <div class="hp-fill enemy-hp" style="width: ${(enemy.health / enemy.maxHealth) * 100}%"></div>
          </div>
          <div class="hp-text">${enemy.health}/${enemy.maxHealth} HP</div>
          <div class="combat-name">${enemy.name}</div>
        </div>
      </div>
      
      <div class="action-panel">
        <h2>Combat</h2>

        <div class="combat-moves-bar">
          ${[0, 1, 2].map(i => {
            const moveId = String((Array.isArray(state.equippedMoves) ? state.equippedMoves[i] : 'punch') || 'punch')
            const label = getMoveDisplayName(moveId) || 'Punch'
            const cooldownMs = getPlayerMoveCooldownMs(moveId)
            const disabled = isPlayerMoveDisabled(moveId)
            const preview = getMoveCombatPreview(moveId)
            const metaText = (preview && Number.isFinite(preview.damage)) ? `DMG: ${formatNumber(preview.damage)}` : ''
            const cdTextValue = cooldownMs > 0 ? `Cooldown: ${escapeHtml(formatCooldownMs(cooldownMs))}` : '&nbsp;'
            const metaLine = metaText ? escapeHtml(metaText) : '&nbsp;'
            return `
              <button class="combat-move-btn" type="button" onpointerdown="window.useEquippedMove(${i})" ${disabled ? 'disabled' : ''}>
                <div class="combat-move-title">${escapeHtml(label)}</div>
                <div class="combat-move-sub">${metaLine}</div>
                <div class="combat-move-sub">${cdTextValue}</div>
              </button>
            `
          }).join('')}
        </div>

        <div class="combat-actions-row" style="margin-top:12px; display:flex; justify-content:center;">
          <button class="combat-move-btn" style="max-width:260px;" onclick="window.fleeCombat()">FLEE</button>
        </div>
      </div>
      
      <div class="log">
        <div id="game-log"></div>
      </div>
    </div>
  `
}

function closePanelsForCombatStart() {
  // Close side panels so combat is the only focus.
  try {
    if (state.activeSidePanels instanceof Set) state.activeSidePanels.clear()
  } catch (_) {}

  // Close any sub-views
  state.sectRankPyramidOpen = false
  state.movesPickerSlot = null
}

function exitCombatToReturnPhase() {
  state.inCombat = false
  state.enemy = null
  state.combatContext = null
  state.phase = state.questReturnPhase || 'FARMING'
  state.questReturnPhase = null
  ensureCombatLoop()
}

function handleQuestCombatFlee() {
  const quest = state.activeQuest
  if (!quest || quest.completed || !quest.started) return false
  if (!quest.pendingCombatStepId) return false
  const step = quest.activeStep
  if (!step || step.type !== 'combat' || step.id !== quest.pendingCombatStepId) return false

  quest.pendingCombatStepId = null
  quest.steps.push({ ...step, resolved: true, outcome: 'flee' })
  quest.activeStep = null

  const penalty = 10 + Math.floor(Math.random() * 6) // 10..15
  quest.progressPct = Math.max(0, Math.min(100, clampNonNegativeInt(quest.progressPct) - penalty))
  log(`You fled the quest fight. Progress -${penalty}%. Mercy step next.`)

  quest.forceMercyStep = true

  exitCombatToReturnPhase()
  state.health = Math.max(1, clampNonNegativeInt(state.health))
  state.activeSidePanels.add('quests')

  spawnNextQuestStep()
  saveGame()
  render()
  return true
}

window.fleeCombat = () => {
  if (!state.inCombat || state.phase !== 'COMBAT') return

  // Quest flee: progress penalty + mercy.
  if (handleQuestCombatFlee()) return

  // Coalition war flee: progress the wave and exhaust stamina.
  if (handleCloudCoalitionWarCombatFlee()) return

  // Tri-Sect boss flee: counts as failing to defeat the boss.
  if (handleCloudTriSectBossCombatFlee()) return

  // Demon cosmic finale flee.
  if (handleDemonCosmicFinaleCombatFlee()) return

  // Sect pyramid flee: lose all stamina.
  const ctx = state.combatContext
  if (ctx && ctx.type === 'sectRankDuel') {
    state.stamina = 0
    log('You flee. Your stamina is exhausted.')
  } else {
    log('You flee the battle.')
  }

  exitCombatToReturnPhase()
  state.health = clampNonNegativeInt(state.maxHealth)
  render()
  saveGame()
}

// ============================================================================
// GAME ACTIONS
// ============================================================================
let cropCount = 0
let woodCount = 0

window.rerollFate = () => {
  if (!state.rebirthUpgrades?.canRerollFate) return
  if (state.rerollsRemaining <= 0) return
  
  state.rerollsRemaining--
  
  // Save current luck before rerolling
  const savedLuck = state.luck
  
  rollFate()
  
  // Restore luck (don't reroll it)
  state.luck = savedLuck
  
  render()
  saveGame()
  
  log(`Rerolled fate! ${state.rerollsRemaining} rerolls remaining.`)
}

window.startGame = () => {
  state.phase = 'FARMING'
  
  // Setup farming actions
  state.repeatableActions = [
    {
      name: 'Rest',
      icon: '😴',
      disabled: false,
      callback: () => window.rest()
    },
    {
      name: 'Farm Crops',
      icon: '🌾',
      disabled: false,
      callback: () => window.farmCrops()
    },
    {
      name: 'Sell Crops',
      icon: '💰',
      disabled: false,
      callback: () => window.sellCrops()
    }
  ]
  
  // Add buy tools to special actions if not bought yet
  if (!state.hasBoughtTools) {
    state.specialActions = [
      {
        name: `Buy Farming Tools (${state.farmingToolCost} Copper)`,
        icon: '🔨',
        disabled: state.copper < state.farmingToolCost,
        callback: () => window.buyTools()
      }
    ]
  } else {
    state.specialActions = []
  }
  
  // Add meet immortal action when enough copper
  if (!state.hasMetFakeImmortal && state.copper >= 30) {
    state.specialActions.push({
      name: 'Meet the "Immortal Cultivator"',
      icon: '🧙',
      disabled: state.copper < 30,
      callback: () => window.meetFakeImmortal()
    })
  }
  
  render()
  saveGame()
  log('Your cultivation journey begins as a humble farmer...')
}

window.rest = () => {
  if (!state.devIgnoreRequirements && state.stamina >= state.maxStamina) return
  state.isResting = !state.isResting
  render()
  saveGame()
  if (state.isResting) {
    const rate = state.dozeOffUnlocked ? 1.5 : 1
    log(`You begin resting... (+${rate} stamina per second)`) 
  } else {
    log('You stop resting.')
  }
}

window.farmCrops = () => {
  if (!state.devIgnoreRequirements) {
    if (state.stamina < 2) return
    state.stamina -= 2
  }
  state.isResting = false
  const gained = state.farmingLevel
  cropCount += gained
  render()
  saveGame()
  log(`You farm crops. +${gained} crops (Total: ${cropCount})`)
}

window.sellCrops = () => {
  if (cropCount <= 0) return
  const copperGained = Math.floor(cropCount * 2 * state.copperMultiplier)
  state.copper += copperGained
  log(`You sell ${cropCount} crops for ${copperGained} copper.`)
  cropCount = 0
  render()
  saveGame()
}

window.gatherHerbsLegacy = () => {
  try { playSfx('gather') } catch (_) {}
  if (!state.devIgnoreRequirements) {
    if (state.stamina < 2) return
    state.stamina -= 2
  }

  state.isResting = false
  if (typeof state.mysteriousHerbFound !== 'boolean') state.mysteriousHerbFound = false

  const gained = 1 + Math.floor(Math.random() * 3)
  addToInventory({
    name: 'Ginseng',
    kind: 'ingredient',
    description: 'A hardy root used in many formulas.',
    quantity: gained
  })
  log(`You gather herbs. +${gained} Ginseng.`)

  // Rare, one-time permanent herb.
  if (!state.mysteriousHerbFound && Math.random() < 0.03) {
    state.mysteriousHerbFound = true
    addToInventory({
      name: 'Mysterious Herb',
      description: 'Qi gain permanently increased by 20%',
      quantity: 1
    })
    log('You discover a Mysterious Herb.')
  }

  render()
  saveGame()
}

window.craftHerbPillLegacy = () => {
  try { playSfx('craft') } catch (_) {}
  if (!consumeInventoryByName('Ginseng', 5)) return
  addToInventory({
    name: 'Herb Pill',
    kind: 'pill',
    pillFile: 'herb_pill.png',
    imageSrc: 'assets/herb_pill.png',
    description: 'Use: Instantly grants 15 Qi',
    quantity: 1
  })
  log('You craft an Herb Pill.')
  render()
  saveGame()
}

// Helper function to add items to inventory
function addToInventory(item) {
  if (!item || typeof item !== 'object') return
  if (typeof item.name !== 'string' || !item.name) return

  // Check if item already exists (stackable items)
  const existingItem = state.inventory.find(i => i.name === item.name)
  if (existingItem) {
    existingItem.quantity = (existingItem.quantity || 1) + (item.quantity || 1)
  } else {
    state.inventory.push({ ...item, quantity: item.quantity || 1 })
  }
}

window.buyTools = () => {
  if (!state.devIgnoreRequirements && state.copper < state.farmingToolCost) return
  if (state.hasBoughtTools) return // Prevent multiple purchases
  
  if (!state.devIgnoreRequirements) state.copper -= state.farmingToolCost
  state.hasBoughtTools = true
  state.copperMultiplier = 1.5 // 50% boost
  
  // Add farming tool to inventory
  addToInventory({
    name: 'Farming Tools',
    icon: '🔨',
    description: 'Increases copper gained from selling crops by 50%'
  })
  
  // Remove from special actions (handled by executeAction for special actions)
  
  render()
  saveGame()
  log('You buy farming tools! Copper gain increased by 50%!')
}

window.toggleCultivate = () => {
  if (state.isCultivating) {
    state.isCultivating = false
    render()
    saveGame()
    log('You stop cultivating.')
    return
  }

  const nextCost = getNextCultivationCost()
  if (nextCost && Number.isFinite(nextCost.cost) && nextCost.cost > 0 && state.qi >= nextCost.cost) {
    state.isCultivating = false
    render()
    saveGame()
    log('Your Qi is already at the maximum needed for the next realm.')
    return
  }

  if (!canCultivateNow()) {
    state.isCultivating = false
    render()
    saveGame()
    const limit = splitYearsMonths(getCultivationAgeLimitMonths())
    log(`You can no longer cultivate past ${limit.years} years, ${limit.months} months.`)
    return
  }

  state.isCultivating = true
  render()
  saveGame()
  log('You begin cultivating... (+1 Qi per second)')
}

// ============================================================================
// ACTIONS SYSTEM
// ============================================================================
const _timedActions = new Map()
let _timedActionsRenderTimer = null // legacy: kept for safety, not used for progress
let _timedActionsRafId = null

function updateTimedActionProgressOnly() {
  // Actions panel buttons
  const actionButtons = document.querySelectorAll('.action-button[data-action-key]')
  for (const btn of actionButtons) {
    const key = String(btn.getAttribute('data-action-key') || '')
    if (!key) continue
    const running = isActionRunning(key)

    btn.dataset.running = running ? '1' : '0'
    if (running) {
      btn.setAttribute('aria-busy', 'true')
      const pct = `${(getActionProgress(key) * 100).toFixed(1)}%`
      btn.style.setProperty('--progressPct', pct)
    } else {
      btn.removeAttribute('aria-busy')
      btn.style.setProperty('--progressPct', '0%')
    }
  }

  // Herbalism progress bars
  const herbalismFills = document.querySelectorAll('.herbalism-progress-fill[data-progress-key]')
  for (const fill of herbalismFills) {
    const key = String(fill.getAttribute('data-progress-key') || '')
    if (!key) continue
    const pct = `${Math.max(0, Math.min(100, Math.floor(getActionProgress(key) * 100)))}%`
    fill.style.width = pct
  }

  // Quest panel step progress fill
  const questFills = document.querySelectorAll('.quest-step-fill[data-progress-key]')
  for (const fill of questFills) {
    const key = String(fill.getAttribute('data-progress-key') || '')
    if (!key) continue
    const pct = `${Math.max(0, Math.min(100, Math.floor(getActionProgress(key) * 100)))}%`
    fill.style.width = pct
  }
}

function getActionKey(type, action) {
  return `${type}:${action?.name || ''}`
}

function getActionDurationMs(type, action) {
  const name = String(action?.name || '')

  const repeatableReductionMs = getRebirthRepeatableDurationReductionMs()

  // Repeatable: 2s completion timers
  if (type === 'repeatable') {
    if (name === 'Farm Crops') return Math.max(250, 2000 - repeatableReductionMs)
    if (name === 'Chop Wood') return Math.max(250, 2000 - repeatableReductionMs)
    if (name === 'Sell Crops') return Math.max(250, 1000 - repeatableReductionMs)
    if (name === 'Sell Wood') return Math.max(250, 1000 - repeatableReductionMs)
    if (name === 'Grab Groceries') return Math.max(250, 1000 - repeatableReductionMs)
    return 0
  }

  // Special: 5s completion timers (requested list)
  if (type === 'special') {
    const explicit = Number(action?.durationMs)
    if (Number.isFinite(explicit) && explicit >= 0) return explicit

    const isDeepForest = name.includes('Enter Deep into') // Woods/Forest variants
    const isNormalAxe = name.includes('Buy Normal Axe')
    const isLegendaryAxe = name.includes('Buy Legendary Axe')
    const isBargain = name.includes('Bargain')
    const isIgnoreMerchant = name.includes('Ignore Merchant')
    const isMeetImmortal = name.includes('Meet the')
    const isBuyFarmingTools = name.includes('Buy Farming Tools') || name.includes('Buy Better Farming Tools')
    const isRouteChoice = name === 'Steady Coin' || name === 'Follow the Mysterious Cultivator'
    const isBusinessStory = name === 'Expansion Opportunity.' || name === 'Hiring Employees.' || name === 'Stability Isn’t Enough' || name === 'No More Games'
    const isCloudStory = name === 'Walk with the Mysterious Cultivator to the Building.'
      || name === 'Sect Leader Offers Items and Recruitment.'
      || name === 'Arrival Among Clouds.'
      || name === 'Confronted by an Outer Disciple.'
      || name === 'Battle starts.'
      || name === 'Exploring the Sect Library.'
      || name === 'Find heavenly demon manual.'
      || name === 'Take the Demonic Manual.'
      || name === 'Find nothing.'
    const isBagSpace = name === 'Larger Bag Space'
    if (isDeepForest || isNormalAxe || isLegendaryAxe || isBargain || isIgnoreMerchant || isMeetImmortal || isBuyFarmingTools || isRouteChoice || isBusinessStory || isCloudStory || isBagSpace) return 5000
    return 5000
  }

  return 0
}

function isActionRunning(key) {
  return _timedActions.has(key)
}

function getActionProgress(key) {
  const entry = _timedActions.get(key)
  if (!entry) return 0
  const now = performance.now()
  const pct = (now - entry.startedAt) / entry.durationMs
  if (!Number.isFinite(pct)) return 0
  return Math.max(0, Math.min(1, pct))
}

function ensureTimedActionsRenderLoop() {
  const hasTimers = _timedActions.size > 0

  // Stop any legacy interval loop (it makes UI feel laggy by rebuilding DOM constantly).
  if (_timedActionsRenderTimer) {
    clearInterval(_timedActionsRenderTimer)
    _timedActionsRenderTimer = null
  }

  if (hasTimers && !_timedActionsRafId) {
    const tick = () => {
      if (_timedActions.size === 0) {
        _timedActionsRafId = null
        return
      }
      try {
        updateTimedActionProgressOnly()
      } catch (err) {
        try { console.error('Timed action progress update error:', err) } catch (_) {}
      }
      _timedActionsRafId = requestAnimationFrame(tick)
    }
    _timedActionsRafId = requestAnimationFrame(tick)
  }

  if (!hasTimers && _timedActionsRafId) {
    try { cancelAnimationFrame(_timedActionsRafId) } catch (_) {}
    _timedActionsRafId = null
  }
}

function finishTimedAction(key) {
  return finishTimedActionWithOptions(key)
}

function ensureButtonCooldownsState() {
  if (!state.buttonCooldowns || typeof state.buttonCooldowns !== 'object') state.buttonCooldowns = {}
}

function getActionCooldownRemainingMs(actionKey) {
  ensureButtonCooldownsState()
  const endAt = Number(state.buttonCooldowns?.[actionKey])
  if (!Number.isFinite(endAt) || endAt <= 0) return 0
  const ms = endAt - Date.now()
  return ms > 0 ? ms : 0
}

function getActionCooldownRemainingSeconds(actionKey) {
  const ms = getActionCooldownRemainingMs(actionKey)
  return ms > 0 ? Math.ceil(ms / 1000) : 0
}

function setActionCooldownSeconds(actionKey, seconds) {
  const s = Number(seconds)
  if (!Number.isFinite(s) || s <= 0) return
  ensureButtonCooldownsState()
  let effective = s
  // Rebirth node: special action cooldown reduction.
  if (String(actionKey || '').startsWith('special:')) {
    effective = Math.max(0.1, effective - getRebirthSpecialCooldownReductionSeconds())
  }
  state.buttonCooldowns[actionKey] = Date.now() + Math.floor(effective * 1000)
}

function finishTimedActionWithOptions(key, opts) {
  const options = (opts && typeof opts === 'object') ? opts : {}
  const entry = _timedActions.get(key)
  if (!entry) return

  try {
    if (entry.timeoutId) clearTimeout(entry.timeoutId)
  } catch (_) {}

  const entryType = String(entry.type || '')
  const entryName = String(entry.action?.name || '')
  const entryCallback = (typeof entry.action?.callback === 'function') ? entry.action.callback : null

  _timedActions.delete(key)

  if (entryType === 'special') {
    // Remove by stable key at completion (state.specialActions may be rebuilt).
    state.specialActions = state.specialActions.filter(a => getActionKey('special', a) !== key)
  }

  // Run the completion callback. Saved games can drop functions, so fall back by name.
  if (entryCallback) {
    entryCallback()
  } else if (entryType === 'special') {
    if (entryName === 'Exploring the Sect Library.') {
      window.cloudStoryExploreLibrary()
    } else if (entryName === 'Walk with the Mysterious Cultivator to the Building.') {
      window.cloudStoryWalkToBuilding()
    } else if (entryName === 'Sect Leader Offers Items and Recruitment.') {
      window.cloudStoryLeaderOffers()
    } else if (entryName === 'Arrival Among Clouds.') {
      window.cloudStoryArrivalAmongClouds()
    } else if (entryName === 'Confronted by an Outer Disciple.') {
      window.cloudStoryConfrontedByOuterDisciple()
    } else if (entryName === 'Battle starts.') {
      window.cloudStoryBattleStarts()
    } else if (entryName === 'Find heavenly demon manual.') {
      window.cloudStoryFindHeavenlyDemonManual()
    } else if (entryName === 'Take the Demonic Manual.') {
      window.cloudStoryTakeDemonicManual()
    } else if (entryName === 'Find nothing.') {
      window.cloudStoryFindNothingInLibrary()
    }
  }

  // Apply cooldown AFTER completion (cooldown starts when the action finishes).
  if (!options.ignoreCooldown) {
    const cd = Number(entry.action?.cooldownSeconds)
    if (Number.isFinite(cd) && cd > 0) setActionCooldownSeconds(key, cd)
  }

  render()
  saveGame()
  ensureTimedActionsRenderLoop()
}

function startTimedAction(type, action, durationMs) {
  const key = getActionKey(type, action)
  if (_timedActions.has(key)) return

  const entry = {
    type,
    action,
    durationMs,
    startedAt: performance.now(),
    timeoutId: null
  }

  entry.timeoutId = setTimeout(() => finishTimedAction(key), durationMs)
  _timedActions.set(key, entry)
  ensureTimedActionsRenderLoop()
  render()
}

window.executeAction = (type, index) => {
  if (state.runEnded) return
  const actionsList = type === 'repeatable' ? state.repeatableActions : state.specialActions
  const action = actionsList[index]

  const ignoreRequirements = !!state.devIgnoreRequirements
  if (!action) return

  const actionKey = getActionKey(type, action)
  if (!ignoreRequirements) {
    const cdMs = getActionCooldownRemainingMs(actionKey)
    if (cdMs > 0) return
  }
  if (action.disabled && !ignoreRequirements) return

  try { playSfx('click') } catch (_) {}

  // Optional onStart hook (used to lock in story route choices immediately)
  if (typeof action.onStart === 'function') {
    let ok = true
    if (ignoreRequirements) {
      const snap = {
        stamina: state.stamina,
        qi: state.qi,
        copper: state.copper,
        silver: state.silver,
        gold: state.gold,
        spiritStonesLow: state.spiritStonesLow,
        spiritStonesMid: state.spiritStonesMid,
        spiritStonesHigh: state.spiritStonesHigh,
        luck: state.luck
      }
      ok = action.onStart()
      // Restore currencies/stamina so "ignore requirements" doesn't spend resources.
      state.stamina = snap.stamina
      state.qi = snap.qi
      state.copper = snap.copper
      state.silver = snap.silver
      state.gold = snap.gold
      state.spiritStonesLow = snap.spiritStonesLow
      state.spiritStonesMid = snap.spiritStonesMid
      state.spiritStonesHigh = snap.spiritStonesHigh
      state.luck = snap.luck
    } else {
      ok = action.onStart()
    }
    if (ok === false && !ignoreRequirements) {
      render()
      saveGame()
      return
    }
  }

  // Optional costs
  if (!ignoreRequirements) {
    const costMap = [
      ['costCopper', 'copper'],
      ['costSilver', 'silver'],
      ['costGold', 'gold'],
      ['costSpiritStonesLow', 'spiritLow'],
      ['costSpiritStonesMid', 'spiritMid'],
      ['costSpiritStonesHigh', 'spiritHigh']
    ]
    for (const [key, cur] of costMap) {
      const amt = Number(action?.[key])
      if (!Number.isFinite(amt) || amt <= 0) continue
      if (!canAffordPrice(cur, amt)) return
    }
    for (const [key, cur] of costMap) {
      const amt = Number(action?.[key])
      if (!Number.isFinite(amt) || amt <= 0) continue
      spendCurrency(cur, amt)
    }
  }

  const durationMs = getActionDurationMs(type, action)
  if (durationMs > 0) {
    try { playSfx('start') } catch (_) {}
    if (ignoreRequirements) {
      if (isActionRunning(actionKey)) {
        finishTimedActionWithOptions(actionKey, { ignoreCooldown: true })
        return
      }
      startTimedAction(type, action, durationMs)
      finishTimedActionWithOptions(actionKey, { ignoreCooldown: true })
      return
    }

    startTimedAction(type, action, durationMs)
    saveGame()
    return
  }

  // Special actions are one-time. Remove by identity (not by index) so callbacks
  // can safely mutate state.specialActions without breaking removal.
  if (type === 'special') {
    state.specialActions = state.specialActions.filter(a => a !== action)
  }
  
  // Execute the action's callback
  if (action.callback) {
    action.callback()
  }

  try { playSfx('complete') } catch (_) {}

  // Apply cooldown for instant actions.
  if (!ignoreRequirements) {
    const cd = Number(action?.cooldownSeconds)
    if (Number.isFinite(cd) && cd > 0) setActionCooldownSeconds(actionKey, cd)
  }
  
  render()
  saveGame()
}

window.advanceRealm = () => {
  const nextCost = getNextCultivationCost()
  if (!nextCost.cost || state.qi < nextCost.cost) return
  
  state.qi -= nextCost.cost
  
  const isLastSubRealm = state.cultivationSubIndex === 8
  const currentRealm = getCurrentCultivationRealm()
  
  if (isLastSubRealm && nextCost.type === 'breakthrough') {
    // Major breakthrough - check if manual is required
    if (state.cultivationMajorIndex === 0 && !state.hasManual) {
      log('You need a cultivation manual to breakthrough to the next major realm!')
      state.qi += nextCost.cost // Refund Qi
      return
    }
    
    // Add corruption if on demon path
    if (state.isDemonPath && currentRealm.data.corruptionGain) {
      addCorruptionPercent(currentRealm.data.corruptionGain, 'Breakthrough')
    }

    // Demon path: lifespan gain on major breakthrough
    if (state.isDemonPath) {
      const majorIndexBefore = clampNonNegativeInt(state.cultivationMajorIndex)
      const majorNumber = majorIndexBefore + 1
      const years = (majorNumber >= 6) ? 2000 : 1000
      state.expectedLifespanMonths = clampNonNegativeInt(state.expectedLifespanMonths) + (years * 12)
      log(`🕰️ Lifespan extended by ${years} years! Expected Lifespan: ${splitYearsMonths(state.expectedLifespanMonths).years} years.`)
    }
    
    state.cultivationMajorIndex++
    state.cultivationSubIndex = 0
    const newRealm = getCurrentCultivationRealm()
    updateCombatStats() // Update strength and health with new realm multipliers
    log(`🌟 BREAKTHROUGH! You advance to ${newRealm.major} ${newRealm.sub}!`)

    try { syncBestMajorRealm() } catch (_) {}
    try { saveMeta() } catch (_) {}
    try { leaderboardScheduleSync('major_breakthrough') } catch (_) {}

    // Run ends only when reaching Major Realm 20, or Demonic Major Realm 10.
    const majorNumber = clampNonNegativeInt(state.cultivationMajorIndex) + 1
    if (!state.isDemonPath && majorNumber >= 20) {
      log('You have reached the 20th Major Realm. Your run ends.')
      window.endRunToRebirth({ actionName: 'Reincarnate.' })
      return
    }
    if (state.isDemonPath && majorNumber >= 10) {
      log('You have reached the 10th Demonic Major Realm. Your run ends.')
      window.endRunToRebirth({ actionName: 'Reincarnate.' })
      return
    }
  } else {
    // Minor advancement
    state.cultivationSubIndex++
    const newRealm = getCurrentCultivationRealm()

    const lifespanGainMonths = state.isDemonPath
      ? (() => {
        const majorNumber = clampNonNegativeInt(state.cultivationMajorIndex) + 1
        const years = (majorNumber >= 6) ? 1000 : 500
        return years * 12
      })()
      : getLifespanGainMonthsForMinorAdvance(state.cultivationMajorIndex, state.cultivationSubIndex)
    if (lifespanGainMonths > 0) {
      state.expectedLifespanMonths = clampNonNegativeInt(state.expectedLifespanMonths) + lifespanGainMonths
      const gainYears = Math.floor(lifespanGainMonths / 12)
      const expectedYears = splitYearsMonths(state.expectedLifespanMonths).years
      log(`🕰️ Lifespan extended by ${gainYears} year${gainYears === 1 ? '' : 's'}! Expected Lifespan: ${expectedYears} years.`)
    }

    updateCombatStats() // Update strength and health with new realm multipliers
    log(`📈 You advance to ${newRealm.major} ${newRealm.sub}!`)

    try { syncBestMajorRealm() } catch (_) {}
    try { saveMeta() } catch (_) {}
    try { leaderboardScheduleSync('minor_advance') } catch (_) {}
  }
  
  render()
  saveGame()
}

window.meetFakeImmortal = () => {
  state.hasMetFakeImmortal = true
  state.phase = 'FAKE_IMMORTAL'
  render()
}

window.acceptImmortal = () => {
  state.copper -= 30
  state.hasPaidFakeImmortal = true
  log('You pay 30 copper to the "immortal"...')
  log('He smirks, pockets the money, and vanishes in a puff of smoke.')
  log('You have been scammed.')
  
  setTimeout(() => {
    state.phase = 'FARMING'
    
    // Add buy axe special action
    if (!state.specialActions.find(a => a.name && a.name.includes('Buy Axe'))) {
      state.specialActions.push({
        name: 'Buy Axe (50 Copper)',
        icon: '🪓',
        disabled: state.copper < 50,
        callback: () => window.buyAxe()
      })
    }
    
    render()
    saveGame()
    log('Dejected but wiser, you return to the fields.')
  }, 2000)
}

window.rejectImmortal = () => {
  log('You reject the suspicious "immortal" and walk away.')
  
  setTimeout(() => {
    state.phase = 'FARMING'
    
    // Add buy axe special action
    if (!state.specialActions.find(a => a.name && a.name.includes('Buy Axe'))) {
      state.specialActions.push({
        name: 'Buy Axe (50 Copper)',
        icon: '🪓',
        disabled: state.copper < 50,
        callback: () => window.buyAxe()
      })
    }
    
    render()
    saveGame()
    log('You return to the fields, looking for new opportunities.')
  }, 1500)
}

window.buyAxe = () => {
  if (state.copper < 50) return
  
  state.copper -= 50
  
  // Add axe to inventory
  addToInventory({
    name: 'Rusted Axe',
    icon: '🪓',
    description: 'A basic axe for chopping wood'
  })
  
  log('🪓 You buy a rusted axe! You can now chop wood.')
  
  // Unlock wood phase
  state.hasUnlockedWood = true
  
  // Replace farming actions with wood chopping actions
  state.repeatableActions = [
    {
      name: 'Rest',
      icon: '😴',
      disabled: false,
      callback: () => window.rest()
    },
    {
      name: 'Chop Wood',
      icon: '🪓',
      disabled: false,
      callback: () => window.chopWood()
    },
    {
      name: 'Sell Wood',
      icon: '💰',
      disabled: false,
      callback: () => window.sellWood()
    }
  ]
  
  // Explore the Nearby Forest removed (and the exploration chain removed).
  
  render()
  saveGame()
}

window.helpNeighboringVillage = () => {
  log('🏘️ You decide to help the neighboring village with their needs.')
  
  // Remove this special action
  state.specialActions = state.specialActions.filter(a => !a.name.includes('Help Neighboring Village'))
  
  // Add repeatable action for gathering materials
  state.repeatableActions.push({
    name: 'Gather Materials for Village',
    icon: '📦',
    disabled: false,
    callback: () => window.gatherMaterialsForVillage()
  })
  
  render()
  saveGame()
}

window.gatherMaterialsForVillage = () => {
  if (!state.devIgnoreRequirements && state.villageMaterialsCooldown > 0) return
  
  // Set 2 second cooldown
  if (!state.devIgnoreRequirements) state.villageMaterialsCooldown = 2
  
  // Give rewards
  state.copper += 10
  const silverGained = Math.floor(2 * state.silverMultiplier)
  state.silver += silverGained
  
  log(`📦 You gather materials for the village! +10 copper, +${silverGained} silver`)
  
  render()
  saveGame()
}

// ============================================================================
// 100 SILVER ROUTE STORY (Business vs Cloud Sect)
// ============================================================================

window.chooseSteadyCoin = () => {
  // Effects are applied via the action object callback; this function exists
  // for action rehydration.
  state.hasChosen100SilverRoute = true
  state.isBusinessOriented = true
  state.hasStartedBusiness = true
  state.incomeCycleSeconds = 0
  state.businessCycleSeconds = 5
  state.businessIncomePerCycle = { silver: 5, copper: 15, gold: 0, spiritStonesLow: 0 }
  state.businessUpgradedExpansion = false
  state.businessUpgradedEmployees = false
  state.businessChoseStabilityIsntEnough = false
  state.businessChoseNoMoreGames = false
  state.businessMerchantGuildPartnered = false
  state.businessNervousNeighboringSectOpened = false
  state.businessNeighboringSectNegotiated = false
  state.businessNeighboringSectDenied = false
  state.businessSectRetaliationResolved = false
  state.businessFoundMysteriousManual = false
  state.businessGuildRetaliationPrepared = false
  state.businessCarpetBombDone = false
  render()
  saveGame()
}

function applyBusinessIncomeMultiplier(multiplier) {
  const m = Number(multiplier)
  if (!Number.isFinite(m) || m < 0) return

  const income = (state.businessIncomePerCycle && typeof state.businessIncomePerCycle === 'object')
    ? state.businessIncomePerCycle
    : { silver: 5, copper: 15, gold: 0, spiritStonesLow: 0 }

  const next = {
    copper: Math.floor(clampNonNegativeInt(income.copper) * m),
    silver: Math.floor(clampNonNegativeInt(income.silver) * m),
    gold: Math.floor(clampNonNegativeInt(income.gold) * m),
    spiritStonesLow: Math.floor(clampNonNegativeInt(income.spiritStonesLow) * m)
  }

  state.businessIncomePerCycle = {
    copper: clampNonNegativeInt(next.copper),
    silver: clampNonNegativeInt(next.silver),
    gold: clampNonNegativeInt(next.gold),
    spiritStonesLow: clampNonNegativeInt(next.spiritStonesLow)
  }
}

window.businessExpansionOpportunity = () => {
  state.businessUpgradedExpansion = true
  state.incomeCycleSeconds = 0
  state.businessCycleSeconds = 5
  state.businessIncomePerCycle = { silver: 25, copper: 35, gold: 1, spiritStonesLow: 0 }
  log('📈 Expansion complete. New passive income: +25 Silver, +35 Copper, +1 Gold per cycle.')
  render()
  saveGame()
}

window.businessHiringEmployees = () => {
  state.businessUpgradedEmployees = true
  state.incomeCycleSeconds = 0
  state.businessCycleSeconds = 3.5
  log('👥 Employees hired. Income cycle time reduced to 3.5 seconds.')
  render()
  saveGame()
}

window.businessStabilityIsntEnough = () => {
  state.businessChoseStabilityIsntEnough = true
  state.businessChoseNoMoreGames = false

  state.incomeCycleSeconds = 0
  state.businessIncomePerCycle = { silver: 100, copper: 200, gold: 10, spiritStonesLow: 0 }

  // Cleanup (reload-safe injection should not re-add after choice)
  state.specialActions = state.specialActions.filter(a => a?.name !== 'Stability Isn’t Enough' && a?.name !== 'No More Games')

  log('🏦 Stability isn’t enough. New passive income: +200 Copper, +100 Silver, +10 Gold per cycle.')
  render()
  saveGame()
}

window.businessNoMoreGames = () => {
  state.businessChoseNoMoreGames = true
  state.businessChoseStabilityIsntEnough = false

  state.incomeCycleSeconds = 0
  state.businessIncomePerCycle = { silver: 5, copper: 5, gold: 30, spiritStonesLow: 20 }

  // Cleanup (reload-safe injection should not re-add after choice)
  state.specialActions = state.specialActions.filter(a => a?.name !== 'Stability Isn’t Enough' && a?.name !== 'No More Games')

  log('🕶️ No more games. New passive income: +5 Copper, +5 Silver, +30 Gold, +20 Low Spirit Stones per cycle.')
  render()
  saveGame()
}

window.businessMerchantGuildSeeksPartnership = () => {
  state.businessMerchantGuildPartnered = true

  state.incomeCycleSeconds = 0
  applyBusinessIncomeMultiplier(0.75)
  state.businessCycleSeconds = 0.9

  // Cleanup
  state.specialActions = state.specialActions.filter(a => a?.name !== 'A Merchant Guild Seeks Partnership')

  log('🤝 A Merchant Guild partnership forms. Income reduced by 25%, cycle time becomes 0.9 seconds.')
  render()
  saveGame()
}

window.businessNervousNeighboringSect = () => {
  state.businessNervousNeighboringSectOpened = true
  state.specialActions = state.specialActions.filter(a => a?.name !== 'Nervous Neighboring Sect')
  render()
  saveGame()
}

window.businessNegotiateWithSect = () => {
  state.businessNeighboringSectNegotiated = true
  state.businessNeighboringSectDenied = false

  applyBusinessIncomeMultiplier(0.85)

  // Cleanup
  state.specialActions = state.specialActions.filter(a => a?.name !== 'Negotiate With Sect' && a?.name !== 'Deny Negoitation')

  log('🕊️ You negotiate with the sect. Income reduced by 15%. The sect backs off... for now.')
  render()
  saveGame()
}

window.businessDenyNegoitation = () => {
  state.businessNeighboringSectDenied = true
  state.businessNeighboringSectNegotiated = false

  // Cleanup
  state.specialActions = state.specialActions.filter(a => a?.name !== 'Negotiate With Sect' && a?.name !== 'Deny Negoitation')

  render()
  saveGame()
}

window.businessSectRetaliation = () => {
  state.businessSectRetaliationResolved = true
  state.specialActions = state.specialActions.filter(a => a?.name !== 'Sect Retaliation')
  render()
  saveGame()
}

window.businessFindMysteriousManualInRubble = () => {
  state.businessFoundMysteriousManual = true
  state.specialActions = state.specialActions.filter(a => a?.name !== 'Find Mysterious Manual in Rubble')

  addToInventory({
    name: 'Hidden Heavenly Demon Manual',
    icon: '📖',
    description: 'A forbidden-yet-radiant tome. Its techniques feel like sunlight cast through smoke.',
    equippable: true
  })

  log('You recover a heavenly demon manual from the rubble.')
  render()
  saveGame()
}

// ============================================================================
// Business: Heavenly Demon Opportunity (continues after denial branch manual)
// ============================================================================

window.businessFollowUnseenWatcher = () => {
  state.businessHeavenlyDemonWatcherFollowed = true
  // Cleanup
  state.specialActions = state.specialActions.filter(a => a?.name !== 'Follow the Unseen Watcher')
  render()
  saveGame()
}

window.businessOfferOfLifetime = () => {
  state.businessHeavenlyDemonOfferMade = true
  // Cleanup (choices will be injected reload-safe)
  state.specialActions = state.specialActions.filter(a => a?.name !== 'Offer of a lifetime')
  render()
  saveGame()
}

window.businessAcceptHeavenlyDemonOffer = () => {
  state.businessHeavenlyDemonOfferResolved = true
  state.businessHeavenlyDemonOfferAccepted = true
  state.businessHeavenlyDemonOfferDenied = false

  // Keep the manual (already granted) and join the Heavenly Demon Sect.
  window.joinHeavenlyDemonSect()

  // Cleanup
  state.specialActions = state.specialActions.filter(a => a?.name !== 'Accept' && a?.name !== 'Deny')
  log('You accept the offer. The Heavenly Demon Sect welcomes you.')
  render()
  saveGame()
}

window.businessDenyHeavenlyDemonOffer = () => {
  state.businessHeavenlyDemonOfferResolved = true
  state.businessHeavenlyDemonOfferDenied = true
  state.businessHeavenlyDemonOfferAccepted = false
  // You keep the Heavenly Demon Manual and can still use its moves (no additional changes).

  // Cleanup
  state.specialActions = state.specialActions.filter(a => a?.name !== 'Accept' && a?.name !== 'Deny')
  log('🚫 You deny the offer. You keep the manual — and your freedom.')
  render()
  saveGame()
}

// ============================================================================
// Business: post–Carpet Bomb escalation chain
// ============================================================================

function getBusinessIncomeCycleCost(multCycles) {
  const cycles = Math.max(0, Math.floor(Number(multCycles) || 0))
  const income = (state.businessIncomePerCycle && typeof state.businessIncomePerCycle === 'object') ? state.businessIncomePerCycle : {}
  const get = (k) => clampNonNegativeInt(income[k])
  return {
    copper: get('copper') * cycles,
    silver: get('silver') * cycles,
    gold: get('gold') * cycles,
    spiritStonesLow: get('spiritStonesLow') * cycles,
    spiritStonesMid: get('spiritStonesMid') * cycles,
    spiritStonesHigh: get('spiritStonesHigh') * cycles
  }
}

function canAffordCostObject(cost) {
  const c = cost && typeof cost === 'object' ? cost : {}
  if (!state.devIgnoreRequirements) {
    if (clampNonNegativeInt(state.copper) < clampNonNegativeInt(c.copper)) return false
    if (clampNonNegativeInt(state.silver) < clampNonNegativeInt(c.silver)) return false
    if (clampNonNegativeInt(state.gold) < clampNonNegativeInt(c.gold)) return false
    if (clampNonNegativeInt(state.spiritStonesLow) < clampNonNegativeInt(c.spiritStonesLow)) return false
    if (clampNonNegativeInt(state.spiritStonesMid) < clampNonNegativeInt(c.spiritStonesMid)) return false
    if (clampNonNegativeInt(state.spiritStonesHigh) < clampNonNegativeInt(c.spiritStonesHigh)) return false
  }
  return true
}

function spendCostObject(cost) {
  const c = cost && typeof cost === 'object' ? cost : {}
  if (!state.devIgnoreRequirements) {
    state.copper = clampNonNegativeInt(state.copper) - clampNonNegativeInt(c.copper)
    state.silver = clampNonNegativeInt(state.silver) - clampNonNegativeInt(c.silver)
    state.gold = clampNonNegativeInt(state.gold) - clampNonNegativeInt(c.gold)
    state.spiritStonesLow = clampNonNegativeInt(state.spiritStonesLow) - clampNonNegativeInt(c.spiritStonesLow)
    state.spiritStonesMid = clampNonNegativeInt(state.spiritStonesMid) - clampNonNegativeInt(c.spiritStonesMid)
    state.spiritStonesHigh = clampNonNegativeInt(state.spiritStonesHigh) - clampNonNegativeInt(c.spiritStonesHigh)
  }
}

window.businessMergeWithPrivateMilitary = () => {
  state.businessMergedWithMilitary = true
  state.specialActions = state.specialActions.filter(a => a?.name !== 'Merge With the Private Military')
  log('You merge with the private military. You become a General.')
  render()
  saveGame()
}

window.businessBombTesting = () => {
  const cost = getBusinessIncomeCycleCost(20)
  if (!canAffordCostObject(cost)) return
  spendCostObject(cost)
  state.businessBombTestingDone = true
  state.specialActions = state.specialActions.filter(a => a?.name !== 'Bomb Testing')
  log('Bomb testing complete. The button press feels divine.')
  render()
  saveGame()
}

window.businessAntiMatterCreation = () => {
  const cost = getBusinessIncomeCycleCost(40)
  if (!canAffordCostObject(cost)) return
  spendCostObject(cost)
  state.businessAntiMatterCreationDone = true
  state.specialActions = state.specialActions.filter(a => a?.name !== 'Anti-Matter Creation')
  log('Anti-matter creation succeeds. The sky begins to fracture.')
  render()
  saveGame()
}

window.businessWarping = () => {
  const cost = getBusinessIncomeCycleCost(60)
  if (!canAffordCostObject(cost)) return
  spendCostObject(cost)
  state.businessWarpingDone = true
  state.specialActions = state.specialActions.filter(a => a?.name !== 'Warping')
  log('Warping awakens. Anywhere. Everywhere. Someone notices.')
  render()
  saveGame()
}

window.businessStormTheHeavens = () => {
  // Locked until Major Realm ≥ 15 (index 14)
  if (state.cultivationMajorIndex < 14) return
  state.businessStormHeavensStarted = true
  // Remove the button immediately to prevent double-fire.
  state.specialActions = state.specialActions.filter(a => a?.name !== 'Storm the Heavens')
  // Cinematic is implemented separately; completion sets `businessStormHeavensCinematicDone`.
  window.runHeavensAssaultCinematic()
}

// ============================================================================
// Heavens boss fight + endings
// ============================================================================

window.heavensClashImmortalGod = () => {
  if (state.inCombat) return
  if (state.heavensEnding) return

  state.heavensImmortalGodClashStarted = true

  // Boss scaling: Major Realm 15 average (index 14), projected from player's bloodline + current sect multipliers.
  const projected = getProjectedPlayerCombatStatsAtMajorRealm(14)
  const bossHp = Math.max(1, clampNonNegativeInt(projected.maxHealth))
  const bossStr = Math.max(1, clampNonNegativeInt(projected.strength))

  state.combatContext = { type: 'heavensImmortalGod' }
  state.questReturnPhase = state.phase
  closePanelsForCombatStart()
  state.inCombat = true
  state.enemy = applyHardModeEnemyScaling({
    name: 'Immortal God',
    icon: '👁️',
    health: bossHp,
    maxHealth: bossHp,
    strength: bossStr
  })
  state.phase = 'COMBAT'
  ensureCombatLoop()

  // Cleanup the button if present.
  state.specialActions = state.specialActions.filter(a => a?.name !== 'Clash with the Immortal God')

  log('You clash with the Immortal God!')
  render()
  saveGame()
}

function handleHeavensImmortalGodCombatVictory(_enemyName) {
  const ctx = state.combatContext
  if (!ctx || ctx.type !== 'heavensImmortalGod') return
  state.combatContext = null

  // 🟡 VICTORY — FALL OF HEAVEN (FALSE TRIUMPH END)
  state.heavensEnding = null
  state.specialActions = state.specialActions.filter(a => a?.name !== 'Clash with the Immortal God')

  // Spawn the demon apocalypse chain as special actions.
  const upsert = (next) => {
    const name = String(next?.name || '')
    if (!name) return
    const idx = state.specialActions.findIndex(a => a?.name === name)
    if (idx === -1) state.specialActions.push(next)
    else state.specialActions[idx] = { ...state.specialActions[idx], ...next }
  }

  upsert({
    name: 'Fall of Heaven',
    icon: '🏛️',
    description: 'Heaven collapses. The world becomes corrupted. Demons pour into the mortal realm. “You didn\'t know this would happen.”',
    disabled: false,
    callback: () => window.heavensFallOfHeaven()
  })
}

function handleHeavensImmortalGodCombatDefeat() {
  const ctx = state.combatContext
  if (!ctx || ctx.type !== 'heavensImmortalGod') return false

  // 🔴 DEFEAT — TARTARUS DESCENT END
  state.inCombat = false
  state.enemy = null
  state.combatContext = null

  state.phase = state.questReturnPhase || 'FARMING'
  state.questReturnPhase = null
  ensureCombatLoop()

  state.heavensEnding = 'tartarusEaten'
  state.specialActions = state.specialActions.filter(a => a?.name !== 'Clash with the Immortal God')

  openStoryDialog(
    'ENDING',
    'Tartarus Descent',
    [
      '🕳️ You fall from the heavens... and land in Tartarus.',
      'Everything hunts you. No hope. No escape.',
      '☠️ Final Result: You are eaten alive by monsters.'
    ],
    [
      { label: 'The end.', onClick: 'window.heavensEndingEndRun()' }
    ],
    {
      mode: 'PAGE_SWAP',
      sentencesPerPage: 1,
      pageHoldMs: 9000,
      transitionMs: 1100,
      choicesFadeInDelayMs: 950
    }
  )

  render()
  saveGame()
  return true
}

window.heavensFallOfHeaven = () => {
  if (state.heavensEnding) return
  state.specialActions = state.specialActions.filter(a => a?.name !== 'Fall of Heaven')
  log('😨 Demons flood the mortal realm. Endless wars begin.')
  if (!state.specialActions.some(a => a?.name === 'Final confrontation: Demon King')) {
    state.specialActions.push({
      name: 'Final confrontation: Demon King',
      icon: '👑',
      description: 'Endless demon wars. Earth cannot be reclaimed. The Demon King steps onto the battlefield.',
      disabled: false,
      callback: () => window.heavensFinalConfrontationDemonKing()
    })
  }

  openStoryDialog(
    'ENDING',
    'False Ending — Fall of Heaven',
    [
      '🏛️ Heaven collapses. You stand among ruins you mistook for victory.',
      '😨 Demons flood the mortal realm. Endless wars begin.',
      'A new king rises from the chaos.'
    ],
    [
      { label: 'Continue.', onClick: 'window.closeStoryDialog()' }
    ],
    {
      mode: 'PAGE_SWAP',
      sentencesPerPage: 1,
      pageHoldMs: 8500,
      transitionMs: 1100,
      choicesFadeInDelayMs: 950
    }
  )

  render()
  saveGame()
}

window.heavensFinalConfrontationDemonKing = () => {
  // Final Result: you die by the Demon King's hand.
  state.specialActions = state.specialActions.filter(a => a?.name !== 'Final confrontation: Demon King')
  state.heavensEnding = 'demonKingDeath'

  openStoryDialog(
    'ENDING',
    'Final Confrontation',
    [
      '👑 The Demon King smiles.',
      '☠️ Final Result: You die by the Demon King\'s hand.'
    ],
    [
      { label: 'Continue.', onClick: 'window.closeStoryDialog()' }
    ],
    {
      mode: 'PAGE_SWAP',
      sentencesPerPage: 1,
      pageHoldMs: 8500,
      transitionMs: 1100,
      choicesFadeInDelayMs: 950
    }
  )
  render()
  saveGame()
}

window.heavensEndingEndRun = () => {
  window.closeStoryDialog()
}

// ============================================================================
// Carpet Bomb cinematic (WebGL/GLSL)
// ============================================================================

let __carpetBombRafId = null
let __carpetBombResizeHandler = null

function stopCarpetBombCinematic() {
  if (__carpetBombRafId) {
    try { cancelAnimationFrame(__carpetBombRafId) } catch (_) {}
    __carpetBombRafId = null
  }
  if (__carpetBombResizeHandler) {
    try { window.removeEventListener('resize', __carpetBombResizeHandler) } catch (_) {}
    __carpetBombResizeHandler = null
  }

  try { __clearCinematicTimers(__carpetBombTimers) } catch (_) {}
}

function runCarpetBombCinematicCore(opts) {
  const options = opts && typeof opts === 'object' ? opts : {}
  const onDone = typeof options.onDone === 'function' ? options.onDone : null

  // Ensure other cinematics stop driving the overlay.
  try { stopDemonCinematicTimers() } catch (_) {}
  stopCarpetBombCinematic()

  const el = ensureCinematicOverlay()
  el.classList.remove('active', 'impact', 'fade-out', 'heavens-assault', 'carpet-bomb')
  void el.offsetWidth
  el.classList.add('active', 'canvas-mode', 'carpet-bomb')

  const canvas = el.querySelector('.cinematic-canvas')
  const gl = canvas && canvas.getContext ? (canvas.getContext('webgl2', { alpha: true, antialias: true }) || canvas.getContext('webgl', { alpha: true, antialias: true })) : null
  if (!canvas || !gl) {
    try { el.remove() } catch (_) {}
    if (onDone) onDone()
    render()
    saveGame()
    return
  }

  function compileShader(type, src) {
    const sh = gl.createShader(type)
    gl.shaderSource(sh, src)
    gl.compileShader(sh)
    if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
      const msg = gl.getShaderInfoLog(sh) || 'shader compile failed'
      try { gl.deleteShader(sh) } catch (_) {}
      throw new Error(msg)
    }
    return sh
  }

  function createProgram(vsSrc, fsSrc) {
    const vs = compileShader(gl.VERTEX_SHADER, vsSrc)
    const fs = compileShader(gl.FRAGMENT_SHADER, fsSrc)
    const prog = gl.createProgram()
    gl.attachShader(prog, vs)
    gl.attachShader(prog, fs)
    gl.linkProgram(prog)
    try { gl.deleteShader(vs) } catch (_) {}
    try { gl.deleteShader(fs) } catch (_) {}
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
      const msg = gl.getProgramInfoLog(prog) || 'program link failed'
      try { gl.deleteProgram(prog) } catch (_) {}
      throw new Error(msg)
    }
    return prog
  }

  const MAX_BOMBS = 8
  const planeDuration = 12.0
  const dropEvery = 1.5
  const firstDrop = 1.0
  const fallTime = 1.35
  const lastDrop = firstDrop + dropEvery * (MAX_BOMBS - 1)
  const usableDrops = Math.max(3, Math.min(MAX_BOMBS, Math.floor((planeDuration - firstDrop) / dropEvery) + 1))

  const bombTimes = new Float32Array(MAX_BOMBS)
  const bombXs = new Float32Array(MAX_BOMBS)
  for (let i = 0; i < MAX_BOMBS; i++) {
    if (i < usableDrops) {
      const t = firstDrop + dropEvery * i
      bombTimes[i] = t
      const p = Math.min(1, Math.max(0, t / planeDuration))
      // Plane flies right-to-left.
      bombXs[i] = (1.2 - (1.4 * p))
    } else {
      bombTimes[i] = -1
      bombXs[i] = -10
    }
  }

  // Audio: flyover + timed blasts (best-effort; safe if audio disabled)
  try {
    __clearCinematicTimers(__carpetBombTimers)
    const planeCueSec = [0.25, 3.8, 7.2, 10.2]
    for (const s of planeCueSec) {
      __carpetBombTimers.push(setTimeout(() => { try { playSfx('plane') } catch (_) {} }, Math.floor(s * 1000)))
    }

    for (let i = 0; i < usableDrops; i++) {
      const impactSec = (bombTimes[i] + fallTime)
      if (!Number.isFinite(impactSec) || impactSec <= 0) continue
      __carpetBombTimers.push(setTimeout(() => { try { playSfx('explosion') } catch (_) {} }, Math.floor(impactSec * 1000)))
      __carpetBombTimers.push(setTimeout(() => { try { playSfx('explosion') } catch (_) {} }, Math.floor(impactSec * 1000 + 110)))
    }
  } catch (_) {}

  const totalDuration = planeDuration + fallTime + 2.2
  const fadeDuration = 0.9
  const fadeStart = totalDuration
  const endAt = totalDuration + fadeDuration

  const vsSrc = `#version 300 es
  precision highp float;
  out vec2 vUv;
  void main() {
    // Fullscreen triangle
    vec2 p = vec2((gl_VertexID == 1) ? 3.0 : -1.0, (gl_VertexID == 2) ? 3.0 : -1.0);
    vUv = 0.5 * (p + 1.0);
    gl_Position = vec4(p, 0.0, 1.0);
  }
  `

  const fsSrc = `#version 300 es
  precision highp float;
  in vec2 vUv;
  out vec4 fragColor;

  uniform vec2 uRes;
  uniform float uTime;
  uniform float uFade;
  uniform int uBombCount;
  uniform float uBombTimes[${MAX_BOMBS}];
  uniform float uBombXs[${MAX_BOMBS}];

  float hash11(float p) {
    p = fract(p * 0.1031);
    p *= p + 33.33;
    p *= p + p;
    return fract(p);
  }

  float sdCircle(vec2 p, float r) {
    return length(p) - r;
  }

  float rect(vec2 p, vec2 b) {
    vec2 d = abs(p) - b;
    return max(d.x, d.y);
  }

  float buildingHeightAt(float x) {
    // A sect compound: fewer structures, lots of open space.
    float cols = 7.0;
    float id = floor(x * cols);
    float r = hash11(id + 4.0);
    // ~45% of columns empty.
    if (r < 0.45) return 0.0;
    float h = 0.10 + 0.20 * hash11(id + 6.0);
    // rare taller pagoda tower
    h += step(0.86, hash11(id + 9.0)) * 0.16;
    return h;
  }

  vec2 shakeOffset(float t) {
    float amp = 0.0;
    for (int i = 0; i < ${MAX_BOMBS}; i++) {
      float dt = t - (uBombTimes[i] + ${fallTime.toFixed(2)});
      if (dt > 0.0 && dt < 0.55) {
        amp += exp(-8.5 * dt) * 0.018;
      }
    }
    return vec2(sin(71.0 * t), cos(59.0 * t)) * amp;
  }

  void main() {
    vec2 uv = vUv;
    uv += shakeOffset(uTime);

    // Letterbox-ish safe clamp (avoid sampling outside)
    uv = clamp(uv, vec2(0.0), vec2(1.0));

    float groundY = 0.18;

    // Sky gradient
    vec3 skyA = vec3(0.04, 0.07, 0.12);
    vec3 skyB = vec3(0.18, 0.22, 0.30);
    vec3 col = mix(skyA, skyB, smoothstep(0.0, 1.0, uv.y));

    // Ground
    float g = smoothstep(groundY, groundY - 0.01, uv.y);
    col = mix(col, vec3(0.05, 0.05, 0.06), g);

    // Sect structures band (sparse)
    float colsN = 7.0;
    float cx = floor(uv.x * colsN);
    float x0 = cx / colsN;
    float x1 = (cx + 1.0) / colsN;
    float h = buildingHeightAt(uv.x);
    float inCol = step(x0, uv.x) * step(uv.x, x1);
    float b = inCol * step(groundY, uv.y) * step(uv.y, groundY + h);
    // Courtyard walls/roofline feel
    vec3 base = mix(vec3(0.10, 0.10, 0.12), vec3(0.18, 0.18, 0.22), hash11(cx + 2.0));
    float roofY = groundY + h;
    float roof = inCol * step(roofY - 0.014, uv.y) * step(uv.y, roofY + 0.006);
    col = mix(col, base, b);
    col = mix(col, vec3(0.28, 0.22, 0.14), roof);

    // Plane (more detailed silhouette + shading)
    float px = mix(1.20, -0.20, clamp(uTime / ${planeDuration.toFixed(2)}, 0.0, 1.0));
    float py = 0.78;
    vec2 p = (uv - vec2(px, py));
    float body = rect(p, vec2(0.075, 0.012));
    float nose = sdCircle(p - vec2(-0.075, 0.0), 0.013);
    float fus = min(body, nose);
    float wing = rect(uv - vec2(px - 0.010, py - 0.017), vec2(0.030, 0.007));
    float wing2 = rect(uv - vec2(px + 0.010, py - 0.010), vec2(0.020, 0.005));
    float tail = rect(uv - vec2(px + 0.060, py + 0.010), vec2(0.012, 0.014));
    float stab = rect(uv - vec2(px + 0.048, py - 0.004), vec2(0.018, 0.004));
    float planeSdf = min(fus, min(min(wing, wing2), min(min(tail, stab), 1.0)));
    float planeMask = smoothstep(0.012, -0.012, planeSdf);
    // simple metallic shading
    float shade = 0.65 + 0.35 * smoothstep(-0.10, 0.10, p.x);
    vec3 planeCol = mix(vec3(0.70, 0.73, 0.78), vec3(0.92, 0.92, 0.95), shade);
    // cockpit window
    float cockpit = smoothstep(0.010, 0.0, sdCircle(p - vec2(-0.030, 0.006), 0.010));
    planeCol = mix(planeCol, vec3(0.10, 0.18, 0.24), cockpit);
    col = mix(col, planeCol, planeMask);

    // Bombs + explosions + mushroom clouds
    for (int i = 0; i < ${MAX_BOMBS}; i++) {
      float dt = uTime - uBombTimes[i];
      if (uBombTimes[i] > 0.0 && dt > 0.0) {
        float bx = uBombXs[i];
        // nuke falling (body + fins)
        float t = dt;
        float by = 0.76 - (0.22 * t) - (0.34 * t * t);
        vec2 bp = uv - vec2(bx, by);
        // capsule-ish body
        float cyl = rect(bp, vec2(0.010, 0.020));
        float cap = sdCircle(bp - vec2(0.0, 0.020), 0.010);
        float cap2 = sdCircle(bp - vec2(0.0, -0.020), 0.010);
        float bodySdf = min(cyl, min(cap, cap2));
        // fins
        float fin1 = rect(bp - vec2(0.014, -0.020), vec2(0.006, 0.008));
        float fin2 = rect(bp - vec2(-0.014, -0.020), vec2(0.006, 0.008));
        float nukeSdf = min(bodySdf, min(fin1, fin2));
        float nukeMask = smoothstep(0.010, -0.010, nukeSdf);
        float metal = 0.55 + 0.45 * smoothstep(-0.020, 0.020, bp.y);
        vec3 nukeCol = mix(vec3(0.12, 0.13, 0.14), vec3(0.40, 0.42, 0.45), metal);
        // warning stripe
        float stripe = step(abs(bp.x), 0.010) * step(abs(bp.y - 0.004), 0.004);
        nukeCol = mix(nukeCol, vec3(0.85, 0.75, 0.20), stripe);
        col = mix(col, nukeCol, nukeMask);

        // impact/explosion at fixed fallTime
        float exT = uTime - (uBombTimes[i] + ${fallTime.toFixed(2)});
        float bh = buildingHeightAt(bx);
        float hitY = groundY + max(0.04, bh * 0.70);
        vec2 ep = uv - vec2(bx, hitY);
        if (exT > 0.0) {
          float boom = exp(-3.2 * exT);
          float r = 0.02 + 0.18 * (1.0 - exp(-6.0 * exT));
          float core = smoothstep(r, r - 0.02, length(ep));
          vec3 fire = mix(vec3(1.0, 0.86, 0.35), vec3(1.0, 0.25, 0.05), smoothstep(0.0, 1.0, exT));
          col += fire * core * boom;

          // mushroom cloud linger
          float cloudT = exT - 0.15;
          if (cloudT > 0.0) {
            float rise = min(0.20, 0.06 + 0.06 * cloudT);
            vec2 cp = uv - vec2(bx, hitY + rise);
            float puff1 = smoothstep(0.16, 0.0, sdCircle(cp + vec2(0.04, 0.02), 0.07));
            float puff2 = smoothstep(0.16, 0.0, sdCircle(cp + vec2(-0.02, 0.01), 0.06));
            float puff3 = smoothstep(0.16, 0.0, sdCircle(cp + vec2(0.01, 0.05), 0.08));
            float stem = smoothstep(0.03, 0.0, rect(cp + vec2(0.0, -0.05), vec2(0.02, 0.08)));
            float cloud = max(max(puff1, puff2), max(puff3, stem));
            float smoke = exp(-0.35 * cloudT);
            col = mix(col, vec3(0.22, 0.22, 0.24), cloud * smoke);
          }
        }
      }
    }

    // Fade out back to game
    col = mix(col, vec3(0.0), uFade);
    float alpha = 1.0 - uFade;
    fragColor = vec4(col, alpha);
  }
  `

  let program = null
  let timeStart = performance.now()
  let uTimeLoc, uResLoc, uFadeLoc, uBombCountLoc, uBombTimesLoc, uBombXsLoc

  try {
    program = createProgram(vsSrc, fsSrc)
    gl.useProgram(program)
    uTimeLoc = gl.getUniformLocation(program, 'uTime')
    uResLoc = gl.getUniformLocation(program, 'uRes')
    uFadeLoc = gl.getUniformLocation(program, 'uFade')
    uBombCountLoc = gl.getUniformLocation(program, 'uBombCount')
    uBombTimesLoc = gl.getUniformLocation(program, 'uBombTimes[0]')
    uBombXsLoc = gl.getUniformLocation(program, 'uBombXs[0]')
  } catch (e) {
    try { console.error(e) } catch (_) {}
    try { if (program) gl.deleteProgram(program) } catch (_) {}
    try { el.remove() } catch (_) {}
    if (onDone) onDone()
    render()
    saveGame()
    return
  }

  function resize() {
    const dpr = Math.max(1, window.devicePixelRatio || 1)
    const w = Math.floor(window.innerWidth * dpr)
    const h = Math.floor(window.innerHeight * dpr)
    canvas.width = w
    canvas.height = h
    canvas.style.width = '100%'
    canvas.style.height = '100%'
    gl.viewport(0, 0, w, h)
  }

  __carpetBombResizeHandler = () => resize()
  try { window.addEventListener('resize', __carpetBombResizeHandler) } catch (_) {}
  resize()

  function frame() {
    const now = performance.now()
    const t = (now - timeStart) / 1000
    const fade = t <= fadeStart ? 0 : Math.min(1, (t - fadeStart) / fadeDuration)

    gl.useProgram(program)
    gl.uniform2f(uResLoc, canvas.width, canvas.height)
    gl.uniform1f(uTimeLoc, t)
    gl.uniform1f(uFadeLoc, fade)
    gl.uniform1i(uBombCountLoc, usableDrops)
    if (uBombTimesLoc) gl.uniform1fv(uBombTimesLoc, bombTimes)
    if (uBombXsLoc) gl.uniform1fv(uBombXsLoc, bombXs)

    gl.disable(gl.DEPTH_TEST)
    gl.disable(gl.CULL_FACE)
    gl.clearColor(0, 0, 0, 0)
    gl.clear(gl.COLOR_BUFFER_BIT)
    gl.drawArrays(gl.TRIANGLES, 0, 3)

    if (t >= endAt) {
      stopCarpetBombCinematic()
      try { gl.useProgram(null) } catch (_) {}
      try { if (program) gl.deleteProgram(program) } catch (_) {}
      try { el.remove() } catch (_) {}
      if (onDone) onDone()
      render()
      saveGame()
      return
    }

    __carpetBombRafId = requestAnimationFrame(frame)
  }

  __carpetBombRafId = requestAnimationFrame(frame)
}

// ============================================================================
// Heavens Assault cinematic (WebGL/GLSL)
// ============================================================================

let __heavensRafId = null
let __heavensResizeHandler = null

let __heavensThreeRafId = null
let __heavensThreeResizeHandler = null
let __heavensThreeRenderer = null
let __heavensThreeScene = null
let __heavensThreeDispose = null

function stopHeavensCinematic() {
  if (__heavensRafId) {
    try { cancelAnimationFrame(__heavensRafId) } catch (_) {}
    __heavensRafId = null
  }
  if (__heavensResizeHandler) {
    try { window.removeEventListener('resize', __heavensResizeHandler) } catch (_) {}
    __heavensResizeHandler = null
  }
}

function stopHeavensThreeCinematic() {
  if (__heavensThreeRafId) {
    try { cancelAnimationFrame(__heavensThreeRafId) } catch (_) {}
    __heavensThreeRafId = null
  }
  if (__heavensThreeResizeHandler) {
    try { window.removeEventListener('resize', __heavensThreeResizeHandler) } catch (_) {}
    __heavensThreeResizeHandler = null
  }

  try { __clearCinematicTimers(__heavensThreeTimers) } catch (_) {}

  if (typeof __heavensThreeDispose === 'function') {
    try { __heavensThreeDispose() } catch (_) {}
  }
  __heavensThreeDispose = null
  __heavensThreeScene = null
  __heavensThreeRenderer = null
}

function __disposeThreeScene(scene) {
  if (!scene) return
  scene.traverse(obj => {
    if (obj && obj.geometry && typeof obj.geometry.dispose === 'function') {
      try { obj.geometry.dispose() } catch (_) {}
    }
    const mat = obj && obj.material
    if (Array.isArray(mat)) {
      for (const m of mat) {
        if (m && typeof m.dispose === 'function') {
          try { m.dispose() } catch (_) {}
        }
      }
    } else if (mat && typeof mat.dispose === 'function') {
      try { mat.dispose() } catch (_) {}
    }
  })
}

function runHeavensAssaultCinematicPart1ThreeCore(opts) {
  const options = opts && typeof opts === 'object' ? opts : {}
  const onDone = typeof options.onDone === 'function' ? options.onDone : null

  try { stopDemonCinematicTimers() } catch (_) {}
  try { stopCarpetBombCinematic() } catch (_) {}
  stopHeavensCinematic()
  stopHeavensThreeCinematic()

  const el = ensureCinematicOverlay()
  el.classList.remove('active', 'impact', 'fade-out', 'heavens-assault', 'carpet-bomb')
  void el.offsetWidth
  el.classList.add('active', 'canvas-mode', 'heavens-assault')

  const canvas = el.querySelector('.cinematic-canvas')
  if (!canvas) {
    try { el.remove() } catch (_) {}
    if (onDone) onDone()
    render()
    saveGame()
    return
  }

  const totalDuration = 10.5
  const fadeDuration = 1.1
  const endAt = totalDuration + fadeDuration

  const __heavensStartNowMs = performance.now()

  let renderer = null
  let scene = null
  let camera = null
  let fadePlane = null
  let crackPlane = null
  let crackTexture = null

  // Audio: gunfire bursts + lightning crashes (best-effort)
  try {
    __clearCinematicTimers(__heavensThreeTimers)

    // Rapid gunfire in the first part of the assault.
    const fireStartMs = 650
    const fireEndMs = 6500
    const fireIntervalMs = 260
    __heavensThreeTimers.push(setTimeout(() => {
      try {
        const id = setInterval(() => {
          try {
            const now = performance.now()
            // Stop once we pass the window.
            if (now - __heavensStartNowMs > fireEndMs) {
              try { clearInterval(id) } catch (_) {}
              return
            }
            if (Math.random() < 0.85) playSfx('shoot')
          } catch (_) {}
        }, fireIntervalMs)
        __heavensThreeTimers.push(id)
      } catch (_) {}
    }, fireStartMs))

    // Lightning crashes scattered through the cinematic.
    const lightningCuesSec = [1.9, 4.1, 6.6, 9.0]
    for (const s of lightningCuesSec) {
      __heavensThreeTimers.push(setTimeout(() => { try { playSfx('lightning') } catch (_) {} }, Math.floor(s * 1000)))
    }
  } catch (_) {}

  function makeHeavensSkyTexture(seed) {
    const w = 1024
    const h = 512
    const c = document.createElement('canvas')
    c.width = w
    c.height = h
    const g = c.getContext && c.getContext('2d')
    if (!g) return null

    // Vertical sky gradient (slightly brighter to silhouette planes)
    const grad = g.createLinearGradient(0, 0, 0, h)
    grad.addColorStop(0, '#0b1326')
    grad.addColorStop(0.55, '#16233b')
    grad.addColorStop(1, '#0a0f1f')
    g.fillStyle = grad
    g.fillRect(0, 0, w, h)

    // Soft cloud bands
    const bandCount = 22
    for (let i = 0; i < bandCount; i++) {
      const y = (i / bandCount) * h
      const a = 0.06 + 0.04 * Math.sin((i + seed) * 1.7)
      g.fillStyle = `rgba(255,255,255,${Math.max(0, a)})`
      const x0 = (Math.sin((i + seed) * 2.3) * 0.5 + 0.5) * w
      const ww = w * (0.35 + 0.25 * (Math.sin((i + seed) * 1.1) * 0.5 + 0.5))
      g.beginPath()
      g.ellipse(x0, y, ww, h * 0.03, 0, 0, Math.PI * 2)
      g.fill()
    }

    // Slight bright “horizon” band
    const haze = g.createLinearGradient(0, h * 0.55, 0, h)
    haze.addColorStop(0, 'rgba(255,255,255,0.05)')
    haze.addColorStop(1, 'rgba(255,255,255,0)')
    g.fillStyle = haze
    g.fillRect(0, h * 0.55, w, h * 0.45)

    const tex = new THREE.CanvasTexture(c)
    tex.colorSpace = THREE.SRGBColorSpace
    tex.needsUpdate = true
    return tex
  }

  const materialsToFade = []
  function trackMat(m) {
    if (m && m.isMaterial) materialsToFade.push(m)
    return m
  }

  function rand01(seed) {
    const x = Math.sin(seed * 12.9898) * 43758.5453
    return x - Math.floor(x)
  }

  function makeHeavenCrackTexture(seed) {
    const size = 512
    const c = document.createElement('canvas')
    c.width = size
    c.height = size
    const g = c.getContext && c.getContext('2d')
    if (!g) return null

    g.clearRect(0, 0, size, size)
    g.save()
    g.translate(size / 2, size / 2)

    const branchCount = 8 + Math.floor(rand01(seed + 10.1) * 6)
    for (let i = 0; i < branchCount; i++) {
      const a0 = (rand01(seed * 7.3 + i * 13.7) * Math.PI * 2)
      const len = size * (0.26 + 0.22 * rand01(seed * 5.7 + i * 9.1))
      const segs = 10 + Math.floor(rand01(seed * 3.9 + i * 11.9) * 10)
      const bend = (rand01(seed * 2.1 + i * 17.0) - 0.5) * 0.55

      // Soft glow pass
      g.strokeStyle = 'rgba(210,245,255,0.16)'
      g.lineWidth = 10
      g.lineCap = 'round'
      g.lineJoin = 'round'
      g.beginPath()

      let px = 0
      let py = 0
      g.moveTo(px, py)
      for (let s = 1; s <= segs; s++) {
        const t = s / segs
        const a = a0 + bend * (t - 0.5)
        const jitter = (rand01(seed * 19.1 + i * 23.3 + s * 3.7) - 0.5) * (size * 0.012)
        const r = len * t + jitter
        const x = Math.cos(a) * r
        const y = Math.sin(a) * r
        px = x
        py = y
        g.lineTo(px, py)
      }
      g.stroke()

      // Sharp crack pass
      g.strokeStyle = 'rgba(240,252,255,0.52)'
      g.lineWidth = 2.4
      g.beginPath()
      g.moveTo(0, 0)
      for (let s = 1; s <= segs; s++) {
        const t = s / segs
        const a = a0 + bend * (t - 0.5)
        const jitter = (rand01(seed * 29.7 + i * 31.1 + s * 7.9) - 0.5) * (size * 0.006)
        const r = len * t + jitter
        const x = Math.cos(a) * r
        const y = Math.sin(a) * r
        g.lineTo(x, y)
      }
      g.stroke()

      // Small side branches
      const twigCount = 1 + Math.floor(rand01(seed * 41.9 + i * 2.3) * 3)
      for (let tgi = 0; tgi < twigCount; tgi++) {
        const t = 0.22 + 0.62 * rand01(seed * 37.0 + i * 5.9 + tgi * 11.1)
        const a = a0 + bend * (t - 0.5)
        const baseR = len * t
        const bx = Math.cos(a) * baseR
        const by = Math.sin(a) * baseR
        const twigA = a + (rand01(seed * 13.3 + i * 17.1 + tgi * 3.1) - 0.5) * 1.4
        const twigLen = len * (0.10 + 0.18 * rand01(seed * 21.2 + i * 7.3 + tgi * 19.7))

        g.strokeStyle = 'rgba(240,252,255,0.40)'
        g.lineWidth = 1.6
        g.beginPath()
        g.moveTo(bx, by)
        g.lineTo(bx + Math.cos(twigA) * twigLen, by + Math.sin(twigA) * twigLen)
        g.stroke()
      }
    }

    g.restore()
    const tex = new THREE.CanvasTexture(c)
    tex.colorSpace = THREE.SRGBColorSpace
    tex.needsUpdate = true
    return tex
  }

  function makePlaneModel(paletteSeed) {
    const group = new THREE.Group()
    // Camo palettes (olive/tan/brown) with subtle per-plane variation.
    const palettes = [
      { a: 0x3f4a22, b: 0x6a5f3a, c: 0x2b2f1f, canopy: 0x0d111a },
      { a: 0x485225, b: 0x7a6b44, c: 0x1f241a, canopy: 0x0d111a },
      { a: 0x39451f, b: 0x8a7a52, c: 0x2a2b22, canopy: 0x0d111a }
    ]
    const pal = palettes[Math.floor(rand01(paletteSeed + 1.7) * palettes.length) % palettes.length]

    const bodyMat = trackMat(new THREE.MeshStandardMaterial({
      color: pal.a,
      roughness: 0.55,
      metalness: 0.35
    }))
    const wingMat = trackMat(new THREE.MeshStandardMaterial({
      color: pal.c,
      roughness: 0.60,
      metalness: 0.25
    }))
    const camoMat = trackMat(new THREE.MeshStandardMaterial({
      color: pal.b,
      roughness: 0.65,
      metalness: 0.20
    }))
    const canopyMat = trackMat(new THREE.MeshStandardMaterial({
      color: pal.canopy,
      roughness: 0.15,
      metalness: 0.05,
      transparent: true,
      opacity: 0.55
    }))

    const fuselageGeo = new THREE.CylinderGeometry(0.060, 0.056, 0.68, 14, 1)
    const fuselage = new THREE.Mesh(fuselageGeo, bodyMat)
    fuselage.position.set(0, 0.0, 0)
    group.add(fuselage)

    const noseGeo = new THREE.ConeGeometry(0.060, 0.20, 14, 1)
    const nose = new THREE.Mesh(noseGeo, bodyMat)
    nose.position.set(0, 0.43, 0)
    group.add(nose)

    // Canopy
    const canopyGeo = new THREE.SphereGeometry(0.060, 12, 10)
    const canopy = new THREE.Mesh(canopyGeo, canopyMat)
    canopy.scale.set(1.0, 1.25, 1.6)
    canopy.position.set(0, 0.20, 0.035)
    group.add(canopy)

    // Swept wings
    const wingGeo = new THREE.BoxGeometry(0.74, 0.025, 0.16)
    const wing = new THREE.Mesh(wingGeo, wingMat)
    wing.position.set(0, 0.06, 0)
    group.add(wing)

    // Wingtip pylons (reads more “real”) 
    const pylonGeo = new THREE.BoxGeometry(0.06, 0.06, 0.06)
    const pylonL = new THREE.Mesh(pylonGeo, wingMat)
    pylonL.position.set(-0.34, 0.01, 0.02)
    group.add(pylonL)
    const pylonR = new THREE.Mesh(pylonGeo, wingMat)
    pylonR.position.set(0.34, 0.01, 0.02)
    group.add(pylonR)

    // Engine pods
    const engGeo = new THREE.CylinderGeometry(0.038, 0.045, 0.22, 12, 1)
    const engL = new THREE.Mesh(engGeo, bodyMat)
    engL.rotation.z = Math.PI / 2
    engL.position.set(-0.18, 0.00, -0.08)
    group.add(engL)
    const engR = new THREE.Mesh(engGeo, bodyMat)
    engR.rotation.z = Math.PI / 2
    engR.position.set(0.18, 0.00, -0.08)
    group.add(engR)

    const tailGeo = new THREE.BoxGeometry(0.26, 0.02, 0.11)
    const tail = new THREE.Mesh(tailGeo, wingMat)
    tail.position.set(0, -0.28, 0)
    group.add(tail)

    const finGeo = new THREE.BoxGeometry(0.02, 0.20, 0.12)
    const fin = new THREE.Mesh(finGeo, wingMat)
    fin.position.set(0, -0.30, 0)
    group.add(fin)

    // Camo blotches/striping (simple geometry decals).
    // Keep it light: a few thin boxes on wings and fuselage.
    const blotchGeoWing = new THREE.BoxGeometry(0.30, 0.008, 0.08)
    const blotchGeoBody = new THREE.BoxGeometry(0.12, 0.010, 0.10)
    const blotchMats = [bodyMat, wingMat, camoMat]
    for (let j = 0; j < 5; j++) {
      const r0 = rand01(paletteSeed * 7.7 + j * 13.1)
      const r1 = rand01(paletteSeed * 9.3 + j * 5.9)
      const mat = blotchMats[Math.floor(rand01(paletteSeed * 3.1 + j * 2.7) * blotchMats.length) % blotchMats.length]
      const isWing = j < 3
      const m = new THREE.Mesh(isWing ? blotchGeoWing : blotchGeoBody, mat)
      if (isWing) {
        m.position.set((r0 - 0.5) * 0.45, 0.074, (r1 - 0.5) * 0.10)
        m.rotation.y = (r1 - 0.5) * 0.9
      } else {
        m.position.set((r0 - 0.5) * 0.10, 0.10 + (r1 - 0.5) * 0.12, 0.06)
        m.rotation.z = (r0 - 0.5) * 0.6
      }
      group.add(m)
    }

    // Face upward (+Y)
    group.rotation.x = 0
    group.rotation.z = 0
    return group
  }

  function makeBeam() {
    // Layered “viscous” beam: bright core + thicker flowing halo.
    const group = new THREE.Group()
    const coreGeo = new THREE.CylinderGeometry(0.13, 0.13, 1.0, 18, 1, true)
    const haloGeo = new THREE.CylinderGeometry(0.32, 0.26, 1.0, 22, 1, true)

    const coreMat = trackMat(new THREE.MeshBasicMaterial({
      color: 0xf5fbff,
      transparent: true,
      opacity: 0.0,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    }))
    const haloMat = trackMat(new THREE.MeshBasicMaterial({
      color: 0xb9e7ff,
      transparent: true,
      opacity: 0.0,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    }))

    const halo = new THREE.Mesh(haloGeo, haloMat)
    halo.rotation.y = 0.25
    const core = new THREE.Mesh(coreGeo, coreMat)
    group.add(halo)
    group.add(core)

    group.visible = false
    group.userData.__core = core
    group.userData.__halo = halo
    return group
  }

  function makeExplosion() {
    const geo = new THREE.SphereGeometry(0.12, 10, 8)
    const mat = trackMat(new THREE.MeshBasicMaterial({
      color: 0xffe6b3,
      transparent: true,
      opacity: 0.0,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    }))
    const mesh = new THREE.Mesh(geo, mat)
    mesh.visible = false
    return mesh
  }

  function makeAntimatter() {
    // Brighter, larger, layered projectile so it reads clearly.
    const group = new THREE.Group()
    const coreGeo = new THREE.SphereGeometry(0.11, 18, 14)
    const coreMat = trackMat(new THREE.MeshStandardMaterial({
      color: 0xb44bff,
      emissive: 0x6cf7d2,
      emissiveIntensity: 1.35,
      roughness: 0.15,
      metalness: 0.05,
      transparent: true,
      opacity: 0.98
    }))
    const core = new THREE.Mesh(coreGeo, coreMat)
    group.add(core)

    const shellGeo = new THREE.SphereGeometry(0.18, 18, 14)
    const shellMat = trackMat(new THREE.MeshBasicMaterial({
      color: 0xf0abfc,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    }))
    const shell = new THREE.Mesh(shellGeo, shellMat)
    group.add(shell)

    const ringGeo = new THREE.TorusGeometry(0.16, 0.018, 10, 28)
    const ringMat = trackMat(new THREE.MeshBasicMaterial({
      color: 0x7dd3fc,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    }))
    const ring = new THREE.Mesh(ringGeo, ringMat)
    ring.rotation.x = Math.PI / 2
    group.add(ring)

    const trailGeom = new THREE.BufferGeometry()
    trailGeom.setAttribute('position', new THREE.Float32BufferAttribute([0, 0, 0, 0, 0, 0], 3))
    const trailMat = trackMat(new THREE.LineBasicMaterial({
      color: 0x60f5c0,
      transparent: true,
      opacity: 0.55,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    }))
    const trail = new THREE.Line(trailGeom, trailMat)
    group.add(trail)
    group.userData.__trail = trail

    return group
  }

  function makeBulletLine() {
    const geom = new THREE.BufferGeometry()
    geom.setAttribute('position', new THREE.Float32BufferAttribute([0, 0, 0, 0, 0, 0], 3))
    const mat = trackMat(new THREE.LineBasicMaterial({
      color: 0xffd28a,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    }))
    return new THREE.Line(geom, mat)
  }

  function setFadeOutToBlack(alpha) {
    if (!fadePlane) return
    fadePlane.material.opacity = Math.max(0, Math.min(1, alpha))
    fadePlane.visible = fadePlane.material.opacity > 0.001
  }

  try {
    renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: 'high-performance' })
    renderer.outputColorSpace = THREE.SRGBColorSpace
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.05
    renderer.setClearColor(0x060a12, 1)

    scene = new THREE.Scene()
    scene.fog = new THREE.FogExp2(0x0b1220, 0.18)

    camera = new THREE.PerspectiveCamera(55, Math.max(1, window.innerWidth) / Math.max(1, window.innerHeight), 0.1, 100)
    camera.position.set(0.0, 1.9, 6.8)
    camera.lookAt(0.0, 1.1, 0.0)

    const amb = new THREE.AmbientLight(0x9fb7ff, 0.35)
    scene.add(amb)
    const key = new THREE.DirectionalLight(0xffffff, 1.35)
    key.position.set(-2.2, 4.2, 3.2)
    scene.add(key)
    const rim = new THREE.DirectionalLight(0x9de8ff, 0.9)
    rim.position.set(2.6, 2.4, -3.0)
    scene.add(rim)

    // Background sky dome
    const skyGeo = new THREE.SphereGeometry(30, 18, 12)
    const skyTex = makeHeavensSkyTexture(2.7)
    const skyMat = trackMat(new THREE.MeshBasicMaterial({
      color: 0xffffff,
      map: skyTex || null,
      side: THREE.BackSide
    }))
    const sky = new THREE.Mesh(skyGeo, skyMat)
    scene.add(sky)

    // Black fade plane in front of the camera
    const fadeGeo = new THREE.PlaneGeometry(2, 2)
    const fadeMat = new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.0, depthWrite: false })
    fadePlane = new THREE.Mesh(fadeGeo, fadeMat)
    fadePlane.position.set(0, 0, -1)
    camera.add(fadePlane)

    // Heavenly cracks overlay (procedural). Camera-attached so it reads like a tear in the sky.
    crackTexture = makeHeavenCrackTexture(4.2)
    if (crackTexture) {
      const crackGeo = new THREE.PlaneGeometry(2, 2)
      const crackMat = trackMat(new THREE.MeshBasicMaterial({
        map: crackTexture,
        transparent: true,
        opacity: 0.0,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        depthTest: false
      }))
      crackPlane = new THREE.Mesh(crackGeo, crackMat)
      crackPlane.position.set(0, 0, -0.95)
      crackPlane.renderOrder = 999
      camera.add(crackPlane)
    }
    scene.add(camera)

  } catch (e) {
    try { console.error(e) } catch (_) {}
    try { renderer && renderer.dispose && renderer.dispose() } catch (_) {}
    try { el.remove() } catch (_) {}
    if (onDone) onDone()
    render()
    saveGame()
    return
  }

  const planes = []
  const beams = []
  const explosions = []
  const bullets = []
  const antimatter = []
  const puffs = []

  const beamPoolSize = 18
  for (let i = 0; i < beamPoolSize; i++) {
    const b = makeBeam()
    beams.push({ mesh: b, t0: 0 })
    scene.add(b)
    const ex = makeExplosion()
    explosions.push({ mesh: ex, t0: 0 })
    scene.add(ex)
  }

  // Fleet: wide horizontal armada (multiple V-squadrons spread across X).
  // Goal: read as “full army attack against the heavens”, not vertical stacking.
  const perV = 9 // per squadron
  const squadCountX = 7 // across the screen
  const rowCount = 2 // slight depth layering
  const squadSpacingX = 2.65
  const rowSpacingY = 0.75
  let planeIndex = 0
  for (let row = 0; row < rowCount; row++) {
    for (let sx = 0; sx < squadCountX; sx++) {
      const squadCenterX = (sx - (squadCountX - 1) / 2) * squadSpacingX
      for (let idx = 0; idx < perV; idx++) {
        const center = (perV - 1) / 2
        const k = idx - center

        const localX = k * 0.62
        const localY = -Math.abs(k) * 0.18

        const xJit = (rand01(planeIndex * 8.13 + 1.7) - 0.5) * 0.12
        const yJit = (rand01(planeIndex * 9.77 + 3.1) - 0.5) * 0.10

        const xOff = squadCenterX + localX + xJit
        const yOff = -row * rowSpacingY + localY + yJit

        const plane = makePlaneModel(planeIndex + 13.0)
        plane.scale.setScalar(0.86)
        scene.add(plane)

        const r = rand01(planeIndex * 9.17 + 2.33)
        const willBeHit = r < 0.22

        planes.push({
          plane,
          i: planeIndex,
          xOff,
          yOff,
          driftSeed: planeIndex * 11.73,
          willBeHit,
          hitAt: willBeHit ? (0.20 + 0.60 * rand01((planeIndex + 21.0) * 13.37)) : 2.0,
          hit: false,
          hitT0: 0,
          baseX: 0,
          baseY: 0,
          spin: 0
        })

        planeIndex++
      }
    }
  }

  function allocBeam() {
    for (const b of beams) {
      if (!b.mesh.visible) return b
    }
    return beams[0]
  }

  function allocExplosion() {
    for (const ex of explosions) {
      if (!ex.mesh.visible) return ex
    }
    return explosions[0]
  }

  function spawnBullet(from, tNow, seed) {
    const l = makeBulletLine()
    l.userData = { t0: tNow, seed, from: from.clone() }
    scene.add(l)
    bullets.push(l)
  }

  function spawnAntimatter(from, tNow, seed) {
    const m = makeAntimatter()
    m.position.copy(from)
    const drift = (rand01(seed + 1.1) - 0.5) * 0.55
    const roll = (rand01(seed + 2.2) - 0.5) * 1.2
    m.userData = { t0: tNow, seed, from: from.clone(), drift, roll }
    scene.add(m)
    antimatter.push(m)
  }

  function spawnPuff(pos, tNow, colorHex) {
    const geo = new THREE.SphereGeometry(0.10, 8, 6)
    const mat = trackMat(new THREE.MeshBasicMaterial({
      color: colorHex,
      transparent: true,
      opacity: 0.35,
      depthWrite: false
    }))
    const m = new THREE.Mesh(geo, mat)
    m.position.copy(pos)
    m.userData = { t0: tNow }
    scene.add(m)
    puffs.push(m)
  }

  const timeStart = performance.now()

  function resize() {
    const dpr = Math.max(1, Math.min(2.5, window.devicePixelRatio || 1))
    renderer.setPixelRatio(dpr)
    const w = Math.max(1, window.innerWidth)
    const h = Math.max(1, window.innerHeight)
    renderer.setSize(w, h, false)
    camera.aspect = w / h
    camera.updateProjectionMatrix()
  }

  __heavensThreeResizeHandler = () => resize()
  try { window.addEventListener('resize', __heavensThreeResizeHandler) } catch (_) {}
  resize()

  __heavensThreeRenderer = renderer
  __heavensThreeScene = scene
  __heavensThreeDispose = () => {
    try {
      for (const l of bullets) {
        try { scene.remove(l) } catch (_) {}
        try { l.geometry && l.geometry.dispose && l.geometry.dispose() } catch (_) {}
        try { l.material && l.material.dispose && l.material.dispose() } catch (_) {}
      }
      for (const m of antimatter) {
        try { scene.remove(m) } catch (_) {}
      }
      for (const m of puffs) {
        try { scene.remove(m) } catch (_) {}
      }
      __disposeThreeScene(scene)
      try { renderer.dispose() } catch (_) {}
      try {
        if (crackPlane) {
          try { crackPlane.geometry && crackPlane.geometry.dispose && crackPlane.geometry.dispose() } catch (_) {}
          try { crackPlane.material && crackPlane.material.dispose && crackPlane.material.dispose() } catch (_) {}
        }
        if (crackTexture && crackTexture.dispose) crackTexture.dispose()
      } catch (_) {}
    } catch (_) {}
  }

  function frame(now) {
    const t = (now - timeStart) / 1000
    const t1 = Math.max(0, Math.min(1, t / totalDuration))
    const fade = t <= totalDuration ? 0 : Math.max(0, Math.min(1, (t - totalDuration) / fadeDuration))
    setFadeOutToBlack(fade)

    // Heavenly cracks: ramp in, pulse a bit, then soften near the end.
    if (crackPlane && crackPlane.material) {
      const smooth01 = (edge0, edge1, x) => {
        const u = Math.max(0, Math.min(1, (x - edge0) / Math.max(1e-6, edge1 - edge0)))
        return u * u * (3 - 2 * u)
      }
      const inA = smooth01(0.14, 0.42, t1)
      const outA = 1 - smooth01(0.82, 1.00, t1)
      const pulse = 0.80 + 0.20 * Math.sin(t * 4.6)
      const alpha = 0.62 * inA * outA * pulse
      crackPlane.material.opacity = Math.max(0, Math.min(0.85, alpha))
      crackPlane.visible = crackPlane.material.opacity > 0.01
      crackPlane.position.x = 0.012 * Math.sin(t * 1.25)
      crackPlane.position.y = 0.010 * Math.cos(t * 1.05)
      crackPlane.rotation.z = 0.02 * Math.sin(t * 0.55)
    }

    const baseY = THREE.MathUtils.lerp(-3.9, 1.35, t1)
    const wob = 0.10 * Math.sin(t * 1.1)

    // Light camera drift for drama
    camera.position.x = 0.12 * Math.sin(t * 0.22)
    camera.position.z = 6.8 + 0.20 * Math.sin(t * 0.17)
    camera.lookAt(0.0, 1.15 + 0.12 * Math.sin(t * 0.25), 0.0)

    for (const p of planes) {
      const driftX = 0.10 * Math.sin(t * 1.15 + p.driftSeed)
      const driftY = 0.06 * Math.sin(t * 0.95 + p.driftSeed * 1.3)

      const planeBaseX = p.xOff + wob * 0.55 + driftX
      const planeBaseY = baseY + p.yOff + driftY
      p.baseX = planeBaseX
      p.baseY = planeBaseY

      // One hit window per (some) planes
      if (p.willBeHit && !p.hit && t1 >= p.hitAt) {
        p.hit = true
        p.hitT0 = t
        p.spin = 6.5 + 4.0 * (Math.sin((p.i + 11.0) * 17.7) * 0.5 + 0.5)

        const b = allocBeam()
        b.t0 = t
        b.mesh.visible = true
        if (b.mesh.userData?.__core?.material) b.mesh.userData.__core.material.opacity = 0.98
        if (b.mesh.userData?.__halo?.material) b.mesh.userData.__halo.material.opacity = 0.75

        const ex = allocExplosion()
        ex.t0 = t
        ex.mesh.visible = true
        ex.mesh.material.opacity = 0.95
        ex.mesh.scale.setScalar(1.0)

        // Initial puff burst
        spawnPuff(new THREE.Vector3(planeBaseX, planeBaseY, 0), t, 0xffa24a)
      }

      let x = planeBaseX
      let y = planeBaseY
      if (p.hit) {
        const fallT = Math.max(0, Math.min(1, (t - p.hitT0) / 1.8))
        x += 0.55 * Math.sin(t * 3.0 + p.i * 2.2) * fallT
        y += -3.8 * fallT
        p.plane.rotation.z = p.spin * fallT

        // Falling smoke/fire puffs
        if (fallT > 0.02 && Math.random() < 0.28) {
          spawnPuff(new THREE.Vector3(x, y - 0.10, 0), t, Math.random() < 0.6 ? 0x343a46 : 0xff7a2a)
        }
      } else {
        p.plane.rotation.z = 0.0
      }

      p.plane.position.set(x, y, 0)

      // Fire rounds upward (streaks) + antimatter rounds.
      if (!p.hit) {
        // Throttle per-plane firing since the fleet is much larger now.
        const canFireBullets = (p.i % 2) === 0
        const canFireAnti = (p.i % 6) === 0

        const firePhase = (t * 4.0 + p.i * 1.7) % 1
        if (canFireBullets && firePhase < 0.018) {
          spawnBullet(new THREE.Vector3(x, y + 0.55, 0), t, p.i * 3.1)
        }
        const antiPhase = (t * 0.52 + p.i * 0.23) % 1
        if (canFireAnti && antiPhase < 0.020) {
          spawnAntimatter(new THREE.Vector3(x, y + 0.55, 0), t, p.i * 9.7)
        }
      }
    }

    // Update bullets
    for (let i = bullets.length - 1; i >= 0; i--) {
      const l = bullets[i]
      const dt = t - (l.userData?.t0 || 0)
      const speed = 7.8
      const start = l.userData?.from || new THREE.Vector3()
      const end = start.clone().add(new THREE.Vector3(0.0, speed * dt, 0.0))
      const posAttr = l.geometry.getAttribute('position')
      posAttr.setXYZ(0, start.x, start.y, start.z)
      posAttr.setXYZ(1, end.x, end.y, end.z)
      posAttr.needsUpdate = true
      l.material.opacity = Math.max(0, 0.85 - dt * 1.1)
      if (dt > 0.9) {
        try { scene.remove(l) } catch (_) {}
        try { l.geometry.dispose() } catch (_) {}
        try { l.material.dispose() } catch (_) {}
        bullets.splice(i, 1)
      }
    }

    // Update antimatter (fast upward travel + visible trail)
    for (let i = antimatter.length - 1; i >= 0; i--) {
      const m = antimatter[i]
      const dt = t - (m.userData?.t0 || 0)
      const from = m.userData?.from || m.position
      const drift = m.userData?.drift || 0
      const speed = 6.6
      const x = from.x + drift * Math.sin(dt * 5.0)
      const y = from.y + speed * dt
      m.position.set(x, y, 0)

      m.rotation.y += 0.09
      m.rotation.x += 0.07
      m.rotation.z = (m.userData?.roll || 0) + 0.15 * Math.sin(dt * 6.0)

      // Fade slowly so it stays readable.
      const alpha = Math.max(0, 1.0 - dt * 0.45)
      m.traverse(obj => {
        if (obj && obj.material && typeof obj.material.opacity === 'number') {
          obj.material.opacity = obj.material.userData?.__baseOpacity
            ? obj.material.userData.__baseOpacity * alpha
            : obj.material.opacity * (alpha > 0 ? 1 : 0)
        }
      })

      const trail = m.userData?.__trail
      if (trail && trail.geometry) {
        const posAttr = trail.geometry.getAttribute('position')
        const tailY = y - 1.15
        posAttr.setXYZ(0, x, y, 0)
        posAttr.setXYZ(1, x - 0.06 * Math.sin(dt * 7.0), tailY, 0)
        posAttr.needsUpdate = true
        if (trail.material) trail.material.opacity = 0.55 * alpha
      }

      if (m.position.y > 7.2 || dt > 2.6) {
        try { scene.remove(m) } catch (_) {}
        try { m.traverse(obj => { try { obj.geometry && obj.geometry.dispose && obj.geometry.dispose() } catch (_) {} }) } catch (_) {}
        try { m.traverse(obj => { try { obj.material && obj.material.dispose && obj.material.dispose() } catch (_) {} }) } catch (_) {}
        antimatter.splice(i, 1)
      }
    }

    // Update beams + explosions
    for (const b of beams) {
      if (!b.mesh.visible) continue
      const dt = t - b.t0
      const a = Math.max(0, 1.0 - dt * 2.0)
      const core = b.mesh.userData?.__core
      const halo = b.mesh.userData?.__halo
      if (core?.material) core.material.opacity = 0.98 * a
      if (halo?.material) halo.material.opacity = (0.75 * a) * (0.85 + 0.15 * Math.sin(dt * 14.0))
      if (halo) {
        const swell = 1.0 + 0.14 * Math.sin(dt * 10.0)
        halo.scale.set(swell, 1.0, swell)
        halo.rotation.y += 0.06
      }
      if (a <= 0.01) b.mesh.visible = false
    }
    for (const ex of explosions) {
      if (!ex.mesh.visible) continue
      const dt = t - ex.t0
      const s = 1.0 + dt * 6.0
      ex.mesh.scale.setScalar(s)
      ex.mesh.material.opacity = Math.max(0, 0.95 - dt * 2.3)
      if (dt > 0.55) ex.mesh.visible = false
    }

    // Place beams/explosions at recently-hit planes
    for (let i = 0; i < planes.length; i++) {
      const p = planes[i]
      if (!p.hit) continue
      const dt = t - p.hitT0
      if (dt > 0.55) continue
      const beam = beams[i % beams.length]
      const ex = explosions[i % explosions.length]
      const topY = 6.0
      const midY = (topY + p.baseY) / 2
      const height = Math.max(0.2, topY - p.baseY)
      beam.mesh.position.set(p.baseX, midY, 0)
      beam.mesh.scale.set(1.0 + 0.20 * Math.sin(dt * 9.0), height, 1.0 + 0.20 * Math.cos(dt * 9.0))
      beam.mesh.visible = true

      ex.mesh.position.set(p.baseX, p.baseY, 0)
      ex.mesh.visible = true
    }

    // Update puffs
    for (let i = puffs.length - 1; i >= 0; i--) {
      const m = puffs[i]
      const dt = t - (m.userData?.t0 || 0)
      m.scale.setScalar(1.0 + dt * 2.2)
      m.material.opacity = Math.max(0, 0.35 - dt * 0.35)
      if (dt > 1.2) {
        try { scene.remove(m) } catch (_) {}
        try { m.geometry && m.geometry.dispose && m.geometry.dispose() } catch (_) {}
        try { m.material && m.material.dispose && m.material.dispose() } catch (_) {}
        puffs.splice(i, 1)
      }
    }

    renderer.render(scene, camera)

    if (t >= endAt) {
      stopHeavensThreeCinematic()
      // Keep overlay present (black) so Part 2 can fade in.
      if (onDone) onDone()
      return
    }

    __heavensThreeRafId = requestAnimationFrame(frame)
  }

  __heavensThreeRafId = requestAnimationFrame(frame)
}

function runHeavensStandoffCinematicThreeCore(opts) {
  const options = opts && typeof opts === 'object' ? opts : {}
  const onDone = typeof options.onDone === 'function' ? options.onDone : null

  try { stopDemonCinematicTimers() } catch (_) {}
  try { stopCarpetBombCinematic() } catch (_) {}
  stopHeavensCinematic()
  stopHeavensThreeCinematic()

  const el = ensureCinematicOverlay()
  el.classList.remove('active', 'impact', 'fade-out')
  void el.offsetWidth
  el.classList.add('active', 'canvas-mode')

  const canvas = el.querySelector('.cinematic-canvas')
  if (!canvas) {
    try { el.remove() } catch (_) {}
    if (onDone) onDone()
    render()
    saveGame()
    return
  }

  const totalDuration = 9.0
  const fadeInDuration = 0.9
  const fadeOutDuration = 1.2
  const endAt = totalDuration + fadeOutDuration

  let renderer = null
  let scene = null
  let camera = null
  let blackPlane = null

  const fadeMats = []
  const texturesToDispose = []
  function trackMat(m) {
    if (m && m.isMaterial) {
      m.userData = m.userData || {}
      m.userData.__baseOpacity = typeof m.opacity === 'number' ? m.opacity : 1
      fadeMats.push(m)
    }
    return m
  }

  function trackTex(t) {
    if (t && typeof t.dispose === 'function') texturesToDispose.push(t)
    return t
  }

  function clamp01(v) { return Math.max(0, Math.min(1, v)) }

  function noise2(x, y, seed) {
    const v = Math.sin(x * 127.1 + y * 311.7 + seed * 74.7) * 43758.5453
    return v - Math.floor(v)
  }

  function fbm2(x, y, seed) {
    let amp = 0.55
    let freq = 1.0
    let sum = 0
    for (let i = 0; i < 5; i++) {
      const n = noise2(x * freq, y * freq, seed + i * 19.3)
      sum += (n * 2 - 1) * amp
      amp *= 0.5
      freq *= 2.02
    }
    return sum * 0.5 + 0.5
  }

  function makeDataTexture(w, h, fillFn) {
    const data = new Uint8Array(w * h * 4)
    let p = 0
    for (let y = 0; y < h; y++) {
      for (let x = 0; x < w; x++) {
        const rgba = fillFn(x, y)
        data[p++] = rgba[0]
        data[p++] = rgba[1]
        data[p++] = rgba[2]
        data[p++] = rgba[3]
      }
    }
    const tex = trackTex(new THREE.DataTexture(data, w, h, THREE.RGBAFormat))
    tex.needsUpdate = true
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping
    tex.anisotropy = 4
    tex.colorSpace = THREE.SRGBColorSpace
    return tex
  }

  function makeNormalTexture(w, h, seed) {
    // Tangent-space-ish normal from height field gradients.
    const height = new Float32Array(w * h)
    for (let y = 0; y < h; y++) {
      for (let x = 0; x < w; x++) {
        const u = x / w
        const v = y / h
        // Multi-scale height: pores + broader variation.
        const h0 = fbm2(u * 18, v * 18, seed)
        const h1 = fbm2(u * 4, v * 4, seed + 12.3)
        height[y * w + x] = 0.65 * h0 + 0.35 * h1
      }
    }

    const data = new Uint8Array(w * h * 4)
    let p = 0
    const strength = 1.25
    for (let y = 0; y < h; y++) {
      for (let x = 0; x < w; x++) {
        const xm1 = (x - 1 + w) % w
        const xp1 = (x + 1) % w
        const ym1 = (y - 1 + h) % h
        const yp1 = (y + 1) % h
        const hL = height[y * w + xm1]
        const hR = height[y * w + xp1]
        const hD = height[ym1 * w + x]
        const hU = height[yp1 * w + x]
        const dx = (hR - hL) * strength
        const dy = (hU - hD) * strength
        let nx = -dx
        let ny = -dy
        let nz = 1.0
        const invLen = 1.0 / Math.max(1e-5, Math.sqrt(nx * nx + ny * ny + nz * nz))
        nx *= invLen
        ny *= invLen
        nz *= invLen
        data[p++] = Math.floor((nx * 0.5 + 0.5) * 255)
        data[p++] = Math.floor((ny * 0.5 + 0.5) * 255)
        data[p++] = Math.floor((nz * 0.5 + 0.5) * 255)
        data[p++] = 255
      }
    }
    const tex = trackTex(new THREE.DataTexture(data, w, h, THREE.RGBAFormat))
    tex.needsUpdate = true
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping
    tex.anisotropy = 4
    // normalMap should be linear
    tex.colorSpace = THREE.NoColorSpace
    return tex
  }

  function makeRoughnessTexture(w, h, seed, base, variance, scaleU, scaleV) {
    const data = new Uint8Array(w * h * 4)
    let p = 0
    for (let y = 0; y < h; y++) {
      for (let x = 0; x < w; x++) {
        const u = (x / w) * (scaleU || 1)
        const v = (y / h) * (scaleV || 1)
        const n = fbm2(u * 6, v * 6, seed)
        const r = clamp01(base + (n - 0.5) * 2 * variance)
        const rr = Math.floor(r * 255)
        data[p++] = rr
        data[p++] = rr
        data[p++] = rr
        data[p++] = 255
      }
    }
    const tex = trackTex(new THREE.DataTexture(data, w, h, THREE.RGBAFormat))
    tex.needsUpdate = true
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping
    tex.anisotropy = 4
    tex.colorSpace = THREE.NoColorSpace
    return tex
  }

  function makeSkinMaterial(baseColorHex, seed) {
    const texW = 128
    const texH = 128
    const base = new THREE.Color(baseColorHex)
    const map = makeDataTexture(texW, texH, (x, y) => {
      const u = x / texW
      const v = y / texH
      const n = fbm2(u * 7.0, v * 7.0, seed)
      const freckles = noise2(u * 64.0, v * 64.0, seed + 3.7)
      const freck = freckles > 0.985 ? 0.14 : 0.0
      const tint = (n - 0.5) * 0.10 - freck
      const c = base.clone()
      c.r = clamp01(c.r + tint)
      c.g = clamp01(c.g + tint * 0.65)
      c.b = clamp01(c.b + tint * 0.55)
      return [Math.floor(c.r * 255), Math.floor(c.g * 255), Math.floor(c.b * 255), 255]
    })
    map.repeat.set(3.0, 3.0)

    const normalMap = makeNormalTexture(128, 128, seed + 11.3)
    normalMap.repeat.set(5.0, 5.0)

    const roughnessMap = makeRoughnessTexture(128, 128, seed + 21.1, 0.52, 0.18, 3.5, 3.5)
    roughnessMap.repeat.set(3.0, 3.0)

    return trackMat(new THREE.MeshPhysicalMaterial({
      color: baseColorHex,
      map,
      normalMap,
      normalScale: new THREE.Vector2(0.55, 0.55),
      roughnessMap,
      roughness: 0.55,
      metalness: 0.02,
      clearcoat: 0.18,
      clearcoatRoughness: 0.55,
      sheen: 0.10,
      sheenRoughness: 0.75,
      sheenColor: new THREE.Color(0xffe0d5),
      specularIntensity: 0.50,
      transparent: true,
      opacity: 1.0
    }))
  }

  function makeFabricMaterial(baseColorHex, seed) {
    const texW = 128
    const texH = 128
    const base = new THREE.Color(baseColorHex)
    const map = makeDataTexture(texW, texH, (x, y) => {
      const u = x / texW
      const v = y / texH
      const weave = (Math.sin(u * Math.PI * 2 * 48) * Math.sin(v * Math.PI * 2 * 48))
      const n = fbm2(u * 5.0, v * 5.0, seed + 2.1)
      const t = (weave * 0.02) + (n - 0.5) * 0.06
      const c = base.clone()
      c.r = clamp01(c.r + t)
      c.g = clamp01(c.g + t)
      c.b = clamp01(c.b + t)
      return [Math.floor(c.r * 255), Math.floor(c.g * 255), Math.floor(c.b * 255), 255]
    })
    map.repeat.set(4.0, 4.0)

    const normalMap = makeNormalTexture(128, 128, seed + 17.9)
    normalMap.repeat.set(6.0, 6.0)

    const roughnessMap = makeRoughnessTexture(128, 128, seed + 27.7, 0.88, 0.10, 4.0, 4.0)
    roughnessMap.repeat.set(4.0, 4.0)

    return trackMat(new THREE.MeshPhysicalMaterial({
      color: baseColorHex,
      map,
      normalMap,
      normalScale: new THREE.Vector2(0.40, 0.40),
      roughnessMap,
      roughness: 0.90,
      metalness: 0.0,
      sheen: 0.22,
      sheenRoughness: 0.85,
      sheenColor: new THREE.Color(baseColorHex),
      specularIntensity: 0.15,
      transparent: true,
      opacity: 0.95
    }))
  }

  function makeArmorMaterial(baseColorHex, seed) {
    const normalMap = makeNormalTexture(128, 128, seed + 33.3)
    normalMap.repeat.set(3.0, 3.0)
    const roughnessMap = makeRoughnessTexture(128, 128, seed + 44.4, 0.45, 0.22, 2.5, 2.5)
    roughnessMap.repeat.set(2.5, 2.5)
    return trackMat(new THREE.MeshStandardMaterial({
      color: baseColorHex,
      normalMap,
      normalScale: new THREE.Vector2(0.55, 0.55),
      roughnessMap,
      roughness: 0.50,
      metalness: 0.55,
      transparent: true,
      opacity: 1.0
    }))
  }
  function setGlobalAlpha(a) {
    const aa = Math.max(0, Math.min(1, a))
    for (const m of fadeMats) {
      const base = m?.userData?.__baseOpacity
      m.opacity = (typeof base === 'number' ? base : 1) * aa
      m.transparent = true
      m.depthWrite = false
    }
  }
  function setBlack(alpha) {
    if (!blackPlane) return
    blackPlane.material.opacity = Math.max(0, Math.min(1, alpha))
    blackPlane.visible = blackPlane.material.opacity > 0.001
  }

  function makeAssaultRifle() {
    const rifle = new THREE.Group()
    const metalMat = trackMat(new THREE.MeshStandardMaterial({ color: 0x0b0f14, roughness: 0.35, metalness: 0.65, transparent: true, opacity: 1.0 }))
    const polymerMat = trackMat(new THREE.MeshStandardMaterial({ color: 0x121723, roughness: 0.65, metalness: 0.10, transparent: true, opacity: 1.0 }))

    const recv = new THREE.Mesh(new THREE.BoxGeometry(0.62, 0.12, 0.10), metalMat)
    recv.position.set(0.25, 0.00, 0)
    rifle.add(recv)

    const handguard = new THREE.Mesh(new THREE.BoxGeometry(0.44, 0.10, 0.10), polymerMat)
    handguard.position.set(0.55, -0.01, 0)
    rifle.add(handguard)

    const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.62, 12, 1), metalMat)
    barrel.rotation.z = Math.PI / 2
    barrel.position.set(0.88, 0.01, 0)
    rifle.add(barrel)

    const muzzle = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.08, 12, 1), metalMat)
    muzzle.rotation.z = Math.PI / 2
    muzzle.position.set(1.18, 0.01, 0)
    rifle.add(muzzle)

    const mag = new THREE.Mesh(new THREE.BoxGeometry(0.10, 0.24, 0.08), polymerMat)
    mag.position.set(0.35, -0.17, 0)
    mag.rotation.z = 0.15
    rifle.add(mag)

    const grip = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.18, 0.08), polymerMat)
    grip.position.set(0.18, -0.16, 0)
    grip.rotation.z = 0.30
    rifle.add(grip)

    const stock = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.10, 0.10), polymerMat)
    stock.position.set(-0.02, 0.02, 0)
    rifle.add(stock)

    const sight = new THREE.Mesh(new THREE.BoxGeometry(0.10, 0.06, 0.06), metalMat)
    sight.position.set(0.36, 0.10, 0)
    rifle.add(sight)

    rifle.userData.__muzzleWorld = new THREE.Vector3(1.22, 0.01, 0)
    return rifle
  }

  function makeBroadsword() {
    const sword = new THREE.Group()
    const bladeMat = trackMat(new THREE.MeshStandardMaterial({ color: 0xcbd5e1, roughness: 0.25, metalness: 0.90, transparent: true, opacity: 1.0 }))
    const hiltMat = trackMat(new THREE.MeshStandardMaterial({ color: 0x1f2937, roughness: 0.65, metalness: 0.20, transparent: true, opacity: 1.0 }))

    const blade = new THREE.Mesh(new THREE.BoxGeometry(0.10, 1.60, 0.04), bladeMat)
    blade.position.set(0, 0.85, 0)
    sword.add(blade)

    const fuller = new THREE.Mesh(new THREE.BoxGeometry(0.03, 1.35, 0.01), trackMat(new THREE.MeshStandardMaterial({ color: 0x94a3b8, roughness: 0.30, metalness: 0.65, transparent: true, opacity: 1.0 })))
    fuller.position.set(0, 0.92, 0.03)
    sword.add(fuller)

    const guard = new THREE.Mesh(new THREE.BoxGeometry(0.46, 0.06, 0.10), hiltMat)
    guard.position.set(0, 0.12, 0)
    sword.add(guard)

    const grip = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.30, 12, 1), hiltMat)
    grip.position.set(0, -0.10, 0)
    sword.add(grip)

    const pommel = new THREE.Mesh(new THREE.SphereGeometry(0.07, 14, 12), bladeMat)
    pommel.position.set(0, -0.28, 0)
    sword.add(pommel)

    sword.userData.__tipLocal = new THREE.Vector3(0, 1.65, 0)
    return sword
  }

  function sculptGeometry(geom, seed, amp, freq) {
    if (!geom || !geom.attributes || !geom.attributes.position) return geom
    const g = geom.toNonIndexed ? geom.toNonIndexed() : geom
    try { g.computeVertexNormals && g.computeVertexNormals() } catch (_) {}
    const pos = g.attributes.position
    const normal = g.attributes.normal
    const tmpN = new THREE.Vector3()
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i)
      const y = pos.getY(i)
      const z = pos.getZ(i)

      // Region-aware amplitude: keep head/hands/feet cleaner; emphasize torso/limbs.
      const y01 = Math.max(0, Math.min(1, (y + 0.2) / 2.1))
      const torsoMask = 1.0 - Math.abs(y01 * 2 - 1)
      const region = 0.35 + 0.65 * torsoMask

      const n0 = Math.sin((x * freq + seed) * 1.13) * 0.55
      const n1 = Math.sin((y * freq * 1.21 + seed * 1.7) * 1.07) * 0.55
      const n2 = Math.sin((z * freq * 0.93 + seed * 2.3) * 1.19) * 0.55
      const n3 = Math.sin((x + y - z) * freq * 0.62 + seed * 3.1) * 0.45
      const noise = (n0 + n1 + n2 + n3) / 2.1
      const d = amp * region * noise

      if (normal) {
        tmpN.set(normal.getX(i), normal.getY(i), normal.getZ(i)).normalize()
        pos.setXYZ(i, x + tmpN.x * d, y + tmpN.y * d, z + tmpN.z * d)
      } else {
        pos.setXYZ(i, x + d * 0.2, y + d * 0.2, z + d * 0.2)
      }
    }
    pos.needsUpdate = true
    try { g.computeVertexNormals && g.computeVertexNormals() } catch (_) {}
    return g
  }

  function buildMergedMesh(parts, material, sculptSeed, sculptAmp, sculptFreq) {
    const geoms = []
    for (const p of parts) {
      if (!p?.geom) continue
      const g = p.geom.clone()
      const s = p.scale || new THREE.Vector3(1, 1, 1)
      const r = p.rot || new THREE.Euler(0, 0, 0)
      const t = p.pos || new THREE.Vector3(0, 0, 0)
      const m = new THREE.Matrix4()
      m.compose(t, new THREE.Quaternion().setFromEuler(r), s)
      g.applyMatrix4(m)
      geoms.push(g)
    }
    let merged = null
    try { merged = mergeGeometries(geoms, false) } catch (_) { merged = geoms[0] || new THREE.BufferGeometry() }
    merged = sculptGeometry(merged, sculptSeed || 1.0, sculptAmp || 0.0, sculptFreq || 3.0)
    const mesh = new THREE.Mesh(merged, material)
    return mesh
  }

  function makeHumanoidFace(skinMaterial, eyeMaterial, seed) {
    const g = new THREE.Group()

    const headMesh = buildMergedMesh([
      // cranium
      { geom: new THREE.SphereGeometry(0.18, 32, 22), pos: new THREE.Vector3(0, 0.00, 0.00), scale: new THREE.Vector3(1.05, 1.00, 0.98) },
      // jaw + chin
      { geom: new THREE.CapsuleGeometry(0.12, 0.18, 12, 18), pos: new THREE.Vector3(0, -0.10, 0.02), scale: new THREE.Vector3(1.10, 1.00, 1.05) },
      { geom: new THREE.SphereGeometry(0.08, 22, 16), pos: new THREE.Vector3(0, -0.18, 0.08), scale: new THREE.Vector3(1.15, 0.85, 1.25) },
      // cheekbones
      { geom: new THREE.SphereGeometry(0.07, 18, 14), pos: new THREE.Vector3(-0.085, -0.05, 0.105), scale: new THREE.Vector3(1.35, 0.85, 1.25) },
      { geom: new THREE.SphereGeometry(0.07, 18, 14), pos: new THREE.Vector3(0.085, -0.05, 0.105), scale: new THREE.Vector3(1.35, 0.85, 1.25) },
      // brow ridge
      { geom: new THREE.BoxGeometry(0.18, 0.06, 0.10), pos: new THREE.Vector3(0, 0.05, 0.12), rot: new THREE.Euler(0.08, 0, 0) },
      // nose bridge + tip
      { geom: new THREE.CapsuleGeometry(0.03, 0.10, 10, 14), pos: new THREE.Vector3(0, -0.02, 0.165), rot: new THREE.Euler(Math.PI / 2, 0, 0) },
      { geom: new THREE.SphereGeometry(0.03, 14, 10), pos: new THREE.Vector3(0, -0.06, 0.19), scale: new THREE.Vector3(1.2, 0.8, 1.1) },
      // ears
      { geom: new THREE.SphereGeometry(0.05, 16, 12), pos: new THREE.Vector3(-0.175, -0.02, 0.00), scale: new THREE.Vector3(0.55, 1.05, 0.35) },
      { geom: new THREE.SphereGeometry(0.05, 16, 12), pos: new THREE.Vector3(0.175, -0.02, 0.00), scale: new THREE.Vector3(0.55, 1.05, 0.35) },
      // mouth volume (subtle)
      { geom: new THREE.BoxGeometry(0.10, 0.03, 0.04), pos: new THREE.Vector3(0, -0.14, 0.145), rot: new THREE.Euler(0.10, 0, 0) }
    ], skinMaterial, seed + 3.3, 0.008, 7.2)
    g.add(headMesh)

    // Eyes (small, slightly inset)
    const eyeL = new THREE.Mesh(new THREE.SphereGeometry(0.018, 14, 10), eyeMaterial)
    eyeL.position.set(-0.055, 0.01, 0.155)
    g.add(eyeL)
    const eyeR = eyeL.clone()
    eyeR.position.set(0.055, 0.01, 0.155)
    g.add(eyeR)

    return g
  }

  function makeHandMesh(skinMaterial, seed, mirrorSign) {
    const s = mirrorSign || 1
    const hand = buildMergedMesh([
      // palm
      { geom: new THREE.BoxGeometry(0.09, 0.07, 0.10), pos: new THREE.Vector3(0, 0, 0), scale: new THREE.Vector3(1.0, 0.95, 1.15) },
      // finger mass (keeps it from reading as individual cylinders)
      { geom: new THREE.BoxGeometry(0.085, 0.06, 0.09), pos: new THREE.Vector3(0, 0.00, 0.085), rot: new THREE.Euler(0.10, 0, 0) },
      // thumb mound
      { geom: new THREE.CapsuleGeometry(0.022, 0.06, 10, 14), pos: new THREE.Vector3(0.05 * s, -0.01, 0.03), rot: new THREE.Euler(0.10, 0.35 * s, 0.85 * s) },
      // knuckle ridge
      { geom: new THREE.BoxGeometry(0.08, 0.02, 0.06), pos: new THREE.Vector3(0, 0.03, 0.06) }
    ], skinMaterial, seed + 9.1 * s, 0.006, 10.0)
    return hand
  }

  function makeSamuraiPlayer() {
    // Shorter, muscular, classic samurai armor. No face features.
    const group = new THREE.Group()

    const skinMat = makeSkinMaterial(0x8b5e3c, 101.1)
    const armorMat = makeArmorMaterial(0x7a0b0b, 113.3)
    const armorDarkMat = makeArmorMaterial(0x2b0f10, 127.7)
    const clothMat = makeFabricMaterial(0x111827, 141.9)
    const eyeMat = trackMat(new THREE.MeshStandardMaterial({ color: 0x0b0f18, roughness: 0.25, metalness: 0.05, transparent: true, opacity: 0.9 }))

    // Head + helmet (kabuto) — merged so it reads less like stacked primitives.
    const face = makeHumanoidFace(skinMat, eyeMat, 41.2)
    face.position.set(0, 1.42, 0)
    group.add(face)

    const helmet = buildMergedMesh([
      { geom: new THREE.SphereGeometry(0.20, 30, 22), pos: new THREE.Vector3(0, 1.48, 0), scale: new THREE.Vector3(1.05, 0.90, 1.05) },
      { geom: new THREE.TorusGeometry(0.22, 0.02, 14, 34), pos: new THREE.Vector3(0, 1.40, 0), rot: new THREE.Euler(Math.PI / 2, 0, 0) },
      // cheek guards
      { geom: new THREE.BoxGeometry(0.08, 0.18, 0.12), pos: new THREE.Vector3(-0.16, 1.34, 0.06), rot: new THREE.Euler(0.10, 0.20, 0.15) },
      { geom: new THREE.BoxGeometry(0.08, 0.18, 0.12), pos: new THREE.Vector3(0.16, 1.34, 0.06), rot: new THREE.Euler(0.10, -0.20, -0.15) }
    ], armorDarkMat, 11.7, 0.010, 5.0)
    group.add(helmet)

    const crest = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.18, 0.02), trackMat(new THREE.MeshStandardMaterial({ color: 0xd4af37, roughness: 0.35, metalness: 0.75, transparent: true, opacity: 1.0 })))
    crest.position.set(0, 1.62, 0.12)
    group.add(crest)

    // Body as one merged “sculpted” mesh so you don’t see obvious primitives.
    const body = buildMergedMesh([
      // neck + chest + abdomen + pelvis
      { geom: new THREE.CapsuleGeometry(0.08, 0.10, 10, 16), pos: new THREE.Vector3(0, 1.32, 0.02) },
      { geom: new THREE.CapsuleGeometry(0.20, 0.34, 16, 24), pos: new THREE.Vector3(0, 1.16, 0.00), scale: new THREE.Vector3(1.02, 1.0, 0.92) },
      { geom: new THREE.CapsuleGeometry(0.17, 0.28, 14, 22), pos: new THREE.Vector3(0, 0.96, 0.00), scale: new THREE.Vector3(1.00, 1.0, 0.92) },
      { geom: new THREE.CapsuleGeometry(0.16, 0.18, 12, 20), pos: new THREE.Vector3(0, 0.78, 0.00), scale: new THREE.Vector3(1.06, 1.0, 0.92) },

      // shoulders
      { geom: new THREE.SphereGeometry(0.16, 20, 16), pos: new THREE.Vector3(-0.26, 1.26, 0.02), scale: new THREE.Vector3(1.25, 0.85, 0.85) },
      { geom: new THREE.SphereGeometry(0.16, 20, 16), pos: new THREE.Vector3(0.26, 1.26, 0.02), scale: new THREE.Vector3(1.25, 0.85, 0.85) },

      // left arm
      { geom: new THREE.CapsuleGeometry(0.11, 0.26, 14, 22), pos: new THREE.Vector3(-0.34, 1.14, 0.02), rot: new THREE.Euler(0, 0, 0.55) },
      { geom: new THREE.CapsuleGeometry(0.10, 0.24, 14, 22), pos: new THREE.Vector3(-0.46, 0.98, 0.06), rot: new THREE.Euler(0, 0, 0.80) },
      { geom: new THREE.SphereGeometry(0.06, 18, 14), pos: new THREE.Vector3(-0.40, 1.04, 0.04), scale: new THREE.Vector3(1.2, 0.9, 0.9) }, // elbow

      // right arm (aiming)
      { geom: new THREE.CapsuleGeometry(0.11, 0.26, 14, 22), pos: new THREE.Vector3(0.32, 1.18, 0.02), rot: new THREE.Euler(0, 0, -0.90) },
      { geom: new THREE.CapsuleGeometry(0.10, 0.24, 14, 22), pos: new THREE.Vector3(0.50, 1.12, 0.12), rot: new THREE.Euler(0, 0, -0.92) },
      { geom: new THREE.SphereGeometry(0.06, 18, 14), pos: new THREE.Vector3(0.43, 1.16, 0.10), scale: new THREE.Vector3(1.2, 0.9, 0.9) }, // elbow

      // legs
      { geom: new THREE.CapsuleGeometry(0.12, 0.52, 16, 24), pos: new THREE.Vector3(-0.13, 0.38, 0.0), rot: new THREE.Euler(0, 0, 0.06), scale: new THREE.Vector3(0.95, 1.0, 0.90) },
      { geom: new THREE.CapsuleGeometry(0.12, 0.52, 16, 24), pos: new THREE.Vector3(0.13, 0.38, 0.0), rot: new THREE.Euler(0, 0, -0.03), scale: new THREE.Vector3(0.95, 1.0, 0.90) },
      { geom: new THREE.SphereGeometry(0.07, 18, 14), pos: new THREE.Vector3(-0.12, 0.18, 0.03), scale: new THREE.Vector3(1.1, 0.85, 1.0) }, // knee
      { geom: new THREE.SphereGeometry(0.07, 18, 14), pos: new THREE.Vector3(0.12, 0.18, 0.03), scale: new THREE.Vector3(1.1, 0.85, 1.0) }, // knee
      { geom: new THREE.SphereGeometry(0.08, 18, 14), pos: new THREE.Vector3(-0.12, 0.30, -0.03), scale: new THREE.Vector3(1.25, 0.85, 1.1) }, // calf
      { geom: new THREE.SphereGeometry(0.08, 18, 14), pos: new THREE.Vector3(0.12, 0.30, -0.03), scale: new THREE.Vector3(1.25, 0.85, 1.1) }, // calf
      // feet
      { geom: new THREE.SphereGeometry(0.10, 18, 14), pos: new THREE.Vector3(-0.12, 0.02, 0.07), scale: new THREE.Vector3(1.45, 0.55, 2.0) },
      { geom: new THREE.SphereGeometry(0.10, 18, 14), pos: new THREE.Vector3(0.12, 0.02, 0.07), scale: new THREE.Vector3(1.45, 0.55, 2.0) }
    ], skinMat, 3.3, 0.012, 4.2)
    group.add(body)

    // Hands as merged meshes (less “ball hands”).
    const handL = makeHandMesh(skinMat, 13.3, -1)
    handL.position.set(-0.54, 0.90, 0.12)
    handL.rotation.z = 0.65
    group.add(handL)
    const handR = makeHandMesh(skinMat, 17.9, 1)
    handR.position.set(0.64, 1.06, 0.16)
    handR.rotation.z = -0.95
    group.add(handR)

    // Armor as merged meshes (reads more like crafted gear than lego boxes).
    const cuirass = buildMergedMesh([
      { geom: new THREE.BoxGeometry(0.50, 0.52, 0.26), pos: new THREE.Vector3(0, 1.05, 0) },
      { geom: new THREE.SphereGeometry(0.18, 18, 14), pos: new THREE.Vector3(-0.16, 1.24, 0.05), scale: new THREE.Vector3(1.2, 0.7, 0.8) },
      { geom: new THREE.SphereGeometry(0.18, 18, 14), pos: new THREE.Vector3(0.16, 1.24, 0.05), scale: new THREE.Vector3(1.2, 0.7, 0.8) }
    ], armorMat, 8.4, 0.010, 5.2)
    group.add(cuirass)

    const lamella = buildMergedMesh([
      { geom: new THREE.BoxGeometry(0.52, 0.06, 0.26), pos: new THREE.Vector3(0, 0.86, 0) },
      { geom: new THREE.BoxGeometry(0.52, 0.06, 0.26), pos: new THREE.Vector3(0, 0.93, 0) },
      { geom: new THREE.BoxGeometry(0.52, 0.06, 0.26), pos: new THREE.Vector3(0, 1.00, 0) },
      { geom: new THREE.BoxGeometry(0.52, 0.06, 0.26), pos: new THREE.Vector3(0, 1.07, 0) },
      { geom: new THREE.BoxGeometry(0.52, 0.06, 0.26), pos: new THREE.Vector3(0, 1.14, 0) },
      { geom: new THREE.BoxGeometry(0.52, 0.06, 0.26), pos: new THREE.Vector3(0, 1.21, 0) }
    ], armorDarkMat, 9.1, 0.008, 6.0)
    group.add(lamella)

    const skirt = buildMergedMesh([
      { geom: new THREE.BoxGeometry(0.55, 0.08, 0.30), pos: new THREE.Vector3(0, 0.70, 0) },
      { geom: new THREE.BoxGeometry(0.55, 0.08, 0.30), pos: new THREE.Vector3(0, 0.64, 0) },
      { geom: new THREE.BoxGeometry(0.55, 0.08, 0.30), pos: new THREE.Vector3(0, 0.58, 0) },
      { geom: new THREE.BoxGeometry(0.55, 0.08, 0.30), pos: new THREE.Vector3(0, 0.52, 0) }
    ], armorMat, 12.2, 0.006, 6.5)
    group.add(skirt)

    const sode = buildMergedMesh([
      { geom: new THREE.BoxGeometry(0.22, 0.22, 0.18), pos: new THREE.Vector3(-0.40, 1.24, 0), rot: new THREE.Euler(0, 0, 0.20) },
      { geom: new THREE.BoxGeometry(0.22, 0.22, 0.18), pos: new THREE.Vector3(0.40, 1.24, 0), rot: new THREE.Euler(0, 0, -0.20) }
    ], armorDarkMat, 6.2, 0.007, 6.0)
    group.add(sode)

    const greaves = buildMergedMesh([
      { geom: new THREE.BoxGeometry(0.18, 0.34, 0.18), pos: new THREE.Vector3(-0.14, 0.22, 0) },
      { geom: new THREE.BoxGeometry(0.18, 0.34, 0.18), pos: new THREE.Vector3(0.14, 0.22, 0) }
    ], armorMat, 5.1, 0.006, 6.2)
    group.add(greaves)

    // Rifle + aiming pose
    const rifle = makeAssaultRifle()
    rifle.position.set(0.10, 1.18, 0.10)
    rifle.rotation.y = 0.02
    rifle.rotation.z = 0.10
    group.add(rifle)
    group.userData.__rifle = rifle

    // Slight forward lean
    group.rotation.z = 0.02

    // Shadows
    group.traverse(o => {
      if (!o) return
      if (o.isMesh) {
        o.castShadow = true
        o.receiveShadow = false
      }
    })

    return group
  }

  function makeImmortalGod() {
    // Tall, extremely muscular, toga, broadsword, flowing white hair + beard.
    const group = new THREE.Group()
    const skinMat = makeSkinMaterial(0xd6c7b7, 201.2)
    const togaMat = makeFabricMaterial(0xf8fafc, 213.4)
    const hairMat = trackMat(new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      roughness: 0.92,
      metalness: 0.0,
      sheen: 0.35,
      sheenRoughness: 0.70,
      sheenColor: new THREE.Color(0xffffff),
      specularIntensity: 0.20,
      transparent: true,
      opacity: 0.92
    }))

    const eyeMat = trackMat(new THREE.MeshStandardMaterial({ color: 0x0b0f18, roughness: 0.25, metalness: 0.05, transparent: true, opacity: 0.9 }))
    const face = makeHumanoidFace(skinMat, eyeMat, 77.7)
    face.position.set(0, 1.70, 0)
    face.scale.setScalar(1.05)
    group.add(face)

    // Body as one merged sculpted mesh (muscular humanoid).
    const body = buildMergedMesh([
      // neck + traps
      { geom: new THREE.CapsuleGeometry(0.10, 0.12, 12, 18), pos: new THREE.Vector3(0, 1.56, 0.00), scale: new THREE.Vector3(1.0, 1.0, 0.9) },
      { geom: new THREE.SphereGeometry(0.18, 22, 18), pos: new THREE.Vector3(-0.30, 1.48, 0.02), scale: new THREE.Vector3(1.55, 0.85, 0.95) },
      { geom: new THREE.SphereGeometry(0.18, 22, 18), pos: new THREE.Vector3(0.30, 1.48, 0.02), scale: new THREE.Vector3(1.55, 0.85, 0.95) },

      // ribcage + abdomen + pelvis
      { geom: new THREE.CapsuleGeometry(0.26, 0.44, 18, 28), pos: new THREE.Vector3(0, 1.28, 0.00), scale: new THREE.Vector3(1.05, 1.0, 0.90) },
      { geom: new THREE.CapsuleGeometry(0.22, 0.36, 16, 26), pos: new THREE.Vector3(0, 1.02, 0.00), scale: new THREE.Vector3(1.00, 1.0, 0.90) },
      { geom: new THREE.CapsuleGeometry(0.22, 0.22, 14, 24), pos: new THREE.Vector3(0, 0.78, 0.00), scale: new THREE.Vector3(1.12, 1.0, 0.92) },

      // left arm
      { geom: new THREE.CapsuleGeometry(0.15, 0.34, 16, 24), pos: new THREE.Vector3(-0.50, 1.44, 0.02), rot: new THREE.Euler(0, 0, 0.22) },
      { geom: new THREE.CapsuleGeometry(0.14, 0.32, 16, 24), pos: new THREE.Vector3(-0.66, 1.26, 0.08), rot: new THREE.Euler(0, 0, 0.28) },
      { geom: new THREE.SphereGeometry(0.09, 20, 16), pos: new THREE.Vector3(-0.78, 1.08, 0.12), scale: new THREE.Vector3(1.25, 0.80, 1.35) },

      // right arm (holding sword)
      { geom: new THREE.CapsuleGeometry(0.15, 0.34, 16, 24), pos: new THREE.Vector3(0.54, 1.40, 0.02), rot: new THREE.Euler(0, 0, -0.70) },
      { geom: new THREE.CapsuleGeometry(0.14, 0.32, 16, 24), pos: new THREE.Vector3(0.78, 1.26, 0.14), rot: new THREE.Euler(0, 0, -0.82) },
      { geom: new THREE.SphereGeometry(0.095, 20, 16), pos: new THREE.Vector3(0.96, 1.14, 0.18), scale: new THREE.Vector3(1.25, 0.80, 1.35) },

      // legs
      { geom: new THREE.CapsuleGeometry(0.16, 0.70, 16, 24), pos: new THREE.Vector3(-0.16, 0.50, 0.00), rot: new THREE.Euler(0, 0, 0.03), scale: new THREE.Vector3(0.98, 1.0, 0.92) },
      { geom: new THREE.CapsuleGeometry(0.16, 0.70, 16, 24), pos: new THREE.Vector3(0.16, 0.50, 0.00), rot: new THREE.Euler(0, 0, -0.02), scale: new THREE.Vector3(0.98, 1.0, 0.92) },
      { geom: new THREE.SphereGeometry(0.10, 20, 16), pos: new THREE.Vector3(-0.15, 0.26, 0.02), scale: new THREE.Vector3(1.15, 0.85, 1.0) }, // knee
      { geom: new THREE.SphereGeometry(0.10, 20, 16), pos: new THREE.Vector3(0.15, 0.26, 0.02), scale: new THREE.Vector3(1.15, 0.85, 1.0) }, // knee
      { geom: new THREE.SphereGeometry(0.12, 20, 16), pos: new THREE.Vector3(-0.15, 0.42, -0.05), scale: new THREE.Vector3(1.25, 0.85, 1.1) }, // calf
      { geom: new THREE.SphereGeometry(0.12, 20, 16), pos: new THREE.Vector3(0.15, 0.42, -0.05), scale: new THREE.Vector3(1.25, 0.85, 1.1) }, // calf
      // feet
      { geom: new THREE.SphereGeometry(0.12, 20, 16), pos: new THREE.Vector3(-0.15, 0.06, 0.08), scale: new THREE.Vector3(1.55, 0.55, 2.15) },
      { geom: new THREE.SphereGeometry(0.12, 20, 16), pos: new THREE.Vector3(0.15, 0.06, 0.08), scale: new THREE.Vector3(1.55, 0.55, 2.15) }
    ], skinMat, 18.9, 0.014, 3.8)
    group.add(body)

    // Hands as merged meshes.
    const handL = makeHandMesh(skinMat, 29.1, -1)
    handL.position.set(-0.78, 1.08, 0.12)
    handL.rotation.z = 0.18
    group.add(handL)
    const handR = makeHandMesh(skinMat, 31.7, 1)
    handR.position.set(0.96, 1.14, 0.18)
    handR.rotation.z = -0.78
    group.add(handR)

    // Toga (merged + lightly sculpted for folds so it doesn’t read as torus/cylinder).
    const sashCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-0.35, 1.58, 0.10),
      new THREE.Vector3(-0.10, 1.30, 0.16),
      new THREE.Vector3(0.20, 1.05, 0.10),
      new THREE.Vector3(0.40, 0.88, 0.02)
    ])
    const toga = buildMergedMesh([
      { geom: new THREE.TorusGeometry(0.40, 0.11, 14, 34), pos: new THREE.Vector3(0.04, 1.24, 0.02), rot: new THREE.Euler(Math.PI / 2, 0, 0) },
      { geom: new THREE.CylinderGeometry(0.40, 0.48, 0.78, 28, 1, true), pos: new THREE.Vector3(0.03, 0.72, 0) },
      { geom: new THREE.TubeGeometry(sashCurve, 28, 0.06, 12, false), pos: new THREE.Vector3(0, 0, 0) },
      { geom: new THREE.BoxGeometry(0.46, 0.12, 0.22), pos: new THREE.Vector3(-0.10, 1.02, 0.02), rot: new THREE.Euler(0, 0, 0.12) },
      // extra fold volumes
      { geom: new THREE.SphereGeometry(0.12, 18, 14), pos: new THREE.Vector3(-0.24, 1.10, 0.06), scale: new THREE.Vector3(1.8, 0.7, 1.2) },
      { geom: new THREE.SphereGeometry(0.12, 18, 14), pos: new THREE.Vector3(0.18, 1.02, 0.06), scale: new THREE.Vector3(1.6, 0.6, 1.2) }
    ], togaMat, 27.2, 0.010, 6.2)
    group.add(toga)

    // Hair: multiple tube strands down the back
    for (let i = 0; i < 7; i++) {
      const s = i / 6
      const x = -0.16 + 0.32 * s
      const curve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(x, 1.80, -0.10),
        new THREE.Vector3(x * 0.6, 1.55, -0.22),
        new THREE.Vector3(x * 0.3, 1.20, -0.30),
        new THREE.Vector3(x * 0.2, 0.85, -0.22)
      ])
      const hairGeo = new THREE.TubeGeometry(curve, 16, 0.02, 8, false)
      const hair = new THREE.Mesh(hairGeo, hairMat)
      group.add(hair)
    }

    // Beard: a few curls
    for (let i = 0; i < 4; i++) {
      const s = i / 3
      const x = -0.08 + 0.16 * s
      const curve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(x, 1.62, 0.10),
        new THREE.Vector3(x * 0.6, 1.50, 0.16),
        new THREE.Vector3(x * 0.3, 1.36, 0.12)
      ])
      const beardGeo = new THREE.TubeGeometry(curve, 10, 0.018, 8, false)
      const beard = new THREE.Mesh(beardGeo, hairMat)
      group.add(beard)
    }

    const sword = makeBroadsword()
    sword.position.set(0.68, 1.05, 0.10)
    sword.rotation.z = -0.35
    sword.rotation.y = -0.10
    group.add(sword)
    group.userData.__sword = sword

    // Shadows
    group.traverse(o => {
      if (!o) return
      if (o.isMesh) {
        o.castShadow = true
        o.receiveShadow = false
      }
    })

    return group
  }

  try {
    renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: 'high-performance' })
    renderer.outputColorSpace = THREE.SRGBColorSpace
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.10
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    // Transparent background so we can fade back to the game.
    renderer.setClearColor(0x000000, 0)

    scene = new THREE.Scene()
    scene.fog = new THREE.FogExp2(0xd5e8ff, 0.08)

    camera = new THREE.PerspectiveCamera(42, Math.max(1, window.innerWidth) / Math.max(1, window.innerHeight), 0.1, 140)
    camera.position.set(0.0, 1.45, 9.2)
    camera.lookAt(0.0, 1.30, 0.0)

    const amb = new THREE.AmbientLight(0xffffff, 0.55)
    scene.add(amb)
    const key = new THREE.DirectionalLight(0xffffff, 1.35)
    key.position.set(-2.5, 4.0, 3.5)
    key.castShadow = true
    key.shadow.mapSize.width = 1024
    key.shadow.mapSize.height = 1024
    key.shadow.camera.near = 0.5
    key.shadow.camera.far = 20
    key.shadow.camera.left = -6
    key.shadow.camera.right = 6
    key.shadow.camera.top = 6
    key.shadow.camera.bottom = -6
    scene.add(key)
    const rim = new THREE.DirectionalLight(0xb9e7ff, 1.05)
    rim.position.set(3.0, 2.0, -4.0)
    scene.add(rim)
    const fill = new THREE.DirectionalLight(0xf8fafc, 0.55)
    fill.position.set(0.0, 2.2, 5.0)
    scene.add(fill)

    // Soft ground haze plane
    const groundGeo = new THREE.PlaneGeometry(40, 40)
    const groundMat = trackMat(new THREE.MeshBasicMaterial({
      color: 0xdbeafe,
      transparent: true,
      opacity: 0.18,
      depthWrite: false
    }))
    const ground = new THREE.Mesh(groundGeo, groundMat)
    ground.rotation.x = -Math.PI / 2
    ground.position.y = -0.05
    ground.receiveShadow = true
    scene.add(ground)

    // Black overlay plane in front of camera
    const blackGeo = new THREE.PlaneGeometry(2, 2)
    const blackMat = new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 1.0, depthWrite: false })
    blackPlane = new THREE.Mesh(blackGeo, blackMat)
    blackPlane.position.set(0, 0, -1)
    camera.add(blackPlane)
    scene.add(camera)

  } catch (e) {
    try { console.error(e) } catch (_) {}
    try { renderer && renderer.dispose && renderer.dispose() } catch (_) {}
    try { el.remove() } catch (_) {}
    if (onDone) onDone()
    render()
    saveGame()
    return
  }

  // Characters (spec)
  const player = makeSamuraiPlayer()
  player.scale.setScalar(0.78)
  player.position.set(-1.55, 0.0, 0.25)
  player.rotation.y = 0.05
  scene.add(player)

  const god = makeImmortalGod()
  god.scale.setScalar(0.98)
  god.position.set(1.55, 0.0, -0.10)
  god.rotation.y = Math.PI - 0.05
  scene.add(god)

  // Subtle lightning arc between them
  const arcGeom = new THREE.BufferGeometry()
  arcGeom.setAttribute('position', new THREE.Float32BufferAttribute([0, 0, 0, 0, 0, 0], 3))
  const arcMat = trackMat(new THREE.LineBasicMaterial({
    color: 0xf1fbff,
    transparent: true,
    opacity: 0.55,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  }))
  const arc = new THREE.Line(arcGeom, arcMat)
  scene.add(arc)

  const timeStart = performance.now()

  function resize() {
    const dpr = Math.max(1, Math.min(2.5, window.devicePixelRatio || 1))
    renderer.setPixelRatio(dpr)
    const w = Math.max(1, window.innerWidth)
    const h = Math.max(1, window.innerHeight)
    renderer.setSize(w, h, false)
    camera.aspect = w / h
    camera.updateProjectionMatrix()
  }

  __heavensThreeResizeHandler = () => resize()
  try { window.addEventListener('resize', __heavensThreeResizeHandler) } catch (_) {}
  resize()

  __heavensThreeRenderer = renderer
  __heavensThreeScene = scene
  __heavensThreeDispose = () => {
    try {
      try { arcGeom && arcGeom.dispose && arcGeom.dispose() } catch (_) {}
      try { arcMat && arcMat.dispose && arcMat.dispose() } catch (_) {}
      for (const t of texturesToDispose) {
        try { t.dispose() } catch (_) {}
      }
      __disposeThreeScene(scene)
      try { renderer.dispose() } catch (_) {}
    } catch (_) {}
  }

  function frame(now) {
    const t = (now - timeStart) / 1000
    const fadeOut = t <= totalDuration ? 0 : Math.max(0, Math.min(1, (t - totalDuration) / fadeOutDuration))
    const fadeIn = Math.max(0, Math.min(1, t / fadeInDuration))

    // Crossfade from black into scene
    setBlack(1.0 - fadeIn)
    // Then fade everything out to transparent back to the game.
    setGlobalAlpha(1.0 - fadeOut)

    // Idle animation
    const bob = 0.028 * Math.sin(t * 1.7)
    player.position.y = bob
    god.position.y = -bob * 0.25
    player.rotation.y = 0.05 + 0.02 * Math.sin(t * 0.7)
    god.rotation.y = (Math.PI - 0.05) - 0.02 * Math.sin(t * 0.65 + 1.2)

    // Ensure they face each other (subtle; avoid tilt)
    player.lookAt(new THREE.Vector3(god.position.x, 1.30, god.position.z))
    god.lookAt(new THREE.Vector3(player.position.x, 1.45, player.position.z))
    player.rotation.x = 0
    player.rotation.z = 0
    god.rotation.x = 0
    god.rotation.z = 0

    // Aim rifle at the god's face
    let muzzleWorld = null
    const rifle = player.userData?.__rifle
    if (rifle) {
      const muzzleLocal = rifle.userData?.__muzzleWorld || new THREE.Vector3(1.22, 0.01, 0)
      muzzleWorld = muzzleLocal.clone()
      rifle.localToWorld(muzzleWorld)
      const target = new THREE.Vector3(god.position.x, 1.74, god.position.z)
      const dir = target.clone().sub(muzzleWorld).normalize()
      const yaw = Math.atan2(dir.z, dir.x)
      const pitch = Math.asin(dir.y)
      rifle.rotation.y = yaw
      rifle.rotation.z = -pitch * 0.55
    }

    // Camera micro movement
    camera.position.x = 0.12 * Math.sin(t * 0.22)
    camera.position.z = 9.2 + 0.14 * Math.sin(t * 0.18)
    camera.lookAt(0.0, 1.30 + 0.06 * Math.sin(t * 0.2), 0.0)

    // Lightning arc (muzzle -> god)
    const p0 = muzzleWorld ? muzzleWorld.clone() : new THREE.Vector3(player.position.x + 0.75, 1.24, player.position.z)
    const p1 = new THREE.Vector3(god.position.x - 0.25, 1.45, god.position.z)
    const mid = p0.clone().lerp(p1, 0.5)
    mid.y += 0.18 * Math.sin(t * 3.0)
    const posAttr = arc.geometry.getAttribute('position')
    posAttr.setXYZ(0, p0.x, p0.y, p0.z)
    posAttr.setXYZ(1, p1.x + 0.05 * Math.sin(t * 4.0), p1.y + 0.05 * Math.cos(t * 3.6), p1.z)
    posAttr.needsUpdate = true
    arc.material.opacity = (0.20 + 0.35 * (0.5 + 0.5 * Math.sin(t * 1.8))) * (1.0 - fadeOut)

    renderer.render(scene, camera)

    if (t >= endAt) {
      stopHeavensThreeCinematic()
      try { el.remove() } catch (_) {}
      if (onDone) onDone()
      render()
      saveGame()
      return
    }

    __heavensThreeRafId = requestAnimationFrame(frame)
  }

  // Start fully black.
  setBlack(1.0)
  setGlobalAlpha(0.0)
  __heavensThreeRafId = requestAnimationFrame(frame)
}

function runHeavensAssaultCinematicPart1Core(opts) {
  const options = opts && typeof opts === 'object' ? opts : {}
  const onDone = typeof options.onDone === 'function' ? options.onDone : null

  // Ensure other cinematics stop driving the overlay.
  try { stopDemonCinematicTimers() } catch (_) {}
  try { stopCarpetBombCinematic() } catch (_) {}
  stopHeavensCinematic()

  const el = ensureCinematicOverlay()
  el.classList.remove('active', 'impact', 'fade-out')
  void el.offsetWidth
  el.classList.add('active', 'canvas-mode')

  const canvas = el.querySelector('.cinematic-canvas')
  const gl = canvas && canvas.getContext ? (canvas.getContext('webgl2', { alpha: true, antialias: true }) || canvas.getContext('webgl', { alpha: true, antialias: true })) : null
  if (!canvas || !gl) {
    try { el.remove() } catch (_) {}
    if (onDone) onDone()
    render()
    saveGame()
    return
  }

  function compileShader(type, src) {
    const sh = gl.createShader(type)
    gl.shaderSource(sh, src)
    gl.compileShader(sh)
    if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
      const msg = gl.getShaderInfoLog(sh) || 'shader compile failed'
      try { gl.deleteShader(sh) } catch (_) {}
      throw new Error(msg)
    }
    return sh
  }

  function createProgram(vsSrc, fsSrc) {
    const vs = compileShader(gl.VERTEX_SHADER, vsSrc)
    const fs = compileShader(gl.FRAGMENT_SHADER, fsSrc)
    const prog = gl.createProgram()
    gl.attachShader(prog, vs)
    gl.attachShader(prog, fs)
    gl.linkProgram(prog)
    try { gl.deleteShader(vs) } catch (_) {}
    try { gl.deleteShader(fs) } catch (_) {}
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
      const msg = gl.getProgramInfoLog(prog) || 'program link failed'
      try { gl.deleteProgram(prog) } catch (_) {}
      throw new Error(msg)
    }
    return prog
  }

  // Part 1 only: fleet of planes in formation climbing upward,
  // firing rounds + launching antimatter upward into the heavens.
  const totalDuration = 10.5
  const fadeDuration = 1.1
  const endAt = totalDuration + fadeDuration

  const vsSrc = `#version 300 es
  precision highp float;
  out vec2 vUv;
  void main() {
    vec2 p = vec2((gl_VertexID == 1) ? 3.0 : -1.0, (gl_VertexID == 2) ? 3.0 : -1.0);
    vUv = 0.5 * (p + 1.0);
    gl_Position = vec4(p, 0.0, 1.0);
  }
  `

  const fsSrc = `#version 300 es
  precision highp float;
  in vec2 vUv;
  out vec4 fragColor;

  uniform vec2 uRes;
  uniform float uTime;
  uniform float uFade;

  float hash11(float p) {
    p = fract(p * 0.1031);
    p *= p + 33.33;
    p *= p + p;
    return fract(p);
  }

  vec2 hash21(float p) {
    float x = hash11(p + 17.0);
    float y = hash11(p + 43.0);
    return vec2(x, y);
  }

  float sdCircle(vec2 p, float r) {
    return length(p) - r;
  }

  float sdEllipse(vec2 p, vec2 r) {
    // Approx ellipse SDF (good enough for stylized shapes)
    p = abs(p);
    float k = (p.x/r.x)*(p.x/r.x) + (p.y/r.y)*(p.y/r.y);
    return (sqrt(k) - 1.0) * min(r.x, r.y);
  }

  float rect(vec2 p, vec2 b) {
    vec2 d = abs(p) - b;
    return max(d.x, d.y);
  }

  vec2 rot(vec2 p, float a) {
    float c = cos(a), s = sin(a);
    return vec2(c*p.x - s*p.y, s*p.x + c*p.y);
  }

  float segDist(vec2 p, vec2 a, vec2 b) {
    vec2 pa = p - a;
    vec2 ba = b - a;
    float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
    return length(pa - ba*h);
  }

  float beamField(vec2 p, float t) {
    float b = 0.0;
    for (int i = 0; i < 6; i++) {
      float id = float(i);
      float x = -0.92 + 0.37 * id + 0.09 * sin(t * 0.85 + id * 2.1);
      float w = 0.010 + 0.005 * hash11(id + 2.0);
      float d = abs(p.x - x);
      b += smoothstep(w, 0.0, d) * (0.55 + 0.45 * sin(t * 2.7 + id));
    }
    vec2 q = rot(p, 0.55);
    b += smoothstep(0.016, 0.0, abs(q.x - 0.18 - 0.12*sin(t*1.15))) * 0.85;
    q = rot(p, -0.55);
    b += smoothstep(0.016, 0.0, abs(q.x + 0.10 + 0.14*cos(t*1.05))) * 0.85;
    return b;
  }

  float fbm(vec2 p) {
    float f = 0.0;
    float a = 0.55;
    for (int i = 0; i < 5; i++) {
      float id = float(i);
      vec2 h = hash21(id + floor(p.x*13.0) + floor(p.y*17.0));
      float n = sin(dot(p, vec2(1.7, 2.1)) + h.x*6.283) * 0.5 + 0.5;
      f += a * n;
      p = rot(p * 1.85, 0.35);
      a *= 0.55;
    }
    return f;
  }

  float lightning(vec2 p, float seed, float t) {
    // Quick, stylized lightning bolt made of jittered segments.
    float l = 0.0;
    vec2 o = vec2(-0.55 + 1.10*hash11(seed+1.0), 0.95);
    vec2 d = vec2(0.0, -1.0);
    vec2 a = o;
    for (int i = 0; i < 7; i++) {
      float fi = float(i);
      vec2 jitter = vec2(0.18*(hash11(seed + fi*3.1 + t*0.6)-0.5), -0.12);
      vec2 b = a + d*0.22 + jitter;
      float dist = segDist(p, a, b);
      l = max(l, smoothstep(0.020, 0.0, dist));
      a = b;
    }
    return l;
  }

  void main() {
    vec2 uv = vUv;
    vec2 p = (uv * 2.0 - 1.0);
    p.x *= uRes.x / max(1.0, uRes.y);

    float t = uTime;
    // Part 1 is a single phase; we still keep a late fade-out.
    float t1 = clamp(t / 10.5, 0.0, 1.0);

    // Background: stormy heaven gradient + richer clouds
    vec3 skyA = vec3(0.03, 0.05, 0.09);
    vec3 skyB = vec3(0.26, 0.30, 0.40);
    float g = smoothstep(-0.95, 0.95, p.y);
    vec3 col = mix(skyA, skyB, g);

    float c1 = fbm(p*1.25 + vec2(0.0, t*0.06));
    float c2 = fbm(rot(p*1.85, 0.35) + vec2(t*0.05, -t*0.03));
    float clouds = smoothstep(0.25, 0.85, 0.55*c1 + 0.45*c2);
    col = mix(col, vec3(0.70, 0.72, 0.76), clouds*0.55);
    col *= 0.92 + 0.08*fbm(p*2.6 + vec2(0.0, -t*0.04));

    // Heavenly beams
    float beams = beamField(p, t);
    col += vec3(0.94, 0.96, 1.0) * beams * 0.58;

    // =========================
    // Part 1: fleet of planes in formation, climbing and firing upward
    // =========================
    vec3 assault = col;

    // Formation center rises over time (no looping/respawn).
    float baseY = mix(-1.15, 0.35, t1);
    float formationWob = 0.03 * sin(t*1.1);

    // Planes in a larger fleet: two V formations (13 planes total).
    for (int i = 0; i < 13; i++) {
      float id = float(i);
      float group = floor(id / 7.0);
      float idx = id - group * 7.0;
      float k = idx - 3.0;
      float xOff = k * 0.18;
      float yOff = -abs(k) * 0.065;

      // Formation stacked behind and slightly lower.
      float groupY = -group * 0.22;
      float groupX = (group * 0.03) * sin(t*0.7);

      // Random slight drift per plane.
      float driftX = 0.018 * sin(t*1.15 + id*1.7);
      float driftY = 0.012 * sin(t*0.95 + id*2.1);

      vec2 planePosBase = vec2(xOff + formationWob*0.65 + groupX + driftX, baseY + yOff + groupY + driftY);

      // Heaven beam hit events: each plane has ONE hit window during the cinematic.
      float hitAt = 0.22 + 0.60 * hash11(id + 21.0);
      // Pulse around the hit moment (avoid reversed smoothstep edges).
      float gotHit = 1.0 - smoothstep(0.0, 0.015, abs(t1 - hitAt));
      float fallT = clamp((t1 - hitAt) / 0.30, 0.0, 1.0);
      fallT *= step(hitAt, t1);
      float spin = fallT * (7.0 + 4.0 * hash11(id + 11.0));
      vec2 fallOffset = vec2(0.22 * sin(t*3.0 + id*2.2) * fallT, -1.25 * fallT);

      vec2 planePos = planePosBase + fallOffset;

      // Beam column from heaven down to the plane when it gets hit.
      float beamW = 0.022;
      float beamCol = smoothstep(beamW, 0.0, abs(p.x - planePosBase.x)) * smoothstep(planePosBase.y, 1.10, p.y);
      float beamPulse = gotHit;
      assault += vec3(0.95, 0.98, 1.0) * beamCol * beamPulse * 0.85;

      // Hit explosion: flash + expanding ring + sparks.
      float boom = beamPulse;
      float ringR = 0.02 + 0.55 * fallT;
      float ring = smoothstep(0.020, 0.0, abs(sdCircle(p - planePosBase, ringR)));
      float flash = smoothstep(0.18, 0.0, sdCircle(p - planePosBase, 0.10)) * boom;
      assault += vec3(1.0, 0.95, 0.75) * flash * 0.65;
      assault += vec3(0.95, 0.98, 1.0) * ring * boom * 0.55;
      for (int s = 0; s < 5; s++) {
        float fs = float(s);
        float angS = 6.28318 * hash11(id*13.7 + fs*7.1);
        vec2 dirS = vec2(cos(angS), sin(angS));
        vec2 sp = planePosBase + dirS * (0.10 + 0.30*fallT);
        float sd = sdCircle(p - sp, 0.014 + 0.008*hash11(id + fs));
        assault += vec3(1.0, 0.85, 0.35) * smoothstep(0.03, 0.0, sd) * boom * 0.35;
      }

      // Plane local space: face upward (model is built upright); spin only when falling.
      vec2 pp = p - planePos;
      float ang = spin;
      vec2 pr = rot(pp, ang);

      // Higher-quality plane silhouette: capsule fuselage + swept wings + tail fin.
      float fuseD = segDist(pr, vec2(0.0, -0.085), vec2(0.0, 0.095)) - 0.010;
      float fuselage = smoothstep(0.016, 0.0, fuseD);

      vec2 wlp = rot(pr + vec2(-0.038, 0.005), 0.70);
      vec2 wrp = rot(pr + vec2(0.038, 0.005), -0.70);
      float wingL = smoothstep(0.020, 0.0, rect(wlp, vec2(0.010, 0.070)));
      float wingR = smoothstep(0.020, 0.0, rect(wrp, vec2(0.010, 0.070)));

      float tail = smoothstep(0.020, 0.0, rect(pr + vec2(0.0, -0.090), vec2(0.020, 0.014)));
      float fin = smoothstep(0.020, 0.0, rect(pr + vec2(0.0, -0.105), vec2(0.006, 0.020)));
      float nose = smoothstep(0.018, 0.0, sdCircle(pr + vec2(0.0, 0.110), 0.012));

      float planeMask = max(max(fuselage, nose), max(max(wingL, wingR), max(tail, fin)));
      vec3 planeColor = mix(vec3(0.14, 0.14, 0.16), vec3(0.90, 0.95, 1.0), beamPulse * 0.25);
      // Slightly fade knocked planes as they fall.
      planeColor = mix(planeColor, vec3(0.10, 0.10, 0.12), fallT * 0.35);
      assault = mix(assault, planeColor, planeMask);

      // Falling trail: smoke + fire core
      float smoke = smoothstep(0.060, 0.0, segDist(p, planePos, planePos + vec2(0.0, -0.42 - 0.35*fallT))) * fallT;
      float fire = smoothstep(0.055, 0.0, segDist(p, planePos + vec2(0.0, 0.03), planePos + vec2(0.0, -0.18 - 0.25*fallT))) * fallT;
      assault += vec3(0.35, 0.38, 0.42) * smoke * 0.28;
      assault += vec3(1.0, 0.55, 0.15) * fire * (0.25 + 0.15*hash11(id + 31.0));

      // Gun point near the nose (world space)
      vec2 gun = planePos + vec2(0.0, 0.110);

      // Shooting rounds upward (keep the cool streaks)
      for (int j = 0; j < 5; j++) {
        float fj = float(j);
        float bt = fract(t*4.4 + id*1.7 + fj*0.19);
        vec2 b0 = gun + vec2(0.004*sin(t*10.0 + fj), 0.01);
        vec2 b1 = b0 + vec2(0.02*sin(t*3.5 + id + fj), 0.82*bt);
        float bd = segDist(p, b0, b1);
        float bm = smoothstep(0.010, 0.0, bd) * (1.0 - bt);
        assault += vec3(1.0, 0.85, 0.35) * bm * 0.26 * (1.0 - 0.75*fallT);
      }
      float flash = smoothstep(0.06, 0.0, abs(fract(t*4.4 + id*1.7) - 0.02));
      float fd = sdCircle(p - gun, 0.030);
      assault += vec3(1.0, 0.75, 0.25) * smoothstep(0.06, 0.0, fd) * flash * 0.42 * (1.0 - 0.75*fallT);

      // Antimatter shots upward into heaven: launched upward OFF THE SCREEN.
      float dt = fract(t*0.58 + id*0.23);
      float travel = smoothstep(0.0, 1.0, dt);
      vec2 launch = gun + vec2(0.0, 0.01);
      vec2 target = vec2(launch.x + 0.02*sin(t*0.9 + id*2.0), 1.35);
      vec2 dir = target - launch;
      float lenD = max(0.001, length(dir));
      vec2 perp = vec2(-dir.y, dir.x) / lenD;
      vec2 bombPos = mix(launch, target, travel) + perp * (0.04 + 0.02*sin(id*2.0)) * sin(3.14159 * travel);

      // Bomb core + shell
      float coreD = sdCircle(p - bombPos, 0.018);
      float shellD = sdCircle(p - bombPos, 0.030);
      float coreM = smoothstep(0.030, 0.0, coreD);
      float shellM = smoothstep(0.045, 0.0, shellD) * 0.55;

      // Annihilation shimmer (magenta/green interference)
      float ph = sin(t*7.0 + id*3.1 + (p.x+p.y)*18.0);
      vec3 antiA = vec3(0.95, 0.25, 0.95);
      vec3 antiB = vec3(0.20, 0.95, 0.75);
      vec3 antiCol = mix(antiA, antiB, 0.5 + 0.5*ph);
      assault += antiCol * (coreM*0.70 + shellM*0.35);

      // Launch flash (reads like the plane is firing the antimatter round)
      float launchPulse = smoothstep(0.10, 0.0, abs(dt - 0.03));
      assault += (antiCol*0.65 + vec3(1.0)*0.35) * smoothstep(0.09, 0.0, sdCircle(p - launch, 0.07)) * launchPulse * 0.40;

      // Projectile trail
      float trailD = segDist(p, launch, bombPos);
      float trailM = smoothstep(0.032, 0.0, trailD) * (1.0 - travel);
      assault += antiCol * trailM * 0.45;

      // No fixed impact point: antimatter exits the screen into heaven.

      // Heaven counter-fire: thin beam lances downward that occasionally hit the formation.
      float lance = smoothstep(0.010, 0.0, abs(p.x - (xOff*0.55 + 0.02*sin(t*0.7 + id)))) * smoothstep(0.95, -0.2, p.y);
      float pulse = smoothstep(0.06, 0.0, abs(fract(t*0.22 + id*0.13) - 0.58));
      assault += vec3(0.95, 0.98, 1.0) * lance * pulse * 0.22;
      float hitMask = smoothstep(0.10, 0.0, sdCircle(p - planePos, 0.10));
      assault += vec3(0.95, 0.98, 1.0) * hitMask * pulse * 0.08;
    }

    // Lightning bursts during bombardment
    float bolt = 0.0;
    for (int k = 0; k < 3; k++) {
      float fk = float(k);
      float pulse = smoothstep(0.06, 0.0, abs(fract(t*0.35 + fk*0.27) - 0.12));
      bolt += lightning(p, 10.0 + fk*9.0, t) * pulse;
    }
    assault += vec3(0.95, 0.98, 1.0) * bolt * 0.55;

    // Blend assault
    col = assault;

    // Fade out to black (but keep alpha 1.0 so we can fade into Part 2).
    col = mix(col, vec3(0.0), uFade);
    fragColor = vec4(col, 1.0);
  }
  `

  let program = null
  let timeStart = performance.now()
  let uTimeLoc, uResLoc, uFadeLoc

  try {
    program = createProgram(vsSrc, fsSrc)
    gl.useProgram(program)
    uTimeLoc = gl.getUniformLocation(program, 'uTime')
    uResLoc = gl.getUniformLocation(program, 'uRes')
    uFadeLoc = gl.getUniformLocation(program, 'uFade')
  } catch (e) {
    try { console.error(e) } catch (_) {}
    try { if (program) gl.deleteProgram(program) } catch (_) {}
    try { el.remove() } catch (_) {}
    if (onDone) onDone()
    render()
    saveGame()
    return
  }

  function resize() {
    const dpr = Math.max(1, window.devicePixelRatio || 1)
    const w = Math.floor(window.innerWidth * dpr)
    const h = Math.floor(window.innerHeight * dpr)
    canvas.width = w
    canvas.height = h
    canvas.style.width = '100%'
    canvas.style.height = '100%'
    gl.viewport(0, 0, w, h)
  }

  __heavensResizeHandler = () => resize()
  try { window.addEventListener('resize', __heavensResizeHandler) } catch (_) {}
  resize()

  function frame() {
    const now = performance.now()
    const t = (now - timeStart) / 1000
    const fade = t <= totalDuration ? 0 : Math.min(1, (t - totalDuration) / fadeDuration)

    gl.useProgram(program)
    gl.uniform2f(uResLoc, canvas.width, canvas.height)
    gl.uniform1f(uTimeLoc, t)
    gl.uniform1f(uFadeLoc, fade)

    gl.disable(gl.DEPTH_TEST)
    gl.disable(gl.CULL_FACE)
    gl.clearColor(0, 0, 0, 0)
    gl.clear(gl.COLOR_BUFFER_BIT)
    gl.drawArrays(gl.TRIANGLES, 0, 3)

    if (t >= endAt) {
      stopHeavensCinematic()
      try { gl.useProgram(null) } catch (_) {}
      try { if (program) gl.deleteProgram(program) } catch (_) {}
      if (onDone) onDone()
      return
    }

    __heavensRafId = requestAnimationFrame(frame)
  }

  __heavensRafId = requestAnimationFrame(frame)
}

function runHeavensStandoffCinematicCore(opts) {
  const options = opts && typeof opts === 'object' ? opts : {}
  const onDone = typeof options.onDone === 'function' ? options.onDone : null

  try { stopDemonCinematicTimers() } catch (_) {}
  try { stopCarpetBombCinematic() } catch (_) {}
  stopHeavensCinematic()

  const el = ensureCinematicOverlay()
  el.classList.remove('active', 'impact', 'fade-out')
  void el.offsetWidth
  el.classList.add('active', 'canvas-mode')

  const canvas = el.querySelector('.cinematic-canvas')
  const gl = canvas && canvas.getContext ? (canvas.getContext('webgl2', { alpha: true, antialias: true }) || canvas.getContext('webgl', { alpha: true, antialias: true })) : null
  if (!canvas || !gl) {
    try { el.remove() } catch (_) {}
    if (onDone) onDone()
    render()
    saveGame()
    return
  }

  function compileShader(type, src) {
    const sh = gl.createShader(type)
    gl.shaderSource(sh, src)
    gl.compileShader(sh)
    if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
      const msg = gl.getShaderInfoLog(sh) || 'shader compile failed'
      try { gl.deleteShader(sh) } catch (_) {}
      throw new Error(msg)
    }
    return sh
  }

  function createProgram(vsSrc, fsSrc) {
    const vs = compileShader(gl.VERTEX_SHADER, vsSrc)
    const fs = compileShader(gl.FRAGMENT_SHADER, fsSrc)
    const prog = gl.createProgram()
    gl.attachShader(prog, vs)
    gl.attachShader(prog, fs)
    gl.linkProgram(prog)
    try { gl.deleteShader(vs) } catch (_) {}
    try { gl.deleteShader(fs) } catch (_) {}
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
      const msg = gl.getProgramInfoLog(prog) || 'program link failed'
      try { gl.deleteProgram(prog) } catch (_) {}
      throw new Error(msg)
    }
    return prog
  }

  const totalDuration = 9.0
  const fadeInDuration = 0.9
  const fadeOutDuration = 1.2
  const endAt = totalDuration + fadeOutDuration

  const vsSrc = `#version 300 es
  precision highp float;
  out vec2 vUv;
  void main() {
    vec2 p = vec2((gl_VertexID == 1) ? 3.0 : -1.0, (gl_VertexID == 2) ? 3.0 : -1.0);
    vUv = 0.5 * (p + 1.0);
    gl_Position = vec4(p, 0.0, 1.0);
  }
  `

  const fsSrc = `#version 300 es
  precision highp float;
  in vec2 vUv;
  out vec4 fragColor;

  uniform vec2 uRes;
  uniform float uTime;
  uniform float uFade;

  float hash11(float p) {
    p = fract(p * 0.1031);
    p *= p + 33.33;
    p *= p + p;
    return fract(p);
  }

  float sdCircle(vec2 p, float r) { return length(p) - r; }
  float rect(vec2 p, vec2 b) {
    vec2 d = abs(p) - b;
    return max(d.x, d.y);
  }
  vec2 rot(vec2 p, float a) {
    float c = cos(a), s = sin(a);
    return vec2(c*p.x - s*p.y, s*p.x + c*p.y);
  }
  float sdCapsule(vec2 p, vec2 a, vec2 b, float r) {
    vec2 pa = p - a;
    vec2 ba = b - a;
    float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
    return length(pa - ba*h) - r;
  }

  void main() {
    vec2 uv = vUv;
    vec2 p = (uv * 2.0 - 1.0);
    p.x *= uRes.x / max(1.0, uRes.y);

    float t = uTime;

    // Fade in from black (Part 1 leaves us black).
    float fadeIn = 1.0 - smoothstep(0.0, ${fadeInDuration.toFixed(1)}, t);

    // Background: calmer, brighter heaven for the standoff
    vec3 skyA = vec3(0.04, 0.06, 0.10);
    vec3 skyB = vec3(0.78, 0.84, 0.96);
    float g = smoothstep(-0.9, 0.9, p.y);
    vec3 col = mix(skyA, skyB, g);

    // Subtle cloud bands
    float band = 0.0;
    for (int i = 0; i < 4; i++) {
      float fi = float(i);
      float y = p.y*(1.3+fi) + 0.18*sin(t*0.35 + fi*1.7);
      band += smoothstep(0.55, -0.35, abs(y - (0.15 - 0.12*fi))) * (0.20 - 0.03*fi);
    }
    col = mix(col, vec3(0.92, 0.94, 0.98), clamp(band, 0.0, 1.0) * 0.35);

    // Two stick-figure silhouettes about to fight.
    float pulse = 0.5 + 0.5*sin(t*1.8);

    // Player stick figure (left), leaning forward with sword raised.
    vec2 pl = p - vec2(-0.30, -0.28);
    float pHead = smoothstep(0.028, 0.0, sdCircle(pl + vec2(0.0, 0.205), 0.036));
    float pTorso = smoothstep(0.022, 0.0, sdCapsule(pl, vec2(0.0, 0.18), vec2(0.0, 0.02), 0.013));
    float pArmF = smoothstep(0.022, 0.0, sdCapsule(pl, vec2(0.0, 0.14), vec2(0.12, 0.19), 0.012));
    float pArmB = smoothstep(0.022, 0.0, sdCapsule(pl, vec2(0.0, 0.14), vec2(-0.10, 0.11), 0.012));
    float pLegF = smoothstep(0.022, 0.0, sdCapsule(pl, vec2(0.0, 0.02), vec2(0.10, -0.10), 0.013));
    float pLegB = smoothstep(0.022, 0.0, sdCapsule(pl, vec2(0.0, 0.02), vec2(-0.08, -0.13), 0.013));
    float sword = smoothstep(0.026, 0.0, sdCapsule(pl, vec2(0.12, 0.19), vec2(0.25, 0.33), 0.010));
    float player = max(max(pHead, pTorso), max(max(pArmF, pArmB), max(max(pLegF, pLegB), sword)));

    // Immortal God stick figure (right), taller with staff/weapon forward.
    vec2 gp = p - vec2(0.32, -0.26);
    float gHead = smoothstep(0.028, 0.0, sdCircle(gp + vec2(0.0, 0.245), 0.038));
    float gTorso = smoothstep(0.022, 0.0, sdCapsule(gp, vec2(0.0, 0.23), vec2(0.0, 0.02), 0.014));
    float gArmF = smoothstep(0.022, 0.0, sdCapsule(gp, vec2(0.0, 0.16), vec2(-0.13, 0.19), 0.012));
    float gArmB = smoothstep(0.022, 0.0, sdCapsule(gp, vec2(0.0, 0.16), vec2(0.10, 0.13), 0.012));
    float gLegF = smoothstep(0.022, 0.0, sdCapsule(gp, vec2(0.0, 0.02), vec2(-0.09, -0.14), 0.014));
    float gLegB = smoothstep(0.022, 0.0, sdCapsule(gp, vec2(0.0, 0.02), vec2(0.08, -0.15), 0.014));
    float staff = smoothstep(0.026, 0.0, sdCapsule(gp, vec2(-0.13, 0.19), vec2(-0.20, 0.44), 0.010));
    float god = max(max(gHead, gTorso), max(max(gArmF, gArmB), max(max(gLegF, gLegB), staff)));

    // Halo hint for the Immortal God
    float halo = smoothstep(0.22, 0.0, abs(sdCircle(gp + vec2(0.0, 0.28), 0.14))) * 0.45;

    // Power auras (subtle)
    col += vec3(0.65, 0.82, 1.0) * halo * (0.24 + 0.18*pulse);
    float pAura = smoothstep(0.55, 0.0, length(pl + vec2(0.0, 0.08))) * (0.22 + 0.14*sin(t*2.2));
    col += vec3(0.70, 0.90, 1.0) * pAura * 0.14;

    // Draw silhouettes with a simple outline (so they read like stickmen)
    float outlineW = 0.010;
    float pOut = smoothstep(outlineW, 0.0, abs(player - 0.5));
    float gOut = smoothstep(outlineW, 0.0, abs(god - 0.5));
    col = mix(col, vec3(0.00, 0.00, 0.00), max(pOut, gOut) * 0.25);
    col = mix(col, vec3(0.05, 0.06, 0.09), player);
    col = mix(col, vec3(0.03, 0.03, 0.05), god);
    // Weapon glows
    col += vec3(0.95, 0.98, 1.0) * sword * (0.20 + 0.12*pulse);
    col += vec3(0.95, 0.98, 1.0) * staff * (0.14 + 0.10*pulse);

    // Subtle standoff lightning between them
    vec2 mid = p - vec2(0.01, 0.02);
    float arc = smoothstep(0.020, 0.0, abs(mid.y - 0.10*sin(mid.x*6.0 + t*3.0))) * smoothstep(0.65, 0.0, abs(mid.x));
    col += vec3(0.98, 0.99, 1.0) * arc * (0.10 + 0.12*pulse);

    // Apply fade-in, then fade-out to transparent back to game
    col = mix(vec3(0.0), col, 1.0 - fadeIn);
    col = mix(col, vec3(0.0), uFade);
    fragColor = vec4(col, 1.0 - uFade);
  }
  `

  let program = null
  let timeStart = performance.now()
  let uTimeLoc, uResLoc, uFadeLoc

  try {
    program = createProgram(vsSrc, fsSrc)
    gl.useProgram(program)
    uTimeLoc = gl.getUniformLocation(program, 'uTime')
    uResLoc = gl.getUniformLocation(program, 'uRes')
    uFadeLoc = gl.getUniformLocation(program, 'uFade')
  } catch (e) {
    try { console.error(e) } catch (_) {}
    try { if (program) gl.deleteProgram(program) } catch (_) {}
    try { el.remove() } catch (_) {}
    if (onDone) onDone()
    render()
    saveGame()
    return
  }

  function resize() {
    const dpr = Math.max(1, window.devicePixelRatio || 1)
    const w = Math.floor(window.innerWidth * dpr)
    const h = Math.floor(window.innerHeight * dpr)
    canvas.width = w
    canvas.height = h
    canvas.style.width = '100%'
    canvas.style.height = '100%'
    gl.viewport(0, 0, w, h)
  }

  __heavensResizeHandler = () => resize()
  try { window.addEventListener('resize', __heavensResizeHandler) } catch (_) {}
  resize()

  function frame() {
    const now = performance.now()
    const tt = (now - timeStart) / 1000
    const fade = tt <= totalDuration ? 0 : Math.min(1, (tt - totalDuration) / fadeOutDuration)

    gl.useProgram(program)
    gl.uniform2f(uResLoc, canvas.width, canvas.height)
    gl.uniform1f(uTimeLoc, tt)
    gl.uniform1f(uFadeLoc, fade)

    gl.disable(gl.DEPTH_TEST)
    gl.disable(gl.CULL_FACE)
    gl.clearColor(0, 0, 0, 0)
    gl.clear(gl.COLOR_BUFFER_BIT)
    gl.drawArrays(gl.TRIANGLES, 0, 3)

    if (tt >= endAt) {
      stopHeavensCinematic()
      try { gl.useProgram(null) } catch (_) {}
      try { if (program) gl.deleteProgram(program) } catch (_) {}
      try { el.remove() } catch (_) {}
      if (onDone) onDone()
      render()
      saveGame()
      return
    }

    __heavensRafId = requestAnimationFrame(frame)
  }

  __heavensRafId = requestAnimationFrame(frame)
}

window.runHeavensAssaultCinematic = () => {
  runHeavensAssaultCinematicPart1ThreeCore({
    onDone: () => {
      // Part 2 removed. Mark cinematic complete and return to gameplay.
      state.businessStormHeavensCinematicDone = true
      log('The heavens tremble. You step forward alone...')

      // Ensure the next step button appears immediately.
      try {
        const hasClashGod = Array.isArray(state.specialActions)
          && state.specialActions.some(a => a?.name === 'Clash with the Immortal God')
        if (!state.heavensImmortalGodClashStarted && !hasClashGod) {
          state.specialActions.push({
            name: 'Clash with the Immortal God',
            icon: '⚔️',
            description: 'You face the Immortal God.',
            costText: 'None',
            tradeoffText: 'A battle that decides everything.',
            disabled: false,
            callback: () => window.heavensClashImmortalGod()
          })
        }
      } catch (_) {}

      try {
        const el = document.querySelector('.cinematic-overlay')
        if (el) el.remove()
      } catch (_) {}
      render()
      saveGame()
    }
  })
}

window.businessGuildRetaliation = () => {
  state.businessGuildRetaliationPrepared = true
  render()
  saveGame()
}

window.businessCarpetBomb = () => {
  // Spend all funds as part of the cost.
  state.copper = 0
  state.silver = 0
  state.gold = 0
  state.spiritStonesLow = 0

  // Remove the action immediately so it can't be double-fired.
  state.specialActions = state.specialActions.filter(a => a?.name !== 'Carpet Bomb')

  runCarpetBombCinematicCore({
    onDone: () => {
      state.businessCarpetBombDone = true
      log('The sect is reduced to rubble.')
    }
  })
}

window.followMysteriousCultivator = () => {
  // Next step is injected by the action callback.
  state.hasChosen100SilverRoute = true
  state.cloudCultivatorStoryStage = Math.max(1, clampNonNegativeInt(state.cloudCultivatorStoryStage))

  // Lore: once you choose cultivation, you stop woodcutting for coin.
  if (Array.isArray(state.repeatableActions)) {
    state.repeatableActions = state.repeatableActions.filter(a => a?.name !== 'Chop Wood' && a?.name !== 'Sell Wood')
  }
  render()
  saveGame()
}

window.cloudStoryWalkToBuilding = () => {
  state.cloudCultivatorStoryStage = Math.max(2, clampNonNegativeInt(state.cloudCultivatorStoryStage))

  // Remove the walk button at completion (timed-action system already removes
  // by identity; this is for rehydrated/no-timer cases).
  state.specialActions = state.specialActions.filter(a => a?.name !== 'Walk with the Mysterious Cultivator to the Building.')

  // Spawn the final step
  if (!state.specialActions.some(a => a?.name === 'Sect Leader Offers Items and Recruitment.')) {
    state.specialActions.push({
      name: 'Sect Leader Offers Items and Recruitment.',
      icon: '🏯',
      description: 'A figure waits within, unmoving. “You’ve reached the end of your road as a wanderer,” they say.\nA thin manual glides forward, light as mist.',
      disabled: false,
      callback: () => window.cloudStoryLeaderOffers()
    })
  }

  render()
  saveGame()
}

window.cloudStoryLeaderOffers = () => {
  state.cloudCultivatorStoryStage = Math.max(3, clampNonNegativeInt(state.cloudCultivatorStoryStage))

  // Grant Cloud Manual + immediately join Cloud Sect
  state.hasManual = true
  state.manualType = 'Cloud'
  state.manualTier = Math.max(1, clampNonNegativeInt(state.manualTier) || 1)

  addToInventory({
    name: 'Cloud Manual (Tier 1)',
    icon: '📖',
    description: 'Basic Cloud cultivation techniques',
    equippable: true
  })

  state.hasJoinedSect = true
  state.currentSect = 'Cloud'
  state.sectRankLayer = 'outer'
  state.sectRankNumber = 6
  state.sectRankPyramidOpen = false

  // Tier based on alignment if available, otherwise grant entry as Tier 1.
  const tier = Math.max(1, getSectTierFromAlignmentScore(getAffinityScore('Cloud')))
  applySectMultipliers(tier)
  initializeManualMoveCooldowns()

  // Clean up story actions if any remain.
  state.specialActions = state.specialActions.filter(a => {
    const n = String(a?.name || '')
    return n !== 'Sect Leader Offers Items and Recruitment.' && n !== 'Walk with the Mysterious Cultivator to the Building.'
  })

  // Cloud sect continuation
  state.cloudCultivatorStoryStage = Math.max(4, clampNonNegativeInt(state.cloudCultivatorStoryStage))
  if (!state.specialActions.some(a => a?.name === 'Arrival Among Clouds.')) {
    state.specialActions.push({
      name: 'Arrival Among Clouds.',
      icon: '☁️',
      description: 'The Cloud Sect is quieter than you expected. You can feel it — you don’t belong here yet.',
      disabled: false,
      callback: () => window.cloudStoryArrivalAmongClouds()
    })
  }

  render()
  saveGame()
}

window.cloudStoryArrivalAmongClouds = () => {
  state.cloudCultivatorStoryStage = Math.max(5, clampNonNegativeInt(state.cloudCultivatorStoryStage))

  if (!state.specialActions.some(a => a?.name === 'Confronted by an Outer Disciple.')) {
    state.specialActions.push({
      name: 'Confronted by an Outer Disciple.',
      icon: '🥋',
      description: 'A young disciple steps into your path, blocking the stone walkway.\n“Another lucky mortal,” they scoff. This is not a discussion.',
      disabled: false,
      callback: () => window.cloudStoryConfrontedByOuterDisciple()
    })
  }

  render()
  saveGame()
}

window.cloudStoryConfrontedByOuterDisciple = () => {
  state.cloudCultivatorStoryStage = Math.max(6, clampNonNegativeInt(state.cloudCultivatorStoryStage))

  if (!state.specialActions.some(a => a?.name === 'Battle starts.')) {
    state.specialActions.push({
      name: 'Battle starts.',
      icon: '⚔️',
      description: 'This is not a discussion.',
      disabled: false,
      callback: () => window.cloudStoryBattleStarts()
    })
  }

  render()
  saveGame()
}

window.cloudStoryBattleStarts = () => {
  if (state.inCombat) return

  state.cloudCultivatorStoryStage = Math.max(6, clampNonNegativeInt(state.cloudCultivatorStoryStage))

  const stats = getSectRankEnemyStats('outer', 5)
  state.combatContext = { type: 'cloudStoryOuterDiscipleDuel' }
  state.questReturnPhase = state.phase
  closePanelsForCombatStart()
  state.inCombat = true
  state.enemy = applyHardModeEnemyScaling({
    name: 'Outer Disciple',
    icon: '🥋',
    health: stats.health,
    maxHealth: stats.health,
    strength: stats.damage
  })
  state.phase = 'COMBAT'
  ensureCombatLoop()
  render()
  saveGame()
}

window.cloudStoryExploreLibrary = () => {
  state.cloudCultivatorStoryStage = Math.max(8, clampNonNegativeInt(state.cloudCultivatorStoryStage))

  // Upsert so the option always appears and its disabled state updates as luck changes.
  const upsertSpecialAction = (next) => {
    const name = String(next?.name || '')
    if (!name) return
    const idx = state.specialActions.findIndex(a => a?.name === name)
    if (idx === -1) {
      state.specialActions.push(next)
      return
    }
    state.specialActions[idx] = { ...state.specialActions[idx], ...next }
  }

  upsertSpecialAction({
    name: 'Find heavenly demon manual.',
    icon: '📖',
    description: 'Cost: Story Luck −55\nRequirement: Story Luck ≥ 55\nOutcome: Obtain Hidden Heavenly Demon Manual',
    disabled: state.luck < 55,
    onStart: () => {
      if (state.luck < 55) return false
      state.luck -= 55
      state.specialActions = state.specialActions.filter(a => a?.name !== 'Take the Demonic Manual.' && a?.name !== 'Find nothing.')
      return true
    },
    callback: () => window.cloudStoryFindHeavenlyDemonManual()
  })

  upsertSpecialAction({
    name: 'Take the Demonic Manual.',
    icon: '📕',
    description: 'Cost: None\nOutcome: Obtain Demonic Manual\nEquipping it will get you expelled from your sect.',
    disabled: false,
    onStart: () => {
      state.specialActions = state.specialActions.filter(a => a?.name !== 'Find heavenly demon manual.')
      return true
    },
    callback: () => window.cloudStoryTakeDemonicManual()
  })

  upsertSpecialAction({
    name: 'Find nothing.',
    icon: '🫙',
    description: 'Cost: None\nOutcome: You find nothing of value.',
    disabled: false,
    callback: () => window.cloudStoryFindNothingInLibrary()
  })

  render()
  saveGame()
}

window.cloudStoryFindNothingInLibrary = () => {
  // Resolve library choice
  state.specialActions = state.specialActions.filter(a => a?.name !== 'Find heavenly demon manual.' && a?.name !== 'Take the Demonic Manual.' && a?.name !== 'Find nothing.')
  state.cloudCultivatorStoryStage = Math.max(9, clampNonNegativeInt(state.cloudCultivatorStoryStage))

  log('You search the shelves... and find nothing.')
  log('The emptiness is an answer. If the library holds no power, you will find it elsewhere.')

  // Start continuation chain
  if (!state.specialActions.some(a => a?.name === 'Venture Out to the Neighboring Sects')) {
    state.specialActions.push({
      name: 'Venture Out to the Neighboring Sects',
      icon: '🧭',
      description: 'You leave the sect grounds, following rumor and pressure points instead of scrolls.',
      disabled: state.stamina < 15,
      onStart: () => {
        if (state.stamina < 15) return false
        state.stamina -= 15
        return true
      },
      callback: () => window.cloudStoryVentureOutToNeighboringSects()
    })
  }
  render()
  saveGame()
}

window.cloudStoryVentureOutToNeighboringSects = () => {
  state.cloudCultivatorStoryStage = Math.max(10, clampNonNegativeInt(state.cloudCultivatorStoryStage))
  removeSpecialActionsByName(['Venture Out to the Neighboring Sects'])
  log('You drift from sect to sect like weather: present, inevitable, and hard to pin down.')

  upsertSpecialActionByName({
    name: 'Cause Commotion',
    icon: '💥',
    description: 'A small disturbance. A rumor. A shattered gate latch. Enough to summon someone important.',
    disabled: state.stamina < 5,
    onStart: () => {
      if (state.stamina < 5) return false
      state.stamina -= 5
      return true
    },
    callback: () => window.cloudStoryCauseCommotion()
  })

  render()
  saveGame()
}

window.cloudStoryCauseCommotion = () => {
  state.cloudCultivatorStoryStage = Math.max(11, clampNonNegativeInt(state.cloudCultivatorStoryStage))
  removeSpecialActionsByName(['Cause Commotion'])
  log('The commotion spreads. Footsteps multiply. Voices harden.')

  upsertSpecialActionByName({
    name: 'Attacked',
    icon: '🩸',
    description: 'They answer with steel, talismans, and killing intent.',
    disabled: false,
    onStart: () => {
      const q = clampNonNegativeNumber(state.qi)
      const cost = Math.floor(q * 0.25)
      state.qi = Math.max(0, q - cost)
      return true
    },
    callback: () => window.cloudStoryAttacked()
  })

  render()
  saveGame()
}

window.cloudStoryAttacked = () => {
  state.cloudCultivatorStoryStage = Math.max(12, clampNonNegativeInt(state.cloudCultivatorStoryStage))
  removeSpecialActionsByName(['Attacked'])
  log('Pain blooms behind your ribs. You retreat—not in fear, but in calculation.')

  upsertSpecialActionByName({
    name: 'Run to Sect Leader',
    icon: '🏃',
    description: 'You return to the Cloud Sect and demand judgment—if the sect will not act, you will.',
    disabled: state.stamina < 5,
    onStart: () => {
      if (state.stamina < 5) return false
      state.stamina -= 5
      return true
    },
    callback: () => window.cloudStoryRunToSectLeader()
  })

  render()
  saveGame()
}

window.cloudStoryRunToSectLeader = () => {
  state.cloudCultivatorStoryStage = Math.max(13, clampNonNegativeInt(state.cloudCultivatorStoryStage))
  removeSpecialActionsByName(['Run to Sect Leader'])
  log('The sect leader listens without blinking. A single nod is permission, or doom.')

  upsertSpecialActionByName({
    name: 'Conquering Sect',
    icon: '🏴',
    description: 'You take a small force and strike fast—before the rumor can turn into resistance.',
    disabled: false,
    callback: () => window.cloudStoryConqueringSect()
  })

  render()
  saveGame()
}

window.cloudStoryConqueringSect = () => {
  state.cloudCultivatorStoryStage = Math.max(14, clampNonNegativeInt(state.cloudCultivatorStoryStage))
  removeSpecialActionsByName(['Conquering Sect'])
  conquerRandomSectOnce('Victory is swift:')
  log('The surviving disciples kneel. The banner comes down. The treasury is sealed under Cloud authority.')

  upsertSpecialActionByName({
    name: 'Major Accident',
    icon: '⚠️',
    description: 'Power moves faster than paperwork. Faster than tradition. Faster than control.',
    disabled: false,
    callback: () => window.cloudStoryMajorAccident()
  })

  render()
  saveGame()
}

window.cloudStoryMajorAccident = () => {
  ensureCloudConquestState()
  state.cloudCultivatorStoryStage = Math.max(15, clampNonNegativeInt(state.cloudCultivatorStoryStage))
  removeSpecialActionsByName(['Major Accident'])

  log('A major accident tears through the hierarchy. Blame passes like lightning.')
  log('When the ash settles, the sect needs a hand to hold the seal. That hand becomes yours.')

  // Become sect leader (uses the existing rank system)
  state.sectRankLayer = 'leader'
  state.sectRankNumber = 1

  // Unlock conquered sects panel + repeatable conquest action
  state.cloudConqueredSectsUnlocked = true

  if (!Array.isArray(state.repeatableActions)) state.repeatableActions = []
  if (!state.repeatableActions.some(a => a?.name === 'Searching and Conquering')) {
    state.repeatableActions.push({
      name: 'Searching and Conquering',
      icon: '🗺️',
      disabled: false,
      callback: () => window.searchingAndConquering()
    })
  }

  render()
  saveGame()
}

window.searchingAndConquering = () => {
  ensureCloudConquestState()
  if (!state.cloudConqueredSectsUnlocked) return

  if (!state.devIgnoreRequirements && state.searchingAndConqueringCooldown > 0) return

  if (!state.devIgnoreRequirements) {
    state.searchingAndConqueringCooldown = 3
  }

  const success = Math.random() < 0.5
  if (!success) {
    log('You search the region for weaknesses... but the trail goes cold.')
    render()
    saveGame()
    return
  }

  const conquered = conquerRandomSectOnce('You strike before dawn:')
  if (!conquered) {
    log('Even with momentum, there is nothing left to take.')
  }

  render()
  saveGame()
}

// ============================================================================
// Cloud Sect — Coalition war chain
// ============================================================================

window.cloudStoryFaceUnitedSects = () => {
  ensureCloudConquestState()
  ensureCloudCoalitionWarState()
  if (!state.cloudConqueredSectsUnlocked) return
  if (!hasConqueredAllNormalSects()) return

  state.cloudCoalitionWarStage = Math.max(1, clampNonNegativeInt(state.cloudCoalitionWarStage))
  removeSpecialActionsByName(['Face the United Sects'])

  log('The united sects march. Your banners answer.')

  upsertSpecialActionByName({
    name: 'Sect Armies Clash',
    icon: '🛡️',
    description: 'Player’s conquered sects fight coalition armies.',
    disabled: false,
    callback: () => window.cloudStorySectArmiesClash()
  })

  render()
  saveGame()
}

window.cloudStorySectArmiesClash = () => {
  ensureCloudConquestState()
  ensureCloudCoalitionWarState()
  if (!state.cloudConqueredSectsUnlocked) return
  if (!hasConqueredAllNormalSects()) return

  removeSpecialActionsByName(['Sect Armies Clash'])
  state.cloudCoalitionWarStage = 2
  state.cloudCoalitionWave = { kind: 'armies', index: 0, awaitingStaminaFull: false, pendingStart: true }

  log('🛡️ Sect armies clash. The first disciple steps forward.')

  setTimeout(() => {
    try { tryStartNextCloudCoalitionBattleIfReady() } catch (_) {}
  }, 25)

  render()
  saveGame()
}

window.cloudStoryChampionsDuel = () => {
  ensureCloudConquestState()
  ensureCloudCoalitionWarState()
  if (!state.cloudConqueredSectsUnlocked) return
  if (!hasConqueredAllNormalSects()) return

  removeSpecialActionsByName(['Champions Duel'])
  state.cloudCoalitionWarStage = 2
  state.cloudCoalitionWave = { kind: 'champions', index: 0, awaitingStaminaFull: false, pendingStart: true }

  log('🥊 The coalition sends champions. The first enters the ring.')

  setTimeout(() => {
    try { tryStartNextCloudCoalitionBattleIfReady() } catch (_) {}
  }, 25)

  render()
  saveGame()
}

window.cloudStoryFinalConfrontation = () => {
  ensureCloudConquestState()
  ensureCloudCoalitionWarState()
  if (!state.cloudConqueredSectsUnlocked) return
  if (!hasConqueredAllNormalSects()) return

  removeSpecialActionsByName(['Final Confrontation'])
  // Tri‑Sect Avatar cinematic removed; replaced with a boss fight.
  state.cloudFinalConfrontationCinematicDone = true
  state.cloudCoalitionWarStage = 5

  log('🔥 The final fusion forms. The world holds its breath.')
  startCloudTriSectBossCombat()

  render()
  saveGame()
}

function unlockHdDetourFromAnySource() {
  try {
    ensureHdDetourState()
    state.hdDetour.unlocked = true
    if (!state.hdDetour.choseDifferentPath) {
      upsertSpecialActionByName({
        name: 'I Rather Walk a Different Path.',
        icon: '🚪',
        disabled: false,
        callback: () => window.hdRatherWalkDifferentPath()
      })
    }
  } catch (_) {}
}

function grantAllSectManualRewards() {
  const add = (item) => {
    try { addToInventory(item) } catch (_) {}
  }

  // Cloud: beginner manual
  add({
    name: 'Beginner Cultivation Manual',
    icon: '📖',
    description: 'A basic manual that allows major realm breakthroughs',
    equippable: true
  })

  // Normal sect affinity manuals (Tier 1)
  for (const k of Object.keys(SECTS)) {
    if (k === 'Cloud') continue
    if (k === 'Orthodox') continue
    add({
      name: `${k} Manual (Tier 1)`,
      icon: '📖',
      description: `Basic ${k} cultivation techniques`,
      equippable: true
    })
  }

  // Special sect manuals
  add({
    name: 'Heavenly Demon Manual (Tier 1)',
    icon: '📖',
    description: 'Balanced demon cultivation techniques',
    equippable: true
  })
  add({
    name: 'Demon Monarch Manual (Tier 1)',
    icon: '📖',
    description: 'Forbidden demon cultivation techniques',
    equippable: true
  })
  add({
    name: 'Orthodox Manual',
    icon: '📕',
    description: 'A manual of righteous cultivation. Its loyalty binds you forever.',
    equippable: true
  })
}

function promptForCustomSectNameIfMissing() {
  if (typeof state.customSectName !== 'string') state.customSectName = ''
  if (state.customSectName.trim()) return

  const raw = window.prompt('Name your sect:', '')
  if (raw === null) return
  const cleaned = String(raw || '').trim().slice(0, 40)
  if (!cleaned) return
  state.customSectName = cleaned
  log(`Your sect will be known as: ${cleaned}`)
}

function startCloudTriSectBossCombat() {
  if (state.inCombat) return

  // Scale similarly to heavens boss (Major Realm 15 average), slightly stronger.
  const projected = getProjectedPlayerCombatStatsAtMajorRealm(14)
  const bossHp = Math.max(1, Math.floor(clampNonNegativeInt(projected.maxHealth) * 1.15))
  const bossStr = Math.max(1, Math.floor(clampNonNegativeInt(projected.strength) * 1.15))

  state.combatContext = { type: 'cloudTriSectBoss' }
  state.questReturnPhase = state.phase
  closePanelsForCombatStart()
  state.inCombat = true
  state.enemy = applyHardModeEnemyScaling({
    name: 'Tri-Sect Fusion',
    icon: '🔥',
    health: bossHp,
    maxHealth: bossHp,
    strength: bossStr
  })
  state.phase = 'COMBAT'
  ensureCombatLoop()

  log('The Tri-Sect Fusion challenges you!')
}

function handleCloudTriSectBossCombatVictory(_enemyName) {
  const ctx = state.combatContext
  if (!ctx || ctx.type !== 'cloudTriSectBoss') return
  state.combatContext = null

  grantAllSectManualRewards()
  try { initializeManualMoveCooldowns() } catch (_) {}

  // Mark special sects as conquered.
  try { addConqueredSect('Heavenly Demon') } catch (_) {}
  try { addConqueredSect('Demon Monarch') } catch (_) {}
  try { addConqueredSect('Orthodox') } catch (_) {}

  log('🏁 The coalition breaks. The war ends.')
  log('📚 You seize every technique the world can offer.')

  openStoryDialog(
    'ENDING',
    'Good Ending — Tri-Sect Dominion',
    [
      '🏁 The coalition breaks. The war ends.',
      '📚 You seize every technique the world can offer.',
      'No sect can oppose you now.'
    ],
    [
      { label: 'Continue.', onClick: 'window.closeStoryDialog()' }
    ],
    {
      mode: 'PAGE_SWAP',
      sentencesPerPage: 1,
      pageHoldMs: 8500,
      transitionMs: 1100,
      choicesFadeInDelayMs: 950
    }
  )

  promptForCustomSectNameIfMissing()
  render()
  saveGame()
}

function handleCloudTriSectBossCombatDefeat() {
  const ctx = state.combatContext
  if (!ctx || ctx.type !== 'cloudTriSectBoss') return false

  state.inCombat = false
  state.enemy = null
  state.combatContext = null
  state.phase = state.questReturnPhase || 'FARMING'
  state.questReturnPhase = null
  ensureCombatLoop()

  log('You fail to defeat the fusion.')
  log('🗣️ A voice in your head whispers: “Finally… listen.”')
  unlockHdDetourFromAnySource()

  render()
  saveGame()
  return true
}

function handleCloudTriSectBossCombatFlee() {
  const ctx = state.combatContext
  if (!ctx || ctx.type !== 'cloudTriSectBoss') return false

  exitCombatToReturnPhase()
  state.health = Math.max(1, clampNonNegativeInt(state.health))

  log('You retreat from the fusion. The voice follows you.')
  log('🗣️ “Finally… listen.”')
  unlockHdDetourFromAnySource()

  render()
  saveGame()
  return true
}

window.cloudStoryFindHeavenlyDemonManual = () => {
  state.specialActions = state.specialActions.filter(a => a?.name !== 'Find heavenly demon manual.' && a?.name !== 'Take the Demonic Manual.' && a?.name !== 'Find nothing.')
  state.cloudCultivatorStoryStage = Math.max(9, clampNonNegativeInt(state.cloudCultivatorStoryStage))

  addToInventory({
    name: 'Hidden Heavenly Demon Manual',
    icon: '📖',
    description: 'A forbidden-yet-radiant tome. Its techniques feel like sunlight cast through smoke.',
    equippable: true
  })

  // Unlock detour chain
  try {
    ensureHdDetourState()
    state.hdDetour.unlocked = true
    if (!state.hdDetour.choseDifferentPath) {
      upsertSpecialActionByName({
        name: 'I Rather Walk a Different Path.',
        icon: '🚪',
        disabled: false,
        callback: () => window.hdRatherWalkDifferentPath()
      })
    }
  } catch (_) {}

  render()
  saveGame()
}

window.cloudStoryTakeDemonicManual = () => {
  state.specialActions = state.specialActions.filter(a => a?.name !== 'Find heavenly demon manual.' && a?.name !== 'Take the Demonic Manual.' && a?.name !== 'Find nothing.')
  state.cloudCultivatorStoryStage = Math.max(9, clampNonNegativeInt(state.cloudCultivatorStoryStage))

  addToInventory({
    name: 'Demonic Manual',
    icon: '📕',
    description: 'A manual steeped in demonic intent. Other sects will not tolerate its use.',
    equippable: true
  })

  enterDemonPathFromDemonicManualAcquisition()

  render()
  saveGame()
}

window.claimLargerBagSpace = () => {
  if (state.hasLargerBagSpace) return
  state.hasLargerBagSpace = true
  state.maxStamina = clampNonNegativeInt(state.maxStamina) + 5
  log('🎒 Your bag straps tighten into place. (+5 Max Stamina)')
  render()
  saveGame()
}

window.chopWood = () => {
  if (!state.devIgnoreRequirements) {
    if (state.stamina < 3) return
    state.stamina -= 3
  }
  state.isResting = false
  woodCount += 1
  render()
  log(`You chop wood. +1 wood (Total: ${woodCount})`)
}

window.sellWood = () => {
  if (woodCount <= 0) return
  const silverGained = Math.floor(woodCount * 3 * state.silverMultiplier)
  state.silver += silverGained
  log(`You sell ${woodCount} wood for ${silverGained} silver.`)
  woodCount = 0
  render()
  saveGame()
}

window.buyNormalAxe = () => {
  if (state.silver < 50) return
  
  state.silver -= 50
  state.silverMultiplier = 1.5 // 50% boost
  state.hasBoughtNormalAxe = true

  // Consumed the "axe offer" moment
  state.legendaryAxeOfferRolled = true
  state.legendaryAxeOfferAvailable = false
  state.bargainOfferRolled = true
  state.bargainOfferAvailable = false
  
  addToInventory({
    name: 'Normal Axe',
    icon: '🪓',
    description: 'A quality axe that increases silver gain by 50%'
  })
  
  log('🪓 You buy a normal axe! Silver gain increased by 50%!')
  
  // Remove legendary axe option if it exists
  state.specialActions = state.specialActions.filter(a => {
    const n = String(a?.name || '')
    return !n.includes('Buy Legendary Axe')
      && !n.includes('Bargain')
      && !n.includes('Bargain with Merchant')
      && !n.includes('Ignore Merchant')
  })
  
  render()
  saveGame()
}

window.buyLegendaryTools = () => {
  if (state.luck < 20) return
  
  state.luck -= 20
  state.silverMultiplier = 1.7 // 70% boost
  state.hasBoughtLegendaryTools = true

  // Consumed the "axe offer" moment
  state.legendaryAxeOfferRolled = true
  state.legendaryAxeOfferAvailable = false
  state.bargainOfferRolled = true
  state.bargainOfferAvailable = false
  
  addToInventory({
    name: 'Legendary Axe',
    icon: '✨',
    description: 'A legendary axe that increases silver gain by 70%'
  })
  
  log('You acquire a legendary axe! Silver gain increased by 70%!')
  
  // Remove normal axe option if it exists
  state.specialActions = state.specialActions.filter(a =>
    !a.name.includes('Buy Normal Axe') &&
    !a.name.includes('Bargain') &&
    !a.name.includes('Bargain with Merchant') &&
    !a.name.includes('Ignore Merchant')
  )
  
  render()
  saveGame()
}

window.startBargain = () => {
  log('A mysterious merchant approaches you...')
  
  state.hasSeenBargain = true
  
  // Remove this action
  state.specialActions = state.specialActions.filter(a => !a.name.includes('Bargain'))
  
  // Add bargain choice actions
  state.specialActions.push(
    {
      name: 'Bargain with Merchant',
      icon: '🤝',
      disabled: false,
      callback: () => window.acceptBargain()
    },
    {
      name: 'Ignore Merchant',
      icon: '🚫',
      disabled: false,
      callback: () => window.ignoreBargain()
    }
  )
  
  render()
  saveGame()
}

window.acceptBargain = () => {
  // Random discount between 10% and 40%
  const discount = 0.1 + Math.random() * 0.3
  const discountPercent = Math.floor(discount * 100)
  
  // Apply discount to next axe purchase
  const normalAxeCost = Math.floor(50 * (1 - discount))
  
  log(`🤝 The merchant offers you a ${discountPercent}% discount on your next axe purchase!`)
  
  // Remove bargain options
  state.specialActions = state.specialActions.filter(a => 
    !a.name.includes('Bargain with Merchant') && !a.name.includes('Ignore Merchant')
  )
  
  // If normal axe option exists, update its cost temporarily
  const normalAxeAction = state.specialActions.find(a => a.name && a.name.includes('Buy Normal Axe'))
  if (normalAxeAction) {
    // Create a new discounted version
    state.specialActions = state.specialActions.filter(a => !a.name.includes('Buy Normal Axe'))
    state.specialActions.push({
      name: `Buy Normal Axe (${normalAxeCost} silver - ${discountPercent}% off!)`,
      icon: '🪓',
      disabled: false,
      callback: () => window.buyNormalAxeDiscounted(normalAxeCost)
    })
  }
  
  render()
  saveGame()
}

window.buyNormalAxeDiscounted = (cost) => {
  if (state.silver < cost) return
  
  state.silver -= cost
  state.silverMultiplier = 1.5 // 50% boost
  state.hasBoughtNormalAxe = true
  
  addToInventory({
    name: 'Normal Axe',
    icon: '🪓',
    description: 'A quality axe that increases silver gain by 50%'
  })
  
  log(`🪓 You buy a normal axe at a discounted price! Silver gain increased by 50%!`)
  
  // Remove legendary axe option if it exists
  state.specialActions = state.specialActions.filter(a => !a.name.includes('Buy Legendary Axe'))
  
  render()
  saveGame()
}

window.ignoreBargain = () => {
  log('🚫 You ignore the merchant and continue on your way.')
  
  // Remove bargain options
  state.specialActions = state.specialActions.filter(a => 
    !a.name.includes('Bargain with Merchant') && !a.name.includes('Ignore Merchant')
  )
  
  render()
  saveGame()
}

window.seekAzurePeakSect = () => {
  if (state.cultivationMajorIndex < 1) {
    log('Sects only accept cultivators at Foundation Establishment or higher.')
    return
  }
  
  // Remove this action
  state.specialActions = state.specialActions.filter(a => !a.name.includes('Seek Azure Peak Sect'))
  
  // Show sect options based on affinity
  const playerSect = SECTS[state.primaryAffinity]
  
  log(`${playerSect.icon} You arrive at the ${playerSect.name}!`)
  log('The sect master senses your affinity and offers you a place.')
  
  // Add sect join action and demon sect options
  state.specialActions.push(
    {
      name: `Join ${playerSect.name}`,
      icon: playerSect.icon,
      disabled: false,
      callback: () => window.joinAffinitySect()
    },
    {
      name: 'Join Heavenly Demon Sect',
      icon: '😇',
      disabled: false,
      callback: () => window.joinHeavenlyDemonSect()
    },
    {
      name: 'Join Demon Monarch Sect',
      icon: '😈',
      disabled: false,
      callback: () => window.joinDemonMonarchSect()
    }
  )
  
  render()
  saveGame()
}

window.joinAffinitySect = () => {
  const playerSect = SECTS[state.primaryAffinity]
  state.hasJoinedSect = true
  state.currentSect = state.primaryAffinity
  state.manualType = state.primaryAffinity
  state.manualTier = 1
  state.sectRankLayer = 'outer'
  state.sectRankNumber = 6
  state.sectRankPyramidOpen = false
  applySectMultipliers(getSectTierFromAlignmentScore(getAffinityScore(state.primaryAffinity)))
  
  log(`${playerSect.icon} You join the ${playerSect.name} as an outer disciple!`)
  log(`You receive a Tier 1 ${state.primaryAffinity} cultivation manual!`)
  
  addToInventory({
    name: `${state.primaryAffinity} Manual (Tier 1)`,
    icon: '📖',
    description: `Basic ${state.primaryAffinity} cultivation techniques`,
    equippable: true
  })
  
  // Initialize cooldowns for manual moves
  initializeManualMoveCooldowns()
  
  // Remove sect choice actions
  state.specialActions = state.specialActions.filter(a => 
    !a.name.includes('Join ') || a.name.includes('Joined')
  )
  
  render()
  saveGame()
}

window.joinHeavenlyDemonSect = () => {
  state.hasJoinedSect = true
  state.currentSect = 'Heavenly Demon'
  state.manualType = 'Demon'
  state.manualTier = 1
  state.sectRankLayer = 'outer'
  state.sectRankNumber = 6
  state.sectRankPyramidOpen = false
  applySectMultipliers(5)
  
  log('You join the Heavenly Demon Sect!')
  log('You receive a Tier 1 Heavenly Demon cultivation manual!')
  log('⚠️ This path grants powerful techniques but may affect your reputation.')
  
  addToInventory({
    name: 'Heavenly Demon Manual (Tier 1)',
    icon: '📖',
    description: 'Balanced demon cultivation techniques',
    equippable: true
  })
  
  // Initialize cooldowns for manual moves
  initializeManualMoveCooldowns()
  
  // Remove sect choice actions
  state.specialActions = state.specialActions.filter(a => 
    !a.name.includes('Join ') || a.name.includes('Joined')
  )
  
  render()
  saveGame()
}

window.joinDemonMonarchSect = (tierOverride) => {
  const overrideTier = Math.floor(Number(tierOverride) || 0)
  const joinTier = (overrideTier >= 1 && overrideTier <= 5) ? overrideTier : 5

  state.hasJoinedSect = true
  state.currentSect = 'Demon Monarch'
  state.manualType = 'Demon'
  state.manualTier = 1
  state.isDemonPath = true
  state.corruption = 5
  state.sectRankLayer = 'outer'
  state.sectRankNumber = 6
  state.sectRankPyramidOpen = false
  applySectMultipliers(joinTier)
  
  // Reset to demon realm progression
  state.cultivationMajorIndex = 0
  state.cultivationSubIndex = 0
  
  log(`You join the Demon Monarch Sect! (Tier ${joinTier})`)
  log('You receive a Tier 1 Demon Monarch cultivation manual!')
  log('WARNING: You have entered the Demon Path!')
  log('Your cultivation realms have changed to Demonic realms.')
  log(`Corruption: ${state.corruption} - Increases with major breakthroughs.`)
  
  addToInventory({
    name: 'Demon Monarch Manual (Tier 1)',
    icon: '📖',
    description: 'Forbidden demon cultivation techniques',
    equippable: true
  })
  
  // Initialize cooldowns for manual moves
  initializeManualMoveCooldowns()
  
  // Remove sect choice actions
  state.specialActions = state.specialActions.filter(a => 
    !a.name.includes('Join ') || a.name.includes('Joined')
  )
  
  render()
  saveGame()
}

window.buyQiPill = () => {
  if (state.spiritStonesLow < 50) {
    log('Insufficient spirit stones. Need 50 low-grade.')
    return
  }
  
  state.spiritStonesLow -= 50
  
  addToInventory({
    name: 'Qi Gathering Pill',
    icon: '💊',
    description: 'Instantly grants 500 Qi when consumed'
  })
  
  log('You purchase a Qi Gathering Pill!')
  
  render()
  saveGame()
}


function getSectRankFromContributionPoints(points) {
  const p = Math.floor(Number(points) || 0)
  if (p >= 300) return 'Elder'
  if (p >= 150) return 'Core Disciple'
  if (p >= 50) return 'Inner Disciple'
  return 'Outer Disciple'
}

function isValidSectRankLayer(layerKey) {
  return String(layerKey) === 'outer'
    || String(layerKey) === 'inner'
    || String(layerKey) === 'core'
    || String(layerKey) === 'master'
    || String(layerKey) === 'elder'
    || String(layerKey) === 'leader'
}

function getSectRankLayerMeta(layerKey) {
  switch (String(layerKey)) {
    case 'inner': return { key: 'inner', label: 'Inner Disciple', count: 5 }
    case 'core': return { key: 'core', label: 'Core Disciple', count: 4 }
    case 'master': return { key: 'master', label: 'Master', count: 3 }
    case 'elder': return { key: 'elder', label: 'Elder', count: 2 }
    case 'leader': return { key: 'leader', label: 'Sect Leader', count: 1 }
    default: return { key: 'outer', label: 'Outer Disciple', count: 6 }
  }
}

function clampSectRank(layerKey, rankNumber) {
  const meta = getSectRankLayerMeta(layerKey)
  const max = meta.count
  const r = Math.max(1, Math.min(max, Math.floor(Number(rankNumber) || max)))
  return { layer: meta.key, rank: r }
}

function getSectRankIncomePerMinute(layerKey, rankNumber) {
  const c = clampSectRank(layerKey, rankNumber)

  if (!state.hasJoinedSect) return { low: 0, mid: 0, high: 0 }
  if (c.layer === 'outer') return { low: 0, mid: 0, high: 0 }

  if (c.layer === 'inner') {
    // Rank 5 -> 1/min ... Rank 1 -> 5/min
    const low = Math.max(0, 6 - c.rank)
    return { low, mid: 0, high: 0 }
  }

  if (c.layer === 'core') {
    // Rank 4 -> 10/min, Rank 3 -> 12/min, Rank 2 -> 14/min, Rank 1 -> 16/min
    const low = Math.max(0, 18 - 2 * c.rank)
    return { low, mid: 0, high: 0 }
  }

  if (c.layer === 'master') {
    // Rank 3 -> 1/min, Rank 2 -> 3/min, Rank 1 -> 5/min
    const mid = Math.max(0, 7 - 2 * c.rank)
    return { low: 0, mid, high: 0 }
  }

  if (c.layer === 'elder') {
    // Rank 2 -> 10/min, Rank 1 -> 15/min
    const mid = (c.rank === 1) ? 15 : 10
    return { low: 0, mid, high: 0 }
  }

  // leader
  return { low: 0, mid: 0, high: 2 }
}

function mapContributionPointsToPyramidRank(points) {
  const p = Math.floor(Number(points) || 0)
  if (p >= 300) return { layer: 'elder', rank: 2 }
  if (p >= 150) return { layer: 'core', rank: 4 }
  if (p >= 50) return { layer: 'inner', rank: 5 }
  return { layer: 'outer', rank: 6 }
}

function getSectPyramidRankLabel(layerKey, rankNumber) {
  const c = clampSectRank(layerKey, rankNumber)
  const meta = getSectRankLayerMeta(c.layer)
  if (meta.key === 'leader') return 'Sect Leader'
  return `${meta.label} Rank ${c.rank}`
}

function getSectRankDifficultyScore(layerKey, rankNumber) {
  const layers = [
    { key: 'outer', count: 6 },
    { key: 'inner', count: 5 },
    { key: 'core', count: 4 },
    { key: 'master', count: 3 },
    { key: 'elder', count: 2 },
    { key: 'leader', count: 1 }
  ]

  const c = clampSectRank(layerKey, rankNumber)
  let offset = 0
  for (const l of layers) {
    if (l.key === c.layer) break
    offset += l.count + 1
  }
  const meta = getSectRankLayerMeta(c.layer)
  const within = meta.count - c.rank // Rank 1 strongest
  return offset + within
}

function getSectRankEnemyStats(layerKey, rankNumber) {
  const c = clampSectRank(layerKey, rankNumber)

  const up15 = (v) => Math.max(1, Math.floor((Number(v) || 0) * 3 / 2))
  const down15 = (v) => Math.max(1, Math.floor((Number(v) || 0) * 2 / 3))
  const up2 = (v) => Math.max(1, Math.floor((Number(v) || 0) * 2))
  const up25 = (v) => Math.max(1, Math.floor((Number(v) || 0) * 5 / 2))
  const makeEven = (v) => {
    const n = Math.max(1, Math.floor(Number(v) || 0))
    return (n % 2 === 0) ? n : Math.max(1, n - 1)
  }

  // Build the full pyramid deterministically.
  // Notes:
  // - Outer Disciple Rank 5 is anchored to 200 HP / 100 DMG.
  // - Each higher rank within a layer scales up by <= 1.5x; we use floor(3/2) so it never exceeds 1.5x.
  // - Cross-layer anchors are exact: Inner5 == 2x Outer1; Core4 == 2x Inner1; Master3 == 2x Core1; Elder2 == 2x Master1.
  // - Sect Leader is exactly 2.5x Elder1; we ensure Elder1 is even so 2.5x stays integer.

  const outer = {}
  outer[5] = { health: 200, damage: 100 }
  outer[4] = { health: up15(outer[5].health), damage: up15(outer[5].damage) }
  outer[3] = { health: up15(outer[4].health), damage: up15(outer[4].damage) }
  outer[2] = { health: up15(outer[3].health), damage: up15(outer[3].damage) }
  outer[1] = { health: up15(outer[2].health), damage: up15(outer[2].damage) }
  outer[6] = { health: 50, damage: 50 }

  const inner = {}
  inner[5] = { health: up2(outer[1].health), damage: up2(outer[1].damage) }
  inner[4] = { health: up15(inner[5].health), damage: up15(inner[5].damage) }
  inner[3] = { health: up15(inner[4].health), damage: up15(inner[4].damage) }
  inner[2] = { health: up15(inner[3].health), damage: up15(inner[3].damage) }
  inner[1] = { health: up15(inner[2].health), damage: up15(inner[2].damage) }

  const core = {}
  core[4] = { health: up2(inner[1].health), damage: up2(inner[1].damage) }
  core[3] = { health: up15(core[4].health), damage: up15(core[4].damage) }
  core[2] = { health: up15(core[3].health), damage: up15(core[3].damage) }
  core[1] = { health: up15(core[2].health), damage: up15(core[2].damage) }

  const master = {}
  master[3] = { health: up2(core[1].health), damage: up2(core[1].damage) }
  master[2] = { health: up15(master[3].health), damage: up15(master[3].damage) }
  master[1] = { health: up15(master[2].health), damage: up15(master[2].damage) }

  const elder = {}
  elder[2] = { health: up2(master[1].health), damage: up2(master[1].damage) }
  elder[1] = {
    health: makeEven(up15(elder[2].health)),
    damage: makeEven(up15(elder[2].damage))
  }

  const leader = {}
  leader[1] = { health: up25(elder[1].health), damage: up25(elder[1].damage) }

  const tables = { outer, inner, core, master, elder, leader }
  const t = tables[c.layer]
  const entry = t && t[c.rank]
  if (!entry) return { health: 1, damage: 1 }
  return { health: entry.health, damage: entry.damage }
}

function renderSectRankPyramidHtml() {
  const ownedLayer = String(state.sectRankLayer || 'outer')
  const ownedRank = Math.floor(Number(state.sectRankNumber) || 6)

  const rows = [
    { key: 'leader', label: 'LEADER', count: 1 },
    { key: 'elder', label: 'ELDER', count: 2 },
    { key: 'master', label: 'MASTER', count: 3 },
    { key: 'core', label: 'CORE', count: 4 },
    { key: 'inner', label: 'INNER', count: 5 },
    { key: 'outer', label: 'OUTER', count: 6 }
  ]

  return rows.map(layer => {
    const nodes = Array.from({ length: layer.count }).map((_, i) => {
      const rank = i + 1
      const owned = (layer.key === ownedLayer && rank === ownedRank)
      const cls = `sect-rank-node${owned ? ' owned' : ''}`
      const text = layer.key === 'leader' ? 'LEADER' : `${layer.label} ${rank}`
      return `<button class="${cls}" onclick="window.sectChallengeRank('${layer.key}', ${rank})">${escapeHtml(text)}</button>`
    }).join('')
    return `<div class="sect-ranks-row">${nodes}</div>`
  }).join('')
}

window.sectCloseRanks = () => {
  state.sectRankPyramidOpen = false
  render()
  saveGame()
}

window.sectChallengeRank = (layerKey, rankNumber) => {
  if (!state.hasJoinedSect) return
  if (state.inCombat) return

  const c = clampSectRank(layerKey, rankNumber)
  const stats = getSectRankEnemyStats(c.layer, c.rank)

  state.combatContext = { type: 'sectRankDuel', layer: c.layer, rank: c.rank }
  state.questReturnPhase = state.phase
  closePanelsForCombatStart()
  state.inCombat = true
  state.enemy = applyHardModeEnemyScaling({
    name: getSectPyramidRankLabel(c.layer, c.rank),
    icon: c.layer === 'leader' ? '🏯' : '🥋',
    health: stats.health,
    maxHealth: stats.health,
    strength: stats.damage
  })
  state.phase = 'COMBAT'
  ensureCombatLoop()
  render()
  saveGame()
}

function handleSectRankCombatVictory(_enemyName) {
  const ctx = state.combatContext
  if (!ctx || ctx.type !== 'sectRankDuel') return
  const c = clampSectRank(ctx.layer, ctx.rank)
  state.sectRankLayer = c.layer
  state.sectRankNumber = c.rank
  state.combatContext = null
  log(`You claim the rank of ${getSectPyramidRankLabel(c.layer, c.rank)}!`)
}

function handleCloudStoryCombatVictory(_enemyName) {
  const ctx = state.combatContext
  if (!ctx || ctx.type !== 'cloudStoryOuterDiscipleDuel') return

  // If you win: Outer Disciple Rank 6 → Inner Disciple Rank 5
  state.sectRankLayer = 'inner'
  state.sectRankNumber = 5

  state.cloudCultivatorStoryStage = Math.max(7, clampNonNegativeInt(state.cloudCultivatorStoryStage))
  state.combatContext = null

  // Next special button: Exploring the Sect Library (15 stamina, timed)
  if (!state.specialActions.some(a => a?.name === 'Exploring the Sect Library.')) {
    state.specialActions.push({
      name: 'Exploring the Sect Library.',
      icon: '📚',
      description: 'With your new standing, the Cloud Sect’s library opens to you.',
      disabled: state.stamina < 15,
      onStart: () => {
        if (state.stamina < 15) return false
        state.stamina -= 15
        return true
      },
      callback: () => window.cloudStoryExploreLibrary()
    })
  }
}

function handleCloudStoryCombatDefeat() {
  const ctx = state.combatContext
  if (!ctx || ctx.type !== 'cloudStoryOuterDiscipleDuel') return false

  // If you lose: stamina set to 0.
  state.stamina = 0

  // End combat cleanly.
  state.inCombat = false
  state.enemy = null
  state.combatContext = null

  // Avoid leaving the player "dead" in this scripted duel.
  state.health = Math.max(1, clampNonNegativeInt(state.health))

  // No retry: advance to the library step.
  state.cloudCultivatorStoryStage = Math.max(7, clampNonNegativeInt(state.cloudCultivatorStoryStage))
  state.specialActions = state.specialActions.filter(a => a?.name !== 'Battle starts.')
  if (!state.specialActions.some(a => a?.name === 'Exploring the Sect Library.')) {
    state.specialActions.push({
      name: 'Exploring the Sect Library.',
      icon: '📚',
      description: 'With your new standing, the Cloud Sect’s library opens to you.',
      disabled: state.stamina < 15,
      onStart: () => {
        if (state.stamina < 15) return false
        state.stamina -= 15
        return true
      },
      callback: () => window.cloudStoryExploreLibrary()
    })
  }

  return true
}

// Cloud coalition war: 3-enemy waves with stamina exhaustion on loss/flee.
function startCloudCoalitionWarCombat(enemyDef) {
  if (!enemyDef || typeof enemyDef !== 'object') return
  if (state.inCombat) return

  ensureCloudCoalitionWarState()
  const wave = state.cloudCoalitionWave
  if (!wave) return

  state.combatContext = { type: 'cloudCoalitionWar', kind: wave.kind, index: wave.index }
  state.questReturnPhase = state.phase
  closePanelsForCombatStart()
  state.inCombat = true

  const hp = Math.max(1, clampNonNegativeInt(enemyDef.health))
  const maxHp = Math.max(1, clampNonNegativeInt(enemyDef.maxHealth ?? enemyDef.health))
  const str = Math.max(1, clampNonNegativeInt(enemyDef.strength))

  state.enemy = applyHardModeEnemyScaling({
    name: String(enemyDef.name || 'Coalition Enemy'),
    icon: String(enemyDef.icon || '⚔️'),
    health: hp,
    maxHealth: maxHp,
    strength: str
  })

  state.phase = 'COMBAT'
  ensureCombatLoop()
  render()
  saveGame()
}

function getCloudCoalitionEnemyForWave(kind, index) {
  const k = String(kind || '')
  const i = Math.max(0, Math.min(2, Math.floor(Number(index) || 0)))

  if (k === 'armies') {
    const mults = [0.8, 0.9, 1.1]
    const mult = mults[i] ?? 1
    const hp = Math.max(1, Math.floor(clampNonNegativeNumber(state.maxHealth) * mult))
    const str = Math.max(1, Math.floor(clampNonNegativeNumber(state.strength) * mult))
    return { name: 'Core Coalition Disciple', icon: '⚔️', health: hp, maxHealth: hp, strength: str }
  }

  const names = ['Heavenly Demon Champion', 'Demonic Monarch General', 'Orthodox Grandmaster']
  const icons = ['👁️', '👹', '☯️']
  const mults = [0.95, 1.0, 1.05]
  const mult = mults[i] ?? 1
  const baseHp = Math.max(1, Math.floor(clampNonNegativeNumber(state.health)))
  const baseStr = Math.max(1, Math.floor(clampNonNegativeNumber(state.strength)))
  const hp = Math.max(1, Math.floor(baseHp * mult))
  const str = Math.max(1, Math.floor(baseStr * mult))
  return { name: names[i] || 'Coalition Champion', icon: icons[i] || '⚔️', health: hp, maxHealth: hp, strength: str }
}

function tryStartNextCloudCoalitionBattleIfReady() {
  ensureCloudCoalitionWarState()
  if (state.inCombat) return false
  if (state.phase !== 'FARMING') return false

  const wave = state.cloudCoalitionWave
  if (!wave || typeof wave !== 'object') return false
  if (!wave.pendingStart) return false

  if (wave.awaitingStaminaFull && !state.devIgnoreRequirements) {
    if (clampNonNegativeInt(state.stamina) < clampNonNegativeInt(state.maxStamina)) return false
  }

  wave.pendingStart = false
  state.cloudCoalitionWave = wave
  const enemy = getCloudCoalitionEnemyForWave(wave.kind, wave.index)
  startCloudCoalitionWarCombat(enemy)
  return true
}

function resolveCloudCoalitionBattleOutcome(outcome) {
  ensureCloudCoalitionWarState()
  const wave = state.cloudCoalitionWave
  if (!wave) return

  const kind = String(wave.kind)
  const idx = clampNonNegativeInt(wave.index)
  const isLoss = outcome === 'defeat' || outcome === 'flee'
  if (isLoss) state.stamina = 0

  if (outcome === 'victory') {
    if (idx < 2) {
      state.cloudCoalitionWave = { kind, index: idx + 1, awaitingStaminaFull: false, pendingStart: true }
      setTimeout(() => {
        try { tryStartNextCloudCoalitionBattleIfReady() } catch (_) {}
      }, 25)
      return
    }

    state.cloudCoalitionWave = null
    if (kind === 'armies') {
      state.cloudCoalitionWarStage = 3
      log('Your conquered sects hold the line. The coalition escalates.')
    } else {
      state.cloudCoalitionWarStage = 4
      log('The champions fall. The final fusion approaches.')
    }
    try { injectCloudCoalitionWarActionsIfReady() } catch (_) {}
    return
  }

  // Loss
  if (idx < 2) {
    state.cloudCoalitionWave = { kind, index: idx + 1, awaitingStaminaFull: true, pendingStart: true }
    log('Your stamina is shattered. Recover it to face the next battle.')
    return
  }

  state.cloudCoalitionWave = null
  if (kind === 'armies') {
    state.cloudCoalitionWarStage = 3
    log('The last clash drains you. The war moves on regardless.')
  } else {
    state.cloudCoalitionWarStage = 4
    log('Even in defeat, the duel ends. The final confrontation is inevitable.')
  }
  try { injectCloudCoalitionWarActionsIfReady() } catch (_) {}
}

function handleCloudCoalitionWarCombatDefeat() {
  const ctx = state.combatContext
  if (!ctx || ctx.type !== 'cloudCoalitionWar') return false

  resolveCloudCoalitionBattleOutcome('defeat')

  state.inCombat = false
  state.enemy = null
  state.combatContext = null
  state.phase = state.questReturnPhase || 'FARMING'
  state.questReturnPhase = null
  state.health = clampNonNegativeInt(state.maxHealth)
  ensureCombatLoop()
  render()
  saveGame()
  return true
}

function handleCloudCoalitionWarCombatVictory(_enemyName) {
  const ctx = state.combatContext
  if (!ctx || ctx.type !== 'cloudCoalitionWar') return
  resolveCloudCoalitionBattleOutcome('victory')
  state.combatContext = null
}

function handleCloudCoalitionWarCombatFlee() {
  const ctx = state.combatContext
  if (!ctx || ctx.type !== 'cloudCoalitionWar') return false
  resolveCloudCoalitionBattleOutcome('flee')
  exitCombatToReturnPhase()
  state.health = clampNonNegativeInt(state.maxHealth)
  render()
  saveGame()
  return true
}

function getManualUpgradeCost(nextTier) {
  const t = Math.floor(Number(nextTier) || 0)
  const costs = {
    2: 1,
    3: 2,
    4: 5,
    5: 10,
    6: 15,
    7: 20,
    8: 30,
    9: 70,
    10: 150,
    11: 225,
    12: 250,
    13: 300,
    14: 350,
    15: 400,
    16: 425,
    17: 475,
    18: 500,
    19: 750,
    20: 1000
  }
  return costs[t] ?? null
}

window.upgradeSectManual = () => {
  if (!state.hasJoinedSect) return
  const currentTier = clampNonNegativeInt(state.manualTier)
  if (currentTier >= 20) {
    log('📚 Your manual is already at maximum tier (20).')
    return
  }

  const nextTier = currentTier + 1
  const cost = getManualUpgradeCost(nextTier)
  if (!Number.isFinite(cost) || cost <= 0) return

  const cp = clampNonNegativeNumber(state.contributionPoints)
  if (cp < cost) {
    log(`Not enough Contribution Points. Need ${formatPoints(cost)}, have ${formatPoints(cp)}.`)
    return
  }

  state.contributionPoints = cp - cost
  state.manualTier = nextTier
  initializeManualMoveCooldowns()

  log(`📚 Manual upgraded to Tier ${state.manualTier}! (-${formatPoints(cost)} CP)`)
  render()
  saveGame()
}

window.sectGetQuest = () => {
  if (!state.hasJoinedSect) return

  if (state.activeQuest && state.activeQuest.completed !== true) {
    state.activeSidePanels.add('quests')
    render()
    saveGame()
    log('You already have an active quest.')
    return
  }

  state.activeQuest = createQuest()
  state.activeSidePanels.add('quests')
  render()
  saveGame()
  log('New quest received. Open the Quests panel.')
}

window.sectShowRank = () => {
  if (!state.hasJoinedSect) return

  if (!isValidSectRankLayer(state.sectRankLayer) || !Number.isFinite(state.sectRankNumber)) {
    const mapped = mapContributionPointsToPyramidRank(state.contributionPoints)
    state.sectRankLayer = mapped.layer
    state.sectRankNumber = mapped.rank
  }

  state.sectRankPyramidOpen = true
  render()
  saveGame()
}

// ============================================================================
// QUESTS (side panel)
// ============================================================================

function createQuest() {
  const now = Date.now()
  const primary = String(state.primaryAffinity || '').trim()
  const sect = String(state.currentSect || '').trim()

  const affinity = (AFFINITIES.includes(primary) ? primary : '')
  const sectAffinity = (AFFINITIES.includes(sect) ? sect : affinity)

  const templates = [
    { kind: 'bandits', title: 'Clear Thunder Mountain Bandits' },
    { kind: 'beast', title: 'Hunt the Spirit Beast' },
    { kind: 'relic', title: 'Recover the Lost Sect Relic' },
    { kind: 'escort', title: 'Escort the Caravan Through the Pass' },
    { kind: 'purge', title: 'Purge the Corrupted Shrine' }
  ]

  // Mild weighting: your sect tends to send you on “their” flavor quests.
  const roll = Math.random()
  let chosen = templates[Math.floor(Math.random() * templates.length)]
  if (sectAffinity === 'Thunder' && roll < 0.45) chosen = templates.find(t => t.kind === 'bandits') || chosen
  if (sectAffinity === 'Grass' && roll < 0.35) chosen = templates.find(t => t.kind === 'relic') || chosen
  if (sectAffinity === 'Poison' && roll < 0.35) chosen = templates.find(t => t.kind === 'purge') || chosen
  if (sectAffinity === 'Water' && roll < 0.30) chosen = templates.find(t => t.kind === 'escort') || chosen

  return {
    id: `q_${now}`,
    kind: String(chosen.kind),
    affinity: sectAffinity || null,
    title: String(chosen.title),
    started: false,
    completed: false,
    progressPct: 0,
    steps: [],
    activeStep: null,
    pendingCombatStepId: null,
    forceMercyStep: false
  }
}

function getQuestTheme(quest) {
  const k = String(quest?.kind || '')
  if (k) return k
  const title = String(quest?.title || '').toLowerCase()
  if (title.includes('bandit') && title.includes('thunder') && title.includes('mountain')) return 'thunderMountainBandits'
  if (title.includes('bandit')) return 'bandits'
  return 'generic'
}

function getQuestCombatStatsForMajorIndex(majorIndex) {
  // Spec: Easy for 2nd major realm: 200 HP / 100 STR.
  // From 3rd+ major realms: multiply both HP/STR by 1.5 each major realm.
  const majorNumber = (Number.isFinite(majorIndex) ? majorIndex : 0) + 1
  const baseHealth = 200
  const baseStrength = 100
  const exp = Math.max(0, majorNumber - 2)
  const scale = Math.pow(1.5, exp)
  return {
    health: Math.max(1, Math.floor(baseHealth * scale)),
    strength: Math.max(1, Math.floor(baseStrength * scale))
  }
}

function getQuestRewardsForMajorIndex(majorIndex) {
  const major = (Number.isFinite(majorIndex) ? majorIndex : 0) + 1
  if (major >= 16 && major <= 20) return { contributionPoints: 100, low: 0, mid: 0, high: 10 }
  if (major >= 11 && major <= 15) return { contributionPoints: 25, low: 0, mid: 20, high: 0 }
  if (major >= 7 && major <= 10) return { contributionPoints: 5, low: 0, mid: 8, high: 0 }
  if (major >= 4 && major <= 6) return { contributionPoints: 1.2, low: 20, mid: 0, high: 0 }
  if (major === 3) return { contributionPoints: 0.8, low: 12, mid: 0, high: 0 }
  return { contributionPoints: 0.6, low: 10, mid: 0, high: 0 }
}

function getNextQuestStepBase(quest) {
  const theme = getQuestTheme(quest)

  // Mercy: after a quest combat loss, force the next step to be non-combat.
  if (quest && quest.forceMercyStep) {
    return { type: 'progress', label: theme === 'thunderMountainBandits' ? 'Regroup and treat wounds (mercy)' : 'Recover and regroup (mercy)' }
  }

  if (theme === 'thunderMountainBandits' || theme === 'bandits') {
    // Spec: “If you’re fighting mountain bandits every action should be you fighting a mountain bandit until the progress bar completes.”
    return { type: 'combat', label: theme === 'thunderMountainBandits' ? 'Fight Thunder Mountain Bandit' : 'Fight Bandit Raider' }
  }

  if (theme === 'beast') {
    const progressSteps = [
      'Track fresh claw marks',
      'Follow the scent trail',
      'Set a spirit bait lure'
    ]
    const combatSteps = [
      'Ambushed by a spirit beast',
      'Face the spirit beast head-on'
    ]
    const wantCombat = Math.random() < 0.55
    if (wantCombat) return { type: 'combat', label: combatSteps[Math.floor(Math.random() * combatSteps.length)] }
    return { type: 'progress', label: progressSteps[Math.floor(Math.random() * progressSteps.length)] }
  }

  if (theme === 'relic') {
    const progressSteps = [
      'Search the ruined courtyard',
      'Decipher an old inscription',
      'Navigate the collapsed tunnels'
    ]
    const combatSteps = [
      'Fend off a tomb-robber',
      'Defeat the relic guardian'
    ]
    const wantCombat = Math.random() < 0.30
    if (wantCombat) return { type: 'combat', label: combatSteps[Math.floor(Math.random() * combatSteps.length)] }
    return { type: 'progress', label: progressSteps[Math.floor(Math.random() * progressSteps.length)] }
  }

  if (theme === 'escort') {
    const progressSteps = [
      'Guide the caravan forward',
      'Secure the narrow pass',
      'Scout ahead for danger'
    ]
    const combatSteps = [
      'Repel highwaymen',
      'Drive off a hungry beast'
    ]
    const wantCombat = Math.random() < 0.38
    if (wantCombat) return { type: 'combat', label: combatSteps[Math.floor(Math.random() * combatSteps.length)] }
    return { type: 'progress', label: progressSteps[Math.floor(Math.random() * progressSteps.length)] }
  }

  if (theme === 'purge') {
    const progressSteps = [
      'Cleanse the shrine wards',
      'Reinforce a broken seal',
      'Burn corrupted offerings'
    ]
    const combatSteps = [
      'Slay a corrupted cultist',
      'Defeat the shrine abomination'
    ]
    const wantCombat = Math.random() < 0.42
    if (wantCombat) return { type: 'combat', label: combatSteps[Math.floor(Math.random() * combatSteps.length)] }
    return { type: 'progress', label: progressSteps[Math.floor(Math.random() * progressSteps.length)] }
  }

  // Generic fallback (existing behavior)
  const progressSteps = [
    'Gathering materials',
    'Preparing supplies',
    'Scouting the area'
  ]
  const combatSteps = [
    'Skirmish with a hostile cultivator',
    'Fend off a wild beast'
  ]
  const wantCombat = Math.random() < 0.33
  if (wantCombat) return { type: 'combat', label: combatSteps[Math.floor(Math.random() * combatSteps.length)] }
  return { type: 'progress', label: progressSteps[Math.floor(Math.random() * progressSteps.length)] }
}

function startQuest() {
  const quest = state.activeQuest
  if (!quest || quest.completed) return
  if (quest.started) return
  quest.started = true
  quest.progressPct = 0
  quest.steps = []
  quest.activeStep = null
  quest.pendingCombatStepId = null
  quest.forceMercyStep = false
  spawnNextQuestStep()
  saveGame()
  render()
}

function spawnNextQuestStep() {
  const quest = state.activeQuest
  if (!quest || quest.completed) return
  if (quest.progressPct >= 100) {
    completeQuest()
    return
  }

  const base = getNextQuestStepBase(quest)
  const step = {
    id: `qs_${Date.now()}_${Math.floor(Math.random() * 10000)}`,
    type: base.type,
    label: base.label,
    resolved: false
  }
  quest.activeStep = step

  if (quest.forceMercyStep && step.type === 'progress') {
    quest.forceMercyStep = false
  }

  if (step.type === 'progress') {
    const action = {
      name: `QuestStep:${quest.id}:${step.id}`,
      callback: () => finishQuestProgressStep(step.id)
    }
    startTimedAction('quest', action, 5000)
  }
}

function finishQuestProgressStep(stepId) {
  const quest = state.activeQuest
  if (!quest || quest.completed) return
  if (!quest.activeStep || quest.activeStep.id !== stepId) return

  quest.steps.push({ ...quest.activeStep, resolved: true })
  quest.activeStep = null

  const inc = 10 + Math.floor(Math.random() * 11) // 10..20
  quest.progressPct = Math.min(100, clampNonNegativeInt(quest.progressPct) + inc)

  if (quest.progressPct >= 100) {
    completeQuest()
  } else {
    spawnNextQuestStep()
  }

  saveGame()
  render()
}

function startQuestCombat(mode) {
  const quest = state.activeQuest
  if (!quest || quest.completed || !quest.started) return
  const step = quest.activeStep
  if (!step || step.type !== 'combat') return

  if (String(mode) === 'retreat') {
    quest.steps.push({ ...step, resolved: true, outcome: 'retreat' })
    quest.activeStep = null
    spawnNextQuestStep()
    saveGame()
    render()
    return
  }

  quest.pendingCombatStepId = step.id
  state.questReturnPhase = state.phase

  closePanelsForCombatStart()

  state.inCombat = true
  const theme = getQuestTheme(quest)
  const stats = getQuestCombatStatsForMajorIndex(state.cultivationMajorIndex)
  const enemyName = theme === 'thunderMountainBandits'
    ? 'Thunder Mountain Bandit'
    : (theme === 'bandits')
      ? 'Bandit Raider'
      : (theme === 'beast')
        ? 'Spirit Beast'
        : (theme === 'relic')
          ? 'Relic Guardian'
          : (theme === 'escort')
            ? 'Highwayman'
            : (theme === 'purge')
              ? 'Corrupted Cultist'
              : 'Quest Enemy'

  state.enemy = applyHardModeEnemyScaling({
    name: enemyName,
    health: stats.health,
    maxHealth: stats.health,
    strength: stats.strength
  })
  state.phase = 'COMBAT'
  ensureCombatLoop()
  render()
  saveGame()
}

function handleQuestCombatDefeat() {
  const quest = state.activeQuest
  if (!quest || quest.completed || !quest.started) return false
  if (!quest.pendingCombatStepId) return false
  const step = quest.activeStep
  if (!step || step.type !== 'combat' || step.id !== quest.pendingCombatStepId) return false

  // Record defeat step
  quest.pendingCombatStepId = null
  quest.steps.push({ ...step, resolved: true, outcome: 'defeat' })
  quest.activeStep = null

  // Progress penalty: lose 10-15% of total progress
  const penalty = 10 + Math.floor(Math.random() * 6) // 10..15
  quest.progressPct = Math.max(0, Math.min(100, clampNonNegativeInt(quest.progressPct) - penalty))
  log(`Quest fight lost. Progress -${penalty}%. Mercy step next.`)

  // Mercy: force next step to be non-combat
  quest.forceMercyStep = true

  // Exit combat back to play + keep player alive
  state.inCombat = false
  state.enemy = null
  state.combatContext = null
  state.phase = state.questReturnPhase || 'FARMING'
  state.questReturnPhase = null
  state.health = Math.max(1, clampNonNegativeInt(state.health))
  state.activeSidePanels.add('quests')
  ensureCombatLoop()

  // Immediately spawn the mercy step
  spawnNextQuestStep()

  saveGame()
  render()
  return true
}

function handleQuestCombatVictory(enemyName) {
  const quest = state.activeQuest
  if (!quest || quest.completed || !quest.pendingCombatStepId) return
  const step = quest.activeStep
  if (!step || step.type !== 'combat' || step.id !== quest.pendingCombatStepId) return

  quest.pendingCombatStepId = null
  quest.steps.push({ ...step, resolved: true, outcome: 'victory' })
  quest.activeStep = null

  const inc = 10 + Math.floor(Math.random() * 11)
  quest.progressPct = Math.min(100, clampNonNegativeInt(quest.progressPct) + inc)

  if (quest.progressPct >= 100) {
    completeQuest()
  } else {
    spawnNextQuestStep()
  }
}

function completeQuest() {
  const quest = state.activeQuest
  if (!quest || quest.completed) return
  quest.completed = true
  quest.progressPct = 100

  const rewards = getQuestRewardsForMajorIndex(state.cultivationMajorIndex)

  state.contributionPoints = clampNonNegativeNumber(state.contributionPoints) + rewards.contributionPoints
  state.spiritStonesLow = clampNonNegativeInt(state.spiritStonesLow) + rewards.low
  state.spiritStonesMid = clampNonNegativeInt(state.spiritStonesMid) + rewards.mid
  state.spiritStonesHigh = clampNonNegativeInt(state.spiritStonesHigh) + rewards.high

  log(`Quest complete! +${formatPoints(rewards.contributionPoints)} Contribution Points`)
  if (rewards.low) log(`+${formatNumber(rewards.low)} low-grade spirit stones`)
  if (rewards.mid) log(`+${formatNumber(rewards.mid)} mid-grade spirit stones`)
  if (rewards.high) log(`+${formatNumber(rewards.high)} high-grade spirit stones`)

  // Bonus drops: small chance for an extra item reward.
  // Keep it simple and deterministic enough to feel consistent.
  const major = (Number.isFinite(state.cultivationMajorIndex) ? state.cultivationMajorIndex : 0) + 1
  const qUp = normalizeRebirthUpgrades(state.rebirthUpgrades)
  state.rebirthUpgrades = qUp
  const bonusFromRebirth = 0.01 * clampNonNegativeInt(qUp.questDropChanceLevel)
  const bonusChance = Math.max(0, Math.min(0.90, 0.12 + (major * 0.01) + bonusFromRebirth))
  if (Math.random() < bonusChance) {
    const catalog = getPillCatalog().filter(p => p && p.file !== 'death_pill.png')
    const pick = catalog.length ? catalog[Math.floor(Math.random() * catalog.length)] : null
    if (pick) {
      addToInventory({
        name: String(pick.name || 'Pill'),
        kind: 'pill',
        pillFile: String(pick.file),
        imageSrc: String(pick.src),
        description: getPillDescription(pick.file),
        quantity: 1
      })
      log(`Bonus reward: ${String(pick.name || 'Pill')}.`)
    }
  }
  render()
  saveGame()
}

function renderQuestPanel() {
  let panel = document.getElementById('quest-panel')
  const isNewPanel = !panel

  if (!panel) {
    panel = document.createElement('div')
    panel.id = 'quest-panel'
    panel.className = 'quest-panel draggable-panel'

    applySavedPanelSize(panel, 'quests')
    getSidePanelsMount().appendChild(panel)
    attachPanelResizePersistence(panel, 'quests')

    const pos = state.panelPositions?.quests
    if (pos && (pos.x !== 0 || pos.y !== 0)) {
      panel.style.transform = `translate(${pos.x}px, ${pos.y}px)`
    }
  }

  const quest = state.activeQuest
  if (!quest) {
    panel.innerHTML = `
      <div class="panel-header" onmousedown="window.startDrag(event, 'quest-panel')">
        <h3>QUEST</h3>
        <span class="drag-hint">✥ Drag to move ✥</span>
      </div>
      <div class="panel-content">
        <div class="quest-empty">No active quest. Use <b>Get Quest</b> in the Sect panel.</div>
      </div>
    `
    return
  }

  const progress = Math.max(0, Math.min(100, Math.floor(Number(quest.progressPct) || 0)))
  const started = Boolean(quest.started)
  const completed = Boolean(quest.completed)

  const step = quest.activeStep
  let stepFillPct = '0%'
  let stepProgressKey = null
  if (step && step.type === 'progress') {
    const key = getActionKey('quest', { name: `QuestStep:${quest.id}:${step.id}` })
    stepFillPct = `${Math.max(0, Math.min(100, Math.floor(getActionProgress(key) * 100)))}%`
    stepProgressKey = key
  }

  panel.innerHTML = `
    <div class="panel-header" onmousedown="window.startDrag(event, 'quest-panel')">
      <h3>${completed ? 'QUEST PROGRESS' : 'QUEST'}</h3>
      <span class="drag-hint">✥ Drag to move ✥</span>
    </div>
    <div class="panel-content">
      <div class="quest-title">${escapeHtml(String(quest.title || 'Quest'))}</div>

      <div class="quest-progress-label">${completed ? 'PROGRESS: 100%' : `CURRENT PROGRESS: ${progress}%`}</div>
      <div class="quest-progress-track">
        <div class="quest-progress-fill" style="width:${progress}%;"></div>
        <div class="quest-progress-text">PROGRESS: ${progress}%</div>
      </div>

      ${!started ? `
        <button class="quest-start-btn" onclick="window.startQuestFromPanel()">START</button>
      ` : ''}

      ${started && !completed && step ? `
        <div class="quest-step">
          ${step.type === 'progress' ? `
            <div class="quest-step-track">
              <div class="quest-step-fill" ${stepProgressKey ? `data-progress-key=${JSON.stringify(String(stepProgressKey))}` : ''} style="width:${stepFillPct};"></div>
              <div class="quest-step-text">${escapeHtml(step.label)}</div>
            </div>
          ` : `
            <div class="quest-step-track">
              <div class="quest-step-text">${escapeHtml(step.label)}</div>
            </div>
            <div class="quest-combat-actions">
              <button class="quest-combat-btn" onclick="window.questCombatRush()">RUSH</button>
              <button class="quest-combat-btn" onclick="window.questCombatRetreat()">RETREAT</button>
            </div>
          `}
        </div>
      ` : ''}

      ${completed ? `
        <div class="quest-empty">Quest completed. Get another quest from your sect.</div>
      ` : ''}
    </div>
  `

  if (isNewPanel) {
    // Panel was just created
  }
}

function renderMovesPanel() {
  let panel = document.getElementById('moves-panel')
  const isNewPanel = !panel

  if (!panel) {
    panel = document.createElement('div')
    panel.id = 'moves-panel'
    panel.className = 'moves-panel draggable-panel'

    applySavedPanelSize(panel, 'moves')
    getSidePanelsMount().appendChild(panel)
    attachPanelResizePersistence(panel, 'moves')

    const pos = state.panelPositions?.moves
    if (pos && (pos.x !== 0 || pos.y !== 0)) {
      panel.style.transform = `translate(${pos.x}px, ${pos.y}px)`
    }
  }

  if (!Array.isArray(state.equippedMoves) || state.equippedMoves.length !== 3) {
    state.equippedMoves = ['punch', 'superPunch', 'punch']
  }
  if (!isQiBlastUnlocked()) {
    state.equippedMoves = state.equippedMoves.map(m => (String(m || '') === 'qiBlast' ? 'punch' : m))
  }

  const equipped = state.equippedMoves
  const basicMoves = ['punch', 'superPunch']
  const manualMoves = [
    ...(isQiBlastUnlocked() ? ['qiBlast'] : []),
    ...getAvailableManualMoves().map(m => `manual:${m.name}`)
  ]

  const pickerSlot = Number.isFinite(state.movesPickerSlot) ? Math.floor(Number(state.movesPickerSlot)) : null
  const unlockedChoices = [
    ...basicMoves,
    ...(isQiBlastUnlocked() ? ['qiBlast'] : []),
    ...getAvailableManualMoves().map(m => `manual:${m.name}`)
  ]

  panel.innerHTML = `
    <div class="panel-header" onmousedown="window.startDrag(event, 'moves-panel')">
      <h3>${renderUiIcon('moves', { title: 'Moves' })} Moves</h3>
      <span class="drag-hint">✥ Drag to move ✥</span>
    </div>
    <div class="panel-content moves-content">
      <div class="moves-block">
        <div class="moves-block-title">BASIC</div>
        <div class="moves-list">${basicMoves.map(id => renderMoveListItemHtml(id)).join('')}</div>
      </div>

      <div class="moves-block">
        <div class="moves-block-title">WEAPON</div>
        <div class="moves-empty">None</div>
      </div>

      <div class="moves-block">
        <div class="moves-block-title">MANUAL</div>
        ${manualMoves.length === 0
          ? `<div class="moves-empty">Equip a manual to see manual moves</div>`
          : `<div class="moves-list">${manualMoves.map(id => renderMoveListItemHtml(id)).join('')}</div>`
        }
      </div>

      <div class="moves-block">
        <div class="moves-block-title">EQUIPPED MOVES</div>
        <div class="moves-equipped-grid">
          ${equipped.map((id, i) => `
            <button class="moves-equipped-slot moves-equipped-slot-btn" onclick="window.openMovesPicker(${i})">
              <div class="moves-equipped-slot-title">SLOT ${i + 1}</div>
              <div class="moves-equipped-slot-name">${escapeHtml(getMoveDisplayName(id) || '')}</div>
            </button>
          `).join('')}
        </div>

        ${pickerSlot !== null && pickerSlot >= 0 && pickerSlot <= 2 ? `
          <div class="moves-picker">
            <div class="moves-picker-title">CHOOSE FOR SLOT ${pickerSlot + 1}</div>
            <div class="moves-picker-list">
              ${unlockedChoices.map(mid => `
                <button class="moves-picker-item" onclick='window.pickMoveForSlot(${pickerSlot}, ${JSON.stringify(String(mid))})'>
                  ${escapeHtml(getMoveDisplayName(mid) || String(mid))}
                </button>
              `).join('')}
            </div>
          </div>
        ` : ''}
      </div>
    </div>
  `

  if (isNewPanel) {
    // Panel was just created
  }
}

function renderMoveListItemHtml(moveId) {
  const label = getMoveDisplayName(moveId)
  const meta = getMoveListMetaText(moveId)
  return `
    <div class="moves-row">
      <div class="moves-row-label">${escapeHtml(label)}</div>
      ${meta ? `<div class="moves-row-meta">${escapeHtml(meta)}</div>` : ''}
    </div>
  `
}

function getMoveListMetaText(moveId) {
  const parts = []
  const preview = getMoveCombatPreview(moveId)
  if (preview && Number.isFinite(preview.damage)) parts.push(`DMG: ${formatNumber(preview.damage)}`)

  const cd = getMoveBaseCooldownMs(moveId)
  if (cd > 0) parts.push(`CD: ${formatCooldownMs(cd)}`)

  return parts.join(' • ')
}

function getMoveBaseCooldownMs(moveId) {
  const id = String(moveId || '')
  if (!id) return 0
  if (BASIC_MOVES[id]) return clampNonNegativeNumber(BASIC_MOVES[id].cooldownMs)
  if (id === 'qiBlast') return clampNonNegativeNumber(QI_BLAST_MOVE.cooldownMs)
  if (id.startsWith('manual:')) {
    const name = id.slice('manual:'.length)
    const move = getAvailableManualMoves().find(m => m.name === name)
    if (!move) return 0
    return clampNonNegativeNumber(move.cooldown) * 1000
  }
  return 0
}

function getMoveDisplayName(moveId) {
  const id = String(moveId || '')
  if (!id) return ''
  if (id.startsWith('manual:')) return id.slice('manual:'.length)
  if (id === 'qiBlast') {
    const manualName = String(state.equipped?.manual || '')
    if (manualName === 'Demonic Manual' || manualName.startsWith('Demon Monarch Manual')) return 'Bleeding Qi'
    if (manualName === 'Hidden Heavenly Demon Manual' || manualName.startsWith('Heavenly Demon Manual')) return 'Angelic Burn'
    if (manualName === 'Orthodox Manual') return 'Righteous Flame'
    return 'Qi Blast'
  }
  const basic = BASIC_MOVES[id]
  if (basic) return basic.name
  return id
}

function isQiBlastUnlocked() {
  return Boolean(String(state.equipped?.manual || ''))
}

window.openMovesPicker = (slotIndex) => {
  const idx = Math.floor(Number(slotIndex))
  if (!Number.isFinite(idx) || idx < 0 || idx > 2) return
  const cur = Number.isFinite(state.movesPickerSlot) ? Math.floor(Number(state.movesPickerSlot)) : null
  state.movesPickerSlot = cur === idx ? null : idx
  render()
  saveGame()
}

window.pickMoveForSlot = (slotIndex, moveId) => {
  const idx = Math.floor(Number(slotIndex))
  if (!Number.isFinite(idx) || idx < 0 || idx > 2) return
  if (!Array.isArray(state.equippedMoves) || state.equippedMoves.length !== 3) {
    state.equippedMoves = ['punch', 'superPunch', 'punch']
  }

  const id = String(moveId || '')
  if (!id) return

  // Only allow unlocked moves.
  const allowed = new Set([
    'punch',
    'superPunch',
    ...(isQiBlastUnlocked() ? ['qiBlast'] : []),
    ...getAvailableManualMoves().map(m => `manual:${m.name}`)
  ])
  if (!allowed.has(id)) return

  state.equippedMoves[idx] = id
  state.movesPickerSlot = null
  render()
  saveGame()
}

// Back-compat: keep old handler name if referenced by older saves/UI.
window.setEquippedMove = (slotIndex, moveId) => {
  window.pickMoveForSlot(slotIndex, moveId)
}

function renderShopPanelOffersHtml(shopKind) {
  ensureShopsInitialized()
  const kind = String(shopKind || 'town')
  const shop = kind === 'hour' ? state.shops.hour : state.shops.town
  const now = Date.now()
  const remaining = Math.max(0, clampNonNegativeMs(shop.resetAt) - now)
  const offers = Array.isArray(shop.offers) ? shop.offers : []

  const list = offers.map(o => {
    const rawId = String(o.id || '')
    const pillName = escapeHtml(String(o.pillName || 'pill'))
    const desc = escapeHtml(String(o.description || ''))
    const imgSrc = escapeHtml(String(o.imageSrc || ''))
    const price = `${formatNumber(clampNonNegativeInt(o.priceAmount))} ${escapeHtml(currencyLabel(o.priceCurrency))}`
    const purchased = Boolean(o.purchased)
    const onclick = `window.buyShopOffer(${JSON.stringify(kind)}, ${JSON.stringify(rawId)})`
    return `
      <div class="shop-card" data-testid="shop-item">
        <div class="shop-card-top">
          <div class="shop-card-imgwrap">
            <img class="shop-card-img shop-item-img" src="${imgSrc}" alt="${pillName}" />
          </div>
          <div class="shop-card-title shop-item-title">${pillName}</div>
          <div class="shop-card-desc">${desc}</div>
        </div>

        <div class="shop-card-bottom">
          <div class="shop-card-price shop-item-price">${price}</div>
          <button class="shop-card-buy shop-buy-btn" ${purchased ? 'disabled' : ''} onclick="${escapeHtml(onclick)}">${purchased ? 'Not for sale' : 'BUY'}</button>
        </div>
      </div>
    `.trim()
  }).join('')

  return `
    <div class="shop-header-row">
      <div class="shop-reset">Reset in: <span data-testid="shop-reset" data-shop-kind="${escapeHtml(kind)}">${escapeHtml(formatCountdown(remaining))}</span></div>
    </div>
    <div class="shop-row" aria-label="Shop offers">
      <div class="shop-list">${list || '<div class="inventory-empty">No offers.</div>'}</div>
    </div>
  `.trim()
}

function renderRebirthTreeHtml() {
  const pts = clampNonNegativeInt(state.rebirthPoints || 0)
  const u = normalizeRebirthUpgrades(state.rebirthUpgrades)
  state.rebirthUpgrades = u

  const resetProgress = clampNonNegativeInt(u.resetUnlockProgress)
  const resetStep = Math.floor(resetProgress / 10)
  const resetNext = Math.min(100, resetProgress + 10)
  const resetCost = 5

  const qiLvl = clampNonNegativeInt(u.qiMultiplierLevel)
  const qiMult = 1 + (0.2 * qiLvl)
  const qiCost = Math.max(1, Math.ceil(1 * Math.pow(1.5, qiLvl)))

  const herbSpeedLvl = clampNonNegativeInt(u.herbGatherSpeedLevel)
  const herbSpeedPct = herbSpeedLvl * 5
  const herbSpeedCost = getRebirthInfiniteNodeCost(herbSpeedLvl)

  const herbMultiLvl = clampNonNegativeInt(u.herbMultiGatherLevel)
  const herbMultiPct = herbMultiLvl * 10
  const herbsPerGather = 1 + Math.floor(herbMultiLvl / 10)
  const herbMultiCost = getRebirthInfiniteNodeCost(herbMultiLvl)

  const strLvl = clampNonNegativeInt(u.strengthMultiplierLevel)
  const strMult = 1 + (0.1 * strLvl)
  const strCost = getRebirthInfiniteNodeCost(strLvl)

  const hpLvl = clampNonNegativeInt(u.healthMultiplierLevel)
  const hpMult = 1 + (0.1 * hpLvl)
  const hpCost = getRebirthInfiniteNodeCost(hpLvl)

  const specialLvl = clampNonNegativeInt(u.specialCooldownLevel)
  const specialCdRed = 0.5 * specialLvl
  const specialCost = getRebirthInfiniteNodeCost(specialLvl)

  const repeatLvl = clampNonNegativeInt(u.repeatableSpeedLevel)
  const repeatRed = 0.25 * repeatLvl
  const repeatCost = getRebirthInfiniteNodeCost(repeatLvl)

  const autoGatherLvl = clampNonNegativeInt(u.autoGatherLevel)
  const autoGatherPct = autoGatherLvl * 5
  const autoGatherCost = getRebirthInfiniteNodeCost(autoGatherLvl)

  const autoCraftLvl = clampNonNegativeInt(u.autoCraftLevel)
  const autoCraftPct = autoCraftLvl * 5
  const autoCraftCost = getRebirthInfiniteNodeCost(autoCraftLvl)

  const pillSpeedLvl = clampNonNegativeInt(u.pillCraftSpeedLevel)
  const pillRed = 0.25 * pillSpeedLvl
  const pillSpeedCost = getRebirthInfiniteNodeCost(pillSpeedLvl)

  const minRootsLvl = clampNonNegativeInt(u.minRootBonusLevel)
  const minRootsCost = getRebirthInfiniteNodeCost(minRootsLvl)

  const rootLuckLvl = clampNonNegativeInt(u.rootLuckLevel)
  const rootLuckCost = getRebirthInfiniteNodeCost(rootLuckLvl)

  const maxRootsBonusLvl = clampNonNegativeInt(u.maxRootBonusLevel)
  const maxRootsBonusCost = getRebirthInfiniteNodeCost(maxRootsBonusLvl)

  const moreRerollsLvl = clampNonNegativeInt(u.extraRerollsLevel)
  const moreRerollsCost = getRebirthInfiniteNodeCost(moreRerollsLvl)

  const bloodlineLuckLvl = clampNonNegativeInt(u.bloodlineLuckLevel)
  const bloodlineLuckCost = getRebirthInfiniteNodeCost(bloodlineLuckLvl)

  const multiAffinityLuckLvl = clampNonNegativeInt(u.multiAffinityLuckLevel)
  const multiAffinityLuckCost = getRebirthInfiniteNodeCost(multiAffinityLuckLvl)

  const alignLuckLvl = clampNonNegativeInt(u.affinityAlignmentLuckLevel)
  const alignLuckCost = getRebirthInfiniteNodeCost(alignLuckLvl)

  const storyLuckLvl = clampNonNegativeInt(u.storyLuckLuckLevel)
  const storyLuckPct = storyLuckLvl * 5
  const storyLuckCost = getRebirthInfiniteNodeCost(storyLuckLvl)

  const stoneRpLvl = clampNonNegativeInt(u.spiritStoneRpMultLevel)
  const stoneRpMult = getRebirthSpiritStoneRpMultiplier()
  const stoneRpCost = getRebirthInfiniteNodeCost(stoneRpLvl, 3)

  const questDropLvl = clampNonNegativeInt(u.questDropChanceLevel)
  const questDropPct = questDropLvl * 1
  const questDropCost = getRebirthInfiniteNodeCost(questDropLvl)

  const nodes = [
    {
      id: 'start',
      title: 'Rebirth',
      cost: 0,
      pos: { x: 580, y: 420 },
      prereq: [],
      purchased: true
    },
    {
      id: 'qi_mult',
      title: `Qi ${formatMultiplier(qiMult)}`,
      cost: qiCost,
      pos: { x: 580, y: 260 },
      prereq: ['start'],
      purchased: false,
      canBuy: () => true,
      tooltip: `Infinite. Current: ${formatMultiplier(qiMult)} (lvl ${qiLvl}). Next costs ${qiCost} RP.`
    },
    {
      id: 'herb_speed',
      title: `Herb +${formatNumber(herbSpeedPct)}%`,
      cost: herbSpeedCost,
      pos: { x: 760, y: 120 },
      prereq: ['start'],
      purchased: false,
      canBuy: () => true,
      tooltip: `Infinite. Faster herb gathering (+5% per buy). Current: +${formatNumber(herbSpeedPct)}%.`
    },
    {
      id: 'herb_multi',
      title: `Herbs ×${formatNumber(herbsPerGather)}`,
      cost: herbMultiCost,
      pos: { x: 420, y: 120 },
      prereq: ['start'],
      purchased: false,
      canBuy: () => true,
      tooltip: `Infinite. +10% per buy. At 100% you gather 2, at 200% you gather 3, etc. Current: ${formatNumber(herbMultiPct)}% → ${formatNumber(herbsPerGather)} herbs.`
    },
    {
      id: 'min_roots_plus',
      title: `Min +${formatNumber(minRootsLvl)}`,
      cost: minRootsCost,
      pos: { x: 240, y: 260 },
      prereq: ['start'],
      purchased: false,
      canBuy: () => true,
      tooltip: `Infinite. +1 minimum roots per buy. Current bonus: +${formatNumber(minRootsLvl)}.`
    },
    {
      id: 'root_luck',
      title: `Root Luck +${formatNumber(rootLuckLvl)}`,
      cost: rootLuckCost,
      pos: { x: 240, y: 100 },
      prereq: ['start'],
      purchased: false,
      canBuy: () => true,
      tooltip: `Infinite. Increases odds of rolling more roots within your min/max. +1 luck per buy.`
    },
    {
      id: 'max_roots_plus',
      title: `Max +${formatNumber(maxRootsBonusLvl)}`,
      cost: maxRootsBonusCost,
      pos: { x: 240, y: 580 },
      prereq: ['start'],
      purchased: false,
      canBuy: () => true,
      tooltip: `Infinite. +1 maximum roots per buy. Current bonus: +${formatNumber(maxRootsBonusLvl)}.`
    },
    {
      id: 'auto_gather',
      title: `Auto G ${formatNumber(autoGatherPct)}%`,
      cost: autoGatherCost,
      pos: { x: 240, y: 420 },
      prereq: ['start'],
      purchased: false,
      canBuy: () => true,
      tooltip: `Infinite. +5% per buy. Unlock at 100%. Current: ${formatNumber(autoGatherPct)}%.`
    },
    {
      id: 'auto_craft',
      title: `Auto C ${formatNumber(autoCraftPct)}%`,
      cost: autoCraftCost,
      pos: { x: 920, y: 420 },
      prereq: ['start'],
      purchased: false,
      canBuy: () => true,
      tooltip: `Infinite. +5% per buy. Unlock at 100%. Current: ${formatNumber(autoCraftPct)}%.`
    },
    {
      id: 'pill_speed',
      title: `Pill -${pillRed.toFixed(2)}s`,
      cost: pillSpeedCost,
      pos: { x: 920, y: 580 },
      prereq: ['start'],
      purchased: false,
      canBuy: () => true,
      tooltip: `Infinite. Pill crafting faster (0.25s per buy). Current: -${pillRed.toFixed(2)}s.`
    },
    {
      id: 'str_mult',
      title: `STR ${formatMultiplier(strMult)}`,
      cost: strCost,
      pos: { x: 760, y: 580 },
      prereq: ['start'],
      purchased: false,
      canBuy: () => true,
      tooltip: `Infinite. Strength multiplier (+0.1× per buy). Current: ${formatMultiplier(strMult)}.`
    },
    {
      id: 'hp_mult',
      title: `HP ${formatMultiplier(hpMult)}`,
      cost: hpCost,
      pos: { x: 1040, y: 580 },
      prereq: ['start'],
      purchased: false,
      canBuy: () => true,
      tooltip: `Infinite. Health multiplier (+0.1× per buy). Current: ${formatMultiplier(hpMult)}.`
    },
    {
      id: 'special_cd',
      title: `Spec -${specialCdRed.toFixed(1)}s`,
      cost: specialCost,
      pos: { x: 80, y: 520 },
      prereq: ['start'],
      purchased: false,
      canBuy: () => true,
      tooltip: `Infinite. Special action cooldowns reduced by 0.5s per buy. Current: -${specialCdRed.toFixed(1)}s.`
    },
    {
      id: 'repeat_speed',
      title: `Rep -${repeatRed.toFixed(2)}s`,
      cost: repeatCost,
      pos: { x: 80, y: 360 },
      prereq: ['start'],
      purchased: false,
      canBuy: () => true,
      tooltip: `Infinite. Repeatable actions complete faster by 0.25s per buy. Current: -${repeatRed.toFixed(2)}s.`
    },
    {
      id: 'reroll',
      title: 'Reroll',
      cost: 20,
      pos: { x: 760, y: 260 },
      prereq: ['start'],
      purchased: Boolean(u.canRerollFate),
      canBuy: () => !u.canRerollFate,
      apply: () => { u.canRerollFate = true }
    },
    {
      id: 'more_rerolls',
      title: `Rerolls +${formatNumber(moreRerollsLvl)}`,
      cost: moreRerollsCost,
      pos: { x: 920, y: 260 },
      prereq: ['reroll'],
      purchased: false,
      canBuy: () => true,
      tooltip: `Infinite. Grants +1 fate reroll per buy.`
    },
    {
      id: 'bloodline_luck',
      title: `BL Luck +${formatNumber(bloodlineLuckLvl)}`,
      cost: bloodlineLuckCost,
      pos: { x: 1040, y: 120 },
      prereq: ['start'],
      purchased: false,
      canBuy: () => true,
      tooltip: `Infinite. Better bloodline luck (+1 per buy).`
    },
    {
      id: 'multi_affinity_luck',
      title: `Aff +${formatNumber(multiAffinityLuckLvl)}`,
      cost: multiAffinityLuckCost,
      pos: { x: 1040, y: 260 },
      prereq: ['start'],
      purchased: false,
      canBuy: () => true,
      tooltip: `Infinite. Increases luck of rolling multiple affinities (+1 per buy).`
    },
    {
      id: 'affinity_alignment',
      title: `Align +${formatNumber(alignLuckLvl)}%`,
      cost: alignLuckCost,
      pos: { x: 1040, y: 420 },
      prereq: ['start'],
      purchased: false,
      canBuy: () => true,
      tooltip: `Infinite. +1% chance per buy to roll higher affinity alignment (higher scores).`
    },
    {
      id: 'story_luck',
      title: `Story +${formatNumber(storyLuckPct)}%`,
      cost: storyLuckCost,
      pos: { x: 1040, y: 760 },
      prereq: ['start'],
      purchased: false,
      canBuy: () => true,
      tooltip: `Infinite. +5% chance per buy to roll higher Story Luck.`
    },
    {
      id: 'spiritstone_rp',
      title: `Stones ${formatMultiplier(stoneRpMult)}`,
      cost: stoneRpCost,
      pos: { x: 760, y: 760 },
      prereq: ['start'],
      purchased: false,
      canBuy: () => true,
      tooltip: `Infinite. More RP from spirit stones. Each buy adds +2×. Cost scales by 3×.`
    },
    {
      id: 'quest_drop',
      title: `Quest +${formatNumber(questDropPct)}%`,
      cost: questDropCost,
      pos: { x: 420, y: 760 },
      prereq: ['start'],
      purchased: false,
      canBuy: () => true,
      tooltip: `Infinite. +1% item drop chance for quest bonus drops per buy.`
    },
    {
      id: 'bias1',
      title: 'Bias I',
      cost: 5,
      pos: { x: 940, y: 160 },
      prereq: ['reroll'],
      purchased: u.bloodlineBias >= 0.10,
      canBuy: () => u.bloodlineBias < 0.10,
      apply: () => { u.bloodlineBias = Math.max(u.bloodlineBias, 0.10) }
    },
    {
      id: 'bias2',
      title: 'Bias II',
      cost: 12,
      pos: { x: 1100, y: 280 },
      prereq: ['bias1'],
      purchased: u.bloodlineBias >= 0.25,
      canBuy: () => u.bloodlineBias < 0.25,
      apply: () => { u.bloodlineBias = Math.max(u.bloodlineBias, 0.25) }
    },
    {
      id: 'bias3',
      title: 'Bias III',
      cost: 25,
      pos: { x: 980, y: 420 },
      prereq: ['bias2'],
      purchased: u.bloodlineBias >= 0.50,
      canBuy: () => u.bloodlineBias < 0.50,
      apply: () => { u.bloodlineBias = Math.max(u.bloodlineBias, 0.50) }
    },
    {
      id: 'min2',
      title: 'Min II',
      cost: 8,
      pos: { x: 400, y: 260 },
      prereq: ['start'],
      purchased: u.minRootCount >= 2,
      canBuy: () => u.minRootCount < 2,
      apply: () => {
        u.minRootCount = Math.max(u.minRootCount, 2)
        if (u.maxRootCount < u.minRootCount) u.maxRootCount = u.minRootCount
      }
    },
    {
      id: 'min3',
      title: 'Min III',
      cost: 16,
      pos: { x: 260, y: 140 },
      prereq: ['min2'],
      purchased: u.minRootCount >= 3,
      canBuy: () => u.minRootCount < 3,
      apply: () => {
        u.minRootCount = Math.max(u.minRootCount, 3)
        if (u.maxRootCount < u.minRootCount) u.maxRootCount = u.minRootCount
      }
    },
    {
      id: 'max6',
      title: 'Max VI',
      cost: 10,
      pos: { x: 400, y: 580 },
      prereq: ['start'],
      purchased: u.maxRootCount >= 6,
      canBuy: () => u.maxRootCount < 6,
      apply: () => { u.maxRootCount = Math.max(u.maxRootCount, 6) }
    },
    {
      id: 'max7',
      title: 'Max VII',
      cost: 18,
      pos: { x: 260, y: 700 },
      prereq: ['max6'],
      purchased: u.maxRootCount >= 7,
      canBuy: () => u.maxRootCount < 7,
      apply: () => { u.maxRootCount = Math.max(u.maxRootCount, 7) }
    },

    // Unlocks the ability to manually end a run (Settings panel) once fully upgraded.
    {
      id: 'reset',
      title: `Reset ${resetProgress}%`,
      cost: resetProgress >= 100 ? 0 : resetCost,
      pos: { x: 620, y: 660 },
      prereq: ['bias3', 'max7'],
      purchased: resetProgress >= 100,
      canBuy: () => resetProgress < 100,
      apply: () => { u.resetUnlockProgress = Math.max(u.resetUnlockProgress, resetNext) },
      tooltip: resetProgress >= 100
        ? 'Reset unlocked (100%).'
        : `Upgrade to ${resetNext}% (cost ${resetCost}).`
    },

    // Placeholder expansion nodes (no effects yet)
    { id: 'p_a1', title: 'A1', cost: 0, pos: { x: 160, y: 520 }, prereq: ['max6'], purchased: false },
    { id: 'p_a2', title: 'A2', cost: 0, pos: { x: 80, y: 640 }, prereq: ['p_a1'], purchased: false },
    { id: 'p_a3', title: 'A3', cost: 0, pos: { x: 120, y: 780 }, prereq: ['p_a2'], purchased: false },
    { id: 'p_b1', title: 'B1', cost: 0, pos: { x: 520, y: 720 }, prereq: ['max6'], purchased: false },
    { id: 'p_b2', title: 'B2', cost: 0, pos: { x: 660, y: 820 }, prereq: ['p_b1'], purchased: false },
    { id: 'p_b3', title: 'B3', cost: 0, pos: { x: 820, y: 720 }, prereq: ['p_b2'], purchased: false },
    { id: 'p_c1', title: 'C1', cost: 0, pos: { x: 920, y: 560 }, prereq: ['start'], purchased: false },
    { id: 'p_c2', title: 'C2', cost: 0, pos: { x: 1060, y: 660 }, prereq: ['p_c1'], purchased: false },
    { id: 'p_c3', title: 'C3', cost: 0, pos: { x: 1180, y: 520 }, prereq: ['p_c2'], purchased: false },
    { id: 'p_d1', title: 'D1', cost: 0, pos: { x: 720, y: 520 }, prereq: ['start'], purchased: false },
    { id: 'p_d2', title: 'D2', cost: 0, pos: { x: 820, y: 620 }, prereq: ['p_d1'], purchased: false },
    { id: 'p_d3', title: 'D3', cost: 0, pos: { x: 760, y: 740 }, prereq: ['p_d2'], purchased: false },
    { id: 'p_e1', title: 'E1', cost: 0, pos: { x: 520, y: 120 }, prereq: ['start'], purchased: false },
    { id: 'p_e2', title: 'E2', cost: 0, pos: { x: 620, y: 40 }, prereq: ['p_e1'], purchased: false },
    { id: 'p_e3', title: 'E3', cost: 0, pos: { x: 760, y: 60 }, prereq: ['p_e2'], purchased: false },
    { id: 'p_f1', title: 'F1', cost: 0, pos: { x: 1040, y: 40 }, prereq: ['bias1'], purchased: false },
    { id: 'p_f2', title: 'F2', cost: 0, pos: { x: 1200, y: 120 }, prereq: ['p_f1'], purchased: false },
    { id: 'p_f3', title: 'F3', cost: 0, pos: { x: 1340, y: 60 }, prereq: ['p_f2'], purchased: false },
    { id: 'p_g1', title: 'G1', cost: 0, pos: { x: 1180, y: 860 }, prereq: ['bias3'], purchased: false },
    { id: 'p_g2', title: 'G2', cost: 0, pos: { x: 1340, y: 760 }, prereq: ['p_g1'], purchased: false },
    { id: 'p_g3', title: 'G3', cost: 0, pos: { x: 1460, y: 860 }, prereq: ['p_g2'], purchased: false }
  ]

  const edges = [
    ['start', 'reroll'],
    ['start', 'qi_mult'],
    ['start', 'herb_speed'],
    ['start', 'herb_multi'],
    ['start', 'min_roots_plus'],
    ['start', 'root_luck'],
    ['start', 'max_roots_plus'],
    ['start', 'auto_gather'],
    ['start', 'auto_craft'],
    ['start', 'pill_speed'],
    ['start', 'str_mult'],
    ['start', 'hp_mult'],
    ['start', 'special_cd'],
    ['start', 'repeat_speed'],
    ['start', 'bloodline_luck'],
    ['start', 'multi_affinity_luck'],
    ['start', 'affinity_alignment'],
    ['start', 'story_luck'],
    ['start', 'spiritstone_rp'],
    ['start', 'quest_drop'],
    ['reroll', 'more_rerolls'],
    ['reroll', 'bias1'],
    ['bias1', 'bias2'],
    ['bias2', 'bias3'],
    ['start', 'min2'],
    ['min2', 'min3'],
    ['start', 'max6'],
    ['max6', 'max7'],

    ['bias3', 'reset'],
    ['max7', 'reset'],

    // Placeholder edges
    ['max6', 'p_a1'],
    ['p_a1', 'p_a2'],
    ['p_a2', 'p_a3'],
    ['max6', 'p_b1'],
    ['p_b1', 'p_b2'],
    ['p_b2', 'p_b3'],
    ['start', 'p_c1'],
    ['p_c1', 'p_c2'],
    ['p_c2', 'p_c3'],
    ['start', 'p_d1'],
    ['p_d1', 'p_d2'],
    ['p_d2', 'p_d3'],
    ['start', 'p_e1'],
    ['p_e1', 'p_e2'],
    ['p_e2', 'p_e3'],
    ['bias1', 'p_f1'],
    ['p_f1', 'p_f2'],
    ['p_f2', 'p_f3'],
    ['bias3', 'p_g1'],
    ['p_g1', 'p_g2'],
    ['p_g2', 'p_g3']
  ]

  const nodeById = Object.fromEntries(nodes.map(n => [n.id, n]))
  const isPurchased = (id) => Boolean(nodeById[id]?.purchased)
  const prereqsMet = (n) => (Array.isArray(n.prereq) ? n.prereq : []).every(isPurchased)
  const canAfford = (n) => pts >= clampNonNegativeInt(n.cost)

  const canvasW = 1600
  const canvasH = 980

  const nodeSize = 56
  const nodeR = nodeSize / 2

  const lines = edges.map(([a, b]) => {
    const na = nodeById[a]
    const nb = nodeById[b]
    if (!na || !nb) return ''
    const x1 = na.pos.x + nodeR
    const y1 = na.pos.y + nodeR
    const x2 = nb.pos.x + nodeR
    const y2 = nb.pos.y + nodeR
    const active = isPurchased(b) && prereqsMet(nb)
    return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" class="rebirth-tree-line ${active ? 'active' : ''}" />`
  }).join('')

  const nodeHtml = nodes.map(n => {
    const purchased = Boolean(n.purchased)
    const locked = !prereqsMet(n)
    const afford = canAfford(n)
    const canBuy = typeof n.canBuy === 'function' ? Boolean(n.canBuy()) : !purchased
    const clickable = true
    const onclick = `window.openRebirthNodeModal(${JSON.stringify(String(n.id))})`
    const tip = String(n.tooltip || n.title || '')
    const iconSrc = escapeHtml(String(getRebirthNodeIconSrc(n.id) || ''))
    return `
      <button
        class="rebirth-node ${purchased ? 'purchased' : ''} ${locked ? 'locked' : ''} ${(!locked && !purchased && afford && canBuy) ? 'available' : ''}"
        style="left:${n.pos.x}px; top:${n.pos.y}px; width:${nodeSize}px; height:${nodeSize}px;"
        ${clickable ? `onclick="${escapeHtml(onclick)}"` : ''}
        title="${escapeHtml(tip)}"
        type="button"
      >
        <img class="rebirth-node-icon" src="${iconSrc}" alt="" />
        <div class="rebirth-node-label">${escapeHtml(String(n.title || ''))}</div>
      </button>
    `.trim()
  }).join('')

  return `
    <div class="rebirth-shop-header">
      <div class="rebirth-shop-points">Rebirth Points: <span class="rebirth-shop-points-value">${formatNumber(pts)}</span></div>
      <div class="rebirth-shop-sub">Choose nodes to unlock permanent fate blessings.</div>
    </div>
    <div class="rebirth-tree-scroll">
      <div class="rebirth-tree-canvas" style="width:${canvasW}px; height:${canvasH}px;">
        <svg class="rebirth-tree-lines" width="${canvasW}" height="${canvasH}" viewBox="0 0 ${canvasW} ${canvasH}" aria-hidden="true">
          ${lines}
        </svg>
        ${nodeHtml}
      </div>
    </div>
  `.trim()
}

function ensureRebirthTreePanHandlers() {
  const el = document.querySelector('#shop-panel .rebirth-tree-scroll')
  if (!el) return

  // Restore last known scroll position (render() rebuilds the shop panel DOM).
  try {
    if (!state.rebirthTreeScroll || typeof state.rebirthTreeScroll !== 'object') {
      state.rebirthTreeScroll = { left: 0, top: 0 }
    }
    const wantL = clampNonNegativeInt(state.rebirthTreeScroll.left)
    const wantT = clampNonNegativeInt(state.rebirthTreeScroll.top)
    // Only force on first bind per element; after that the user can scroll normally.
    if (el.dataset && el.dataset.panRestored !== '1') {
      el.scrollLeft = wantL
      el.scrollTop = wantT
      el.dataset.panRestored = '1'
    }
  } catch (_) {}

  if (el.dataset && el.dataset.panBound === '1') return
  if (el.dataset) el.dataset.panBound = '1'

  let dragging = false
  let startX = 0
  let startY = 0
  let startScrollLeft = 0
  let startScrollTop = 0

  const onDown = (ev) => {
    // Only pan when dragging on the empty canvas area.
    if (ev && ev.button !== undefined && ev.button !== 0) return
    const target = ev?.target
    if (target && (target.closest && target.closest('.rebirth-node'))) return
    dragging = true
    startX = ev.clientX
    startY = ev.clientY
    startScrollLeft = el.scrollLeft
    startScrollTop = el.scrollTop
    el.classList.add('is-panning')
    try { el.setPointerCapture(ev.pointerId) } catch (_) {}
    ev.preventDefault()
  }

  const onMove = (ev) => {
    if (!dragging) return
    const dx = ev.clientX - startX
    const dy = ev.clientY - startY
    el.scrollLeft = startScrollLeft - dx
    el.scrollTop = startScrollTop - dy
    try {
      if (!state.rebirthTreeScroll || typeof state.rebirthTreeScroll !== 'object') state.rebirthTreeScroll = { left: 0, top: 0 }
      state.rebirthTreeScroll.left = clampNonNegativeInt(el.scrollLeft)
      state.rebirthTreeScroll.top = clampNonNegativeInt(el.scrollTop)
    } catch (_) {}
    ev.preventDefault()
  }

  const onScroll = () => {
    try {
      if (!state.rebirthTreeScroll || typeof state.rebirthTreeScroll !== 'object') state.rebirthTreeScroll = { left: 0, top: 0 }
      state.rebirthTreeScroll.left = clampNonNegativeInt(el.scrollLeft)
      state.rebirthTreeScroll.top = clampNonNegativeInt(el.scrollTop)
    } catch (_) {}
  }

  const end = () => {
    dragging = false
    el.classList.remove('is-panning')
  }

  el.addEventListener('pointerdown', onDown)
  el.addEventListener('pointermove', onMove)
  el.addEventListener('pointerup', end)
  el.addEventListener('pointercancel', end)
  el.addEventListener('pointerleave', end)
  el.addEventListener('scroll', onScroll, { passive: true })
}

window.buyRebirthNode = (nodeId) => {
  const id = String(nodeId || '')
  if (!id) return

  const pts = clampNonNegativeInt(state.rebirthPoints || 0)
  const u = normalizeRebirthUpgrades(state.rebirthUpgrades)

  const qiLvl = clampNonNegativeInt(u.qiMultiplierLevel)
  const qiCost = Math.max(1, Math.ceil(1 * Math.pow(1.5, qiLvl)))

  const herbSpeedLvl = clampNonNegativeInt(u.herbGatherSpeedLevel)
  const herbSpeedCost = getRebirthInfiniteNodeCost(herbSpeedLvl)

  const herbMultiLvl = clampNonNegativeInt(u.herbMultiGatherLevel)
  const herbMultiCost = getRebirthInfiniteNodeCost(herbMultiLvl)

  const autoGatherLvl = clampNonNegativeInt(u.autoGatherLevel)
  const autoGatherCost = getRebirthInfiniteNodeCost(autoGatherLvl)

  const autoCraftLvl = clampNonNegativeInt(u.autoCraftLevel)
  const autoCraftCost = getRebirthInfiniteNodeCost(autoCraftLvl)

  const pillSpeedLvl = clampNonNegativeInt(u.pillCraftSpeedLevel)
  const pillSpeedCost = getRebirthInfiniteNodeCost(pillSpeedLvl)

  const strLvl = clampNonNegativeInt(u.strengthMultiplierLevel)
  const strCost = getRebirthInfiniteNodeCost(strLvl)

  const hpLvl = clampNonNegativeInt(u.healthMultiplierLevel)
  const hpCost = getRebirthInfiniteNodeCost(hpLvl)

  const specialLvl = clampNonNegativeInt(u.specialCooldownLevel)
  const specialCost = getRebirthInfiniteNodeCost(specialLvl)

  const repeatLvl = clampNonNegativeInt(u.repeatableSpeedLevel)
  const repeatCost = getRebirthInfiniteNodeCost(repeatLvl)

  const minRootsLvl = clampNonNegativeInt(u.minRootBonusLevel)
  const minRootsCost = getRebirthInfiniteNodeCost(minRootsLvl)

  const rootLuckLvl = clampNonNegativeInt(u.rootLuckLevel)
  const rootLuckCost = getRebirthInfiniteNodeCost(rootLuckLvl)

  const maxRootsBonusLvl = clampNonNegativeInt(u.maxRootBonusLevel)
  const maxRootsBonusCost = getRebirthInfiniteNodeCost(maxRootsBonusLvl)

  const moreRerollsLvl = clampNonNegativeInt(u.extraRerollsLevel)
  const moreRerollsCost = getRebirthInfiniteNodeCost(moreRerollsLvl)

  const bloodlineLuckLvl = clampNonNegativeInt(u.bloodlineLuckLevel)
  const bloodlineLuckCost = getRebirthInfiniteNodeCost(bloodlineLuckLvl)

  const multiAffinityLuckLvl = clampNonNegativeInt(u.multiAffinityLuckLevel)
  const multiAffinityLuckCost = getRebirthInfiniteNodeCost(multiAffinityLuckLvl)

  const alignLuckLvl = clampNonNegativeInt(u.affinityAlignmentLuckLevel)
  const alignLuckCost = getRebirthInfiniteNodeCost(alignLuckLvl)

  const storyLuckLvl = clampNonNegativeInt(u.storyLuckLuckLevel)
  const storyLuckCost = getRebirthInfiniteNodeCost(storyLuckLvl)

  const stoneRpLvl = clampNonNegativeInt(u.spiritStoneRpMultLevel)
  const stoneRpCost = getRebirthInfiniteNodeCost(stoneRpLvl, 3)

  const questDropLvl = clampNonNegativeInt(u.questDropChanceLevel)
  const questDropCost = getRebirthInfiniteNodeCost(questDropLvl)

  // Define the same effects as renderRebirthTreeHtml(), in a minimal map.
  const effects = {
    qi_mult: {
      cost: qiCost,
      canBuy: () => true,
      apply: () => { u.qiMultiplierLevel = Math.max(0, qiLvl + 1) }
    },
    herb_speed: {
      cost: herbSpeedCost,
      canBuy: () => true,
      apply: () => { u.herbGatherSpeedLevel = Math.max(0, herbSpeedLvl + 1) }
    },
    herb_multi: {
      cost: herbMultiCost,
      canBuy: () => true,
      apply: () => { u.herbMultiGatherLevel = Math.max(0, herbMultiLvl + 1) }
    },
    auto_gather: {
      cost: autoGatherCost,
      canBuy: () => true,
      apply: () => { u.autoGatherLevel = Math.max(0, autoGatherLvl + 1) }
    },
    auto_craft: {
      cost: autoCraftCost,
      canBuy: () => true,
      apply: () => { u.autoCraftLevel = Math.max(0, autoCraftLvl + 1) }
    },
    pill_speed: {
      cost: pillSpeedCost,
      canBuy: () => true,
      apply: () => { u.pillCraftSpeedLevel = Math.max(0, pillSpeedLvl + 1) }
    },
    str_mult: {
      cost: strCost,
      canBuy: () => true,
      apply: () => { u.strengthMultiplierLevel = Math.max(0, strLvl + 1) }
    },
    hp_mult: {
      cost: hpCost,
      canBuy: () => true,
      apply: () => { u.healthMultiplierLevel = Math.max(0, hpLvl + 1) }
    },
    special_cd: {
      cost: specialCost,
      canBuy: () => true,
      apply: () => { u.specialCooldownLevel = Math.max(0, specialLvl + 1) }
    },
    repeat_speed: {
      cost: repeatCost,
      canBuy: () => true,
      apply: () => { u.repeatableSpeedLevel = Math.max(0, repeatLvl + 1) }
    },
    min_roots_plus: {
      cost: minRootsCost,
      canBuy: () => true,
      apply: () => { u.minRootBonusLevel = Math.max(0, minRootsLvl + 1) }
    },
    root_luck: {
      cost: rootLuckCost,
      canBuy: () => true,
      apply: () => { u.rootLuckLevel = Math.max(0, rootLuckLvl + 1) }
    },
    max_roots_plus: {
      cost: maxRootsBonusCost,
      canBuy: () => true,
      apply: () => { u.maxRootBonusLevel = Math.max(0, maxRootsBonusLvl + 1) }
    },
    more_rerolls: {
      cost: moreRerollsCost,
      canBuy: () => true,
      apply: () => {
        u.extraRerollsLevel = Math.max(0, moreRerollsLvl + 1)
        state.rerollsRemaining = clampNonNegativeInt(state.rerollsRemaining) + 1
      }
    },
    bloodline_luck: {
      cost: bloodlineLuckCost,
      canBuy: () => true,
      apply: () => { u.bloodlineLuckLevel = Math.max(0, bloodlineLuckLvl + 1) }
    },
    multi_affinity_luck: {
      cost: multiAffinityLuckCost,
      canBuy: () => true,
      apply: () => { u.multiAffinityLuckLevel = Math.max(0, multiAffinityLuckLvl + 1) }
    },
    affinity_alignment: {
      cost: alignLuckCost,
      canBuy: () => true,
      apply: () => { u.affinityAlignmentLuckLevel = Math.max(0, alignLuckLvl + 1) }
    },
    story_luck: {
      cost: storyLuckCost,
      canBuy: () => true,
      apply: () => { u.storyLuckLuckLevel = Math.max(0, storyLuckLvl + 1) }
    },
    spiritstone_rp: {
      cost: stoneRpCost,
      canBuy: () => true,
      apply: () => { u.spiritStoneRpMultLevel = Math.max(0, stoneRpLvl + 1) }
    },
    quest_drop: {
      cost: questDropCost,
      canBuy: () => true,
      apply: () => { u.questDropChanceLevel = Math.max(0, questDropLvl + 1) }
    },
    reroll: { cost: 20, canBuy: () => !u.canRerollFate, apply: () => { u.canRerollFate = true } },
    bias1: { cost: 5, canBuy: () => u.bloodlineBias < 0.10, apply: () => { u.bloodlineBias = Math.max(u.bloodlineBias, 0.10) } },
    bias2: { cost: 12, canBuy: () => u.bloodlineBias < 0.25, apply: () => { u.bloodlineBias = Math.max(u.bloodlineBias, 0.25) } },
    bias3: { cost: 25, canBuy: () => u.bloodlineBias < 0.50, apply: () => { u.bloodlineBias = Math.max(u.bloodlineBias, 0.50) } },
    min2: { cost: 8, canBuy: () => u.minRootCount < 2, apply: () => { u.minRootCount = Math.max(u.minRootCount, 2); if (u.maxRootCount < u.minRootCount) u.maxRootCount = u.minRootCount } },
    min3: { cost: 16, canBuy: () => u.minRootCount < 3, apply: () => { u.minRootCount = Math.max(u.minRootCount, 3); if (u.maxRootCount < u.minRootCount) u.maxRootCount = u.minRootCount } },
    max6: { cost: 10, canBuy: () => u.maxRootCount < 6, apply: () => { u.maxRootCount = Math.max(u.maxRootCount, 6) } },
    max7: { cost: 18, canBuy: () => u.maxRootCount < 7, apply: () => { u.maxRootCount = Math.max(u.maxRootCount, 7) } },
    reset: {
      cost: (u.resetUnlockProgress >= 100) ? 0 : 5,
      canBuy: () => u.resetUnlockProgress < 100,
      apply: () => {
        const cur = clampNonNegativeInt(u.resetUnlockProgress)
        const next = Math.min(100, cur + 10)
        u.resetUnlockProgress = Math.max(cur, next)
      }
    }
  }

  const prereq = {
    qi_mult: ['start'],
    herb_speed: ['start'],
    herb_multi: ['start'],
    auto_gather: ['start'],
    auto_craft: ['start'],
    pill_speed: ['start'],
    str_mult: ['start'],
    hp_mult: ['start'],
    special_cd: ['start'],
    repeat_speed: ['start'],
    min_roots_plus: ['start'],
    root_luck: ['start'],
    max_roots_plus: ['start'],
    more_rerolls: ['reroll'],
    bloodline_luck: ['start'],
    multi_affinity_luck: ['start'],
    affinity_alignment: ['start'],
    story_luck: ['start'],
    spiritstone_rp: ['start'],
    quest_drop: ['start'],
    reroll: ['start'],
    bias1: ['reroll'],
    bias2: ['bias1'],
    bias3: ['bias2'],
    min2: ['start'],
    min3: ['min2'],
    max6: ['start'],
    max7: ['max6'],
    reset: ['bias3', 'max7']
  }

  const purchased = {
    start: true,
    qi_mult: false,
    herb_speed: false,
    herb_multi: false,
    auto_gather: false,
    auto_craft: false,
    pill_speed: false,
    str_mult: false,
    hp_mult: false,
    special_cd: false,
    repeat_speed: false,
    min_roots_plus: false,
    root_luck: false,
    max_roots_plus: false,
    more_rerolls: false,
    bloodline_luck: false,
    multi_affinity_luck: false,
    affinity_alignment: false,
    story_luck: false,
    spiritstone_rp: false,
    quest_drop: false,
    reroll: Boolean(u.canRerollFate),
    bias1: u.bloodlineBias >= 0.10,
    bias2: u.bloodlineBias >= 0.25,
    bias3: u.bloodlineBias >= 0.50,
    min2: u.minRootCount >= 2,
    min3: u.minRootCount >= 3,
    max6: u.maxRootCount >= 6,
    max7: u.maxRootCount >= 7,
    reset: clampNonNegativeInt(u.resetUnlockProgress) >= 100
  }

  const reqs = Array.isArray(prereq[id]) ? prereq[id] : []
  const prereqsMet = reqs.every(r => Boolean(purchased[r]))
  if (!prereqsMet) return

  const eff = effects[id]
  if (!eff) return
  const cost = clampNonNegativeInt(eff.cost)
  if (cost <= 0) return
  if (pts < cost) return
  if (typeof eff.canBuy === 'function' && !eff.canBuy()) return

  try { playSfx('rebirth') } catch (_) {}

  state.rebirthPoints = pts - cost
  try { eff.apply?.() } catch (_) {}
  state.rebirthUpgrades = normalizeRebirthUpgrades(u)
  try { saveMeta() } catch (_) {}
  try { saveGame() } catch (_) {}
  render()
}

function updateShopCountdownTextsInPlace() {
  try { ensureShopsInitialized() } catch (_) { return }
  const now = Date.now()

  const span = document.querySelector('#shop-panel [data-testid="shop-reset"]')
  if (!span) return

  const kind = (state.shopTab === 'hour') ? 'hour' : 'town'
  const resetAt = kind === 'hour' ? state.shops?.hour?.resetAt : state.shops?.town?.resetAt
  const remaining = Math.max(0, clampNonNegativeMs(resetAt) - now)
  span.textContent = formatCountdown(remaining)
}

window.setShopTab = (tab) => {
  const t = String(tab || '')
  if (t !== 'town' && t !== 'hour' && t !== 'rebirth') return
  state.shopTab = t
  render()
  saveGame()
}

function renderShopPanel() {
  ensureShopsInitialized()
  if (state.shopTab !== 'town' && state.shopTab !== 'hour' && state.shopTab !== 'rebirth') state.shopTab = 'town'

  let panel = document.getElementById('shop-panel')
  const isNewPanel = !panel

  if (!panel) {
    panel = document.createElement('div')
    panel.id = 'shop-panel'
    panel.className = 'shop-panel draggable-panel'

    applySavedPanelSize(panel, 'shop')
    getSidePanelsMount().appendChild(panel)
    attachPanelResizePersistence(panel, 'shop')

    const pos = state.panelPositions?.shop
    if (pos && (pos.x !== 0 || pos.y !== 0)) {
      panel.style.transform = `translate(${pos.x}px, ${pos.y}px)`
    }
  }

  const active = state.shopTab

  panel.innerHTML = `
    <div class="panel-header" onmousedown="window.startDrag(event, 'shop-panel')">
      <h3>${renderUiIcon('shop', { title: 'Shop' })} Shop</h3>
      <span class="drag-hint">✥ Drag to move ✥</span>
    </div>
    <div class="panel-content">
      <div class="shop-tabs">
        <button class="shop-tab-btn ${active === 'town' ? 'active' : ''}" onclick="window.setShopTab('town')">DAILY SHOP</button>
        <button class="shop-tab-btn ${active === 'hour' ? 'active' : ''}" onclick="window.setShopTab('hour')">HOURLY SHOP</button>
        <button class="shop-tab-btn ${active === 'rebirth' ? 'active' : ''}" onclick="window.setShopTab('rebirth')">REBIRTH TREE</button>
      </div>
      ${active === 'rebirth' ? renderRebirthTreeHtml() : renderShopPanelOffersHtml(active)}
    </div>
  `

  if (active === 'rebirth') {
    try { ensureRebirthTreePanHandlers() } catch (_) {}
  }

  if (isNewPanel) {
    // Panel was just created
  }
}

window.startQuestFromPanel = () => startQuest()
window.questCombatRush = () => startQuestCombat('rush')
window.questCombatRetreat = () => startQuestCombat('retreat')

// ============================================================================
// COMBAT SYSTEM
// ============================================================================
function formatCooldownMs(ms) {
  const v = Math.max(0, Number(ms) || 0)
  if (v <= 0) return ''
  const s = v / 1000
  const rounded = Math.ceil(s * 10) / 10
  return `${rounded.toFixed(1)}s`
}

function getPlayerMoveCooldownMs(moveId) {
  const id = String(moveId || '')
  if (id.startsWith('manual:')) {
    const key = `manual_${id.slice('manual:'.length).replace(/\s+/g, '_')}`
    return clampNonNegativeNumber(state.playerCooldowns?.[key])
  }
  return clampNonNegativeNumber(state.playerCooldowns?.[id])
}

function isPlayerMoveDisabled(moveId) {
  const id = String(moveId || '')
  if (!state.inCombat || !state.enemy) return true
  if (getPlayerMoveCooldownMs(id) > 0) return true

  if (id === 'qiBlast') {
    return !isQiBlastUnlocked()
  }

  if (id.startsWith('manual:')) {
    const name = id.slice('manual:'.length)
    const move = getAvailableManualMoves().find(m => m.name === name)
    return !move
  }

  return false
}

function getMoveCombatPreview(moveId) {
  const id = String(moveId || '')
  if (!id) return null
  const strength = clampNonNegativeNumber(state.strength)

  if (BASIC_MOVES[id]) {
    const move = BASIC_MOVES[id]
    const damage = Math.floor(strength * clampNonNegativeNumber(move.damageMult))
    return { damage, qiCost: 0 }
  }

  if (id === 'qiBlast') {
    if (!isQiBlastUnlocked()) return null
    const move = QI_BLAST_MOVE
    const damage = Math.floor(strength * clampNonNegativeNumber(move.damageMult))
    return { damage, qiCost: 0 }
  }

  if (id.startsWith('manual:')) {
    const name = id.slice('manual:'.length)
    const move = getAvailableManualMoves().find(m => m.name === name)
    if (!move) return null
    const equippedType = getEquippedManualType()
    const affinityBonus = equippedType ? getAffinityBonus(equippedType) : 0
    const baseDamage = strength * clampNonNegativeNumber(move.damage)
    const damage = Math.floor(baseDamage * (1 + affinityBonus))
    return { damage, qiCost: 0 }
  }

  return null
}

window.useEquippedMove = (slotIndex) => {
  const idx = Math.floor(Number(slotIndex))
  if (!Number.isFinite(idx) || idx < 0 || idx > 2) return
  const moveId = String((Array.isArray(state.equippedMoves) ? state.equippedMoves[idx] : 'punch') || 'punch')
  window.useCombatMove(moveId)
}

window.useCombatMove = (moveId) => {
  if (!state.inCombat || !state.enemy) return
  const id = String(moveId || '')
  if (!id) return
  if (isPlayerMoveDisabled(id)) return

  try { playSfx('hit') } catch (_) {}

  const enemy = state.enemy
  performPlayerMove(id, enemy)

  if (enemy.health <= 0) {
    const defeatedName = enemy.name
    log(`${enemy.name} defeated!`)
    endCombatVictory(defeatedName)
    return
  }

  render()
  saveGame()
}

function performPlayerMove(moveId, enemy) {
  const id = String(moveId || '')
  if (!enemy) return

  if (BASIC_MOVES[id]) {
    const move = BASIC_MOVES[id]
    const damage = Math.floor(clampNonNegativeNumber(state.strength) * move.damageMult)
    enemy.health = Math.max(0, clampNonNegativeNumber(enemy.health) - damage)
    state.playerCooldowns[id] = move.cooldownMs
    log(`You use ${move.name}! ${damage} damage!`)
    return
  }

  if (id === 'qiBlast') {
    if (!isQiBlastUnlocked()) return
    const move = QI_BLAST_MOVE
    const damage = Math.floor(clampNonNegativeNumber(state.strength) * move.damageMult)
    enemy.health = Math.max(0, clampNonNegativeNumber(enemy.health) - damage)
    state.playerCooldowns[id] = move.cooldownMs
    log(`You use ${getMoveDisplayName('qiBlast')}! ${damage} damage!`)
    return
  }

  if (id.startsWith('manual:')) {
    const name = id.slice('manual:'.length)
    const move = getAvailableManualMoves().find(m => m.name === name)
    if (!move) return

    const equippedType = getEquippedManualType()
    const affinityBonus = equippedType ? getAffinityBonus(equippedType) : 0
    const baseDamage = clampNonNegativeNumber(state.strength) * clampNonNegativeNumber(move.damage)
    const damage = Math.floor(baseDamage * (1 + affinityBonus))

    enemy.health = Math.max(0, clampNonNegativeNumber(enemy.health) - damage)
    const cooldownKey = `manual_${move.name.replace(/\s+/g, '_')}`
    state.playerCooldowns[cooldownKey] = clampNonNegativeNumber(move.cooldown) * 1000

    log(`You use ${move.name}! ${damage} damage!`)
    if (affinityBonus > 0) {
      log(`Affinity bonus: +${Math.floor(affinityBonus * 100)}%`)
    }

    // Manual specials (kept intentionally simple but meaningful):
    // - heal: heal 20% max HP
    // - lifesteal: heal 30% of dealt damage
    // - dot: apply 3 ticks of damage over time
    // - stun: delay enemy action once
    // - slow: increase enemy cadence briefly
    // - dodge: grant a single high-chance dodge
    const special = String(move.special || '')
    if (special === 'heal') {
      const healAmount = Math.floor(clampNonNegativeNumber(state.maxHealth) * 0.2)
      state.health = Math.min(clampNonNegativeNumber(state.maxHealth), clampNonNegativeNumber(state.health) + healAmount)
      log(`You heal for ${healAmount} HP.`)
    } else if (special === 'lifesteal') {
      const healAmount = Math.floor(damage * 0.3)
      state.health = Math.min(clampNonNegativeNumber(state.maxHealth), clampNonNegativeNumber(state.health) + healAmount)
      log(`You steal ${healAmount} HP.`)
    } else {
      try { ensureCombatRuntimeState() } catch (_) {}

      if (special === 'dot') {
        if (!enemy.effects || typeof enemy.effects !== 'object') enemy.effects = {}
        const tickDmg = Math.max(1, Math.floor(damage * 0.12))
        const addTicks = 3
        enemy.effects.dotDamage = Math.max(clampNonNegativeInt(enemy.effects.dotDamage), tickDmg)
        enemy.effects.dotTicks = clampNonNegativeInt(enemy.effects.dotTicks) + addTicks
        enemy.effects.nextDotAt = performance.now() + 1000
        log('A lingering toxin gnaws at the enemy.')
      } else if (special === 'stun') {
        if (!enemy.effects || typeof enemy.effects !== 'object') enemy.effects = {}
        const until = performance.now() + ENEMY_ACTION_GAP_MS
        enemy.effects.stunnedUntil = Math.max(clampNonNegativeNumber(enemy.effects.stunnedUntil), until)
        log('The enemy is stunned.')
      } else if (special === 'slow') {
        if (!enemy.effects || typeof enemy.effects !== 'object') enemy.effects = {}
        const until = performance.now() + (ENEMY_ACTION_GAP_MS * 2)
        enemy.effects.slowUntil = Math.max(clampNonNegativeNumber(enemy.effects.slowUntil), until)
        log('The enemy is slowed.')
      } else if (special === 'dodge') {
        if (!state.combatFx || typeof state.combatFx !== 'object') state.combatFx = {}
        state.combatFx.dodgeCharges = Math.max(1, clampNonNegativeInt(state.combatFx.dodgeCharges))
        state.combatFx.dodgeChance = Math.max(clampNonNegativeNumber(state.combatFx.dodgeChance), 0.7)
        log('You feel light on your feet.')
      }
    }
    return
  }
}

let _combatLoopTimer = null
let _combatLoopLast = 0
let _combatUiNextRenderAt = 0
const COMBAT_UI_RENDER_INTERVAL_MS = 320
const ENEMY_ACTION_GAP_MS = 3000

function ensureCombatRuntimeState() {
  // Runtime-only combat state (safe if persisted; cleared naturally when combat ends).
  if (!state.combatFx || typeof state.combatFx !== 'object') state.combatFx = {}
  if (!Number.isFinite(state.combatFx.dodgeCharges) || state.combatFx.dodgeCharges < 0) state.combatFx.dodgeCharges = 0
  if (!Number.isFinite(state.combatFx.dodgeChance) || state.combatFx.dodgeChance < 0) state.combatFx.dodgeChance = 0

  const enemy = state.enemy
  if (enemy && (!enemy.effects || typeof enemy.effects !== 'object')) enemy.effects = {}
  if (enemy && enemy.effects) {
    if (!Number.isFinite(enemy.effects.dotDamage) || enemy.effects.dotDamage < 0) enemy.effects.dotDamage = 0
    if (!Number.isFinite(enemy.effects.dotTicks) || enemy.effects.dotTicks < 0) enemy.effects.dotTicks = 0
    if (!Number.isFinite(enemy.effects.nextDotAt) || enemy.effects.nextDotAt < 0) enemy.effects.nextDotAt = 0
    if (!Number.isFinite(enemy.effects.stunnedUntil) || enemy.effects.stunnedUntil < 0) enemy.effects.stunnedUntil = 0
    if (!Number.isFinite(enemy.effects.slowUntil) || enemy.effects.slowUntil < 0) enemy.effects.slowUntil = 0
  }
}

function applyEnemyEffects(now = performance.now()) {
  const enemy = state.enemy
  if (!enemy || enemy.health <= 0) return
  if (!enemy.effects || typeof enemy.effects !== 'object') return

  // DOT tick
  const ticks = clampNonNegativeInt(enemy.effects.dotTicks)
  const dmg = clampNonNegativeInt(enemy.effects.dotDamage)
  const next = clampNonNegativeNumber(enemy.effects.nextDotAt)
  if (ticks > 0 && dmg > 0 && now >= next) {
    enemy.health = Math.max(0, clampNonNegativeInt(enemy.health) - dmg)
    enemy.effects.dotTicks = Math.max(0, ticks - 1)
    enemy.effects.nextDotAt = now + 1000
    log(`${String(enemy.name || 'Enemy')} suffers ${dmg} damage over time.`)
  }
}

function ensureCombatLoop() {
  const shouldRun = Boolean(state.inCombat && state.phase === 'COMBAT' && state.enemy)
  if (!shouldRun) {
    if (_combatLoopTimer) {
      clearInterval(_combatLoopTimer)
      _combatLoopTimer = null
      _combatLoopLast = 0
      _combatUiNextRenderAt = 0
    }
    return
  }
  if (_combatLoopTimer) return
  try { ensureCombatRuntimeState() } catch (_) {}
  // Add an initial grace period so the enemy doesn't act instantly on combat entry.
  try {
    const enemy = state.enemy
    if (enemy && (!Number.isFinite(enemy.nextActionAt) || enemy.nextActionAt <= 0)) {
      enemy.nextActionAt = performance.now() + ENEMY_ACTION_GAP_MS
    }
  } catch (_) {}

  _combatLoopLast = performance.now()
  _combatLoopTimer = setInterval(() => {
    combatTick()
  }, 100)

  // Render immediately, but keep enemy actions gated by ENEMY_ACTION_GAP_MS.
  combatTick(true)
}

function combatTick(force = false) {
  if (!state.inCombat || state.phase !== 'COMBAT' || !state.enemy) {
    ensureCombatLoop()
    return
  }

  const now = performance.now()
  const deltaMs = force ? 0 : Math.max(0, now - _combatLoopLast)
  _combatLoopLast = now

  try { ensureCombatRuntimeState() } catch (_) {}
  applyEnemyEffects(now)

  // Tick down player cooldowns (ms)
  if (state.playerCooldowns && typeof state.playerCooldowns === 'object') {
    for (const key of Object.keys(state.playerCooldowns)) {
      const v = Number(state.playerCooldowns[key])
      if (!Number.isFinite(v) || v <= 0) {
        state.playerCooldowns[key] = 0
        continue
      }
      state.playerCooldowns[key] = Math.max(0, v - deltaMs)
    }
  }

  // Tick down enemy cooldowns (ms)
  if (!state.enemy.cooldowns || typeof state.enemy.cooldowns !== 'object') {
    state.enemy.cooldowns = { punch: 0, superPunch: 0, qiBlast: 0 }
  }
  for (const key of Object.keys(state.enemy.cooldowns)) {
    const v = Number(state.enemy.cooldowns[key])
    if (!Number.isFinite(v) || v <= 0) {
      state.enemy.cooldowns[key] = 0
      continue
    }
    state.enemy.cooldowns[key] = Math.max(0, v - deltaMs)
  }

  enemyAutoAct(now)

  // Throttle combat UI renders to avoid jitter/missed clicks.
  if (force || now >= _combatUiNextRenderAt) {
    _combatUiNextRenderAt = now + COMBAT_UI_RENDER_INTERVAL_MS
    render()
  }
}

function enemyAutoAct(now = performance.now()) {
  if (!state.inCombat || !state.enemy) return
  const enemy = state.enemy
  if (enemy.health <= 0) return
  if (clampNonNegativeNumber(state.health) <= 0) return

  try { ensureCombatRuntimeState() } catch (_) {}

  // Stun blocks actions until it expires.
  const stunUntil = clampNonNegativeNumber(enemy.effects?.stunnedUntil)
  if (stunUntil && now < stunUntil) {
    // Push the cadence forward so the enemy doesn't immediately act after stun.
    enemy.nextActionAt = Math.max(clampNonNegativeNumber(enemy.nextActionAt), stunUntil)
    return
  }

  // Global AI cadence: enemy can only act once every ENEMY_ACTION_GAP_MS.
  const nextAt = Number(enemy.nextActionAt)
  if (Number.isFinite(nextAt) && now < nextAt) return

  const cd = enemy.cooldowns || { punch: 0, superPunch: 0, qiBlast: 0 }
  const pick = (cd.punch <= 0) ? 'punch'
    : (cd.superPunch <= 0) ? 'superPunch'
      : (cd.qiBlast <= 0) ? 'qiBlast'
        : null
  if (!pick) return

  const move = BASIC_MOVES[pick]
  const resolvedMove = move || (pick === 'qiBlast' ? QI_BLAST_MOVE : null)
  if (!resolvedMove) return
  const damage = Math.floor(clampNonNegativeNumber(enemy.strength) * resolvedMove.damageMult)

  // Player dodge (single-use): consume on success.
  const charges = clampNonNegativeInt(state.combatFx?.dodgeCharges)
  const chance = clampNonNegativeNumber(state.combatFx?.dodgeChance)
  const dodged = (charges > 0) && (Math.random() < Math.max(0.05, Math.min(0.9, chance)))

  if (dodged) {
    state.combatFx.dodgeCharges = Math.max(0, charges - 1)
    log('You dodge the attack!')
  } else {
    state.health = Math.max(0, clampNonNegativeNumber(state.health) - damage)
  }

  enemy.cooldowns[pick] = resolvedMove.cooldownMs
  const slowUntil = clampNonNegativeNumber(enemy.effects?.slowUntil)
  const slowMult = (slowUntil && now < slowUntil) ? 1.6 : 1
  enemy.nextActionAt = now + (ENEMY_ACTION_GAP_MS * slowMult)

  if (!dodged) {
    log(`${enemy.name} uses ${resolvedMove.name}! ${damage} damage!`)
  } else {
    log(`${enemy.name} uses ${resolvedMove.name}!`)
  }

  if (state.health <= 0) {
    // Hard Mode: any defeat ends the run.
    if (state.hardMode) {
      state.health = 0
      state.inCombat = false
      state.enemy = null
      state.combatContext = null
      state.phase = state.questReturnPhase || 'FARMING'
      state.questReturnPhase = null
      ensureCombatLoop()
      log('💀 You have been defeated in Hard Mode. Your run ends.')
      window.endRunToRebirth()
      return
    }
    if (handleQuestCombatDefeat()) {
      return
    }
    if (handleCloudCoalitionWarCombatDefeat()) {
      return
    }
    if (handleCloudTriSectBossCombatDefeat()) {
      return
    }
    if (handleDemonCosmicFinaleCombatDefeat()) {
      return
    }
    if (handleCloudStoryCombatDefeat()) {
      state.phase = state.questReturnPhase || 'FARMING'
      state.questReturnPhase = null
      ensureCombatLoop()
      render()
      saveGame()
      return
    }
    if (handleHeavensImmortalGodCombatDefeat()) {
      return
    }
    // Generic defeat: clamp to 0, close combat, then restore to max after closing.
    state.health = 0
    state.inCombat = false
    state.enemy = null
    state.combatContext = null
    state.phase = state.questReturnPhase || 'FARMING'
    state.questReturnPhase = null
    ensureCombatLoop()
    log('You have been defeated...')
    render()
    saveGame()
    setTimeout(() => {
      state.health = clampNonNegativeInt(state.maxHealth)
      render()
      saveGame()
    }, 0)
  }
}

function endCombatVictory(defeatedName) {
  state.inCombat = false
  state.enemy = null
  try { handleQuestCombatVictory(defeatedName) } catch (_) {}
  try { handleSectRankCombatVictory(defeatedName) } catch (_) {}
  try { handleCloudCoalitionWarCombatVictory(defeatedName) } catch (_) {}
  try { handleCloudTriSectBossCombatVictory(defeatedName) } catch (_) {}
  try { handleDemonCosmicFinaleCombatVictory(defeatedName) } catch (_) {}
  try { handleCloudStoryCombatVictory(defeatedName) } catch (_) {}
  try { handleHeavensImmortalGodCombatVictory(defeatedName) } catch (_) {}
  // Winning restores you to full health.
  state.health = clampNonNegativeInt(state.maxHealth)
  state.phase = state.questReturnPhase || 'FARMING'
  state.questReturnPhase = null
  ensureCombatLoop()
  saveGame()
  render()
}

// Back-compat wrappers
window.attack = (attackType) => {
  window.useCombatMove(String(attackType || ''))
}

window.useManualMove = (moveName) => {
  window.useCombatMove(`manual:${String(moveName || '')}`)
}

function enemyTurn() {
  // Legacy stub: enemy is now handled by the combat loop.
}

function triggerRandomEncounter() {
  // Disabled: story branches beyond the current playable slice.
  return
}

// ============================================================================
// LOGGING
// ============================================================================
const logMessages = []

// Log scroll preservation across full screen re-renders.
// The log is rendered with newest entries at the top; users scroll down to read older entries.
let _lastLogScrollerEl = null
let _lastLogScrollTop = 0
let _lastLogScrollHeight = 0
let _lastLogPinnedToTop = true

function captureLogScrollState() {
  const logEl = document.getElementById('game-log')
  if (!logEl) return
  // `#game-log` is the content; the scrollable element is typically the `.log` wrapper.
  const scroller = logEl.closest('.log') || logEl.parentElement || logEl
  _lastLogScrollerEl = scroller
  _lastLogScrollTop = scroller.scrollTop
  _lastLogScrollHeight = scroller.scrollHeight
  _lastLogPinnedToTop = scroller.scrollTop <= 4
}

function log(message) {
  logMessages.push(message)
  if (logMessages.length > 50) logMessages.shift()
  renderLog()
}

function renderLog() {
  const logEl = document.getElementById('game-log')
  if (logEl) {
    const scroller = logEl.closest('.log') || logEl.parentElement || logEl

    const usingCaptured = scroller !== _lastLogScrollerEl
    const prevScrollTop = usingCaptured ? _lastLogScrollTop : scroller.scrollTop
    const prevScrollHeight = usingCaptured ? _lastLogScrollHeight : scroller.scrollHeight
    const wasPinnedToTop = usingCaptured ? _lastLogPinnedToTop : (prevScrollTop <= 4)

    logEl.innerHTML = logMessages.slice().reverse().map(m => `<div>${m}</div>`).join('')

    if (wasPinnedToTop) {
      scroller.scrollTop = 0
    } else {
      const newScrollHeight = scroller.scrollHeight
      scroller.scrollTop = prevScrollTop + (newScrollHeight - prevScrollHeight)
    }

    // Update captured state to the current element after rendering.
    _lastLogScrollerEl = scroller
    _lastLogScrollTop = scroller.scrollTop
    _lastLogScrollHeight = scroller.scrollHeight
    _lastLogPinnedToTop = scroller.scrollTop <= 4
  }
}

// ============================================================================
// COOLDOWN TICKER
// ============================================================================
setInterval(() => {
  let needsRender = false
  let needsSave = false

  const speed = state.devSpeed3x ? 3 : 1

  // Tick down player cooldowns (outside combat only; combat loop handles ms cooldowns during fights)
  if (!state.inCombat) {
    for (const key in state.playerCooldowns) {
      if (state.playerCooldowns[key] > 0) {
        state.playerCooldowns[key] = Math.max(0, clampNonNegativeNumber(state.playerCooldowns[key]) - (1000 * speed))
        needsRender = true
      }
    }
  }
  
  // Tick down village materials cooldown
  if (state.villageMaterialsCooldown > 0) {
    state.villageMaterialsCooldown = Math.max(0, state.villageMaterialsCooldown - speed)
    needsRender = true
  }

  // Tick down Cloud conquest repeatable cooldown
  if (state.searchingAndConqueringCooldown > 0) {
    state.searchingAndConqueringCooldown = Math.max(0, state.searchingAndConqueringCooldown - speed)
    needsRender = true
  }
  
  // Tick down encounter cooldown
  if (state.encounterCooldown > 0) {
    state.encounterCooldown = Math.max(0, state.encounterCooldown - speed)
  }
  
  // Regenerate stamina if resting
  if (state.isResting && state.stamina < state.maxStamina) {
    const restRate = state.dozeOffUnlocked ? 1.5 : 1
    state.stamina = Math.min(state.maxStamina, state.stamina + (restRate * speed))
    needsRender = true
    needsSave = true
    
    // Stop resting when full
    if (state.stamina >= state.maxStamina) {
      state.isResting = false
      log('Stamina fully restored!')
    }
  }

  // Cloud coalition war: start the next wave fight when ready.
  try {
    const started = tryStartNextCloudCoalitionBattleIfReady()
    if (started) {
      needsRender = true
      needsSave = true
    }
  } catch (_) {}
  
  // Generate Qi if cultivating
  if (state.isCultivating) {
    const nextCost = getNextCultivationCost()
    const hasQiCap = Boolean(nextCost && Number.isFinite(nextCost.cost) && nextCost.cost > 0)
    const atQiCap = hasQiCap && state.qi >= nextCost.cost

    if (atQiCap) {
      state.isCultivating = false
      log('Your Qi is capped for the next realm. Breakthrough/Advance to progress further.')
      needsRender = true
      needsSave = true
    } else
    if (!canCultivateNow()) {
      state.isCultivating = false
      const limit = splitYearsMonths(getCultivationAgeLimitMonths())
      log(`You can no longer cultivate past ${limit.years} years, ${limit.months} months.`)
      needsRender = true
      needsSave = true
    } else {
      state.ageMonths = clampNonNegativeInt(state.ageMonths) + 2 * speed

      const qiGained = calculateQiGain(speed)

      if (hasQiCap) {
        state.qi = Math.min(state.qi + qiGained, nextCost.cost)
      } else {
        state.qi += qiGained
      }
      needsRender = true
      needsSave = true

      // If this second of cultivation pushed you to the limit, stop immediately.
      if (!canCultivateNow()) {
        state.isCultivating = false
        const limit = splitYearsMonths(getCultivationAgeLimitMonths())
        log(`You can no longer cultivate past ${limit.years} years, ${limit.months} months.`)
        needsRender = true
        needsSave = true
      }
    }
  }

  // Business path passive income (income cycle every 5 seconds)
  if (state.isBusinessOriented) {
    const cycle = Number(state.businessCycleSeconds)
    const cycleSeconds = (Number.isFinite(cycle) && cycle > 0) ? cycle : 5
    const income = (state.businessIncomePerCycle && typeof state.businessIncomePerCycle === 'object')
      ? state.businessIncomePerCycle
      : { silver: 5, copper: 15, gold: 0 }

    state.incomeCycleSeconds = clampNonNegativeNumber(state.incomeCycleSeconds) + 1
    if (state.incomeCycleSeconds >= cycleSeconds) {
      const cycles = Math.floor(state.incomeCycleSeconds / cycleSeconds)
      state.incomeCycleSeconds = state.incomeCycleSeconds - cycles * cycleSeconds

      const silverAdd = clampNonNegativeInt(income.silver) * cycles
      const copperAdd = clampNonNegativeInt(income.copper) * cycles
      const goldAdd = clampNonNegativeInt(income.gold) * cycles
      const spiritLowAdd = clampNonNegativeInt(income.spiritStonesLow) * cycles

      if (silverAdd) state.silver = clampNonNegativeInt(state.silver) + silverAdd
      if (copperAdd) state.copper = clampNonNegativeInt(state.copper) + copperAdd
      if (goldAdd) state.gold = clampNonNegativeInt(state.gold) + goldAdd
      if (spiritLowAdd) state.spiritStonesLow = clampNonNegativeInt(state.spiritStonesLow) + spiritLowAdd

      if (silverAdd || copperAdd || goldAdd || spiritLowAdd) {
        needsRender = true
        needsSave = true
      }
    }
  }

  // Sect rank passive spirit-stone income (per minute)
  if (state.hasJoinedSect) {
    state.sectIncomeSeconds = clampNonNegativeInt(state.sectIncomeSeconds) + 1
    if (state.sectIncomeSeconds >= 60) {
      const minutes = Math.floor(state.sectIncomeSeconds / 60)
      state.sectIncomeSeconds = state.sectIncomeSeconds - minutes * 60

      const rate = getSectRankIncomePerMinute(state.sectRankLayer, state.sectRankNumber)
      const lowAdd = clampNonNegativeInt(rate.low) * minutes
      const midAdd = clampNonNegativeInt(rate.mid) * minutes
      const highAdd = clampNonNegativeInt(rate.high) * minutes

      if (lowAdd > 0) state.spiritStonesLow = clampNonNegativeInt(state.spiritStonesLow) + lowAdd
      if (midAdd > 0) state.spiritStonesMid = clampNonNegativeInt(state.spiritStonesMid) + midAdd
      if (highAdd > 0) state.spiritStonesHigh = clampNonNegativeInt(state.spiritStonesHigh) + highAdd

      if (lowAdd > 0 || midAdd > 0 || highAdd > 0) {
        needsRender = true
        needsSave = true
      }
    }
  }

  // Shop timers
  const shopsChanged = tickShops()
  if (shopsChanged) {
    needsRender = true
    needsSave = true
  }
  updateShopCountdownTextsInPlace()

  // Rebirth automation (auto gather / auto craft)
  try {
    const okPhase = state.phase !== 'INTRO_LOADING' && state.phase !== 'FATE_ROLL' && state.phase !== 'STORY_DIALOG'
    if (!state.runEnded && !state.inCombat && okPhase) {
      const gatherKey = 'herbalism:Gather Herbs'
      if (isRebirthAutoGatherUnlocked() && !isActionRunning(gatherKey)) {
        startHerbGatherTimed({ silent: true })
        needsSave = true
      }

      const craftKey = 'herbalism:Craft Pill'
      if (isRebirthAutoCraftUnlocked() && !isActionRunning(craftKey) && canAutoCraftSelectedPill()) {
        const file = String(state.autoCraftPillFile || '')
        const pill = getPillCatalog().find(p => String(p.file || '') === file)
        if (pill && consumeRecipeForPillFile(file)) {
          startHerbalismCraftTimed(pill, { ignoreRequirements: !!state.devIgnoreRequirements })
          needsSave = true
        }
      }
    }
  } catch (_) {}
  
  if (needsRender) {
    render()
  }
  
  if (needsSave) {
    saveGame()
  }
}, 1000)

// ============================================================================
// DRAG FUNCTIONALITY - Using transform-based dragging
// ============================================================================
let draggedElement = null
let dragStartX = 0
let dragStartY = 0
let currentTranslateX = 0
let currentTranslateY = 0

window.startDrag = function(event, elementId) {
  draggedElement = document.getElementById(elementId)
  if (!draggedElement) return
  
  event.preventDefault()
  event.stopPropagation()
  
  // Get current mouse position
  dragStartX = event.clientX
  dragStartY = event.clientY
  
  // Check if there's already a manual translate applied (from previous drags)
  const currentTransform = draggedElement.style.transform || ''
  const translateMatch = currentTransform.match(/translate\((-?\d+(?:\.\d+)?)px,\s*(-?\d+(?:\.\d+)?)px\)/)
  
  if (translateMatch) {
    // Continue from existing drag position
    currentTranslateX = parseFloat(translateMatch[1])
    currentTranslateY = parseFloat(translateMatch[2])
  } else {
    // First time dragging - start from 0,0 (element's CSS position)
    currentTranslateX = 0
    currentTranslateY = 0
  }
  
  document.addEventListener('mousemove', dragMove)
  document.addEventListener('mouseup', dragEnd)
  
  // Add dragging class for visual feedback
  draggedElement.classList.add('dragging')
}

function dragMove(event) {
  if (!draggedElement) return
  
  // Calculate how far the mouse has moved since drag started
  const deltaX = event.clientX - dragStartX
  const deltaY = event.clientY - dragStartY
  
  // Apply the delta to the current translate values
  const newTranslateX = currentTranslateX + deltaX
  const newTranslateY = currentTranslateY + deltaY
  
  // Apply as a CSS transform (this doesn't interfere with the original positioning)
  draggedElement.style.transform = `translate(${newTranslateX}px, ${newTranslateY}px)`
}

function dragEnd() {
  if (draggedElement) {
    draggedElement.classList.remove('dragging')

    // Persist final translate so panel position survives re-renders
    const id = draggedElement.id
    const key = id === 'stats-panel'
      ? 'stats'
      : id === 'inventory-panel'
        ? 'inventory'
        : id === 'actions-panel'
          ? 'actions'
          : id === 'profile-panel'
            ? 'profile'
            : id === 'sect-panel'
              ? 'sect'
              : id === 'quest-panel'
                ? 'quests'
                : id === 'moves-panel'
                  ? 'moves'
                  : id === 'shop-panel'
                    ? 'shop'
                    : id === 'conquered-sects-panel'
                      ? 'conqueredSects'
            : null
    if (key) {
      const currentTransform = draggedElement.style.transform || ''
      const translateMatch = currentTransform.match(/translate\((-?\d+(?:\.\d+)?)px,\s*(-?\d+(?:\.\d+)?)px\)/)
      if (translateMatch) {
        const x = parseFloat(translateMatch[1])
        const y = parseFloat(translateMatch[2])
        state.panelPositions[key] = { x, y }
        saveGame()
      }
    }
  }
  draggedElement = null
  document.removeEventListener('mousemove', dragMove)
  document.removeEventListener('mouseup', dragEnd)
}

// ============================================================================
// INITIALIZATION
// ============================================================================

function shouldEnableQaHooks() {
  try {
    const params = new URLSearchParams(String(window.location.search || ''))
    return params.has('qa')
  } catch (_) {
    return false
  }
}

function installQaHooks() {
  if (!shouldEnableQaHooks()) return
  if (window.__qa) return

  const clone = (v) => {
    try { return JSON.parse(JSON.stringify(v)) } catch (_) { return null }
  }

  window.__qa = {
    getState: () => clone(state),
    setState: (patch) => {
      if (!patch || typeof patch !== 'object') return
      Object.assign(state, patch)
      try { render() } catch (_) {}
      try { saveGame() } catch (_) {}
    },
    render: () => { render() },
    save: () => { saveGame() },

    // Timed actions
    isTimedActionRunning: (type, name) => {
      const key = getActionKey(String(type || ''), { name: String(name || '') })
      return isActionRunning(key)
    },
    finishTimedActionNow: async (type, name, opts) => {
      const key = getActionKey(String(type || ''), { name: String(name || '') })

      const timeoutMs = Math.max(0, Number(opts?.timeoutMs) || 1000)
      const pollMs = Math.max(0, Number(opts?.pollMs) || 25)
      const startedAt = performance.now()

      while (!isActionRunning(key) && (performance.now() - startedAt) < timeoutMs) {
        // Yield to let the UI click handler register the timed action.
        // This keeps tests deterministic without busy-waiting.
        await new Promise(resolve => setTimeout(resolve, pollMs))
      }

      if (isActionRunning(key)) {
        finishTimedAction(key)
        return true
      }

      // Fallback: if the timed action never started (e.g. race / disabled),
      // try to complete by name for specials.
      const t = String(type || '')
      const n = String(name || '')
      if (t === 'special' && n) {
        if (n === 'Exploring the Sect Library.') window.cloudStoryExploreLibrary()
        else if (n === 'Walk with the Mysterious Cultivator to the Building.') window.cloudStoryWalkToBuilding()
        else if (n === 'Sect Leader Offers Items and Recruitment.') window.cloudStoryLeaderOffers()
        else if (n === 'Arrival Among Clouds.') window.cloudStoryArrivalAmongClouds()
        else if (n === 'Confronted by an Outer Disciple.') window.cloudStoryConfrontedByOuterDisciple()
        else if (n === 'Battle starts.') window.cloudStoryBattleStarts()
        else if (n === 'Find heavenly demon manual.') window.cloudStoryFindHeavenlyDemonManual()
        else if (n === 'Take the Demonic Manual.') window.cloudStoryTakeDemonicManual()
        else if (n === 'Find nothing.') window.cloudStoryFindNothingInLibrary()
        try { render() } catch (_) {}
        try { saveGame() } catch (_) {}
        return true
      }

      return false
    },

    // Combat helpers
    startSectPyramidDuel: (layer, rank) => {
      window.sectChallengeRank(String(layer || 'outer'), Number(rank || 6))
    },
    startCloudStoryDuel: () => {
      window.cloudStoryBattleStarts()
    },
    winCombatNow: () => {
      if (!state.inCombat || !state.enemy) return false
      const defeatedName = String(state.enemy.name || 'Enemy')
      state.enemy.health = 0
      endCombatVictory(defeatedName)
      return true
    },

    // Quest helpers
    ensureQuest: () => {
      if (!state.hasJoinedSect) {
        // Ensure quest is accessible without UI gating.
        window.joinHeavenlyDemonSect()
      }
      window.sectGetQuest()
      return true
    },
    startQuest: () => {
      startQuest()
    },
    rushQuestCombat: () => {
      window.questCombatRush()
    },

    // Shop helpers
    getShopOffers: (kind) => {
      ensureShopsInitialized()
      const k = String(kind || 'town')
      if (k === 'hour') return clone(state.shops.hour?.offers || [])
      return clone(state.shops.town?.offers || [])
    },
    forceShopReset: (kind) => {
      const k = String(kind || 'town')
      if (k === 'hour') resetShop('hour')
      else resetShop('town')
      try { render() } catch (_) {}
      try { saveGame() } catch (_) {}
      return true
    }
  }
}
if (!loadGame()) {
  // New game: if meta has an existing account identity, skip intro and go to Fate Roll.
  try { applyMetaFromStorage() } catch (_) {}
  const hasIdentity = Boolean(String(state.playerName || '').trim()) && (state.playerGender === 'male' || state.playerGender === 'female')
  if (hasIdentity) {
    state.phase = 'FATE_ROLL'
    rollFate()
    saveGame()
  } else {
    // Otherwise run intro loading flow before fate roll
    state.phase = 'INTRO_LOADING'
    state.playerName = ''
    state.playerGender = null
    state.intro = { progress: 0, step: 'loading', usernameDraft: '', hasAnimatedTitle: false }
  }
}

// If we land on fate roll without rolled fate (older saves), roll once and persist.
if (state.phase === 'FATE_ROLL' && !state.bloodline) {
  rollFate()
  saveGame()
}

// Keep best-ever stats synced and (optionally) push to global leaderboard.
try { syncBestMajorRealm() } catch (_) {}
try { syncBestRebirthPoints() } catch (_) {}
try { saveMeta() } catch (_) {}
try { leaderboardScheduleSync('boot') } catch (_) {}

installQaHooks()
render()

console.log('Cultivation Saga loaded')
