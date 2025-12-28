import { getBeltById, getAllBeltIds } from "@/data/belts";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";

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
  const belt = getBeltById(id);

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
              className="aspect-[4/5] w-full rounded-sm overflow-hidden"
              style={{ background: belt.gradient }}
            >
              {/* Belt Pattern Decoration */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div 
                  className="w-3/4 h-8 rounded-full opacity-30"
                  style={{ background: belt.accentColor }}
                />
              </div>

              {/* Decorative Frame */}
              <div className="absolute inset-6 border border-white/20 rounded-sm" />
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

