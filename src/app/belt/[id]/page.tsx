import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getAllBeltSlugs, getBeltBySlug } from "@/lib/sanity.queries";

interface BeltPageProps {
  params: Promise<{ id: string }>;
}

// Generate static paths for all belts
export async function generateStaticParams() {
  const ids = await getAllBeltSlugs();
  return ids.map((id) => ({ id }));
}

// Generate metadata for each belt page
export async function generateMetadata({ params }: BeltPageProps): Promise<Metadata> {
  const { id } = await params;
  const belt = await getBeltBySlug(id);

  if (!belt) {
    return {
      title: "Belt Not Found | RachConcept",
    };
  }

  return {
    title: `${belt.name} | RachConcept`,
    description: belt.description,
  };
}

export default async function BeltPage({ params }: BeltPageProps) {
  const { id } = await params;
  const belt = await getBeltBySlug(id);

  if (!belt) {
    notFound();
  }

  return (
    <div className="pt-28 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb */}
        <nav className="mb-12">
          <ol className="flex items-center gap-2 text-sm">
            <li>
              <Link href="/" className="text-muted hover:text-foreground transition-colors">
                Home
              </Link>
            </li>
            <li className="text-muted">/</li>
            <li>
              <Link href="/catalogue" className="text-muted hover:text-foreground transition-colors">
                Catalogue
              </Link>
            </li>
            <li className="text-muted">/</li>
            <li className="text-foreground">{belt.name}</li>
          </ol>
        </nav>

        {/* Product Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Product Image */}
          <div className="relative">
            <div
              className="aspect-[4/5] w-full rounded-sm overflow-hidden bg-foreground/[0.02]"
              style={{ background: belt.gradient }}
            >
              <Image
                src={belt.image}
                alt={belt.name}
                fill
                sizes="(min-width: 1024px) 520px, 90vw"
                className="object-cover object-center"
              />

              {/* Bottom overlay to strongly cover any text on the image */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-background via-background/90 to-transparent" />

              {/* Decorative Frame */}
              <div className="pointer-events-none absolute inset-6 border border-white/40 rounded-sm mix-blend-soft-light" />
            </div>
          </div>

          {/* Product Details */}
          <div className="flex flex-col justify-center">
            <p className="text-sm tracking-[0.3em] uppercase text-accent mb-4">
              {belt.material}
            </p>
            
            <h1 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-6">
              {belt.name}
            </h1>

            <div className="w-16 h-px bg-accent mb-8" />

            <p className="text-muted leading-relaxed mb-10">
              {belt.description}
            </p>

            {/* Details List */}
            <div className="mb-10">
              <h3 className="text-sm tracking-[0.2em] uppercase text-foreground mb-4">
                Details
              </h3>
              <ul className="space-y-2">
                {belt.details.map((detail, index) => (
                  <li key={index} className="flex items-center gap-3 text-muted">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>

            {/* More Details / Instagram */}
            <div className="mb-10">
              <h3 className="text-sm tracking-[0.2em] uppercase text-foreground mb-3">
                More details
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                For additional product information, styling inspiration, and the latest releases, visit our{" "}
                <a
                  href="https://www.instagram.com/rachconcept.store/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 decoration-accent hover:text-accent"
                >
                  Instagram
                </a>
                .
              </p>
            </div>

            {/* Back to Collection */}
            <Link
              href="/catalogue"
              className="inline-flex items-center gap-3 text-sm tracking-[0.15em] uppercase text-foreground hover:text-accent transition-colors group"
            >
              <svg 
                className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={1.5} 
                  d="M10 19l-7-7m0 0l7-7m-7 7h18" 
                />
              </svg>
              Back to Collection
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

