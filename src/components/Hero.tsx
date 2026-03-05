import Link from "next/link";
import Image from "next/image";
import heroImage from "../../public/hero_image.jpeg";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 40px,
              currentColor 40px,
              currentColor 41px
            )`,
          }}
        />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-32 h-32 border border-accent/20 rounded-full" />
      <div className="absolute bottom-1/4 right-10 w-48 h-48 border border-accent/10 rounded-full" />
      <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-accent/40 rounded-full" />
      <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-accent/30 rounded-full" />

      <div className="text-center relative z-10">
        {/* Logo */}
        <div className="mb-8">
          <Image
            src="/logo.svg"
            alt="RachConcept"
            width={400}
            height={150}
            priority
            className="w-64 md:w-80 lg:w-96 h-auto"
          />
        </div>

        {/* Tagline */}
        <p className="font-serif text-2xl md:text-3xl lg:text-4xl font-light italic text-foreground mb-12">
          Just add a belt!
        </p>

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="w-16 h-px bg-accent/50" />
          <div className="w-2 h-2 rotate-45 border border-accent" />
          <div className="w-16 h-px bg-accent/50" />
        </div>

        {/* CTA */}
        <Link
          href="/catalogue"
          className="inline-block px-10 py-4 border-2 border-foreground text-foreground font-sans text-sm tracking-[0.2em] uppercase hover:bg-foreground hover:text-background transition-all duration-300"
        >
          View Collection
        </Link>

        {/* Hero Image */}
        <div className="mt-16 flex justify-center">
          <div className="relative w-full max-w-xl aspect-[4/5] overflow-hidden rounded-3xl border border-foreground/10 shadow-[0_40px_80px_rgba(0,0,0,0.18)] bg-foreground/[0.02]">
            <Image
              src={heroImage}
              alt="Close-up of a RachConcept belt styled with a silk top"
              fill
              priority
              sizes="(min-width: 1024px) 480px, 80vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-muted"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
