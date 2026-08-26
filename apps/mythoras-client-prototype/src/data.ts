// Placeholder flavour for the HUD tracing. Names and Attributes follow CONTEXT.md.

export const BOARD_COLS = 7;
export const BOARD_ROWS = 6;

export type TileKind = "base" | "walk" | "threat" | "hazard";

export interface TileMark {
  col: number;
  row: number;
  kind: TileKind;
}

export interface Attributes {
  AUTH: number;
  INV: number;
  ANIM: number;
  ORD: number;
}

export type SkillMark = "lash" | "guard" | "mark" | "burst" | "step" | "snare" | "bolt" | "ward";

export interface SkillCard {
  name: string;
  stream: string;
  mark: SkillMark;
  text: string;
}

export interface Trinket {
  name: string;
}

export interface SquadMember {
  name: string;
  species: string;
  role: string;
  hp: number;
  maxHp: number;
  load: number;
  maxLoad: number;
  tags: string[];
  spd: number;
  attributes: Attributes;
  skills: SkillCard[];
  trinkets: [Trinket | null, Trinket | null];
  tile: [number, number];
  slot: "field" | "bench";
  hue: number;
}

export interface EnemyBlock {
  name: string;
  species: string;
  hp: number;
  maxHp: number;
  tile: [number, number];
}

export interface InventorySlot {
  name: string | null;
  qty: number;
  mark?: SkillMark | "coin" | "root" | "chip";
}

export type RoomStatus = "cleared" | "here" | "ahead" | "side" | "locked";

export interface ZoneRoom {
  id: string;
  name: string;
  x: number;
  y: number;
  status: RoomStatus;
}

export interface ZoneHall {
  from: string;
  to: string;
}

export const zone: { name: string; rooms: ZoneRoom[]; halls: ZoneHall[] } = {
  name: "Cinder Hollow",
  rooms: [
    { id: "gate", name: "Gate", x: 10, y: 48, status: "cleared" },
    { id: "walk", name: "Ash Walk", x: 32, y: 48, status: "cleared" },
    { id: "court", name: "Ash Court", x: 54, y: 48, status: "here" },
    { id: "crypt", name: "Side Crypt", x: 54, y: 82, status: "side" },
    { id: "ember", name: "Ember Gate", x: 76, y: 48, status: "ahead" },
    { id: "vein", name: "Sealed Vein", x: 90, y: 18, status: "locked" },
  ],
  halls: [
    { from: "gate", to: "walk" },
    { from: "walk", to: "court" },
    { from: "court", to: "crypt" },
    { from: "court", to: "ember" },
    { from: "ember", to: "vein" },
  ],
};

export const inventory: InventorySlot[] = [
  { name: "Ash Coin", qty: 42, mark: "coin" },
  { name: "Shard", qty: 3, mark: "burst" },
  { name: "Ration", qty: 6, mark: "ward" },
  { name: "Bandage", qty: 2, mark: "guard" },
  { name: "Torch Oil", qty: 1, mark: "lash" },
  { name: "Cipher Chip", qty: 1, mark: "chip" },
  { name: null, qty: 0 },
  { name: null, qty: 0 },
  { name: "Spare Buckle", qty: 1, mark: "mark" },
  { name: "Dried Root", qty: 4, mark: "root" },
  { name: null, qty: 0 },
  { name: null, qty: 0 },
  { name: null, qty: 0 },
  { name: null, qty: 0 },
  { name: null, qty: 0 },
  { name: null, qty: 0 },
];

export const glossary: Record<string, string> = {
  Inferno: "Primal-Elemental damage type. Heat, ash, and burn. Signature shapes output; ailments ride on top.",
  Phantom: "Phenomena damage type. Ghost / spirit / incorporeal — distinct from Psionic (mental) and Fae.",
  Eldergrove: "Biotic-Elemental damage type. Root, thorn, and growth.",
  Voltaic: "Primal-Elemental damage type. Arc, conduction, and chain.",
  Tidal: "Primal-Elemental damage type. Brine, weight, and undertow.",
  Load: "Per-creature fatigue during a zone run. High Load strips archetype bonus. Bench recovers it.",
  Grounded: "Species tag. Anchored to the board — resists lift and some aerial displacement.",
  Winged: "Species tag. Aerial tendency. Replaces a Flying type; grounding effects interact here.",
  Draconic: "Origin tag common to Scalesbourne-line creatures.",
  Alignment: "Bonus when a Skill Card’s damage type matches the creature’s invested type. Not STAB.",
  Field: "The 3 active battle slots. Not the whole grid.",
  Bench: "The 2 Squad creatures not on Field. They recover Load.",
};

export const squad: SquadMember[] = [
  {
    name: "Ashquill",
    species: "Cindral",
    role: "Vanguard",
    hp: 52,
    maxHp: 60,
    load: 14,
    maxLoad: 100,
    tags: ["Draconic", "Grounded"],
    spd: 6,
    attributes: { AUTH: 14, INV: 11, ANIM: 7, ORD: 9 },
    hue: 18,
    slot: "field",
    tile: [2, 4],
    trinkets: [{ name: "Cinder Charm" }, { name: "Ash Buckle" }],
    skills: [
      {
        name: "Ember Lash",
        stream: "Inferno",
        mark: "lash",
        text: "Strike a facing tile. Deals {Inferno} damage. Builds {Load}.",
      },
      {
        name: "Cinder Guard",
        stream: "Inferno",
        mark: "guard",
        text: "Brace. {Grounded} creatures gain extra cover from this Skill Card.",
      },
      {
        name: "Scorch Line",
        stream: "Inferno",
        mark: "mark",
        text: "Paint a line of {Inferno} tiles. {Alignment} applies if invested.",
      },
      {
        name: "Pyre Break",
        stream: "Inferno",
        mark: "burst",
        text: "Heavy {Inferno} hit. High {Load} cost.",
      },
    ],
  },
  {
    name: "Nyx",
    species: "Umbrook",
    role: "Skirmisher",
    hp: 31,
    maxHp: 46,
    load: 38,
    maxLoad: 100,
    tags: ["Winged", "Phantom"],
    spd: 9,
    attributes: { AUTH: 8, INV: 7, ANIM: 15, ORD: 10 },
    hue: 262,
    slot: "field",
    tile: [3, 4],
    trinkets: [{ name: "Veil Pin" }, null],
    skills: [
      {
        name: "Veil Cut",
        stream: "Phantom",
        mark: "lash",
        text: "A {Phantom} cut. {Winged} creatures may ignore one intervening tile.",
      },
      {
        name: "Fade Step",
        stream: "Phantom",
        mark: "step",
        text: "Relocate one tile. Does not build {Load}.",
      },
      {
        name: "Hollow Mark",
        stream: "Phantom",
        mark: "mark",
        text: "Mark a tile. Next {Phantom} Skill Card against it bites deeper.",
      },
      {
        name: "Nightfall",
        stream: "Phantom",
        mark: "burst",
        text: "Wide {Phantom} burst. Steep {Load}.",
      },
    ],
  },
  {
    name: "Bracken",
    species: "Bramblehide",
    role: "Bulwark",
    hp: 60,
    maxHp: 60,
    load: 6,
    maxLoad: 100,
    tags: ["Grounded", "Verdant"],
    spd: 4,
    attributes: { AUTH: 12, INV: 16, ANIM: 6, ORD: 8 },
    hue: 118,
    slot: "field",
    tile: [4, 4],
    trinkets: [{ name: "Thorn Plate" }, { name: "Root Band" }],
    skills: [
      {
        name: "Thorn Wall",
        stream: "Eldergrove",
        mark: "guard",
        text: "Raise cover. {Grounded} and {Eldergrove} both apply.",
      },
      {
        name: "Root Snare",
        stream: "Eldergrove",
        mark: "snare",
        text: "{Eldergrove} snare. Pins a {Grounded} foe more readily.",
      },
      {
        name: "Bramble Slam",
        stream: "Eldergrove",
        mark: "lash",
        text: "A short {Eldergrove} crush.",
      },
      {
        name: "Overgrowth",
        stream: "Eldergrove",
        mark: "burst",
        text: "Claim adjacent tiles as {Eldergrove} growth. Builds {Load}.",
      },
    ],
  },
  {
    name: "Vane",
    species: "Zephyrid",
    role: "Channeler",
    hp: 40,
    maxHp: 48,
    load: 22,
    maxLoad: 100,
    tags: ["Winged", "Aerial"],
    spd: 7,
    attributes: { AUTH: 9, INV: 8, ANIM: 14, ORD: 12 },
    hue: 198,
    slot: "bench",
    tile: [1, 5],
    trinkets: [null, null],
    skills: [
      {
        name: "Arc Bolt",
        stream: "Voltaic",
        mark: "bolt",
        text: "{Voltaic} bolt. {Winged} line of sight is generous.",
      },
      {
        name: "Static Field",
        stream: "Voltaic",
        mark: "ward",
        text: "Ward a tile. Next {Voltaic} Skill Card through it chains.",
      },
      {
        name: "Chain Spark",
        stream: "Voltaic",
        mark: "mark",
        text: "Jump {Voltaic} to a second tile.",
      },
      {
        name: "Thunderhead",
        stream: "Voltaic",
        mark: "burst",
        text: "Heavy {Voltaic}. High {Load}.",
      },
    ],
  },
  {
    name: "Coil",
    species: "Tidecoil",
    role: "Warden",
    hp: 44,
    maxHp: 54,
    load: 30,
    maxLoad: 100,
    tags: ["Aquatic", "Grounded"],
    spd: 5,
    attributes: { AUTH: 11, INV: 13, ANIM: 9, ORD: 11 },
    hue: 204,
    slot: "bench",
    tile: [5, 5],
    trinkets: [{ name: "Brine Scale" }, null],
    skills: [
      {
        name: "Tide Break",
        stream: "Tidal",
        mark: "lash",
        text: "{Tidal} strike. {Grounded} foes eat the extra weight.",
      },
      {
        name: "Brine Ward",
        stream: "Tidal",
        mark: "ward",
        text: "A {Tidal} ward on the occupied tile.",
      },
      {
        name: "Riptide",
        stream: "Tidal",
        mark: "snare",
        text: "Pull one tile. Builds {Load}.",
      },
      {
        name: "Deluge",
        stream: "Tidal",
        mark: "burst",
        text: "Wide {Tidal} crash.",
      },
    ],
  },
];

export const enemies: EnemyBlock[] = [
  { name: "Gravemaw", species: "Blighthound", hp: 46, maxHp: 46, tile: [2, 1] },
  { name: "Rustling", species: "Hollowkin", hp: 34, maxHp: 34, tile: [4, 1] },
];

export const tileMarks: TileMark[] = [
  { col: 2, row: 3, kind: "walk" },
  { col: 3, row: 3, kind: "walk" },
  { col: 4, row: 3, kind: "walk" },
  { col: 3, row: 2, kind: "hazard" },
  { col: 1, row: 4, kind: "walk" },
  { col: 5, row: 4, kind: "walk" },
  { col: 2, row: 1, kind: "threat" },
  { col: 3, row: 1, kind: "threat" },
  { col: 4, row: 1, kind: "threat" },
  { col: 2, row: 2, kind: "threat" },
  { col: 4, row: 2, kind: "threat" },
];

