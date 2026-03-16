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

export const belts: Belt[] = [
  {
    id: "heritage-trio",
    name: "Cinto Western",
    description:
      "Um cinto intemporal para usar com vestidos e jeans de modo descontraido.",
    material: "Cinto em pele",
    details: [
      "Varias cores",
      "Largura: 4 cm",
      "Fivela em zamac dourada",
    ],
    gradient: "linear-gradient(135deg, #C79A63 0%, #8A5A35 50%, #3A2414 100%)",
    accentColor: "#D9B26A",
    image: "/produto1.jpeg",
  },
  {
    id: "amber-trail",
    name: "Cinto cobra",
    description:
      "Um cinto simples mas sofisticado para usar no dia a dia ou como peca de destaque.",
    material: "Cinto em pele",
    details: [
      "Varias cores",
      "Largura: 4 cm",
      "Fivela dourada com strass em cor preta",
    ],
    gradient: "linear-gradient(135deg, #E1A057 0%, #BC7332 50%, #6C3B1A 100%)",
    accentColor: "#E9B26C",
    image: "/produto2.jpeg",
  },
  {
    id: "saddle-vintage",
    name: "Cinto tartaruga",
    description:
      "Um cinto versatil para o dia a dia, com acabamento classico e elegante.",
    material: "Cinto em pele",
    details: [
      "Varias cores",
      "Largura: 4 cm",
      "Fivela dourada",
    ],
    gradient: "linear-gradient(135deg, #A5663A 0%, #7A4323 50%, #3E2213 100%)",
    accentColor: "#C88A54",
    image: "/produto3.jpeg",
  },
  {
    id: "noir-eclipse",
    name: "Cinto eclipse (botao)",
    description: "Cinto elegante.",
    material: "Cinto em pele preta",
    details: [
      "Cor: preto",
      "Largura: 2 cm",
      "Fivela dourada",
    ],
    gradient: "linear-gradient(135deg, #2B2B2B 0%, #141414 50%, #050505 100%)",
    accentColor: "#555555",
    image: "/produto4.jpeg",
  },
  {
    id: "terra-rustica",
    name: "Cinto Escaravelho",
    description: "Um cinto em pele com identidade forte e acabamento classico.",
    material: "Cinto em pele",
    details: [
      "Varias cores",
      "Largura: 4 cm",
      "Fivela dourado velho",
    ],
    gradient: "linear-gradient(135deg, #B2734A 0%, #8B4B2A 50%, #4A2414 100%)",
    accentColor: "#E09B62",
    image: "/produto5.jpeg",
  },
  {
    id: "desert-ember",
    name: "Cinto Alvie",
    description: "Um modelo classico e versatil para usar em diferentes ocasioes.",
    material: "Cinto em pele",
    details: [
      "Castanho ou preto",
      "Largura: 3,5 cm",
    ],
    gradient: "linear-gradient(135deg, #F48C4A 0%, #D26631 50%, #7C3515 100%)",
    accentColor: "#FFB27A",
    image: "/produto6.jpeg",
  },
  {
    id: "mahogany-crest",
    name: "Cinto lua negra",
    description:
      "Um cinto marcante em pele preta, com toque sofisticado e contemporaneo.",
    material: "Cinto em pele preta",
    details: [
      "Fivela dourado velho com pedras cor preto",
    ],
    gradient: "linear-gradient(135deg, #7F3B30 0%, #5B221C 50%, #321112 100%)",
    accentColor: "#C06855",
    image: "/produto7.jpeg",
  },
  {
    id: "copper-sands",
    name: "Cinto shell",
    description:
      "Um cinto em pele com acabamento elegante e fivela de madreperola.",
    material: "Cinto em pele",
    details: [
      "Cor azul ou castanho",
      "Largura: 4 cm",
      "Fivela em madreperola",
    ],
    gradient: "linear-gradient(135deg, #C8875A 0%, #A0633F 50%, #5A2F1B 100%)",
    accentColor: "#F1B181",
    image: "/produto8.jpeg",
  },
  {
    id: "midnight-halo",
    name: "Cinto Summer Turtle",
    description: "Um cinto em pele castanha com visual leve e acabamento sofisticado.",
    material: "Cinto em pele cor castanha",
    details: [
      "Fivela em madreperola",
    ],
    gradient: "linear-gradient(135deg, #232323 0%, #101010 50%, #000000 100%)",
    accentColor: "#C0B28A",
    image: "/produto9.jpeg",
  },
  {
    id: "brass-orbit",
    name: "Cinto edie",
    description:
      "Um cinto com presenca, ideal para elevar o look com um toque de brilho.",
    material: "Em pele castanha ou preta",
    details: [
      "Fivela em zamac dourado ou prateado com strass em cor preta",
      "Largura: 4 cm",
    ],
    gradient: "linear-gradient(135deg, #C4A15B 0%, #8B6C33 50%, #473619 100%)",
    accentColor: "#E3C276",
    image: "/produto10.jpeg",
  },
  {
    id: "onyx-ridge",
    name: "Cinto Wave",
    description: "Modelo versatil em pele, ideal para diferentes estilos.",
    material: "Cinto em pele",
    details: [
      "Largura: 2 cm / 3,5 cm",
    ],
    gradient: "linear-gradient(135deg, #3B3B3B 0%, #202020 50%, #070707 100%)",
    accentColor: "#797979",
    image: "/produto11.jpeg",
  },
  {
    id: "sandstone-loop",
    name: "Cinto Chapa",
    description:
      "Um cinto em pele com acabamento classico e versatil para o dia a dia.",
    material: "Cinto em pele varias cores",
    details: [
      "Fivela dourada",
      "Largura: 4 cm",
    ],
    gradient: "linear-gradient(135deg, #E3C7A0 0%, #C79D72 50%, #8C6643 100%)",
    accentColor: "#F1D3AC",
    image: "/produto12.jpeg",
  },
  {
    id: "caramel-boulevard",
    name: "Cinto Circle",
    description: "Um cinto em pele com design moderno e acabamento metalico elegante.",
    material: "Cinto em pele varias cores",
    details: [
      "Fivela niquelada chumbo ou dourada",
      "Largura: 4 cm",
    ],
    gradient: "linear-gradient(135deg, #E2A768 0%, #C17E40 50%, #7A4421 100%)",
    accentColor: "#F4BC7B",
    image: "/produto13.jpeg",
  },
  {
    id: "chestnut-parade",
    name: "Cinto capri",
    description: "Um cinto em pele classico, com toque vintage no acabamento da fivela.",
    material: "Cinto em pele varias cores",
    details: [
      "Fivela dourado velho",
    ],
    gradient: "linear-gradient(135deg, #8A4B2D 0%, #65301D 50%, #321611 100%)",
    accentColor: "#D58B5E",
    image: "/produto14.jpeg",
  },
  {
    id: "burnt-sienna-line",
    name: "Cinto basico",
    description: "Essencial do guarda-roupa para composicoes simples e elegantes.",
    material: "Em pele varias cores",
    details: [
      "Largura: 2 cm",
    ],
    gradient: "linear-gradient(135deg, #C8683E 0%, #A04626 50%, #5A2414 100%)",
    accentColor: "#F58A54",
    image: "/produto15.jpeg",
  },
  {
    id: "graphite-edge",
    name: "Cinto Oval",
    description: "Modelo classico em tons neutros, facil de combinar em qualquer look.",
    material: "Cinto em pele castanha camel ou preta",
    details: [
      "Fivela dourada",
      "Largura: 3,5 cm",
    ],
    gradient: "linear-gradient(135deg, #4A4A4A 0%, #292929 50%, #0F0F0F 100%)",
    accentColor: "#B0B0B0",
    image: "/produto16.jpeg",
  },
  {
    id: "golden-dusk",
    name: "Cinto turtle",
    description: "Cinto em pele preta com acabamento elegante em madreperola.",
    material: "Cinto em pele preta",
    details: [
      "Fivela madreperola",
      "Largura: 4 cm",
    ],
    gradient: "linear-gradient(135deg, #D9A962 0%, #B57A3B 50%, #6F411D 100%)",
    accentColor: "#F0C57F",
    image: "/produto17.jpeg",
  },
];

export function getBeltById(id: string): Belt | undefined {
  return belts.find((belt) => belt.id === id);
}

export function getAllBeltIds(): string[] {
  return belts.map((belt) => belt.id);
}

