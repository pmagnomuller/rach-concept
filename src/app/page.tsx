import Hero from "@/components/Hero";
import BeltCard from "@/components/BeltCard";
import Link from "next/link";
import { getHero, getBelts } from "@/lib/sanity.queries";

export default async function Home() {
  const [heroContent, allBelts] = await Promise.all([getHero(), getBelts()]);
  const previewBelts = allBelts.slice(0, 3);

  return (
    <>
      <Hero content={heroContent} />

      {/* Collection Preview Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-sm tracking-[0.3em] uppercase text-accent mb-4">
              The Collection
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-6">
              Handcrafted Excellence
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
              View Full Collection
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6 bg-foreground/[0.02]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm tracking-[0.3em] uppercase text-accent mb-4">
            Our Philosophy
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-foreground mb-8 leading-relaxed">
            Every outfit deserves that perfect finishing touch
          </h2>
          <p className="text-muted leading-relaxed max-w-2xl mx-auto">
            At RachConcept, we believe that accessories are not merely additions—they are 
            transformations. Each belt in our collection is thoughtfully designed to elevate 
            your style, adding that essential element of sophistication and personality.
          </p>
        </div>
      </section>
    </>
  );
}
