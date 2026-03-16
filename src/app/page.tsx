"use client";

import Hero from "@/components/Hero";
import BeltCard from "@/components/BeltCard";
import { belts } from "@/data/belts";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n";

export default function Home() {
  const { ui } = useLanguage();
  // Exibe os 3 primeiros cintos como prévia
  const previewBelts = belts.slice(0, 3);

  return (
    <>
      <Hero />

      {/* Collection Preview Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-sm tracking-[0.3em] uppercase text-accent mb-4">
              {ui.homeCollectionEyebrow}
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-6">
              {ui.homeCollectionTitle}
            </h2>
            <div className="w-16 h-px bg-accent mx-auto" />
          </div>

          {/* Belt Grid Preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {previewBelts.map((belt) => (
              <BeltCard key={belt.id} belt={belt} />
            ))}
          </div>

          {/* View All CTA */}
          <div className="text-center">
            <Link
              href="/catalogue"
              className="inline-block px-10 py-4 bg-foreground text-background font-sans text-sm tracking-[0.2em] uppercase hover:bg-accent transition-colors duration-300"
            >
              {ui.homeCollectionCta}
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6 bg-foreground/[0.02]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm tracking-[0.3em] uppercase text-accent mb-4">
            {ui.homePhilosophyEyebrow}
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-foreground mb-8 leading-relaxed">
            {ui.homePhilosophyTitle}
          </h2>
          <p className="text-muted leading-relaxed max-w-2xl mx-auto">
            {ui.homePhilosophyText}
          </p>
        </div>
      </section>
    </>
  );
}
