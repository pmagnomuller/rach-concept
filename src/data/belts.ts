export interface Belt {
  id: string;
  name: string;
  description: string;
  material: string;
  details: string[];
  gradient: string;
  accentColor: string;
  image: string;
}

export interface LocalizedBeltContent {
  name: string;
  description: string;
  material: string;
  details: string[];
}

export const belts: Belt[] = [
  {
    id: "heritage-trio",
    name: "Western",
    description: "",
    material: "",
    details: [
      "Cinto em pele",
      "Várias cores",
      "Largura 4 cm",
      "Fivela em zamac dourada",
    ],
    gradient: "linear-gradient(135deg, #C79A63 0%, #8A5A35 50%, #3A2414 100%)",
    accentColor: "#D9B26A",
    image: "/produto1.jpeg",
  },
  {
    id: "amber-trail",
    name: "Cobra",
    description: "",
    material: "",
    details: [
      "Cinto em pele",
      "Várias cores",
      "Largura 4 cm",
      "Fivela dourada com strass em cor preta",
    ],
    gradient: "linear-gradient(135deg, #E1A057 0%, #BC7332 50%, #6C3B1A 100%)",
    accentColor: "#E9B26C",
    image: "/produto2.jpeg",
  },
  {
    id: "saddle-vintage",
    name: "Tartaruga",
    description: "",
    material: "",
    details: [
      "Cinto em pele",
      "Várias cores",
      "Largura 4 cm",
      "Fivela dourada",
    ],
    gradient: "linear-gradient(135deg, #A5663A 0%, #7A4323 50%, #3E2213 100%)",
    accentColor: "#C88A54",
    image: "/produto3.jpeg",
  },
  {
    id: "noir-eclipse",
    name: "Eclipse",
    description: "",
    material: "",
    details: [
      "Cinto em pele",
      "Cor preta",
      "Largura 2 cm",
      "Fivela dourada",
      "Modelo com botão",
    ],
    gradient: "linear-gradient(135deg, #2B2B2B 0%, #141414 50%, #050505 100%)",
    accentColor: "#555555",
    image: "/produto4.jpeg",
  },
  {
    id: "terra-rustica",
    name: "Escaravelho",
    description: "",
    material: "",
    details: [
      "Cinto em pele",
      "Várias cores",
      "Largura 4 cm",
      "Fivela em dourado velho",
    ],
    gradient: "linear-gradient(135deg, #B2734A 0%, #8B4B2A 50%, #4A2414 100%)",
    accentColor: "#E09B62",
    image: "/produto5.jpeg",
  },
  {
    id: "desert-ember",
    name: "Alvie",
    description: "",
    material: "",
    details: [
      "Cinto em pele",
      "Castanho ou preto",
      "Largura 3,5 cm",
    ],
    gradient: "linear-gradient(135deg, #F48C4A 0%, #D26631 50%, #7C3515 100%)",
    accentColor: "#FFB27A",
    image: "/produto6.jpeg",
  },
  {
    id: "mahogany-crest",
    name: "Lua Negra",
    description: "",
    material: "",
    details: [
      "Cinto em pele preta",
      "Fivela em dourado velho",
      "Pedras em cor preta",
    ],
    gradient: "linear-gradient(135deg, #7F3B30 0%, #5B221C 50%, #321112 100%)",
    accentColor: "#C06855",
    image: "/produto7.jpeg",
  },
  {
    id: "copper-sands",
    name: "Shell",
    description: "",
    material: "",
    details: [
      "Cinto em pele",
      "Cor azul ou castanho",
      "Largura 4 cm",
      "Fivela em madrepérola",
    ],
    gradient: "linear-gradient(135deg, #C8875A 0%, #A0633F 50%, #5A2F1B 100%)",
    accentColor: "#F1B181",
    image: "/produto8.jpeg",
  },
  {
    id: "midnight-halo",
    name: "Summer Turtle",
    description: "",
    material: "",
    details: [
      "Cinto em pele cor castanha",
      "Fivela em madrepérola",
    ],
    gradient: "linear-gradient(135deg, #232323 0%, #101010 50%, #000000 100%)",
    accentColor: "#C0B28A",
    image: "/produto9.jpeg",
  },
  {
    id: "brass-orbit",
    name: "Edie",
    description: "",
    material: "",
    details: [
      "Fivela em zamac dourado ou prateado",
      "Strass em cor preta",
      "Em pele castanha ou preta",
      "Largura 4 cm",
    ],
    gradient: "linear-gradient(135deg, #C4A15B 0%, #8B6C33 50%, #473619 100%)",
    accentColor: "#E3C276",
    image: "/produto10.jpeg",
  },
  {
    id: "onyx-ridge",
    name: "Wave",
    description: "",
    material: "",
    details: [
      "Cinto em pele",
      "Largura 2 cm ou 3,5 cm",
    ],
    gradient: "linear-gradient(135deg, #3B3B3B 0%, #202020 50%, #070707 100%)",
    accentColor: "#797979",
    image: "/produto11.jpeg",
  },
  {
    id: "sandstone-loop",
    name: "Chapa",
    description: "",
    material: "",
    details: [
      "Cinto em pele",
      "Várias cores",
      "Largura 4 cm",
      "Fivela dourada",
    ],
    gradient: "linear-gradient(135deg, #E3C7A0 0%, #C79D72 50%, #8C6643 100%)",
    accentColor: "#F1D3AC",
    image: "/produto12.jpeg",
  },
  {
    id: "caramel-boulevard",
    name: "Circle",
    description: "",
    material: "",
    details: [
      "Cinto em pele",
      "Várias cores",
      "Largura 4 cm",
      "Fivela niquelada chumbo ou dourada",
    ],
    gradient: "linear-gradient(135deg, #E2A768 0%, #C17E40 50%, #7A4421 100%)",
    accentColor: "#F4BC7B",
    image: "/produto13.jpeg",
  },
  {
    id: "chestnut-parade",
    name: "Capri",
    description: "",
    material: "",
    details: [
      "Cinto em pele",
      "Várias cores",
      "Fivela em dourado velho",
    ],
    gradient: "linear-gradient(135deg, #8A4B2D 0%, #65301D 50%, #321611 100%)",
    accentColor: "#D58B5E",
    image: "/produto14.jpeg",
  },
  {
    id: "burnt-sienna-line",
    name: "Básico",
    description: "",
    material: "",
    details: [
      "Cinto em pele",
      "Várias cores",
      "Largura 2 cm",
    ],
    gradient: "linear-gradient(135deg, #C8683E 0%, #A04626 50%, #5A2414 100%)",
    accentColor: "#F58A54",
    image: "/produto15.jpeg",
  },
  {
    id: "graphite-edge",
    name: "Oval",
    description: "",
    material: "",
    details: [
      "Cinto em pele castanha, camel ou preta",
      "Fivela dourada",
      "Largura 3,5 cm",
    ],
    gradient: "linear-gradient(135deg, #4A4A4A 0%, #292929 50%, #0F0F0F 100%)",
    accentColor: "#B0B0B0",
    image: "/produto16.jpeg",
  },
  {
    id: "golden-dusk",
    name: "Turtle",
    description: "",
    material: "",
    details: [
      "Cinto em pele cor preta",
      "Fivela em madrepérola",
      "Largura: 4 cm",
    ],
    gradient: "linear-gradient(135deg, #D9A962 0%, #B57A3B 50%, #6F411D 100%)",
    accentColor: "#F0C57F",
    image: "/produto17.jpeg",
  }
];

export function getBeltById(id: string): Belt | undefined {
  return belts.find((belt) => belt.id === id);
}

export function getAllBeltIds(): string[] {
  return belts.map((belt) => belt.id);
}

const beltsEnglish: Record<string, LocalizedBeltContent> = {
  "heritage-trio": {
    name: "Westrn",
    description: "",
    material: "",
    details: [
      "Leather belt",
      "Various colours",
      "Width 4 cm",
      "Gold zamac buckle",
    ],
  },
  "amber-trail": {
    name: "Cobra",
    description: "",
    material: "",
    details: [
      "Leather belt",
      "Various colours",
      "Width 4 cm",
      "Gold buckle with black strass",
    ],
  },
  "saddle-vintage": {
    name: "Tartaruga",
    description: "",
    material: "",
    details: [
      "Leather belt",
      "Various colours",
      "Width 4 cm",
      "Gold buckle",
    ],
  },
  "noir-eclipse": {
    name: "Eclipse",
    description: "",
    material: "",
    details: [
      "Leather belt",
      "Black colour",
      "Width 2 cm",
      "Gold buckle",
      "Button model",
    ],
  },
  "terra-rustica": {
    name: "Escaravelho",
    description: "",
    material: "",
    details: [
      "Leather belt",
      "Various colours",
      "Width 4 cm",
      "Old gold buckle",
    ],
  },
  "desert-ember": {
    name: "Alvie",
    description: "",
    material: "",
    details: [
      "Leather belt",
      "Brown or black",
      "Width 3.5 cm",
    ],
  },
  "mahogany-crest": {
    name: "Lua Negra",
    description: "",
    material: "",
    details: [
      "Black leather belt",
      "Old gold buckle",
      "Black stones",
    ],
  },
  "copper-sands": {
    name: "Shell",
    description: "",
    material: "",
    details: [
      "Leather belt",
      "Blue or brown colour",
      "Width 4 cm",
      "Mother-of-pearl buckle",
    ],
  },
  "midnight-halo": {
    name: "Summer Turtle",
    description: "",
    material: "",
    details: [
      "Brown leather belt",
      "Mother-of-pearl buckle",
    ],
  },
  "brass-orbit": {
    name: "Edie",
    description: "",
    material: "",
    details: [
      "Gold or silver zamac buckle",
      "Black strass",
      "Brown or black leather",
      "Width 4 cm",
    ],
  },
  "onyx-ridge": {
    name: "Wave",
    description: "",
    material: "",
    details: [
      "Leather belt",
      "Width 2 cm or 3.5 cm",
    ],
  },
  "sandstone-loop": {
    name: "Chapa",
    description: "",
    material: "",
    details: [
      "Leather belt",
      "Various colours",
      "Width 4 cm",
      "Gold buckle",
    ],
  },
  "caramel-boulevard": {
    name: "Circle",
    description: "",
    material: "",
    details: [
      "Leather belt",
      "Various colours",
      "Width 4 cm",
      "Gunmetal nickel or gold buckle",
    ],
  },
  "chestnut-parade": {
    name: "Capri",
    description: "",
    material: "",
    details: [
      "Leather belt",
      "Various colours",
      "Old gold buckle",
    ],
  },
  "burnt-sienna-line": {
    name: "Básico",
    description: "",
    material: "",
    details: [
      "Leather belt",
      "Various colours",
      "Width 2 cm",
    ],
  },
  "graphite-edge": {
    name: "Oval",
    description: "",
    material: "",
    details: [
      "Brown, camel or black leather belt",
      "Gold buckle",
      "Width 3.5 cm",
    ],
  },
  "golden-dusk": {
    name: "Turtle",
    description: "",
    material: "",
    details: [
      "Black leather belt",
      "Mother-of-pearl buckle",
      "Width 4 cm",
    ],
  },
};

export function getLocalizedBeltContent(
  belt: Belt,
  language: "pt" | "en"
): LocalizedBeltContent {
  if (language === "en" && beltsEnglish[belt.id]) {
    return beltsEnglish[belt.id];
  }

  return {
    name: belt.name,
    description: belt.description,
    material: belt.material,
    details: belt.details,
  };
}

