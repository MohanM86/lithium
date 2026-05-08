export type NavItem = {
  label: string;
  href: string;
  sub?: string;
};

export type NavCol = {
  title: string;
  items: NavItem[];
};

export type NavFeature = {
  eyebrow: string;
  title: string;
  desc: string;
  href: string;
  animationVariant: "lfp-feature" | "bat-feature" | "lfp-vs-nmc" | "marked-feature";
};

export type NavMenu = {
  label: string;
  href?: string;
  feature?: NavFeature;
  cols?: NavCol[];
};

export const mainNav: NavMenu[] = [
  {
    label: "Teknologi",
    href: "/teknologi",
    feature: {
      eyebrow: "Mest lest",
      title: "LFP vs NMC",
      desc: "To kjemier sammenlignet",
      href: "/lfp-vs-nmc",
      animationVariant: "lfp-feature",
    },
    cols: [
      {
        title: "Kjemi",
        items: [
          { label: "Litium-ion", sub: "Hvordan fungerer det", href: "/litium-ion" },
          { label: "LFP", sub: "Lithium Iron Phosphate", href: "/lfp" },
          { label: "NMC", sub: "Nickel Manganese Cobalt", href: "/nmc" },
          { label: "LTO", sub: "Lithium Titanate", href: "/lto" },
          { label: "Solid-state", sub: "Neste generasjon", href: "/solid-state" },
        ],
      },
      {
        title: "Komponenter",
        items: [
          { label: "Battericeller", sub: "Pouch, sylindrisk, prismatisk", href: "/celletyper" },
          { label: "BMS", sub: "Battery Management System", href: "/bms" },
          { label: "Levetid", sub: "Sykluser og degradering", href: "/levetid" },
        ],
      },
      {
        title: "Verktøy",
        items: [
          { label: "Kalkulator", sub: "Kapasitet og levetid", href: "/kalkulator" },
          { label: "Ordbok", sub: "Faguttrykk", href: "/ordbok" },
          { label: "FAQ", sub: "Vanlige spørsmål", href: "/faq" },
        ],
      },
    ],
  },
  {
    label: "Bruksområder",
    href: "/bruksomrader",
    feature: {
      eyebrow: "Voksende segment",
      title: "Litium for båt",
      desc: "Erstatte blybatteri",
      href: "/bat",
      animationVariant: "bat-feature",
    },
    cols: [
      {
        title: "Kjøretøy",
        items: [
          { label: "Elbil", sub: "Trekkbatteri og lading", href: "/elbil" },
          { label: "Båt", sub: "Marine litium", href: "/bat" },
          { label: "MC og scooter", sub: "Litium for tohjuling", href: "/mc-scooter" },
          { label: "El-sykkel", sub: "Sykkelbatteri", href: "/el-sykkel" },
        ],
      },
      {
        title: "Hjem og fritid",
        items: [
          { label: "Hjemmebatteri", sub: "Husholdningslagring", href: "/hjemmebatteri" },
          { label: "Off-grid", sub: "Hytte og camping", href: "/off-grid" },
          { label: "Verktøy og drone", sub: "Mindre litium", href: "/verktoy" },
        ],
      },
    ],
  },
  {
    label: "Sikkerhet",
    href: "/sikkerhet",
    cols: [
      {
        title: "Risiko",
        items: [
          { label: "Brann", sub: "Hva som skjer", href: "/brann" },
          { label: "Termisk runaway", sub: "Når det går galt", href: "/termisk-runaway" },
          { label: "Lagring", sub: "Hjemme og verksted", href: "/lagring" },
        ],
      },
      {
        title: "Håndtering",
        items: [
          { label: "Transport", sub: "Fly, bil, post", href: "/transport" },
          { label: "Resirkulering", sub: "Hva skjer med batteriet", href: "/resirkulering" },
          { label: "Avhending", sub: "Riktig kasting", href: "/avhending" },
        ],
      },
    ],
  },
  { label: "Marked", href: "/marked" },
  { label: "Sammenligning", href: "/sammenligning" },
];

export const footerSections = [
  {
    heading: "Teknologi",
    items: [
      { label: "Litium-ion", href: "/litium-ion" },
      { label: "LFP", href: "/lfp" },
      { label: "NMC", href: "/nmc" },
      { label: "LTO", href: "/lto" },
      { label: "Solid-state", href: "/solid-state" },
      { label: "BMS", href: "/bms" },
      { label: "Levetid", href: "/levetid" },
    ],
  },
  {
    heading: "Bruksområder",
    items: [
      { label: "Elbil", href: "/elbil" },
      { label: "Båt", href: "/bat" },
      { label: "MC og scooter", href: "/mc-scooter" },
      { label: "El-sykkel", href: "/el-sykkel" },
      { label: "Hjemmebatteri", href: "/hjemmebatteri" },
      { label: "Off-grid", href: "/off-grid" },
    ],
  },
  {
    heading: "Sikkerhet",
    items: [
      { label: "Brann", href: "/brann" },
      { label: "Termisk runaway", href: "/termisk-runaway" },
      { label: "Lagring", href: "/lagring" },
      { label: "Transport", href: "/transport" },
      { label: "Resirkulering", href: "/resirkulering" },
      { label: "Avhending", href: "/avhending" },
    ],
  },
  {
    heading: "Marked og verktøy",
    items: [
      { label: "Marked", href: "/marked" },
      { label: "Sammenligning", href: "/sammenligning" },
      { label: "Norske aktører", href: "/norske-aktorer" },
      { label: "Kalkulator", href: "/kalkulator" },
      { label: "Ordbok", href: "/ordbok" },
      { label: "FAQ", href: "/faq" },
    ],
  },
];

export const allRoutes = [
  "/",
  "/teknologi",
  "/litium-ion",
  "/lfp",
  "/nmc",
  "/lto",
  "/solid-state",
  "/lfp-vs-nmc",
  "/celletyper",
  "/bms",
  "/levetid",
  "/bruksomrader",
  "/elbil",
  "/bat",
  "/mc-scooter",
  "/el-sykkel",
  "/hjemmebatteri",
  "/off-grid",
  "/verktoy",
  "/sikkerhet",
  "/brann",
  "/termisk-runaway",
  "/lagring",
  "/transport",
  "/resirkulering",
  "/avhending",
  "/marked",
  "/sammenligning",
  "/norske-aktorer",
  "/kalkulator",
  "/ordbok",
  "/faq",
  "/om",
  "/redaksjonell-metode",
  "/personvern",
  "/kontakt",
];
