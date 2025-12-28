export interface Belt {
  id: string;
  name: string;
  description: string;
  material: string;
  details: string[];
  gradient: string;
  accentColor: string;
}

export const belts: Belt[] = [
  {
    id: "tuscan-sunset",
    name: "Tuscan Sunset",
    description: "Inspired by the warm hues of Italian evenings, this belt combines rich cognac leather with subtle golden undertones. A timeless piece that transitions effortlessly from day to night.",
    material: "Italian Full-Grain Leather",
    details: [
      "Hand-stitched edges",
      "Antique brass buckle",
      "Width: 3.5 cm",
      "Made in small batches"
    ],
    gradient: "linear-gradient(135deg, #D4A574 0%, #8B5A2B 50%, #5D3A1A 100%)",
    accentColor: "#C9A962",
  },
  {
    id: "midnight-noir",
    name: "Midnight Noir",
    description: "Sleek and sophisticated, the Midnight Noir is crafted from premium black leather with a subtle matte finish. Perfect for those who appreciate understated elegance.",
    material: "Premium Calfskin",
    details: [
      "Minimalist design",
      "Matte black buckle",
      "Width: 3 cm",
      "Vegetable-tanned"
    ],
    gradient: "linear-gradient(135deg, #2C2C2C 0%, #1A1A1A 50%, #0D0D0D 100%)",
    accentColor: "#4A4A4A",
  },
  {
    id: "sahara-dream",
    name: "Sahara Dream",
    description: "Capturing the essence of desert landscapes, this belt features warm sand tones with artisanal texturing. A statement piece that tells a story.",
    material: "Nubuck Leather",
    details: [
      "Textured finish",
      "Brushed gold hardware",
      "Width: 4 cm",
      "Hand-burnished edges"
    ],
    gradient: "linear-gradient(135deg, #E8D4B8 0%, #C4A77D 50%, #8B7355 100%)",
    accentColor: "#D4AF37",
  },
  {
    id: "bordeaux-classic",
    name: "Bordeaux Classic",
    description: "Rich burgundy tones reminiscent of fine wine, this belt adds a touch of refined luxury to any ensemble. Deep, complex, and utterly sophisticated.",
    material: "Vegetable-Tanned Leather",
    details: [
      "Deep wine color",
      "Silver-toned buckle",
      "Width: 3.5 cm",
      "Ages beautifully"
    ],
    gradient: "linear-gradient(135deg, #722F37 0%, #5C1A1B 50%, #3D0C0E 100%)",
    accentColor: "#8B0000",
  },
  {
    id: "olive-grove",
    name: "Olive Grove",
    description: "Inspired by Mediterranean landscapes, this belt features deep olive tones with natural variations. Earthy, organic, and distinctly contemporary.",
    material: "Waxed Leather",
    details: [
      "Natural color variations",
      "Antique bronze buckle",
      "Width: 3 cm",
      "Weather-resistant finish"
    ],
    gradient: "linear-gradient(135deg, #6B7B3C 0%, #4A5628 50%, #2F3816 100%)",
    accentColor: "#8B8B00",
  },
  {
    id: "arctic-frost",
    name: "Arctic Frost",
    description: "A modern interpretation of classic white, featuring pearlescent undertones and impeccable craftsmanship. Bold, fresh, and undeniably chic.",
    material: "Patent Leather",
    details: [
      "Pearlescent finish",
      "Chrome buckle",
      "Width: 2.5 cm",
      "Statement piece"
    ],
    gradient: "linear-gradient(135deg, #FFFFFF 0%, #F5F5F5 30%, #E8E8E8 70%, #D3D3D3 100%)",
    accentColor: "#C0C0C0",
  },
];

export function getBeltById(id: string): Belt | undefined {
  return belts.find((belt) => belt.id === id);
}

export function getAllBeltIds(): string[] {
  return belts.map((belt) => belt.id);
}

