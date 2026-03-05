import Link from "next/link";
import Image from "next/image";
import { Belt } from "@/data/belts";

interface BeltCardProps {
  belt: Belt;
}

export default function BeltCard({ belt }: BeltCardProps) {
  return (
    <Link 
      href={`/belt/${belt.id}`}
      className="group block"
    >
      <article className="relative overflow-hidden">
        {/* Belt Image */}
        <div
          className="aspect-[3/4] w-full relative overflow-hidden rounded-sm border border-foreground/20"
          style={{ background: belt.gradient }}
        >
          <Image
            src={belt.image}
            alt={belt.name}
            fill
            sizes="(min-width: 1024px) 320px, (min-width: 768px) 40vw, 80vw"
            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />

          {/* Bottom overlay to strongly cover any text on the image */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background via-background/90 to-transparent" />

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-all duration-500" />

          {/* Quick View Text */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="px-6 py-2 bg-background/95 text-foreground text-xs tracking-[0.2em] uppercase font-medium">
              View Details
            </span>
          </div>
        </div>

        {/* Belt Info */}
        <div className="pt-5 pb-2">
          <h3 className="font-serif text-xl font-medium text-foreground group-hover:text-accent transition-colors duration-300">
            {belt.name}
          </h3>
          <p className="text-sm text-muted mt-1 tracking-wide">
            {belt.material}
          </p>
        </div>
      </article>
    </Link>
  );
}

