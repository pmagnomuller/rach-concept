import CataloguePageContent from "@/components/CataloguePageContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Catálogo / Catalogue | RachConcept",
  description:
    "Explore a nossa coleção completa de cintos artesanais. Explore our complete handcrafted belt collection.",
};

export default function CataloguePage() {
  return <CataloguePageContent />;
}

