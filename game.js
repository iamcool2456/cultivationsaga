import './style.css'

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
  2: 0.6,
  1: 0.35,
  0: 0.12
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
  { count: 5, weight: 0.9, qiMult: 12.8 }
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
  'Fire': { name: 'Crimson Pyre Sect', icon: '🔥' },
  'Decay': { name: 'Withering Ash Sect', icon: '🍂' },
  'Sound': { name: 'Resonant Echo Sect', icon: '🔊' },
  'Water': { name: 'Tideflow Pavilion', icon: '🌊' },
  'Ice': { name: 'Frostbound Lotus Sect', icon: '❄️' },
  'Space': { name: 'Voidstep Sect', icon: '🌌' },
  'Earth': { name: 'Stoneheart Sect', icon: '🪨' },
  'Cloud': { name: 'Cloud Sect', icon: '☁️' },
  'Air': { name: 'Galespirit Sect', icon: '💨' },
  'Black Hole': { name: 'Singularity Abyss Sect', icon: '⚫' },
  'Grass': { name: 'Verdant Bloom Sect', icon: '🌿' },
  'Thunder': { name: 'Heavenclap Sect', icon: '⚡' },
  'Poison': { name: 'Venomshade Sect', icon: '☠️' },
  'Sickness': { name: 'Pale Omen Sect', icon: '🦠' }
}

// ============================================================================
// BASIC COMBAT MOVES (always available)
// Cooldowns are in milliseconds.
// ============================================================================
const BASIC_MOVES = {
  punch: { id: 'punch', name: 'Punch', icon: '👊', damageMult: 1, qiCost: 0, cooldownMs: 900 },
  superPunch: { id: 'superPunch', name: 'Super Punch', icon: '💥', damageMult: 2, qiCost: 0, cooldownMs: 2000 }
}

// Unlocked when ANY manual is equipped. Display name changes for specific manuals.
const QI_BLAST_MOVE = { id: 'qiBlast', name: 'Qi Blast', icon: '⚡', damageMult: 3, qiCost: 10, cooldownMs: 3000 }

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
  ]
}

// Add default moves for other affinities
for (const affinity of ['Decay', 'Sound', 'Cloud', 'Air', 'Black Hole', 'Grass', 'Sickness']) {
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
  { major: 'Demonic Manifestation', subRealms: [
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
  { major: 'Demonic Energy Absorption', subRealms: [
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
  { major: 'Blood Demon Forging', subRealms: [
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
  { major: 'Soul Devouring', subRealms: [
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
  { major: 'Abyssal Void', subRealms: [
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
  { major: 'Infernal Ascension', subRealms: [
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
  { major: 'Chaos Dominion', subRealms: [
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
  { major: 'Eternal Damnation', subRealms: [
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
  { major: 'Primordial Demon', subRealms: [
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
  { major: 'Demon Sovereign', subRealms: [
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
  sectIncomeSeconds: 0,
  hasChosen100SilverRoute: false,
  cloudCultivatorStoryStage: 0,
  hasLargerBagSpace: false,
  hasManual: false,
  contributionPoints: 0,
  encounterCooldown: 0,
  manualTier: 0,
  manualType: null,

  // Story flags
  demonMonarchOnly: false,
  
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
  rebirthUpgrades: {
    minRootCount: 1,
    maxRootCount: 5,
    bloodlineBias: 0,
    canRerollFate: false
  },
  
  // Fate rerolls
  rerollsRemaining: 5,
  
  // UI state
  showResetModal: false,
  devModalMode: 'RESET', // 'RESET' | 'SPEED'
  resetPassword: '',
  devSpeed3x: false,
  activeSidePanels: new Set(), // Set of 'stats', 'inventory', 'actions', 'profile', 'sect', 'quests'

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

  // Persisted drag offsets (CSS translate) per panel
  panelPositions: {
    stats: { x: 0, y: 0 },
    inventory: { x: 0, y: 0 },
    actions: { x: 0, y: 0 },
    profile: { x: 0, y: 0 },
    sect: { x: 0, y: 0 },
    quests: { x: 0, y: 0 },
    moves: { x: 0, y: 0 }
  },

  // Persisted sizes per panel (set when user resizes)
  panelSizes: {},
  
  // Inventory
  inventory: [],
  selectedInventoryIndex: null,
  equipped: { tool: null, manual: null },
  
  // Actions (for story management)
  repeatableActions: [],
  specialActions: [],
  
  // Cooldown system
  buttonCooldowns: {},
  villageMaterialsCooldown: 0
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

// ============================================================================
// ACTION CALLBACK REHYDRATION (saved actions lose functions)
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
    else if (name === 'Take the Demonic Manual.') a.callback = () => window.cloudStoryTakeDemonicManual()
    else if (name === 'Larger Bag Space') a.callback = () => window.claimLargerBagSpace()
    else if (name === 'Expansion Opportunity.') a.callback = () => window.businessExpansionOpportunity()
    else if (name === 'Hiring Employees.') a.callback = () => window.businessHiringEmployees()

    return a
  }

  state.repeatableActions = state.repeatableActions.map(a => fix('repeatable', a))
  state.specialActions = state.specialActions.map(a => fix('special', a))
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
  if (t === 1) return { qi: 1.5, str: 1.5, hp: 1.5 }
  if (t === 2) return { qi: 2, str: 2, hp: 2 }
  if (t === 3) return { qi: 2.5, str: 2.5, hp: 2.5 }
  if (t === 4) return { qi: 3, str: 3, hp: 3 }
  return { qi: 5, str: 5, hp: 5 }
}

function getCurrentSectDisplay() {
  const id = state.currentSect
  if (!id) return null
  if (id === 'Heavenly Demon' || id === 'Demon Monarch') {
    return { id, name: id + ' Sect', icon: id === 'Heavenly Demon' ? '😇' : '😈', tier: 5 }
  }
  const sect = SECTS[id]
  if (sect) {
    const alignment = getAffinityScore(id)
    const tier = getSectTierFromAlignmentScore(alignment)
    return { id, name: sect.name, icon: sect.icon, tier }
  }
  return { id, name: String(id), icon: '🏯', tier: Number.isFinite(state.sectTier) ? state.sectTier : 0 }
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

  log(`${sect.icon} You join the ${sect.name}! (Tier ${tier})`)
  log(`📖 Sect Manual Bonuses: Qi ${formatMultiplier(state.sectMultipliers.qi)}, STR ${formatMultiplier(state.sectMultipliers.str)}, HP ${formatMultiplier(state.sectMultipliers.hp)}`)

  initializeManualMoveCooldowns()
  state.sectJoinPickerOpen = false
  render()
  saveGame()
}

window.leaveSectFromPanel = () => {
  if (!state.hasJoinedSect) return
  if (!canUseSectPanelActions()) return

  const current = getCurrentSectDisplay()
  if (current) {
    log(`🚪 You leave the ${current.name}.`)
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
      return { affinity: a.type, alignment: a.score, tier, name: sect.name, icon: sect.icon }
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
  if ((incomeNow.low || 0) > 0) bonusParts.push(`+${formatNumber(incomeNow.low)} Low/min`)
  if ((incomeNow.mid || 0) > 0) bonusParts.push(`+${formatNumber(incomeNow.mid)} Mid/min`)
  if ((incomeNow.high || 0) > 0) bonusParts.push(`+${formatNumber(incomeNow.high)} High/min`)
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
                  <span class="sect-choice-icon">😈</span>
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
                <button class="sect-choice-btn" onclick="window.joinSectFromPanel('${escapeHtml(s.affinity)}')">
                  <div class="sect-choice-left">
                    <span class="sect-choice-icon">${s.icon}</span>
                    <span class="sect-choice-name">${escapeHtml(s.name)}</span>
                  </div>
                  <div class="sect-choice-right">
                    <span class="sect-choice-tier">Tier ${s.tier}</span>
                    <span class="sect-choice-align">Align ${formatNumber(s.alignment)}/50</span>
                  </div>
                </button>
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
            <div>Sect Tier: ${current ? current.tier : 0}</div>
            <div>Sect Rank: ${escapeHtml(rankLabel)}</div>
            <div>Sect Manual: ${escapeHtml(String(state.manualType || 'None'))} Manual</div>
            <div>Current Manual Tier: ${formatNumber(currentManualTier)}</div>
            <div>Next Manual Tier Cost: ${currentManualTier >= 20 ? 'MAX' : formatPoints(nextManualCost || 0)}</div>
            <div>Contribution Points: ${formatPoints(state.contributionPoints || 0)}</div>
          </div>

          <button class="sect-leave-btn" onclick="window.leaveSectFromPanel()" ${unlocked ? '' : 'disabled'}>
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
function saveGame() {
  try {
    // Convert Set to array for JSON serialization
    const stateToSave = {
      ...state,
      activeSidePanels: Array.from(state.activeSidePanels),
      panelPositions: state.panelPositions,
      panelSizes: state.panelSizes
    }
    localStorage.setItem('cultivationSagaSave', JSON.stringify(stateToSave))
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

      // Migrate legacy storyLuck -> luck
      if (Number.isFinite(loadedState.storyLuck)) {
        state.luck = loadedState.storyLuck
      }

      if (typeof state.demonMonarchOnly !== 'boolean') state.demonMonarchOnly = false
      
      // Restore Set objects that were converted to arrays/objects during JSON serialization
      // Also handle migration from old activeSidePanel (singular) to activeSidePanels (plural Set)
      if (Array.isArray(loadedState.activeSidePanels)) {
        state.activeSidePanels = new Set(loadedState.activeSidePanels)
      } else if (loadedState.activeSidePanel) {
        // Migrate old format: if there was an active panel, add it to the Set
        state.activeSidePanels = new Set([loadedState.activeSidePanel])
      } else {
        state.activeSidePanels = new Set()
      }

      // Ensure panelPositions exists and has numeric x/y
      if (!state.panelPositions) {
        state.panelPositions = { stats: { x: 0, y: 0 }, inventory: { x: 0, y: 0 }, actions: { x: 0, y: 0 }, profile: { x: 0, y: 0 }, sect: { x: 0, y: 0 }, quests: { x: 0, y: 0 }, moves: { x: 0, y: 0 } }
      }
      for (const key of ['stats', 'inventory', 'actions', 'profile', 'sect', 'quests', 'moves']) {
        const p = state.panelPositions[key] || {}
        state.panelPositions[key] = {
          x: Number.isFinite(p.x) ? p.x : 0,
          y: Number.isFinite(p.y) ? p.y : 0
        }
      }

      // Ensure panelSizes exists and contains numeric w/h if present
      if (!state.panelSizes || typeof state.panelSizes !== 'object') {
        state.panelSizes = {}
      }
      for (const key of ['stats', 'inventory', 'actions', 'profile', 'sect', 'quests', 'moves']) {
        const s = state.panelSizes[key]
        if (!s || typeof s !== 'object') continue
        const w = Number.isFinite(s.w) ? s.w : undefined
        const h = Number.isFinite(s.h) ? s.h : undefined
        state.panelSizes[key] = {
          ...(w !== undefined ? { w } : {}),
          ...(h !== undefined ? { h } : {})
        }
      }

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

      // Remove legacy SECT crossroads phase (old stub screen)
      if (state.phase === 'SECT') state.phase = 'FARMING'

      // Default dev flags for older saves
      if (state.devModalMode !== 'RESET' && state.devModalMode !== 'SPEED') state.devModalMode = 'RESET'
      if (typeof state.devSpeed3x !== 'boolean') state.devSpeed3x = false

      // Remove legacy/unused story flags from older saves
      try {
        delete state.hasGoneWithCultivator
        delete state.hasMetRealCultivator
        delete state.hasAdvancedManual
      } catch (_) {}

      // Offer-roll flags for older saves
      if (typeof state.legendaryAxeOfferRolled !== 'boolean') state.legendaryAxeOfferRolled = false
      if (typeof state.legendaryAxeOfferAvailable !== 'boolean') state.legendaryAxeOfferAvailable = false

      // Business/story route defaults
      if (typeof state.isBusinessOriented !== 'boolean') state.isBusinessOriented = false
      if (!Number.isFinite(state.incomeCycleSeconds) || state.incomeCycleSeconds < 0) state.incomeCycleSeconds = 0
      if (!Number.isFinite(state.businessCycleSeconds) || state.businessCycleSeconds <= 0) state.businessCycleSeconds = 5
      if (!state.businessIncomePerCycle || typeof state.businessIncomePerCycle !== 'object') {
        state.businessIncomePerCycle = { silver: 5, copper: 15, gold: 0 }
      } else {
        const s = Number(state.businessIncomePerCycle.silver)
        const c = Number(state.businessIncomePerCycle.copper)
        const g = Number(state.businessIncomePerCycle.gold)
        state.businessIncomePerCycle = {
          silver: Number.isFinite(s) && s >= 0 ? Math.floor(s) : 5,
          copper: Number.isFinite(c) && c >= 0 ? Math.floor(c) : 15,
          gold: Number.isFinite(g) && g >= 0 ? Math.floor(g) : 0
        }
      }
      if (typeof state.businessUpgradedExpansion !== 'boolean') state.businessUpgradedExpansion = false
      if (typeof state.businessUpgradedEmployees !== 'boolean') state.businessUpgradedEmployees = false
      if (typeof state.hasChosen100SilverRoute !== 'boolean') state.hasChosen100SilverRoute = false
      if (!Number.isFinite(state.cloudCultivatorStoryStage) || state.cloudCultivatorStoryStage < 0) state.cloudCultivatorStoryStage = 0
      if (typeof state.hasLargerBagSpace !== 'boolean') state.hasLargerBagSpace = false

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
      if (state.hasBoughtLegendaryTools) ensureItem({ name: 'Legendary Axe', icon: '✨', description: 'A legendary axe that increases silver gain by 70%' })
      if (state.hasManual) ensureItem({ name: 'Beginner Cultivation Manual', icon: '📖', description: 'A basic manual that allows major realm breakthroughs' })

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
      
      return true
    }
  } catch (e) {
    console.error('Failed to load game:', e)
  }
  return false
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
  render()
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
  // Apply bloodline bias from rebirth upgrades
  const biasedBloodlines = BLOODLINES.map(b => {
    const rebirthBias = b.tier <= 3 ? (1 + state.rebirthUpgrades.bloodlineBias) : 1
    const tierRarity = getBloodlineWeightMultiplier(b.tier)
    return {
      ...b,
      weight: b.weight * rebirthBias * tierRarity
    }
  })
  
  state.bloodline = weightedRandom(biasedBloodlines)
  
  // Roll spiritual roots with min/max constraints
  const validRoots = SPIRITUAL_ROOTS.filter(r => 
    r.count >= state.rebirthUpgrades.minRootCount &&
    r.count <= state.rebirthUpgrades.maxRootCount
  )
  
  state.spiritualRoots = weightedRandom(validRoots)
  
  // Roll luck (1-100)
  state.luck = Math.floor(Math.random() * 100) + 1
  
  // Roll affinities (1-5 affinities, weighted toward fewer)
  const affinityCount = weightedRandom(AFFINITY_COUNT_WEIGHTS).count
  state.affinities = []
  const shuffledAffinities = [...AFFINITIES].sort(() => Math.random() - 0.5)
  
  for (let i = 0; i < affinityCount; i++) {
    const score = Math.floor(Math.random() * 50) + 1
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
  return baseQi * state.bloodline.qiMult * state.spiritualRoots.qiMult * safeRealmQiMult * state.qiMultiplier * sectQi
}

function calculateStrength() {
  const realm = getCurrentCultivationRealm()
  const sectStr = Number.isFinite(state.sectMultipliers?.str) ? state.sectMultipliers.str : 1
  return Math.floor(10 * state.bloodline.strMult * realm.data.strMult * sectStr)
}

function calculateMaxHealth() {
  const realm = getCurrentCultivationRealm()
  const sectHp = Number.isFinite(state.sectMultipliers?.hp) ? state.sectMultipliers.hp : 1
  return Math.floor(100 * state.bloodline.hpMult * realm.data.hpMult * sectHp)
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
  if (abs >= 10) return `${formatNumber(numberValue)}x`

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
    const nextMajor = CULTIVATION_REALMS[state.cultivationMajorIndex + 1]
    nextRealmText = `${nextMajor.major} I`
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
                <div class="cultivation-box-row"><span>QI BONUS:</span><span>${formatMultiplier(state.qiMultiplier || 1)}</span></div>
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
          <div class="meta-row"><span class="meta-label">Realm:</span><span class="meta-value">${realm.major} ${realm.sub}</span></div>
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
            ${nextCost.type === 'breakthrough' ? '🌟 Breakthrough' : '📈 Advance'} to ${nextRealmText} (${formatNumber(nextCost.cost)} Qi)
          </button>
          ${nextCost.type === 'breakthrough' && state.cultivationMajorIndex === 0 && !state.hasManual ? '<div class="cultivation-warn">⚠️ Requires cultivation manual</div>' : ''}
        ` : '<div class="max-realm">🏆 Maximum Realm Achieved!</div>'}
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
  const name = String(item?.name || '')
  if (name === 'Demonic Manual' || name === 'Demon Monarch Manual' || name === 'Demon Monarch Manual (Tier 1)' || name === 'Heavenly Demon Manual') {
    return '/assets/demon-manual.png'
  }
  if (name === 'Hidden Heavenly Demon Manual') {
    return '/assets/heavenly-demon-manual.png'
  }

  const manualMatch = name.match(/^(.*) Manual \(Tier \d+\)$/)
  if (manualMatch) {
    const affinity = String(manualMatch[1] || '').trim().toLowerCase()
    const safe = affinity
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9\-]/g, '')
    return `/assets/${safe}-manual.png`
  }

  const map = {
    'Beginner Cultivation Manual': '/assets/cloud-manual.png',
    'Demonic Manual': '/assets/demon-manual.png',
    'Hidden Heavenly Demon Manual': '/assets/heavenly-demon-manual.png',
    'Farming Tools': '/assets/rusted-pickaxe.png',
    'Rusted Axe': '/assets/rusted-axe.png',
    'Normal Axe': '/assets/silver-axe.png',
    'Legendary Axe': '/assets/thunder-axe.png',
    'Mysterious Herb': '/assets/grass.png',
    'Qi Gathering Pill': '/assets/yin-yang-pill.png'
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
  return name === 'Qi Gathering Pill' || name === 'Mysterious Herb'
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

  if (name === 'Qi Gathering Pill') {
    state.qi = (Number(state.qi) || 0) + 500
    log('💊 You consume the Qi Gathering Pill. +500 Qi.')
  }

  if (name === 'Mysterious Herb') {
    state.qiMultiplier = 1.2
    log('🌿 You consume the Mysterious Herb. Qi gain permanently increased by 20%!')
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
  if (state.phase !== 'FATE_ROLL' && state.phase !== 'INTRO_LOADING') {
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
  
  // Render dev reset button (always visible in corner)
  renderDevButton()
  
  // Render reset confirmation modal if needed
  if (state.showResetModal) {
    renderResetModal()
  } else {
    // Remove modal if it exists
    const modal = document.getElementById('reset-modal')
    if (modal) {
      modal.remove()
    }
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

function renderResetModal() {
  // Check if modal already exists
  let modal = document.getElementById('reset-modal')
  if (!modal) {
    modal = document.createElement('div')
    modal.id = 'reset-modal'
    modal.className = 'modal-overlay'
    document.body.appendChild(modal)
  }

  // If the modal content already exists, do not rebuild it.
  // Rebuilding via innerHTML causes the input to be destroyed/recreated,
  // which looks like a refresh and makes typing impossible.
  const existingInput = modal.querySelector('#reset-password-input')
  if (existingInput) {
    return
  }

  const isSpeedMode = state.devModalMode === 'SPEED'
  const title = isSpeedMode ? '⏩ Developer Speed' : '🔒 Developer Reset'
  const prompt = isSpeedMode ? 'Enter password to toggle 3× speed mode:' : 'Enter password to reset game:'
  const confirmLabel = isSpeedMode
    ? (state.devSpeed3x ? 'Disable 3× Speed' : 'Enable 3× Speed')
    : 'Confirm Reset'

  modal.innerHTML = `
    <div class="modal-content">
      <h2>${title}</h2>
      <p>${prompt}</p>
      <input 
        type="password" 
        id="reset-password-input" 
        class="password-input" 
        placeholder="Enter password"
        onkeypress="if(event.key === 'Enter') window.confirmReset()"
      />
      <p class="password-error" id="password-error" style="display: none;">Incorrect password!</p>
      <div class="modal-buttons">
        <button onclick="window.confirmReset()" class="reset-button">${confirmLabel}</button>
        <button onclick="window.cancelReset()" class="cancel-button">Cancel</button>
      </div>
    </div>
  `
  
  // Focus the password input after a short delay
  setTimeout(() => {
    const input = document.getElementById('reset-password-input')
    if (input) input.focus()
  }, 100)
}

function renderDevButton() {
  // Check if dev button already exists
  let devButton = document.getElementById('dev-reset-container')
  if (!devButton) {
    devButton = document.createElement('div')
    devButton.id = 'dev-reset-container'
    devButton.className = 'dev-reset-container'
    document.body.appendChild(devButton)
  }

  const speedLabel = state.devSpeed3x ? '⏩ 3× Speed: ON' : '⏩ 3× Speed: OFF'
  devButton.innerHTML = `
    <button onclick="window.showResetConfirmation()" class="dev-reset-button">🔓 Dev Reset</button>
    <button onclick="window.showSpeedConfirmation()" class="dev-reset-button">${speedLabel}</button>
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
  
  togglesContainer.innerHTML = `
    <button class="panel-toggle-btn ${state.activeSidePanels.has('stats') ? 'active' : ''}" onclick="window.toggleSidePanel('stats')" title="Stats">
      📊
    </button>
    <button class="panel-toggle-btn ${state.activeSidePanels.has('inventory') ? 'active' : ''}" onclick="window.toggleSidePanel('inventory')" title="Inventory">
      📦
    </button>
    <button class="panel-toggle-btn ${state.activeSidePanels.has('actions') ? 'active' : ''}" onclick="window.toggleSidePanel('actions')" title="Actions">
      ⚡
    </button>
    <button class="panel-toggle-btn ${state.activeSidePanels.has('profile') ? 'active' : ''}" onclick="window.toggleSidePanel('profile')" title="Character Profile">
      👤
    </button>
    <button class="panel-toggle-btn ${state.activeSidePanels.has('sect') ? 'active' : ''}" onclick="window.toggleSidePanel('sect')" title="Sect">
      🏯
    </button>
    <button class="panel-toggle-btn ${state.activeSidePanels.has('quests') ? 'active' : ''}" onclick="window.toggleSidePanel('quests')" title="Quests">
      📜
    </button>
    <button class="panel-toggle-btn ${state.activeSidePanels.has('moves') ? 'active' : ''}" onclick="window.toggleSidePanel('moves')" title="Moves">
      🥊
    </button>
  `
}

window.toggleSidePanel = function(panelType) {
  // Toggle the panel - if it's already open, close it; otherwise, open it
  if (state.activeSidePanels.has(panelType)) {
    state.activeSidePanels.delete(panelType)
  } else {
    state.activeSidePanels.add(panelType)
    if (panelType === 'profile') {
      ensureCharacterProfileGenerated()
    }
  }
  render()
}

function renderActivePanel() {
  // Render all active panels, remove inactive ones
  const statsPanel = document.getElementById('stats-panel')
  const inventoryPanel = document.getElementById('inventory-panel')
  const actionsPanel = document.getElementById('actions-panel')
  const profilePanel = document.getElementById('profile-panel')
  const sectPanel = document.getElementById('sect-panel')
  const questPanel = document.getElementById('quest-panel')
  const movesPanel = document.getElementById('moves-panel')
  
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

  // Actions panel must appear BELOW inventory, same right column.
  const inv = document.getElementById('inventory-panel')
  const act = document.getElementById('actions-panel')
  const actionsDragged = !!(state.panelPositions?.actions && (state.panelPositions.actions.x !== 0 || state.panelPositions.actions.y !== 0))
  if (!actionsDragged) {
    if (inv && act) {
      act.style.top = (inv.offsetHeight + 16) + 'px'
    } else if (act) {
      act.style.top = '0px'
    }
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
      <h3>👤 Character Profile</h3>
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
      <h3>📊 Stats</h3>
      <span class="drag-hint">✥ Drag to move ✥</span>
    </div>
    <div class="panel-content">
    <div class="stat-item">
      <span class="stat-label"><img src="/assets/battery.png" class="stat-icon" alt="Stamina"> Stamina:</span>
      <span class="stat-value">${formatNumber(state.stamina)}/${formatNumber(state.maxStamina)}</span>
    </div>
    <div class="stat-item">
      <span class="stat-label">💪 Strength:</span>
      <span class="stat-value">${formatNumber(state.strength)}</span>
    </div>
    <div class="stat-item">
      <span class="stat-label">❤️ Health:</span>
      <span class="stat-value">${formatNumber(state.health)}/${formatNumber(state.maxHealth)}</span>
    </div>
    <div class="stat-item">
      <span class="stat-label"><img src="/assets/ki.png" class="stat-icon" alt="Qi"> Qi:</span>
      <span class="stat-value">${formatNumber(state.qi)}</span>
    </div>
    <div class="stat-item">
      <span class="stat-label">🎲 Luck:</span>
      <span class="stat-value">${formatNumber(state.luck)}</span>
    </div>
    
    <div class="stat-divider"></div>
    <h4>Currencies</h4>
    
    <div class="stat-item">
      <span class="stat-label"><img src="/assets/copper-coin.png" class="stat-icon" alt="Copper"> Copper:</span>
      <span class="stat-value">${formatNumber(state.copper)}</span>
    </div>
    <div class="stat-item">
      <span class="stat-label"><img src="/assets/silver-coin.png" class="stat-icon" alt="Silver"> Silver:</span>
      <span class="stat-value">${formatNumber(state.silver)}</span>
    </div>
    <div class="stat-item">
      <span class="stat-label"><img src="/assets/gold-coin.png" class="stat-icon" alt="Gold"> Gold:</span>
      <span class="stat-value">${formatNumber(state.gold)}</span>
    </div>

    <div class="stat-item">
      <span class="stat-label">🏯 Contribution Points:</span>
      <span class="stat-value">${formatPoints(state.contributionPoints || 0)}</span>
    </div>

    <div class="stat-divider"></div>
    <h4>Spirit Stones</h4>

    <div class="stat-item">
      <span class="stat-label"><img src="/assets/spiritstone-low.png" class="stat-icon" alt="Low"> Low:</span>
      <span class="stat-value">${formatNumber(state.spiritStonesLow)}</span>
    </div>
    <div class="stat-item">
      <span class="stat-label"><img src="/assets/spiritstone-mid.png" class="stat-icon" alt="Mid"> Mid:</span>
      <span class="stat-value">${formatNumber(state.spiritStonesMid)}</span>
    </div>
    <div class="stat-item">
      <span class="stat-label"><img src="/assets/spiritstone-high.png" class="stat-icon" alt="High"> High:</span>
      <span class="stat-value">${formatNumber(state.spiritStonesHigh)}</span>
    </div>
    
    ${state.isDemonPath ? `
      <div class="stat-divider"></div>
      <h4>Demon Path</h4>
      <div class="stat-item">
        <span class="stat-label">😈 Corruption:</span>
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
      <h3>📦 Inventory</h3>
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
              ${img ? `<img class="inv-tile-img" src="${img}" alt="${escapeHtml(String(item.name || 'Item'))}">` : `<div class="inv-tile-emoji">${escapeHtml(String(item.icon || '📦'))}</div>`}
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
    // Saved games drop callbacks from actions; rehydrate on-demand.
    try { rehydrateActionCallbacks() } catch (_) {}

    // Ensure removed/deprecated forest exploration actions never appear.
    state.specialActions = state.specialActions.filter(a => {
      const n = a?.name
      return n !== 'Explore the Nearby Forest' && n !== 'Enter Deep into the Woods' && n !== 'Find Nothing' && n !== 'Find Mysterious Herb'
    })

    // Update repeatable action states
    const restAction = state.repeatableActions.find(a => a.name === 'Rest')
    if (restAction) {
      restAction.disabled = state.stamina >= state.maxStamina
    }
    
    const farmAction = state.repeatableActions.find(a => a.name === 'Farm Crops')
    if (farmAction) {
      farmAction.disabled = state.stamina < 2
    }
    
    const chopWoodAction = state.repeatableActions.find(a => a.name === 'Chop Wood')
    if (chopWoodAction) {
      chopWoodAction.disabled = state.stamina < 3
    }
    
    const gatherMaterialsAction = state.repeatableActions.find(a => a.name === 'Gather Materials for Village')
    if (gatherMaterialsAction) {
      gatherMaterialsAction.disabled = state.villageMaterialsCooldown > 0
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
    if (!state.hasLargerBagSpace && state.silver >= 100) {
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
      })

      // If player is already in Cloud sect from the story, begin continuation.
      if (stage >= 3 && !hasAnyCloudContinuation) {
        state.cloudCultivatorStoryStage = Math.max(4, stage)
        state.specialActions.push({
          name: 'Arrival Among Clouds.',
          icon: '☁️',
          description: 'The Cloud Sect is quieter than you expected. You can feel it — you don’t belong here yet.',
          disabled: false,
          callback: () => window.cloudStoryArrivalAmongClouds()
        })
      }

      // Dynamic disables
      const lib = state.specialActions.find(a => a?.name === 'Exploring the Sect Library.')
      if (lib) lib.disabled = state.stamina < 15
      const heavenly = state.specialActions.find(a => a?.name === 'Find heavenly demon manual.')
      if (heavenly) heavenly.disabled = state.luck < 55
    }
    // Business continuation branch actions
    if (state.isBusinessOriented && state.hasStartedBusiness) {
      const hasExpansion = state.specialActions.some(a => a?.name === 'Expansion Opportunity.')
      const hasHiring = state.specialActions.some(a => a?.name === 'Hiring Employees.')

      if (!state.businessUpgradedExpansion && !hasExpansion) {
        state.specialActions.push({
          name: 'Expansion Opportunity.',
          icon: '📈',
          description: 'Your operation stabilizes faster than expected. Coin circulates.',
          disabled: state.silver < 150 || state.copper < 250,
          onStart: () => {
            if (state.silver < 150 || state.copper < 250) return false
            state.silver -= 150
            state.copper -= 250
            return true
          },
          callback: () => window.businessExpansionOpportunity()
        })
      }

      if (state.businessUpgradedExpansion && !state.businessUpgradedEmployees && !hasHiring) {
        state.specialActions.push({
          name: 'Hiring Employees.',
          icon: '👥',
          description: 'Coin alone isn’t enough anymore. Hands are.',
          disabled: state.copper < 700,
          onStart: () => {
            if (state.copper < 700) return false
            state.copper -= 700
            return true
          },
          callback: () => window.businessHiringEmployees()
        })
      }
    }
  }
  
  actionsPanel.innerHTML = `
    <div class="panel-header" onmousedown="window.startDrag(event, 'actions-panel')">
      <h3>⚡ Actions</h3>
      <span class="drag-hint">✥ Drag to move ✥</span>
    </div>
    <div class="panel-content">
    <div class="actions-columns">
      <div class="actions-section">
        <h4>🔁 Repeatable Actions</h4>
        <div class="actions-list">
          ${state.repeatableActions.length === 0 ? '<div class="actions-empty">None available</div>' : ''}
          ${state.repeatableActions.map((action, index) => {
            const cooldownText = action.name === 'Gather Materials for Village' && state.villageMaterialsCooldown > 0 
              ? `<br><small>Cooldown: ${state.villageMaterialsCooldown}s</small>` 
              : ''

            const key = getActionKey('repeatable', action)
            const progress = getActionProgress(key)
            const progressPct = `${(progress * 100).toFixed(1)}%`
            const isRunning = isActionRunning(key)
            const hasDesc = Boolean(action && typeof action.description === 'string' && action.description.trim())
            const descJson = hasDesc ? JSON.stringify(String(action.description)) : null
            const hoverAttrs = hasDesc
              ? ` onmouseenter="window.showActionTooltip(event, ${descJson})" onmousemove="window.moveActionTooltip(event)" onmouseleave="window.hideActionTooltip()"`
              : ''
            return `
              <button class="action-button" data-action-key=${JSON.stringify(String(key))} data-running="${isRunning ? 1 : 0}" ${isRunning ? 'aria-busy="true"' : ''} style="--progressPct:${progressPct};" onclick="window.executeAction('repeatable', ${index})" ${action.disabled ? 'disabled' : ''}${hoverAttrs}>
                <span class="action-button-label">${action.icon || '⭐'} ${action.name}${cooldownText}</span>
              </button>
            `
          }).join('')}
        </div>
      </div>
      
      <div class="actions-section">
        <h4>✨ Special Actions</h4>
        <div class="actions-list">
          ${state.specialActions.length === 0 ? '<div class="actions-empty">None available</div>' : ''}
          ${state.specialActions.map((action, index) => `
            ${(() => {
              const key = getActionKey('special', action)
              const progress = getActionProgress(key)
              const progressPct = `${(progress * 100).toFixed(1)}%`
              const isRunning = isActionRunning(key)
              const hasDesc = Boolean(action && typeof action.description === 'string' && action.description.trim())
              const descJson = hasDesc ? JSON.stringify(String(action.description)) : null
              const hoverAttrs = hasDesc
                ? ` onmouseenter="window.showActionTooltip(event, ${descJson})" onmousemove="window.moveActionTooltip(event)" onmouseleave="window.hideActionTooltip()"`
                : ''
              return `
                <button class="action-button special" data-action-key=${JSON.stringify(String(key))} data-running="${isRunning ? 1 : 0}" ${isRunning ? 'aria-busy="true"' : ''} style="--progressPct:${progressPct};" onclick="window.executeAction('special', ${index})" ${action.disabled ? 'disabled' : ''}${hoverAttrs}>
                  <span class="action-button-label">${action.icon || '🌟'} ${action.name}</span>
                </button>
              `
            })()}
          `).join('')}
        </div>
      </div>
    </div>
    </div>
  `
  
  if (isNewPanel) {
    // Panel was just created
  }
}

function renderFateRoll(container) {
  const profileName = (state.playerName && String(state.playerName).trim()) ? String(state.playerName).trim() : 'Wanderer'
  const profileGender = (state.playerGender === 'male' || state.playerGender === 'female') ? state.playerGender : null

  container.innerHTML = `
    <div class="fate-screen">
      <h1>✨ Fate Roll ✨</h1>
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
          <h2>✨ Elemental Affinities ✨</h2>
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
                const fallbackIcon = SECTS[aff.type]?.icon || '✨'
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
                    <img src="/assets/${affinityLower}.png" class="affinity-icon" alt="${aff.type}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'">
                    <div class="affinity-icon-fallback">${fallbackIcon}</div>
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
        ${state.rerollsRemaining > 0 ? `<button onclick="window.rerollFate()">🎲 Reroll (${state.rerollsRemaining} left)</button>` : ''}
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
        <div class="character-silhouette">🧙</div>
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
            ✅ Accept (Pay 30 Copper)
          </button>
          
          <button onclick="window.rejectImmortal()">
            ❌ Reject
          </button>
        </div>
      </div>
    </div>
  `
}

function renderDemonExile(container) {
  container.innerHTML = `
    <div class="game-screen">
      <div class="character-display">
        <div class="character-silhouette">📕</div>
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
        <div class="character-silhouette">🪓</div>
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

function renderCombat(container) {
  const enemy = state.enemy
  
  container.innerHTML = `
    <div class="game-screen">
      <div class="character-display">
        <div class="character-silhouette">⚔️</div>
        <div class="character-info">
          <div><strong>Combat Phase</strong></div>
          <div>Life and death hang in the balance</div>
        </div>
      </div>
      
      <div class="combat-view">
        <div class="combatant player-side">
          <div class="character-silhouette">🧘</div>
          <div class="hp-bar">
            <div class="hp-fill" style="width: ${(state.health / state.maxHealth) * 100}%"></div>
          </div>
          <div class="hp-text">${state.health}/${state.maxHealth} HP</div>
          <div class="combat-name">You</div>
        </div>
        
        <div class="vs">⚔️</div>
        
        <div class="combatant enemy-side">
          <div class="character-silhouette">${enemy.icon}</div>
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
            const cdText = cooldownMs > 0 ? `<div class="combat-move-sub">Cooldown: ${escapeHtml(formatCooldownMs(cooldownMs))}</div>` : ''
            return `
              <button class="combat-move-btn" onclick="window.useEquippedMove(${i})" ${disabled ? 'disabled' : ''}>
                <div class="combat-move-title">${escapeHtml(label)}</div>
                ${cdText}
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
  log(`🏃 You fled the quest fight. Progress -${penalty}%. Mercy step next.`)

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

  // Sect pyramid flee: lose all stamina.
  const ctx = state.combatContext
  if (ctx && ctx.type === 'sectRankDuel') {
    state.stamina = 0
    log('🏃 You flee. Your stamina is exhausted.')
  } else {
    log('🏃 You flee the battle.')
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
  if (state.rerollsRemaining <= 0) return
  
  state.rerollsRemaining--
  
  // Save current luck before rerolling
  const savedLuck = state.luck
  
  rollFate()
  
  // Restore luck (don't reroll it)
  state.luck = savedLuck
  
  render()
  saveGame()
  
  log(`🎲 Rerolled fate! ${state.rerollsRemaining} rerolls remaining.`)
}

window.showResetConfirmation = () => {
  state.devModalMode = 'RESET'
  state.showResetModal = true
  render()
}

window.showSpeedConfirmation = () => {
  state.devModalMode = 'SPEED'
  state.showResetModal = true
  render()
}

window.confirmReset = () => {
  const input = document.getElementById('reset-password-input')
  const error = document.getElementById('password-error')
  const password = input ? input.value : ''
  
  if (password === 'Molly0318!') {
    // Correct password
    if (state.devModalMode === 'SPEED') {
      state.devSpeed3x = !state.devSpeed3x
      state.showResetModal = false
      log(state.devSpeed3x ? '⏩ 3× speed enabled.' : '⏩ 3× speed disabled.')
      render()
      saveGame()
    } else {
      // Reset the game
      resetGame()
    }
  } else {
    // Wrong password - show error
    if (error) {
      error.style.display = 'block'
    }
    if (input) {
      input.value = ''
      input.focus()
      // Shake animation
      input.style.animation = 'shake 0.5s'
      setTimeout(() => {
        input.style.animation = ''
      }, 500)
    }
  }
}

window.cancelReset = () => {
  state.showResetModal = false
  state.devModalMode = 'RESET'
  render()
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
  if (state.stamina >= state.maxStamina) return
  state.isResting = !state.isResting
  render()
  saveGame()
  if (state.isResting) {
    log('You begin resting... (+1 stamina per second)')
  } else {
    log('You stop resting.')
  }
}

window.farmCrops = () => {
  if (state.stamina < 2) return
  state.stamina -= 2
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
  if (state.copper < state.farmingToolCost) return
  if (state.hasBoughtTools) return // Prevent multiple purchases
  
  state.copper -= state.farmingToolCost
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
  log(`🔨 You buy farming tools! Copper gain increased by 50%!`)
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
    log('⚡ Your Qi is already at the maximum needed for the next realm.')
    return
  }

  if (!canCultivateNow()) {
    state.isCultivating = false
    render()
    saveGame()
    const limit = splitYearsMonths(getCultivationAgeLimitMonths())
    log(`⏳ You can no longer cultivate past ${limit.years} years, ${limit.months} months.`)
    return
  }

  state.isCultivating = true
  render()
  saveGame()
  log('🧘 You begin cultivating... (+1 Qi per second)')
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

  // Repeatable: 2s completion timers
  if (type === 'repeatable') {
    if (name === 'Farm Crops') return 2000
    if (name === 'Chop Wood') return 2000
    if (name === 'Sell Crops') return 1000
    if (name === 'Sell Wood') return 1000
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
    const isBusinessStory = name === 'Expansion Opportunity.' || name === 'Hiring Employees.'
    const isCloudStory = name === 'Walk with the Mysterious Cultivator to the Building.'
      || name === 'Sect Leader Offers Items and Recruitment.'
      || name === 'Arrival Among Clouds.'
      || name === 'Confronted by an Outer Disciple.'
      || name === 'Battle starts.'
      || name === 'Exploring the Sect Library.'
      || name === 'Find heavenly demon manual.'
      || name === 'Take the Demonic Manual.'
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
  const entry = _timedActions.get(key)
  if (!entry) return

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
    }
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
  const actionsList = type === 'repeatable' ? state.repeatableActions : state.specialActions
  const action = actionsList[index]
  
  if (!action || action.disabled) return

  // Optional onStart hook (used to lock in story route choices immediately)
  if (typeof action.onStart === 'function') {
    const ok = action.onStart()
    if (ok === false) {
      render()
      saveGame()
      return
    }
  }

  // Optional costs
  const costSilver = Number(action.costSilver)
  if (Number.isFinite(costSilver) && costSilver > 0) {
    if (state.silver < costSilver) return
    state.silver -= costSilver
  }

  const durationMs = getActionDurationMs(type, action)
  if (durationMs > 0) {
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
      log('❌ You need a cultivation manual to breakthrough to the next major realm!')
      state.qi += nextCost.cost // Refund Qi
      return
    }
    
    // Add corruption if on demon path
    if (state.isDemonPath && currentRealm.data.corruptionGain) {
      state.corruption += currentRealm.data.corruptionGain
      log(`😈 Your corruption increases by ${currentRealm.data.corruptionGain}! Total: ${state.corruption}`)
    }
    
    state.cultivationMajorIndex++
    state.cultivationSubIndex = 0
    const newRealm = getCurrentCultivationRealm()
    updateCombatStats() // Update strength and health with new realm multipliers
    log(`🌟 BREAKTHROUGH! You advance to ${newRealm.major} ${newRealm.sub}!`)
  } else {
    // Minor advancement
    state.cultivationSubIndex++
    const newRealm = getCurrentCultivationRealm()

    const lifespanGainMonths = getLifespanGainMonthsForMinorAdvance(state.cultivationMajorIndex, state.cultivationSubIndex)
    if (lifespanGainMonths > 0) {
      state.expectedLifespanMonths = clampNonNegativeInt(state.expectedLifespanMonths) + lifespanGainMonths
      const gainYears = Math.floor(lifespanGainMonths / 12)
      const expectedYears = splitYearsMonths(state.expectedLifespanMonths).years
      log(`🕰️ Lifespan extended by ${gainYears} year${gainYears === 1 ? '' : 's'}! Expected Lifespan: ${expectedYears} years.`)
    }

    updateCombatStats() // Update strength and health with new realm multipliers
    log(`📈 You advance to ${newRealm.major} ${newRealm.sub}!`)
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
  if (state.villageMaterialsCooldown > 0) return
  
  // Set 2 second cooldown
  state.villageMaterialsCooldown = 2
  
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
  state.businessIncomePerCycle = { silver: 5, copper: 15, gold: 0 }
  state.businessUpgradedExpansion = false
  state.businessUpgradedEmployees = false
  render()
  saveGame()
}

window.businessExpansionOpportunity = () => {
  state.businessUpgradedExpansion = true
  state.incomeCycleSeconds = 0
  state.businessCycleSeconds = 5
  state.businessIncomePerCycle = { silver: 25, copper: 35, gold: 1 }
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

window.followMysteriousCultivator = () => {
  // Next step is injected by the action callback.
  state.hasChosen100SilverRoute = true
  state.cloudCultivatorStoryStage = Math.max(1, clampNonNegativeInt(state.cloudCultivatorStoryStage))
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
  state.enemy = {
    name: 'Outer Disciple',
    icon: '🥋',
    health: stats.health,
    maxHealth: stats.health,
    strength: stats.damage
  }
  state.phase = 'COMBAT'
  ensureCombatLoop()
  render()
  saveGame()
}

window.cloudStoryExploreLibrary = () => {
  state.cloudCultivatorStoryStage = Math.max(8, clampNonNegativeInt(state.cloudCultivatorStoryStage))

  if (!state.specialActions.some(a => a?.name === 'Find heavenly demon manual.')) {
    state.specialActions.push({
      name: 'Find heavenly demon manual.',
      icon: '📖',
      description: 'Cost: Story Luck −55\nRequirement: Story Luck ≥ 55\nOutcome: Obtain Hidden Heavenly Demon Manual\nTradeoff: The option to obtain the demonic manual disappears.',
      disabled: state.luck < 55,
      onStart: () => {
        if (state.luck < 55) return false
        state.luck -= 55
        state.specialActions = state.specialActions.filter(a => a?.name !== 'Take the Demonic Manual.')
        return true
      },
      callback: () => window.cloudStoryFindHeavenlyDemonManual()
    })
  }

  if (!state.specialActions.some(a => a?.name === 'Take the Demonic Manual.')) {
    state.specialActions.push({
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
  }

  render()
  saveGame()
}

window.cloudStoryFindHeavenlyDemonManual = () => {
  state.specialActions = state.specialActions.filter(a => a?.name !== 'Find heavenly demon manual.' && a?.name !== 'Take the Demonic Manual.')

  addToInventory({
    name: 'Hidden Heavenly Demon Manual',
    icon: '📖',
    description: 'A forbidden-yet-radiant tome. Its techniques feel like sunlight cast through smoke.',
    equippable: true
  })

  render()
  saveGame()
}

window.cloudStoryTakeDemonicManual = () => {
  state.specialActions = state.specialActions.filter(a => a?.name !== 'Find heavenly demon manual.' && a?.name !== 'Take the Demonic Manual.')

  addToInventory({
    name: 'Demonic Manual',
    icon: '📕',
    description: 'A manual steeped in demonic intent. Other sects will not tolerate its use.',
    equippable: true
  })

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
  if (state.stamina < 3) return
  state.stamina -= 3
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
  
  log('✨ You acquire a legendary axe! Silver gain increased by 70%!')
  
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
  log('💰 A mysterious merchant approaches you...')
  
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
    log('❌ Sects only accept cultivators at Foundation Establishment or higher.')
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
  log(`📖 You receive a Tier 1 ${state.primaryAffinity} cultivation manual!`)
  
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
  
  log('😇 You join the Heavenly Demon Sect!')
  log('📖 You receive a Tier 1 Heavenly Demon cultivation manual!')
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

window.joinDemonMonarchSect = () => {
  state.hasJoinedSect = true
  state.currentSect = 'Demon Monarch'
  state.manualType = 'Demon'
  state.manualTier = 1
  state.isDemonPath = true
  state.corruption = 5
  state.sectRankLayer = 'outer'
  state.sectRankNumber = 6
  state.sectRankPyramidOpen = false
  applySectMultipliers(5)
  
  // Reset to demon realm progression
  state.cultivationMajorIndex = 0
  state.cultivationSubIndex = 0
  
  log('😈 You join the Demon Monarch Sect!')
  log('📖 You receive a Tier 1 Demon Monarch cultivation manual!')
  log('⚠️ WARNING: You have entered the Demon Path!')
  log('😈 Your cultivation realms have changed to Demonic realms.')
  log(`💀 Corruption: ${state.corruption} - Increases with major breakthroughs.`)
  
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
    log('❌ Insufficient spirit stones. Need 50 low-grade.')
    return
  }
  
  state.spiritStonesLow -= 50
  
  addToInventory({
    name: 'Qi Gathering Pill',
    icon: '💊',
    description: 'Instantly grants 500 Qi when consumed'
  })
  
  log('💊 You purchase a Qi Gathering Pill!')
  
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
  state.enemy = {
    name: getSectPyramidRankLabel(c.layer, c.rank),
    icon: c.layer === 'leader' ? '🏯' : '🥋',
    health: stats.health,
    maxHealth: stats.health,
    strength: stats.damage
  }
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
  log(`🏯 You claim the rank of ${getSectPyramidRankLabel(c.layer, c.rank)}!`)
}

function handleCloudStoryCombatVictory(_enemyName) {
  const ctx = state.combatContext
  if (!ctx || ctx.type !== 'cloudStoryOuterDiscipleDuel') return

  // ✅ If you win: Outer Disciple Rank 6 → Inner Disciple Rank 5
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

  // ❌ If you lose: stamina set to 0.
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
    log(`❌ Not enough Contribution Points. Need ${formatPoints(cost)}, have ${formatPoints(cp)}.`)
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
    log('📜 You already have an active quest.')
    return
  }

  state.activeQuest = createQuest()
  state.activeSidePanels.add('quests')
  render()
  saveGame()
  log('📜 New quest received! Open the Quests panel.')
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
  return {
    id: `q_${Date.now()}`,
    title: 'Clear Thunder Mountain Bandits',
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

  if (theme === 'thunderMountainBandits') {
    // Spec: “If you’re fighting mountain bandits every action should be you fighting a mountain bandit until the progress bar completes.”
    return { type: 'combat', label: 'Fight Thunder Mountain Bandit' }
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
  const enemyName = theme === 'thunderMountainBandits' ? 'Thunder Mountain Bandit' : 'Quest Enemy'
  const enemyIcon = theme === 'thunderMountainBandits' ? '🥷' : '🥋'

  state.enemy = {
    name: enemyName,
    icon: enemyIcon,
    health: stats.health,
    maxHealth: stats.health,
    strength: stats.strength
  }
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
  log(`❌ Quest fight lost. Progress -${penalty}%. Mercy step next.`)

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

  log(`✅ Quest complete! +${formatPoints(rewards.contributionPoints)} Contribution Points`)
  if (rewards.low) log(`🪨 +${formatNumber(rewards.low)} low-grade spirit stones`)
  if (rewards.mid) log(`🪨 +${formatNumber(rewards.mid)} mid-grade spirit stones`)
  if (rewards.high) log(`🪨 +${formatNumber(rewards.high)} high-grade spirit stones`)
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
      <h3>🥊 Moves</h3>
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
  return `
    <div class="moves-row">
      <div class="moves-row-label">${escapeHtml(label)}</div>
    </div>
  `
}

function getMoveDisplayName(moveId) {
  const id = String(moveId || '')
  if (!id) return ''
  if (id.startsWith('manual:')) return id.slice('manual:'.length)
  if (id === 'qiBlast') {
    const manualName = String(state.equipped?.manual || '')
    if (manualName === 'Demonic Manual') return 'Corruption'
    if (manualName === 'Hidden Heavenly Demon Manual' || manualName.startsWith('Heavenly Demon Manual')) return 'Heavenly Blast'
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
    if (!isQiBlastUnlocked()) return true
    return clampNonNegativeNumber(state.qi) < QI_BLAST_MOVE.qiCost
  }

  if (id.startsWith('manual:')) {
    const name = id.slice('manual:'.length)
    const move = getAvailableManualMoves().find(m => m.name === name)
    if (!move) return true
    return clampNonNegativeNumber(state.qi) < clampNonNegativeNumber(move.qiCost)
  }

  return false
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
    if (clampNonNegativeNumber(state.qi) < move.qiCost) return
    state.qi = clampNonNegativeNumber(state.qi) - move.qiCost
    const damage = Math.floor(clampNonNegativeNumber(state.strength) * move.damageMult)
    enemy.health = Math.max(0, clampNonNegativeNumber(enemy.health) - damage)
    state.playerCooldowns[id] = move.cooldownMs
    log(`You use ${move.name}! ${damage} damage!`)
    return
  }

  if (id === 'qiBlast') {
    if (!isQiBlastUnlocked()) return
    const move = QI_BLAST_MOVE
    if (clampNonNegativeNumber(state.qi) < move.qiCost) return
    state.qi = clampNonNegativeNumber(state.qi) - move.qiCost
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

    const qiCost = clampNonNegativeNumber(move.qiCost)
    if (clampNonNegativeNumber(state.qi) < qiCost) return
    state.qi = clampNonNegativeNumber(state.qi) - qiCost

    const equippedType = getEquippedManualType()
    const affinityBonus = equippedType ? getAffinityBonus(equippedType) : 0
    const baseDamage = clampNonNegativeNumber(state.strength) * clampNonNegativeNumber(move.damage)
    const damage = Math.floor(baseDamage * (1 + affinityBonus))

    enemy.health = Math.max(0, clampNonNegativeNumber(enemy.health) - damage)
    const cooldownKey = `manual_${move.name.replace(/\s+/g, '_')}`
    state.playerCooldowns[cooldownKey] = clampNonNegativeNumber(move.cooldown) * 1000

    log(`✨ You use ${move.name}! ${damage} damage!`)
    if (affinityBonus > 0) {
      log(`🌟 Affinity bonus: +${Math.floor(affinityBonus * 100)}%`)
    }

    if (move.special === 'heal') {
      const healAmount = Math.floor(clampNonNegativeNumber(state.maxHealth) * 0.2)
      state.health = Math.min(clampNonNegativeNumber(state.maxHealth), clampNonNegativeNumber(state.health) + healAmount)
      log(`💚 You heal for ${healAmount} HP!`)
    } else if (move.special === 'lifesteal') {
      const healAmount = Math.floor(damage * 0.3)
      state.health = Math.min(clampNonNegativeNumber(state.maxHealth), clampNonNegativeNumber(state.health) + healAmount)
      log(`🩸 You steal ${healAmount} HP!`)
    }
    return
  }
}

let _combatLoopTimer = null
let _combatLoopLast = 0
let _combatUiNextRenderAt = 0
const COMBAT_UI_RENDER_INTERVAL_MS = 160
const ENEMY_ACTION_GAP_MS = 3000

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
  state.health = Math.max(0, clampNonNegativeNumber(state.health) - damage)
  enemy.cooldowns[pick] = resolvedMove.cooldownMs
  enemy.nextActionAt = now + ENEMY_ACTION_GAP_MS
  log(`${enemy.name} uses ${resolvedMove.name}! ${damage} damage!`)

  if (state.health <= 0) {
    if (handleQuestCombatDefeat()) {
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
  try { handleCloudStoryCombatVictory(defeatedName) } catch (_) {}
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
  
  // Tick down encounter cooldown
  if (state.encounterCooldown > 0) {
    state.encounterCooldown = Math.max(0, state.encounterCooldown - speed)
  }
  
  // Regenerate stamina if resting
  if (state.isResting && state.stamina < state.maxStamina) {
    state.stamina = Math.min(state.maxStamina, state.stamina + speed)
    needsRender = true
    needsSave = true
    
    // Stop resting when full
    if (state.stamina >= state.maxStamina) {
      state.isResting = false
      log('Stamina fully restored!')
    }
  }
  
  // Generate Qi if cultivating
  if (state.isCultivating) {
    const nextCost = getNextCultivationCost()
    const hasQiCap = Boolean(nextCost && Number.isFinite(nextCost.cost) && nextCost.cost > 0)
    const atQiCap = hasQiCap && state.qi >= nextCost.cost

    if (atQiCap) {
      state.isCultivating = false
      log('⚡ Your Qi is capped for the next realm. Breakthrough/Advance to progress further.')
      needsRender = true
      needsSave = true
    } else
    if (!canCultivateNow()) {
      state.isCultivating = false
      const limit = splitYearsMonths(getCultivationAgeLimitMonths())
      log(`⏳ You can no longer cultivate past ${limit.years} years, ${limit.months} months.`)
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
        log(`⏳ You can no longer cultivate past ${limit.years} years, ${limit.months} months.`)
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

      if (silverAdd) state.silver = clampNonNegativeInt(state.silver) + silverAdd
      if (copperAdd) state.copper = clampNonNegativeInt(state.copper) + copperAdd
      if (goldAdd) state.gold = clampNonNegativeInt(state.gold) + goldAdd

      if (silverAdd || copperAdd || goldAdd) {
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
if (!loadGame()) {
  // New game: run intro loading flow before fate roll
  state.phase = 'INTRO_LOADING'
  state.playerName = ''
  state.playerGender = null
  state.intro = { progress: 0, step: 'loading', usernameDraft: '', hasAnimatedTitle: false }
}

// If we land on fate roll without rolled fate (older saves), roll once and persist.
if (state.phase === 'FATE_ROLL' && !state.bloodline) {
  rollFate()
  saveGame()
}
render()

console.log('Cultivation Saga loaded')
