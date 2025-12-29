import './style.css'

// ============================================================================
// CULTIVATION SAGA - Button-Only Cultivation RPG
// ============================================================================

// ============================================================================
// BLOODLINE DATA (50 TOTAL)
// ============================================================================
const BLOODLINES = [
  { name: 'Mortal', weight: 8, qiMult: 1.10, hpMult: 1.10, strMult: 1.10, tier: 5 },
  { name: 'Commoner', weight: 7, qiMult: 1.11, hpMult: 1.11, strMult: 1.11, tier: 5 },
  { name: 'Farmhand', weight: 6, qiMult: 1.12, hpMult: 1.12, strMult: 1.12, tier: 5 },
  { name: "Merchant's Line", weight: 5, qiMult: 1.13, hpMult: 1.13, strMult: 1.13, tier: 5 },
  { name: "Demon's Guard Line", weight: 5, qiMult: 1.14, hpMult: 1.14, strMult: 1.14, tier: 5 },
  { name: 'Hunter', weight: 4, qiMult: 1.15, hpMult: 1.15, strMult: 1.15, tier: 5 },
  { name: "Scholar's Line", weight: 4, qiMult: 1.16, hpMult: 1.16, strMult: 1.16, tier: 5 },
  { name: 'Craftsman', weight: 3, qiMult: 1.17, hpMult: 1.17, strMult: 1.17, tier: 5 },
  { name: 'Minor Noble', weight: 3, qiMult: 1.18, hpMult: 1.18, strMult: 1.18, tier: 5 },
  { name: 'Demonic Retainer Line', weight: 3, qiMult: 1.20, hpMult: 1.20, strMult: 1.20, tier: 5 },
  
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

// ============================================================================
// SPIRITUAL ROOTS DATA
// ============================================================================
const SPIRITUAL_ROOTS = [
  { count: 1, weight: 50, qiMult: 1.2 },
  { count: 2, weight: 30, qiMult: 2.4 },
  { count: 3, weight: 15, qiMult: 5.0 },
  { count: 4, weight: 4, qiMult: 7.5 },
  { count: 5, weight: 1, qiMult: 12.0 }
]

// ============================================================================
// AFFINITY DATA
// ============================================================================
const AFFINITIES = [
  'Fire', 'Decay', 'Sound', 'Water', 'Ice', 'Space', 'Earth', 
  'Cloud', 'Air', 'Black Hole', 'Grass', 'Thunder', 'Poison', 'Sickness'
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
    { sub: 'I', qiMult: 1, strMult: 1, hpMult: 1, minorCost: 2, majorCost: null },
    { sub: 'II', qiMult: 1.1, strMult: 1.1, hpMult: 1.1, minorCost: 4, majorCost: null },
    { sub: 'III', qiMult: 1.2, strMult: 1.2, hpMult: 1.2, minorCost: 6, majorCost: null },
    { sub: 'IV', qiMult: 1.3, strMult: 1.3, hpMult: 1.3, minorCost: 8, majorCost: null },
    { sub: 'V', qiMult: 1.4, strMult: 1.4, hpMult: 1.4, minorCost: 10, majorCost: null },
    { sub: 'VI', qiMult: 1.5, strMult: 1.5, hpMult: 1.5, minorCost: 12, majorCost: null },
    { sub: 'VII', qiMult: 1.6, strMult: 1.6, hpMult: 1.6, minorCost: 14, majorCost: null },
    { sub: 'VIII', qiMult: 1.7, strMult: 1.7, hpMult: 1.7, minorCost: 16, majorCost: null },
    { sub: 'IX', qiMult: 1.8, strMult: 1.8, hpMult: 1.8, minorCost: 18, majorCost: 35 }
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
  phase: 'FATE_ROLL', // FATE_ROLL, FARMING, FAKE_IMMORTAL, WOOD, SECT, COMBAT
  
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
  
  // Business & Story
  hasStartedBusiness: false,
  hasManual: false,
  hasGoneWithCultivator: false,
  hasMetRealCultivator: false,
  hasJoinedSect: false,
  sectReputation: 0,
  hasAdvancedManual: false,
  encounterCooldown: 0,
  manualTier: 0,
  manualType: null,
  
  // Combat
  inCombat: false,
  enemy: null,
  playerCooldowns: {
    punch: 0,
    superPunch: 0,
    qiBlast: 0
  },
  
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
  resetPassword: '',
  activeSidePanels: new Set(), // Set of 'stats', 'inventory', 'actions'

  // Persisted drag offsets (CSS translate) per panel
  panelPositions: {
    stats: { x: 0, y: 0 },
    inventory: { x: 0, y: 0 },
    actions: { x: 0, y: 0 }
  },
  
  // Inventory
  inventory: [],
  
  // Actions (for story management)
  repeatableActions: [],
  specialActions: [],
  
  // Cooldown system
  buttonCooldowns: {},
  villageMaterialsCooldown: 0
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
  if (!state.manualType || state.manualTier === 0) return []
  
  const moves = MANUAL_MOVES[state.manualType] || []
  return moves.filter(m => m.tier <= state.manualTier)
}

function getAffinityScore(affinityType) {
  const aff = state.affinities.find(a => a.type === affinityType)
  return aff ? aff.score : 0
}

function getAffinityBonus(affinityType) {
  const score = getAffinityScore(affinityType)
  return score / 50 // Returns 0.0 to 1.0 multiplier
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
      panelPositions: state.panelPositions
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
        state.panelPositions = { stats: { x: 0, y: 0 }, inventory: { x: 0, y: 0 }, actions: { x: 0, y: 0 } }
      }
      for (const key of ['stats', 'inventory', 'actions']) {
        const p = state.panelPositions[key] || {}
        state.panelPositions[key] = {
          x: Number.isFinite(p.x) ? p.x : 0,
          y: Number.isFinite(p.y) ? p.y : 0
        }
      }
      
      return true
    }
  } catch (e) {
    console.error('Failed to load game:', e)
  }
  return false
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
  const biasedBloodlines = BLOODLINES.map(b => ({
    ...b,
    weight: b.tier <= 3 ? b.weight * (1 + state.rebirthUpgrades.bloodlineBias) : b.weight
  }))
  
  state.bloodline = weightedRandom(biasedBloodlines)
  
  // Roll spiritual roots with min/max constraints
  const validRoots = SPIRITUAL_ROOTS.filter(r => 
    r.count >= state.rebirthUpgrades.minRootCount &&
    r.count <= state.rebirthUpgrades.maxRootCount
  )
  
  state.spiritualRoots = weightedRandom(validRoots)
  
  // Roll luck (1-100)
  state.luck = Math.floor(Math.random() * 100) + 1
  
  // Roll affinities (1-6 affinities)
  const affinityCount = Math.floor(Math.random() * 6) + 1
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

function getNextCultivationCost() {
  const realm = getCurrentCultivationRealm()
  const isLastSubRealm = state.cultivationSubIndex === 8 // IX is the last (index 8)
  
  if (isLastSubRealm && realm.data.majorCost) {
    return { cost: realm.data.majorCost, type: 'breakthrough' }
  } else if (!isLastSubRealm) {
    return { cost: realm.data.minorCost, type: 'advancement' }
  } else {
    return { cost: null, type: 'max' } // Max realm reached
  }
}

function calculateQiGain(baseQi) {
  const realm = getCurrentCultivationRealm()
  return baseQi * state.bloodline.qiMult * state.spiritualRoots.qiMult * realm.data.qiMult * state.qiMultiplier
}

function calculateStrength() {
  const realm = getCurrentCultivationRealm()
  return Math.floor(10 * state.bloodline.strMult * realm.data.strMult)
}

function calculateMaxHealth() {
  const realm = getCurrentCultivationRealm()
  return Math.floor(100 * state.bloodline.hpMult * realm.data.hpMult)
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
  
  return `
    <div class="cultivation-panel">
      <h3>⚡ Cultivation</h3>
      
      <div class="cultivation-silhouette-container">
        <img src="/assets/meditation-silhouette-framed.jpg" class="cultivation-silhouette" alt="Cultivation">
        <div class="cultivation-fill ${state.isCultivating ? 'cultivating-active' : ''}" 
             style="height: ${progressPercent}%;"></div>
      </div>
      
      <div class="cultivation-info">
        <div><strong>Realm:</strong> ${realm.major} ${realm.sub}</div>
        <div><strong>Qi Mult:</strong> ${realm.data.qiMult}x</div>
        <div><strong>Progress:</strong> ${progressPercent.toFixed(1)}%</div>
      </div>
      <button onclick="window.toggleCultivate()" class="${state.isCultivating ? 'cultivating' : ''}">
        🧘 ${state.isCultivating ? 'Cultivating...' : 'Cultivate'} (+1 Qi/sec)
      </button>
      ${nextCost.cost ? `
        <button onclick="window.advanceRealm()" ${state.qi < nextCost.cost || (nextCost.type === 'breakthrough' && state.cultivationMajorIndex === 0 && !state.hasManual) ? 'disabled' : ''}>
          ${nextCost.type === 'breakthrough' ? '🌟 Breakthrough' : '📈 Advance'} to ${nextRealmText} (${nextCost.cost} Qi)
        </button>
        ${nextCost.type === 'breakthrough' && state.cultivationMajorIndex === 0 && !state.hasManual ? '<div style="color: #ef4444; font-size: 0.9em; margin-top: 8px;">⚠️ Requires cultivation manual</div>' : ''}
      ` : '<div class="max-realm">🏆 Maximum Realm Achieved!</div>'}
    </div>
  `
}

// ============================================================================
// UI RENDERING
// ============================================================================
function render() {
  const app = document.getElementById('app')

  // Ensure side panel state is always a Set (saved games may deserialize this as an array/object)
  if (!(state.activeSidePanels instanceof Set)) {
    if (Array.isArray(state.activeSidePanels)) {
      state.activeSidePanels = new Set(state.activeSidePanels)
    } else {
      state.activeSidePanels = new Set()
    }
  }
  
  if (state.phase === 'FATE_ROLL') {
    renderFateRoll(app)
  } else if (state.phase === 'FARMING') {
    renderFarming(app)
  } else if (state.phase === 'FAKE_IMMORTAL') {
    renderFakeImmortal(app)
  } else if (state.phase === 'WOOD') {
    renderWood(app)
  } else if (state.phase === 'SECT') {
    renderSect(app)
  } else if (state.phase === 'COMBAT') {
    renderCombat(app)
  }
  
  // Always update log after render
  renderLog()

  // Ensure we have a main-container anchor + overlay layer for side panels.
  // This must exist BEFORE rendering any side panels.
  ensureSidePanelsOverlay()
  
  // Render side panel toggle buttons and active panel
  if (state.phase !== 'FATE_ROLL') {
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
  // Prefer the central container that holds cultivation + phase content.
  // Fallback to action panel in phases that only show a central action panel.
  return (
    document.querySelector('.panels-container') ||
    document.querySelector('.action-panel') ||
    document.getElementById('app')
  )
}

function ensureSidePanelsOverlay() {
  const main = getMainContainerElement()
  if (!main) return null

  // Mark as anchor reference
  if (!main.classList.contains('main-container')) {
    main.classList.add('main-container')
  }

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

function renderResetModal() {
  // Check if modal already exists
  let modal = document.getElementById('reset-modal')
  if (!modal) {
    modal = document.createElement('div')
    modal.id = 'reset-modal'
    modal.className = 'modal-overlay'
    document.body.appendChild(modal)
  }
  
  modal.innerHTML = `
    <div class="modal-content">
      <h2>🔒 Developer Reset</h2>
      <p>Enter password to reset game:</p>
      <input 
        type="password" 
        id="reset-password-input" 
        class="password-input" 
        placeholder="Enter password"
        onkeypress="if(event.key === 'Enter') window.confirmReset()"
      />
      <p class="password-error" id="password-error" style="display: none;">Incorrect password!</p>
      <div class="modal-buttons">
        <button onclick="window.confirmReset()" class="reset-button">Confirm Reset</button>
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
    devButton.innerHTML = `
      <button onclick="window.showResetConfirmation()" class="dev-reset-button">🔓 Dev Reset</button>
    `
    document.body.appendChild(devButton)
  }
}

// ============================================================================
// SIDE PANEL TOGGLE SYSTEM
// ============================================================================
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
  `
}

window.toggleSidePanel = function(panelType) {
  // Toggle the panel - if it's already open, close it; otherwise, open it
  if (state.activeSidePanels.has(panelType)) {
    state.activeSidePanels.delete(panelType)
  } else {
    state.activeSidePanels.add(panelType)
  }
  render()
}

function renderActivePanel() {
  // Render all active panels, remove inactive ones
  const statsPanel = document.getElementById('stats-panel')
  const inventoryPanel = document.getElementById('inventory-panel')
  const actionsPanel = document.getElementById('actions-panel')
  
  // Remove panels that shouldn't be visible
  if (statsPanel && !state.activeSidePanels.has('stats')) {
    statsPanel.remove()
  }
  if (inventoryPanel && !state.activeSidePanels.has('inventory')) {
    inventoryPanel.remove()
  }
  if (actionsPanel && !state.activeSidePanels.has('actions')) {
    actionsPanel.remove()
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
      <span class="stat-value">${state.stamina}/${state.maxStamina}</span>
    </div>
    <div class="stat-item">
      <span class="stat-label">💪 Strength:</span>
      <span class="stat-value">${state.strength}</span>
    </div>
    <div class="stat-item">
      <span class="stat-label">❤️ Health:</span>
      <span class="stat-value">${state.health}/${state.maxHealth}</span>
    </div>
    <div class="stat-item">
      <span class="stat-label"><img src="/assets/ki.png" class="stat-icon" alt="Qi"> Qi:</span>
      <span class="stat-value">${state.qi.toFixed(1)}</span>
    </div>
    <div class="stat-item">
      <span class="stat-label">🎲 Luck:</span>
      <span class="stat-value">${state.luck}</span>
    </div>
    
    <div class="stat-divider"></div>
    <h4>Currencies</h4>
    
    <div class="stat-item">
      <span class="stat-label"><img src="/assets/copper-coin.png" class="stat-icon" alt="Copper"> Copper:</span>
      <span class="stat-value">${state.copper}</span>
    </div>
    <div class="stat-item">
      <span class="stat-label"><img src="/assets/silver-coin.png" class="stat-icon" alt="Silver"> Silver:</span>
      <span class="stat-value">${state.silver}</span>
    </div>
    <div class="stat-item">
      <span class="stat-label"><img src="/assets/gold-coin.png" class="stat-icon" alt="Gold"> Gold:</span>
      <span class="stat-value">${state.gold}</span>
    </div>
    
    <div class="stat-divider"></div>
    <h4>Spirit Stones</h4>
    
    <div class="stat-item">
      <span class="stat-label"><img src="/assets/spiritstone-low.png" class="stat-icon" alt="Low"> Low:</span>
      <span class="stat-value">${state.spiritStonesLow}</span>
    </div>
    <div class="stat-item">
      <span class="stat-label"><img src="/assets/spiritstone-mid.png" class="stat-icon" alt="Mid"> Mid:</span>
      <span class="stat-value">${state.spiritStonesMid}</span>
    </div>
    <div class="stat-item">
      <span class="stat-label"><img src="/assets/spiritstone-high.png" class="stat-icon" alt="High"> High:</span>
      <span class="stat-value">${state.spiritStonesHigh}</span>
    </div>
    
    ${state.isDemonPath ? `
      <div class="stat-divider"></div>
      <h4>Demon Path</h4>
      <div class="stat-item">
        <span class="stat-label">😈 Corruption:</span>
        <span class="stat-value">${state.corruption}</span>
      </div>
    ` : ''}
    
    ${state.currentSect ? `
      <div class="stat-divider"></div>
      <h4>Sect</h4>
      <div class="stat-item">
        <span class="stat-label">${SECTS[state.currentSect]?.icon || '⛩️'} ${state.currentSect}:</span>
        <span class="stat-value">Rep ${state.sectReputation}</span>
      </div>
      ${state.manualTier > 0 ? `
        <div class="stat-item">
          <span class="stat-label">📖 Manual:</span>
          <span class="stat-value">Tier ${state.manualTier}</span>
        </div>
      ` : ''}
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
  
  inventoryPanel.innerHTML = `
    <div class="panel-header" onmousedown="window.startDrag(event, 'inventory-panel')">
      <h3>📦 Inventory</h3>
      <span class="drag-hint">✥ Drag to move ✥</span>
    </div>
    <div class="panel-content">
    <div class="inventory-items">
      ${state.inventory.length === 0 ? '<div class="inventory-empty">Empty</div>' : ''}
      ${state.inventory.map((item, index) => `
        <div class="inventory-item" title="${item.description || ''}">
          <div class="item-icon">${item.icon || '📦'}</div>
          <div class="item-info">
            <div class="item-name">${item.name}</div>
            ${item.quantity > 1 ? `<div class="item-quantity">x${item.quantity}</div>` : ''}
          </div>
        </div>
      `).join('')}
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
    getSidePanelsMount().appendChild(actionsPanel)

    const pos = state.panelPositions?.actions
    if (pos && (pos.x !== 0 || pos.y !== 0)) {
      actionsPanel.style.transform = `translate(${pos.x}px, ${pos.y}px)`
    }
  }
  
  // Update action states dynamically based on current game state
  if (state.phase === 'FARMING') {
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
    
    const mysteriousHerbAction = state.specialActions.find(a => a.name && a.name.includes('Find Mysterious Herb'))
    if (mysteriousHerbAction) {
      mysteriousHerbAction.disabled = state.storyLuck < 10
    }
    
    // Dynamically add silver-related actions when reaching 50 silver
    if (state.silver >= 50 && !state.hasBoughtNormalAxe && !state.hasBoughtLegendaryTools) {
      // Add normal axe option if not exists
      if (!state.specialActions.find(a => a.name && a.name.includes('Buy Normal Axe'))) {
        state.specialActions.push({
          name: 'Buy Normal Axe',
          icon: '🪓',
          disabled: false,
          callback: () => window.buyNormalAxe()
        })
      }
      
      // Add legendary tools option if not exists
      if (!state.specialActions.find(a => a.name && a.name.includes('Legendary Farming Tools'))) {
        state.specialActions.push({
          name: 'Legendary Farming Tools',
          icon: '✨',
          disabled: false,
          callback: () => window.buyLegendaryTools()
        })
      }
      
      // 50% chance to add bargain option if not seen yet
      if (!state.hasSeenBargain && !state.specialActions.find(a => a.name && a.name.includes('Bargain'))) {
        if (Math.random() < 0.5) {
          state.specialActions.push({
            name: 'Bargain',
            icon: '💰',
            disabled: false,
            callback: () => window.startBargain()
          })
        }
      }
    }
    
    // Update special action states for silver-related actions
    const normalAxeAction = state.specialActions.find(a => a.name && a.name === 'Buy Normal Axe')
    if (normalAxeAction) {
      normalAxeAction.disabled = state.silver < 50
    }
    
    const legendaryToolsAction = state.specialActions.find(a => a.name && a.name.includes('Legendary Farming Tools'))
    if (legendaryToolsAction) {
      legendaryToolsAction.disabled = state.storyLuck < 20
    }
    
    // Update advanced manual action
    const advancedManualAction = state.specialActions.find(a => a.name && a.name.includes('Buy Advanced Manual'))
    if (advancedManualAction) {
      advancedManualAction.disabled = state.sectReputation < 100
    }
    
    // Update qi pill action  
    const qiPillAction = state.specialActions.find(a => a.name && a.name.includes('Buy Qi Gathering Pill'))
    if (qiPillAction) {
      qiPillAction.disabled = state.spiritStonesLow < 50
    }
    
    // Dynamically add business/cultivator options at 100 silver
    if (state.silver >= 100 && !state.hasStartedBusiness && !state.hasGoneWithCultivator) {
      // Add business option if not exists
      if (!state.specialActions.find(a => a.name && a.name.includes('Go into Business'))) {
        state.specialActions.push({
          name: 'Go into Business',
          icon: '💼',
          disabled: false,
          callback: () => window.startBusiness()
        })
      }
      
      // Add mysterious cultivator option if not exists
      if (!state.specialActions.find(a => a.name && a.name.includes('Go with Mysterious Cultivator'))) {
        state.specialActions.push({
          name: 'Go with Mysterious Cultivator',
          icon: '🧙‍♂️',
          disabled: false,
          callback: () => window.goWithMysteriousCultivator()
        })
      }
    }
    
    // Update business action state
    const businessAction = state.specialActions.find(a => a.name && a.name.includes('Go into Business'))
    if (businessAction) {
      businessAction.disabled = state.silver < 100
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
            return `
              <button class="action-button" onclick="window.executeAction('repeatable', ${index})" ${action.disabled ? 'disabled' : ''}>
                ${action.icon || '⭐'} ${action.name}${cooldownText}
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
            <button class="action-button special" onclick="window.executeAction('special', ${index})" ${action.disabled ? 'disabled' : ''}>
              ${action.icon || '🌟'} ${action.name}
            </button>
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
  container.innerHTML = `
    <div class="fate-screen">
      <h1>✨ Fate Roll ✨</h1>
      <div class="fate-results">
        <div class="fate-section">
          <h2>Bloodline</h2>
          <div class="bloodline-name">${state.bloodline.name}</div>
          <div class="bloodline-tier">Tier ${state.bloodline.tier}</div>
          <div class="multipliers">
            <div>Qi: ${state.bloodline.qiMult}x</div>
            <div>Health: ${state.bloodline.hpMult}x</div>
            <div>Strength: ${state.bloodline.strMult}x</div>
          </div>
        </div>
        
        <div class="fate-section">
          <h2>Spiritual Roots</h2>
          <div class="root-count">${state.spiritualRoots.count} Root${state.spiritualRoots.count > 1 ? 's' : ''}</div>
          <div class="multipliers">
            <div>Qi Multiplier: ${state.spiritualRoots.qiMult}x</div>
          </div>
        </div>
        
        <div class="fate-section">
          <h2>Final Multipliers</h2>
          <div class="multipliers">
            <div>Total Qi: ${(state.bloodline.qiMult * state.spiritualRoots.qiMult).toFixed(2)}x</div>
            <div>Max Health: ${state.maxHealth}</div>
            <div>Strength: ${state.strength}</div>
          </div>
        </div>
        
        <div class="fate-section">
          <h2>Story Luck</h2>
          <div class="root-count">${state.luck}</div>
          <div class="multipliers">
            <div>Unlocks special story paths</div>
          </div>
        </div>
        
        <div class="fate-section affinity-section">
          <h2>✨ Elemental Affinities ✨</h2>
          <div class="magic-circle">
            <div class="pentagram">⭐</div>
            <div class="affinity-display">
              ${state.affinities.map((aff, idx) => {
                const affinityLower = aff.type.toLowerCase().replace(/\s+/g, '')
                const fallbackIcon = SECTS[aff.type]?.icon || '✨'
                // Calculate position around circle
                const angle = (idx * 360 / 6) - 90 // Start at top
                const radius = 180 // Distance from center
                const x = 50 + radius * Math.cos(angle * Math.PI / 180) / 4.5 // Convert to percentage
                const y = 50 + radius * Math.sin(angle * Math.PI / 180) / 4.5
                return `
                  <div class="affinity-item ${idx === 0 ? 'primary' : ''}" style="left: ${x}%; top: ${y}%;">
                    <img src="/assets/${affinityLower}.png" class="affinity-icon" alt="${aff.type}" onerror="this.style.display='none'; this.nextElementSibling.style.display='block'">
                    <div class="affinity-icon-fallback" style="display: none; font-size: 48px; width: 60px; height: 60px; display: none; align-items: center; justify-content: center; border: 2px solid #fbbf24; border-radius: 8px; background: rgba(15, 23, 42, 0.9);">${fallbackIcon}</div>
                    <div class="affinity-name">${aff.type}</div>
                    <div class="affinity-score">${aff.score}/50</div>
                  </div>
                `
              }).join('')}
            </div>
          </div>
          <div class="primary-affinity-label">
            Primary Affinity: <span>${state.primaryAffinity}</span> (${state.affinities[0]?.score || 0}/50)
          </div>
          <div class="multipliers">
            <div>Higher scores boost manual effectiveness</div>
            <div>Multiple affinities unlock different sect paths</div>
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
        <div class="character-silhouette">🧑‍🌾</div>
        <div class="character-info">
          <div><strong>${state.bloodline.name}</strong></div>
          <div>${state.spiritualRoots.count} Spiritual Root${state.spiritualRoots.count > 1 ? 's' : ''}</div>
        </div>
      </div>
      
      <div class="game-content-layout">
        <div class="log">
          <h3>Activity Log</h3>
          <div id="game-log"></div>
        </div>
        
        <div class="panels-container">
          ${renderCultivationInfo()}
          
          <div class="action-panel">
            <h2>Farming Phase</h2>
            <p class="story-text">You find yourself working as a humble farmer. The sun rises and sets, and your days blend together in endless toil.</p>
            <p class="story-text">Use the Actions panel to perform activities.</p>
          </div>
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
          
          <div class="action-panel">
            <h2>Lumberjack Phase</h2>
            <p class="story-text">Having learned your lesson, you discover a new path: chopping wood for silver coins. The rhythmic swing of the axe and the scent of fresh timber mark your days.</p>
            
            <div class="button-group">
              <button onclick="window.rest()" ${state.stamina >= state.maxStamina ? 'disabled' : ''} class="${state.isResting ? 'resting' : ''}">
                😴 Rest ${state.isResting ? '(Resting...)' : '(+1/sec)'}
              </button>
              
              <button onclick="window.chopWood()" ${state.stamina < 2 ? 'disabled' : ''}>
                🪓 Chop Wood (2 Stamina)
              </button>
              
              <button onclick="window.sellWood()">
                💎 Sell Wood (Get Silver)
              </button>
              
              <button onclick="window.farmCrops()" ${state.stamina < 2 ? 'disabled' : ''}>
                🌾 Farm Crops (2 Stamina)
              </button>
              
              <button onclick="window.sellCrops()">
                💰 Sell Crops (Get Copper)
              </button>
            </div>
            
            ${state.silver >= 50 ? `
              <div class="story-event">
                <p>⚠️ A fork in the road appears before you...</p>
                <button onclick="window.showSectChoice()">Investigate</button>
              </div>
            ` : ''}
          </div>
        </div>
      </div>
    </div>
  `
}

function renderSect(container) {
  container.innerHTML = `
    <div class="game-screen">
      <div class="character-display">
        <div class="character-silhouette">⛰️</div>
        <div class="character-info">
          <div><strong>The Crossroads</strong></div>
          <div>A fateful decision awaits</div>
        </div>
      </div>
      
      <div class="action-panel">
        <h2>The Path Diverges</h2>
        <p class="story-text">A mysterious sect leader appears before you. "I sense potential in you, young one. Come, join the Cloud Sect and begin your true cultivation journey!"</p>
        
        <p class="story-text">Alternatively, you could use your silver to start a business in town...</p>
        
        <div class="button-group">
          <button onclick="window.joinSect()">
            ⛰️ Follow the Sect Leader
          </button>
          
          <button onclick="window.startBusiness()">
            💼 Start a Business
          </button>
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
        
        <div class="button-group">
          <button onclick="window.attack('punch')" 
            ${state.playerCooldowns.punch > 0 ? 'disabled' : ''}>
            👊 Punch (${state.strength} dmg)
            ${state.playerCooldowns.punch > 0 ? `<br><small>Cooldown: ${state.playerCooldowns.punch}s</small>` : ''}
          </button>
          
          <button onclick="window.attack('superPunch')" 
            ${state.playerCooldowns.superPunch > 0 ? 'disabled' : ''}>
            💥 Super Punch (${state.strength * 2} dmg)
            ${state.playerCooldowns.superPunch > 0 ? `<br><small>Cooldown: ${state.playerCooldowns.superPunch}s</small>` : ''}
          </button>
          
          <button onclick="window.attack('qiBlast')" 
            ${state.playerCooldowns.qiBlast > 0 || state.qi < 10 ? 'disabled' : ''}>
            ⚡ Qi Blast (${state.strength * 3} dmg, 10 Qi)
            ${state.playerCooldowns.qiBlast > 0 ? `<br><small>Cooldown: ${state.playerCooldowns.qiBlast}s</small>` : ''}
          </button>
          
          ${getAvailableManualMoves().map(move => {
            const cooldownKey = `manual_${move.name.replace(/\s+/g, '_')}`
            const isOnCooldown = state.playerCooldowns[cooldownKey] > 0
            const notEnoughQi = state.qi < move.qiCost
            return `
              <button onclick="window.useManualMove('${move.name}')" 
                ${isOnCooldown || notEnoughQi ? 'disabled' : ''}>
                ${move.name} (${Math.floor(state.strength * move.damage)} dmg, ${move.qiCost} Qi)
                ${isOnCooldown ? `<br><small>Cooldown: ${state.playerCooldowns[cooldownKey]}s</small>` : ''}
                ${notEnoughQi && !isOnCooldown ? '<br><small>Not enough Qi</small>' : ''}
              </button>
            `
          }).join('')}
        </div>
      </div>
      
      <div class="log">
        <div id="game-log"></div>
      </div>
    </div>
  `
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
  state.showResetModal = true
  render()
}

window.confirmReset = () => {
  const input = document.getElementById('reset-password-input')
  const error = document.getElementById('password-error')
  const password = input ? input.value : ''
  
  if (password === 'Molly0318!') {
    // Correct password - reset the game
    resetGame()
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
  state.isCultivating = !state.isCultivating
  render()
  saveGame()
  if (state.isCultivating) {
    log('🧘 You begin cultivating... (+1 Qi per second)')
  } else {
    log('You stop cultivating.')
  }
}

// ============================================================================
// ACTIONS SYSTEM
// ============================================================================
window.executeAction = (type, index) => {
  const actionsList = type === 'repeatable' ? state.repeatableActions : state.specialActions
  const action = actionsList[index]
  
  if (!action || action.disabled) return
  
  // Execute the action's callback
  if (action.callback) {
    action.callback()
  }
  
  // Remove special actions after use (they're one-time)
  if (type === 'special') {
    state.specialActions.splice(index, 1)
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
  
  // 50% chance to discover deep woods
  if (Math.random() < 0.5) {
    state.specialActions.push({
      name: 'Enter Deep into the Woods',
      icon: '🌲',
      disabled: false,
      callback: () => window.enterDeepWoods()
    })
    log('🌲 You notice a path leading deeper into the forest...')
  }
  
  // 20% chance to discover village quest
  if (Math.random() < 0.2) {
    state.specialActions.push({
      name: 'Help Neighboring Village',
      icon: '🏘️',
      disabled: false,
      callback: () => window.helpNeighboringVillage()
    })
    log('🏘️ You hear about a nearby village in need of help...')
  }
  
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

window.enterDeepWoods = () => {
  log('🌲 You venture deeper into the woods...')
  
  // Remove this action
  state.specialActions = state.specialActions.filter(a => !a.name.includes('Enter Deep'))
  
  // Add two new options
  state.specialActions.push(
    {
      name: 'Find Nothing',
      icon: '❌',
      disabled: false,
      callback: () => window.findNothing()
    },
    {
      name: 'Find Mysterious Herb',
      icon: '🌿',
      disabled: false,
      callback: () => window.findMysteriousHerb()
    }
  )
  
  render()
  saveGame()
}

window.findNothing = () => {
  log('❌ You search around but find nothing of value.')
  
  // Remove both search options
  state.specialActions = state.specialActions.filter(a => 
    !a.name.includes('Find Nothing') && !a.name.includes('Find Mysterious Herb')
  )
  
  render()
  saveGame()
}

window.findMysteriousHerb = () => {
  if (state.storyLuck < 10) return
  
  state.storyLuck -= 10
  state.qiMultiplier = 1.2 // 20% boost to Qi gain
  
  addToInventory({
    name: 'Mysterious Herb',
    icon: '🌿',
    description: 'A rare herb that enhances Qi cultivation by 20%'
  })
  
  log('🌿 You found a mysterious herb! Your Qi gain is permanently increased by 20%!')
  
  // Remove both search options
  state.specialActions = state.specialActions.filter(a => 
    !a.name.includes('Find Nothing') && !a.name.includes('Find Mysterious Herb')
  )
  
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
  
  addToInventory({
    name: 'Normal Axe',
    icon: '🪓',
    description: 'A quality axe that increases silver gain by 50%'
  })
  
  log('🪓 You buy a normal axe! Silver gain increased by 50%!')
  
  // Remove legendary tools option if it exists
  state.specialActions = state.specialActions.filter(a => !a.name.includes('Legendary Farming Tools'))
  
  render()
  saveGame()
}

window.buyLegendaryTools = () => {
  if (state.storyLuck < 20) return
  
  state.storyLuck -= 20
  state.silverMultiplier = 1.7 // 70% boost
  state.hasBoughtLegendaryTools = true
  
  addToInventory({
    name: 'Legendary Farming Tools',
    icon: '✨',
    description: 'Legendary tools that increase silver gain by 70%'
  })
  
  log('✨ You acquire legendary farming tools! Silver gain increased by 70%!')
  
  // Remove normal axe option if it exists
  state.specialActions = state.specialActions.filter(a => !a.name.includes('Buy Normal Axe'))
  
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
  
  // Remove legendary tools option if it exists
  state.specialActions = state.specialActions.filter(a => !a.name.includes('Legendary Farming Tools'))
  
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

window.startBusiness = () => {
  if (state.silver < 100) return
  
  state.silver -= 100
  state.hasStartedBusiness = true
  
  log('💼 You start a business! Earning passive income: +10 copper/sec, +5 silver/sec')
  
  // Remove both business and cultivator options
  state.specialActions = state.specialActions.filter(a => 
    !a.name.includes('Go into Business') && !a.name.includes('Go with Mysterious Cultivator')
  )
  
  // Add explore forest option
  state.specialActions.push({
    name: 'Explore the Nearby Forest',
    icon: '🌳',
    disabled: false,
    callback: () => window.exploreNearbyForest()
  })
  
  render()
  saveGame()
}

window.goWithMysteriousCultivator = () => {
  state.hasGoneWithCultivator = true
  state.hasMetRealCultivator = true
  
  log('🧙‍♂️ You decide to follow the mysterious cultivator into the mountains...')
  log('🏞️ After three days of travel, you arrive at a hidden valley.')
  
  // Remove both options
  state.specialActions = state.specialActions.filter(a => 
    !a.name.includes('Go into Business') && !a.name.includes('Go with Mysterious Cultivator')
  )
  
  // Give cultivation manual
  state.hasManual = true
  addToInventory({
    name: 'Beginner Cultivation Manual',
    icon: '📖',
    description: 'A basic manual that allows major realm breakthroughs'
  })
  
  // Give some spirit stones
  state.spiritStonesLow += 10
  
  log('📖 The cultivator gifts you a cultivation manual and 10 low-grade spirit stones!')
  log('🧙‍♂️ "Train well, young one. When you reach Foundation Establishment, seek out the Azure Peak Sect."')
  
  // Add sect-related action after reaching Foundation Establishment
  setTimeout(() => {
    if (state.cultivationMajorIndex >= 1 && !state.hasJoinedSect) {
      state.specialActions.push({
        name: 'Seek Azure Peak Sect',
        icon: '⛰️',
        disabled: false,
        callback: () => window.seekAzurePeakSect()
      })
      log('⛰️ You remember the cultivator\'s words about the Azure Peak Sect...')
      render()
    }
  }, 3000)
  
  render()
  saveGame()
}

window.exploreNearbyForest = () => {
  // 80% chance to find beginner manual
  const foundManual = Math.random() < 0.8
  
  if (foundManual) {
    state.hasManual = true
    
    addToInventory({
      name: 'Beginner Cultivation Manual',
      icon: '📖',
      description: 'A basic manual that allows major realm breakthroughs'
    })
    
    log('📖 You found a Beginner Cultivation Manual! You can now breakthrough to major realms!')
    
    // Remove this action after success
    state.specialActions = state.specialActions.filter(a => !a.name.includes('Explore the Nearby Forest'))
  } else {
    log('🌳 You explore the forest but find nothing useful...')
  }
  
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
  
  log(`${playerSect.icon} You join the ${playerSect.name} as an outer disciple!`)
  log(`📖 You receive a Tier 1 ${state.affinity} cultivation manual!`)
  
  addToInventory({
    name: `${state.affinity} Manual (Tier 1)`,
    icon: '📖',
    description: `Basic ${state.affinity} cultivation techniques`
  })
  
  // Initialize cooldowns for manual moves
  initializeManualMoveCooldowns()
  
  // Remove sect choice actions
  state.specialActions = state.specialActions.filter(a => 
    !a.name.includes('Join ') || a.name.includes('Joined')
  )
  
  // Add sect missions
  addSectMissions()
  
  render()
  saveGame()
}

window.joinHeavenlyDemonSect = () => {
  state.hasJoinedSect = true
  state.currentSect = 'Heavenly Demon'
  state.manualType = 'Demon'
  state.manualTier = 1
  
  log('😇 You join the Heavenly Demon Sect!')
  log('📖 You receive a Tier 1 Heavenly Demon cultivation manual!')
  log('⚠️ This path grants powerful techniques but may affect your reputation.')
  
  addToInventory({
    name: 'Heavenly Demon Manual (Tier 1)',
    icon: '📖',
    description: 'Balanced demon cultivation techniques'
  })
  
  // Initialize cooldowns for manual moves
  initializeManualMoveCooldowns()
  
  // Remove sect choice actions
  state.specialActions = state.specialActions.filter(a => 
    !a.name.includes('Join ') || a.name.includes('Joined')
  )
  
  addSectMissions()
  
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
    description: 'Forbidden demon cultivation techniques'
  })
  
  // Initialize cooldowns for manual moves
  initializeManualMoveCooldowns()
  
  // Remove sect choice actions
  state.specialActions = state.specialActions.filter(a => 
    !a.name.includes('Join ') || a.name.includes('Joined')
  )
  
  addSectMissions()
  
  render()
  saveGame()
}

function addSectMissions() {
  state.specialActions.push(
    {
      name: 'Sect Mission: Herb Gathering',
      icon: '🌿',
      disabled: false,
      callback: () => window.herbGatheringMission()
    },
    {
      name: 'Sect Mission: Hunt Demonic Beast',
      icon: '⚔️',
      disabled: false,
      callback: () => window.huntBeastMission()
    },
    {
      name: 'Visit Sect Treasury',
      icon: '🏛️',
      disabled: false,
      callback: () => window.visitSectTreasury()
    },
    {
      name: 'Upgrade Manual',
      icon: '📚',
      disabled: false,
      callback: () => window.upgradeManual()
    }
  )
}

window.herbGatheringMission = () => {
  log('🌿 You accept the herb gathering mission...')
  
  // Simple time-based mission
  setTimeout(() => {
    const success = Math.random() < 0.7 // 70% success rate
    if (success) {
      state.sectReputation += 10
      state.spiritStonesLow += 5
      log('✅ Mission success! +10 sect reputation, +5 low-grade spirit stones')
    } else {
      log('❌ You couldn\'t find the rare herbs. Mission failed.')
    }
    render()
    saveGame()
  }, 2000)
}

window.huntBeastMission = () => {
  log('⚔️ You venture into the wilderness to hunt a demonic beast...')
  
  // Create combat encounter
  const beastStrength = state.strength * (0.8 + Math.random() * 0.4)
  state.inCombat = true
  state.enemy = {
    name: 'Demonic Beast',
    icon: '🐺',
    health: beastStrength * 5,
    maxHealth: beastStrength * 5,
    strength: Math.floor(beastStrength)
  }
  
  state.phase = 'COMBAT'
  render()
  saveGame()
}

window.visitSectTreasury = () => {
  log('🏛️ You visit the sect treasury...')
  
  // Remove this action temporarily
  state.specialActions = state.specialActions.filter(a => !a.name.includes('Visit Sect Treasury'))
  
  // Add treasury purchase options
  state.specialActions.push(
    {
      name: 'Buy Advanced Manual (100 reputation)',
      icon: '📘',
      disabled: false,
      callback: () => window.buyAdvancedManual()
    },
    {
      name: 'Buy Qi Gathering Pill (50 low stones)',
      icon: '💊',
      disabled: false,
      callback: () => window.buyQiPill()
    },
    {
      name: 'Leave Treasury',
      icon: '🚪',
      disabled: false,
      callback: () => window.leaveTreasury()
    }
  )
  
  render()
  saveGame()
}

window.buyAdvancedManual = () => {
  if (state.sectReputation < 100) {
    log('❌ Insufficient sect reputation. Current: ' + state.sectReputation)
    return
  }
  
  state.sectReputation -= 100
  state.hasAdvancedManual = true
  state.qiMultiplier *= 1.5 // 50% additional qi gain
  
  addToInventory({
    name: 'Advanced Cultivation Manual',
    icon: '📘',
    description: 'An advanced manual that increases Qi gain by 50%'
  })
  
  log('📘 You acquire an Advanced Cultivation Manual! Qi gain permanently increased!')
  
  // Remove this option
  state.specialActions = state.specialActions.filter(a => !a.name.includes('Buy Advanced Manual'))
  
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

window.leaveTreasury = () => {
  log('🚪 You leave the treasury.')
  
  // Remove treasury options
  state.specialActions = state.specialActions.filter(a => 
    !a.name.includes('Buy Advanced Manual') && 
    !a.name.includes('Buy Qi Gathering Pill') && 
    !a.name.includes('Leave Treasury')
  )
  
  // Restore treasury access
  state.specialActions.push({
    name: 'Visit Sect Treasury',
    icon: '🏛️',
    disabled: false,
    callback: () => window.visitSectTreasury()
  })
  
  render()
  saveGame()
}

window.upgradeManual = () => {
  if (state.manualTier >= 20) {
    log('📚 Your manual is already at maximum tier!')
    return
  }
  
  const upgradeCost = state.manualTier * 50 // Cost increases with tier
  
  if (state.sectReputation < upgradeCost) {
    log(`❌ Insufficient sect reputation. Need ${upgradeCost}, have ${state.sectReputation}`)
    return
  }
  
  state.sectReputation -= upgradeCost
  state.manualTier++
  
  log(`📚 Manual upgraded to Tier ${state.manualTier}!`)
  
  // Check if new moves are unlocked
  const moves = MANUAL_MOVES[state.manualType] || []
  const newMove = moves.find(m => m.tier === state.manualTier)
  
  if (newMove) {
    log(`⚔️ New technique unlocked: ${newMove.name}!`)
    log(`   Damage: ${newMove.damage}x strength | Qi Cost: ${newMove.qiCost} | Cooldown: ${newMove.cooldown}s`)
    if (newMove.special) {
      log(`   Special Effect: ${newMove.special}`)
    }
  }
  
  addToInventory({
    name: `${state.manualType} Manual (Tier ${state.manualTier})`,
    icon: '📖',
    description: `Advanced ${state.manualType} cultivation techniques`
  })
  
  // Initialize cooldowns for new moves
  initializeManualMoveCooldowns()
  
  render()
  saveGame()
}

window.showSectChoice = () => {
  state.phase = 'SECT'
  render()
}

window.joinSect = () => {
  state.hasJoinedSect = true
  log('You follow the mysterious sect leader...')
  log('You have joined the Cloud Sect (Tier 1)!')
  log('Your cultivation journey truly begins.')
  log('(Game continues from here - more systems coming soon!)')
  
  // Future: Transition to sect gameplay
}

window.startBusiness = () => {
  log('You choose to start a business instead.')
  log('(Business path not yet implemented)')
}

// ============================================================================
// COMBAT SYSTEM
// ============================================================================
window.attack = (attackType) => {
  if (state.playerCooldowns[attackType] > 0) return
  
  const attacks = {
    punch: { damage: state.strength, cooldown: 1, qiCost: 0 },
    superPunch: { damage: state.strength * 2, cooldown: 3, qiCost: 0 },
    qiBlast: { damage: state.strength * 3, cooldown: 5, qiCost: 10 }
  }
  
  const atk = attacks[attackType]
  
  if (state.qi < atk.qiCost) return
  
  state.qi -= atk.qiCost
  state.enemy.health -= atk.damage
  state.playerCooldowns[attackType] = atk.cooldown
  
  log(`You use ${attackType}! ${atk.damage} damage!`)
  
  if (state.enemy.health <= 0) {
    log(`${state.enemy.name} defeated!`)
    state.inCombat = false
    state.enemy = null
    state.phase = 'FARMING' // or wherever appropriate
    render()
    return
  }
  
  // Enemy attacks back
  setTimeout(() => {
    enemyTurn()
  }, 500)
}

window.useManualMove = (moveName) => {
  const moves = getAvailableManualMoves()
  const move = moves.find(m => m.name === moveName)
  
  if (!move) return
  
  const cooldownKey = `manual_${move.name.replace(/\s+/g, '_')}`
  
  if (state.playerCooldowns[cooldownKey] > 0) return
  if (state.qi < move.qiCost) return
  
  state.qi -= move.qiCost
  
  // Calculate damage with affinity bonus
  const affinityBonus = getAffinityBonus(state.manualType)
  const baseDamage = state.strength * move.damage
  const damage = Math.floor(baseDamage * (1 + affinityBonus))
  
  state.enemy.health -= damage
  state.playerCooldowns[cooldownKey] = move.cooldown
  
  log(`✨ You use ${move.name}! ${damage} damage!`)
  if (affinityBonus > 0) {
    log(`🌟 Affinity bonus: +${Math.floor(affinityBonus * 100)}%`)
  }
  
  // Handle special effects
  if (move.special === 'heal') {
    const healAmount = Math.floor(state.maxHealth * 0.2)
    state.health = Math.min(state.maxHealth, state.health + healAmount)
    log(`💚 You heal for ${healAmount} HP!`)
  } else if (move.special === 'lifesteal') {
    const healAmount = Math.floor(damage * 0.3)
    state.health = Math.min(state.maxHealth, state.health + healAmount)
    log(`🩸 You steal ${healAmount} HP!`)
  }
  
  if (state.enemy.health <= 0) {
    log(`${state.enemy.name} defeated!`)
    
    // Grant rewards
    const rewardGold = Math.floor(Math.random() * 5) + 1
    const rewardStones = Math.floor(Math.random() * 3) + 1
    state.gold += rewardGold
    state.spiritStonesLow += rewardStones
    
    log(`💰 Rewards: +${rewardGold} gold, +${rewardStones} spirit stones`)
    
    if (state.currentSect && state.currentSect !== 'none') {
      state.sectReputation += 20
      log(`📈 +20 sect reputation`)
    }
    
    state.inCombat = false
    state.enemy = null
    state.phase = 'FARMING'
    render()
    return
  }
  
  // Enemy attacks back
  setTimeout(() => {
    enemyTurn()
  }, 500)
}

function enemyTurn() {
  if (!state.inCombat) return
  
  const damage = state.enemy.strength
  state.health -= damage
  log(`${state.enemy.name} attacks! ${damage} damage!`)
  
  if (state.health <= 0) {
    log('You have been defeated...')
    // Handle death/rebirth
  }
  
  render()
}

function triggerRandomEncounter() {
  const encounters = [
    {
      name: 'Wandering Cultivator',
      description: 'A friendly cultivator offers to trade',
      action: () => {
        log('👨‍🏫 A wandering cultivator approaches you...')
        state.specialActions.push(
          {
            name: 'Trade Spirit Stones',
            icon: '💰',
            disabled: false,
            callback: () => {
              if (state.spiritStonesLow >= 10) {
                state.spiritStonesLow -= 10
                state.spiritStonesMid += 1
                log('✨ Traded 10 low-grade for 1 mid-grade spirit stone!')
                state.specialActions = state.specialActions.filter(a => !a.name.includes('Trade Spirit Stones') && !a.name.includes('Decline Trade'))
                render()
                saveGame()
              } else {
                log('❌x Insufficient spirit stones.')
              }
            }
          },
          {
            name: 'Decline Trade',
            icon: '❌',
            disabled: false,
            callback: () => {
              log('👋 You decline and continue on your way.')
              state.specialActions = state.specialActions.filter(a => !a.name.includes('Trade Spirit Stones') && !a.name.includes('Decline Trade'))
              render()
              saveGame()
            }
          }
        )
        render()
      }
    },
    {
      name: 'Ancient Ruin',
      description: 'You discover an ancient ruin',
      action: () => {
        log('🏛️ You stumble upon ancient ruins...')
        state.specialActions.push(
          {
            name: 'Explore Ruins',
            icon: '🔍',
            disabled: false,
            callback: () => {
              const luck = Math.random()
              if (luck < 0.3) {
                // Treasure
                state.gold += 10
                state.spiritStonesMid += 3
                log('✨ You found treasure! +10 gold, +3 mid-grade spirit stones!')
              } else if (luck < 0.6) {
                // Cultivation insights
                state.qi += 1000
                log('💡 You gain cultivation insights! +1000 Qi!')
              } else {
                // Trap
                state.health = Math.max(1, state.health - state.maxHealth * 0.3)
                log('⚠️ It was a trap! You lose 30% health!')
              }
              state.specialActions = state.specialActions.filter(a => !a.name.includes('Explore Ruins') && !a.name.includes('Ignore Ruins'))
              render()
              saveGame()
            }
          },
          {
            name: 'Ignore Ruins',
            icon: '🚫',
            disabled: false,
            callback: () => {
              log('🚶 You decide not to risk it and continue on.')
              state.specialActions = state.specialActions.filter(a => !a.name.includes('Explore Ruins') && !a.name.includes('Ignore Ruins'))
              render()
              saveGame()
            }
          }
        )
        render()
      }
    },
    {
      name: 'Rival Cultivator',
      description: 'A rival challenges you to combat',
      action: () => {
        log('⚔️ A rival cultivator blocks your path and challenges you!')
        const rivalStrength = state.strength * (0.9 + Math.random() * 0.3)
        state.inCombat = true
        state.enemy = {
          name: 'Rival Cultivator',
          icon: '🥋',
          health: rivalStrength * 6,
          maxHealth: rivalStrength * 6,
          strength: Math.floor(rivalStrength)
        }
        state.phase = 'COMBAT'
        render()
        saveGame()
      }
    }
  ]
  
  const encounter = encounters[Math.floor(Math.random() * encounters.length)]
  encounter.action()
}

// ============================================================================
// LOGGING
// ============================================================================
const logMessages = []

function log(message) {
  logMessages.push(message)
  if (logMessages.length > 50) logMessages.shift()
  renderLog()
}

function renderLog() {
  const logEl = document.getElementById('game-log')
  if (logEl) {
    logEl.innerHTML = logMessages.slice().reverse().map(m => `<div>${m}</div>`).join('')
  }
}

// ============================================================================
// COOLDOWN TICKER
// ============================================================================
setInterval(() => {
  let needsRender = false
  let needsSave = false
  
  // Tick down player cooldowns
  for (const key in state.playerCooldowns) {
    if (state.playerCooldowns[key] > 0) {
      state.playerCooldowns[key] -= 1
      needsRender = true
    }
  }
  
  // Tick down village materials cooldown
  if (state.villageMaterialsCooldown > 0) {
    state.villageMaterialsCooldown -= 1
    needsRender = true
  }
  
  // Tick down encounter cooldown
  if (state.encounterCooldown > 0) {
    state.encounterCooldown -= 1
  }
  
  // Random encounters for cultivators at Foundation Establishment or higher
  if (state.cultivationMajorIndex >= 1 && state.encounterCooldown === 0 && !state.inCombat) {
    // 5% chance per second to trigger an encounter
    if (Math.random() < 0.05) {
      state.encounterCooldown = 60 // 1 minute cooldown
      triggerRandomEncounter()
      needsRender = true
    }
  }
  
  // Generate passive income from business
  if (state.hasStartedBusiness) {
    state.copper += 10
    state.silver += 5
    needsRender = true
    needsSave = true
  }
  
  // Regenerate stamina if resting
  if (state.isResting && state.stamina < state.maxStamina) {
    state.stamina += 1
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
    const qiGained = calculateQiGain(1)
    state.qi += qiGained
    needsRender = true
    needsSave = true
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
    
    // If this is the first drag, explicitly set transform to translate(0,0)
    // to avoid any jump from CSS-based positioning
    draggedElement.style.transform = 'translate(0px, 0px)'
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
    const key = id === 'stats-panel' ? 'stats' : id === 'inventory-panel' ? 'inventory' : id === 'actions-panel' ? 'actions' : null
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
  // Only roll fate if no saved game exists
  rollFate()
  // Save immediately to prevent refresh rerolling
  saveGame()
}
render()

console.log('Cultivation Saga loaded')
