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
    name: "Westrn",
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
    name: "Entardecer Dourado",
    description: "",
    material: "",
    details: [
      "Acabamento de superfície que capta a luz",
      "Fivela escultural curvada",
      "Largura: 3,4 cm",
      "Feito a partir de uma peça única de couro",
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
    name: "Heritage Trio",
    description: "",
    material: "",
    details: [
      "Hand-polished antique gold buckle set",
      "Three-tone leather palette",
      "Width: 3.2 cm",
      "Designed in Brazil",
    ],
  },
  "amber-trail": {
    name: "Amber Trail",
    description: "",
    material: "",
    details: [
      "Hand-burnished finish",
      "Brass-finished buckle and keeper",
      "Width: 3.5 cm",
      "Ages with a unique patina",
    ],
  },
  "saddle-vintage": {
    name: "Saddle Vintage",
    description: "",
    material: "",
    details: [
      "Contrast topstitching",
      "Vintage brass buckle",
      "Width: 3.8 cm",
      "Hand-cut and edge-painted",
    ],
  },
  "noir-eclipse": {
    name: "Noir Eclipse",
    description: "",
    material: "",
    details: [
      "Matte black leather finish",
      "Sculpted gunmetal buckle",
      "Width: 3 cm",
      "Smooth, flexible hand-feel",
    ],
  },
  "terra-rustica": {
    name: "Terra Rustica",
    description: "",
    material: "",
    details: [
      "Lightly distressed texture",
      "Etched brass-tone buckle",
      "Width: 3.4 cm",
      "Water-resistant waxed finish",
    ],
  },
  "desert-ember": {
    name: "Desert Ember",
    description: "",
    material: "",
    details: [
      "Smooth waxed surface",
      "Brushed gold buckle",
      "Width: 3.2 cm",
      "Colorfast dyed through the hide",
    ],
  },
  "mahogany-crest": {
    name: "Mahogany Crest",
    description: "",
    material: "",
    details: [
      "Rich, multi-tone color depth",
      "Signature engraved buckle",
      "Width: 3.5 cm",
      "Edges burnished by hand",
    ],
  },
  "copper-sands": {
    name: "Copper Sands",
    description: "",
    material: "",
    details: [
      "Powdery, velvety surface",
      "Light antique brass buckle",
      "Width: 3.8 cm",
      "Comfortable, flexible structure",
    ],
  },
  "midnight-halo": {
    name: "Midnight Halo",
    description: "",
    material: "",
    details: [
      "High-contrast metal hardware",
      "Sleek, untextured strap",
      "Width: 3 cm",
      "Subtle tonal edge painting",
    ],
  },
  "brass-orbit": {
    name: "Brass Orbit",
    description: "",
    material: "",
    details: [
      "Bold central buckle silhouette",
      "Structured strap keeps its shape",
      "Width: 3.6 cm",
      "Crafted in limited runs",
    ],
  },
  "onyx-ridge": {
    name: "Onyx Ridge",
    description: "",
    material: "",
    details: [
      "Pronounced grain pattern",
      "Dark nickel hardware",
      "Width: 3.2 cm",
      "Durable, everyday construction",
    ],
  },
  "sandstone-loop": {
    name: "Sandstone Loop",
    description: "",
    material: "",
    details: [
      "Tonal edge stitching",
      "Rounded, polished buckle",
      "Width: 3.4 cm",
      "Soft, flexible hand-feel",
    ],
  },
  "caramel-boulevard": {
    name: "Caramel Boulevard",
    description: "",
    material: "",
    details: [
      "Smooth, even color",
      "Classic rectangular buckle",
      "Width: 3.5 cm",
      "Finished with tone-on-tone edges",
    ],
  },
  "chestnut-parade": {
    name: "Chestnut Parade",
    description: "",
    material: "",
    details: [
      "Subtle two-tone shading",
      "Polished brass buckle",
      "Width: 3.7 cm",
      "Handcrafted in small batches",
    ],
  },
  "burnt-sienna-line": {
    name: "Burnt Sienna Line",
    description: "",
    material: "",
    details: [
      "Minimal topstitching",
      "Angular metal buckle",
      "Width: 3.5 cm",
      "Color-stable finish",
    ],
  },
  "graphite-edge": {
    name: "Graphite Edge",
    description: "",
    material: "",
    details: [
      "Semi-matte finish",
      "Cool silver-tone hardware",
      "Width: 3 cm",
      "Precision-cut edges",
    ],
  },
  "golden-dusk": {
    name: "Golden Dusk",
    description: "",
    material: "",
    details: [
      "Light-catching surface finish",
      "Curved sculptural buckle",
      "Width: 3.4 cm",
      "Made from single leather piece",
    ],
  },
  "espresso-royale": {
    name: "Espresso Royale",
    description: "",
    material: "",
    details: [
      "Intense dark-brown tone",
      "Subtle sheen finish",
      "Width: 3.5 cm",
      "Built to soften with time",
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

