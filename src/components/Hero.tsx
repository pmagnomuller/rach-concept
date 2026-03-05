import Link from "next/link";
import Image from "next/image";
import heroImage from "../../public/hero_image_no_text.jpeg";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-background">
      {/* Soft background texture */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-background" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `radial-gradient(circle at 0 0, rgba(255,255,255,0.06) 0, transparent 55%), radial-gradient(circle at 100% 100%, rgba(255,255,255,0.04) 0, transparent 55%)`,
          }}
        />
      </div>

      {/* Orbital accents */}
      <div className="pointer-events-none absolute -left-32 top-40 h-80 w-80 rounded-full border border-accent/15" />
      <div className="pointer-events-none absolute -right-24 bottom-20 h-96 w-96 rounded-full border border-accent/10" />
      <div className="pointer-events-none absolute left-1/3 top-1/4 h-4 w-4 rounded-full bg-accent/50 blur-[1px]" />
      <div className="pointer-events-none absolute right-1/4 bottom-1/3 h-3 w-3 rounded-full bg-accent/40" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col-reverse items-center gap-12 px-6 pb-20 pt-28 lg:flex-row lg:gap-20 lg:pb-24 lg:pt-32">
        {/* Text / brand column */}
        <div className="w-full text-center lg:w-1/2 lg:text-left">
          <div className="mb-10 inline-flex items-center justify-center rounded-full border border-foreground/10 bg-background/60 px-4 py-1 text-xs uppercase tracking-[0.25em] text-muted-foreground backdrop-blur-sm lg:justify-start">
            Everyday looks, elevated
          </div>

          <div className="mb-8">
            <Image
              src="/logo.svg"
              alt="RachConcept"
              width={420}
              height={160}
              priority
              className="mx-auto h-auto w-64 md:w-80 lg:mx-0 lg:w-[22rem]"
            />
          </div>

          <p className="mb-10 font-serif text-2xl font-light italic text-foreground md:text-3xl lg:text-4xl">
            Just add a belt<span className="text-accent">.</span>
          </p>

          <p className="mx-auto mb-12 max-w-md text-sm text-muted-foreground md:text-base lg:mx-0">
            Sculptural buckles, rich leathers, and pieces designed to sit at the
            heart of your wardrobe—not just at your waist.
          </p>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <Link
              href="/catalogue"
              className="inline-flex items-center justify-center rounded-full bg-foreground px-10 py-3 text-xs font-medium uppercase tracking-[0.22em] text-background shadow-[0_18px_40px_rgba(0,0,0,0.35)] transition-transform transition-shadow duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_60px_rgba(0,0,0,0.45)]"
            >
              View collection
            </Link>
            <span className="text-xs text-muted-foreground md:text-sm">
              Hand-finished belts, made in Portugal.
            </span>
          </div>
        </div>

        {/* Hero image column */}
        <div className="relative w-full lg:w-1/2">
          <div className="pointer-events-none absolute -inset-8 -z-10 rounded-[46px] border border-foreground/5" />
          <div className="pointer-events-none absolute -bottom-10 left-10 h-24 w-24 rounded-full bg-accent/15 blur-3xl" />

          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[40px] bg-foreground/5 shadow-[0_40px_120px_rgba(0,0,0,0.45)]">
            <Image
              src={heroImage}
              alt="Close-up of a RachConcept belt styled with a silk top"
              fill
              priority
              sizes="(min-width: 1024px) 640px, 92vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="h-6 w-6 text-muted"
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
