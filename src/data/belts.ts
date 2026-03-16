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
    name: "Trio Clássico",
    description:
      "Uma celebração das ferragens clássicas inspiradas no estilo western, este cinto marcante combina metal esculpido com tons ricos de couro para uma peça atemporal e colecionável.",
    material: "Couro Flor Integral",
    details: [
      "Conjunto de fivelas em dourado envelhecido, polidas à mão",
      "Paleta de couro em três tons",
      "Largura: 3,2 cm",
      "Desenhado e produzido em Portugal",
    ],
    gradient: "linear-gradient(135deg, #C79A63 0%, #8A5A35 50%, #3A2414 100%)",
    accentColor: "#D9B26A",
    image: "/produto1.jpeg",
  },
  {
    id: "amber-trail",
    name: "Trilha Âmbar",
    description:
      "Couro âmbar quente com textura sutil e detalhes de fivela esculpida, ideal para valorizar o jeans ou marcar vestidos fluidos.",
    material: "Couro Curtido Vegetal",
    details: [
      "Acabamento brunido à mão",
      "Fivela e passador com acabamento em latão",
      "Largura: 3,5 cm",
      "Envelhece com pátina única",
    ],
    gradient: "linear-gradient(135deg, #E1A057 0%, #BC7332 50%, #6C3B1A 100%)",
    accentColor: "#E9B26C",
    image: "/produto2.jpeg",
  },
  {
    id: "saddle-vintage",
    name: "Sela Vintage",
    description:
      "Inspirado na tradição da selaria, este cinto traz um tom marrom sela profundo com acentos metálicos vintage para um luxo cotidiano.",
    material: "Couro Italiano Flor Integral",
    details: [
      "Pesponto contrastante",
      "Fivela em latão vintage",
      "Largura: 3,8 cm",
      "Cortado à mão e com pintura de borda",
    ],
    gradient: "linear-gradient(135deg, #A5663A 0%, #7A4323 50%, #3E2213 100%)",
    accentColor: "#C88A54",
    image: "/produto3.jpeg",
  },
  {
    id: "noir-eclipse",
    name: "Eclipse Noir",
    description:
      "Um cinto preto meia-noite elegante com ferragens marcantes que adicionam atitude imediata a looks de alfaiataria e casuais.",
    material: "Couro Bovino Premium",
    details: [
      "Acabamento em couro preto fosco",
      "Fivela esculpida em metal grafite",
      "Largura: 3 cm",
      "Toque macio e flexível",
    ],
    gradient: "linear-gradient(135deg, #2B2B2B 0%, #141414 50%, #050505 100%)",
    accentColor: "#555555",
    image: "/produto4.jpeg",
  },
  {
    id: "terra-rustica",
    name: "Terra Rustica",
    description:
      "Couro marrom terroso aquecido pelo sol, com gravação artesanal na fivela que remete às tradições feitas à mão.",
    material: "Couro Encerado",
    details: [
      "Textura levemente desgastada",
      "Fivela em tom de latão gravado",
      "Largura: 3,4 cm",
      "Acabamento encerado resistente à água",
    ],
    gradient: "linear-gradient(135deg, #B2734A 0%, #8B4B2A 50%, #4A2414 100%)",
    accentColor: "#E09B62",
    image: "/produto5.jpeg",
  },
  {
    id: "desert-ember",
    name: "Brasa do Deserto",
    description:
      "Um cinto laranja queimado vibrante que remete ao pôr do sol no deserto, finalizado com detalhes metálicos marcantes para uma proposta moderna.",
    material: "Couro de Flor Superior",
    details: [
      "Superfície lisa e encerada",
      "Fivela em dourado escovado",
      "Largura: 3,2 cm",
      "Tingimento firme em toda a pele",
    ],
    gradient: "linear-gradient(135deg, #F48C4A 0%, #D26631 50%, #7C3515 100%)",
    accentColor: "#FFB27A",
    image: "/produto6.jpeg",
  },
  {
    id: "mahogany-crest",
    name: "Brasão Mogno",
    description:
      "Tons profundos de mogno e gravação de fivela inspirada em brasões se unem em um cinto pensado para elevar o uso diário.",
    material: "Couro Curtido Vegetal",
    details: [
      "Profundidade de cor rica em múltiplos tons",
      "Fivela assinada com gravação",
      "Largura: 3,5 cm",
      "Bordas brunidas à mão",
    ],
    gradient: "linear-gradient(135deg, #7F3B30 0%, #5B221C 50%, #321112 100%)",
    accentColor: "#C06855",
    image: "/produto7.jpeg",
  },
  {
    id: "copper-sands",
    name: "Areias de Cobre",
    description:
      "Couro marrom acobreado macio com brilho suave, perfeito para adicionar calor a composições monocromáticas ou neutras.",
    material: "Couro Nobuck",
    details: [
      "Superfície aveludada e levemente pulverizada",
      "Fivela em latão envelhecido claro",
      "Largura: 3,8 cm",
      "Estrutura confortável e flexível",
    ],
    gradient: "linear-gradient(135deg, #C8875A 0%, #A0633F 50%, #5A2F1B 100%)",
    accentColor: "#F1B181",
    image: "/produto8.jpeg",
  },
  {
    id: "midnight-halo",
    name: "Halo da Meia-Noite",
    description:
      "Um cinto preto intenso emoldurado por ferragens luminosas, ideal para alfaiataria precisa e silhuetas minimalistas.",
    material: "Couro Bovino Liso",
    details: [
      "Ferragens metálicas de alto contraste",
      "Tira limpa, sem textura",
      "Largura: 3 cm",
      "Pintura de borda tonal sutil",
    ],
    gradient: "linear-gradient(135deg, #232323 0%, #101010 50%, #000000 100%)",
    accentColor: "#C0B28A",
    image: "/produto9.jpeg",
  },
  {
    id: "brass-orbit",
    name: "Órbita de Latão",
    description:
      "Uma fivela escultural em tom de latão encontra o couro estruturado, criando um cinto marcante que sustenta qualquer look.",
    material: "Couro Flor Integral",
    details: [
      "Silhueta central de fivela marcante",
      "Tira estruturada que mantém a forma",
      "Largura: 3,6 cm",
      "Produzido em tiragens limitadas",
    ],
    gradient: "linear-gradient(135deg, #C4A15B 0%, #8B6C33 50%, #473619 100%)",
    accentColor: "#E3C276",
    image: "/produto10.jpeg",
  },
  {
    id: "onyx-ridge",
    name: "Crista Ônix",
    description:
      "Couro preto texturizado com grão em relevo e fivela escurecida, pensado para profundidade e dimensão sutis.",
    material: "Couro com Grão Gravado",
    details: [
      "Padronagem de grão pronunciada",
      "Ferragens em níquel escuro",
      "Largura: 3,2 cm",
      "Construção resistente para o dia a dia",
    ],
    gradient: "linear-gradient(135deg, #3B3B3B 0%, #202020 50%, #070707 100%)",
    accentColor: "#797979",
    image: "/produto11.jpeg",
  },
  {
    id: "sandstone-loop",
    name: "Laço Arenito",
    description:
      "Um tom suave de arenito com costura tonal e ferragens delicadamente arredondadas, trazendo elegância discreta ao seu guarda-roupa.",
    material: "Couro com Efeito Camurça",
    details: [
      "Costura tonal nas bordas",
      "Fivela arredondada e polida",
      "Largura: 3,4 cm",
      "Toque macio e flexível",
    ],
    gradient: "linear-gradient(135deg, #E3C7A0 0%, #C79D72 50%, #8C6643 100%)",
    accentColor: "#F1D3AC",
    image: "/produto12.jpeg",
  },
  {
    id: "caramel-boulevard",
    name: "Boulevard Caramelo",
    description:
      "Um cinto caramelo luminoso que combina perfeitamente com jeans, alfaiataria e vestidos leves.",
    material: "Couro de Flor Superior",
    details: [
      "Cor uniforme e suave",
      "Fivela retangular clássica",
      "Largura: 3,5 cm",
      "Acabamento com bordas tom sobre tom",
    ],
    gradient: "linear-gradient(135deg, #E2A768 0%, #C17E40 50%, #7A4421 100%)",
    accentColor: "#F4BC7B",
    image: "/produto13.jpeg",
  },
  {
    id: "chestnut-parade",
    name: "Desfile Castanho",
    description:
      "Couro castanho rico, destacado por ferragens quentes para um cinto diário refinado e acessível.",
    material: "Couro Curtido Vegetal",
    details: [
      "Sombreamento sutil em dois tons",
      "Fivela em latão polido",
      "Largura: 3,7 cm",
      "Feito à mão em pequenos lotes",
    ],
    gradient: "linear-gradient(135deg, #8A4B2D 0%, #65301D 50%, #321611 100%)",
    accentColor: "#D58B5E",
    image: "/produto14.jpeg",
  },
  {
    id: "burnt-sienna-line",
    name: "Linha Siena Queimada",
    description:
      "Um cinto siena queimado marcante, com silhueta linear forte que deixa produções descontraídas instantaneamente mais elegantes.",
    material: "Couro Liso",
    details: [
      "Pesponto minimalista",
      "Fivela metálica angular",
      "Largura: 3,5 cm",
      "Acabamento com estabilidade de cor",
    ],
    gradient: "linear-gradient(135deg, #C8683E 0%, #A04626 50%, #5A2414 100%)",
    accentColor: "#F58A54",
    image: "/produto15.jpeg",
  },
  {
    id: "graphite-edge",
    name: "Borda Grafite",
    description:
      "Couro grafite escuro com bordas definidas e fivela de tom frio, pensado para um visual urbano e moderno.",
    material: "Couro Bovino",
    details: [
      "Acabamento semimate",
      "Ferragens em tom prateado frio",
      "Largura: 3 cm",
      "Bordas cortadas com precisão",
    ],
    gradient: "linear-gradient(135deg, #4A4A4A 0%, #292929 50%, #0F0F0F 100%)",
    accentColor: "#B0B0B0",
    image: "/produto16.jpeg",
  },
  {
    id: "golden-dusk",
    name: "Entardecer Dourado",
    description:
      "Couro dourado-amarronzado suave que reflete a luz com beleza, finalizado com ferragens esculpidas para uma sensação luxuosa.",
    material: "Couro Flor Integral",
    details: [
      "Acabamento de superfície que capta a luz",
      "Fivela escultural curvada",
      "Largura: 3,4 cm",
      "Feito a partir de uma peça única de couro",
    ],
    gradient: "linear-gradient(135deg, #D9A962 0%, #B57A3B 50%, #6F411D 100%)",
    accentColor: "#F0C57F",
    image: "/produto17.jpeg",
  },
  {
    id: "espresso-royale",
    name: "Expresso Royale",
    description:
      "Um cinto espresso ultra-profundo que sustenta qualquer produção, da alfaiataria impecável ao visual sofisticado de fim de semana.",
    material: "Couro Curtido Vegetal",
    details: [
      "Tom marrom-escuro intenso",
      "Acabamento com brilho sutil",
      "Largura: 3,5 cm",
      "Desenvolvido para amaciar com o tempo",
    ],
    gradient: "linear-gradient(135deg, #3A2317 0%, #23140E 50%, #0F0705 100%)",
    accentColor: "#8B5A3C",
    image: "/produto18.jpeg",
  },
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
    description:
      "A celebration of classic Western-inspired hardware, this statement belt pairs sculpted metalwork with rich leather tones for a timeless, collectible piece.",
    material: "Full-Grain Leather",
    details: [
      "Hand-polished antique gold buckle set",
      "Three-tone leather palette",
      "Width: 3.2 cm",
      "Designed in Brazil",
    ],
  },
  "amber-trail": {
    name: "Amber Trail",
    description:
      "Warm amber leather with subtle texture and sculpted buckle detailing, ideal for elevating denim or cinching a fluid dress.",
    material: "Vegetable-Tanned Leather",
    details: [
      "Hand-burnished finish",
      "Brass-finished buckle and keeper",
      "Width: 3.5 cm",
      "Ages with a unique patina",
    ],
  },
  "saddle-vintage": {
    name: "Saddle Vintage",
    description:
      "Inspired by heritage saddlery, this belt features a deep saddle-brown tone with vintage metal accents for everyday luxury.",
    material: "Italian Full-Grain Leather",
    details: [
      "Contrast topstitching",
      "Vintage brass buckle",
      "Width: 3.8 cm",
      "Hand-cut and edge-painted",
    ],
  },
  "noir-eclipse": {
    name: "Noir Eclipse",
    description:
      "A sleek midnight-black belt with dramatic metalwork that adds instant edge to tailored and casual looks alike.",
    material: "Premium Calfskin",
    details: [
      "Matte black leather finish",
      "Sculpted gunmetal buckle",
      "Width: 3 cm",
      "Smooth, flexible hand-feel",
    ],
  },
  "terra-rustica": {
    name: "Terra Rustica",
    description:
      "Earthy, sun-warmed brown leather with artisanal buckle engraving that nods to handcrafted traditions.",
    material: "Waxed Leather",
    details: [
      "Lightly distressed texture",
      "Etched brass-tone buckle",
      "Width: 3.4 cm",
      "Water-resistant waxed finish",
    ],
  },
  "desert-ember": {
    name: "Desert Ember",
    description:
      "A glowing burnt-orange belt that recalls desert sunsets, finished with bold metallic details for a modern statement.",
    material: "Top-Grain Leather",
    details: [
      "Smooth waxed surface",
      "Brushed gold buckle",
      "Width: 3.2 cm",
      "Colorfast dyed through the hide",
    ],
  },
  "mahogany-crest": {
    name: "Mahogany Crest",
    description:
      "Deep mahogany tones and crest-inspired buckle engraving come together in a belt designed for elevated everyday wear.",
    material: "Vegetable-Tanned Leather",
    details: [
      "Rich, multi-tone color depth",
      "Signature engraved buckle",
      "Width: 3.5 cm",
      "Edges burnished by hand",
    ],
  },
  "copper-sands": {
    name: "Copper Sands",
    description:
      "Soft copper-brown leather with a gentle sheen, perfect for adding warmth to monochrome or neutral outfits.",
    material: "Nubuck Leather",
    details: [
      "Powdery, velvety surface",
      "Light antique brass buckle",
      "Width: 3.8 cm",
      "Comfortable, flexible structure",
    ],
  },
  "midnight-halo": {
    name: "Midnight Halo",
    description:
      "An inky black belt framed by luminous metalwork, ideal for sharp tailoring and minimalist silhouettes.",
    material: "Smooth Calf Leather",
    details: [
      "High-contrast metal hardware",
      "Sleek, untextured strap",
      "Width: 3 cm",
      "Subtle tonal edge painting",
    ],
  },
  "brass-orbit": {
    name: "Brass Orbit",
    description:
      "A sculptural brass-tone buckle meets structured leather, creating a bold belt that anchors any look.",
    material: "Full-Grain Leather",
    details: [
      "Bold central buckle silhouette",
      "Structured strap keeps its shape",
      "Width: 3.6 cm",
      "Crafted in limited runs",
    ],
  },
  "onyx-ridge": {
    name: "Onyx Ridge",
    description:
      "Textured black leather with a ridged grain and darkened buckle, designed for subtle depth and dimension.",
    material: "Grain-Embossed Leather",
    details: [
      "Pronounced grain pattern",
      "Dark nickel hardware",
      "Width: 3.2 cm",
      "Durable, everyday construction",
    ],
  },
  "sandstone-loop": {
    name: "Sandstone Loop",
    description:
      "A soft sandstone hue with tonal stitching and gently rounded hardware, bringing an understated elegance to your wardrobe.",
    material: "Suede-Effect Leather",
    details: [
      "Tonal edge stitching",
      "Rounded, polished buckle",
      "Width: 3.4 cm",
      "Soft, flexible hand-feel",
    ],
  },
  "caramel-boulevard": {
    name: "Caramel Boulevard",
    description:
      "A luminous caramel belt that pairs beautifully with denim, tailoring, and airy dresses alike.",
    material: "Top-Grain Leather",
    details: [
      "Smooth, even color",
      "Classic rectangular buckle",
      "Width: 3.5 cm",
      "Finished with tone-on-tone edges",
    ],
  },
  "chestnut-parade": {
    name: "Chestnut Parade",
    description:
      "Rich chestnut leather accented with warm hardware for a refined yet approachable everyday belt.",
    material: "Vegetable-Tanned Leather",
    details: [
      "Subtle two-tone shading",
      "Polished brass buckle",
      "Width: 3.7 cm",
      "Handcrafted in small batches",
    ],
  },
  "burnt-sienna-line": {
    name: "Burnt Sienna Line",
    description:
      "A bold burnt-sienna belt with a strong linear silhouette that instantly sharpens relaxed outfits.",
    material: "Smooth Leather",
    details: [
      "Minimal topstitching",
      "Angular metal buckle",
      "Width: 3.5 cm",
      "Color-stable finish",
    ],
  },
  "graphite-edge": {
    name: "Graphite Edge",
    description:
      "Dark graphite leather with crisp edges and a cool-toned buckle, designed for modern, urban styling.",
    material: "Calfskin Leather",
    details: [
      "Semi-matte finish",
      "Cool silver-tone hardware",
      "Width: 3 cm",
      "Precision-cut edges",
    ],
  },
  "golden-dusk": {
    name: "Golden Dusk",
    description:
      "Soft golden-brown leather that catches the light beautifully, finished with sculpted hardware for a luxe feel.",
    material: "Full-Grain Leather",
    details: [
      "Light-catching surface finish",
      "Curved sculptural buckle",
      "Width: 3.4 cm",
      "Made from single leather piece",
    ],
  },
  "espresso-royale": {
    name: "Espresso Royale",
    description:
      "An ultra-deep espresso belt that anchors any outfit, from sharp suiting to elevated weekend wear.",
    material: "Vegetable-Tanned Leather",
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

