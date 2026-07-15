export enum SectionId {
  Hero = "hero",
  Why = "why",
  Packages = "packages",
  Equipment = "equipment",
  Runtime = "runtime",
  Process = "process",
  Work = "work",
  Faq = "faq",
  Contact = "contact",
}

/* ------------------------------------------------------------------ */
/*  Hero stats                                                          */
/* ------------------------------------------------------------------ */
export interface StatItem {
  value: string;
  sup: string;
  label: string;
}

export const STATS: StatItem[] = [
  { value: "725", sup: "W", label: "Per-panel output, Trina Vertex N bifacial" },
  { value: "23.3", sup: "%", label: "Maximum module efficiency" },
  { value: "48", sup: "kWh", label: "Lithium storage on our largest package" },
  { value: "30", sup: "yr", label: "Panel power warranty (12-yr workmanship)" },
];

/* ------------------------------------------------------------------ */
/*  Why Solar cards                                                     */
/* ------------------------------------------------------------------ */
export interface WhyCard {
  id: string;
  title: string;
  body: string;
}

export const WHY_CARDS: WhyCard[] = [
  {
    id: "outage",
    title: "True outage independence",
    body: "Off-grid-capable inverters switch to battery in under 10 milliseconds. Refrigeration, water pumps, security, and Wi-Fi stay up whether the grid is on, off, or gone for days.",
  },
  {
    id: "storm",
    title: "Storm-season autonomy",
    body: "Lithium banks sized for real runtimes — up to 48 hours of essential loads on battery alone — with waterproof-rated wall-mount batteries and surge-protected DC disconnects.",
  },
  {
    id: "duty",
    title: "Duty-free hardware",
    body: "Solar equipment enters The Bahamas duty-free — only VAT applies. We optimize every package around that exemption so more of your investment goes into capacity, not customs.",
  },
];

/* ------------------------------------------------------------------ */
/*  Packages                                                           */
/* ------------------------------------------------------------------ */
export interface RuntimeRow {
  profile: string;
  runtime: string;
}

export interface Package {
  id: string;
  optionLabel: string;   // value used in the Contact form Select
  tier: string;
  name: string;
  fit: string;
  price: string;
  featured: boolean;
  specs: { label: string; qty: string }[];
  runtimeRows: RuntimeRow[];
  ctaLabel: string;
}

export const PACKAGES: Package[] = [
  {
    id: "essential",
    optionLabel: "Essential Eco-Power Resilience — BSD 11,354",
    tier: "Tier I",
    name: "Essential Eco-Power Resilience",
    fit: "Apartments, small homes & essential-load backup",
    price: "BSD 11,354",
    featured: false,
    specs: [
      { label: "Trina 725W bifacial panels", qty: "12 · 8.70 kW" },
      { label: "EG4 12000XP smart inverter", qty: "1 · 15 kW" },
      { label: "BasenGreen lithium battery", qty: "1 · 16 kWh" },
      { label: "DC disconnect + roof mount kit", qty: "Included" },
    ],
    runtimeRows: [
      { profile: "Essentials (500W)", runtime: "~25.6 hrs" },
      { profile: "Comfort + 1 mini-split (1.8kW)", runtime: "~7.1 hrs" },
    ],
    ctaLabel: "Get This Package",
  },
  {
    id: "pro",
    optionLabel: "Pro Advanced Power System — BSD 16,172",
    tier: "Tier II",
    name: "Pro Advanced Power System",
    fit: "Full-size family homes running AC & laundry",
    price: "BSD 16,172",
    featured: true,
    specs: [
      { label: "Trina 725W bifacial panels", qty: "16 · 11.60 kW" },
      { label: "EG4 12000XP smart inverter", qty: "1 · 15 kW" },
      { label: "BasenGreen lithium batteries", qty: "2 · 32 kWh" },
      { label: "DC disconnect + roof mount kit", qty: "Included" },
    ],
    runtimeRows: [
      { profile: "Essentials (600W)", runtime: "~42.6 hrs" },
      { profile: "Comfort + 1 mini-split (2.2kW)", runtime: "~11.6 hrs" },
    ],
    ctaLabel: "Get This Package",
  },
  {
    id: "elite",
    optionLabel: "Elite Stacked High-Capacity Micro-Grid — BSD 24,356",
    tier: "Tier III",
    name: "Elite Stacked High-Capacity Micro-Grid",
    fit: "Large villas, commercial & hospitality properties",
    price: "BSD 24,356",
    featured: false,
    specs: [
      { label: "Trina 725W bifacial panels", qty: "18 · 13.05 kW" },
      { label: "EG4 12000XP smart inverters", qty: "2 · 30 kW" },
      { label: "BasenGreen lithium batteries", qty: "3 · 48 kWh" },
      { label: "DC disconnect + roof mount kit", qty: "Included" },
    ],
    runtimeRows: [
      { profile: "Essentials (800W)", runtime: "~48.0 hrs" },
      { profile: "Central AC operations (6.5kW)", runtime: "~5.9 hrs" },
    ],
    ctaLabel: "Get This Package",
  },
];

export const PACKAGE_SELECT_OPTIONS = [
  { label: "Not sure yet — recommend one", value: "" },
  ...PACKAGES.map((pkg) => ({ label: pkg.optionLabel, value: pkg.optionLabel })),
];

/* ------------------------------------------------------------------ */
/*  Equipment specs                                                     */
/* ------------------------------------------------------------------ */
export interface SpecCell {
  value: string;
  key: string;
}

export interface Equipment {
  id: string;
  brand: string;
  title: string;
  description: string;
  specs: SpecCell[];
}

export const EQUIPMENT: Equipment[] = [
  {
    id: "trina",
    brand: "Trina Solar · Vertex N",
    title: "725W N-Type i-TOPCon Bifacial Panels",
    description:
      "Dual-glass monocrystalline modules that harvest from both faces — up to 10–20% additional yield from reflected light. Low temperature coefficient keeps output high in Bahamian heat, and the dual-glass build carries a 30-year power guarantee.",
    specs: [
      { value: "725 W", key: "Max power output" },
      { value: "23.3%", key: "Module efficiency" },
      { value: "+10–20%", key: "Bifacial rear-side gain" },
      { value: "−0.29%/°C", key: "Temp. coefficient (Pmax)" },
      { value: "30 yr", key: "Power warranty · 87.4% at yr 30" },
      { value: "IP68", key: "Junction box rating" },
    ],
  },
  {
    id: "eg4",
    brand: "EG4 Electronics · 12000XP",
    title: "15kW Split-Phase Off-Grid Inverter",
    description:
      "All-in-one 48V inverter/charger that runs fully off-grid or alongside grid and generator input. Dual MPPTs accept up to 480 VDC, switching to battery takes under 10 ms, and units stack up to 16 in parallel — the same platform grows from a starter home to a commercial micro-grid.",
    specs: [
      { value: "15 kW", key: "Continuous output @ 240V" },
      { value: "24 kW", key: "Max utilized PV input" },
      { value: "<10 ms", key: "Grid-to-battery switch time" },
      { value: "×16", key: "Parallel units (240 kW max)" },
      { value: "99%", key: "MPPT efficiency" },
      { value: "5 yr", key: "Standard warranty" },
    ],
  },
  {
    id: "basen",
    brand: "BasenGreen · BR-OW-LV Series",
    title: "16kWh Wall-Mount LiFePO4 Battery",
    description:
      "Lithium iron phosphate — the most stable and safest lithium chemistry — in a waterproof wall-mount enclosure with LCD touch screen, built-in circuit breaker, and app-based remote monitoring. Rated for 8,000+ charge cycles and expandable up to 16 units in parallel.",
    specs: [
      { value: "16 kWh", key: "Energy per unit (51.2V · 314Ah)" },
      { value: "≥8,000", key: "Cycle life @ 25°C" },
      { value: "LiFePO4", key: "Safest lithium chemistry" },
      { value: "×16", key: "Max parallel expansion" },
      { value: "App", key: "Wi-Fi & Bluetooth monitoring" },
      { value: "IEC 62619", key: "+ CE, MSDS, UN38.3 certified" },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Runtime table                                                       */
/* ------------------------------------------------------------------ */
export interface RuntimeRow2 {
  profile: string;
  description: string;
  demand: string;
  runtime: string;
  warn: boolean;
}

export const RUNTIME_ROWS: RuntimeRow2[] = [
  {
    profile: "Essential Base Line",
    description: "LED lights, network, refrigerator & security",
    demand: "600W",
    runtime: "~ 42.6 hours",
    warn: false,
  },
  {
    profile: "Standard Living Comfort",
    description: "Base line + ceiling fans, TVs & small appliances",
    demand: "1,200W",
    runtime: "~ 21.3 hours",
    warn: false,
  },
  {
    profile: "Climate Management",
    description: "Standard comfort + one high-efficiency mini-split AC",
    demand: "2,200W",
    runtime: "~ 11.6 hours",
    warn: false,
  },
  {
    profile: "High Demand Operations",
    description: "Multiple climate zones or central AC unit",
    demand: "4,500W",
    runtime: "~ 5.6 hours",
    warn: true,
  },
];

/* ------------------------------------------------------------------ */
/*  Process steps                                                       */
/* ------------------------------------------------------------------ */
export interface ProcessStep {
  id: string;
  title: string;
  body: string;
  tag: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: "choose",
    title: "Choose your package",
    body: "Match your property and loads to a tier — or send us a recent electricity bill and we'll recommend one.",
    tag: "Free consultation",
  },
  {
    id: "inspect",
    title: "Site inspection",
    body: "We assess your roof or grounds, electrical panel, and shading to confirm the design fits your location.",
    tag: "On-site visit",
  },
  {
    id: "quote",
    title: "Final installation quote",
    body: "Hardware pricing is fixed and published. After inspection you receive a firm quote for labor and balance-of-system materials.",
    tag: "No surprises",
  },
  {
    id: "install",
    title: "Install & commission",
    body: "Mounting, wiring, battery configuration and app setup — then we hand over a monitored, running system.",
    tag: "App monitoring included",
  },
];

/* ------------------------------------------------------------------ */
/*  FAQ                                                                 */
/* ------------------------------------------------------------------ */
export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: "duty-free",
    question: "Is solar equipment really duty-free in The Bahamas?",
    answer:
      "Yes. Renewable energy hardware imports are duty-exempt; only VAT applies. Our published package prices reflect the full duty-free hardware cost with Bahamas VAT applied — the figure you see is the figure you pay for equipment.",
  },
  {
    id: "whats-included",
    question: "What's included in the package price — and what isn't?",
    answer:
      "The package covers core system hardware: solar panels, roof mounts, inverter(s), battery bank, and DC disconnect switch. Installation labor, electrical labor, and site-specific balance-of-system materials are quoted separately after a physical site inspection, because every property is different.",
  },
  {
    id: "ac",
    question: "Will the system run my air conditioning?",
    answer:
      "Yes — every tier is sized to run at least one high-efficiency mini-split AC alongside normal household loads. The Pro system runs a 12k BTU mini-split for roughly 11.6 hours overnight on battery; the Elite micro-grid supports central AC and multiple climate zones.",
  },
  {
    id: "hurricane",
    question: "What happens during a hurricane or extended outage?",
    answer:
      "The inverter switches to battery in under 10 milliseconds — faster than most electronics can notice. Essential loads run for 25 to 48+ hours on battery alone depending on your package, and the panels recharge the bank whenever there's daylight. The EG4 inverter also accepts generator input as a third power source.",
  },
  {
    id: "expand",
    question: "Can I expand the system later?",
    answer:
      "That's the core of the platform. Inverters parallel up to 16 units (240 kW) and batteries stack up to 16 in parallel — you can start with the Essential package and grow toward a full micro-grid without replacing anything you've already bought.",
  },
  {
    id: "warranties",
    question: "What warranties back the equipment?",
    answer:
      "Panels: 30-year power warranty (87.4% output guaranteed at year 30) and 12-year product workmanship warranty. Inverters: 5-year standard warranty. Batteries: rated at 8,000+ charge cycles — roughly two decades of daily use.",
  },
  {
    id: "monitoring",
    question: "How do I monitor my system?",
    answer:
      "Both the inverter and batteries include app-based monitoring over Wi-Fi and Bluetooth — live production, consumption, and state of charge from your phone, plus remote diagnostics so issues can often be resolved without a site visit.",
  },
];
