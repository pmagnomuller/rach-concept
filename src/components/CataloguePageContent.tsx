"use client";

import BeltCard from "@/components/BeltCard";
import { belts } from "@/data/belts";
import { useLanguage } from "@/lib/i18n";

export default function CataloguePageContent() {
  const { ui } = useLanguage();

  return (
    <div className="pt-28 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-sm tracking-[0.3em] uppercase text-accent mb-4">
            {ui.catalogueEyebrow}
          </p>
          <h1 className="font-serif text-5xl md:text-6xl font-light text-foreground mb-6">
            {ui.catalogueTitle}
          </h1>
          <p className="text-muted max-w-xl mx-auto leading-relaxed">
            {ui.catalogueDescription}
          </p>
          <div className="w-24 h-px bg-accent mx-auto mt-8" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {belts.map((belt) => (
            <BeltCard key={belt.id} belt={belt} />
          ))}
        </div>

        <div className="flex items-center justify-center gap-4 mt-20">
          <div className="w-16 h-px bg-border" />
          <div className="w-2 h-2 rotate-45 border border-accent" />
          <div className="w-16 h-px bg-border" />
        </div>
      </div>
    </div>
  );
}
