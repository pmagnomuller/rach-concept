import { getBeltById, getAllBeltIds } from "@/data/belts";
import { getLocalizedBeltContent } from "@/data/belts";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import BeltPageContent from "@/components/BeltPageContent";

interface BeltPageProps {
  params: Promise<{ id: string }>;
}

// Generate static paths for all belts
export async function generateStaticParams() {
  const ids = getAllBeltIds();
  return ids.map((id) => ({ id }));
}

// Generate metadata for each belt page
export async function generateMetadata({ params }: BeltPageProps): Promise<Metadata> {
  const { id } = await params;
  const belt = getBeltById(id);
  
  if (!belt) {
    return {
      title: "Cinto não encontrado / Belt Not Found | RachConcept",
    };
  }

  const beltEn = getLocalizedBeltContent(belt, "en");
  return {
    title: `${belt.name} / ${beltEn.name} | RachConcept`,
    description: `${belt.description} ${beltEn.description}`,
  };
}

export default async function BeltPage({ params }: BeltPageProps) {
  const { id } = await params;
  const belt = getBeltById(id);

  if (!belt) {
    notFound();
  }

  return <BeltPageContent belt={belt} />;
}

